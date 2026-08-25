import Link from "next/link";
import type { Metadata } from "next";
import { Arrow, Check } from "@/components/v1/icons";
import "./receptionist.css";

const SITE = "https://kortexconsulting.com";

export const metadata: Metadata = {
  title: "AI Receptionist for Contractors | Answer and Book Calls 24/7",
  description:
    "Stop sending ready-to-book customers to voicemail. Kortex's AI receptionist answers calls, qualifies the customer and books jobs into your calendar.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/ai-receptionist` },
};

/* Bracketed values in the copy are unconfirmed. They render highlighted so a
   reviewer can spot every claim that still needs sign-off before publishing. */
const ph = (s: string) =>
  s.split(/(\[[^\]]*\])/).map((part, i) =>
    part.startsWith("[") ? <span className="ph" key={i}>{part}</span> : part
  );

const MOMENTS = [
  "Calls that arrive while the office is already on the phone",
  "Evening and weekend enquiries",
  "Storms, emergencies and sudden call-volume spikes",
  "Lunch breaks, meetings and short-staffed days",
  "Callers who hang up instead of leaving a message",
  "Leads that receive a callback after they have already booked someone else",
];

const TRANSCRIPT: [string, string][] = [
  ["Receptionist", "Thank you for calling [COMPANY]. How can I help you today?"],
  ["Caller", "Our rooftop unit stopped working and the building is getting hot."],
  ["Receptionist", "I can help with that. Is the unit serving the entire building, and is there any smoke, burning smell or electrical hazard?"],
  ["Caller", "No hazard. It is just not cooling."],
  ["Receptionist", "Thank you. I have an opening today between 2:00 and 4:00. Would you like me to reserve it?"],
  ["Caller", "Yes."],
  ["Receptionist", "You are booked. I will text the appointment details to this number now."],
];

const CAPS: { d: string[]; t: string; p: string }[] = [
  {
    d: ["M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"],
    t: "Answers in your company's name",
    p: "The caller hears the greeting, tone and basic information approved by your business.",
  },
  {
    d: ["M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z", "M9.1 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", "M12 17h.01"],
    t: "Finds out what the customer needs",
    p: "It asks the same practical questions your office would ask about the service, location, urgency and customer status.",
  },
  {
    d: ["M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", "M16 2v4", "M8 2v4", "M3 10h18"],
    t: "Books the right appointment",
    p: "When the call fits your rules, it checks available times and places the appointment into your existing scheduling process.",
  },
  {
    d: ["M8 3 4 7l4 4", "M4 7h16", "m16 21 4-4-4-4", "M20 17H4"],
    t: "Transfers urgent or sensitive calls",
    p: "Emergencies, complaints and anything outside the approved process can move to the right person with the call context already collected.",
  },
  {
    d: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"],
    t: "Confirms the next step by text",
    p: "The customer can receive the appointment or follow-up details immediately, so they know what happens next.",
  },
];

const COVERAGE = [
  ["After-hours coverage", "Let the receptionist answer evenings, weekends and holidays while your office keeps its normal daytime process."],
  ["Overflow coverage", "Your team answers first. The AI receptionist picks up only when everyone is busy or the call is not answered within the agreed time."],
  ["Full-time front line", "The receptionist answers every new call, gathers the right information and passes only the calls that need a person."],
];

const LEAVE = [
  "An estimate of how many new opportunities may be going unanswered",
  "The approximate revenue connected to those calls",
  "The call types an AI receptionist could handle safely",
  "The calls that should always reach a human",
  "A recommendation to start with after-hours, overflow or full coverage",
  "A clear view of whether the service is likely to pay for itself",
];

const FAQS = [
  {
    q: "Will callers know they are speaking with AI?",
    a: "The receptionist should not pretend to be a person. It can identify itself as a virtual receptionist while speaking naturally and helping the caller complete the next step. What matters most is that the caller receives an immediate, useful answer.",
  },
  {
    q: "What happens when it cannot answer a question?",
    a: "You decide the boundaries. Calls outside the approved process can be transferred to a person or captured with the information your team needs to respond.",
  },
  {
    q: "Do I need to change my phone number?",
    a: "[CONFIRM FINAL TELEPHONY SETUP.] In the intended setup, the receptionist works with the number customers already call rather than forcing the company to advertise a new number.",
  },
  {
    q: "Will it work with our calendar or scheduling software?",
    a: "Kortex reviews the scheduling process before recommending the setup. Where a dependable connection is available, the receptionist can book against real availability. Otherwise, Kortex will explain the safest handoff.",
  },
  {
    q: "Can we listen to the calls?",
    a: "[CONFIRM RECORDING, TRANSCRIPT, CONSENT AND RETENTION POLICY.] The intended service provides call records for review so the company can see what happened and improve the instructions.",
  },
  {
    q: "How quickly can we start?",
    a: "[INSERT VERIFIED TIMELINE. THE CURRENT PAGE SAYS A COUPLE OF WEEKS; PUBLISH ONLY IF KORTEX CAN CONSISTENTLY HONOR IT.]",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on call volume and what the receptionist needs to do. The free Missed-Call Review helps determine whether the likely recovered opportunity justifies the cost before Kortex recommends a setup.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Receptionist for Contractors",
    serviceType: "AI call answering and appointment booking",
    description:
      "Stop sending ready-to-book customers to voicemail. Kortex's AI receptionist answers calls, qualifies the customer and books jobs into your calendar.",
    url: `${SITE}/ai-receptionist`,
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
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function V1AiReceptionistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 01 — hero */}
      <section className="rcp-hero rcp-dark">
        <div className="grid-overlay" />
        <div className="rcp-hero-grid">
          <div>
            <p className="eyebrow"><span /> 24/7 CALL ANSWERING FOR CONTRACTORS</p>
            <h1>When your team cannot pick up, your next customer still needs an answer.</h1>
            <p className="rcp-lede">
              The Kortex AI receptionist answers the call, finds out what the customer needs and
              books the right job into your calendar&mdash;even after hours or while your team is
              already busy.
            </p>
            <div className="actions">
              <a className="button" href="#review-form">Get my free missed-call review <Arrow /></a>
              <a className="inline-link" href="#hear-a-call">Hear it handle a real call <Arrow /></a>
            </div>
            <p className="rcp-support">
              We will help you estimate how many opportunities are being lost and show you which
              calls an AI receptionist could safely handle.
            </p>
            <ul className="rcp-trust">
              <li><Check /> KEEP YOUR NUMBER</li>
              <li><Check /> USE YOUR EXISTING CALENDAR</li>
              <li><Check /> TRANSFER URGENT CALLS TO A HUMAN</li>
            </ul>
          </div>
          <aside className="rcp-callcard" aria-label="Sample call progress">
            <div className="rcp-callcard-top"><span>SAMPLE CALL</span><i /><i /><i /></div>
            <ol className="rcp-flow">
              <li><span>INCOMING CALL</span><p>Commercial HVAC enquiry &middot; 8:42 PM</p></li>
              <li><span>ANSWERED</span><p>{ph("First response in [VERIFIED TIME OR OMIT]")}</p></li>
              <li><span>QUALIFIED</span><p>No safety hazard &middot; Existing rooftop unit &middot; Service area confirmed</p></li>
              <li><span>BOOKED</span><p>Tomorrow &middot; 8:00-10:00 AM</p></li>
              <li><span>CONFIRMED</span><p>Appointment details sent by text</p></li>
            </ol>
          </aside>
        </div>
      </section>

      {/* 02 — the problem */}
      <section className="rcp-problem section-pad">
        <div className="rcp-problem-grid">
          <div>
            <p className="section-index">A MISSED CALL IS RARELY A CUSTOMER WHO WAITS</p>
            <h2>If you do not answer, the next contractor may.</h2>
            <div className="rcp-problem-copy">
              <p>The office is helping another customer. Your technician is on a job. The call comes after hours. Or three people call at once.</p>
              <p>The caller does not know why nobody answered. They only know they need help now.</p>
              <p>Voicemail asks them to wait. Most new customers keep calling until someone picks up.</p>
            </div>
            <p className="rcp-moments-label">COMMON MOMENTS WHEN WORK GETS LOST</p>
            <ul className="rcp-moments">
              {MOMENTS.map((m) => <li key={m}>{m}</li>)}
            </ul>
            <p className="rcp-closing">
              You may already be paying to generate the lead. The loss happens in the few seconds
              between the ring and the answer.
            </p>
          </div>
          <figure className="rcp-scene">
            <div className="rcp-photo-slot">
              <span>PHOTO SLOT</span>
              <p>{ph("[ONE AUTHENTIC CONTRACTOR OFFICE OR JOBSITE PHOTOGRAPH — DISPATCHER ON ANOTHER CALL, TECHNICIAN WITH HANDS OCCUPIED, OR EMPTY OFFICE AFTER HOURS]")}</p>
            </div>
            <div className="rcp-missed-card" aria-label="Missed call example">
              <span>New customer &middot; 7:18 PM</span>
              <strong>No answer</strong>
              <span>Call ended after 21 seconds</span>
            </div>
          </figure>
        </div>
      </section>

      {/* 03 — hear a call */}
      <section id="hear-a-call" className="rcp-hear rcp-dark section-pad">
        <p className="eyebrow"><span /> NOT VOICEMAIL. NOT A MESSAGE FOR TOMORROW.</p>
        <h2>The caller gets an answer before they hang up.</h2>
        <div className="rcp-audio" role="group" aria-label="Sample call audio player slot">
          <span className="rcp-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span>
          <div className="rcp-audio-meta">
            <strong>Play the sample call</strong>
            <span>AUDIO PLAYER SLOT &middot; &ndash;:&ndash; / &ndash;:&ndash; &middot; NO RECORDING ATTACHED YET</span>
          </div>
        </div>
        <p className="rcp-note">{ph("[REPLACE THE SCRIPT AND AUDIO WITH A REAL, APPROVED KORTEX DEMO. DO NOT CLAIM A SPECIFIC BOOKING OR INTEGRATION BEHAVIOR UNTIL IT IS CONFIGURED.]")}</p>
        <div className="rcp-transcript">
          <p className="rcp-transcript-label">SAMPLE CALL &middot; TRANSCRIPT</p>
          {TRANSCRIPT.map(([who, line], i) => (
            <div className={who === "Receptionist" ? "rcp-line rcp-line-r" : "rcp-line"} key={i}>
              <span>{who.toUpperCase()}</span>
              <p>{ph(line)}</p>
            </div>
          ))}
        </div>
        <p className="rcp-hear-support">
          For calls outside its instructions, the receptionist transfers or collects the
          information your team needs. You decide the rules.
        </p>
      </section>

      {/* 04 — what it handles */}
      <section className="rcp-caps section-pad">
        <p className="section-index">ONE CALL. THE NEXT STEP COMPLETED.</p>
        <h2>It does more than take a message.</h2>
        <div className="rcp-cap-grid">
          {CAPS.map((c) => (
            <article key={c.t}>
              <svg viewBox="0 0 24 24" aria-hidden="true">{c.d.map((d) => <path key={d} d={d} />)}</svg>
              <h3>{c.t}</h3>
              <p>{c.p}</p>
            </article>
          ))}
        </div>
        <p className="rcp-outcome">
          The customer gets an answer. Your team gets a useful record. The opportunity does not
          sit in voicemail waiting for tomorrow.
        </p>
        <p className="rcp-note">{ph("[CONFIRM EXACT BOOKING, TRANSFER, SMS AND MULTI-CALL CAPABILITIES BEFORE PUBLISHING.]")}</p>
      </section>

      {/* 05 — start small */}
      <section className="rcp-start rcp-dark section-pad">
        <p className="eyebrow"><span /> YOU DO NOT HAVE TO HAND OVER EVERY CALL ON DAY ONE</p>
        <h2>Start with the calls your team cannot answer today.</h2>
        <div className="rcp-cover-grid">
          {COVERAGE.map(([t, p], i) => (
            <article className={i === 0 ? "rcp-cover featured" : "rcp-cover"} key={t}>
              <span className="rcp-cover-index">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
        <p className="rcp-quiet">Start where calls are being lost. Expand only after it works.</p>
        <p className="rcp-start-closing">
          For most businesses, the safest first step is after-hours or overflow coverage. Prove it
          on real calls before expanding.
        </p>
      </section>

      {/* 06 — free missed-call review */}
      <section className="rcp-review section-pad">
        <div className="rcp-review-grid">
          <div>
            <p className="section-index">START WITH THE NUMBERS YOU ALREADY HAVE</p>
            <h2>See what unanswered calls may be costing your business.</h2>
            <p className="rcp-calc-link"><Link href="/v1/tools/missed-calls">Or run your own numbers first — the missed-call calculator <Arrow /></Link></p>
            <p className="rcp-review-lede">
              In a short review, Kortex looks at your current call volume, missed calls,
              after-hours demand and average job value.
            </p>
            <p className="rcp-leave-label">YOU WILL LEAVE WITH:</p>
            <ul className="rcp-leave">
              {LEAVE.map((t) => <li key={t}><Check /> {t}</li>)}
            </ul>
            <p className="rcp-honest">If the numbers do not support it, we will tell you.</p>
            <div className="actions">
              <a className="button" href="#review-form">Get my free missed-call review <Arrow /></a>
            </div>
            <p className="rcp-reassure">FREE REVIEW &middot; PLAIN-ENGLISH FINDINGS &middot; NO OBLIGATION</p>
            <p className="rcp-note">{ph("[DEFINE THE DATA REQUIRED, WHO COMPLETES THE REVIEW, THE DELIVERY FORMAT AND TURNAROUND TIME.]")}</p>
          </div>
          <aside className="rcp-calc">
            <span className="rcp-calc-tag">EXAMPLE ONLY &mdash; FILLED IN DURING YOUR REVIEW</span>
            <div className="rcp-calc-rows">
              <div><span>Missed calls per month</span><strong>&mdash;</strong></div>
              <i>&times;</i>
              <div><span>Booking rate</span><strong>&mdash;</strong></div>
              <i>&times;</i>
              <div><span>Average job value</span><strong>&mdash;</strong></div>
              <i>=</i>
              <div className="rcp-calc-result"><span>Estimated opportunity connected to unanswered calls</span><strong>&mdash;</strong></div>
            </div>
          </aside>
        </div>
      </section>

      {/* 07 — proof (hidden until real evidence exists) */}
      <section className="rcp-proof rcp-dark section-pad">
        <p className="rcp-hidden-note">{ph("[HIDE THIS SECTION UNTIL REAL EVIDENCE IS AVAILABLE. DO NOT USE GENERATED PEOPLE OR INVENTED RESULTS.]")}</p>
        <p className="eyebrow"><span /> CLIENT RESULT</p>
        <h2>From unanswered calls to booked work.</h2>
        <div className="rcp-proof-grid">
          <div className="rcp-proof-facts">
            <div><span>BEFORE</span><p>{ph("[CONTRACTOR] was missing [VERIFIED NUMBER OR PERCENTAGE] of calls during [AFTER HOURS / CALL SPIKES / OFFICE HOURS].")}</p></div>
            <div><span>WHAT CHANGED</span><p>{ph("Kortex introduced [AFTER-HOURS / OVERFLOW / FULL] coverage, trained the receptionist on the company's call rules and connected the approved booking or handoff process.")}</p></div>
            <div><span>VERIFIED RESULT</span><p>{ph("[INSERT ANSWER RATE, QUALIFIED CALLS, BOOKINGS, RESPONSE TIME OR RECOVERED REVENUE OVER A DEFINED PERIOD.]")}</p></div>
          </div>
          <figure className="rcp-proof-person">
            <div className="rcp-portrait-slot">{ph("[REAL CLIENT PHOTO]")}</div>
            <blockquote>{ph("“[INSERT A SPECIFIC CLIENT QUOTE ABOUT THE PREVIOUS CALL PROBLEM, THE CUSTOMER EXPERIENCE AND THE BUSINESS RESULT.]”")}</blockquote>
            <figcaption>{ph("[FULL NAME]")}<br />{ph("[ROLE], [COMPANY]")}</figcaption>
          </figure>
        </div>
      </section>

      {/* 08 — faq */}
      <section className="rcp-faq faq section-pad" id="faq">
        <div className="rcp-faq-grid">
          <div>
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq-grid">
            {FAQS.map((f, i) => (
              <details key={f.q} {...(i === 0 ? { open: true } : {})}>
                <summary><span>0{i + 1}</span>{f.q}<i /></summary>
                <p>{ph(f.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — final cta and form */}
      <section id="review-form" className="rcp-final rcp-dark">
        <div className="grid-overlay" />
        <div className="rcp-final-grid">
          <div className="rcp-final-copy">
            <p className="eyebrow"><span /> START WITH THE CALLS YOU ARE LOSING TODAY</p>
            <h2>Find out whether an AI receptionist would pay for itself.</h2>
            <p>
              We will look at the calls your team cannot answer, what one booked job is worth and
              which call types could be handled without changing the rest of your operation.
            </p>
            <a className="direct-call" href="tel:+13018898546">CALL (301) 889-8546</a>
          </div>
          <form className="rcp-form" aria-label="Free Missed-Call Review request">
            <p className="rcp-form-heading">Where are calls being missed?</p>
            <fieldset>
              <legend>STEP 1 &mdash; YOUR CALL PROBLEM</legend>
              <div className="rcp-form-row">
                <label>Company name<input type="text" name="company" autoComplete="organization" /></label>
                <label>Website<input type="text" name="website" inputMode="url" /></label>
              </div>
              <label>Type of business<input type="text" name="businessType" /></label>
              <label>When are most calls missed?
                <select name="whenMissed" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Office hours</option>
                  <option>After hours</option>
                  <option>Weekends</option>
                  <option>Call spikes</option>
                  <option>Not sure</option>
                </select>
              </label>
            </fieldset>
            <fieldset>
              <legend>STEP 2 &mdash; THE NUMBERS, IF KNOWN</legend>
              <div className="rcp-form-row">
                <label>Approximate calls per week <em>optional</em><input type="text" name="callsPerWeek" inputMode="numeric" /></label>
                <label>Average value of a booked job <em>optional</em><input type="text" name="jobValue" inputMode="numeric" /></label>
              </div>
              <label>Current phone or scheduling system <em>optional</em><input type="text" name="currentSystem" /></label>
            </fieldset>
            <fieldset>
              <legend>STEP 3 &mdash; CONTACT DETAILS</legend>
              <label>Name<input type="text" name="name" autoComplete="name" /></label>
              <div className="rcp-form-row">
                <label>Email<input type="email" name="email" autoComplete="email" /></label>
                <label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
              </div>
            </fieldset>
            <button className="button" type="submit">Get my free missed-call review <Arrow /></button>
            <p className="rcp-form-note">
              <span>CONFIRMATION SHOWN AFTER SUBMIT</span>
              {ph("Thank you. We will review the information and contact you within [ONE BUSINESS DAY] to arrange your free Missed-Call Review.")}
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
