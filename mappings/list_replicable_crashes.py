import os
import csv
from pathlib import Path
import sys

def collect_first_crashes(folder_path):
    seen_pocs = set()
    crashing_rows = []

    folder = Path(folder_path)
    csv_files = sorted(folder.glob("crash_report_*.csv"))

    for csv_file in csv_files:
        if csv_file.name.endswith("retro.csv"):
            continue  # Skip retro files
        with csv_file.open(newline='', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                poc = row.get('poc_filename')
                crashed = row.get('crashed', '').strip().upper() == 'TRUE'

                if crashed and poc not in seen_pocs:
                    crashing_rows.append(row)
                    seen_pocs.add(poc)

    return crashing_rows

# Example usage
if __name__ == "__main__":
    folder = "/mnt/c/Users/asus/Downloads/ALFuzz/mappings"  # replace with your actual folder path
    crashes = collect_first_crashes(folder)

    # Print as CSV
    if crashes:
        fieldnames = crashes[0].keys()
        writer = csv.DictWriter(sys.stdout, fieldnames=fieldnames)
        writer.writeheader()
        for row in crashes:
            writer.writerow(row)
    else:
        print("No crashing entries found.")
