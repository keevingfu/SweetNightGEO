# Git Security Scripts

This directory contains scripts to help you securely manage GitHub credentials.

## Security Setup Options

### Option 1: Using .env file (Current Setup)
Your GitHub token is stored in the `.env` file at the project root. This file is:
- ✅ Ignored by git (won't be committed)
- ✅ Easy to update
- ⚠️ Stored in plain text (ensure proper file permissions)

To use:
```bash
./scripts/git-push-secure.sh main
```

### Option 2: Using macOS Keychain (Recommended)
For better security, use the macOS Keychain:

1. Run the setup script:
   ```bash
   ./scripts/setup-git-credentials.sh
   ```

2. On your next push, enter your credentials:
   - Username: keevingfu
   - Password: [Your GitHub Personal Access Token]

3. Credentials will be securely stored in Keychain

### Option 3: Using 1Password CLI (Most Secure)
If you use 1Password:
```bash
# Store token in 1Password
op item create --category login --title "GitHub PAT" --vault Personal username=keevingfu password=your_token

# Use with git
GH_TOKEN=$(op item get "GitHub PAT" --fields password) git push https://keevingfu:$GH_TOKEN@github.com/keevingfu/SweetNightGEO.git main
```

## Security Best Practices

1. **Never commit tokens**: The `.gitignore` file ensures `.env` is not committed
2. **Rotate tokens regularly**: Create new tokens every 60-90 days
3. **Use minimal permissions**: Only grant the permissions you need (usually just `repo`)
4. **Check token usage**: Review your token usage on GitHub regularly

## File Permissions
Ensure your .env file has restricted permissions:
```bash
chmod 600 ../.env  # Only you can read/write
```

## If Token is Compromised
1. Immediately revoke it on GitHub: https://github.com/settings/tokens
2. Create a new token
3. Update your .env file or keychain
4. Check repository for any unauthorized changes