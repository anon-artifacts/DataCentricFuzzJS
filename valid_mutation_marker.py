import argparse
import os
import subprocess
import tempfile
import sys
from crash_predictor_cli_final import sha1sum, parse_feature_dict, get_cache_conn
import json
import time
from feature_extractor_v4 import process_poc, process_poc_folder
import dynamic_feature_extractor_v2 as dynamic_extractor
from feature_cache import load_features_and_ranges

static_features_selected, dynamic_features_selected, feature_ranges, _ = (
    load_features_and_ranges()
)


def extract_score_shap_via_cache(filepath, fid):
    fhash = sha1sum(filepath)
    conn = get_cache_conn()
    cur = conn.cursor()

    cur.execute("SELECT prob, shap FROM cache WHERE hash = ? OR id = ?", (fhash, fid))
    row = cur.fetchone()
    if row:
        prob = float(row[0])
        shap = json.loads(row[1]) if row[1] else []
        return prob, shap
    import requests

    static_features_str = extract_features_via_cli(filepath, flags="", static="1")
    static_features = parse_feature_dict(static_features_str)
    filtered_static = {k: static_features.get(k, 0) for k in static_features_selected}

    # Extract dynamic features
    flags = "--expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64"
    dynamic_features_str = extract_features_via_cli(filepath, flags=flags, static="0")
    dynamic_features = parse_feature_dict(dynamic_features_str)
    filtered_dynamic = {
        k: dynamic_features.get(k, 0) for k in dynamic_features_selected
    }

    # Merge features for prediction
    all_features = {**filtered_static, **filtered_dynamic}
    # Call server for prediction and SHAP
    res = requests.post("http://localhost:5000/predict", json=all_features)
    prob = res.json().get("probability", 0.0)
    shap_res = requests.post("http://localhost:5000/shap", json=all_features)
    shap_features = shap_res.json().get("shap_values", [])
    # # Only keep features indicated by SHAP and present in selected features
    shap_feature_names = set(shap_features)
    selected_feature_names = set(static_features_selected + dynamic_features_selected)
    relevant_features = {
        k: all_features[k]
        for k in selected_feature_names & shap_feature_names
        if k in all_features
    }

    # Insert into cache
    cur.execute(
        "INSERT OR REPLACE INTO cache (hash, id, prob, shap) VALUES (?, ?, ?, ?)",
        (fhash, fid, prob, json.dumps(relevant_features)),
    )
    conn.commit()
    return prob, relevant_features


def extract_features_via_cli(filepath, flags, static="1"):
    merged_feats = {}
    if static == "1":
        feats_static = process_poc(filepath, return_format="dict")
        merged_feats = feats_static
    elif static == "0":
        feats_dynamic = dynamic_extractor.process_poc(
            filepath, flags, return_format="dict"
        )

        feats_dynamic.pop("filename", None)
        merged_feats = feats_dynamic
    else:
        feats_static = process_poc(filepath, return_format="dict")
        feats_dynamic = dynamic_extractor.process_poc(
            filepath, flags, return_format="dict"
        )
        feats_dynamic.pop("filename", None)
        merged_feats = {**feats_static, **feats_dynamic}

    result = json.dumps(merged_feats, indent=2, ensure_ascii=False)

    result_dict = json.loads(result.strip())
    return result_dict


def run_js_fast(parent_filepath, mutated_filepath, selected_static_features, parent_id):
    """low fidelity check with static features only."""
    try:
        parent_hash = sha1sum(parent_filepath)
        mutated_hash = sha1sum(mutated_filepath)
        if parent_hash == mutated_hash:
            return {}, {}, {}, False  # Reject if code is identical

        prob, features_dict = extract_score_shap_via_cache(parent_filepath, parent_id)
        if prob == 0.0:
            return {}, {}, {}, False
        features_dict = {
            k: v for k, v in features_dict.items() if k in selected_static_features
        }

        features_dict_mutated = parse_feature_dict(
            extract_features_via_cli(mutated_filepath, flags="")
        )
        filtered_features_mutated = {
            k: v
            for k, v in features_dict_mutated.items()
            if k in selected_static_features
        }

        for key in features_dict:
            parent_val = features_dict[key]
            mutated_val = filtered_features_mutated.get(key)
            if isinstance(parent_val, bool) or isinstance(mutated_val, bool):
                # Directly compare booleans, skip float conversion
                if parent_val != mutated_val:
                    return {}, {}, {}, False
                continue
            # Use feature range from CSV
            if key in feature_ranges:
                min_val = feature_ranges[key]["min"]
                max_val = feature_ranges[key]["max"]
                std_val = feature_ranges[key]["std"]

                # Define allowed deviation as 2*std or clamp within min/max
                lower_bound = max(min_val, parent_val - 1 * std_val)
                upper_bound = min(max_val, parent_val + 1 * std_val)

                try:
                    mutated_num = float(mutated_val)
                except (ValueError, TypeError):
                    return {}, {}, {}, False
                if mutated_num < lower_bound or mutated_num > upper_bound:
                    return {}, {}, {}, False
            else:
                # fallback to strict equality if no range available
                if parent_val != mutated_val:
                    return {}, {}, {}, False
            # Detect duplicate or trivially identical mutants

        return features_dict, features_dict_mutated, filtered_features_mutated, True
    except subprocess.TimeoutExpired:
        return {}, {}, {}, False


def predict_from_file(filepath, features_all, selected):
    import requests

    feature_dict = {k: features_all.get(k, 0) for k in selected}

    # Get prediction only (no cache insertion here)
    res = requests.post("http://localhost:5000/predict", json=feature_dict)
    pred = res.json().get("probability", 0.0)
    return pred


def insert_prediction_and_shap(filepath, fid, all_features, prob):
    """Insert prediction score and SHAP features into cache."""
    import requests

    # Get SHAP values
    res_shap = requests.post("http://localhost:5000/shap", json=all_features)
    shap_features = res_shap.json().get("shap_values", [])

    shap_feature_names = set(shap_features)
    selected_feature_names = set(static_features_selected + dynamic_features_selected)
    relevant_features = {
        k: all_features[k]
        for k in selected_feature_names & shap_feature_names
        if k in all_features
    }

    # Insert into cache
    fhash = sha1sum(filepath)
    conn = get_cache_conn()
    cur = conn.cursor()
    cur.execute(
        "INSERT OR REPLACE INTO cache (hash, id, prob, shap) VALUES (?, ?, ?, ?)",
        (fhash, fid, prob, json.dumps(relevant_features)),
    )
    conn.commit()


def run_js_slow(
    parent_filepath,
    mutated_filepath,
    selected_dynamic_features,
    static_all_features,
    selected_all_features,
    flags,
    parent_id,
    mutated_id,
):
    """Run child JS with full tracing flags once and return the trace output."""
    try:
        mutated_hash = sha1sum(mutated_filepath)
        conn = get_cache_conn()
        cur = conn.cursor()
        cur.execute("SELECT 1 FROM cache WHERE hash = ?", (mutated_hash,))
        if cur.fetchone():
            return {}, {}, {}, False, "duplicate mutant", 0.0

        parent_score, features_dict = extract_score_shap_via_cache(
            parent_filepath, parent_id
        )
        if parent_score == 0.0:
            return {}, {}, {}, False, "Failed Probability Check", 0.0
        features_dict = {
            k: v for k, v in features_dict.items() if k in selected_dynamic_features
        }
        flags = "--expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64"

        features_dict_mutated = parse_feature_dict(
            extract_features_via_cli(mutated_filepath, flags=flags, static="0")
        )
        mutated_score = predict_from_file(
            mutated_filepath,
            static_all_features | features_dict_mutated,
            selected_all_features,
        )
        if mutated_score < parent_score and mutated_score < 0.5:
            return {}, {}, {}, False, "unequal score", 0.0
        filtered_features_mutated = {
            k: v
            for k, v in features_dict_mutated.items()
            if k in selected_dynamic_features
        }

        for key in features_dict:
            parent_val = features_dict[key]
            mutated_val = filtered_features_mutated.get(key)

            if isinstance(parent_val, bool) or isinstance(mutated_val, bool):
                if parent_val != mutated_val:
                    return {}, {}, {}, False, f"unequal bool for {key}", 0.0
                continue

            # Use feature range from CSV
            if key in feature_ranges:
                min_val = feature_ranges[key]["min"]
                max_val = feature_ranges[key]["max"]
                std_val = feature_ranges[key]["std"]

                # Define allowed deviation as 2*std or clamp within min/max
                lower_bound = max(min_val, parent_val - 1 * std_val)
                upper_bound = min(max_val, parent_val + 1 * std_val)

                try:
                    mutated_num = float(mutated_val)
                except (ValueError, TypeError):
                    return {}, {}, {}, False, f"invalid value for {key}", 0.0

                if mutated_num < lower_bound or mutated_num > upper_bound:
                    return (
                        {},
                        {},
                        {},
                        False,
                        f"out of range for {key}: {mutated_num} not in [{lower_bound},{upper_bound}]",
                        0.0,
                    )
            else:
                # fallback to strict equality if no range available
                if parent_val != mutated_val:
                    return {}, {}, {}, False, f"no range, unequal {key}", 0.0

        return (
            features_dict,
            features_dict_mutated,
            filtered_features_mutated,
            True,
            "EQUAL===============",
            mutated_score,
        )
    except subprocess.TimeoutExpired:
        return {}, {}, {}, False, "timeout", 0.0


def insert_into_cache(path, id=None):
    import requests

    """
    Given a file or folder, process all JS files, extract selected static and dynamic features,
    call the server to get prob and shap, and insert hash, prob, and original feature dicts
    (for SHAP-indicated features from selected features) into the cache.
    """
    js_files = []
    if os.path.isfile(path) and path.endswith(".js"):
        js_files = [path]
    elif os.path.isdir(path):
        for root, _, files in os.walk(path):
            for file in files:
                if file.endswith(".js"):
                    js_files.append(os.path.join(root, file))
    else:
        print(f"Path {path} is not a JS file or directory.")
        return

    for js_file in js_files:
        if os.path.isfile(path):  # single file mode
            filename = os.path.basename(js_file)
            # take the last part after last "_" and before extension
            file_id = filename.rsplit("_", 1)[-1].replace(".js", "")
        else:  # directory mode
            file_id = id[js_file]
        # Extract static features
        static_features_str = extract_features_via_cli(js_file, flags="", static="1")
        static_features = parse_feature_dict(static_features_str)
        filtered_static = {
            k: static_features.get(k, 0) for k in static_features_selected
        }

        # Extract dynamic features
        flags = "--expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64"
        dynamic_features_str = extract_features_via_cli(
            js_file, flags=flags, static="0"
        )
        dynamic_features = parse_feature_dict(dynamic_features_str)
        filtered_dynamic = {
            k: dynamic_features.get(k, 0) for k in dynamic_features_selected
        }

        # Merge features for prediction
        all_features = {**filtered_static, **filtered_dynamic}
        # Call server for prediction and SHAP
        res = requests.post("http://localhost:5000/predict", json=all_features)
        prob = res.json().get("probability", 0.0)
        shap_res = requests.post("http://localhost:5000/shap", json=all_features)
        shap_features = shap_res.json().get("shap_values", [])
        # Only keep features indicated by SHAP and present in selected features
        shap_feature_names = set(shap_features)
        selected_feature_names = set(
            static_features_selected + dynamic_features_selected
        )
        relevant_features = {
            k: all_features[k]
            for k in selected_feature_names & shap_feature_names
            if k in all_features
        }
        # Insert into cache
        if prob >= 0.00:  # replace 0.00 if filtering
            fhash = sha1sum(js_file)
            conn = get_cache_conn()
            cur = conn.cursor()
            cur.execute(
                "INSERT OR REPLACE INTO cache (hash, id, prob, shap) VALUES (?, ?, ?, ?)",
                (fhash, file_id, prob, json.dumps(relevant_features)),
            )
            conn.commit()
            if os.path.isfile(path):
                print("true", flush=True)
        else:
            print(f"Skipping {js_file}: low prob {prob}", flush=True)
            if os.path.isfile(path):
                print("false", flush=True)


def predict(
    parent_code: str,
    mutated_code: str,
    parent_id: str,
    mutated_id: str,
    flags: str = "",
) -> bool:
    """
    Callable function version of predictor.
    Runs both fast and slow checks and returns True/False for 'retained'.
    """

    # --- Create temporary files for parent and mutant ---
    import tempfile
    import os

    parent_tmp = tempfile.NamedTemporaryFile(mode="w", suffix=".js", delete=False)
    parent_tmp.write(parent_code)
    parent_tmp.close()

    mutant_tmp = tempfile.NamedTemporaryFile(mode="w", suffix=".js", delete=False)
    mutant_tmp.write(mutated_code)
    mutant_tmp.close()

    retained = False
    try:
        # Fast check
        (
            features_dict_parent,
            features_dict_mutated,
            filtered_features_mutated,
            retained,
        ) = run_js_fast(
            parent_tmp.name, mutant_tmp.name, static_features_selected, parent_id
        )

        if retained:
            (
                features_dict_parent_dynamic,
                features_dict_mutated_dynamic,
                filtered_features_mutated_dynamic,
                retained,
                reason,
                mutated_score,
            ) = run_js_slow(
                parent_tmp.name,
                mutant_tmp.name,
                dynamic_features_selected,
                features_dict_mutated,
                static_features_selected + dynamic_features_selected,
                flags or "",
                parent_id,
                mutated_id,
            )
            if retained:
                all_features = filtered_features_mutated | filtered_features_mutated_dynamic
                insert_prediction_and_shap(
                    mutant_tmp.name, mutated_id, all_features, mutated_score
                )

        return retained

    finally:
        # Always cleanup
        os.remove(parent_tmp.name)
        os.remove(mutant_tmp.name)


def main():
    parser = argparse.ArgumentParser(description="Crash Predictor CLI")

    subparsers = parser.add_subparsers(dest="command", help="Available commands")

    # --- predict command ---
    predict_parser = subparsers.add_parser(
        "predict", help="Predict crash from feature dictionary"
    )
    predict_parser.add_argument(
        "--model", type=str, help="Path to trained model file (.pkl)"
    )
    predict_parser.add_argument("--parent_file", help="Path to JS Parent PoC file")
    predict_parser.add_argument("--mutated_file", help="Path to JS Mutated PoC file")
    predict_parser.add_argument("--parent_code", help="JS Parent PoC code")
    predict_parser.add_argument("--mutated_code", help="JS Mutated PoC code")
    predict_parser.add_argument(
        "--parent_id", type=str, help="ID of parent JS file or directory"
    )
    predict_parser.add_argument(
        "--mutated_id", type=str, help="ID of mutated JS file or directory"
    )
    predict_parser.add_argument(
        "--features", type=str, help="Comma-separated list of feature_name=value pairs"
    )
    predict_parser.add_argument("--result_file", type=str, help="Result file")
    predict_parser.add_argument(
        "--features_file",
        help="Path to JSON file containing a {feature: value, ...} object",
    )
    predict_parser.add_argument("--flags", type=str, help="Optional flags as a string")

    # --- insert command ---
    insert_parser = subparsers.add_parser(
        "insert", help="Insert features and predictions into cache"
    )
    insert_parser.add_argument(
        "--path", type=str, required=True, help="Path to JS file or directory"
    )
    insert_parser.add_argument(
        "--id", type=str, required=False, help="ID of JS file or directory"
    )

    PLOT_FOLDER = "plot_timed_fractions"
    args = parser.parse_args()

    if args.command == "insert":
        if args.path and args.id:
            insert_into_cache(args.path, args.id)
        elif args.path:
            insert_into_cache(args.path)
        else:
            print("Please provide --path for insert command.")
        return

    if args.command == "predict":
        if args.parent_file:
            (
                features_dict_parent,
                features_dict_mutated,
                filtered_features_mutated,
                retained,
            ) = run_js_fast(
                args.parent_file,
                args.mutated_file,
                static_features_selected,
                args.parent_id,
            )
            if retained:
                if args.flags is None:
                    args.flags = ""
                (
                    features_dict_parent_dynamic,
                    features_dict_mutated_dynamic,
                    filtered_features_mutated_dynamic,
                    retained,
                    reason,
                ) = run_js_slow(
                    args.parent_file,
                    args.mutated_file,
                    dynamic_features_selected,
                    features_dict_mutated,
                    static_features_selected + dynamic_features_selected,
                    args.flags,
                    args.parent_id,
                    args.mutated_id,
                )
            if retained:
                parent_all = features_dict_parent | features_dict_parent_dynamic
                mutated_all = (
                    filtered_features_mutated | filtered_features_mutated_dynamic
                )
                print(parent_all)
                print(mutated_all)
                print(args.mutated_file)
                cmd = [
                    sys.executable,  # ensures same Python as current process
                    "-u",
                    "shap_refiner_worker.py",
                    args.mutated_file,
                    args.mutated_id,
                    json.dumps(parent_all),
                    json.dumps(mutated_all),
                    "10",  # timeout in seconds
                ]

                # Launch independent process and keep prints visible
                subprocess.Popen(
                    cmd, stdout=sys.stdout, stderr=sys.stderr, preexec_fn=os.setpgrp
                )

            print(retained)
            # Always write result, even if an exception occurred
            with open(args.result_file, "w") as f:
                f.write(str(retained))

        if args.parent_code:
            # Create parent JS file
            parent_tmp = tempfile.NamedTemporaryFile(
                mode="w", suffix=".js", delete=False
            )
            parent_tmp.write(args.parent_code)
            parent_tmp.close()  # flush and close immediately

            # Create mutant JS file
            mutant_tmp = tempfile.NamedTemporaryFile(
                mode="w", suffix=".js", delete=False
            )
            mutant_tmp.write(args.mutated_code)  # or apply mutation logic here
            mutant_tmp.close()

            try:
                times = time.time()
                # Run the fast JS analysis
                (
                    features_dict_parent,
                    features_dict_mutated,
                    filtered_features_mutated,
                    retained,
                ) = run_js_fast(
                    parent_tmp.name,
                    mutant_tmp.name,
                    static_features_selected,
                    args.parent_id,
                )

                print(retained)
                # If features were retained, run the slow JS analysis
                if retained:
                    if args.flags is None:
                        args.flags = ""
                    (
                        features_dict_parent_dynamic,
                        features_dict_mutated_dynamic,
                        filtered_features_mutated_dynamic,
                        retained,
                        reason,
                        mutated_score,
                    ) = run_js_slow(
                        parent_tmp.name,
                        mutant_tmp.name,
                        dynamic_features_selected,
                        features_dict_mutated,
                        static_features_selected + dynamic_features_selected,
                        args.flags,
                        args.parent_id,
                        args.mutated_id,
                    )
                if retained:
                    parent_all = features_dict_parent | features_dict_parent_dynamic
                    mutated_all = (
                        filtered_features_mutated | filtered_features_mutated_dynamic
                    )
                    cmd = [
                        sys.executable,  # ensures same Python as current process
                        "-u",
                        "shap_refiner_worker.py",
                        mutant_tmp.name,
                        args.mutated_id,
                        json.dumps(parent_all),
                        json.dumps(mutated_all),
                        "10",  # timeout in seconds
                    ]

                    # Launch independent process and keep prints visible
                    subprocess.Popen(
                        cmd, stdout=sys.stdout, stderr=sys.stderr, preexec_fn=os.setpgrp
                    )
                print(retained)
                with open(args.result_file, "w") as f:
                    f.write(str(retained))

            finally:
                print("Fast analysis time:", time.time() - times)
                # Clean up temporary files
                os.remove(parent_tmp.name)
                os.remove(mutant_tmp.name)


if __name__ == "__main__":
    main()
