"use client";

import * as motion from "motion/react-client";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES } from "@/lib/case-studies";
import { ArrowUpRight } from "lucide-react";

export function CaseStudiesTeaser() {
  return (
    <section id="work" className="relative py-20 md:py-28 border-b border-[var(--border)]">
      <Container size="wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeader
            eyebrow="Results"
            title={
              <>
                Same team. <span className="italic">More output.</span>
              </>
            }
            description="Production systems running inside real businesses."
          />
          <Button href="/case-studies" variant="secondary" size="md" arrow>
            All case studies
          </Button>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group relative block h-full rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 hover:border-[var(--accent)]/40 hover:bg-[var(--surface)] transition-all duration-300 overflow-hidden"
              >
                {/* Header visual */}
                <div className="relative h-44 border-b border-[var(--border)] overflow-hidden bg-[var(--background-elev)]">
                  <div className="absolute inset-0 bg-grid-fine opacity-40" />
                  <CaseStudyGlyph index={i} />
                  <div className="absolute top-4 left-4 text-[11px] font-mono uppercase tracking-widest text-[var(--muted)]">
                    0{i + 1} / Case Study
                  </div>
                  <div className="absolute top-4 right-4 h-6 w-6 rounded-full bg-[var(--background)]/80 border border-[var(--border-bright)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
                    <ArrowUpRight
                      size={12}
                      strokeWidth={2}
                      className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
                    <span className="h-px w-4 bg-[var(--accent)]/50" />
                    {cs.tag}
                  </div>
                  <h3 className="font-display text-[26px] leading-[1.1] tracking-[-0.01em] text-foreground">
                    {cs.client}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--foreground-dim)]">
                    {cs.tagline}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[var(--border)] grid grid-cols-3 gap-3">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-xl text-[var(--accent)]">
                          {m.value}
                        </div>
                        <div className="mt-1 text-[11px] font-mono uppercase tracking-widest text-[var(--muted)] leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CaseStudyGlyph({ index }: { index: number }) {
  if (index === 0) {
    // HVAC: geo-dispatch illustration
    return (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 180" fill="none">
        <g opacity="0.7">
          {[...Array(12)].map((_, i) => (
            <line
              key={`h${i}`}
              x1={i * 35}
              y1="0"
              x2={i * 35}
              y2="180"
              stroke="var(--border)"
              strokeWidth="0.5"
            />
          ))}
        </g>
        <circle cx="120" cy="80" r="3" fill="var(--accent)" />
        <circle cx="120" cy="80" r="8" fill="var(--accent)" fillOpacity="0.2" />
        <circle cx="260" cy="110" r="3" fill="var(--accent)" />
        <circle cx="260" cy="110" r="8" fill="var(--accent)" fillOpacity="0.2" />
        <circle cx="320" cy="60" r="3" fill="var(--foreground-dim)" />
        <circle cx="80" cy="130" r="3" fill="var(--foreground-dim)" />
        <path
          d="M 120 80 Q 180 50, 260 110 T 320 60"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeDasharray="3,3"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 80 130 Q 140 140, 260 110"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeDasharray="3,3"
          fill="none"
          opacity="0.4"
        />
      </svg>
    );
  }
  if (index === 1) {
    // Truth Layer: layered scan lines
    return (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 180" fill="none">
        {[30, 60, 90, 120, 150].map((y, i) => (
          <line
            key={y}
            x1="40"
            y1={y}
            x2="360"
            y2={y}
            stroke={i === 2 ? "var(--accent)" : "var(--border-bright)"}
            strokeWidth={i === 2 ? "1.5" : "1"}
            opacity={i === 2 ? "1" : "0.5"}
          />
        ))}
        <rect
          x="140"
          y="75"
          width="120"
          height="30"
          fill="var(--accent)"
          fillOpacity="0.08"
          stroke="var(--accent)"
          strokeWidth="1"
        />
        <text
          x="200"
          y="94"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="10"
          fill="var(--accent)"
          letterSpacing="2"
        >
          DRIFT
        </text>
      </svg>
    );
  }
  // Sales Intelligence: funnel + behavioral signal
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 180" fill="none">
      <path
        d="M 80 40 L 320 40 L 260 90 L 260 140 L 140 140 L 140 90 Z"
        stroke="var(--border-bright)"
        strokeWidth="1"
        fill="var(--surface)"
        fillOpacity="0.5"
      />
      <path
        d="M 80 40 L 320 40 L 260 90 L 140 90 Z"
        fill="var(--accent)"
        fillOpacity="0.08"
        stroke="var(--accent)"
        strokeWidth="1"
      />
      <circle cx="200" cy="65" r="2.5" fill="var(--accent)" />
      <path
        d="M 200 65 L 200 115"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeDasharray="2,2"
        opacity="0.6"
      />
      <circle cx="200" cy="115" r="2.5" fill="var(--danger)" />
      <text
        x="210"
        y="118"
        fontFamily="monospace"
        fontSize="9"
        fill="var(--danger)"
        letterSpacing="1"
      >
        silent death
      </text>
    </svg>
  );
}
