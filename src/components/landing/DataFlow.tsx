import {
  Activity,
  ArrowDown,
  ArrowRight,
  Brain,
  Database,
  Footprints,
  HeartPulse,
  Moon,
  Smartphone,
  Stethoscope,
  User,
  Watch,
  Waves,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { BASELINE } from "@/lib/sample-data";

function StepCard({
  step,
  title,
  icons,
  description,
  children,
}: {
  step: number;
  title: string;
  icons: LucideIcon[];
  description: string;
  children: ReactNode;
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl border bg-card p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="eyebrow">Step {String(step).padStart(2, "0")}</span>
        <div className="flex -space-x-1.5">
          {icons.map((Icon, i) => (
            <span
              key={i}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-accent text-accent-foreground"
            >
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </span>
          ))}
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-4 flex flex-1 flex-col">{children}</div>
    </article>
  );
}

function Connector() {
  return (
    <div className="flex items-center justify-center py-1 lg:py-0" aria-hidden="true">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft">
        <ArrowRight className="hidden h-4 w-4 lg:block" />
        <ArrowDown className="h-4 w-4 lg:hidden" />
      </span>
    </div>
  );
}

const SIGNALS: { label: string; icon: LucideIcon }[] = [
  { label: "Heart Rate", icon: HeartPulse },
  { label: "Sleep", icon: Moon },
  { label: "Steps", icon: Footprints },
  { label: "Walking Speed", icon: Activity },
  { label: "Gait Patterns", icon: Waves },
];

export function DataFlow() {
  return (
    <section id="how" className="mx-auto w-full max-w-7xl px-5 pb-14 pt-8 md:px-8 md:pb-20 md:pt-10">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow text-primary">How we use your data</span>
        <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl">
          From everyday data to <em className="text-primary">meaningful</em> health insights.
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1.15fr] lg:items-stretch lg:gap-2">
        {/* 1 — Collection */}
        <StepCard
          step={1}
          title="Data Collection"
          icons={[Watch, Smartphone]}
          description="Collect passive data from existing devices."
        >
          <ul className="space-y-1.5">
            {SIGNALS.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-xl bg-muted px-3 py-1.5 text-sm text-foreground"
              >
                <Icon className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                {label}
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-4 font-mono text-[11px] text-muted-foreground">
            Apple HealthKit <span className="text-primary">|</span> Google Health Connect
          </p>
        </StepCard>

        <Connector />

        {/* 2 — Fusion */}
        <StepCard
          step={2}
          title="Data Fusion"
          icons={[Database]}
          description="Combine data from different devices, remove duplicates and fill missing information."
        >
          <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-2xl bg-muted p-4">
            <div className="flex w-full gap-2">
              <div className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border bg-card py-2 text-xs text-foreground">
                <Watch className="h-3.5 w-3.5 text-primary" /> Watch
              </div>
              <div className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border bg-card py-2 text-xs text-foreground">
                <Smartphone className="h-3.5 w-3.5 text-primary" /> Phone
              </div>
            </div>
            <svg viewBox="0 0 100 28" className="h-7 w-full" aria-hidden="true">
              <path d="M 25 0 C 25 16, 50 12, 50 28" fill="none" className="stroke-primary/50" strokeWidth="1.2" />
              <path d="M 75 0 C 75 16, 50 12, 50 28" fill="none" className="stroke-primary/50" strokeWidth="1.2" />
            </svg>
            <div className="w-full rounded-xl bg-primary px-3 py-2.5 text-center text-primary-foreground">
              <div className="text-sm font-medium">Unified Health Profile</div>
              <div className="mt-0.5 font-mono text-[10px] opacity-75">deduplicated · gap-filled</div>
            </div>
          </div>
        </StepCard>

        <Connector />

        {/* 3 — Baseline */}
        <StepCard
          step={3}
          title="Personal Baseline AI"
          icons={[Brain]}
          description="Learn what is normal for each individual and detect unusual changes over time."
        >
          <div className="space-y-2">
            <div className="flex flex-col gap-0.5 rounded-xl bg-muted px-3 py-2">
              <span className="eyebrow">Personal baseline</span>
              <span className="whitespace-nowrap font-mono text-sm text-foreground">{BASELINE.baselineKmh} km/h</span>
            </div>
            <div className="flex flex-col gap-0.5 rounded-xl bg-muted px-3 py-2">
              <span className="eyebrow">Current trend</span>
              <span className="whitespace-nowrap font-mono text-sm text-foreground">{BASELINE.currentKmh} km/h</span>
            </div>
            <div className="rounded-xl border border-alert/30 bg-alert-soft px-3 py-2">
              <span className="eyebrow text-alert">Insight</span>
              <p className="mt-0.5 text-sm font-medium text-foreground">
                {BASELINE.changePercent}% decrease from personal baseline.
              </p>
            </div>
          </div>
          <p className="mt-auto pt-4 font-display text-lg italic leading-snug text-primary">
            “We track changes in YOU, not comparisons with everyone else.”
          </p>
        </StepCard>

        <Connector />

        {/* 4 — Output */}
        <StepCard
          step={4}
          title="Actionable Output"
          icons={[HeartPulse, Stethoscope]}
          description="Insights delivered to the people who need them."
        >
          <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
            <OutputCard
              icon={User}
              title="For the user"
              items={["Simple health nudges.", "Voice-based summaries.", "Awareness of unusual changes."]}
            />
            <OutputCard
              icon={Stethoscope}
              title="For the doctor"
              strong
              items={[
                "30-day health summary.",
                "Heart rate, sleep and mobility trends.",
                "QR-based report sharing.",
              ]}
            />
          </div>
        </StepCard>
      </div>
    </section>
  );
}

function OutputCard({
  icon: Icon,
  title,
  items,
  strong = false,
}: {
  icon: LucideIcon;
  title: string;
  items: string[];
  strong?: boolean;
}) {
  return (
    <div
      className={
        strong
          ? "rounded-2xl bg-forest-deep p-3.5 text-primary-foreground"
          : "rounded-2xl bg-mint-soft p-3.5 text-foreground"
      }
    >
      <div className="flex items-center gap-2">
        <Icon className={strong ? "h-4 w-4 text-mint" : "h-4 w-4 text-primary"} />
        <span className={strong ? "eyebrow text-mint" : "eyebrow text-primary"}>{title}</span>
      </div>
      <ul className="mt-2 space-y-1 text-sm">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className={strong ? "mt-2 h-1 w-1 shrink-0 rounded-full bg-mint" : "mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
