"use client";

import * as motion from "motion/react-client";
import { Container } from "@/components/ui/container";

const MISALIGNMENTS = [
  {
    tool: "More software",
    says: "All-in-one platform for your business.",
    reality:
      "Now you have seven tools. None of them connect. Your team enters the same information three times.",
  },
  {
    tool: "More people",
    says: "Hire to scale.",
    reality:
      "Every new hire adds coordination overhead. The business grows. Operations slow down.",
  },
  {
    tool: "The AI pilot",
    says: "Proof of concept delivered.",
    reality: "The demo worked. Production never happened.",
  },
  {
    tool: "The consultant",
    says: "Comprehensive AI roadmap.",
    reality: "You got a strategy deck. Monday looked exactly the same.",
  },
];

export function Problem() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-b border-[var(--border)]">
      {/* Operational topology background — very subtle disconnected system */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="problem-grid"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgba(193, 95, 60, 0.015)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#problem-grid)" />

          {/* Disconnected operational nodes — fragmented system visualization */}
          <g
            stroke="rgba(193, 95, 60, 0.06)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
          >
            {/* Left side broken connections */}
            <path d="M -20 200 L 120 200 L 160 240" />
            <path d="M -20 400 L 80 400 L 100 380" />
            <path d="M 60 100 L 60 180" />
            <path d="M 140 320 L 140 420 L 180 460" />

            {/* Right side broken connections */}
            <path d="M 100% 300 L calc(100% - 150px) 300 L calc(100% - 180px) 260" />
            <path d="M 100% 500 L calc(100% - 100px) 500" />
            <path d="M calc(100% - 80px) 150 L calc(100% - 80px) 250" />
          </g>

          {/* Disconnected nodes */}
          <g fill="rgba(193, 95, 60, 0.04)">
            <circle cx="120" cy="200" r="4" />
            <circle cx="160" cy="240" r="3" />
            <circle cx="80" cy="400" r="3" />
            <circle cx="60" cy="180" r="3" />
            <circle cx="140" cy="420" r="4" />
          </g>
        </svg>
      </div>

      <Container size="wide" className="relative">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[12px] font-mono uppercase tracking-[0.2em] text-[var(--muted)]"
        >
          The Problem
        </motion.div>

        {/* Headline — sharp, dominant */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-foreground leading-[1.05]"
        >
          You&apos;ve tried scaling with people.
        </motion.h2>

        {/* "It's not working" — emotional, softer, glowing */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl tracking-[-0.01em] italic font-light"
          style={{
            color: "rgba(193, 95, 60, 0.85)",
            textShadow:
              "0 0 40px rgba(193, 95, 60, 0.4), 0 0 80px rgba(193, 95, 60, 0.2)",
          }}
        >
          It&apos;s not working.
        </motion.p>

        {/* Body — narrow, editorial, lighter weight */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 max-w-md text-[17px] leading-[1.9] text-[var(--muted)] font-light"
        >
          <p>
            More hires. More software. More coordination.
            <br />
            But somehow the business feels heavier than ever.
          </p>
          <p className="mt-6">
            Your team is busy. Output isn&apos;t compounding.
            <br />
            Because nothing connects.
          </p>
          <p className="mt-6 text-[var(--foreground-dim)]">
            Your tools don&apos;t talk. Your data lives in five places. And your
            best people spend their day coordinating work a system should
            already handle.
          </p>
        </motion.div>

        {/* Cards — staggered, with atmospheric depth */}
        <div className="mt-16 md:mt-24 relative">
          {/* Disconnected lines between cards — visual fragmentation */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="line-fade" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(193, 95, 60, 0.15)" />
                <stop offset="50%" stopColor="rgba(193, 95, 60, 0.03)" />
                <stop offset="100%" stopColor="rgba(193, 95, 60, 0.15)" />
              </linearGradient>
            </defs>
            {/* Horizontal broken line between top cards */}
            <line
              x1="48%"
              y1="12%"
              x2="52%"
              y2="12%"
              stroke="url(#line-fade)"
              strokeWidth="1"
              strokeDasharray="3 8"
            />
            {/* Vertical broken line between rows */}
            <line
              x1="25%"
              y1="46%"
              x2="25%"
              y2="54%"
              stroke="rgba(193, 95, 60, 0.08)"
              strokeWidth="1"
              strokeDasharray="2 6"
            />
            <line
              x1="75%"
              y1="46%"
              x2="75%"
              y2="54%"
              stroke="rgba(193, 95, 60, 0.08)"
              strokeWidth="1"
              strokeDasharray="2 6"
            />
          </svg>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {MISALIGNMENTS.map((m, i) => (
              <motion.div
                key={m.tool}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group"
                style={{
                  marginTop: i === 1 ? "2rem" : i === 2 ? "1rem" : 0,
                }}
              >
                {/* Card glow on hover */}
                <div
                  className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(193, 95, 60, 0.08), transparent 70%)",
                  }}
                />

                {/* Card */}
                <div className="relative rounded-xl bg-[var(--surface)]/40 backdrop-blur-sm border border-[var(--border)]/50 p-7 md:p-9 transition-all duration-300 group-hover:border-[var(--accent)]/40 group-hover:bg-[var(--surface)]/70 group-hover:shadow-[0_10px_30px_rgba(193,95,60,0.10)] group-hover:-translate-y-1">
                  {/* Subtle top edge glow */}
                  <div
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(193, 95, 60, 0.15) 50%, transparent)",
                    }}
                  />

                  <div className="text-[12px] font-mono uppercase tracking-[0.15em] text-[var(--accent)] mb-5">
                    {m.tool}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--muted)]">
                        Pitch
                      </span>
                      <span className="text-[15px] text-foreground/80 line-through decoration-[var(--accent)] decoration-1">
                        {m.says}
                      </span>
                    </div>
                    <p className="text-[17px] md:text-[18px] leading-relaxed text-[var(--foreground-dim)]">
                      {m.reality}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Worldview shift — isolated, centered, powerful */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="mt-16 md:mt-24 flex flex-col items-center text-center"
        >
          <div className="relative">
            {/* Ambient glow behind statement */}
            <div
              className="absolute -inset-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(193, 95, 60, 0.06), transparent 70%)",
              }}
            />

            <p className="relative font-display text-2xl md:text-3xl lg:text-[2.5rem] tracking-[-0.02em] text-foreground leading-[1.3]">
              Businesses used to scale through people.
            </p>
            <p
              className="relative mt-2 font-display text-2xl md:text-3xl lg:text-[2.5rem] tracking-[-0.02em] leading-[1.3]"
              style={{
                color: "var(--accent)",
                textShadow: "0 0 50px rgba(193, 95, 60, 0.3)",
              }}
            >
              Now they scale through systems.
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 max-w-md text-[15px] leading-[1.85] text-[var(--muted)] font-light"
          >
            Kortex builds operational AI systems that replace fragmented
            coordination with connected infrastructure — allowing businesses to
            scale faster without adding overhead.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
