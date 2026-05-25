"use client";

import * as motion from "motion/react-client";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";

const PILLARS = [
  {
    n: "01",
    title: "We ship working systems.",
    body: "A working prototype in week one. No 60-slide decks, no \"strategy phases\" that drag on for months. If we can't show you something running fast, we shouldn't be the ones building it.",
  },
  {
    n: "02",
    title: "You own everything we build.",
    body: "Custom code, not no-code duct tape. The systems live in your environment, on your cloud, with your data. You're never renting your business logic from a vendor — and you can take any of it elsewhere any time.",
  },
  {
    n: "03",
    title: "Grounded in your real business.",
    body: "Every system we build uses your actual data, your actual customers, your actual workflows. No generic AI. No \"trust the model.\" If a result can't be traced back to your reality, we don't ship it.",
  },
  {
    n: "04",
    title: "We stay after we ship.",
    body: "Monitoring, evolution, and improvement are part of the engagement — not an upsell. Going live is the start of the relationship, not the end. Your systems will need to keep learning; we'll be there.",
  },
  {
    n: "05",
    title: "We tell you when AI isn't the answer.",
    body: "We'll tell you which parts of your problem don't need AI — usually most of them. A consultancy that sells AI for everything is a consultancy that hasn't built much. We'd rather solve the right problem the right way.",
  },
];

export function HowWeWork() {
  return (
    <section className="relative py-28 md:py-36 border-b border-[var(--border)]">
      <Container size="wide">
        <SectionHeader
          eyebrow="How We Work"
          title={
            <>
              We build, <span className="italic">we don&apos;t just advise.</span>
            </>
          }
          description="Five principles that shape every engagement. No surprises, no scope creep, no slide decks pretending to be deliverables."
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
