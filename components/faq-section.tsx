import { Container } from "@/components/ui/container";

export type Faq = { q: string; a: string };

/** Renders the visible FAQ block. Pair with faqSchema() for the JSON-LD. */
export function FaqSection({
  heading = "Questions people ask before they buy",
  faqs,
}: {
  heading?: string;
  faqs: Faq[];
}) {
  return (
    <section className="py-20 md:py-28 border-b border-[var(--border)]">
      <Container size="narrow">
        <h2 className="font-display text-3xl md:text-[40px] leading-tight tracking-[-0.02em] text-foreground">
          {heading}
        </h2>
        <div className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {faqs.map((f) => (
            <div key={f.q} className="py-7">
              <h3 className="text-[18px] font-semibold text-foreground">{f.q}</h3>
              <p className="mt-3 text-[16px] leading-[1.7] text-[var(--foreground-dim)]">{f.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** FAQPage JSON-LD node for the @graph. */
export function faqSchema(url: string, faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Provider node reused across service pages. */
export const PROVIDER = {
  "@type": "Organization",
  name: "Kortex Consulting",
  url: "https://kortexconsulting.com",
  telephone: "+1-301-889-8546",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6604 Millwood Rd",
    addressLocality: "Bethesda",
    addressRegion: "MD",
    postalCode: "20817",
    addressCountry: "US",
  },
} as const;
