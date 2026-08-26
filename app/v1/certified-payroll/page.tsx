import type { Metadata } from "next";
import { Arrow, Check } from "@/components/v1/icons";
import { v1 } from "@/components/v1/paths";
import "./cp.css";

// Certified payroll guide hub. No page-copy doc exists for this page — it is
// written directly from consulting/kortex/certified-payroll-primer.md plus
// stable, public knowledge of the WH-347 form and Davis-Bacon basics.
// Standing rules, do not undo:
//  - This is an educational guide, not a sales page. The Kortex pitch lives in
//    ONE bridge section at the end and nowhere else.
//  - No certified-payroll capability is attributed to the Hot & Cold build.
//    Product mentions stay general ("a system can..."), never client proof.
//  - No legal advice framing. Facts about WH-347 / Davis-Bacon are stated
//    plainly, with a visible note that details vary by state and contract and
//    the awarding agency has the final word.
//  - No invented statistics. The section-05 office walkthrough is explicitly
//    framed as hypothetical.
//  - The cluster plan (seo-cluster-map-construction.md, Cluster I) requires an
//    attorney read on compliance pages before they go live — flagged via ph().
// Bracketed copy renders highlighted via ph() so reviewers can spot every
// item that still needs sign-off before publishing.

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "Certified Payroll: WH-347, Davis-Bacon & Prevailing Wage",
  description:
    "What certified payroll is, who files it, the WH-347 field by field, and why reports get rejected. A plain-English guide for the contractor's office.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/certified-payroll` },
};

/* Bracketed values in the copy are unconfirmed. They render highlighted so a
   reviewer can spot every claim that still needs sign-off before publishing. */
const ph = (s: string) =>
  s.split(/(\[[^\]]*\])/).map((part, i) =>
    part.startsWith("[") ? <span className="ph" key={i}>{part}</span> : part
  );

const TOC: [string, string][] = [
  ["What certified payroll is", "#what-it-is"],
  ["Who files, and when", "#who-files"],
  ["The WH-347, field by field", "#wh-347"],
  ["Why reports get rejected", "#rejections"],
  ["Where Friday goes", "#the-week"],
  ["QuickBooks and certified payroll", "#quickbooks"],
  ["Questions offices ask", "#faq"],
  ["When the report is the symptom", "#one-system"],
];

/* Three terms to know cold — straight from the primer. */
const TERMS: { t: string; p: string }[] = [
  {
    t: "Prevailing wage",
    p: "The minimum rate the Department of Labor sets for a trade in a locality on public work. It comes in two parts: a base rate plus a fringe rate.",
  },
  {
    t: "Fringe rate",
    p: "The benefits portion of the prevailing wage. The contractor pays it into a bona fide benefit plan or pays it out in cash on the paycheck — and reports it either way.",
  },
  {
    t: "WH-347",
    p: "The Department of Labor's standard weekly certified payroll form, submitted with a signed Statement of Compliance.",
  },
];

const WHO: { t: string; p: string }[] = [
  {
    t: "Federal work",
    p: "The Davis-Bacon Act covers federal and federally funded construction contracts over $2,000. If federal money is in the project, the requirement travels with it.",
  },
  {
    t: "State work",
    p: "Most states run their own prevailing-wage laws for state-funded work — often called little Davis-Bacon acts — with their own rates, thresholds and filing rules. Some agencies take paper forms; others require their own online filing.",
  },
  {
    t: "Subcontractors too",
    p: "Every subcontractor on a covered job files a weekly report for its own workers. The prime collects the subs' reports and submits them to the agency along with its own.",
  },
  {
    t: "Weekly, for the whole job",
    p: "One report for every week workers are on the project, for the life of the project. Commonly due within seven days of the regular pay date — the contract sets the exact schedule. For weeks with no work, many agencies expect a no-work payroll to keep the sequence unbroken.",
  },
];

/* WH-347 walkthrough. Field names and column layout are from the public DOL
   form; the "where it trips" notes are the primer's failure modes mapped onto
   the fields that produce them. */
const FIELDS: { group?: string; f: string; what: string; trip: string }[] = [
  {
    group: "THE HEADER",
    f: "Contractor or subcontractor",
    what: "Check one box; add the business name and address.",
    trip: "The agency tracks primes and subs separately — the box has to match your role on this contract.",
  },
  {
    f: "Payroll no. and week ending",
    what: "Payrolls are numbered in sequence, starting at 1 for the first week on the job. The last one is marked final.",
    trip: "A gap in the sequence reads as a missing week, and missing weeks get letters.",
  },
  {
    f: "Project, location, contract no.",
    what: "Exactly as they appear on the contract.",
    trip: "One report per project. A crew on two covered jobs in one week means two reports.",
  },
  {
    group: "COLUMNS 1–9",
    f: "1 · Name and ID number",
    what: "The worker's name plus an identifying number — normally the last four digits of the Social Security number.",
    trip: "Not the full SSN. The form moved away from full numbers for privacy; agencies reject reports that expose them.",
  },
  {
    f: "2 · Withholding exemptions",
    what: "Optional. Many offices leave it blank.",
    trip: "Nothing — this is the one column that forgives you.",
  },
  {
    f: "3 · Work classification",
    what: "The classification from the contract's wage determination that the worker's hours fall under — Plumber, Electrician, Sheet Metal Worker, Laborer.",
    trip: "The rate follows the work performed, not the job title. Titles like helper or tech often are not on the determination at all — if the work has no listed classification, ask the agency to add one before you file. One worker doing two trades in a week gets two lines.",
  },
  {
    f: "4 · Hours worked each day",
    what: "A row for straight time (S) and a row for overtime (O), day by day across the week.",
    trip: "Overtime is time-and-a-half on the base rate. The fringe portion does not get multiplied — figuring overtime on the whole package is wrong in either direction.",
  },
  {
    f: "5 · Total hours",
    what: "The week's straight and overtime hours, totalled.",
    trip: "Has to agree with the daily columns and with the timesheet behind them.",
  },
  {
    f: "6 · Rate of pay",
    what: "The hourly rate including fringe handling — base rate, plus any fringe paid as cash, often written as two figures.",
    trip: "The rate must meet the determination for that classification in that county. Same trade, different county, different rate.",
  },
  {
    f: "7 · Gross amount earned",
    what: "Gross for this project. A worker who also worked elsewhere that week shows two figures: project gross over the full week's gross.",
    trip: "This is the mixed-week line. A technician on a public job Monday and a private service call Tuesday has two wage treatments on one timesheet — and this column is where the split shows.",
  },
  {
    f: "8 · Deductions",
    what: "FICA, withholding tax, other, total. Computed on the whole week's gross — not just this project's share.",
    trip: "Every deduction has to be lawful, and anything under “other” has to be explained.",
  },
  {
    f: "9 · Net wages paid",
    what: "What actually reached the worker for the week.",
    trip: "The report must match what payroll actually paid. Not roughly — exactly.",
  },
  {
    group: "PAGE TWO",
    f: "Statement of Compliance",
    what: "Name, title and signature of the owner or an authorized officer, swearing the report is correct and every worker was paid at least the required rate. Box 4(a): fringe paid into plans or funds. Box 4(b): fringe paid in cash. Box 4(c): exceptions, explained.",
    trip: "This is the “certified” in certified payroll — signed under penalty of perjury, and falsifying it is a federal offense. The routine failures are quieter: an unsigned page two, a signature from someone without authority, or box 4(a) checked while the fringe actually went out as cash.",
  },
];

const REJECTIONS: { t: string; p: string }[] = [
  {
    t: "Wrong classification",
    p: "Hours reported under a cheaper trade than the work performed. The rate follows the work — the person who hung duct all Tuesday was a sheet metal worker on Tuesday, whatever the badge says.",
  },
  {
    t: "The mixed week",
    p: "A technician on a public school job Monday and a private service call Tuesday has two different wage treatments in one pay period, on one timesheet. Split it wrong and the whole week's report is wrong. This is the case that breaks most off-the-shelf setups.",
  },
  {
    t: "Fringe that doesn't reconcile",
    p: "The fringe on the report, the fringe in payroll and the monthly report to the benefit funds all describe the same hours. When they disagree, someone in the office reconstructs the week to find out which one is lying.",
  },
  {
    t: "Overtime on the wrong base",
    p: "Time-and-a-half applies to the base rate; the fringe rate stays flat. Multiplying the whole package — or the plain shop rate instead of the prevailing base — both come back.",
  },
  {
    t: "Missing weeks",
    p: "A gap in the payroll numbering, or a silent week while crews were on site. Agencies read the sequence. No-work weeks usually need a no-work payroll saying so.",
  },
  {
    t: "A bad page two",
    p: "The numbers can be perfect and the report still fails: page two unsigned, signed by someone without authority, or the fringe boxes checked to match a benefits arrangement the company doesn't actually have.",
  },
];

/* The hypothetical Friday. Framed as hypothetical in the copy — no client is
   implied. */
const WEEK: string[] = [
  "Pull the timesheets for everyone who touched the rec-center job — two on paper tickets, one from texts to the foreman.",
  "Decide, hour by hour, which classification each worker's time falls under. The apprentice ran conduit Tuesday morning and flagged traffic Tuesday afternoon — two rates, one day.",
  "Split the technician who covered a private no-heat call on Wednesday. Public hours on the report, the whole week's gross in column 7, deductions figured on all of it.",
  "Check every rate against the wage determination for this county — base and fringe, straight and overtime.",
  "Work out the fringe twice: what went into the fund for two of them, what goes out as cash for the third.",
  "Type it all into the WH-347. Total the columns. Make the totals agree with payroll to the penny.",
  "Find an officer with signing authority, on a Friday, to read page two and sign it.",
  "Submit before the deadline, in whatever format this agency wants. File a copy where the auditor can find it in three years.",
  "Note what next month's fringe report to the funds has to say — because it must match this week, and every other week, exactly.",
];

const ASK: string[] = [
  "Can it hold two wage treatments for the same person in the same week?",
  "Does it know each project's wage determination — base and fringe, by classification, by county?",
  "Can it show fringe paid into funds and fringe paid as cash on the same report?",
  "Does its output match what payroll actually paid — or does someone reconcile the two by hand every week?",
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is certified payroll?",
    a: "Certified payroll is the weekly report a contractor files on government-funded construction work to prove every worker was paid at least the prevailing wage. It lists each worker's classification, daily hours, pay rate, gross wages, deductions and net pay — usually on federal form WH-347 — with a signed Statement of Compliance attached.",
  },
  {
    q: "Who has to file certified payroll?",
    a: "Contractors and subcontractors on federal or federally funded construction contracts over $2,000, under the Davis-Bacon Act. Most states have their own prevailing-wage laws covering state-funded work. If public money funds the project, expect a filing requirement — and confirm the exact rules with the awarding agency.",
  },
  {
    q: "What is the WH-347 form?",
    a: "WH-347 is the Department of Labor's standard certified payroll form: one page listing each week's workers, classifications, hours, rates and pay, and a second page — the Statement of Compliance — that a company officer signs. Using the form itself is optional; a contractor may submit its own format as long as it carries the same information and the signed statement.",
  },
  {
    q: "What is the difference between prevailing wage and certified payroll?",
    a: "Prevailing wage is the rule: a minimum rate, base plus fringe, set for each trade in each locality on public work. Certified payroll is the proof: the weekly report showing the rule was followed. Agencies check both — the rates you paid and the reports that document them.",
  },
  {
    q: "Do subcontractors have to file certified payroll?",
    a: "Yes. Every subcontractor on a covered project files a weekly report for its own workers. The prime contractor collects the subs' reports and submits them to the agency along with its own.",
  },
  {
    q: "Is certified payroll required on private jobs?",
    a: "No. Certified payroll applies to government-funded work. A private job carries no Davis-Bacon requirement — though a worker who splits one week between a public job and private work still needs that week divided correctly on the public job's report.",
  },
  {
    q: "Does QuickBooks do certified payroll?",
    a: "QuickBooks records what you paid. It does not decide which prevailing-wage classification each hour belongs under, and that decision is what certified payroll is made of. Depending on the version, it can produce a basic certified payroll report through Excel or nothing built in. Most offices pair it with spreadsheets or filing tools — and the classification step stays manual either way.",
  },
  {
    q: "What happens if a certified payroll report is wrong or late?",
    a: "The contracting agency can withhold progress payments until it is corrected — work done, money not coming. Underpayments become back wages owed to the workers, with liquidated damages possible on top. Repeated or willful violations can lead to debarment from federal work for up to three years. Most errors are fixable: pay the difference, file a corrected report, keep the record.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Certified Payroll: WH-347, Davis-Bacon and Prevailing Wage, Explained",
    description:
      "A plain-English guide to certified payroll for contractors: what it is, who files it, the WH-347 field by field, and why reports get rejected.",
    author: { "@type": "Organization", name: "Kortex Consulting" },
    publisher: { "@type": "Organization", name: "Kortex Consulting" },
    mainEntityOfPage: `${SITE}/certified-payroll`,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Certified payroll", item: `${SITE}/certified-payroll` },
    ],
  },
];

export default function CertifiedPayrollPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero — a guide's front door: what's in it, who it's for, no pitch. */}
      <section className="cp-hero">
        <div className="grid-overlay" />
        <div className="cp-hero-grid">
          <div>
            <p className="eyebrow"><span /> CERTIFIED PAYROLL &mdash; A WORKING GUIDE</p>
            <h1>Certified payroll, explained in <em>plain English</em>.</h1>
            <p className="cp-lede">
              What it is, who files it, how the WH-347 works line by line, and why reports get
              sent back. Written for the person who actually does it every week.
            </p>
            <div className="actions">
              <a className="button ghost" href="#what-it-is">Start with the basics <Arrow /></a>
              <a className="inline-link" href="#wh-347">Jump to the WH-347 walkthrough <Arrow /></a>
            </div>
            <div className="cp-disclosure">
              <span>BEFORE YOU RELY ON THIS</span>
              <p>
                This guide covers the federal rules and the common state pattern. The details
                differ by state and by contract — the wage determination and the awarding agency
                on each project have the final word. Confirm there before you file.
              </p>
            </div>
          </div>

          <nav className="cp-toc" aria-label="On this page">
            <span>ON THIS PAGE</span>
            <ol>
              {TOC.map(([t, href], i) => (
                <li key={href}>
                  <a href={href}>
                    <b>0{i + 1}</b>
                    {t}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* 01 — what it is: the rule (prevailing wage) and the proof (the report) */}
      <section className="cp-basics section-pad" id="what-it-is">
        <p className="cp-hidden-note">{ph("[ATTORNEY REVIEW BEFORE PUBLISHING — the cluster plan requires a legal read on compliance pages before they go live.]")}</p>
        <p className="section-index">01 / WHAT CERTIFIED PAYROLL IS</p>
        <h2>One rule about pay. One report that proves it.</h2>
        <div className="cp-prose">
          <p>
            On a government-funded construction job, federal law &mdash; the <strong>Davis-Bacon
            Act</strong> &mdash; puts a floor under every worker&apos;s pay. That floor is the{" "}
            <strong>prevailing wage</strong>: a rate the Department of Labor sets for each trade,
            in each locality. It applies to federal and federally funded construction contracts
            over $2,000, and most states run their own version for state-funded work.
          </p>
          <p>
            So a plumber on a public school job in Montgomery County has a legally required
            minimum hourly rate. It differs from a plumber&apos;s rate in the next county, and
            differs again from what that same plumber earns on a private job.
          </p>
          <p>
            <strong>Certified payroll is the proof.</strong>{" "}Every week, for the life of the
            project, the contractor submits a report &mdash; usually the Department of
            Labor&apos;s <strong>form WH-347</strong>{" "}&mdash; listing, for every worker: name and
            work classification, hours worked each day, rate of pay, gross wages, deductions and
            net pay.
          </p>
          <p>
            The &ldquo;certified&rdquo; part is the signature. Attached to the report is a{" "}
            <strong>Statement of Compliance</strong>, in which a company officer swears under
            penalty of perjury that everyone was paid correctly. Falsifying it is a federal
            offense.
          </p>
          <p>
            One more piece, because it drives most of the arithmetic: the prevailing wage comes
            in two parts. A <strong>base rate</strong>, and a <strong>fringe rate</strong>{" "}&mdash;
            the benefits portion. The contractor either pays the fringe into a bona fide benefit
            plan or pays it out as cash on the paycheck. Either way, it goes on the report.
          </p>
        </div>
        <div className="cp-terms">
          {TERMS.map((t) => (
            <article key={t.t}>
              <h3>{t.t}</h3>
              <p>{t.p}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 02 — who files, and when */}
      <section className="cp-who section-pad" id="who-files">
        <p className="section-index amber">02 / WHO FILES, AND WHEN</p>
        <h2>If public money is on the job, expect to file.</h2>
        <div className="cp-who-grid">
          {WHO.map((w) => (
            <article key={w.t}>
              <h3>{w.t}</h3>
              <p>{w.p}</p>
            </article>
          ))}
        </div>
        <div className="cp-callout">
          <p>
            The WH-347 itself is optional &mdash; a contractor may file its own format, as long
            as it carries the same information and the signed Statement of Compliance. Most use
            the WH-347 anyway, because every agency accepts it. The quick test on any new
            contract: public money, construction work, over $2,000? Plan on certified payroll,
            and confirm the filing details with the awarding agency before the first crew day.
          </p>
        </div>
      </section>

      {/* 03 — the WH-347 walkthrough. Paper table; stacked cards on mobile. */}
      <section className="cp-form section-pad" id="wh-347">
        <p className="section-index">03 / THE FORM, LINE BY LINE</p>
        <h2>The WH-347, field by field.</h2>
        <p className="cp-form-intro">
          One page for the numbers, one page for the signature. Here is what goes in each field
          &mdash; and where offices get tripped. The Department of Labor publishes the form and
          its official instructions; this table is a guide to them, not a substitute.
        </p>
        <div className="cp-table">
          <div className="cp-table-head" aria-hidden="true">
            <span>FIELD</span><span>WHAT GOES IN IT</span><span>WHERE IT TRIPS PEOPLE</span>
          </div>
          {FIELDS.map((row) => (
            <div key={row.f} className="cp-row-wrap">
              {row.group && <p className="cp-table-group">{row.group}</p>}
              <div className="cp-table-row">
                <h3>{row.f}</h3>
                <p><span className="cp-cell-label">WHAT GOES IN IT</span>{row.what}</p>
                <p><span className="cp-cell-label">WHERE IT TRIPS PEOPLE</span>{row.trip}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — rejections and consequences */}
      <section className="cp-reject section-pad" id="rejections">
        <p className="section-index amber">04 / WHERE IT GOES WRONG</p>
        <h2>Six ways a certified payroll comes back.</h2>
        <div className="cp-reject-grid">
          {REJECTIONS.map((r, i) => (
            <article key={r.t}>
              <span>0{i + 1}</span>
              <h3>{r.t}</h3>
              <p>{r.p}</p>
            </article>
          ))}
        </div>
        <div className="cp-consequences">
          <span>WHAT IT COSTS WHEN IT STAYS WRONG</span>
          <p>
            The contracting agency can withhold progress payments until the report is corrected
            &mdash; work done, money not coming. Underpayments become back wages owed to the
            workers, with liquidated damages on top. Union contractors also face grievances, and
            the business agent in the office. And for repeated or willful violations:
            debarment &mdash; barred from bidding federal work for up to three years. For a
            contractor whose business is public projects, that ends the business.
          </p>
        </div>
      </section>

      {/* 05 — the weekly burden, framed explicitly as hypothetical */}
      <section className="cp-week section-pad" id="the-week">
        <p className="section-index">05 / THE WEEKLY BURDEN</p>
        <h2>Where Friday goes.</h2>
        <div className="cp-prose">
          <p>
            Picture a shop &mdash; hypothetical, but assembled from how this work actually gets
            done. Twelve people in the field, three of them on a county rec-center job. One
            office manager. Payroll runs Friday. After it runs, the certified payroll starts:
          </p>
        </div>
        <ol className="cp-steps">
          {WEEK.map((s, i) => (
            <li key={s}><span>0{i + 1}</span><p>{s}</p></li>
          ))}
        </ol>
        <div className="cp-prose">
          <p>
            None of these steps is hard. There are just nine of them, every week, for every
            covered project, worked from tickets and timesheets that were written on a dashboard
            at 7 a.m. And the deciding step &mdash; which classification each hour belongs
            under &mdash; happens days after the hour was worked, from memory, by someone who
            was not there. That gap is where the six rejections above come from.
          </p>
        </div>
      </section>

      {/* 06 — the QuickBooks searcher: the accounting system can't do the
           compliance job, and here is precisely why. */}
      <section className="cp-qb section-pad" id="quickbooks">
        <p className="section-index amber">06 / QUICKBOOKS AND CERTIFIED PAYROLL</p>
        <h2>QuickBooks knows what you paid. Not why.</h2>
        <div className="cp-qb-grid">
          <div className="cp-prose">
            <p>
              If you searched &ldquo;QuickBooks certified payroll,&rdquo; you already know the
              routine: run payroll in QuickBooks, then rebuild the same week in a spreadsheet to
              file it.
            </p>
            <p>
              The reason is structural, not a missing feature. QuickBooks is an accounting
              system &mdash; it records what was paid. Certified payroll is decided{" "}
              <em>before</em>{" "}payroll runs: which classification each hour falls under, at which
              determination rate, with the fringe going to a fund or out as cash. Depending on
              the version, QuickBooks can produce a basic certified payroll report through Excel
              or nothing built in &mdash; but either way, it has no field for the deciding step.
              That work happens outside the books.
            </p>
            <p>
              So offices bolt things on: a spreadsheet per project, a payroll service that
              supports prevailing wage, a filing tool. Every bolt-on carries the same catch
              &mdash; someone still has to tell it which hours were which. The deciding step
              stays manual, and the deciding step is where reports fail.
            </p>
            <p>
              Field-service platforms have the same seam. ServiceTitan&apos;s own help
              documentation concedes it:
            </p>
            <blockquote className="cp-quote">
              &ldquo;If a technician works a prevailing wage job without being assigned a labor
              type, their standard hourly rate applies and their gross pay will be
              incorrect.&rdquo;
              <cite>&mdash; ServiceTitan help documentation</cite>
            </blockquote>
          </div>
          <div className="cp-ask">
            <span>WHAT TO ASK OF ANY TOOL</span>
            <ul>
              {ASK.map((a) => (
                <li key={a}><Check /> {a}</li>
              ))}
            </ul>
            <p>
              If the answer to the last one is &ldquo;someone reconciles,&rdquo; the tool moved
              the work &mdash; it did not remove it.
            </p>
          </div>
        </div>
      </section>

      {/* 07 — FAQ */}
      <section className="cp-faq faq section-pad" id="faq">
        <div className="cp-faq-grid">
          <div>
            <p className="section-index">07 / QUESTIONS OFFICES ASK</p>
            <h2>Certified payroll, asked and answered.</h2>
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

      {/* 08 — the one bridge. Kept quiet, kept general: no client-attributed
           certified-payroll capability, no invented numbers. */}
      <section className="cp-bridge section-pad" id="one-system">
        <div className="grid-overlay" />
        <div className="cp-bridge-inner">
          <p className="section-index amber">08 / IF THIS IS YOUR FRIDAY</p>
          <h2>The report is the last step of an office workflow.</h2>
          <p>
            A WH-347 takes minutes when the data behind it is right, and most of a day when it
            is not. The difference is not effort &mdash; it is where the classification decision
            happens. When jobs, timesheets and wage rules live in three places, the decision is
            made at the end of the week, from memory. When they live in one system, it can be
            made when the hour is recorded &mdash; and the report becomes a printout instead of
            a reconstruction.
          </p>
          <p>
            Kortex builds that kind of system for contractors: one build, shaped around how your
            office already works, from the ticket to the invoice. If certified payroll eats your
            week, that is an office-workflow problem before it is a compliance problem &mdash;
            and office workflow is what we build for.
          </p>
          <div className="actions">
            <a className="button" href={v1("/operations-system")}>See the Operations System <Arrow /></a>
            <a className="direct-call" href="tel:+13018898546">OR CALL (301) 889-8546</a>
          </div>
          <div className="cp-bridge-links">
            <a className="inline-link" href={v1("/mep-contractors")}>For mechanical, electrical and plumbing <Arrow /></a>
            <a className="inline-link" href={v1("/builders-and-general-contractors")}>For builders and GCs <Arrow /></a>
          </div>
        </div>
      </section>
    </>
  );
}
