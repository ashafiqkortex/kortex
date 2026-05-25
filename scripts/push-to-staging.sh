#!/usr/bin/env bash
# Push the local Kortex Consulting source to the staging LXC (kortex @ 10.10.10.80),
# install deps, build, and restart the PM2 process.
#
# Prereqs:
#  - SSH alias 'kortex' configured in ~/.ssh/config
#  - LXC has Node 20 + PM2 + the kortex app already initialized in /opt/kortex
#  - The PM2 app name is "kortex"
#
# Usage (from the project root):
#   bash scripts/push-to-staging.sh

set -euo pipefail

cd "$(dirname "$0")/.."

REMOTE_HOST="${REMOTE_HOST:-kortex}"
REMOTE_DIR="${REMOTE_DIR:-/opt/kortex}"

echo "→ rsync source to ${REMOTE_HOST}:${REMOTE_DIR}"
rsync -avz --delete \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.git' \
  --exclude '.DS_Store' \
  --exclude '*.log' \
  --exclude '.env' \
  --exclude '.env.local' \
  --exclude '.env.*.local' \
  ./ "${REMOTE_HOST}:${REMOTE_DIR}/"

echo "→ remote: npm install + build + pm2 restart"
ssh "${REMOTE_HOST}" "cd ${REMOTE_DIR} && npm install --silent --no-audit --no-fund && npm run build && pm2 restart kortex --update-env"

echo "✓ deployed at $(date '+%Y-%m-%d %H:%M:%S')"
echo "✓ staging: https://staging.kortexconsulting.com  (once tunnel is up)"
