"use client";

import { useState } from "react";
import { Arrow, Check } from "@/components/v1/icons";

type Phase = "idle" | "sending" | "sent" | "error";

const CHANNELS = ["Phone", "Text", "Email", "Website", "Other"] as const;

// Two-step Free Customer Service Audit request for /ai-customer-service.
// Submits to the existing /api/contact route: the structured answers are
// composed into its `message` field so no shared code changes. CAREFUL: that
// route treats a non-empty `website` field as its bot honeypot — the real
// website URL is therefore named `site` here, and `website` stays the hidden
// honeypot.
// The doc's optional "anonymized sample upload" is a paste field for now:
// /api/contact accepts JSON only, and the doc requires the upload
// receive/minimize/store/delete procedure to be defined before customer data
// is accepted. The privacy instruction sits beside the field as required.
export function CustomerServiceAuditForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState("");
  const [channelError, setChannelError] = useState(false);

  function next(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    // Validate only step 1's fields before advancing.
    const step1 = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      '[data-step="1"] input:not([type="checkbox"]), [data-step="1"] textarea'
    );
    for (const el of step1) {
      if (!el.reportValidity()) return;
    }
    // A checkbox group has no native `required`; at least one channel must be picked.
    const picked = form.querySelectorAll('input[name="channels"]:checked').length;
    if (!picked) { setChannelError(true); return; }
    setChannelError(false);
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
    const d = Object.fromEntries(fd.entries()) as Record<string, string>;
    const channels = fd.getAll("channels").join(", ");
    const message = [
      "FREE CUSTOMER SERVICE AUDIT REQUEST — /ai-customer-service",
      "",
      `Website:            ${d.site || "—"}`,
      `Request channels:   ${channels || "—"}`,
      `Requests per week:  ${d.weeklyVolume || "—"}`,
      "",
      "What questions come up repeatedly?",
      d.repeatedQuestions || "—",
      "",
      "Who answers them today?",
      d.whoAnswers || "—",
      "",
      "Anonymized sample of recent requests (optional):",
      d.sample || "—",
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
      <p className="acs-form-step">STEP {step} OF 2 &mdash; {step === 1 ? "THE QUESTIONS" : "CONTACT DETAILS"}</p>
      <p className="form-index">WHAT KEEPS PULLING YOUR TEAM AWAY FROM OTHER WORK?</p>

      <div data-step="1" style={step === 1 ? undefined : { display: "none" }}>
        <div className="form-row">
          <label><span className="field-label">Company name <em aria-hidden="true">*</em></span>
            <input name="company" required autoComplete="organization" />
          </label>
          <label><span className="field-label">Website <em aria-hidden="true">*</em></span>
            <input name="site" type="url" inputMode="url" required placeholder="https://" autoComplete="url" />
          </label>
        </div>
        <fieldset className="acs-channels">
          <legend>Where do customer requests arrive? <em aria-hidden="true">*</em></legend>
          <div>
            {CHANNELS.map((c) => (
              <label key={c}><input type="checkbox" name="channels" value={c} /><span>{c}</span></label>
            ))}
          </div>
          {channelError && <p className="form-error" role="alert">Please select at least one channel.</p>}
        </fieldset>
        <label><span className="field-label">What questions come up repeatedly? <em aria-hidden="true">*</em></span>
          <textarea name="repeatedQuestions" rows={3} required
            placeholder="Arrival times, appointment changes, invoice copies, job status&hellip;" />
        </label>
        <label><span className="field-label">Who answers them today? <em aria-hidden="true">*</em></span>
          <input name="whoAnswers" required placeholder="Office manager, dispatcher, whoever picks up&hellip;" />
        </label>
        <label><span className="field-label">Approximately how many requests arrive in a normal week? (optional)</span>
          <input name="weeklyVolume" inputMode="numeric" />
        </label>
        <label><span className="field-label">Paste a small, anonymized sample of recent requests (optional)</span>
          <textarea name="sample" rows={3} />
        </label>
        <p className="acs-privacy">
          Remove payment details, government identifiers, health information and anything else a
          customer would not expect you to share.
        </p>
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

        {phase === "error" && <p className="form-error" role="alert">{error}</p>}

        <button className="button" type="submit" disabled={phase === "sending"}>
          {phase === "sending" ? "Sending…" : "Get my free customer service audit"} <Arrow />
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
