import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Calendar, Mail, Clock, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Kortex Consulting — AI Consultants in Bethesda MD",
  description:
    "Call (301) 889-8546, book a 20-minute discovery call, or send us a message. We'll tell you honestly whether we can help.",
  alternates: { canonical: "https://kortexconsulting.com/contact" },
};

const HIGHLIGHTS = [
  {
    icon: Phone,
    label: "(301) 889-8546",
    href: "tel:+13018898546",
    body: "Call or text. Fastest way to reach us during business hours.",
  },
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
    href: "mailto:hello@kortexconsulting.com",
    body: "Prefer email? We respond within one business day.",
  },
];

const SITE = "https://kortexconsulting.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kortex Consulting",
  url: SITE,
  telephone: "+1-301-889-8546",
  email: "hello@kortexconsulting.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6604 Millwood Rd",
    addressLocality: "Bethesda",
    addressRegion: "MD",
    postalCode: "20817",
    addressCountry: "US",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                          {h.href ? (
                            <a
                              href={h.href}
                              className="hover:text-[var(--accent)] transition-colors"
                            >
                              {h.label}
                            </a>
                          ) : (
                            h.label
                          )}
                        </div>
                        <div className="mt-1 text-[14px] text-[var(--foreground-dim)] leading-relaxed">
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

              <div className="mt-8 flex gap-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40">
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-bright)] bg-[var(--background)] text-[var(--accent)]">
                  <MapPin size={16} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-[15px] text-foreground font-medium">
                    Kortex Consulting
                  </div>
                  <address className="mt-1 not-italic text-[14px] text-[var(--foreground-dim)] leading-relaxed">
                    6604 Millwood Rd
                    <br />
                    Bethesda, MD 20817
                  </address>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--foreground-dim)] mb-4">
                Or send a message
              </div>
              <ContactForm />

              <p className="mt-8 text-[15px] leading-[1.75] text-[var(--foreground-dim)]">
                Not sure what you need yet? Most people arrive at one of four
                things:{" "}
                <Link href="/ai-receptionist" className="text-[var(--accent)] hover:underline">
                  an AI receptionist
                </Link>{" "}
                when the phone is the bottleneck,{" "}
                <Link href="/ai-customer-service" className="text-[var(--accent)] hover:underline">
                  AI customer service
                </Link>{" "}
                when support volume is,{" "}
                <Link href="/ai-agent-development" className="text-[var(--accent)] hover:underline">
                  a custom agent
                </Link>{" "}
                when the work spans several systems, or{" "}
                <Link href="/ai-consulting" className="text-[var(--accent)] hover:underline">
                  a broader engagement
                </Link>{" "}
                when you know something is slow but not what.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
