"use client";

import { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowUp, User, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "assistant"; content: string };

type Props = {
  slug: string;
  client: string;
  tag: string;
  starterQuestions: string[];
};

export function CaseStudyChat({ slug, client, tag, starterQuestions }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, streaming]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || streaming) return;
    setError(null);

    const next: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setStreaming(true);
    // Add an empty assistant message to stream into
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const res = await fetch("/api/case-chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ slug, messages: next }),
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
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
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
              return;
            }
            if (parsed.text) {
              setMessages((prev) => {
                const out = [...prev];
                const last = out[out.length - 1];
                if (last?.role === "assistant") {
                  out[out.length - 1] = { ...last, content: last.content + parsed.text };
                }
                return out;
              });
            }
          } catch {
            // ignore malformed chunks
          }
        }
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setStreaming(false);
    }
  }

  function reset() {
    abortRef.current?.abort();
    setMessages([]);
    setInput("");
    setError(null);
    setStreaming(false);
  }

  const hasConversation = messages.length > 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="scroll-mt-24"
      id="ask"
    >
      <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] mb-5">
        <span className="h-px w-4 bg-[var(--accent)]/50" />
        / Ask the case study
      </div>
      <h2 className="font-display text-3xl md:text-4xl leading-tight tracking-[-0.02em] text-foreground">
        Talk to this engagement.
      </h2>
      <p className="mt-4 text-[18px] leading-relaxed text-[var(--foreground-dim)] max-w-xl">
        An agent loaded with the full context of this case study. Ask how it would apply to your situation, why we built it this way, or what the pitfalls were. Live, streaming, scoped to this one engagement.
      </p>

      {/* Chat panel */}
      <div className="mt-10 rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 backdrop-blur-sm overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--surface-2)]/50">
          <div className="flex items-center gap-3">
            <div className="relative flex h-7 w-7 items-center justify-center rounded-md border border-[var(--accent)]/40 bg-[var(--background)] text-[var(--accent)]">
              <Sparkles size={13} strokeWidth={1.75} />
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-[var(--accent)]">
                <span className="pulse-dot absolute inset-0 rounded-full bg-[var(--accent)]" />
              </span>
            </div>
            <div>
              <div className="text-[14px] font-medium text-foreground leading-tight">
                {client}
              </div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--muted)] leading-tight mt-0.5">
                {tag} · haiku 4.5
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {hasConversation && (
              <button
                onClick={reset}
                className="flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                disabled={streaming}
              >
                <RotateCcw size={12} strokeWidth={1.75} />
                Reset
              </button>
            )}
            <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[var(--muted)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-[var(--accent)]" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]" />
              </span>
              live
            </div>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="p-5 md:p-6 min-h-[320px] max-h-[560px] overflow-y-auto"
        >
          {!hasConversation && (
            <div className="flex flex-col items-start gap-5">
              <p className="text-[15px] text-[var(--muted)] leading-relaxed">
                Agent loaded with context for <span className="text-foreground">{client}</span>. Ask a question or start with one of these:
              </p>
              <div className="flex flex-col gap-2 w-full">
                {starterQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="group text-left text-[15px] text-[var(--foreground-dim)] hover:text-[var(--accent)] border border-[var(--border)] hover:border-[var(--accent)]/40 rounded-lg px-4 py-3 transition-all"
                  >
                    <span className="font-mono text-[11px] text-[var(--muted-2)] group-hover:text-[var(--accent)] mr-3">
                      ›
                    </span>
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m, i) => (
            <MessageBubble
              key={i}
              message={m}
              streaming={streaming && i === messages.length - 1}
            />
          ))}

          {error && (
            <div className="mt-4 p-3 rounded-lg border border-[var(--danger)]/40 bg-[var(--danger)]/5 text-[14px] text-[var(--danger)]">
              {error}
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="border-t border-[var(--border)] p-4 bg-[var(--background)]/40"
        >
          <div className="flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              disabled={streaming}
              placeholder={
                streaming
                  ? "Agent is thinking..."
                  : hasConversation
                    ? "Ask a follow-up..."
                    : "Ask how this case study would apply to your situation..."
              }
              rows={1}
              className="flex-1 resize-none bg-transparent border-0 outline-none text-[15px] text-foreground placeholder:text-[var(--muted-2)] min-h-[36px] max-h-[160px] py-2"
              style={{
                // auto-grow effect managed by rows, simple enough
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || streaming}
              className={cn(
                "shrink-0 flex h-9 w-9 items-center justify-center rounded-md transition-all",
                input.trim() && !streaming
                  ? "bg-[var(--accent)] text-[var(--background)] hover:bg-[var(--foreground)]"
                  : "bg-[var(--border)] text-[var(--muted-2)]",
              )}
              aria-label="Send message"
            >
              <ArrowUp size={15} strokeWidth={2.5} />
            </button>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-[var(--muted-2)]">
            <span className="tracking-wider">
              Enter ↵ to send · Shift+Enter for new line
            </span>
            {hasConversation && (
              <Button href="/contact" size="sm" variant="ghost" arrow>
                Book a call
              </Button>
            )}
          </div>
        </form>
      </div>
    </motion.section>
  );
}

function MessageBubble({
  message,
  streaming,
}: {
  message: Message;
  streaming: boolean;
}) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex gap-3 mb-5", isUser && "flex-row-reverse")}>
      <div
        className={cn(
          "shrink-0 flex h-7 w-7 items-center justify-center rounded-md border",
          isUser
            ? "border-[var(--border-bright)] bg-[var(--surface-2)] text-[var(--foreground-dim)]"
            : "border-[var(--accent)]/40 bg-[var(--background)] text-[var(--accent)]",
        )}
      >
        {isUser ? (
          <User size={12} strokeWidth={1.75} />
        ) : (
          <Sparkles size={12} strokeWidth={1.75} />
        )}
      </div>
      <div
        className={cn(
          "max-w-[85%] rounded-xl px-4 py-2.5 text-[15px] leading-[1.65]",
          isUser
            ? "bg-[var(--surface-2)] text-foreground"
            : "bg-transparent text-[var(--foreground-dim)]",
        )}
      >
        {message.content && (
          <div className="whitespace-pre-wrap">
            {message.content}
            {streaming && <span className="cursor-blink" />}
          </div>
        )}
        {!message.content && streaming && (
          <div className="flex items-center gap-1 py-1">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse"
              style={{ animationDelay: "200ms" }}
            />
            <span
              className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse"
              style={{ animationDelay: "400ms" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
