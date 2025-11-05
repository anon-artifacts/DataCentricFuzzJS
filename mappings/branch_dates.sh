#!/bin/bash
# Usage: ./branch_dates.sh /path/to/v8_repo

REPO_PATH=$1

if [ -z "$REPO_PATH" ]; then
  echo "Usage: $0 /path/to/v8_repo"
  exit 1
fi

cd "$REPO_PATH" || { echo "Repo path not found"; exit 1; }

# Fetch all remotes to be up-to-date
git fetch --all >/dev/null 2>&1

# CSV header
echo "Branch,Last Commit Date" > branch_dates.csv

# List all remote branches and get their latest commit date
git for-each-ref --format='%(refname:short)' refs/remotes/origin/ | while read -r branch; do
  # Get last commit date for this branch
  date=$(git log -1 --format="%ci" "$branch")
  echo "$branch,$date" >> branch_dates.csv
done

echo "Output saved to branch_dates.csv"
