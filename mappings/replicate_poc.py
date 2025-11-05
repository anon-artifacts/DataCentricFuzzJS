import subprocess
import sys
import os
import re
from pathlib import Path

# Map year to V8 major.minor version string
YEAR_TO_V8_VERSION = {
    2020: "8.0",
    2021: "8.8",
    2022: "9.7",
    2023: "10.9",
    2024: "12.0",
    2025: "13.2",
}

JSVU_BIN_DIR = Path.home() / ".jsvu" / "bin"

def find_earliest_v8_executable(v8_version_prefix):
    """
    Find earliest patch version executable in ~/.jsvu/bin matching v8_version_prefix like '12.0'
    Example matches: v8-12.0.0, v8-12.0.1, v8-12.0.2
    """
    candidates = []
    pattern = re.compile(r"v8-" + re.escape(v8_version_prefix) + r"(\.\d+)*$")

    for path in JSVU_BIN_DIR.glob("v8-*"):
        if pattern.match(path.name):
            # Extract patch parts as tuple of ints for sorting (e.g. 12.0.2 → (12,0,2))
            version_str = path.name[3:]  # Remove 'v8-'
            version_tuple = tuple(int(x) for x in version_str.split('.'))
            candidates.append((version_tuple, path))

    if not candidates:
        return None

    # Sort by version tuple to get earliest patch version
    candidates.sort(key=lambda x: x[0])
    return candidates[0][1]

def run_v8(year, js_file, flags):
    if year not in YEAR_TO_V8_VERSION:
        print(f"Unsupported year {year}. Supported years: {list(YEAR_TO_V8_VERSION.keys())}")
        return 1

    v8_version_prefix = YEAR_TO_V8_VERSION[year]
    v8_executable = find_earliest_v8_executable(v8_version_prefix)

    if not v8_executable:
        print(f"No V8 executable found for version prefix {v8_version_prefix} in {JSVU_BIN_DIR}")
        return 1

    command = [str(v8_executable)] + flags + [js_file]
    print(f"Running command: {' '.join(command)}")

    try:
        result = subprocess.run(command, capture_output=True, text=True)
        print("=== STDOUT ===")
        print(result.stdout)
        print("=== STDERR ===")
        print(result.stderr)
        return result.returncode
    except Exception as e:
        print(f"Error running V8: {e}")
        return 1

def main():
    if len(sys.argv) < 4:
        print("Usage: python run_js_with_v8.py <year> <js_file> <flags...>")
        print("Example: python run_js_with_v8.py 2024 test.js --allow-natives-syntax --maglev")
        sys.exit(1)

    year = int(sys.argv[1])
    js_file = sys.argv[2]
    flags = sys.argv[3:]

    if not Path(js_file).is_file():
        print(f"JavaScript file {js_file} does not exist.")
        sys.exit(1)

    exit_code = run_v8(year, js_file, flags)
    sys.exit(exit_code)

if __name__ == "__main__":
    main()
