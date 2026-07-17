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
    <header className="fixed inset-x-0 top-3 z-40 px-4 sm:px-6">
      <div
        className={cn(
          "relative mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2 backdrop-blur-[10px] transition-all duration-300 sm:px-5",
          scrolled
            ? "border border-slate-900/[0.08] bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
            : "border border-white/10 bg-white/[0.06] shadow-none"
        )}
      >
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 text-lg font-bold tracking-tight transition-colors",
            scrolled ? "text-slate-900" : "text-white"
          )}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-black text-white shadow-[0_4px_16px_rgba(59,130,246,0.4)]">
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
                "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? pathname === item.href
                    ? "text-brand-700"
                    : "text-slate-600 hover:text-slate-900"
                  : pathname === item.href
                    ? "text-white"
                    : "text-white/75 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className={cn(
              "hidden items-center gap-1.5 text-sm font-semibold transition-colors xl:flex",
              scrolled ? "text-slate-700 hover:text-brand-700" : "text-white/85 hover:text-white"
            )}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>
          <ButtonLink
            href="/#audit-form"
            size="md"
            className="hidden rounded-full sm:inline-flex"
          >
            {siteConfig.offer.ctaLabel}
          </ButtonLink>
          <MobileMenu light={!scrolled} />
        </div>
      </div>
    </header>
  );
}
