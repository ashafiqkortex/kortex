import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { SERVICES } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Kortex Consulting",
  description:
    "Workflow automation, custom agents, AI engineering, AI governance, and integrations. Five disciplines that compose into real operational systems.",
};

export default function ServicesPage() {
  return (
    <>
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
                    <p className="text-[16.5px] leading-relaxed text-[var(--foreground-dim)]">
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
                            className="flex items-start gap-3 px-5 py-3.5 text-[14.5px] text-[var(--foreground-dim)]"
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

          <div className="mt-24 md:mt-32 rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-10 md:p-14 text-center relative overflow-hidden">
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
        </Container>
      </div>
    </>
  );
}
