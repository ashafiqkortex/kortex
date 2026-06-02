"use client";

import { useState, useRef, useEffect } from "react";
import * as motion from "motion/react-client";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, RotateCcw } from "lucide-react";

const EXAMPLES = [
  "My office manager spends half her day copying the same info into three different systems. There has to be a better way.",
  "We miss 20% of calls after hours. Those are jobs going to competitors.",
  "Quote follow-up is inconsistent. Some customers hear back in an hour, some never hear back at all.",
  "My techs spend 2 hours a day on paperwork instead of billable work. That's $20K per tech per year.",
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
    <section id="diagnostic" className="relative py-20 md:py-28 border-b border-[var(--border)]">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(193, 95, 60,0.05), transparent 70%)",
        }}
      />

      <Container size="default" className="relative">
        <SectionHeader
          align="center"
          eyebrow="Operational Diagnostic"
          title={
            <>
              Tell us where the business feels heavy.
              <br />
              <span className="italic text-[var(--accent)]">We&apos;ll map the operational bottlenecks behind it.</span>
            </>
          }
          description="We analyze where coordination, communication, and operational workflows are slowing the business down — then identify the systems layer that removes it."
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
            <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-[var(--accent)]" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]" />
              </span>
              {phase === "streaming" ? "streaming" : "ready"}
            </div>
          </div>

          <form onSubmit={submit} className="p-6 md:p-8">
            <label className="block text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] mb-3">
              What&apos;s eating your team&apos;s time?
            </label>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              disabled={phase === "streaming"}
              rows={3}
              placeholder="e.g. My sales team spends 10 hours a week building quotes. The data exists in our CRM and ERP, but pulling it together is manual and error-prone..."
              className="w-full resize-none bg-[var(--background)] border border-[var(--border)] rounded-lg p-4 text-[17px] text-foreground placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--accent)]/60 transition-colors"
            />

            {phase === "idle" && (
              <div className="mt-4 grid sm:grid-cols-2 gap-2.5">
                {EXAMPLES.map((ex) => (
                  <button
                    key={ex}
                    type="button"
                    onClick={() => setValue(ex)}
                    className="text-left text-[13px] leading-snug text-[var(--foreground-dim)] hover:text-[var(--accent)] bg-[var(--surface)] border border-[var(--border-bright)] hover:border-[var(--accent)]/50 rounded-lg px-4 py-3 transition-colors"
                  >
                    {ex}
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
                    Analyze Operational Bottlenecks
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
                <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--muted)]">
                  Output · diagnosis
                </div>
              </div>
              <div
                ref={outputRef}
                className="p-6 md:p-8 font-mono text-[14px] leading-[1.7] text-[var(--foreground-dim)] whitespace-pre-wrap max-h-[480px] overflow-y-auto"
              >
                {response}
                {phase === "streaming" && <span className="cursor-blink" />}
                {phase === "error" && (
                  <span className="text-[var(--danger)]">{error}</span>
                )}
              </div>
              {phase === "done" && (
                <div className="px-6 md:px-8 py-5 border-t border-[var(--border)] bg-[var(--surface)]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="text-[14px] text-[var(--muted)]">
                    Ready for the full diagnostic and a scoped proposal?
                  </div>
                  <Button href="/contact" size="sm" arrow>
                    Book a 20-minute call
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
