import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { cn } from "@/lib/cn";

export type TimelineStep = {
  number: string;
  title: string;
  description: string;
};

/**
 * A connected timeline — vertical line + step markers on mobile, a
 * horizontal connector across columns on larger screens.
 */
export function Timeline({ steps, tone = "light" }: { steps: TimelineStep[]; tone?: "light" | "dark" }) {
  return (
    <StaggerGroup className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      <div
        aria-hidden="true"
        className={cn(
          "absolute left-[15px] top-2 bottom-2 w-px lg:left-0 lg:right-0 lg:top-[15px] lg:h-px lg:w-auto lg:bottom-auto",
          tone === "dark" ? "bg-white/15" : "bg-slate-200"
        )}
      />

      {steps.map((step) => (
        <StaggerItem key={step.number} className="relative pl-10 lg:pl-0">
          <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-accent-500 text-xs font-bold text-white shadow-[0_10px_30px_rgba(96,165,250,0.35)] lg:relative lg:mb-4">
            {step.number}
          </span>
          <h3
            className={cn(
              "text-base font-semibold",
              tone === "dark" ? "text-white" : "text-slate-900"
            )}
          >
            {step.title}
          </h3>
          <p
            className={cn(
              "mt-2 text-sm leading-relaxed",
              tone === "dark" ? "text-slate-300" : "text-slate-600"
            )}
          >
            {step.description}
          </p>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
