import os
import pandas as pd
import numpy as np
from datetime import datetime
from sklearn.metrics import (
    confusion_matrix,
    precision_score,
    recall_score,
    roc_auc_score,
)
from xgboost import XGBClassifier
from scipy.stats import wilcoxon
from joblib import Parallel, delayed
from imblearn.under_sampling import RandomUnderSampler
from sklearn.model_selection import train_test_split

FOLD_BOUNDARIES = {
    1: datetime(2022, 11, 30),  # Captures PoCs up to this date (~30 samples)
    2: datetime(2023, 8, 10),  # Captures the next burst of PoCs (~32 samples)
    3: datetime(2024, 5, 13),  # Captures the rest of the 2023 PoCs (~37 samples)
    4: datetime(
        2025, 12, 31
    ),  # Captures all remaining PoCs from 2024 onwards (~29 samples)
}
COLUMNS_TO_DROP = [
    "exit_code",
    "execution_time_ms",
    "peak_memory_mb",
    "crash_signal",
    "error",
    "log_kb",
    "store_ic_count",
    "bucket_misc_count",
    "elem_kind_holey",
    "total_ic_count",
    "map_create_count",
    "load_ic_count",
]


def load_and_merge_pos_fold(fold_path):
    static = pd.read_csv(os.path.join(fold_path, "features_static.csv"))
    dynamic = pd.read_csv(os.path.join(fold_path, "features_dynamic.csv"))
    # Remove TIMEOUT rows
    if "error" in dynamic.columns:
        dynamic = dynamic[dynamic["error"] != "TIMEOUT"]
    static = static.drop(columns=["target"], errors="ignore")
    dynamic = dynamic.drop(columns=["target"], errors="ignore")
    dynamic = dynamic.drop(columns=COLUMNS_TO_DROP, errors="ignore")
    merged = pd.merge(static, dynamic, on="filename")
    merged["target"] = 0
    return merged


def load_and_process_neg(static_path, dynamic_path):
    static = pd.read_csv(static_path)
    dynamic = pd.read_csv(dynamic_path)

    dynamic["issue_report_date"] = pd.to_datetime(
        dynamic["issue_report_date"], errors="coerce"
    )
    static = static.drop(columns=["target"], errors="ignore")
    dynamic = dynamic.drop(columns=["target"], errors="ignore")
    dynamic = dynamic.drop(columns=COLUMNS_TO_DROP, errors="ignore")
    merged = pd.merge(static, dynamic, on="filename")
    merged["target"] = 1

    def assign_fold(date):
        for fold, cutoff in FOLD_BOUNDARIES.items():
            if date <= cutoff:
                return fold
        return 4

    merged["fold"] = merged["issue_report_date"].apply(assign_fold)
    return merged


def permutation_importance(model, X_test, y_test):
    baseline = roc_auc_score(y_test, model.predict_proba(X_test)[:, 1])
    drops = {}
    for col in X_test.columns:
        X_permuted = X_test.copy()
        X_permuted[col] = np.random.permutation(X_permuted[col].values)
        score = roc_auc_score(y_test, model.predict_proba(X_permuted)[:, 1])
        drops[col] = baseline - score
    return sorted(drops.items(), key=lambda x: -x[1])


def encode_categorical(train_df, test_df):
    for col in train_df.columns:
        if train_df[col].dtype == "object":
            unique_vals = train_df[col].dropna().unique()
            if set(unique_vals).issubset({"True", "False", "true", "false"}):
                mapping = {"True": 1, "False": 0, "true": 1, "false": 0}
                train_df[col] = train_df[col].map(mapping).astype(int)
                test_df[col] = test_df[col].map(mapping).fillna(0).astype(int)
            else:
                categories = train_df[col].astype("category").cat.categories
                train_df[col] = train_df[col].astype("category").cat.codes
                test_df[col] = pd.Categorical(test_df[col], categories=categories).codes
                test_df[col] = test_df[col].replace(-1, 0)  # unknown categories → 0
    return train_df, test_df


def find_perfect_features(X, y):
    suspicious = []
    for col in X.columns:
        vals_pos = X.loc[y == 1, col]
        vals_neg = X.loc[y == 0, col]

        # Check if feature perfectly separates
        if (
            vals_pos.nunique() == 1
            and vals_neg.nunique() == 1
            and vals_pos.iloc[0] != vals_neg.iloc[0]
        ):
            suspicious.append(col)
    return suspicious


def run_model_cv(pos_folds, neg_df, feature_set_name, feature_cols, random_seed=42):
    np.random.seed(random_seed)
    results = {"fold": [], "precision": [], "recall": [], "false_alarm": []}

    for fold in range(2, 5):

        train_pos = pd.concat([pos_folds[i - 1] for i in range(1, fold)]).reset_index(
            drop=True
        )
        train_neg = neg_df[neg_df["fold"] < fold].reset_index(drop=True)

        test_pos = pos_folds[fold - 1].reset_index(drop=True)
        test_neg = neg_df[neg_df["fold"] == fold].reset_index(drop=True)

        train = pd.concat([train_pos, train_neg])
        test = pd.concat([test_pos, test_neg])

        # Subsample train to 90%, stratified by 'target'
        train, _ = train_test_split(
            train, train_size=0.9, random_state=random_seed, stratify=train["target"]
        )

        # Subsample test to 90%, stratified by 'target'
        test, _ = train_test_split(
            test, train_size=0.9, random_state=random_seed + 1, stratify=test["target"]
        )
        common_features = [
            f for f in feature_cols if f in train.columns and f in test.columns
        ]
        X_train = train[common_features].fillna(0)
        X_test = test[common_features].fillna(0)
        y_train = train["target"]
        y_test = test["target"]

        X_train, X_test = encode_categorical(X_train, X_test)

        # print(f"{feature_set_name}---------------------------------------\n")
        culprit_scores = {}
        for col in X_train.columns:
            try:
                auc = roc_auc_score(y_train, X_train[col])
                culprit_scores[col] = abs(auc - 0.5)  # deviation from random
            except:
                pass  # skip constant features

        for col in X_train.columns:
            train_uniques = X_train[col].nunique()
            test_uniques = X_test[col].nunique()

        if feature_set_name == "random":
            random_probs = np.random.rand(len(y_test))
            y_pred = (random_probs > 0.5).astype(int)
        elif feature_set_name == "random_features":
            if len(common_features) == 0:
                random_probs = np.random.rand(len(y_test))
                y_pred = (random_probs > 0.5).astype(int)
            else:
                model = XGBClassifier(
                    n_estimators=100,
                    tree_method="hist",
                    random_state=random_seed,
                    verbosity=0,
                    eval_metric="aucpr",
                    scale_pos_weight=(y_train == 0).sum()
                    / max(1, (y_train == 1).sum()),
                    n_jobs=1,
                )
                model.fit(X_train, y_train)
                mean_prob = model.predict_proba(X_test)[:, 1].mean()
                random_probs = np.random.rand(len(y_test))
                y_pred = (random_probs < mean_prob).astype(int)
        else:
            model = XGBClassifier(
                n_estimators=100,
                random_state=random_seed,
                tree_method="hist",
                verbosity=0,
                eval_metric="aucpr",
                scale_pos_weight=(y_train == 0).sum() / max(1, (y_train == 1).sum()),
                n_jobs=1,
            )
            model.fit(X_train, y_train)
            y_pred = model.predict(X_test)
            permutation_importance_scores = permutation_importance(
                model, X_test, y_test
            )
            importance = model.get_booster().get_score(importance_type="gain")

            # Convert to DataFrame for sorting
            importance_df = pd.DataFrame(
                {"feature": list(importance.keys()), "gain": list(importance.values())}
            ).sort_values(by="gain", ascending=False)

        precision = precision_score(y_test, y_pred, zero_division=0)
        recall = recall_score(y_test, y_pred, zero_division=0)
        cm = confusion_matrix(y_test, y_pred)
        if cm.shape == (2, 2):
            tn, fp, fn, tp = cm.ravel()
            false_alarm = fp / (fp + tn) if (fp + tn) else 0
        else:
            false_alarm = 0

        results["fold"].append(fold)
        results["precision"].append(precision)
        results["recall"].append(recall)
        results["false_alarm"].append(false_alarm)

    return results


def run_single_run(args):
    method, features, run, pos_folds, neg_df = args
    res = run_model_cv(pos_folds, neg_df, method, features, random_seed=run)
    return method, res


def perform_wilcoxon_tests(all_results, baseline_method="random"):
    p_values = {}
    baseline = all_results[baseline_method]
    for method, metrics in all_results.items():
        if method == baseline_method:
            continue
        p_values[method] = {}
        for metric in ["precision", "recall", "false_alarm"]:
            baseline_scores = baseline[metric].flatten()
            method_scores = metrics[metric].flatten()
            try:
                stat, p = wilcoxon(method_scores, baseline_scores)
            except ValueError:
                p = 1.0
            p_values[method][metric] = p
    return p_values


if __name__ == "__main__":
    pos_folds = [load_and_merge_pos_fold(f"folds/fold_{i}") for i in range(1, 5)]
    neg_df = load_and_process_neg("features_static_neg.csv", "features_dynamic_neg.csv")
    # Load original static and dynamic feature column names from one fold
    static_cols = pd.read_csv("folds/fold_1/features_static.csv").columns.tolist()
    dynamic_df = pd.read_csv("folds/fold_1/features_dynamic.csv")
    dynamic_df = dynamic_df.drop(columns=COLUMNS_TO_DROP, errors="ignore")
    dynamic_cols = dynamic_df.columns.tolist()

    # Remove keys and irrelevant columns
    keys = ["filename", "target", "issue_report_date", "fold"]
    static_features = [c for c in static_cols if c not in keys]
    dynamic_features = [c for c in dynamic_cols if c not in keys]

    combined_features = static_features + dynamic_features

    if len(dynamic_features) == 0:
        dynamic_df = pd.read_csv("folds/fold_1/features_dynamic.csv")
        dynamic_features = list(dynamic_df.columns)
        dynamic_features = [
            f
            for f in dynamic_features
            if f not in ["filename", "target", "issue_report_date", "fold"]
        ]

    feature_sets = {
        "static": static_features,
        "dynamic": dynamic_features,
        "combined": combined_features,
        "random": [],
        "random_features": combined_features,
    }
    runs = 10

    print(
        "Running experiments for 5 methods with fixed feature fraction=1 using joblib parallelization..."
    )

    # Prepare args list for parallel runs
    args_list = []
    for run in range(runs):
        for method, features in feature_sets.items():
            args_list.append((method, features, run, pos_folds, neg_df))

    parallel_results = Parallel(n_jobs=-1, backend="threading", verbose=10)(
        delayed(run_single_run)(args) for args in args_list
    )

    # Organize results
    all_results = {
        m: {"precision": [], "recall": [], "false_alarm": [], "n_features": len(f)}
        for m, f in feature_sets.items()
    }

    for method, res in parallel_results:
        all_results[method]["precision"].append(res["precision"])
        all_results[method]["recall"].append(res["recall"])
        all_results[method]["false_alarm"].append(res["false_alarm"])

    for method in all_results:
        for metric in ["precision", "recall", "false_alarm"]:
            all_results[method][metric] = np.array(all_results[method][metric])

    folds = [2, 3, 4]

    print(
        "\nSummary Table (mean ± std per fold) and Wilcoxon test p-values against 'random' baseline:"
    )

    from tabulate import tabulate

    table_data = []
    headers = ["Method", "#Features"]
    for fold in folds:
        headers.extend(
            [
                f"Fold {fold} Precision",
                f"Fold {fold} Recall",
                f"Fold {fold} False Alarm",
            ]
        )

    pvals = perform_wilcoxon_tests(all_results, baseline_method="static")
    pvals_dyn = perform_wilcoxon_tests(all_results, baseline_method="dynamic")

    for method in feature_sets.keys():
        n_feat = len(feature_sets[method])
        precisions = all_results[method]["precision"]
        recalls = all_results[method]["recall"]
        fas = all_results[method]["false_alarm"]

        row = [method, n_feat]

        for i, fold in enumerate(folds):
            p_mean, p_std = precisions[:, i].mean(), precisions[:, i].std()
            r_mean, r_std = recalls[:, i].mean(), recalls[:, i].std()
            fa_mean, fa_std = fas[:, i].mean(), fas[:, i].std()

            prec_str = f"{p_mean:.3f} ± {p_std:.3f}"
            rec_str = f"{r_mean:.3f} ± {r_std:.3f}"
            fa_str = f"{fa_mean:.3f} ± {fa_std:.3f}"

            row.extend([prec_str, rec_str, fa_str])

        table_data.append(row)

    print(tabulate(table_data, headers=headers, tablefmt="github"))

    print("\nWilcoxon rank test p-values (method vs static):")
    for method, metrics in pvals.items():
        print(f"\nMethod: {method}")
        for metric, pval in metrics.items():
            print(f"  {metric}: p = {pval:.4f}")

    print("\nWilcoxon rank test p-values (method vs dynamic):")
    for method, metrics in pvals_dyn.items():
        print(f"\nMethod: {method}")
        for metric, pval in metrics.items():
            print(f"  {metric}: p = {pval:.4f}")
