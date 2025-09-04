#!/bin/bash

# Secure git push script
# This script reads credentials from .env file

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo -e "${RED}Error: .env file not found!${NC}"
    echo "Please create a .env file with your GitHub credentials"
    exit 1
fi

# Source the .env file
export $(grep -v '^#' .env | xargs)

# Check if required variables are set
if [ -z "$GITHUB_TOKEN" ] || [ -z "$GITHUB_USERNAME" ]; then
    echo -e "${RED}Error: GITHUB_TOKEN or GITHUB_USERNAME not set in .env file!${NC}"
    exit 1
fi

# Get the branch name (default to main)
BRANCH=${1:-main}

echo -e "${YELLOW}Pushing to branch: $BRANCH${NC}"

# Push to GitHub
git push https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/${GITHUB_USERNAME}/SweetNightGEO.git $BRANCH

if [ $? -eq 0 ]; then
    echo -e "${GREEN}Successfully pushed to GitHub!${NC}"
else
    echo -e "${RED}Failed to push to GitHub${NC}"
    exit 1
fi