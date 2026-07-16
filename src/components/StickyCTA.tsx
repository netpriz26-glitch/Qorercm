"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Phone, ClipboardCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const SCROLL_THRESHOLD = 640;

export function StickyCTA() {
  const [showDesktopCta, setShowDesktopCta] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowDesktopCta(latest > SCROLL_THRESHOLD);
  });

  return (
    <>
      {/* Mobile: full-width bar, always visible */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex border-t border-slate-200 bg-white shadow-[0_-2px_12px_rgba(0,0,0,0.08)] sm:hidden">
        <a
          href={`tel:${siteConfig.contact.phoneHref}`}
          className="flex flex-1 items-center justify-center gap-1.5 border-r border-slate-200 py-3 text-sm font-semibold text-slate-700"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
        <Link
          href="/#audit-form"
          className="flex flex-1 items-center justify-center gap-1.5 bg-brand-600 py-3 text-sm font-semibold text-white"
        >
          <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
          Free Audit
        </Link>
      </div>

      {/* Desktop: floating pill, appears after scrolling past the hero */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-30 hidden sm:block">
        <AnimatePresence>
          {showDesktopCta && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.9 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto"
            >
              <Link
                href="/#audit-form"
                aria-label={siteConfig.offer.ctaLabel}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(59,130,246,0.45)] transition hover:scale-[1.03]"
              >
                <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                {siteConfig.offer.ctaLabel}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
