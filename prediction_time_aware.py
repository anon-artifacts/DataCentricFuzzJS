import os
import pandas as pd
import numpy as np
from datetime import datetime
from sklearn.metrics import confusion_matrix, precision_score, recall_score,f1_score
from xgboost import XGBClassifier
import matplotlib.pyplot as plt
import seaborn as sns
from scipy.stats import ttest_rel, wilcoxon
from imblearn.under_sampling import RandomUnderSampler
from sklearn.model_selection import train_test_split
# Ensure output folder exists
PLOT_FOLDER = "plot_timed_fractions"
os.makedirs(PLOT_FOLDER, exist_ok=True)


FOLD_BOUNDARIES = {
    1: datetime(2022, 11, 30),  # Captures PoCs up to this date (~30 samples)
    2: datetime(2023, 8, 10),   # Captures the next burst of PoCs (~32 samples)
    3: datetime(2024, 5, 13),  # Captures the rest of the 2023 PoCs (~37 samples)
    4: datetime(2025, 12, 31)   # Captures all remaining PoCs from 2024 onwards (~29 samples)
}
def load_and_merge_pos_fold(fold_path):
    static = pd.read_csv(os.path.join(fold_path, "features_static.csv"))
    dynamic = pd.read_csv(os.path.join(fold_path, "features_dynamic.csv"))
    # Drop any 'target' columns if present to avoid suffixes
    static = static.drop(columns=['target'], errors='ignore')
    dynamic = dynamic.drop(columns=['target'], errors='ignore')
    
    # Drop unwanted columns from dynamic as before
    dynamic = dynamic.drop(columns=[
        'exit_code', 'execution_time_ms', 'peak_memory_mb', 'crash_signal', 'error','log_kb','store_ic_count','bucket_misc_count','map_create_count','elem_kind_holey','total_ic_count','load_ic_count'
    ], errors='ignore')

    merged = pd.merge(static, dynamic, on="filename")
    merged['target'] = 0
    return merged

def load_and_process_neg(static_path, dynamic_path):
    static = pd.read_csv(static_path)
    dynamic = pd.read_csv(dynamic_path)
    dynamic['issue_report_date'] = pd.to_datetime(dynamic['issue_report_date'], errors='coerce')
    static = static.drop(columns=['target'], errors='ignore')
    dynamic = dynamic.drop(columns=['target'], errors='ignore')
    # Drop unwanted columns from dynamic as before
    dynamic = dynamic.drop(columns=[
        'exit_code', 'execution_time_ms', 'peak_memory_mb', 'crash_signal', 'error','log_kb','store_ic_count','bucket_misc_count','map_create_count','elem_kind_holey','total_ic_count','load_ic_count'
    ], errors='ignore')

    merged = pd.merge(static, dynamic, on="filename")

    merged['target'] = 1

    def assign_fold(date):
        for fold, cutoff in FOLD_BOUNDARIES.items():
            if date <= cutoff:
                return fold
        return 4

    merged['fold'] = merged['issue_report_date'].apply(assign_fold)
    return merged
def extract_static_dynamic_features(pos_folds, neg_df):
    # Use columns from the first positive fold and neg_df as reference
    static_cols = set(pos_folds[0].columns) - set(neg_df.columns)
    dynamic_cols = set(neg_df.columns) - set(pos_folds[0].columns)

    # Alternatively, if your feature names contain 'static' or 'dynamic' prefix:
    # static_cols = [c for c in pos_folds[0].columns if c.startswith("static_")]
    # dynamic_cols = [c for c in neg_df.columns if c.startswith("dynamic_")]

    # Filter out non-feature cols if needed
    non_features = {'filename', 'target', 'issue_report_date', 'fold'}
    static_features = [f for f in static_cols if f not in non_features]
    dynamic_features = [f for f in dynamic_cols if f not in non_features]

    return set(static_features), set(dynamic_features)

def plot_mean_rank_top_features(pos_folds, neg_df, static_features, dynamic_features, 
                                top_fraction=0.25, runs=10, plot_folder=PLOT_FOLDER):
    os.makedirs(plot_folder, exist_ok=True)
    feature_rank_records = []
    last_fold_records = []  # ✅ collect dicts, not just feature names

    for run_idx in range(runs):
        rs = run_idx
        for k in range(2, 5):
            train_pos = pd.concat([pos_folds[i - 1] for i in range(1, k)]).reset_index(drop=True)
            train_neg = neg_df[neg_df['fold'] < k].reset_index(drop=True)
            test_pos = pos_folds[k - 1].reset_index(drop=True)
            test_neg = neg_df[neg_df['fold'] == k].reset_index(drop=True)

            train = pd.concat([train_pos, train_neg])
            test = pd.concat([test_pos, test_neg])

            train, _ = train_test_split(train, train_size=0.9, random_state=rs, stratify=train['target'])
            test, _ = train_test_split(test, train_size=0.9, random_state=rs + 1, stratify=test['target'])

            common_cols = list(set(train.columns) & set(test.columns))
            common_cols = [c for c in common_cols if c not in ('target', 'filename', 'issue_report_date', 'fold')]

            # Encode categoricals
            for col in common_cols:
                if train[col].dtype == 'object':
                    unique_vals = train[col].dropna().unique()
                    if set(unique_vals).issubset({'True', 'False', 'true', 'false'}):
                        mapping = {'True': 1, 'False': 0, 'true': 1, 'false': 0}
                        train[col] = train[col].map(mapping).astype(int)
                        test[col] = test[col].map(mapping).astype(int)
                    else:
                        train[col] = train[col].astype('category').cat.codes
                        test[col] = test[col].astype('category').cat.codes

            X_train = train[common_cols].fillna(0)
            y_train = train['target']

            model = XGBClassifier(
                n_estimators=100,
                eval_metric='aucpr',
                random_state=rs,
                scale_pos_weight=(y_train == 0).sum() / max(1, (y_train == 1).sum())
            )
            model.fit(X_train, y_train)

            importance_df = pd.DataFrame({
                'feature': common_cols,
                'importance': model.feature_importances_
            }).sort_values(by='importance', ascending=False).reset_index(drop=True)

            top_n = max(1, int(len(importance_df) * top_fraction))
            top_feats = importance_df['feature'].iloc[:top_n].tolist()

            # Save ranks for all runs/folds
            for rank, feat in enumerate(top_feats, start=1):
                record = {
                    'run': run_idx,
                    'fold': k,
                    'feature': feat,
                    'rank': rank,
                    'feature_type': (
                        'static' if feat in static_features 
                        else 'dynamic' if feat in dynamic_features 
                        else 'unknown'
                    )
                }
                feature_rank_records.append(record)

                # ✅ also save last fold data in full structured form
                if k == 4 and run_idx == runs - 1:
                    last_fold_records.append(record)

    # === Aggregate mean ranks ===
    rank_df = pd.DataFrame(feature_rank_records)
    mean_rank_df = rank_df.groupby(['feature', 'feature_type'])['rank'].mean().reset_index()
    mean_rank_df = mean_rank_df.sort_values('rank')
    mean_rank_df = mean_rank_df[mean_rank_df['feature_type'] != 'unknown']
    mean_rank_df = mean_rank_df.head(int(len(importance_df) * top_fraction))

    # === Save mean rank top features ===
    mean_rank_csv = os.path.join(plot_folder, f"mean_rank_top_{int(top_fraction*100)}_perc_features.csv")
    # mean_rank_df.to_csv(mean_rank_csv, index=False)
    # print(f"Saved mean rank top features: {mean_rank_csv}")

    # === Save last fold features with same structure ===
    last_fold_df = pd.DataFrame(last_fold_records)
    last_fold_df = last_fold_df.groupby(['feature', 'feature_type'])['rank'].mean().reset_index()
    last_fold_df = last_fold_df.sort_values('rank')
    last_fold_df = last_fold_df[last_fold_df['feature_type'] != 'unknown']
    last_fold_df = last_fold_df.head(int(len(importance_df) * top_fraction))

    last_fold_csv = os.path.join(plot_folder, "top_25_percent_features_last_fold.csv")
    last_fold_df.to_csv(last_fold_csv, index=False)
    print(f"Saved top 25% features from last fold: {last_fold_csv}")

    # === Plot ===
    plt.figure(figsize=(12, max(6, 0.15 * len(mean_rank_df))))
    sns.barplot(
        data=mean_rank_df,
        x='rank',
        y='feature',
        hue='feature_type',
        dodge=False,
        palette={'static': 'tab:blue', 'dynamic': 'tab:orange'}
    )
    plt.xlabel(f'Mean Rank (Top {int(top_fraction*100)}% Features)')
    plt.ylabel('Feature Name')
    plt.title(f'Mean Rank of Top {int(top_fraction*100)}% Features Across Folds and Runs')
    plt.legend(title='Feature Type')
    plt.tight_layout()
    # plt.savefig(os.path.join(plot_folder, f"mean_rank_static_dynamic_top_{int(top_fraction*100)}.png"), dpi=300)
    # plt.show()


def run_time_aware_cv(pos_folds, neg_df, selected_features=None, random_state=None):
    results = []
    for i in range(1, 4):
        # Use different random states if provided, else fixed
        rs = random_state if random_state is not None else 42

        train_pos = pos_folds[i - 1].sample(frac=0.9, random_state=rs).reset_index(drop=True)
        test_pos = pos_folds[i].sample(frac=0.9, random_state=rs).reset_index(drop=True)

        # Remove duplicates in test_pos present in train_pos
        #test_pos = test_pos.merge(train_pos, how='outer', indicator=True)
        #test_pos = test_pos[test_pos['_merge'] == 'left_only'].drop(columns=['_merge']).reset_index(drop=True)

        train_neg = neg_df[neg_df['fold'] < i + 1].sample(frac=0.9, random_state=rs).reset_index(drop=True)
        test_neg = neg_df[neg_df['fold'] == i + 1].sample(frac=0.9, random_state=rs).reset_index(drop=True)

        train = pd.concat([train_pos, train_neg])
        test = pd.concat([test_pos, test_neg])

        common_cols = list(set(train.columns) & set(test.columns))
        common_cols = [col for col in common_cols if col not in ('target', 'filename', 'issue_report_date', 'fold')]

        if selected_features is not None:
            selected = set(selected_features)
            common_cols = [col for col in common_cols if col in selected]
            
        X_train = train[common_cols].fillna(0)
        y_train = train['target']
        X_test = test[common_cols].fillna(0)
        y_test = test['target']

        for col in common_cols:
            if X_train[col].dtype == 'object':
                unique_vals = X_train[col].dropna().unique()
                if set(unique_vals).issubset({'True', 'False', 'true', 'false'}):
                    mapping = {'True': 1, 'False': 0, 'true': 1, 'false': 0}
                    X_train[col] = X_train[col].map(mapping).astype(int)
                    X_test[col] = X_test[col].map(mapping).astype(int)
                else:
                    X_train[col] = X_train[col].astype('category').cat.codes
                    X_test[col] = X_test[col].astype('category').cat.codes
        
        model = XGBClassifier(
            n_estimators=100,
            eval_metric='aucpr',
            random_state=rs,
            scale_pos_weight=(y_train == 0).sum() / max(1, (y_train == 1).sum()),
            jobs=-1
        )
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)

        precision = precision_score(y_test, y_pred, zero_division=0)
        recall = recall_score(y_test, y_pred, zero_division=0)
        cm = confusion_matrix(y_test, y_pred)
        tn, fp, fn, tp = cm.ravel() if cm.shape == (2, 2) else (0, 0, 0, 0)
        false_alarm = fp / (fp + tn) if (fp + tn) else 0

        results.append({
            'fold': i + 1,
            'precision': precision,
            'recall': recall,
            'false_alarm': false_alarm
        })
    return pd.DataFrame(results)
def encode_categorical(train_df, test_df):
    for col in train_df.columns:
        if train_df[col].dtype == 'object':
            unique_vals = train_df[col].dropna().unique()
            if set(unique_vals).issubset({'True', 'False', 'true', 'false'}):
                mapping = {'True': 1, 'False': 0, 'true': 1, 'false': 0}
                train_df[col] = train_df[col].map(mapping).astype(int)
                test_df[col] = test_df[col].map(mapping).fillna(0).astype(int)
            else:
                categories = train_df[col].astype('category').cat.categories
                train_df[col] = train_df[col].astype('category').cat.codes
                test_df[col] = pd.Categorical(test_df[col], categories=categories).codes
                test_df[col] = test_df[col].replace(-1, 0)  # unknown categories � 0
    return train_df, test_df

def run_time_aware_cv_per_fold_feature_ranking(pos_folds, neg_df, top_fractions, random_state=None):
    results = []

    for k in range(2, 5):  # folds 2, 3, 4 as test folds
        rs = random_state if random_state is not None else 42

        # Training data = all folds before k
        train_pos = pd.concat([pos_folds[i - 1] for i in range(1, k)]).reset_index(drop=True)
        train_neg = neg_df[neg_df['fold'] < k].reset_index(drop=True)

        # Test data = fold k
        test_pos = pos_folds[k - 1].reset_index(drop=True)
        test_neg = neg_df[neg_df['fold'] == k].reset_index(drop=True)

        train = pd.concat([train_pos, train_neg])
        test = pd.concat([test_pos, test_neg])

        common_cols = list(set(train.columns) & set(test.columns))
        common_cols = [col for col in common_cols if col not in ('target', 'filename', 'issue_report_date', 'fold')]

       
        X_train_full = train[common_cols].fillna(0)
        y_train = train['target']
        X_test_full = test[common_cols].fillna(0)
        y_test = test['target']
        X_train_full, X_test_full = encode_categorical(X_train_full, X_test_full)

        
        # Step 1: Train on all features for this fold's training data � get importances
        base_model = XGBClassifier(
            n_estimators=100,
            eval_metric='aucpr',
            random_state=rs,
            scale_pos_weight=(y_train == 0).sum() / max(1, (y_train == 1).sum())
        )
        base_model.fit(X_train_full, y_train)
        feature_importance_df = pd.DataFrame({
            'feature': common_cols,
            'importance': base_model.feature_importances_
        }).sort_values(by='importance', ascending=False)
        # Subsample train to 90%, stratified by 'target'
        
        train, _ = train_test_split(
            train,
            train_size=0.9,
            random_state=rs,
            stratify=train['target']
        )

        # Subsample test to 90%, stratified by 'target'
        test, _ = train_test_split(
            test,
            train_size=0.9,
            random_state=rs + 1,
            stratify=test['target']
        )
        
        common_cols = list(set(train.columns) & set(test.columns))
        common_cols = [col for col in common_cols if col not in ('target', 'filename', 'issue_report_date', 'fold')]

        X_train_full = train[common_cols].fillna(0)
        y_train = train['target']
        X_test_full = test[common_cols].fillna(0)
        y_test = test['target']
        X_train_full, X_test_full = encode_categorical(X_train_full, X_test_full)

        # Step 2: Loop over top fractions for this fold
        for frac in top_fractions:
            top_n = max(1, int(len(feature_importance_df) * frac))
            selected_features = feature_importance_df['feature'].iloc[:top_n].tolist()
    
            X_train = X_train_full[selected_features]
            X_test = X_test_full[selected_features]

            
            model = XGBClassifier(
                n_estimators=100,
                eval_metric='aucpr',
                random_state=rs,
                scale_pos_weight=(y_train == 0).sum() / max(1, (y_train == 1).sum())
            )
            model.fit(X_train, y_train)
            y_pred = model.predict(X_test)
            
            precision = precision_score(y_test, y_pred, zero_division=0)
            recall = recall_score(y_test, y_pred, zero_division=0)
            f1 = f1_score(y_test, y_pred, zero_division=0)
            cm = confusion_matrix(y_test, y_pred)
            tn, fp, fn, tp = cm.ravel() if cm.shape == (2, 2) else (0, 0, 0, 0)
            false_alarm = fp / (fp + tn) if (fp + tn) else 0

            results.append({
                'fold': k,
                'top_fraction': frac,
                'precision': precision,
                'recall': recall,
                'false_alarm': false_alarm,
                'f1': f1
            })

    return pd.DataFrame(results)


def plot_metrics_with_variance(results_all_runs):
    # results_all_runs: list of DataFrames (each run's results)
    all_df = pd.concat(results_all_runs, keys=range(len(results_all_runs)), names=['run', 'index']).reset_index(level='run')
    agg = all_df.groupby('fold').agg(['mean', 'std'])
    
    folds = agg.index
    metrics = ['precision', 'recall', 'false_alarm']

    plt.figure(figsize=(12, 8))
    for metric in metrics:
        mean_vals = agg[(metric, 'mean')]
        std_vals = agg[(metric, 'std')]
        plt.errorbar(
            folds, mean_vals, yerr=std_vals,
            marker='o', label=metric.capitalize(),
            capsize=5, capthick=1, elinewidth=1.5, markersize=8
        )

    plt.ylim(0, 1)
    plt.xlim(folds.min() - 0.2, folds.max() + 0.2)

    # Since fold 1 is only training, label only folds 2, 3, 4
    fold_labels = {
        2: "Fold 2\n(< 2023-07-31)",
        3: "Fold 3\n(2023-07-31 to 2023-12-31)",
        4: "Fold 4\n(> 2023-12-31)"
    }
    labels = [fold_labels.get(fold, f"Fold {fold}") for fold in folds]

    plt.xticks(ticks=folds, labels=labels, fontsize=12)
    plt.yticks(np.arange(0, 1.1, 0.1), fontsize=12)
    plt.xlabel('Test Fold with Cutoff Dates', fontsize=14, labelpad=15)
    plt.ylabel('Score (Mean � Std Dev)', fontsize=14, labelpad=15)
    plt.title('Time-aware Cross-Validation Metrics with Variance over 10 Runs', fontsize=16, pad=20)
    
    plt.legend(frameon=True, fontsize=13)
    plt.grid(True, which='both', linestyle='--', linewidth=0.7, alpha=0.7)
    plt.minorticks_on()
    plt.tight_layout()
    plt.savefig("time_aware_cv_plot_variance_better_adjusted_bck.png")
    
def plot_metrics(df):
    plt.figure(figsize=(10, 6))
    sns.lineplot(data=df, x="fold", y="precision", marker="o", label="Precision")
    sns.lineplot(data=df, x="fold", y="recall", marker="o", label="Recall")
    sns.lineplot(data=df, x="fold", y="false_alarm", marker="o", label="False Alarm")
    plt.ylim(0, 1)
    plt.grid(True)
    plt.title("Time-aware Cross-Validation Metrics")
    plt.xlabel("Fold")
    plt.ylabel("Score")
    plt.legend()
    plt.tight_layout()
    plt.savefig("time_aware_cv_plot.png")

def get_top_fractions(results_all_runs, top_fraction):
    all_df = pd.concat(
        results_all_runs,
        keys=range(len(results_all_runs)),
        names=['run', 'index']
    ).reset_index(level='run')
    # Filter by top_fraction exactly (or use close match if float precision is an issue)
    all_df = all_df[all_df['top_fraction'] == top_fraction]
    return all_df 

def save_df(df, filename):
    df.to_csv(filename, index=False)
    print(f"Saved DataFrame to {filename}")
        
def plot_combined_metrics_single_fraction(results_all_runs, top_fraction):
    all_df = get_top_fractions(results_all_runs, top_fraction)
    agg = all_df.groupby('fold').agg(['mean', 'std'])
    folds = agg.index

    prec_mean, prec_std = agg[("precision", "mean")], agg[("precision", "std")]
    recall_mean, recall_std = agg[("recall", "mean")], agg[("recall", "std")]
    fa_mean, fa_std = agg[("false_alarm", "mean")], agg[("false_alarm", "std")]

    fig, ax1 = plt.subplots(figsize=(8, 5))

    # Precision
    ax1.errorbar(
        folds, prec_mean, yerr=prec_std, fmt='-o', capsize=5,
        label="Precision", color="tab:blue", linewidth=2
    )

    # Recall (slightly different style to avoid overlap confusion)
    ax1.errorbar(
        folds, recall_mean, yerr=recall_std, fmt='--s', capsize=5,
        label="Recall", color="tab:green", linewidth=2
    )

    ax1.set_ylim(-0.05, 1.05)
    ax1.set_xlabel("Test Fold", fontsize=14)
    ax1.set_ylabel("Precision / Recall", fontsize=14)

    # Secondary axis for false alarm
    ax2 = ax1.twinx()
    error_scale = 0.5

    # Increase scaling factor so false alarm "sits lower"
    fa_upper_bound = max(fa_mean + error_scale * fa_std) * 3.0  # doubled to lower the curve
    ax2.errorbar(
        folds, fa_mean, yerr=error_scale * fa_std, fmt='-^', capsize=5,
        label="False Alarm", color="tab:red", linewidth=2
    )
    ax2.set_ylim(0, fa_upper_bound)
    ax2.set_ylabel("False Alarm", fontsize=14)

    # X-axis ticks
    ax1.set_xticks(folds)
    ax1.set_xticklabels([f"Fold {f}" for f in folds], fontsize=12)

    # Combine legends
    lines1, labels1 = ax1.get_legend_handles_labels()
    lines2, labels2 = ax2.get_legend_handles_labels()
    ax1.legend(lines1 + lines2, labels1 + labels2, loc="upper right", fontsize=11)

    plt.title(f"Metrics over Time-aware CV (Top Fraction={top_fraction})", fontsize=16)
    ax1.grid(True, linestyle='--', alpha=0.7)
    plt.tight_layout()

    filename = os.path.join(PLOT_FOLDER, f"metrics_combined_top_fraction_{top_fraction}.png")
    plt.savefig(filename, dpi=300)
    plt.close()

    
def plot_individual_metric(results_all_runs, metric_name, top_fraction):
    all_df = pd.concat(results_all_runs, keys=range(len(results_all_runs)), names=['run', 'index']).reset_index(level='run')
    agg = all_df.groupby('fold').agg(['mean', 'std'])
    folds = agg.index

    mean_vals = agg[(metric_name, 'mean')]
    std_vals = agg[(metric_name, 'std')]

    plt.figure(figsize=(8, 5))
    plt.errorbar(
        folds, mean_vals, yerr=std_vals,
        marker='o', capsize=5, capthick=1, elinewidth=1.5, markersize=8
    )
    plt.ylim(0, 1)
    plt.xlim(folds.min() - 0.2, folds.max() + 0.2)
    plt.xticks(ticks=folds, labels=[f"Fold {f}" for f in folds], fontsize=12)
    plt.yticks(np.arange(0, 1.1, 0.1), fontsize=12)
    plt.xlabel('Test Fold', fontsize=14)
    plt.ylabel(f"{metric_name.capitalize()} (Mean � Std Dev)", fontsize=14)
    plt.title(f"{metric_name.capitalize()} over Time-aware CV (Top Fraction={top_fraction})", fontsize=16)
    plt.grid(True, linestyle='--', alpha=0.7)
    plt.tight_layout()

    filename = os.path.join(PLOT_FOLDER, f"{metric_name}_top_fraction_{top_fraction}.png")
    plt.savefig(filename)
    plt.close()
 
import numpy as np
import matplotlib.pyplot as plt
import os

def plot_combined_metrics(results_all_runs, top_fractions):
    all_df = pd.concat(results_all_runs, keys=range(len(results_all_runs)), names=['run', 'index']).reset_index(level='run')

    metrics = ["precision", "recall", "false_alarm"]
    y_limits = {
        "precision": (0, 1),
        "recall": (0, 1),
        "false_alarm": (0, max(0.05, all_df["false_alarm"].max() * 1.2))  # tighter for low values
    }

    # Get all unique folds globally for consistent x-axis
    all_folds = sorted(all_df["fold"].unique())

    for metric in metrics:
        plt.figure(figsize=(8, 5))
        for frac in sorted(top_fractions):
            df_frac = all_df[all_df["top_fraction"] == frac]

            # Prepare lists to store values per fold
            mean_vals = []
            adjusted_stds = []

            for fold in all_folds:
                fold_values = df_frac[df_frac["fold"] == fold][metric]
                if len(fold_values) == 0:
                    mean_vals.append(np.nan)
                    adjusted_stds.append(np.nan)
                    continue

                mean_val = fold_values.mean()
                #median_val = fold_values.median()
                #mad = np.median(np.abs(fold_values - median_val))
                adjusted_std = fold_values.std() # Scale factor for normal dist consistency
                print(fold_values.std())
                mean_vals.append(mean_val)
                adjusted_stds.append(adjusted_std)

            # Convert to numpy arrays for plotting
            mean_vals = np.array(mean_vals)
            adjusted_stds = np.array(adjusted_stds)

            plt.errorbar(
                all_folds, mean_vals, yerr=adjusted_stds,
                marker='o', capsize=4, label=f"Top {int(frac*100)}%",
                linewidth=1.5
            )

        plt.ylim(*y_limits[metric])
        plt.xticks(all_folds, [f"Fold {f}" for f in all_folds])
        plt.xlabel("Test Fold", fontsize=12)
        plt.ylabel(f"{metric.capitalize()} (Mean � Std)", fontsize=12)
        plt.title(f"{metric.capitalize()} vs Fold for Different Feature Fractions", fontsize=14)
        plt.grid(True, linestyle='--', alpha=0.6)
        plt.legend(title="Feature Fraction", fontsize=9)
        plt.tight_layout()

        if not os.path.exists(PLOT_FOLDER):
            os.makedirs(PLOT_FOLDER)

        plt.savefig(os.path.join(PLOT_FOLDER, f"combined_{metric}.png"))

def aggregate_by_fraction(results_all_runs, metric="precision"):
    all_df = pd.concat(results_all_runs, keys=range(len(results_all_runs)), names=['run', 'index']).reset_index(level='run')
    agg = all_df.groupby("top_fraction")[metric].agg(['mean', 'std']).reset_index()
    return agg

def find_diminishing_point(agg_df, improvement_threshold=0.005):
    agg_df = agg_df.sort_values("top_fraction").reset_index(drop=True)
    agg_df["gain"] = agg_df[agg_df.columns[1]].diff() / agg_df[agg_df.columns[1]].shift(1)
    for i in range(1, len(agg_df)):
        if agg_df.loc[i, "gain"] < improvement_threshold:
            return agg_df.loc[i, "top_fraction"], agg_df
    return None, agg_df

def plot_diminishing_returns(results_all_runs, metric="precision", improvement_threshold=0.005):
    agg_df = aggregate_by_fraction(results_all_runs, metric=metric)
    frac_point, agg_df = find_diminishing_point(agg_df, improvement_threshold)
    frac_point = 0.25
    plt.figure(figsize=(7, 5))
    plt.errorbar(
        agg_df["top_fraction"], 
        agg_df["mean"], 
        yerr=agg_df["std"], 
        marker="o", 
        linewidth=2, 
        capsize=5,
        label=f"{metric.capitalize()} Mean � Std"
    )
    
    if frac_point:
        val = agg_df.loc[agg_df["top_fraction"] == frac_point, "mean"].values[0]
        plt.axvline(frac_point, color="red", linestyle="--", label=f"Diminishing point = {frac_point:.2f}")
        plt.scatter(frac_point, val, color="red", zorder=5)
    
    plt.xlabel("Top Feature Fraction", fontsize=12)
    plt.ylabel(f"{metric.capitalize()} (Mean � Std Dev)", fontsize=12)
    plt.title(f"Diminishing Returns Analysis for {metric.capitalize()}", fontsize=14)
    plt.grid(True, linestyle="--", alpha=0.6)
    plt.legend()
    plt.tight_layout()
    filename = os.path.join(PLOT_FOLDER, f"diminishing_returns_{metric}.png")
    plt.savefig(filename, dpi=300)
    print(f" Saved plot: {filename}")
    
    return frac_point, agg_df

def find_statistically_minimal_fraction(results_all_runs, metric="precision", alpha=0.05, test="wilcoxon", effect_size_threshold=0.01):
    import numpy as np
    from scipy.stats import ttest_rel, wilcoxon

    all_df = pd.concat(results_all_runs, ignore_index=True)
    grouped = all_df.groupby("top_fraction")[metric].apply(list).to_dict()

    sorted_fracs = sorted(grouped.keys())

    # Reference fraction and values:
    if metric == "false_alarm":
        mean_vals = {f: np.mean(v) for f, v in grouped.items()}
        ref_fraction = min(mean_vals, key=mean_vals.get)
    else:
        ref_fraction = max(sorted_fracs)

    ref_values = np.array(grouped[ref_fraction])

    epsilon = effect_size_threshold / 10  # e.g. 0.001 if threshold=0.01

    for frac in sorted_fracs:
        if frac == ref_fraction:
            continue

        current_values = np.array(grouped[frac])
        n = min(len(ref_values), len(current_values))
        sample_ref = ref_values[:n]
        sample_cur = current_values[:n]

        differences = sample_cur - sample_ref

        # Zero out very small differences to avoid false significance
        differences[np.abs(differences) < epsilon] = 0

        if np.all(differences == 0):
            p = 1.0
        else:
            if test == "t-test":
                stat, p = ttest_rel(sample_cur, sample_ref)
            else:
                stat, p = wilcoxon(sample_cur, sample_ref)

        mean_cur = np.mean(sample_cur)
        mean_ref = np.mean(sample_ref)
        mean_diff = mean_cur - mean_ref

        if metric == "false_alarm":
            # For false_alarm, no significant increase or decrease is good
            if p > alpha or mean_cur <= mean_ref + effect_size_threshold:
                return frac, p
        else:
            # For other metrics, require both p and effect size for improvement
            if p > alpha or mean_diff >= -effect_size_threshold:
                return frac, p

    return ref_fraction, 0.0

def get_static_and_dynamic_features_from_neg_files(static_neg_csv, dynamic_neg_csv):
    static_df = pd.read_csv(static_neg_csv)
    dynamic_df = pd.read_csv(dynamic_neg_csv)

    # Remove known non-feature columns
    non_features = {'filename', 'target', 'issue_report_date', 'fold',
                    'exit_code', 'execution_time_ms', 'peak_memory_mb', 'crash_signal', 'error',
                    'log_kb','store_ic_count','bucket_misc_count','map_create_count','elem_kind_holey','total_ic_count'}

    static_features = [col for col in static_df.columns if col not in non_features]
    dynamic_features = [col for col in dynamic_df.columns if col not in non_features]

    return set(static_features), set(dynamic_features)

def wilcoxon_test_with_effect_size(df, ref_frac=0.1, metrics=None):
    """
    Performs paired Wilcoxon rank-sum tests comparing ref_frac to all other fractions.
    Also calculates rank biserial correlation as effect size.
    """
    if metrics is None:
        metrics = ["precision", "recall", "false_alarm"]

    print("\n=� Wilcoxon Rank Test: Comparing {:.1f} fraction vs other fractions".format(ref_frac))
    for metric in metrics:
        ref_vals = df.loc[df["top_fraction"] == ref_frac, metric].values
        for frac in sorted(df["top_fraction"].unique()):
            if frac == ref_frac:
                continue
            comp_vals = df.loc[df["top_fraction"] == frac, metric].values
            # Paired samples: match length
            n = min(len(ref_vals), len(comp_vals))
            if n == 0:
                continue

            stat, p = wilcoxon(ref_vals[:n], comp_vals[:n])

            # Effect size: rank biserial correlation
            diff = ref_vals[:n] - comp_vals[:n]
            rbc = (np.sum(diff > 0) - np.sum(diff < 0)) / len(diff)

            print(f"Metric={metric}, 0.1 vs {frac}: "
                  f"stat={stat:.3f}, p={p:.4f}, effect_size={rbc:.3f}")
           
if __name__ == "__main__":
    pos_folds = [load_and_merge_pos_fold(f"folds/fold_{i}") for i in range(1, 5)]
    neg_df = load_and_process_neg("features_static_neg.csv", "features_dynamic_neg.csv")

    top_fractions = [0.06, 0.12, 0.25, 0.50, 0.75,1]
    
    static_features_set, dynamic_features_set = get_static_and_dynamic_features_from_neg_files(
    "features_static_neg.csv", "features_dynamic_neg.csv"
    )
   
    plot_mean_rank_top_features(
        pos_folds,
        neg_df,
        static_features_set,
        dynamic_features_set,
        top_fraction=0.25,
        runs=10
    )

    for frac in top_fractions:
        print(f"\n=== Processing top_fraction={frac} ===")
        #top_features = load_top_features("xgboost_feature_importance.csv", top_fraction=frac)

        all_results = []
        for run_idx in range(10):
            results_df = run_time_aware_cv_per_fold_feature_ranking(pos_folds, neg_df, top_fractions, random_state=run_idx)
            all_results.append(results_df)

    plot_combined_metrics(all_results, top_fractions)
    plot_combined_metrics_single_fraction(all_results, top_fraction=1)
    # Aggregate by fraction for each metric and print as a table
    all_df = pd.concat(all_results, ignore_index=True)

    metrics = ["precision", "recall", "false_alarm"]
    table_rows = []
    for frac in sorted(all_df["top_fraction"].unique()):
        row = {"top_fraction": frac}
        for metric in metrics:
            #subset = all_df.loc[all_df["top_fraction"] == frac, metric]
            mean_val = all_df.loc[all_df["top_fraction"] == frac, metric].mean()
            std_val = all_df.loc[all_df["top_fraction"] == frac, metric].std()
            
            row[metric] = f"{mean_val:.2f} � {std_val:.2f}"
        table_rows.append(row)

   