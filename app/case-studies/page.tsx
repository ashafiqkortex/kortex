import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { CASE_STUDIES } from "@/lib/case-studies";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Kortex Consulting",
  description:
    "Selected work: HVAC operational OS, Truth Layer AI governance, and Sales Intelligence behavioral funnel truth.",
};

export default function CaseStudiesIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies · 03"
        title={
          <>
            What we&apos;ve <span className="italic text-[var(--accent)]">shipped.</span>
          </>
        }
        description="Three representative engagements across operational automation, AI governance, and behavioral intelligence. Each one replaced a reporting layer with a ground-truth system."
      />

      <div className="py-16 md:py-24">
        <Container size="wide">
          <div className="space-y-8">
            {CASE_STUDIES.map((cs, i) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group block rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 hover:border-[var(--accent)]/40 hover:bg-[var(--surface)] transition-all duration-300 overflow-hidden"
              >
                <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                  <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[var(--border)] bg-[var(--background-elev)]/60">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted-2)]">
                      0{i + 1} / Case
                    </div>
                    <div className="mt-3 text-[11px] font-mono uppercase tracking-widest text-[var(--accent)]">
                      {cs.tag}
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {cs.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-display text-2xl text-[var(--accent)]">
                            {m.value}
                          </div>
                          <div className="mt-1 text-[10px] font-mono uppercase tracking-widest text-[var(--muted-2)] leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 md:p-10">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--muted)]">
                          {cs.client}
                        </div>
                        <h2 className="mt-3 font-display text-3xl md:text-[38px] leading-[1.1] tracking-[-0.02em] text-foreground">
                          {cs.headline}
                        </h2>
                      </div>
                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.5}
                        className="shrink-0 text-[var(--muted-2)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      />
                    </div>
                    <p className="mt-5 text-[15px] leading-relaxed text-[var(--foreground-dim)] max-w-xl">
                      {cs.tagline}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {cs.stack.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="text-[11px] font-mono text-[var(--muted)] border border-[var(--border)] rounded-full px-2.5 py-1"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
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
