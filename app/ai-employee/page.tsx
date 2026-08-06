import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { FaqSection, faqSchema, PROVIDER, type Faq } from "@/components/faq-section";

const SITE = "https://kortexconsulting.com";
const URL = `${SITE}/ai-employee`;

export const metadata: Metadata = {
  title: "AI Employee — What It Can Actually Own | Kortex",
  description:
    "An AI employee owns an outcome rather than answering questions. What that means in practice, which jobs it can hold, and where the idea falls apart.",
  alternates: { canonical: URL },
  openGraph: {
    title: "AI Employee — What It Can Actually Own | Kortex",
    description:
      "What an AI employee is, which jobs one can genuinely hold, and where the metaphor stops being useful.",
    url: URL,
    type: "website",
  },
};

const OWNS = [
  {
    t: "A job with a definable finish line",
    b: "“Every inbound call is answered and either booked or escalated” is an outcome. “Help with sales” is not. If you cannot describe what done looks like, nothing can own it — human or otherwise.",
  },
  {
    t: "Work that spans systems",
    b: "The jobs worth handing over are the ones where a person currently moves information between four tools and applies judgement in the gaps. That is where a digital worker earns its keep.",
  },
  {
    t: "Volume that never stops arriving",
    b: "Anything continuous — calls, tickets, invoices, follow-ups — suits an always-on worker. Bursty, occasional work rarely justifies the setup.",
  },
  {
    t: "Consequences you can reverse",
    b: "Booking an appointment is recoverable. Issuing a refund or sending a legal notice is not. The reversibility of a mistake should decide how much autonomy the job gets.",
  },
];

const FAQS: Faq[] = [
  {
    q: "What is an AI employee?",
    a: "An AI employee is a system that owns a defined job in a business rather than answering individual questions. It takes work in, reasons about it, acts across the software you already run, and hands off the cases it should not decide alone. The distinction from a chatbot is ownership of an outcome; the distinction from automation is that it can handle cases the rules did not anticipate.",
  },
  {
    q: "Is a digital worker different from an AI agent?",
    a: "Not technically — the underlying system is the same. The label is a framing that describes scope rather than architecture: an agent given a whole job rather than a single task. The framing is useful for deciding what to hand over, and misleading if it makes you skip defining the work.",
  },
  {
    q: "What jobs can one actually hold?",
    a: "In practice: answering and qualifying inbound calls, resolving repetitive support tickets, processing documents against records, and chasing follow-ups that would otherwise be dropped. All four share the same shape — continuous volume, clear success criteria, and reversible mistakes.",
  },
  {
    q: "Can it replace a role entirely?",
    a: "Rarely, and the businesses that get the most from this stop trying. What usually happens is that a role sheds its repetitive share and keeps the parts requiring judgement, relationships, and accountability. Planning for full replacement tends to produce a system nobody trusts enough to leave alone.",
  },
  {
    q: "What does an AI workforce cost to run?",
    a: "Less than the equivalent headcount, but that comparison flatters it. The real costs are the integration work up front and the ongoing attention — someone still has to read what it did, adjust it when the business changes, and own the outcome. Budget for the second part and it works; skip it and it degrades quietly.",
  },
  {
    q: "How do you start?",
    a: "With one job, not a workforce. Pick the one where the current cost is visible and the success measure is unambiguous — usually the phone. The second is far easier once the integration work from the first exists.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "AI Employee",
      alternateName: ["AI workforce", "Digital worker", "Digital employee", "AI teammate", "AI coworker"],
      serviceType: "AI systems that own a defined business function",
      description:
        "Building AI systems that own a defined job in a business — inbound calls, support volume, document processing, follow-up — integrated with existing systems and scoped to reversible decisions.",
      url: URL,
      provider: PROVIDER,
      areaServed: { "@type": "Country", name: "United States" },
    },
    faqSchema(URL, FAQS),
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "AI Employee", item: URL },
      ],
    },
  ],
};

export default function AiEmployeePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="AI Employee"
        title={
          <>
            An AI employee owns an outcome.
            <br />
            <span className="italic text-[var(--accent)]">That is the whole distinction.</span>
          </>
        }
        description="Not a chatbot that answers, and not a script that follows rules. A system given a job with a finish line — and the access it needs to actually finish it."
      />

      <div className="py-16 md:py-20 border-b border-[var(--border)]">
        <Container size="default">
          <p className="max-w-3xl text-[20px] md:text-[23px] leading-[1.6] text-foreground">
            An AI employee is a system that owns a defined job in your business rather than answering
            individual questions. It takes work in, reasons about it, acts across the software you
            already run, and hands off the cases it should not decide alone.
          </p>
          <p className="mt-6 max-w-3xl text-[17px] leading-[1.7] text-[var(--foreground-dim)]">
            The term is doing marketing work as much as technical work, and it is worth being clear
            about that. There is no new category of software here — it is an agent given
            a whole job instead of a single task. What makes the framing useful is that it forces the
            right question: what would this thing be accountable for?
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" size="lg" arrow>
              Work out which job to hand over
            </Button>
            <Button href="/ai-agents-for-business" variant="secondary" size="lg">
              See where they get used
            </Button>
          </div>
        </Container>
      </div>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="Scope"
            title="What can a digital worker actually own?"
            description="Four properties. A job needs all of them, not two."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {OWNS.map((c) => (
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
        </Container>
      </section>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="The honest part"
            title="Where does the employee metaphor break down?"
            description="In three places, and all three cost people money."
          />
          <div className="mt-12 max-w-3xl space-y-6 text-[17px] leading-[1.75] text-[var(--foreground-dim)]">
            <p>
              <span className="text-foreground">It does not learn your business by osmosis.</span> A
              new hire picks things up from overhearing, asking, and being corrected in the corridor.
              None of that happens here. Everything it knows has to be given to it deliberately, and
              anything that changes has to be given to it again.
            </p>
            <p>
              <span className="text-foreground">It cannot be held accountable.</span> When something
              goes wrong, a person owns it — that accountability is most of what an employee actually
              provides. An AI workforce moves the accountability rather than removing it, and if
              nobody has explicitly picked it up, it has quietly landed on whoever installed the
              thing.
            </p>
            <p>
              <span className="text-foreground">It does not degrade visibly.</span> A struggling
              person shows it. A system that has drifted out of step with your business keeps
              producing confident output that is slightly wrong, and nobody notices until a customer
              does.
            </p>
          </div>
          <p className="mt-8 max-w-2xl text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
            That last point is the argument for reading what it did every week — and for starting
            somewhere the errors are visible, like{" "}
            <Link href="/ai-receptionist" className="text-[var(--accent)] hover:underline">
              the phone
            </Link>
            . For how these get built,{" "}
            <Link href="/ai-agent-development" className="text-[var(--accent)] hover:underline">
              see the agent development process
            </Link>
            .
          </p>
        </Container>
      </section>

      <FaqSection heading="What do people ask about AI employees?" faqs={FAQS} />

      <section className="py-20 md:py-28">
        <Container size="default">
          <div className="rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-9 md:p-14">
            <h2 className="font-display text-3xl md:text-[42px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-2xl">
              Which job would you hand over first?
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[var(--foreground-dim)]">
              Twenty minutes. If the job is not defined enough to hand to a new starter, it is not
              ready for this either — and we will say so.
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
