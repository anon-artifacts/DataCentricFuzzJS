#!/usr/bin/env bash
set -euo pipefail

# Dependencies
sudo apt-get update
sudo apt-get -y install libz3-dev python3 python3-lldb-13 ninja-build xz-utils pkg-config curl git
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && \
sudo apt-get install -y nodejs

# Install Swiftly
curl -O https://download.swift.org/swiftly/linux/swiftly-$(uname -m).tar.gz
tar zxf swiftly-$(uname -m).tar.gz
./swiftly init --quiet-shell-followup
. "${SWIFTLY_HOME_DIR:-$HOME/.local/share/swiftly}/env.sh"
hash -r
# Persist Swiftly path for future shells
SWIFTLY_ENV="${SWIFTLY_HOME_DIR:-$HOME/.local/share/swiftly}/env.sh"
if [ -f "$SWIFTLY_ENV" ]; then
    echo ". \"$SWIFTLY_ENV\"" >> "$HOME/.bashrc"
fi
# Swift toolchain
swiftly install 6.1.2
swiftly use 6.1.2


# Python 3.13
sudo add-apt-repository -y ppa:deadsnakes/ppa
sudo apt-get update
sudo apt install -y python3.13-full
curl https://bootstrap.pypa.io/get-pip.py | python3.13

# VSCode
wget https://vscode.download.prss.microsoft.com/dbazure/download/stable/0f0d87fa9e96c856c5212fc86db137ac0d783365/code_1.104.1-1758154125_amd64.deb
sudo dpkg -i code_1.104.1-1758154125_amd64.deb || sudo apt-get -f install -y
