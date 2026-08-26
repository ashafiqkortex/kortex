import type { Metadata } from "next";
import { Arrow, Check } from "@/components/v1/icons";
import { WorkflowReviewForm } from "./workflow-review-form";
import "./agent.css";

// Source of truth: the senior-reviewed copy + design doc
// (kortex-ai-agent-development-page-copy-and-design.md, Aug 2026).
// Standing rules from it, do not undo:
//  - Legacy search doorway. It stays OUT of the primary navigation; the
//    Operations System remains the lead offer. Footer/resource links only.
//  - The Free 20-Minute Workflow Review is the only dominant offer; every
//    primary CTA scrolls to the same form (#review-form). Secondary action
//    is the phone.
//  - The proof section is NOT rendered: no real production agent with a
//    verified result has been approved. Do not use a demo, generated person
//    or anonymous quote as proof. Add the section only when evidence exists
//    (defined job, information sources, actions, stop condition, volume,
//    result over a defined period, real name/role/company/photo).
//  - No timelines, ownership promises or integration claims until delivery
//    and commercial terms are verified — they stay bracketed.
//  - No robots, humanoid assistants, glowing brains, autonomous-fleet
//    imagery, code rain or futuristic command centers. No fake chat UI —
//    the agent is part of the workflow, not a character in a bubble.
//  - Simple automation must not look less advanced or desirable than the
//    agent. Amber is reserved for stop conditions and escalation.
//  - Link to /ai-agents-for-business as the plain-language companion only
//    once that page is rebuilt.
// Bracketed copy renders highlighted via ph() so reviewers can spot every
// claim that still needs sign-off before publishing.

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "AI Agent Development for Contractors | Kortex",
  description:
    "Build a custom AI agent around one defined contractor workflow. Set what it may do, when a person takes over and the business result worth testing.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/ai-agent-development` },
};

/* Bracketed values in the copy are unconfirmed. They render highlighted so a
   reviewer can spot every claim that still needs sign-off before publishing. */
const ph = (s: string) =>
  s.split(/(\[[^\]]*\])/).map((part, i) =>
    part.startsWith("[") ? <span className="ph" key={i}>{part}</span> : part
  );

/* The four things written down before an agent begins. */
const WRITTEN_DOWN: [string, string][] = [
  ["Its job:", "The one outcome it is responsible for moving forward."],
  ["Its access:", "The information and systems it is allowed to use."],
  ["Its limits:", "The actions it must never take alone."],
  ["Its human owner:", "The person who handles uncertainty and reviews important decisions."],
];

/* Four-step plain-English sequence. The small concrete example under each
   step comes from the doc's own job-closeout workflow — no technical labels. */
const STEPS: [string, string][] = [
  ["Reads approved information", "The approved job record"],
  ["Chooses an allowed next step", "Identifies missing information"],
  ["Takes a limited action", "Requests the correct next step"],
  ["Stops for a person when needed", "The record is disputed or billing judgment is required"],
];

/* Agent versus automation. Copy bullets are the panel content; the trait rows
   are the design-required annotations. Neither side looks more advanced. */
const AUTOMATION = {
  bullets: [
    "The steps happen the same way every time.",
    "The action follows a clear rule.",
    "Exceptions are rare and easy to correct.",
  ],
  traits: ["Same path each time", "Clear rule", "Predictable input", "Easy to reverse"],
};
const AGENT = {
  bullets: [
    "The next step changes according to the information received.",
    "A person currently opens several systems and uses judgment.",
    "The agent can stop whenever the decision carries meaningful risk.",
  ],
  traits: ["Path changes by case", "Several sources involved", "Judgment within limits", "Human handles consequential exceptions"],
};

const MAY_DO = [
  "Gather approved information and check what is missing",
  "Prepare a recommendation or draft response",
  "Make a low-risk update or route an exception",
];
const NEEDS_PERSON = [
  "Approve a price, payment, contract or change",
  "Make a consequential compliance or employment decision",
  "Act when the information is incomplete, contradictory or outside its limits",
];

/* Operating card: the same example workflow as the hero card, presented as
   an editable-looking job description with the four required fields. */
const OPERATING_CARD: { k: string; v: string; stop?: boolean }[] = [
  { k: "JOB", v: "Review completed job records" },
  { k: "INFORMATION IT MAY USE", v: "The approved job record — field notes, photos, labor and approvals" },
  { k: "ACTIONS IT MAY TAKE", v: "Check required information · Request missing details · Update review status" },
  { k: "STOP CONDITIONS", v: "Scope changed · Record disputed · Billing judgment required", stop: true },
  { k: "HUMAN OWNER", v: "Office manager", stop: true },
];

/* Three contractor examples: Today → Agent's Job → Human Takes Over. */
const EXAMPLES: { t: string; today: string; job: string; human: string }[] = [
  {
    t: "Job closeout review",
    today: "Field notes, photos, labor and approvals arrive through different channels. The office checks each job and chases what is missing.",
    job: "Review the approved job record, identify missing information and request the correct next step.",
    human: "The record is disputed, the scope changed or billing judgment is required.",
  },
  {
    t: "Subcontractor or compliance review",
    today: "The office checks agreements, certificates and required documents across folders, email and spreadsheets.",
    job: "Compare the available records with the approved requirement list and surface exceptions.",
    human: "A document is ambiguous, a requirement is not met or a commercial decision is needed.",
  },
  {
    t: "Quote or approval follow-up",
    today: "Follow-up depends on someone remembering which quote, change or approval needs attention.",
    job: "Monitor approved statuses, prepare the next message and route overdue or unusual cases.",
    human: "The customer objects, commercial terms may change or the response falls outside approved language.",
  },
];

const REVIEW_IDENTIFIES = [
  "Whether the process needs an agent, simple automation or a standard product",
  "The one job a first agent could safely own",
  "Which actions require a person",
  "The business result worth testing",
];

/* One workflow in, four honest recommendations out. The design must show
   Kortex is willing to recommend any of the four. */
const OUTCOMES = [
  "Use a standard product",
  "Use simple automation",
  "Build a bounded AI agent",
  "Improve the process before automating",
];

const FAQS: [string, string][] = [
  ["What is an AI agent?",
   "An AI agent is software that works toward a defined outcome across several steps. It can read approved information, choose among permitted next actions and act inside connected systems. It should stop and involve a person when the situation falls outside its limits."],
  ["How is an agent different from a chatbot?",
   "A chatbot primarily answers questions or produces text. An agent is permitted to take approved actions, such as updating a record, requesting missing information or routing work to the correct person."],
  ["How is an agent different from automation?",
   "Automation follows a path defined in advance. An agent is useful when the path changes according to the information received. Predictable work is usually better handled with rules because rules are cheaper and easier to control."],
  ["Can an agent make a damaging mistake?",
   "Any system allowed to act can make a mistake. That is why the first version needs limited permissions, clear stop conditions, human approval for consequential actions and a record of what it did. The acceptable boundary depends on the workflow."],
  ["Can an agent connect to our current software?",
   "Possibly. It depends on the systems, available access, permissions, data quality and security requirements. Kortex should verify every connection before promising it."],
  ["How long does custom AI agent development take?",
   "It depends on the job, the systems involved, the quality of the available records and how quickly access can be provided. Kortex should define the first working scope and delivery commitment after the workflow has been reviewed."],
  ["Who owns the agent?",
   "[INSERT VERIFIED TERMS FOR CODE, PROMPTS, ACCOUNTS, DATA, HOSTING, THIRD-PARTY SERVICES, MAINTENANCE AND TERMINATION.]"],
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Agent Development for Contractors",
    serviceType: "Custom AI agent development",
    description:
      "Build a custom AI agent around one defined contractor workflow. Set what it may do, when a person takes over and the business result worth testing.",
    url: `${SITE}/ai-agent-development`,
    provider: {
      "@type": "Organization",
      name: "Kortex Consulting",
      url: SITE,
      telephone: "+1-301-889-8546",
    },
    areaServed: "US",
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

export default function V1AiAgentDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 01 — hero: one defined job, 7/5 split with a job-description card */}
      <section className="agd-hero agd-dark">
        <div className="grid-overlay" />
        <div className="agd-hero-grid">
          <div>
            <p className="eyebrow"><span /> AI AGENT DEVELOPMENT FOR ESTABLISHED CONTRACTORS</p>
            <h1>Build an AI agent for one job&mdash;not a vague promise to run the business.</h1>
            <p className="agd-lede">
              Kortex develops custom AI agents that gather information, take approved actions and
              bring exceptions to the right person. Start with one workflow and prove the value
              before expanding.
            </p>
            <div className="actions">
              <a className="button" href="#review-form">Book my free workflow review <Arrow /></a>
              <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
            </div>
            <p className="agd-support">
              Bring one repetitive, exception-heavy process. If a simple rule or standard product
              is the better answer, we will tell you.
            </p>
            <ul className="agd-trust">
              <li><Check /> ONE DEFINED JOB</li>
              <li><Check /> HUMAN OVERSIGHT</li>
              <li><Check /> NO AI FOR ITS OWN SAKE</li>
            </ul>
          </div>
          {/* One large job-description card: responsibility, permissions and
              stop condition. Not a fictional product dashboard. */}
          <aside className="agd-jobcard" aria-label="Example agent job description">
            <div className="agd-jobcard-top"><span>AGENT JOB DESCRIPTION &mdash; EXAMPLE</span><i /><i /><i /></div>
            <dl>
              <div><dt>AGENT JOB</dt><dd>Review completed job records</dd></div>
              <div><dt>MAY DO</dt><dd>Check required information &middot; Request missing details &middot; Update review status</dd></div>
              <div className="agd-stop"><dt>MUST STOP WHEN</dt><dd>Scope changed &middot; Record disputed &middot; Billing judgment required</dd></div>
              <div className="agd-stop"><dt>HUMAN OWNER</dt><dd>Office manager</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      {/* 02 — what an agent actually is, 6/6 split */}
      <section className="agd-plain section-pad">
        <div className="agd-plain-grid">
          <div>
            <p className="section-index">PLAIN ENGLISH FIRST</p>
            <h2>An agent is software allowed to move one defined piece of work forward.</h2>
            <p className="agd-plain-lede">
              It can read approved information, choose the next step within agreed limits and do
              something useful: update a record, request missing details, prepare a response or
              route an exception.
            </p>
            <p className="agd-written-label">A useful agent has four things written down before it begins:</p>
            <ol className="agd-written">
              {WRITTEN_DOWN.map(([t, p], i) => (
                <li key={t}><span>{i + 1}</span><div><strong>{t}</strong> {p}</div></li>
              ))}
            </ol>
            <p className="agd-plain-closing">
              If those four things are vague, the agent is not ready to operate inside the business.
            </p>
          </div>
          {/* Read → Decide → Act → Ask a Person, one concrete example per step.
              No technical labels: no context window, tools, orchestration,
              memory or model. */}
          <ol className="agd-steps" aria-label="How an agent moves one piece of work forward">
            {STEPS.map(([t, ex], i) => (
              <li key={t} className={i === 3 ? "agd-step-stop" : undefined}>
                <span>STEP {i + 1}</span>
                <strong>{t}</strong>
                <p>{ex}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 03 — agent versus automation, two equal panels */}
      <section className="agd-versus agd-dark section-pad">
        <p className="eyebrow"><span /> DO NOT USE JUDGMENT WHERE A RULE WILL DO</p>
        <h2>The more predictable the process, the less likely it needs an agent.</h2>
        <div className="agd-versus-grid">
          <article>
            <h3>Use a standard product or simple automation when...</h3>
            <ul>{AUTOMATION.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <p className="agd-traits">{AUTOMATION.traits.join(" · ")}</p>
          </article>
          <article>
            <h3>Consider an AI agent when...</h3>
            <ul>{AGENT.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <p className="agd-traits">{AGENT.traits.join(" · ")}</p>
          </article>
        </div>
        <p className="agd-versus-note">
          Most useful systems combine both: rules handle the predictable work, while an agent
          handles a narrow set of exceptions.
        </p>
      </section>

      {/* 04 — job description and boundaries, lists + operating card */}
      <section className="agd-bounds section-pad">
        <p className="section-index">DEFINE THE BOUNDARY BEFORE THE BUILD</p>
        <h2>Decide what it may do&mdash;and when it must stop.</h2>
        <div className="agd-bounds-grid">
          <div>
            <div className="agd-permit">
              <div>
                <strong>The agent may be allowed to:</strong>
                <ul>{MAY_DO.map((m) => <li key={m}><Check /> {m}</li>)}</ul>
                <p className="agd-permit-tag">MAY ACT &mdash; LOW-RISK, DEFINED, REVERSIBLE</p>
              </div>
              <div className="agd-permit-stop">
                <strong>The agent may require a person before it can:</strong>
                <ul>{NEEDS_PERSON.map((m) => <li key={m}><Arrow /> {m}</li>)}</ul>
                <p className="agd-permit-tag">REQUIRES A PERSON &mdash; COMMERCIAL, CONTRACTUAL, COMPLIANCE, EMPLOYMENT OR UNCERTAIN</p>
              </div>
            </div>
            <p className="agd-bounds-closing">
              The boundary depends on the workflow and the cost of being wrong. A safe first
              version should usually stop too often rather than act too freely.
            </p>
          </div>
          {/* Editable-looking operating card with the four required fields.
              Amber marks only stop conditions and escalation. */}
          <aside className="agd-opcard" aria-label="Example agent operating card">
            <span className="agd-opcard-tag">OPERATING CARD &mdash; EXAMPLE, WRITTEN DURING YOUR REVIEW</span>
            <ul>
              {OPERATING_CARD.map((r) => (
                <li key={r.k} className={r.stop ? "is-stop" : undefined}>
                  <span>{r.k}</span><p>{r.v}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* 05 — three contractor examples: Today → Agent's Job → Human Takes Over */}
      <section className="agd-examples agd-dark section-pad">
        <p className="eyebrow"><span /> START WITH ONE CONTRACTOR WORKFLOW</p>
        <h2>Choose work with enough repetition to matter and enough exceptions to need judgment.</h2>
        <div className="agd-example-grid">
          {EXAMPLES.map((x) => (
            <article key={x.t}>
              <h3>{x.t}</h3>
              <div><span>TODAY</span><p>{x.today}</p></div>
              <div><span>AGENT&rsquo;S JOB</span><p>{x.job}</p></div>
              <div className="agd-example-stop"><span>HUMAN TAKES OVER WHEN</span><p>{x.human}</p></div>
            </article>
          ))}
        </div>
        <p className="agd-example-note">
          These are examples, not packages. The right first agent depends on the work, the systems
          involved and the consequence of a mistake.
        </p>
      </section>

      {/* 06 — free workflow review centerpiece: one workflow, four outcomes */}
      <section className="agd-review section-pad">
        <div className="agd-review-panel">
          <p className="eyebrow"><span /> DO NOT START BY BUYING AN AGENT</p>
          <h2>First decide whether the workflow deserves one.</h2>
          <div className="agd-review-grid">
            <div>
              <p className="agd-review-lede">
                Bring one process where the path changes from case to case and a person currently
                has to gather information, make a judgment and move the work forward.
              </p>
              <p className="agd-review-label">Kortex will help identify:</p>
              <ul className="agd-review-list">
                {REVIEW_IDENTIFIES.map((r) => <li key={r}><Check /> {r}</li>)}
              </ul>
              <p className="agd-honest">If an agent is unnecessary, we will say so.</p>
              <div className="actions">
                <a className="button" href="#review-form">Book my free workflow review <Arrow /></a>
              </div>
              <p className="agd-reassure">20 MINUTES &middot; ONE WORKFLOW &middot; HONEST GO / NO-GO VIEW</p>
              <p className="agd-note">{ph("[CONFIRM THAT THE REVIEW IS FREE, WHO LEADS IT AND WHETHER THE VISITOR RECEIVES A WRITTEN SUMMARY.]")}</p>
            </div>
            {/* One workflow entering four possible recommendations. Kortex is
                willing to recommend any of the four. */}
            <div className="agd-outcomes" aria-label="Four possible recommendations">
              <div className="agd-outcomes-in"><span>YOUR WORKFLOW</span><p>One process. Reviewed in 20 minutes.</p></div>
              <span className="agd-outcomes-feed" aria-hidden="true" />
              <ol>
                {OUTCOMES.map((o, i) => <li key={o}><span>0{i + 1}</span>{o}</li>)}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Proof section intentionally not rendered: no real production agent
          with a verified result has been approved. The doc forbids demos,
          generated people or anonymous quotes as proof. When evidence exists,
          show the defined job, approved information sources, allowed actions,
          human stop condition, volume handled, escalation rate where
          appropriate, the business result over a defined period, and a real
          name, role, company, logo and photograph. */}

      {/* 07 — faq */}
      <section className="agd-faq faq section-pad" id="faq">
        <div className="agd-faq-grid">
          <div>
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq-grid">
            {FAQS.map(([q, a], i) => (
              <details key={q} {...(i === 0 ? { open: true } : {})}>
                <summary><span>0{i + 1}</span>{q}<i /></summary>
                <p>{ph(a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — final cta and form */}
      <section id="review-form" className="agd-final agd-dark">
        <div className="grid-overlay" />
        <div className="agd-final-grid">
          <div className="agd-final-copy">
            <p className="eyebrow"><span /> START WITH THE JOB, NOT THE AGENT</p>
            <h2>Bring us the messy process.</h2>
            <p>
              Twenty minutes. One real workflow. Kortex will help determine whether an agent
              belongs, what it could safely own and when a person must remain in control.
            </p>
            <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
          </div>
          <div className="agd-form-wrap">
            <WorkflowReviewForm />
          </div>
        </div>
      </section>
    </>
  );
}
