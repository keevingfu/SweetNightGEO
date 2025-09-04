#!/bin/bash

# Setup git credentials securely
# This script configures git to use the macOS keychain

echo "Setting up secure git credentials..."

# Use macOS keychain for git credentials
git config --global credential.helper osxkeychain

# Set username
git config --global user.name "keevingfu"
git config --global user.email "keevingfu@users.noreply.github.com"

# Store the credentials
echo "Now, when you push for the first time, use your GitHub username and token."
echo "The credentials will be securely stored in macOS Keychain."
echo ""
echo "Username: keevingfu"
echo "Password: [Use your Personal Access Token]"
echo ""
echo "After the first successful push, credentials will be saved automatically."

# Optional: Set the remote URL to use HTTPS
git remote set-url origin https://github.com/keevingfu/SweetNightGEO.git

echo "Git credentials setup complete!"