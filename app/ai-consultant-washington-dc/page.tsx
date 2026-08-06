import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { FaqSection, faqSchema, type Faq } from "@/components/faq-section";

const SITE = "https://kortexconsulting.com";
const URL = `${SITE}/ai-consultant-washington-dc`;

export const metadata: Metadata = {
  title: "AI Consultant in Washington DC Metro | Kortex",
  description:
    "An AI consultant based in Bethesda, working across DC, suburban Maryland and Northern Virginia. We build working systems, and we can do it in your office.",
  alternates: { canonical: URL },
  openGraph: {
    title: "AI Consultant in Washington DC Metro | Kortex",
    description:
      "AI consulting and automation for businesses across DC, Maryland and Northern Virginia. Based in Bethesda.",
    url: URL,
    type: "website",
  },
};

const AREAS = [
  { region: "Suburban Maryland", places: "Bethesda, Chevy Chase, Rockville, Silver Spring, Gaithersburg, Potomac, Frederick" },
  { region: "Washington DC", places: "Downtown, Capitol Hill, Georgetown, NoMa, Navy Yard" },
  { region: "Northern Virginia", places: "Arlington, Alexandria, Tysons, McLean, Reston, Fairfax, Vienna, Loudoun" },
  { region: "Baltimore corridor", places: "Columbia, Ellicott City, Towson, Baltimore" },
];

const SECTORS = [
  {
    t: "Professional services firms",
    b: "Law, accounting, and consulting practices across the region run on billable hours and drown in intake, document handling, and client communication. All three are the sort of work that pays back fastest.",
  },
  {
    t: "Associations and nonprofits",
    b: "The DC area has a density of membership organisations found almost nowhere else. Member enquiries, renewals, and event administration are high-volume, repetitive, and rarely staffed generously.",
  },
  {
    t: "Government contractors",
    b: "Proposal work, compliance documentation, and reporting consume enormous internal effort. This sector also carries real constraints around data handling, which shapes what can sensibly be built and where it runs.",
  },
  {
    t: "Home services and trades",
    b: "Across Montgomery County, Fairfax, and Arlington, the constraint is almost always the phone. Missed calls at 7pm on a Friday go to whoever answers first.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Where are you based?",
    a: "Bethesda, Maryland — 6604 Millwood Rd, 20817. We work across the whole Washington DC metro area, including DC itself, Montgomery County, and Northern Virginia, and we take work outside the region remotely.",
  },
  {
    q: "Do you meet clients in person?",
    a: "Yes, and for the first conversation we prefer it when the geography allows. Understanding where work actually gets stuck usually means watching somebody do it, which is much harder over a video call than standing behind them for twenty minutes.",
  },
  {
    q: "Do you work with businesses in Virginia?",
    a: "Regularly. Northern Virginia is a large part of the practical service area — Arlington, Alexandria, Tysons, Reston, and Fairfax are all a straightforward drive, and in search terms Virginia is a bigger market for this work than Maryland.",
  },
  {
    q: "Do I need a local AI consultant at all?",
    a: "Not strictly — the work is largely remote by nature, and we build for clients elsewhere in the US. Being local changes the first phase more than the rest — it is easier to sit with a team for a day than to schedule six calls to learn the same thing.",
  },
  {
    q: "Do you work with government contractors?",
    a: "Yes, with the caveat that data handling requirements shape the architecture from the start rather than being retrofitted. If work is subject to specific compliance obligations, that needs to be on the table in the first conversation, because it determines where systems can run.",
  },
  {
    q: "How do we start?",
    a: "A 20-minute call, or coffee if you are nearby. We will ask three or four questions about how work moves through your business and tell you honestly whether we can help — including when the answer is that you do not need AI for this.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${URL}#localbusiness`,
      name: "Kortex Consulting",
      description:
        "AI consulting and implementation firm in the Washington DC metro area, building operational AI systems, AI agents, and automation for small and mid-sized businesses.",
      url: URL,
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
        { "@type": "City", name: "Washington", containedInPlace: { "@type": "State", name: "District of Columbia" } },
        { "@type": "City", name: "Bethesda" },
        { "@type": "City", name: "Rockville" },
        { "@type": "City", name: "Silver Spring" },
        { "@type": "City", name: "Arlington" },
        { "@type": "City", name: "Alexandria" },
        { "@type": "City", name: "Baltimore" },
        { "@type": "AdministrativeArea", name: "Montgomery County, Maryland" },
        { "@type": "AdministrativeArea", name: "Fairfax County, Virginia" },
        { "@type": "State", name: "Maryland" },
        { "@type": "State", name: "Virginia" },
      ],
      knowsAbout: [
        "AI consulting",
        "AI agent development",
        "Workflow automation",
        "AI receptionist",
        "AI customer service",
      ],
    },
    faqSchema(URL, FAQS),
  ],
};

export default function DcPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="Washington DC Metro"
        title={
          <>
            An AI consultant you can
            <br />
            <span className="italic text-[var(--accent)]">actually sit down with.</span>
          </>
        }
        description="Based in Bethesda, working across DC, suburban Maryland, and Northern Virginia. Close enough to spend a morning watching how your business actually runs."
      />

      <div className="py-16 md:py-20 border-b border-[var(--border)]">
        <Container size="default">
          <p className="max-w-3xl text-[20px] md:text-[23px] leading-[1.6] text-foreground">
            Kortex is an AI consultant and implementation firm in the Washington DC metro area. We
            build working systems — agents, automation, and the integrations underneath them — for
            businesses across DC, Maryland, and Northern Virginia.
          </p>
          <p className="mt-6 max-w-3xl text-[17px] leading-[1.7] text-[var(--foreground-dim)]">
            Most of this work can be done from anywhere, and much of ours is. What being local
            genuinely changes is the beginning: the fastest way to find where a business leaks time
            is to stand in the room while people work, and that is hard to replicate over video.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" size="lg" arrow>
              Book a call, or coffee
            </Button>
            <Button href="tel:+13018898546" variant="secondary" size="lg">
              Call (301) 889-8546
            </Button>
          </div>
        </Container>
      </div>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="Service area"
            title="Where do you actually work?"
            description="The whole DC metro, plus the Baltimore corridor. Everywhere else, remotely."
          />
          <div className="mt-12 space-y-px bg-[var(--border)] rounded-xl overflow-hidden border border-[var(--border)]">
            {AREAS.map((a) => (
              <div key={a.region} className="bg-[var(--background)] p-7 md:flex md:gap-10">
                <div className="md:w-56 shrink-0 text-[17px] text-foreground">{a.region}</div>
                <div className="mt-2 md:mt-0 text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
                  {a.places}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
            The office is at 6604 Millwood Rd, Bethesda, MD 20817. Tysons, Arlington, and downtown DC
            are all a straightforward drive.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="This market"
            title="What does DC-area work usually look like?"
            description="The region has an unusual business mix, and it shapes what is worth building."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {SECTORS.map((c) => (
              <div
                key={c.t}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-7"
              >
                <h3 className="font-display text-[21px] leading-tight tracking-[-0.01em] text-foreground">
                  {c.t}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.7] text-[var(--foreground-dim)]">{c.b}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
            What we build does not change by postcode — see{" "}
            <Link href="/ai-consulting" className="text-[var(--accent)] hover:underline">
              how the engagement works
            </Link>
            ,{" "}
            <Link href="/ai-agent-development" className="text-[var(--accent)] hover:underline">
              agent development
            </Link>
            , or{" "}
            <Link href="/ai-receptionist" className="text-[var(--accent)] hover:underline">
              the AI receptionist
            </Link>{" "}
            if the phone is your bottleneck.
          </p>
        </Container>
      </section>

      <FaqSection heading="What do local clients ask?" faqs={FAQS} />

      <section className="py-20 md:py-28">
        <Container size="default">
          <div className="rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-9 md:p-14">
            <h2 className="font-display text-3xl md:text-[42px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-2xl">
              We are twenty minutes from most of the Beltway.
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[var(--foreground-dim)]">
              Book a call, or if you are nearby, we will come to you and watch how the work actually
              moves.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" size="lg" arrow>
                Book a 20-minute call
              </Button>
              <Button href="tel:+13018898546" variant="secondary" size="lg">
                Call (301) 889-8546
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
