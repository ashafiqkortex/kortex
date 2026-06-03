import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Blog hero art is authored in-house as trusted SVG.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
