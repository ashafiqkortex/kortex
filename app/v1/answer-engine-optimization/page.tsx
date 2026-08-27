import type { Metadata } from "next";
import { v1 } from "@/components/v1/paths";
import { Arrow, Check } from "@/components/v1/icons";
import "./aeo.css";

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "Does Your Company Show Up in AI Search? | Kortex",
  description:
    "See whether ChatGPT and Google AI recommend your company when customers search for contractors. Get a free AI Visibility Check from Kortex.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/answer-engine-optimization` },
};

// Plain-text FAQ copy for JSON-LD; the rendered rows below mark the [3-5]
// placeholder visibly, which structured data can't.
const FAQS = [
  ["Can you guarantee that ChatGPT will recommend my company?",
    "No. ChatGPT, Google and other AI tools control their own answers, and those answers can change. The visibility check shows what they say today and identifies the clearest gaps in the information they can find."],
  ["Is the visibility check really free?",
    "Yes. The initial check covers 3-5 agreed customer questions and gives you a short summary. If a deeper opportunity exists, you can decide whether to purchase the full audit. There is no obligation."],
  ["Do I need to understand AI?",
    "No. You only need to tell us what your company does, where it works and which customers matter. We handle the technical part and explain the result in plain English."],
  ["Do we need to rebuild our website?",
    "Not necessarily. The check may reveal a small information gap, or it may show that a deeper review is justified. We do not recommend a rebuild before understanding the problem."],
  ["How long does it take?",
    "You will receive the check within [3-5] business days."],
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Search Visibility",
    serviceType: "Answer Engine Optimization",
    description:
      "See whether ChatGPT and Google AI recommend your company when customers search for contractors. Free AI Visibility Check from Kortex.",
    url: `${SITE}/answer-engine-optimization`,
    provider: {
      "@type": "ProfessionalService",
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

const QUESTIONS = [
  "Who is a reliable commercial HVAC contractor near me?",
  "Which electrical contractor in Maryland handles public projects?",
  "Who should I call for a hospital mechanical retrofit?",
];

const AI_MAY = [
  "Leave your company out",
  "Recommend a competitor instead",
  "Describe your services incorrectly",
  "Miss the locations or industries you serve",
  "Overlook experience and credentials your business has earned over decades",
];

const YOU_WILL_SEE = [
  "Whether your company appears for 3-5 agreed customer questions",
  "Which competitors are being recommended",
  "How AI describes your services, locations and experience",
  "Any obvious inaccurate or missing information",
  "The first issue we would recommend fixing",
];

const NEXT_STEPS = [
  ["Free check", "See whether a problem exists"],
  ["Findings call", "Understand what the result means"],
  ["Full audit", "Receive the complete diagnosis and 90-day plan"],
];

const Ph = ({ children }: { children: React.ReactNode }) => <span className="ph">{children}</span>;

export default function V1AeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero — dark, 7/5 split, sample AI-answer mock */}
      <section className="aeo-hero">
        <div className="grid-overlay" />
        <div className="aeo-hero-copy">
          <p className="eyebrow"><span /> GET FOUND IN AI SEARCH</p>
          <h1>When customers ask AI who to hire, <em>does your company show up?</em></h1>
          <p className="aeo-lede">
            More customers are using ChatGPT and Google&rsquo;s AI results to compare contractors
            before they call. See whether your company appears, which competitors are being
            recommended and whether the information about your business is accurate.
          </p>
          <div className="actions">
            <a className="button" href="#aeo-form">Get my free visibility check <Arrow /></a>
          </div>
          <p className="aeo-support">
            We test real customer questions and send you the results in plain English. No technical
            knowledge required.
          </p>
          <p className="aeo-trust">FREE CHECK &middot; NO OBLIGATION &middot; RESULTS IN <Ph>[3-5]</Ph> BUSINESS DAYS</p>
        </div>

        <aside className="aeo-answer" aria-label="Sample AI search answer">
          <div className="aeo-answer-top"><span>SAMPLE SEARCH</span><i /><i /><i /></div>
          <p className="aeo-answer-label">CUSTOMER ASKS</p>
          <p className="aeo-answer-q">&ldquo;Who is a reliable commercial HVAC contractor in Maryland?&rdquo;</p>
          <p className="aeo-answer-label">AI RECOMMENDS</p>
          <ol className="aeo-answer-list">
            <li><span>1</span>Competitor A</li>
            <li><span>2</span>Competitor B</li>
            <li><span>3</span>Competitor C</li>
          </ol>
          <div className="aeo-answer-absent">
            <span>YOUR COMPANY</span>
            <p>Not included in this answer</p>
          </div>
          <p className="aeo-answer-note">This is what the free check reveals.</p>
        </aside>
      </section>

      {/* Search is changing — light band, three typed-question cards */}
      <section className="aeo-search section-pad">
        <div className="aeo-search-head">
          <p className="section-index">CUSTOMERS ARE NOT ONLY SEARCHING GOOGLE ANYMORE</p>
          <h2>They are asking <em>AI for the answer.</em></h2>
          <p className="aeo-body">A customer can now ask:</p>
        </div>
        <div className="aeo-questions">
          {QUESTIONS.map((q) => (
            <blockquote key={q}><p>{q}</p></blockquote>
          ))}
        </div>
        <div className="aeo-search-after">
          <p className="aeo-body">ChatGPT or Google&rsquo;s AI may respond with only a few companies.</p>
          <p className="aeo-body">
            If your company is not included, that customer may never reach your website or know that
            you were an option.
          </p>
          <p className="aeo-pull">
            The question is no longer only, &ldquo;Where do we rank?&rdquo; It is also,
            &ldquo;Are we part of the answer?&rdquo;
          </p>
        </div>
      </section>

      {/* The problem — dark, copy + comparison card */}
      <section className="aeo-problem section-pad">
        <div className="aeo-problem-copy">
          <p className="section-index amber">YOUR REPUTATION MAY BE STRONG. AI MAY NOT KNOW IT YET.</p>
          <h2>A less experienced competitor can appear simply because it is <em>easier for AI to understand.</em></h2>
          <p className="aeo-body">AI learns about your company from the information it can find and verify online.</p>
          <p className="aeo-body">
            If your services, locations, project experience and company details are unclear or
            inconsistent, AI may:
          </p>
          <ul className="aeo-list">
            {AI_MAY.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="aeo-body">
            The problem is not always your reputation. It may be how clearly that reputation is
            represented online.
          </p>
        </div>

        <aside className="aeo-compare" aria-label="Example comparison">
          <span className="aeo-compare-tag">ILLUSTRATIVE EXAMPLE</span>
          <div className="aeo-compare-cols">
            <div>
              <strong>What is true about your company</strong>
              <ul>
                <li>25 years in business</li>
                <li>Experienced commercial team</li>
                <li>Public-project capability</li>
                <li>Strong local reputation</li>
              </ul>
            </div>
            <div className="aeo-compare-weak">
              <strong>What AI can verify online</strong>
              <ul>
                <li>Service pages unclear</li>
                <li>Project evidence limited</li>
                <li>Locations inconsistent</li>
                <li>Credentials difficult to find</li>
              </ul>
            </div>
          </div>
          <p className="aeo-compare-line">AI can only work with what it can find and verify.</p>
        </aside>
      </section>

      {/* Free visibility check — warm-cream centerpiece */}
      <section className="aeo-check section-pad">
        <div className="aeo-check-panel">
          <div className="aeo-check-head">
            <p className="section-index">SEE WHAT AI SAYS ABOUT YOUR COMPANY TODAY</p>
            <h2>We will check whether your business is <em>part of the answer.</em></h2>
            <p className="aeo-body">
              Kortex tests a small set of important questions a real customer may ask before hiring
              a contractor like you.
            </p>
          </div>

          <div className="aeo-check-grid">
            <div className="aeo-check-main">
              <p className="aeo-check-label">You will see:</p>
              <ul className="aeo-checklist">
                {YOU_WILL_SEE.map((item) => <li key={item}><Check />{item}</li>)}
              </ul>
              <p className="aeo-body">
                You receive the questions, screenshots and a short explanation in plain English.
              </p>
              <p className="aeo-body">
                This is a focused visibility check&mdash;not a large technical report and not a
                promise that Kortex can control what AI says.
              </p>
              <div className="actions">
                <a className="button" href="#aeo-form">Check if my company shows up <Arrow /></a>
              </div>
              <p className="aeo-support">
                Tell us what work and locations matter most. We will handle the technical part.
              </p>
              <p className="aeo-chips"><span>FREE</span><span>NO OBLIGATION</span><span>PLAIN-ENGLISH RESULTS</span></p>
            </div>

            <figure className="aeo-report" aria-label="One-page visibility check template">
              <figcaption>ONE-PAGE RESULT &middot; TEMPLATE</figcaption>
              <div className="aeo-report-row"><span>Question tested</span><i /></div>
              <div className="aeo-report-row"><span>Companies recommended</span><i /></div>
              <div className="aeo-report-row"><span>Is your company included?</span><b>YES / NO</b></div>
              <div className="aeo-report-row"><span>Is the description accurate?</span><b>YES / NO</b></div>
              <div className="aeo-report-row"><span>First visible gap</span><i /></div>
            </figure>
          </div>
        </div>
      </section>

      {/* Example result — dark, one large labeled sample */}
      <section className="aeo-example section-pad">
        <div className="split-heading">
          <div>
            <p className="section-index amber">WHAT YOUR CHECK MAY REVEAL</p>
            <h2>The opportunity becomes clearer when you see the actual answers.</h2>
          </div>
        </div>

        <div className="aeo-sample" aria-label="Sample visibility check">
          <span className="aeo-sample-tag">SAMPLE VISIBILITY CHECK</span>
          <div className="aeo-sample-cols">
            <div>
              <span className="aeo-sample-k">BEFORE</span>
              <dl>
                <dt>Customer question</dt>
                <dd>&ldquo;<Ph>[EXAMPLE HIGH-VALUE SEARCH RELEVANT TO THE CLIENT]</Ph>&rdquo;</dd>
                <dt>What AI currently shows</dt>
                <dd>
                  <Ph>[COMPETITOR A]</Ph>, <Ph>[COMPETITOR B]</Ph> and <Ph>[COMPETITOR C]</Ph> are
                  recommended. Your company does not appear, or the description is incomplete.
                </dd>
              </dl>
            </div>
            <div>
              <span className="aeo-sample-k">OPPORTUNITY</span>
              <dl>
                <dt>The visible gap</dt>
                <dd>AI cannot clearly confirm <Ph>[SERVICE / LOCATION / PROJECT EXPERIENCE / CREDENTIAL]</Ph>.</dd>
                <dt>The first opportunity</dt>
                <dd>Make that capability clear and support it with real company and project evidence.</dd>
              </dl>
            </div>
          </div>
        </div>
        <p className="aeo-editor-note">
          <Ph>[REPLACE THIS WITH A REAL OR CLEARLY LABELED SAMPLE RESULT. NEVER PRESENT A FICTIONAL RESULT AS CLIENT PROOF.]</Ph>
        </p>
      </section>

      {/* Optional next step — compact band */}
      <section className="aeo-next section-pad">
        <div className="aeo-next-copy">
          <p className="section-index amber">THE NEXT STEP IS YOUR DECISION</p>
          <h2>If there is no meaningful gap, <em>we will tell you.</em></h2>
          <p className="aeo-body">
            If the check reveals a genuine opportunity, Kortex can complete a paid AI Search
            Visibility Audit.
          </p>
          <p className="aeo-body">
            The full audit looks across more customer questions, competitors, services, locations
            and proof&mdash;then gives you a prioritized 90-day plan.
          </p>
          <p className="aeo-body">
            There is no obligation to continue. You can use the free check to understand where your
            company stands and decide whether the problem is worth solving.
          </p>
        </div>
        <div className="aeo-next-side">
          <ol className="aeo-steps">
            {NEXT_STEPS.map(([t, d], i) => (
              <li key={t}><span>{i + 1}</span><div><strong>{t}</strong><p>{d}</p></div></li>
            ))}
          </ol>
          <a className="inline-link" href={v1("#aeo-faq")}>SEE WHAT THE FULL AUDIT INCLUDES <Arrow /></a>
          <p className="aeo-editor-note">
            <Ph>[LINK TO A SHORT MODAL, FAQ OR SALES-CONVERSATION BOOKING STEP. DO NOT PUT THE FULL DELIVERY PROCESS ON THIS PAGE.]</Ph>
          </p>
        </div>
      </section>

      {/* Proof section intentionally omitted until real client evidence exists. */}

      {/* FAQ — paper band. Home conventions (27 Aug): centered heading with
          amber divider, numbered rows, closed by default, one open at a time
          via the native exclusive accordion. */}
      <section className="faq aeo-faq section-pad" id="aeo-faq">
        <div className="faq-heading"><h2>Asked before the check.</h2><i /></div>
        <div className="faq-grid aeo-faq-grid">
          <details name="aeo-faq">
            <summary><span>01</span>Can you guarantee that ChatGPT will recommend my company?<i /></summary>
            <p>
              No. ChatGPT, Google and other AI tools control their own answers, and those answers
              can change. The visibility check shows what they say today and identifies the clearest
              gaps in the information they can find.
            </p>
          </details>
          <details name="aeo-faq">
            <summary><span>02</span>Is the visibility check really free?<i /></summary>
            <p>
              Yes. The initial check covers 3-5 agreed customer questions and gives you a short
              summary. If a deeper opportunity exists, you can decide whether to purchase the full
              audit. There is no obligation.
            </p>
          </details>
          <details name="aeo-faq">
            <summary><span>03</span>Do I need to understand AI?<i /></summary>
            <p>
              No. You only need to tell us what your company does, where it works and which
              customers matter. We handle the technical part and explain the result in plain
              English.
            </p>
          </details>
          <details name="aeo-faq">
            <summary><span>04</span>Do we need to rebuild our website?<i /></summary>
            <p>
              Not necessarily. The check may reveal a small information gap, or it may show that a
              deeper review is justified. We do not recommend a rebuild before understanding the
              problem.
            </p>
          </details>
          <details name="aeo-faq">
            <summary><span>05</span>How long does it take?<i /></summary>
            <p>You will receive the check within <Ph>[3-5]</Ph> business days.</p>
          </details>
        </div>
      </section>

      {/* Final CTA — amber slab close (27 Aug convention): the page's only
          full-accent surface, ink type, form as a dark card on the slab. */}
      <section className="aeo-close section-pad" id="aeo-form">
        <div className="aeo-close-copy">
          <p className="eyebrow"><span /> START WITH ONE SIMPLE QUESTION</p>
          <h2>When customers ask AI who to hire, are you part of the answer?</h2>
          <p className="aeo-body">
            We will check how your company appears, which competitors are being recommended and what
            may be keeping your business out of the conversation.
          </p>
          <a className="aeo-close-phone" href="tel:+13018898546">CALL (301) 889-8546</a>
          <p className="aeo-trust">FREE CHECK &middot; NO OBLIGATION &middot; RESULTS IN <Ph>[3-5]</Ph> BUSINESS DAYS</p>
        </div>

        <form className="aeo-form">
          <p className="aeo-form-head">What should customers find you for?</p>
          <div className="aeo-form-row">
            <label>Company name<input name="company" autoComplete="organization" /></label>
            <label>Website<input name="website" type="url" autoComplete="url" /></label>
          </div>
          <label>What type of work do you most want to be found for?<input name="work" /></label>
          <label>Which locations or markets matter most?<input name="locations" /></label>
          <label>Who are two competitors customers compare you with? <em>(optional)</em><input name="competitors" /></label>
          <div className="aeo-form-row">
            <label>Name<input name="name" autoComplete="name" /></label>
            <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
          </div>
          <label>Email<input name="email" type="email" autoComplete="email" /></label>
          <button className="button" type="submit">Get my free visibility check <Arrow /></button>
          <p className="aeo-form-note">
            <span>AFTER YOU SUBMIT</span>
            Thank you. We will test a small set of relevant customer questions and send your AI
            Visibility Check within <Ph>[3-5]</Ph> business days.
          </p>
        </form>
      </section>
    </>
  );
}
