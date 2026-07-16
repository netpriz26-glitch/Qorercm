import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content/services";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { TiltCard } from "@/components/ui/TiltCard";
import { Icon3DTile } from "@/components/ui/Icon3DTile";

export function Services() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="fadeUp">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Full-Service Revenue Cycle Management
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              One accountable team across the entire billing lifecycle — from claim submission to
              final payment.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <TiltCard tone="plain" className="h-full border border-slate-200 bg-white p-6">
                <Icon3DTile icon={service.icon} />
                <h3 className="mt-4 text-base font-semibold text-slate-900">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.shortDescription}
                </p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal variant="fadeUp">
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              View all services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
