import { HeroBrainV2 } from "@/components/home/hero-brain-v2";
import { Problem } from "@/components/home/problem";
import { Services } from "@/components/home/services";
import { Diagnostic } from "@/components/home/diagnostic";
import { CaseStudiesTeaser } from "@/components/home/case-studies-teaser";
import { HowWeWork } from "@/components/home/how-we-work";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
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
