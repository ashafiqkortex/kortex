import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { POSTS } from "@/lib/blog";
import { ArrowUpRight } from "lucide-react";

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "Blog — Kortex Consulting",
  description:
    "Field notes on AI systems, automation, and operations for home services contractors doing $500K–$10M. Build vs. buy, the real cost of off-the-shelf software, and growing without hiring.",
  alternates: { canonical: `${SITE}/blog` },
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

export default function BlogIndexPage() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  const [lead, ...rest] = posts;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE}/blog`,
    name: "Kortex Blog",
    description:
      "AI systems, automation, and operations for home services contractors.",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.metaDescription,
      datePublished: p.date,
      url: `${SITE}/blog/${p.slug}`,
      image: `${SITE}${p.hero}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Blog"
        title={
          <>
            Built to run, <span className="italic text-[var(--accent)]">not to rent.</span>
          </>
        }
        description="Practical writing on automation and AI systems for $500K–$10M home services contractors who've outgrown off-the-shelf."
      />

      <div className="py-16 md:py-24">
        <Container size="wide">
          {/* Lead post */}
          <Link
            href={`/blog/${lead.slug}`}
            className="group block rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 hover:border-[var(--accent)]/40 hover:bg-[var(--surface)] transition-all duration-300 overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[320px] overflow-hidden border-b md:border-b-0 md:border-r border-[var(--border)]">
                <Image
                  src={lead.hero}
                  alt={lead.heroAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 text-[12px] font-mono uppercase tracking-widest text-[var(--accent)]">
                  <span>{lead.category}</span>
                  <span className="text-[var(--muted-2)]">·</span>
                  <span className="text-[var(--muted)]">{formatDate(lead.date)}</span>
                  <span className="text-[var(--muted-2)]">·</span>
                  <span className="text-[var(--muted)]">{lead.readingTime}</span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <h2 className="font-display text-3xl md:text-[38px] leading-[1.07] tracking-[-0.02em] text-foreground">
                    {lead.title}
                  </h2>
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.5}
                    className="shrink-0 mt-2 text-[var(--muted-2)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="mt-5 text-[17px] leading-relaxed text-[var(--foreground-dim)]">
                  {lead.excerpt}
                </p>
              </div>
            </div>
          </Link>

          {/* Rest */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 hover:border-[var(--accent)]/40 hover:bg-[var(--surface)] transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--border)]">
                  <Image
                    src={post.hero}
                    alt={post.heroAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[var(--accent)]">
                    <span>{post.category}</span>
                    <span className="text-[var(--muted-2)]">·</span>
                    <span className="text-[var(--muted)]">{post.readingTime}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl md:text-[26px] leading-[1.12] tracking-[-0.01em] text-foreground group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[var(--foreground-dim)] flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)]">
                    {formatDate(post.date)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
