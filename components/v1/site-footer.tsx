import Link from "next/link";
import { v1 } from "./paths";
import { PHONE, PHONE_HREF, EMAIL } from "./nav-data";

const COLUMNS = [
  { title: "WHAT WE BUILD", links: [
    ["/operations-system", "Operations System"],
    ["/operations-system/what-it-costs", "What it costs"],
    ["/ai-receptionist", "AI Receptionist"],
    ["/answer-engine-optimization", "AI Search Visibility"],
  ]},
  { title: "BY TRADE", links: [
    ["/mep-contractors", "MEP contractors"],
    ["/hvac-operations-software", "HVAC"],
    ["/electrical-contractor-software", "Electrical"],
    ["/plumbing-software", "Plumbing"],
    ["/construction-contractors", "Self-performing trades"],
    ["/builders-and-general-contractors", "Builders and GCs"],
  ]},
  { title: "COMPARE", links: [
    ["/servicetitan-alternative", "vs ServiceTitan"],
    ["/procore-alternative", "vs Procore"],
    ["/field-service-software-quickbooks", "Works with QuickBooks"],
  ]},
  { title: "RESOURCES", links: [
    ["/certified-payroll", "Certified payroll"],
    ["/tools/rent-vs-own", "Rent vs own calculator"],
    ["/case-studies/hot-and-cold", "Our work"],
    ["/about", "About"],
    ["/contact", "Contact"],
    ["/blog", "Blog"],
  ]},
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link className="brand" href="/v1" aria-label="Kortex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/kortex-lockup-horizontal-field.svg" alt="Kortex" width={151} height={36} />
        </Link>
        <p>Operational systems for commercial contractors.</p>
      </div>

      {COLUMNS.map((col) => (
        <div className="footer-column" key={col.title}>
          <strong>{col.title}</strong>
          {col.links.map(([href, label]) => <Link key={href} href={v1(href)}>{label}</Link>)}
        </div>
      ))}

      {/* NAP must match the Google Business Profile character for character —
          that consistency plus sameAs is what moves the brand SERP. */}
      <div className="footer-trust">
        <strong>CONTACT KORTEX</strong>
        <a href={PHONE_HREF}>{PHONE}</a>
        <address>6604 Millwood Rd<br />Bethesda, MD 20817</address>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <div>
          <a href="https://www.linkedin.com/company/kortexconsulting">LinkedIn</a>
          <a href="https://www.google.com/search?q=Kortex+Consulting+Bethesda">Google Business Profile</a>
        </div>
      </div>

      <span className="copyright">© 2026 KORTEX</span>
    </footer>
  );
}
