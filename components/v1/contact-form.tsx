"use client";

import { useState } from "react";
import { Arrow, Check } from "./icons";

type Phase = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (phase === "sending") return;
    setPhase("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) { setError(json.error ?? "Something went wrong."); setPhase("error"); return; }
      setPhase("sent");
    } catch {
      setError("We couldn't reach the server. Please call (301) 889-8546 — it goes to a person.");
      setPhase("error");
    }
  }

  if (phase === "sent") {
    return (
      <div className="form-sent" role="status">
        <span className="form-sent-mark"><Check /></span>
        <h3>That&apos;s with us.</h3>
        <p>We read every one and reply within a business day. If it&apos;s urgent, call <a href="tel:+13018898546">(301) 889-8546</a>.</p>
      </div>
    );
  }

  return (
    <form className="v1-form" onSubmit={submit} noValidate>
      <p className="form-index">SEND A MESSAGE</p>
      <div className="form-row">
        <label><span className="field-label">Name <em aria-hidden="true">*</em></span>
          <input name="name" required autoComplete="name" />
        </label>
        <label><span className="field-label">Company</span>
          <input name="company" autoComplete="organization" />
        </label>
      </div>
      <div className="form-row">
        <label><span className="field-label">Email <em aria-hidden="true">*</em></span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label><span className="field-label">Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label><span className="field-label">What&apos;s slowing the business down? <em aria-hidden="true">*</em></span>
        <textarea name="message" rows={5} required
          placeholder="A sentence is plenty. Where does work get stuck between the field and the invoice?" />
      </label>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div className="hp" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      {phase === "error" && <p className="form-error" role="alert">{error}</p>}

      <button className="button" type="submit" disabled={phase === "sending"}>
        {phase === "sending" ? "Sending…" : "Send it"} <Arrow />
      </button>
      <small className="form-note">
        Or skip the form and call <a href="tel:+13018898546">(301) 889-8546</a>. It goes to a person, not a queue.
      </small>
    </form>
  );
}
