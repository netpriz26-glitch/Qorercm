import { ShieldCheck, BadgeCheck, Lock, Award } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const badges = [
  { icon: ShieldCheck, label: "HIPAA Compliant" },
  { icon: BadgeCheck, label: "AAPC Certified Coders" },
  { icon: Lock, label: "SOC 2–Aligned Data Security" },
  { icon: Award, label: "150+ Practices Served" },
];

export function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <StaggerGroup className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {badges.map(({ icon: Icon, label }) => (
            <StaggerItem key={label} className="flex flex-col items-center gap-2 text-center">
              <Icon className="h-6 w-6 text-trust-600" aria-hidden="true" />
              <span className="text-xs font-semibold text-slate-600 sm:text-sm">{label}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
