import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function GlassCard({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn(tone === "dark" ? "glass" : "glass-light", className)}>{children}</div>
  );
}

/**
 * A premium placeholder for a section's "visual side" when a real
 * screenshot/illustration doesn't exist yet — implements the spec's
 * Placeholder Rules (glass panel, gradient icon badge, label, fixed
 * aspect ratio) instead of leaving a section text-only.
 */
export function GlassPlaceholder({
  icon: Icon,
  label,
  aspect = "video",
  tone = "dark",
  className,
}: {
  icon: LucideIcon;
  label: string;
  aspect?: "video" | "square" | "portrait";
  tone?: "light" | "dark";
  className?: string;
}) {
  const aspectClass =
    aspect === "video" ? "aspect-video" : aspect === "square" ? "aspect-square" : "aspect-[3/4]";

  return (
    <GlassCard
      tone={tone}
      className={cn(
        aspectClass,
        "flex w-full flex-col items-center justify-center gap-4 p-6 text-center",
        className
      )}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-accent-500 shadow-[0_10px_30px_rgba(96,165,250,0.35)]">
        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
      </span>
      <span
        className={cn(
          "text-sm font-semibold uppercase tracking-wide",
          tone === "dark" ? "text-slate-300" : "text-slate-500"
        )}
      >
        {label}
      </span>
    </GlassCard>
  );
}
