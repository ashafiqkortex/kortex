"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[color-mix(in_srgb,var(--background)_80%,transparent)] backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <Container size="wide">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Kortex home">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-[15px] text-[var(--foreground-dim)] hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button href="/contact" variant="primary" size="sm" arrow>
              Book a call
            </Button>
          </div>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background-elev)]">
          <Container size="wide">
            <nav className="flex flex-col py-4 gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-3.5 text-[16px] text-[var(--foreground-dim)] hover:text-foreground border-b border-[var(--border)] last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3">
                <Button href="/contact" variant="primary" size="sm" arrow className="w-full">
                  Book a call
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
