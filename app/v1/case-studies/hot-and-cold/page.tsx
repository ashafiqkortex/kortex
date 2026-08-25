import type { Metadata } from "next";
import { Arrow, Check } from "@/components/v1/icons";
import "./case-study.css";

// Everything on this page is governed by the proof-honesty rules in the brain
// at consulting/kortex/proof-block.md and the production notes at the foot of
// copy-home.md. In short:
//   Publishable as results — 5-6 hrs/week on timesheets and tickets, an hour
//   every Monday, thirty tickets on the desk, thirty people, and every Hot &
//   Cold quotation (permission confirmed 24 Aug 2026).
//   Expectation, never result — a third of the office manager's role, 10 to
//   20-30 service contracts, 15-20% manpower efficiency.
// Nothing that is an expectation may be presented as a measured outcome, and
// the not-yet-measured block below must never be quietly dropped.
export const metadata: Metadata = {
  title: "Hot & Cold — the first build | Kortex",
  description:
    "A thirty-person commercial mechanical contractor in Bethesda ran its whole office on one editable spreadsheet. What we built, what it replaced, and what has actually been measured since.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://kortexconsulting.com/case-studies/hot-and-cold" },
};

// Items still waiting on the client: the go-live date, the name and photo, and
// every elapsed-time figure for the build. Flip to false only when the page has
// none of them left outstanding — see the placeholder register in copy-home.md.
const DRAFT_NOTES = true;

const SITE = "https://kortexconsulting.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE}/case-studies/hot-and-cold#article`,
  headline: "Hot & Cold: one system from the field to the invoice",
  description:
    "A commercial mechanical contractor in Maryland replaced an editable spreadsheet with one record that runs from the job to the invoice.",
  url: `${SITE}/case-studies/hot-and-cold`,
  author: { "@type": "Organization", name: "Kortex Consulting", url: SITE },
  publisher: { "@id": `${SITE}/#organization` },
  mainEntityOfPage: `${SITE}/case-studies/hot-and-cold`,
  about: {
    "@type": "Organization",
    name: "Hot & Cold Corporation",
    address: { "@type": "PostalAddress", addressRegion: "MD", addressCountry: "US" },
  },
};

const SPEC: [string, string][] = [
  ["TRADE", "Commercial mechanical"],
  ["WHERE", "Maryland"],
  ["TEAM", "30 people"],
  ["REPLACED", "One spreadsheet"],
  ["STATUS", "Running in the business"],
];

// The five pairs run in the same order as the six links on the home page. This
// page is that chain, fixed, at one company.
const PAIRS: [string, string, string][] = [
  [
    "The record",
    "Handwritten tickets, coming back oil-stained, half of them missing a unit number or a project number. Somebody in the office calls to ask, and the man on the other end doesn't remember either.",
    "Entered once on the phone, at the job. A ticket without a unit number doesn't submit.",
  ],
  [
    "The hours",
    "An hour every Monday typing last week off a stack of paper. Half of them a reconstruction, decided in the office by a person who wasn't there.",
    "Logged at the job, and classified as they're logged rather than sorted out later in the office.",
  ],
  [
    "The approval",
    "Phone calls and a message thread. Come back from a week away and there are thirty tickets on the desk waiting on one person specifically.",
    "On the record. He looks at the business from wherever he is.",
  ],
  [
    "The invoice",
    "Built by retyping what somebody had already written down once, from a document that had to physically reach a desk first. The job that finished on the 3rd goes out on the 14th.",
    "Built from the same record that made the ticket. Nothing retyped. QuickBooks in both directions.",
  ],
  [
    "The dispute",
    "A customer says you damaged that unit six months ago. Somewhere there's a folder of photos and a man who thinks he remembers.",
    "Open the ticket. The photos are on it, with the unit and what was out of scope.",
  ],
];

const RUNNING: [string, string][] = [
  ["Job tickets", "Entered on the phone at the job. A ticket without a unit number doesn't submit."],
  ["Timesheets", "Logged at the job and classified as they're logged."],
  ["Approvals", "On the record, not in a WhatsApp group."],
  ["Invoicing", "Built from the same record that made the ticket. Two-way with QuickBooks."],
  ["Photo record", "On the ticket, with the unit and what was out of scope."],
];

const BUILD: [string, string, string][] = [
  [
    "One job, traced",
    "We followed a single real job from the first call to the money landing, and wrote down every place it stopped. Not a discovery deck — a map of their business with the stops marked on it.",
    "OWNER + OPERATIONS",
  ],
  [
    "Built to how they work",
    "A commercial mechanical contractor with service and projects running side by side does not work the way a platform assumes. The system was built to the company rather than the company reorganised around the system.",
    "NO PROCESS REWRITE",
  ],
  [
    "One piece at a time",
    "One piece live, used on real jobs for a few weeks, fixed where it was wrong. Then the next. Never the whole thing at once, and never a weekend cutover.",
    "LIVE ON REAL JOBS",
  ],
  [
    "Handed over",
    "The code, the data and the accounts belong to Hot & Cold. There is no per-seat licence and no renewal conversation, and their software bill does not go up when they hire another person.",
    "THEY OWN IT",
  ],
];

const FIT: [string, string, boolean][] = [
  [
    "The office is the ceiling, not the field",
    "You can put another crew on. You can't put another office on. If the constraint on the next contract is two desks rather than two vans, this is the same problem.",
    true,
  ],
  [
    "Service and projects in the same company",
    "Hot & Cold runs both. The handoffs that break are the ones between them — the same shape in most mechanical, electrical and plumbing contractors.",
    true,
  ],
  [
    "The accounting already works",
    "QuickBooks stayed at the centre. The system was built to feed it rather than to replace it, and nobody was asked to move their books.",
    true,
  ],
  [
    "Your process is standard, and you're happy to work the way a platform works",
    "Then buy the platform. It is cheaper and it is faster, and we will tell you which one on the first call. Hot & Cold's own reason for not doing that was that they'd have had to change their business structure.",
    false,
  ],
  [
    "You want a track record rather than a build",
    "This is one client, honestly presented. It is the first system of its kind we've put into a contracting business, and we'd rather you weigh it as that than as a logo wall.",
    false,
  ],
];

export default function HotAndColdCaseStudy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="cs-hero">
        <div className="grid-overlay" />
        <p className="eyebrow"><span /> CLIENT 001 · HOT &amp; COLD CORPORATION</p>
        <h1>The whole office ran on <em>one spreadsheet anyone could edit.</em></h1>
        <p className="cs-lede">
          Hot &amp; Cold is a commercial mechanical contractor in Maryland — thirty people,
          service and projects side by side. Until last year the whole office ran on one
          spreadsheet that anyone could edit, and service calls disappeared when somebody
          deleted a row. This is what we built, what it replaced, and what the client&apos;s own
          numbers say about it.
        </p>
        <div className="cs-spec">
          {SPEC.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="cs-before section-pad">
        <div className="cs-head">
          <p className="section-index">01 / BEFORE</p>
          <h2>Five places the work stopped.</h2>
          <p>
            None of them was a big problem. Each one was twenty minutes — which is exactly why
            it never got fixed. There is no day on which the twenty-minute problem is the most
            important thing in the business, and the ceiling gets built out of forty of them
            landing on the same two desks.
          </p>
        </div>

        <div className="before-list">
          {PAIRS.map(([title, before, after], i) => (
            <div className="before-row" key={title}>
              <b>0{i + 1}</b>
              <div>
                <h3>{title}</h3>
                <p>{before}</p>
              </div>
              <div>
                <span>WHAT HAPPENS NOW</span>
                <p>{after}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cs-running section-pad">
        <div className="cs-head">
          <p className="section-index">02 / RUNNING AT HOT &amp; COLD</p>
          <h2>What is in the business today.</h2>
          <p>
            The job gets recorded once, by the person who did it, on the phone already in his
            hand. The hours attach to it as they happen. The invoice is built from the same
            record, and nothing is retyped between the two ends.
          </p>
        </div>

        <div className="running-table">
          {RUNNING.map(([label, detail]) => (
            <div className="running-row" key={label}>
              <h3>{label}</h3>
              <p>{detail}</p>
            </div>
          ))}
        </div>

        <div className="running-note">
          <span>NO DEMO DATA, NO SAMPLE RECORDS</span>
          <p>
            Everything above is running in the business. <strong>What it replaced was one
            spreadsheet that anyone could edit</strong>, and the paper it was printed from.
          </p>
        </div>
      </section>

      <section className="cs-measured section-pad">
        <div className="cs-head">
          <p className="section-index amber">03 / WHAT IS MEASURED</p>
          <h2>The hours we can stand behind.</h2>
          <p>
            Two of these were counted in the business before the build — the client&apos;s own
            numbers, not ours. They are gone because the paper that consumed them is gone. The
            third is simply a fact about the office. Everything else this system is expected to
            do is in the block underneath, labelled as what it is.
          </p>
        </div>

        <div className="cs-metrics">
          <span className="metrics-label">MEASURED, AND RUNNING NOW</span>
          <div><strong>5–6 hrs</strong><span>A WEEK ON TIMESHEETS<br />AND TICKETS — GONE</span></div><i />
          <div><strong>1 hr</strong><span>EVERY MONDAY TYPING<br />LAST WEEK OFF PAPER — GONE</span></div><i />
          <div><strong>0</strong><span>SPREADSHEETS RUNNING<br />THE OFFICE</span></div>
        </div>

        <div className="cs-forward">
          <span>WHAT THE CLIENT EXPECTS NEXT — NOT YET MEASURED</span>
          <p>
            Service contracts from <strong>10</strong> to somewhere between <strong>20 and
            30</strong> on the same team, about a third of the office manager&apos;s role
            returned, and manpower efficiency recovered. These are the client&apos;s own
            expectations over the coming measurement window, not results we are asking you to
            take on faith. <strong>We will publish them when they are measured, not
            before.</strong>
          </p>
        </div>
      </section>

      <section className="cs-quote section-pad">
        <div className="cs-quote-head">
          <p className="section-index">FROM INSIDE THE OPERATION</p>
          <span>HOT &amp; COLD · CLIENT STORY</span>
        </div>
        <blockquote>
          &ldquo;We were running a multimillion dollar business on spreadsheets, which is
          insane.&rdquo;
        </blockquote>
        <blockquote>
          &ldquo;He is the point of contact and also the point of failure.&rdquo; — the COO on
          her father, forty years in the business.
        </blockquote>
        <div className="cs-attrib">
          <strong>Hot &amp; Cold Corporation</strong>
          <p>COO · HOT &amp; COLD</p>
          {DRAFT_NOTES && <small>NAME + PHOTO TO BE APPROVED</small>}
        </div>
      </section>

      <section className="cs-build section-pad">
        <div className="cs-head">
          <p className="section-index">04 / HOW IT WENT IN</p>
          <h2>One piece at a time, on real jobs.</h2>
          <p>
            No weekend cutover, no parallel running of two systems while everyone waits for the
            switch. Each piece went live where the work already was, got used on real jobs, and
            got fixed where it was wrong before the next one started.
          </p>
        </div>

        <ol className="build-steps">
          {BUILD.map(([title, copy, tag], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <strong>{tag}</strong>
            </li>
          ))}
        </ol>

        {DRAFT_NOTES && (
          <div className="honesty-note">
            <span>INTERNAL — NOT FOR LAUNCH</span>
            <p>
              Open against Hot &amp; Cold before this page ships: the go-live date; written
              permission to name the company (quote permission confirmed 24 Aug — naming is a
              separate confirmation); whether the QuickBooks two-way line is true of the build
              rather than planned; the company&apos;s actual city (Bethesda is Kortex&apos;s
              address, no source doc names Hot &amp; Cold&apos;s); and every elapsed-time figure
              for the build — weeks to the first working piece, hours of the owner&apos;s and
              office manager&apos;s time, how long the field crew took to get going, what data
              was migrated. The four steps here state the Kortex method — confirm each was true
              of this build. Get the answers from the client, then set DRAFT_NOTES to false. Do
              not estimate any of them.
            </p>
          </div>
        )}
      </section>

      <section className="cs-fit section-pad">
        <div className="cs-fit-copy">
          <p className="section-index amber">05 / DOES THIS READ ACROSS</p>
          <h2>Where this applies, and where it doesn&apos;t.</h2>
          <p>
            One client, named, with the numbers we have and the numbers we don&apos;t. Here is
            the honest test of whether the same build would do anything for your company.
          </p>
        </div>

        <div className="fit-list">
          {FIT.map(([title, copy, positive]) => (
            <article className={positive ? undefined : "negative"} key={title}>
              {positive ? <Check /> : <Arrow />}
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact">
        <div className="grid-overlay" />
        <p className="eyebrow"><span /> START WITH ONE REAL JOB</p>
        <h2>Show us how one job moves through your company.</h2>
        <p>
          We&apos;ll trace it from the first call to the money landing, the way we did here, and
          tell you plainly whether this is something you should build or buy off the shelf.
        </p>
        <div className="contact-actions">
          <a className="button" href="/v1/contact">Book a working session <Arrow /></a>
          <a className="direct-call" href="tel:+13018898546">OR CALL (301) 889-8546</a>
        </div>
      </section>
    </>
  );
}
