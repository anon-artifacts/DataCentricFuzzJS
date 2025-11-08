import sys
import pandas as pd
import numpy as np
import warnings
import os
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.calibration import CalibratedClassifierCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import StratifiedKFold, cross_val_predict
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.feature_selection import RFECV
from imblearn.pipeline import Pipeline as ImbPipeline
from imblearn.over_sampling import SMOTE
from xgboost import XGBClassifier
from imblearn.combine import SMOTEENN
import joblib
from sklearn.inspection import permutation_importance
from sklearn.model_selection import train_test_split

# Suppress future warnings for cleaner output
warnings.simplefilter(action="ignore", category=FutureWarning)


def load_and_prepare_data(positive_csv: str, negative_csv: str) -> pd.DataFrame:
    """
    Loads, combines, and cleans the positive and negative feature sets.
    """
    print("--- STEP 1: Loading and Preparing Data ---")
    try:
        df_pos = pd.read_csv(positive_csv)
        df_neg = pd.read_csv(negative_csv)
    except FileNotFoundError as e:
        print(f"❌ Error: {e}. Make sure CSV files are in the correct location.")
        return None

    df_pos["target"] = 0  # 0 = No Crash
    df_neg["target"] = 1  # 1 = Crash
    combined_df = pd.concat([df_pos, df_neg], ignore_index=True)

    if "filename" in combined_df.columns:
        combined_df = combined_df.drop(columns=["filename"])

    initial_cols = set(combined_df.columns)
    for col in combined_df.columns:
        combined_df[col] = pd.to_numeric(combined_df[col], errors="coerce")
    combined_df = combined_df.dropna(axis=1, how="all")
    final_cols = set(combined_df.columns)
    dropped_cols = initial_cols - final_cols
    if dropped_cols:
        print(
            f"⚠️ Dropped columns that could not be converted to a numeric type (booleans/integers are preserved): {', '.join(dropped_cols)}"
        )

    combined_df = combined_df.fillna(0)
    print(f"✅ Data prepared. Shape: {combined_df.shape}")
    print(f"Class distribution:\n{combined_df['target'].value_counts()}\n")
    return combined_df


def select_features_automatically(df: pd.DataFrame) -> list:
    """
    Selects the optimal number of features using RFECV,
    tailored for imbalanced binary classification.
    """
    print("--- STEP 2: Automatic Feature Selection with RFECV ---")

    if "target" not in df.columns:
        raise ValueError("DataFrame must contain a 'target' column.")

    X = df.drop("target", axis=1)
    y = df["target"]

    # ✅ Use XGBoost classifier with proper class weighting
    scale_pos_weight = (y == 0).sum() / (y == 1).sum()
    estimator = XGBClassifier(
        n_estimators=200,
        use_label_encoder=False,
        eval_metric="aucpr",
        random_state=42,
        scale_pos_weight=scale_pos_weight,
        n_jobs=-1,
        verbosity=0,
    )

    # ✅ Stratified CV for imbalanced data
    cv_strategy = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

    # ✅ Use a metric that favors recall of minority class
    scorer = "average_precision"  # Can also try 'f1_macro' or 'roc_auc'

    print("Running RFECV... (This may take a while)")
    rfecv = RFECV(
        estimator=estimator,
        step=1,
        cv=cv_strategy,
        scoring=scorer,
        min_features_to_select=5,
        n_jobs=-1,
    )

    rfecv.fit(X, y)
    optimal_n_features = rfecv.n_features_

    print(f"✅ RFECV complete. Optimal number of features found: {optimal_n_features}")

    # ✅ Plot RFECV performance
    plt.figure(figsize=(10, 6))
    plt.xlabel("Number of features selected")
    plt.ylabel(f"Cross-validation score ({scorer})")
    scores = rfecv.cv_results_["mean_test_score"]
    x_range = range(
        rfecv.min_features_to_select, rfecv.min_features_to_select + len(scores)
    )
    plt.plot(x_range, scores, marker="o")
    plt.axvline(
        x=optimal_n_features,
        color="r",
        linestyle="--",
        label=f"Optimal = {optimal_n_features}",
    )
    plt.title("RFECV Feature Selection Performance")
    plt.legend()
    plt.grid(True)

    plot_filename = "rfecv_performance_plot.png"
    plt.savefig(plot_filename, bbox_inches="tight")
    print(f"✅ Plot saved to '{plot_filename}'")
    plt.show()

    # ✅ Return selected features
    selected_features = list(X.columns[rfecv.support_])
    return selected_features


def build_model(df: pd.DataFrame, selected_features: list) -> ImbPipeline:
    selected_features = [f for f in selected_features if f != "has_wasm"]
    X = df[selected_features]
    y = df["target"]

    pipeline = ImbPipeline(
        [
            # ('smote', SMOTE(random_state=42)),
            # ('classifier', RandomForestClassifier(n_estimators=200, random_state=42, n_jobs=-1))
            # ('smote',  SMOTEENN(random_state=42)),
            (
                "classifier",
                CalibratedClassifierCV(
                    estimator=XGBClassifier(
                        n_estimators=100,
                        tree_method="hist",
                        eval_metric="aucpr",
                        random_state=42,
                        scale_pos_weight=(y == 0).sum() / max(1, (y == 1).sum()),
                    ),
                    method="sigmoid",
                    cv=3,
                ),
            )
        ]
    )
    pipeline.fit(X, y)

    model_filename = "final_crash_detection_model.pkl"
    clf = pipeline.named_steps["classifier"]
    joblib.dump(clf, model_filename, compress=0)
    print(f"✅ Final model trained and saved as '{model_filename}'")


def evaluate_model_with_cv(df: pd.DataFrame, selected_features: list):
    """
    Defines a SMOTE + Classifier pipeline and evaluates it using stratified cross-validation.
    """
    print("--- STEP 3: Evaluating Final Model with 5-Fold Cross-Validation ---")
    selected_features = [f for f in selected_features if f != "has_wasm"]
    X = df[selected_features]
    y = df["target"]

    pipeline = ImbPipeline(
        [
            # ('smote', SMOTE(random_state=42)),
            # ('classifier', RandomForestClassifier(n_estimators=200, random_state=42, n_jobs=-1))
            # ('smote',  SMOTEENN(random_state=42)),
            (
                "classifier",
                XGBClassifier(
                    n_estimators=200,
                    use_label_encoder=False,
                    eval_metric="aucpr",
                    random_state=42,
                    scale_pos_weight=(y == 0).sum() / (y == 1).sum(),
                ),
            )
        ]
    )
    cv_strategy = StratifiedKFold(n_splits=10, shuffle=True, random_state=42)

    print("Running final model evaluation...")
    y_pred = cross_val_predict(pipeline, X, y, cv=cv_strategy)
    print("✅ Evaluation complete.")

    print("\n--- CROSS-VALIDATED PREDICTION RESULTS ---")
    cm = confusion_matrix(y, y_pred)
    tn, fp, fn, tp = cm.ravel()
    false_alarm_rate = fp / (fp + tn) if (fp + tn) > 0 else 0
    report = classification_report(
        y, y_pred, target_names=["No Crash (0)", "Crash (1)"], output_dict=True
    )
    crash_recall = report["Crash (1)"]["recall"]
    crash_precision = report["Crash (1)"]["precision"]

    print("Key Metrics Summary:")
    print("--------------------")
    print(
        f"Recall (Sensitivity) for 'Crash': {crash_recall:.2%} (How many actual crashes were found?)"
    )
    print(
        f"Precision for 'Crash':          {crash_precision:.2%} (When predicting a crash, how often was it correct?)"
    )
    print(
        f"False Alarm Rate (FPR):         {false_alarm_rate:.2%} (What percentage of non-crashes were flagged as a crash?)\n"
    )

    print("Full Classification Report:")
    print("---------------------------")
    print(classification_report(y, y_pred, target_names=["No Crash (0)", "Crash (1)"]))

    print("Confusion Matrix:")
    print("-----------------")
    plt.figure(figsize=(8, 6))
    sns.heatmap(
        cm,
        annot=True,
        fmt="d",
        cmap="Blues",
        xticklabels=["Predicted No Crash", "Predicted Crash"],
        yticklabels=["Actual No Crash", "Actual Crash"],
    )
    plt.ylabel("Actual")
    plt.xlabel("Predicted")
    plt.title("Cross-Validated Confusion Matrix")

    plot_filename_cm = "final_confusion_matrix.png"
    plt.savefig(plot_filename_cm, bbox_inches="tight")
    print(f"\n✅ Confusion matrix plot saved to '{plot_filename_cm}'")
    plt.show()

    # ✅ Train final model on full data
    print("\n--- STEP 4: Training Final Model on Entire Dataset ---")
    pipeline.fit(X, y)

    model_filename = "final_crash_detection_model.pkl"
    clf = pipeline.named_steps["classifier"]
    joblib.dump(clf, model_filename, compress=0)
    print(f"✅ Final model trained and saved as '{model_filename}'")

    # --- STEP 5: Feature Importance ---
    print("\n--- STEP 5: XGBoost Feature Importance ---")

    importances = clf.feature_importances_
    feature_importance_df = pd.DataFrame(
        {"feature": X.columns, "importance": importances}
    ).sort_values(by="importance", ascending=False)

    # Save importance table
    importance_csv = "xgboost_feature_importance.csv"
    feature_importance_df.to_csv(importance_csv, index=False)
    print(f"✅ Feature importance saved to '{importance_csv}'")

    # Plot top 20
    top_n = 20
    plt.figure(figsize=(10, 6))
    sns.barplot(x="importance", y="feature", data=feature_importance_df.head(top_n))
    plt.title(f"Top {top_n} Most Important Features (XGBoost)")
    plt.xlabel("Importance Score")
    plt.tight_layout()

    plot_file = "xgboost_feature_importance_top20.png"
    plt.savefig(plot_file)
    print(f"✅ Top {top_n} importance plot saved to '{plot_file}'")
    plt.show()

    # Save selected features
    import json

    feature_filename = "selected_features.json"
    with open(feature_filename, "w") as f:
        json.dump(selected_features, f)
    print(f"✅ Selected feature list saved to: {feature_filename}")

    # Train/validation split
    X_train, X_val, y_train, y_val = train_test_split(
        X, y, test_size=0.2, stratify=y, random_state=42
    )

    # Train once
    pipeline.fit(X_train, y_train)

    result_train = permutation_importance(pipeline, X_train, y_train, n_repeats=5)
    result_val = permutation_importance(pipeline, X_val, y_val, n_repeats=5)

    features = X_train.columns
    df_importance = pd.DataFrame(
        {
            "feature": features,
            "train_importance": result_train.importances_mean,
            "val_importance": result_val.importances_mean,
        }
    )
    df_importance["importance_diff"] = (
        df_importance["train_importance"] - df_importance["val_importance"]
    )

    print(df_importance.sort_values("importance_diff", ascending=False))
    df_importance.to_csv("permutation_importance.csv", index=False)


def predict_crash_from_dict(
    new_data_dict, model_path="final_crash_detection_model.pkl", feature_columns=None
):
    """
    Predict crash label from a single row of features in dictionary form.

    Args:
        new_data_dict (dict): Dictionary with feature names as keys and feature values.
        model_path (str): Path to the saved trained model (joblib file).
        feature_columns (list or None): List of feature columns model expects. If None, uses keys of new_data_dict.

    Returns:
        int: Predicted class label (e.g. 0 or 1).
    """
    # Load model
    model = joblib.load(model_path)

    # Create DataFrame with one row
    if feature_columns is not None:
        # Ensure columns are in the right order expected by model
        data = pd.DataFrame(
            [{col: new_data_dict.get(col, 0) for col in feature_columns}]
        )
    else:
        # Use keys in dict directly (order may matter)
        data = pd.DataFrame([new_data_dict])

    # Predict
    prediction = model.predict(data)

    return prediction[0]


def load_and_merge_static_dynamic(
    pos_static_csv: str, neg_static_csv: str, pos_dynamic_csv: str, neg_dynamic_csv: str
) -> pd.DataFrame:
    """
    Loads and merges static + dynamic features for positive and negative classes.
    """
    print("--- STEP 1: Loading and Merging Static + Dynamic Features ---")
    try:
        df_pos_static = pd.read_csv(pos_static_csv)
        df_neg_static = pd.read_csv(neg_static_csv)
        df_pos_dyn = pd.read_csv(pos_dynamic_csv)
        df_neg_dyn = pd.read_csv(neg_dynamic_csv)
    except FileNotFoundError as e:
        print(f"❌ Error: {e}")
        return None

    # Add label
    df_pos_static["target"] = 0
    df_neg_static["target"] = 1
    df_pos_dyn["target"] = 0
    df_neg_dyn["target"] = 1
    # df_pos_static.drop(columns=["gc_timing_pattern"], errors='ignore', inplace=True)
    # Merge static + dynamic by row

    df_pos = pd.concat(
        [
            df_pos_static.drop(columns=["target"], errors="ignore"),
            df_pos_dyn.drop(
                columns=[
                    "target",
                    "exit_code",
                    "execution_time_ms",
                    "peak_memory_mb",
                    "crash_signal",
                    "error",
                    "log_kb",
                    "store_ic_count",
                    "bucket_misc_count",
                    "map_create_count",
                    "elem_kind_holey",
                    "total_ic_count",
                    "load_ic_count",
                ],
                errors="ignore",
            ),
        ],
        axis=1,
    )
    df_neg = pd.concat(
        [
            df_neg_static.drop(columns=["target"], errors="ignore"),
            df_neg_dyn.drop(
                columns=[
                    "target",
                    "exit_code",
                    "execution_time_ms",
                    "peak_memory_mb",
                    "crash_signal",
                    "error",
                    "log_kb",
                    "store_ic_count",
                    "bucket_misc_count",
                    "map_create_count",
                    "elem_kind_holey",
                    "total_ic_count",
                    "load_ic_count",
                ],
                errors="ignore",
            ),
        ],
        axis=1,
    )

    # Add target again
    df_pos["target"] = 0
    df_neg["target"] = 1

    # Combine all data
    df_all = pd.concat([df_pos, df_neg], ignore_index=True)

    # Drop filenames and convert to numeric
    if "filename" in df_all.columns:
        df_all = df_all.drop(columns=["filename"])

    for col in df_all.columns:
        df_all[col] = pd.to_numeric(df_all[col], errors="coerce")

    df_all = df_all.dropna(axis=1, how="all").fillna(0)

    print(f"✅ Combined Data Loaded. Shape: {df_all.shape}")
    print(f"Class Distribution:\n{df_all['target'].value_counts()}")
    return df_all


if __name__ == "__main__":
    POS_STATIC = "folds/fold_4/features_static.csv"
    NEG_STATIC = "features_static_neg.csv"
    POS_DYNAMIC = "folds/fold_4/features_dynamic.csv"
    NEG_DYNAMIC = "features_dynamic_neg.csv"

    master_df = load_and_merge_static_dynamic(
        POS_STATIC, NEG_STATIC, POS_DYNAMIC, NEG_DYNAMIC
    )
