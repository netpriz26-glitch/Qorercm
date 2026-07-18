"use client";

import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 w-full border-b bg-white transition-shadow duration-200",
        scrolled ? "border-slate-200 shadow-sm" : "border-slate-100"
      )}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-trust-600 text-sm font-black text-white">
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
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-trust-700"
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
            className="hidden items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-trust-700 xl:flex"
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
