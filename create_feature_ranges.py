import pandas as pd

# Input CSV files
csv1 = "features_dynamic_neg.csv"
csv2 = "features_static_neg.csv"
output_csv = "feature_ranges.csv"

# Load both CSVs
df1 = pd.read_csv(csv1)
df2 = pd.read_csv(csv2)


# Merge by columns (union of all features)
merged_df = pd.concat([df1, df2], axis=1)

# Keep only numeric columns
numeric_df = merged_df.select_dtypes(include=['number'])

# Compute min, max, std for each numeric feature
ranges_df = pd.DataFrame({
    "feature": numeric_df.columns,
    "min": numeric_df.min(),
    "max": numeric_df.max(),
    "std": numeric_df.std()
}).reset_index(drop=True)
ranges_df = ranges_df.drop_duplicates(subset="feature", keep="first")

# Save ranges to CSV
ranges_df.to_csv(output_csv, index=False)

# Remove duplicate features by keeping the first occurrence (or choose last, mean, etc.)
print(f"Numeric feature ranges (with std) saved to {output_csv}")