import type { Metadata } from "next";
import KortexHomeV10 from "@/components/v1/home-page";
import "./home.css";

// Preview of the new home page. Kept out of the index and out of the canonical
// graph — robots.ts disallows it too.
export const metadata: Metadata = {
  title: "Kortex — Operational Systems for Commercial Contractors",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://kortexconsulting.com" },
};

export default function V1HomePage() {
  return <KortexHomeV10 />;
}
