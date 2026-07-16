"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { motionVariants, DURATION, EASE, type MotionVariantName } from "@/lib/motion";

export function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  variant?: MotionVariantName;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  if (prefersReducedMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={motionVariants[variant]}
      transition={{ duration: DURATION, ease: EASE, delay }}
    >
      {children}
    </Component>
  );
}
