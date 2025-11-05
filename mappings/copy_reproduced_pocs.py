import os
import shutil
import pandas as pd

csv_path = 'list.csv'  # replace with your CSV filename
source_dir = '../poc_negatives_updated'
dest_dir = '../poc_negatives_final'

# Create destination folder if it doesn't exist
os.makedirs(dest_dir, exist_ok=True)

# Load CSV and get list of files to copy
df = pd.read_csv(csv_path)
files_to_copy = df['poc_filename'].dropna().unique()

count_copied = 0
for filename in files_to_copy:
    src_path = os.path.join(source_dir, filename)
    if os.path.isfile(src_path):
        shutil.copy2(src_path, dest_dir)
        count_copied += 1
    else:
        print(f"⚠️ File not found, skipped: {filename}")

print(f"✅ Total files copied: {count_copied}")
