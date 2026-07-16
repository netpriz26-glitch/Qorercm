import type { LucideIcon } from "lucide-react";

/**
 * A CSS-3D (perspective + rotate) icon tile used on card grids — Services,
 * Resources, Blog, Case Studies. Deliberately not WebGL: a grid of 6-9 cards
 * each running its own R3F canvas would tank Core Web Vitals, so full 3D
 * scenes are reserved for hero-level moments (see Scene3D) and cards get a
 * cheap, still-genuinely-3D CSS transform instead.
 */
export function Icon3DTile({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="group/tile [perspective:600px]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-accent-500 shadow-[0_10px_30px_rgba(20,184,166,0.35)] transition-transform duration-500 [transform-style:preserve-3d] group-hover/tile:[transform:rotateY(18deg)_rotateX(-10deg)_translateZ(6px)]">
        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
      </div>
    </div>
  );
}
