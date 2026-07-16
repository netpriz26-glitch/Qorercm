import type { Variants } from "framer-motion";

// Duration/easing are intentionally NOT set on these variants — a
// variant's own `transition` takes priority over the `transition` prop
// passed to the component, which would make a per-instance `delay` prop
// impossible to apply. Reveal supplies duration/ease/delay together instead.
export const EASE = [0.16, 1, 0.3, 1] as const;
export const DURATION = 0.6;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const motionVariants = {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
} as const;

export type MotionVariantName = keyof typeof motionVariants;
