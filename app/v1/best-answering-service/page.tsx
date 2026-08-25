import type { Metadata } from "next";
import { Arrow, Check } from "@/components/v1/icons";
import { v1 } from "@/components/v1/paths";
import { MissedCallReviewForm } from "./missed-call-review-form";
import "./answering.css";

// Source of truth: the senior-reviewed copy + design doc
// (kortex-best-answering-service-page-copy-and-design.md, Aug 2026).
// Standing rules from it, do not undo:
//  - Openly disclosed comparison: Kortex competes with the providers on this
//    page, and the disclosure stays prominent in the hero.
//  - Live, AI and hybrid coverage get equal visual weight — no green-check /
//    red-cross ranking, no "#1" badge on Kortex, no star ratings without a
//    documented scoring method.
//  - Provider pricing is sourced and dated (checked August 2026 against
//    provider-owned pricing pages). Never publish a precise AnswerConnect plan
//    price without a fresh direct source — their public pages did not expose a
//    consistent plan table.
//  - No provider logos, no imitation of their sites, no stock or generated
//    people. Visuals are HTML/CSS only.
//  - The proof section stays placeholder-only (all .ph) until a real,
//    client-approved call-coverage story exists.
//  - The interactive cost calculator is a launch decision still open in the
//    doc ("Decide whether the cost calculator is available at launch") — this
//    build ships the formulas and checklist, not a live calculator.
// Bracketed copy renders highlighted via ph() so reviewers can spot every
// claim that still needs sign-off before publishing.

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "Best Answering Service for Contractors in 2026 | Honest Comparison",
  description:
    "Compare live, AI and hybrid answering services for contractors. See provider pricing, strengths, tradeoffs and whether each service books the job or only takes a message.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/best-answering-service` },
};

/* Bracketed values in the copy are unconfirmed. They render highlighted so a
   reviewer can spot every claim that still needs sign-off before publishing. */
const ph = (s: string) =>
  s.split(/(\[[^\]]*\])/).map((part, i) =>
    part.startsWith("[") ? <span className="ph" key={i}>{part}</span> : part
  );

/* Five what-best-means cards. Plain phone / workflow icons, no call-center
   stock imagery. */
const NEEDS: { d: string[]; t: string; p: string }[] = [
  {
    d: ["M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"],
    t: "Answer quickly",
    p: "The caller should reach a useful response during office hours, after hours and when several calls arrive together.",
  },
  {
    d: ["M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z", "M9.1 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", "M12 17h.01"],
    t: "Understand the type of call",
    p: "A new service enquiry, existing-customer complaint, sales call and genuine emergency should not follow the same path.",
  },
  {
    d: ["M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", "M16 2v4", "M8 2v4", "M3 10h18", "m8.5 15 2.5 2.5 4.5-4.5"],
    t: "Complete the approved next step",
    p: "That may mean taking a message, booking against real availability, collecting job information or transferring the call to the correct person.",
  },
  {
    d: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"],
    t: "Protect the customer experience",
    p: "The greeting, questions, boundaries and escalation rules should reflect the way your company wants calls handled.",
  },
  {
    d: ["M12 1v22", "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"],
    t: "Make the total cost predictable",
    p: "Included minutes, rounding, after-call work, overage, setup and add-ons can matter more than the headline monthly price.",
  },
];

/* Live / AI / hybrid — equal visual weight throughout. */
const COVERAGE: { tag: string; t: string; best: string; strength: string; tradeoff: string; example: string }[] = [
  {
    tag: "LIVE-HUMAN ANSWERING SERVICE",
    t: "A person on every call",
    best: "Calls are sensitive, unpredictable or depend on empathy and judgment.",
    strength: "Human nuance, flexible conversation and better handling of emotional or unusual situations.",
    tradeoff: "Usually priced by time or usage; quality can vary by agent; busy-period capacity and after-call work should be checked.",
    example: "An upset existing customer who needs to be heard before anything gets scheduled.",
  },
  {
    tag: "AI RECEPTIONIST",
    t: "A defined process on every call",
    best: "Calls are repetitive, high-volume or need to follow a clear qualification, booking or escalation process.",
    strength: "Consistent questions, immediate availability and direct completion of defined tasks where integrations allow. Concurrent-call capacity depends on the provider and setup.",
    tradeoff: "Must have clear boundaries; unusual, sensitive or angry callers still need a human path; integrations and call rules require testing.",
    example: "An after-hours service booking that follows the same questions every time.",
  },
  {
    tag: "HYBRID COVERAGE",
    t: "Process for the routine, people for the rest",
    best: "Most calls follow a standard process, but a meaningful minority need human judgment.",
    strength: "AI can handle routine calls while live staff or a human service handles exceptions.",
    tradeoff: "More moving parts, two cost structures and the need for clear handoff rules.",
    example: "Routine qualification handled automatically, with a human path for genuine emergencies.",
  },
];

/* Four provider cards — same structure and visual weight for all four.
   PATLive and Ruby prices come from their own pricing pages, checked
   August 2026 (sources in the copy doc). AnswerConnect gets no dollar figure:
   their public pages did not expose a consistent plan table. */
const PROVIDERS: { name: string; type: string; fit: string; priceLabel: string; pricing: React.ReactNode; question: string; tag: string }[] = [
  {
    name: "AnswerConnect",
    type: "Live-human answering service",
    fit: "You want established 24/7 live coverage, appointment scheduling and lead qualification across a wide range of calls.",
    priceLabel: "PRICING",
    pricing: "AnswerConnect uses monthly plans based on included minutes. Confirm current plan, rounding, after-call-work and overage terms directly before buying.",
    question: "Does appointment scheduling create a confirmed booking inside the calendar you use, or a preferred time your team must confirm?",
    tag: "REQUEST CURRENT QUOTE",
  },
  {
    name: "PATLive",
    type: "Live, US-based receptionist service",
    fit: "You want human coverage with a low-commitment entry option or variable call volume.",
    priceLabel: "PUBLISHED PRICING CHECKED AUGUST 2026",
    pricing: "Pay-as-you-go is listed at $75 per month plus $2.60 per minute. Published plans begin at $250 per month for 75 minutes, with larger minute packages available. Taxes and fees are additional.",
    question: "At your actual call length, how quickly will the included minutes be used and what happens during a volume spike?",
    tag: "VERIFIED AUGUST 2026",
  },
  {
    name: "Ruby",
    type: "Premium live-human receptionist service",
    fit: "The warmth and quality of the first conversation matter more than the lowest cost per minute.",
    priceLabel: "PUBLISHED PRICING CHECKED AUGUST 2026",
    pricing: "Ruby lists $250 per month for 50 minutes, $395 for 100, $720 for 200 and $1,725 for 500.",
    question: "Is the premium interaction quality valuable enough for the type and value of calls your company receives?",
    tag: "VERIFIED AUGUST 2026",
  },
  {
    name: "Kortex AI Receptionist",
    type: "Custom AI receptionist",
    fit: "Call volume, long coverage hours or repeated qualification and booking steps make a defined automated workflow valuable.",
    priceLabel: "PRICING",
    pricing: ph("[INSERT VERIFIED KORTEX COMMERCIAL MODEL. DO NOT CLAIM A PRICE UNTIL STANDARDIZED.]"),
    question: "Which calls can safely follow approved rules, and what must always transfer to a person?",
    tag: "REQUEST CURRENT QUOTE",
  },
];

const COST_ADDS = [
  "Overage rates",
  "Rounding rules",
  "After-call work",
  "Setup or onboarding fees",
  "Scheduling, bilingual, chat or integration add-ons",
  "Unused minutes or plan minimums",
];

/* Free-review centerpiece: inputs in, one of four recommendations out —
   including "keep current setup", so the page shows Kortex is willing to
   recommend something other than itself. */
const REVIEW_INPUTS = [
  "Missed-call pattern",
  "Call types",
  "Call volume",
  "Job value",
  "Current coverage",
];

const REVIEW_RECS: [string, string][] = [
  ["Live-human service", "The calls that matter depend on empathy and judgment."],
  ["AI receptionist", "The volume and repetition justify a defined automated workflow."],
  ["Hybrid coverage", "Routine calls follow a process; exceptions reach a person."],
  ["Keep current setup", "The numbers do not support changing anything yet."],
];

const LEAVE = [
  "An estimate of the opportunity connected to unanswered calls",
  "The calls that can follow a defined process",
  "The calls that still need human judgment",
  "Whether live, AI or hybrid coverage appears to fit better",
  "The normal and exception calls to test before signing",
  "Whether a Kortex AI receptionist is likely to justify its cost",
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is the best answering service for a contractor?",
    a: "The best service is the one that handles your actual call types correctly. Live human coverage is often better for complex or sensitive conversations. AI may fit repetitive, high-volume qualification and booking. Hybrid coverage can be strongest when routine calls and exceptions need different paths.",
  },
  {
    q: "How much does an answering service cost?",
    a: "Pricing may be based on minutes, calls, features or a custom quote. Compare the full monthly cost at your expected volume, including overage, rounding, after-call work, setup and add-ons.",
  },
  {
    q: "Can answering services book appointments?",
    a: "Many providers offer appointment scheduling. Confirm whether they book against real availability in your actual calendar or simply collect a preferred time for your team to confirm later.",
  },
  {
    q: "Should every call go to AI?",
    a: "No. Sensitive, unusual, emotional or high-risk calls may need a person. Define the calls AI may handle, the calls it must transfer and what happens when nobody is available.",
  },
  {
    q: "What should we test before signing?",
    a: "Test normal calls, exceptions, emergencies, service-area rules, unavailable schedules, transfers, messages and the records your team receives afterward.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function BestAnsweringServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero — one call, three possible endings. No branch is styled the winner. */}
      <section className="bas-hero bas-dark">
        <div className="grid-overlay" />
        <div className="bas-hero-grid">
          <div>
            <p className="eyebrow"><span /> ANSWERING SERVICES FOR CONTRACTORS &mdash; COMPARED</p>
            <h1>The best answering service does not just pick up. It completes the <em>next step</em>.</h1>
            <p className="bas-lede">
              Some services take a message. Others qualify the caller, book the job or transfer an
              emergency while the customer is still on the phone.
            </p>
            <p className="bas-lede">
              Compare live-human, AI and hybrid options by what the call needs to
              accomplish&mdash;not only the monthly price.
            </p>
            <div className="actions">
              <a className="button" href="#review-form">Get my free Missed-Call Review <Arrow /></a>
              <a className="inline-link" href={v1("/ai-receptionist") + "#hear-a-call"}>Hear an AI receptionist handle a call <Arrow /></a>
            </div>
            <p className="bas-support">
              We will help you estimate what unanswered calls may be costing and which type of
              coverage fits your operation.
            </p>
            <div className="bas-disclosure">
              <span>DISCLOSURE</span>
              <p>
                Kortex builds AI receptionists, so we compete with providers discussed on this
                page. Where a live-human service is the better answer, we say so. Provider
                information was checked against published sources in August 2026 and should be
                verified before purchase.
              </p>
            </div>
          </div>

          <div className="bas-branch" role="img" aria-label="One incoming contractor call with three possible endings: a message taken, a human resolving the issue, or a qualified booking confirmed. The question is what the caller needs completed.">
            <div className="bas-branch-top">
              <span>INCOMING CONTRACTOR CALL</span>
              <p>&ldquo;Our AC quit and I need someone out this week.&rdquo;</p>
            </div>
            <div className="bas-branch-paths">
              <div className="bas-branch-path">
                <strong>Message taken</strong>
                <p>Caller details collected &rarr; office must call back</p>
              </div>
              <div className="bas-branch-path">
                <strong>Human resolution</strong>
                <p>Live receptionist handles a complex or sensitive issue</p>
              </div>
              <div className="bas-branch-path">
                <strong>Qualified booking</strong>
                <p>Defined questions answered &rarr; real calendar checked &rarr; appointment confirmed</p>
              </div>
            </div>
            <div className="bas-branch-q">WHAT DOES THIS CALLER NEED COMPLETED?</div>
          </div>
        </div>
      </section>

      {/* 01 — what "best" means */}
      <section className="bas-needs section-pad">
        <div className="bas-head">
          <p className="section-index">01 / START WITH THE CALLER &mdash; NOT THE PROVIDER</p>
          <h2>What needs to happen before the caller hangs up?</h2>
          <p>
            A contractor does not need the &ldquo;best answering service&rdquo; in the abstract.
            The right service depends on the calls coming in and what your business needs done
            with them.
          </p>
        </div>
        <div className="bas-needs-grid">
          {NEEDS.map((n) => (
            <article key={n.t}>
              <svg viewBox="0 0 24 24" aria-hidden="true">{n.d.map((d) => <path key={d} d={d} />)}</svg>
              <h3>{n.t}</h3>
              <p>{n.p}</p>
            </article>
          ))}
        </div>
        <p className="bas-closing">
          Before comparing providers, decide which calls need a person, which can follow a defined
          process and which must end in a confirmed booking.
        </p>
      </section>

      {/* 02 — live, AI or hybrid. Three equal cards. */}
      <section className="bas-coverage bas-dark section-pad">
        <div className="bas-head">
          <p className="section-index amber">02 / THREE TYPES OF CALL COVERAGE</p>
          <h2>The best choice depends on how much judgment the call requires.</h2>
        </div>
        <div className="bas-coverage-grid">
          {COVERAGE.map((c) => (
            <article key={c.tag}>
              <span className="bas-cover-tag">{c.tag}</span>
              <h3>{c.t}</h3>
              <dl>
                <div><dt>BEST WHEN</dt><dd>{c.best}</dd></div>
                <div><dt>STRENGTHS</dt><dd>{c.strength}</dd></div>
                <div><dt>TRADEOFFS</dt><dd>{c.tradeoff}</dd></div>
              </dl>
              <p className="bas-cover-example"><span>EXAMPLE CALL</span>{c.example}</p>
            </article>
          ))}
        </div>
        <div className="bas-verdict">
          <p>
            Many contractors should not choose one type for every call. After-hours AI, daytime
            office staff and human escalation may be the better operating model.
          </p>
        </div>
      </section>

      {/* 03 — provider comparison. Four stacked cards, equal weight, no ranking. */}
      <section className="bas-providers section-pad">
        <div className="bas-head">
          <p className="section-index">03 / FOUR DIFFERENT FITS</p>
          <h2>Which answering option matches the calls you actually receive?</h2>
        </div>
        <div className="bas-provider-list">
          {PROVIDERS.map((p) => (
            <article className="bas-provider" key={p.name}>
              <div className="bas-provider-id">
                <h3>{p.name}</h3>
                <span>{p.type}</span>
                <i className="bas-provider-tag">{p.tag}</i>
              </div>
              <div className="bas-provider-cell">
                <span>MAY FIT BEST WHEN</span>
                <p>{p.fit}</p>
              </div>
              <div className="bas-provider-cell">
                <span>{p.priceLabel}</span>
                <p>{p.pricing}</p>
              </div>
              <div className="bas-provider-cell">
                <span>QUESTION TO ASK</span>
                <p>{p.question}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="bas-accuracy">
          <span>ACCURACY AND AFFILIATION NOTE</span>
          <p>
            Provider products, prices and terms change. Verify current information directly.
            Kortex is not affiliated with, endorsed by or sponsored by AnswerConnect, PATLive or
            Ruby. All trademarks belong to their respective owners.
          </p>
        </div>
      </section>

      {/* 04 — real cost. Formulas and checklist; the interactive calculator is
           a still-open launch decision in the copy doc, so it is not built. */}
      <section className="bas-cost bas-dark section-pad">
        <div className="bas-head">
          <p className="section-index amber">04 / EVERY PROVIDER GIVES YOU A MONTHLY PRICE. DIVIDE IT.</p>
          <h2>Then ask what the call actually completed.</h2>
        </div>
        <div className="bas-cost-grid">
          <div className="bas-cost-col">
            <p className="bas-cost-label">FOR EVERY PROVIDER, CALCULATE:</p>
            <p className="bas-formula">Monthly price &divide; included minutes<br /><b>= effective included-minute rate</b></p>
            <p className="bas-cost-label">THEN ADD:</p>
            <ul>
              {COST_ADDS.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div className="bas-cost-col">
            <p className="bas-cost-copy">
              <strong>But do not stop at talk time.</strong> A lower-priced service can become
              expensive if every call produces a message your office must return. A higher-priced
              service can be worthwhile when the interaction genuinely requires a skilled person.
            </p>
            <p className="bas-cost-label">THE USEFUL COMPARISON IS:</p>
            <p className="bas-formula">Total monthly cost &divide; qualified calls completed correctly</p>
            <p className="bas-cost-label">FOR APPOINTMENT-DRIVEN BUSINESSES, ALSO COMPARE:</p>
            <p className="bas-formula">Total monthly cost &divide; confirmed appointments booked</p>
            <div className="bas-cost-warning">
              <p>
                Do not call a collected &ldquo;preferred time&rdquo; a booking if someone on your
                team still has to call back and confirm it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — free missed-call review centerpiece */}
      <section className="bas-review section-pad">
        <div className="bas-head">
          <p className="section-index">05 / COMPARE USING YOUR CALLS</p>
          <h2>Find the right coverage before choosing the provider.</h2>
          <p>
            Kortex will look at when calls are being missed, what one booked job is worth and what
            each call type needs to accomplish.
          </p>
        </div>
        <div className="bas-review-grid">
          <div className="bas-review-model" aria-label="The review takes your call inputs and returns one of four coverage recommendations">
            <div className="bas-review-inputs">
              <span>WHAT WE LOOK AT</span>
              <ul>
                {REVIEW_INPUTS.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </div>
            <i className="bas-review-arrow" aria-hidden="true" />
            <div className="bas-review-recs">
              <span>FOUR POSSIBLE RECOMMENDATIONS &mdash; WE WILL MAKE ANY OF THEM</span>
              <ol>
                {REVIEW_RECS.map(([t, p]) => (
                  <li key={t}><strong>{t}</strong><p>{p}</p></li>
                ))}
              </ol>
            </div>
          </div>
          <div className="bas-review-copy">
            <p className="bas-leave-label">YOU WILL LEAVE WITH:</p>
            <ul className="bas-leave">
              {LEAVE.map((t) => <li key={t}><Check /> {t}</li>)}
            </ul>
            <p className="bas-honest">If a live service is the better answer, we will tell you.</p>
            <div className="bas-review-cta">
              <a className="button" href="#review-form">Get my free Missed-Call Review <Arrow /></a>
              <span className="bas-reassure">YOUR CALL PATTERNS &middot; FAIR RECOMMENDATION &middot; NO OBLIGATION</span>
            </div>
            <p className="bas-note">{ph("[CONFIRM SESSION LENGTH, DATA REQUIRED, DELIVERY FORMAT AND WHETHER IT IS FREE.]")}</p>
          </div>
        </div>
      </section>

      {/* 06 — proof. Placeholder-only until a real, approved story exists. */}
      <section className="bas-proof bas-dark section-pad">
        <p className="bas-hidden-note">{ph("[HIDE THIS SECTION UNTIL REAL EVIDENCE IS AVAILABLE. DO NOT USE GENERATED PEOPLE OR INVENTED RESULTS.]")}</p>
        <p className="section-index amber">06 / CLIENT RESULT</p>
        <h2>From unanswered calls to completed next steps.</h2>
        <div className="bas-proof-grid">
          <div className="bas-proof-facts">
            <div><span>BEFORE</span><p>{ph("[CONTRACTOR] was missing [VERIFIED NUMBER OR PERCENTAGE] of calls during [VERIFIED PERIOD OR CONDITION].")}</p></div>
            <div><span>WHAT CHANGED</span><p>{ph("[DESCRIBE THE LIVE, AI OR HYBRID COVERAGE AND THE CALL TYPES IT HANDLED.]")}</p></div>
            <div><span>VERIFIED RESULT</span><p>{ph("[INSERT ANSWER RATE, QUALIFIED CALLS, BOOKINGS, TRANSFERS, RESPONSE TIME OR RECOVERED OPPORTUNITY OVER A DEFINED PERIOD.]")}</p></div>
          </div>
          <figure className="bas-proof-person">
            <div className="bas-portrait-slot">{ph("[REAL CLIENT PHOTO]")}</div>
            <blockquote>{ph("“[INSERT A SPECIFIC CLIENT QUOTE ABOUT CALL QUALITY, CUSTOMER EXPERIENCE AND THE BUSINESS EFFECT.]”")}</blockquote>
            <figcaption>{ph("[FULL NAME]")}<br />{ph("[ROLE], [COMPANY]")}</figcaption>
          </figure>
        </div>
      </section>

      {/* 07 — FAQ */}
      <section className="bas-faq faq section-pad">
        <div className="bas-faq-grid">
          <div>
            <p className="section-index">07 / FREQUENTLY ASKED QUESTIONS</p>
            <h2>What owners ask before signing.</h2>
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

      {/* 08 — final CTA + two-step form */}
      <section className="bas-final bas-dark section-pad">
        <div className="grid-overlay" />
        <div className="bas-head" style={{ position: "relative", zIndex: 2 }}>
          <p className="section-index amber">08 / THE PROVIDER COMES AFTER THE CALL REQUIREMENT</p>
          <h2>Find the right answering model for your business.</h2>
        </div>
        <div className="bas-final-grid" style={{ position: "relative", zIndex: 2 }}>
          <div className="bas-final-promise">
            <p>
              Bring your call volume, missed-call pattern and average booked-job value. Kortex
              will help you compare live, AI and hybrid coverage using the work each call needs to
              complete.
            </p>
            <p>
              The review is a comparison of coverage models, not a sales demo &mdash; and
              &ldquo;keep your current setup&rdquo; is one of the recommendations we make.
            </p>
            <a className="direct-call" href="tel:+13018898546">OR CALL (301) 889-8546</a>
          </div>
          <div className="bas-form-wrap" id="review-form">
            <MissedCallReviewForm />
          </div>
        </div>
      </section>
    </>
  );
}
