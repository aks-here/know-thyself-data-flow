import { createFileRoute } from "@tanstack/react-router";
import {
  AudioLines,
  Brain,
  Cloud,
  HeartPulse,
  LineChart,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Stethoscope,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { DataFlow } from "@/components/landing/DataFlow";
import { HeroVisual } from "@/components/landing/HeroVisual";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KNOW THYSELF — Your Body. Your Data. Your Understanding." },
      {
        name: "description",
        content:
          "KNOW THYSELF turns everyday smartphone and smartwatch data into personal health insights — no manual tracking.",
      },
      { property: "og:title", content: "KNOW THYSELF — Your Body. Your Data. Your Understanding." },
      {
        property: "og:description",
        content:
          "Passive device data, fused into a personal baseline, delivered as insights for you and your doctor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <DataFlow />
        <BigIdea />
        <Ecosystem />
      </main>
      <Footer />
    </div>
  );
}

function Brand({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-hub">
        <span className="font-display text-sm italic leading-none text-primary-foreground">K</span>
      </span>
      <span className="text-sm font-semibold tracking-[0.18em] text-foreground">KNOW THYSELF</span>
    </span>
  );
}

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 md:px-8">
      <Brand />
      <span className="hidden font-mono text-[11px] text-muted-foreground sm:block">
        Your Body. Your Data. Your Understanding.
      </span>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-6 pt-6 md:px-8 md:pt-10 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground shadow-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Passive personal health intelligence
        </span>
        <h1 className="mt-5 font-display text-5xl leading-[0.98] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Your body is constantly <em className="text-primary">telling you</em> something.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          We turn everyday smartphone and smartwatch data into meaningful personal health insights —
          without manual tracking.
        </p>
        <a
          href="#how"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-colors hover:bg-forest-deep"
        >
          See the data flow
        </a>
      </div>
      <HeroVisual />
    </section>
  );
}

const PILLARS: { label: string; icon: LucideIcon }[] = [
  { label: "Zero-Effort Tracking", icon: Zap },
  { label: "Personalised Intelligence", icon: Sparkles },
  { label: "Doctor-Ready Insights", icon: Stethoscope },
];

function BigIdea() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 md:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-forest-deep px-6 py-12 text-center md:px-16 md:py-16">
        <div className="absolute inset-0 bg-glow opacity-30" aria-hidden="true" />
        <span className="eyebrow relative text-mint">The big idea</span>
        <p className="relative mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight text-primary-foreground md:text-5xl">
          No manual logging. No unnecessary reminders.{" "}
          <em className="text-mint">Just your everyday health data working for you.</em>
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-2">
          {PILLARS.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-primary-foreground/5 px-4 py-2 text-sm text-primary-foreground"
            >
              <Icon className="h-3.5 w-3.5 text-mint" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const TECH: { name: string; role: string; icon: LucideIcon }[] = [
  { name: "Apple HealthKit", role: "Data access", icon: HeartPulse },
  { name: "Google Health Connect", role: "Data access", icon: Smartphone },
  { name: "AI / Time-Series Engine", role: "Personal baseline", icon: LineChart },
  { name: "ElevenLabs", role: "Voice accessibility", icon: AudioLines },
  { name: "AWS + .xyz", role: "Temporary report sharing", icon: Cloud },
];

function Ecosystem() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 md:px-8 md:py-20">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
        <div>
          <span className="eyebrow text-primary">Technology & ecosystem</span>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground md:text-4xl">
            Built on what people already wear.
          </h2>
        </div>
        <Brain className="hidden h-6 w-6 text-primary/40 md:block" aria-hidden="true" />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {TECH.map(({ name, role, icon: Icon }) => (
          <div key={name} className="rounded-2xl border bg-card p-4 shadow-soft">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <div className="mt-3 text-sm font-semibold text-foreground">{name}</div>
            <div className="mt-0.5 text-xs text-muted-foreground">{role}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-2xl bg-mint-soft px-4 py-3.5">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
        <p className="text-sm leading-relaxed text-accent-foreground">
          <span className="font-semibold">Privacy-first by design.</span> Personal health data is
          intended to remain on-device, with consent-based temporary sharing for doctors.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <Brand />
          <p className="mt-2 font-display text-lg italic text-muted-foreground">
            Understand your body before it asks for attention.
          </p>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          wHACKiest 2026 <span className="text-primary">|</span> Track 3: Know Thyself
        </p>
      </div>
    </footer>
  );
}
