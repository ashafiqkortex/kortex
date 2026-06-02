import Link from "next/link";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";

const SECTIONS = [
  {
    title: "Services",
    links: [
      { href: "/services#workflow-automation", label: "Workflow Automation" },
      { href: "/services#custom-agents", label: "Custom Agents" },
      { href: "/services#ai-engineering", label: "AI Engineering" },
      { href: "/services#ai-governance", label: "AI Governance" },
      { href: "/services#integrations", label: "Integrations" },
    ],
  },
  {
    title: "Work",
    links: [
      { href: "/case-studies/hvac", label: "HVAC Operational OS" },
      { href: "/case-studies/truth-layer", label: "Truth Layer" },
      { href: "/case-studies/sales-intelligence", label: "Sales Intelligence" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] mt-32">
      <div className="bg-grid absolute inset-0 opacity-30 pointer-events-none" />
      <Container size="wide" className="relative py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 text-[14px] leading-relaxed text-[var(--foreground-dim)] max-w-xs">
              Engineers, not consultants. We build the truth layer under your operations.
            </p>
            <div className="mt-6 flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-[var(--success)]" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--success)]" />
              </span>
              Accepting new engagements
            </div>
          </div>

          {SECTIONS.map((section) => (
            <div key={section.title}>
              <div className="text-[12px] font-mono uppercase tracking-widest text-[var(--muted)] mb-4">
                {section.title}
              </div>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[var(--foreground-dim)] hover:text-[var(--accent)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-[var(--muted)]">
          <div>&copy; {new Date().getFullYear()} Kortex Consulting. All rights reserved.</div>
          <div className="font-mono tracking-wide">The truth layer under your operations.</div>
        </div>
      </Container>
    </footer>
  );
}
