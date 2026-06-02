import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className,
  arrow = false,
  external = false,
  type = "button",
  disabled = false,
}: Props) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 relative overflow-hidden";

  const sizes: Record<Size, string> = {
    sm: "h-9 px-4 text-[14px]",
    md: "h-11 px-5 text-[15px]",
    lg: "h-12 px-6 text-[17px]",
  };

  const variants: Record<Variant, string> = {
    primary:
      "bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-[var(--background)] shadow-[0_0_0_1px_var(--border-bright)]",
    secondary:
      "bg-transparent text-foreground border border-[var(--border-bright)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
    ghost:
      "bg-transparent text-[var(--foreground-dim)] hover:text-foreground",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {arrow && (
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.75}
          />
        )}
      </span>
    </>
  );

  const variantClass = disabled
    ? "bg-[var(--muted)] text-white cursor-not-allowed pointer-events-none shadow-[0_0_0_1px_var(--border-bright)]"
    : variants[variant];

  const classes = cn(
    base,
    sizes[size],
    variantClass,
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
