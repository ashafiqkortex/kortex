import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES } from "@/lib/case-studies";
import { Check, ArrowRight } from "lucide-react";
import { CaseStudyChat } from "@/components/case-study-chat";

type Params = { slug: string };

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.client} — Kortex Consulting`,
    description: cs.tagline,
    alternates: {
      canonical: `https://kortexconsulting.com/case-studies/${cs.slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  const idx = CASE_STUDIES.findIndex((c) => c.slug === slug);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];

  return (
    <>
      <PageHeader
        eyebrow={`${cs.tag} · Case Study`}
        title={<>{cs.headline}</>}
        description={cs.tagline}
      />

      <div className="py-16 md:py-24">
        <Container size="wide">
          {/* Metrics + Client */}
          <div className="grid gap-0 md:grid-cols-[1fr_2fr] rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 overflow-hidden">
            <div className="p-8 border-b md:border-b-0 md:border-r border-[var(--border)] bg-[var(--background-elev)]/60">
              <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--muted)]">
                Client
              </div>
              <div className="mt-2 text-foreground text-[18px]">{cs.client}</div>
              <div className="mt-8 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)]">
                Stack
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cs.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono text-[var(--foreground-dim)] border border-[var(--border-bright)] rounded-full px-2.5 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8 grid grid-cols-3 gap-6">
              {cs.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-4xl text-[var(--accent)]">
                    {m.value}
                  </div>
                  <div className="mt-2 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] leading-tight">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="mt-20 grid gap-10 md:gap-16 lg:grid-cols-[200px_1fr]">
            <aside className="lg:sticky lg:top-24 h-fit">
              <nav className="space-y-3 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)]">
                <a href="#problem" className="block hover:text-[var(--accent)]">
                  / Problem
                </a>
                <a href="#built" className="block hover:text-[var(--accent)]">
                  / What we built
                </a>
                <a href="#outcome" className="block hover:text-[var(--accent)]">
                  / Outcome
                </a>
                <a href="#thesis" className="block hover:text-[var(--accent)]">
                  / The thesis
                </a>
                <a href="#ask" className="block text-[var(--accent)] hover:text-foreground">
                  / Ask the case study
                </a>
              </nav>
            </aside>

            <div className="max-w-2xl space-y-20">
              <section id="problem" className="scroll-mt-24">
                <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] mb-5">
                  / Problem
                </div>
                <h2 className="font-display text-3xl md:text-4xl leading-tight tracking-[-0.02em] text-foreground">
                  The state of things.
                </h2>
                <p className="mt-6 text-[16px] leading-relaxed text-[var(--foreground-dim)]">
                  {cs.problem}
                </p>
              </section>

              <section id="built" className="scroll-mt-24">
                <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] mb-5">
                  / What we built
                </div>
                <h2 className="font-display text-3xl md:text-4xl leading-tight tracking-[-0.02em] text-foreground">
                  The intervention.
                </h2>
                <ul className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                  {cs.built.map((b, i) => (
                    <li
                      key={b}
                      className="flex items-start gap-4 py-4 text-[16px] text-[var(--foreground-dim)]"
                    >
                      <span className="shrink-0 font-mono text-[12px] text-[var(--muted-2)] w-8 pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Check
                        size={16}
                        strokeWidth={2}
                        className="mt-1 text-[var(--accent)] shrink-0"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="outcome" className="scroll-mt-24">
                <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] mb-5">
                  / Outcome
                </div>
                <h2 className="font-display text-3xl md:text-4xl leading-tight tracking-[-0.02em] text-foreground">
                  What changed.
                </h2>
                <p className="mt-6 text-[16px] leading-relaxed text-[var(--foreground-dim)]">
                  {cs.outcome}
                </p>
              </section>

              <section id="thesis" className="scroll-mt-24">
                <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] mb-5">
                  / The thesis in action
                </div>
                <blockquote className="border-l-2 border-[var(--accent)] pl-6 italic font-display text-2xl md:text-3xl leading-[1.2] tracking-[-0.01em] text-foreground">
                  {cs.thesis}
                </blockquote>
              </section>

              <CaseStudyChat
                slug={cs.slug}
                client={cs.client}
                tag={cs.tag}
                starterQuestions={cs.starterQuestions}
              />
            </div>
          </div>

          {/* Next + CTA */}
          <div className="mt-16 md:mt-24 grid gap-6 md:grid-cols-2">
            <Link
              href={`/case-studies/${next.slug}`}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 hover:border-[var(--accent)]/40 hover:bg-[var(--surface)] p-8 transition-all"
            >
              <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] mb-3">
                Next case study →
              </div>
              <div className="text-[12px] font-mono text-[var(--accent)] mb-2">
                {next.tag}
              </div>
              <h3 className="font-display text-2xl md:text-[28px] leading-tight tracking-[-0.01em] text-foreground group-hover:text-[var(--accent)] transition-colors">
                {next.headline}
              </h3>
            </Link>
            <div className="rounded-xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-8 flex flex-col justify-between">
              <h3 className="font-display text-2xl md:text-[28px] leading-tight tracking-[-0.01em] text-foreground">
                Have a similar problem?
              </h3>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button href="/contact" size="md" arrow>
                  Book a call
                </Button>
                <Button href="/#diagnostic" variant="secondary" size="md">
                  Try the diagnostic
                  <ArrowRight size={14} strokeWidth={2} />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
