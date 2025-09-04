# Development Workflow Guide

This guide explains how to use the continuous integration/development setup for the SweetNightGEO project.

## Overview

The project is configured with automatic synchronization to GitHub. Any changes you make will be automatically committed and pushed to the repository.

## Quick Start

### 1. Start Auto-Sync (Recommended)

To enable automatic file watching and syncing:

```bash
./scripts/auto-sync.sh watch
```

This will:
- Monitor all HTML, CSS, JS, MD, and JSON files for changes
- Automatically commit changes when detected
- Push to GitHub using the post-commit hook

### 2. Manual Sync

To manually sync current changes:

```bash
./scripts/auto-sync.sh sync
```

### 3. Stop Auto-Sync

To stop the file watcher:

```bash
./scripts/auto-sync.sh stop
```

## Workflow Options

### Option A: Continuous Auto-Sync (Recommended)

1. Start the auto-sync watcher:
   ```bash
   ./scripts/auto-sync.sh watch
   ```

2. Work on your files normally
3. Changes are automatically committed and pushed
4. Check the log file for sync status:
   ```bash
   tail -f .auto-sync.log
   ```

### Option B: Manual Git Workflow

1. Make your changes
2. Commit manually:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```
3. The post-commit hook will automatically push to GitHub

### Option C: Secure Push Script

For manual pushes with token authentication:

```bash
./scripts/git-push-secure.sh main
```

## File Structure

```
SweetNightGEO/
├── .env                    # GitHub credentials (protected)
├── .gitignore             # Prevents sensitive files from being committed
├── .git/hooks/
│   ├── pre-commit         # Validates files before commit
│   └── post-commit        # Auto-pushes to GitHub
├── scripts/
│   ├── auto-sync.sh       # File watcher for continuous sync
│   ├── git-push-secure.sh # Secure push script
│   └── setup-git-credentials.sh # Keychain setup
├── WORKFLOW.md            # This file
└── [HTML files]           # Your project files
```

## Security

### Current Setup

Your GitHub token is stored in `.env` file:
- Protected by `.gitignore` (won't be committed)
- Used automatically by scripts
- File permissions set to 600 (only you can read/write)

### To Update Your Token

1. Edit the `.env` file:
   ```bash
   nano .env
   ```

2. Update the token:
   ```
   GITHUB_TOKEN=your_new_token_here
   GITHUB_USERNAME=keevingfu
   ```

3. Save and exit

### For Better Security

Use macOS Keychain instead:
```bash
./scripts/setup-git-credentials.sh
```

## Monitoring

### Check Auto-Sync Status

View the watcher log:
```bash
tail -f .auto-sync.log
```

### Check If Watcher Is Running

```bash
ps aux | grep fswatch
```

### View Recent Commits

```bash
git log --oneline -10
```

## Troubleshooting

### Issue: Auto-sync not detecting changes

1. Check if fswatch is installed:
   ```bash
   which fswatch
   ```

2. If not installed:
   ```bash
   brew install fswatch
   ```

### Issue: Push fails with authentication error

1. Check your token in `.env`:
   ```bash
   cat .env
   ```

2. Verify token permissions on GitHub:
   - Go to https://github.com/settings/tokens
   - Ensure token has `repo` scope

3. Test manual push:
   ```bash
   ./scripts/git-push-secure.sh main
   ```

### Issue: Commits happening too frequently

Edit the auto-sync script to add a delay between syncs, or use manual sync mode.

## Best Practices

1. **Review commits**: Periodically check what's being auto-committed
2. **Use meaningful saves**: Save files when changes are complete, not mid-edit
3. **Monitor the log**: Keep an eye on `.auto-sync.log` for any issues
4. **Regular pulls**: If working from multiple machines, pull changes before starting work
5. **Token security**: Rotate your GitHub token every 60-90 days

## Running as a Background Service

To run auto-sync in the background:

```bash
# Start in background
nohup ./scripts/auto-sync.sh watch > /dev/null 2>&1 &

# Check if running
ps aux | grep auto-sync

# Stop background process
./scripts/auto-sync.sh stop
```

## Next Steps

1. Start the auto-sync watcher
2. Make some test changes to verify it's working
3. Check GitHub to confirm changes are being pushed
4. Continue development with automatic syncing enabled!

For any issues, check the logs or run manual sync commands as described above.