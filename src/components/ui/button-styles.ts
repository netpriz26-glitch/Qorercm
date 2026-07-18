import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-trust-600 text-white shadow-sm hover:bg-trust-700 focus-visible:outline-trust-600",
        secondary:
          "border border-trust-600 bg-white text-trust-700 hover:bg-trust-50 focus-visible:outline-trust-600",
        "secondary-dark":
          "border border-white/30 bg-transparent text-white hover:bg-white/10 focus-visible:outline-white",
        ghost:
          "text-slate-700 hover:bg-slate-100 focus-visible:outline-trust-600",
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
