# crash_predictor_cli_final.py
#import ast
#import csv
import argparse, os, subprocess, tempfile, sys
#from pathlib import Path
#import threading
#import pandas as pd
from crash_predictor_cli_final import sha1sum, parse_feature_dict, get_cache_conn
import json
import time
from feature_extractor_v4 import process_poc, process_poc_folder
import dynamic_feature_extractor_v2 as dynamic_extractor
#import sqlite3
static_features_selected = []
dynamic_features_selected = []

#with open("plot_timed_fractions/mean_rank_top_25_perc_features.csv", newline='') as csvfile:
#    reader = csv.DictReader(csvfile)
#    for row in reader:
#        feature = row['feature']
#        feature_type = row['feature_type']
#        if feature_type == 'static':
#            static_features_selected.append(feature)
#        elif feature_type == 'dynamic':
#            dynamic_features_selected.append(feature)
static_features_selected = ['uses_embedded_wasm_binary', 'recursive_generator_or_selfcall', 'undefined_variable_usage', 'allocates_large_array', 'debugprint_call_count', 'recursive_iife_depth', 'dynamic_constructor_dispatch', 'no_object_allocation_in_optimized_function', 'uses_reflection_with_bigint', 'uses_worker_or_async', 'uses_try_catch', 'uses_jit_optimization_intrinsics', 'array_bounds_manipulation', 'exception_suppressed_code_depth', 'manipulates_array', 'uses_allow_natives_syntax', 'uses_reflection', 'object_property_growth_rate', 'gc_invocations', 'typedarray_dv_usage', 'uses_typed_array', 'loop_count_high_alloc', 'cleanup_token_mutated_after_register', 'has_maglev_or_turbofan_opt', 'uses_finalization_registry']
dynamic_features_selected = ['unique_map_types', 'is_instruction_stream', 'back_pointer_is_null', 'non_extensible_flag', 'bucket_weak_count', 'opt_marked', 'deopt_ratio', 'elem_kind_double', 'instance_size_max', 'prototype_failure_ics', 'gc_major', 'elem_kind_misc', 'megamorphic_ics', 'elem_kind_slow', 'ic_slow_stub_count', 'deopt_all']
# Load feature ranges CSV
#feature_ranges_df = pd.read_csv("feature_ranges.csv")
# Convert to dict for faster access
#feature_ranges = feature_ranges_df.set_index("feature").to_dict(orient="index")
feature_ranges = {'exit_code': {'min': -99.0, 'max': 1.0, 'std': 33.71218155823165}, 'execution_time_ms': {'min': 0.0, 'max': 3266.0, 'std': 977.648832796058}, 'peak_memory_mb': {'min': 0.0, 'max': 0.0, 'std': 0.0}, 'uniq_map_create': {'min': 0.0, 'max': 0.0, 'std': 0.0}, 'uniq_map_trans': {'min': 0.0, 'max': 0.0, 'std': 0.0}, 'uniq_ic_states': {'min': 0.0, 'max': 0.0, 'std': 0.0}, 'uniq_elem_kind': {'min': 0.0, 'max': 0.0, 'std': 0.0}, 'proto_invalidated': {'min': 0.0, 'max': 0.0, 'std': 0.0}, 'gc_minor': {'min': 0.0, 'max': 338.0, 'std': 27.59276571291691}, 'gc_major': {'min': 0.0, 'max': 166.0, 'std': 21.83407550040915}, 'opt_attempts': {'min': 0.0, 'max': 63.0, 'std': 8.56834913843062}, 'opt_success': {'min': 0.0, 'max': 61.0, 'std': 8.375834616624056}, 'opt_marked': {'min': 0.0, 'max': 14.0, 'std': 2.349574421080178}, 'deopt_all': {'min': 0.0, 'max': 2234.0, 'std': 177.13614401931642}, 'deopt_unique_reasons': {'min': 0.0, 'max': 4.0, 'std': 0.7356622520751313}, 'deopt_ratio': {'min': 0.0, 'max': 744.667, 'std': 59.04635056160522}, 'log_kb': {'min': 0.0, 'max': 4882.0, 'std': 788.3754794920238}, 'map_create_count': {'min': 0.0, 'max': 5181.0, 'std': 642.5528180894631}, 'bucket_string_count': {'min': 0.0, 'max': 86.0, 'std': 7.819927227424178}, 'elem_kind_holey': {'min': 0.0, 'max': 5142.0, 'std': 661.9925232718006}, 'instance_size_max': {'min': 0.0, 'max': 1218.0, 'std': 88.48115739385912}, 'back_pointer_is_null': {'min': 0.0, 'max': 4463.0, 'std': 441.8592133762811}, 'non_extensible_flag': {'min': 0.0, 'max': 197.0, 'std': 17.788116387830954}, 'bucket_misc_count': {'min': 0.0, 'max': 5057.0, 'std': 650.8482966210736}, 'bucket_collection_count': {'min': 0.0, 'max': 55.0, 'std': 5.5503930050895125}, 'bucket_array_count': {'min': 0.0, 'max': 230.0, 'std': 20.48386115431338}, 'bucket_weak_count': {'min': 0.0, 'max': 20.0, 'std': 1.9936009404632855}, 'bucket_handler_count': {'min': 0.0, 'max': 39.0, 'std': 3.551535805241102}, 'bucket_dictionary_count': {'min': 0.0, 'max': 34.0, 'std': 3.018663913176641}, 'bucket_code_count': {'min': 0.0, 'max': 9.0, 'std': 0.8175197294748101}, 'elem_kind_shared': {'min': 0.0, 'max': 4.0, 'std': 0.4048704361374343}, 'elem_kind_slow': {'min': 0.0, 'max': 14.0, 'std': 1.5732518576284114}, 'bucket_context_count': {'min': 0.0, 'max': 60.0, 'std': 4.686297944485444}, 'elem_kind_typed': {'min': 0.0, 'max': 137.0, 'std': 10.631235438334857}, 'elem_kind_misc': {'min': 0.0, 'max': 521.0, 'std': 41.17254146306522}, 'elem_kind_double': {'min': 0.0, 'max': 6.0, 'std': 0.5117051983467886}, 'elem_kind_args': {'min': 0.0, 'max': 6.0, 'std': 0.4631986414601423}, 'unique_map_types': {'min': 0.0, 'max': 333.0, 'std': 51.48767555462174}, 'max_descriptor_array_size': {'min': 0.0, 'max': 200.0, 'std': 19.09529690328318}, 'total_ic_count': {'min': 0.0, 'max': 2309.0, 'std': 258.67939834492984}, 'load_ic_count': {'min': 0.0, 'max': 774.0, 'std': 128.45700592969845}, 'store_ic_count': {'min': 0.0, 'max': 1538.0, 'std': 179.10258470791706}, 'megamorphic_ics': {'min': 0.0, 'max': 2188.0, 'std': 218.3479437417789}, 'polymorphic_ics': {'min': 0.0, 'max': 30.0, 'std': 3.190000098578497}, 'monomorphic_ics': {'min': 0.0, 'max': 252.0, 'std': 41.68281670929824}, 'prototype_failure_ics': {'min': 0.0, 'max': 246.0, 'std': 29.0317119601863}, 'ic_state_transitions': {'min': 0.0, 'max': 258.0, 'std': 43.47114521752752}, 'ic_slow_stub_count': {'min': 0.0, 'max': 4.0, 'std': 0.5533405942377901}, 'polymorphic_in_optimized_func_count': {'min': 0.0, 'max': 0.0, 'std': 0.0}, 'ic_triggered_deopts': {'min': 0.0, 'max': 0.0, 'std': 0.0}, 'target': {'min': 1.0, 'max': 1.0, 'std': 0.0}, 'recursive_iife_depth': {'min': 0.0, 'max': 13.0, 'std': 1.3868719266551592}, 'wasm_bytes_len': {'min': 0.0, 'max': 2000561.0, 'std': 158647.21104467826}, 'num_exported_funcs': {'min': 0.0, 'max': 18.0, 'std': 1.6447004005868269}, 'builtins_declared_count': {'min': 0.0, 'max': 0.0, 'std': 0.0}, 'exception_suppressed_code_depth': {'min': 0.0, 'max': 11.0, 'std': 2.0700840538030643}, 'hot_loop_count': {'min': 0.0, 'max': 5.0, 'std': 0.5458078578197915}, 'nested_loop_or_recursion': {'min': 0.0, 'max': 3.0, 'std': 0.586719786841755}, 'function_hotness': {'min': 0.0, 'max': 5.0, 'std': 0.7234403735254566}, 'type_diversion_var': {'min': 0.0, 'max': 5.0, 'std': 0.6947549925274005}, 'type_diversion_func_args': {'min': 0.0, 'max': 32.0, 'std': 3.37407236173222}, 'object_shape_mutation': {'min': 0.0, 'max': 4.0, 'std': 0.3172206342872575}, 'array_bounds_manipulation': {'min': 0.0, 'max': 133.0, 'std': 14.909794311255563}, 'typedarray_dv_usage': {'min': 0.0, 'max': 1.0, 'std': 0.2932241728984986}, 'gc_stress_pattern': {'min': 0.0, 'max': 1.0, 'std': 0.3253971259046561}, 'exception_handling': {'min': 0.0, 'max': 1.0, 'std': 0.4750774577650708}, 'use_of_proxy_reflect': {'min': 0.0, 'max': 1.0, 'std': 0.2842633784688209}, 'use_of_eval_function': {'min': 0.0, 'max': 1.0, 'std': 0.2318140628445681}, 'api_sort_regex_builtin': {'min': 0.0, 'max': 0.0, 'std': 0.0}, 'control_flow_graph_blocks': {'min': 0.0, 'max': 211.0, 'std': 18.31722519364442}, 'control_flow_max_nesting': {'min': 0.0, 'max': 9.0, 'std': 1.528098421648008}, 'gc_invocations': {'min': 0.0, 'max': 9.0, 'std': 0.8607811524083074}, 'function_complexity_score': {'min': 0.0, 'max': 73.0, 'std': 12.244191654866736}, 'debugprint_call_count': {'min': 0.0, 'max': 3.0, 'std': 0.3928952666425436}}
def extract_score_shap_via_cache(filepath, fid):
    fhash = sha1sum(filepath)
    conn = get_cache_conn()
    cur = conn.cursor()

    cur.execute(
    "SELECT prob, shap FROM cache WHERE hash = ? OR id = ?",
        (fhash, fid)
    )
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
    flags = "--expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --maglev --fuzzing --jit-fuzzing --future --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64"        
    dynamic_features_str = extract_features_via_cli(filepath, flags=flags, static="0")
    dynamic_features = parse_feature_dict(dynamic_features_str)
    filtered_dynamic = {k: dynamic_features.get(k, 0) for k in dynamic_features_selected}

    # Merge features for prediction
    all_features = {**filtered_static, **filtered_dynamic}
    # Call server for prediction and SHAP
    res = requests.post("http://localhost:5000/predict", json=all_features)
    prob = res.json().get("probability", 0.0)
    # shap_res = requests.post("http://localhost:5000/shap", json=all_features)
    # shap_features = shap_res.json().get("shap_values", [])
    # # Only keep features indicated by SHAP and present in selected features
    # shap_feature_names = set(shap_features)
    selected_feature_names = set(static_features_selected + dynamic_features_selected)
    relevant_features = {k: all_features[k] for k in selected_feature_names if k in all_features}

    # Insert into cache
    if prob > 0.05:
        conn = get_cache_conn()
        cur = conn.cursor()
        cur.execute(
            "INSERT OR REPLACE INTO cache (hash, id, prob, shap) VALUES (?, ?, ?, ?)",
            (fhash, fid, prob, json.dumps(relevant_features))
        )
        conn.commit()
        return prob, relevant_features
    return 0.0, {}
def extract_features_via_cli(filepath,flags, static="1"):
    start_time = time.time()
    merged_feats = {}
    if static== "1":
        feats_static = process_poc(filepath, return_format="dict")
        merged_feats = feats_static
    elif static == "0":
        feats_dynamic = dynamic_extractor.process_poc(filepath, flags, return_format="dict")
        
        feats_dynamic.pop("filename", None)
        merged_feats = feats_dynamic
    else:
        feats_static = process_poc(filepath, return_format="dict")
        feats_dynamic = dynamic_extractor.process_poc(filepath, flags, return_format="dict")
        feats_dynamic.pop("filename", None)
        merged_feats = {**feats_static, **feats_dynamic}

    result = json.dumps(merged_feats, indent=2, ensure_ascii=False)
            
    
    #cmd = ["python3.13", "feature_extractor_cli.py", "file", "--i", filepath, "--flags", flags, "--format", "dict", "--static", static]
    #result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    end_time = time.time()
    print(f"Static={static}, Time taken: {end_time - start_time:.2f} seconds", flush=True)
    result_dict = json.loads(result.strip())
    return result_dict

def run_js_fast(parent_filepath, mutated_filepath, selected_static_features, parent_id):
    """low fidelity check with static features only."""
    try:
        parent_hash = sha1sum(parent_filepath)
        mutated_hash = sha1sum(mutated_filepath)
        if parent_hash == mutated_hash:
            return {}, {}, {}, False # Reject if code is identical
            
        prob,features_dict = extract_score_shap_via_cache(parent_filepath,parent_id)
        if prob==0.0:
            return {}, {}, {}, False
        features_dict = {k: v for k, v in features_dict.items() if k in selected_static_features}

        features_dict_mutated = parse_feature_dict(extract_features_via_cli(mutated_filepath, flags=""))
        filtered_features_mutated = {k: v for k, v in features_dict_mutated.items() if k in selected_static_features}
        
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
                #lower_bound = max(min_val, parent_val - 2*std_val)
                #upper_bound = min(max_val, parent_val + 2*std_val)

                try:
                    mutated_num = float(mutated_val)
                except (ValueError, TypeError):
                    return {}, {}, {}, False
                #if mutated_num < lower_bound or mutated_num > upper_bound:
                #    return {}, {}, {}, False
            else:
                # fallback to strict equality if no range available
                if parent_val != mutated_val:
                    return {}, {}, {}, False
            # Detect duplicate or trivially identical mutants
        
        return features_dict, features_dict_mutated, filtered_features_mutated, True
    except subprocess.TimeoutExpired:
        return {}, {}, False


def predict_from_file(filepath, features_all, selected, fid):
    import requests

    feature_dict = {k: features_all.get(k, 0) for k in selected}
    # Get prediction
    res = requests.post("http://localhost:5000/predict", json=feature_dict)
    pred = res.json()["probability"]

    # Get SHAP (list of significant features)
    #res = requests.post("http://localhost:5000/shap", json=feature_dict)
    #shap = res.json()["shap_values"]

    # Cache both
    fhash = sha1sum(filepath)
    conn = get_cache_conn()
    cur = conn.cursor()

    cur.execute(
        "INSERT OR REPLACE INTO cache (hash, id, prob, shap) VALUES (?, ?, ?, ?)",
        (fhash, fid, pred, json.dumps(feature_dict))
    )
    conn.commit()

    return pred


def run_js_slow(parent_filepath, mutated_filepath, selected_dynamic_features, static_all_features, selected_all_features, flags, parent_id, mutated_id):
    """Run child JS with full tracing flags once and return the trace output."""
    try:
        mutated_hash = sha1sum(mutated_filepath)
        conn = get_cache_conn()
        cur = conn.cursor()
        cur.execute("SELECT 1 FROM cache WHERE hash = ?", (mutated_hash,))
        if cur.fetchone():
            return {}, {}, {}, False, "duplicate mutant"

        parent_score,features_dict = extract_score_shap_via_cache(parent_filepath, parent_id)
        if parent_score==0.0:
            return {}, {}, {}, False, "Failed Probability Check"
        features_dict = {k: v for k, v in features_dict.items() if k in selected_dynamic_features}
        flags = "--expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --maglev --fuzzing --jit-fuzzing --future --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64"        

        features_dict_mutated = parse_feature_dict(extract_features_via_cli(mutated_filepath, flags=flags, static="0"))
        mutated_score = predict_from_file(mutated_filepath, static_all_features | features_dict_mutated, selected_all_features, mutated_id)
        if mutated_score < parent_score and mutated_score < 0.5:
            return {}, {}, {}, False, "unequal score"
        # filtered_features_mutated = {k: v for k, v in features_dict_mutated.items() if k in selected_dynamic_features}

        # for key in features_dict:
        #     parent_val = features_dict[key]
        #     mutated_val = filtered_features_mutated.get(key)

        #     if isinstance(parent_val, bool) or isinstance(mutated_val, bool):
        #         if parent_val != mutated_val:
        #             return {}, {}, {}, False, f"unequal bool for {key}"
        #         continue

        #     # Use feature range from CSV
        #     if key in feature_ranges:
        #         min_val = feature_ranges[key]["min"]
        #         max_val = feature_ranges[key]["max"]
        #         std_val = feature_ranges[key]["std"]

        #         # Define allowed deviation as 2*std or clamp within min/max
        #         lower_bound = max(min_val, parent_val - 2*std_val)
        #         upper_bound = min(max_val, parent_val + 2*std_val)

        #         try:
        #             mutated_num = float(mutated_val)
        #         except (ValueError, TypeError):
        #             return {}, {}, {}, False, f"invalid value for {key}"

        #         if mutated_num < lower_bound or mutated_num > upper_bound:
        #             return {}, {}, {}, False, f"out of range for {key}: {mutated_num} not in [{lower_bound},{upper_bound}]"
        #     else:
        #         # fallback to strict equality if no range available
        #         if parent_val != mutated_val:
        #             return {}, {}, {}, False, f"no range, unequal {key}"
    
        return features_dict, features_dict_mutated, filtered_features_mutated, True, "EQUAL==============="
    except subprocess.TimeoutExpired:
        return {}, {}, False, "timeout"

    

def insert_into_cache(path, id = None):
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
        filtered_static = {k: static_features.get(k, 0) for k in static_features_selected}

        # Extract dynamic features
        flags = "--expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64"        
        dynamic_features_str = extract_features_via_cli(js_file, flags=flags, static="0")
        dynamic_features = parse_feature_dict(dynamic_features_str)
        filtered_dynamic = {k: dynamic_features.get(k, 0) for k in dynamic_features_selected}

        # Merge features for prediction
        all_features = {**filtered_static, **filtered_dynamic}
        # Call server for prediction and SHAP
        res = requests.post("http://localhost:5000/predict", json=all_features)
        prob = res.json().get("probability", 0.0)
        #shap_res = requests.post("http://localhost:5000/shap", json=all_features)
        #shap_features = shap_res.json().get("shap_values", [])
        # Only keep features indicated by SHAP and present in selected features
        #shap_feature_names = set(shap_features)
        selected_feature_names = set(static_features_selected + dynamic_features_selected)
        relevant_features = {k: all_features[k] for k in selected_feature_names if k in all_features}
        # Insert into cache
        if prob >= 0.05:
            fhash = sha1sum(js_file)
            conn = get_cache_conn()
            cur = conn.cursor()
            cur.execute(
                "INSERT OR REPLACE INTO cache (hash, id, prob, shap) VALUES (?, ?, ?, ?)",
                (fhash, file_id, prob, json.dumps(relevant_features))
            )
            conn.commit()
            if os.path.isfile(path):
                print("true", flush=True)
        else:
            print(f"Skipping {js_file}: low prob {prob}", flush=True)
            if os.path.isfile(path):
                print("false", flush=True)

def predict(parent_code: str,
            mutated_code: str,
            parent_id: str,
            mutated_id: str,
            flags: str = "") -> bool:
    """
    Callable function version of predictor.
    Runs both fast and slow checks and returns True/False for 'retained'.
    """

    # --- Create temporary files for parent and mutant ---
    import tempfile, os

    parent_tmp = tempfile.NamedTemporaryFile(mode="w", suffix=".js", delete=False)
    parent_tmp.write(parent_code)
    parent_tmp.close()

    mutant_tmp = tempfile.NamedTemporaryFile(mode="w", suffix=".js", delete=False)
    mutant_tmp.write(mutated_code)
    mutant_tmp.close()

    retained = False
    try:
        # Fast check
        features_dict_parent, features_dict_mutated, filtered_features_mutated, retained = run_js_fast(
            parent_tmp.name, mutant_tmp.name, static_features_selected, parent_id
        )

        if retained:
            features_dict_parent_dynamic, features_dict_mutated_dynamic, filtered_features_mutated_dynamic, retained, reason = run_js_slow(
                parent_tmp.name,
                mutant_tmp.name,
                dynamic_features_selected,
                features_dict_mutated,
                static_features_selected + dynamic_features_selected,
                flags or "",
                parent_id,
                mutated_id,
            )
        
        # # If retained after both phases
        # if retained:
        #     parent_all = features_dict_parent | features_dict_parent_dynamic
        #     mutated_all = filtered_features_mutated | filtered_features_mutated_dynamic
        #     # You can still spawn shap_refiner_worker.py if needed
        #     # Or just skip to keep things purely callable
        #     cmd = [
        #             "/usr/bin/python3.13", # ensures same Python as current process
        #             "-u", "shap_refiner_worker.py",
        #             mutant_tmp.name,
        #             mutated_id,
        #             json.dumps(parent_all),
        #             json.dumps(mutated_all),
        #             "10"  # timeout in seconds
        #         ]

        #     # Launch independent process and keep prints visible
        #     subprocess.Popen(cmd, stdout=sys.stdout, stderr=sys.stderr, preexec_fn=os.setpgrp)
        return retained

    finally:
        # Always cleanup
        os.remove(parent_tmp.name)
        os.remove(mutant_tmp.name)

                
def main():
    parser = argparse.ArgumentParser(description="Crash Predictor CLI")
    
    subparsers = parser.add_subparsers(dest="command", help="Available commands")
    
    # --- predict command ---
    predict_parser = subparsers.add_parser("predict", help="Predict crash from feature dictionary")
    predict_parser.add_argument("--model", type=str, help="Path to trained model file (.pkl)")
    predict_parser.add_argument("--parent_file", help="Path to JS Parent PoC file")
    predict_parser.add_argument("--mutated_file", help="Path to JS Mutated PoC file")
    predict_parser.add_argument("--parent_code", help="JS Parent PoC code")
    predict_parser.add_argument("--mutated_code", help="JS Mutated PoC code")
    predict_parser.add_argument("--parent_id", type=str, help="ID of parent JS file or directory")
    predict_parser.add_argument("--mutated_id", type=str, help="ID of mutated JS file or directory")
    predict_parser.add_argument("--features", type=str, help="Comma-separated list of feature_name=value pairs")
    predict_parser.add_argument("--result_file",type=str, help="Result file")
    predict_parser.add_argument(
        "--features_file",
        help="Path to JSON file containing a {feature: value, ...} object"
    )
    predict_parser.add_argument("--flags", type=str, help="Optional flags as a string")
    
    # --- insert command ---
    insert_parser = subparsers.add_parser("insert", help="Insert features and predictions into cache")
    insert_parser.add_argument("--path", type=str, required=True, help="Path to JS file or directory")
    insert_parser.add_argument("--id", type=str, required=False, help="ID of JS file or directory")
    
    PLOT_FOLDER = "plot_timed_fractions"
    #selected_features_csv = pd.read_csv(f"{PLOT_FOLDER}/mean_rank_top_25_perc_features.csv")
    #selected = selected_features_csv["feature"].tolist()
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
            features_dict_parent, features_dict_mutated, filtered_features_mutated, retained = run_js_fast(args.parent_file, args.mutated_file, static_features_selected, args.parent_id)
            if retained:
                if args.flags is None:
                    args.flags = ""
                features_dict_parent_dynamic, features_dict_mutated_dynamic, filtered_features_mutated_dynamic, retained, reason = run_js_slow(args.parent_file, args.mutated_file, dynamic_features_selected, features_dict_mutated, static_features_selected+dynamic_features_selected, args.flags, args.parent_id, args.mutated_id)
            if retained:
                parent_all = features_dict_parent | features_dict_parent_dynamic
                mutated_all = filtered_features_mutated | filtered_features_mutated_dynamic
                print(parent_all)
                print(mutated_all)
                print(args.mutated_file)
                cmd = [
                    sys.executable,  # ensures same Python as current process
                    "-u", "shap_refiner_worker.py",
                    args.mutated_file,
                    args.mutated_id,
                    json.dumps(parent_all),
                    json.dumps(mutated_all),
                    "10"  # timeout in seconds
                ]

                # Launch independent process and keep prints visible
                subprocess.Popen(cmd, stdout=sys.stdout, stderr=sys.stderr, preexec_fn=os.setpgrp)
                
            print(retained)
            # Always write result, even if an exception occurred
            with open(args.result_file, "w") as f:
                f.write(str(retained))
        
        if args.parent_code:
            # Create parent JS file
            parent_tmp = tempfile.NamedTemporaryFile(mode="w", suffix=".js", delete=False)
            parent_tmp.write(args.parent_code)
            parent_tmp.close()  # flush and close immediately

            # Create mutant JS file
            mutant_tmp = tempfile.NamedTemporaryFile(mode="w", suffix=".js", delete=False)
            mutant_tmp.write(args.mutated_code)  # or apply mutation logic here
            mutant_tmp.close()

            try:
                times = time.time()
                # Run the fast JS analysis
                features_dict_parent, features_dict_mutated, filtered_features_mutated, retained = run_js_fast(
                    parent_tmp.name, mutant_tmp.name, static_features_selected, args.parent_id
                )
                
                print(retained)
                # If features were retained, run the slow JS analysis
                if retained:
                    if args.flags is None:
                        args.flags = ""
                    features_dict_parent_dynamic, features_dict_mutated_dynamic, filtered_features_mutated_dynamic, retained, reason = run_js_slow(
                        parent_tmp.name,
                        mutant_tmp.name,
                        dynamic_features_selected,
                        features_dict_mutated,
                        static_features_selected+dynamic_features_selected,
                        args.flags,
                        args.parent_id, args.mutated_id
                    )
                if retained:
                    parent_all = features_dict_parent | features_dict_parent_dynamic
                    mutated_all = filtered_features_mutated | filtered_features_mutated_dynamic
                    cmd = [
                        sys.executable,  # ensures same Python as current process
                        "-u", "shap_refiner_worker.py",
                        mutant_tmp.name,
                        args.mutated_id,
                        json.dumps(parent_all),
                        json.dumps(mutated_all),
                        "10"  # timeout in seconds
                    ]

                    # Launch independent process and keep prints visible
                    subprocess.Popen(cmd, stdout=sys.stdout, stderr=sys.stderr, preexec_fn=os.setpgrp)
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
