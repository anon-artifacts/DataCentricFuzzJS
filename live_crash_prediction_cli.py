#!/usr/bin/env python3.13
import argparse, os, re, subprocess, random, sys
import numpy as np
# ---------- CONFIG ----------
PREDICT_CLI = "python3.13 crash_predictor_cli.py"
MODEL_PATH  = "final_crash_detection_model.pkl"
ID_REGEX = re.compile(r"program_\d{14}_(.+?)\.js$")
TOP_K_PERCENT = 0.2  # top 20%
# -----------------------------

def fast_id_lookup(corpus_dir: str, wanted_ids: set[str]) -> dict[str, str]:
    """
    Scan corpus_dir once; return {id: full_path} for IDs in wanted_ids.
    Stops early if all IDs are found.
    """
    id_to_path = {}
    for fname in os.listdir(corpus_dir):
        m = ID_REGEX.match(fname)
        if not m:
            continue
        pid = m.group(1)
        if pid in wanted_ids:
            id_to_path[pid] = os.path.join(corpus_dir, fname)
            if len(id_to_path) == len(wanted_ids):
                break                    # found them all – stop scanning
    return id_to_path

def crash_probability(js_path: str) -> float:
    """Call your CLI once and return the crash probability float."""
    # CLI version (fast if cache is enabled)
    cmd = f'{PREDICT_CLI} predict --model {MODEL_PATH} --file "{js_path}"'
    out = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return float(out.stdout.strip() or 0.0)

def roulette_select(id_to_path: dict[str, str], k: int = 1) -> list[str]:
    """
    Roulette-wheel select one or more PoC IDs, weighted by crash probability.

    Args:
        id_to_path: Mapping from PoC ID to path.
        k: Number of IDs to select.

    Returns:
        List of selected PoC IDs.
    """
    ids = list(id_to_path.keys())
    paths = [id_to_path[pid] for pid in ids]

    # Compute crash probabilities
    probs = [max(crash_probability(p), 1e-9) for p in paths]  # Avoid zero weight
    probs = np.array(probs)
    probs /= probs.sum()  # Normalize to sum to 1
    selected = np.random.choice(ids, size=k, replace=False if k <= len(ids) else True, p=probs)
    return selected.tolist() if k > 1 else [selected.item()]                     # fallback
def top_k_select(id_to_path: dict[str, str], k: int = 1, quantile: float = TOP_K_PERCENT) -> list[str]:
    ids = list(id_to_path.keys())
    paths = [id_to_path[pid] for pid in ids]
    probs = [crash_probability(p) for p in paths]
    # Sort by probability descending
    sorted_pairs = sorted(zip(ids, probs), key=lambda x: x[1], reverse=True)
    top_k_count = max(1, int(len(sorted_pairs) * quantile))
    top_k_ids = [id for id, _ in sorted_pairs[:top_k_count]]

    selected = random.sample(top_k_ids, k=min(k, len(top_k_ids)))
    return selected

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--corpus_dir", required=True, help="Folder containing program_*.js files")
    ap.add_argument("--program_ids", required=True,
                    help="Comma-separated list of program IDs (UUID part only)")
    args = ap.parse_args()

    id_list = [pid.strip() for pid in args.program_ids.split(",") if pid.strip()]
    id_set  = set(id_list)

    id_to_path = fast_id_lookup(args.corpus_dir, id_set)
    if len(id_to_path) != len(id_set):
        missing = id_set - id_to_path.keys()
        print(f"⚠️  Missing IDs in corpus: {', '.join(missing)}", file=sys.stderr)

    if not id_to_path:
        sys.exit("No valid programs found.")

    winner = top_k_select(id_to_path)
    print(winner)

if __name__ == "__main__":
    main()
