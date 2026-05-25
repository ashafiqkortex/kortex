# Kortex — Proxmox + Cloudflare Tunnel Deployment

End-to-end guide for hosting kortexconsulting.com (or `kortex.as1m.com`) on your home Proxmox server, exposed via Cloudflare Tunnel.

---

## 0. Prerequisites

- Proxmox host running, accessible via web UI
- A free Cloudflare account
- GitHub (or git server) with this repo pushed up — needed to clone onto the container
- An Anthropic API key for the AI diagnostic and case-study chat

---

## 1. Create the LXC container in Proxmox

LXC is much lighter than a full VM. For a Next.js app, this is plenty:

- **Template:** Ubuntu 22.04 (download from Proxmox → CT Templates if not present)
- **RAM:** 2 GB (1 GB works; 2 GB is comfortable)
- **CPU:** 1 vCPU (2 if you want headroom for builds)
- **Disk:** 10 GB
- **Network:** DHCP, bridge `vmbr0` (or whatever your bridge is)
- **Privileged container:** unchecked (use unprivileged — safer)
- **Features:** check `nesting=1` (lets cloudflared service install cleanly)

Once running, log in via Proxmox console or `pct enter <id>`.

---

## 2. Set up the container

```bash
# Update + essentials
apt update && apt upgrade -y
apt install -y curl git build-essential ca-certificates

# Node.js 20 LTS (NodeSource)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Verify
node --version   # expect v20.x
npm --version

# Create a non-root user for the app
useradd -m -s /bin/bash kortex
su - kortex
```

---

## 3. Clone and build the app

As the `kortex` user:

```bash
cd ~
git clone <your-repo-url> kortex-consulting
cd kortex-consulting

# Install deps + build
npm install
npm run build
```

If the build fails on memory, give the container 2GB or temporarily set `NODE_OPTIONS=--max-old-space-size=1536 npm run build`.

---

## 4. Configure environment variables

```bash
# In ~/kortex-consulting/
cp .env.example .env.local
nano .env.local
```

Set:

```
ANTHROPIC_API_KEY=sk-ant-...
NEXT_PUBLIC_CAL_LINK=https://cal.com/your-handle/discovery
```

Save. Restart the app to pick up env changes (next step).

---

## 5. Run the app under PM2

PM2 keeps Node alive across crashes and reboots.

```bash
# Still as kortex user
sudo npm install -g pm2

cd ~/kortex-consulting
mkdir -p logs
pm2 start ecosystem.config.js
pm2 save
pm2 startup   # follow the printed sudo command to enable boot persistence
```

The `ecosystem.config.js` in the repo defines the production process: forks one instance, sets `NODE_ENV=production`, restarts at 768 MB memory ceiling, writes logs to `./logs/`.

Verify locally:

```bash
curl -I http://localhost:3000
# Expect HTTP/1.1 200
```

---

## 6. Move as1m.com DNS to Cloudflare

(Skip if already on Cloudflare.)

1. Log in to Cloudflare → Add a Site → enter `as1m.com`
2. Cloudflare will scan your existing IONOS DNS records — review them carefully, especially MX (email) records. Make sure they're imported.
3. Cloudflare gives you two nameservers (e.g., `ada.ns.cloudflare.com`, `bob.ns.cloudflare.com`).
4. In your IONOS account → Domains & SSL → as1m.com → Nameservers → switch to "Other nameservers" → paste Cloudflare's two values.
5. Wait 5 min – 24 hours for propagation. Cloudflare emails when active.
6. Verify your email still works by sending yourself a test message.

---

## 7. Create the Cloudflare Tunnel

In Cloudflare dashboard:

1. **Zero Trust** (left nav) → **Networks** → **Tunnels** → **Create a tunnel**
2. Select **Cloudflared** as the connector
3. Name it `kortex-prod`
4. Copy the install command Cloudflare gives you — it includes a token. Looks like:
   ```
   cloudflared service install eyJhIjoi...long-token...
   ```
5. Run that command **on the LXC container** as root:
   ```bash
   # back to root
   exit
   # paste the install command Cloudflare gave you
   cloudflared service install <token>
   systemctl enable cloudflared
   systemctl start cloudflared
   systemctl status cloudflared   # should be active (running)
   ```
6. Back in Cloudflare dashboard, the tunnel should now show "HEALTHY"
7. Click **Public Hostnames** → **Add a public hostname**:
   - **Subdomain:** `kortex`
   - **Domain:** `as1m.com`
   - **Type:** HTTP
   - **URL:** `localhost:3000`
8. Save. Cloudflare creates the DNS record automatically.

---

## 8. Verify

Open `https://kortex.as1m.com` in your browser. You should see the Kortex homepage. Check:

- ☐ Homepage loads, hero terminal animates
- ☐ AI Diagnostic streams a real Claude response (proves API key is set)
- ☐ A case study page loads (`/case-studies/hvac`)
- ☐ Case-study chat agent responds when you click a starter question
- ☐ All inner pages load without 500s
- ☐ `https://kortex.as1m.com/api/health` returns `{"status":"ok",...}` — useful as a Cloudflare uptime probe target

---

## 9. Updates / redeploys

When you push new code, run the deploy script:

```bash
# As kortex user, on the container
cd ~/kortex-consulting
./scripts/deploy.sh
```

It pulls, installs (if needed), builds, and restarts PM2. ~30 seconds of downtime per deploy.

---

## 10. Useful commands

| Action | Command |
|---|---|
| App logs | `pm2 logs kortex` |
| App status | `pm2 status` |
| Restart app | `pm2 restart kortex` |
| Tunnel logs | `journalctl -u cloudflared -f` |
| Tunnel restart | `systemctl restart cloudflared` |
| Container resources | `htop` (apt install htop) |

---

## Optional hardening

- **Firewall (UFW):** the tunnel only needs outbound — block all inbound except SSH:
  ```bash
  ufw allow 22
  ufw default deny incoming
  ufw default allow outgoing
  ufw enable
  ```
- **Auto security updates:**
  ```bash
  apt install -y unattended-upgrades
  dpkg-reconfigure -plow unattended-upgrades
  ```
- **Backups:** schedule a Proxmox snapshot of the container weekly. Restoring a tunnel + Node app from snapshot is ~30 seconds.

---

## Total time

- Container setup: 15 min
- App build + PM2: 10 min
- DNS migration: 5 min (plus propagation wait)
- Cloudflare Tunnel: 10 min
- **~40 minutes hands-on** + DNS propagation wait

## Total cost

$0/month. Hardware is yours, Cloudflare Tunnel is free, Anthropic API is metered (~$3 per 1,000 diagnostic runs, ~$1 per 100 chat conversations).
