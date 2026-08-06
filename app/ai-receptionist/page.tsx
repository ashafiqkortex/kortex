import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { PhoneCall, CalendarCheck, MessageSquare, ClipboardList, Check, X } from "lucide-react";

const SITE = "https://kortexconsulting.com";
const URL = `${SITE}/ai-receptionist`;

export const metadata: Metadata = {
  title: "AI Receptionist — Answer Every Call 24/7 | Kortex",
  description:
    "An AI receptionist answers every call 24/7, qualifies the caller, and books the job. Stop losing the 27% of calls that go unanswered to a competitor.",
  alternates: { canonical: URL },
  openGraph: {
    title: "AI Receptionist — Answer Every Call 24/7 | Kortex",
    description:
      "An AI receptionist answers every call, qualifies the caller, and books the job — 24/7, in your voice, wired into your scheduling system.",
    url: URL,
    type: "website",
  },
};

/* ---------------------------------------------------------------- content */

const CAPABILITIES = [
  {
    icon: PhoneCall,
    title: "Answers on the first ring, at any hour",
    body: "Every call is picked up — 2am, mid-storm, or while your team is on a job. No hold music, no voicemail, no lost caller.",
  },
  {
    icon: ClipboardList,
    title: "Qualifies before it books",
    body: "It asks the questions your intake form asks: what's wrong, where, how urgent, are you an existing customer. Emergencies get routed to a human immediately.",
  },
  {
    icon: CalendarCheck,
    title: "Books straight into your calendar",
    body: "The appointment lands in the scheduling system you already run, against real availability — not a callback promise someone has to honour later.",
  },
  {
    icon: MessageSquare,
    title: "Texts back the ones it can't close",
    body: "A caller who hangs up gets an SMS within seconds. Missed call text back recovers the leads an automated phone answering service would otherwise lose for good.",
  },
];

const COMPARISON = [
  { point: "Answers after hours and at weekends", ai: true, human: "Usually an upcharge" },
  { point: "Never puts a caller on hold", ai: true, human: false },
  { point: "Knows your services, pricing, and service area", ai: true, human: false },
  { point: "Books into your scheduling system directly", ai: true, human: "Rarely" },
  { point: "Cost scales with call volume", ai: false, human: true },
  { point: "Handles a call-volume spike without warning", ai: true, human: false },
];

const STEPS = [
  {
    n: "01",
    title: "We learn how you actually take a call",
    body: "Your services, your service area, what makes a job urgent, what you charge to show up, and which calls must reach a human. This is a conversation, not a form.",
  },
  {
    n: "02",
    title: "We wire it into your systems",
    body: "The agent connects to your phone number and your scheduling system so bookings are real bookings, against real availability — not a message someone has to action later.",
  },
  {
    n: "03",
    title: "You listen to every call for the first week",
    body: "Full transcripts and recordings from day one. We tune the script against real calls before it handles anything unsupervised.",
  },
];

const FAQS = [
  {
    q: "What is an AI receptionist?",
    a: "An AI receptionist is a voice agent that answers your business phone, holds a natural conversation with the caller, qualifies what they need, and books the appointment into your scheduling system. It works 24 hours a day and handles unlimited simultaneous calls, so nobody reaches a voicemail or a busy tone.",
  },
  {
    q: "How is an AI phone answering service different from a traditional one?",
    a: "A traditional answering service takes a message and passes it on — you still have to call the person back, and by then most have already called a competitor. An AI answering service completes the job on the call: it answers the caller's questions, checks real availability, and books the appointment before they hang up.",
  },
  {
    q: "Will callers know they are talking to AI?",
    a: "Most callers do not notice, and we do not recommend hiding it. The agent identifies itself as a virtual assistant if asked. What callers actually care about is that someone picked up and solved their problem, not who was on the other end.",
  },
  {
    q: "What happens on a call the AI cannot handle?",
    a: "It transfers. You define the escalation rules — genuine emergencies, existing customers with a complaint, anything outside the script — and those calls route to a human immediately with the context already gathered.",
  },
  {
    q: "Do I have to replace my current phone system or software?",
    a: "No. The agent sits in front of the number you already publish and connects to the scheduling system you already run. Nothing gets ripped out and your number does not change.",
  },
  {
    q: "How much does an AI receptionist cost?",
    a: "Pricing depends on call volume and how much the agent has to do — answering and taking a message is cheaper than qualifying, booking, and writing back into your scheduling system. The number that matters is the comparison: work out what one booked job is worth to you, then how many calls you miss in a month. For most businesses taking meaningful inbound volume, an automated call answering service pays for itself well before it covers a receptionist's salary.",
  },
  {
    q: "How long does it take to go live?",
    a: "Typically a couple of weeks from the first conversation to handling live calls. Most of that time is spent learning how your business actually answers the phone and tuning the agent against real calls, not on technical setup.",
  },
];

/* ----------------------------------------------------------------- schema */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "AI Receptionist",
      alternateName: [
        "AI answering service",
        "AI phone answering service",
        "AI phone receptionist",
        "AI call answering service",
        "Automated answering service",
        "Virtual assistant answering service",
        "AI voice agent",
      ],
      serviceType: "AI receptionist and phone answering service",
      description:
        "An AI voice agent that answers every inbound call 24/7, qualifies the caller, books the appointment into your scheduling system, and texts back callers who hang up.",
      url: URL,
      provider: {
        "@type": "Organization",
        name: "Kortex Consulting",
        url: SITE,
        telephone: "+1-301-889-8546",
        address: {
          "@type": "PostalAddress",
          streetAddress: "6604 Millwood Rd",
          addressLocality: "Bethesda",
          addressRegion: "MD",
          postalCode: "20817",
          addressCountry: "US",
        },
      },
      areaServed: { "@type": "Country", name: "United States" },
      audience: {
        "@type": "BusinessAudience",
        name: "Small and mid-sized businesses that take inbound calls",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "AI Receptionist", item: URL },
      ],
    },
  ],
};

/* ------------------------------------------------------------------- page */

export default function AiReceptionistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="AI Receptionist"
        title={
          <>
            An AI receptionist that answers
            <br />
            <span className="italic text-[var(--accent)]">every call you are missing.</span>
          </>
        }
        description="Picks up on the first ring, qualifies the caller, and books the job into your calendar — at 2am, on a Sunday, and while your team is already on a call."
      />

      {/* Answer-first definition — AEO */}
      <div className="py-16 md:py-20 border-b border-[var(--border)]">
        <Container size="default">
          <p className="max-w-3xl text-[20px] md:text-[23px] leading-[1.6] text-foreground">
            An AI receptionist is an AI voice agent that answers your business phone, holds a real
            conversation with the caller, works out what they need, and books the appointment into
            your scheduling system — 24 hours a day, on unlimited calls at once. You will see it
            sold as an AI phone answering service, an automated answering service, or a virtual
            assistant that answers calls. Same job, different label.
          </p>
          <p className="mt-6 max-w-3xl text-[17px] leading-[1.7] text-[var(--foreground-dim)]">
            It is not a voicemail box with better manners, and it is not an answering service that
            takes a message for someone to action tomorrow. It finishes the call. The caller hangs
            up with an appointment, and the job is on your calendar before your competitor&apos;s
            phone has even rung.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" size="lg" arrow>
              Hear it handle a real call
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              See the wider system
            </Button>
          </div>
        </Container>
      </div>

      {/* Why missed calls cost */}
      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="The problem"
            title="Why do missed calls cost so much?"
            description="Because a missed call is not a delayed customer. It is a customer who has already hired someone else."
          />

          <div className="mt-14 grid gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden border border-[var(--border)]">
            {[
              { n: "27%", l: "of inbound calls to home services businesses go unanswered" },
              { n: "85%", l: "of callers who reach voicemail never leave a message" },
              { n: "67%", l: "who cannot reach you immediately dial a competitor instead" },
              { n: "42%", l: "of calls arrive outside standard business hours" },
            ].map((s) => (
              <div key={s.n} className="bg-[var(--background)] p-7">
                <div className="font-display text-4xl md:text-5xl text-[var(--accent)] leading-none">
                  {s.n}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--foreground-dim)]">
                  {s.l}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[13px] text-[var(--muted)]">
            Industry figures compiled from Invoca, Housecall Pro, and Contractor in Charge call-handling
            research, 2026.
          </p>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="Capabilities"
            title="What does an AI phone receptionist actually do?"
            description="Four jobs, on every call, without anyone on your team touching the phone."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {CAPABILITIES.map((c) => {
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

      {/* Comparison */}
      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="Comparison"
            title="How is this different from an answering service?"
            description="A traditional answering service takes a message. An AI answering service finishes the call."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[var(--border-bright)]">
                  <th className="py-4 pr-6 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] font-normal">
                    &nbsp;
                  </th>
                  <th className="py-4 px-4 text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] font-normal">
                    AI receptionist
                  </th>
                  <th className="py-4 px-4 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] font-normal">
                    Traditional answering service
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((r) => (
                  <tr key={r.point} className="border-b border-[var(--border)]">
                    <td className="py-5 pr-6 text-[16px] text-foreground">{r.point}</td>
                    <td className="py-5 px-4">
                      <Cell value={r.ai} />
                    </td>
                    <td className="py-5 px-4">
                      <Cell value={r.human} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="How it works"
            title="How do you get one running?"
            description="Three steps. You hear every call it takes before it takes one unsupervised."
          />

          <div className="mt-14 space-y-px bg-[var(--border)] rounded-xl overflow-hidden border border-[var(--border)]">
            {STEPS.map((s) => (
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

          <p className="mt-8 max-w-2xl text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
            Most businesses do not need all of it at once. If the calls you are losing arrive at
            night, start with{" "}
            <Link
              href="/ai-receptionist/after-hours"
              className="text-[var(--accent)] hover:underline"
            >
              after-hours coverage
            </Link>
            . If you are a small operation weighing this against hiring, read{" "}
            <Link
              href="/ai-receptionist/small-business"
              className="text-[var(--accent)] hover:underline"
            >
              the small business comparison
            </Link>
            . For inbound support volume rather than new enquiries, that is{" "}
            <Link href="/ai-customer-service" className="text-[var(--accent)] hover:underline">
              AI customer service
            </Link>
            . If you are weighing us against a traditional provider, we published{" "}
            <Link href="/best-answering-service" className="text-[var(--accent)] hover:underline">
              a like-for-like price comparison
            </Link>
            . To put a number on it first, the{" "}
            <Link href="/tools" className="text-[var(--accent)] hover:underline">
              free revenue leak calculator
            </Link>{" "}
            takes about two minutes.
          </p>

          <p className="mt-5 max-w-2xl text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
            The receptionist is usually the first piece, not the last. Once calls are handled, the
            same approach applies to follow-up, dispatch, and reporting — see{" "}
            <Link href="/services" className="text-[var(--accent)] hover:underline">
              how we build operational AI systems
            </Link>{" "}
            or read{" "}
            <Link href="/case-studies/hvac" className="text-[var(--accent)] hover:underline">
              how an HVAC contractor rebuilt their operations
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* FAQ — AEO + FAQPage schema */}
      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="narrow">
          <h2 className="font-display text-3xl md:text-[40px] leading-tight tracking-[-0.02em] text-foreground">
            Questions people ask before they buy
          </h2>
          <div className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {FAQS.map((f) => (
              <div key={f.q} className="py-7">
                <h3 className="text-[18px] font-semibold text-foreground">{f.q}</h3>
                <p className="mt-3 text-[16px] leading-[1.7] text-[var(--foreground-dim)]">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <Container size="default">
          <div className="rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-9 md:p-14">
            <h2 className="font-display text-3xl md:text-[42px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-2xl">
              Find out what your missed calls are worth.
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[var(--foreground-dim)]">
              A 20-minute call. We look at your call volume and how many go unanswered, and tell you
              honestly whether a voice agent would pay for itself.
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

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return <Check size={18} strokeWidth={2} className="text-[var(--accent)]" aria-label="Yes" />;
  if (value === false)
    return <X size={18} strokeWidth={2} className="text-[var(--muted)]" aria-label="No" />;
  return <span className="text-[15px] text-[var(--foreground-dim)]">{value}</span>;
}
