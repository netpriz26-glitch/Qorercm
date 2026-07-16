"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";

function SceneLoading() {
  return (
    <div
      className="absolute inset-0 animate-pulse rounded-[24px] bg-gradient-to-br from-brand-500/15 via-accent-500/10 to-transparent"
      aria-hidden="true"
    />
  );
}

const FloatingPanelsCanvas = dynamic(() => import("./scenes/FloatingPanelsCanvas"), {
  ssr: false,
  loading: SceneLoading,
});

const OrbitNodesCanvas = dynamic(() => import("./scenes/OrbitNodesCanvas"), {
  ssr: false,
  loading: SceneLoading,
});

const SCENES = {
  panels: FloatingPanelsCanvas,
  orbit: OrbitNodesCanvas,
} as const;

export type Scene3DVariant = keyof typeof SCENES;

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

/**
 * Lazy-loaded, GPU-accelerated 3D scene. Three.js/@react-three/fiber are
 * only fetched once this mounts on the client (code-split out of the main
 * bundle), and the WebGL canvas never mounts at all for
 * prefers-reduced-motion — it's replaced with a static gradient panel.
 */
export function Scene3D({
  variant,
  className,
}: {
  variant: Scene3DVariant;
  className?: string;
}) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const SceneComponent = SCENES[variant];

  if (reducedMotion) {
    return (
      <div
        className={cn(
          "rounded-[24px] bg-gradient-to-br from-brand-500/25 via-accent-500/15 to-transparent",
          className
        )}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className={cn("relative", className)} aria-hidden="true">
      <SceneComponent />
    </div>
  );
}
