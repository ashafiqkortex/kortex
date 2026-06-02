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

export function HeroBrain() {
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
      className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28 border-b border-[var(--border)]"
    >
      {/* Deep radial accent glow centered on the brain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 65% at 72% 50%, rgba(193, 95, 60,0.10), transparent 65%)",
        }}
      />

      <CircuitBackground />
      <FloatingData />

      {/* Brain — anchored right, drifts with mouse */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-[65%] pointer-events-none flex items-center justify-center md:justify-end md:pr-[6%]"
        style={{
          transform: `translate(${mouse.x * 12}px, ${mouse.y * 8}px)`,
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <BrainCore />
      </div>

      {/* Left-side scrim — ensures text always sits on a readable surface */}
      <div
        className="absolute inset-y-0 left-0 w-full md:w-[58%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(240,238,230,0.95) 0%, rgba(240,238,230,0.85) 45%, rgba(240,238,230,0.4) 80%, rgba(240,238,230,0) 100%)",
        }}
      />

      {/* Content */}
      <Container size="wide" className="relative">
        <div className="max-w-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-bright)] bg-[var(--surface)]/70 backdrop-blur text-[12px] font-mono uppercase tracking-widest text-[var(--foreground-dim)]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-[var(--accent)]" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]" />
            </span>
            AI &amp; Automation Engineering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 font-display text-5xl md:text-6xl lg:text-[76px] leading-[0.98] tracking-[-0.02em] text-foreground"
            style={{ textShadow: "0 1px 18px rgba(240,238,230,0.9)" }}
          >
            AI that knows{" "}
            <span className="italic text-[var(--accent)]">your business</span>.
            <br />
            Built into your environment.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-xl text-[19px] md:text-[20px] leading-relaxed text-[var(--foreground-dim)]"
            style={{ textShadow: "0 1px 12px rgba(240,238,230,0.9)" }}
          >
            Custom RAG, agents, and automation — engineered into your own systems and data. For companies that want AI <em>inside</em> the business, not bolted on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <Button href="/contact" size="lg" arrow>
              Book a 30-minute consultation
            </Button>
            <Button href="#how-we-work" size="lg" variant="secondary">
              See how we work
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { n: "SMB → Enterprise", l: "Engagement range" },
              { n: "Your environment", l: "Your data, your cloud" },
              { n: "30 min", l: "From unsure to a plan" },
            ].map((m) => (
              <div key={m.l}>
                <div className="font-display text-xl md:text-2xl text-foreground leading-tight">{m.n}</div>
                <div className="mt-1 text-[11px] font-mono uppercase tracking-widest text-[var(--muted)]">
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

/* ---------- BACKGROUND CIRCUIT ---------- */

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

        {/* PCB trace lines */}
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

        {/* Junction nodes */}
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

        {/* Travelling current dots (data flowing along traces) */}
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

/* ---------- BRAIN CORE ---------- */

function BrainCore() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-[420px] h-[420px] sm:w-[480px] sm:h-[480px] md:w-[560px] md:h-[560px] lg:w-[620px] lg:h-[620px]"
    >
      {/* Outer ambient glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(193, 95, 60,0.22), rgba(193, 95, 60,0.05) 38%, transparent 70%)",
          filter: "blur(22px)",
        }}
      />

      {/* Breathing wrapper — entire brain scales 1 → 1.025 → 1 */}
      <motion.div
        animate={{ scale: [1, 1.025, 1] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="brain-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="brain-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--accent-dim)" stopOpacity="0.75" />
            </linearGradient>
            <radialGradient id="brain-center" cx="50%" cy="50%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
              <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.05" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Subtle interior wash */}
          <ellipse cx="200" cy="215" rx="125" ry="135" fill="url(#brain-center)" />

          {/* Main brain group with glow filter */}
          <g filter="url(#brain-glow)">
            {/* Left hemisphere */}
            <path
              d="M 200 80
                 C 130 78, 88 128, 95 178
                 C 78 200, 74 244, 96 272
                 C 92 304, 114 332, 148 342
                 C 172 356, 196 352, 200 342"
              stroke="url(#brain-grad)"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Right hemisphere */}
            <path
              d="M 200 80
                 C 270 78, 312 128, 305 178
                 C 322 200, 326 244, 304 272
                 C 308 304, 286 332, 252 342
                 C 228 356, 204 352, 200 342"
              stroke="url(#brain-grad)"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Longitudinal fissure */}
            <line
              x1="200" y1="82" x2="200" y2="342"
              stroke="var(--accent)" strokeWidth="1" opacity="0.55" strokeDasharray="3 4"
            />

            {/* Left gyri (cortical folds) */}
            <g stroke="var(--accent)" strokeWidth="1.3" fill="none" opacity="0.78" strokeLinecap="round">
              <path d="M 108 138 C 132 128, 152 145, 160 162 C 168 174, 152 188, 138 182" />
              <path d="M 96 196 C 122 192, 144 208, 160 220 C 176 232, 164 252, 144 246" />
              <path d="M 110 256 C 132 252, 154 268, 170 280 C 180 290, 162 304, 148 298" />
              <path d="M 128 308 C 150 304, 174 314, 184 324" />
              <path d="M 144 110 C 162 102, 184 110, 194 122" />
            </g>

            {/* Right gyri */}
            <g stroke="var(--accent)" strokeWidth="1.3" fill="none" opacity="0.78" strokeLinecap="round">
              <path d="M 292 138 C 268 128, 248 145, 240 162 C 232 174, 248 188, 262 182" />
              <path d="M 304 196 C 278 192, 256 208, 240 220 C 224 232, 236 252, 256 246" />
              <path d="M 290 256 C 268 252, 246 268, 230 280 C 220 290, 238 304, 252 298" />
              <path d="M 272 308 C 250 304, 226 314, 216 324" />
              <path d="M 256 110 C 238 102, 216 110, 206 122" />
            </g>

            {/* Neural nodes */}
            <g fill="var(--accent)">
              {[
                [140, 178, 0], [108, 234, 1.2], [148, 290, 0.5], [165, 218, 2.1],
                [260, 178, 0.8], [292, 234, 1.5], [252, 290, 2.5], [235, 218, 0.3],
                [200, 138, 1.7], [200, 218, 0.6], [200, 290, 2.8], [175, 252, 1.0],
                [225, 252, 1.4],
              ].map(([x, y, d], i) => (
                <circle key={i} cx={x} cy={y} r="2.4">
                  <animate
                    attributeName="opacity"
                    values="0.35;1;0.35"
                    dur={`${2 + (i % 3) * 0.5}s`}
                    begin={`${d}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="r"
                    values="2;3.6;2"
                    dur={`${2 + (i % 3) * 0.5}s`}
                    begin={`${d}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </g>

            {/* Neural pathways */}
            <g stroke="var(--accent)" strokeWidth="0.9" opacity="0.42" fill="none">
              <line x1="140" y1="178" x2="200" y2="138" />
              <line x1="200" y1="138" x2="260" y2="178" />
              <line x1="108" y1="234" x2="200" y2="218" />
              <line x1="200" y1="218" x2="292" y2="234" />
              <line x1="148" y1="290" x2="200" y2="290" />
              <line x1="200" y1="290" x2="252" y2="290" />
              <line x1="165" y1="218" x2="200" y2="218" />
              <line x1="235" y1="218" x2="200" y2="218" />
              <line x1="175" y1="252" x2="225" y2="252" />
              <line x1="200" y1="218" x2="200" y2="290" />
            </g>

            {/* Brain stem */}
            <path
              d="M 184 342 C 184 364, 216 364, 216 342"
              stroke="url(#brain-grad)"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Concentric pulse rings */}
          <circle cx="200" cy="212" r="158" fill="none" stroke="var(--accent)" strokeWidth="0.6" opacity="0.3">
            <animate attributeName="r" values="158;182;158" dur="4.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.05;0.4;0.05" dur="4.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="212" r="178" fill="none" stroke="var(--accent)" strokeWidth="0.5" opacity="0.2">
            <animate attributeName="r" values="178;202;178" dur="5.5s" repeatCount="indefinite" begin="0.8s" />
            <animate attributeName="opacity" values="0.04;0.28;0.04" dur="5.5s" repeatCount="indefinite" begin="0.8s" />
          </circle>

          {/* Data streams flowing INTO the brain */}
          <g fill="var(--accent)" filter="url(#brain-glow)">
            <circle r="2.2">
              <animateMotion dur="3.6s" repeatCount="indefinite"
                path="M 30 200 Q 100 200, 140 178" />
              <animate attributeName="opacity" values="0;1;1;0" dur="3.6s" repeatCount="indefinite" />
            </circle>
            <circle r="2.2">
              <animateMotion dur="4s" repeatCount="indefinite" begin="1.2s"
                path="M 30 100 Q 100 130, 144 178" />
              <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" begin="1.2s" />
            </circle>
            <circle r="2.2">
              <animateMotion dur="3.8s" repeatCount="indefinite" begin="2.4s"
                path="M 30 320 Q 100 290, 148 290" />
              <animate attributeName="opacity" values="0;1;1;0" dur="3.8s" repeatCount="indefinite" begin="2.4s" />
            </circle>

            {/* Outgoing — intelligence emerging on the right */}
            <circle r="2.2">
              <animateMotion dur="3.6s" repeatCount="indefinite" begin="0.5s"
                path="M 260 178 Q 320 200, 380 200" />
              <animate attributeName="opacity" values="0;1;1;0" dur="3.6s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <circle r="2.2">
              <animateMotion dur="4s" repeatCount="indefinite" begin="1.8s"
                path="M 256 178 Q 320 130, 380 100" />
              <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" begin="1.8s" />
            </circle>
            <circle r="2.2">
              <animateMotion dur="3.8s" repeatCount="indefinite" begin="3s"
                path="M 252 290 Q 320 290, 380 320" />
              <animate attributeName="opacity" values="0;1;1;0" dur="3.8s" repeatCount="indefinite" begin="3s" />
            </circle>
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ---------- FLOATING DATA FRAGMENTS ---------- */

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
