"use client";

import { useState } from "react";
import { Arrow, Check } from "@/components/v1/icons";

type Phase = "idle" | "sending" | "sent" | "error";

// Two-step working-session request for builders and GCs. Submits to the
// existing /api/contact route: the structured answers are composed into its
// `message` field so no shared code changes. CAREFUL: that route treats a
// non-empty `website` field as its bot honeypot — the real website URL is
// therefore named `site` here, and `website` stays the hidden honeypot.
export function WorkflowSessionForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState("");

  function next(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    // Validate only step 1's fields before advancing.
    const step1 = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      '[data-step="1"] input, [data-step="1"] textarea'
    );
    for (const el of step1) {
      if (!el.reportValidity()) return;
    }
    setStep(2);
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (phase === "sending") return;
    // The form is noValidate; validate step 2's visible fields by hand.
    const step2 = e.currentTarget.querySelectorAll<HTMLInputElement>('[data-step="2"] input');
    for (const el of step2) {
      if (!el.reportValidity()) return;
    }
    setPhase("sending");
    setError("");
    const d = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const message = [
      "PROJECT WORKFLOW SESSION REQUEST — /builders-and-general-contractors",
      "",
      `Website:           ${d.site || "—"}`,
      `Active projects:   ${d.activeProjects || "—"}`,
      `Current systems:   ${d.systems || "—"}`,
      "",
      "Workflow creating the most delay or uncertainty:",
      d.workflow || "—",
      "",
      "What happens when it breaks:",
      d.breaks || "—",
    ].join("\n");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: d.name,
          email: d.email,
          phone: d.phone,
          company: d.company,
          website: d.website, // honeypot — empty for people
          message,
        }),
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
        <p>
          Thank you. We will contact you within <span className="ph">[ONE BUSINESS DAY]</span> to
          arrange the working session and confirm which project and team members to bring. If
          it&apos;s urgent, call <a href="tel:+13018898546">(301) 889-8546</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="v1-form" onSubmit={submit} noValidate>
      <p className="bgc-step">STEP {step} OF 2 — {step === 1 ? "THE WORKFLOW" : "SYSTEMS AND CONTACT"}</p>
      <p className="form-index">WHICH PROJECT WORKFLOW SHOULD WORK THE SAME WAY EVERY TIME?</p>

      <div data-step="1" style={step === 1 ? undefined : { display: "none" }}>
        <div className="form-row">
          <label><span className="field-label">Company name <em aria-hidden="true">*</em></span>
            <input name="company" required autoComplete="organization" />
          </label>
          <label><span className="field-label">Website</span>
            <input name="site" type="url" inputMode="url" placeholder="https://" autoComplete="url" />
          </label>
        </div>
        <label><span className="field-label">Active projects (optional)</span>
          <input name="activeProjects" inputMode="numeric" />
        </label>
        <label><span className="field-label">Which workflow is creating the most delay or uncertainty? <em aria-hidden="true">*</em></span>
          <textarea name="workflow" rows={2} required
            placeholder="Subcontractor readiness, change exposure, approval routing, pay-application backup…" />
        </label>
        <label><span className="field-label">What happens when it breaks? <em aria-hidden="true">*</em></span>
          <textarea name="breaks" rows={3} required
            placeholder="A delayed pay app, a change absorbed into the budget, a last-minute document chase…" />
        </label>
        <button className="button" type="button" onClick={next}>
          Continue <Arrow />
        </button>
      </div>

      <div data-step="2" style={step === 2 ? undefined : { display: "none" }}>
        <label><span className="field-label">Current project-management and accounting systems (optional)</span>
          <input name="systems" placeholder="Procore, spreadsheets, your accounting system…" />
        </label>
        <div className="form-row">
          <label><span className="field-label">Name <em aria-hidden="true">*</em></span>
            <input name="name" required={step === 2} autoComplete="name" />
          </label>
          <label><span className="field-label">Email <em aria-hidden="true">*</em></span>
            <input name="email" type="email" required={step === 2} autoComplete="email" />
          </label>
        </div>
        <label><span className="field-label">Phone <em aria-hidden="true">*</em></span>
          <input name="phone" type="tel" required={step === 2} autoComplete="tel" />
        </label>

        {phase === "error" && <p className="form-error" role="alert">{error}</p>}

        <button className="button" type="submit" disabled={phase === "sending"}>
          {phase === "sending" ? "Sending…" : "Map one project workflow"} <Arrow />
        </button>
      </div>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div className="hp" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <small className="form-note">
        Or skip the form and call <a href="tel:+13018898546">(301) 889-8546</a>. It goes to a
        person, not a queue.
      </small>
    </form>
  );
}
