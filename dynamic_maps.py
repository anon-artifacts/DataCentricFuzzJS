#!/usr/bin/env python3
"""
v8_map_features.py
==================

Extract a bounded, fixed set of features from a V8 --log-maps trace.

Dependencies: pandas
"""

import re, sys, pathlib, json
from collections import defaultdict
import pandas as pd

# ────────────────────────── regex bank ──────────────────────────
RX_TYPE            = re.compile(r"- type: ([A-Z0-9_]+|\[api object\])")
RX_ELEMS_KIND      = re.compile(r"- elements kind: ([A-Z0-9_]+)")
RX_INST_SIZE       = re.compile(r"- instance size: (\d+|variable)")
RX_DESC_ARR        = re.compile(r"DescriptorArray\[(\d+)\]")
RX_CONSTR          = re.compile(r"- constructor: .*<([A-Z0-9_]+)>")
RX_DEP_CODE        = re.compile(r"- dependent code: .*<([A-Z0-9_]+)>")
RX_BACK_PTR_LINE   = re.compile(r"- back pointer: .*")
RX_BACK_PTR_UNDEF  = re.compile(r"<null>|<undefined>")
RX_TRANSITIONS     = re.compile(r"- transitions:")
# ────────────────────────────────────────────────────────────────

# -------- Map-type buckets (fixed) ----------
TYPE_BUCKETS = {
    "string"      : re.compile(r"STRING_TYPE"),
    "collection"  : re.compile(r"(HASH_SET|HASH_MAP|SET_TYPE|MAP_TYPE)"),
    "context"     : re.compile(r"CONTEXT_TYPE"),
    "code"        : re.compile(r"(CODE_TYPE|INSTRUCTION_STREAM_TYPE)"),
    "handler"     : re.compile(r"_HANDLER_TYPE"),
    "weak"        : re.compile(r"WEAK_"),
    "dictionary"  : re.compile(r"DICTIONARY_TYPE"),
    "array"       : re.compile(r"ARRAY_TYPE"),
    "misc"        : re.compile(r".*"),           # fallback
}

ELEM_BUCKETS = {
    "holey"   : re.compile(r"HOLEY"),
    "double"  : re.compile(r"DOUBLE"),
    "typed"   : re.compile(r"(FLOAT|INT|UINT|CLAMPED|BIGINT)"),
    "shared"  : re.compile(r"SHARED_"),
    "rab_gsab": re.compile(r"RAB_GSAB"),
    "slow"    : re.compile(r"SLOW|DICTIONARY"),
    "args"    : re.compile(r"ARGUMENTS"),
    "misc"    : re.compile(r".*")
}

OPT_FLAGS = {
    "is_code_type"          : lambda t: "CODE_TYPE" in t,
    "is_feedback_vector"    : lambda t: "FEEDBACK_VECTOR_TYPE" in t,
    "is_cons_or_thin_string": lambda t: ("CONS_" in t or "THIN_" in t),
    "is_external_string"    : lambda t: "EXTERNAL_" in t,
    "is_symbol_type"        : lambda t: "SYMBOL_TYPE" in t,
    "is_instruction_stream" : lambda t: "INSTRUCTION_STREAM_TYPE" in t,
}

def bucket_type(t: str) -> str:
    for bucket, pat in TYPE_BUCKETS.items():
        if pat.search(t):
            return bucket
    return "misc"

def bucket_elem(k: str) -> str:
    for bucket, pat in ELEM_BUCKETS.items():
        if pat.search(k):
            return bucket
    return "misc"

# ─────────────────── feature extractor ──────────────────────────
def extract_features(log: str) -> dict:
    feat = defaultdict(int)
    map_types_seen   = set()
    descriptor_sizes = []
    back_ptrs        = set()
    has_cycle        = False
    has_transitions  = False
    has_stable_map   = False
    opt_flag_seen    = defaultdict(bool)

     # Initialize all elem_kind buckets to 0
    for bucket in ELEM_BUCKETS.keys():
        feat[f"elem_kind_{bucket}"] = 0

    # Initialize all bucket types to 0
    for bucket in TYPE_BUCKETS.keys():
        feat[f"bucket_{bucket}_count"] = 0

    # Initialize optimization flags
    for flag in OPT_FLAGS:
        feat[flag] = False
        
    for line in log.splitlines():
        if "map-create" in line:
            feat["map_create_count"] += 1

        if "- type:" in line:
            m = RX_TYPE.search(line)
            if not m: continue
            typ = m.group(1)
            map_types_seen.add(typ)
            bkt = bucket_type(typ)
            feat[f"bucket_{bkt}_count"] += 1
            for flag, cond in OPT_FLAGS.items():
                if cond(typ):
                    opt_flag_seen[flag] = True

        if "- elements kind:" in line:
            m = RX_ELEMS_KIND.search(line)
            if m:
                kind = m.group(1)
                bucket = bucket_elem(kind)
                feat[f"elem_kind_{bucket}"] += 1

        if "- instance size:" in line:
            m = RX_INST_SIZE.search(line)
            if m:
                size_raw = m.group(1)
                size = 0 if size_raw == "variable" else int(size_raw)
                feat["instance_size_max"] = max(feat.get("instance_size_max",0), size)

        if "DescriptorArray[" in line:
            m = RX_DESC_ARR.search(line)
            if m:
                ds = int(m.group(1))
                descriptor_sizes.append(ds)

        if "- constructor:" in line:
            m = RX_CONSTR.search(line)
            if m:
                ctor = m.group(1)
                feat[f"ctor_{ctor}"] += 1

        if "- dependent code:" in line:
            m = RX_DEP_CODE.search(line)
            if m:
                dep = m.group(1)
                feat[f"depcode_{dep}"] += 1

        if RX_BACK_PTR_LINE.search(line):
            if RX_BACK_PTR_UNDEF.search(line):
                feat["back_pointer_is_null"] += 1
            else:
                ptr_part = line.strip().split("<")[-1].strip(">\n")
                if ptr_part in back_ptrs:
                    has_cycle = True
                back_ptrs.add(ptr_part)

        if RX_TRANSITIONS.search(line): has_transitions = True
        if "stable_map"   in line: has_stable_map = True
        if "non-extensible" in line: feat["non_extensible_flag"] += 1

    feat["unique_map_types"]         = len(map_types_seen)
    feat["max_descriptor_array_size"] = max(descriptor_sizes) if descriptor_sizes else 0
    feat["uses_transition_array"]    = has_transitions
    feat["stable_map_flag"]          = has_stable_map
    feat["has_cycle_in_back_ptrs"]   = has_cycle

    for flag in OPT_FLAGS:
        feat[flag] = opt_flag_seen[flag]

    return dict(feat)

