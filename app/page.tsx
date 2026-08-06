import { HeroBrainV2 } from "@/components/home/hero-brain-v2";
import { Problem } from "@/components/home/problem";
import { Services } from "@/components/home/services";
import { CustomSolutions } from "@/components/home/custom-solutions";
import { Diagnostic } from "@/components/home/diagnostic";
import { CaseStudiesTeaser } from "@/components/home/case-studies-teaser";
import { HowWeWork } from "@/components/home/how-we-work";
import { BlogTeaser } from "@/components/home/blog-teaser";
import { FinalCTA } from "@/components/home/final-cta";
import { FaqSection, faqSchema, type Faq } from "@/components/faq-section";

const SITE = "https://kortexconsulting.com";

const FAQS: Faq[] = [
  {
    q: "What does Kortex actually do?",
    a: "We are an AI consulting and engineering firm. We work out which parts of a business genuinely benefit from AI, build those systems, and connect them to the software already in use. The measure we hold ourselves to is simple: at the end of an engagement something is running, not written.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "Small and mid-sized businesses that take real operational volume — professional services firms, home services and trades, associations, and government contractors. We are based in Bethesda and work across the Washington DC metro, plus remotely across the US.",
  },
  {
    q: "How quickly do we see something working?",
    a: "The first working piece should exist within about two weeks — running against your real data, not a demo on sample records. If the first artefact is months away, the engagement has been structured around discovery rather than learning.",
  },
  {
    q: "Do we own what you build?",
    a: "Yes. The code, the prompts, and the accounts. A firm that leaves you dependent on it has sold you a subscription rather than a system.",
  },
  {
    q: "What if AI is not the right answer for our problem?",
    a: "Then we say so, and often we do. A large share of what gets pitched as an AI problem is an undefined process wearing an AI costume, and automating confusion only makes it arrive faster.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Kortex Consulting",
      url: SITE,
      email: "hello@kortexconsulting.com",
      telephone: "+1-301-889-8546",
      description:
        "AI consulting and implementation firm building operational AI systems, AI agents, and automation for small and mid-sized businesses.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6604 Millwood Rd",
        addressLocality: "Bethesda",
        addressRegion: "MD",
        postalCode: "20817",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Washington" },
        { "@type": "State", name: "Maryland" },
        { "@type": "State", name: "Virginia" },
        { "@type": "Country", name: "United States" },
      ],
      knowsAbout: [
        "AI consulting",
        "AI agent development",
        "AI receptionist",
        "AI customer service",
        "Workflow automation",
        "Systems integration",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Kortex Consulting",
      publisher: { "@id": `${SITE}/#organization` },
    },
    faqSchema(SITE, FAQS),
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroBrainV2 />
      <Problem />
      <Services />
      <CustomSolutions teaser />
      <Diagnostic />
      <CaseStudiesTeaser />
      <HowWeWork />
      <BlogTeaser />
      <FaqSection heading="What do people ask before getting in touch?" faqs={FAQS} />
      <FinalCTA />
    </>
  );
}
