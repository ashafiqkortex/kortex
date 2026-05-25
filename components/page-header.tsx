import { Container } from "@/components/ui/container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 border-b border-[var(--border)]">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 0%, rgba(94,234,212,0.06), transparent 60%)",
        }}
      />
      <Container size="wide" className="relative">
        <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[var(--muted)] mb-5">
          <span className="h-px w-6 bg-[var(--border-bright)]" />
          {eyebrow}
        </div>
        <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] leading-[1.02] tracking-[-0.02em] text-foreground max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-[var(--foreground-dim)]">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
