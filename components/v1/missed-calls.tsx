"use client";

import { useMemo, useState } from "react";
import { Arrow } from "./icons";

// Same rule as the rent-vs-own calculator: every assumption on this screen is
// the visitor's editable input. No industry statistic is baked in as fact —
// the web numbers on missed calls are unverified, so the defaults are neutral
// and every label says "your estimate".
const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function MissedCalls() {
  const [missed, setMissed] = useState(10);
  const [customers, setCustomers] = useState(6);
  const [gone, setGone] = useState(50);
  const [book, setBook] = useState(40);
  const [job, setJob] = useState(600);
  const [svcCost, setSvcCost] = useState("");

  const [email, setEmail] = useState("");
  const [sendState, setSendState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const r = useMemo(() => {
    const realCustomers = missed * Math.min(customers, 10) / 10;
    const lostCallers = realCustomers * (gone / 100);
    const lostJobsWeek = lostCallers * (book / 100);
    const weekly = lostJobsWeek * job;
    const annual = weekly * 52;
    const cost = Number(svcCost.replace(/[^0-9.]/g, "")) || 0;
    // jobs per month an answering layer must save to cover its own cost
    const breakeven = cost > 0 && job > 0 ? cost / job : 0;
    return { lostJobsWeek, weekly, annual, cost, breakeven };
  }, [missed, customers, gone, book, job, svcCost]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (sendState === "sending") return;
    setSendState("sending");
    const lines = [
      "Missed-call calculation from the website:",
      `Missed calls/week: ${missed}, of each 10 about ${customers} are customers`,
      `Caller-doesn't-come-back estimate: ${gone}%, booking rate estimate: ${book}%`,
      `Average job value: ${money(job)}`,
      `Estimated work lost: ${money(r.weekly)}/week, ${money(r.annual)}/year`,
      r.cost ? `Compared against an answering cost of ${money(r.cost)}/month (breakeven ${r.breakeven.toFixed(1)} jobs/month)` : "No answering cost entered",
    ];
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Missed-call calculator", email, message: lines.join("\n") }),
      });
      setSendState(res.ok ? "sent" : "error");
    } catch {
      setSendState("error");
    }
  }

  const num = (v: string, set: (n: number) => void, max = Infinity) => {
    const n = Number(v.replace(/[^0-9.]/g, ""));
    set(Number.isFinite(n) ? Math.max(0, Math.min(max, n)) : 0);
  };

  return (
    <div className="rvo">
      <div className="rvo-inputs">
        <p className="rvo-label">YOUR NUMBERS — EVERY ONE IS YOUR ESTIMATE, CHANGE ANY OF THEM</p>
        <div className="rvo-grid">
          <label>Calls that ring out or hit voicemail in a typical week
            <input inputMode="numeric" value={missed} onChange={(e) => num(e.target.value, setMissed)} />
          </label>
          <label>Out of every 10 of those, how many are customers (not vendors or spam)
            <input inputMode="numeric" value={customers} onChange={(e) => num(e.target.value, setCustomers, 10)} />
          </label>
          <label>Of the customers you miss, how many never come back (%)
            <input inputMode="numeric" value={gone} onChange={(e) => num(e.target.value, setGone, 100)} />
          </label>
          <label>When you do answer, how often a call becomes a job (%)
            <input inputMode="numeric" value={book} onChange={(e) => num(e.target.value, setBook, 100)} />
          </label>
          <label>Average value of a job ($)
            <input inputMode="numeric" value={job} onChange={(e) => num(e.target.value, setJob)} />
          </label>
        </div>
      </div>

      <div className="rvo-result">
        <p className="rvo-label">WORK THAT NEVER CALLED BACK, AT YOUR ESTIMATES</p>
        <div className="rvo-total" aria-live="polite">
          <strong>{money(r.annual)}</strong>
          <span>a year · {money(r.weekly)} a week · about {r.lostJobsWeek.toFixed(1)} jobs a week</span>
        </div>
        <p className="rvo-note">
          This is arithmetic on your own estimates, not a market statistic. If a number above
          feels wrong, change it — the point is to see what the phone is worth at figures you
          believe, before anyone tries to sell you an answer to it.
        </p>

        <div className="rvo-compare">
          <label>Compare against what an answering layer would cost you per month — any vendor&apos;s quote
            <input inputMode="numeric" placeholder="e.g. 300" value={svcCost}
              onChange={(e) => setSvcCost(e.target.value)} />
          </label>
          {r.cost > 0 && (
            <p className="rvo-crossover" aria-live="polite">
              At {money(job)} a job, that cost is covered by <strong>{r.breakeven.toFixed(1)} saved
              {r.breakeven === 1 ? " job" : " jobs"} a month</strong>. You estimated you&apos;re losing
              about {(r.lostJobsWeek * 4.33).toFixed(1)} a month — {r.lostJobsWeek * 4.33 > r.breakeven
                ? "so at your own numbers, the phone problem costs more than fixing it."
                : "so at your own numbers, it doesn't pay for itself yet. That's worth knowing before you buy anything — including from us."}
            </p>
          )}
        </div>

        {sendState === "sent" ? (
          <p className="rvo-sent">Sent. It goes to a person, and we reply within a business day.</p>
        ) : (
          <form className="rvo-send" onSubmit={send}>
            <label>Want this breakdown, plus a free review of where your calls are actually going?
              <input type="email" required placeholder="you@company.com" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </label>
            <button className="button" type="submit" disabled={sendState === "sending"}>
              {sendState === "sending" ? "Sending…" : "Email me the breakdown"} <Arrow />
            </button>
            {sendState === "error" && (
              <p className="rvo-error" role="alert">
                That did not send. Call (301) 889-8546 instead — it goes to a person.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
