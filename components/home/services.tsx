"use client";

import { useRef } from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import { Container } from "@/components/ui/container";
import { SERVICES } from "@/lib/services";

// Abstract operational glyphs
const GLYPHS: Record<string, React.ReactNode> = {
  "operational-workflows": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 6h4M4 12h8M4 18h6" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 6h8M12 12h4M10 18h6" strokeDasharray="2 2" opacity="0.5" />
    </svg>
  ),
  "operational-ai-agents": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="8" r="3" />
      <path d="M12 11v4" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="12" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M12 15l-5 2M12 15l5 2" opacity="0.6" />
    </svg>
  ),
  "operational-intelligence": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="4" width="16" height="16" rx="2" opacity="0.4" />
      <path d="M8 9h8M8 12h5M8 15h6" />
      <circle cx="17" cy="14" r="3" />
      <path d="M19.5 16.5l2 2" />
    </svg>
  ),
  "ai-oversight-systems": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8" opacity="0.3" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4v4M12 16v4M4 12h4M16 12h4" strokeDasharray="1 2" opacity="0.5" />
    </svg>
  ),
  "connected-operations": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M7.5 7.5l3 3M13.5 13.5l3 3M16.5 7.5l-3 3M7.5 16.5l3-3" opacity="0.6" />
    </svg>
  ),
};

const FLOW_NODES = [
  { x: 80, label: "Call" },
  { x: 200, label: "Agent" },
  { x: 320, label: "Schedule" },
  { x: 440, label: "Dispatch" },
  { x: 560, label: "Invoice" },
  { x: 680, label: "Follow-up" },
];

export function Services() {
  const flowRef = useRef<HTMLDivElement>(null);
  const flowInView = useInView(flowRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden border-b border-[var(--border)]">
      {/* Operational topology background — more balanced */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="services-grid"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 120 0 L 0 0 0 120"
                fill="none"
                stroke="rgba(193, 95, 60, 0.012)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />

          {/* Left side flowing paths */}
          <g stroke="rgba(193, 95, 60, 0.025)" strokeWidth="1" fill="none">
            <path d="M 0 300 Q 200 280, 400 320 T 800 300">
              <animate
                attributeName="d"
                values="M 0 300 Q 200 280, 400 320 T 800 300;M 0 320 Q 200 300, 400 280 T 800 320;M 0 300 Q 200 280, 400 320 T 800 300"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
          </g>

          {/* Right side balancing topology */}
          <g stroke="rgba(193, 95, 60, 0.02)" strokeWidth="1" fill="none">
            <path d="M 100% 200 Q calc(100% - 200px) 180, calc(100% - 400px) 220">
              <animate
                attributeName="d"
                values="M 100% 200 Q calc(100% - 200px) 180, calc(100% - 400px) 220;M 100% 220 Q calc(100% - 200px) 240, calc(100% - 400px) 200;M 100% 200 Q calc(100% - 200px) 180, calc(100% - 400px) 220"
                dur="18s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M 100% 500 Q calc(100% - 150px) 520, calc(100% - 350px) 480" />
            <path d="M 100% 700 Q calc(100% - 180px) 680, calc(100% - 400px) 720" />
          </g>

          {/* Scattered nodes — both sides */}
          <g fill="rgba(193, 95, 60, 0.02)">
            <circle cx="12%" cy="25%" r="3" />
            <circle cx="8%" cy="55%" r="2" />
            <circle cx="15%" cy="80%" r="2" />
            <circle cx="88%" cy="20%" r="2" />
            <circle cx="92%" cy="45%" r="3" />
            <circle cx="85%" cy="70%" r="2" />
            <circle cx="90%" cy="85%" r="2" />
          </g>
        </svg>
      </div>

      <Container size="wide" className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[11px] font-mono uppercase tracking-[0.25em] text-[var(--muted)]"
        >
          What We Build
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 font-display text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.03em] text-foreground leading-[1.0]"
        >
          The systems modern businesses
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-1 font-display text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.03em] italic font-light leading-[1.0]"
          style={{
            color: "var(--accent)",
            textShadow: "0 0 40px rgba(193, 95, 60, 0.12)",
          }}
        >
          run on.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 max-w-lg text-[16px] md:text-[17px] leading-[1.8] text-[var(--muted)] font-light"
        >
          Kortex builds connected operational systems that coordinate
          communication, workflows, data, and execution automatically —
          allowing businesses to scale with significantly greater leverage.
        </motion.p>

        {/* OPERATIONAL FLOW VISUALIZATION — with connectivity and sequential activation */}
        <motion.div
          ref={flowRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 md:mt-28 relative"
        >
          <div className="relative flex items-center justify-center overflow-hidden py-3 md:py-4">
            {/* Glow backdrop — more muted */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 100% at 50% 50%, rgba(193, 95, 60, 0.025), transparent 60%)",
              }}
            />

            {/* Flow diagram */}
            <svg
              viewBox="0 0 760 70"
              className="w-full max-w-3xl h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="flow-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(193, 95, 60, 0)" />
                  <stop offset="15%" stopColor="rgba(193, 95, 60, 0.35)" />
                  <stop offset="85%" stopColor="rgba(193, 95, 60, 0.35)" />
                  <stop offset="100%" stopColor="rgba(193, 95, 60, 0)" />
                </linearGradient>
                <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connection lines between nodes */}
              {FLOW_NODES.slice(0, -1).map((node, i) => (
                <line
                  key={`line-${i}`}
                  x1={node.x + 8}
                  y1="32"
                  x2={FLOW_NODES[i + 1].x - 8}
                  y2="32"
                  stroke="rgba(193, 95, 60, 0.55)"
                  strokeWidth="1.75"
                />
              ))}

              {/* Flow nodes — sequential activation on scroll */}
              {FLOW_NODES.map((node, i) => (
                <motion.g
                  key={node.label}
                  initial={{ opacity: 0.3 }}
                  animate={flowInView ? { opacity: 1 } : { opacity: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                >
                  <g filter="url(#node-glow)">
                  {/* Outer ring pulse */}
                  <circle
                    cx={node.x}
                    cy="32"
                    r="12"
                    fill="none"
                    stroke="rgba(193, 95, 60, 0.35)"
                    strokeWidth="1"
                  >
                    <animate
                      attributeName="r"
                      values="10;14;10"
                      dur={`${2.5 + i * 0.3}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.15;0.3;0.15"
                      dur={`${2.5 + i * 0.3}s`}
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Node circle */}
                  <circle
                    cx={node.x}
                    cy="32"
                    r="8"
                    fill="var(--background)"
                    stroke="var(--accent)"
                    strokeWidth="2"
                  />

                  {/* Inner dot */}
                  <circle
                    cx={node.x}
                    cy="32"
                    r="3.5"
                    fill="var(--accent)"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.5;0.9;0.5"
                      dur={`${1.8 + i * 0.2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  </g>

                  {/* Label */}
                  <text
                    x={node.x}
                    y="60"
                    textAnchor="middle"
                    className="text-[12px] font-mono uppercase tracking-wide font-semibold"
                    fill="var(--foreground)"
                  >
                    {node.label}
                  </text>
                </motion.g>
              ))}

              {/* Main traveling pulse — full journey */}
              <circle r="3.5" fill="#F97316" filter="url(#node-glow)">
                <animateMotion
                  dur="5s"
                  repeatCount="indefinite"
                  path="M 80 32 L 200 32 L 320 32 L 440 32 L 560 32 L 680 32"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;1;1;0"
                  keyTimes="0;0.05;0.3;0.7;0.95;1"
                  dur="5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="2;3;3;3;2"
                  keyTimes="0;0.1;0.5;0.9;1"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>

        </motion.div>

        {/* Caption + statement — one unit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 md:mt-10 text-center"
        >
          <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-[var(--accent)]">
            From customer call to paid invoice — automatically
          </p>
          <p className="mt-3 font-display text-[22px] md:text-[28px] leading-tight tracking-[-0.01em] text-foreground max-w-xl mx-auto">
            Operations become one connected system.
          </p>
        </motion.div>

        {/* Services list — with hover life */}
        <div className="mt-16 md:mt-20 space-y-4 md:space-y-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative"
            >
              {/* Card */}
              <div
                className="relative rounded-xl p-7 md:p-9 lg:p-10 border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--accent)]/40 group-hover:shadow-[0_10px_30px_rgba(193,95,60,0.10)] group-hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg, var(--surface-2) 0%, var(--surface) 100%)",
                }}
              >
                {/* Hover topology texture */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden"
                >
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`card-grid-${i}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(193, 95, 60, 0.03)" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#card-grid-${i})`} />
                  </svg>
                </div>

                {/* Hover glow from top-left */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 50% 50% at 15% 0%, rgba(193, 95, 60, 0.04), transparent 60%)",
                  }}
                />

                {/* Subtle border on hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(193, 95, 60, 0.06)",
                  }}
                />

                {/* Hover connection line animation */}
                <div className="absolute top-4 right-4 w-16 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <svg viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="16" r="2" fill="rgba(193, 95, 60, 0.3)" />
                    <circle cx="32" cy="16" r="2" fill="rgba(193, 95, 60, 0.3)" />
                    <circle cx="56" cy="16" r="2" fill="rgba(193, 95, 60, 0.3)" />
                    <line x1="10" y1="16" x2="30" y2="16" stroke="rgba(193, 95, 60, 0.15)" strokeWidth="1" />
                    <line x1="34" y1="16" x2="54" y2="16" stroke="rgba(193, 95, 60, 0.15)" strokeWidth="1" />
                    <circle r="1.5" fill="rgba(193, 95, 60, 0.6)">
                      <animateMotion dur="1.5s" repeatCount="indefinite" path="M 8 16 L 56 16" />
                    </circle>
                  </svg>
                </div>

                <div className="relative flex flex-col lg:flex-row lg:items-start lg:gap-10">
                  {/* Number + Glyph + Title */}
                  <div className="lg:w-64 shrink-0 flex items-start gap-4">
                    {/* Glyph */}
                    <div className="w-11 h-11 shrink-0 rounded-lg flex items-center justify-center bg-[var(--accent)]/10 border border-[var(--accent)]/25 text-[var(--accent)] group-hover:bg-[var(--accent)]/[0.16] group-hover:border-[var(--accent)]/40 transition-colors duration-500 [&_svg]:w-[22px] [&_svg]:h-[22px]">
                      {GLYPHS[service.slug]}
                    </div>

                    <div>
                      <div className="text-[10px] font-mono tracking-[0.2em] text-[var(--muted-2)] mb-1.5">
                        0{i + 1}
                      </div>
                      <h3 className="font-display text-xl md:text-[22px] lg:text-2xl tracking-[-0.02em] text-foreground leading-tight">
                        {service.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description — tighter, more muted */}
                  <div className="mt-5 lg:mt-0 flex-1 max-w-sm">
                    {service.short.map((paragraph, j) => (
                      <p
                        key={j}
                        className={`leading-[1.7] ${
                          j === 0
                            ? "text-[15px] md:text-[16px] font-medium text-foreground"
                            : "mt-2.5 text-[14px] md:text-[15px] text-[var(--muted)]"
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future moment — stronger, isolated */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-14 md:mt-16 flex flex-col items-center text-center"
        >
          <div
            className="w-12 h-px mb-6"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(193, 95, 60, 0.3), transparent)",
            }}
          />
          <p className="font-display text-[24px] md:text-[30px] leading-tight tracking-[-0.01em] text-foreground max-w-xl">
            The next generation of SMBs won&apos;t operate manually.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
