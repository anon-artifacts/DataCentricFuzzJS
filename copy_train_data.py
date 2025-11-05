import os
import shutil
import pandas as pd
from datetime import datetime

def copy_before_date(input_file, source_folder, dest_folder, cutoff_date_str, is_csv=True):
    """
    Copies .js and .fzil files listed in CSV or text file before cutoff_date to dest_folder.
    
    Args:
        input_file (str): Path to CSV or text file.
        source_folder (str): Folder containing .js and .fzil files.
        dest_folder (str): Destination folder to copy matching files.
        cutoff_date_str (str): Date in format YYYY-MM-DD. Only files before this date are copied.
        is_csv (bool): If True, input_file is CSV. If False, input_file is plain text with "filename: date".
    """
    os.makedirs(dest_folder, exist_ok=True)
    cutoff_date = datetime.strptime(cutoff_date_str, "%Y-%m-%d").date()

    if is_csv:
        df = pd.read_csv(input_file)
        for _, row in df.iterrows():
            try:
                report_date = datetime.strptime(row["issue_report_date"], "%Y-%m-%d").date()
            except Exception:
                continue
            if report_date < cutoff_date:
                base_name = os.path.splitext(row["poc_filename"])[0]
                for ext in [".js", ".fzil"]:
                    src_path = os.path.join(source_folder, base_name + ext)
                    if os.path.exists(src_path):
                        dst_path = os.path.join(dest_folder, base_name + ext)
                        shutil.copy2(src_path, dst_path)
                        print(f"Copied {src_path} -> {dst_path}")
    else:
        # Read plain text file
        with open(input_file, "r") as f:
            for line in f:
                line = line.strip()
                if not line or ":" not in line:
                    continue
                filename, date_str = line.split(":", 1)
                filename = os.path.basename(filename.strip())  # remove folder path
                try:
                    report_date = datetime.fromisoformat(date_str.strip()).date()
                except Exception:
                    continue
                if report_date < cutoff_date:
                    base_name = os.path.splitext(filename)[0]
                    for ext in [".js", ".fzil"]:
                        src_path = os.path.join(source_folder, base_name + ext)
                        if os.path.exists(src_path):
                            dst_path = os.path.join(dest_folder, base_name + ext)
                            shutil.copy2(src_path, dst_path)
                            print(f"Copied {src_path} -> {dst_path}")

if __name__ == "__main__":
    # Example usage
    copy_before_date(
        input_file="logs/issue_time_log.txt",  # text file with "filename: date"
        source_folder="poc_negatives_300",
        dest_folder="corpus_old_pocs/",
        cutoff_date_str="2021-12-31",
        is_csv=False
    )
