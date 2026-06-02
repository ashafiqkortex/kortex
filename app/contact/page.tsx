import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Calendar, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Kortex Consulting",
  description:
    "Book a 20-minute discovery call or send us a message. We'll tell you honestly whether we can help.",
};

const HIGHLIGHTS = [
  {
    icon: Calendar,
    label: "20-minute discovery",
    body: "Direct, no pitch deck. Three or four questions to see if we're a fit.",
  },
  {
    icon: Clock,
    label: "First prototype, week one",
    body: "If we take the engagement, you see working software on day seven.",
  },
  {
    icon: Mail,
    label: "hello@kortexconsulting.com",
    body: "Prefer email? We respond within one business day.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s find where your operations
            <br />
            <span className="italic text-[var(--accent)]">are lying to you.</span>
          </>
        }
        description="The fastest path is a 20-minute discovery call. We'll ask three or four questions about your operations and tell you honestly whether we can help."
      />

      <div className="py-16 md:py-24">
        <Container size="default">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="space-y-5">
                {HIGHLIGHTS.map((h) => {
                  const Icon = h.icon;
                  return (
                    <div
                      key={h.label}
                      className="flex gap-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40"
                    >
                      <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-bright)] bg-[var(--background)] text-[var(--accent)]">
                        <Icon size={16} strokeWidth={1.75} />
                      </div>
                      <div>
                        <div className="text-[15px] text-foreground font-medium">
                          {h.label}
                        </div>
                        <div className="mt-1 text-[13.5px] text-[var(--foreground-dim)] leading-relaxed">
                          {h.body}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Booking placeholder */}
              <div className="mt-8 rounded-xl border border-dashed border-[var(--border-bright)] bg-[var(--background-elev)]/60 p-8 text-center">
                <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--foreground-dim)] mb-2">
                  Direct booking
                </div>
                <div className="font-display text-xl text-foreground">
                  Cal.com embed goes here
                </div>
                <p className="mt-3 text-[14px] text-[var(--muted)]">
                  Send us your Cal.com link and we&apos;ll wire it in.
                </p>
              </div>
            </div>

            <div>
              <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--foreground-dim)] mb-4">
                Or send a message
              </div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
