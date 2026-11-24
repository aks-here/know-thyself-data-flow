import { Activity, Footprints, HeartPulse, Moon } from "lucide-react";

/** Smartwatch + smartphone feeding a central health intelligence hub. */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-md" aria-hidden="true">
      <div className="absolute inset-0 bg-glow" />

      <svg viewBox="0 0 400 320" className="absolute inset-0 h-full w-full">
        <path
          d="M 92 110 C 150 110, 150 160, 200 160"
          fill="none"
          className="stroke-primary/40"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
        <path
          d="M 308 210 C 250 210, 250 160, 200 160"
          fill="none"
          className="stroke-primary/40"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
        <circle cx="146" cy="134" r="3" className="fill-primary" />
        <circle cx="254" cy="186" r="3" className="fill-primary" />
      </svg>

      {/* Smartwatch */}
      <div className="absolute left-[4%] top-[14%] flex flex-col items-center">
        <div className="h-3 w-10 rounded-t-md bg-forest-deep/80" />
        <div className="flex h-[88px] w-[76px] flex-col items-center justify-center gap-1 rounded-[22px] border-[3px] border-forest-deep bg-card shadow-lift">
          <HeartPulse className="h-4 w-4 text-primary" strokeWidth={2} />
          <span className="font-mono text-lg font-medium leading-none text-foreground">72</span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">bpm</span>
        </div>
        <div className="h-3 w-10 rounded-b-md bg-forest-deep/80" />
        <span className="eyebrow mt-2">Watch</span>
      </div>

      {/* Smartphone */}
      <div className="absolute bottom-[4%] right-[4%] flex flex-col items-center">
        <div className="flex h-[140px] w-[88px] flex-col gap-1.5 rounded-[16px] border-[3px] border-forest-deep bg-card p-2 shadow-lift">
          <div className="mx-auto mb-1 h-1 w-5 rounded-full bg-forest-deep/30" />
          <div className="flex items-center gap-1 rounded-md bg-mint-soft px-1.5 py-1">
            <Footprints className="h-2.5 w-2.5 text-primary" />
            <span className="whitespace-nowrap font-mono text-[8px] text-foreground">8,214</span>
          </div>
          <div className="flex items-center gap-1 rounded-md bg-mint-soft px-1.5 py-1">
            <Moon className="h-2.5 w-2.5 text-primary" />
            <span className="whitespace-nowrap font-mono text-[8px] text-foreground">7h 12m</span>
          </div>
          <div className="flex items-center gap-1 rounded-md bg-mint-soft px-1.5 py-1">
            <Activity className="h-2.5 w-2.5 text-primary" />
            <span className="whitespace-nowrap font-mono text-[8px] text-foreground">5.2 km/h</span>
          </div>
        </div>
        <span className="eyebrow mt-2">Phone</span>
      </div>

      {/* Central hub */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-hub shadow-lift ring-8 ring-mint/30">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary-foreground/30">
            <span className="font-display text-2xl italic text-primary-foreground">K</span>
          </div>
        </div>
        <span className="eyebrow mt-3 whitespace-nowrap text-primary">Health Intelligence</span>
      </div>
    </div>
  );
}
