import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal variant="fadeUp">
          <p
            className={cn(
              "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
              tone === "dark"
                ? "border-white/15 bg-white/5 text-brand-300"
                : "border-brand-200 bg-brand-50 text-brand-700"
            )}
          >
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal variant="fadeUp" delay={eyebrow ? 0.08 : 0}>
        <h2
          className={cn(
            "text-h2 font-heading font-bold tracking-tight",
            eyebrow && "mt-4",
            tone === "dark" ? "text-white" : "text-slate-900"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal variant="fadeUp" delay={eyebrow ? 0.14 : 0.08}>
          <p
            className={cn(
              "mt-4 text-lg leading-relaxed",
              align === "center" && "mx-auto max-w-xl",
              tone === "dark" ? "text-slate-300" : "text-slate-600"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
