#!/usr/bin/env bash
set -euo pipefail

#usage: ./load_corpus.sh corpus_pocs cleaned_corpus 5 20
# --- User parameters ---
INPUT_DIR="${1:-run_regress/corpus}"   # default if not provided
OUTPUT_DIR="${2:-cleaned_corpus}"      # default if not provided
TIMEOUT_SEC="${3:-5}"                  # default timeout in seconds
JOBS="${4:-15}"                        # default parallel jobs

mkdir -p "$OUTPUT_DIR"

# --- Process JS files in parallel ---
find "$INPUT_DIR" -type f -name "*.js" -print0 | \
parallel -0 --bar -j "$JOBS" '
    js_file="{}"
    output=$(timeout '"$TIMEOUT_SEC"' python3.13 valid_mutation_marker.py insert --path "$js_file" 2>&1)
    exit_code=$?

    echo "Checker output for $js_file: $output"

    if [ $exit_code -eq 124 ]; then
        echo "Skipping $js_file: timeout > '"$TIMEOUT_SEC"'s"

    elif [ $exit_code -ne 0 ] || printf "%s" "$output" | grep -qiE "syntax error|compilation error|exception"; then
        echo "Skipping $js_file: compilation/error detected"

     # If the checker prints the word "true" (case-insensitive) we treat it as accepted (only in case of filtering)
    # elif printf "%s" "$output" | grep -qi "\\btrue\\b"; then

    else
        mkdir -p '"$OUTPUT_DIR"'
        cp -v -- "$js_file" '"$OUTPUT_DIR"'/ || echo "Failed to copy $js_file"

        fzil_file="${js_file%.js}.fzil"
        if [ -f "$fzil_file" ]; then
            cp -v "$fzil_file" '"$OUTPUT_DIR"'/ || echo "Failed to copy $fzil_file"
        else
            echo "Skipping $js_file: .fzil not found"
        fi

        echo "Successfully added $js_file"
    fi
'
