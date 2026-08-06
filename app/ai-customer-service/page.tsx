import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { FaqSection, faqSchema, PROVIDER, type Faq } from "@/components/faq-section";
import { Inbox, Timer, GitBranch, LineChart } from "lucide-react";

const SITE = "https://kortexconsulting.com";
const URL = `${SITE}/ai-customer-service`;

export const metadata: Metadata = {
  title: "AI Customer Service & Call Center Automation | Kortex",
  description:
    "AI customer service that resolves tickets instead of deflecting them. Built into your helpdesk and phone system, with clean handover to your team when it matters.",
  alternates: { canonical: URL },
  openGraph: {
    title: "AI Customer Service & Call Center Automation | Kortex",
    description:
      "AI customer service and contact center AI that resolves the repetitive volume and hands the rest to your team with full context.",
    url: URL,
    type: "website",
  },
};

const HANDLES = [
  {
    icon: Inbox,
    title: "The repetitive 60%",
    body: "Order status, appointment changes, password resets, billing questions, opening hours. High volume, low judgement, and the reason your team never gets to the hard tickets.",
  },
  {
    icon: Timer,
    title: "First response, instantly",
    body: "Every ticket and call gets an answer immediately instead of joining a queue. First response time stops being a metric you apologise for.",
  },
  {
    icon: GitBranch,
    title: "Handover with context",
    body: "When it escalates, your agent receives the full conversation, the customer record, and what has already been tried — not a cold transfer that makes the customer repeat themselves.",
  },
  {
    icon: LineChart,
    title: "Every conversation, measured",
    body: "Resolution rate, escalation reasons, and the questions nobody has documented yet. The system tells you what your customers keep asking and what your product keeps breaking.",
  },
];

const FAQS: Faq[] = [
  {
    q: "What is AI customer service?",
    a: "AI customer service is software that handles inbound support conversations — over chat, email, or phone — by understanding what the customer is asking, retrieving the answer from your own systems, and either resolving the issue or routing it to a human with the full context attached. Unlike a scripted chatbot, it works from your actual data rather than a decision tree.",
  },
  {
    q: "How much of our support volume can AI actually handle?",
    a: "It depends entirely on how repetitive your volume is. Businesses with a long tail of order-status, scheduling, and account questions see the largest share handled end to end. The honest answer is that nobody can quote you a percentage before looking at your ticket history — which is why we start by reading it.",
  },
  {
    q: "How is this different from a chatbot?",
    a: "A chatbot follows a decision tree you configured and fails the moment a customer phrases something unexpectedly. Contact center AI works from your systems of record — order data, account status, appointment history — and can take action, not just answer. The difference customers notice is that one deflects them and the other solves the problem.",
  },
  {
    q: "What happens with an angry customer?",
    a: "It escalates immediately. Frustration detection is an escalation trigger, not something to argue with. The worst outcome in customer service automation is trapping an upset customer in a loop, so the rule we build to is simple: when in doubt, hand it to a person.",
  },
  {
    q: "Does this replace our support team?",
    a: "In practice it changes what they spend the day on rather than how many of them you need. The repetitive volume stops reaching them, which means the same team handles the complex work that actually needs judgement — and stops burning out on password resets.",
  },
  {
    q: "What does it connect to?",
    a: "Your helpdesk, your phone system, and whichever system holds the truth about the customer — orders, bookings, accounts. If the AI cannot read your systems it can only guess, and a guessing support agent is worse than no support agent.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "AI Customer Service",
      alternateName: [
        "AI customer support",
        "Contact center AI",
        "AI call center software",
        "Conversational AI for customer service",
        "AI customer service agent",
      ],
      serviceType: "AI customer service and contact center automation",
      description:
        "AI customer service and contact center automation built into your helpdesk, phone system, and systems of record — resolving repetitive volume and escalating the rest with full context.",
      url: URL,
      provider: PROVIDER,
      areaServed: { "@type": "Country", name: "United States" },
    },
    faqSchema(URL, FAQS),
  ],
};

export default function AiCustomerServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="AI Customer Service"
        title={
          <>
            Support that resolves,
            <br />
            <span className="italic text-[var(--accent)]">instead of deflecting.</span>
          </>
        }
        description="Contact center AI wired into your helpdesk and your systems of record — so the repetitive volume never reaches your team, and everything else arrives with context."
      />

      <div className="py-16 md:py-20 border-b border-[var(--border)]">
        <Container size="default">
          <p className="max-w-3xl text-[20px] md:text-[23px] leading-[1.6] text-foreground">
            AI customer service is software that handles inbound support conversations — chat, email,
            or phone — by working out what the customer needs, pulling the answer from your own
            systems, and either resolving it or handing it to a person with the full history
            attached.
          </p>
          <p className="mt-6 max-w-3xl text-[17px] leading-[1.7] text-[var(--foreground-dim)]">
            Most of it fails for one reason: it gets installed as a wall between the
            customer and the help they wanted. Deflection rate goes up, satisfaction goes down, and
            the team ends up handling the same tickets a day later and angrier. Contact center AI
            only works when it can read the systems that hold the truth.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" size="lg" arrow>
              Talk through your ticket volume
            </Button>
            <Button href="/ai-receptionist" variant="secondary" size="lg">
              Just need calls answered?
            </Button>
          </div>
        </Container>
      </div>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="Scope"
            title="What can AI actually handle in customer service?"
            description="Not everything, and any vendor who says otherwise is selling you a disappointment."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {HANDLES.map((c) => {
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
        </Container>
      </section>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="Failure modes"
            title="Where does customer service automation go wrong?"
            description="Four ways we have seen it fail, and what we do differently."
          />
          <div className="mt-12 space-y-px bg-[var(--border)] rounded-xl overflow-hidden border border-[var(--border)]">
            {[
              {
                bad: "It is measured on deflection",
                good: "Measure resolution. A deflected customer is a customer who calls back tomorrow, angrier, and tells someone about it.",
              },
              {
                bad: "It cannot see the customer record",
                good: "Wire it into the systems of record first. An AI customer service agent that cannot look up an order is a search box with manners.",
              },
              {
                bad: "Escalation loses the conversation",
                good: "Hand over the full transcript, the account, and what was already tried. Making a customer repeat themselves undoes any goodwill the speed bought.",
              },
              {
                bad: "Nobody reviews what it said",
                good: "Read the transcripts weekly, especially the escalations. That log is the most honest product feedback your business will ever get.",
              },
            ].map((r) => (
              <div key={r.bad} className="bg-[var(--background)] p-7 md:p-8 md:flex md:gap-10">
                <div className="md:w-64 shrink-0">
                  <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--muted)]">
                    Common failure
                  </div>
                  <div className="mt-2 text-[17px] text-foreground">{r.bad}</div>
                </div>
                <p className="mt-4 md:mt-0 text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
                  {r.good}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
            The same principle runs through everything we build — see{" "}
            <Link href="/services" className="text-[var(--accent)] hover:underline">
              how we engineer operational AI systems
            </Link>{" "}
            or{" "}
            <Link href="/case-studies/truth-layer" className="text-[var(--accent)] hover:underline">
              what happens when AI cannot see the systems of record
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="Integration"
            title="What does AI call center software need to connect to?"
            description="This is the question that decides whether it works, and the one most demos skip."
          />
          <div className="mt-12 max-w-3xl space-y-6 text-[17px] leading-[1.75] text-[var(--foreground-dim)]">
            <p>
              Contact center AI is only as good as what it can see. An agent that cannot look up an
              order, check an account balance, or read a booking history is guessing — and a
              confident guess is worse for a customer than an honest &quot;let me get someone&quot;.
            </p>
            <p>
              In practice that means three connections: the helpdesk where tickets live, the phone
              system calls arrive on, and whichever system holds the truth about the customer. Most
              call center AI software sold as a drop-in only ever touches the first one, which is why
              it plateaus at answering opening hours and shipping policy.
            </p>
            <p>
              We build the integration layer first and the conversation second. It is slower to
              stand up and it is the reason the thing still works in month six.
            </p>
          </div>
        </Container>
      </section>

      <FaqSection heading="What do support leads ask before starting?" faqs={FAQS} />

      <section className="py-20 md:py-28">
        <Container size="default">
          <div className="rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-9 md:p-14">
            <h2 className="font-display text-3xl md:text-[42px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-2xl">
              Start with your ticket history.
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[var(--foreground-dim)]">
              Send us a month of tickets and we will tell you what share is genuinely automatable —
              and what would break if you tried.
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
