#!/bin/bash

# Folder containing your JS and .fzil files
SOURCE_FOLDER="./corpus/run_old_pocs/corpus"
CORPUS_FOLDER="./run_test/corpus"
EXPANDED_FOLDER="./expanded_corpus"

# Make sure expanded_corpus exists
mkdir -p "$EXPANDED_FOLDER"

# Collect all JS files in the folder
files=("$SOURCE_FOLDER"/*.js)
total=${#files[@]}
count=0

for jsfile in "${files[@]}"; do
    ((count++))
    
    # Extract filename without extension
    basefile=$(basename "$jsfile" .js)
    
    # Corresponding .fzil file
    fzilfile="$SOURCE_FOLDER/$basefile.fzil"
    
    echo "[$count/$total] Processing $basefile.js and $basefile.fzil..."
    
    # Clear corpus folder
    rm -rf "$CORPUS_FOLDER"/*
    
    # Copy JS and .fzil to corpus folder
    cp "$jsfile" "$CORPUS_FOLDER/"
    if [ -f "$fzilfile" ]; then
        cp "$fzilfile" "$CORPUS_FOLDER/"
    else
        echo "Warning: $fzilfile does not exist!"
    fi
    
    # Run the Fuzzilli command
    swift run -c release FuzzilliCli \
        --storagePath=run_test \
        --resume \
        --corpusImportMode=full \
        --timeout=400 \
        --minMutationsPerSample=10000 \
        --maxIterations=20 \
        --consecutiveMutations=10 \
        --jobs=14 \
        --profile=v8 \
        v8/out/fuzzbuild/d8
    
    # Copy everything from run_test to expanded_corpus/<filename>
    DEST_FOLDER="$EXPANDED_FOLDER/$basefile"
    mkdir -p "$DEST_FOLDER"
    cp -r run_test/* "$DEST_FOLDER/"
    
    echo "[$count/$total] Finished $basefile. Results saved to $DEST_FOLDER"
done

echo "All files processed! Expanded corpus is in $EXPANDED_FOLDER"
