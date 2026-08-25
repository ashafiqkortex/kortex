import type { Metadata } from "next";
import { v1 } from "@/components/v1/paths";
import { Arrow, Check } from "@/components/v1/icons";
import "./mep.css";

export const metadata: Metadata = {
  title: "Operations Systems for MEP Contractors | Kortex",
  description:
    "Connect dispatch, technicians, job records, payroll and billing in one operations system built around the way your MEP company already works.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://kortexconsulting.com/mep-contractors" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Operations Systems for MEP Contractors",
  serviceType: "Custom operations systems for mechanical, electrical and plumbing contractors",
  url: "https://kortexconsulting.com/mep-contractors",
  provider: {
    "@type": "ProfessionalService",
    name: "Kortex Consulting",
    url: "https://kortexconsulting.com",
    telephone: "+1-301-889-8546",
    email: "hello@kortexconsulting.com",
  },
};

const breakdowns = [
  "Dispatch changes live in calls, texts and individual memory.",
  "Technicians return different levels of job detail.",
  "Labor, material and equipment information gets entered more than once.",
  "Payroll and compliance exceptions are found when the deadline is already close.",
  "Completed work waits for someone to make the record invoice-ready.",
  "The owner or office manager gets pulled into every exception because only a few people know how the process fits together.",
];

const chain = [
  ["Dispatch starts with the complete job", "The technician receives the customer, site, asset, scope and job requirements in one place."],
  ["The technician closes the job once", "Notes, photos, labor, materials and customer approval are captured while the work is still fresh."],
  ["Missing information is caught immediately", "The system flags what is incomplete before the job disappears into an inbox or spreadsheet."],
  ["Payroll and compliance receive the right record", "Hours, classifications and required documentation follow the correct review path."],
  ["The office receives an invoice-ready job", "Approved information moves into QuickBooks or the accounting process without another round of reconstruction."],
];

const modules = [
  ["FIELD SERVICE", "The technician closes the job once. The office gets everything it needs.", "A field service workflow can give technicians one clear place to receive work, document service, capture approvals and return a complete job record.", "Fewer missing details, faster review and a shorter path to billing."],
  ["DISPATCH", "Schedule changes stop living in five different places.", "A dispatch workflow can bring technician availability, job status, urgent changes and exceptions into one operational view.", "Better coordination without relying on calls, whiteboards and memory."],
  ["LABOR & COMPLIANCE", "Payroll problems become visible before payroll day.", "A labor and compliance workflow can connect field time, classifications, approvals and missing records before they become a last-minute correction.", "Cleaner review and fewer surprises around payroll and certified-payroll reporting."],
  ["BILLING READINESS", "Completed work stops waiting for paperwork.", "A billing-readiness workflow can show exactly what is missing and move approved job information into the accounting process.", "Less double entry and less revenue trapped behind incomplete documentation."],
];

const pilot = [
  ["Map the real process", "We follow the job through the calls, texts, spreadsheets and exceptions that do not appear in the official procedure."],
  ["Choose one measurable breakdown", "We agree on where time, information or billing momentum is being lost — and what improvement should look like."],
  ["Build the smallest useful system", "The first module solves one defined operational problem without forcing a company-wide change."],
  ["Pilot it with the field and office", "A small group uses it on real work. Their feedback shapes the workflow before rollout."],
  ["Expand only after it works", "Once the first workflow is useful and adopted, the next part of the operation can be connected."],
];

const pilotChecks = [
  "Fewer steps than the process it replaces",
  "Works from the devices the crew already carries",
  "Shows only what that person needs at that moment",
  "Tested on real jobs before company-wide rollout",
];

const questions = [
  "Which workflow is slowing the company down?",
  "How many people touch it?",
  "What usually goes missing, gets repeated or arrives late?",
  "What does the breakdown delay or cost?",
  "Who should join the working session?",
];

export default function MepContractorsPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

    <section className="mepx-hero">
      <div className="grid-overlay" />
      <p className="eyebrow"><span /> OPERATIONAL SYSTEMS FOR MEP CONTRACTORS</p>
      <h1>Add more field capacity. <em>Not more office chaos.</em></h1>
      <p className="mepx-lede">Connect dispatch, technicians, job records, payroll and billing in one system built around the way your company already works.</p>
      <div className="actions"><a className="button" href={v1("/contact")}>Map one workflow with us <Arrow /></a></div>
      <p className="mepx-cta-note">Start with the process creating the most chasing, correction or delay.</p>
      <div className="mepx-trust"><span>BUILT AROUND YOUR OPERATION · TESTED WITH YOUR CREW · OWNED BY YOUR COMPANY</span></div>
    </section>

    <section className="mepx-problem section-pad">
      <p className="section-index">THE JOB IS COMPLETE. WHY ISN&rsquo;T IT READY TO BILL?</p>
      <div className="mepx-problem-grid">
        <div className="mepx-problem-copy">
          <h2>The field finishes the work. The office still has to reconstruct what happened.</h2>
          <p>A missing photo. Unclear service notes. Labor hours that need correction. A customer approval sitting in a text thread.</p>
          <p>None of these looks serious alone. Across hundreds of jobs, they keep the office chasing information and completed work waiting to be invoiced.</p>
          <p>And every time you add another technician, service agreement or project, the same gaps create more administrative work.</p>
        </div>
        <div>
          <ul className="mepx-breakdown">{breakdowns.map((b, i) => <li key={b}><span>0{i + 1}</span>{b}</li>)}</ul>
          <p className="mepx-verdict">Your people are not the problem. The workflow is asking them to hold the system together manually.</p>
        </div>
      </div>
    </section>

    <section className="mepx-flow section-pad">
      <div className="split-heading">
        <div><p className="section-index amber">FROM SERVICE REQUEST TO INVOICE-READY</p><h2>One job. One connected record.</h2></div>
        <p>The information should move with the work — not get rebuilt by the office afterward.</p>
      </div>
      <ol className="mepx-chain">{chain.map(([t, c], i) => <li key={t}><span>0{i + 1}</span><div><h3>{t}</h3><p>{c}</p></div></li>)}</ol>
      <p className="mepx-closer">Less technician chasing. Less office correction. Less completed work sitting between the field and the invoice.</p>
    </section>

    <section className="mepx-modules section-pad">
      <div className="split-heading">
        <div><p className="section-index">START WITH THE BREAKDOWN THAT COSTS THE MOST</p><h2>Build the missing operational layer between your field and office.</h2></div>
        <p>Kortex does not begin with a fixed package of software features. We follow how work moves through your company, find where information or time is being lost, and build the first working module around that problem.</p>
      </div>
      <div className="mepx-module-grid">{modules.map(([tag, t, c, fx]) => <article key={tag}>
        <span>{tag}</span><h3>{t}</h3><p>{c}</p>
        <div className="mepx-effect"><strong>BUSINESS EFFECT</strong><p>{fx}</p></div>
      </article>)}</div>
      <div className="actions"><a className="button" href={v1("/contact")}>Find your first module <Arrow /></a></div>
    </section>

    <section className="mepx-growth section-pad">
      <div className="mepx-growth-copy">
        <p className="section-index amber">GROWTH SHOULD NOT CREATE THE SAME GROWTH IN ADMINISTRATION</p>
        <h2>Let the same office team support more field work.</h2>
        <p>Adding a technician should feel like added capacity. Too often, it means more calls, more corrections and more information for the office to chase.</p>
        <p>That is when the owner starts wondering whether every new truck also requires another coordinator behind a desk.</p>
        <p>Kortex helps turn the knowledge held by a few experienced people into a repeatable workflow — so the company can grow without making those people the permanent connection between every department.</p>
      </div>
      <aside className="mepx-proof">
        <span className="mepx-proof-label">CLIENT ESTIMATE — NOT YET MEASURED</span>
        <div className="mepx-proof-figures">
          <div><strong>10</strong><small>TECHNICIANS TODAY,<br />NEAR CAPACITY</small></div><i />
          <div><strong>20&ndash;30</strong><small>THE SAME OFFICE TEAM<br />COULD SUPPORT</small></div>
        </div>
        <p>One mechanical contractor operating near capacity at 10 technicians estimated that the redesigned workflow could allow the same office team to support 20&ndash;30.</p>
        <p><span className="ph">[CLIENT NAME, ROLE AND APPROVAL REQUIRED. LABEL THIS AS A CLIENT ESTIMATE UNTIL MEASURED.]</span></p>
      </aside>
    </section>

    <section className="mepx-pilot section-pad">
      <div className="split-heading">
        <div><p className="section-index">IF THE FIELD WILL NOT USE IT, IT DOES NOT WORK</p><h2>Prove one workflow with the people who actually use it.</h2></div>
        <p>Your technicians should see fewer steps and less duplicate work — not another office system pushed onto the crew. That is why Kortex begins with one workflow and a small group of real users. We build the first working piece, test it on real jobs and fix the friction before asking the rest of the company to change.</p>
      </div>
      <ol className="mepx-pilot-steps">{pilot.map(([t, c], i) => <li key={t}><span>0{i + 1}</span><h3>{t}</h3><p>{c}</p></li>)}</ol>
      <div className="mepx-pilot-foot">
        <ul className="mepx-checks">{pilotChecks.map((c) => <li key={c}><Check />{c}</li>)}</ul>
        <aside><strong>BEFORE YOU DECIDE ANYTHING</strong><p>Spend five minutes looking at the workflow with the person who would use it most.</p></aside>
      </div>
      <div className="actions"><a className="button" href={v1("/contact")}>Bring your field lead <Arrow /></a></div>
    </section>

    <section className="mepx-case section-pad">
      <div className="mepx-case-label"><span>CLIENT WORK</span><span>MECHANICAL CONTRACTOR</span></div>
      <div className="mepx-case-grid">
        <div className="mepx-case-media">
          <div className="mepx-case-photo"><span className="ph">[REAL CLIENT PHOTO]</span></div>
          <div className="mepx-case-person"><span className="ph">[FULL NAME]</span><small><span className="ph">[ROLE]</span>, <span className="ph">[COMPANY]</span></small></div>
        </div>
        <div>
          <h2>From an owner-held process to a repeatable service operation.</h2>
          <div className="mepx-case-block"><span>CONTEXT</span><p><span className="ph">[MECHANICAL CONTRACTOR]</span> had reached the point where adding field capacity also increased the coordination burden on the office. Critical job information moved through calls, messages and the knowledge of a few experienced people.</p></div>
          <div className="mepx-case-block"><span>WHAT KORTEX CHANGED</span><p>Kortex mapped the service workflow, found where information failed to return from the field, and built a connected process from job assignment through documentation and office review.</p></div>
          <div className="mepx-case-block"><span>RESULT</span><p><span className="ph">[INSERT ONE VERIFIED RESULT: FASTER BILLING, LOWER ADMIN TIME, FEWER INCOMPLETE JOB RECORDS OR A CLEARLY LABELED CAPACITY ESTIMATE.]</span></p></div>
          <blockquote>&ldquo;<span className="ph">[INSERT A SPECIFIC QUOTE ABOUT THE PREVIOUS OPERATION, WHAT CHANGED AND WHAT THE COMPANY CAN NOW DO.]</span>&rdquo;</blockquote>
          <a className="mepx-case-link" href={v1("/case-studies/hot-and-cold")}>See how the workflow changed <Arrow /></a>
        </div>
      </div>
    </section>

    <section className="contact mepx-contact">
      <div className="grid-overlay" />
      <p className="eyebrow"><span /> DO NOT START WITH A SOFTWARE SHOPPING LIST</p>
      <h2>Let&rsquo;s improve one workflow first.</h2>
      <p>Bring us the process creating the most chasing, correction or delay. We will map how it moves today, find the first useful improvement and show you what a working system could look like.</p>
      <div className="contact-actions">
        <a className="button" href={v1("/contact")}>Map one workflow with us <Arrow /></a>
        <a className="direct-call" href="tel:+13018898546">Or call (301) 889-8546</a>
      </div>
      <div className="mepx-questions">
        <strong>Where does the workflow break?</strong>
        <ol>{questions.map((q, i) => <li key={q}><span>0{i + 1}</span>{q}</li>)}</ol>
      </div>
    </section>
  </>;
}
