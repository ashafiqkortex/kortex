import { v1 } from "./paths";
import { Arrow, Check } from "./icons";

// Kortex home — v11. Full rebuild against the approved copy-and-design doc
// "kortex-homepage-copy-and-design-v2 (1).md" (updated revision applied
// 26 Aug 2026). Every string below is verbatim from that doc's "Final
// public-facing copy". The v10 sections the doc removed (statement,
// capability grid, adoption panels, implementation table, comparison
// shift-list, Hot & Cold testimonial band, process) are gone with it. The FAQ
// is Section 9 of the doc — nine compact rows, answers rewritten there
// (QuickBooks answer is now hedged: "can connect... depends on the version").

// Internal review annotations and the unpublished proof section. The doc is
// explicit: never publish placeholders. Set to false before this page goes
// live — everything gated on this flag disappears cleanly.
const DRAFT_NOTES = false;

const workToday = [
  "The field, dispatch and office are working from different places.",
  "The same job details and hours are entered more than once.",
  "Someone has to chase every missing photo, signature or approval.",
  "You find out only after payroll or billing has already been held up.",
] as const;

const workWithKortex = [
  "The crew enters the job details once.",
  "The right information reaches dispatch, payroll and billing.",
  "Missing items go back to the person responsible.",
  "Only a decision, approval or problem costing money reaches you or your managers.",
] as const;

const builtModules = [
  ["01", "Job details from the field",
   "Capture daily reports, photos, labor, signatures and completed-work details while they are still fresh.",
   "/assets/module-field.png"],
  ["02", "Dispatch and scheduling",
   "Give dispatch one clear view of the work so schedule changes do not turn into a chain of calls.",
   "/assets/module-dispatch.png"],
  ["03", "Time and payroll",
   "Get hours coded to the right job and corrected before payroll day, including certified payroll when required.",
   "/assets/module-payroll.png"],
  ["04", "Change work and approvals",
   "Record extra work and get the right approval before it becomes a dispute or a forgotten bill.",
   "/assets/module-approvals.png"],
  ["05", "Billing and owner view",
   "See what is ready to bill, what is being held up and exactly what needs your attention.",
   "/assets/module-dashboard.png"],
] as const;

const founderOutcomes = [
  ["Take on more work without matching office overhead",
   "Adding another crew or project should not require the same increase in paperwork, follow-up and office staff."],
  ["Spend your time on hiring, margins and growth",
   "Use your time to make the decisions that grow the company instead of answering questions in the middle of every job."],
  ["Let your managers own the day-to-day",
   "The next step no longer lives only in your head. Your managers can see what is waiting, who owns it and when to bring you in."],
  ["Take a day off without paying for it later",
   "The work keeps moving while you are away instead of becoming a pile of calls and decisions waiting for you."],
] as const;

// Section 9 of the doc — nine compact accordion rows, copy verbatim.
const faqs = [
  ["Is Kortex software or a consulting company?",
   "Kortex is a systems company. We first understand how the work gets done, then build and connect the system that fixes it. You get something running in your business—not a strategy deck or another off-the-shelf subscription."],
  ["Do we own what you build?",
   "Yes. You own the code, prompts, accounts and business data. The system is built in your environment so you are not locked into Kortex to keep using it."],
  ["Will it work with QuickBooks?",
   "Yes. We can connect job, time, project and invoice information with QuickBooks. The exact setup depends on the QuickBooks version you use and what information needs to move."],
  ["Do we have to replace the software we already use?",
   "No. If a tool is doing its job, we keep it. We connect the steps around it and replace software only when it costs more than it helps or cannot support the way your business works."],
  ["How long does it take, and how much of our time does it need?",
   "You should see the first working piece in about two weeks. Most focused systems can go live in 4–8 weeks. We need a few working sessions, access to the right systems and honest feedback from the people who will use it; Kortex handles the build."],
  ["How do you get field crews to actually use it?",
   "We do not ask the field to become data-entry staff. We ask only for the information the office needs, make it quick to enter and test it with a small group on real jobs. If it slows the crew down, we fix it before rolling it out."],
  ["Can you handle prevailing wage and certified payroll?",
   "Yes. We can build the system to capture hours by job and classification, catch missing information and prepare the records your payroll team needs for prevailing-wage and certified-payroll work."],
  ["What does it cost?",
   "It depends on what needs to be fixed and what already exists. The free audit identifies the smallest useful first build and the likely savings. You receive a clear scope and price before any paid work begins."],
  ["Are we too small for this?",
   "Possibly—and we will tell you. Kortex is a good fit when the same process happens often enough that the paperwork, delay or software cost is already more expensive than fixing it. If a simpler tool is the better answer, we will recommend that instead."],
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/* The free workflow audit itself (internal delivery note from the doc — not
   page copy): identify one process with repeated chasing, correction, delay or
   owner involvement; estimate the labor time, billing delay, avoidable
   correction or lost capacity attached to it; decide whether the likely return
   justifies a change; recommend the smallest useful first fix. Never promise an
   exact savings figure before the company shares volume, labor cost and
   timing — the page deliberately says "estimate what it may be costing". */

export default function KortexHomeV11() {
  return <>

    {/* Section 1 — Hero (direction 1B: compressed, orbit as a labeled system
        mark, stat band). The 10+ companies and 4-to-1 tools numbers are NOT
        verified yet — Bharathi expects to have them; they stay behind
        DRAFT_NOTES until confirmed. $500K is approved copy. */}
    <section className="hero" id="top">
      <div className="grid-overlay"/>
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow"><span/> OPERATIONS SYSTEMS BUILT FOR CONTRACTORS</p>
          <h1>Build a business<br/>that can<br/>grow <em>without<br/>depending on you.</em></h1>
          <div className="hero-lede">
            <p>Kortex turns the paperwork, double entry and follow-up between your field and office into one system your team can run. Keep what works. Replace what doesn&rsquo;t. Take on more jobs without adding the same office overhead.</p>
          </div>
          <div className="actions">
            <a className="button" href={v1("/contact")}>Book my free workflow audit <Arrow/></a>
          </div>
        </div>
        <div className="system-map" aria-label="Kortex connects the field, office, payroll and billing around your operation as one system">
          <svg className="map-arcs" viewBox="0 0 620 500" aria-hidden="true">
            <defs><marker id="map-ah" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#f0a020" stroke="none"/></marker></defs>
            <g fill="none" stroke="#f0a020" strokeWidth="1.4" opacity=".62">
              <path d="M367.2 74.1A185 185 0 0 1 485.9 192.8" markerEnd="url(#map-ah)"/>
              <path d="M485.9 307.2A185 185 0 0 1 367.2 425.9" markerEnd="url(#map-ah)"/>
              <path d="M252.8 425.9A185 185 0 0 1 134.1 307.2" markerEnd="url(#map-ah)"/>
              <path d="M134.1 192.8A185 185 0 0 1 252.8 74.1" markerEnd="url(#map-ah)"/>
            </g>
          </svg>
          <i className="map-ring" aria-hidden="true"/>
          <div className="map-core"><strong>YOUR<br/>OPERATION</strong><small>ONE SYSTEM</small></div>
          <div className="map-node top"><span>Field</span><small>Hours, photos, job notes</small></div>
          <div className="map-node right"><span>Office</span><small>Scheduling, approvals</small></div>
          <div className="map-node bottom"><span>Payroll</span><small>Timesheets, job costs</small></div>
          <div className="map-node left"><span>Billing</span><small>Invoices, change orders</small></div>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat"><strong>$500K</strong><span>SAVED</span></div>
        {/* 10+ and 4->1 are provisional (Bharathi, 27 Aug: numbers expected;
            confirm before paid traffic). */}
        <i/><div className="stat"><strong>10+</strong><span>COMPANIES</span></div><i/><div className="stat"><strong>4 &rarr; 1</strong><span>TOOLS REPLACED</span></div>
      </div>
    </section>

    {/* Section 2 — The operational problem (photo-led 1C, half height).
        Bridge line rendered as text under the headline rather than the mock's
        filled amber block — amber stays reserved for actions. */}
    <section className="problem section-pad">
      <p className="section-index kicker-ruled"><span/>EVERY CONTRACTOR HITS ONE OF THESE<span/></p>
      <h2>Which one sounds like <em>your business</em> today?</h2>
      <p className="bridge-line">Whether you want to take on more work or take your time back, the business cannot keep depending on you to hold it together.</p>
      <div className="scenario-cards">
        <article>
          <div className="scenario-photo"><img src="/assets/scenario-growth.png" alt="Contractor working late over paperwork in a jobsite office"/><span>SCENARIO 01</span><h4>We have the work. But we can&rsquo;t keep growing like this.</h4></div>
          <div className="scenario-body"><p>Every new job means more paperwork, more follow-up and another reason to add office staff. The work is getting done, but too much time and margin are lost getting it ready to bill.</p></div>
          <a href={v1("/contact")}>That&rsquo;s us <Arrow/></a>
        </article>
        <article>
          <div className="scenario-photo"><img src="/assets/scenario-stepaway.png" alt="Owner taking a call at dusk on an active jobsite"/><span>SCENARIO 02</span><h4>If I step away, things start backing up.</h4></div>
          <div className="scenario-body"><p>Your team can handle the work, but missing details, questions and approvals still wait for you. Even a day away leaves a pile of calls and decisions to come back to.</p></div>
          <a href={v1("/contact")}>That&rsquo;s us <Arrow/></a>
        </article>
      </div>
    </section>

    {/* Section 3 — The connecting layer */}
    <section className="connect section-pad" id="connect">
      <div className="grid-overlay soft"/>
      <div className="connect-lead">
        <div>
          <p className="section-index amber">FROM THE FIELD TO THE OFFICE</p>
          <h2>Get every job to billing without all the chasing.</h2>
          <p className="connect-support">We start with how your team works today. If a tool is doing its job, it stays. If work keeps falling into spreadsheets, texts or someone&rsquo;s memory, we fix that gap. Then we automate the handoffs your people are doing by hand.</p>
          <div className="entry-paths">
            <p><strong>Already have software that works?</strong> We move the job information between your tools without someone entering it again.</p>
            <p><strong>Outgrown the current setup?</strong> We build the missing system around the way your field and office already work.</p>
          </div>
        </div>
        {/* Layer diagram: existing tools as the base, the Kortex automation
            layer above them, only decisions reaching the owner at the top. */}
        <div className="layer-diagram" aria-label="The Kortex automation layer sits above your existing tools; only approvals, decisions and exceptions reach the owner">
          <div className="layer top"><span>APPROVALS, DECISIONS + EXCEPTIONS</span><small>REACH YOU OR YOUR MANAGERS</small></div>
          <i className="layer-flow"/>
          <div className="layer kortex"><span>KORTEX AUTOMATION LAYER</span><small>SYNCING &middot; ROUTING &middot; FOLLOW-UP</small></div>
          <i className="layer-flow up"/>
          <div className="layer base"><span>YOUR EXISTING TOOLS + PROCESSES</span><small>FIELD &middot; DISPATCH &middot; PAYROLL &middot; BILLING</small></div>
          <div className="path-labels"><span>CONNECT WHAT ALREADY WORKS</span><span>BUILD WHAT IS MISSING</span></div>
        </div>
      </div>
      <div className="connect-compare">
        <div className="compare-col today">
          <h3>How the work happens today</h3>
          <ul>{workToday.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
        <div className="compare-col with-kortex">
          <h3>How the work happens with Kortex</h3>
          <ul>{workWithKortex.map((t) => <li key={t}><Check/>{t}</li>)}</ul>
        </div>
      </div>
      <p className="connect-outcome">Fewer office hours are spent chasing paperwork. Jobs are ready to bill sooner. Your team can handle more work without adding the same overhead.</p>
    </section>

    {/* Section 4 — What Kortex builds */}
    <section className="modules section-pad" id="modules">
      <div className="split-heading">
        <div>
          <p className="section-index">START WHERE THE MONEY GETS HELD UP</p>
          <h2>Fix the part of the job your team is still doing by hand.</h2>
        </div>
        <p>Kortex builds only the part your operation needs first. It can work with the software you already have or replace something that costs more than it helps.</p>
      </div>
      <div className="module-grid">{builtModules.map(([n, t, c, image], i) => <article className={i === 0 ? "module-card featured" : "module-card"} key={n}>
        <div className="module-preview" aria-label={`${t} concept interface`}><img src={image} alt={`${t} interface concept`}/></div>
        <div className="module-copy"><span>{n}</span><h3>{t}</h3><p>{c}</p></div>
      </article>)}</div>
      <p className="module-close">Start with the process causing the most delay or cost. Add more only when it pays.</p>
      <aside className="adoption-note">
        <strong>BUILT FOR THE PEOPLE WHO ACTUALLY USE IT</strong>
        <p>If the field and office will not use it, it will not save anything. We test it on real jobs and fix what slows people down before rolling it out further.</p>
      </aside>
    </section>

    {/* In-page CTA 1 */}
    <section className="cta-band">
      <div>
        <h2>What does your office have to chase every day?</h2>
        <p>Show us one repeated process. We&rsquo;ll estimate how much time it takes and whether fixing it is likely to pay for itself.</p>
      </div>
      <a className="button" href={v1("/contact")}>Book my free workflow audit <Arrow/></a>
    </section>

    {/* Section 5 — Who Kortex builds for */}
    <section className="industries section-pad" id="industries">
      <div className="split-heading">
        <div>
          <p className="section-index">BUILT FOR CONTRACTOR-LED BUSINESSES</p>
          <h2>Your company has grown. The way the work gets done has not.</h2>
        </div>
        <p>Kortex is for established contractors with good people and steady work who are losing time and margin in the handoffs between the field and office.</p>
      </div>
      <div className="industry-grid">
        <article className="industry-card">
          <div className="industry-photo"><img src="/assets/mep-field.png" alt="Mechanical technician inspecting equipment in a commercial mechanical room"/></div>
          <h3>Mechanical, electrical and plumbing contractors</h3>
          <p>Get service calls from dispatch to completed paperwork, payroll and billing without the office chasing technicians.</p>
          <a href={v1("/mep-contractors")}>Explore MEP systems <Arrow/></a>
        </article>
        <article className="industry-card">
          <div className="industry-photo"><img src="/assets/gc-field.png" alt="General contractor superintendent reviewing blueprints on an active commercial construction site"/></div>
          <h3>Builders and general contractors</h3>
          <p>Keep change work, approvals, job costs and pay applications from getting lost between the field and office.</p>
          <a href={v1("/builders-and-general-contractors")}>Explore builder &amp; GC systems <Arrow/></a>
        </article>
      </div>
    </section>

    {/* Section 6 — Founder outcome */}
    <section className="founder section-pad">
      <div className="split-heading">
        <div>
          <p className="section-index amber">WHAT THIS GIVES YOU</p>
          <h2>Finally, you have time to work on the business again.</h2>
        </div>
        <p>The work gets billed sooner. The office spends less time chasing. You need fewer hours to push the same amount of work through. The payoff is more room to grow&mdash;and more time to decide where the business goes next.</p>
      </div>
      <div className="founder-grid">{founderOutcomes.map(([t, c], i) => <article key={t}>
        <span>0{i + 1}</span><h3>{t}</h3><p>{c}</p>
      </article>)}</div>
    </section>

    {/* In-page CTA 2 */}
    <section className="cta-band">
      <div>
        <h2>What would you work on if the daily follow-up stopped reaching you?</h2>
        <p>Start by finding the process costing you the most time and money.</p>
      </div>
      <a className="button" href={v1("/contact")}>Book my free workflow audit <Arrow/></a>
    </section>

    {/* Section 7 — Proof. The doc: "It should contain one genuine contractor
        story or remain hidden" and "Never publish placeholders." The required
        assets (real company name and logo, photograph of the owner/team/
        jobsite, a workflow screenshot, one verified result) are not approved
        yet, so the whole section stays behind DRAFT_NOTES. The Hot & Cold
        measured facts from v10 (5–6 hrs/week on timesheets and tickets gone;
        1 hr every Monday retyping paper gone; 0 spreadsheets running the
        office; naming and quotations cleared 25 Aug 2026) are the obvious
        genuine story to slot into this template once the photo and workflow
        screenshot exist. */}
    {DRAFT_NOTES && <section className="proof-draft section-pad">
      <div className="draft-flag">INTERNAL — HIDDEN UNTIL A REAL CONTRACTOR STORY IS READY. NEVER PUBLISH PLACEHOLDERS.</div>
      <p className="section-index">ONE WORKFLOW IN PRACTICE</p>
      <h2>How [client] stopped pulling the owner into [specific recurring process].</h2>
      <div className="proof-template">
        <p><strong>Before —</strong> [Describe what kept reaching the founder, how often it happened and what it delayed.]</p>
        <p><strong>What Kortex changed —</strong> [Name the exact workflow, system or connection Kortex built.]</p>
        <p><strong>Result —</strong> [Use one verified result that matters to the founder: fewer hours personally involved, faster billing, more capacity or reduced dependence on one key person.]</p>
        <blockquote>&ldquo;[A short quote from the owner or operations lead about what changed in the workday.]&rdquo;</blockquote>
        <p className="proof-assets">REQUIRED BEFORE PUBLISHING: real company name and logo &middot; photograph of the owner, team or jobsite &middot; one screenshot of the relevant workflow &middot; one verified operational or financial result. Product screenshots show capability; this case study must show consequence.</p>
      </div>
    </section>}

    {/* Section 8 — The Kortex difference */}
    <section className="difference section-pad">
      <div className="difference-lead">
        <div>
          <p className="section-index">THE KORTEX DIFFERENCE</p>
          <h2>We&rsquo;ve helped companies save more than <em>$500K</em> by cutting manual work and unnecessary software costs.</h2>
        </div>
        <div className="difference-copy">
          <p className="big-number" aria-hidden="true"><strong>$500K+</strong><span>SAVED</span></p>
          <p>Those savings came from hours people no longer spent entering the same information twice, chasing missing details and working around software that did not fit.</p>
          <p>Kortex fixes the way work moves from the jobsite to the office to billing. We keep the tools that earn their place, automate the follow-up people are doing by hand and replace what adds cost without helping the team.</p>
        </div>
      </div>
      <div className="difference-diagram" aria-hidden="true">
        <span>MIX OF TOOLS + MANUAL WORK</span><i/><span className="diagram-core">ONE CONNECTED KORTEX SYSTEM</span><i/><span>LOWER-COST OPERATION</span>
      </div>
      <div className="value-blocks">
        <article><h3>Built around the way your jobs run</h3><p>Your team gets a system that follows the job instead of forcing every job through a process that does not fit.</p></article>
        <article><h3>Fewer office hours on every job</h3><p>Job details reach the next person without repeated entry, reminder calls or owner follow-up.</p></article>
        <article><h3>Lower software and admin cost</h3><p>Keep only the tools that earn their place and remove the manual work they leave between them.</p></article>
      </div>
      <p className="difference-close">The result is simple: more work gets through with fewer office hours and less owner involvement.</p>
      <a className="support-link" href={v1("/servicetitan-alternative")}>Using ServiceTitan? See when to keep, extend or replace it <Arrow/></a>
    </section>

    {/* Section 9 — FAQ. Compact rows, closed by default, one open at a time
        (native exclusive accordion via the shared name attribute). */}
    <section className="faq faq-dark section-pad" id="faq">
      <div className="split-heading"><div><p className="section-index">STRAIGHT ANSWERS</p><h2>Questions owners ask before they call us.</h2></div></div>
      <div className="faq-grid">{faqs.map(([q, a], i) => <details key={q} name="faq"><summary><span>0{i + 1}</span>{q}<i/></summary><p>{a}</p></details>)}</div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </section>

    {/* Section 10 — Final CTA */}
    <section className="contact" id="contact">
      <div className="grid-overlay soft"/>
      <p className="eyebrow"><span/> FREE WORKFLOW AUDIT</p>
      <h2>Not sure what all the daily chasing is costing you?</h2>
      <p>Walk us through one process that keeps getting held up or coming back to you. We&rsquo;ll estimate what it is costing and show you the first practical way to fix it.</p>
      <div className="contact-actions">
        <a className="button" href={v1("/contact")}>Book my free workflow audit <Arrow/></a>
        <a className="direct-call plain" href="tel:+13018898546">Prefer to talk? Call (301) 889-8546</a>
      </div>
      <p className="reassurance">No preparation. Just tell us how the work gets done today.</p>
    </section>
  </>;
}
