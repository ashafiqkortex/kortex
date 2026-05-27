import { HeroBrainV2 } from "@/components/v1/home/hero-brain-v2";
import { Problem } from "@/components/v1/home/problem";
import { Services } from "@/components/v1/home/services";
import { Diagnostic } from "@/components/v1/home/diagnostic";
import { CaseStudiesTeaser } from "@/components/v1/home/case-studies-teaser";
import { HowWeWork } from "@/components/v1/home/how-we-work";
import { FinalCTA } from "@/components/v1/home/final-cta";

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
