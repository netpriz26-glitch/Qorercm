"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * A card that lifts and tilts toward the cursor (subtle CSS-3D depth, per
 * the "Interactive cards / slight rotation / layer depth" spec). Falls back
 * to a plain hover lift when the user prefers reduced motion.
 */
export function TiltCard({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark" | "plain";
}) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 220,
    damping: 22,
  });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left) / bounds.width - 0.5);
    y.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -6 }}
      style={
        prefersReducedMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 800 }
      }
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        tone === "dark" && "glass",
        tone === "light" && "glass-light",
        tone === "plain" && "rounded-3xl",
        "shadow-xl transition-shadow hover:shadow-2xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
