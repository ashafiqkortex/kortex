import type { Metadata } from "next";
import { v1 } from "@/components/v1/paths";
import { Arrow, Check } from "@/components/v1/icons";
import { WorkflowSessionForm } from "./workflow-session-form";
import "./bgc.css";

// Source of truth: the senior-reviewed copy + design doc
// (kortex-builders-and-general-contractors-page-copy-and-design.md, Aug 2026).
// Standing rules from it, do not undo:
//  - This page must not imply that Kortex replaces Procore, drawings, BIM
//    coordination, RFIs or submittals. The Procore boundary stays explicit.
//  - The proof section is NOT rendered: Kortex has no approved builder or GC
//    case study yet, and a mechanical-subcontractor case study (Hot & Cold)
//    cannot be presented as builder proof. Add the section only when a real,
//    measured builder/GC result exists.
//  - Do not promise a Procore, ERP or accounting integration until scoped.
//  - Do not publish implementation time, client hours, ownership or commercial
//    terms until verified — they stay in the working session.
//  - Builder vocabulary: prime, sub, buyout, pay app, retainage, closeout.
//    Subcontractors are never called "vendors".
//  - Hero and problem visuals are explanatory interface concepts built in
//    HTML/CSS — not product screenshots, not stock photography, no generated
//    people, no fictional executive dashboard presented as proof.
//  - "Map One Project Workflow" is the only dominant offer; every primary CTA
//    scrolls to the same form (#workflow-form). Secondary action is the phone.
// Bracketed copy renders highlighted via ph() so reviewers can spot every
// claim that still needs sign-off before publishing.

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "Operations Systems for Builders and General Contractors | Kortex",
  description:
    "Connect subcontractor readiness, project decisions, change exposure and pay applications in one operations system built for your company.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/builders-and-general-contractors` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Operations Systems for Builders and General Contractors",
  serviceType: "Custom operations software and workflow systems",
  description:
    "Connect subcontractor readiness, project decisions, change exposure and pay applications in one operations system built for your company.",
  url: `${SITE}/builders-and-general-contractors`,
  provider: {
    "@type": "ProfessionalService",
    name: "Kortex Consulting",
    url: SITE,
    telephone: "+1-301-889-8546",
  },
  audience: { "@type": "BusinessAudience", name: "Builders and general contractors" },
};

/* Bracketed values in the copy are unconfirmed. They render highlighted so a
   reviewer can spot every claim that still needs sign-off before publishing. */
const ph = (s: string) =>
  s.split(/(\[[^\]]*\])/).map((part, i) =>
    part.startsWith("[") ? <span className="ph" key={i}>{part}</span> : part
  );

/* Hero: three project cards, each with one open exception, feeding one quiet
   company-standard panel. Explanatory interface concept — not a screenshot. */
const heroProjects = [
  ["PROJECT A", "PM TEAM 1", "Missing subcontractor certificate"],
  ["PROJECT B", "PM TEAM 2", "Change awaiting review"],
  ["PROJECT C", "PM TEAM 3", "Pay-application backup incomplete"],
];

const problems = [
  "Subcontract and compliance records are chased near mobilization or payment.",
  "Field directions do not always become documented commercial decisions.",
  "Pending changes live in personal logs with different meanings of “open.”",
  "Pay-application and closeout backup is assembled in a final scramble.",
];

/* Problem visual: one company, three different status formats. */
const trackers = [
  ["PROJECT A", "Real change log", "spreadsheet"],
  ["PROJECT B", "Subcontractor documents", "inbox"],
  ["PROJECT C", "Open decisions", "PM’s personal tracker"],
];

/* Five-stage workflow. Short label + one sentence from the public copy;
   responsible role and output created are the design-required annotations. */
const flow: { t: string; p: string; role: string; out: string }[] = [
  {
    t: "Confirm the subcontractor is ready",
    p: "Agreement, insurance, prequalification and compliance status are visible before work or payment depends on them.",
    role: "OFFICE + COMPLIANCE",
    out: "READINESS STATUS BEFORE MOBILIZATION",
  },
  {
    t: "Capture the project event",
    p: "A field condition, direction, extra-work notice or missing requirement enters one record with its supporting evidence.",
    role: "FIELD + PM",
    out: "ONE EVENT RECORD WITH EVIDENCE",
  },
  {
    t: "Route the decision",
    p: "The responsible person sees what happened and what must happen next.",
    role: "RESPONSIBLE REVIEWER",
    out: "ASSIGNED NEXT ACTION",
  },
  {
    t: "Show the exposure",
    p: "The possible cost, change or payment consequence stays visible until it is resolved.",
    role: "PM + LEADERSHIP",
    out: "OPEN EXPOSURE, VISIBLE UNTIL RESOLVED",
  },
  {
    t: "Move the approved record forward",
    p: "The approved information moves toward payment, compliance or closeout without being rebuilt by the office.",
    role: "OFFICE",
    out: "PAY-APP, COMPLIANCE OR CLOSEOUT BACKUP",
  },
];

/* Featured readiness card: annotated interface fragment, generic example
   values only — no real subcontractor, project or person is implied. */
const readinessRows: { k: string; v: string; open?: boolean }[] = [
  { k: "SUBCONTRACTOR", v: "Electrical sub — example" },
  { k: "AGREEMENT", v: "Executed" },
  { k: "INSURANCE", v: "Certificate on file" },
  { k: "PREQUALIFICATION", v: "Complete" },
  { k: "COMPLIANCE RECORDS", v: "1 required item open", open: true },
  { k: "OPEN ITEM", v: "Certified-payroll enrollment", open: true },
  { k: "RESPONSIBLE", v: "Office coordinator" },
  { k: "CONSEQUENCE", v: "Holds mobilization and the next pay app" },
];

const supporting = [
  ["Turn a field direction into a commercial decision",
   "A change workflow can connect the direction, evidence, scope, responsible person and approval status.",
   "Earlier visibility into work that could affect margin or the customer conversation."],
  ["Know what is holding up payment",
   "A payment-readiness workflow can show which approvals, compliance records and supporting documents are complete or missing.",
   "Less end-of-cycle chasing and a more dependable path to submission."],
];

const keeps = [
  "Drawings and specifications",
  "RFIs and submittals",
  "Core project records",
  "Accounting and financial records",
];

const fixes = [
  "Spreadsheet trackers",
  "Email approval chains",
  "Manual compliance checks",
  "Project-to-office handoffs",
];

const pilotSteps = [
  "Choose one handoff with a visible business consequence.",
  "Test the smallest useful improvement on a live project.",
  "Expand only when the team agrees it is clearer than the process it replaces.",
];

const faqs: [string, string][] = [
  ["Is Kortex a replacement for Procore?",
   "No. Kortex does not replace drawings, BIM coordination, RFIs, submittals or the core project-management functions Procore is designed to handle. It builds the company-specific office, compliance, approval and handoff workflows still being managed outside those systems."],
  ["Do we have to replace our accounting or project software?",
   "No. The starting assumption is that the systems doing their job should stay. Kortex focuses on the operational gaps between the project team, office, leadership and existing systems. Any integration is scoped and verified before it is promised."],
  ["What kind of company is this built for?",
   "It is designed for established, owner-led builders and GCs that hold the subcontracts, manage several active projects and have important office workflows still depending on spreadsheets, email and individual knowledge. A construction manager acting only as the owner’s adviser, without holding the subcontracts, is usually not the right fit."],
  ["Which workflow should we start with?",
   "Choose one where a late or missing handoff affects margin, cash, compliance, payment or executive attention. Subcontractor readiness, change exposure, approval routing and pay-application readiness are common starting points."],
  ["Will our project teams use it?",
   "The first workflow is tested with the PM, superintendent and office roles who already do the work. It should reduce ambiguity or repeated work for them before it is expanded across the company."],
];

export default function BuildersAndGeneralContractorsPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

    {/* ---- Hero: owner-level visibility outcome, 7/5 split ---- */}
    <section className="bgc-hero">
      <div className="grid-overlay" />
      <div className="bgc-hero-grid">
        <div className="bgc-hero-copy">
          <p className="eyebrow"><span /> OPERATIONS SYSTEMS FOR BUILDERS AND GENERAL CONTRACTORS</p>
          <h1>Know which projects need attention <em>before the monthly report</em> tells you.</h1>
          <p className="bgc-lede">Kortex connects subcontractor readiness, open decisions, change exposure and pay-application gaps across the company&mdash;without replacing the systems your teams already use.</p>
          <div className="actions"><a className="button" href="#workflow-form">Map one project workflow <Arrow /></a></div>
          <p className="bgc-cta-note">Start with one live job and one handoff affecting margin, cash or payment.</p>
        </div>
        <div className="bgc-hero-visual" aria-hidden="true">
          {/* Three active projects feeding one company-standard view. */}
          <div className="bgc-hero-projects">
            {heroProjects.map(([name, team, exception]) => (
              <div className="bgc-proj" key={name}>
                <div className="bgc-proj-head"><span>{name}</span><span>{team}</span></div>
                <p><i />{exception}</p>
              </div>
            ))}
          </div>
          <span className="bgc-feed" />
          <div className="bgc-standard">
            <span>WHAT NEEDS ATTENTION ACROSS THE BUSINESS</span>
            <ul>
              <li><b>A</b>Sub certificate missing — mobilization at risk</li>
              <li><b>B</b>Change unreviewed — margin exposure open</li>
              <li><b>C</b>Pay-app backup incomplete — submission at risk</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bgc-trust"><span>BUILT AROUND YOUR PROCESS</span><i>&middot;</i><span>PILOTED ON A LIVE PROJECT</span><i>&middot;</i><span>ONE ACCOUNTABLE TEAM</span></div>
    </section>

    {/* ---- 01 Problem: every project runs its own operating system ---- */}
    <section className="bgc-problem section-pad">
      <p className="section-index">01 / ONE COMPANY. DIFFERENT WAYS OF WORKING.</p>
      <div className="bgc-problem-grid">
        <div className="bgc-problem-copy">
          <h2>Does every project manager have a different way of showing what is really happening?</h2>
          <p>Strong project teams build workarounds because the official systems do not carry every handoff. One PM keeps the real change log in a spreadsheet. Another tracks subcontractor documents in email. A third carries the project status in his head.</p>
          <p>Each project can look under control on its own. Across the company, the office has to translate between them&mdash;and the owner gets a different picture from every PM.</p>
          <ul className="bgc-problem-list">{problems.map((p, i) => <li key={p}><span>0{i + 1}</span>{p}</li>)}</ul>
          <strong className="bgc-takeaway">The project managers are not the problem. The company needs one dependable way for important work to move from the project to the office.</strong>
        </div>
        <div className="bgc-problem-visual" aria-hidden="true">
          {/* Three different status formats arriving at one office. The PMs are
              not careless — the formats just don't match. */}
          {trackers.map(([name, what, where]) => (
            <div className="bgc-tracker" key={name}>
              <span>{name}</span>
              <p>{what}: <b>{where}</b></p>
            </div>
          ))}
          <div className="bgc-office">
            <span>THE OFFICE</span>
            <p>Three projects. Three status formats. One translation job.</p>
          </div>
        </div>
      </div>
    </section>

    {/* ---- 02 Connected workflow: five stages, full width ---- */}
    <section className="bgc-flow section-pad">
      <div className="split-heading">
        <div><p className="section-index amber">02 / ONE CONNECTED PROJECT WORKFLOW</p><h2>One record should show what happened, who owns it and what is at risk.</h2></div>
        <p>From project event to company action: subcontractor ready, event captured, decision assigned, exposure visible, record moved to payment or closeout.</p>
      </div>
      <ol className="bgc-steps">{flow.map((s, i) => <li key={s.t}>
        <span>0{i + 1}</span>
        <h3>{s.t}</h3>
        <p>{s.p}</p>
        <div className="bgc-step-meta">
          <small><b>ROLE</b>{s.role}</small>
          <small><b>OUTPUT</b>{s.out}</small>
        </div>
      </li>)}</ol>
      <strong className="bgc-takeaway">One company standard does not mean every project looks identical. It means the same important events produce a dependable next action.</strong>
    </section>

    {/* ---- 03 Starting points: readiness featured at double weight ---- */}
    <section className="bgc-starts section-pad">
      <div className="split-heading">
        <div><p className="section-index">03 / THE HANDOFF STANDARD SOFTWARE LEAVES MANUAL</p><h2>Put the most expensive manual handoff under control first.</h2></div>
        <p>Kortex follows one important project process, finds where the handoff fails and builds the smallest useful system around that problem.</p>
      </div>
      <div className="bgc-starts-grid">
        <article className="bgc-featured">
          <div>
            <h3>Know whether a subcontractor is ready before it matters</h3>
            <p>A readiness workflow can show agreement, insurance, prequalification, compliance and open items in one place.</p>
            <p className="bgc-effect"><strong>BUSINESS EFFECT</strong>Fewer last-minute document chases before mobilization or payment.</p>
          </div>
          {/* Annotated interface fragment — generic example values, not a
              product screenshot and not a real subcontractor. */}
          <div className="bgc-fragment" aria-hidden="true">
            <span className="bgc-fragment-tag">READINESS WORKFLOW — EXAMPLE</span>
            <ul>{readinessRows.map((r) => (
              <li key={r.k} className={r.open ? "is-open" : undefined}>
                <span>{r.k}</span><p>{r.open && <i />}{r.v}</p>
              </li>
            ))}</ul>
          </div>
        </article>
        {supporting.map(([t, c, e]) => <article className="bgc-support" key={t}>
          <h3>{t}</h3>
          <p>{c}</p>
          <p className="bgc-effect"><strong>BUSINESS EFFECT</strong>{e}</p>
        </article>)}
      </div>
      <p className="bgc-starts-note">Once one workflow is working, the same definitions can be used across projects so leadership sees where attention is required without becoming the reporting system.</p>
      <div className="actions"><a className="button" href="#workflow-form">Choose the first workflow <Arrow /></a></div>
    </section>

    {/* ---- 04 Existing systems: keep / fix ---- */}
    <section className="bgc-systems section-pad">
      <div className="bgc-systems-grid">
        <div>
          <p className="section-index amber">04 / NOT A PROCORE REPLACEMENT</p>
          <h2>Fix the work that still escapes into spreadsheets.</h2>
          <p>Procore and other project platforms can remain the home for drawings, RFIs, submittals and core project records. Financial records can remain in the accounting system.</p>
          <p>Kortex is for the coordination those systems do not fit cleanly: the office checks, approval paths, exceptions and company-specific handoffs people still carry manually.</p>
          <p>The goal is not another place to enter data. It is a clearer handoff between the people and systems already involved.</p>
          <p className="bgc-verify">{ph("[VERIFY EVERY NAMED INTEGRATION BEFORE SAYING DATA MOVES AUTOMATICALLY BETWEEN SYSTEMS.]")}</p>
        </div>
        <div className="bgc-keepfix">
          <div>
            <strong>KEEP</strong>
            <ul>{keeps.map((k) => <li key={k}><Check />{k}</li>)}</ul>
          </div>
          <div>
            <strong>FIX</strong>
            <ul>{fixes.map((f) => <li key={f}><Arrow />{f}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>

    {/* ---- 05 One-live-project centerpiece ---- */}
    <section className="bgc-pilot section-pad">
      <p className="section-index">05 / PROVE THE IMPACT BEFORE EXPANDING</p>
      <div className="bgc-pilot-panel">
        <h2>Do not begin with a company-wide software rollout.</h2>
        <p>Bring one workflow where missing information, an unclear responsibility or a late decision affects margin, cash, compliance or payment. Kortex will map the handoff, build the smallest useful improvement and test it with the people who already do the work.</p>
        <ol>{pilotSteps.map((s, i) => <li key={s}><span>0{i + 1}</span>{s}</li>)}</ol>
        <div className="actions"><a className="button" href="#workflow-form">Map one project workflow <Arrow /></a></div>
        <p className="bgc-reassure">ONE LIVE JOB <i>&middot;</i> ONE DEFINED HANDOFF <i>&middot;</i> NO COMPANY-WIDE COMMITMENT</p>
      </div>
    </section>

    {/* Proof section intentionally not rendered: no verified builder or GC
        evidence exists yet, and the Hot & Cold mechanical-subcontractor build
        cannot be presented as builder proof. See the doc's proof template. */}

    {/* ---- 06 FAQ ---- */}
    <section className="bgc-faq faq section-pad">
      <p className="section-index">06 / FREQUENTLY ASKED QUESTIONS</p>
      <h2>Straight answers before the working session.</h2>
      <div className="faq-grid">
        {faqs.map(([q, a], i) => (
          <details key={q} open={i === 0}>
            <summary><span>0{i + 1}</span>{q}<i /></summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>

    {/* ---- 07 Final CTA + form ---- */}
    <section className="bgc-final section-pad">
      <div className="grid-overlay" />
      <div className="bgc-final-head">
        <p className="eyebrow"><span /> 07 / START WITH THE HANDOFF YOU CANNOT SEE CLEARLY</p>
        <h2>Put one project workflow under company control.</h2>
      </div>
      <div className="bgc-final-grid">
        <div className="bgc-final-promise">
          <p>Bring one process being held together by spreadsheets, email or individual follow-up. We will map where it breaks, identify the smallest useful improvement and decide whether a custom system is justified.</p>
          <p>Common starting points: subcontractor readiness before mobilization, change exposure that never reaches a priced decision, approval routing, and the backup a pay app or closeout package depends on.</p>
          <a className="direct-call" href="tel:+13018898546">OR CALL (301) 889-8546</a>
          <p className="bgc-related">Self-performing or project-based contractor instead? See <a className="inline-link" href={v1("/construction-contractors")}>construction contractors <Arrow /></a> or <a className="inline-link" href={v1("/mep-contractors")}>MEP contractors <Arrow /></a>.</p>
        </div>
        <div className="bgc-form-wrap" id="workflow-form">
          <WorkflowSessionForm />
        </div>
      </div>
    </section>
  </>;
}
