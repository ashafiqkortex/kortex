import type { Metadata } from "next";
import { v1 } from "@/components/v1/paths";
import { Arrow, Check } from "@/components/v1/icons";
import { CustomerServiceAuditForm } from "./customer-service-audit-form";
import "./customer-service.css";

// Source of truth: the senior-reviewed copy + design doc
// (kortex-ai-customer-service-page-copy-and-design.md, Aug 2026).
// Standing rules from it, do not undo:
//  - Specialist doorway into the Operations System, not a peer flagship
//    offer. It stays OUT of the primary navigation: footer, the AI
//    Receptionist page and contextual internal links only.
//  - Page distinction stays visible: AI Receptionist answers NEW inbound
//    calls; AI Customer Service helps EXISTING customers after the request
//    or job is in the operation; AI SDR is pre-sale follow-up; the
//    Operations System is the larger field-to-office workflow.
//  - The Free Customer Service Audit is the only dominant offer; every
//    primary CTA scrolls to the same form (#audit-form). Secondary action
//    is the phone. No formulaic badge ("20 minutes · one workflow · ...").
//  - The proof section is NOT rendered and leaves no placeholder space:
//    no real client, production system, approved quote, image or measured
//    result exists yet. Do not use generated people, demos or estimated
//    results as proof. See the doc's proof template for what to show later.
//  - No unverified percentage, instant-response, resolution, savings,
//    capacity or ROI claim. No integration, ownership, hosting, timeline
//    or support promise without approved terms.
//  - The automation-disclosure FAQ answer stays bracketed until Kortex
//    approves a disclosure policy. Do not imply human identity.
//  - No robots, humanoid assistants, floating chat bubbles as decoration,
//    code, futuristic call centers, headset stock or generated people.
//    The hero visual explains the workflow, not a live product. Amber is
//    reserved for the human-handoff branch.
//  - The doc's optional "sample upload" is rendered as an optional PASTE
//    field: /api/contact accepts JSON only, and the doc requires the
//    upload receive/minimize/store/delete procedure to be defined before
//    customer data is accepted. Revisit when that procedure exists.
// Bracketed copy renders highlighted via ph() so reviewers can spot every
// claim that still needs sign-off before publishing.

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "AI Customer Service for Contractors | Kortex",
  description:
    "Handle routine customer questions from approved job and account information, while unusual or sensitive situations still reach the right person.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/ai-customer-service` },
};

/* Bracketed values in the copy are unconfirmed. They render highlighted so a
   reviewer can spot every claim that still needs sign-off before publishing. */
const ph = (s: string) =>
  s.split(/(\[[^\]]*\])/).map((part, i) =>
    part.startsWith("[") ? <span className="ph" key={i}>{part}</span> : part
  );

/* Hero visual: one routine request handled from the job record, one
   contrasting request routed to a person. Explanatory workflow concept —
   not a fictional conversational personality, not a live product. */
const HERO_ROUTINE = {
  quote: "“Can you resend yesterday’s service report?”",
  steps: ["Customer and job matched", "Approved report found", "Document sent", "Conversation recorded"],
};
const HERO_HUMAN = {
  quote: "“The work is not what we agreed.”",
  steps: ["Scope dispute detected", "Routed to project or service manager", "Full conversation attached"],
};

/* Four repeated office interruptions: the customer's words in large type,
   the office action beneath. */
const INTERRUPTIONS: [string, string][] = [
  ["“When will the technician arrive?”",
   "Someone checks the schedule, finds the job and replies."],
  ["“Can I change the appointment?”",
   "Someone checks availability, confirms the rules and updates the right people."],
  ["“Can you resend the invoice or service report?”",
   "Someone finds the approved document and sends it again."],
  ["“What is happening with my job?”",
   "Someone checks notes, calls another employee and works out what can safely be shared."],
];

/* Four-step request workflow. Amber marks only the human-handoff branch. */
const WORKFLOW: { t: string; p: string; human?: boolean }[] = [
  { t: "Understand the request",
    p: "Identify what the customer is asking and which job or account it concerns." },
  { t: "Check approved information",
    p: "Read only the status, schedule, document or account details it is allowed to use." },
  { t: "Answer or complete a permitted step",
    p: "Provide the approved response, resend an approved document or make a low-risk update." },
  { t: "Bring the rest to a person",
    p: "Pass along the customer’s request, relevant record and what has already happened.",
    human: true },
];

/* Routine versus human-handled. Neither side is presented as superior —
   the quality of the human handoff is part of the offer. */
const SYSTEM_HANDLES = [
  "Approved appointment and arrival information",
  "Routine status updates",
  "Resending approved invoices, service reports or forms",
  "Standard warranty, payment-process or service-area questions",
  "Collecting missing details before a person reviews the request",
  "Routing the customer to the correct office or field contact",
];
const PERSON_HANDLES = [
  "An upset customer who wants to be heard",
  "A disputed charge, scope or completion status",
  "A safety concern or urgent field issue",
  "A promise, refund, price change or contract decision",
  "A situation where the records conflict or the answer is uncertain",
  "Any request outside the system’s approved limits",
];

/* Four-way problem chooser. Keeps the service pages distinct and lets the
   visitor self-qualify. Card order is fixed across breakpoints. */
const CHOOSER: { t: string; p: string; label: string; fit: string; href?: string; here?: boolean }[] = [
  { t: "New calls are being missed",
    p: "The immediate problem is answering, qualifying and booking new callers.",
    label: "Better starting page:", fit: "AI Receptionist", href: "/ai-receptionist" },
  { t: "Existing customers keep asking routine questions",
    p: "The office repeatedly checks jobs, schedules, documents or accounts to respond.",
    label: "Possible fit:", fit: "AI Customer Service", here: true },
  { t: "Customers are waiting because your internal systems do not connect",
    p: "The answer exists, but employees have to move between several tools or ask other departments to find it.",
    label: "Possible fit:", fit: "Operations System or integration", href: "/operations-system" },
  { t: "Nobody agrees what the correct answer or process is",
    p: "Different employees handle the same situation differently.",
    label: "Better first step:", fit: "Define the process before automating it" },
];

const AUDIT_IDENTIFIES = [
  "Which questions are genuinely repetitive",
  "Which answers depend on job, schedule, document or account information",
  "Which situations must remain with a person",
  "Where the team is spending time today",
  "The smallest customer-service improvement worth testing",
];

const FAQS: [string, string][] = [
  ["Is this the same as an AI receptionist?",
   "No. An AI receptionist primarily handles new inbound calls and booking. AI customer service helps existing customers with routine questions after a request, appointment or job is already in your operation."],
  ["Is this just a chatbot?",
   "It should not be. A chatbot that only repeats general answers will still send customers back to the office. Useful customer-service automation needs approved access to the information required for the specific answer and a clear path to a person."],
  ["Will customers know they are dealing with automation?",
   "[INSERT KORTEX’S APPROVED DISCLOSURE POLICY FOR PHONE, TEXT, EMAIL AND WEB INTERACTIONS. DO NOT IMPLY HUMAN IDENTITY OR HIDE MATERIAL AUTOMATION.]"],
  ["What happens when the customer is upset?",
   "The system should stop trying to resolve the request and bring it to an authorized person with the conversation and relevant context attached. The exact escalation triggers should be agreed and tested before launch."],
  ["Can it use information from our current software?",
   "Possibly. It depends on the software, access, permissions, data quality and security requirements. Kortex should verify every connection before promising it."],
  ["How much customer-service work can be automated?",
   "That cannot be answered responsibly without reviewing real requests. The useful number is not how many conversations can be blocked; it is how many can be completed correctly without creating another call or complaint."],
  ["Does this replace our office team?",
   "Start with repeated tasks, not a promise to replace people. The office should remain responsible for exceptions, relationships and decisions that require judgment."],
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Customer Service for Contractors",
    serviceType: "AI customer service systems for contractors",
    description:
      "Handle routine customer questions from approved job and account information, while unusual or sensitive situations still reach the right person.",
    url: `${SITE}/ai-customer-service`,
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

export default function V1AiCustomerServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 01 — hero: existing-customer request meets the job record, 7/5 split */}
      <section className="acs-hero acs-dark">
        <div className="grid-overlay" />
        <div className="acs-hero-grid">
          <div>
            <p className="eyebrow"><span /> AI CUSTOMER SERVICE FOR ESTABLISHED CONTRACTORS</p>
            <h1>Stop making your office answer <em>the same customer questions</em> all day.</h1>
            <p className="acs-lede">
              Kortex builds customer-service systems that can answer routine questions from
              approved job, appointment and account information&mdash;then bring anything unusual
              to the right person.
            </p>
            <div className="actions">
              <a className="button" href="#audit-form">Get my free customer service audit <Arrow /></a>
              <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
            </div>
            <p className="acs-support">
              No presentation needed. Show us a small sample of the questions your office keeps
              answering&mdash;or simply talk us through them.
            </p>
            <ul className="acs-trust">
              <li><Check /> APPROVED ANSWERS</li>
              <li><Check /> CLEAR HANDOFFS</li>
              <li><Check /> PEOPLE HANDLE THE EXCEPTIONS</li>
            </ul>
          </div>
          {/* One routine request answered from the job record; one contrasting
              request routed to a person. Workflow explanation, not a chat UI. */}
          <aside className="acs-hero-visual" aria-label="How two customer requests are handled">
            <div className="acs-req">
              <span className="acs-req-tag">CUSTOMER</span>
              <p className="acs-req-quote">{HERO_ROUTINE.quote}</p>
              <ol>{HERO_ROUTINE.steps.map((s) => <li key={s}><Check />{s}</li>)}</ol>
            </div>
            <div className="acs-req acs-req-human">
              <span className="acs-req-tag">CUSTOMER</span>
              <p className="acs-req-quote">{HERO_HUMAN.quote}</p>
              <ol>{HERO_HUMAN.steps.map((s) => <li key={s}><Arrow />{s}</li>)}</ol>
            </div>
          </aside>
        </div>
      </section>

      {/* 02 — the office workload customers do not see */}
      <section className="acs-interruptions section-pad">
        <p className="section-index">01 / THE SAME QUESTIONS, EVERY DAY</p>
        <h2>The customer needs an answer. Your office has to stop what it is doing to find it.</h2>
        <p className="acs-interruptions-lede">
          The request may take only a few minutes. But when the phone, inbox and text messages
          keep interrupting the team, those minutes break up the entire day.
        </p>
        <ol className="acs-rows">
          {INTERRUPTIONS.map(([quote, action], i) => (
            <li key={quote}>
              <span>0{i + 1}</span>
              <div>
                <p className="acs-row-quote">{quote}</p>
                <p className="acs-row-action">{action}</p>
              </div>
            </li>
          ))}
        </ol>
        <strong className="acs-takeaway">
          The problem is not the customer asking. The problem is that the answer has to be
          rebuilt manually each time.
        </strong>
      </section>

      {/* 03 — what useful customer-service automation does */}
      <section className="acs-workflow acs-dark section-pad">
        <p className="eyebrow"><span /> 02 / ANSWER FROM THE JOB, NOT FROM A SCRIPT</p>
        <h2>An answer is only useful if the system can see the right customer record.</h2>
        <p className="acs-workflow-lede">
          A generic chatbot can repeat policies. It cannot reliably tell a customer what is
          happening with their appointment, job, invoice or document unless it has approved
          access to the information behind the answer.
        </p>
        <p className="acs-workflow-label">A useful system follows a simple path:</p>
        <ol className="acs-steps">
          {WORKFLOW.map((s, i) => (
            <li key={s.t} className={s.human ? "acs-step-human" : undefined}>
              <span>0{i + 1}</span>
              <h3>{s.t}</h3>
              <p>{s.p}</p>
            </li>
          ))}
        </ol>
        <strong className="acs-takeaway">
          The customer should not have to repeat the story because the system handed the
          request over.
        </strong>
      </section>

      {/* 04 — what can be handled, and what should stay human */}
      <section className="acs-bounds section-pad">
        <p className="section-index">03 / AUTOMATE THE ROUTINE, NOT THE RELATIONSHIP</p>
        <h2>A good system knows when to stop.</h2>
        <div className="acs-bounds-grid">
          <div className="acs-panel">
            <h3>A system may be able to handle</h3>
            <ul>{SYSTEM_HANDLES.map((s) => <li key={s}><Check /> {s}</li>)}</ul>
          </div>
          <div className="acs-panel acs-panel-human">
            <h3>A person should handle</h3>
            <ul>{PERSON_HANDLES.map((s) => <li key={s}><Arrow /> {s}</li>)}</ul>
          </div>
        </div>
        <p className="acs-bounds-closing">
          The exact boundary depends on the business. It should be agreed before the system
          answers a real customer.
        </p>
      </section>

      {/* Proof section intentionally not rendered and no placeholder space
          left in the layout: no real client, production system, approved
          quote, image or measured result is available. Do not use generated
          people, demos or estimated results as proof. When approved, place
          one compact case-study band here (after the boundaries section):
          request types before, real roles handling them, approved
          information used, human stop conditions, one measured result over
          a defined period, and a real name, role, company, logo and
          photograph. */}

      {/* 05 — which customer-service problem do you have? */}
      <section className="acs-chooser acs-dark section-pad">
        <p className="eyebrow"><span /> 04 / CHOOSE THE RIGHT FIRST FIX</p>
        <h2>Not every customer request needs the same system.</h2>
        <div className="acs-chooser-grid">
          {CHOOSER.map((c) => (
            <article key={c.t} className={c.here ? "acs-here" : undefined}>
              <h3>{c.t}</h3>
              <p>{c.p}</p>
              <p className="acs-route">
                <strong>{c.label}</strong>
                {c.href
                  ? <a className="inline-link" href={v1(c.href)}>{c.fit} <Arrow /></a>
                  : <span>{c.fit}</span>}
              </p>
            </article>
          ))}
        </div>
        <strong className="acs-takeaway">
          Kortex should recommend the smallest answer that solves the actual problem&mdash;even
          when that answer is not AI.
        </strong>
      </section>

      {/* 06 — free customer service audit + form */}
      <section className="acs-audit acs-dark section-pad" id="audit">
        <div className="acs-audit-panel">
          <p className="eyebrow"><span /> 05 / SEE WHERE THE OFFICE TIME IS GOING</p>
          <h2>How much of your team&rsquo;s day disappears into the same customer questions?</h2>
          <div className="acs-audit-grid">
            <div>
              <p className="acs-audit-lede">
                Share a small sample of recent calls, texts, emails or requests&mdash;or tell us
                what the office keeps dealing with.
              </p>
              <p className="acs-audit-label">Kortex will help identify:</p>
              <ul className="acs-audit-list">
                {AUDIT_IDENTIFIES.map((t) => <li key={t}><Check /> {t}</li>)}
              </ul>
              <p className="acs-note">
                {ph("Where the sample is sufficient, Kortex can estimate the staff time tied up in the current process and the portion that may be recoverable. [CONFIRM THAT THIS ESTIMATE IS INCLUDED IN THE FREE AUDIT AND DEFINE THE METHOD USED.]")}
              </p>
              <div className="actions">
                <a className="button" href="#audit-form">Get my free customer service audit <Arrow /></a>
              </div>
              <a className="direct-call" href="tel:+13018898546">OR CALL (301) 889-8546</a>
              <p className="acs-reassure">
                You do not need clean reports or a formal presentation. Start with the questions
                your team keeps answering.
              </p>
            </div>
            <div className="acs-form-wrap" id="audit-form">
              <CustomerServiceAuditForm />
            </div>
          </div>
        </div>
      </section>

      {/* 07 — faq */}
      <section className="acs-faq faq section-pad" id="faq">
        <div className="acs-faq-grid">
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

      {/* 08 — final cta: short, no extra engagement explanation */}
      <section className="acs-final acs-dark">
        <div className="grid-overlay" />
        <div className="acs-final-inner">
          <p className="eyebrow"><span /> START WITH THE QUESTIONS YOU ALREADY RECEIVE</p>
          <h2>Let&rsquo;s see what your office could stop answering manually.</h2>
          <p>
            Send a small sample or tell us what keeps coming up. Kortex will show you what may be
            handled safely, what should stay with your team and whether the improvement is worth
            pursuing.
          </p>
          <div className="actions">
            <a className="button" href="#audit-form">Get my free customer service audit <Arrow /></a>
            <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
          </div>
        </div>
      </section>
    </>
  );
}
