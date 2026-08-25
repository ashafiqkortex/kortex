import type { Metadata } from "next";
import { v1 } from "@/components/v1/paths";
import { Arrow, Check } from "@/components/v1/icons";
import "./construction.css";

export const metadata: Metadata = {
  title: "Operations Systems for Construction Contractors | Kortex",
  description:
    "Connect field records, change work, approvals, cost exposure and billing in one operations system built around the way your construction company works.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://kortexconsulting.com/construction-contractors" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Operations Systems for Construction Contractors",
  serviceType: "Custom operations software and workflow systems",
  description:
    "Connect field records, change work, approvals, cost exposure and billing in one operations system built around the way your construction company works.",
  url: "https://kortexconsulting.com/construction-contractors",
  provider: {
    "@type": "ProfessionalService",
    name: "Kortex Consulting",
    url: "https://kortexconsulting.com",
    telephone: "+1-301-889-8546",
  },
  audience: { "@type": "BusinessAudience", name: "Construction contractors" },
};

const breakdowns = [
  "Daily field information arrives late or cannot drive the next decision.",
  "Change work begins before scope, labor, evidence and approval are connected.",
  "Project managers maintain private trackers outside the company process.",
  "Cost exposure appears after commitments have already been made.",
  "Compliance documents are chased only when a submission or payment depends on them.",
  "Billing waits for backup scattered across email, folders and software.",
  "The owner learns about the issue in a review meeting after the moment to act has passed.",
];

const flow = [
  ["Capture the event on site", "The field records the condition, direction, work, labor, equipment and supporting evidence while it is happening."],
  ["Connect it to the contract and scope", "The event is tied to the relevant work package, requirement, responsible party and project record."],
  ["Route the next decision", "The right PM, operations lead or commercial reviewer sees what happened and what action is required."],
  ["Make the exposure visible", "Potential cost, extra work and change status are visible before they disappear into the rest of the project."],
  ["Move the approved record forward", "The complete information follows the billing, compliance or closeout path without being rebuilt again."],
];

const modules = [
  ["Extra work becomes a complete commercial record.",
   "A change-work workflow can connect the field direction, scope, labor, equipment, photos, pricing status and approval history.",
   "Stronger backup, clearer ownership and less recoverable work disappearing between the site and commercial team."],
  ["Field reports trigger action — not storage.",
   "An exception workflow can route safety, quality, delay, scope and coordination issues to the person responsible for the next decision.",
   "Important events are seen while the team can still respond."],
  ["Approvals stop getting trapped in inboxes.",
   "A project decision workflow can make the open item, responsible person, deadline and approval history visible in one place.",
   "Less ambiguity and fewer decisions waiting silently inside email."],
  ["Leadership sees exposure before month-end.",
   "A project-health workflow can bring pending changes, commitments, missing information and billing risks into one focused view.",
   "Earlier intervention on the projects that need attention."],
  ["Billing and closeout stop depending on a final scramble.",
   "A readiness workflow can track the documents, approvals and backup required before an invoice, payment application or closeout package can move.",
   "Less last-minute chasing and a more dependable path to cash."],
];

const keeps = [
  "Existing software stays where it remains the right answer.",
  "The workflow follows your roles, approvals and exceptions.",
  "Your company owns the system built for its operation.",
  "One accountable team maps, builds, launches and supports it.",
];

const pilot = [
  ["Follow the real process", "We map the side conversations, spreadsheets and exceptions that do not appear in the written procedure."],
  ["Define the first business outcome", "We agree on what is being lost and what evidence would show the workflow is improving."],
  ["Build the smallest working system", "The first module connects only the people, information and decision required to solve that problem."],
  ["Pilot it on a live project", "A small group uses it under real conditions. We remove friction before broader rollout."],
  ["Standardize only what works", "Once proven, the workflow can expand across projects, roles or connected processes."],
];

const roles = [
  "The field sees only what it needs to record.",
  "PMs see decisions, exceptions and financial implications together.",
  "Accounting receives approved information consistently.",
  "Leadership sees the issues requiring intervention — not every project detail.",
];

const fits = [
  "Multiple project teams need to follow one dependable process.",
  "Field information affects cost, change control, billing or compliance.",
  "Important workflows depend on specific people knowing what to do next.",
  "Existing software stores information but does not connect the operation.",
  "Leadership wants earlier visibility without creating another reporting burden.",
  "The company is willing to involve real users in mapping and testing the workflow.",
];

const questions = [
  "Which project workflow creates the most delay or uncertainty?",
  "Which roles touch it?",
  "Where does information usually go missing or arrive late?",
  "What business outcome does that affect?",
  "Which PM, superintendent or operations leader should join the session?",
];

export default function ConstructionContractorsPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

    <section className="conx-hero">
      <div className="grid-overlay" />
      <div className="conx-hero-copy">
        <p className="eyebrow"><span /> OPERATIONAL SYSTEMS FOR CONSTRUCTION CONTRACTORS</p>
        <h1>See margin problems while there is <em>still time to act.</em></h1>
        <p className="conx-lede">Connect field records, change work, approvals, cost exposure and billing in one dependable project workflow.</p>
        <div className="actions"><a className="button" href={v1("/contact")}>Map one project workflow <Arrow /></a></div>
        <p className="conx-cta-note">Start where information arrives too late to protect the outcome.</p>
      </div>
      <div className="conx-trust"><span>BUILT AROUND YOUR OPERATION</span><i>·</i><span className="ph">TESTED WITH REAL CREWS</span><i>·</i><span>OWNED BY YOUR COMPANY</span></div>
    </section>

    <section className="conx-leak section-pad">
      <p className="section-index">THE JOBSITE KNOWS FIRST. THE BUSINESS OFTEN KNOWS LAST.</p>
      <div className="conx-leak-grid">
        <h2>Margin does not disappear in one dramatic moment.</h2>
        <div>
          <p>Extra work gets performed. The supporting record comes later. A field direction never becomes a priced change. One missing approval delays the billing package.</p>
          <p>By the time the financial report confirms the problem, the opportunity to prevent it — or recover it — may already be gone.</p>
          <p>And when every project manager uses a different spreadsheet, folder structure or personal system, leadership cannot see the same problem consistently across the business.</p>
        </div>
      </div>
      <ul className="conx-breaks">{breakdowns.map((b, i) => <li key={b}><span>0{i + 1}</span>{b}</li>)}</ul>
      <strong className="conx-takeaway">Your team does not need another place to enter data. It needs the right information to reach the right person before the decision becomes expensive.</strong>
    </section>

    <section className="conx-flow section-pad">
      <div className="split-heading">
        <div><p className="section-index amber">FROM FIELD EVENT TO FINANCIAL ACTION</p><h2>When something changes in the field, the business should not find out weeks later.</h2></div>
        <p>The photos, labor, scope, responsibility and approval should move together — not get reconstructed when someone finally asks what happened.</p>
      </div>
      <ol className="conx-steps">{flow.map(([t, c], i) => <li key={t}><span>0{i + 1}</span><h3>{t}</h3><p>{c}</p></li>)}</ol>
      <strong className="conx-takeaway">Better evidence. Earlier decisions. Less extra work and billing value disappearing between the site and the office.</strong>
    </section>

    <section className="conx-modules section-pad">
      <div className="split-heading">
        <div><p className="section-index">BUILD THE MISSING WORKFLOW BETWEEN YOUR EXISTING SYSTEMS</p><h2>Fix the handoff where the information loses its value.</h2></div>
        <p>Kortex does not ask the company to start over. We follow the work, identify where a project signal stops becoming a business action, and build the first module around that gap.</p>
      </div>
      <div className="conx-module-list">{modules.map(([t, c, e], i) => <article key={t}>
        <div className="conx-module-head"><span>0{i + 1}</span><h3>{t}</h3></div>
        <div><p>{c}</p><p className="conx-effect"><strong>BUSINESS EFFECT</strong>{e}</p></div>
      </article>)}</div>
      <div className="actions"><a className="button" href={v1("/contact")}>Find your first module <Arrow /></a></div>
    </section>

    <section className="conx-stack section-pad">
      <div className="conx-stack-grid">
        <div>
          <p className="section-index amber">THIS IS NOT A RIP-AND-REPLACE PROJECT</p>
          <h2>Keep Procore, QuickBooks and the tools that already do their job.</h2>
          <p>Most established contractors already have systems of record. The breakdown usually happens between them — what the field captures, what the PM tracks separately, what accounting needs and what leadership sees too late.</p>
          <p>Kortex builds the operational layer across those gaps. That may be an integration, a controlled handoff or a custom workflow for the part standard software does not fit.</p>
          <p>If an existing platform already solves the problem cleanly, we will say so. Custom work only makes sense when the workflow is too important or too specific to force into another workaround.</p>
        </div>
        <div>
          <ul className="conx-keeps">{keeps.map((k) => <li key={k}><Check />{k}</li>)}</ul>
          <p className="conx-verify"><span className="ph">[VERIFY NAMED INTEGRATIONS AND THE EXACT OWNERSHIP, HOSTING, SOURCE-CODE AND SUPPORT TERMS.]</span></p>
        </div>
      </div>
    </section>

    <section className="conx-pilot section-pad">
      <div className="split-heading">
        <div><p className="section-index">START WITH ONE PROJECT WORKFLOW</p><h2>Prove it on real work before making it a company standard.</h2></div>
        <p>Superintendents, project managers, accounting teams and executives do not need the same screen — or another company-wide system launched all at once.</p>
      </div>
      <p className="conx-pilot-lede">Kortex begins where delayed information, inconsistent process or missing accountability has a visible financial consequence. We build the smallest working system, pilot it on a real project and expand only after the people involved can see the value.</p>
      <div className="conx-pilot-grid">
        <ol className="conx-pilot-steps">{pilot.map(([t, c], i) => <li key={t}><span>0{i + 1}</span><div><h3>{t}</h3><p>{c}</p></div></li>)}</ol>
        <aside className="conx-roles">
          <strong>WHO SEES WHAT</strong>
          <ul>{roles.map((r) => <li key={r}><Check />{r}</li>)}</ul>
          <a className="button" href={v1("/contact")}>Bring a PM or superintendent <Arrow /></a>
        </aside>
      </div>
    </section>

    <section className="conx-case section-pad">
      <div className="conx-case-label"><span>CLIENT WORK</span><span>HOT &amp; COLD · COMMERCIAL MECHANICAL CONTRACTOR</span></div>
      <h2>From scattered project signals to one accountable workflow.</h2>
      <p className="conx-honest"><span className="ph">We haven&rsquo;t built for a construction contractor yet, and we&rsquo;ll say so on the first call. The build below is Hot &amp; Cold, a commercial mechanical contractor. The job runs the same way it did there. The pieces a builder needs on top of it don&rsquo;t exist yet.</span></p>
      <div className="conx-case-grid">
        <div className="conx-case-facts">
          <div><span>CONTEXT</span><p><span className="ph">Hot &amp; Cold, a commercial mechanical contractor,</span> was managing <span className="ph">a multimillion-dollar operation run on spreadsheets</span>. Important field information, approval status and commercial follow-up were split between <span className="ph">spreadsheets, calls and the knowledge of a few experienced people</span>.</p></div>
          <div><span>WHAT KORTEX CHANGED</span><p>Kortex followed the workflow from the site event through review and business action, then built a system that made missing information and the next responsibility visible.</p></div>
          <div><span>RESULT</span><p><span className="ph">[INSERT ONE VERIFIED RESULT: MORE CHANGE WORK CAPTURED, SHORTER REVIEW TIME, FEWER BILLING DELAYS, MORE COMPLETE RECORDS OR EARLIER RISK VISIBILITY.]</span></p></div>
        </div>
        <div className="conx-case-voice">
          <blockquote><span className="ph">&ldquo;[INSERT A SPECIFIC QUOTE ABOUT THE PREVIOUS BREAKDOWN, THE WORKFLOW CHANGE AND ITS BUSINESS EFFECT.]&rdquo;</span></blockquote>
          <div className="conx-person">
            <div className="conx-portrait"><span className="ph">[REAL CLIENT PHOTO]</span></div>
            <div><strong><span className="ph">[FULL NAME]</span></strong><p><span className="ph">[ROLE], [COMPANY]</span></p></div>
          </div>
          <a className="inline-link" href={v1("/case-studies/hot-and-cold")}>See how the workflow changed <Arrow /></a>
        </div>
      </div>
    </section>

    <section className="conx-fit section-pad">
      <div className="split-heading">
        <div><p className="section-index">BUILT FOR ESTABLISHED CONTRACTORS</p><h2>For operations that have outgrown spreadsheets, disconnected tools and personal workarounds.</h2></div>
      </div>
      <ul className="conx-fit-list">{fits.map((f, i) => <li key={f}><span>0{i + 1}</span>{f}</li>)}</ul>
      <div className="conx-notfit"><span>WHEN KORTEX IS NOT THE ANSWER</span><p>Kortex may not be the right answer if a standard product already solves the problem cleanly, the business wants software without improving the underlying process, or the people who use the workflow cannot participate in the pilot.</p></div>
    </section>

    <section className="conx-contact">
      <div className="grid-overlay" />
      <div className="conx-contact-grid">
        <div>
          <p className="eyebrow"><span /> DO NOT START WITH THE WHOLE COMPANY</p>
          <h2>Let&rsquo;s improve one project workflow first.</h2>
          <p>Bring us the process where information arrives too late, responsibilities become unclear or margin is exposed. We will map how it moves today, find the first useful improvement and show you what a working system could look like.</p>
          <div className="conx-contact-actions">
            <a className="button" href={v1("/contact")}>Map one project workflow <Arrow /></a>
            <a className="direct-call" href="tel:+13018898546">Or call (301) 889-8546</a>
          </div>
        </div>
        <aside className="conx-questions">
          <strong>WHERE DOES THE WORKFLOW BREAK?</strong>
          <ol>{questions.map((q, i) => <li key={q}><span>0{i + 1}</span>{q}</li>)}</ol>
        </aside>
      </div>
    </section>
  </>;
}
