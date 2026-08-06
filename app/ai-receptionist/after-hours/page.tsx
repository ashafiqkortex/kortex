import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { FaqSection, faqSchema, PROVIDER, type Faq } from "@/components/faq-section";
import { Moon, Siren, Users, Wallet } from "lucide-react";

const SITE = "https://kortexconsulting.com";
const URL = `${SITE}/ai-receptionist/after-hours`;

export const metadata: Metadata = {
  title: "After-Hours Answering Service — 24/7 Coverage | Kortex",
  description:
    "An after-hours answering service that triages emergencies and books the rest — so nobody gets woken at 2am for a question that could have waited until Monday.",
  alternates: { canonical: URL },
  openGraph: {
    images: [{ url: `${SITE}/opengraph-image`, width: 1200, height: 630 }],
    title: "After-Hours Answering Service — 24/7 Coverage | Kortex",
    description:
      "24/7 answering service with emergency triage. Wakes your on-call tech only when it is genuinely an emergency.",
    url: URL,
    type: "website",
  },
};

const PILLARS = [
  {
    icon: Siren,
    title: "Triages before it wakes anyone",
    body: "You define what counts as an emergency — no heat in February, water coming through a ceiling, a fire alarm panel. Everything else gets booked for the morning instead of ringing a phone at 3am.",
  },
  {
    icon: Users,
    title: "Protects the on-call rotation",
    body: "On-call is the shift nobody wants, and the resentment it breeds is a retention problem. Cutting the number of nuisance calls is often worth more than the revenue the service recovers.",
  },
  {
    icon: Moon,
    title: "Covers weekends and holidays the same",
    body: "There is no separate weekend rate and no holiday surcharge, because there is no roster to staff. Christmas Day works the same as a Tuesday.",
  },
  {
    icon: Wallet,
    title: "Costs the same at 3am as at 3pm",
    body: "Overnight cover through a traditional service is usually the expensive tier. Here the overnight hours are simply hours — which is what makes round-the-clock coverage viable for a small operation.",
  },
];

const FAQS: Faq[] = [
  {
    q: "What is an after hours answering service?",
    a: "An after hours answering service handles your calls outside normal business hours — evenings, weekends, and holidays — so callers reach something other than voicemail. An AI version answers every call instantly, works out whether it is an emergency, wakes your on-call person only when it genuinely is, and books everything else into the morning.",
  },
  {
    q: "How does it decide what counts as an emergency?",
    a: "You define the rules, in your language, before it goes live. Most businesses end up with a short list of genuine emergencies and a much longer list of things that feel urgent at midnight but can wait. The agent follows that list exactly, and when a call sits on the boundary it escalates rather than guessing.",
  },
  {
    q: "Will my on-call tech still get woken up?",
    a: "For real emergencies, yes — that is the point. What changes is the volume. The calls that get filtered out are the ones that never needed a human at 2am: scheduling questions, price enquiries, and callers who dialled the wrong number.",
  },
  {
    q: "Do I need 24/7 coverage or just after hours?",
    a: "Look at when your calls actually arrive before deciding. Roughly 42% of home-services calls come in outside standard business hours, but the split varies by trade. Many businesses start with evenings and weekends, then extend to a full 24/7 answering service once they see what the overnight window is worth.",
  },
  {
    q: "How is this different from just using voicemail?",
    a: "Around 85% of callers who reach voicemail never leave a message, and about two thirds simply call the next business on the list. Voicemail does not hold your place in the queue — it just records the ones patient enough to wait, which after hours is almost nobody.",
  },
  {
    q: "What does an after-hours answering service cost?",
    a: "Traditional services usually price overnight and weekend cover as a premium tier, because someone has to be paid to sit up. An automated 24/7 service does not carry that cost structure, so the overnight hours are not the expensive ones. Weigh it against a single emergency job recovered per month and the comparison is usually straightforward.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "After-Hours Answering Service",
      alternateName: [
        "24/7 answering service",
        "After hours phone answering service",
        "After hours call answering service",
        "24/7 virtual receptionist",
        "Overnight answering service",
      ],
      serviceType: "After-hours and 24/7 answering service with emergency triage",
      description:
        "An AI after-hours answering service that answers every call outside business hours, triages emergencies against your rules, wakes on-call staff only when required, and books everything else for the next working day.",
      url: URL,
      provider: PROVIDER,
      areaServed: { "@type": "Country", name: "United States" },
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    faqSchema(URL, FAQS),
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "AI Receptionist", item: `${SITE}/ai-receptionist` },
        { "@type": "ListItem", position: 3, name: "After-Hours Answering", item: URL },
      ],
    },
  ],
};

export default function AfterHoursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="After-Hours Answering Service"
        title={
          <>
            The calls that come in at 2am
            <br />
            <span className="italic text-[var(--accent)]">are the ones worth the most.</span>
          </>
        }
        description="A 24/7 answering service that triages the emergency, wakes your on-call tech only when it is real, and books everything else for the morning."
      />

      <div className="py-16 md:py-20 border-b border-[var(--border)]">
        <Container size="default">
          <p className="max-w-3xl text-[20px] md:text-[23px] leading-[1.6] text-foreground">
            An after hours answering service handles the calls that arrive when your office is shut —
            evenings, weekends, and holidays — so callers reach a real conversation instead of
            voicemail. This is a 24 7 answering service run by an AI voice agent: it answers
            instantly, decides whether it is an emergency, and only wakes somebody when it genuinely
            is.
          </p>
          <p className="mt-6 max-w-3xl text-[17px] leading-[1.7] text-[var(--foreground-dim)]">
            After-hours callers are not browsing. Something has broken, and they are working down a
            list. Whoever answers first usually gets the job — which is why the overnight window is
            worth more per call than the daytime one, and why voicemail costs more than it looks.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" size="lg" arrow>
              Work out what nights are costing you
            </Button>
            <Button href="/ai-receptionist" variant="secondary" size="lg">
              See the full AI receptionist
            </Button>
          </div>
        </Container>
      </div>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="The numbers"
            title="Why do after-hours calls matter more than daytime calls?"
            description="Because the caller has a problem now, and patience after dark is close to zero."
          />
          <div className="mt-14 grid gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden border border-[var(--border)]">
            {[
              { n: "42%", l: "of HVAC calls arrive outside standard business hours" },
              { n: "85%", l: "of callers who reach voicemail never leave a message" },
              { n: "67%", l: "who cannot reach you immediately call a competitor instead" },
              { n: "21%", l: "conversion rate after 6pm for large firms — 9% for small ones" },
            ].map((s) => (
              <div key={s.n} className="bg-[var(--background)] p-7">
                <div className="font-display text-4xl md:text-5xl text-[var(--accent)] leading-none">
                  {s.n}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--foreground-dim)]">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px] text-[var(--muted)]">
            Industry figures compiled from Invoca, Housecall Pro, and Contractor in Charge
            call-handling research, 2026.
          </p>
          <p className="mt-8 max-w-2xl text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
            That last figure is the one worth sitting with. Conversion after 6pm collapses for small
            businesses — not because the callers are worth less, but because nobody is picking up.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="How it works at night"
            title="What actually happens at 2am?"
            description="Four things change when the coverage is automated rather than rostered."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {PILLARS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border-bright)] bg-[var(--background)] text-[var(--accent)]">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-[22px] leading-tight tracking-[-0.01em] text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
                    {c.body}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-10 max-w-2xl text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
            After-hours cover is one mode of the same system. If you want calls handled during the
            day as well, that is{" "}
            <Link href="/ai-receptionist" className="text-[var(--accent)] hover:underline">
              the AI receptionist
            </Link>
            ; for support volume rather than new enquiries, see{" "}
            <Link href="/ai-customer-service" className="text-[var(--accent)] hover:underline">
              AI customer service
            </Link>
            .
          </p>
        </Container>
      </section>

      <FaqSection heading="What do owners ask about after hours cover?" faqs={FAQS} />

      <section className="py-20 md:py-28">
        <Container size="default">
          <div className="rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-9 md:p-14">
            <h2 className="font-display text-3xl md:text-[42px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-2xl">
              What is the overnight window worth?
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[var(--foreground-dim)]">
              Twenty minutes. We look at when your calls actually arrive and what happens to the ones
              that land after six.
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
