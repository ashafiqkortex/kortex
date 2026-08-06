import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { FaqSection, faqSchema, type Faq } from "@/components/faq-section";

const SITE = "https://kortexconsulting.com";
const URL = `${SITE}/best-answering-service`;

/** Prices verified from each provider's own published pricing page, August 2026. */
const VERIFIED = "August 2026";

export const metadata: Metadata = {
  title: "Best Answering Service for Small Business | Kortex",
  description:
    "Published prices from AnswerConnect, Ruby and PATLive, converted to a like-for-like cost per minute — plus who each one is genuinely best for.",
  alternates: { canonical: URL },
  openGraph: {
    images: [{ url: `${SITE}/opengraph-image`, width: 1200, height: 630 }],
    title: "Best Answering Service for Small Business | Kortex",
    description:
      "A like-for-like comparison of answering service pricing, using each provider's own published rates.",
    url: URL,
    type: "website",
  },
};

type Row = { plan: string; price: number; mins: number };
type Provider = { name: string; site: string; staff: string; rows: Row[]; note: string };

const PROVIDERS: Provider[] = [
  {
    name: "AnswerConnect",
    site: "answerconnect.com",
    staff: "Human, 24/7",
    rows: [
      { plan: "Entry", price: 350, mins: 200 },
      { plan: "Growth", price: 395, mins: 300 },
      { plan: "Standard", price: 575, mins: 400 },
      { plan: "550 minutes", price: 795, mins: 550 },
    ],
    note: "Overage $1.85–$2.50/min. $49.99 setup on Entry and Standard; none on Growth. First 30 interactions under 30 seconds are free each cycle; everything else rounds up to the next whole minute.",
  },
  {
    name: "PATLive",
    site: "patlive.com",
    staff: "Human, US-based",
    rows: [
      { plan: "Starter", price: 250, mins: 75 },
      { plan: "Standard", price: 460, mins: 200 },
      { plan: "Premium", price: 720, mins: 350 },
      { plan: "Pro", price: 1170, mins: 600 },
    ],
    note: "Overage $2.00–$2.35/min. A $75/month pay-as-you-go plan bills at $2.60/min with no allowance. No contracts.",
  },
  {
    name: "Ruby",
    site: "ruby.com",
    staff: "Human, US-based",
    rows: [
      { plan: "Starter", price: 250, mins: 50 },
      { plan: "Standard", price: 395, mins: 100 },
      { plan: "Popular", price: 720, mins: 200 },
      { plan: "Enterprise", price: 1725, mins: 500 },
    ],
    note: "Overage rate is not published. No activation, onboarding or setup fees. Live chat sold separately or bundled.",
  },
];

const FAQS: Faq[] = [
  {
    q: "What is the best answering service for a small business?",
    a: "On published pricing, AnswerConnect is the cheapest per minute of the three major human services — roughly $1.32–$1.75 a minute depending on plan, against $1.95–$3.33 for PATLive and $3.45–$5.00 for Ruby. But cost per minute only decides it if the services do the same job. If you need appointments booked during the call rather than a message taken, that capability matters more than the rate.",
  },
  {
    q: "How much does an answering service cost per minute?",
    a: "Using each provider's own published plans as of August 2026, the effective rate — monthly price divided by included minutes — runs about $1.32 to $1.75 for AnswerConnect, $1.95 to $3.33 for PATLive, and $3.45 to $5.00 for Ruby. Larger plans are cheaper per minute across all three, and overage rates apply once you exceed the allowance.",
  },
  {
    q: "Why is Ruby more expensive than the others?",
    a: "Ruby positions on the quality of the interaction rather than the price of the minute, and its plans start at a much smaller allowance — 50 minutes on the entry plan against AnswerConnect's 200. Whether the premium is worth it depends entirely on whether your callers are making a high-value decision on that call.",
  },
  {
    q: "What counts as a minute?",
    a: "This varies and it is worth asking. AnswerConnect publishes that interactions round up to the nearest whole minute and bills in one-minute increments, with the first 30 interactions under 30 seconds free each cycle. Under rounding, ten 40-second calls cost ten minutes, not seven. Ruby and PATLive do not publish equivalent detail, so ask directly.",
  },
  {
    q: "Is an AI answering service cheaper than a human one?",
    a: "Generally yes, because the cost structure is different — there is no per-minute staffing cost to recover, so pricing tends to track capability rather than usage. The trade is real though: humans still handle genuine complexity and upset callers better. The honest question is what share of your calls actually need that.",
  },
  {
    q: "Do any of them book appointments during the call?",
    a: "All three offer appointment scheduling as part of or alongside their service, and AnswerConnect bundles a scheduling app. The thing to verify is whether they book into the calendar you actually use, against real availability — or whether they collect a preferred time for someone on your side to confirm later. Those are very different products.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${URL}#article`,
      headline: "Best Answering Service for Small Business: a like-for-like price comparison",
      description:
        "Published pricing from AnswerConnect, PATLive and Ruby converted to an effective cost per minute, with an assessment of who each provider suits.",
      url: URL,
      author: { "@type": "Organization", name: "Kortex Consulting", url: SITE },
      publisher: { "@id": `${SITE}/#organization` },
      mainEntityOfPage: URL,
      dateModified: "2026-08-06",
    },
    faqSchema(URL, FAQS),
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Best Answering Service", item: URL },
      ],
    },
  ],
};

export default function BestAnsweringServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="Comparison"
        title={
          <>
            Every answering service quotes
            <br />
            <span className="italic text-[var(--accent)]">a monthly price. Divide it.</span>
          </>
        }
        description="Published plans from the three biggest answering service companies, converted to a like-for-like cost per minute — and an honest note about who is writing this."
      />

      {/* Disclosure — first thing on the page */}
      <div className="pt-12">
        <Container size="default">
          <div className="rounded-xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-6 md:p-7">
            <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
              Who is writing this
            </div>
            <p className="text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
              Kortex builds{" "}
              <Link href="/ai-receptionist" className="text-[var(--accent)] hover:underline">
                AI receptionists
              </Link>
              , so we compete with every company on this page. Take the recommendations with that in
              mind. The prices below are lifted directly from each provider&apos;s own published
              pricing, and the arithmetic is arithmetic — check both if you like. Where a human
              service is the better answer, we have said so.
            </p>
          </div>
        </Container>
      </div>

      <div className="py-14 md:py-16 border-b border-[var(--border)]">
        <Container size="default">
          <p className="max-w-3xl text-[20px] md:text-[23px] leading-[1.6] text-foreground">
            Most rankings of the best answering service for small business compare headline monthly
            prices, which tells you almost nothing — the included minutes differ by a factor of ten.
            Divide price by minutes and the picture changes sharply: the same $250 buys 50 minutes at
            one provider and 75 at another.
          </p>
        </Container>
      </div>

      <section className="py-20 md:py-24 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="The numbers"
            title="What does each one actually cost per minute?"
            description="Monthly price divided by included minutes across the three largest answering service companies. Published rates, no estimates."
          />

          <div className="mt-12 space-y-12">
            {PROVIDERS.map((p) => (
              <div key={p.name}>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-[26px] tracking-[-0.01em] text-foreground">
                    {p.name}
                  </h3>
                  <span className="text-[13px] font-mono text-[var(--muted)]">{p.site}</span>
                  <span className="text-[13px] font-mono uppercase tracking-widest text-[var(--accent)]">
                    {p.staff}
                  </span>
                </div>

                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[520px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-[var(--border-bright)]">
                        {["Plan", "Per month", "Minutes", "Effective per minute"].map((th) => (
                          <th
                            key={th}
                            className="py-3 pr-6 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] font-normal"
                          >
                            {th}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {p.rows.map((r) => (
                        <tr key={r.plan} className="border-b border-[var(--border)]">
                          <td className="py-3.5 pr-6 text-[16px] text-foreground">{r.plan}</td>
                          <td className="py-3.5 pr-6 text-[16px] text-[var(--foreground-dim)]">
                            ${r.price.toLocaleString()}
                          </td>
                          <td className="py-3.5 pr-6 text-[16px] text-[var(--foreground-dim)]">
                            {r.mins}
                          </td>
                          <td className="py-3.5 pr-6 text-[16px] font-medium text-[var(--accent)]">
                            ${(r.price / r.mins).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-[var(--muted)]">{p.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-[13px] text-[var(--muted)]">
            Figures taken from each provider&apos;s own published pricing, verified {VERIFIED}.
            Pricing changes — check before you buy.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="The read"
            title="So who is each one actually for?"
            description="The spread is roughly four-to-one per minute. That is not a rounding difference."
          />
          <div className="mt-12 max-w-3xl space-y-6 text-[17px] leading-[1.75] text-[var(--foreground-dim)]">
            <p>
              <span className="text-foreground">AnswerConnect</span> is the cheapest per minute of
              the three by a wide margin — around $1.32 to $1.75 depending on plan. If your calls are
              routine and your priority is that somebody picks up, the arithmetic favours it clearly.
              Watch the rounding: every interaction rounds up to a whole minute, so a business taking
              many short calls burns the allowance faster than talk time alone suggests.
            </p>
            <p>
              <span className="text-foreground">PATLive</span> sits in the middle, roughly $1.95 to
              $3.33, and is the only one of the three publishing a low-commitment entry point — $75 a
              month, pay as you go at $2.60 a minute. For genuinely low or unpredictable volume, that
              structure is more honest than buying an allowance you will not use.
            </p>
            <p>
              <span className="text-foreground">Ruby</span> is the most expensive per minute by some
              distance — $3.45 to $5.00 — and its entry plan includes only 50 minutes. It competes on
              the quality of the interaction rather than the price of it. That is a real thing to
              buy: if a caller is choosing a lawyer or a surgeon on the strength of that first
              conversation, the difference between a good receptionist and an adequate one is worth
              more than the rate.
            </p>
            <p>
              A note on scope: this compares the three largest general providers. If you are
              searching for the best legal answering service or the best medical answering service
              specifically, the vertical specialists price differently again, and compliance
              obligations may narrow the field before cost does.
            </p>
            <p>
              What none of these numbers capture is the question that usually matters more.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 border-b border-[var(--border)]">
        <Container size="default">
          <SectionHeader
            eyebrow="The other question"
            title="Does it finish the call, or hand the work back?"
            description="A message is a task you still have to do."
          />
          <div className="mt-12 max-w-3xl space-y-6 text-[17px] leading-[1.75] text-[var(--foreground-dim)]">
            <p>
              Every provider here answers your phone competently. The variable is what happens next.
              If the outcome is a message in your inbox, the work has moved rather than gone — and by
              the time you call back, a good share of callers have already hired whoever picked up
              and solved it there and then.
            </p>
            <p>
              So ask each one whether it books into your calendar against real availability during
              the call, or collects a preferred time for someone on your side to confirm later. Both
              get described as &quot;appointment scheduling&quot;. They are not the same product, and
              the difference is most of the value.
            </p>
            <p>
              The second question worth asking is what happens at your busiest hour rather than your
              average one. Any per-minute service is staffed to a forecast, and the calls you lose
              arrive in clusters.
            </p>
          </div>
          <p className="mt-8 max-w-2xl text-[16px] leading-[1.7] text-[var(--foreground-dim)]">
            For the general version of this argument without any providers attached, see{" "}
            <Link
              href="/blog/choosing-an-answering-service"
              className="text-[var(--accent)] hover:underline"
            >
              how to choose an answering service
            </Link>
            . For what we build instead, that is{" "}
            <Link href="/ai-receptionist" className="text-[var(--accent)] hover:underline">
              the AI receptionist
            </Link>{" "}
            — and if your volume is small,{" "}
            <Link
              href="/ai-receptionist/small-business"
              className="text-[var(--accent)] hover:underline"
            >
              the small business comparison
            </Link>{" "}
            is the more useful page.
          </p>
        </Container>
      </section>

      <FaqSection heading="What do people ask when comparing?" faqs={FAQS} />

      <section className="py-20 md:py-28">
        <Container size="default">
          <div className="rounded-2xl border border-[var(--border-bright)] bg-[var(--surface)]/60 p-9 md:p-14">
            <h2 className="font-display text-3xl md:text-[42px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-2xl">
              If a human service is right for you, buy one.
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[var(--foreground-dim)]">
              We are only the better answer when the volume is high, the hours are long, or the calls
              need to end in a booking. Twenty minutes and we will tell you which side of that line
              you are on.
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
