import { cn } from "@/lib/utils";

/**
 * Kortex wordmark + layered mark.
 *
 * The mark tells the brand story in three elements:
 *   - Dim line   → how things *were* (manual, pre-AI workflows)
 *   - Teal line  → how things are *now* (AI-powered, automated)
 *   - Node       → AI itself, the catalyst connecting the two
 *
 * Read together: the mark is a tiny diagram of what Kortex does — moving
 * a business from the old way to the new way, with AI as the bridge.
 */
export function Logo({ className, wordmark = true }: { className?: string; wordmark?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      {wordmark && (
        <span className="text-[17px] font-medium tracking-[-0.01em] text-foreground">
          Kortex
        </span>
      )}
    </div>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Kortex"
    >
      {/* Outer square frame — represents the system boundary */}
      <rect
        x="1.5"
        y="1.5"
        width="21"
        height="21"
        rx="4"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      {/* Upper layer — the "reporting" layer */}
      <line
        x1="5"
        y1="9"
        x2="19"
        y2="9"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      {/* Lower layer — the "truth" layer (accent) */}
      <line
        x1="5"
        y1="15"
        x2="19"
        y2="15"
        stroke="var(--accent)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Node dot — the read point */}
      <circle cx="12" cy="15" r="2" fill="var(--accent)" />
      <circle cx="12" cy="15" r="4" fill="var(--accent)" fillOpacity="0.15" />
    </svg>
  );
}
