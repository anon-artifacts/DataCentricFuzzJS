mkdir -p cleaned_corpus

find run_regress/corpus -type f -name "*.js" -print0 | \
parallel -0 --bar -j 15 '
  # run checker with 5s timeout, capture stdout+stderr
  js_file="{}"
  output=$(timeout 5 python3.13 valid_mutation_marker.py insert --path "{}" 2>&1)
  exit_code=$?
  echo "Checker output for {}: $output"
  if [ $exit_code -eq 124 ]; then
    echo "Skipping {}: timeout > 5s"

  elif [ $exit_code -ne 0 ] || printf "%s" "$output" | grep -qiE "syntax error|compilation error|exception"; then
    echo "Skipping {}: compilation/error detected"

  # If the checker prints the word "true" (case-insensitive) we treat it as accepted
  elif printf "%s" "$output" | grep -qi "\\btrue\\b"; then
  #elif printf "%s" "$output"; then
    mkdir -p cleaned_corpus_20255
    cp -v -- "{}" cleaned_corpus_20255/ || echo "Failed to copy {} to cleaned_corpus_20255"
    fzil_file="${js_file%.js}.fzil"
    if [ -f "$fzil_file" ]; then
        cp -v "$js_file" cleaned_corpus_20255/
        cp -v "$fzil_file" cleaned_corpus_20255/
    else
        echo "Skipping $js_file: .fzil not found"
    fi
    echo "Successfully added {}"

  else
    echo "Skipping {}: not accepted (output: $output)"
  fi
'
