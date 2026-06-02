"use client";

import Link from "next/link";
import * as motion from "motion/react-client";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";

// syntax colors for the dark code window
const cmt = "text-[#F4F1E8]/35";
const key = "text-[#F4F1E8]/55";
const str = "text-[#DB8A5F]";

function Eyebrow() {
  return (
    <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-[#DB8A5F]">
      <span className="h-px w-6 bg-[#DB8A5F]/50" />
      Custom Systems
    </div>
  );
}

function CTA({ teaser }: { teaser: boolean }) {
  return (
    <Link
      href={teaser ? "/services#custom" : "/#diagnostic"}
      className="group inline-flex items-center gap-2 rounded-full bg-[#F4F1E8] px-6 py-3 text-[15px] md:text-[17px] font-medium text-[#1c1916] transition-colors hover:bg-[var(--accent)] hover:text-white"
    >
      {teaser ? "See how custom systems work" : "Map the bottleneck"}
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={1.75}
      />
    </Link>
  );
}

function DarkShell({ children, compact = false }: { children: React.ReactNode; compact?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-2xl ${compact ? "p-8 md:p-10" : "p-8 md:p-12"}`}
      style={{ background: "#1c1916" }}
    >
      <div
        className="bg-blueprint-fade absolute inset-0 opacity-90 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(193,95,60,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(193,95,60,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 88% 0%, rgba(193,95,60,0.18), transparent 60%)",
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export function CustomSolutions({
  teaser = false,
  asSection = true,
  id,
}: {
  teaser?: boolean;
  asSection?: boolean;
  id?: string;
}) {
  // HOME TEASER — slim single statement that drives to /services
  const teaserPanel = (
    <DarkShell compact>
      <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <Eyebrow />
          <h2 className="mt-5 font-display text-3xl md:text-[38px] tracking-[-0.02em] text-[#F4F1E8] leading-[1.1]">
            Some problems don&apos;t fit a category.{" "}
            <span className="italic text-[#DB8A5F]">We build those from scratch.</span>
          </h2>
          <p className="mt-5 text-[16px] md:text-[17px] leading-[1.7] text-[#F4F1E8]/70">
            When growth turns into coordination work and off-the-shelf tools
            start breaking, you need operational infrastructure — not another app.
          </p>
        </div>
        <div className="shrink-0">
          <CTA teaser />
        </div>
      </div>
    </DarkShell>
  );

  // FULL — split statement + code window
  const fullPanel = (
    <DarkShell>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
        {/* LEFT — statement */}
        <div>
          <Eyebrow />
          <h2 className="mt-6 font-display text-3xl md:text-[40px] tracking-[-0.02em] text-[#F4F1E8] leading-[1.08]">
            Growth doesn&apos;t break your business.{" "}
            <span className="italic text-[#DB8A5F]">The coordination does.</span>
          </h2>
          <div className="mt-6 space-y-4 text-[16px] md:text-[17px] leading-[1.7] text-[#F4F1E8]/70">
            <p>
              More approvals. More edge cases. More duct tape between tools that
              were never built to talk.
            </p>
            <p>
              At some point you don&apos;t need more software.{" "}
              <span className="text-[#F4F1E8] font-medium">You need operational infrastructure.</span>
            </p>
          </div>
          <div className="mt-8">
            <CTA teaser={false} />
          </div>
        </div>

        {/* RIGHT — config / code window */}
        <div
          className="rounded-xl border border-[#F4F1E8]/12 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
          style={{ background: "#15120f" }}
        >
          <div className="flex items-center gap-2 border-b border-[#F4F1E8]/10 px-4 py-3">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F4F1E8]/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F4F1E8]/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]/70" />
            </span>
            <span className="ml-2 font-mono text-[12px] text-[#F4F1E8]/40">
              operations.system
            </span>
          </div>
          <pre className="px-5 py-5 overflow-x-auto font-mono text-[12.5px] md:text-[13px] leading-[2] text-[#F4F1E8]/90">
            <code>
              <span className={cmt}>{"# the problem was never the team"}</span>{"\n\n"}
              <span className={key}>{"run_on:   "}</span>{"your real workflows"}
              <span className={cmt}>{"   # not a template"}</span>{"\n"}
              <span className={key}>{"handles:  "}</span>
              <span className={str}>{"3 approvals, custom quote, tech rerouted"}</span>{"\n"}
              <span className={key}>{"flow:     "}</span>
              <span className={str}>{"call → quote → dispatch → invoice"}</span>{"\n"}
              <span className={key}>{"evolves:  "}</span>{"with the business"}
              <span className={cmt}>{"   # not a rebuild"}</span>{"\n"}
              <span className={key}>{"owned_by: "}</span>{"your team"}
              <span className={cmt}>{"   # your environment"}</span>
            </code>
          </pre>
        </div>
      </div>
    </DarkShell>
  );

  const content = teaser ? teaserPanel : fullPanel;

  if (asSection) {
    return (
      <section id={id} className="relative py-16 md:py-24 border-b border-[var(--border)]">
        <Container size="wide">{content}</Container>
      </section>
    );
  }

  return (
    <div id={id} className="mt-16 md:mt-20 scroll-mt-24">
      {content}
    </div>
  );
}
