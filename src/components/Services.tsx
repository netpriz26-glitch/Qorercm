import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content/services";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Services() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          title="Full-Service Revenue Cycle Management"
          description="One accountable team across the entire billing lifecycle — from claim submission to final payment."
        />

        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-trust-50">
                  <service.icon className="h-6 w-6 text-trust-600" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.shortDescription}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal variant="fadeUp">
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-trust-700 hover:text-trust-800"
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
