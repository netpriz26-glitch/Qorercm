import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon, FacebookIcon, XIcon } from "@/components/SocialIcons";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/content/services";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-trust-800 bg-trust-950 pb-20 text-slate-300 sm:pb-10">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-lg font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-black text-trust-800">
              Q
            </span>
            {siteConfig.legalName}
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
            {siteConfig.description}
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={siteConfig.social.linkedin}
              aria-label="QoreRCM on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-trust-500"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              aria-label="QoreRCM on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-trust-500"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.twitter}
              aria-label="QoreRCM on X"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-trust-500"
            >
              <XIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
          <ul className="mt-3 space-y-2.5 text-sm text-slate-400">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-white">
                  {service.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-semibold text-teal-accent-400 hover:text-teal-accent-500">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Company</h3>
          <ul className="mt-3 space-y-2.5 text-sm text-slate-400">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-3 space-y-2.5 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-accent-400" aria-hidden="true" />
              <span>
                {siteConfig.contact.address.line1}
                <br />
                {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
                {siteConfig.contact.address.zip}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-teal-accent-400" aria-hidden="true" />
              <a href={`tel:${siteConfig.contact.phoneHref}`} className="hover:text-white">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-teal-accent-400" aria-hidden="true" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-trust-800 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:px-6">
        <span>
          © {year} {siteConfig.legalName}. All rights reserved.
        </span>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms-conditions" className="hover:text-white">
            Terms &amp; Conditions
          </Link>
          <Link href="/cookie-policy" className="hover:text-white">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
