import { Arrow, Check } from "./icons";

const capabilities = [
  ["01", "Field operations", "Job tickets, documentation, time capture and live field updates."],
  ["02", "Office workflows", "Scheduling, approvals, exceptions and the handoffs that keep work moving."],
  ["03", "Compliance", "Certified payroll, prevailing wage and the records behind every submission."],
  ["04", "Billing & visibility", "Complete job information, accounting handoffs and management dashboards."],
];

const outcomes = [
  ["More work", "Increase what the company can carry without increasing coordination at the same rate."],
  ["Faster billing", "Move complete information from the field to the office while the job is still fresh."],
  ["Fewer dependencies", "Turn repeated decisions into workflows the whole team can follow."],
  ["Earlier visibility", "See missing information, delayed approvals and unbilled work before they become expensive."],
];

const builtModules = [
  ["01", "Field service portal", "A structured record of every visit—work completed, materials, photos, signatures and the details the office needs next.", "/assets/module-field.png"],
  ["02", "Dispatch & scheduling", "A single view of crews, open work, priorities and exceptions across the service operation.", "/assets/module-dispatch.png"],
  ["03", "Timesheets & certified payroll", "Field time connected to the right job, classification, wage treatment and compliance record.", "/assets/module-payroll.png"],
  ["04", "Approvals & documentation", "The repeated decisions, evidence and internal sign-offs that otherwise live in calls and message threads.", "/assets/module-approvals.png"],
  ["05", "Owner dashboard & billing", "A clear view of work in progress, jobs waiting on information and completed work ready to invoice.", "/assets/module-dashboard.png"],
];

const implementation = [
  ["Workflow mapping", "2–3 owner hours", "Owner + operations lead", "One live job is traced from request through billing."],
  ["System design", "2–4 review hours", "Office manager + field lead", "Screens, rules and exceptions are reviewed before build."],
  ["First working piece", "4–6 weeks", "A small pilot group", "One high-value workflow is working with real jobs."],
  ["Data movement", "3–5 review hours", "Office manager", "Approved customers, jobs and records are cleaned and moved."],
  ["Field pilot", "20–30 min / user", "Foreman + selected crew", "Usability is proven before a company-wide rollout."],
];

// Internal review annotations: sample profiles, unapproved names, working
// estimates, concept-screen labels. Set to false before this page goes live.
const DRAFT_NOTES = true;

const faqs = [
  ["Is Kortex software or a consulting company?",
   "Neither, exactly. We build one operations system for one company at a time, and we stay responsible for it after it launches. You are not buying a licence and you are not buying a report."],
  ["Do we own what you build?",
   "Yes. The code, the data and the accounts. A firm that leaves you dependent on it has sold you a subscription with extra steps."],
  ["Will it work with QuickBooks?",
   "Yes, and in both directions. This is the question worth pressing every vendor on, because \u201cintegrates with QuickBooks\u201d covers everything from a real two-way sync to a nightly export that quietly creates duplicate customers. Ask which direction, how often, and what happens when it fails."],
  ["Do we have to replace the software we already run?",
   "That is your decision, not a condition of working with us. QuickBooks usually stays. Plenty of companies keep what they have and we build around it; others use this as the moment to move off something. The work is the same either way \u2014 removing the manual layer between the systems."],
  ["How long does it take, and how much of our time?",
   "The table above is the honest answer. First working piece in four to six weeks on your real jobs, and a handful of hours from you rather than weeks of meetings. Nothing goes live company-wide on day one."],
  ["How do you get field crews to actually use it?",
   "By making it faster than what they do now, and by proving that with a foreman and a small crew before anyone else sees it. If it is slower than the clipboard, we built the wrong thing \u2014 and that is worth finding out before you spend money, not eighteen months after."],
  ["Can you handle prevailing wage and certified payroll?",
   "Yes. Field time is connected to the right job, classification and wage treatment as it is logged, rather than reconstructed in the office at the end of the week."],
  ["What does it cost?",
   "We start with a paid scope that produces a build spec and a fixed price, and that fee comes off the build. You will know the number before anyone commits to anything, and you are never asked to price an unscoped system."],
  ["Are we too small for this?",
   "Possibly, and we will say so. Below a certain size the build costs more than the problem. If that is you, we will tell you which off-the-shelf product to look at instead."],
];

export default function KortexHomeV10() {
  return <>

    <section className="hero" id="top">
      <div className="grid-overlay"/>
      <div className="hero-copy">
        <p className="eyebrow"><span/> OPERATIONAL SYSTEMS FOR COMMERCIAL CONTRACTORS</p>
        <h1>We build the systems your business <em>can’t buy</em> off the shelf.</h1>
        <p className="hero-lede">Custom software that automates the work your team still does by hand—the tickets, the timesheets, the approvals, the invoicing. Built around the software you already run, or instead of it.</p>
        <div className="actions"><a className="button" href="#modules">See the operations system <Arrow/></a><a className="button ghost" href="#contact">Book a working session <Arrow/></a></div>
      </div>
      <div className="system-map" aria-label="Kortex connects field, office, compliance and billing">
        <div className="orbit one"/><div className="orbit two"/>
        <span className="map-label top">FIELD</span><span className="map-label right">OFFICE</span><span className="map-label bottom">BILLING</span><span className="map-label left">COMPLIANCE</span>
        <div className="map-core"><img className="map-mark" src="/brand/kortex-mark-ground.svg" alt="" width={48} height={48}/><strong>YOUR<br/>OPERATION</strong><small>CONNECTED</small></div>
        <b className="node n1"/><b className="node n2"/><b className="node n3"/><b className="node n4"/>
      </div>
      <div className="hero-proof hero-proof-simple"><span>BUILT FOR MEP + CONSTRUCTION · OWNED BY YOUR COMPANY</span></div>
    </section>

    <section className="statement section-pad">
      <p className="section-index">THE PROBLEM</p>
      <div className="statement-content"><h2>Your business isn’t standard.<br/>Why should the system running it be?</h2><div><p>Established contractors rarely run on one clean process. Years of experience have created specific workflows, approval rules, customer requirements and exceptions.</p><p>Standard software asks the company to change all of that. Kortex starts with how the business already works—and turns it into a system the entire team can run.</p></div></div>
    </section>

    <section className="build section-pad" id="build">
      <div className="section-heading"><p className="section-index amber">WHAT WE BUILD</p><h2>One system across the work that keeps the company moving.</h2><p>Not another tool added to the stack. A connected operational layer built around the actual movement of work.</p></div>
      <div className="capability-grid">{capabilities.map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div>
      <div className="flow"><span>JOB RECEIVED</span><i/><span>FIELD WORK</span><i/><span>APPROVAL</span><i/><span>COMPLIANCE</span><i/><span>INVOICE</span></div>
    </section>

    <section className="modules section-pad" id="modules">
      <div className="split-heading"><div><p className="section-index">SYSTEMS WE’VE BUILT</p><h2>Not a list of features. Working parts of a real operation.</h2></div><p>Each module is designed around the people, rules and exceptions already inside the company. These concept screens show how the work comes together; live walkthroughs are available in a working session.</p></div>
      <div className="module-grid">{builtModules.map(([n,t,c,image],i)=><article className={i===0?"module-card featured":"module-card"} key={n}>
        <div className="module-preview" aria-label={`${t} concept interface`}><img src={image} alt={`${t} interface concept`}/>{DRAFT_NOTES && <small>REPRESENTATIVE INTERFACE CONCEPT</small>}</div>
        <div className="module-copy"><span>{n}</span><h3>{t}</h3><p>{c}</p></div>
      </article>)}</div>
    </section>

    <section className="industries section-pad" id="industries">
      <div className="split-heading"><div><p className="section-index">INDUSTRIES</p><h2>Built for businesses where the real work happens in the field.</h2></div><p>Kortex works where the operation is complex, the handoffs are expensive and standard software stops fitting.</p></div>
      <div className="industry-grid">
        <article className="industry-card"><div className="industry-top"><span>01</span><span>MEP CONTRACTORS</span></div><div className="industry-photo"><img src="/assets/mep-field.png" alt="Mechanical technician inspecting equipment in a commercial mechanical room"/><span>MEP / FIELD OPERATIONS</span></div><h3>Mechanical. Electrical. Plumbing.</h3><p>Operational systems for service work, projects, field crews, certified payroll and complex billing.</p><ul><li><Check/> Carry more service contracts</li><li><Check/> Connect field work to billing</li><li><Check/> Manage prevailing-wage complexity</li></ul><a href="/mep-contractors">See how Kortex works for MEP <Arrow/></a></article>
        <article className="industry-card"><div className="industry-top"><span>02</span><span>CONSTRUCTION</span></div><div className="industry-photo no-image" role="presentation"><span>CONSTRUCTION / PROJECT DELIVERY</span></div><h3>Projects. Field. Financials.</h3><p>Custom systems connecting field documentation, approvals, change work, cost visibility and billing.</p><ul><li><Check/> See project risk sooner</li><li><Check/> Capture and approve change work</li><li><Check/> Protect project margins</li></ul><a href="/construction-contractors">See how Kortex works for construction <Arrow/></a></article>
      </div>
    </section>

    <section className="adoption section-pad" id="adoption">
      <div className="adoption-copy"><p className="section-index amber">CREW ADOPTION</p><h2>If the field won’t use it, we don’t build it.</h2><p>Your crew should not have to become software experts. We design each workflow with the people who will use it, then prove it with a small field group before anything is rolled out across the company.</p><a className="button" href="#contact">Test it with your foreman <Arrow/></a></div>
      <div className="adoption-principles">
        <article><span>01</span><div><h3>Fewer steps than today</h3><p>The new workflow has to make the job easier—not move the paperwork to another screen.</p></div></article>
        <article><span>02</span><div><h3>Built for the device in their hand</h3><p>Fast, clear field actions designed around real job conditions and the devices crews already carry.</p></div></article>
        <article><span>03</span><div><h3>Proven before rollout</h3><p>A foreman and selected crew test the workflow on real work before the rest of the company sees it.</p></div></article>
        <aside><strong>BEFORE YOU DECIDE ANYTHING</strong><p>Spend five minutes looking at it with the person who will use it most.</p></aside>
      </div>
    </section>

    <section className="commitment section-pad" id="commitment">
      <div className="split-heading"><div><p className="section-index">WHAT IT TAKES</p><h2>You should know what implementation asks of your team.</h2></div><p>No indefinite discovery phase. Before work begins, you will know who needs to be involved, what information will move and when the first working piece will be ready.</p></div>
      <div className="implementation-table">
        <div className="implementation-head"><span>STAGE</span><span>YOUR TIME</span><span>WHO IS INVOLVED</span><span>WHAT HAPPENS</span></div>
        {implementation.map(([stage,time,people,work],i)=><article key={stage}><span className="implementation-stage"><b>0{i+1}</b>{stage}</span><strong>{time}</strong><span>{people}</span><p>{work}</p></article>)}
      </div>
      {DRAFT_NOTES && <div className="honesty-note"><span>INTERNAL — NOT FOR LAUNCH</span><p>These are working estimates written for the page design. Confirm each against Kortex’s actual delivery model before treating them as client commitments, then set DRAFT_NOTES to false.</p></div>}
    </section>

    <section className="outcomes section-pad">
      <div className="split-heading"><div><p className="section-index amber">THE OUTCOME</p><h2>The work moves without someone carrying it by hand.</h2></div><p>Build more capacity into the operation—not more dependence on a few people.</p></div>
      <div className="outcome-grid">{outcomes.map(([t,c],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{c}</p></article>)}</div>
    </section>

    <section className="comparison section-pad">
      <div><p className="section-index">WHY KORTEX</p><h2>The difference isn’t more features. It’s who adapts to whom.</h2><p>Most software gives the company another system to manage. Kortex takes the operation that already works and builds the system around it.</p><a className="inline-link ink" href="#contact">See the Kortex difference <Arrow/></a></div>
      <div className="shift-list">
        {[
          ["PROCESS FIT","Your team works around the software.","The system follows the way your team already works."],
          ["COST TO GROW","More users and modules increase the recurring bill.","The operational core is built for—and owned by—your company."],
          ["THE HANDOFFS","Your team connects the gaps between separate tools.","One operational layer connects the work end to end."],
          ["ADOPTION","The demo is easy. Making it work becomes your problem.","It is built and tested with the people who will use it."],
          ["ACCOUNTABILITY","Support knows the product, not your operation.","The same team designs, builds and maintains your system."],
        ].map(([label,before,after],i)=><article className="shift-row" key={label}><span className="shift-number">0{i+1}</span><div className="shift-label">{label}</div><div className="shift-before">{before}</div><Arrow/><div className="shift-after"><Check/>{after}</div></article>)}
      </div>
    </section>

    <section className="case-study section-pad" id="proof">
      <div className="case-label"><span>CLIENT 001</span><span>MECHANICAL CONTRACTOR</span></div>
      <div className="case-main"><div><p className="section-index amber">PROOF IN THE FIELD</p><h2>Built inside a real contracting business.</h2></div><blockquote>“We were running a multimillion-dollar business on spreadsheets. Kortex gave the work one place to move.”</blockquote></div>
      <div className="case-metrics"><span className="metrics-label">MEASURED, AND RUNNING NOW</span>
        <div><strong>5–6 hrs</strong><span>A WEEK ON TIMESHEETS<br/>AND TICKETS — GONE</span></div><i/>
        <div><strong>1 hr</strong><span>EVERY MONDAY TYPING<br/>LAST WEEK OFF PAPER — GONE</span></div><i/>
        <div><strong>0</strong><span>SPREADSHEETS RUNNING<br/>THE OFFICE</span></div>
      </div>
      <div className="case-forward"><span>WHAT THE CLIENT EXPECTS NEXT — NOT YET MEASURED</span><p>Service contracts from <strong>10</strong> to somewhere between <strong>20 and 30</strong> on the same team, and about a third of the office manager&apos;s role returned. These are the client&apos;s own expectations over the coming measurement window. <strong>We will publish them when they are measured, not before.</strong></p></div>
    </section>

    <section className="testimonials section-pad">
      <div className="testimonial-heading"><p className="section-index">FROM INSIDE THE OPERATION</p><span>HOT &amp; COLD · CLIENT STORY</span></div>
      <div className="testimonial-story">
        <div className="client-media"><div className="client-monogram">HC</div><span>CLIENT PHOTO OR VIDEO</span></div>
        <div className="client-quote"><span>THE OWNER&apos;S STANDARD</span><blockquote>“A successful business is one that anyone can run.”</blockquote><div className="client-person"><div><strong>CLIENT NAME</strong><p>COO · HOT &amp; COLD</p></div>{DRAFT_NOTES && <small>NAME + PHOTO TO BE APPROVED</small>}</div></div>
      </div>
      <div className="testimonial-outcome"><span>WHAT THE SYSTEM PROTECTS</span><p>The operation can keep moving, improving and creating value beyond any one person&apos;s ownership of it.</p><a href="/case-studies/hot-and-cold">Read the Hot &amp; Cold story <Arrow/></a></div>
    </section>

    <section className="firm section-pad" id="firm">
      <div className="firm-intro"><p className="section-index amber">WHO WE ARE</p><h2>The people responsible—from workflow mapping through rollout.</h2><p>Kortex is an operations systems firm for established MEP and construction contractors. The team that studies your operation stays accountable for the system it designs, builds and maintains.</p><div className="firm-contact"><span>CALL KORTEX DIRECTLY</span><a href="tel:+13018898546">(301) 889-8546</a><a href="mailto:hello@kortexconsulting.com">hello@kortexconsulting.com</a></div></div>
      <div className="team-grid">
        <article><div className="portrait-placeholder team-role-one"/>{DRAFT_NOTES && <span>SAMPLE PROFILE / FOUNDER</span>}<h3>Operations &amp; client strategy</h3><p>Leads workflow mapping with ownership and operations, identifies the dependencies limiting capacity, and stays accountable to the business result—not just the software delivery.</p></article>
        <article><div className="portrait-placeholder team-role-two"/>{DRAFT_NOTES && <span>SAMPLE PROFILE / SYSTEMS LEAD</span>}<h3>System design &amp; build</h3><p>Translates field and office realities into dependable workflows, including the exceptions, approvals and accounting handoffs that standard demos leave out.</p></article>
        <article><div className="portrait-placeholder team-role-three"/>{DRAFT_NOTES && <span>SAMPLE PROFILE / IMPLEMENTATION</span>}<h3>Rollout &amp; adoption</h3><p>Runs the pilot with the people closest to the work, turns their feedback into improvements, and remains responsible through training, launch and support.</p></article>
      </div>
    </section>

    <section className="process section-pad" id="process">
      <div className="split-heading"><div><p className="section-index">HOW IT WORKS</p><h2>We begin with the way one real job moves through your company.</h2></div><p>No generic discovery deck. We follow the work, find the dependencies and build in useful phases.</p></div>
      <ol>{[["Follow one job","Trace one actual job or project from first request to final billing.","WORKFLOW MAP"],["Map the breakdowns","Find the approvals, exceptions, re-entry and missing information slowing it down.","PRIORITY BLUEPRINT"],["Build the first piece","Turn the highest-value part into a working connected workflow.","WORKING MODULE"],["Prove it with the team","Pilot it with the field and office, improve it, then decide what comes next.","FIELD-APPROVED ROLLOUT"]].map(([t,c,o],i)=><li key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{c}</p><strong>{o}</strong></div></li>)}</ol>
    </section>

    <section className="faq section-pad" id="faq">
      <div className="split-heading"><div><p className="section-index">BEFORE YOU CALL</p><h2>What owners ask us first.</h2></div><p>The questions that come up on every first call, answered here so they do not have to be.</p></div>
      <div className="faq-grid">{faqs.map(([q,a],i)=><details key={q} {...(i===0 ? {open:true} : {})}><summary><span>0{i+1}</span>{q}<i/></summary><p>{a}</p></details>)}</div>
    </section>

    <section className="contact" id="contact"><div className="grid-overlay"/><p className="eyebrow"><span/> START WITH ONE HIGH-IMPACT WORKFLOW</p><h2>Let’s improve one workflow first.</h2><p>Choose one workflow that is slowing the business down. We’ll map it, show what should change and define a first working piece—so you can see the impact before deciding what comes next.</p><div className="contact-actions"><a className="button" href="/contact">Choose the workflow <Arrow/></a><a className="direct-call" href="tel:+13018898546">Or call (301) 889-8546</a></div></section>
  </>;
}
