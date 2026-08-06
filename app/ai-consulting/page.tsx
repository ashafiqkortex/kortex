import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { FaqSection, faqSchema, PROVIDER, type Faq } from "@/components/faq-section";

const SITE = "https://kortexconsulting.com";
const URL = `${SITE}/ai-consulting`;

export const metadata: Metadata = {
  title: "AI Consulting Services for Small Business | Kortex",
  description:
    "AI consulting that ships working systems, not slide decks. We build on your data, in your environment — and tell you honestly when AI is the wrong answer.",
  alternates: { canonical: URL },
  openGraph: {
    title: "AI Consulting Services for Small Business | Kortex",
    description:
      "An AI consulting firm that builds. Working systems in weeks, on your data, in your environment.",
    url: URL,
    type: "website",
  },
};

const STAGES = [
  {
    n: "01",
    title: "We find where the work actually leaks",
    body: "Not a maturity assessment. We sit with the people doing the work and find the places where information gets re-keyed, decisions wait on someone's inbox, and nobody can answer a simple question without opening four systems.",
  },
  {
    n: "02",
    title: "We build the smallest thing that proves it",
    body: "One workflow, running on your real data, in week one or two. If the idea is wrong it should be wrong cheaply — and you should be the one who sees it working, not a slide describing it.",
  },
  {
    n: "03",
    title: "We wire it into the systems you already run",
    body: "The value is never in the model. It is in the integration: reading from the systems of record, writing back to them, and holding up when the data is messy, which it always is.",
  },
  {
    n: "04",
    title: "We hand it over, documented",
    body: "You own the code and the accounts. An AI consulting firm that leaves you dependent on it has sold you a subscription, not a system.",
  },
];

const CHOOSE = [
  {
    q: "Have they built, or only advised?",
    a: "Ask to see something running. AI strategy consulting that terminates in a roadmap leaves you exactly where you started, only poorer and with a deck.",
  },
  {
    q: "Will they say no to you?",
    a: "Plenty of problems are process problems wearing an AI costume. A firm that has never talked a client out of an AI project is not evaluating, it is selling.",
  },
  {
    q: "Who owns what gets built?",
    a: "Establish before signing whether you own the code, the prompts, and the accounts. Some AI consulting companies build on infrastructure you can never take with you.",
  },
  {
    q: "How soon do you see something real?",
    a: "Weeks, not quarters. If the first working artefact is months away, the engagement is structured around billing rather than learning.",
  },
];

const FAQS: Faq[] = [
  {
    q: "What does an AI consulting firm actually do?",
    a: "The useful ones work out which parts of your operation would genuinely benefit from AI, build those, and integrate them with the systems you already run. The less useful ones produce a strategy document. The distinguishing question is simple: at the end of the engagement, is something running, or is something written?",
  },
  {
    q: "How much do AI consulting services cost?",
    a: "It varies enormously by scope, but the structure matters more than the number. A short paid diagnostic that ends in a working prototype tells you more than a long discovery phase, and it caps your downside if the fit is wrong. Be wary of any firm that cannot price a first, small piece of work.",
  },
  {
    q: "Is AI consulting worth it for a small business?",
    a: "It depends on whether your bottleneck is actually an AI problem. This works best where there is repetitive, high-volume work that a person is currently doing by hand — call handling, data entry, follow-up, scheduling. Where the real issue is an undefined process, AI will simply automate the confusion faster.",
  },
  {
    q: "How is a consultancy different from an AI agency?",
    a: "In practice the labels are used interchangeably and neither tells you much. What tells you something is the deliverable. Ask what you will have at the end, who owns it, and what happens if it does not work.",
  },
  {
    q: "Do we need our own data to be ready first?",
    a: "No, and waiting until your data is clean is how AI projects get postponed indefinitely. Real operational data is messy, contradictory, and incomplete — building against it is the job, not a prerequisite for starting.",
  },
  {
    q: "What if the project does not work?",
    a: "Some do not, and that should be discovered in week two rather than month six. This is the main argument for starting with the smallest buildable piece: a failure that costs weeks is useful information, and a failure that costs a quarter is an expensive one.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "AI Consulting Services",
      alternateName: [
        "AI consulting firm",
        "AI consulting company",
        "AI consultant",
        "AI strategy consulting",
        "AI transformation consulting",
        "AI consulting for small business",
      ],
      serviceType: "AI consulting and implementation",
      description:
        "AI consulting services that end in working systems rather than recommendations — built on your data, integrated with the systems you already run, and handed over documented.",
      url: URL,
      provider: PROVIDER,
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "State", name: "Maryland" },
        { "@type": "State", name: "Virginia" },
        { "@type": "City", name: "Washington" },
      ],
      audience: {
        "@type": "BusinessAudience",
        name: "Small and mid-sized businesses",
      },
    },
    faqSchema(URL, FAQS),
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "AI Consulting", item: URL },
      ],
    },
  ],
};

export default function AiConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="AI Consulting"
        title={
          <>
            Most AI consulting ends
            <br />
            <span className="italic text-[var(--accent)]">in a document.</span>
          </>
        }
        description="Ours ends in something running. We build on your data, inside your environment, and hand it over documented — or we tell you the problem does not need AI at all."
      />

      <div className="py-16 md:py-20 border-b border-[var(--border)]">
        <Container size="default">
          <p className="max-w-3xl text-[20px] md:text-[23px] leading-[1.6] text-foreground">
            AI consulting is the work of deciding which parts of a business genuinely benefit from
            AI, building those, and connecting them to the systems already in use. The test of a firm
            is what exists when the engagement ends — a working system, or a
            recommendation that someone else now has to implement.
          </p>
          <p className="mt-6 max-w-3xl text-[17px] leading-[1.7] text-[var(--foreground-dim)]">
            We are{" "}
            <Link href="/about" className="text-[var(--accent)] hover:underline">
              engineers who consult
            </Link>
            , not consultants who subcontract. That distinction shows up
            in week one, when you are looking at something running against your own data rather than
            reading a maturity assessment.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" size="lg" arrow>
              Book a 20-minute call
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              See what we have built
            </Button>
          </div>
        </Container>
      </div>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="The engagement"
            title="What does the work actually look like?"
            description="Four stages. You see something running before you commit to the third."
          />
          <div className="mt-14 space-y-px bg-[var(--border)] rounded-xl overflow-hidden border border-[var(--border)]">
            {STAGES.map((s) => (
              <div key={s.n} className="bg-[var(--background)] p-7 md:p-9 md:flex md:gap-10">
                <div className="font-mono text-[13px] text-[var(--accent)] md:w-16 shrink-0">
                  {s.n}
                </div>
                <div className="mt-3 md:mt-0">
                  <h3 className="font-display text-[22px] md:text-[26px] leading-tight tracking-[-0.01em] text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="Choosing"
            title="How do you pick between AI consulting companies?"
            description="Four questions worth asking whoever you talk to, including us."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {CHOOSE.map((c) => (
              <div
                key={c.q}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-7"
              >
                <h3 className="font-display text-[21px] leading-tight tracking-[-0.01em] text-foreground">
                  {c.q}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.7] text-[var(--foreground-dim)]">{c.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="Fit"
            title="Is this right for a smaller business?"
            description="Usually — but not for the reason most people assume."
          />
          <div className="mt-12 max-w-3xl space-y-6 text-[17px] leading-[1.75] text-[var(--foreground-dim)]">
            <p>
              The large firms are structured for large budgets: long discovery, big teams, and a
              minimum engagement size that rules out most businesses under a few hundred people. That
              is not a criticism of them, it is a description of their cost base.
            </p>
            <p>
              It does mean smaller engagements are mostly served by two extremes —
              enterprise firms who cannot work at that size, and freelancers who cannot carry the
              integration work. The middle is thin, and{" "}
              <span className="text-foreground">that middle is where we operate</span>.
            </p>
            <p>
              What smaller businesses actually get from this is not a cheaper version of enterprise
              AI. It is the opposite: a much shorter path from problem to working system, because
              there are fewer people to convince and less legacy to negotiate.
            </p>
          </div>
          <p className="mt-8 max-w-2xl text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
            If you already know what you want built, start at the specifics —{" "}
            <Link href="/ai-agent-development" className="text-[var(--accent)] hover:underline">
              AI agent development
            </Link>
            ,{" "}
            <Link href="/ai-receptionist" className="text-[var(--accent)] hover:underline">
              an AI receptionist
            </Link>
            , or{" "}
            <Link href="/ai-customer-service" className="text-[var(--accent)] hover:underline">
              AI customer service
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="Timeline"
            title="How long before something is actually running?"
            description="Weeks for the first working piece. The rest depends on access, not on us."
          />
          <div className="mt-12 max-w-3xl space-y-6 text-[17px] leading-[1.75] text-[var(--foreground-dim)]">
            <p>
              The first working artefact should exist inside two weeks. Not a mockup, not a demo on
              sample data — something running against your records that a person in your business can
              use and criticise. If that is months away, the engagement has been structured around
              discovery rather than learning.
            </p>
            <p>
              After that, the pace is set almost entirely by one thing:{" "}
              <span className="text-foreground">how quickly we get access</span>. Credentials, API
              keys, a sandbox, someone who can answer questions about how the data actually behaves.
              Projects rarely stall on modelling. They stall waiting for a login.
            </p>
            <p>
              The work we do is deliberately shaped so you can stop after any stage and still own
              something useful. That is not generosity, it is self-interest: an engagement that has to
              run to completion before it delivers anything is one where nobody finds out it was
              wrong until it is expensive.
            </p>
          </div>
        </Container>
      </section>

      <FaqSection heading="What do people ask before engaging?" faqs={FAQS} />

      <section className="py-20 md:py-28">
        <Container size="default">
          <div className="rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-9 md:p-14">
            <h2 className="font-display text-3xl md:text-[42px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-2xl">
              Tell us what is slow.
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[var(--foreground-dim)]">
              Twenty minutes, three or four questions about your operations. We will tell you
              honestly whether this is an AI problem or something simpler.
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
