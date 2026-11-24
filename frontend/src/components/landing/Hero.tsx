import { HeartPulse, Moon } from "lucide-react";

import heartMascot from "@/assets/heart_mascot.webp.asset.json";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-12 pt-4 md:px-8 md:pb-20 md:pt-8 lg:grid-cols-[1fr_1fr] lg:gap-12"
    >
      <div className="text-center lg:text-left">
        <span className="inline-flex items-center gap-2 rounded-full bg-card px-3.5 py-1.5 text-xs font-semibold text-accent-foreground shadow-soft">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Passive health intelligence
        </span>
        <h1 className="mt-5 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-foreground min-[360px]:text-5xl sm:text-6xl lg:text-7xl">
          All Your Health,{" "}
          <span className="relative isolate inline-block whitespace-nowrap">
            <span
              className="animate-glow absolute -inset-x-3 inset-y-1 -z-10 rounded-3xl bg-lime blur-lg"
              aria-hidden="true"
            />
            <span className="text-glow">In One Place.</span>
            <svg
              viewBox="0 0 300 16"
              preserveAspectRatio="none"
              className="absolute -bottom-2 left-0 h-3 w-full"
              aria-hidden="true"
            >
              <path
                d="M4 11 C 80 3, 200 3, 296 9"
                fill="none"
                className="stroke-primary"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0">
          Your everyday devices collect health data. Livora brings it together and helps you
          understand your body.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
          <a
            href="#devices"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-semibold text-card transition-opacity hover:opacity-85"
          >
            Connect your devices
          </a>
          <a
            href="#how"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-card px-6 text-base font-semibold text-foreground shadow-soft transition-colors hover:bg-lime-soft"
          >
            How it works
          </a>
        </div>
      </div>

      <HeroScene />
    </section>
  );
}

function Sparkle({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 0 C 13 8, 16 11, 24 12 C 16 13, 13 16, 12 24 C 11 16, 8 13, 0 12 C 8 11, 11 8, 12 0 Z"
        className="fill-primary"
      />
    </svg>
  );
}

function Leaf({ className, tone }: { className: string; tone: "leaf" | "sun" }) {
  return (
    <svg viewBox="0 0 60 120" className={className} aria-hidden="true">
      <path
        d="M30 120 C 0 90, 0 30, 30 0 C 60 30, 60 90, 30 120 Z"
        className={tone === "leaf" ? "fill-primary" : "fill-sun"}
      />
      <path d="M30 118 L30 12" className="stroke-card/40" strokeWidth="2" fill="none" />
    </svg>
  );
}

function MiniWatch() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-2 w-6 rounded-t-sm bg-foreground/75" />
      <div className="flex h-11 w-10 items-center justify-center rounded-xl bg-foreground">
        <HeartPulse className="h-5 w-5 text-coral" strokeWidth={2.5} />
      </div>
      <div className="h-2 w-6 rounded-b-sm bg-foreground/75" />
    </div>
  );
}

/** Heart mascot surrounded by device bubbles, on a soft lime hill. */
function HeroScene() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-[2.5rem] bg-scene shadow-lift">
      {/* clouds */}
      <div className="absolute -left-10 top-6 h-24 w-48 rounded-full bg-card/60 blur-xl" aria-hidden="true" />
      <div className="absolute -right-8 top-24 h-20 w-40 rounded-full bg-card/60 blur-xl" aria-hidden="true" />

      {/* dashed orbits */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d="M 70 150 C 90 80, 150 60, 175 70"
          fill="none"
          className="stroke-primary"
          strokeWidth="3"
          strokeDasharray="7 8"
          strokeLinecap="round"
        />
        <path
          d="M 225 70 C 260 60, 300 75, 320 105"
          fill="none"
          className="stroke-primary"
          strokeWidth="3"
          strokeDasharray="7 8"
          strokeLinecap="round"
        />
        <path
          d="M 335 180 C 345 220, 330 240, 310 250"
          fill="none"
          className="stroke-primary"
          strokeWidth="3"
          strokeDasharray="7 8"
          strokeLinecap="round"
        />
      </svg>

      <Sparkle className="absolute left-[7%] top-[8%] h-6 w-6" />
      <Sparkle className="absolute right-[10%] top-[38%] h-5 w-5" />
      <Sparkle className="absolute left-[44%] top-[4%] h-3 w-3 opacity-70" />

      {/* device bubbles */}
      <div className="absolute left-[8%] top-[30%] flex h-[19%] w-[19%] items-center justify-center rounded-full bg-card shadow-soft">
        <MiniWatch />
      </div>
      <div className="absolute left-1/2 top-[9%] flex h-[17%] w-[17%] -translate-x-1/2 items-center justify-center rounded-full bg-card shadow-soft">
        <HeartPulse className="h-1/2 w-1/2 text-coral" strokeWidth={2.25} />
      </div>
      <div className="absolute right-[8%] top-[18%] flex h-[17%] w-[17%] items-center justify-center rounded-full bg-card shadow-soft">
        <Moon className="h-1/2 w-1/2 fill-lilac text-lilac" />
      </div>

      {/* hill + leaves */}
      <Leaf className="absolute -left-3 bottom-[8%] h-[34%] -rotate-[25deg]" tone="leaf" />
      <Leaf className="absolute left-[10%] bottom-[10%] h-[18%] -rotate-[40deg]" tone="sun" />
      <Leaf className="absolute -right-3 bottom-[8%] h-[34%] rotate-[25deg]" tone="leaf" />
      <Leaf className="absolute right-[10%] bottom-[10%] h-[18%] rotate-[40deg]" tone="sun" />
      <div className="absolute -bottom-[22%] left-1/2 h-[40%] w-[130%] -translate-x-1/2 rounded-[50%] bg-lime" aria-hidden="true" />

      <img
        src={heartMascot.url}
        alt="Livora's smiling heart character waving and holding a phone"
        width={720}
        height={720}
        className="animate-bob absolute bottom-[6%] left-1/2 w-[60%] -translate-x-1/2"
      />
    </div>
  );
}
