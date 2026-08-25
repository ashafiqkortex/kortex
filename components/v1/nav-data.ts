export type NavLink = { href: string; label: string; note?: string };
export type NavGroup = { label: string; items: NavSection[]; width?: string };
export type NavSection = { heading?: string; lead?: NavLink; nested?: NavLink[]; links?: NavLink[] };

// One source of truth for the header and the mobile panel. Rationale for the
// shape of this menu — five primary items, the flagship weighted above the two
// smaller offers — is in the brain at consulting/kortex/navigation.md.
export const NAV: (NavGroup | NavLink)[] = [
  {
    label: "Services",
    items: [
      {
        lead: { href: "/operations-system", label: "OPERATIONS SYSTEM", note: "The full build. Field to invoice, and you own it." },
        nested: [
          { href: "/operations-system/what-it-costs", label: "What it costs" },
          { href: "/mep-contractors", label: "Built for MEP contractors" },
        ],
      },
      {
        heading: "ALSO",
        links: [
          { href: "/ai-receptionist", label: "AI Receptionist" },
          { href: "/answer-engine-optimization", label: "AI Search Visibility" },
        ],
      },
      {
        heading: "COMPARE",
        links: [
          { href: "/servicetitan-alternative", label: "Kortex vs ServiceTitan" },
          { href: "/procore-alternative", label: "Kortex vs Procore" },
          { href: "/field-service-software-quickbooks", label: "Works with QuickBooks" },
        ],
      },
    ],
  },
  {
    label: "Who it's for",
    width: "audience-dropdown",
    items: [
      {
        links: [
          { href: "/mep-contractors", label: "Mechanical, electrical and plumbing" },
          { href: "/construction-contractors", label: "Self-performing trades" },
          { href: "/builders-and-general-contractors", label: "Builders and general contractors" },
        ],
      },
    ],
  },
  { href: "/case-studies/hot-and-cold", label: "Our work" },
  {
    label: "Resources",
    width: "resource-dropdown",
    items: [
      {
        lead: { href: "/tools/rent-vs-own", label: "Rent vs own calculator", note: "Compare the cost with your own numbers." },
        links: [
          { href: "/certified-payroll", label: "Certified payroll guides" },
          { href: "/blog", label: "Blog" },
        ],
      },
    ],
  },
  { href: "/about", label: "About" },
];

export const PHONE = "(301) 889-8546";
export const PHONE_HREF = "tel:+13018898546";
export const EMAIL = "hello@kortexconsulting.com";
