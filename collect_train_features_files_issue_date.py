import pandas as pd

COLUMNS_TO_DROP = [
        'exit_code', 'execution_time_ms', 'peak_memory_mb', 'crash_signal', 'error','log_kb','store_ic_count','bucket_misc_count','elem_kind_holey','total_ic_count','map_create_count','load_ic_count'
]

dynamic_file = "features_dynamic_neg.csv"
static_file = "features_static_neg.csv"
cut_off_date = '2023-03-30'
cut_off_date_dt = pd.to_datetime(cut_off_date, errors='coerce')
dynamic = pd.read_csv(dynamic_file)
static = pd.read_csv(static_file)

dynamic['issue_report_date'] = pd.to_datetime(dynamic['issue_report_date'], errors='coerce')
dynamic = dynamic[dynamic['issue_report_date'].notna() & (dynamic['issue_report_date'] < cut_off_date_dt)]
filenames = dynamic['filename'].tolist()
static = static[static['filename'].isin(filenames)]
dynamic.to_csv(f"features_dynamic_neg_{cut_off_date}.csv", index=False)
static.to_csv(f"features_static_neg_{cut_off_date}.csv", index=False)
