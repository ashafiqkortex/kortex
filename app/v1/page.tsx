import type { Metadata } from "next";
import KortexHomeV11 from "@/components/v1/home-page";
import "./home.css";

// Preview of the new home page. Kept out of the index and out of the canonical
// graph — robots.ts disallows it too. Title and description follow the
// approved copy doc (kortex-homepage-copy-and-design-v2 (1).md).
export const metadata: Metadata = {
  title: "Custom Operations Systems for Contractors | Kortex",
  description:
    "Kortex builds operations systems for MEP contractors, builders and general contractors that reduce office work, speed billing and let the company grow without depending on the owner.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://kortexconsulting.com" },
};

export default function V1HomePage() {
  return <KortexHomeV11 />;
}
