import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-[0_8px_30px_rgba(20,184,166,0.35)] hover:shadow-[0_12px_40px_rgba(20,184,166,0.5)] hover:scale-[1.02] focus-visible:outline-brand-500",
        secondary:
          "glass-light text-slate-900 hover:bg-white/90 hover:scale-[1.02] focus-visible:outline-brand-500",
        "secondary-dark":
          "glass text-white hover:bg-white/15 hover:scale-[1.02] focus-visible:outline-accent-400",
        ghost:
          "text-slate-700 hover:bg-slate-100 focus-visible:outline-brand-500",
      },
      size: {
        md: "px-5 py-2.5 text-sm",
        lg: "px-7 py-3.5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
