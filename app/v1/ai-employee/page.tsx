import type { Metadata } from "next";
import { Arrow, Check } from "@/components/v1/icons";
import { BottleneckReviewForm } from "./bottleneck-review-form";
import "./employee.css";

// Source of truth: the senior-reviewed copy + design doc
// (kortex-ai-employee-page-copy-and-design.md, Aug 2026).
// Standing rules from it, do not undo:
//  - Legacy search doorway. It stays OUT of the primary navigation; the
//    Operations System remains the lead offer. Footer/resource links only.
//  - Owner-outcome page: it sells mental freedom, visibility, efficiency and
//    room to scale — not "more AI". Kortex does not sell a fictional
//    replacement person; software carries defined work, a person owns the
//    outcome. Keep that distinction and the stop conditions visible.
//  - Banned vocabulary: "digital worker", "digital workforce", "AI workforce",
//    "always-on worker", autonomy, orchestration, model, reasoning,
//    staff-replacement or equivalent-headcount cost claims.
//  - The Free Operations Bottleneck Review is the only dominant offer; every
//    primary CTA scrolls to the same form (#review-form). Secondary action is
//    the phone. Internal note: use this offer only if Kortex can provide the
//    stated diagnostic — otherwise switch to the standard Free Workflow
//    Review with the same owner-centered copy.
//  - The proof section is NOT rendered: no real client, production system,
//    approved quote, image and measured result exist yet. When approved,
//    place one compact band immediately after the owner outcomes showing the
//    dependency before, system responsibility after, human stop conditions,
//    one measured result and a real name/role/company/photo. Never a
//    generated person, anonymous quote or estimated result.
//  - No robots, digital humans, employee avatars, AI brains, glowing agents,
//    virtual-office imagery, generated people or futuristic dashboards.
//  - Amber is reserved for human decisions, stop conditions and the one CTA
//    per screenful. The after-state must not imply zero owner involvement.
//  - Contractor examples must not duplicate the Receptionist, Customer
//    Service or SDR pages; broader owner-dependence routes to the Operations
//    System.
// Bracketed copy renders highlighted via ph() so reviewers can spot every
// claim that still needs sign-off before publishing.

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "AI Employee for Business | What It Can Safely Handle | Kortex",
  description:
    "See how one defined business responsibility can move without living in the owner’s head—while people remain responsible for decisions and exceptions.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/ai-employee` },
};

/* Bracketed values in the copy are unconfirmed. They render highlighted so a
   reviewer can spot every claim that still needs sign-off before publishing. */
const ph = (s: string) =>
  s.split(/(\[[^\]]*\])/).map((part, i) =>
    part.startsWith("[") ? <span className="ph" key={i}>{part}</span> : part
  );

/* Hero before/after responsibility map — design-spec strings. All five
   before-lines point at the owner; only one after-line does. */
const MAP_BEFORE = [
  "Is the job ready to bill?",
  "Who is waiting for approval?",
  "What document is missing?",
  "Did anybody follow up?",
  "What happens next?",
];
const MAP_AFTER: { from: string; to: string; owner?: boolean }[] = [
  { from: "Complete jobs", to: "billing review" },
  { from: "Missing records", to: "requested" },
  { from: "Routine status", to: "visible" },
  { from: "Price / dispute / safety", to: "OWNER DECISION", owner: true },
];

/* Owner-dependency recognition — the five real questions, in large type. */
const QUESTIONS = [
  "“Is this job ready to bill?”",
  "“Who is waiting for this approval?”",
  "“Did the customer send the missing document?”",
  "“What should happen with this exception?”",
  "“Has anyone followed up?”",
];

/* Plain-English responsibility strip. Step 5 is the human-stop point and
   stays visually prominent. */
const STEPS = [
  "Receive a defined piece of work",
  "Check approved information",
  "Complete permitted steps",
  "Show what is done, missing or delayed",
  "Stop and bring exceptions to a named person",
];

/* Three contractor responsibility rows: Today → System responsibility →
   Person decides. Examples, not packages — they must not read as products. */
const RESPONSIBILITIES: { t: string; today: string; system: string; person: string }[] = [
  {
    t: "Make completed work ready for billing review",
    today: "The office checks notes, photos, labor and approvals, then chases whatever is missing.",
    system: "Checking the approved job record, identifying missing items and moving complete jobs to the billing-review queue.",
    person: "Scope changes, pricing, disputes and final billing approval.",
  },
  {
    t: "Keep required records complete",
    today: "Certificates, payroll records and project documents are tracked through inboxes, folders and memory.",
    system: "Checking requirements, requesting missing records and showing what remains unresolved.",
    person: "Whether a record is acceptable and what happens when a requirement is not met.",
  },
  {
    t: "Put the real exceptions in front of the right person",
    today: "The owner reviews too much because the team cannot easily separate routine work from real decisions.",
    system: "Moving permitted steps forward and creating one clear list of the cases that genuinely need attention.",
    person: "Commercial, contractual, safety, employment and customer-sensitive matters.",
  },
];

/* Owner-outcome centerpiece — the page's emotional and commercial high point.
   Owner-facing copy only; never process metrics or technical capabilities. */
const OUTCOMES: [string, string][] = [
  ["Less held in your head", "The next step, missing item and responsible person are visible instead of remembered."],
  ["One place to see what needs attention", "You can see what is done, delayed, missing or waiting for a decision without asking several people."],
  ["Less repetitive office work", "Your team spends less time checking, copying and chasing information."],
  ["Fewer avoidable interruptions", "Routine cases continue without returning to you. Only the decisions that require authority or judgment reach your desk."],
  ["More room to scale deliberately", "Your attention moves from keeping today’s work together to capacity, people, customers and the next stage of the business."],
];

/* Boundaries: the operating card and the five stay-human conditions. */
const DEFINE_FIRST = [
  "The one responsibility it carries",
  "The information it may use",
  "The actions it may take",
  "The situations it must never decide alone",
  "The person who reviews exceptions and changes the rules",
];
const STAY_HUMAN = [
  "The work has no agreed correct outcome",
  "Different employees follow different rules",
  "A mistake would be expensive, unsafe or difficult to reverse",
  "The information is unreliable or changes constantly",
  "The result depends on trust, negotiation or knowledge of the people involved",
];

/* Review: what waits for the owner separates into four honest recommendations. */
const SEPARATES = [
  "Work that needs a clearer process",
  "Work that can move through simple rules",
  "Work that may need a bounded system or agent",
  "Decisions that should continue to reach you or another authorized person",
];

const FAQS: [string, string][] = [
  ["What is an AI employee?",
   "“AI employee” is a marketing term for software given responsibility for a defined piece of work. It can review approved information, complete permitted steps and route exceptions. A person still owns the business outcome."],
  ["Is an AI employee different from an AI agent?",
   "Not in a meaningful technical sense. The label describes a wider responsibility. The risk is that “employee” makes the system sound more capable or accountable than it is."],
  ["Can it replace an employee?",
   "That should not be the starting goal. Begin with repetitive work that can be clearly defined and checked. People should keep responsibility for relationships, judgment and consequential decisions."],
  ["Can it make decisions on its own?",
   "Only within limits approved for that workflow. Financial, contractual, safety, employment and uncertain decisions should stop for an authorized person unless a narrower rule has been explicitly approved and tested."],
  ["How much could this save?",
   "That depends on the current workload, error cost, systems involved and ongoing oversight required. Kortex should review the real process before estimating time or cost savings."],
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Employee for Business | What It Can Safely Handle",
    description:
      "See how one defined business responsibility can move without living in the owner’s head—while people remain responsible for decisions and exceptions.",
    url: `${SITE}/ai-employee`,
    publisher: {
      "@type": "Organization",
      name: "Kortex Consulting",
      url: SITE,
      telephone: "+1-301-889-8546",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

export default function V1AiEmployeePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 01 — hero: 7/5 split. Copy left; before/after responsibility map
          right. No person photograph, no character, no dashboard. */}
      <section className="aie-hero aie-dark">
        <div className="grid-overlay" />
        <div className="aie-hero-grid">
          <div>
            <p className="eyebrow"><span /> WHAT AN &ldquo;AI EMPLOYEE&rdquo; CAN ACTUALLY DO</p>
            <h1>Stop being the person who has to remember what happens next.</h1>
            <p className="aie-lede">
              The useful version of an AI employee is not a digital person. It is a system
              responsible for one repeatable part of the operation&mdash;checking what happened,
              moving approved next steps forward and bringing only the real decisions to your team.
            </p>
            <div className="actions">
              <a className="button" href="#review-form">See what could run without me <Arrow /></a>
              <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
            </div>
            <p className="aie-support">
              Tell us what keeps coming back to you. We&rsquo;ll show you what could be documented,
              automated or built into the operation&mdash;and what still needs your judgment.
            </p>
            <ul className="aie-trust">
              <li><Check /> ONE DEFINED RESPONSIBILITY</li>
              <li><Check /> VISIBLE EXCEPTIONS</li>
              <li><Check /> A PERSON REMAINS ACCOUNTABLE</li>
            </ul>
          </div>
          {/* Before/after responsibility map. All five before-lines converge
              on OWNER; after, routine work moves and only real decisions
              surface. Fewer lines reach the owner — never zero. */}
          <aside className="aie-map" aria-label="Before and after: what reaches the owner">
            <div className="aie-map-panel">
              <span className="aie-map-tag">BEFORE &mdash; OWNER AS THE SYSTEM</span>
              <div className="aie-map-before">
                <ul>
                  {MAP_BEFORE.map((q) => <li key={q}>{q}<i aria-hidden="true" /></li>)}
                </ul>
                <div className="aie-map-owner"><span>OWNER</span></div>
              </div>
            </div>
            <div className="aie-map-panel aie-map-panel-after">
              <span className="aie-map-tag">AFTER &mdash; ROUTINE WORK MOVES; DECISIONS SURFACE</span>
              <ul className="aie-map-after">
                {MAP_AFTER.map((r) => (
                  <li key={r.from} className={r.owner ? "aie-map-decision" : undefined}>
                    <span>{r.from}</span>
                    <i aria-hidden="true"><Arrow /></i>
                    <strong>{r.to}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* 02 — owner-dependency recognition. Five real questions in large
          type, stacked toward the Owner/Founder label. An emotional
          recognition moment, not a diagram. */}
      <section className="aie-dep section-pad">
        <p className="section-index">THE OWNER IS STILL THE SYSTEM</p>
        <h2>If the team keeps coming back to you, the process is not truly independent yet.</h2>
        <p className="aie-dep-lede">
          Your office may handle most of the work. But when something is missing, late or unusual,
          it returns to you:
        </p>
        <div className="aie-dep-grid">
          <ol className="aie-questions">
            {QUESTIONS.map((q) => <li key={q}>{q}<i aria-hidden="true" /></li>)}
          </ol>
          <div className="aie-dep-owner" aria-hidden="true"><span>OWNER / FOUNDER</span></div>
        </div>
        <p className="aie-dep-closing">
          <strong>You answer because the rule or next step still lives in your head.</strong> That
          keeps your attention inside today&rsquo;s problems when it should be available for hiring,
          capacity, customers and growth.
        </p>
      </section>

      {/* 03 — AI employee in plain English: drop the metaphor, then the
          five-step responsibility strip with a prominent human stop. */}
      <section className="aie-plain aie-dark section-pad">
        <p className="eyebrow"><span /> DROP THE EMPLOYEE METAPHOR</p>
        <h2>Do not give software a job title. Give it one clear responsibility.</h2>
        <p className="aie-plain-lede">
          A person can notice an unusual situation, learn from the room and accept responsibility.
          Software cannot do those things in the same way.
        </p>
        <p className="aie-plain-label">What a bounded system can do is narrower and more useful:</p>
        <ol className="aie-steps" aria-label="What a bounded system can do">
          {STEPS.map((s, i) => (
            <li key={s} className={i === 4 ? "aie-step-stop" : undefined}>
              <span>{i + 1}</span>
              <p>{s}</p>
            </li>
          ))}
        </ol>
        <p className="aie-plain-closing">
          That is not an employee. It is a defined operating responsibility with clear limits and
          a person accountable for the result.
        </p>
      </section>

      {/* 04 — three contractor responsibility rows. Today → System
          responsibility → Person decides. Examples, not packages. */}
      <section className="aie-resp section-pad">
        <p className="section-index">START WITH ONE RECURRING BURDEN</p>
        <h2>Choose work your business already does repeatedly&mdash;but still has to chase by hand.</h2>
        <div className="aie-resp-rows">
          {RESPONSIBILITIES.map((r) => (
            <article key={r.t}>
              <h3>{r.t}</h3>
              <div className="aie-resp-cols">
                <div><span>TODAY</span><p>{r.today}</p></div>
                <div><span>A SYSTEM COULD BE RESPONSIBLE FOR</span><p>{r.system}</p></div>
                <div className="aie-resp-person"><span>A PERSON STILL DECIDES</span><p>{r.person}</p></div>
              </div>
            </article>
          ))}
        </div>
        <p className="aie-resp-note">
          These are examples, not packages. The right first responsibility depends on where work
          repeatedly slows down and the consequence of a mistake.
        </p>
      </section>

      {/* 05 — owner-outcome centerpiece: the page's emotional and commercial
          high point. High-contrast, full-width. */}
      <section className="aie-outcomes aie-dark section-pad">
        <p className="eyebrow"><span /> THE OUTCOME IS NOT &ldquo;MORE AI&rdquo;</p>
        <h2 className="aie-outcomes-h2">Finally, you have more time to think about where the business is going.</h2>
        <p className="aie-outcomes-lede">
          The goal is to stop using the owner&rsquo;s attention as the system that holds everything
          together.
        </p>
        <div className="aie-outcome-grid">
          {OUTCOMES.map(([t, p], i) => (
            <article key={t}>
              <span>0{i + 1}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
        <p className="aie-outcomes-closing">
          The business becomes easier to see and less dependent on what one person remembers.
        </p>
        <p className="aie-note">{ph("[THESE ARE INTENDED OPERATIONAL OUTCOMES, NOT GUARANTEED RESULTS. ADD MEASURED CLAIMS ONLY AFTER CLIENT PROOF EXISTS.]")}</p>
      </section>

      {/* Proof section intentionally not rendered: no real client, production
          system, approved quote, image and measured result exist yet. When
          approved, place one compact band here — immediately after the owner
          outcomes — showing the owner dependency before, the system
          responsibility after, the human stop conditions, one measured
          owner-time or operational result, and a real client name, role,
          company, image and quote. Never a generated person, anonymous quote
          or estimated result. */}

      {/* 06 — boundaries: one operating card beside the five stay-human
          conditions. Software carries work; it cannot carry accountability. */}
      <section className="aie-bounds section-pad">
        <p className="section-index">SOFTWARE CAN CARRY WORK. IT CANNOT CARRY ACCOUNTABILITY.</p>
        <h2>A named person still owns every important outcome.</h2>
        <div className="aie-bounds-grid">
          <aside className="aie-opcard" aria-label="What to define before the system is allowed to act">
            <span className="aie-opcard-tag">BEFORE THE SYSTEM IS ALLOWED TO ACT, DEFINE:</span>
            <ol>
              {DEFINE_FIRST.map((d, i) => (
                <li key={d} className={i >= 3 ? "is-stop" : undefined}>
                  <span>0{i + 1}</span><p>{d}</p>
                </li>
              ))}
            </ol>
          </aside>
          <div className="aie-nogo">
            <strong>Do not use an AI employee framing when:</strong>
            <ul>
              {STAY_HUMAN.map((c) => <li key={c}><Arrow /> {c}</li>)}
            </ul>
            <p className="aie-nogo-closing">
              In those cases, improve the process or keep the decision with a person.
            </p>
          </div>
        </div>
      </section>

      {/* 07 — Free Operations Bottleneck Review: question-led diagnostic with
          four honest recommendations, beside the form. */}
      <section id="review-form" className="aie-review aie-dark section-pad">
        <div className="aie-review-panel">
          <p className="eyebrow"><span /> WHAT STILL WAITS FOR YOU?</p>
          <h2>How much of the business stops, slows down or comes back when you are not available?</h2>
          <div className="aie-review-grid">
            <div>
              <p className="aie-review-lede">
                Tell us where the team keeps waiting for your answer, your memory or your approval.
              </p>
              <p className="aie-review-label">KORTEX WILL HELP SEPARATE:</p>
              <ol className="aie-separates">
                {SEPARATES.map((s, i) => <li key={s}><span>0{i + 1}</span>{s}</li>)}
              </ol>
              <p className="aie-review-deliverable">
                You will know which recurring responsibility is worth examining
                first&mdash;and whether technology is necessary.
              </p>
              <p className="aie-note">{ph("[CONFIRM THE EXACT DELIVERABLE BEFORE PUBLISHING.]")}</p>
              <div className="actions">
                <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
              </div>
              <p className="aie-reassure">
                No process map needed. Start with the questions and approvals that keep finding
                their way back to you.
              </p>
            </div>
            <div className="aie-form-wrap">
              <BottleneckReviewForm />
            </div>
          </div>
        </div>
      </section>

      {/* 08 — FAQ: accessible accordion, first question open, minimal
          decoration. */}
      <section className="aie-faq faq section-pad" id="faq">
        <div className="aie-faq-grid">
          <div>
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq-grid">
            {FAQS.map(([q, a], i) => (
              <details key={q} {...(i === 0 ? { open: true } : {})}>
                <summary><span>0{i + 1}</span>{q}<i /></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — final CTA. Scrolls back to the same form; no repeat of the full
          review explanation. */}
      <section className="aie-final aie-dark">
        <div className="grid-overlay" />
        <div className="aie-final-inner">
          <p className="eyebrow"><span /> THE BUSINESS SHOULD NOT NEED YOUR MEMORY TO KEEP MOVING</p>
          <h2>Let&rsquo;s find the first responsibility that can stop coming back to you.</h2>
          <p>
            Tell us what your team keeps waiting for. Kortex will help determine whether the answer
            is a clearer process, simple automation, a bounded agent or part of a larger Operations
            System.
          </p>
          <div className="actions aie-final-actions">
            <a className="button" href="#review-form">See what could run without me <Arrow /></a>
            <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
          </div>
        </div>
      </section>
    </>
  );
}
