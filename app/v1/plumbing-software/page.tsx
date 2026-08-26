import type { Metadata } from "next";
import { Arrow, Check } from "@/components/v1/icons";
import { v1 } from "@/components/v1/paths";
import "./plumbing.css";

// Trade spoke of /mep-contractors, targeting the plumbing cluster
// (plumbing software, plumbing service software, plumbing dispatch).
// Proof rules: the only client is a commercial MECHANICAL contractor. This
// page may reference the build only as that — honest cross-trade framing,
// never implying a plumbing client exists. No measured-number wall here; the
// numbers live on the case study and the HVAC page.

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "Plumbing Software Built Around the Way Your Shop Runs | Kortex",
  description:
    "Dispatch, emergency calls, recurring jetting work, rough-in phases and QuickBooks invoicing in one system built around the way your plumbing shop runs.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/plumbing-software` },
};

// Every claim on this page is either conditional ("can be built") or already
// published on the Hot & Cold case study, so no ph() placeholders are needed.
// If a new unverified claim is added, bring back the bracket-highlight pattern
// from best-answering-service/page.tsx.

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Plumbing Software",
  serviceType: "Custom operations systems for plumbing contractors",
  url: `${SITE}/plumbing-software`,
  provider: {
    "@type": "ProfessionalService",
    name: "Kortex Consulting",
    url: SITE,
    telephone: "+1-301-889-8546",
    email: "hello@kortexconsulting.com",
  },
};

const BREAKDOWNS = [
  "A backed-up main at six in the morning redraws the whole day — by phone, one truck at a time.",
  "The camera footage that proves the line was broken before you got there lives on somebody's phone.",
  "Rough-in passed inspection, but the photos of what is behind the wall are in a text thread.",
  "The jetting accounts run off a calendar that lives in one person's head.",
  "Tickets come back missing the fixture count, or the model of the heater that went in.",
  "Tuesday's water heater swap invoices next week, after the paper reaches a desk.",
];

const CHAIN: [string, string][] = [
  [
    "The call becomes a ticket",
    "Site, fixture, history — and whether you have been out to that line before. The emergency at six a.m. starts as a record, not a scramble.",
  ],
  [
    "Dispatch works one board",
    "Emergencies, rough-in crews and the recurring jetting route on the same view, so the burst main moves jobs on a screen instead of through five phone calls.",
  ],
  [
    "The plumber closes the job at the site",
    "Photos, the camera-inspection reference, model and serial of what went in, and the customer's sign-off — on the phone already in his hand.",
  ],
  [
    "Hours attach as they happen",
    "Logged at the job, classified as they are logged — not reconstructed in the office from a wet ticket on Friday.",
  ],
  [
    "The invoice builds from the same record",
    "The emergency call, the jetting visit and the rough-in draw all bill out of the record the plumber already made. QuickBooks in both directions.",
  ],
];

const MODULES: [string, string, string, string][] = [
  [
    "DISPATCH & EMERGENCY WORK",
    "The burst main stops wrecking the schedule.",
    "One dispatch view for emergencies, routed work and crews on projects — so the six a.m. call is absorbed on a board, and the jobs it displaces are moved deliberately instead of forgotten.",
    "Fewer dropped jobs on the worst mornings, and no truck idle while another is drowning.",
  ],
  [
    "RECURRING & CONTRACT WORK",
    "Jetting season stops living in one person's head.",
    "Jetting routes, backflow tests and maintenance accounts scheduled from the record — each site with its history, access notes and what was found last time.",
    "No missed contract visit, and no account that only one employee knows how to service.",
  ],
  [
    "ROUGH-IN & PROJECT PHASES",
    "What is behind the wall stays on the record.",
    "Project work broken into phases — rough-in, top-out, final — with inspection photos attached to the job before the wall closes, not to somebody's camera roll.",
    "When the dispute comes a year later, you open the ticket instead of searching three phones.",
  ],
  [
    "INVOICING & QUICKBOOKS",
    "Finished work stops waiting on paper.",
    "The invoice builds from the ticket the plumber closed at the site. QuickBooks stays at the centre — the system feeds it in both directions.",
    "The heater swapped on Tuesday does not invoice next week.",
  ],
];

const FIT_FOR: [string, string][] = [
  [
    "Service, jetting and project work share one office",
    "Emergency calls, recurring routes and rough-in crews are three different rhythms — and one desk holds them together. That seam is exactly what we build for.",
  ],
  [
    "The office is the ceiling, not the field",
    "You could put another van on tomorrow. What you cannot add is another person who knows where everything is. If paperwork is the constraint on growth, this is the same problem we have already built for.",
  ],
  [
    "QuickBooks already works",
    "We build the system to feed your books, not to replace them. Nobody is asked to move their accounting.",
  ],
];

const FIT_NOT: [string, string][] = [
  [
    "A platform already fits how you run",
    "Then buy the platform. It is cheaper and faster, and we will tell you which one on the first call.",
  ],
  [
    "You want a vendor with fifty plumbing logos",
    "We have one named client and it is a mechanical contractor. That is presented honestly below, and we would rather lose the shops that need a logo wall than imply one.",
  ],
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is the best software for a plumbing company?",
    a: "The one that matches how your shop actually runs. A shop doing pure residential service is usually best served by an off-the-shelf platform. A shop mixing emergency service, recurring jetting or backflow work and rough-in projects tends to outgrow what platforms assume — that mix is what Kortex builds custom systems for, and if a platform fits you better we will say so on the first call.",
  },
  {
    q: "Does it handle dispatch and emergency calls?",
    a: "Yes. Dispatch is usually the first module a plumbing shop needs: emergencies, routed work and project crews on one board, so a burst main moves the day on a screen instead of through five phone calls.",
  },
  {
    q: "Can it schedule recurring jetting and maintenance accounts?",
    a: "Yes. Recurring routes, backflow tests and contract visits are scheduled from the site's own record — with the history and access notes attached — instead of from a calendar one person keeps in their head.",
  },
  {
    q: "Does it work with QuickBooks?",
    a: "Yes. QuickBooks stays at the centre of the business, and the system feeds it in both directions. The first build kept the client's QuickBooks setup exactly as it was.",
  },
  {
    q: "Has Kortex built for a plumbing company before?",
    a: "Not yet, and we will not pretend otherwise. The first build runs at a thirty-person commercial mechanical contractor in Maryland — job tickets, timesheets, approvals and QuickBooks invoicing on one record. The office problem is the same shape in a plumbing shop, and the build is public, so you can judge it directly.",
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
  ["/electrical-contractor-software", "ELECTRICAL", "Electrical contractor software"],
  ["/mep-contractors", "THE PARENT PAGE", "Operations systems for MEP contractors"],
];

export default function PlumbingSoftwarePage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

    {/* Hero — category-first headline, one emergency call traced in CSS */}
    <section className="pl-hero">
      <div className="grid-overlay" />
      <div className="pl-hero-grid">
        <div>
          <p className="eyebrow"><span /> PLUMBING SOFTWARE</p>
          <h1>Plumbing software built around the way <em>your shop runs</em>.</h1>
          <p className="pl-lede">
            Dispatch, emergency calls, recurring jetting routes, rough-in phases and
            invoicing in one system — with the photos on the ticket and the totals in
            QuickBooks. Built to how you run, and yours to own.
          </p>
          <div className="actions">
            <a className="button" href={v1("/contact")}>Book a working session <Arrow /></a>
            <a className="inline-link" href={v1("/mep-contractors")}>How we work with MEP trades <Arrow /></a>
          </div>
          <p className="pl-cta-note">Start with the workflow costing your office the most hours.</p>
        </div>
        <div className="pl-ticket" role="img" aria-label="A sketch of one emergency plumbing call as a single record: the early-morning call, dispatch, photos attached at the site, and the invoice built the same day.">
          <div className="pl-ticket-top"><span>ONE CALL, ONE RECORD</span><span>BACKED-UP MAIN</span></div>
          <ul className="pl-ticket-steps">
            <li><b>EARLY CALL</b><i>Site history attached — you were out here in March</i></li>
            <li><b>DISPATCHED</b><i>Moved on the board, not by five phone calls</i></li>
            <li className="hot"><b>CLOSED AT THE SITE</b><i>Photos and camera footage on the ticket</i></li>
            <li><b>INVOICE BUILT</b><i>Same record, same day, into QuickBooks</i></li>
          </ul>
          <div className="pl-ticket-foot">NOTHING RETYPED BETWEEN THE STREET AND THE INVOICE</div>
        </div>
      </div>
    </section>

    {/* 01 — the office problem, in plumbing terms */}
    <section className="pl-problem section-pad">
      <p className="section-index">01 / WHERE THE HOURS GO</p>
      <div className="pl-problem-grid">
        <div className="pl-problem-copy">
          <h2>The vans keep up. The record of the work doesn&rsquo;t.</h2>
          <p>A plumbing shop runs three rhythms at once — emergencies that will not wait, routes that must not slip, and project phases with inspections in between. One office holds all three together, mostly by phone and memory.</p>
          <p>None of these is a big problem on its own. Each is twenty minutes. The ceiling on the shop is built out of forty of them landing on the same desks every week.</p>
        </div>
        <div>
          <ul className="pl-breakdown">{BREAKDOWNS.map((b, i) => <li key={b}><span>0{i + 1}</span>{b}</li>)}</ul>
          <p className="pl-verdict">Your plumbers are not the problem. The proof of their work is scattered across phones, paper and one person&rsquo;s memory.</p>
        </div>
      </div>
    </section>

    {/* 02 — one record, call to invoice */}
    <section className="pl-flow section-pad">
      <div className="split-heading">
        <div><p className="section-index amber">02 / ONE RECORD, CALL TO INVOICE</p><h2>The job gets recorded once. Everything else reads from it.</h2></div>
        <p>The ticket the plumber closes at the site is the record dispatch worked from, the record the photos live on, and the record the invoice builds from. Nothing is retyped between the street and the money.</p>
      </div>
      <ol className="pl-chain">{CHAIN.map(([t, c], i) => <li key={t}><span>0{i + 1}</span><div><h3>{t}</h3><p>{c}</p></div></li>)}</ol>
      <p className="pl-closer">Less chasing the field. Fewer disputes fought from memory. Less finished work sitting between the job and the invoice.</p>
    </section>

    {/* 03 — what gets built */}
    <section className="pl-modules section-pad">
      <div className="split-heading">
        <div><p className="section-index">03 / WHAT GETS BUILT</p><h2>Start where the day breaks first.</h2></div>
        <p>Kortex does not sell a fixed feature list. We follow how work moves through your shop — the emergency, the route, the rough-in — find where the hours and the records are being lost, and build the first module around that. Then the next, once the first one has earned it.</p>
      </div>
      <div className="pl-module-grid">{MODULES.map(([tag, t, c, fx]) => <article key={tag}>
        <span>{tag}</span><h3>{t}</h3><p>{c}</p>
        <div className="pl-effect"><strong>BUSINESS EFFECT</strong><p>{fx}</p></div>
      </article>)}</div>
      <div className="actions"><a className="button" href={v1("/contact")}>Book a working session <Arrow /></a></div>
    </section>

    {/* 04 — proof, cross-trade and honest. No mechanical numbers wall here;
         the framing is "same shape of problem", and the case study carries
         the detail. */}
    <section className="pl-proof section-pad">
      <div className="pl-proof-grid">
        <div>
          <p className="section-index amber">04 / WHERE THIS HAS RUN</p>
          <h2>The first build wasn&rsquo;t a plumbing shop. Here is why it still matters.</h2>
        </div>
        <div>
          <p>Kortex&rsquo;s first system runs at a thirty-person commercial mechanical contractor in Maryland — service and projects side by side, the way most plumbing shops run. Their office ran on handwritten tickets, hours retyped off paper, approvals in a message thread, no photo record to stand on in a dispute, and one spreadsheet anyone could edit.</p>
          <p>That is not a plumbing track record, and we will not dress it up as one. But the office problem is the same shape: work done in the field, recorded on paper, rebuilt at a desk before anyone can bill it. The build that replaced it — one record from the job ticket to the QuickBooks invoice — is public, with the client named and their own numbers on the page.</p>
          <div className="pl-honest">
            <span>PRESENTED AS WHAT IT IS</span>
            <p>One client. A mechanical contractor, not a plumbing one. Judge the build on its record, not on a logo wall we do not have.</p>
          </div>
          <a className="pl-case-link" href={v1("/case-studies/hot-and-cold")}>Read the first build <Arrow /></a>
        </div>
      </div>
    </section>

    {/* 05 — who it's for, who it isn't */}
    <section className="pl-fit section-pad">
      <div className="split-heading">
        <div><p className="section-index">05 / IS THIS YOUR PROBLEM?</p><h2>Built for some plumbing shops. Honestly not for others.</h2></div>
        <p>A custom build is the wrong answer for plenty of shops, and pretending otherwise wastes your time and ours. Here is the actual line.</p>
      </div>
      <div className="pl-fit-grid">
        <div>
          <p className="pl-fit-head">THIS IS FOR YOU IF</p>
          <ul className="pl-fit-list">{FIT_FOR.map(([t, c]) => <li key={t}><Check /><div><h3>{t}</h3><p>{c}</p></div></li>)}</ul>
        </div>
        <div>
          <p className="pl-fit-head not">NOT FOR YOU IF</p>
          <ul className="pl-fit-list not">{FIT_NOT.map(([t, c]) => <li key={t}><b>&mdash;</b><div><h3>{t}</h3><p>{c}</p></div></li>)}</ul>
          <a className="inline-link" href={v1("/servicetitan-alternative")}>Read the honest ServiceTitan comparison <Arrow /></a>
        </div>
      </div>
    </section>

    {/* other trades */}
    <section className="pl-trades section-pad">
      <p className="section-index amber">06 / THE SAME PROBLEM, OTHER TRADES</p>
      <div className="pl-trades-grid">{TRADES.map(([path, tag, t]) => <a key={path} href={v1(path)}>
        <span>{tag}</span><strong>{t}</strong><Arrow />
      </a>)}</div>
    </section>

    {/* 06 — FAQ */}
    <section className="pl-faq faq section-pad">
      <div className="pl-faq-grid">
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
    <section className="contact pl-contact">
      <div className="grid-overlay" />
      <p className="eyebrow"><span /> 08 / NO DEMO SCRIPT, NO FEATURE TOUR</p>
      <h2>Show us one call, street to paid invoice.</h2>
      <p>Bring the workflow that costs your office the most — the six a.m. emergency, the jetting calendar in one person&rsquo;s head, the photos scattered across three phones. We will map how it moves today and show you what one connected record would change.</p>
      <div className="contact-actions">
        <a className="button" href={v1("/contact")}>Book a working session <Arrow /></a>
        <a className="direct-call" href="tel:+13018898546">Or call (301) 889-8546</a>
      </div>
    </section>
  </>;
}
