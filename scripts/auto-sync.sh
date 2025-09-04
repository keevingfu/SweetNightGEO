#!/bin/bash

# Auto-sync script: Monitors file changes and commits/pushes automatically
# Usage: ./scripts/auto-sync.sh [watch|sync|stop]

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_DIR="$( cd "$SCRIPT_DIR/.." && pwd )"
PID_FILE="$PROJECT_DIR/.auto-sync.pid"
LOG_FILE="$PROJECT_DIR/.auto-sync.log"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Function to check if fswatch is installed
check_fswatch() {
    if ! command -v fswatch &> /dev/null; then
        echo -e "${RED}fswatch is not installed!${NC}"
        echo "Installing fswatch..."
        if command -v brew &> /dev/null; then
            brew install fswatch
        else
            echo "Please install fswatch manually: https://github.com/emcrisostomo/fswatch"
            exit 1
        fi
    fi
}

# Function to sync changes
sync_changes() {
    cd "$PROJECT_DIR"
    
    # Check if there are changes
    if [[ -n $(git status -s) ]]; then
        echo -e "${YELLOW}[$(date)] Changes detected, syncing...${NC}" | tee -a "$LOG_FILE"
        
        # Add all changes
        git add .
        
        # Create commit message
        COMMIT_MSG="Auto-sync: $(date '+%Y-%m-%d %H:%M:%S')

Changed files:
$(git diff --cached --name-status | head -10)"
        
        # Commit changes
        git commit -m "$COMMIT_MSG" >> "$LOG_FILE" 2>&1
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}[$(date)] Changes committed successfully${NC}" | tee -a "$LOG_FILE"
            # Push will be handled by post-commit hook
        else
            echo -e "${RED}[$(date)] Failed to commit changes${NC}" | tee -a "$LOG_FILE"
        fi
    fi
}

# Function to watch for changes
watch_files() {
    echo -e "${GREEN}Starting file watcher...${NC}"
    echo "Monitoring: $PROJECT_DIR"
    echo "Log file: $LOG_FILE"
    echo "PID file: $PID_FILE"
    
    # Save PID
    echo $$ > "$PID_FILE"
    
    # Watch for changes
    fswatch -o "$PROJECT_DIR" \
        --exclude ".git" \
        --exclude "node_modules" \
        --exclude ".auto-sync" \
        --exclude "*.log" \
        --exclude ".DS_Store" \
        -e ".*" \
        -i "\\.html$" \
        -i "\\.js$" \
        -i "\\.css$" \
        -i "\\.md$" \
        -i "\\.json$" | while read change
    do
        sync_changes
    done
}

# Function to stop watcher
stop_watcher() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        echo -e "${YELLOW}Stopping file watcher (PID: $PID)...${NC}"
        kill $PID 2>/dev/null
        rm -f "$PID_FILE"
        echo -e "${GREEN}File watcher stopped${NC}"
    else
        echo -e "${YELLOW}File watcher is not running${NC}"
    fi
}

# Main logic
case "${1:-watch}" in
    watch)
        check_fswatch
        stop_watcher  # Stop any existing watcher
        watch_files
        ;;
    sync)
        sync_changes
        ;;
    stop)
        stop_watcher
        ;;
    *)
        echo "Usage: $0 [watch|sync|stop]"
        echo "  watch - Start watching for file changes"
        echo "  sync  - Manually sync current changes"
        echo "  stop  - Stop the file watcher"
        exit 1
        ;;
esac