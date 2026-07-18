import type { LucideIcon } from "lucide-react";

/**
 * A flat, solid icon tile used on card grids — Services, Resources, Blog,
 * Case Studies.
 */
export function Icon3DTile({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-trust-50">
      <Icon className="h-6 w-6 text-trust-600" aria-hidden="true" />
    </div>
  );
}
