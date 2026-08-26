import type { Metadata } from "next";
import { Arrow, Check } from "@/components/v1/icons";
import { v1 } from "@/components/v1/paths";
import "./electrical.css";

// Trade spoke of /mep-contractors, targeting the electrical cluster
// (electrical contractor software; electrical contracting software quickbooks —
// the QuickBooks seam gets its own weight here, per cluster F2).
// Proof rules: the only client is a commercial MECHANICAL contractor. This page
// may reference the build only as that — honest cross-trade framing, never
// implying an electrical client exists. No measured-number wall here; the
// numbers live on the case study and the HVAC page.

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "Electrical Contractor Software Built Around Your Shop | Kortex",
  description:
    "Projects, service calls, T&M extras, timesheets and QuickBooks invoicing in one system built around the way your electrical shop already runs.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/electrical-contractor-software` },
};

// Every claim on this page is either conditional ("can be built") or already
// published on the Hot & Cold case study, so no ph() placeholders are needed.
// If a new unverified claim is added, bring back the bracket-highlight pattern
// from best-answering-service/page.tsx.

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electrical Contractor Software",
  serviceType: "Custom operations systems for electrical contractors",
  url: `${SITE}/electrical-contractor-software`,
  provider: {
    "@type": "ProfessionalService",
    name: "Kortex Consulting",
    url: SITE,
    telephone: "+1-301-889-8546",
    email: "hello@kortexconsulting.com",
  },
};

const BREAKDOWNS = [
  "The fit-out needs three more days of rough-in, and the service schedule absorbs it by phone.",
  "An extra gets done on a verbal okay. The T&M ticket surfaces at billing — unsigned.",
  "One supplier run feeds two jobs, and the material gets job-costed from memory.",
  "Foremen text their crews' hours in on Friday. The office sorts journeyman from apprentice on Monday.",
  "The panel change finished last week. The ticket is still in a glovebox.",
  "The prevailing-wage job needs labor records the timesheets were never built to produce.",
];

const CHAIN: [string, string][] = [
  [
    "Every job starts as one record",
    "Bid work or a service call — the same record carries the site, the scope, the drawings reference and what has already been approved.",
  ],
  [
    "The crew closes out daily, at the job",
    "What got installed, what changed, photos of the rough-in before the wall closes. Entered once, on the phone, by the person who did it.",
  ],
  [
    "Extras get captured when they happen",
    "The T&M ticket is written and signed at the job — not remembered at billing. Nothing rides on a verbal okay from three weeks ago.",
  ],
  [
    "Hours land classified",
    "Journeyman, apprentice, job and phase — recorded as the hours happen, so payroll and job costing read the same numbers.",
  ],
  [
    "The invoice builds from the same record",
    "Progress billing on projects, per-call billing on service — out of the record the crew already made. QuickBooks in both directions.",
  ],
];

const MODULES: [string, string, string, string][] = [
  [
    "PROJECTS & PHASES",
    "The fit-out and the service van stop fighting for the same week.",
    "Project work broken into phases with its own crew plan, so pulling a man to a service call is a decision on a board — not a surprise on Thursday.",
    "You see the collision before it costs a day, not after.",
  ],
  [
    "SERVICE CALLS",
    "Small work stops generating big paperwork.",
    "The service call is one ticket from the phone ringing to the invoice: site history, what was done, photos, sign-off. Closed by the electrician who did it.",
    "The office stops rebuilding what happened from a text thread.",
  ],
  [
    "EXTRAS & CHANGE ORDERS",
    "Work you did gets billed as work you did.",
    "Extras written up at the job, signed on the spot, priced in the office — and visible at billing instead of discovered there.",
    "Fewer arguments, and no unbilled T&M riding in a glovebox.",
  ],
  [
    "TIMESHEETS TO QUICKBOOKS",
    "Hours go in once and land everywhere they need to.",
    "Crew hours recorded at the job, classified as they are logged, flowing to payroll, job costs and the invoice. QuickBooks stays at the centre — the system feeds it.",
    "Monday stops being a data-entry day, and the wage records exist when the certified-payroll job asks for them.",
  ],
];

const FIT_FOR: [string, string][] = [
  [
    "Projects and service run in the same shop",
    "Bid work with foremen and crews, plus service vans doing small work — the handoffs between the two are exactly where the record breaks.",
  ],
  [
    "The office is the ceiling, not the field",
    "You could man another fit-out tomorrow. What you cannot staff is the desk that keeps every job billable. If paperwork is the constraint on the next contract, this is the problem we build for.",
  ],
  [
    "QuickBooks already works",
    "We build the system to feed your books — projects set up the way you already have them — not to replace your accounting.",
  ],
];

const FIT_NOT: [string, string][] = [
  [
    "A platform already fits how you run",
    "Then buy the platform. It is cheaper and faster, and we will tell you which one on the first call.",
  ],
  [
    "You want a vendor with fifty electrical logos",
    "We have one named client and it is a mechanical contractor. That is presented honestly below, and we would rather lose the shops that need a logo wall than imply one.",
  ],
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is electrical contractor software?",
    a: "Software that runs an electrical shop's work: project phases, service calls, T&M extras, crew timesheets, job costing and invoicing. Most of it is sold as a subscription platform your shop adapts to. Kortex builds one system around the way your shop already runs, and you own it — no per-seat fees.",
  },
  {
    q: "Does it work with QuickBooks?",
    a: "Yes, and for most shops this is the deciding detail. QuickBooks stays at the centre of the business, with your projects set up the way you already have them. The system feeds it in both directions instead of asking you to move your books.",
  },
  {
    q: "Can it handle both project work and service calls?",
    a: "Yes. That mix is the reason off-the-shelf products pinch: they are usually built for one or the other. One record carries both kinds of work, so a crew moved from a fit-out to a service call does not fall out of the schedule or the job costs.",
  },
  {
    q: "What about T&M extras and change orders?",
    a: "Extras are written and signed at the job, on the phone, and show up at billing on their own. The point is that work done on a verbal okay stops disappearing between the wall and the invoice.",
  },
  {
    q: "Has Kortex built for an electrical contractor before?",
    a: "Not yet, and we will not pretend otherwise. The first build runs at a thirty-person commercial mechanical contractor in Maryland — tickets, timesheets, approvals and QuickBooks invoicing on one record. The office problem is the same shape in an electrical shop, and the build is public, so you can judge it directly.",
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
  ["/hvac-operations-software", "HVAC", "HVAC operations software"],
  ["/plumbing-software", "PLUMBING", "Plumbing software"],
  ["/mep-contractors", "THE PARENT PAGE", "Operations systems for MEP contractors"],
];

export default function ElectricalContractorSoftwarePage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

    {/* Hero — category-first headline, projects/service week drawn in CSS */}
    <section className="el-hero">
      <div className="grid-overlay" />
      <div className="el-hero-grid">
        <div>
          <p className="eyebrow"><span /> ELECTRICAL CONTRACTOR SOFTWARE</p>
          <h1>Electrical contractor software built around <em>your shop</em>.</h1>
          <p className="el-lede">
            Projects and service in one system — phases, T&amp;M extras, crew timesheets
            and invoicing that lands in QuickBooks the way your jobs are already set up.
            Built to how you run, and yours to own.
          </p>
          <div className="actions">
            <a className="button" href={v1("/contact")}>Book a working session <Arrow /></a>
            <a className="inline-link" href={v1("/mep-contractors")}>How we work with MEP trades <Arrow /></a>
          </div>
          <p className="el-cta-note">Start with the workflow costing your office the most hours.</p>
        </div>
        <div className="el-week" role="img" aria-label="A sketch of one shop week split between project work and service calls, with one signed extra flagged.">
          <div className="el-week-top"><span>ONE SHOP, ONE WEEK</span><span>PROJECTS + SERVICE</span></div>
          <div className="el-week-cols">
            <div>
              <b>PROJECTS</b>
              <i>FIT-OUT — ROUGH-IN, DAY 3</i>
              <i>FIT-OUT — ROUGH-IN, DAY 4</i>
              <i className="hot">EXTRA — SIGNED AT THE JOB</i>
            </div>
            <div>
              <b>SERVICE</b>
              <i>PANEL SWAP</i>
              <i>TROUBLESHOOT — SUITE 4</i>
              <i>LIGHTING RETROFIT</i>
            </div>
          </div>
          <div className="el-week-foot">SAME CREWS, SAME OFFICE, ONE RECORD</div>
        </div>
      </div>
    </section>

    {/* 01 — the office problem, in electrical terms */}
    <section className="el-problem section-pad">
      <p className="section-index">01 / WHERE THE HOURS GO</p>
      <div className="el-problem-grid">
        <div className="el-problem-copy">
          <h2>The crews keep up. The record of their work doesn&rsquo;t.</h2>
          <p>An electrical shop that runs projects and service together is really running two schedules, two kinds of billing and one office — and the office holds it together by phone, paper and memory.</p>
          <p>None of these is a big problem on its own. Each is twenty minutes. The ceiling on the shop is built out of forty of them landing on the same desks every week.</p>
        </div>
        <div>
          <ul className="el-breakdown">{BREAKDOWNS.map((b, i) => <li key={b}><span>0{i + 1}</span>{b}</li>)}</ul>
          <p className="el-verdict">Your foremen are not the problem. The work is recorded three times in three places — or not at all.</p>
        </div>
      </div>
    </section>

    {/* 02 — one record, bid to invoice */}
    <section className="el-flow section-pad">
      <div className="split-heading">
        <div><p className="section-index amber">02 / ONE RECORD, JOB TO INVOICE</p><h2>The work gets recorded once. Everything else reads from it.</h2></div>
        <p>The record the crew makes at the job is the record the schedule works from, the record the extras hang on, and the record the invoice builds from. Nothing is retyped between the wall and the money.</p>
      </div>
      <ol className="el-chain">{CHAIN.map(([t, c], i) => <li key={t}><span>0{i + 1}</span><div><h3>{t}</h3><p>{c}</p></div></li>)}</ol>
      <p className="el-closer">Less chasing foremen. Less Monday data entry. No unbilled extras riding around in gloveboxes.</p>
    </section>

    {/* 03 — what gets built */}
    <section className="el-modules section-pad">
      <div className="split-heading">
        <div><p className="section-index">03 / WHAT GETS BUILT</p><h2>Start where the money leaks.</h2></div>
        <p>Kortex does not sell a fixed feature list. We follow how work moves through your shop — the fit-out, the service van, the extra that never got billed — and build the first module around the leak that costs the most. Then the next, once the first one has earned it.</p>
      </div>
      <div className="el-module-grid">{MODULES.map(([tag, t, c, fx]) => <article key={tag}>
        <span>{tag}</span><h3>{t}</h3><p>{c}</p>
        <div className="el-effect"><strong>BUSINESS EFFECT</strong><p>{fx}</p></div>
      </article>)}</div>
      <div className="actions"><a className="button" href={v1("/contact")}>Book a working session <Arrow /></a></div>
    </section>

    {/* 04 — proof, cross-trade and honest. No mechanical numbers wall here;
         the framing is "same shape of problem", and the case study carries
         the detail. */}
    <section className="el-proof section-pad">
      <div className="el-proof-grid">
        <div>
          <p className="section-index amber">04 / WHERE THIS HAS RUN</p>
          <h2>The first build wasn&rsquo;t an electrical shop. Here is why it still matters.</h2>
        </div>
        <div>
          <p>Kortex&rsquo;s first system runs at a thirty-person commercial mechanical contractor in Maryland — a shop that runs projects and service side by side, the way most electrical contractors do. Their office ran on handwritten tickets, hours retyped off paper, approvals in a message thread and one spreadsheet anyone could edit.</p>
          <p>That is not an electrical track record, and we will not dress it up as one. But the office problem is the same shape: work done in the field, recorded on paper, rebuilt at a desk before anyone can bill it. The build that replaced it — one record from the job ticket to the QuickBooks invoice — is public, with the client named and their own numbers on the page.</p>
          <div className="el-honest">
            <span>PRESENTED AS WHAT IT IS</span>
            <p>One client. A mechanical contractor, not an electrical one. Judge the build on its record, not on a logo wall we do not have.</p>
          </div>
          <a className="el-case-link" href={v1("/case-studies/hot-and-cold")}>Read the first build <Arrow /></a>
        </div>
      </div>
    </section>

    {/* 05 — who it's for, who it isn't */}
    <section className="el-fit section-pad">
      <div className="split-heading">
        <div><p className="section-index">05 / IS THIS YOUR PROBLEM?</p><h2>Built for some electrical shops. Honestly not for others.</h2></div>
        <p>A custom build is the wrong answer for plenty of shops, and pretending otherwise wastes your time and ours. Here is the actual line.</p>
      </div>
      <div className="el-fit-grid">
        <div>
          <p className="el-fit-head">THIS IS FOR YOU IF</p>
          <ul className="el-fit-list">{FIT_FOR.map(([t, c]) => <li key={t}><Check /><div><h3>{t}</h3><p>{c}</p></div></li>)}</ul>
        </div>
        <div>
          <p className="el-fit-head not">NOT FOR YOU IF</p>
          <ul className="el-fit-list not">{FIT_NOT.map(([t, c]) => <li key={t}><b>&mdash;</b><div><h3>{t}</h3><p>{c}</p></div></li>)}</ul>
          <a className="inline-link" href={v1("/servicetitan-alternative")}>Read the honest ServiceTitan comparison <Arrow /></a>
        </div>
      </div>
    </section>

    {/* other trades */}
    <section className="el-trades section-pad">
      <p className="section-index amber">06 / THE SAME PROBLEM, OTHER TRADES</p>
      <div className="el-trades-grid">{TRADES.map(([path, tag, t]) => <a key={path} href={v1(path)}>
        <span>{tag}</span><strong>{t}</strong><Arrow />
      </a>)}</div>
    </section>

    {/* 06 — FAQ */}
    <section className="el-faq faq section-pad">
      <div className="el-faq-grid">
        <div>
          <p className="section-index">07 / QUESTIONS OWNERS ASK</p>
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
    <section className="contact el-contact">
      <div className="grid-overlay" />
      <p className="eyebrow"><span /> 08 / NO DEMO SCRIPT, NO FEATURE TOUR</p>
      <h2>Show us one job, bid to paid invoice.</h2>
      <p>Bring the workflow that costs your office the most — the extras that never got billed, the Friday time texts, the ticket in the glovebox. We will map how it moves today and show you what one connected record would change.</p>
      <div className="contact-actions">
        <a className="button" href={v1("/contact")}>Book a working session <Arrow /></a>
        <a className="direct-call" href="tel:+13018898546">Or call (301) 889-8546</a>
      </div>
    </section>
  </>;
}
