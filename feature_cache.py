# feature_cache.py
import os, glob, pandas as pd

_cache = {
    "static_features": None,
    "dynamic_features": None,
    "feature_ranges": None,
    "csv_path": None,
}

def _latest_csv(folder="plot_timed_fractions"):
    files = glob.glob(os.path.join(folder, "top_25_percent_features_last_fold.csv"))
    if not files:
        raise FileNotFoundError(f"No mean_rank_top_*_perc_features.csv found in {folder}")
    return max(files, key=os.path.getmtime)

def load_features_and_ranges(force_reload=False):
    """Load once and cache for reuse."""
    global _cache
    if not force_reload and all(_cache.values()):
        return (
            _cache["static_features"],
            _cache["dynamic_features"],
            _cache["feature_ranges"],
            _cache["csv_path"]
        )

    csv_path = _latest_csv()
    print(f"[CACHE] Loading features from {csv_path}")
    df = pd.read_csv(csv_path)

    if "feature_type" in df.columns:
        static_feats = df.loc[df["feature_type"] == "static", "feature"].tolist()
        dynamic_feats = df.loc[df["feature_type"] == "dynamic", "feature"].tolist()
    else:
        static_feats = [f for f in df["feature"] if "dyn" not in f.lower()]
        dynamic_feats = [f for f in df["feature"] if "dyn" in f.lower()]

    # Load feature ranges
    ranges_csv = "feature_ranges.csv"
    if os.path.exists(ranges_csv):
        ranges_df = pd.read_csv(ranges_csv)
        feature_ranges = ranges_df.set_index("feature").to_dict(orient="index")
    else:
        feature_ranges = {}

    _cache.update({
        "static_features": static_feats,
        "dynamic_features": dynamic_feats,
        "feature_ranges": feature_ranges,
        "csv_path": csv_path
    })

    return static_feats, dynamic_feats, feature_ranges, csv_path
