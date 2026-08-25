import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, type Block } from "@/lib/blog";
import { Arrow } from "@/components/v1/icons";
import { inline } from "@/components/v1/inline";
import "../blog.css";
import "./post.css";

const SITE = "https://kortexconsulting.com";
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const slugify = (c: string) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const fmt = (iso: string) => { const [y,m,d] = iso.split("-").map(Number); return `${MONTHS[m-1]} ${d}, ${y}`; };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Kortex`,
    description: post.metaDescription,
    keywords: post.keywords,
    robots: { index: false, follow: false },
    alternates: { canonical: `${SITE}/blog/${post.slug}` },
  };
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return <>{blocks.map((b, i) => {
    switch (b.type) {
      case "h2": return <h2 key={i}>{inline(b.text)}</h2>;
      case "p": return <p key={i}>{inline(b.text)}</p>;
      case "ul": return <ul key={i}>{b.items.map((it, j) => <li key={j}>{inline(it)}</li>)}</ul>;
      case "quote": return (
        <blockquote key={i}>
          <p>{inline(b.text)}</p>
          {b.cite && <cite>{b.cite}</cite>}
        </blockquote>
      );
      case "callout": return <aside className="post-callout" key={i}><p>{inline(b.text)}</p></aside>;
      case "stat": return (
        <div className="post-stats" key={i}>
          {b.items.map((s, j) => <div key={j}><strong>{s.value}</strong><span>{s.label}</span></div>)}
        </div>
      );
      case "image": return (
        // eslint-disable-next-line @next/next/no-img-element
        <figure key={i}><img src={b.src} alt={b.alt} loading="lazy" />{b.caption && <figcaption>{b.caption}</figcaption>}</figure>
      );
      default: return null;
    }
  })}</>;
}

export default async function V1PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const jsonLd = [
    {
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: post.title, description: post.metaDescription,
      datePublished: post.date, author: { "@type": "Person", name: post.author },
      publisher: { "@type": "Organization", name: "Kortex Consulting" },
      mainEntityOfPage: `${SITE}/blog/${post.slug}`,
    },
    post.faqs.length ? {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: post.faqs.map((f) => ({
        "@type": "Question", name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    } : null,
  ].filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="post">
        <header className="post-hero">
          <div className="grid-overlay" />
          <Link className="post-back" href="/v1/blog">← Field notes</Link>
          <p className="eyebrow"><span /> <Link href={`/v1/blog/category/${slugify(post.category)}`}>{post.category.toUpperCase()}</Link></p>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span>{post.author}</span><i />
            <span>{fmt(post.date)}</span><i />
            <span>{post.readingTime}</span>
          </div>
        </header>

        {post.takeaways.length > 0 && (
          <section className="post-takeaways">
            <p className="section-index">THE SHORT ANSWER</p>
            <ul>{post.takeaways.map((t, i) => <li key={i}>{t}</li>)}</ul>
          </section>
        )}

        <div className="post-body section-pad">
          <div className="post-prose"><Blocks blocks={post.body} /></div>
        </div>

        {post.faqs.length > 0 && (
          <section className="post-faq section-pad">
            <div className="split-heading">
              <div><p className="section-index">QUESTIONS THIS RAISES</p><h2>Asked and answered.</h2></div>
            </div>
            <div className="faq-grid">
              {post.faqs.map((f, i) => (
                <details key={f.q} {...(i === 0 ? { open: true } : {})}>
                  <summary><span>0{i + 1}</span>{f.q}<i /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <section className="post-cta">
          <div className="grid-overlay" />
          <h2>Where does it stop in your company?</h2>
          <p>One working session. We follow a real job from the field to the invoice and show you where the time goes.</p>
          <Link className="button" href="/v1/contact">Book a working session <Arrow /></Link>
        </section>

        <section className="post-more section-pad">
          <p className="section-index">KEEP READING</p>
          <div className="blog-grid">
            {more.map((p) => (
              <Link className="blog-card" key={p.slug} href={`/v1/blog/${p.slug}`}>
                <div className="blog-card-meta"><span className="tag">{p.category}</span><span>{p.readingTime}</span></div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
