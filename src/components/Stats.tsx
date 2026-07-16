import { MeshBackground } from "@/components/backgrounds/MeshBackground";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const stats = [
  { value: 98, suffix: "%", prefix: "", label: "Clean claim rate" },
  { value: 30, suffix: "%", prefix: "", label: "Faster average reimbursement" },
  { value: 5, suffix: "%", prefix: "<", label: "Denial rate on managed claims" },
  { value: 150, suffix: "+", prefix: "", label: "Healthcare practices served" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-14 sm:py-16">
      <MeshBackground />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <StaggerGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="text-3xl font-extrabold text-white sm:text-4xl"
              />
              <div className="mt-1.5 text-sm text-brand-200">{stat.label}</div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <p className="mt-8 text-center text-xs text-slate-400">
          Illustrative example results — replace with your own verified performance data before
          publishing.
        </p>
      </div>
    </section>
  );
}
