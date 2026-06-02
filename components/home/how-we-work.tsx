"use client";

import * as motion from "motion/react-client";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";

const PILLARS = [
  {
    n: "01",
    title: "Live operational systems in 4–8 weeks.",
    body: "Production-ready systems your team can actually use.",
  },
  {
    n: "02",
    title: "Built around how you operate.",
    body: "Your workflows. Your operational structure. Your business logic.",
  },
  {
    n: "03",
    title: "Fully owned infrastructure.",
    body: "Deployed in your environment with no vendor lock-in.",
  },
  {
    n: "04",
    title: "Systems evolve with your operations.",
    body: "Monitoring, refinement, and operational optimization as the business grows.",
  },
  {
    n: "05",
    title: "Clear scope. Defined delivery.",
    body: "Structured implementation with transparent operational scope from day one.",
  },
];

export function HowWeWork() {
  return (
    <section className="relative py-20 md:py-28 border-b border-[var(--border)]">
      <Container size="wide">
        <SectionHeader
          eyebrow="How We Work"
          title={
            <>
              Same team. <span className="italic">More output.</span>
            </>
          }
          description="Systems designed for day-to-day operations — not isolated demos."
        />

        <div className="mt-16 grid gap-0 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--border)]">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative p-8 md:p-10 border-r border-b border-[var(--border)] group hover:bg-[var(--surface)]/40 transition-colors"
            >
              <div className="font-mono text-[12px] tracking-widest text-[var(--muted-2)] mb-5">
                / {p.n}
              </div>
              <h3 className="font-display text-[28px] leading-tight tracking-[-0.01em] text-foreground">
                {p.title}
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--foreground-dim)]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
