from time import time
import pandas as pd
import os
import subprocess
from datetime import datetime, timedelta
import signal
# File paths
POC_MANIFEST = "pocs.csv"
VERSION_FILE = "last_tags_per_month.csv"
POC_DIR = "../poc_negatives_updated"
BIN_DIR = os.path.expanduser("~/.jsvu/bin")
LOG_DIR = "reproduce_logs"
REPORT_FILE = "crash_report_261_321_ext.csv"

# Crash keywords to search for
CRASH_KEYWORDS = [
    "CRASH", "FATAL", "AddressSanitizer", "Segmentation fault","SEGV_ACCERR",
    "Check failed", "Security", "OOB", "out-of-bounds", "out of bounds", "stack trace", "trap"
]

# Make sure log directory exists
os.makedirs(LOG_DIR, exist_ok=True)

# Read input CSVs
pocs_df = pd.read_csv(POC_MANIFEST)
pocs_df["timestamp"] = pd.to_datetime(pocs_df["timestamp"], format='ISO8601', errors='coerce').dt.date

versions_df = pd.read_csv(VERSION_FILE)
versions_df["date"] = pd.to_datetime(versions_df["date"]).dt.date
# Results to be collected here
results = []

# For each PoC
for _, poc_row in pocs_df.iterrows():
    poc_file = poc_row["filename"]
    poc_date = poc_row["timestamp"]
    # Use default flags if empty
    flags = poc_row["flags"] if pd.notna(poc_row["flags"]) and poc_row["flags"].strip() else "--allow-natives-syntax --expose-gc"
    start_date = poc_date - timedelta(days=365)
    # Find eligible V8 versions within the 1-year window
    eligible_versions = versions_df[
        (versions_df["date"] >= start_date) & (versions_df["date"] <= poc_date)
    ]

    for _, ver_row in eligible_versions.iterrows():
        version = ver_row["ref_name"]
        v8_binary = os.path.join(BIN_DIR, f"v8-{version}")
        poc_path = os.path.join(POC_DIR, poc_file)
        log_file = os.path.join(LOG_DIR, f"{poc_file}-{version}.log")

        # Skip if binary or PoC doesn't exist
        if not os.path.isfile(v8_binary):
            print(f"[SKIP] Missing V8 binary: {v8_binary}")
            continue
        if not os.path.isfile(poc_path):
            print(f"[SKIP] Missing PoC: {poc_path}")
            continue

        # Construct command
        cmd = [v8_binary] + flags.split() + [poc_path]

        # Run and log output
        with open(log_file, "w") as log_f:
            print(f"[RUN] {poc_file} on v8-{version}")
            try:
                 # Start the subprocess in a new process group (so we can kill the group)
                proc = subprocess.Popen(
                    cmd,
                    stdout=log_f,
                    stderr=subprocess.STDOUT,
                    preexec_fn=os.setsid  # UNIX only: sets a new process group
                )
                proc.wait(timeout=20)
            except subprocess.TimeoutExpired:
                # Kill the entire process group
                os.killpg(os.getpgid(proc.pid), signal.SIGKILL)
                log_f.write("\nTIMEOUT EXPIRED — Process group killed\n")
            except Exception as e:
                log_f.write(f"\nERROR: {e}\n")
            finally:
                # Optional: Ensure the process is gone
                if proc and proc.poll() is None:
                    proc.kill()
        # Check for crash keywords in log
        crashed = False
        with open(log_file, "r", errors="ignore") as f:
            log_content = f.read()
            for keyword in CRASH_KEYWORDS:
                if keyword.lower() in log_content.lower():
                    crashed = True
                    break

        # Add to results
        results.append({
            "poc_filename": poc_file,
            "v8_version_tested": version,
            "issue_report_date": poc_date,
            "flags_used": flags,
            "crashed": "TRUE" if crashed else "FALSE",
            "log_file": log_file
        })

# Write summary report
report_df = pd.DataFrame(results)
report_df.to_csv(REPORT_FILE, index=False)
print(f"\n✅ Report written to {REPORT_FILE}")
