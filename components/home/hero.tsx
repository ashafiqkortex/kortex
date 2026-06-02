"use client";

import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const LINES: Array<{ text: string; tone: "meta" | "cmd" | "out" | "accent" }> = [
  { text: "kortex://diagnostic.init", tone: "meta" },
  { text: "› ingest(operational_surface)", tone: "cmd" },
  { text: "reading: tools, dashboards, reports...", tone: "out" },
  { text: "reading: actual behavior, telemetry, edges...", tone: "out" },
  { text: "› detect(truth_gap)", tone: "cmd" },
  { text: "3 gaps located in reporting layer", tone: "out" },
  { text: "› recommend(intervention)", tone: "cmd" },
  { text: "replace ticket layer with ground-truth system", tone: "accent" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28 border-b border-[var(--border)]">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(193, 95, 60,0.08), transparent 70%)",
        }}
      />

      <Container size="wide" className="relative">
        <div className="grid gap-14 md:gap-20 lg:grid-cols-[1.1fr_1fr] items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-bright)] bg-[var(--surface)]/60 backdrop-blur text-[12px] font-mono uppercase tracking-widest text-[var(--foreground-dim)]"
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
            >
              We build the{" "}
              <span className="italic text-[var(--accent)]">truth layer</span>
              <br />
              under your operations.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 max-w-xl text-[19px] md:text-[20px] leading-relaxed text-[var(--foreground-dim)]"
            >
              AI, automation, and integration engineering for companies that have outgrown the dashboard. Your tools tell you what was typed. We build the systems that know what&apos;s actually happening — and act on it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-col sm:flex-row gap-3"
            >
              <Button href="/contact" size="lg" arrow>
                Book a discovery call
              </Button>
              <Button href="#diagnostic" size="lg" variant="secondary">
                Diagnose your bottleneck
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { n: "5", l: "Service disciplines" },
                { n: "100%", l: "Built from the metal" },
                { n: "∞", l: "Governed in real time" },
              ].map((m) => (
                <div key={m.l}>
                  <div className="font-display text-3xl text-foreground">{m.n}</div>
                  <div className="mt-1 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)]">
                    {m.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: terminal */}
          <HeroTerminal />
        </div>
      </Container>
    </section>
  );
}

function HeroTerminal() {
  const [typed, setTyped] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      // Restart loop after pause
      const restart = setTimeout(() => {
        setTyped([]);
        setLineIndex(0);
        setCharIndex(0);
        setCurrentLine("");
      }, 4200);
      return () => clearTimeout(restart);
    }

    const target = LINES[lineIndex].text;

    if (charIndex < target.length) {
      const t = setTimeout(() => {
        setCurrentLine(target.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 18 + Math.random() * 22);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setTyped((prev) => [...prev, target]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex((i) => i + 1);
      }, 240);
      return () => clearTimeout(t);
    }
  }, [lineIndex, charIndex]);

  const toneClass = (tone: (typeof LINES)[number]["tone"]) => {
    switch (tone) {
      case "meta":
        return "text-[var(--muted-2)]";
      case "cmd":
        return "text-[var(--foreground-dim)]";
      case "out":
        return "text-[var(--muted)]";
      case "accent":
        return "text-[var(--accent)]";
    }
  };

  const currentTone = lineIndex < LINES.length ? LINES[lineIndex].tone : "out";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* Decorative rotating ring */}
      <div className="pointer-events-none absolute -inset-8 -z-0">
        <div
          className="spin-slow absolute inset-0 rounded-full opacity-30"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, var(--accent) 30deg, transparent 120deg, transparent 360deg)",
            mask: "radial-gradient(circle, transparent 62%, black 63%, black 64%, transparent 65%)",
            WebkitMask:
              "radial-gradient(circle, transparent 62%, black 63%, black 64%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative rounded-xl border border-[var(--border-bright)] bg-[var(--surface)]/80 backdrop-blur-sm overflow-hidden shadow-[0_20px_80px_-20px_rgba(193, 95, 60,0.15)]">
        {/* Terminal chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--border)] bg-[var(--surface-2)]/50">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--border-bright)]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--border-bright)]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--border-bright)]" />
          </div>
          <div className="ml-3 text-[11px] font-mono text-[var(--muted)] tracking-wider">
            kortex — truth_layer.diagnostic
          </div>
          <div className="ml-auto flex items-center gap-1.5 text-[11px] font-mono uppercase text-[var(--muted)] tracking-widest">
            <span className="relative flex h-1.5 w-1.5">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-[var(--accent)]" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]" />
            </span>
            live
          </div>
        </div>

        {/* Terminal body */}
        <div className="p-5 font-mono text-[14px] leading-[1.8] min-h-[320px]">
          {typed.map((line, i) => {
            const tone = LINES[i]?.tone ?? "out";
            return (
              <div key={i} className={toneClass(tone)}>
                {line}
              </div>
            );
          })}
          {lineIndex < LINES.length && (
            <div className={toneClass(currentTone)}>
              {currentLine}
              <span className="cursor-blink" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
