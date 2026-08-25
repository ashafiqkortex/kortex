import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/v1/icons";
import { v1 } from "@/components/v1/paths";
import "./tools.css";

export const metadata: Metadata = {
  title: "Tools — Kortex",
  description:
    "Free tools for contractors weighing software decisions. Start with the rent vs own calculator.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://kortexconsulting.com/tools" },
};

export default function ToolsIndexPage() {
  return (
    <>
      <section className="tools-hero">
        <div className="grid-overlay" />
        <p className="eyebrow"><span /> TOOLS</p>
        <h1>Run your own numbers first.</h1>
        <p className="tools-lede">
          Free, no signup, and the numbers stay in your browser. Built so you can size up a
          decision before you talk to anyone — including us.
        </p>
      </section>

      <section className="tools-body section-pad tools-index-grid">
        <Link className="tools-card" href={v1("/tools/rent-vs-own")}>
          <span className="tag">CALCULATOR</span>
          <h2>Rent vs own</h2>
          <p>
            What per-seat software costs over five years at your headcount, your price and your
            growth — and where a one-time build crosses it. The five-year number nobody puts on
            a pricing page.
          </p>
          <span className="tools-card-cta">Open the calculator <Arrow /></span>
        </Link>
        <Link className="tools-card" href="/v1/tools/missed-calls">
          <span className="tag">CALCULATOR</span>
          <h2>Missed calls</h2>
          <p>
            What the unanswered phone costs in a year, at your call volume and your job value —
            and the honest breakeven against any vendor&apos;s answering quote, including ours.
          </p>
          <span className="tools-card-cta">Open the calculator <Arrow /></span>
        </Link>
        <p className="tools-more">More tools as we build them. If there&apos;s a number you wish
          you could work out about your own operation, <Link href={v1("/contact")}>tell us</Link> —
          the good ones come from owners.</p>
      </section>
    </>
  );
}
