import csv
import re
from pathlib import Path

# === User Input Section ===
SOURCE_DIR = Path("../folds/fold_3/tmp/mjsunit")  # Folder containing .js files
OUTPUT_FILE = "../folds/fold_3/tmp/positives_mapping_mjsunit.csv"

V8_VERSION_TESTED = input("Enter the V8 version tested: ").strip()
ISSUE_REPORT_DATE = input("Enter the issue report date (YYYY-MM-DD): ").strip()

DEFAULT_FLAGS = "--allow-natives-syntax --expose-gc"

# === Flag Extractor ===
def extract_flags_from_file(filepath):
    try:
        content = filepath.read_text(errors='ignore')
        match = re.search(r"//.*?(--[\w\-]+(?:\s+--[\w\-]+)*)", content)
        if match:
            return match.group(1).strip()
        flags = re.findall(r"--[\w-]+(?:=[\w\d-]+)?", content)
        return " ".join(flags) if flags else DEFAULT_FLAGS
    except Exception as e:
        return f"ERROR: {e}"

# === Main Script ===
def main():
    js_files = sorted(SOURCE_DIR.glob("*.js"))

    with open(OUTPUT_FILE, mode='w', newline='') as outfile:
        writer = csv.DictWriter(outfile, fieldnames=[
            'poc_filename', 'v8_version_tested', 'issue_report_date', 'flags_used'
        ])
        writer.writeheader()

        for js_file in js_files:
            flags = extract_flags_from_file(js_file)
            writer.writerow({
                'poc_filename': js_file.name,
                'v8_version_tested': V8_VERSION_TESTED,
                'issue_report_date': ISSUE_REPORT_DATE,
                'flags_used': flags
            })

if __name__ == "__main__":
    main()
