import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { FaqSection, faqSchema, PROVIDER, type Faq } from "@/components/faq-section";

const SITE = "https://kortexconsulting.com";
const URL = `${SITE}/ai-agent-development`;

export const metadata: Metadata = {
  title: "AI Agent Development Company | Custom AI Agents",
  description:
    "Custom AI agents built to act inside your systems, not just answer questions. Scoped tightly, wired to your data, and handed over with the guardrails documented.",
  alternates: { canonical: URL },
  openGraph: {
    title: "AI Agent Development Company | Custom AI Agents",
    description:
      "AI agent development that starts with the boundary, not the model. Custom agents that read, decide, and act inside your systems.",
    url: URL,
    type: "website",
  },
};

const LAYERS = [
  {
    n: "01",
    title: "The boundary",
    body: "What is the agent allowed to do, and what must it never do without a human? This gets written down before any code exists. Autonomous AI agents fail on scope far more often than on capability.",
  },
  {
    n: "02",
    title: "The context",
    body: "What can it see? An agent reasoning over stale or partial data will make confident, wrong decisions. Most of the build is here, and it is the part nobody demos.",
  },
  {
    n: "03",
    title: "The actions",
    body: "What can it change? Every write path gets its own permissions, its own audit trail, and in most cases a reversal path. An agent that can only read is a report; an agent that can act needs brakes.",
  },
  {
    n: "04",
    title: "The evidence",
    body: "Every decision logged with the reasoning and the inputs. When it gets something wrong — and it will — you need to be able to see why without guessing.",
  },
];

const FAQS: Faq[] = [
  {
    q: "What is an AI agent?",
    a: "An AI agent is software that pursues a goal across several steps rather than answering one question. It decides what to do next, uses tools and systems to do it, and adapts when something does not go as expected. The distinction from a chatbot is that an agent takes actions in your systems; a chatbot produces text.",
  },
  {
    q: "When do you actually need a custom AI agent?",
    a: "When the work involves judgement across several systems and the path changes case by case. If the process is the same every time, a workflow automation is cheaper, faster, and far easier to debug. Reaching for agents where a rule would do is the most common and most expensive mistake in this space.",
  },
  {
    q: "How is an AI agent different from workflow automation?",
    a: "Automation follows a path you defined. An agent decides the path. That flexibility is genuinely useful for messy, exception-heavy work — and it is a liability for anything where you need the same outcome every time. Most real systems end up as a mix, with agents handling the exceptions and rules handling the rest.",
  },
  {
    q: "How long does AI agent development take?",
    a: "A narrowly scoped agent doing one job against real data is usually a matter of weeks. What extends the timeline is almost never the model — it is access to the systems it needs to read and write, and agreeing what it is permitted to do without a human.",
  },
  {
    q: "What stops it from doing something damaging?",
    a: "Explicit boundaries, permissions on every write path, and a human in the loop wherever the cost of being wrong is high. We would rather ship an agent that escalates too often in month one and relax it against evidence than the reverse.",
  },
  {
    q: "Do we own what you build?",
    a: "Yes — the code, the prompts, and the accounts. An AI agent development company that keeps you on infrastructure you cannot take with you has sold you a dependency.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "AI Agent Development",
      alternateName: [
        "AI agent development services",
        "AI agent development company",
        "Custom AI agents",
        "Autonomous AI agents",
      ],
      serviceType: "Custom AI agent design and development",
      description:
        "Custom AI agent development — scoped boundaries, wired to your systems of record, with permissioned actions and full decision logging.",
      url: URL,
      provider: PROVIDER,
      areaServed: { "@type": "Country", name: "United States" },
    },
    faqSchema(URL, FAQS),
  ],
};

export default function AiAgentDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="AI Agent Development"
        title={
          <>
            Agents fail on scope,
            <br />
            <span className="italic text-[var(--accent)]">not on intelligence.</span>
          </>
        }
        description="We build custom AI agents that act inside your systems — starting with what they are not allowed to do, and working backwards from there."
      />

      <div className="py-16 md:py-20 border-b border-[var(--border)]">
        <Container size="default">
          <p className="max-w-3xl text-[20px] md:text-[23px] leading-[1.6] text-foreground">
            An AI agent is software that pursues a goal over several steps — deciding what to do
            next, using your systems to do it, and adapting when something does not go to plan. AI
            agent development is mostly the work of deciding what it may touch, what it may change,
            and where a human has to stay in the loop.
          </p>
          <p className="mt-6 max-w-3xl text-[17px] leading-[1.7] text-[var(--foreground-dim)]">
            The models are a commodity and getting better without your involvement. What decides
            whether custom AI agents survive contact with a real business is the unglamorous part:
            access, permissions, logging, and an honest answer to what happens when it is wrong.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" size="lg" arrow>
              Scope an agent with us
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
            eyebrow="How we build"
            title="What goes into an AI agent that survives production?"
            description="Four layers. The model is not one of them."
          />
          <div className="mt-14 space-y-px bg-[var(--border)] rounded-xl overflow-hidden border border-[var(--border)]">
            {LAYERS.map((s) => (
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
            eyebrow="When not to"
            title="When should you not build an agent?"
            description="Most of the time, honestly."
          />
          <div className="mt-12 max-w-3xl space-y-6 text-[17px] leading-[1.75] text-[var(--foreground-dim)]">
            <p>
              If the process runs the same way every time, you want automation, not autonomy. A rule
              is cheaper to build, cheaper to run, and enormously easier to debug at 2am. Choosing an
              agent for deterministic work buys you unpredictability you did not need.
            </p>
            <p>
              If the underlying process is undefined, an agent will not rescue it. It will make the
              confusion faster and harder to trace.{" "}
              <span className="text-foreground">
                Agents amplify whatever structure already exists
              </span>
              , including its absence.
            </p>
            <p>
              Where they genuinely earn their place is exception-heavy work spanning several systems
              — the cases a human currently handles by opening four tabs and using judgement. That is
              the shape worth building for.
            </p>
          </div>
          <p className="mt-8 max-w-2xl text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
            For the deterministic half of the problem, see{" "}
            <Link href="/services" className="text-[var(--accent)] hover:underline">
              workflow automation and integrations
            </Link>
            . For a worked example of getting the context layer wrong, read{" "}
            <Link href="/case-studies/truth-layer" className="text-[var(--accent)] hover:underline">
              the Truth Layer case study
            </Link>
            .
          </p>
        </Container>
      </section>

      <FaqSection heading="What do people ask about agents?" faqs={FAQS} />

      <section className="py-20 md:py-28">
        <Container size="default">
          <div className="rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-9 md:p-14">
            <h2 className="font-display text-3xl md:text-[42px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-2xl">
              Bring us the messy process.
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[var(--foreground-dim)]">
              Twenty minutes. If a rule would do the job, we will tell you that and save you the
              build.
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
