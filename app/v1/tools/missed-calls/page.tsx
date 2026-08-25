import type { Metadata } from "next";
import Link from "next/link";
import { MissedCalls } from "@/components/v1/missed-calls";
import { Arrow } from "@/components/v1/icons";
import { v1 } from "@/components/v1/paths";
import "../tools.css";

export const metadata: Metadata = {
  title: "Missed-Call Calculator — What Unanswered Calls Cost | Kortex",
  description:
    "Put in your own numbers — missed calls a week, how many are customers, your average job — and see what the unanswered phone costs a contracting business per year.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://kortexconsulting.com/tools/missed-calls" },
};

const FACTS = [
  ["The caller decides fast", "Someone with a burst pipe or a down unit is calling to solve a problem today. If the first call doesn't answer, the second one is to somebody else — and you never know it happened."],
  ["Voicemail measures almost nothing", "Most callers who reach voicemail don't leave one, so your voicemail count understates the miss. The honest input is how often the phone rings out, not how many messages you got."],
  ["After-hours is where it concentrates", "Nights, weekends, and any moment your team is already on a call. The misses cluster exactly when nobody is watching the count."],
];

export default function MissedCallsPage() {
  return (
    <>
      <section className="tools-hero">
        <div className="grid-overlay" />
        <p className="eyebrow"><span /> FREE — NO SIGNUP, YOUR NUMBERS STAY IN YOUR BROWSER</p>
        <h1>What does the unanswered phone cost you?</h1>
        <p className="tools-lede">
          Five estimates, all yours — how often the phone rings out, how many of those are real
          customers, what a job is worth. The calculator turns them into a yearly number, and
          tells you honestly when fixing it wouldn&apos;t pay.
        </p>
      </section>

      <section className="tools-body section-pad">
        <MissedCalls />
      </section>

      <section className="tools-facts section-pad">
        <div className="split-heading">
          <div>
            <p className="section-index">WHY YOUR ESTIMATE IS PROBABLY LOW</p>
            <h2>The misses you count are not all of them.</h2>
          </div>
          <p>
            No statistics here either — just three reasons the number you typed in is likely on
            the conservative side, worth weighing before you round it down further.
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
        <h2>Want the real count instead of an estimate?</h2>
        <p>
          The free missed-call review measures where your calls actually go for a week — answered,
          rung out, after-hours — and you get the findings whether or not you do anything about
          them. If the number turns out to be small, that&apos;s a good outcome too.
        </p>
        <div className="tools-close-actions">
          <Link className="button" href={v1("/ai-receptionist")}>Get the free missed-call review <Arrow /></Link>
          <a className="direct-call" href="tel:+13018898546">Or call (301) 889-8546</a>
        </div>
      </section>
    </>
  );
}
