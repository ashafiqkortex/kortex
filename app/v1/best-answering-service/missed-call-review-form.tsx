"use client";

import { useState } from "react";
import { Arrow, Check } from "@/components/v1/icons";

type Phase = "idle" | "sending" | "sent" | "error";

// Two-step Missed-Call Review request. Submits to the existing /api/contact
// route: the structured answers are composed into its `message` field so no
// shared code changes. CAREFUL: that route treats a non-empty `website` field
// as its bot honeypot — the real website URL is therefore named `site` here,
// and `website` stays the hidden honeypot.
export function MissedCallReviewForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState("");

  function next(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    // Validate only step 1's fields before advancing.
    const step1 = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
      '[data-step="1"] input, [data-step="1"] textarea, [data-step="1"] select'
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
      "MISSED-CALL REVIEW REQUEST — /best-answering-service",
      "",
      `Website:                 ${d.site || "—"}`,
      `Contractor type:         ${d.contractorType || "—"}`,
      `When calls are missed:   ${d.whenMissed || "—"}`,
      `Current answering svc:   ${d.currentService || "—"}`,
      "",
      "What should happen on a successful call:",
      d.successCall || "—",
      "",
      `Approx. calls per week:  ${d.callsPerWeek || "—"}`,
      `Avg. booked-job value:   ${d.jobValue || "—"}`,
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
          arrange the Missed-Call Review and confirm what information to bring. If it&apos;s
          urgent, call <a href="tel:+13018898546">(301) 889-8546</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="v1-form" onSubmit={submit} noValidate>
      <p className="bas-step">STEP {step} OF 2 — {step === 1 ? "CALLS AND COVERAGE" : "NUMBERS AND CONTACT"}</p>
      <p className="form-index">WHERE ARE CALLS BEING MISSED?</p>

      <div data-step="1" style={step === 1 ? undefined : { display: "none" }}>
        <div className="form-row">
          <label><span className="field-label">Company name <em aria-hidden="true">*</em></span>
            <input name="company" required autoComplete="organization" />
          </label>
          <label><span className="field-label">Website</span>
            <input name="site" type="url" inputMode="url" placeholder="https://" autoComplete="url" />
          </label>
        </div>
        <label><span className="field-label">Type of contractor <em aria-hidden="true">*</em></span>
          <input name="contractorType" required placeholder="HVAC, electrical, plumbing, GC, other trade…" />
        </label>
        <label><span className="field-label">When are calls usually missed? <em aria-hidden="true">*</em></span>
          <select name="whenMissed" required defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Office hours</option>
            <option>After hours</option>
            <option>Weekends</option>
            <option>Call spikes</option>
            <option>Not sure</option>
          </select>
        </label>
        <label><span className="field-label">What should happen on a successful call? <em aria-hidden="true">*</em></span>
          <textarea name="successCall" rows={3} required
            placeholder="Booked appointment, qualified message, transfer to on-call tech…" />
        </label>
        <label><span className="field-label">Current answering service (optional)</span>
          <input name="currentService" placeholder="Voicemail, office staff, a live service, an AI service…" />
        </label>
        <button className="button" type="button" onClick={next}>
          Continue <Arrow />
        </button>
      </div>

      <div data-step="2" style={step === 2 ? undefined : { display: "none" }}>
        <div className="form-row">
          <label><span className="field-label">Approximate calls per week (optional)</span>
            <input name="callsPerWeek" inputMode="numeric" />
          </label>
          <label><span className="field-label">Average value of a booked job (optional)</span>
            <input name="jobValue" inputMode="numeric" />
          </label>
        </div>
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
          {phase === "sending" ? "Sending…" : "Get my free Missed-Call Review"} <Arrow />
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
