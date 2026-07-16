import type { LucideIcon } from "lucide-react";
import { Activity, CircleCheck } from "lucide-react";

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
}: MockupPanelProps) {
  return (
    <div className={`glass w-full max-w-md p-5 sm:p-6 ${className ?? ""}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-brand-300" aria-hidden="true" />
          <span className="text-sm font-semibold text-white">{title}</span>
        </div>
        <span className="rounded-full bg-brand-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-brand-300">
          {liveLabel}
        </span>
      </div>

      {stats.length > 0 && (
        <div className="mt-5 grid grid-cols-2 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-1 text-2xl font-bold text-white">
                {stat.value}
                {stat.trendIcon && (
                  <stat.trendIcon className="h-3.5 w-3.5 text-brand-300" aria-hidden="true" />
                )}
              </div>
              <div className="text-[11px] text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {bars.length > 0 && (
        <div className="mt-5 flex h-20 items-end gap-1.5" aria-hidden="true">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-500/80 to-accent-400/80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      )}

      {footerItems.length > 0 && (
        <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
          {footerItems.map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
              <CircleCheck className="h-3.5 w-3.5 shrink-0 text-brand-400" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
