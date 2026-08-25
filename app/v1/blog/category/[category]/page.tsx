import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS } from "@/lib/blog";
import { Arrow } from "@/components/v1/icons";
import "../../blog.css";

const SITE = "https://kortexconsulting.com";
const slugify = (c: string) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export const CATEGORIES = [...new Set(POSTS.map((p) => p.category))];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const fmt = (iso: string) => { const [y,m,d] = iso.split("-").map(Number); return `${MONTHS[m-1]} ${d}, ${y}`; };

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: slugify(c) }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const name = CATEGORIES.find((c) => slugify(c) === category);
  if (!name) return {};
  return {
    title: `${name} — Kortex field notes`,
    description: `Field notes filed under ${name}.`,
    robots: { index: false, follow: false },
    alternates: { canonical: `${SITE}/blog/category/${category}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const name = CATEGORIES.find((c) => slugify(c) === category);
  if (!name) notFound();

  const posts = POSTS.filter((p) => p.category === name).sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <section className="blog-hero">
        <div className="grid-overlay" />
        <Link className="post-back" href="/v1/blog">← All field notes</Link>
        <p className="eyebrow"><span /> {name.toUpperCase()}</p>
        <h1>{posts.length} {posts.length === 1 ? "note" : "notes"} on {name.toLowerCase()}.</h1>
        <nav className="cat-nav" aria-label="Categories">
          {CATEGORIES.map((c) => (
            <Link key={c} href={`/v1/blog/category/${slugify(c)}`}
              className={c === name ? "is-current" : ""} aria-current={c === name ? "page" : undefined}>
              {c}
            </Link>
          ))}
        </nav>
      </section>

      <section className="blog-body section-pad">
        <div className="blog-grid">
          {posts.map((p) => (
            <Link className="blog-card" key={p.slug} href={`/v1/blog/${p.slug}`}>
              <div className="blog-card-meta"><span className="tag">{p.category}</span><span>{p.readingTime}</span></div>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <span className="blog-card-date">{fmt(p.date)}</span>
            </Link>
          ))}
        </div>
        <Link className="button ghost cat-back" href="/v1/blog">Every field note <Arrow /></Link>
      </section>
    </>
  );
}
