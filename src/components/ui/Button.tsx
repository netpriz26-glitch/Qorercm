import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { buttonStyles } from "@/components/ui/button-styles";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles>;

export function Button({ className, variant, size, children, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(buttonStyles({ variant, size }), className)}>
      {children}
    </button>
  );
}

type ButtonLinkProps = VariantProps<typeof buttonStyles> & {
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
};

export function ButtonLink({ href, className, variant, size, children, ...props }: ButtonLinkProps) {
  return (
    <Link href={href} {...props} className={cn(buttonStyles({ variant, size }), className)}>
      {children}
    </Link>
  );
}
