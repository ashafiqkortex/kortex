// PM2 process config for production on the Proxmox container.
// Usage: pm2 start ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "kortex",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: __dirname,
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      max_memory_restart: "768M",
      autorestart: true,
      watch: false,
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",
      merge_logs: true,
      time: true,
    },
  ],
};
