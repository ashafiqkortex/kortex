import type { Metadata } from "next";
import Link from "next/link";
import { PLANNED } from "@/components/v1/paths";
import { Arrow } from "@/components/v1/icons";
import "./soon.css";

export const metadata: Metadata = {
  title: "Not written yet — Kortex",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return Object.keys(PLANNED).map((p) => ({ path: p.replace(/^\//, "").split("/") }));
}

export default async function SoonPage({ params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  const canonical = "/" + path.join("/");
  const label = PLANNED[canonical] ?? "This page";

  return (
    <section className="soon">
      <div className="grid-overlay" />
      <p className="eyebrow"><span /> NOT WRITTEN YET</p>
      <h1>{label}</h1>
      <p className="soon-lede">
        This page is in the plan and the navigation points at it, but the copy has not been
        written. It will live at <code>{canonical}</code>.
      </p>
      <p className="soon-note">
        You are inside the <strong>/v1 preview</strong>. Nothing here is indexed, and the live
        site is unchanged.
      </p>
      <div className="soon-actions">
        <Link className="button" href="/v1">Back to the home page <Arrow /></Link>
        <Link className="button ghost" href="/v1/contact">Book a working session <Arrow /></Link>
      </div>
    </section>
  );
}
