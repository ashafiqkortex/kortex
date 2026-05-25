"use client";

import * as motion from "motion/react-client";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";

const MISALIGNMENTS = [
  {
    tool: "Where do I even start?",
    says: "AI will transform your business",
    reality:
      "You know AI matters. You haven't pinned down a single concrete use case yet — and nobody's helping you figure that out before selling you something.",
  },
  {
    tool: "Off-the-shelf generative AI",
    says: "AI that automates your workflows",
    reality:
      "Doesn't know your customers, your contracts, or how decisions actually get made in your business.",
  },
  {
    tool: "The strategy deck",
    says: "Comprehensive AI roadmap, 60 slides",
    reality:
      "Zero working systems. Your team still doesn't know what to do on Monday morning.",
  },
  {
    tool: "The pilot that stalled",
    says: "6-week proof of concept delivered",
    reality:
      "Demo'd well. Never made it into production. Sitting on a shelf six months later.",
  },
];

export function Problem() {
  return (
    <section className="relative py-28 md:py-36 border-b border-[var(--border)]">
      <Container size="wide">
        <SectionHeader
          eyebrow="The Problem"
          title={
            <>
              AI is everywhere.
              <br />
              <span className="italic text-[var(--accent)]">Almost none of it is built for your business.</span>
            </>
          }
          description={
            <>
              Most companies trying to <em>do AI</em> don&apos;t yet know what they want AI to do for them. That&apos;s not your failure — it&apos;s the failure of how AI is being sold. Generative AI for everything. AI agents that automate your team. Strategy decks promising AI transformation. All pitched without anyone ever seeing inside your business, your data, or your customers.
            </>
          }
        />

        <div className="mt-16 grid gap-0 md:grid-cols-2 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 overflow-hidden">
          {MISALIGNMENTS.map((m, i) => (
            <motion.div
              key={m.tool}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-7 md:p-9 border-b md:border-b border-[var(--border)] md:[&:nth-child(odd)]:border-r md:last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
            >
              <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--muted-2)] mb-4">
                {m.tool}
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="shrink-0 text-[11px] font-mono uppercase tracking-widest text-[var(--muted)] w-16 pt-1">
                    Pitch
                  </div>
                  <div className="text-[15px] text-[var(--foreground-dim)] line-through decoration-[var(--muted-2)] decoration-1">
                    {m.says}
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0 text-[11px] font-mono uppercase tracking-widest text-[var(--accent)] w-16 pt-1">
                    Reality
                  </div>
                  <div className="text-[15px] text-foreground">
                    {m.reality}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 max-w-2xl text-[15.5px] leading-relaxed text-[var(--muted)]"
        >
          Kortex is the AI &amp; automation consultancy for businesses that want <em className="text-[var(--foreground-dim)] not-italic font-medium">generative AI</em>, <em className="text-[var(--foreground-dim)] not-italic font-medium">AI agents</em>, and <em className="text-[var(--foreground-dim)] not-italic font-medium">custom AI solutions</em> built directly into their environment — not bolted on. From small business to enterprise. We start with what you actually need AI to do, then build the system that does it.
        </motion.p>
      </Container>
    </section>
  );
}
