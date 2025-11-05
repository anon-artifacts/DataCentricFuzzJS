import csv
import re
from pathlib import Path

INPUT_FILE = "features_negatives_d_updated_time.csv"
OUTPUT_FILE = "mappings/negative_mapping_timestamped.csv"
SOURCE_DIR = Path("poc_negatives_updated")
LOG_FILE = "logs/issue_time_log.txt"  # replace with your actual log filename

def extract_flags_from_file(filepath):
    try:
        content = filepath.read_text(errors='ignore')
        flags = re.findall(r"--[\w-]+(?:=[\w\d-]+)?", content)
        return " ".join(flags)
    except Exception as e:
        return f"ERROR: {e}"

def load_log_timestamps(log_path):
    timestamps = {}
    with open(log_path, 'r') as f:
        for line in f:
            if ':' not in line:
                continue
            path, ts = line.strip().split(": ", 1)
            filename = Path(path).name
            timestamps[filename] = ts
    return timestamps

def main():
    timestamps = load_log_timestamps(LOG_FILE)

    with open(INPUT_FILE, newline='') as infile, open(OUTPUT_FILE, mode='w', newline='') as outfile:
        reader = csv.DictReader(infile)
        writer = csv.DictWriter(outfile, fieldnames=['filename', 'timestamp', 'flags'])
        writer.writeheader()

        for row in reader:
            filename = row['filename']
            file_path = SOURCE_DIR / filename
            flags = extract_flags_from_file(file_path)
            ts = timestamps.get(Path(filename).name, '')  # fallback to empty if not found
            writer.writerow({'filename': filename, 'timestamp': ts, 'flags': flags})

if __name__ == "__main__":
    main()
