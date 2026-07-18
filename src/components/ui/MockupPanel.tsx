import type { LucideIcon } from "lucide-react";
import { Activity, CircleCheck } from "lucide-react";
import { cn } from "@/lib/cn";

export type MockupStat = {
  value: string;
  label: string;
  trendIcon?: LucideIcon;
};

export type MockupPanelProps = {
  title: string;
  icon?: LucideIcon;
  liveLabel?: string;
  stats: MockupStat[];
  bars?: number[];
  footerItems?: string[];
  className?: string;
  tone?: "light" | "dark";
};

/**
 * A parameterized "floating dashboard" illustration — the reusable visual
 * side for homepage service spotlights and per-service landing pages.
 * Generalized from the hero's original bespoke DashboardMockup so every
 * spotlighted service gets a distinct-but-consistent visual.
 */
export function MockupPanel({
  title,
  icon: Icon = Activity,
  liveLabel = "Live",
  stats,
  bars = [38, 52, 46, 64, 58, 74, 82],
  footerItems = [],
  className,
  tone = "dark",
}: MockupPanelProps) {
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "w-full p-5 sm:p-6",
        isLight ? "rounded-2xl border border-slate-200 bg-white shadow-lg" : "glass",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className={cn("h-4 w-4", isLight ? "text-trust-600" : "text-brand-300")} aria-hidden="true" />
          <span className={cn("text-sm font-semibold", isLight ? "text-slate-900" : "text-white")}>
            {title}
          </span>
        </div>
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
            isLight ? "bg-trust-50 text-trust-700" : "bg-brand-500/20 text-brand-300"
          )}
        >
          {liveLabel}
        </span>
      </div>

      {stats.length > 0 && (
        <div className="mt-5 grid grid-cols-2 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "rounded-xl border p-3",
                isLight ? "border-slate-100 bg-slate-50" : "border-white/10 bg-white/5"
              )}
            >
              <div
                className={cn(
                  "flex items-center gap-1 text-2xl font-bold",
                  isLight ? "text-slate-900" : "text-white"
                )}
              >
                {stat.value}
                {stat.trendIcon && (
                  <stat.trendIcon
                    className={cn("h-3.5 w-3.5", isLight ? "text-trust-600" : "text-brand-300")}
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className={cn("text-[11px]", isLight ? "text-slate-500" : "text-slate-400")}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {bars.length > 0 && (
        <div className="mt-5 flex h-20 items-end gap-1.5" aria-hidden="true">
          {bars.map((h, i) => (
            <div
              key={i}
              className={cn(
                "flex-1 rounded-t-sm",
                isLight ? "bg-trust-500" : "bg-gradient-to-t from-brand-500/80 to-accent-400/80"
              )}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      )}

      {footerItems.length > 0 && (
        <div
          className={cn(
            "mt-5 space-y-2 border-t pt-4",
            isLight ? "border-slate-100" : "border-white/10"
          )}
        >
          {footerItems.map((item) => (
            <div
              key={item}
              className={cn(
                "flex items-center gap-2 text-xs",
                isLight ? "text-slate-600" : "text-slate-300"
              )}
            >
              <CircleCheck
                className={cn("h-3.5 w-3.5 shrink-0", isLight ? "text-trust-600" : "text-brand-400")}
                aria-hidden="true"
              />
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
