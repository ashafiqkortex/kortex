import type { Metadata } from "next";
import { v1 } from "@/components/v1/paths";
import { Arrow } from "@/components/v1/icons";
import { WorkflowReviewForm } from "./workflow-review-form";
import "./about.css";

// Source of truth: the senior-reviewed copy + design doc
// (kortex-about-page-copy-and-design.md, Aug 2026).
// Standing rules from it, do not undo:
//  - This is a trust page, not a service overview: real people, relevant
//    experience, named responsibility and direct contact are the point. The
//    Operations System remains the flagship offer; the full service catalogue
//    is never repeated here.
//  - The FOUNDER-ORIGIN section is NOT rendered: it stays hidden until the
//    founder supplies a real moment, real type of work and a verifiable
//    lesson. No generic "we saw businesses struggling" story. See the doc's
//    "Why Kortex exists" template.
//  - The PROOF section is NOT rendered: it needs a named contractor, real
//    photograph, specific quote and one measured result — all approved.
//    No anonymous company, generated person or estimated result as proof.
//  - The CLIENT-INVOLVEMENT TABLE is NOT rendered: the doc forbids publishing
//    [X] or fake numbers and says to keep the entire table hidden until the
//    delivery ranges are approved; a short paragraph + implementation link is
//    published instead, exactly as the doc allows.
//  - No generated faces, stock people, anonymous silhouettes, robots, code or
//    abstract AI art. Portrait slots hold labeled placeholders until real,
//    current photographs exist.
//  - Do not invent founder names, bios, titles, history or credentials: every
//    identity field renders as its bracketed placeholder via ph().
//  - No section numbering ("01 /") or drafting labels in the interface —
//    typography and spacing carry the hierarchy (doc: Principles).
//  - The Free 20-Minute Workflow Review is the only dominant offer; every
//    primary CTA scrolls to the same form (#workflow-form). Secondary action
//    is the phone.
// Bracketed copy renders highlighted via ph() so reviewers can spot every
// claim that still needs sign-off before publishing.

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "About Kortex | Operations Systems for Contractors",
  description:
    "Meet the people behind Kortex, see how responsibility is assigned and learn how the firm approaches operational systems for established contractors.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/about` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Kortex",
  url: `${SITE}/about`,
  description:
    "Meet the people behind Kortex, see how responsibility is assigned and learn how the firm approaches operational systems for established contractors.",
  mainEntity: {
    "@type": "ProfessionalService",
    name: "Kortex Consulting",
    url: SITE,
    telephone: "+1-301-889-8546",
    email: "hello@kortexconsulting.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6604 Millwood Rd",
      addressLocality: "Bethesda",
      addressRegion: "MD",
      postalCode: "20817",
      addressCountry: "US",
    },
    areaServed: ["Washington, DC", "Suburban Maryland", "Northern Virginia", "Baltimore corridor"],
  },
};

/* Bracketed values in the copy are unconfirmed. They render highlighted so a
   reviewer can spot every claim that still needs sign-off before publishing. */
const ph = (s: string) =>
  s.split(/(\[[^\]]*\])/).map((part, i) =>
    part.startsWith("[") ? <span className="ph" key={i}>{part}</span> : part
  );

/* Firm facts. Temporary hero panel per the doc: no real working-session or
   founder photograph exists yet, and the acceptable temporary option is
   "no image; use a clean firm-facts panel". When a real photograph is
   supplied, it takes this 5-column slot and these facts move to a full-width
   strip immediately below the hero. */
const FACTS: { k: string; v: React.ReactNode }[] = [
  { k: "BASED IN", v: "Bethesda, Maryland" },
  { k: "SERVICE AREA", v: "DC metro + remote projects" },
  { k: "DIRECT LINE", v: <a href="tel:+13018898546">(301) 889-8546</a> },
  { k: "EMAIL", v: <a href="mailto:hello@kortexconsulting.com">hello@kortexconsulting.com</a> },
];

/* Four horizontal steps — an orientation, not a process timeline. No weeks,
   workshops or technical artifacts here (doc: What Kortex does). */
const STEPS: [string, string][] = [
  ["Understand the workflow",
   "See how the work moves today, including the exceptions people handle from memory."],
  ["Choose the simplest responsible answer",
   "Keep existing software where it works. Change only what the workflow requires."],
  ["Build and test with the people involved",
   "Start with one useful piece and let the field or office team prove whether it helps."],
  ["Make responsibility visible",
   "Before rollout, define who owns delivery, decisions, training and ongoing support."],
];

/* Supporting profiles. Every field is a bracketed placeholder — publish only
   people who genuinely perform these roles, with real, current portraits. */
const SUPPORTING: { name: string; title: string; bio: string; owns: string; exp: string }[] = [
  {
    name: "[SYSTEMS OR ENGINEERING LEAD NAME]",
    title: "[REAL TITLE]",
    bio: "[NAME] is responsible for [ARCHITECTURE / DEVELOPMENT / INTEGRATION / TESTING — KEEP ONLY WHAT IS TRUE]. [ADD ONE OR TWO SPECIFIC CREDENTIALS OR BUILDS THAT MATTER TO THIS BUYER.]",
    owns: "[WHAT THIS PERSON OWNS]",
    exp: "[VERIFIED EXPERIENCE]",
  },
  {
    name: "[IMPLEMENTATION OR CLIENT LEAD NAME]",
    title: "[REAL TITLE]",
    bio: "[NAME] owns [WORKFLOW MAPPING / TRAINING / DATA REVIEW / FIELD PILOT / SUPPORT — KEEP ONLY WHAT IS TRUE]. [EXPLAIN HOW THIS PERSON HELPS OFFICE AND FIELD USERS ADOPT THE SYSTEM.]",
    owns: "[WHAT THIS PERSON OWNS]",
    exp: "[VERIFIED EXPERIENCE]",
  },
];

/* Four evidence blocks. One verifiable fact each — no skill clouds, logo
   walls or "decades of combined experience". */
const EVIDENCE: [string, string][] = [
  ["Contractor operations",
   "[INSERT VERIFIED EXPERIENCE WITH MEP, SERVICE, SELF-PERFORMING TRADE OR GENERAL-CONTRACTOR WORKFLOWS. NAME THE FIELD-TO-OFFICE PROCESSES THE TEAM HAS ACTUALLY STUDIED OR IMPROVED.]"],
  ["Systems that reached real use",
   "[INSERT VERIFIED BUILDS THAT WERE USED IN DAY-TO-DAY OPERATIONS. STATE THE TEAM’S ROLE AND WHAT THE SYSTEM WAS RESPONSIBLE FOR.]"],
  ["Implementation and adoption",
   "[INSERT VERIFIED EXPERIENCE TRAINING USERS, MOVING DATA, PILOTING WITH FIELD OR OFFICE TEAMS AND SUPPORTING A LIVE SYSTEM.]"],
  ["Business accountability",
   "[INSERT VERIFIED EXPERIENCE OWNING DELIVERY, COMMERCIAL OUTCOMES, OPERATIONAL METRICS OR LONG-TERM CLIENT RESPONSIBILITY.]"],
];

/* Four operating principles. Statements only — typography and spacing carry
   the hierarchy; no numbering, minimal ornament. */
const PRINCIPLES: [string, string][] = [
  ["Start with the workflow, not the technology",
   "Map the real steps, handoffs and exceptions before recommending what to build."],
  ["Use the simplest answer that works",
   "If a standard product or a straightforward process change solves the problem, custom technology is unnecessary."],
  ["Let users prove it before a wider rollout",
   "The people who do the work should test the first useful piece on real cases before it reaches the whole company."],
  ["Name the person responsible",
   "The client should know who owns each decision, deliverable, escalation and support commitment."],
];

export default function AboutPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

    {/* ---- Hero: 7/5 split — copy beside the temporary firm-facts panel ---- */}
    <section className="abt-hero">
      <div className="grid-overlay" />
      <div className="abt-hero-grid">
        <div className="abt-hero-copy">
          <p className="eyebrow"><span /> ABOUT KORTEX</p>
          <h1>Know who is responsible before you trust them with your operation.</h1>
          <p className="abt-lede">Custom systems can touch how work is scheduled, documented, approved and billed. Kortex is a Bethesda-based operations systems firm that helps established contractors improve the workflows standard software cannot solve.</p>
          <div className="actions">
            <a className="button" href="#workflow-form">Book my free workflow review <Arrow /></a>
            <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
          </div>
          <a className="abt-quiet" href="#people">MEET THE PEOPLE RESPONSIBLE ↓</a>
        </div>
        {/* Acceptable temporary option from the doc: no image; a clean
            firm-facts panel. A real working-session or founder photograph —
            never stock, never generated — replaces this panel when supplied,
            and the facts move to a full-width strip below the hero. */}
        <div className="abt-facts">
          <span className="abt-facts-tag">KORTEX — FIRM FACTS</span>
          <ul>
            {FACTS.map((f) => <li key={f.k}><span>{f.k}</span><p>{f.v}</p></li>)}
          </ul>
        </div>
      </div>
      <div className="abt-trust"><span>BETHESDA, MARYLAND</span><i>&middot;</i><span>DC METRO + REMOTE PROJECTS</span><i>&middot;</i><span>DIRECT PHONE AND EMAIL</span></div>
    </section>

    {/* ---- What Kortex does: four wide steps, orientation only ---- */}
    <section className="abt-what section-pad">
      <p className="eyebrow"><span /> THE WORK, IN PLAIN ENGLISH</p>
      <div className="abt-what-grid">
        <h2>We study how the work moves. Then we build the missing system around it.</h2>
        <div className="abt-what-intro">
          <p>Kortex works with contractor businesses whose field work, office routines, approvals and billing have outgrown spreadsheets, disconnected software or workarounds.</p>
          <p>The answer is not automatically custom software or AI. It may be a standard product, a simpler process, an automation, an integration or a system built around your operation.</p>
          <p>What matters is that the recommendation begins with the work&mdash;and ends with something your team can use.</p>
        </div>
      </div>
      <div className="abt-steps">
        {STEPS.map(([t, p]) => <article key={t}><h3>{t}</h3><p>{p}</p></article>)}
      </div>
    </section>

    {/* ---- The people responsible: the visual centerpiece ---- */}
    <section className="abt-people section-pad" id="people">
      <p className="eyebrow"><span /> WHO YOU WILL ACTUALLY WORK WITH</p>
      <div className="abt-people-head">
        <h2>The names beside the work should be visible before the engagement begins.</h2>
        <p>When you contact Kortex, you should be able to see who will study your operation, who will build the system and who will own delivery. Publish only the people who genuinely perform those roles.</p>
      </div>

      {/* Large founder / principal profile. Copy first in the DOM so names,
          roles and responsibility read before the portrait on mobile. */}
      <article className="abt-founder">
        <div className="abt-founder-copy">
          <h3>{ph("[FOUNDER OR PRINCIPAL NAME]")}</h3>
          <p className="abt-role">{ph("[REAL TITLE — FOR EXAMPLE: FOUNDER AND DELIVERY LEAD]")}</p>
          <p className="abt-bio">{ph("[NAME] leads [WORKFLOW DISCOVERY / BUSINESS SCOPING / DELIVERY — KEEP ONLY WHAT IS TRUE]. Before Kortex, [HE/SHE/THEY] [INSERT SPECIFIC RELEVANT EXPERIENCE THAT PROVES THE ABILITY TO UNDERSTAND A CONTRACTOR’S OPERATION]. During an engagement, [NAME] is personally accountable for [REAL DECISIONS AND CLIENT OUTCOMES].")}</p>
          <dl className="abt-detail">
            <div><dt>DIRECT RESPONSIBILITY</dt><dd>{ph("[WHAT THIS PERSON OWNS FROM FIRST CONVERSATION THROUGH ROLLOUT]")}</dd></div>
            <div><dt>RELEVANT EXPERIENCE</dt><dd>{ph("[YEARS, ROLES, CONTRACTOR WORKFLOWS, SYSTEMS OR BUSINESS OUTCOMES THAT CAN BE VERIFIED]")}</dd></div>
            <div><dt>DIRECT CONTACT</dt><dd>{ph("[DIRECT EMAIL OR PHONE, IF APPROVED]")}</dd></div>
          </dl>
        </div>
        {/* Portrait slot: current, high-resolution, recognizable, natural
            working environment or simple neutral background. No generated
            faces, stock people or heavy retouching. Alt text must carry the
            person's real name and role. */}
        <div className="abt-portrait"><span className="ph">[REAL, CURRENT PORTRAIT]</span></div>
      </article>

      <div className="abt-supporting">
        {SUPPORTING.map((p) => (
          <article key={p.name}>
            <div className="abt-portrait abt-portrait-sm"><span className="ph">[REAL, CURRENT PORTRAIT]</span></div>
            <h3>{ph(p.name)}</h3>
            <p className="abt-role">{ph(p.title)}</p>
            <p className="abt-bio">{ph(p.bio)}</p>
            <dl className="abt-detail">
              <div><dt>DIRECT RESPONSIBILITY</dt><dd>{ph(p.owns)}</dd></div>
              <div><dt>RELEVANT EXPERIENCE</dt><dd>{ph(p.exp)}</dd></div>
            </dl>
          </article>
        ))}
      </div>

      <p className="abt-note">{ph("[IF ONE PERSON HOLDS MORE THAN ONE ROLE, SHOW ONE HONEST PROFILE WITH MULTIPLE RESPONSIBILITIES. DO NOT CREATE A FICTIONAL TEAM TO MAKE THE FIRM LOOK LARGER.]")}</p>
    </section>

    {/* Founder-origin section intentionally not rendered. The doc's "Why
        Kortex exists" module stays hidden — collapsed completely, no
        placeholder space — until the founder supplies a real moment, the
        operational problem observed, the lesson that still shapes delivery
        and one short founder statement, all approved. */}

    {/* ---- Relevant experience: four evidence blocks ---- */}
    <section className="abt-exp section-pad">
      <p className="eyebrow"><span /> RELEVANT EXPERIENCE, NOT AI CREDENTIAL THEATER</p>
      <h2>Show why this team can understand the operation and own the outcome.</h2>
      <div className="abt-exp-grid">
        {EVIDENCE.map(([t, p]) => <article key={t}><h3>{t}</h3><p>{ph(p)}</p></article>)}
      </div>
      <p className="abt-evidence">{ph("[ADD ONLY VERIFIED YEARS, CERTIFICATIONS, CLIENT LOGOS, NAMED COMPANIES OR MEASURED RESULTS. IF THE EVIDENCE IS NOT YET AVAILABLE, DO NOT REPLACE IT WITH GENERIC CLAIMS.]")}</p>
      {/* Build-map action for this section: case-study link. The Hot & Cold
          build is the site's one real, published contractor case study; the
          link label is the doc's own. */}
      <a className="inline-link" href={v1("/case-studies/hot-and-cold")}>Read the full case study <Arrow /></a>
    </section>

    {/* ---- Four operating principles: statements only, no numbering ---- */}
    <section className="abt-principles section-pad">
      <p className="eyebrow"><span /> FOUR OPERATING PRINCIPLES</p>
      <h2>The method should reduce risk&mdash;not ask for blind trust.</h2>
      <div className="abt-principles-grid">
        {PRINCIPLES.map(([t, p]) => <article key={t}><h3>{t}</h3><p>{p}</p></article>)}
      </div>
    </section>

    {/* ---- Client involvement: paragraph + implementation link only.
         The five-row commitment table from the doc (owner hours, user hours,
         first working piece, data access, rollout and support) is withheld:
         no delivery range has been approved, and the doc forbids publishing
         [X] or invented numbers. Render the table only when every range is
         verified. ---- */}
    <section className="abt-involve section-pad">
      <p className="eyebrow"><span /> NO MYSTERY ABOUT CLIENT INVOLVEMENT</p>
      <div className="abt-involve-grid">
        <h2>You should know what the work asks of your company before it starts.</h2>
        <div>
          <p>Before an engagement is approved, Kortex should state who needs to participate, how much time each role is expected to contribute, what information or system access is required, what data may move and when the first working piece is expected.</p>
          <p className="abt-closing">No open-ended workshop schedule. No company-wide rollout before the workflow has been tested with the people who use it. {ph("[PUBLISH ONLY IF THESE ARE TRUE DELIVERY COMMITMENTS.]")}</p>
          {/* Implementation-detail destination is unconfirmed in the doc
              ("Confirm the implementation-detail destination URL") — routed
              to the what-it-costs page via v1(), currently the /v1/soon stub. */}
          <a className="abt-quiet-link" href={v1("/operations-system/what-it-costs")}>SEE WHAT IMPLEMENTATION REQUIRES <Arrow /></a>
        </div>
      </div>
    </section>

    {/* Proof section intentionally not rendered. The doc requires a named
        contractor engagement with all five elements approved — real company
        name and logo, the workflow before Kortex, Kortex's real
        responsibility, one measured result over a defined period, and the
        client's name, role, photograph and specific quote. No anonymous
        company, generated person or estimated result may stand in. */}

    {/* ---- Bethesda and service area: restrained address card, no map ---- */}
    <section className="abt-place section-pad">
      <p className="eyebrow"><span /> BASED IN BETHESDA, MARYLAND</p>
      <div className="abt-place-grid">
        <div>
          <h2>Available in person when seeing the work would help.</h2>
          <p>Kortex works across Washington, DC, suburban Maryland, Northern Virginia and the Baltimore corridor, with remote projects elsewhere.</p>
          <p>When geography allows, an in-person visit can make it easier to understand how work actually moves between the field, office and existing systems.</p>
        </div>
        {/* NAP matches the footer and Google Business Profile character for
            character. A simple service-area graphic may join this card later;
            no large decorative map. */}
        <div className="abt-card">
          <div><span>ADDRESS</span><address>6604 Millwood Rd<br />Bethesda, MD 20817</address></div>
          <div><span>PHONE</span><a href="tel:+13018898546">(301) 889-8546</a></div>
          <div><span>EMAIL</span><a href="mailto:hello@kortexconsulting.com">hello@kortexconsulting.com</a></div>
        </div>
      </div>
    </section>

    {/* ---- Final CTA + Workflow Review form ---- */}
    <section className="abt-final section-pad">
      <div className="grid-overlay" />
      <div className="abt-final-grid">
        <div className="abt-final-copy">
          <p className="eyebrow"><span /> START WITH ONE WORKFLOW</p>
          <h2>Meet the people who would be responsible for improving it.</h2>
          <p>Bring one process that keeps slowing the company down. Kortex will help determine whether the answer is a standard product, a process change, an automation or a system built around your operation.</p>
          <a className="direct-call" href="tel:+13018898546">OR CALL (301) 889-8546</a>
          <p className="abt-reassure">20 MINUTES <i>&middot;</i> ONE WORKFLOW <i>&middot;</i> PLAIN-ENGLISH NEXT STEP</p>
        </div>
        <div className="abt-form-wrap" id="workflow-form">
          <WorkflowReviewForm />
        </div>
      </div>
    </section>
  </>;
}
