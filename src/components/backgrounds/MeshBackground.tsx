/**
 * Layered dark background: subtle grid pattern + mesh gradient glow +
 * a couple of blurred floating blobs. Pure CSS (no canvas/JS), so it's
 * effectively free at runtime — safe to use on every dark section.
 */
export function MeshBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-mesh-ink" />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="animate-float absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div
        className="animate-float absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-accent-500/15 blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  );
}
