import pandas as pd

# Load the CSV file
df = pd.read_csv("v8_refs_dates.csv", parse_dates=["date"])


# Parse 'date' as UTC datetime
df["date"] = pd.to_datetime(df["date"], utc=True)

# Filter between 2020 and 2025 (inclusive)
start_date = pd.Timestamp("2016-01-01T00:00:00Z")
end_date = pd.Timestamp("2020-01-01T00:00:00Z")
df = df[(df["date"] >= start_date) & (df["date"] < end_date)]

# Create year-month column for grouping
df["year_month"] = df["date"].dt.to_period("M")

# Sort and select the last tag of each month
df = df.sort_values("date")
last_per_month = df.groupby("year_month").last().reset_index()

# Keep only tag and date (with date only, no time)
output = last_per_month[["ref_name", "date"]]
output["date"] = output["date"].dt.date  # remove time, keep only YYYY-MM-DD

# Print result
print(output)
output.to_csv("last_tags_per_month_2016.csv", index=False)
