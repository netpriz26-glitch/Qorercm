import { Activity, TrendingUp, CircleCheck } from "lucide-react";

const bars = [38, 52, 46, 64, 58, 74, 82];

/**
 * A static "floating healthcare dashboard" illustration — the hero's
 * visual centerpiece, layered in front of the Scene3D panels for depth.
 */
export function DashboardMockup() {
  return (
    <div className="glass w-full max-w-md p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-brand-300" aria-hidden="true" />
          <span className="text-sm font-semibold text-white">Revenue Cycle Overview</span>
        </div>
        <span className="rounded-full bg-brand-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-brand-300">
          Live
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="text-2xl font-bold text-white">98%</div>
          <div className="text-[11px] text-slate-400">Clean claim rate</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center gap-1 text-2xl font-bold text-white">
            $412k
            <TrendingUp className="h-3.5 w-3.5 text-brand-300" aria-hidden="true" />
          </div>
          <div className="text-[11px] text-slate-400">Collected this month</div>
        </div>
      </div>

      <div className="mt-5 flex h-20 items-end gap-1.5" aria-hidden="true">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-500/80 to-accent-400/80"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
        {["Claim #48213 — approved", "Denial appeal #103 — submitted"].map((item) => (
          <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
            <CircleCheck className="h-3.5 w-3.5 shrink-0 text-brand-400" aria-hidden="true" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
