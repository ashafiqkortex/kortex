"use client";

import * as motion from "motion/react-client";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(193, 95, 60,0.08), transparent 70%)",
        }}
      />

      <Container size="default" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-bright)] bg-[var(--surface)]/60 backdrop-blur text-[12px] font-mono uppercase tracking-widest text-[var(--foreground-dim)] mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-[var(--accent)]" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]" />
            </span>
            Limited Implementation Capacity
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.02em] text-foreground">
            See what your business looks like
            <br />
            <span className="italic text-[var(--accent)]">with systems running it.</span>
          </h2>

          <p className="mt-7 max-w-xl mx-auto text-[16.5px] leading-relaxed text-[var(--foreground-dim)]">
            We&apos;ll map how your business currently operates, show you where connected systems would remove the most operational overhead, and what implementation would actually involve.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact" size="lg" arrow>
              See Operational Leverage
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
