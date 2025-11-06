#!/bin/bash
set -e  # Exit immediately on error

# Check if corpus folder argument is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <path_to_corpus_folder>"
    exit 1
fi

CORPUS_SRC="$1"

# Verify that the corpus folder exists
if [ ! -d "$CORPUS_SRC" ]; then
    echo "Error: Corpus folder '$CORPUS_SRC' does not exist."
    exit 1
fi

# Create main and subdirectories
mkdir -p run/corpus run/crashes/duplicates run/stats

# Create settings.json file
cat > run/settings.json << 'EOF'
{
  "processArguments" : [
    "--expose-gc",
    "--expose-externalize-string",
    "--omit-quit",
    "--allow-natives-syntax",
    "--fuzzing",
    "--jit-fuzzing",
    "--future",
    "--harmony",
    "--js-staging",
    "--wasm-staging",
    "--wasm-fast-api",
    "--expose-fast-api",
    "--experimental-wasm-memory64"
  ]
}
EOF

# Copy corpus files
echo "📦 Copying corpus from '$CORPUS_SRC' to 'run/corpus'..."
cp -r "$CORPUS_SRC"/* run/corpus/

# Run Fuzzilli
echo "🚀 Starting Fuzzilli..."
swift run -c release FuzzilliCli \
    --storagePath=run \
    --resume \
    --corpusImportMode=full \
    --timeout=400 \
    --exportStatistics \
    --minMutationsPerSample=30 \
    --maxRuntimeInHours=24 \
    --consecutiveMutations=10 \
    --jobs=16 \
    --profile=v8 \
    v8/out/fuzzbuild/d8
