import type { Metadata } from "next";
import { v1 } from "@/components/v1/paths";
import { Arrow, Check } from "@/components/v1/icons";
import { WorkflowReviewForm } from "./workflow-review-form";
import "./wdc.css";

// Source of truth: the senior-reviewed copy + design doc
// (kortex-ai-consultant-washington-dc-page-copy-and-design.md, Aug 2026).
// Standing rules from it, do not undo:
//  - This is the v1 rebuild of the legacy local-search URL. It is a local
//    doorway into the Operations System offer through the same Free 20-Minute
//    Workflow Review sold on /ai-consulting — not a separate peer service.
//  - Do not add "Washington DC AI Consultant" to the primary navigation.
//    It is linked from the footer only.
//  - The proof section is NOT rendered: there is no approved local contractor
//    evidence yet. Never label a remote client as local or use generated
//    people. Add it only when a real, approved DC-area story exists.
//  - The service-area block shows the exact NAP. It must match the Google
//    Business Profile character for character before launch.
//  - The doc also calls for a real founder / delivery-lead photograph and a
//    real observation photograph. Neither exists yet, so the why-local visual
//    uses the doc's typography-and-workflow fallback and no person is shown.
//  - The Free Workflow Review is the only dominant offer; every primary CTA
//    scrolls to the same form (#review-form). Secondary action is the phone.
//  - No monuments, flags, Capitol-dome stock, robots, glowing brains or
//    decorative maps that overwhelm the buying argument.
// Bracketed copy renders highlighted via ph() so reviewers can spot every
// claim that still needs sign-off before publishing.

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "AI Consultant in Washington DC for Contractors | Kortex",
  description:
    "Bethesda-based AI consulting for established contractors across Washington DC, Maryland and Northern Virginia. Start with a free 20-minute workflow review.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/ai-consultant-washington-dc` },
};

/* Bracketed values in the copy are unconfirmed. They render highlighted so a
   reviewer can spot every claim that still needs sign-off before publishing. */
const ph = (s: string) =>
  s.split(/(\[[^\]]*\])/).map((part, i) =>
    part.startsWith("[") ? <span className="ph" key={i}>{part}</span> : part
  );

const FAQS: [string, string][] = [
  ["Where is Kortex based?",
   "Kortex is based at 6604 Millwood Rd in Bethesda, Maryland. The practical in-person service area covers Washington, DC, suburban Maryland, Northern Virginia and the Baltimore corridor. Kortex also works remotely with businesses elsewhere."],
  ["Do you meet clients in person?",
   "Yes, when geography and the workflow make it useful. An in-person observation can reveal side conversations, manual checks and exceptions that are easy to miss on a video call. Most later work can still happen remotely."],
  ["Do I need to know what kind of AI we need?",
   "No. Bring the business problem. Kortex will help determine whether the answer is AI, automation, integration, a custom system or a simpler process change."],
  ["Do you work with contractors handling public or government projects?",
   "Yes, but any security, data-handling or compliance requirements must be identified before a solution is proposed. They can affect where information is stored, which systems may connect and what can sensibly be automated."],
  ["What should I bring to the Workflow Review?",
   "Bring one process that is slow, repetitive, inconsistent or too dependent on a few people. It helps to know who touches it, where it breaks and what the problem delays or costs."],
  ["What if the problem does not need AI?",
   "Kortex will recommend the simpler answer when it is better. Automating an unclear process usually makes the confusion move faster."],
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kortex Consulting",
    description:
      "Bethesda-based AI consulting for established contractors across Washington DC, Maryland and Northern Virginia.",
    url: `${SITE}/ai-consultant-washington-dc`,
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
    areaServed: [
      "Washington, DC",
      "Montgomery County, MD",
      "Frederick County, MD",
      "Northern Virginia",
      "Baltimore, MD",
    ],
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

/* Hero visual: simplified regional diagram — Bethesda base connected to the
   three regions — plus one small workflow observation card explaining why
   proximity matters. Explanatory HTML/CSS concept, not a map product. */
const heroRegions = ["Washington, DC", "Suburban Maryland", "Northern Virginia"];

/* Why-local: no authentic observation photograph exists yet, so this is the
   doc's typography-and-workflow fallback. The four amber annotations are the
   doc's; the four carriers come from the section's own copy. */
const observed: [string, string][] = [
  ["A text thread", "ENTERED AGAIN"],
  ["An undocumented approval", "WAITING FOR APPROVAL"],
  ["One experienced person", "ONLY ONE PERSON KNOWS"],
  ["A spreadsheet", "DELAYS PAYMENT"],
];

const bringUs = [
  "Field information the office has to reconstruct",
  "Approvals that depend on email or individual memory",
  "Payroll, compliance or project records checked manually",
  "Completed work waiting to become invoice-ready",
];

/* Start-with-one-workflow visual: one recognizable contractor sequence with
   two manual breaks highlighted in amber. */
const sequence: { t: string; brk?: string }[] = [
  { t: "Work completed" },
  { t: "Field record", brk: "Missing record" },
  { t: "Office review" },
  { t: "Approval", brk: "Approval in inbox" },
  { t: "Billing" },
];

/* Three possible answers, equal visual weight — AI is one option, not the
   predetermined answer. */
const answers = [
  "Simpler process",
  "Automation or connection",
  "AI where judgment or language is required",
];

const youBring = [
  "The workflow creating the problem",
  "Where it usually breaks",
  "What the breakdown affects",
];

const weIdentify = [
  "Where the handoff is actually failing",
  "Whether the answer is AI, automation, integration or a simpler process change",
  "The smallest useful first improvement",
  "Whether the likely value justifies going further",
];

/* Example cards: Today → First improvement → Result to test. Outcome-led;
   no feature lists, no fictional product screens. */
const examples: { t: string; today: string; first: string; result: string }[] = [
  {
    t: "Field to office",
    today: "Notes, photos, labor and approvals return through different channels. The office rebuilds the job record before billing.",
    first: "One guided closeout record that catches missing information before the job reaches the office.",
    result: "Fewer corrections and a shorter path to invoice-ready.",
  },
  {
    t: "Approval and compliance",
    today: "A decision or required record waits in email because the owner, evidence or next action is unclear.",
    first: "One visible review path showing what is missing, who owns it and what must happen next.",
    result: "Faster decisions and fewer last-minute document chases.",
  },
  {
    t: "Incoming calls",
    today: "New calls reach voicemail after hours or while the office is already busy.",
    first: "Coverage that answers, qualifies and completes the approved next step.",
    result: "More qualified calls handled before the caller moves on.",
  },
];

const regions = [
  "Washington, DC",
  "Montgomery and Frederick counties",
  "Northern Virginia",
  "The Baltimore corridor",
];

export default function AiConsultantWashingtonDcPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

    {/* ---- 1 Hero: local distinction, 7/5 split ---- */}
    <section className="wdc-hero">
      <div className="grid-overlay" />
      <div className="wdc-hero-grid">
        <div>
          <p className="eyebrow"><span /> AI CONSULTING FOR WASHINGTON DC-AREA CONTRACTORS</p>
          <h1>A local AI consultant who starts with the work&mdash;<em>not the technology.</em></h1>
          <p className="wdc-lede">Based in Bethesda, Kortex helps established contractors across DC, Maryland and Northern Virginia find one workflow where AI&mdash;or a simpler system&mdash;can remove real office work.</p>
          <div className="actions">
            <a className="button" href="#review-form">Book my free workflow review <Arrow /></a>
            <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
          </div>
          <p className="wdc-cta-note">A focused 20-minute conversation about one slow, repetitive or unreliable process. Meet online, in Bethesda or at your office when geography allows.</p>
        </div>
        <div className="wdc-hero-visual" aria-hidden="true">
          {/* Bethesda base connected to the three regions. */}
          <div className="wdc-region-map">
            <div className="wdc-region-base">KORTEX &middot; BETHESDA</div>
            <span className="wdc-region-stem" />
            <ul>{heroRegions.map((r) => <li key={r}>{r}</li>)}</ul>
          </div>
          {/* One small workflow observation card: why proximity matters. */}
          <div className="wdc-observe-card">
            <span>WORKFLOW OBSERVATION</span>
            <p><i />Approval still handled by email</p>
            <p><i />Owner unclear</p>
            <p><i />Billing waits</p>
          </div>
        </div>
      </div>
      <div className="wdc-trust"><span>BETHESDA BASED</span><i>&middot;</i><span>LOCAL OR REMOTE</span><i>&middot;</i><span>AI ONLY WHEN IT FITS</span></div>
    </section>

    {/* ---- 2 Why local can matter (light, 5/7 split) ---- */}
    <section className="wdc-local section-pad">
      <p className="section-index">CLOSE ENOUGH TO WATCH THE WORK</p>
      <div className="wdc-local-grid">
        <div className="wdc-local-copy">
          <h2>The fastest way to understand a workflow is often to see it happen.</h2>
          <p>A process can sound simple on a call. In practice, it may include a text thread, a spreadsheet, an undocumented approval and one experienced person who knows what to do when something is missing.</p>
          <p>When the first review needs more than a video call, Kortex can sit with the people doing the work and follow the handoff. The goal is not an on-site meeting. It is a clearer process with less work being carried manually between people.</p>
        </div>
        {/* Typography-and-workflow fallback — no authentic observation
            photograph exists yet, and no fake employee or client is shown. */}
        <div className="wdc-local-visual" aria-hidden="true">
          <span className="wdc-visual-tag">WHAT THE CALL DID NOT MENTION</span>
          <ul>{observed.map(([carrier, note]) => (
            <li key={carrier}><p>{carrier}</p><span>{note}</span></li>
          ))}</ul>
        </div>
      </div>
    </section>

    {/* ---- 3 Start with one workflow (dark, 6/6 split) ---- */}
    <section className="wdc-start section-pad">
      <p className="section-index amber">YOU MAY NOT HAVE AN AI PROBLEM</p>
      <div className="wdc-start-grid">
        <div className="wdc-start-copy">
          <h2>You may have one part of the business wasting time every day.</h2>
          <p>Maybe the office enters the same information twice. An approval waits in someone&rsquo;s inbox. Field records arrive incomplete. Public-work paperwork needs another manual check. A completed job cannot move to billing.</p>
          <p>It may need AI. It may need automation, a connection between systems or a clearer process.</p>
          <p>Kortex starts with the business problem&mdash;not a technology shopping list.</p>
          <strong className="wdc-bring-label">COMMON WORKFLOWS TO BRING US</strong>
          <ul className="wdc-bring">{bringUs.map((b, i) => <li key={b}><span>0{i + 1}</span>{b}</li>)}</ul>
          <p className="wdc-closing-line">Bring the process that creates the most chasing, correction or delay.</p>
        </div>
        {/* One recognizable contractor sequence with two manual breaks in
            amber, then three possible answers at equal visual weight. */}
        <div className="wdc-start-visual" aria-hidden="true">
          <ol className="wdc-sequence">{sequence.map((s) => (
            <li key={s.t} className={s.brk ? "has-break" : undefined}>
              <p>{s.t}</p>
              {s.brk && <span><i />{s.brk}</span>}
            </li>
          ))}</ol>
          <div className="wdc-answers">
            <span>THREE POSSIBLE ANSWERS</span>
            <ul>{answers.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>

    {/* ---- 4 Free Workflow Review: high-contrast centerpiece ---- */}
    <section className="wdc-review section-pad">
      <div className="wdc-review-panel">
        <p className="section-index">ONE WORKFLOW. TWENTY MINUTES. AN HONEST NEXT STEP.</p>
        <h2>Find out whether the problem is worth solving.</h2>
        <p className="wdc-review-lede">This is not a broad AI assessment. We focus on one real process inside the company.</p>
        <div className="wdc-review-cols">
          <div>
            <h3>You bring</h3>
            <ul>{youBring.map((b) => <li key={b}><Arrow />{b}</li>)}</ul>
          </div>
          <div>
            <h3>We help identify</h3>
            <ul>{weIdentify.map((w) => <li key={w}><Check />{w}</li>)}</ul>
          </div>
        </div>
        <p className="wdc-honest">If there is no meaningful opportunity&mdash;or AI is not the right answer&mdash;we will say so.</p>
        <div className="actions"><a className="button" href="#review-form">Book my free workflow review <Arrow /></a></div>
        <p className="wdc-reassure">20 MINUTES <i>&middot;</i> DIRECT WITH KORTEX <i>&middot;</i> NO OBLIGATION</p>
        <p className="wdc-verify">{ph("[CONFIRM THAT THE REVIEW IS FREE, WHO LEADS IT AND WHETHER THE VISITOR RECEIVES A WRITTEN SUMMARY.]")}</p>
      </div>
    </section>

    {/* ---- 5 Three contractor examples ---- */}
    <section className="wdc-examples section-pad">
      <p className="section-index">FAMILIAR CONTRACTOR WORKFLOWS</p>
      <h2>Start where one better handoff can produce a visible result.</h2>
      <div className="wdc-example-grid">{examples.map((x, i) => (
        <article key={x.t}>
          <span className="wdc-example-index">0{i + 1}</span>
          <h3>{x.t}</h3>
          <div><strong>TODAY</strong><p>{x.today}</p></div>
          <div><strong>FIRST IMPROVEMENT</strong><p>{x.first}</p></div>
          <div className="wdc-example-result"><strong>RESULT TO TEST</strong><p>{x.result}</p></div>
        </article>
      ))}</div>
      <p className="wdc-qualify">These are examples, not packages. The right first step depends on where the operation is losing the most value.</p>
    </section>

    {/* ---- 6 Service area and local credibility (dark, 5/7 split) ---- */}
    <section className="wdc-area section-pad">
      <p className="eyebrow"><span /> WASHINGTON DC METRO SERVICE AREA</p>
      <div className="wdc-area-grid">
        <div className="wdc-area-copy">
          <h2>Meet in person when seeing the operation will improve the answer.</h2>
          <p>Kortex is based at 6604 Millwood Rd, Bethesda, MD 20817 and works across:</p>
          <ul className="wdc-regions">{regions.map((r) => <li key={r}><Check />{r}</li>)}</ul>
          <p>Most build work can happen remotely. When geography allows, the early workflow review can happen with the people doing the work, inside the environment where the handoff actually breaks.</p>
          {/* NAP — must match the Google Business Profile character for
              character before launch. */}
          <div className="wdc-nap">
            <div><span>OFFICE</span><address>6604 Millwood Rd, Bethesda, MD 20817</address></div>
            <div><span>CALL</span><a href="tel:+13018898546">(301) 889-8546</a></div>
            <div><span>EMAIL</span><a href="mailto:hello@kortexconsulting.com">hello@kortexconsulting.com</a></div>
          </div>
          <a className="inline-link" href={v1("/operations-system")}>See how Kortex builds Operations Systems <Arrow /></a>
        </div>
        {/* Restrained regional diagram centered on Bethesda — informational,
            no interaction required, no moving pins. */}
        <div className="wdc-area-visual" aria-hidden="true">
          <div className="wdc-area-map">
            <span className="wdc-area-label wdc-nw">Suburban Maryland</span>
            <span className="wdc-area-label wdc-ne">Baltimore corridor</span>
            <div className="wdc-area-base"><i />KORTEX &middot; BETHESDA</div>
            <span className="wdc-area-label wdc-sw">Northern Virginia</span>
            <span className="wdc-area-label wdc-se">Washington, DC</span>
          </div>
          <p className="wdc-area-note">IN PERSON WHEN USEFUL &middot; REMOTE ELSEWHERE</p>
        </div>
      </div>
    </section>

    {/* Proof section intentionally not rendered: no real, approved local
        contractor evidence exists yet. Never label a remote client as local
        or use generated people. See the doc's proof template. */}

    {/* ---- 7 FAQ ---- */}
    <section className="wdc-faq faq section-pad">
      <p className="section-index">FREQUENTLY ASKED QUESTIONS</p>
      <h2>Straight answers before the review.</h2>
      <div className="faq-grid">
        {FAQS.map(([q, a], i) => (
          <details key={q} open={i === 0}>
            <summary><span>0{i + 1}</span>{q}<i /></summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>

    {/* ---- 7b Final CTA + form ---- */}
    <section className="wdc-final section-pad">
      <div className="grid-overlay" />
      <div className="wdc-final-head">
        <p className="eyebrow"><span /> START WITH THE WORKFLOW, NOT THE TECHNOLOGY</p>
        <h2>Show us what is slow.</h2>
      </div>
      <div className="wdc-final-grid">
        <div className="wdc-final-promise">
          <p>Twenty minutes. One real process. Kortex will help identify where the work is breaking, whether AI belongs and what the smallest useful next step could be.</p>
          <a className="direct-call" href="tel:+13018898546">OR CALL (301) 889-8546</a>
        </div>
        <div className="wdc-form-wrap" id="review-form">
          <WorkflowReviewForm />
        </div>
      </div>
    </section>
  </>;
}
