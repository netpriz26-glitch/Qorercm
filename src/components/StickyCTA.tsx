import Link from "next/link";
import { Phone, ClipboardCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function StickyCTA() {
  return (
    /* Mobile: full-width bar, always visible */
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
        className="flex flex-1 items-center justify-center gap-1.5 bg-trust-600 py-3 text-sm font-semibold text-white"
      >
        <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
        Free Audit
      </Link>
    </div>
  );
}
