import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { Icon3DTile } from "@/components/ui/Icon3DTile";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { services } from "@/lib/content/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service medical billing and revenue cycle management: coding, denial management, credentialing, A/R recovery, analytics, and AI-powered automation.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Services"
        title="Every Piece of Your Revenue Cycle, One Accountable Team"
        description="From claim submission to final payment, each service below is delivered by the same dedicated team — not handed off between vendors."
      >
        <ButtonLink href="/#audit-form" size="lg">
          {siteConfig.offer.ctaLabel}
        </ButtonLink>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug} id={service.slug} className="scroll-mt-24">
              <Link href={`/services/${service.slug}`} className="block h-full">
                <TiltCard tone="plain" className="h-full border border-slate-200 bg-white p-6">
                  <Icon3DTile icon={service.icon} />
                  <h2 className="mt-4 text-lg font-semibold text-slate-900">{service.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2 text-xs leading-relaxed text-slate-600">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-flex items-center gap-1.5 border-t border-slate-100 pt-4 text-sm font-semibold text-brand-700">
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </TiltCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Reveal variant="fadeUp">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Not sure which service you need?
            </h2>
            <p className="mt-3 text-slate-600">
              Start with a free revenue cycle audit — we&apos;ll tell you exactly where you&apos;re
              losing revenue and which services would fix it.
            </p>
            <div className="mt-6">
              <ButtonLink href="/#audit-form" size="lg">
                {siteConfig.offer.ctaLabel}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
