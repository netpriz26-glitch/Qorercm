import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { TiltCard } from "@/components/ui/TiltCard";
import { Reveal } from "@/components/motion/Reveal";
import { Scene3D } from "@/components/three/Scene3D";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.legalName} — call, email, or send a message.`,
  alternates: { canonical: "/contact" },
};

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phoneHref}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.zip}`,
    href: undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri, 8:00 AM – 6:00 PM CT",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Revenue Cycle"
        description="Reach out directly, or send a message and a member of our team will follow up within one business day."
      />

      <section className="relative overflow-hidden bg-ink-950 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal variant="fadeRight">
              <div className="relative mb-8 hidden overflow-hidden rounded-[24px] bg-white/5 lg:block">
                <Scene3D variant="orbit" className="h-56 w-full" />
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => {
                const Content = (
                  <TiltCard tone="dark" className="h-full p-5">
                    <card.icon className="h-5 w-5 text-brand-300" aria-hidden="true" />
                    <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {card.label}
                    </div>
                    <div className="mt-1 text-sm font-medium text-white">{card.value}</div>
                  </TiltCard>
                );
                return (
                  <Reveal key={card.label} variant="fadeUp">
                    {card.href ? (
                      <a href={card.href} className="block h-full">
                        {Content}
                      </a>
                    ) : (
                      Content
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal variant="fadeLeft">
            <div className="glass p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white">Send Us a Message</h2>
              <p className="mt-1 text-sm text-slate-300">
                We&apos;ll route your message to the right person on our team.
              </p>
              <div className="mt-5">
                <Suspense fallback={null}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
