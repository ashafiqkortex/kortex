import type { Metadata } from "next";
import { ContactForm } from "@/components/v1/contact-form";
import { Arrow } from "@/components/v1/icons";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Kortex — Operational Systems for Commercial Contractors",
  description:
    "Call (301) 889-8546 or book a working session. We'll follow one real job from the field to the invoice and tell you honestly whether we can help.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://kortexconsulting.com/contact" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kortex Consulting",
  url: "https://kortexconsulting.com",
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
};

const WHAT_HAPPENS = [
  ["We follow one job", "Pick a job that went badly, or one that went fine but took too long. We trace it from the first call to the money landing."],
  ["We find where it stops", "Usually four or five places. Re-entry, waiting on an approval, information that never reached the office."],
  ["You get the map either way", "A written picture of where the time goes, whether or not you work with us. If off-the-shelf is your answer, we'll say which one."],
];

export default function V1ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="contact-hero">
        <div className="grid-overlay" />
        <p className="eyebrow"><span /> START WITH ONE REAL JOB</p>
        <h1>Show us how one job moves through your company.</h1>
        <p className="contact-lede">
          One working session. We follow a real job from the field to the invoice, show you where
          it stops, and tell you plainly whether this is something you should build or buy off the
          shelf.
        </p>
        <div className="contact-direct">
          <a className="contact-phone" href="tel:+13018898546">(301) 889-8546</a>
          <span>Business hours, and it goes to a person.</span>
        </div>
      </section>

      <section className="contact-body section-pad">
        <div className="contact-grid">
          <div className="contact-aside">
            <p className="section-index">WHAT THE SESSION IS</p>
            <div className="steps">
              {WHAT_HAPPENS.map(([title, copy], i) => (
                <div className="s" key={title}>
                  <div className="k">{i + 1}</div>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </div>
              ))}
            </div>

            <div className="contact-card">
              <strong>NO DECK, NO DEMO</strong>
              <p>
                We don&apos;t present. We ask about how you price, dispatch and bill, and we
                write down what you say. Bring your office manager if you can — she knows where
                the time actually goes.
              </p>
            </div>

            <div className="contact-details">
              <div>
                <span>CALL</span>
                <a href="tel:+13018898546">(301) 889-8546</a>
              </div>
              <div>
                <span>EMAIL</span>
                <a href="mailto:hello@kortexconsulting.com">hello@kortexconsulting.com</a>
              </div>
              <div>
                <span>OFFICE</span>
                <address>6604 Millwood Rd<br />Bethesda, MD 20817</address>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="contact-close">
        <div className="grid-overlay" />
        <h2>Not sure it&apos;s us?</h2>
        <p>
          Plenty of companies are better off with something off the shelf, and some of what gets
          sold as an AI problem is an undefined process wearing an AI costume. We&apos;d rather
          say that on the first call than three months in.
        </p>
        <a className="button ghost" href="/v1#faq">Read what owners ask first <Arrow /></a>
      </section>
    </>
  );
}
