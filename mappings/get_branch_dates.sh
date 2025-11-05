#!/bin/bash

REPO_FOLDER="$1"

if [[ -z "$REPO_FOLDER" || ! -d "$REPO_FOLDER/.git" ]]; then
  echo "Usage: $0 /path/to/v8_repo"
  exit 1
fi

cd "$REPO_FOLDER" || exit 1

OUTPUT_FILE="v8_refs_dates.csv"

(
  echo "ref_type,ref_name,date" > "$OUTPUT_FILE"

  echo "[*] Collecting tags..."
  for tag in $(git tag); do
    date=$(git log -1 --format="%cI" "$tag")
    echo "tag,$tag,$date" >> "$OUTPUT_FILE"
    echo "  ✔ tag: $tag => $date"
  done

  echo "[✓] CSV written to $OUTPUT_FILE"
)
