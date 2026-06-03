import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Tools — Kortex Consulting",
  description:
    "Free tools for home services contractors: an AI readiness checklist, a revenue-leak calculator, the 4 revenue leaks framework, and a sample AI operations audit report.",
  alternates: { canonical: "https://kortexconsulting.com/tools" },
};

const TOOLS = [
  {
    href: "/tools/revenue-leak-calculator.html",
    kind: "Calculator",
    title: "Revenue Leak Calculator",
    desc: "Plug in your numbers and see what missed calls, slow quotes, and manual admin are costing your shop every year.",
  },
  {
    href: "/tools/ai-readiness.html",
    kind: "Checklist",
    title: "AI Readiness Checklist",
    desc: "Score how ready your operation is to automate — across calls, estimates, customer follow-up, and reputation.",
  },
  {
    href: "/tools/4-revenue-leaks.html",
    kind: "Framework",
    title: "The 4 Revenue Leaks",
    desc: "The framework: the four places money quietly leaks out of a contracting business — and how to plug each one.",
  },
  {
    href: "/tools/sample-audit.html",
    kind: "Sample Report",
    title: "Sample AI Operations Audit",
    desc: "See exactly what a Kortex audit delivers — a full example report built for a mid-size plumbing company.",
  },
];

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Tools"
        title={
          <>
            Find the leaks <span className="italic text-[var(--accent)]">first.</span>
          </>
        }
        description="Free, no-signup tools to size up your operation before you spend a dollar. Built for home services contractors doing $500K–$10M."
      />

      <div className="py-16 md:py-24">
        <Container size="wide">
          <div className="grid gap-6 md:grid-cols-2">
            {TOOLS.map((t) => (
              <a
                key={t.href}
                href={t.href}
                className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 hover:border-[var(--accent)]/40 hover:bg-[var(--surface)] transition-all duration-300 p-8 md:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--accent)]">
                    {t.kind}
                  </div>
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    className="shrink-0 text-[var(--muted-2)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <h2 className="mt-4 font-display text-2xl md:text-[30px] leading-[1.1] tracking-[-0.02em] text-foreground">
                  {t.title}
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-[var(--foreground-dim)] flex-1">
                  {t.desc}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-[var(--accent)]">
                  Open the tool
                  <ArrowUpRight size={15} strokeWidth={2} />
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-8 md:p-10 text-center">
            <h3 className="font-display text-2xl md:text-[28px] leading-tight tracking-[-0.01em] text-foreground max-w-xl mx-auto">
              Want the real thing, not the sample?
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-[var(--foreground-dim)] max-w-xl mx-auto">
              Book a 30-minute roadmap call and we'll map your operation live — what
              to automate first, what it costs, and what your shop runs like in six months.
            </p>
            <div className="mt-7">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-[15px] font-medium text-white hover:bg-[var(--accent-dim)] transition-colors"
              >
                Book a call
                <ArrowUpRight size={16} strokeWidth={2} />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
