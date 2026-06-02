import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-4 flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-[var(--muted)]",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-6 bg-[var(--border-bright)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-[16px] md:text-[19px] leading-relaxed text-[var(--foreground-dim)]">
          {description}
        </p>
      )}
    </div>
  );
}
