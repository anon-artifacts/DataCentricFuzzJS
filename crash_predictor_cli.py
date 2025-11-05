import argparse
import json
from pathlib import Path
import sqlite3
import hashlib
import subprocess
import os
import tempfile
import re

CACHE_DB = "prediction_cache.db"

def sha1sum(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        raw_code = f.read()
    cleaned_code = remove_js_comments(raw_code).strip()
    return hashlib.sha1(cleaned_code.encode("utf-8")).hexdigest()

def get_cache_conn():
    conn = sqlite3.connect(CACHE_DB)
    conn.execute("CREATE TABLE IF NOT EXISTS cache (hash TEXT PRIMARY KEY, prob REAL)")
    return conn

def extract_features_via_cli(filepath):
    cmd = ["python3.13", "feature_extractor_cli.py", "file", "--i", filepath, "--format", "string"]
    result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    return result.stdout.strip()

def parse_feature_string(s):
    feature_dict = {}
    for pair in s.split(","):
        key, value = pair.split("=")
        # Safely handle booleans, None, numbers, and fallback to string
        try:
            parsed_value = eval(value, {"__builtins__": {}})
        except Exception:
            parsed_value = value  # treat as string if not evaluable
        feature_dict[key] = parsed_value
    return feature_dict

def remove_js_comments(code: str) -> str:
    # Remove /* block comments */
    code = re.sub(r'/\*[\s\S]*?\*/', '', code)
    # Remove // line comments
    code = re.sub(r'//.*', '', code)
    return code

def cached_or_predict_from_file(js_path, model_path, selected):
    fhash = sha1sum(js_path)
    conn = get_cache_conn()
    cur = conn.cursor()

    cur.execute("SELECT prob FROM cache WHERE hash = ?", (fhash,))
    row = cur.fetchone()
    if row:
        return float(row[0])

    # Not cached → extract features via CLI
    raw_feat = extract_features_via_cli(js_path)
    feature_dict = parse_feature_string(raw_feat)
    feature_dict = {k: feature_dict.get(k, 0) for k in selected}

    import requests
    res = requests.post("http://localhost:5000/predict", json=feature_dict)
    pred = res.json()["probability"]

    cur.execute("INSERT OR REPLACE INTO cache (hash, prob) VALUES (?, ?)", (fhash, float(pred)))
    conn.commit()
    return pred

def smart_cast(v):
    try:
        return eval(v, {"__builtins__": {}})
    except:
        return v  # fallback to string if eval fails
    
def main():
    parser = argparse.ArgumentParser(description="Crash Predictor CLI")
    
    subparsers = parser.add_subparsers(dest="command", help="Available commands")

    # --- train command ---
    train_parser = subparsers.add_parser("train", help="Train the model on given positive and negative CSVs")
    train_parser.add_argument("--positive", type=str, required=True, help="Path to positive features CSV")
    train_parser.add_argument("--negative", type=str, required=True, help="Path to negative features CSV")

    # --- predict command ---
    predict_parser = subparsers.add_parser("predict", help="Predict crash from feature dictionary")
    predict_parser.add_argument("--model", type=str, help="Path to trained model file (.pkl)")
    predict_parser.add_argument("--file", help="Path to JS PoC file")
    predict_parser.add_argument("--code", help="JS PoC code")
    predict_parser.add_argument("--features", type=str, help="Comma-separated list of feature_name=value pairs")
    predict_parser.add_argument(
        "--features_file",
        help="Path to JSON file containing a {feature: value, ...} object"
    )
    args = parser.parse_args()
    if args.command == "train":
        from prediction import (
            load_and_prepare_data,
            select_features_automatically,
            evaluate_model_with_cv
        )
        df = load_and_prepare_data(args.positive, args.negative)
        if df is not None:
            selected_features = select_features_automatically(df)
            evaluate_model_with_cv(df, selected_features)

    elif args.command == "predict":
        # Load feature list used during training
        with open("selected_features.json", "r") as f:
            selected = json.load(f)
            
        if args.file:
            pred = cached_or_predict_from_file(args.file, args.model, selected)
            print(f"{args.file},{pred}")
            return
        
        if args.code:
            tmp = tempfile.NamedTemporaryFile(mode="w", suffix=".js", delete=False)
            tmp.write(args.code)
            tmp.close()  # closes and flushes instantly
            try:
                pred = cached_or_predict_from_file(tmp.name, args.model, selected)
                print(pred)
                return 
            finally:
                os.remove(tmp.name)  # manually delete to avoid lingering files
        
        # Parse the input string into a dictionary
        feature_dict = {}
        if args.features_file:
            with open(args.features_file) as f:
                feature_dict = json.load(f)
        else: 
            for pair in args.features.split(","):
                key, value = pair.split("=")
                feature_dict[key.strip()] = smart_cast(value.strip())
                
         # Filter down to selected features only
        feature_dict = {k: feature_dict.get(k, 0) for k in selected}
        import requests
        res = requests.post("http://localhost:5000/predict", json=feature_dict)
        pred = res.json()["probability"]
        #pred = predict_crash_from_dict(feature_dict, model_path=args.model)
        print(pred)
        #print(f"🔮 Prediction: {'Crash (1)' if pred == 1 else 'No Crash (0)'}")

    else:
        parser.print_help()
    

if __name__ == "__main__":
    main()
