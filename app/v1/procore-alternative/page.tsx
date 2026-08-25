import type { Metadata } from "next";
import { Arrow, Check } from "@/components/v1/icons";
import { v1 } from "@/components/v1/paths";
import { FitReviewForm } from "./fit-review-form";
import "./procore.css";

// Source of truth: the senior-reviewed copy + design doc
// (kortex-procore-alternative-page-copy-and-design.md, Aug 2026).
// Standing rules from it, do not undo:
//  - Fair comparison, no platform bashing, no red-cross/green-check aesthetic.
//  - Never imply Procore lacks configurable workflows, financial tools, APIs,
//    integrations, training or support. Kortex is not a replacement for
//    drawings, BIM, RFIs or submittals.
//  - Never claim Kortex is cheaper. No unverified Procore dollar pricing;
//    Procore pricing is described only as product- and ACV-based, per its
//    own published pricing page.
//  - Do not visually preselect Kortex. The three paths get equal dignity.
//  - The proof section is DELIBERATELY ABSENT: no client is verified to have
//    evaluated Procore, and the mechanical-contractor build must never be
//    presented as Procore-decision proof. Add proof only with a real,
//    client-approved Procore story.
// Bracketed copy renders highlighted via ph() so reviewers can spot every
// claim that still needs sign-off before publishing.

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "Procore Alternative for Contractors | Procore vs Kortex",
  description:
    "Compare Procore with a custom Kortex operations system. See which approach fits your project workflows, existing software, ownership needs and long-term cost.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/procore-alternative` },
};

/* Bracketed values in the copy are unconfirmed. They render highlighted so a
   reviewer can spot every claim that still needs sign-off before publishing. */
const ph = (s: string) =>
  s.split(/(\[[^\]]*\])/).map((part, i) =>
    part.startsWith("[") ? <span className="ph" key={i}>{part}</span> : part
  );

const MATRIX: [string, string, string][] = [
  ["Starting point", "A mature construction platform with established project and financial products", "One company workflow important enough to improve or own"],
  ["Core strength", "Managing project information, collaboration and construction processes across the project lifecycle", "Building around company-specific roles, approvals, exceptions and handoffs"],
  ["Breadth", "Broad product suite from preconstruction through closeout", "Only the workflows, views and connections agreed for the build"],
  ["Workflow fit", "Configure tools, layouts and workflow templates within the platform", "Design the system around the operation, then test it with real users"],
  ["Ecosystem and support", "Procore states that annual plans include unlimited users, data and 24/7 support, with a product exception; it also offers 500+ integrations and apps", "Access, roles, integrations, hosting and support are designed and agreed for the specific build"],
  ["Commercial model", "Custom annual quote based on selected products and Annual Construction Volume", "Custom build, hosting and support costs based on agreed scope"],
  ["Control", "Procore remains the platform under the customer’s contract", "Intended as a company-owned system; exact code, account, data, hosting and termination terms must be agreed"],
  ["Best fit", "Contractors that need a broad, established construction platform and can work within its configurable structure", "Contractors with a valuable workflow that remains unusually specific, manual or fragmented"],
];

const PROCORE_HANDLES = [
  "Drawings",
  "RFIs",
  "Submittals",
  "Core project records",
  "Construction financial products",
  "External project collaboration",
];

const INVESTIGATE = [
  "What remains in spreadsheets?",
  "Which approval remains in email?",
  "Which exception depends on one person?",
  "What must accounting reconstruct?",
  "What reaches leadership too late?",
];

const PROCORE_FITS = [
  "The company needs broad project-management and financial tools.",
  "Drawings, RFIs, submittals and external-team collaboration are central to the requirement.",
  "The important workflows fit Procore’s products and configuration.",
  "Vendor training, support, ongoing releases and a large integration marketplace matter.",
];

const KORTEX_FITS = [
  "One important process still depends on spreadsheets, inboxes or individual memory.",
  "The handoff crosses project, office, compliance or financial roles in a company-specific way.",
  "The company wants to keep the systems that work and build only the missing part.",
  "The workflow affects margin, cash, payment or dependence on a few people.",
];

const AUDIT_ASKS = [
  "Where is information copied into a spreadsheet?",
  "Which approval still happens in email or a meeting?",
  "What does the office reconstruct before payment or billing?",
  "Which important signal reaches leadership too late?",
];

/* Diagnostic path: five roles/systems with the manual breaks between them. */
const AUDIT_PATH: [string, string | null][] = [
  ["Project event", "Re-keyed information"],
  ["PM review", "Email approval"],
  ["Office check", "Spreadsheet check"],
  ["Accounting action", "Individual follow-up"],
  ["Leadership visibility", null],
];

const PROCORE_COSTS = [
  "Current annual quote, selected products and expected construction volume",
  "Implementation, migration, configuration and training",
  "Integrations, specialist help and internal administration",
  "Other systems or manual work that will remain",
];

const KORTEX_COSTS = [
  "Mapping, design, build and testing",
  "Data migration and verified integrations",
  "Hosting, security, maintenance and support",
  "Future changes and internal process-owner time",
];

const EFFECTS = [
  "Which option removes more repeated work?",
  "Which one will people actually use?",
  "Which one makes important exceptions visible sooner?",
];

const OUTCOMES = [
  "Use Procore as the standard answer.",
  "Configure Procore more effectively.",
  "Keep Procore and add one custom Kortex layer.",
  "Build a separate Kortex operations workflow.",
];

const FAQS: { q: string; a: React.ReactNode; jsonA: string | null }[] = [
  {
    q: "Is Kortex a replacement for Procore?",
    a: "Not in the usual sense. Kortex does not replace Procore’s core construction-management functions such as drawings, BIM coordination, RFIs or submittals. It builds company-specific operations workflows where a standard platform does not fit cleanly or where information still has to move between people and systems manually.",
    jsonA: "Not in the usual sense. Kortex does not replace Procore’s core construction-management functions such as drawings, BIM coordination, RFIs or submittals. It builds company-specific operations workflows where a standard platform does not fit cleanly or where information still has to move between people and systems manually.",
  },
  {
    q: "When is Procore the better answer?",
    a: "Procore is likely the better choice when the company needs a broad, established construction platform and its products and configuration fit the important workflows. Rebuilding mature project-management functions would rarely be sensible.",
    jsonA: "Procore is likely the better choice when the company needs a broad, established construction platform and its products and configuration fit the important workflows. Rebuilding mature project-management functions would rarely be sensible.",
  },
  {
    q: "Can Procore be customized?",
    a: "Yes. Procore states that customers can customize views, layouts and workflows and use more than 500 integrations and apps. The decision is not “customizable versus not customizable.” It is whether the available configuration fits the workflow well enough.",
    jsonA: "Yes. Procore states that customers can customize views, layouts and workflows and use more than 500 integrations and apps. The decision is not “customizable versus not customizable.” It is whether the available configuration fits the workflow well enough.",
  },
  {
    q: "Can Kortex work with Procore?",
    a: "Possibly. It depends on the workflow, available access, permissions, security requirements and technical feasibility. Kortex should verify the connection before proposing or promising it.",
    jsonA: "Possibly. It depends on the workflow, available access, permissions, security requirements and technical feasibility. Kortex should verify the connection before proposing or promising it.",
  },
  {
    q: "Is Kortex cheaper than Procore?",
    a: "Not necessarily. A custom system can require a larger initial investment. Compare the full three- or five-year cost, the work each option removes and the value of the workflow—not the first invoice alone.",
    jsonA: "Not necessarily. A custom system can require a larger initial investment. Compare the full three- or five-year cost, the work each option removes and the value of the workflow—not the first invoice alone.",
  },
  {
    q: "Should we replace Procore if we already use it?",
    a: "Not unless the business case clearly supports replacement. If Procore handles core project work well, the better answer may be to keep it, configure it differently or address only the remaining gap.",
    jsonA: "Not unless the business case clearly supports replacement. If Procore handles core project work well, the better answer may be to keep it, configure it differently or address only the remaining gap.",
  },
  {
    // The answer is an unverified placeholder — highlighted on the page and
    // excluded from the FAQPage JSON-LD until the real terms are published.
    q: "Who owns a Kortex system?",
    a: ph("[INSERT VERIFIED TERMS FOR CODE, ACCOUNTS, DATA, HOSTING, THIRD-PARTY SERVICES, MAINTENANCE AND TERMINATION.]"),
    jsonA: null,
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Software Fit Review",
    serviceType: "Software selection and operations consulting",
    description:
      "A free review of one real workflow that compares Procore, a custom Kortex operations system or a combined approach, and says which appears to fit better.",
    url: `${SITE}/procore-alternative`,
    provider: {
      "@type": "ProfessionalService",
      name: "Kortex Consulting",
      url: SITE,
      telephone: "+1-301-889-8546",
    },
    areaServed: "US",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.filter((f) => f.jsonA).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.jsonA },
    })),
  },
];

export default function ProcoreAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero — one workflow entering three paths, none marked the winner */}
      <section className="pcx-hero">
        <div className="grid-overlay" />
        <div className="pcx-hero-grid">
          <div>
            <p className="eyebrow"><span /> PROCORE ALTERNATIVE FOR ESTABLISHED CONTRACTORS</p>
            <h1>Procore gives you a construction platform. Kortex builds around <em>the workflow that still does not fit.</em></h1>
            <p className="pcx-lede">
              Compare Procore, a custom Kortex system and using both&mdash;based on one real
              workflow and what the company will still have to manage by hand.
            </p>
            <div className="actions">
              <a className="button" href="#fit-review-form">Book my free Software Fit Review <Arrow /></a>
              <a className="inline-link" href="#comparison">See the comparison <span aria-hidden="true">&darr;</span></a>
            </div>
            <p className="pcx-support">
              Bring one important workflow. We will tell you whether Procore, Kortex or a
              combination appears to fit it better.
            </p>
            <ul className="pcx-trust">
              <li><Check /> FAIR COMPARISON</li>
              <li><Check /> NO PLATFORM BASHING</li>
              <li><Check /> NO OBLIGATION</li>
            </ul>
          </div>

          <div className="pcx-fork" role="img"
            aria-label="One workflow still creating manual work, branching into three equal paths: use Procore as the standard, keep Procore and add one Kortex layer, or build a separate Kortex workflow. No path is marked as the winner.">
            <div className="pcx-fork-top">
              <span>ONE WORKFLOW</span>
              <p>Workflow still creating manual work</p>
            </div>
            <div className="pcx-fork-paths">
              <div className="pcx-fork-path"><b>01</b><strong>Use Procore as the standard</strong></div>
              <div className="pcx-fork-path"><b>02</b><strong>Keep Procore and add one Kortex layer</strong></div>
              <div className="pcx-fork-path"><b>03</b><strong>Build a separate Kortex workflow</strong></div>
            </div>
            <div className="pcx-fork-q">THREE POSSIBLE PATHS &mdash; THE FIT REVIEW COMPARES ALL OF THEM</div>
          </div>
        </div>
      </section>

      {/* 01 — the honest answer: Procore's strengths before Kortex appears */}
      <section className="pcx-honest section-pad">
        <div className="pcx-head">
          <p className="section-index">01 / PROCORE MAY BE THE RIGHT CHOICE</p>
          <h2>Do not rebuild a mature construction platform without a strong reason.</h2>
        </div>
        <div className="pcx-honest-grid">
          <div className="pcx-honest-copy">
            <p>
              Procore offers project-management and financial tools across the construction
              lifecycle, including drawings, RFIs, submittals, documents, reporting and
              collaboration. For many contractors, that breadth is exactly the right answer.
            </p>
            <p>
              Kortex becomes relevant when an important workflow remains outside the platform,
              crosses several systems or depends on company-specific rules that are still being
              carried through spreadsheets, email and individual follow-up.
            </p>
            <p className="pcx-honest-close">
              The real question is whether the platform fits the workflow well
              enough&mdash;and what the remaining manual gap costs the business.
            </p>
          </div>
          <div className="pcx-honest-panels">
            <article className="pcx-panel">
              <span>PROCORE ALREADY HANDLES</span>
              <ul>
                {PROCORE_HANDLES.map((h) => <li key={h}><Check />{h}</li>)}
              </ul>
            </article>
            <article className="pcx-panel">
              <span>THE QUESTION TO INVESTIGATE</span>
              <ul>
                {INVESTIGATE.map((q) => <li key={q}>{q}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* 02 — comparison matrix. Decision rows, not feature checkmarks. */}
      <section className="pcx-compare section-pad" id="comparison">
        <div className="pcx-head">
          <p className="section-index amber">02 / TWO DIFFERENT APPROACHES</p>
          <h2>Compare the operating fit&mdash;not a list of checkmarks.</h2>
        </div>
        <div className="pcx-matrix">
          <div className="pcx-matrix-head" aria-hidden="true">
            <span>DECISION</span><span>PROCORE</span><span>KORTEX OPERATIONS SYSTEM</span>
          </div>
          {MATRIX.map(([label, pc, kx]) => (
            <div className="pcx-row" key={label}>
              <h3>{label}</h3>
              <div><span className="pcx-cell-label">PROCORE</span><p>{pc}</p></div>
              <div><span className="pcx-cell-label">KORTEX OPERATIONS SYSTEM</span><p>{kx}</p></div>
            </div>
          ))}
        </div>
        <div className="pcx-accuracy">
          <span>ACCURACY NOTE</span>
          <p>
            Procore&apos;s products, packaging and terms change. Verify current details directly
            with Procore. Kortex is not affiliated with, endorsed by or sponsored by Procore. All
            trademarks belong to their respective owners.
          </p>
        </div>
      </section>

      {/* 03 — three fits with equal dignity; Kortex is not preselected */}
      <section className="pcx-fits section-pad">
        <div className="pcx-head">
          <p className="section-index">03 / THE RIGHT ANSWER MAY BE PROCORE, KORTEX OR BOTH</p>
          <h2>Choose the smallest sensible solution to the real problem.</h2>
        </div>
        <div className="pcx-fit-grid">
          <article className="pcx-fit-card">
            <span>BROAD ESTABLISHED PLATFORM</span>
            <h3>Procore may fit better when&hellip;</h3>
            <ul>
              {PROCORE_FITS.map((f) => <li key={f}><Check />{f}</li>)}
            </ul>
            <p className="pcx-fit-close">
              If Procore already handles the work cleanly, rebuilding it would add cost without
              creating an advantage.
            </p>
          </article>
          <article className="pcx-fit-card">
            <span>CORE PLATFORM PLUS ONE CUSTOM LAYER</span>
            <h3>Procore plus Kortex may fit better when&hellip;</h3>
            <p>
              Procore can remain the home for core project information while Kortex handles one
              company-specific workflow around or between existing systems.
            </p>
            <p>
              Possible examples include subcontractor readiness across projects, a
              company-specific approval path or a handoff between project information and an
              accounting or office process.
            </p>
            <p className="pcx-fit-close">
              Any connection depends on available access, permissions, security requirements and
              technical feasibility.
            </p>
          </article>
          <article className="pcx-fit-card">
            <span>SEPARATE COMPANY-SPECIFIC WORKFLOW</span>
            <h3>Kortex may fit better when&hellip;</h3>
            <ul>
              {KORTEX_FITS.map((f) => <li key={f}><Check />{f}</li>)}
            </ul>
            <p className="pcx-fit-close">
              Custom only makes sense when the workflow is valuable enough that forcing it into
              another workaround costs more.
            </p>
          </article>
        </div>
      </section>

      {/* 04 — manual-workflow audit: a diagnostic illustration, not a demo */}
      <section className="pcx-audit section-pad">
        <div className="grid-overlay" />
        <div className="pcx-audit-inner">
          <div className="pcx-head">
            <p className="section-index amber">04 / LOOK OUTSIDE THE DEMO</p>
            <h2>The best platform still has to fit the way the company actually works.</h2>
            <p>Before choosing either approach, follow one live workflow from start to finish.</p>
          </div>

          <div className="pcx-path" role="img"
            aria-label="One example workflow moving through five roles: project event, PM review, office check, accounting action, leadership visibility — with manual breaks between them for re-keyed information, email approval, spreadsheet check and individual follow-up, ending in delayed visibility.">
            {AUDIT_PATH.map(([node, gap], i) => (
              <div className="pcx-path-step" key={node}>
                <div className="pcx-node">
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <strong>{node}</strong>
                  {gap === null && <em>DELAYED VISIBILITY</em>}
                </div>
                {gap && <div className="pcx-break"><i /><span>{gap}</span><i /></div>}
              </div>
            ))}
          </div>

          <div className="pcx-audit-grid">
            <div>
              <span className="pcx-ask-label">ASK:</span>
              <ul className="pcx-asks">
                {AUDIT_ASKS.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
            <div className="pcx-audit-close">
              <p>
                A product demonstration shows what the software can do. A workflow review shows
                what the company will still have to do around it.
              </p>
              <a className="button" href="#fit-review-form">Review one real workflow <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — full cost over three to five years; no preloaded dollar figures */}
      <section className="pcx-cost section-pad">
        <div className="pcx-head">
          <p className="section-index">05 / COMPARE THREE TO FIVE YEARS</p>
          <h2>Do not compare one annual quote with one build price.</h2>
          <p>
            Procore states that pricing depends on the products selected and Annual Construction
            Volume&mdash;the total dollar value of construction work across the projects covered
            by the agreement. Its pricing page also says unlimited users, data and 24/7 support
            are included, with a stated exception for Field Productivity pricing.
          </p>
        </div>
        <div className="pcx-cost-grid">
          <div className="pcx-cost-col">
            <span>FOR PROCORE, INCLUDE</span>
            <ul>{PROCORE_COSTS.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <div className="pcx-cost-col">
            <span>FOR A KORTEX SYSTEM, INCLUDE</span>
            <ul>{KORTEX_COSTS.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </div>
        <p className="pcx-effect-lead">Then compare the business effect:</p>
        <ul className="pcx-effect">
          {EFFECTS.map((e, i) => (
            <li key={e}><b>0{i + 1}</b>{e}</li>
          ))}
        </ul>
        <div className="actions">
          <a className="button ghost" href={v1("/tools/rent-vs-own")}>Use the rent-vs-own calculator <Arrow /></a>
        </div>
        <p className="pcx-support">
          The calculator never preloads a Procore price&mdash;you enter your own current quote
          and assumptions, and results appear only after you do.
        </p>
      </section>

      {/* 06 — Software Fit Review centerpiece: one workflow, four possible answers */}
      <section className="pcx-review section-pad" id="fit-review">
        <div className="pcx-head">
          <p className="section-index amber">06 / START WITH ONE WORKFLOW</p>
          <h2>Find the right approach before changing the whole company.</h2>
        </div>
        <div className="pcx-review-grid">
          <div className="pcx-review-copy">
            <p>
              Bring one process still creating repeated work, delayed decisions or poor
              visibility. Kortex will map how it moves today and compare four possible answers:
            </p>
            <p className="pcx-honest-line">If Procore is the stronger answer, we will say so.</p>
            <div className="pcx-review-cta">
              <a className="button" href="#fit-review-form">Book my free Software Fit Review <Arrow /></a>
              <span className="pcx-reassure">ONE WORKFLOW &middot; FAIR COMPARISON &middot; NO OBLIGATION</span>
            </div>
            <p className="pcx-support">{ph("[CONFIRM SESSION LENGTH, ATTENDEES, DELIVERABLE AND WHETHER IT IS FREE.]")}</p>
          </div>
          <div className="pcx-outcomes">
            <span>FOUR POSSIBLE ANSWERS &mdash; WE WILL RECOMMEND ANY OF THEM</span>
            <ol>
              {OUTCOMES.map((o) => <li key={o}>{o}</li>)}
            </ol>
          </div>
        </div>
      </section>

      {/* Proof section intentionally absent — see the note at the top of this
          file. No verified client has evaluated Procore, and the mechanical-
          contractor build must not stand in as Procore-decision proof. */}

      {/* 07 — FAQ */}
      <section className="faq pcx-faq section-pad">
        <div className="pcx-head">
          <p className="section-index">07 / FREQUENTLY ASKED QUESTIONS</p>
          <h2>What owners ask before choosing.</h2>
        </div>
        <div className="faq-grid">
          {FAQS.map(({ q, a }, i) => (
            <details key={q} open={i === 0}>
              <summary><span>{String(i + 1).padStart(2, "0")}</span>{q}<i /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 08 — final CTA + two-step form */}
      <section className="pcx-final section-pad">
        <div className="grid-overlay" />
        <div className="pcx-final-inner">
          <div className="pcx-head">
            <p className="section-index amber">08 / MAP THE WORKFLOW BEFORE CHOOSING THE SYSTEM</p>
            <h2>See which approach fits the way your company actually operates.</h2>
          </div>
          <div className="pcx-final-grid">
            <div className="pcx-final-promise">
              <p>
                Bring one important process. Kortex will help determine whether Procore, a custom
                workflow or a combination of both is the more sensible answer.
              </p>
              <a className="direct-call" href="tel:+13018898546">OR CALL (301) 889-8546</a>
            </div>
            <div className="pcx-form-wrap" id="fit-review-form">
              <FitReviewForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
