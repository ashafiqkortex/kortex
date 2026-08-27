"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Arrow } from "./icons";
import { v1 } from "./paths";
import { NAV, PHONE, PHONE_HREF, type NavGroup, type NavLink } from "./nav-data";

const isGroup = (item: NavGroup | NavLink): item is NavGroup => "items" in item;

// Hover opens the menu immediately; leaving closes it after a short grace
// period so a diagonal mouse path to the panel doesn't dismiss it.
const CLOSE_DELAY = 180;

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const clearTimer = () => { if (timer.current) { clearTimeout(timer.current); timer.current = null; } };
  const openNow = useCallback((label: string) => { clearTimer(); setOpen(label); }, []);
  const closeSoon = useCallback(() => {
    clearTimer();
    timer.current = setTimeout(() => setOpen(null), CLOSE_DELAY);
  }, []);

  // Any navigation closes everything.
  useEffect(() => { setOpen(null); setMobileOpen(false); setMobileSection(null); }, [pathname]);

  // Escape closes and returns focus to the trigger that opened it.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (open) {
        const trigger = navRef.current?.querySelector<HTMLButtonElement>(`[data-menu="${open}"]`);
        setOpen(null);
        trigger?.focus();
      }
      setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // A click anywhere outside the header dismisses the menu.
  useEffect(() => {
    if (!open && !mobileOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) { setOpen(null); setMobileOpen(false); }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open, mobileOpen]);

  // Focus leaving the header entirely closes it — keyboard parity with the
  // outside-click behaviour above.
  const onBlurCapture = (e: React.FocusEvent) => {
    if (!navRef.current?.contains(e.relatedTarget as Node)) setOpen(null);
  };

  useEffect(() => clearTimer, []);

  return (
    <header className="site-header" ref={navRef as React.RefObject<HTMLElement>} onBlurCapture={onBlurCapture}>
      <Link className="brand" href="/v1" aria-label="Kortex">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/kortex-lockup-horizontal-field.svg" alt="Kortex" width={151} height={36} />
      </Link>

      <nav className="main-nav" aria-label="Primary">
        {NAV.map((item) =>
          isGroup(item) ? (
            <div
              key={item.label}
              className={`nav-menu${open === item.label ? " is-open" : ""}`}
              onMouseEnter={() => openNow(item.label)}
              onMouseLeave={closeSoon}
            >
              <button
                type="button"
                className="nav-trigger"
                data-menu={item.label}
                aria-expanded={open === item.label}
                aria-haspopup="true"
                onClick={() => setOpen(open === item.label ? null : item.label)}
              >
                {item.label} <span aria-hidden="true">⌄</span>
              </button>
              <div className={`dropdown ${item.width ?? "services-dropdown"}`} hidden={open !== item.label}>
                {item.items.map((section, i) => (
                  <div className="dropdown-section" key={section.heading ?? i}>
                    {section.heading && <p>{section.heading}</p>}
                    {section.lead && (
                      <Link className={section.lead.note && item.width ? "resource-lead" : "dropdown-lead"} href={v1(section.lead.href)}>
                        <span>{section.lead.label}</span>
                        {section.lead.note && (item.width ? <small>{section.lead.note}</small> : <strong>{section.lead.note}</strong>)}
                      </Link>
                    )}
                    {section.nested && (
                      <div className="nested-links">
                        {section.nested.map((l) => <Link key={l.href} href={v1(l.href)}>{l.label}</Link>)}
                      </div>
                    )}
                    {section.links?.map((l) => <Link key={l.href} href={v1(l.href)}>{l.label}</Link>)}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Link key={item.href} href={v1(item.href)}>{item.label}</Link>
          )
        )}
      </nav>

      <div className="header-contact">
        <a className="phone-link" href={PHONE_HREF}>
          <span className="phone-full">{PHONE}</span>
          <span className="phone-mobile" aria-label="Call Kortex">☎</span>
        </a>
        <Link className="nav-cta" href={v1("/contact")}>Book a free workflow audit <Arrow /></Link>
      </div>

      <div className={`mobile-navigation${mobileOpen ? " is-open" : ""}`}>
        <button type="button" className="mobile-toggle" aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? "CLOSE" : "MENU"}
        </button>
        {mobileOpen && (
          <div className="mobile-panel">
            {NAV.map((item) =>
              isGroup(item) ? (
                <div className={`mobile-section${mobileSection === item.label ? " is-open" : ""}`} key={item.label}>
                  <button type="button" aria-expanded={mobileSection === item.label}
                    onClick={() => setMobileSection(mobileSection === item.label ? null : item.label)}>
                    {item.label}
                  </button>
                  {mobileSection === item.label && (
                    <div>
                      {item.items.map((section, i) => (
                        <div key={section.heading ?? i}>
                          {section.heading && <span>{section.heading}</span>}
                          {section.lead && (
                            <Link className="mobile-lead" href={v1(section.lead.href)}>
                              {section.lead.label}{section.lead.note && <small>{section.lead.note}</small>}
                            </Link>
                          )}
                          {section.nested?.map((l) => <Link key={l.href} href={v1(l.href)}>{l.label}</Link>)}
                          {section.links?.map((l) => <Link key={l.href} href={v1(l.href)}>{l.label}</Link>)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={v1(item.href)}>{item.label}</Link>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
}
