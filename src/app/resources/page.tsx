import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { TiltCard } from "@/components/ui/TiltCard";
import { Icon3DTile } from "@/components/ui/Icon3DTile";
import { ButtonLink } from "@/components/ui/Button";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { resources } from "@/lib/content/resources";

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides and checklists for reducing denials, choosing an RCM partner, and managing credentialing timelines.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ])}
      />
      <PageHero
        eyebrow="Resources"
        title="Guides for Running a Healthier Revenue Cycle"
        description="Practical guides and checklists from our team — request access and we'll send them directly."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <StaggerItem key={resource.slug}>
              <TiltCard tone="plain" className="flex h-full flex-col border border-slate-200 bg-white p-6">
                <Icon3DTile icon={resource.icon} />
                <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {resource.format}
                </span>
                <h2 className="mt-1 text-base font-semibold text-slate-900">{resource.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {resource.description}
                </p>
                <ButtonLink
                  href={`/contact?resource=${resource.slug}`}
                  variant="primary"
                  size="md"
                  className="mt-5"
                >
                  Request Access
                </ButtonLink>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
