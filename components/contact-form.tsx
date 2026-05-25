"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type Phase = "idle" | "submitting" | "sent";

export function ContactForm() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (phase !== "idle") return;
    setPhase("submitting");
    // Stub — wire to API/email later
    await new Promise((r) => setTimeout(r, 800));
    setPhase("sent");
  }

  if (phase === "sent") {
    return (
      <div className="rounded-xl border border-[var(--accent)]/40 bg-[var(--surface)]/60 p-10 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/40 text-[var(--accent)]">
          <Check size={22} strokeWidth={1.5} />
        </div>
        <h3 className="mt-5 font-display text-2xl md:text-[28px] leading-tight text-foreground">
          Message received.
        </h3>
        <p className="mt-3 text-[15px] text-[var(--foreground-dim)] max-w-md mx-auto">
          We&apos;ll be in touch within one business day. If it&apos;s urgent, you can book a call directly above.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-6 md:p-8 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field
          label="Name"
          value={form.name}
          onChange={(v) => update("name", v)}
          required
        />
        <Field
          label="Company"
          value={form.company}
          onChange={(v) => update("company", v)}
        />
      </div>
      <Field
        label="Email"
        type="email"
        value={form.email}
        onChange={(v) => update("email", v)}
        required
      />
      <Field
        label="Where's your operational truth breaking down?"
        value={form.message}
        onChange={(v) => update("message", v)}
        multiline
        required
      />

      <div className="flex items-center justify-between pt-2">
        <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--muted-2)]">
          Response within 1 business day
        </div>
        <Button
          type="submit"
          size="md"
          arrow
          disabled={phase === "submitting" || !form.name || !form.email || !form.message}
        >
          {phase === "submitting" ? "Sending..." : "Send"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  type = "text",
  multiline = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  multiline?: boolean;
}) {
  return (
    <label className="block">
      <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--muted)] mb-2">
        {label}
        {required && <span className="text-[var(--accent)] ml-1">*</span>}
      </div>
      {multiline ? (
        <textarea
          rows={4}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full resize-none bg-[var(--background)] border border-[var(--border)] rounded-lg p-3.5 text-[15px] text-foreground placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--accent)]/60 transition-colors"
        />
      ) : (
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg px-3.5 h-11 text-[15px] text-foreground placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--accent)]/60 transition-colors"
        />
      )}
    </label>
  );
}
