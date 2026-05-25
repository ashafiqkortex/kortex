"use client";

import * as motion from "motion/react-client";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import { SERVICES } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 border-b border-[var(--border)]">
      <Container size="wide">
        <SectionHeader
          eyebrow="What We Build"
          title={
            <>
              AI that works <span className="italic">for your business.</span>
            </>
          }
          description="Five things we build, end-to-end and inside your environment. Real problems don't fit neat service boxes — engagements usually combine two or three of these into one working system."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const isLast = i === SERVICES.length - 1;
            const highlight = isLast;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={
                  i === 4 ? "lg:col-span-3 md:col-span-2" : ""
                }
              >
                <Link
                  href={`/services#${service.slug}`}
                  className="group relative block h-full p-7 md:p-8 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 hover:border-[var(--accent)]/40 hover:bg-[var(--surface)] transition-all duration-300 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(94,234,212,0.06), transparent 40%)",
                    }}
                  />
                  {highlight && (
                    <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent" />
                  )}

                  <div className="relative flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-bright)] bg-[var(--background)] text-[var(--accent)] group-hover:border-[var(--accent)]/60 transition-colors">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--muted-2)]">
                        0{i + 1}
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className="text-[var(--muted-2)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>

                  <h3 className="relative mt-7 font-display text-[28px] md:text-[30px] leading-tight tracking-[-0.02em] text-foreground">
                    {service.name}
                  </h3>
                  <p className="relative mt-3 text-[14.5px] leading-relaxed text-[var(--foreground-dim)]">
                    {service.short}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
