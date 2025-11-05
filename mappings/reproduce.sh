poc="${@: -1}"; flags="${@:1:$#-1}"; for v8bin in ~/.jsvu/bin/v8-*; do \
  echo -e "\n=== Running $(basename "$v8bin") ==="; \
  stdbuf -oL -eL "$v8bin" $flags "$poc" 2>&1; \
  echo "----------------------------------------"; \
done