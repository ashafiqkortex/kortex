import { cn } from "@/lib/utils";

/**
 * Kortex logo — the official "K-Badge" from the brand kit.
 *
 * The mark is a solid clay squircle with the K knocked out (concept 09).
 * These are the supplied, already-outlined SVGs in /public/brand — do NOT
 * recreate the mark in code. Clay on light grounds, tan on dark grounds.
 * See github.com/blazerianone/kortex-brand.
 */
export function Logo({
  className,
  wordmark = true,
  variant = "light",
}: {
  className?: string;
  wordmark?: boolean;
  variant?: "light" | "dark";
}) {
  if (!wordmark) return <LogoMark className={className} variant={variant} />;

  const src =
    variant === "dark"
      ? "/brand/kortex-lockup-horizontal-dark.svg"
      : "/brand/kortex-lockup-horizontal.svg";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Kortex"
      width={151}
      height={36}
      className={cn("h-7 w-auto select-none", className)}
    />
  );
}

export function LogoMark({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const src =
    variant === "dark"
      ? "/brand/kortex-mark-tan.svg"
      : "/brand/kortex-mark-clay.svg";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Kortex"
      width={24}
      height={24}
      className={cn("h-6 w-6 select-none", className)}
    />
  );
}
