import type { Metadata } from "next";
import { Arrow, Check } from "@/components/v1/icons";
import { v1 } from "@/components/v1/paths";
import "./hvac.css";

// Trade spoke of /mep-contractors, targeting the F1 HVAC cluster
// (hvac field service software, hvac software, hvac dispatch software).
// Proof rules: Hot & Cold is a commercial mechanical contractor, so the HVAC
// page is the one trade page allowed to present the proof fully — measured
// numbers as measured, expectations labelled as the client's own expectations,
// exactly as the case study does. Nothing invented, no second client implied.

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "HVAC Operations Software Built Around Your Company | Kortex",
  description:
    "Dispatch, job tickets, timesheets, service agreements and invoicing in one system built around the way your HVAC company already runs — and owned by you.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/hvac-operations-software` },
};

// Every fact on this page is already published on the Hot & Cold case study
// (permission and naming confirmed Aug 2026), so no ph() placeholders are
// needed here. If a new claim is added, bring back the bracket-highlight
// pattern from best-answering-service/page.tsx.

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HVAC Operations Software",
  serviceType: "Custom operations systems for HVAC and mechanical contractors",
  url: `${SITE}/hvac-operations-software`,
  provider: {
    "@type": "ProfessionalService",
    name: "Kortex Consulting",
    url: SITE,
    telephone: "+1-301-889-8546",
    email: "hello@kortexconsulting.com",
  },
};

const BREAKDOWNS = [
  "A no-cool call lands during a heat wave and the board gets redrawn by phone. Twice.",
  "Tickets come back missing the unit number, so the office calls the tech — who is already on the next roof.",
  "Spring tune-ups pile onto the same two desks that run everything else.",
  "Hours get written down Friday, from memory, in the truck.",
  "The install that finished on the 3rd invoices on the 14th, because paper had to reach a desk first.",
  "A callback turns into a search through a photo roll and a text thread.",
];

const CHAIN: [string, string][] = [
  [
    "The call becomes a ticket",
    "Customer, site, unit and history attached from the first ring. If you have been out to that RTU before, the record says so.",
  ],
  [
    "Dispatch works one board",
    "Who is where, what is urgent, what moved. A heat-wave morning gets rearranged on one screen instead of across nine phone calls.",
  ],
  [
    "The tech closes the job at the unit",
    "Model and serial, readings, photos and the customer's sign-off — captured on the phone already in his hand, before the truck leaves the lot.",
  ],
  [
    "Hours attach as they happen",
    "Logged at the job and classified as they are logged — not sorted out later in the office by a person who was not there.",
  ],
  [
    "The invoice builds itself from the same record",
    "Nothing retyped between the rooftop and the invoice. QuickBooks in both directions.",
  ],
];

const MODULES: [string, string, string, string][] = [
  [
    "DISPATCH",
    "The board survives the heat wave.",
    "One dispatch view for who is out, what is urgent and what just moved — so the worst day of the summer is rearranged on a screen, not reconstructed by phone.",
    "Fewer calls to move one job, and no truck sitting idle because nobody noticed.",
  ],
  [
    "SERVICE AGREEMENTS",
    "Tune-up season stops living in one person's head.",
    "Maintenance contracts, seasonal visits and what each site needs — scheduled from the record instead of a calendar only one person understands.",
    "Spring and fall stop burying the office, and no agreement visit gets skipped.",
  ],
  [
    "JOB TICKETS & TIMESHEETS",
    "A ticket without a unit number does not submit.",
    "The tech records the job once, at the unit, with photos. Hours attach to the same ticket. Nothing comes back oil-stained or half-legible.",
    "The office stops calling the field to ask what a ticket meant.",
  ],
  [
    "INVOICING & QUICKBOOKS",
    "Finished work stops waiting on paper.",
    "The invoice builds from the record the tech already made. QuickBooks stays at the centre — the system feeds it in both directions.",
    "The job that finishes on the 3rd does not invoice on the 14th.",
  ],
];

const FIT_FOR: [string, string][] = [
  [
    "The office is the ceiling, not the field",
    "You could put another truck on tomorrow. What you cannot put on is another desk. If the constraint on growth is paperwork rather than techs, this is the same problem we have already built for.",
  ],
  [
    "Service and installs run side by side",
    "Agreements, no-cool calls and install projects in the same company — the handoffs between them are exactly where the record breaks.",
  ],
  [
    "QuickBooks already works",
    "We build the system to feed your books, not to replace them. Nobody is asked to move their accounting.",
  ],
];

const FIT_NOT: [string, string][] = [
  [
    "Your process is standard and a platform fits it",
    "Then buy the platform. It is cheaper and faster, and we will tell you which one on the first call.",
  ],
  [
    "You want a logo wall before you talk",
    "We have one named client, honestly presented, with the numbers public. We would rather you weigh it as that.",
  ],
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is HVAC field service software?",
    a: "Software that runs the service side of an HVAC company: dispatch, job tickets, technician hours, service agreements and invoicing. Most vendors sell it as a subscription platform your company adapts to. Kortex builds the system around the way your company already runs, and you own it outright — no per-seat fees.",
  },
  {
    q: "Does it handle dispatch?",
    a: "Yes. A dispatch board is usually one of the first modules an HVAC company needs: who is out, what is urgent, what moved. The point is that a heat-wave morning gets rearranged on one screen instead of across nine phone calls.",
  },
  {
    q: "Can it manage service agreements and seasonal maintenance?",
    a: "Yes. Maintenance contracts, the visits each one includes and what each site needs can be scheduled from the job record, so tune-up season stops depending on a calendar one person keeps in their head.",
  },
  {
    q: "Does it work with QuickBooks?",
    a: "Yes, and this is usually the deciding detail. QuickBooks stays at the centre of the business; the system is built to feed it in both directions. The first build kept the client's QuickBooks setup exactly as it was.",
  },
  {
    q: "How is this different from ServiceTitan or Housecall Pro?",
    a: "Those are platforms: strong products for companies willing to run the way the platform runs, priced per seat, rented for as long as you use them. Kortex builds one system around your existing process, and your company owns it. If a platform genuinely fits you, we will say so on the first call.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const TRADES: [string, string, string][] = [
  ["/electrical-contractor-software", "ELECTRICAL", "Electrical contractor software"],
  ["/plumbing-software", "PLUMBING", "Plumbing software"],
  ["/mep-contractors", "THE PARENT PAGE", "Operations systems for MEP contractors"],
];

export default function HvacOperationsSoftwarePage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

    {/* Hero — category-first headline, dispatch board drawn in CSS */}
    <section className="hv-hero">
      <div className="grid-overlay" />
      <div className="hv-hero-grid">
        <div>
          <p className="eyebrow"><span /> HVAC OPERATIONS SOFTWARE</p>
          <h1>HVAC operations software built around <em>your company</em>.</h1>
          <p className="hv-lede">
            Dispatch, job tickets, timesheets, service agreements and invoicing in one
            system — shaped to how you already run, synced with QuickBooks, and yours to
            own. No per-seat fees.
          </p>
          <div className="actions">
            <a className="button" href={v1("/contact")}>Book a working session <Arrow /></a>
            <a className="inline-link" href={v1("/case-studies/hot-and-cold")}>See the first build <Arrow /></a>
          </div>
          <p className="hv-cta-note">Start with the workflow costing your office the most hours.</p>
        </div>
        <div className="hv-board" role="img" aria-label="A sketch of an HVAC dispatch board: three technician columns holding maintenance visits, an install and one urgent no-cool call highlighted.">
          <div className="hv-board-top"><span>DISPATCH — ONE BOARD</span><span>TUE · HIGH 96&deg;</span></div>
          <div className="hv-board-cols">
            <div><b>TECH 1</b><i>PM VISIT — RTU 3 &amp; 4</i><i>PM VISIT — RTU 7</i><i className="hot">NO-COOL — SUITE 210</i></div>
            <div><b>TECH 2</b><i>INSTALL — DAY 2</i><i>INSTALL — DAY 2</i></div>
            <div><b>TECH 3</b><i>TUNE-UP</i><i>TUNE-UP</i><i>CALLBACK — TICKET 1141</i></div>
          </div>
          <div className="hv-board-foot">MOVED ONCE, ON THE BOARD — NOT NINE TIMES, BY PHONE</div>
        </div>
      </div>
    </section>

    {/* 01 — the office problem, in HVAC terms */}
    <section className="hv-problem section-pad">
      <p className="section-index">01 / WHERE THE HOURS GO</p>
      <div className="hv-problem-grid">
        <div className="hv-problem-copy">
          <h2>The trucks keep up. The paperwork doesn&rsquo;t.</h2>
          <p>An HVAC company does not fall behind on the roof. It falls behind on the desk — in the gap between a job that is finished and a record the office can bill from.</p>
          <p>None of these is a big problem. Each is twenty minutes. The ceiling on the business is built out of forty of them landing on the same two desks, every week, in season.</p>
        </div>
        <div>
          <ul className="hv-breakdown">{BREAKDOWNS.map((b, i) => <li key={b}><span>0{i + 1}</span>{b}</li>)}</ul>
          <p className="hv-verdict">Your techs are not the problem. The record of their work is travelling by paper, phone and memory.</p>
        </div>
      </div>
    </section>

    {/* 02 — one record, call to invoice */}
    <section className="hv-flow section-pad">
      <div className="split-heading">
        <div><p className="section-index amber">02 / ONE RECORD, CALL TO INVOICE</p><h2>The job gets recorded once. Everything else reads from it.</h2></div>
        <p>The ticket the tech makes at the unit is the same record dispatch worked from and the same record the invoice builds from. Nothing is retyped between the rooftop and the money.</p>
      </div>
      <ol className="hv-chain">{CHAIN.map(([t, c], i) => <li key={t}><span>0{i + 1}</span><div><h3>{t}</h3><p>{c}</p></div></li>)}</ol>
      <p className="hv-closer">Less chasing the field. Less retyping in the office. Less finished work sitting between the job and the invoice.</p>
    </section>

    {/* 03 — what gets built */}
    <section className="hv-modules section-pad">
      <div className="split-heading">
        <div><p className="section-index">03 / WHAT GETS BUILT</p><h2>Start where the season hurts most.</h2></div>
        <p>Kortex does not sell a fixed feature list. We follow how work moves through your company, find where the hours are being lost, and build the first module around that — then the next, once the first one has earned it.</p>
      </div>
      <div className="hv-module-grid">{MODULES.map(([tag, t, c, fx]) => <article key={tag}>
        <span>{tag}</span><h3>{t}</h3><p>{c}</p>
        <div className="hv-effect"><strong>BUSINESS EFFECT</strong><p>{fx}</p></div>
      </article>)}</div>
      <div className="actions"><a className="button" href={v1("/contact")}>Book a working session <Arrow /></a></div>
    </section>

    {/* 04 — proof. The one trade page allowed to carry the full Hot & Cold
         block: this is the trade the client is in. */}
    <section className="hv-proof section-pad">
      <div className="hv-proof-label"><span>CLIENT 001 &middot; HOT &amp; COLD CORPORATION</span><span>COMMERCIAL MECHANICAL &middot; MARYLAND &middot; 30 PEOPLE</span></div>
      <div className="hv-proof-grid">
        <div>
          <h2>The first build runs in a mechanical contractor&rsquo;s business today.</h2>
          <p>Hot &amp; Cold is a thirty-person commercial mechanical contractor in Maryland — HVAC service and install work side by side. Until last year the whole office ran on one spreadsheet anyone could edit, and service calls disappeared when somebody deleted a row.</p>
          <p>What replaced it is one record from the job to the invoice: tickets entered at the unit, hours logged as they happen, approvals on the record, invoices built without retyping, QuickBooks in both directions.</p>
          <a className="hv-case-link" href={v1("/case-studies/hot-and-cold")}>Read the full build <Arrow /></a>
        </div>
        <div>
          <div className="hv-metrics">
            <span className="hv-metrics-label">MEASURED, AND RUNNING NOW</span>
            <div className="hv-metrics-row">
              <div><strong>5&ndash;6 hrs</strong><small>A WEEK ON TIMESHEETS<br />AND TICKETS &mdash; GONE</small></div><i />
              <div><strong>1 hr</strong><small>EVERY MONDAY TYPING<br />LAST WEEK OFF PAPER &mdash; GONE</small></div><i />
              <div><strong>0</strong><small>SPREADSHEETS RUNNING<br />THE OFFICE</small></div>
            </div>
            <p>Counted in the business before the build — the client&rsquo;s own numbers, not ours. What it replaced was one editable spreadsheet, and the paper it was printed from.</p>
          </div>
          <div className="hv-forward">
            <span>THE CLIENT&rsquo;S OWN EXPECTATIONS &mdash; NOT YET MEASURED</span>
            <p>Service contracts from <strong>10</strong> to somewhere between <strong>20 and 30</strong> on the same office team, and about a third of the office manager&rsquo;s role returned. We will publish these when they are measured, not before.</p>
          </div>
        </div>
      </div>
    </section>

    {/* 05 — who it's for, who it isn't */}
    <section className="hv-fit section-pad">
      <div className="split-heading">
        <div><p className="section-index">04 / IS THIS YOUR PROBLEM?</p><h2>Built for some HVAC companies. Honestly not for others.</h2></div>
        <p>A custom build is the wrong answer for plenty of shops, and pretending otherwise wastes your time and ours. Here is the actual line.</p>
      </div>
      <div className="hv-fit-grid">
        <div>
          <p className="hv-fit-head">THIS IS FOR YOU IF</p>
          <ul className="hv-fit-list">{FIT_FOR.map(([t, c]) => <li key={t}><Check /><div><h3>{t}</h3><p>{c}</p></div></li>)}</ul>
        </div>
        <div>
          <p className="hv-fit-head not">NOT FOR YOU IF</p>
          <ul className="hv-fit-list not">{FIT_NOT.map(([t, c]) => <li key={t}><b>&mdash;</b><div><h3>{t}</h3><p>{c}</p></div></li>)}</ul>
          <a className="inline-link" href={v1("/servicetitan-alternative")}>Read the honest ServiceTitan comparison <Arrow /></a>
        </div>
      </div>
    </section>

    {/* other trades */}
    <section className="hv-trades section-pad">
      <p className="section-index amber">05 / THE SAME PROBLEM, OTHER TRADES</p>
      <div className="hv-trades-grid">{TRADES.map(([path, tag, t]) => <a key={path} href={v1(path)}>
        <span>{tag}</span><strong>{t}</strong><Arrow />
      </a>)}</div>
    </section>

    {/* 06 — FAQ */}
    <section className="hv-faq faq section-pad">
      <div className="hv-faq-grid">
        <div>
          <p className="section-index">06 / QUESTIONS OWNERS ASK</p>
          <h2>Before you book anything.</h2>
        </div>
        <div className="faq-grid">
          {FAQS.map((f, i) => (
            <details key={f.q} {...(i === 0 ? { open: true } : {})}>
              <summary><span>0{i + 1}</span>{f.q}<i /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* 07 — final CTA */}
    <section className="contact hv-contact">
      <div className="grid-overlay" />
      <p className="eyebrow"><span /> 07 / NO DEMO SCRIPT, NO FEATURE TOUR</p>
      <h2>Show us one job, first call to paid invoice.</h2>
      <p>Bring the workflow that costs your office the most hours — the dispatch board, the tune-up backlog, the tickets that come back half-blank. We will map how it moves today and show you what one connected record would change.</p>
      <div className="contact-actions">
        <a className="button" href={v1("/contact")}>Book a working session <Arrow /></a>
        <a className="direct-call" href="tel:+13018898546">Or call (301) 889-8546</a>
      </div>
    </section>
  </>;
}
