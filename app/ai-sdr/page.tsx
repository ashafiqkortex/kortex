import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { FaqSection, faqSchema, PROVIDER, type Faq } from "@/components/faq-section";
import { Check, X } from "lucide-react";

const SITE = "https://kortexconsulting.com";
const URL = `${SITE}/ai-sdr`;

export const metadata: Metadata = {
  title: "AI SDR — Build vs Buy for Sales Prospecting | Kortex",
  description:
    "What an AI SDR does well, where it embarrasses you, and when building into your own stack beats buying a seat. An honest read on AI sales agents.",
  alternates: { canonical: URL },
  openGraph: {
    images: [{ url: `${SITE}/opengraph-image`, width: 1200, height: 630 }],
    title: "AI SDR — Build vs Buy for Sales Prospecting | Kortex",
    description:
      "An honest account of what these tools do well, where they fail, and when to build rather than buy.",
    url: URL,
    type: "website",
  },
};

const VERDICT = [
  { job: "Chasing inbound leads that went quiet", ai: true, note: "Highest-value use. Nobody keeps the follow-up schedule manually." },
  { job: "Routing and qualifying inbound enquiries", ai: true, note: "Clear rules, fast payback, low downside." },
  { job: "Research and CRM enrichment before a call", ai: true, note: "Genuinely tedious, genuinely automatable." },
  { job: "Booking meetings from an existing relationship", ai: true, note: "Works where the prospect already knows you." },
  { job: "Cold outbound to strangers at volume", ai: false, note: "Where most of the spend goes, and most reputations get spent." },
];

const FAQS: Faq[] = [
  {
    q: "What is an AI SDR?",
    a: "An AI SDR is software that performs the top-of-funnel work a sales development representative does — finding prospects, sending outreach, qualifying replies, and booking meetings — before handing a warm conversation to a human. It typically connects to your CRM and email so it can act rather than just recommend.",
  },
  {
    q: "Do AI sales agents actually work?",
    a: "On warm and inbound motions, frequently. On cold outbound at volume, the results have been much worse than the category's marketing suggests, because the constraint was never how many emails you could send. Buyers got better at spotting automated outreach at roughly the same rate the tools got better at producing it.",
  },
  {
    q: "Should we build or buy?",
    a: "Buy if your motion is standard and your stack is mainstream — the products are mature and cheaper than building. Build when the qualifying logic is specific to your business, when the data that decides who is worth contacting lives in systems the products cannot reach, or when you need it to act on rules a vendor will not configure for you.",
  },
  {
    q: "What does an AI sales agent cost?",
    a: "Products are typically priced per seat or per contact, which makes them cheap to trial and expensive at volume. The cost that catches people out is not the subscription — it is the domain reputation and pipeline you burn while tuning it, which does not appear on any invoice.",
  },
  {
    q: "Will it damage our sender reputation?",
    a: "It can, and this is the risk most worth taking seriously. Volume plus generic messaging is exactly the pattern spam filtering is built to catch, and a burnt sending domain takes months to recover. Anyone selling you one without discussing deliverability is not being straight with you.",
  },
  {
    q: "Can it replace our SDR team?",
    a: "It reliably replaces the parts of the job SDRs dislike — research, data entry, follow-up discipline. It does not replace judgement about which accounts matter or the ability to hold a conversation that goes off-script. Teams that use it to make each rep more effective do better than teams that use it to have fewer of them.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "AI SDR and Sales Agent Development",
      alternateName: ["AI sales agent", "AI sales development representative", "SDR AI"],
      serviceType: "Custom AI SDR and sales automation development",
      description:
        "Custom AI SDR and sales agent development for teams whose qualifying logic or data does not fit an off-the-shelf product — built into the CRM and systems already in use.",
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
        { "@type": "ListItem", position: 2, name: "AI SDR", item: URL },
      ],
    },
  ],
};

export default function AiSdrPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="AI SDR"
        title={
          <>
            An AI SDR will not fix
            <br />
            <span className="italic text-[var(--accent)]">an offer nobody wants.</span>
          </>
        }
        description="It will chase every warm lead you have ever dropped, which is worth a great deal. Here is where that line sits, and when building beats buying."
      />

      <div className="py-16 md:py-20 border-b border-[var(--border)]">
        <Container size="default">
          <p className="max-w-3xl text-[20px] md:text-[23px] leading-[1.6] text-foreground">
            An AI SDR is software that does the top-of-funnel work of a sales development
            representative — finding prospects, sending outreach, qualifying replies, and booking
            meetings — then hands a warm conversation to a person.
          </p>
          <p className="mt-6 max-w-3xl text-[17px] leading-[1.7] text-[var(--foreground-dim)]">
            The category arrived promising to replace the SDR seat. What it has actually proved good
            at is narrower and less exciting: never dropping a follow-up. That is a real problem
            worth solving — most pipelines leak far more from neglected warm leads than from
            insufficient cold volume.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" size="lg" arrow>
              Talk through your sales motion
            </Button>
            <Button href="/ai-agent-development" variant="secondary" size="lg">
              How we build agents
            </Button>
          </div>
        </Container>
      </div>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="The verdict"
            title="What does an AI sales agent do well?"
            description="Four things reliably. One thing badly, and it is the one most people buy it for."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[var(--border-bright)]">
                  <th className="py-4 pr-6 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] font-normal">
                    Job
                  </th>
                  <th className="py-4 px-4 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] font-normal">
                    Verdict
                  </th>
                  <th className="py-4 px-4 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] font-normal">
                    Why
                  </th>
                </tr>
              </thead>
              <tbody>
                {VERDICT.map((r) => (
                  <tr key={r.job} className="border-b border-[var(--border)]">
                    <td className="py-5 pr-6 text-[16px] text-foreground">{r.job}</td>
                    <td className="py-5 px-4">
                      {r.ai ? (
                        <Check size={18} strokeWidth={2} className="text-[var(--accent)]" aria-label="Works well" />
                      ) : (
                        <X size={18} strokeWidth={2} className="text-[var(--muted)]" aria-label="Works badly" />
                      )}
                    </td>
                    <td className="py-5 px-4 text-[15px] text-[var(--foreground-dim)]">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="Build vs buy"
            title="Should you buy an AI SDR or build one?"
            description="Buy, in most cases. Here is when that stops being true."
          />
          <div className="mt-12 max-w-3xl space-y-6 text-[17px] leading-[1.75] text-[var(--foreground-dim)]">
            <p>
              The products in this category are mature and priced far below what a build costs. If
              your sales motion is standard and your stack is mainstream, buy one — we will tell you
              that on the call and it is usually the right answer.
            </p>
            <p>
              Building becomes the better option in three situations.{" "}
              <span className="text-foreground">
                When the logic that decides who is worth contacting is specific to your business
              </span>{" "}
              and a vendor will not configure it. When that logic depends on data sitting in systems
              the products cannot reach — usage, service history, operational records. And when the
              agent needs to act on those systems, not just read a CRM field.
            </p>
            <p>
              That last case is where this stops being a sales tool and becomes an operations
              problem, which is the work we actually do. If your qualifying signal lives in your
              product or your service records rather than your CRM, no seat-priced product is going
              to reach it.
            </p>
          </div>
          <p className="mt-8 max-w-2xl text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
            The same build-versus-buy line runs through{" "}
            <Link href="/ai-agents-for-business" className="text-[var(--accent)] hover:underline">
              every agent use case
            </Link>
            , and{" "}
            <Link href="/case-studies/sales-intelligence" className="text-[var(--accent)] hover:underline">
              the Sales Intelligence case study
            </Link>{" "}
            is a worked example of the data problem underneath it.
          </p>
        </Container>
      </section>

      <FaqSection heading="What do sales leaders ask?" faqs={FAQS} />

      <section className="py-20 md:py-28">
        <Container size="default">
          <div className="rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-9 md:p-14">
            <h2 className="font-display text-3xl md:text-[42px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-2xl">
              Buy one, probably. Unless.
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[var(--foreground-dim)]">
              Twenty minutes on your sales motion. If an off-the-shelf AI SDR would serve you better
              than anything we would build, we will name the product and send you on your way.
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
