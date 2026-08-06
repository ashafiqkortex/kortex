import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { POSTS, getPost, type Block } from "@/lib/blog";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SITE = "https://kortexconsulting.com";

type Params = { slug: string };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE}/blog/${post.slug}`;
  return {
    title: `${post.title} — Kortex Consulting`,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.metaDescription,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `${SITE}${post.hero}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [`${SITE}${post.hero}`],
    },
  };
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

// Inline rich text. Supported syntax inside any prose string:
//   [text](https://url)  external/internal link
//   **bold**             strong
//   ++underline++        underline
//   *italic* / _italic_  emphasis
//   `code`               inline mono
type InlineNode = string | React.ReactNode;

function splitByRegex(
  input: InlineNode[],
  source: string,
  make: (m: RegExpMatchArray, key: string) => React.ReactNode
): InlineNode[] {
  const out: InlineNode[] = [];
  input.forEach((chunk, ci) => {
    if (typeof chunk !== "string") {
      out.push(chunk);
      return;
    }
    const re = new RegExp(source, "g");
    let last = 0;
    let m: RegExpExecArray | null;
    let i = 0;
    while ((m = re.exec(chunk)) !== null) {
      if (m.index > last) out.push(chunk.slice(last, m.index));
      out.push(make(m, `${ci}-${i++}`));
      last = m.index + m[0].length;
    }
    if (last < chunk.length) out.push(chunk.slice(last));
  });
  return out;
}

function inline(text: string): React.ReactNode {
  let nodes: InlineNode[] = [text];

  // Links first so URLs aren't mangled by other rules.
  nodes = splitByRegex(nodes, "\\[([^\\]]+)\\]\\(([^)]+)\\)", (m, k) => {
    const url = m[2];
    const external = /^https?:\/\//.test(url);
    return (
      <a
        key={k}
        href={url}
        className="text-[var(--accent)] underline underline-offset-2 decoration-[var(--accent)]/40 hover:decoration-[var(--accent)] transition-colors"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {m[1]}
      </a>
    );
  });
  // Bold (before single-asterisk italic).
  nodes = splitByRegex(nodes, "\\*\\*([^*]+)\\*\\*", (m, k) => (
    <strong key={k} className="font-semibold text-foreground">
      {m[1]}
    </strong>
  ));
  // Underline.
  nodes = splitByRegex(nodes, "\\+\\+([^+]+)\\+\\+", (m, k) => (
    <span key={k} className="underline underline-offset-2 decoration-[var(--accent)]/60">
      {m[1]}
    </span>
  ));
  // Italic (*text* and _text_).
  nodes = splitByRegex(nodes, "\\*([^*\\n]+)\\*", (m, k) => (
    <em key={k} className="italic">
      {m[1]}
    </em>
  ));
  nodes = splitByRegex(nodes, "(?<![A-Za-z0-9])_([^_\\n]+)_(?![A-Za-z0-9])", (m, k) => (
    <em key={k} className="italic">
      {m[1]}
    </em>
  ));
  // Inline code.
  nodes = splitByRegex(nodes, "`([^`]+)`", (m, k) => (
    <code
      key={k}
      className="font-mono text-[0.9em] bg-[var(--surface)] border border-[var(--border)] rounded px-1.5 py-0.5"
    >
      {m[1]}
    </code>
  ));

  return nodes.map((n, i) =>
    typeof n === "string" ? <span key={i}>{n}</span> : n
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-display text-2xl md:text-[32px] leading-tight tracking-[-0.02em] text-foreground mt-14 mb-5">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className="text-[17px] md:text-[18px] leading-[1.75] text-[var(--foreground-dim)] mb-6">
          {inline(block.text)}
        </p>
      );
    case "ul":
      return (
        <ul className="my-7 space-y-3">
          {block.items.map((it) => (
            <li
              key={it}
              className="relative pl-6 text-[17px] leading-[1.7] text-[var(--foreground-dim)]"
            >
              <span className="absolute left-0 top-[11px] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              {inline(it)}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <figure className="my-10">
          <blockquote className="border-l-2 border-[var(--accent)] pl-6 italic font-display text-xl md:text-2xl leading-[1.35] tracking-[-0.01em] text-foreground">
            {inline(block.text)}
          </blockquote>
          {block.cite && (
            <figcaption className="mt-3 pl-6 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)]">
              {block.cite}
            </figcaption>
          )}
        </figure>
      );
    case "callout":
      return (
        <div className="my-10 rounded-xl border border-[var(--border-bright)] bg-[var(--surface)]/70 p-6 md:p-7">
          <p className="text-[17px] md:text-[18px] leading-[1.6] text-foreground">
            {inline(block.text)}
          </p>
        </div>
      );
    case "image":
      return (
        <figure className="my-12">
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain p-2"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-[13px] font-mono text-[var(--muted)] text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "stat":
      return (
        <div className="my-10 grid grid-cols-3 gap-4 rounded-xl border border-[var(--border)] bg-[var(--background-elev)]/60 p-6 md:p-8">
          {block.items.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl md:text-4xl text-[var(--accent)]">
                {s.value}
              </div>
              <div className="mt-2 text-[11px] md:text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const idx = POSTS.findIndex((p) => p.slug === slug);
  const next = POSTS[(idx + 1) % POSTS.length];

  // --- Structured data (SEO + AEO) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${SITE}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.date,
        dateModified: post.date,
        image: `${SITE}${post.hero}`,
        keywords: post.keywords.join(", "),
        articleSection: post.category,
        author: { "@type": "Organization", name: "Kortex Consulting" },
        publisher: {
          "@type": "Organization",
          name: "Kortex Consulting",
          url: SITE,
        },
        mainEntityOfPage: `${SITE}/blog/${post.slug}`,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#key-takeaways", "#faq"],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE}/blog/${post.slug}#faq`,
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Blog", item: `${SITE}/blog` },
          {
            "@type": "ListItem",
            position: 2,
            name: post.title,
            item: `${SITE}/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="relative pt-36 md:pt-44 pb-12 md:pb-16 border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 20% 0%, rgba(193, 95, 60,0.06), transparent 60%)",
          }}
        />
        <Container size="default" className="relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-8"
          >
            <ArrowLeft size={13} strokeWidth={2} />
            All posts
          </Link>
          <div className="flex items-center gap-3 text-[12px] font-mono uppercase tracking-widest text-[var(--accent)]">
            <span>{post.category}</span>
            <span className="text-[var(--muted-2)]">·</span>
            <span className="text-[var(--muted)]">{formatDate(post.date)}</span>
            <span className="text-[var(--muted-2)]">·</span>
            <span className="text-[var(--muted)]">{post.readingTime}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-[58px] leading-[1.04] tracking-[-0.02em] text-foreground max-w-3xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-[19px] leading-relaxed text-[var(--foreground-dim)]">
            {post.excerpt}
          </p>
          <div className="mt-7 text-[13px] text-[var(--muted)]">
            By <span className="text-[var(--foreground-dim)]">{post.author}</span>
          </div>
        </Container>
      </section>

      {/* Hero image */}
      <Container size="default" className="relative">
        <div className="-mt-0 pt-10 md:pt-14">
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <Image
              src={post.hero}
              alt={post.heroAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </div>
      </Container>

      {/* Body */}
      <div className="py-12 md:py-16">
        <Container size="default">
          <div className="max-w-2xl">
            {/* Key takeaways (AEO answer-first) */}
            <div id="key-takeaways" className="mb-12 rounded-2xl border border-[var(--border-bright)] bg-[var(--background-elev)]/70 p-6 md:p-8">
              <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] mb-4">
                The short version
              </div>
              <ul className="space-y-3">
                {post.takeaways.map((t) => (
                  <li
                    key={t}
                    className="relative pl-6 text-[16px] leading-[1.6] text-foreground"
                  >
                    <span className="absolute left-0 top-[10px] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    {inline(t)}
                  </li>
                ))}
              </ul>
            </div>

            {post.body.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}

            {/* FAQ (AEO + FAQPage schema) */}
            <section id="faq" className="mt-16">
              <h2 className="font-display text-2xl md:text-[32px] leading-tight tracking-[-0.02em] text-foreground mb-8">
                Questions contractors ask
              </h2>
              <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {post.faqs.map((f) => (
                  <div key={f.q} className="py-6">
                    <h3 className="text-[18px] font-semibold text-foreground">
                      {f.q}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
                      {inline(f.a)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="mt-16 rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-8 md:p-10">
              <h3 className="font-display text-2xl md:text-[28px] leading-tight tracking-[-0.01em] text-foreground max-w-lg">
                Want to see what this looks like for your shop?
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-[var(--foreground-dim)] max-w-xl">
                Book a 30-minute roadmap call. No pitch deck. We map your operation
                and show you what to automate first. You leave with a real plan,
                whether we end up working together or not.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Button href="/contact" size="md" arrow>
                  Book a call
                </Button>
                <Button href="/#diagnostic" variant="secondary" size="md">
                  Try the diagnostic
                  <ArrowRight size={14} strokeWidth={2} />
                </Button>
              </div>
            </div>

            {/* Next post */}
            <Link
              href={`/blog/${next.slug}`}
              className="group mt-8 block rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 hover:border-[var(--accent)]/40 hover:bg-[var(--surface)] p-8 transition-all"
            >
              <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] mb-3">
                Next up →
              </div>
              <div className="text-[12px] font-mono text-[var(--accent)] mb-2">
                {next.category}
              </div>
              <h3 className="font-display text-2xl md:text-[28px] leading-tight tracking-[-0.01em] text-foreground group-hover:text-[var(--accent)] transition-colors">
                {next.title}
              </h3>
            </Link>
          </div>
        </Container>
      </div>
    </article>
  );
}
