import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { POSTS } from "@/lib/blog";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

export function BlogTeaser() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  return (
    <section className="relative py-16 md:py-24 border-b border-[var(--border)]">
      <Container size="wide">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] mb-5">
              <span className="h-px w-6 bg-[var(--border-bright)]" />
              From the blog
            </div>
            <h2 className="font-display text-3xl md:text-[44px] leading-[1.06] tracking-[-0.02em] text-foreground max-w-2xl">
              Straight talk on systems, not software.
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-[14px] font-medium text-[var(--accent)] hover:gap-3 transition-all shrink-0"
          >
            All posts
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
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
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[var(--accent)]">
                  <span>{post.category}</span>
                  <span className="text-[var(--muted-2)]">·</span>
                  <span className="text-[var(--muted)]">{formatDate(post.date)}</span>
                </div>
                <h3 className="mt-4 flex items-start justify-between gap-3 font-display text-xl md:text-[23px] leading-[1.15] tracking-[-0.01em] text-foreground group-hover:text-[var(--accent)] transition-colors">
                  <span>{post.title}</span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="shrink-0 mt-1 text-[var(--muted-2)] group-hover:text-[var(--accent)] transition-colors"
                  />
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--foreground-dim)] flex-1">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/blog"
          className="mt-10 md:hidden inline-flex items-center gap-2 text-[14px] font-medium text-[var(--accent)]"
        >
          All posts
          <ArrowRight size={16} strokeWidth={2} />
        </Link>
      </Container>
    </section>
  );
}
