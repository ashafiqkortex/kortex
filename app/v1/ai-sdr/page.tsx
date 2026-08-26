import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Check } from "@/components/v1/icons";
import { v1 } from "@/components/v1/paths";
import { FollowUpAuditForm } from "./follow-up-audit-form";
import "./sdr.css";

// Source of truth: the senior-reviewed copy + design doc
// (kortex-ai-sdr-page-copy-and-design.md, Aug 2026).
// Standing rules from it, do not undo:
//  - Legacy search doorway. /ai-sdr stays OUT of the primary navigation; the
//    Operations System remains the lead offer. Footer/resource links only.
//  - The Free Follow-Up Audit is the only dominant offer; every primary CTA
//    opens or scrolls to the same form (#audit-form). Secondary action is the
//    phone. One mid-page CTA after the revenue-leak section — same offer,
//    not a second one.
//  - This page is follow-up after an inquiry or estimate, NOT cold-email
//    software. Do not present mass cold outreach as the primary use and do
//    not promote a staff-replacement program.
//  - The $500,000+ figure is company-wide operational-efficiency proof ONLY.
//    It must keep its visible qualifier and must never be presented as AI
//    SDR, follow-up or sales-revenue proof.
//  - The AI-SDR-specific proof section is NOT rendered: no real client,
//    production system, approved quote, image and measured result exist yet.
//    No generated people, anonymous quotes or fictional results as proof.
//  - Buy-versus-build keeps two equal cards; do not visually prefer custom.
//    Standard software is a credible and often preferable answer.
//  - No robots, digital salespeople, generated headshots, futuristic CRM
//    screens, email explosions, spam imagery or generic SaaS dashboards.
//    Do not animate mass-email sending or an AI salesperson.
//  - Amber is reserved for the human-handoff branch, stop conditions and the
//    one CTA per screenful.
// Bracketed copy renders highlighted via ph() so reviewers can spot every
// claim that still needs sign-off before publishing.

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "AI SDR for Contractors | Quote and Lead Follow-Up | Kortex",
  description:
    "Keep contractor inquiries, estimates and service opportunities moving with approved follow-up—and bring real buying conversations to your team.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/ai-sdr` },
};

/* Bracketed values in the copy are unconfirmed. They render highlighted so a
   reviewer can spot every claim that still needs sign-off before publishing. */
const ph = (s: string) =>
  s.split(/(\[[^\]]*\])/).map((part, i) =>
    part.startsWith("[") ? <span className="ph" key={i}>{part}</span> : part
  );

/* The usual pattern after an estimate goes out. The final three steps fade —
   the follow-up trails off exactly where the sequence does. */
const PATTERN = [
  "An inquiry arrives and somebody responds.",
  "The customer speaks with the office or estimator.",
  "An estimate, proposal or next step is sent.",
  "The customer does not reply immediately.",
  "The team gets busy with newer work.",
  "Nobody is certain who should follow up—or when.",
];

/* Three costs already invested in the opportunity. */
const INVESTED = ["Marketing cost", "Estimator time", "Potential work"];

/* Five wide rows: what useful AI sales follow-up does. Rows 4 and 5 carry the
   amber rail — human handoff and the stop condition. */
const WORKFLOW: { t: string; p: string; amber?: boolean }[] = [
  { t: "Watch what needs a next step",
    p: "Identify approved leads, quotes or renewals that have no reply or scheduled follow-up." },
  { t: "Send only approved communication",
    p: "Use the correct message, timing and channel for that stage of the opportunity." },
  { t: "Record what happened",
    p: "Update the status so the office can see who replied, who is waiting and what has gone quiet." },
  { t: "Bring the conversation to a person",
    p: "Surface questions, objections and buying signals with the previous history attached.", amber: true },
  { t: "Stop when the situation changes",
    p: "Do not negotiate price, promise scope or keep messaging somebody who has declined or asked to stop.", amber: true },
];

/* System versus salesperson — equal visual weight, amber only on the
   human-handoff side. */
const SYSTEM_HANDLES = [
  "Approved reminders after an inquiry or estimate",
  "Scheduling a permitted next conversation",
  "Collecting a missing detail",
  "Updating an opportunity’s status",
  "Flagging an overdue follow-up",
  "Bringing a reply to the correct salesperson",
];
const PERSON_HANDLES = [
  "Price, scope and contract discussions",
  "Technical or project-specific questions",
  "Objections that require judgment",
  "Relationship-sensitive accounts",
  "Complaints or requests to stop contact",
  "Any reply outside approved limits",
];

/* Buy versus build — two equal cards; neither looks more advanced. The trait
   rows are the design doc's shorthand annotations. */
const BUY = {
  bullets: [
    "Leads and quotes already live in a mainstream CRM",
    "The follow-up sequence is straightforward",
    "Standard email, text and scheduling rules fit the business",
    "The tool can respect your consent and stop-contact requirements",
  ],
  traits: ["Mainstream CRM", "Simple follow-up sequence", "Standard channels", "Standard qualification"],
};
const BUILD = {
  bullets: [
    "The useful signal lives in estimating, service or operational records—not only the CRM",
    "Qualification depends on company-specific rules",
    "The follow-up must use information several systems hold",
    "A reply needs to create or update work elsewhere in the operation",
    "The follow-up gap is part of a larger lead-to-job workflow problem",
  ],
  traits: ["Signals outside the CRM", "Company-specific qualification", "Several systems involved", "Follow-up changes downstream work", "Larger lead-to-job workflow gap"],
};

const AUDIT_IDENTIFIES = [
  "Where the follow-up process stops",
  "Which opportunities have no documented next step",
  "What routine follow-up could be handled consistently",
  "Which replies should go directly to a person",
  "Whether an existing product, simple automation or custom system is the right answer",
];

const FAQS: [string, string][] = [
  ["What is an AI SDR?",
   "An AI SDR is software that supports sales-development work such as research, lead qualification, follow-up, record updates and meeting scheduling. Kortex’s recommended first use is disciplined follow-up on known opportunities—not mass cold outreach."],
  ["Is this the same as an AI receptionist?",
   "No. The receptionist handles the new inbound call and books the next step. The follow-up system works after the inquiry, conversation or estimate already exists."],
  ["Can it replace a salesperson?",
   "That should not be the goal. Software can keep approved follow-up moving and make the pipeline visible. A person should handle judgment, persuasion, negotiation and relationships."],
  ["Should we automate cold outreach?",
   "Usually not as the first use. High-volume generic outreach can damage trust and sender reputation. Start with people who already contacted the company, received an estimate or have an existing business relationship."],
  ["Should we buy an AI SDR or build one?",
   "Buy when the process is standard and the product works with your existing CRM. Consider a custom build only when the qualifying logic, operational information or required actions do not fit a standard tool."],
  ["Can it work with our current CRM or estimating software?",
   "Possibly. It depends on the software, access, permissions, data quality and security requirements. Kortex should verify each connection before promising it."],
  ["How much revenue are we losing from poor follow-up?",
   "Open pipeline without a next step is not automatically lost revenue. The audit can show the value currently receiving no documented follow-up; closed revenue impact requires measured results over time."],
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI SDR for Contractors",
    serviceType: "AI sales follow-up systems",
    description:
      "Keep contractor inquiries, estimates and service opportunities moving with approved follow-up—and bring real buying conversations to your team.",
    url: `${SITE}/ai-sdr`,
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

export default function V1AiSdrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 01 — hero: 7/5 split. One estimate timeline stops after Sent; the
          follow-up system creates the next step and the human handoff. */}
      <section className="sdr-hero sdr-dark">
        <div className="grid-overlay" />
        <div className="sdr-hero-grid">
          <div>
            <p className="eyebrow"><span /> AI SALES FOLLOW-UP FOR ESTABLISHED CONTRACTORS</p>
            <h1>Stop losing good work after the estimate goes out.</h1>
            <p className="sdr-lede">
              Kortex builds follow-up systems that keep approved inquiries, quotes and
              service-agreement opportunities moving&mdash;then bring genuine buying conversations
              to your sales team.
            </p>
            <div className="actions">
              <a className="button" href="#audit-form">Get my free follow-up audit <Arrow /></a>
              <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
            </div>
            <p className="sdr-support">
              Show us a sample of open leads or estimates. We&rsquo;ll identify where follow-up
              stops, what can be handled automatically and where a real salesperson should step in.
            </p>
            <ul className="sdr-trust">
              <li><Check /> WARM OPPORTUNITIES</li>
              <li><Check /> APPROVED FOLLOW-UP</li>
              <li><Check /> PEOPLE HANDLE THE SALE</li>
            </ul>
          </div>
          {/* One contractor estimate on a simple timeline, then the split:
              routine follow-up versus the buying signal handed to a person.
              No AI personality writing creative messages — the value is that
              the next step happens and the person receives context. */}
          <aside className="sdr-timeline" aria-label="Example estimate follow-up timeline">
            <div className="sdr-timeline-top"><span>ONE ESTIMATE &mdash; EXAMPLE</span><i /><i /><i /></div>
            <ol className="sdr-stages">
              <li><span>01</span>INQUIRY RECEIVED</li>
              <li><span>02</span>ESTIMATE SENT</li>
              <li><span>03</span>NO REPLY</li>
              <li><span>04</span>FOLLOW-UP DUE</li>
            </ol>
            <div className="sdr-branches">
              <div>
                <span>ROUTINE</span>
                <p>Approved reminder sent; status updated</p>
              </div>
              <div className="sdr-branch-human">
                <span>BUYING SIGNAL</span>
                <p>Prospect asks a scope question; salesperson notified with history</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 02 — revenue leak: six steps, the final three visually fading, then
          the three costs already invested and the one mid-page CTA. */}
      <section className="sdr-leak section-pad">
        <p className="section-index">THE OPPORTUNITY WAS REAL. THE NEXT STEP WAS NOT.</p>
        <h2>You already paid to generate the lead and prepare the estimate.</h2>
        <p className="sdr-leak-lede">Then the usual pattern begins:</p>
        <ol className="sdr-pattern">
          {PATTERN.map((p, i) => (
            <li key={p} className={i >= 3 ? `sdr-fade sdr-fade-${i - 2}` : undefined}>
              <span>0{i + 1}</span>
              <p>{p}</p>
            </li>
          ))}
        </ol>
        <p className="sdr-leak-copy">
          The customer may have chosen someone else. They may also be waiting, comparing options
          or simply busy. Without a consistent next step, the company never finds out.
        </p>
        <p className="sdr-leak-copy">
          The waste is larger than one unanswered email. Marketing cost, estimator time and
          potential work are already tied up in that opportunity.
        </p>
        <div className="sdr-invested" aria-label="Costs already invested in the opportunity">
          <span className="sdr-invested-tag">ALREADY INVESTED</span>
          <ul>
            {INVESTED.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
        {/* Mid-page CTA — the same Follow-Up Audit, not a second offer. */}
        <div className="actions">
          <a className="button" href="#audit-form">Get my free follow-up audit <Arrow /></a>
        </div>
      </section>

      {/* 03 — what useful AI sales follow-up does: five wide rows. The flow of
          responsibility and status — no message-generation demos. */}
      <section className="sdr-flow sdr-dark section-pad">
        <p className="eyebrow"><span /> FOLLOW-UP DISCIPLINE, NOT AUTOMATED PRESSURE</p>
        <h2>The system keeps the opportunity visible. A person still earns the work.</h2>
        <p className="sdr-flow-lede">
          A useful system does not send endless messages or pretend to hold a relationship. It
          handles the repeatable parts around the salesperson:
        </p>
        <ol className="sdr-flow-rows">
          {WORKFLOW.map((w, i) => (
            <li key={w.t} className={w.amber ? "sdr-flow-human" : undefined}>
              <span>0{i + 1}</span>
              <h3>{w.t}</h3>
              <p>{w.p}</p>
            </li>
          ))}
        </ol>
        <p className="sdr-flow-closing">
          The goal is not more messages. It is fewer worthwhile opportunities disappearing because
          the next step depended on memory.
        </p>
      </section>

      {/* 04 — system versus salesperson boundaries: two equal panels, amber
          only on the human side. */}
      <section className="sdr-bounds section-pad">
        <p className="section-index">AUTOMATE THE CHASE. KEEP THE JUDGMENT.</p>
        <h2>A follow-up system should know when the sale needs a person.</h2>
        <div className="sdr-bounds-grid">
          <article>
            <h3>The system may handle</h3>
            <ul>{SYSTEM_HANDLES.map((s) => <li key={s}><Check /> {s}</li>)}</ul>
          </article>
          <article className="sdr-bounds-human">
            <h3>A person should handle</h3>
            <ul>{PERSON_HANDLES.map((s) => <li key={s}><Arrow /> {s}</li>)}</ul>
          </article>
        </div>
        <p className="sdr-bounds-closing">
          Every message, timing rule and stop condition should be approved before the system
          contacts a real prospect.
        </p>
      </section>

      {/* 05 — buy versus build: two equal cards, Buy first, custom not
          visually preferred. Quiet link into the Operations System. */}
      <section className="sdr-versus sdr-dark section-pad">
        <p className="eyebrow"><span /> CUSTOM IS NOT AUTOMATICALLY BETTER</p>
        <h2>Buy the standard product when standard follow-up is all you need.</h2>
        <div className="sdr-versus-grid">
          <article>
            <h3>Use an off-the-shelf follow-up tool when</h3>
            <ul>{BUY.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <p className="sdr-traits">{BUY.traits.join(" · ")}</p>
          </article>
          <article>
            <h3>Consider a Kortex build when</h3>
            <ul>{BUILD.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <p className="sdr-traits">{BUILD.traits.join(" · ")}</p>
          </article>
        </div>
        <p className="sdr-versus-note">
          If a standard product fits, buy it. If the real problem is the way your systems and
          handoffs connect, the answer may belong inside the Operations System.
        </p>
        <Link className="inline-link" href={v1("/operations-system")}>SEE THE OPERATIONS SYSTEM <Arrow /></Link>
      </section>

      {/* 06 — firm-level proof: compact high-contrast strip. Company-wide
          result only, qualifier immediately beneath the number. No animated
          number, no fake client logos. */}
      <section className="sdr-proof section-pad">
        <div className="sdr-proof-strip">
          <p className="eyebrow"><span /> ACROSS KORTEX ENGAGEMENTS</p>
          <p className="sdr-proof-headline">
            More than <strong>$500,000</strong> saved for companies through operational-efficiency
            improvements.
          </p>
          <p className="sdr-proof-qualifier">
            Kortex focuses on reducing avoidable work, disconnected handoffs and operational
            waste. This is a company-wide result&mdash;not a claim about AI SDR performance or
            additional sales revenue.
          </p>
          <p className="sdr-note">{ph("[KEEP THE SCOPE AND QUALIFIER VISIBLE. ADD THE MEASUREMENT PERIOD AND SUPPORTING METHODOLOGY WHEN AVAILABLE.]")}</p>
        </div>
      </section>

      {/* 07 — Free Follow-Up Audit: question-led centerpiece with the form.
          Every primary CTA on the page lands here. No formulaic three-part
          reassurance badge. */}
      <section id="audit-form" className="sdr-audit sdr-dark section-pad">
        <div className="sdr-audit-panel">
          <p className="eyebrow"><span /> SEE WHAT IS WAITING WITHOUT A NEXT STEP</p>
          <h2>How much open work is sitting in your pipeline without anybody following up?</h2>
          <div className="sdr-audit-grid">
            <div>
              <p className="sdr-audit-lede">
                Share a small sample of recent inquiries, estimates, proposals or
                service-agreement opportunities.
              </p>
              <p className="sdr-audit-label">Kortex will help identify:</p>
              <ul className="sdr-audit-list">
                {AUDIT_IDENTIFIES.map((a) => <li key={a}><Check /> {a}</li>)}
              </ul>
              <p className="sdr-audit-value">
                Where the data is sufficient, the audit can total the current pipeline value
                sitting without a documented next step. That is not the same as lost revenue, but
                it shows what deserves attention.{" "}
                {ph("[CONFIRM THIS CALCULATION IS INCLUDED IN THE FREE AUDIT.]")}
              </p>
              <p className="sdr-reassure">
                No polished report needed. Start with a simple list of open leads or
                estimates&mdash;or talk us through how your team follows up today.
              </p>
              <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
            </div>
            <div className="sdr-form-wrap">
              <FollowUpAuditForm />
            </div>
          </div>
        </div>
      </section>

      {/* AI-SDR-specific proof intentionally not rendered: no real client,
          production system, approved quote, image and measured result exist
          yet. When approved, place one compact case-study band after the
          system-versus-salesperson section showing the opportunity types
          before, the previous follow-up gap, the approved messages and
          actions, the human takeover conditions, one measured sales-process
          result over a defined period, and a real name, role, company, logo
          and photograph. Never use the $500,000+ company-wide savings number
          in that module. */}

      {/* 08 — faq */}
      <section className="sdr-faq faq section-pad" id="faq">
        <div className="sdr-faq-grid">
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

      {/* 09 — final cta. Short — the full offer explanation is not repeated. */}
      <section className="sdr-final sdr-dark">
        <div className="grid-overlay" />
        <div className="sdr-final-inner">
          <p className="eyebrow"><span /> YOU ALREADY DID THE EXPENSIVE PART</p>
          <h2>Let&rsquo;s find the good opportunities nobody is following up.</h2>
          <p>
            Show us where inquiries, estimates or agreements go quiet. Kortex will tell you
            whether the answer is a better process, a standard product, simple automation or a
            system connected to the rest of your operation.
          </p>
          <div className="contact-actions">
            <a className="button" href="#audit-form">Get my free follow-up audit <Arrow /></a>
            <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
          </div>
        </div>
      </section>
    </>
  );
}
