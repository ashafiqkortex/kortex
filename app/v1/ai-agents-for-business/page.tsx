import type { Metadata } from "next";
import { v1 } from "@/components/v1/paths";
import { Arrow, Check } from "@/components/v1/icons";
import { WorkflowReviewForm } from "./workflow-review-form";
import "./afb.css";

// Source of truth: the senior-reviewed copy + design doc
// (kortex-ai-agents-for-business-page-copy-and-design.md, Aug 2026).
// Standing rules from it, do not undo:
//  - Plain-language educational companion to /ai-agent-development, NOT a
//    peer offer. It stays OUT of the primary navigation; the Operations
//    System remains the lead offer. Link it from the footer, /ai-consulting,
//    /ai-agent-development and relevant articles only.
//  - The Free 20-Minute Workflow Review is the only dominant offer; every
//    primary CTA scrolls to the same form (#review-form). Secondary action
//    is the phone.
//  - The proof section is NOT rendered: no real production agent, named
//    client and verified result have been approved. Do not use a demo,
//    generated person, anonymous quote or estimated result as proof. When
//    evidence exists, place one compact case-study band between the
//    contractor-responsibilities section and the decision guide showing the
//    defined responsibility, permitted actions, human stop condition, one
//    measured result over a defined period, and a real name, role, company,
//    logo and photograph.
//  - The agent must never look like a digital employee or a more advanced,
//    more desirable choice than standard software, simple automation or
//    process improvement. All four decision cards stay at equal weight.
//  - "Where not to use an agent" keeps equal prominence with the opportunity
//    section. One restrained amber boundary line — disciplined, not alarmist.
//  - /ai-receptionist, /ai-customer-service and /ai-sdr own their use cases;
//    this page links quietly instead of reproducing their sales arguments.
//  - No robots, humanoid assistants, glowing brains, magic-wand imagery,
//    code rain, futuristic command centers or generated people. No fake AI
//    dashboard — the hero shows one ordinary workflow stopping for a person.
//  - No unverified timeline, integration, ownership, cost, accuracy,
//    capacity, ROI or payback claim. "Measurable within a quarter" and
//    "where it would pay for itself" were removed deliberately — do not
//    reintroduce them.
// Bracketed copy renders highlighted via ph() so reviewers can spot every
// claim that still needs sign-off before publishing.

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "AI Agents for Business | Practical Guide for Contractors | Kortex",
  description:
    "See where an AI agent can help a contractor's operation, where people should stay in control and when simple automation is the better answer.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/ai-agents-for-business` },
};

/* Bracketed values in the copy are unconfirmed. They render highlighted so a
   reviewer can spot every claim that still needs sign-off before publishing. */
const ph = (s: string) =>
  s.split(/(\[[^\]]*\])/).map((part, i) =>
    part.startsWith("[") ? <span className="ph" key={i}>{part}</span> : part
  );

/* Hero visual: one ordinary workflow moving until a consequential decision
   appears. Explanatory concept in HTML/CSS — not a fake AI dashboard. The
   human-stop card carries the amber accent and a responsible role, without
   inventing a client or employee. */
const HERO_FLOW: { k: string; p: string; stop?: boolean; role?: string }[] = [
  { k: "CHECK", p: "Review approved job record" },
  { k: "REQUEST", p: "Ask for missing field photo" },
  { k: "UPDATE", p: "Mark record complete" },
  { k: "STOP FOR PERSON", p: "Scope or price changed", stop: true, role: "OFFICE MANAGER" },
];

/* Plain-English definition: four large cards at equal visual weight — the
   agent must not look like a more advanced or desirable choice. One verb and
   one sentence each, per the design instructions. */
const DEFINITIONS: [string, string, string][] = [
  ["Chatbot", "ANSWERS", "Answers a question or produces a response."],
  ["Simple automation", "FOLLOWS", "Follows the same rule and path each time."],
  ["AI agent", "MOVES", "Moves a defined piece of work forward when the next step can vary."],
  ["Person", "OWNS", "Owns judgment, exceptions and consequential decisions."],
];

/* Three contractor responsibilities: wide rows, three labeled columns.
   Problem → Agent may do → Person owns, visible without any accordion. */
const RESPONSIBILITIES: { t: string; problem: string; could: string; person: string }[] = [
  {
    t: "Prepare completed work for billing",
    problem: "Field notes, photos, labor, materials and approvals arrive through different channels. The office has to find what is missing before billing can begin.",
    could: "Review the approved job record, identify missing information and request the next required item.",
    person: "Scope disputes, price decisions, change work and final billing approval.",
  },
  {
    t: "Keep compliance records moving",
    problem: "Certificates, forms and payroll records have to be checked against known requirements.",
    could: "Compare available records with the approved checklist and route missing or inconsistent items for review.",
    person: "Interpreting requirements, accepting exceptions and making compliance decisions.",
  },
  {
    t: "Keep routine follow-up from going cold",
    problem: "Quotes, approvals and customer requests sit because the next follow-up depends on someone remembering.",
    could: "Watch approved statuses, prepare or send permitted reminders and bring unusual responses to the right person.",
    person: "Negotiation, customer judgment and any change to commercial terms.",
  },
];

/* Five red-flag conditions. One restrained amber boundary line on the list —
   no warning icons on every row, disciplined rather than frightening. */
const RED_FLAGS = [
  "There is no agreed version of a correct outcome.",
  "The source records are incomplete or unreliable.",
  "The work changes constantly and cannot be tested consistently.",
  "A wrong action would be expensive, unsafe or difficult to reverse.",
  "The decision depends on trust, negotiation or knowledge of the people involved.",
];

/* Four-way decision guide: four equal cards, the AI-agent card deliberately
   not highlighted — the credibility comes from Kortex being willing to
   recommend any of the four. */
const DECISION_GUIDE: [string, string][] = [
  ["Standard software", "Choose it when a proven product already fits the work well enough. Custom should not be the default."],
  ["Simple automation", "Choose it when the trigger, rule and next action are predictable. It is usually easier to build, test and maintain."],
  ["A bounded AI agent", "Consider it when the path changes by case, several approved sources must be reviewed and the agent can stop before a consequential decision."],
  ["Process improvement first", "Choose it when the team has not agreed how the work should move or what a correct result looks like."],
];

/* Four decisions that make an agent understandable and accountable. */
const CONTROL_DECISIONS: [string, string][] = [
  ["The job", "What single result is it responsible for moving forward?"],
  ["The information", "Which records and systems may it use?"],
  ["The permitted actions", "What may it check, prepare, update, send or route?"],
  ["The stop conditions", "When must it pause and bring the work to a named person?"],
];

/* One wide operating card with one neutral contractor example — an
   explanation, not an interactive configurator or a demo. The example values
   are drawn from this page's own billing-preparation workflow copy; no
   client, employee or product screenshot is implied. */
const OPERATING_EXAMPLE: { k: string; v: string; stop?: boolean }[] = [
  { k: "THE JOB", v: "Prepare completed work for billing" },
  { k: "THE INFORMATION", v: "The approved job record — field notes, photos, labor, materials and approvals" },
  { k: "THE PERMITTED ACTIONS", v: "Identify missing information · Request the next required item" },
  { k: "THE STOP CONDITIONS", v: "Scope dispute · Price decision · Change work", stop: true },
  { k: "HUMAN OWNER", v: "Office manager", stop: true },
];

const REVIEW_IDENTIFIES = [
  "Where the work actually slows down",
  "Whether the answer is standard software, simple automation, an agent or process improvement",
  "The smallest useful first scope",
  "The result that would tell you whether it helped",
];

/* Workflow Review centerpiece visual: one workflow entering four honest
   recommendations — Kortex is willing to recommend any of the four. */
const OUTCOMES = [
  "Use a standard product",
  "Use simple automation",
  "Build a bounded AI agent",
  "Improve the process first",
];

const FAQS: [string, string][] = [
  ["Is an AI agent the same as a chatbot?",
   "No. A chatbot mainly answers questions or produces text. An agent is allowed to take defined actions inside a workflow. Those actions, permissions and stop conditions should be agreed before it begins."],
  ["Will an AI agent replace an employee?",
   "Start with a recurring responsibility—not a whole person's job. A named employee should remain responsible for the outcome and for exceptions the agent cannot safely handle."],
  ["How is an AI agent different from simple automation?",
   "Automation follows a fixed path. An agent is useful when the next step can change according to the approved information it receives. If a fixed rule can do the work reliably, use the rule."],
  ["Can an agent work with our current software?",
   "Possibly. It depends on access, permissions, data quality and security requirements. Every connection should be checked before it is promised."],
  ["How do we choose the first workflow?",
   "Look for work that happens often, consumes attention, has a recognizable correct outcome and can stop for a person before a costly decision."],
  ["How much does a business AI agent cost?",
   "It depends on the job, systems, information, permitted actions and support required. Kortex should review the workflow before recommending a scope or price."],
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Agents for Business | Practical Guide for Contractors",
    description:
      "See where an AI agent can help a contractor's operation, where people should stay in control and when simple automation is the better answer.",
    url: `${SITE}/ai-agents-for-business`,
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

export default function V1AiAgentsForBusinessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 01 — hero: 7/5 split. Routine work moves on the left; the
          consequential decision stops for a named person on the right. */}
      <section className="afb-hero afb-dark">
        <div className="grid-overlay" />
        <div className="afb-hero-grid">
          <div>
            <p className="eyebrow"><span /> AI AGENTS FOR ESTABLISHED CONTRACTORS</p>
            <h1>Let AI move the routine work forward. <em>Keep people in control</em> of the decisions.</h1>
            <p className="afb-lede">
              An AI agent can gather approved information, complete permitted steps and bring
              exceptions to the right person. Kortex helps you choose one workflow worth
              improving&mdash;and tells you when a simpler answer is better.
            </p>
            <div className="actions">
              <a className="button" href="#review-form">Book my free workflow review <Arrow /></a>
              <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
            </div>
            <p className="afb-support">Bring one repetitive process. No AI knowledge required.</p>
            <p className="afb-trust">ONE WORKFLOW <i>&middot;</i> CLEAR LIMITS <i>&middot;</i> A PERSON REMAINS RESPONSIBLE</p>
          </div>
          {/* One ordinary workflow moving until a consequential decision
              appears. Not a fake AI dashboard. */}
          <div className="afb-hero-visual" aria-hidden="true">
            <span className="afb-hero-visual-tag">ONE ROUTINE WORKFLOW &mdash; EXAMPLE</span>
            <ol>
              {HERO_FLOW.map((s) => (
                <li key={s.k} className={s.stop ? "is-stop" : undefined}>
                  <span>{s.k}</span>
                  <p>{s.p}</p>
                  {s.role && <b>{s.role}</b>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 02 — plain-English definition: four cards at equal weight */}
      <section className="afb-plain section-pad">
        <p className="section-index">WHAT THE TERM ACTUALLY MEANS</p>
        <h2>An agent is not a digital employee. It is software with one defined responsibility.</h2>
        <p className="afb-plain-lede">
          A useful agent does more than answer a question. It can review approved information,
          choose from allowed next steps and take a limited action. A person still owns the
          outcome and handles anything outside those limits.
        </p>
        <div className="afb-def-grid">
          {DEFINITIONS.map(([t, verb, p]) => (
            <article key={t}>
              <span>{verb}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
        <p className="afb-closing">
          Most contractor workflows need a combination of these&mdash;not an agent replacing
          everyone involved.
        </p>
      </section>

      {/* 03 — three contractor responsibilities: wide rows,
          Problem → Agent could → Person remains responsible */}
      <section className="afb-resp afb-dark section-pad">
        <p className="eyebrow"><span /> GOOD FIRST RESPONSIBILITIES</p>
        <h2>Start where routine work stalls because somebody has to check, chase or route it.</h2>
        <div className="afb-resp-rows">
          {RESPONSIBILITIES.map((r) => (
            <article key={r.t}>
              <h3>{r.t}</h3>
              <div className="afb-resp-cols">
                <div><span>THE RECURRING PROBLEM</span><p>{r.problem}</p></div>
                <div><span>A BOUNDED AGENT COULD</span><p>{r.could}</p></div>
                <div className="afb-resp-person"><span>A PERSON REMAINS RESPONSIBLE FOR</span><p>{r.person}</p></div>
              </div>
            </article>
          ))}
        </div>
        <p className="afb-qualify">
          These are examples, not packages. The right first responsibility depends on your
          workflow, your records and the cost of a mistake.
        </p>
        {/* Quiet links only — the receptionist and development pages own their
            own sales arguments. */}
        <div className="afb-quiet-links">
          <p>Need help with inbound calls? <a className="inline-link" href={v1("/ai-receptionist")}>SEE THE AI RECEPTIONIST <Arrow /></a></p>
          <p>Already know you need a custom agent? <a className="inline-link" href={v1("/ai-agent-development")}>SEE AI AGENT DEVELOPMENT <Arrow /></a></p>
          <p>Does every decision still run through you? <a className="inline-link" href={v1("/ai-employee")}>SEE THE AI EMPLOYEE PAGE <Arrow /></a></p>
          <p>Estimates going quiet after you send them? <a className="inline-link" href={v1("/ai-sdr")}>SEE AI SDR FOLLOW-UP <Arrow /></a></p>
        </div>
      </section>

      {/* Proof band intentionally not rendered. The doc requires it hidden
          until a real production agent, named client and verified result are
          approved — no demo, generated person, anonymous quote or estimated
          result. When approved, place one compact case-study band here,
          between the responsibilities section and the decision guide. */}

      {/* 04 — where an agent does not belong: 5/7 split, one large statement
          beside five red-flag rows. Disciplined, not alarmist. */}
      <section className="afb-notfit section-pad">
        <div className="afb-notfit-grid">
          <div className="afb-notfit-copy">
            <p className="section-index">SOME WORK SHOULD NOT BE HANDED TO AI</p>
            <h2>Do not give an agent a job your business has not defined.</h2>
            <p>
              If two people complete the same work differently and nobody can say which result is
              correct, an agent will not solve that ambiguity. It may repeat it faster.
            </p>
            <strong className="afb-notfit-statement">DEFINE THE WORK FIRST</strong>
          </div>
          <div className="afb-notfit-flags">
            <p className="afb-flags-intro">Fix or define the process first when:</p>
            <ul>
              {RED_FLAGS.map((f, i) => <li key={f}><span>0{i + 1}</span>{f}</li>)}
            </ul>
            <p className="afb-closing">
              An agent should operate inside a clear process. It should not be asked to invent one.
            </p>
          </div>
        </div>
      </section>

      {/* 05 — four-way decision guide + human-control card, one visual band */}
      <section className="afb-decide afb-dark section-pad">
        <p className="eyebrow"><span /> THE FIRST DECISION IS NOT &ldquo;WHICH AGENT?&rdquo;</p>
        <h2>What does this workflow actually need?</h2>
        {/* Four equal cards — the AI-agent card is deliberately not
            highlighted. */}
        <div className="afb-decide-grid">
          {DECISION_GUIDE.map(([t, p], i) => (
            <article key={t}>
              <span>0{i + 1}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
        <p className="afb-decide-closing">The goal is to improve the workflow&mdash;not to force AI into it.</p>

        {/* Human control: four decisions, then one wide operating card. */}
        <div className="afb-control">
          <p className="section-index amber">DEFINE THE BOUNDARY BEFORE ANYTHING ACTS</p>
          <h2 className="afb-control-h2">Four decisions make an agent understandable and accountable.</h2>
          <ol className="afb-control-list">
            {CONTROL_DECISIONS.map(([t, q], i) => (
              <li key={t}><span>{i + 1}</span><div><strong>{t}</strong><p>{q}</p></div></li>
            ))}
          </ol>
          <div className="afb-opcard" aria-label="Example agent operating card">
            <span className="afb-opcard-tag">ONE NEUTRAL EXAMPLE &mdash; WRITTEN DOWN BEFORE THE AGENT BEGINS</span>
            <ul>
              {OPERATING_EXAMPLE.map((r) => (
                <li key={r.k} className={r.stop ? "is-stop" : undefined}>
                  <span>{r.k}</span><p>{r.v}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="afb-control-note">
            The boundary depends on the cost of being wrong. Financial, contractual, safety,
            employment and compliance decisions should remain with an authorized person unless a
            narrower rule has been explicitly approved and tested.
          </p>
        </div>
      </section>

      {/* 06 — Free Workflow Review: high-contrast centerpiece, one workflow
          entering four honest recommendations */}
      <section className="afb-review afb-dark section-pad">
        <div className="afb-review-panel">
          <p className="eyebrow"><span /> START WITH ONE REAL PROCESS</p>
          <h2>Before you buy an agent, find out whether the workflow needs one.</h2>
          <div className="afb-review-grid">
            <div>
              <p className="afb-review-lede">
                Bring one process that repeatedly requires someone to gather information, decide
                the next step and chase the work forward.
              </p>
              <p className="afb-review-label">In a Free 20-Minute Workflow Review, Kortex will help identify:</p>
              <ul className="afb-review-list">
                {REVIEW_IDENTIFIES.map((r) => <li key={r}><Check /> {r}</li>)}
              </ul>
              <p className="afb-honest">If an agent is unnecessary, we will say so.</p>
              <div className="actions">
                <a className="button" href="#review-form">Book my free workflow review <Arrow /></a>
                <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
              </div>
              <p className="afb-reassure">20 MINUTES <i>&middot;</i> ONE WORKFLOW <i>&middot;</i> HONEST GO / NO-GO VIEW</p>
              <p className="afb-note">{ph("[CONFIRM THAT THE REVIEW IS FREE, WHO LEADS IT AND WHETHER THE VISITOR RECEIVES A WRITTEN SUMMARY.]")}</p>
            </div>
            <div className="afb-outcomes" aria-label="Four possible recommendations">
              <div className="afb-outcomes-in"><span>YOUR WORKFLOW</span><p>One process. Reviewed in 20 minutes.</p></div>
              <span className="afb-outcomes-feed" aria-hidden="true" />
              <ol>
                {OUTCOMES.map((o, i) => <li key={o}><span>0{i + 1}</span>{o}</li>)}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — FAQ and final form, one visual section */}
      <section className="afb-faq faq section-pad">
        <p className="section-index">FREQUENTLY ASKED QUESTIONS</p>
        <h2>Plain answers before the review.</h2>
        <div className="faq-grid">
          {FAQS.map(([q, a], i) => (
            <details key={q} {...(i === 0 ? { open: true } : {})}>
              <summary><span>0{i + 1}</span>{q}<i /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="review-form" className="afb-final afb-dark">
        <div className="grid-overlay" />
        <div className="afb-final-grid">
          <div className="afb-final-copy">
            <p className="eyebrow"><span /> FREE 20-MINUTE WORKFLOW REVIEW</p>
            <h2>Which workflow keeps requiring manual attention?</h2>
            <p>
              Bring one repetitive process. No AI knowledge required. If an agent is unnecessary,
              we will say so.
            </p>
            <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
          </div>
          <div className="afb-form-wrap">
            <WorkflowReviewForm />
          </div>
        </div>
      </section>
    </>
  );
}
