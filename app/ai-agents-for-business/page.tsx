import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { FaqSection, faqSchema, PROVIDER, type Faq } from "@/components/faq-section";
import { PhoneCall, Headphones, Receipt, TrendingUp } from "lucide-react";

const SITE = "https://kortexconsulting.com";
const URL = `${SITE}/ai-agents-for-business`;

export const metadata: Metadata = {
  title: "AI Agents for Business — Built Into Your Ops | Kortex",
  description:
    "Where AI agents actually earn their place in a business: front desk, support, back office, and sales follow-up. Plus the jobs they are still bad at.",
  alternates: { canonical: URL },
  openGraph: {
    title: "AI Agents for Business — Built Into Your Ops | Kortex",
    description:
      "Practical uses for AI agents in business operations — and an honest account of where they still fall short.",
    url: URL,
    type: "website",
  },
};

const USES = [
  {
    icon: PhoneCall,
    title: "The front desk",
    body: "Answering every inbound call, qualifying the caller, and booking into a real calendar. The most common first agent, because the cost of missing calls is easy to measure and impossible to argue with.",
  },
  {
    icon: Headphones,
    title: "Inbound support",
    body: "Resolving the repetitive share of tickets end to end and escalating the rest with full context. Works where the systems of record are reachable; fails where the agent has to guess.",
  },
  {
    icon: Receipt,
    title: "The back office",
    body: "Reading documents, reconciling them against records, and flagging what does not match. Unglamorous, high volume, and usually the fastest payback in the building.",
  },
  {
    icon: TrendingUp,
    title: "Sales follow-up",
    body: "Chasing the leads that go quiet, on a schedule nobody keeps manually. AI agents for sales are less about writing clever messages and more about the follow-up actually happening.",
  },
];

const FAQS: Faq[] = [
  {
    q: "What are AI agents for business?",
    a: "Business AI agents are systems that carry out multi-step work inside your operations — answering calls, handling support tickets, processing documents, following up on leads — by reading from and writing to the software you already run. Unlike a chatbot bolted onto a website, they take actions rather than just producing answers.",
  },
  {
    q: "Where do business AI agents deliver the fastest return?",
    a: "Wherever the work is high volume, repetitive, and currently done by a person moving information between systems. Call handling and document processing usually pay back fastest because the current cost is visible and the success measure is unambiguous.",
  },
  {
    q: "Are AI agents worth it for a small business?",
    a: "Often more than for a large one, because a small business feels each missed call and each dropped follow-up directly in revenue. An AI agent for small business tends to start with a single job — usually the phone — rather than an operations-wide programme.",
  },
  {
    q: "What are AI agents still bad at?",
    a: "Anything requiring genuine judgement about people, anything where being wrong is expensive and hard to reverse, and anything the business has never actually defined. They are also poor at work that changes constantly, because every change means re-testing what the agent does.",
  },
  {
    q: "How many agents does a business need?",
    a: "Fewer than most vendors suggest. One agent doing one job well beats five half-configured ones, and the second is much easier once the integration work from the first is in place. Start where the pain is measurable.",
  },
  {
    q: "What is the difference between enterprise AI agents and this?",
    a: "Mostly the surrounding machinery — procurement, compliance review, and integration with systems that have decades of history. The agent itself is not fundamentally different. Smaller businesses can usually move faster for exactly that reason.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "AI Agents for Business",
      alternateName: [
        "Business AI agents",
        "AI agents for small business",
        "Enterprise AI agents",
        "AI agents for sales",
        "AI agents for operations",
      ],
      serviceType: "AI agents for business operations",
      description:
        "AI agents built into business operations — call handling, inbound support, back-office document processing, and sales follow-up — integrated with existing systems of record.",
      url: URL,
      provider: PROVIDER,
      areaServed: { "@type": "Country", name: "United States" },
    },
    faqSchema(URL, FAQS),
  ],
};

export default function AiAgentsForBusinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="AI Agents for Business"
        title={
          <>
            Four places agents earn
            <br />
            <span className="italic text-[var(--accent)]">their keep. And one they don&apos;t.</span>
          </>
        }
        description="A practical account of where agents work inside a business, what they cost you when misapplied, and how to pick the first one."
      />

      <div className="py-16 md:py-20 border-b border-[var(--border)]">
        <Container size="default">
          <p className="max-w-3xl text-[20px] md:text-[23px] leading-[1.6] text-foreground">
            AI agents for business are systems that carry out multi-step work inside your operations
            — answering calls, resolving tickets, processing documents, chasing follow-ups — by
            reading from and writing to the software you already run.
          </p>
          <p className="mt-6 max-w-3xl text-[17px] leading-[1.7] text-[var(--foreground-dim)]">
            The interesting question is not what they can do. It is which single job is worth doing
            first, because the second one is always easier than the first and the first is where most
            programmes stall.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" size="lg" arrow>
              Work out your first one
            </Button>
            <Button href="/ai-agent-development" variant="secondary" size="lg">
              How we build them
            </Button>
          </div>
        </Container>
      </div>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="Where they work"
            title="Where do business AI agents actually pay off?"
            description="Four jobs where the return is measurable within a quarter."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {USES.map((c) => {
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
            Sales follow-up has a page of its own too, including an honest read on when to{" "}
            <Link href="/ai-sdr" className="text-[var(--accent)] hover:underline">
              build an AI SDR rather than buy one
            </Link>
            . The first two also have pages —{" "}
            <Link href="/ai-receptionist" className="text-[var(--accent)] hover:underline">
              the AI receptionist
            </Link>{" "}
            and{" "}
            <Link href="/ai-customer-service" className="text-[var(--accent)] hover:underline">
              AI customer service
            </Link>{" "}
            — because they are where most businesses start.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="Where they don't"
            title="What should you keep away from agents?"
            description="One category, and it accounts for most of the disappointment."
          />
          <div className="mt-12 max-w-3xl space-y-6 text-[17px] leading-[1.75] text-[var(--foreground-dim)]">
            <p>
              Work that has never actually been defined. If two people in your business do the same
              task differently and neither can say which is correct, an agent will not settle it — it
              will pick one, apply it at speed, and make the inconsistency someone else&apos;s problem
              downstream.
            </p>
            <p>
              This is the failure mode behind most stalled AI projects, and it is rarely diagnosed
              honestly, because &quot;the process was undefined&quot; is a harder thing to say than
              &quot;the technology was not ready&quot;.{" "}
              <span className="text-foreground">
                Agents amplify structure; they do not supply it
              </span>
              .
            </p>
            <p>
              The practical test before building anything: can you write down what a correct outcome
              looks like? If not, that is the first piece of work, and it is not an AI project.
            </p>
          </div>
        </Container>
      </section>

      <FaqSection heading="What do business owners ask?" faqs={FAQS} />

      <section className="py-20 md:py-28">
        <Container size="default">
          <div className="rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-9 md:p-14">
            <h2 className="font-display text-3xl md:text-[42px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-2xl">
              Which one should be first?
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[var(--foreground-dim)]">
              Twenty minutes on your operations and we will tell you where an agent would pay for
              itself — or that none of them would, yet.
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
