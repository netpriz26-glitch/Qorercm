"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { mainNav } from "@/lib/content/nav";
import { ButtonLink } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-black text-white shadow-[0_4px_16px_rgba(59,130,246,0.4)]">
            Q
          </span>
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-brand-700"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="hidden items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-brand-700 xl:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>
          <ButtonLink href="/#audit-form" size="md" className="hidden sm:inline-flex">
            {siteConfig.offer.ctaLabel}
          </ButtonLink>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
