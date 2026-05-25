"use client";

import { useState, useRef, useEffect } from "react";
import * as motion from "motion/react-client";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, RotateCcw } from "lucide-react";

const EXAMPLES = [
  "I run a 40-person consulting firm. We spend hours every week answering the same client questions. Could AI handle most of this?",
  "I'm the CEO of a hotel group. I want to use AI to upsell guests and reduce front-desk workload, but I don't know where to start.",
  "We're a mid-sized manufacturer. Our customer support team is buried under email — I'd like an AI agent that drafts replies, on our own data.",
  "We tried ChatGPT for our sales team. It didn't really know our products. What would 'AI on our actual data' look like?",
];

type Phase = "idle" | "streaming" | "done" | "error";

export function Diagnostic() {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (outputRef.current && phase === "streaming") {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [response, phase]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (value.trim().length < 10 || phase === "streaming") return;

    setResponse("");
    setError(null);
    setPhase("streaming");

    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const res = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ bottleneck: value }),
        signal: ctrl.signal,
      });

      if (!res.ok) {
        const { error: errMsg } = await res.json().catch(() => ({ error: "Request failed" }));
        throw new Error(errMsg || "Request failed");
      }

      if (!res.body) throw new Error("No response stream");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value: chunk } = await reader.read();
        if (done) break;
        buffer += decoder.decode(chunk, { stream: true });

        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6);
          if (data === "[DONE]") continue;
          try {
            const parsed = JSON.parse(data);
            if (parsed.error) {
              setError(parsed.error);
              setPhase("error");
              return;
            }
            if (parsed.text) {
              setResponse((prev) => prev + parsed.text);
            }
          } catch {
            // ignore
          }
        }
      }
      setPhase("done");
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      setError(err instanceof Error ? err.message : "Something went wrong");
      setPhase("error");
    }
  }

  function reset() {
    abortRef.current?.abort();
    setValue("");
    setResponse("");
    setPhase("idle");
    setError(null);
  }

  return (
    <section id="diagnostic" className="relative py-28 md:py-36 border-b border-[var(--border)]">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(94,234,212,0.05), transparent 70%)",
        }}
      />

      <Container size="default" className="relative">
        <SectionHeader
          align="center"
          eyebrow="AI Diagnostic · Live"
          title={
            <>
              Not sure where to start?
              <br />
              <span className="italic text-[var(--accent)]">Describe it in plain English.</span>
            </>
          }
          description="Tell us what you'd like AI to do for your business — even loosely. Our AI reads it back, frames the real opportunity, and sketches a first step. This is the warmup for the 30-minute call."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 backdrop-blur-sm overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-[var(--surface-2)]/50">
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-[var(--accent)]" strokeWidth={1.5} />
              <div className="font-mono text-[12px] uppercase tracking-widest text-[var(--foreground-dim)]">
                kortex.diagnostic
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[var(--muted)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-[var(--accent)]" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]" />
              </span>
              {phase === "streaming" ? "streaming" : "ready"}
            </div>
          </div>

          <form onSubmit={submit} className="p-6 md:p-8">
            <label className="block text-[11px] font-mono uppercase tracking-widest text-[var(--muted)] mb-3">
              What would you like AI to do for your business?
            </label>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              disabled={phase === "streaming"}
              rows={3}
              placeholder="e.g. We're a hotel group and I'd like to use AI to upsell guests and reduce front-desk workload, but I'm not sure where to start..."
              className="w-full resize-none bg-[var(--background)] border border-[var(--border)] rounded-lg p-4 text-[15px] text-foreground placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--accent)]/60 transition-colors"
            />

            {phase === "idle" && (
              <div className="mt-4 flex flex-wrap gap-2">
                {EXAMPLES.map((ex) => (
                  <button
                    key={ex}
                    type="button"
                    onClick={() => setValue(ex)}
                    className="text-[12px] text-[var(--muted)] hover:text-[var(--accent)] border border-[var(--border)] hover:border-[var(--accent)]/40 rounded-full px-3 py-1.5 transition-colors"
                  >
                    {ex.split(" ").slice(0, 6).join(" ")}...
                  </button>
                ))}
              </div>
            )}

            <div className="mt-6 flex items-center gap-3">
              <Button
                type="submit"
                size="md"
                disabled={value.trim().length < 10 || phase === "streaming"}
              >
                {phase === "streaming" ? (
                  <>
                    <span className="font-mono text-[11px] tracking-widest">ANALYZING</span>
                    <span className="cursor-blink" />
                  </>
                ) : (
                  <>
                    Run diagnostic
                    <ArrowRight size={15} strokeWidth={2} />
                  </>
                )}
              </Button>
              {(phase === "done" || phase === "error") && (
                <Button variant="ghost" size="md" onClick={reset}>
                  <RotateCcw size={14} strokeWidth={1.75} />
                  Reset
                </Button>
              )}
              <div className="ml-auto text-[11px] font-mono text-[var(--muted-2)] tracking-wider">
                {value.length}/600
              </div>
            </div>
          </form>

          {/* Output */}
          {(phase === "streaming" || phase === "done" || phase === "error") && (
            <div className="border-t border-[var(--border)] bg-[var(--background)]/60">
              <div className="px-6 md:px-8 py-4 border-b border-[var(--border)]">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--muted)]">
                  Output · diagnosis
                </div>
              </div>
              <div
                ref={outputRef}
                className="p-6 md:p-8 font-mono text-[13.5px] leading-[1.8] text-[var(--foreground-dim)] whitespace-pre-wrap max-h-[480px] overflow-y-auto"
              >
                {response}
                {phase === "streaming" && <span className="cursor-blink" />}
                {phase === "error" && (
                  <span className="text-[var(--danger)]">{error}</span>
                )}
              </div>
              {phase === "done" && (
                <div className="px-6 md:px-8 py-5 border-t border-[var(--border)] bg-[var(--surface)]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="text-[13px] text-[var(--muted)]">
                    Ready for the full diagnostic and a scoped proposal?
                  </div>
                  <Button href="/contact" size="sm" arrow>
                    Book a 20-min call
                  </Button>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
