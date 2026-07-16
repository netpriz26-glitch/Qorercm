import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { TiltCard } from "@/components/ui/TiltCard";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { leadership } from "@/lib/content/leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the leadership team behind QoreRCM's revenue cycle management services.",
  alternates: { canonical: "/leadership" },
};

export default function LeadershipPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Leadership", path: "/leadership" },
        ])}
      />
      <PageHero
        eyebrow="Leadership"
        title="The Team Behind Your Revenue Cycle"
        description="Placeholder leadership profiles — replace with your real team's names, titles, and bios before publishing."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((leader) => (
            <StaggerItem key={leader.name}>
              <TiltCard tone="plain" className="h-full border border-slate-200 bg-white p-6 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-accent-500 text-xl font-bold text-white shadow-[0_10px_30px_rgba(96,165,250,0.35)]">
                  {leader.initials}
                </div>
                <h2 className="mt-4 text-base font-semibold text-slate-900">{leader.name}</h2>
                <p className="text-sm font-medium text-brand-700">{leader.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{leader.bio}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
