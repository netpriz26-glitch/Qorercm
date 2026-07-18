"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { mainNav } from "@/lib/content/nav";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full overflow-hidden border-b border-slate-200 bg-white shadow-md"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6 lg:px-8">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-semibold",
                    pathname === item.href
                      ? "bg-trust-50 text-trust-700"
                      : "text-slate-700 hover:bg-slate-50"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${siteConfig.contact.phoneHref}`}
                className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-700"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
