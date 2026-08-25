import type { Metadata } from "next";
import { Arrow, Check } from "@/components/v1/icons";
import { v1 } from "@/components/v1/paths";
import { FitReviewForm } from "./fit-review-form";
import "./servicetitan.css";

// Source of truth: the senior-reviewed copy + design doc
// (kortex-servicetitan-alternative-page-copy-and-design.md, Aug 2026).
// Standing rules from it, do not undo:
//  - Fair comparison, no platform bashing, no red-cross/green-check aesthetic.
//  - Never imply ServiceTitan lacks APIs, integrations or data control.
//  - Never claim Kortex is cheaper. No unverified ServiceTitan dollar pricing.
//  - Never promise a ServiceTitan integration until access, plan, approved
//    path and feasibility are confirmed.
//  - The proof section is DELIBERATELY ABSENT: no client is verified to have
//    evaluated ServiceTitan. Add it only with a real, client-approved story.
// Bracketed copy renders highlighted via ph() so reviewers can spot every
// claim that still needs sign-off before publishing.

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "ServiceTitan Alternative for Contractors | ServiceTitan vs Kortex",
  description:
    "Compare ServiceTitan with a custom Kortex operations system. See which approach fits your workflows, team, integrations, ownership needs and long-term cost.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/servicetitan-alternative` },
};

/* Bracketed values in the copy are unconfirmed. They render highlighted so a
   reviewer can spot every claim that still needs sign-off before publishing. */
const ph = (s: string) =>
  s.split(/(\[[^\]]*\])/).map((part, i) =>
    part.startsWith("[") ? <span className="ph" key={i}>{part}</span> : part
  );

const MATRIX: [string, string, string][] = [
  ["Starting point", "A mature platform with prebuilt trade workflows.", "Your company's existing operation and the first workflow worth improving."],
  ["Breadth", "Broad suite across service, field, customer, financial and project operations.", "Only the modules and connections your business decides to build."],
  ["Workflow fit", "Configure the platform and adapt the operation where required.", "Design around your roles, approvals, exceptions and competitive process."],
  ["Integrations", "Prebuilt integrations and APIs, subject to product, plan and approved-access requirements.", "Custom connections where technically and commercially feasible."],
  ["Product updates", "Ongoing vendor releases and improvements.", "Changes are planned and built around your company's priorities."],
  ["Commercial model", "Vendor pricing based on package and technician count; request a current quote.", "Custom build, hosting and support costs based on agreed scope."],
  ["Ownership", "ServiceTitan is the software platform; ServiceTitan states customers retain control of their data.", "Intended as a company-owned system; exact code, account, hosting and support terms must be agreed."],
  ["Best fit", "Contractors whose needs align well with a broad trade platform.", "Contractors whose important workflows are too specific or valuable to force into a standard process."],
];

const ST_FITS = [
  "You need a broad field-service platform rather than one specialized workflow",
  "Scheduling, dispatch, call booking, invoicing, pricebook and service-agreement tools cover most of the operation you want to improve",
  "Your team is willing to adopt the platform's processes and terminology",
  "You value ongoing vendor product development, training and an established partner ecosystem",
  "Available integrations or APIs cover the systems you need to connect",
  "You prefer a vendor subscription over funding and governing a custom system",
];

const KX_FITS = [
  "Your critical workflow crosses field, office, compliance and financial processes in a way standard software does not handle cleanly",
  "Your team relies on spreadsheets, side systems or repeated data entry to fill the gaps",
  "The company depends on a few experienced people to connect the operation manually",
  "You want to preserve existing software that already works and build only the missing layer",
  "Control over the system, priorities and long-term direction matters to the business",
  "Your team is willing to help design and test the workflow",
];

const BOTH_EXAMPLES = [
  "A specialized approval path",
  "Compliance or payroll handling outside the standard workflow",
  "A management view that combines information from several systems",
  "A customer or project process unique to your company",
  "A handoff between ServiceTitan and another system",
];

const ST_COSTS = [
  "Package and technician-based pricing",
  "Paid add-ons and connected products",
  "Implementation, migration and training",
  "Internal time, integration and specialist support",
  "Workarounds or additional systems that remain necessary",
];

const KX_COSTS = [
  "Workflow mapping and design",
  "Initial build and testing",
  "Data migration and integrations",
  "Hosting, security and maintenance",
  "Training, future changes and support",
  "Internal time required from process owners and users",
];

const EFFECTS = [
  "Which option removes more repeated work?",
  "Which one the field and office are more likely to adopt?",
  "Which one gives leadership the information it needs sooner?",
  "Which one reduces key-person dependence and future workarounds?",
];

const REVIEW_COMPARES = [
  "Whether ServiceTitan already handles it well",
  "What configuration or integration may be required",
  "Which parts would still depend on workarounds",
  "Whether a custom workflow would create enough value to justify itself",
  "Whether keeping ServiceTitan and adding one missing layer is the better answer",
];

const OUTCOMES: [string, string][] = [
  ["ServiceTitan fits as standard", "The platform already handles the workflow well. Buy it and move on."],
  ["Configure or integrate ServiceTitan", "The fit is close. Configuration or an available integration closes the gap."],
  ["Keep ServiceTitan, add a Kortex layer", "The platform stays. One missing workflow gets built around it."],
  ["Build a Kortex operations system", "The workflow is too specific or valuable to force into a standard process."],
];

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is Kortex a field-service software product like ServiceTitan?",
    a: "No. ServiceTitan is a broad software platform. Kortex studies your operation and builds a custom system or workflow around the parts your company decides are worth owning.",
  },
  {
    q: "When is ServiceTitan the better answer?",
    a: "When scheduling, dispatch, call booking, invoicing, pricebook and service-agreement tools cover most of the operation you want to improve, and your team is willing to adopt the platform's processes. If ServiceTitan already solves the important workflows well, building them again would add cost without creating an advantage.",
  },
  {
    q: "Is Kortex cheaper than ServiceTitan?",
    a: "Not necessarily. A custom system can require a larger initial investment. The useful comparison is total cost, workflow fit and operational value over several years — not the first invoice alone.",
  },
  {
    q: "Does ServiceTitan let contractors customize and integrate it?",
    a: "Yes. ServiceTitan offers configurable workflows, prebuilt integrations and APIs. Access and feasibility can depend on the product, plan and approved integration path. The comparison is not “customizable versus not customizable”; it is whether the available configuration fits the workflow well enough.",
  },
  {
    q: "Can Kortex integrate with ServiceTitan?",
    a: "Possibly. It depends on the specific data, workflow, ServiceTitan access and approved integration path. We verify feasibility before proposing a connection.",
  },
  {
    q: "Should we replace ServiceTitan if we already use it?",
    a: "Not unless the business case supports it. If the platform handles most of the operation well, the better answer may be to keep it and address only the gap.",
  },
  {
    q: "Who owns a Kortex system?",
    a: ph("A Kortex build is intended as a company-owned system. The exact code, account, data, hosting, third-party service, maintenance and termination terms are agreed in the engagement. [CONFIRM AND PUBLISH THE VERIFIED OWNERSHIP TERMS BEFORE LAUNCH.]"),
  },
];

export default function ServiceTitanAlternativePage() {
  return (
    <>
      {/* 01 — hero: one workflow entering two paths, neither labelled the winner */}
      <section className="st-hero st-dark">
        <div className="grid-overlay" />
        <div className="st-hero-grid">
          <div>
            <p className="eyebrow"><span /> SERVICETITAN ALTERNATIVE FOR ESTABLISHED CONTRACTORS</p>
            <h1>ServiceTitan is built for the trades. Kortex is built around the way <em>your company</em> works.</h1>
            <p className="st-lede">
              ServiceTitan offers a broad, established platform for contractors. Kortex builds a
              custom operations system around your specific workflows. Compare the fit before you
              commit your team, data and operating process to either approach.
            </p>
            <div className="actions">
              <a className="button" href="#fit-review">Book my free Software Fit Review <Arrow /></a>
              <a className="inline-link" href={v1("/tools/rent-vs-own")}>Use the rent-vs-own calculator <Arrow /></a>
            </div>
            <p className="st-support">
              Bring one important workflow. We will tell you honestly whether ServiceTitan, Kortex
              or another option appears to fit it better.
            </p>
            <ul className="st-trust">
              <li><Check /> FAIR COMPARISON</li>
              <li><Check /> NO PLATFORM BASHING</li>
              <li><Check /> NO OBLIGATION</li>
            </ul>
          </div>

          <div className="st-fork" role="img" aria-label="One workflow entering two possible paths: configure a standard platform, or build a company-owned system">
            <div className="st-fork-top">
              <span>WORKFLOW TO IMPROVE</span>
              <p>Service request → Field work → Office review → Invoice</p>
            </div>
            <div className="st-fork-paths">
              <div className="st-fork-path">
                <strong>Path A — standard platform</strong>
                <ol>
                  <li>Configure a mature suite</li>
                  <li>Train the team</li>
                  <li>Operate within the platform</li>
                </ol>
              </div>
              <div className="st-fork-path">
                <strong>Path B — company-owned system</strong>
                <ol>
                  <li>Map the unique workflow</li>
                  <li>Build the missing pieces</li>
                  <li>Connect current systems</li>
                </ol>
              </div>
            </div>
            <div className="st-fork-q">THE QUESTION IS WHICH PATH FITS THE OPERATION</div>
          </div>
        </div>
      </section>

      {/* 02 — the operating-model decision */}
      <section className="st-decision section-pad">
        <div className="st-head">
          <p className="section-index">01 / THIS IS NOT ONLY A FEATURE COMPARISON</p>
          <h2>It is a decision about how your company should operate.</h2>
        </div>
        <div className="st-decision-grid">
          <div className="st-decision-col">
            <p>
              ServiceTitan gives contractors a broad, established platform for functions such as
              call booking, scheduling, dispatching, field work, invoicing, service agreements and
              reporting. <strong>For many contractors, that is exactly the right answer.</strong>
            </p>
            <p>
              The tradeoff is that every standard platform has a way it expects work to move. Your
              team configures the product, adopts its workflows and uses custom integrations or
              workarounds where the fit is not exact.
            </p>
          </div>
          <div className="st-decision-col">
            <p>
              Kortex starts from the other direction. We study how your operation creates value,
              then build the missing system around your roles, approvals, exceptions and existing
              software.
            </p>
            <div className="st-decision-verdict">
              <p>
                Neither approach is automatically better. The right answer depends on what your
                business needs to standardize — and what it should not compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — comparison matrix. Decision rows, not feature checkmarks. */}
      <section className="st-compare st-dark section-pad">
        <div className="st-head">
          <p className="section-index amber">02 / SERVICETITAN VS KORTEX</p>
          <h2>Two different ways to solve the same operational problem.</h2>
        </div>
        <div className="st-matrix">
          <div className="st-matrix-head" aria-hidden="true">
            <span>DECISION</span><span>SERVICETITAN</span><span>KORTEX OPERATIONS SYSTEM</span>
          </div>
          {MATRIX.map(([label, st, kx]) => (
            <div className="st-row" key={label}>
              <h3>{label}</h3>
              <div><span className="st-cell-label">SERVICETITAN</span><p>{st}</p></div>
              <div><span className="st-cell-label">KORTEX OPERATIONS SYSTEM</span><p>{kx}</p></div>
            </div>
          ))}
        </div>
        <div className="st-accuracy">
          <span>ACCURACY NOTE</span>
          <p>
            ServiceTitan&apos;s products, packaging, pricing and integrations change. Verify current
            details directly with ServiceTitan. Kortex is not affiliated with or endorsed by
            ServiceTitan.
          </p>
        </div>
      </section>

      {/* 04 — better-fit twin panels, equal visual dignity */}
      <section className="st-fit section-pad">
        <div className="st-head">
          <p className="section-index">03 / THE HONEST ANSWER MAY BE EITHER ONE</p>
          <h2>Choose based on the operation — not the sales pitch.</h2>
        </div>
        <div className="st-fit-grid">
          <article className="st-panel">
            <span>STANDARD PLATFORM</span>
            <h3>ServiceTitan may fit better when…</h3>
            <ul>
              {ST_FITS.map((f) => <li key={f}><Check />{f}</li>)}
            </ul>
            <p className="st-panel-close">
              If ServiceTitan already solves the important workflows well, building them again
              would add cost without creating an advantage.
            </p>
          </article>
          <article className="st-panel">
            <span>COMPANY-OWNED SYSTEM</span>
            <h3>Kortex may fit better when…</h3>
            <ul>
              {KX_FITS.map((f) => <li key={f}><Check />{f}</li>)}
            </ul>
            <p className="st-panel-close">
              Custom should not mean rebuilding every feature a mature platform already offers. It
              should mean protecting the few workflows that make your business different.
            </p>
          </article>
        </div>
      </section>

      {/* 05 — keep the platform, build the missing layer */}
      <section className="st-both st-dark section-pad">
        <div className="grid-overlay" />
        <div className="st-head" style={{ position: "relative", zIndex: 2 }}>
          <p className="section-index amber">04 / THE ANSWER MAY BE BOTH</p>
          <h2>Keep the platform. Build only the missing operational layer.</h2>
          <p>
            If your company already uses ServiceTitan successfully, a specific workflow gap may not
            justify a complete replacement. Depending on available APIs, permissions and the
            workflow involved, Kortex may be able to build a controlled process around or alongside
            the platform.
          </p>
        </div>
        <div className="st-both-flow" style={{ position: "relative", zIndex: 2 }}>
          <div className="st-both-node">
            <span>WHAT STAYS</span>
            <strong>ServiceTitan core records</strong>
            <p>The platform keeps running the workflows it already handles well.</p>
          </div>
          <i />
          <div className="st-both-node mid">
            <span>WHAT GETS BUILT</span>
            <strong>Kortex custom workflow</strong>
            <p>One controlled process for the part of the operation that still is not working.</p>
          </div>
          <i />
          <div className="st-both-node">
            <span>WHAT IT FEEDS</span>
            <strong>Accounting, compliance, management view</strong>
            <p>The systems your office already trusts, connected rather than replaced.</p>
          </div>
        </div>
        <ul className="st-both-list" style={{ position: "relative", zIndex: 2 }}>
          {BOTH_EXAMPLES.map((e) => <li key={e}><Check />{e}</li>)}
        </ul>
        <div className="st-caution" style={{ position: "relative", zIndex: 2 }}>
          <span>FEASIBILITY CAUTION</span>
          <p>
            Feasibility depends on ServiceTitan access, approved integration paths and the workflow
            involved. The right first question is not &ldquo;How do we replace ServiceTitan?&rdquo;
            It is &ldquo;Which part of the operation still is not working?&rdquo;
          </p>
        </div>
      </section>

      {/* 06 — full cost */}
      <section className="st-cost section-pad">
        <div className="st-head">
          <p className="section-index">05 / DO NOT COMPARE ONE MONTHLY PRICE WITH ONE BUILD PRICE</p>
          <h2>Compare what each choice costs to run for the next three to five years.</h2>
        </div>
        <div className="st-cost-grid">
          <div className="st-cost-col">
            <span>FOR SERVICETITAN, INCLUDE</span>
            <ul>{ST_COSTS.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <div className="st-cost-col">
            <span>FOR A KORTEX SYSTEM, INCLUDE</span>
            <ul>{KX_COSTS.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </div>
        <ul className="st-effect">
          {EFFECTS.map((e, i) => (
            <li key={e}><b>0{i + 1}</b>{e}</li>
          ))}
        </ul>
        <div className="actions">
          <a className="button ghost" href={v1("/tools/rent-vs-own")}>Use the rent-vs-own calculator <Arrow /></a>
        </div>
        <p className="st-support">
          Compare the real three- or five-year cost using your technicians, modules, implementation
          requirements and support assumptions. The calculator never preloads a ServiceTitan price —
          you enter your own quote.
        </p>
      </section>

      {/* 07 — fit review centerpiece: one workflow, four possible recommendations */}
      <section className="st-review st-dark section-pad" id="fit-review">
        <div className="st-head">
          <p className="section-index amber">06 / START WITH ONE WORKFLOW</p>
          <h2>See which approach fits before you commit the whole company.</h2>
        </div>
        <div className="st-review-grid">
          <div className="st-review-copy">
            <p>
              Bring the workflow that matters most — service-to-invoice, dispatch, certified
              payroll, project approvals, change work or another process your company cannot run
              cleanly today. Kortex will help you compare:
            </p>
            <ul>
              {REVIEW_COMPARES.map((r) => <li key={r}><Check />{r}</li>)}
            </ul>
            <p className="st-honest">If ServiceTitan is the stronger fit, we will say so.</p>
            <div className="st-review-cta">
              <a className="button" href="#fit-review-form">Book my free Software Fit Review <Arrow /></a>
              <span className="st-reassure">ONE WORKFLOW · FAIR COMPARISON · NO OBLIGATION</span>
            </div>
            <p className="st-support">{ph("[CONFIRM SESSION LENGTH, ATTENDEES, DELIVERABLE AND WHETHER IT IS FREE.]")}</p>
          </div>
          <div className="st-outcomes">
            <span>FOUR POSSIBLE RECOMMENDATIONS — WE WILL MAKE ANY OF THEM</span>
            <ol>
              {OUTCOMES.map(([t, p]) => (
                <li key={t}><strong>{t}</strong><p>{p}</p></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Proof section intentionally absent — see the note at the top of this file. */}

      {/* 08 — FAQ */}
      <section className="faq st-faq section-pad">
        <div className="st-head">
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

      {/* 09 — final CTA + two-step form */}
      <section className="st-final st-dark section-pad">
        <div className="grid-overlay" />
        <div className="st-head" style={{ position: "relative", zIndex: 2 }}>
          <p className="section-index amber">08 / DO NOT CHOOSE THE PLATFORM BEFORE YOU MAP THE WORKFLOW</p>
          <h2>Compare the fit using the way your company actually operates.</h2>
        </div>
        <div className="st-final-grid" style={{ position: "relative", zIndex: 2 }}>
          <div className="st-final-promise">
            <p>
              Bring one important workflow. Kortex will help you see whether ServiceTitan, a custom
              system or a combination of both is the more sensible answer.
            </p>
            <p>
              We read every request, and the review is a working session, not a demo — you leave
              knowing which of the four recommendations fits, and why.
            </p>
            <a className="direct-call" href="tel:+13018898546">OR CALL (301) 889-8546</a>
          </div>
          <div className="st-form-wrap" id="fit-review-form">
            <FitReviewForm />
          </div>
        </div>
      </section>
    </>
  );
}
