import type { Metadata } from "next";
import Link from "next/link";
import { RentVsOwn } from "@/components/v1/rent-vs-own";
import { Arrow } from "@/components/v1/icons";
import { v1 } from "@/components/v1/paths";
import "../tools.css";

export const metadata: Metadata = {
  title: "Rent vs Own Calculator — What Per-Seat Software Really Costs | Kortex",
  description:
    "Put your own numbers in — users, per-seat price, the annual increase — and see what renting field service software costs over five years against owning a system outright.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://kortexconsulting.com/tools/rent-vs-own" },
};

const FACTS = [
  ["The bill scales with headcount", "Per-seat pricing means hiring a technician raises your software cost. A system you own doesn't charge you for growing."],
  ["The price rises without asking", "Annual increases are standard in SaaS contracts. The calculator lets you set your own estimate — even a modest one compounds."],
  ["The exit is never free", "Your job history, customers and records live inside the subscription. Leaving means migrating; staying means paying. That is the position the pricing depends on."],
];

export default function RentVsOwnPage() {
  return (
    <>
      <section className="tools-hero">
        <div className="grid-overlay" />
        <p className="eyebrow"><span /> FREE — NO SIGNUP, YOUR NUMBERS STAY IN YOUR BROWSER</p>
        <h1>What does renting your software actually cost?</h1>
        <p className="tools-lede">
          Five inputs, all yours — how many people are on it, what a seat costs, what the price
          does every year. The calculator shows the five-year number nobody puts on a pricing
          page, and what happens to it as you hire.
        </p>
      </section>

      <section className="tools-body section-pad">
        <RentVsOwn />
      </section>

      <section className="tools-facts section-pad">
        <div className="split-heading">
          <div>
            <p className="section-index">WHY THE NUMBER SURPRISES PEOPLE</p>
            <h2>Renting is priced to look small.</h2>
          </div>
          <p>
            None of this makes subscription software a bad product. Plenty of companies are
            better off renting, and the calculator will tell you when that&apos;s you. The point
            is to make the real number visible before you compare it to anything.
          </p>
        </div>
        <div className="tools-fact-grid">
          {FACTS.map(([t, c], i) => (
            <article key={t}><span>0{i + 1}</span><h3>{t}</h3><p>{c}</p></article>
          ))}
        </div>
      </section>

      <section className="tools-close">
        <div className="grid-overlay" />
        <h2>Got your number? Bring it to a working session.</h2>
        <p>
          We&apos;ll follow one real job through your company, show you what a system built
          around how you already work would cover, and scope it against the number you just
          calculated. If renting is still the cheaper path at your size, we&apos;ll say so.
        </p>
        <div className="tools-close-actions">
          <Link className="button" href={v1("/contact")}>Book a working session <Arrow /></Link>
          <a className="direct-call" href="tel:+13018898546">Or call (301) 889-8546</a>
        </div>
      </section>
    </>
  );
}
