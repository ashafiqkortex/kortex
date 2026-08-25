import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "@/lib/blog";
import { Arrow } from "@/components/v1/icons";
import "./blog.css";

const SITE = "https://kortexconsulting.com";
const slugify = (c: string) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");


export const metadata: Metadata = {
  title: "Field notes — Kortex",
  description:
    "Notes on operations systems for contractors — build versus buy, what off-the-shelf software really costs, and how to carry more work without adding to the office.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/blog` },
};

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

export default function V1BlogIndex() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  const [lead, ...rest] = posts;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE}/blog`,
    name: "Kortex field notes",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.metaDescription,
      datePublished: p.date,
      url: `${SITE}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="blog-hero">
        <div className="grid-overlay" />
        <p className="eyebrow"><span /> FIELD NOTES</p>
        <h1>What we learn building these systems.</h1>
        <p className="blog-lede">
          Written for owners, not for search engines. Build versus buy, what off-the-shelf
          really costs once it is in, and where the work actually stops between the field and
          the invoice.
        </p>
      </section>

      <section className="blog-body section-pad">
        <Link className="blog-lead-card" href={`/v1/blog/${lead.slug}`}>
          <div className="blog-lead-meta">
            <span className="tag">{lead.category}</span>
            <span>{formatDate(lead.date)}</span>
            <span>{lead.readingTime}</span>
          </div>
          <h2>{lead.title}</h2>
          <p>{lead.excerpt}</p>
          <span className="blog-read">Read it <Arrow /></span>
        </Link>

        <nav className="cat-nav" aria-label="Categories">
          {[...new Set(POSTS.map((p) => p.category))].map((c) => (
            <Link key={c} href={`/v1/blog/category/${slugify(c)}`}>{c}</Link>
          ))}
        </nav>

        <div className="blog-grid">
          {rest.map((p) => (
            <Link className="blog-card" key={p.slug} href={`/v1/blog/${p.slug}`}>
              <div className="blog-card-meta">
                <span className="tag">{p.category}</span>
                <span>{p.readingTime}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <span className="blog-card-date">{formatDate(p.date)}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
