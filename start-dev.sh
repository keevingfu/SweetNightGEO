#!/bin/bash

# Quick start script for development with auto-sync

echo "🚀 SweetNightGEO Development Environment"
echo "======================================="
echo ""

# Check if auto-sync is already running
if [ -f ".auto-sync.pid" ]; then
    PID=$(cat .auto-sync.pid)
    if ps -p $PID > /dev/null 2>&1; then
        echo "⚠️  Auto-sync is already running (PID: $PID)"
        echo "Use './scripts/auto-sync.sh stop' to stop it first."
        exit 1
    fi
fi

# Start auto-sync
echo "Starting continuous integration mode..."
./scripts/auto-sync.sh watch &

# Wait a moment
sleep 2

# Start local server
echo ""
echo "Starting local development server..."
echo "Your site will be available at: http://localhost:8000"
echo ""
echo "📝 File changes will be automatically synced to GitHub"
echo "📊 Check sync status: tail -f .auto-sync.log"
echo "🛑 Stop auto-sync: ./scripts/auto-sync.sh stop"
echo ""

# Start Python HTTP server
python3 -m http.server 8000