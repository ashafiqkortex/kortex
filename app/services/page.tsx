import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { CustomSolutions } from "@/components/home/custom-solutions";
import { SERVICES } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { FaqSection, faqSchema, PROVIDER, type Faq } from "@/components/faq-section";

const SITE = "https://kortexconsulting.com";
const URL = `${SITE}/services`;

export const metadata: Metadata = {
  title: "AI Automation & Engineering Services | Kortex",
  description:
    "Workflow automation, custom AI agents, AI engineering, governance, and integrations. Five disciplines that compose into one real operational system.",
  alternates: { canonical: URL },
};

const FAQS: Faq[] = [
  {
    q: "Do we have to buy all five disciplines?",
    a: "No, and almost nobody does. They are listed separately because they are distinct skills, but real problems cut across them — a broken quoting process is usually a workflow problem, a data problem, and an integration problem at once. We scope to the problem, not the category.",
  },
  {
    q: "What does an engagement cost?",
    a: "It depends on scope, but the structure matters more than the number. We would rather start with a small, paid, buildable piece than a long discovery phase, because that caps your downside if the fit turns out to be wrong.",
  },
  {
    q: "Do we need to replace our current software?",
    a: "Almost never. The work is usually to make the systems you already run behave like one system, rather than to swap them out. Replacement projects are slow, expensive, and rarely the actual constraint.",
  },
  {
    q: "How do you handle it when something breaks?",
    a: "Systems are built to fail loudly rather than silently — the failure mode we see most often in inherited automation is a rule that quietly stopped firing months ago and nobody noticed. Logging and alerting are part of the build, not an add-on.",
  },
  {
    q: "What if we do not know which service we need?",
    a: "That is the normal starting position and it is what the first conversation is for. Most people arrive describing a symptom — quotes take too long, nobody knows what is on site today — and the discipline that fixes it is our problem to work out, not yours.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "AI Automation and Engineering Services",
      serviceType: "AI engineering, automation, and systems integration",
      description:
        "Five composable disciplines — operational workflows, AI agents, operational intelligence, AI oversight, and connected operations — engineered into one working system.",
      url: URL,
      provider: PROVIDER,
      areaServed: { "@type": "Country", name: "United States" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Kortex services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.tagline,
            url: `${URL}#${s.slug}`,
          },
        })),
      },
    },
    faqSchema(URL, FAQS),
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Services · 05"
        title={
          <>
            Five disciplines. <span className="italic text-[var(--accent)]">One system.</span>
          </>
        }
        description="Real operational problems don't respect service categories. A broken sales funnel is also a data problem, an agent problem, and an integration problem. We engineer across the whole surface."
      />

      <div className="py-16 md:py-24">
        <Container size="wide">
          <div className="space-y-24 md:space-y-32">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <section
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-24 grid gap-10 lg:gap-16 lg:grid-cols-[1fr_1.3fr]"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--border-bright)] bg-[var(--surface)] text-[var(--accent)]">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--muted)]">
                          Service · 0{i + 1}
                        </div>
                        <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] mt-1">
                          {service.slug.replace(/-/g, " · ")}
                        </div>
                      </div>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] text-foreground">
                      {service.name}
                    </h2>
                    <p className="mt-5 text-[19px] italic text-[var(--accent)]">
                      {service.tagline}
                    </p>
                  </div>

                  <div>
                    <p className="text-[16px] leading-relaxed text-[var(--foreground-dim)]">
                      {service.deep}
                    </p>
                    <div className="mt-10 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 overflow-hidden">
                      <div className="px-5 py-3 border-b border-[var(--border)] text-[12px] font-mono uppercase tracking-widest text-[var(--muted)]">
                        We build
                      </div>
                      <ul className="divide-y divide-[var(--border)]">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-3 px-5 py-3.5 text-[15px] text-[var(--foreground-dim)]"
                          >
                            <Check
                              size={14}
                              strokeWidth={2}
                              className="mt-1 text-[var(--accent)] shrink-0"
                            />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* Decision point — bridge from the five into the systems capstone */}
          <div className="mt-16 md:mt-24 rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
            <div className="relative">
              <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-[-0.02em] text-foreground max-w-2xl mx-auto">
                Not sure which of the five fits? That usually means it&apos;s more than one.
              </h3>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button href="/contact" size="lg" arrow>
                  Book a discovery call
                </Button>
                <Button href="/#diagnostic" size="lg" variant="secondary">
                  Run the AI diagnostic
                </Button>
              </div>
            </div>
          </div>

          {/* Custom Solutions — capstone that closes the page */}
          <CustomSolutions id="custom" asSection={false} />
        </Container>
      </div>

      <div className="pb-4">
        <Container size="wide">
          <p className="max-w-3xl text-[16px] leading-[1.75] text-[var(--foreground-dim)]">
            Several of these have a page of their own, because they are where most
            engagements start:{" "}
            <Link href="/ai-receptionist" className="text-[var(--accent)] hover:underline">
              the AI receptionist
            </Link>
            ,{" "}
            <Link href="/ai-customer-service" className="text-[var(--accent)] hover:underline">
              AI customer service
            </Link>
            ,{" "}
            <Link href="/ai-agent-development" className="text-[var(--accent)] hover:underline">
              AI agent development
            </Link>
            , and{" "}
            <Link href="/ai-employee" className="text-[var(--accent)] hover:underline">
              handing a whole job to an AI employee
            </Link>
            . If you are in the DC area, we also work{" "}
            <Link
              href="/ai-consultant-washington-dc"
              className="text-[var(--accent)] hover:underline"
            >
              on site across the metro
            </Link>
            .
          </p>
        </Container>
      </div>

      <FaqSection heading="What do people ask about the work?" faqs={FAQS} />
    </>
  );
}
