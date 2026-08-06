import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { FaqSection, faqSchema, PROVIDER, type Faq } from "@/components/faq-section";

const SITE = "https://kortexconsulting.com";
const URL = `${SITE}/ai-receptionist/small-business`;

export const metadata: Metadata = {
  title: "Answering Service for Small Business — AI, 24/7 | Kortex",
  description:
    "An answering service for small business that books jobs instead of taking messages. No per-minute billing, no rota to staff, and no receptionist salary to carry.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Answering Service for Small Business — AI, 24/7 | Kortex",
    description:
      "A virtual receptionist for small business that answers every call, qualifies the caller, and books the job — without a receptionist salary.",
    url: URL,
    type: "website",
  },
};

const CHOOSE = [
  {
    q: "Does it book, or only take a message?",
    a: "A message is a task you still have to do. Ask whether the service can see your calendar and commit a time on the call. Most cannot, and that single difference is what decides whether the caller is still a customer tomorrow.",
  },
  {
    q: "How is it billed?",
    a: "Per-minute billing punishes you exactly when things go well — a busy month costs more than a quiet one. Understand the overage rate before you sign, because that is where the surprise lives.",
  },
  {
    q: "What happens when two people call at once?",
    a: "A one-person answering service puts the second caller on hold. Ask what happens at your busiest hour, not your average one, because the calls you lose are the ones that arrive in a cluster.",
  },
  {
    q: "Does it know what you actually do?",
    a: "A generic script that cannot answer 'do you cover my area' or 'roughly what does that cost' will lose the caller anyway. The service needs your service area, your pricing posture, and your rules.",
  },
];

const FAQS: Faq[] = [
  {
    q: "What is the best answering service for a small business?",
    a: "The one that books work rather than collecting messages. For a small business, the deciding factors are usually whether it can commit an appointment on the call, whether it handles more than one caller at a time, and whether the bill stays predictable in a busy month. Anything that only takes a name and number is moving the work rather than doing it.",
  },
  {
    q: "How much does an answering service for small business cost?",
    a: "Traditional services typically bill per minute or per call, which means your cost rises with your call volume. An automated virtual receptionist does not carry a per-minute staffing cost, so pricing tends to track capability rather than usage. The useful comparison is not against a competitor's rate — it is against one lost job a month.",
  },
  {
    q: "Is it cheaper than hiring a receptionist?",
    a: "Substantially, and that is usually the wrong reason to do it. A part-time receptionist covers roughly a third of the week and takes holidays; the calls you lose are mostly arriving in the other two thirds. You are not buying a cheaper receptionist so much as coverage you were never going to staff.",
  },
  {
    q: "I am a one-person business. Is this overkill?",
    a: "Solo operators tend to get the most from it, because they are the ones physically unable to answer — you cannot take a call while under a sink or in front of a client. It is the difference between losing every call you are busy for and losing none of them.",
  },
  {
    q: "What if my call volume is low?",
    a: "Then the maths is about value per call, not volume. A business taking thirty calls a month where each job is worth several hundred dollars has more at stake per missed call than a high-volume operation. Work out what one booked job is worth before deciding the volume is too low.",
  },
  {
    q: "Do I have to sign a long contract?",
    a: "You should not have to, and a long lock-in is a reasonable thing to walk away from. What matters more is how quickly it can be changed when your business changes — a service that takes three weeks to update your pricing script is a liability during a busy season.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "Answering Service for Small Business",
      alternateName: [
        "Virtual receptionist for small business",
        "Phone answering service for small business",
        "Call answering service for small business",
        "Live answering service for small business",
      ],
      serviceType: "AI answering service and virtual receptionist for small businesses",
      description:
        "An AI answering service for small businesses that answers every call, qualifies the caller, and books the appointment into your calendar — without per-minute billing or a receptionist salary.",
      url: URL,
      provider: PROVIDER,
      areaServed: { "@type": "Country", name: "United States" },
      audience: { "@type": "BusinessAudience", name: "Small businesses and sole traders" },
    },
    faqSchema(URL, FAQS),
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "AI Receptionist", item: `${SITE}/ai-receptionist` },
        { "@type": "ListItem", position: 3, name: "Answering Service for Small Business", item: URL },
      ],
    },
  ],
};

export default function SmallBusinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="Answering Service for Small Business"
        title={
          <>
            You cannot answer the phone
            <br />
            <span className="italic text-[var(--accent)]">and do the job at the same time.</span>
          </>
        }
        description="An answering service for small business that books the work instead of taking a message — no rota to staff, no per-minute bill, no receptionist salary."
      />

      <div className="py-16 md:py-20 border-b border-[var(--border)]">
        <Container size="default">
          <p className="max-w-3xl text-[20px] md:text-[23px] leading-[1.6] text-foreground">
            A small business answering service picks up the calls you cannot. The AI version
            goes further than a message: it answers the caller&apos;s questions, checks your real
            availability, and books the appointment before they hang up — at any hour, on as many
            simultaneous calls as arrive.
          </p>
          <p className="mt-6 max-w-3xl text-[17px] leading-[1.7] text-[var(--foreground-dim)]">
            For a small business the problem is rarely that nobody wants to answer. It is that the
            person who would answer is under a sink, on a roof, or with a client. A virtual
            receptionist for small business is not a luxury upgrade on a front desk — it is coverage
            for the hours you were never going to be able to staff.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" size="lg" arrow>
              See what it would cost you
            </Button>
            <Button href="/ai-receptionist" variant="secondary" size="lg">
              How the AI receptionist works
            </Button>
          </div>
        </Container>
      </div>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="The comparison"
            title="Is it cheaper than hiring a receptionist?"
            description="Yes — but the cost is not the interesting part."
          />
          <div className="mt-12 max-w-3xl space-y-6 text-[17px] leading-[1.75] text-[var(--foreground-dim)]">
            <p>
              A part-time receptionist covers about a third of the week. They take holidays, they get
              sick, and they go home at five. The calls you are losing are mostly arriving in the
              other two thirds — evenings, weekends, and the middle of a job when both of you are
              already on the phone.
            </p>
            <p>
              So the honest comparison is not salary against subscription. It is{" "}
              <span className="text-foreground">
                partial coverage against complete coverage
              </span>
              . Hiring solves the hours you are open. It does not touch the hours that are actually
              costing you work.
            </p>
            <p>
              The other half of the maths is per-minute billing. Traditional services charge by call
              volume, which means a good month costs more than a quiet one — you get punished for
              growing. That pricing model exists because somebody has to be paid to sit and wait for
              your phone to ring.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="How to choose"
            title="What should a small business actually ask a provider?"
            description="Four questions that separate a service that books work from one that forwards it back to you."
          />
          <div className="mt-12 space-y-px bg-[var(--border)] rounded-xl overflow-hidden border border-[var(--border)]">
            {CHOOSE.map((c, i) => (
              <div key={c.q} className="bg-[var(--background)] p-7 md:p-9 md:flex md:gap-10">
                <div className="font-mono text-[13px] text-[var(--accent)] md:w-16 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 md:mt-0">
                  <h3 className="font-display text-[22px] md:text-[25px] leading-tight tracking-[-0.01em] text-foreground">
                    {c.q}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
                    {c.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
            If most of your lost calls arrive at night, start with{" "}
            <Link
              href="/ai-receptionist/after-hours"
              className="text-[var(--accent)] hover:underline"
            >
              after-hours coverage
            </Link>{" "}
            instead — it is the same system scoped to the hours that are actually costing you.
          </p>
        </Container>
      </section>

      <FaqSection heading="What do small business owners ask?" faqs={FAQS} />

      <section className="py-20 md:py-28">
        <Container size="default">
          <div className="rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-9 md:p-14">
            <h2 className="font-display text-3xl md:text-[42px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-2xl">
              Work out what one missed call costs you.
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[var(--foreground-dim)]">
              Twenty minutes, no pitch. If the numbers do not justify it at your call volume, we will
              tell you that.
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
