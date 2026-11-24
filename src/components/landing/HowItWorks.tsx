import {
  Activity,
  ArrowDown,
  ArrowRight,
  AudioLines,
  Brain,
  Footprints,
  HeartPulse,
  Layers,
  Moon,
  QrCode,
  Radio,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useState, type ReactNode } from "react";

import { BASELINE, FUSION, WEEK_SUMMARY } from "@/lib/sample-data";

import { SectionTitle } from "./Devices";
import { Popup, PopupButton } from "./Popup";

function Step({
  n,
  title,
  icon: Icon,
  text,
  last = false,
  children,
}: {
  n: number;
  title: string;
  icon: LucideIcon;
  text: string;
  last?: boolean;
  children: ReactNode;
}) {
  return (
    <li className="relative flex flex-col rounded-[2rem] bg-card p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-lime-soft text-leaf">
          <Icon className="h-5 w-5" strokeWidth={2.25} />
        </span>
        <span className="text-sm font-bold text-muted-foreground">0{n}</span>
      </div>
      <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
      <div className="mt-5 flex flex-1 flex-col justify-end">{children}</div>

      {!last && (
        <>
          <span
            className="absolute -bottom-7 left-1/2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-foreground text-card md:hidden"
            aria-hidden="true"
          >
            <ArrowDown className="h-4 w-4" />
          </span>
          <span
            className="absolute -right-7 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-foreground text-card lg:flex"
            aria-hidden="true"
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </>
      )}
    </li>
  );
}

const SIGNALS: { label: string; icon: LucideIcon }[] = [
  { label: "Heart rate", icon: HeartPulse },
  { label: "Sleep", icon: Moon },
  { label: "Steps", icon: Footprints },
  { label: "Mobility", icon: Activity },
];

export function HowItWorks() {
  const [popup, setPopup] = useState<"insight" | "report" | null>(null);
  const close = () => setPopup(null);
  const currentWidth = `${Math.round((BASELINE.currentKmh / BASELINE.baselineKmh) * 100)}%`;
  return (
    <section id="how" className="scroll-mt-6 mx-auto w-full max-w-6xl px-5 py-12 md:px-8 md:py-20">
      <SectionTitle
        eyebrow="The data flow"
        title="How Livora Works"
        sub="Four simple steps from scattered device data to insights you and your doctor can act on."
      />

      <ol className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-10">
        <Step
          n={1}
          title="Collect"
          icon={Radio}
          text="Gather heart rate, sleep, steps and mobility data."
        >
          <div className="grid grid-cols-2 gap-2">
            {SIGNALS.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 rounded-xl bg-muted px-2.5 py-2 text-xs font-medium text-foreground"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-leaf" />
                {label}
              </span>
            ))}
          </div>
        </Step>

        <Step
          n={2}
          title="Combine"
          icon={Layers}
          text="Merge data from different devices, remove duplicates and fill gaps."
        >
          <div className="rounded-2xl bg-muted p-3">
            <div className="flex justify-center gap-1.5">
              {["bg-teal", "bg-primary", "bg-sky", "bg-lilac"].map((c) => (
                <span key={c} className={`h-6 w-6 rounded-lg ${c}`} />
              ))}
            </div>
            <div className="mx-auto my-1.5 h-4 w-px bg-foreground/25" />
            <div className="rounded-xl bg-foreground px-3 py-2 text-center text-sm font-semibold text-card">
              One health profile
            </div>
            <div className="mt-2 text-center text-[11px] text-muted-foreground">
              {FUSION.duplicatesRemoved} duplicates removed · {FUSION.gapsFilled} gaps filled
            </div>
          </div>
        </Step>

        <Step
          n={3}
          title="Understand"
          icon={Brain}
          text="AI learns personal health baselines and identifies unusual changes."
        >
          <div className="space-y-2.5 rounded-2xl bg-muted p-3">
            <Bar
              label="Your normal walking pace"
              value={`${BASELINE.baselineKmh} km/h`}
              width="100%"
              tone="bg-primary"
            />
            <Bar
              label="This week"
              value={`${BASELINE.currentKmh} km/h`}
              width={currentWidth}
              tone="bg-coral"
            />
            <button
              type="button"
              onClick={() => setPopup("insight")}
              className="flex w-full items-center gap-1.5 rounded-xl bg-coral-soft px-2.5 py-1.5 text-left text-xs font-semibold text-foreground transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-coral" />
              <span className="flex-1">{BASELINE.changePercent}% below your own baseline</span>
              <span className="shrink-0 text-[10px] font-medium text-muted-foreground">Tap</span>
            </button>
          </div>
        </Step>

        <Step
          n={4}
          title="Act"
          icon={Sparkles}
          text="Provide voice-based insights and QR-enabled doctor reports."
          last
        >
          <div className="space-y-2">
            <div className="flex items-start gap-2 rounded-2xl bg-lime-soft p-3">
              <AudioLines className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
              <p className="text-xs leading-relaxed text-foreground">
                “Your walking pace is a little slower this week. A short walk today could help.”
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPopup("report")}
              className="flex w-full items-center gap-3 rounded-2xl bg-foreground p-3 text-left text-card transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <QrCode className="h-8 w-8 shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-semibold">30-day doctor report</div>
                <div className="text-[11px] opacity-70">Tap to preview</div>
              </div>
            </button>
          </div>
        </Step>
      </ol>

      <Popup
        open={popup === "insight"}
        onOpenChange={(o) => !o && close()}
        title="How your personal baseline works"
        description="Livora compares you with you — not with population averages."
      >
        <ol className="space-y-3">
          {[
            [
              "Learns your normal",
              "Over about 30 days, the AI builds a personal range for each signal, like walking pace or resting heart rate.",
            ],
            [
              "Checks every day",
              "New readings are compared with your own range, so normal ups and downs aren't flagged.",
            ],
            [
              "Spots lasting changes",
              `Your walking pace moved from ${BASELINE.baselineKmh} to ${BASELINE.currentKmh} km/h over a week — ${BASELINE.changePercent}% below your baseline, so Livora gently lets you know.`,
            ],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-3 rounded-2xl bg-muted p-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <div className="text-sm font-semibold text-foreground">{t}</div>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-5">
          <PopupButton onClick={close}>Got it</PopupButton>
        </div>
      </Popup>

      <Popup
        open={popup === "report"}
        onOpenChange={(o) => !o && close()}
        title="30-day doctor report"
        description="Preview · Sample patient · Last 30 days"
      >
        <ul className="divide-y rounded-2xl bg-muted px-4">
          {[
            ["Resting heart rate", `${WEEK_SUMMARY.avgHeartRate} bpm avg`, "Normal"],
            ["Sleep", `${WEEK_SUMMARY.avgSleep} avg`, "Normal"],
            ["Daily steps", `${WEEK_SUMMARY.avgSteps} avg`, "Normal"],
            ["Walking pace", `${BASELINE.currentKmh} km/h`, `↓ ${BASELINE.changePercent}%`],
          ].map(([label, value, status]) => (
            <li key={label} className="flex items-center justify-between gap-3 py-3">
              <div className="min-w-0">
                <div className="text-sm font-semibold text-foreground">{label}</div>
                <div className="text-xs text-muted-foreground">{value}</div>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${status === "Normal" ? "bg-lime-soft text-accent-foreground" : "bg-coral-soft text-coral"}`}
              >
                {status}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-foreground p-3 text-card">
          <QrCode className="h-12 w-12 shrink-0" />
          <div>
            <div className="text-sm font-semibold">Scan to share with your doctor</div>
            <div className="text-[11px] opacity-70">
              Consent-based link · expires in 24 hours (demo)
            </div>
          </div>
        </div>
        <div className="mt-5">
          <PopupButton onClick={close}>Close preview</PopupButton>
        </div>
      </Popup>
    </section>
  );
}

function Bar({
  label,
  value,
  width,
  tone,
}: {
  label: string;
  value: string;
  width: string;
  tone: string;
}) {
  return (
    <div>
      <div className="flex justify-between gap-2 text-[11px]">
        <span className="text-muted-foreground">{label}</span>
        <span className="whitespace-nowrap font-semibold text-foreground">{value}</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-card">
        <div className={`h-2 rounded-full ${tone}`} style={{ width }} />
      </div>
    </div>
  );
}
