"use client";

import Link from "next/link";
import { useState, type ButtonHTMLAttributes, type MouseEvent } from "react";
import type { VariantProps } from "class-variance-authority";
import { buttonStyles } from "@/components/ui/button-styles";
import { Magnetic } from "@/components/ui/Magnetic";
import { cn } from "@/lib/cn";

type Ripple = { id: number; x: number; y: number; size: number };

function useRipples() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function addRipple(event: MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const size = Math.max(bounds.width, bounds.height) * 1.4;
    const id = Date.now();
    setRipples((prev) => [
      ...prev,
      { id, x: event.clientX - bounds.left - size / 2, y: event.clientY - bounds.top - size / 2, size },
    ]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  }

  const rippleNodes = ripples.map((r) => (
    <span
      key={r.id}
      aria-hidden="true"
      className="animate-ripple pointer-events-none absolute rounded-full bg-white/50"
      style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
    />
  ));

  return { addRipple, rippleNodes };
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles>;

export function Button({ className, variant, size, onClick, children, ...props }: ButtonProps) {
  const { addRipple, rippleNodes } = useRipples();

  return (
    <Magnetic>
      <button
        {...props}
        onClick={(event) => {
          addRipple(event);
          onClick?.(event);
        }}
        className={cn(buttonStyles({ variant, size }), className)}
      >
        {children}
        {rippleNodes}
      </button>
    </Magnetic>
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
  const { addRipple, rippleNodes } = useRipples();

  return (
    <Magnetic>
      <Link
        href={href}
        {...props}
        onClick={addRipple}
        className={cn(buttonStyles({ variant, size }), className)}
      >
        {children}
        {rippleNodes}
      </Link>
    </Magnetic>
  );
}
