#!/usr/bin/env python3
"""
v8_ic_feature_extractor.py

Parse a V8 log (produced with --log-ic --trace-opt --trace-deopt) and emit a
JSON object with Inline-Cache–related feature counts useful for crash prediction.

Usage:
    python v8_ic_feature_extractor.py /path/to/v8.log
"""

import sys
import re
import json
from typing import Iterable, Dict, List, Tuple, Optional

# ───────────────────────── Feature keys ─────────────────────────
FEATURE_KEYS = [
    "total_ic_count",
    "load_ic_count",
    "store_ic_count",
    "megamorphic_ics",
    "polymorphic_ics",
    "monomorphic_ics",
    "prototype_failure_ics",
    "ic_state_transitions",
    "ic_slow_stub_count",
    "polymorphic_in_optimized_func_count",
    "ic_triggered_deopts",
]

# ───────────────────────── Regex ─────────────────────────
RX_COMPILING_START = re.compile(r"\[compiling method.*?\(sfi = (0x[0-9a-fA-F]+)\)")
RX_COMPILING_END = re.compile(r"\[completed compiling", re.I)
RX_DEOPT = re.compile(r"deoptimizing.*?\(sfi = (0x[0-9a-fA-F]+)\)", re.I)
RX_CODE_CREATION = re.compile(r"^code-creation", re.I)
RX_SFI = re.compile(r"0x[0-9a-fA-F]+")
IC_SENTINEL = "IC,"
IC_LOAD_TAG = "Load"
IC_STORE_TAG = "Store"

# ───────────────────────── Types ─────────────────────────
Range = Tuple[int, int, str]  # (start_int, end_int, sfi_str)

def _hex_to_int(h: str) -> Optional[int]:
    try:
        return int(h, 16)
    except ValueError:
        return None

def _find_sfi(text: str) -> Optional[str]:
    m = RX_SFI.search(text)
    return m.group(0) if m else None

def _lookup_sfi(pc_int: int, ranges: List[Range]) -> Optional[str]:
    for start, end, sfi in ranges:
        if start <= pc_int < end:
            return sfi
    return None

# ───────────────────────── Extractor ─────────────────────────
def extract_ic_features(lines: Iterable[str]) -> Dict[str, int]:
    feats = {k: 0 for k in FEATURE_KEYS}
    compiling_sfi: Optional[str] = None
    last_ic_sfi: Optional[str] = None
    pc_ranges: List[Range] = []

    for raw in lines:
        line = raw.strip()

        # Build PC→SFI map
        if RX_CODE_CREATION.match(line):
            parts = [p.strip() for p in line.split(",")]
            if len(parts) >= 8:
                start_hex = parts[4]
                size_str = parts[5]
                sfi_field = parts[7]
                sfi = _find_sfi(sfi_field)
                start_int = _hex_to_int(start_hex)
                size_int = int(size_str) if size_str.isdigit() else None
                if start_int is not None and size_int is not None and sfi:
                    pc_ranges.append((start_int, start_int + size_int, sfi))

        # Compilation context tracking
        if compiling_sfi is None:
            m = RX_COMPILING_START.search(line)
            if m:
                compiling_sfi = m.group(1)
        elif RX_COMPILING_END.search(line):
            compiling_sfi = None

        # Deoptimization detection
        if last_ic_sfi and "deoptimizing" in line:
            m = RX_DEOPT.search(line)
            if m and m.group(1) == last_ic_sfi:
                feats["ic_triggered_deopts"] += 1
                last_ic_sfi = None
            continue

        if IC_SENTINEL not in line:
            continue

        fields = [f.strip() for f in line.split(",")]
        if len(fields) < 7:
            continue

        ic_type = fields[0]
        pc_field = fields[1]
        old_state = fields[5]
        new_state = fields[6]
        slow_stub_reason = fields[10] if len(fields) > 10 else ""

        feats["total_ic_count"] += 1
        if IC_LOAD_TAG in ic_type:
            feats["load_ic_count"] += 1
        elif IC_STORE_TAG in ic_type:
            feats["store_ic_count"] += 1

        if new_state == "N":
            feats["megamorphic_ics"] += 1
        elif new_state == "P":
            feats["polymorphic_ics"] += 1
        elif new_state == "1":
            feats["monomorphic_ics"] += 1

        if old_state == "^" or new_state == "^":
            feats["prototype_failure_ics"] += 1

        if old_state != new_state:
            feats["ic_state_transitions"] += 1

        if slow_stub_reason:
            feats["ic_slow_stub_count"] += 1

        # Contextual analysis using PC → SFI mapping
        ic_sfi = None
        if RX_SFI.search(pc_field):
            pc_int = _hex_to_int(RX_SFI.search(pc_field).group(0))
            if pc_int is not None:
                ic_sfi = _lookup_sfi(pc_int, pc_ranges)

        if ic_sfi:
            last_ic_sfi = ic_sfi
            if compiling_sfi == ic_sfi and new_state in ("P", "N"):
                feats["polymorphic_in_optimized_func_count"] += 1

    return feats



