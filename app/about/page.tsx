import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About — Kortex Consulting",
  description:
    "An engineering firm disguised as a consultancy. We build the truth layer under our clients' operations.",
};

const PRINCIPLES = [
  {
    n: "01",
    title: "Ship, don't strategize.",
    body: "First working prototype in week one. Always.",
  },
  {
    n: "02",
    title: "Build to the metal.",
    body: "Real code, not no-code approximations. Your systems are yours to own, not rented.",
  },
  {
    n: "03",
    title: "Measure truth.",
    body: "Every system we ship reports against external reality, not its own logs.",
  },
  {
    n: "04",
    title: "Stay resident.",
    body: "We don't vanish at launch. Governance, observability, and evolution are part of the engagement.",
  },
  {
    n: "05",
    title: "Refuse the hype.",
    body: "We'll tell you which parts of your problem don't need AI. Usually most of them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            We are an engineering firm
            <br />
            <span className="italic text-[var(--accent)]">disguised as a consultancy.</span>
          </>
        }
      />

      <div className="py-16 md:py-24">
        <Container size="default">
          <div className="grid gap-6 md:gap-10 text-[19px] md:text-[20px] leading-relaxed text-[var(--foreground-dim)]">
            <p>
              Kortex was built on a simple conviction: most of what&apos;s sold as &quot;AI consulting&quot; is deck production and tool recommendation. The companies that actually get value from AI and automation are the ones that partner with engineers — people who sit with the problem, design the system, write the code, deploy it, and stay long enough to see it change the business.
            </p>
            <p>
              We build the truth layer under our clients&apos; operations. That means we&apos;re less interested in the tool landscape than in what the tools are missing. Less interested in dashboards than in what happens <em className="text-foreground">before</em> things make it to a dashboard. We care about ground truth — the state of the business as it actually is, not as it&apos;s been reported.
            </p>
            <p>
              We work across five disciplines — workflow automation, custom agents, AI engineering, AI governance, and integrations — because real operational problems don&apos;t respect service categories. A broken sales funnel is also a data problem, an agent problem, and an integration problem. We engineer across the whole surface.
            </p>
          </div>

          {/* Principles */}
          <div className="mt-24">
            <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] mb-8">
              <span className="h-px w-6 bg-[var(--border-bright)]" />
              Principles · 05
            </div>
            <div className="border-t border-l border-[var(--border)] grid md:grid-cols-2">
              {PRINCIPLES.map((p) => (
                <div
                  key={p.n}
                  className="p-8 md:p-10 border-r border-b border-[var(--border)]"
                >
                  <div className="font-mono text-[12px] tracking-widest text-[var(--muted-2)] mb-5">
                    / {p.n}
                  </div>
                  <h3 className="font-display text-[28px] md:text-[30px] leading-tight tracking-[-0.01em] text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[17px] leading-relaxed text-[var(--foreground-dim)]">
                    {p.body}
                  </p>
                </div>
              ))}
              <div className="p-8 md:p-10 border-r border-b border-[var(--border)] bg-[var(--surface)]/40 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[12px] tracking-widest text-[var(--accent)] mb-5">
                    / 06
                  </div>
                  <h3 className="font-display text-[28px] md:text-[30px] leading-tight tracking-[-0.01em] text-foreground">
                    Work with us.
                  </h3>
                  <p className="mt-4 text-[17px] leading-relaxed text-[var(--foreground-dim)]">
                    Twenty minutes is usually enough to tell you honestly whether we can help.
                  </p>
                </div>
                <div className="mt-8">
                  <Button href="/contact" size="md" arrow>
                    Book a call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
