import { HeroBrainV2 } from "@/components/v1/home/hero-brain-v2";
import { Problem } from "@/components/v1/home/problem";
import { Services } from "@/components/v1/home/services";
import { Diagnostic } from "@/components/v1/home/diagnostic";
import { CaseStudiesTeaser } from "@/components/v1/home/case-studies-teaser";
import { HowWeWork } from "@/components/v1/home/how-we-work";
import { FinalCTA } from "@/components/v1/home/final-cta";
import type { Metadata } from "next";

// Retired homepage variant kept for reference — keep it out of the index and
// out of the canonical graph (robots.ts disallows it too).
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "https://kortexconsulting.com" },
};

export default function V1HomePage() {
  return (
    <>
      <HeroBrainV2 />
      <Problem />
      <Services />
      <Diagnostic />
      <CaseStudiesTeaser />
      <HowWeWork />
      <FinalCTA />
    </>
  );
}
