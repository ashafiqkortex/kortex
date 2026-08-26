"use client";

import { useState } from "react";
import { Arrow, Check } from "@/components/v1/icons";

type Phase = "idle" | "sending" | "sent" | "error";

const OPPORTUNITY_TYPES = ["Inquiries", "Estimates", "Proposals", "Service agreements", "Other"];

// Two-step Free Follow-Up Audit request for /ai-sdr. Submits to the existing
// /api/contact route: the structured answers are composed into its `message`
// field so no shared code changes. CAREFUL: that route treats a non-empty
// `website` field as its bot honeypot — the real website URL is therefore
// named `site` here, and `website` stays the hidden honeypot.
//
// The doc's optional anonymized-list upload is shown as an instruction only,
// with no file control: /api/contact accepts JSON (no attachments), and the
// doc's "Decisions required before publishing" still lists upload,
// data-minimization, storage and deletion procedures as unapproved. Wire a
// real upload only once those procedures exist.
export function FollowUpAuditForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState("");
  const [oppError, setOppError] = useState(false);

  function next(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    // At least one opportunity type must be chosen.
    const chosen = form.querySelectorAll('input[name="opportunities"]:checked').length > 0;
    setOppError(!chosen);
    if (!chosen) return;
    // Validate only step 1's remaining fields before advancing.
    const step1 = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      '[data-step="1"] input:not([type="checkbox"]), [data-step="1"] textarea'
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
    const fd = new FormData(e.currentTarget);
    const opportunities = fd.getAll("opportunities").join(", ");
    const d = Object.fromEntries(fd.entries()) as Record<string, string>;
    const message = [
      "FREE FOLLOW-UP AUDIT REQUEST — /ai-sdr",
      "",
      `Website:                       ${d.site || "—"}`,
      `Opportunities needing follow-up: ${opportunities || "—"}`,
      `Approx. open opportunities:    ${d.count || "—"}`,
      "",
      "What usually happens after the first conversation or estimate?",
      d.afterwards || "—",
      "",
      "Who is responsible for following up today?",
      d.owner || "—",
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
          arrange the audit and explain what sample, if any, would be useful. If it&apos;s urgent,
          call <a href="tel:+13018898546">(301) 889-8546</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="v1-form" onSubmit={submit} noValidate>
      <p className="sdr-form-step">STEP {step} OF 2 &mdash; {step === 1 ? "THE FOLLOW-UP" : "CONTACT"}</p>
      <p className="form-index">WHERE DOES FOLLOW-UP USUALLY STOP?</p>

      <div data-step="1" style={step === 1 ? undefined : { display: "none" }}>
        <div className="form-row">
          <label><span className="field-label">Company name <em aria-hidden="true">*</em></span>
            <input name="company" required autoComplete="organization" />
          </label>
          <label><span className="field-label">Website</span>
            <input name="site" type="url" inputMode="url" placeholder="https://" autoComplete="url" />
          </label>
        </div>
        <fieldset className="sdr-opps">
          <legend className="field-label">Which opportunities need follow-up? <em aria-hidden="true">*</em></legend>
          <div>
            {OPPORTUNITY_TYPES.map((o) => (
              <label key={o} className="sdr-opp">
                <input type="checkbox" name="opportunities" value={o} onChange={() => setOppError(false)} />
                <span>{o}</span>
              </label>
            ))}
          </div>
          {oppError && <p className="form-error" role="alert">Please choose at least one.</p>}
        </fieldset>
        <label><span className="field-label">What usually happens after the first conversation or estimate? <em aria-hidden="true">*</em></span>
          <textarea name="afterwards" rows={3} required
            placeholder="The estimate goes out, then&hellip;" />
        </label>
        <label><span className="field-label">Who is responsible for following up today? <em aria-hidden="true">*</em></span>
          <textarea name="owner" rows={2} required
            placeholder="The estimator, the office, whoever remembers&hellip;" />
        </label>
        <label><span className="field-label">Approximately how many opportunities are currently open? (optional)</span>
          <input name="count" inputMode="numeric" />
        </label>
        <button className="button" type="button" onClick={next}>
          Continue <Arrow />
        </button>
      </div>

      <div data-step="2" style={step === 2 ? undefined : { display: "none" }}>
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

        {/* Optional upload — instruction only until the upload, storage and
            deletion procedures are approved. Privacy line stays beside it. */}
        <div className="sdr-upload">
          <span className="field-label">Optional upload</span>
          <p>
            Upload an anonymized list of open opportunities. Remove personal, payment,
            government-identification and other sensitive information before sharing.
          </p>
        </div>

        {phase === "error" && <p className="form-error" role="alert">{error}</p>}

        <button className="button" type="submit" disabled={phase === "sending"}>
          {phase === "sending" ? "Sending…" : "Get my free follow-up audit"} <Arrow />
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
