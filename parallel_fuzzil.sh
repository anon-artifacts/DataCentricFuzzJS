ls corpus_old_pocs/*.js | parallel --eta -j4 '
  f={}
  out_file="corpus_old_pocs/$(basename {} .js).fzil"
  if [ -f "$out_file" ]; then
    echo "[Skipping] $(basename "$f") (already compiled)"
  else
    echo "[Compiling] $(basename "$f")"
    timeout 240s .build/release/FuzzILTool --compile "$f" || echo "    ❌ Timeout or error on $(basename "$f")"
  fi
'