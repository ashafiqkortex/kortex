"use client";

import { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const DATA_FRAGMENTS = [
  { text: "ingest(operations)", x: 6, y: 16, delay: 0 },
  { text: "0110 1010 0011", x: 80, y: 22, delay: 1.2 },
  { text: "context_window=200K", x: 4, y: 74, delay: 2.4 },
  { text: "embeddings.parquet", x: 82, y: 78, delay: 3.1 },
  { text: "0xFA4B", x: 92, y: 48, delay: 0.8 },
  { text: "retrieve()", x: 3, y: 46, delay: 1.8 },
  { text: "1010 0110 1101", x: 88, y: 10, delay: 2.7 },
  { text: "your_data", x: 94, y: 88, delay: 3.5 },
  { text: "5EEA D412", x: 75, y: 90, delay: 4.2 },
  { text: "telemetry++", x: 12, y: 90, delay: 1.5 },
  { text: "graph.query()", x: 86, y: 60, delay: 5.0 },
  { text: "0xC0RT3X", x: 6, y: 60, delay: 5.7 },
];

// Densely packed neural network nodes inside the brain region
// Coordinates in the 400×400 SVG viewBox
const NEURAL_NODES: Array<[number, number, number, number]> = [
  // [x, y, baseRadius, pulseDelay]
  [200, 215, 5.5, 0],     // 0 — CORE PROCESSOR (center)
  // Left hemisphere
  [142, 168, 2.6, 0.4],   // 1
  [118, 210, 2.4, 1.1],   // 2
  [128, 252, 2.8, 1.8],   // 3
  [158, 290, 2.6, 0.6],   // 4
  [175, 232, 3.0, 2.4],   // 5
  [160, 195, 2.4, 1.5],   // 6
  [180, 152, 2.2, 0.9],   // 7
  [148, 130, 2.0, 2.0],   // 8
  // Right hemisphere
  [258, 168, 2.6, 0.5],   // 9
  [282, 210, 2.4, 1.2],   // 10
  [272, 252, 2.8, 1.9],   // 11
  [242, 290, 2.6, 0.7],   // 12
  [225, 232, 3.0, 2.5],   // 13
  [240, 195, 2.4, 1.6],   // 14
  [220, 152, 2.2, 1.0],   // 15
  [252, 130, 2.0, 2.1],   // 16
  // Central axis nodes
  [200, 142, 2.4, 2.2],   // 17
  [200, 180, 2.2, 0.2],   // 18
  [200, 250, 2.2, 1.3],   // 19
  [200, 295, 2.4, 2.7],   // 20
];

// Edges: pairs of node indices that connect
const NEURAL_EDGES: Array<[number, number]> = [
  [0, 5], [0, 6], [0, 13], [0, 14], [0, 18], [0, 19],
  [5, 1], [5, 2], [5, 6], [5, 18],
  [6, 7], [6, 8], [6, 1],
  [1, 8], [1, 7], [2, 3], [3, 4], [4, 5],
  [13, 9], [13, 10], [13, 14], [13, 18],
  [14, 15], [14, 16], [14, 9],
  [9, 16], [9, 15], [10, 11], [11, 12], [12, 13],
  [17, 18], [18, 19], [19, 20],
  [17, 7], [17, 15], [20, 4], [20, 12],
  [8, 17], [16, 17], [2, 18], [10, 18],
];

// Complete RAG pipeline paths: each dot enters the brain from outside,
// traverses cortex → converges to core (retrieve) → routes through neural mesh → exits.
// Designed so position 50% along path = the core, giving us a synchronized
// "all dots at the core during retrieve()" moment.
const PIPELINE_PATHS = [
  // Path 1: top-left in → bottom-right out
  "M -30 60 L 60 90 L 140 168 L 200 215 L 245 232 L 320 305 L 440 360",
  // Path 2: left-middle in → right-middle out
  "M -30 220 L 50 220 L 118 230 L 200 215 L 282 220 L 380 220 L 440 220",
  // Path 3: bottom-left in → top-right out
  "M -30 380 L 50 360 L 148 290 L 200 215 L 252 168 L 360 100 L 440 60",
];

// Edges that brighten during the ROUTE stage (dots emit from core into neural mesh)
const ROUTE_EDGES: Array<[number, number, number, number]> = [
  // [x1, y1, x2, y2]
  [200, 215, 240, 195],
  [200, 215, 175, 232],
  [200, 215, 225, 232],
  [200, 215, 260, 168],
  [200, 215, 148, 290],
];

export function HeroBrainV2() {
  const heroRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setMouse({
        x: (e.clientX - cx) / rect.width,
        y: (e.clientY - cy) / rect.height,
      });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32 border-b border-[var(--border)]"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 60% at 78% 50%, rgba(193, 95, 60,0.12), transparent 65%)",
        }}
      />

      <CircuitBackground />
      <FloatingData />

      {/* Brain — pushed further right (width 50%, no padding), with subtle 3D tilt on mouse */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-[50%] pointer-events-none flex items-center justify-center md:justify-end md:pr-[3%]"
        style={{
          transform: `translate(${mouse.x * 12}px, ${mouse.y * 8}px) perspective(1200px) rotateY(${mouse.x * -3}deg) rotateX(${mouse.y * 2}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <BrainCore />
      </div>

      <div
        className="absolute inset-y-0 left-0 w-full md:w-[55%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(7,9,12,0.95) 0%, rgba(7,9,12,0.85) 50%, rgba(7,9,12,0.45) 85%, rgba(7,9,12,0) 100%)",
        }}
      />

      <Container size="wide" className="relative">
        <div className="max-w-[580px]">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-bright)] bg-[var(--surface)]/70 backdrop-blur text-[11px] font-mono uppercase tracking-widest text-[var(--foreground-dim)]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-[var(--accent)]" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]" />
            </span>
            Operational AI Systems
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 font-display text-5xl md:text-6xl lg:text-[68px] leading-[1.0] tracking-[-0.02em] text-foreground"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.8)" }}
          >
            Scale without the headcount.
            <br />
            <span className="italic text-[var(--accent)]">With AI that runs your operations automatically.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-[520px] text-[17px] md:text-[18px] leading-relaxed text-[var(--foreground-dim)]"
            style={{ textShadow: "0 1px 16px rgba(0,0,0,0.7)" }}
          >
            Kortex builds AI operational systems — from customer call to paid invoice — so businesses scale with far greater leverage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <Button href="/contact" size="lg" arrow>
              See What Your Business Could Look Like
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { n: "48%", l: "productivity gains" },
              { n: "4–8 weeks", l: "to go live" },
              { n: "Fully owned", l: "by your business" },
            ].map((m) => (
              <div key={m.l}>
                <div className="font-display text-xl md:text-2xl text-foreground leading-tight">{m.n}</div>
                <div className="mt-1 text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">
                  {m.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- CIRCUIT BACKGROUND (unchanged from v1) ---------- */

function CircuitBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1600 900"
      >
        <defs>
          <filter id="circuit-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g stroke="var(--accent-dim)" strokeWidth="0.7" fill="none" opacity="0.32">
          <path d="M0 150 L300 150 L320 130 L600 130 L620 150 L900 150" />
          <path d="M0 280 L200 280 L220 300 L500 300 L520 280 L800 280 L820 260 L1100 260" />
          <path d="M0 420 L400 420 L420 440 L700 440" />
          <path d="M0 560 L250 560 L270 540 L550 540" />
          <path d="M0 700 L380 700 L400 720 L660 720" />
          <path d="M1600 200 L1300 200 L1280 220 L1000 220" />
          <path d="M1600 360 L1350 360 L1330 380 L1080 380" />
          <path d="M1600 520 L1280 520 L1260 500 L990 500" />
          <path d="M1600 680 L1320 680 L1300 660 L1050 660" />
          <path d="M1600 820 L1250 820 L1230 800 L980 800" />

          <path d="M150 0 L150 80 L130 100 L130 250" />
          <path d="M450 0 L450 100" />
          <path d="M850 0 L850 60 L870 80 L870 200" />
          <path d="M1450 0 L1450 80" />
          <path d="M250 900 L250 820 L270 800 L270 700" />
          <path d="M650 900 L650 770" />
          <path d="M1150 900 L1150 800 L1170 780 L1170 650" />
          <path d="M1400 900 L1400 760" />
        </g>

        <g fill="var(--accent)" filter="url(#circuit-glow)">
          {[
            [320, 130], [620, 150], [220, 300], [520, 280], [820, 260], [420, 440],
            [270, 540], [400, 720], [1280, 220], [1330, 380], [1260, 500], [1300, 660], [1230, 800],
            [130, 100], [870, 80], [270, 800], [1170, 780],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2">
              <animate
                attributeName="opacity"
                values="0.25;1;0.25"
                dur={`${2 + (i % 4) * 0.7}s`}
                begin={`${(i * 0.3) % 3}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>

        <g fill="var(--accent)" filter="url(#circuit-glow)">
          <circle r="2.5">
            <animateMotion dur="8s" repeatCount="indefinite"
              path="M0 280 L200 280 L220 300 L500 300 L520 280 L800 280 L820 260 L1100 260" />
          </circle>
          <circle r="2.5">
            <animateMotion dur="10s" repeatCount="indefinite" begin="2s"
              path="M0 150 L300 150 L320 130 L600 130 L620 150 L900 150" />
          </circle>
          <circle r="2.5">
            <animateMotion dur="9s" repeatCount="indefinite" begin="1s"
              path="M1600 360 L1350 360 L1330 380 L1080 380" />
          </circle>
          <circle r="2.5">
            <animateMotion dur="11s" repeatCount="indefinite" begin="3s"
              path="M1600 520 L1280 520 L1260 500 L990 500" />
          </circle>
          <circle r="2.5">
            <animateMotion dur="12s" repeatCount="indefinite" begin="4s"
              path="M0 700 L380 700 L400 720 L660 720" />
          </circle>
          <circle r="2.5">
            <animateMotion dur="9s" repeatCount="indefinite" begin="5s"
              path="M1600 200 L1300 200 L1280 220 L1000 220" />
          </circle>
        </g>
      </svg>

      <div className="absolute inset-0 bg-grid opacity-50" />
    </div>
  );
}

/* ---------- BRAIN CORE v2 — denser, with neural mesh + core processor + scan line ---------- */

function BrainCore() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-[420px] h-[420px] sm:w-[480px] sm:h-[480px] md:w-[540px] md:h-[540px] lg:w-[600px] lg:h-[600px]"
    >
      {/* Outer ambient glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(193, 95, 60,0.26), rgba(193, 95, 60,0.07) 38%, transparent 72%)",
          filter: "blur(24px)",
        }}
      />

      {/* Breathing wrapper */}
      <motion.div
        animate={{ scale: [1, 1.028, 1], rotate: [-0.6, 0.6, -0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="brain-glow-v2" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="core-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="brain-grad-v2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--accent-dim)" stopOpacity="0.7" />
            </linearGradient>
            <radialGradient id="brain-center-v2" cx="50%" cy="50%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
              <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.06" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>

            {/* Hex lattice pattern */}
            <pattern id="hex-pattern" x="0" y="0" width="22" height="38" patternUnits="userSpaceOnUse">
              <path
                d="M 11 0 L 22 6.35 L 22 18.65 L 11 25 L 0 18.65 L 0 6.35 Z"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="0.5"
                opacity="0.5"
              />
            </pattern>

            {/* Clip path matching brain silhouette */}
            <clipPath id="brain-silhouette">
              <path
                d="M 200 80
                   C 130 78, 88 128, 95 178
                   C 78 200, 74 244, 96 272
                   C 92 304, 114 332, 148 342
                   C 172 356, 196 352, 200 342
                   C 204 352, 228 356, 252 342
                   C 286 332, 308 304, 304 272
                   C 326 244, 322 200, 305 178
                   C 312 128, 270 78, 200 80 Z"
              />
            </clipPath>
          </defs>

          {/* Interior wash */}
          <ellipse cx="200" cy="215" rx="125" ry="135" fill="url(#brain-center-v2)" />

          {/* Hex lattice clipped to brain shape (very subtle texture) */}
          <g clipPath="url(#brain-silhouette)" opacity="0.18">
            <rect x="0" y="0" width="400" height="400" fill="url(#hex-pattern)" />
          </g>

          {/* Scanning sweep line — slow vertical bar that travels through brain */}
          <g clipPath="url(#brain-silhouette)">
            <rect x="0" width="400" height="2" fill="var(--accent)" opacity="0.55">
              <animate
                attributeName="y"
                values="70;360;70"
                dur="8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0.6;0.6;0"
                keyTimes="0;0.1;0.9;1"
                dur="8s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="0" width="400" height="18" opacity="0.15">
              <animate
                attributeName="y"
                values="55;345;55"
                dur="8s"
                repeatCount="indefinite"
              />
            </rect>
          </g>

          {/* Brain glow group */}
          <g filter="url(#brain-glow-v2)">
            {/* Hemispheres */}
            <path
              d="M 200 80
                 C 130 78, 88 128, 95 178
                 C 78 200, 74 244, 96 272
                 C 92 304, 114 332, 148 342
                 C 172 356, 196 352, 200 342"
              stroke="url(#brain-grad-v2)"
              strokeWidth="2.4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 200 80
                 C 270 78, 312 128, 305 178
                 C 322 200, 326 244, 304 272
                 C 308 304, 286 332, 252 342
                 C 228 356, 204 352, 200 342"
              stroke="url(#brain-grad-v2)"
              strokeWidth="2.4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="200" y1="82" x2="200" y2="342"
              stroke="var(--accent)" strokeWidth="1" opacity="0.55" strokeDasharray="3 4"
            />

            {/* Gyri — left */}
            <g stroke="var(--accent)" strokeWidth="1.2" fill="none" opacity="0.72" strokeLinecap="round">
              <path d="M 108 138 C 132 128, 152 145, 160 162 C 168 174, 152 188, 138 182" />
              <path d="M 96 196 C 122 192, 144 208, 160 220 C 176 232, 164 252, 144 246" />
              <path d="M 110 256 C 132 252, 154 268, 170 280 C 180 290, 162 304, 148 298" />
              <path d="M 102 170 C 118 165, 132 178, 140 188" />
              <path d="M 122 282 C 138 280, 152 295, 158 305" />
            </g>

            {/* Gyri — right */}
            <g stroke="var(--accent)" strokeWidth="1.2" fill="none" opacity="0.72" strokeLinecap="round">
              <path d="M 292 138 C 268 128, 248 145, 240 162 C 232 174, 248 188, 262 182" />
              <path d="M 304 196 C 278 192, 256 208, 240 220 C 224 232, 236 252, 256 246" />
              <path d="M 290 256 C 268 252, 246 268, 230 280 C 220 290, 238 304, 252 298" />
              <path d="M 298 170 C 282 165, 268 178, 260 188" />
              <path d="M 278 282 C 262 280, 248 295, 242 305" />
            </g>

            {/* NEURAL EDGES (mesh) */}
            <g stroke="var(--accent)" strokeWidth="0.9" opacity="0.38" fill="none">
              {NEURAL_EDGES.map(([a, b], i) => {
                const [ax, ay] = NEURAL_NODES[a];
                const [bx, by] = NEURAL_NODES[b];
                return <line key={i} x1={ax} y1={ay} x2={bx} y2={by} />;
              })}
            </g>

            {/* NEURAL NODES (excluding core, drawn separately below) */}
            <g fill="var(--accent)">
              {NEURAL_NODES.slice(1).map(([x, y, r, d], i) => (
                <circle key={i} cx={x} cy={y} r={r}>
                  <animate
                    attributeName="opacity"
                    values="0.35;1;0.35"
                    dur={`${2 + (i % 3) * 0.55}s`}
                    begin={`${d}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="r"
                    values={`${r * 0.85};${r * 1.5};${r * 0.85}`}
                    dur={`${2 + (i % 3) * 0.55}s`}
                    begin={`${d}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </g>

            {/* Brain stem */}
            <path
              d="M 184 342 C 184 364, 216 364, 216 342"
              stroke="url(#brain-grad-v2)"
              strokeWidth="2.4"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* ROUTE STAGE: edges that brighten as dots emit from core (3-4.25s of cycle) */}
          <g stroke="var(--accent)" fill="none" strokeLinecap="round">
            {ROUTE_EDGES.map(([x1, y1, x2, y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}>
                <animate
                  attributeName="opacity"
                  values="0.15;0.15;1;0.15;0.15"
                  keyTimes="0;0.55;0.7;0.82;1"
                  dur="5s"
                  begin={`${i * 0.08}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-width"
                  values="0.8;0.8;2.4;0.8;0.8"
                  keyTimes="0;0.55;0.7;0.82;1"
                  dur="5s"
                  begin={`${i * 0.08}s`}
                  repeatCount="indefinite"
                />
              </line>
            ))}
          </g>

          {/* CENTRAL CORE PROCESSOR — flashes brighter during retrieve() stage (40-55% of cycle) */}
          <g filter="url(#core-glow)">
            <circle cx="200" cy="215" fill="var(--accent)" opacity="0.18">
              <animate
                attributeName="r"
                values="10;10;22;14;10"
                keyTimes="0;0.4;0.5;0.62;1"
                dur="5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.12;0.12;0.45;0.2;0.12"
                keyTimes="0;0.4;0.5;0.62;1"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="200" cy="215" fill="var(--accent)">
              <animate
                attributeName="r"
                values="5.5;5.5;9;6.5;5.5"
                keyTimes="0;0.4;0.5;0.62;1"
                dur="5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.7;0.7;1;0.85;0.7"
                keyTimes="0;0.4;0.5;0.62;1"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
            <path
              d="M 200 209 L 206 212 L 206 218 L 200 221 L 194 218 L 194 212 Z"
              fill="var(--background)"
              stroke="var(--accent)"
              strokeWidth="0.8"
              opacity="0.95"
            />
          </g>

          {/* RAG PIPELINE — 3 dots traversing complete ingest → retrieve → route → output.
              Durations and begins are intentionally desync'd so the dots arrive at the
              core at random-feeling intervals, not in lockstep. */}
          <g fill="var(--accent)" filter="url(#brain-glow-v2)">
            {PIPELINE_PATHS.map((path, i) => {
              // Per-dot timing — different cycle lengths + offsets = organic, asynchronous arrivals
              const durations = [5.5, 4.5, 6.2];
              const begins = [0, 2.1, 3.6];
              const d = durations[i];
              const b = begins[i];
              return (
                <circle key={i} r="2.2">
                  <animateMotion
                    dur={`${d}s`}
                    begin={`${b}s`}
                    repeatCount="indefinite"
                    keyTimes="0;0.16;0.40;0.50;0.55;0.85;1"
                    keyPoints="0;0.17;0.45;0.50;0.55;0.85;1"
                    calcMode="linear"
                    path={path}
                  />
                  <animate
                    attributeName="r"
                    values="1.8;2.4;2.8;3.4;3.0;2.4;1.8"
                    keyTimes="0;0.16;0.40;0.50;0.55;0.85;1"
                    dur={`${d}s`}
                    begin={`${b}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;1;1;1;0"
                    keyTimes="0;0.06;0.16;0.50;0.65;0.85;1"
                    dur={`${d}s`}
                    begin={`${b}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}
          </g>

          {/* Outer concentric pulse rings (ambient, unchanged) */}
          <circle cx="200" cy="212" r="158" fill="none" stroke="var(--accent)" strokeWidth="0.6" opacity="0.3">
            <animate attributeName="r" values="158;182;158" dur="4.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.05;0.4;0.05" dur="4.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="212" r="178" fill="none" stroke="var(--accent)" strokeWidth="0.5" opacity="0.2">
            <animate attributeName="r" values="178;202;178" dur="5.5s" repeatCount="indefinite" begin="0.8s" />
            <animate attributeName="opacity" values="0.04;0.28;0.04" dur="5.5s" repeatCount="indefinite" begin="0.8s" />
          </circle>
          <circle cx="200" cy="212" r="200" fill="none" stroke="var(--accent)" strokeWidth="0.4" opacity="0.15">
            <animate attributeName="r" values="200;224;200" dur="6.5s" repeatCount="indefinite" begin="1.6s" />
            <animate attributeName="opacity" values="0.03;0.2;0.03" dur="6.5s" repeatCount="indefinite" begin="1.6s" />
          </circle>
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ---------- FLOATING DATA FRAGMENTS (unchanged from v1) ---------- */

function FloatingData() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {DATA_FRAGMENTS.map((f, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-[10px] md:text-[11px] tracking-wider text-[var(--accent-dim)] whitespace-nowrap"
          style={{ left: `${f.x}%`, top: `${f.y}%` }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.55, 0.55, 0],
            y: [0, -8, -18, -26],
          }}
          transition={{
            duration: 9,
            delay: f.delay,
            repeat: Infinity,
            repeatDelay: 3,
            times: [0, 0.18, 0.82, 1],
            ease: "easeInOut",
          }}
        >
          {f.text}
        </motion.div>
      ))}
    </div>
  );
}
