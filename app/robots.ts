import type { MetadataRoute } from "next";

const SITE = "https://kortexconsulting.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /v1 is a retired homepage variant kept for reference — keep it out of the index.
        disallow: ["/v1", "/api/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
