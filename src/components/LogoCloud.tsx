import { Reveal } from "@/components/motion/Reveal";

const clientWordmarks = [
  "Multi-Specialty Groups",
  "Family Care Networks",
  "Surgical Partners",
  "Outpatient Clinics",
  "Behavioral Health Practices",
  "Urgent Care Networks",
];

/**
 * An infinite-scroll marquee of client-type wordmarks. QoreRCM doesn't have
 * public client logos to display (healthcare privacy makes permissioned
 * logo use uncertain even long-term), so this stays text-based rather than
 * a real logo grid — replace with actual client logos if/when available.
 */
export function LogoCloud() {
  const track = [...clientWordmarks, ...clientWordmarks];

  return (
    <section className="border-y border-slate-200 bg-white py-10 sm:py-12">
      <Reveal variant="fadeUp">
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-slate-400">
          Trusted by practices like yours
        </p>
      </Reveal>

      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-12 pr-12">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 text-lg font-bold tracking-tight text-slate-400"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
