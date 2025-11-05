import pandas as pd
import subprocess

# Load CSV
df = pd.read_csv("last_tags_per_month.csv")  # Replace with your actual filename

# Iterate over ref_name and run jsvu install
for version in df["ref_name"]:
    cmd = ["jsvu", f"v8@{version}"]
    print(f"Installing: {' '.join(cmd)}")
    try:
        subprocess.run(cmd, check=True)
    except subprocess.CalledProcessError as e:
        print(f"Failed to install v8@{version}: {e}")