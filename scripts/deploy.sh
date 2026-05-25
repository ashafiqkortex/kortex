#!/usr/bin/env bash
# Pull latest, build, restart. Run on the Proxmox container as the kortex user.
set -euo pipefail

cd "$(dirname "$0")/.."

echo "→ git pull"
git pull --ff-only

echo "→ npm install"
npm install --no-audit --no-fund

echo "→ npm run build"
npm run build

echo "→ pm2 restart kortex"
pm2 restart kortex --update-env

echo "✓ deployed at $(date '+%Y-%m-%d %H:%M:%S')"
