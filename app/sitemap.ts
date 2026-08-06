import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog";
import { CASE_STUDIES } from "@/lib/case-studies";

const SITE = "https://kortexconsulting.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/ai-receptionist`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/ai-receptionist/after-hours`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/ai-receptionist/small-business`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/ai-customer-service`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/ai-consulting`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/ai-agent-development`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/ai-agents-for-business`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/ai-employee`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/ai-sdr`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/ai-consultant-washington-dc`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/best-answering-service`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudies: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${SITE}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...posts, ...caseStudies];
}
