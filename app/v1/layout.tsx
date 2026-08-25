// The Field Industrial shell. Design system loads here so every /v1 page
// inherits it; page-specific styles are imported by the page itself.
import "./design-system.css";
import { SiteHeader } from "@/components/v1/site-header";
import { SiteFooter } from "@/components/v1/site-footer";

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="kx10">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
