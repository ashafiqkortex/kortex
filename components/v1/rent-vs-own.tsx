"use client";

import { useMemo, useState } from "react";
import { Arrow } from "./icons";

// Every number on screen is computed from the visitor's own inputs. Nothing is
// prefilled with a competitor's price and no Kortex price appears anywhere —
// the calculator produces HIS rent number; comparing it against a build cost
// is his optional input, not our claim.
const YEARS = 5;

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function RentVsOwn() {
  const [seats, setSeats] = useState(12);
  const [perSeat, setPerSeat] = useState(150);
  const [flat, setFlat] = useState(0);
  const [onboarding, setOnboarding] = useState(5000);
  const [increase, setIncrease] = useState(5);
  const [growth, setGrowth] = useState(3);
  const [buildCost, setBuildCost] = useState("");

  const [email, setEmail] = useState("");
  const [sendState, setSendState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const r = useMemo(() => {
    const years: { rent: number; seats: number }[] = [];
    let price = perSeat;
    let total = onboarding;
    for (let y = 0; y < YEARS; y++) {
      const s = seats + (y > 0 ? growth * y : 0);
      const rent = s * price * 12 + flat * 12;
      years.push({ rent, seats: s });
      total += rent;
      price = price * (1 + increase / 100);
    }
    const build = Number(buildCost.replace(/[^0-9.]/g, "")) || 0;
    const crossoverYear = build
      ? years.reduce<{ y: number; acc: number } | null>((found, yr, i) => {
          if (found) return found;
          const acc = years.slice(0, i + 1).reduce((a, b) => a + b.rent, onboarding);
          return acc >= build ? { y: i + 1, acc } : null;
        }, null)
      : null;
    return { years, total, build, crossoverYear };
  }, [seats, perSeat, flat, onboarding, increase, growth, buildCost]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (sendState === "sending") return;
    setSendState("sending");
    const lines = [
      `Rent vs own calculation from the website:`,
      `Field users: ${seats}, growing by ${growth}/yr`,
      `Per-seat: ${money(perSeat)}/mo, flat fees ${money(flat)}/mo, onboarding ${money(onboarding)}`,
      `Assumed annual price increase: ${increase}%`,
      `Five-year rent total: ${money(r.total)}`,
      r.build ? `Compared against a one-time build of ${money(r.build)}` : `No build figure entered`,
    ];
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Rent vs own calculator", email, message: lines.join("\n") }),
      });
      setSendState(res.ok ? "sent" : "error");
    } catch {
      setSendState("error");
    }
  }

  const num = (v: string, set: (n: number) => void, min = 0) => {
    const n = Number(v.replace(/[^0-9.]/g, ""));
    set(Number.isFinite(n) ? Math.max(min, n) : min);
  };

  return (
    <div className="rvo">
      <div className="rvo-inputs">
        <p className="rvo-label">YOUR NUMBERS — CHANGE ANY OF THEM</p>
        <div className="rvo-grid">
          <label>Field users on the software
            <input inputMode="numeric" value={seats} onChange={(e) => num(e.target.value, setSeats)} />
          </label>
          <label>Price per user, per month
            <input inputMode="numeric" value={perSeat} onChange={(e) => num(e.target.value, setPerSeat)} />
          </label>
          <label>Flat monthly fees (add-ons, support)
            <input inputMode="numeric" value={flat} onChange={(e) => num(e.target.value, setFlat)} />
          </label>
          <label>One-time onboarding you paid
            <input inputMode="numeric" value={onboarding} onChange={(e) => num(e.target.value, setOnboarding)} />
          </label>
          <label>Annual price increase, your estimate (%)
            <input inputMode="numeric" value={increase} onChange={(e) => num(e.target.value, setIncrease)} />
          </label>
          <label>Users you add per year as you grow
            <input inputMode="numeric" value={growth} onChange={(e) => num(e.target.value, setGrowth)} />
          </label>
        </div>
      </div>

      <div className="rvo-result">
        <p className="rvo-label">WHAT RENTING COSTS YOU OVER FIVE YEARS</p>
        <div className="rvo-total" aria-live="polite">
          <strong>{money(r.total)}</strong>
          <span>five-year total at your numbers, onboarding included</span>
        </div>
        <div className="rvo-years">
          {r.years.map((y, i) => {
            const max = Math.max(...r.years.map((x) => x.rent));
            return (
              <div className="rvo-year" key={i}>
                <span className="rvo-year-n">YR {i + 1}</span>
                <div className="rvo-bar"><i style={{ width: `${Math.max(6, (y.rent / max) * 100)}%` }} /></div>
                <span className="rvo-year-v">{money(y.rent)}<em>{y.seats} users</em></span>
              </div>
            );
          })}
        </div>
        <p className="rvo-note">
          The bill climbs twice at once — the price per seat goes up, and so does the number of
          seats, because you hired. That is the arithmetic of renting: growing the field grows
          the software bill.
        </p>

        <div className="rvo-compare">
          <label>Compare against a one-time build cost — your figure, if you have a quote
            <input inputMode="numeric" placeholder="e.g. 80,000" value={buildCost}
              onChange={(e) => setBuildCost(e.target.value)} />
          </label>
          {r.build > 0 && (
            <p className="rvo-crossover" aria-live="polite">
              {r.crossoverYear
                ? <>At your numbers, renting passes {money(r.build)} during <strong>year {r.crossoverYear.y}</strong>. Everything after that is money a system you owned would not have cost.</>
                : <>At your numbers, five years of renting ({money(r.total)}) stays under {money(r.build)}. At this size, renting is the cheaper path — and we would tell you the same on a call.</>}
            </p>
          )}
        </div>

        {sendState === "sent" ? (
          <p className="rvo-sent">Sent. It goes to a person, and we reply within a business day.</p>
        ) : (
          <form className="rvo-send" onSubmit={send}>
            <label>Want this breakdown and what a scoped build would look like against it?
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
