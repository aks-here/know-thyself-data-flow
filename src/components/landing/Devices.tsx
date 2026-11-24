import {
  Activity,
  Check,
  CheckCircle2,
  Footprints,
  HeartPulse,
  Moon,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";

import { DEVICES, TODAY } from "@/lib/sample-data";

import { DeviceIcon } from "./DeviceIcon";
import { Popup, PopupButton } from "./Popup";

const METRICS = [
  {
    label: "Heart rate",
    value: `${TODAY.heartRateBpm} bpm`,
    icon: HeartPulse,
    tone: "bg-coral-soft text-coral",
  },
  { label: "Sleep", value: TODAY.sleep, icon: Moon, tone: "bg-lilac-soft text-lilac" },
  { label: "Steps", value: TODAY.steps, icon: Footprints, tone: "bg-lime-soft text-leaf" },
  {
    label: "Walking speed",
    value: `${TODAY.walkingKmh} km/h`,
    icon: Activity,
    tone: "bg-lime-soft text-leaf",
  },
];

export function Devices() {
  const [connected, setConnected] = useState<string | null>(null);
  return (
    <section
      id="devices"
      className="scroll-mt-6 mx-auto w-full max-w-6xl px-5 py-12 md:px-8 md:py-20"
    >
      <SectionTitle
        eyebrow="Step one"
        title="Connect Your Devices"
        sub="Livora works with what you already wear and carry. No new hardware, no manual logging. Tap a device to try it."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <ul className="space-y-3">
          {DEVICES.map((d) => (
            <li key={d.id}>
              <button
                type="button"
                onClick={() => setConnected(d.name)}
                className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-full bg-card py-2.5 pl-2.5 pr-3 text-left shadow-soft transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <DeviceIcon id={d.id} />
                <div className="min-w-0">
                  <div className="truncate text-base font-semibold text-foreground sm:text-lg">
                    {d.name}
                  </div>
                  <div className="truncate text-xs text-muted-foreground sm:text-sm">
                    {d.detail}
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground sm:px-4">
                  <Check className="h-4 w-4" strokeWidth={3} />
                  <span className="hidden sm:inline">Connected</span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <Popup
          open={connected !== null}
          onOpenChange={(o) => !o && setConnected(null)}
          title="Device connected successfully!"
          size="sm"
        >
          <div className="text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime-soft">
              <CheckCircle2 className="h-9 w-9 text-primary" strokeWidth={2.25} />
            </span>
            <p className="mt-3 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{connected}</span> is now syncing with
              Livora.
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Demo only — no real device was connected.
            </p>
            <div className="mt-5">
              <PopupButton onClick={() => setConnected(null)}>Great!</PopupButton>
            </div>
          </div>
        </Popup>

        <div className="rounded-[2rem] bg-card p-5 shadow-soft md:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="eyebrow text-accent-foreground">Synced today</div>
              <div className="mt-1 text-xl font-bold text-foreground">Your data, together</div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
              <RefreshCw className="h-3 w-3" /> 4 sources
            </span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-2">
            {METRICS.map(({ label, value, icon: Icon, tone }) => (
              <div key={label} className="rounded-2xl bg-muted p-3.5">
                <span className={`flex h-8 w-8 items-center justify-center rounded-full ${tone}`}>
                  <Icon className="h-4 w-4" strokeWidth={2.25} />
                </span>
                <div className="mt-3 whitespace-nowrap text-xl font-bold text-foreground">
                  {value}
                </div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Sample data for demonstration.</p>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="eyebrow text-accent-foreground">{eyebrow}</span>
      <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {sub && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">{sub}</p>
      )}
    </div>
  );
}
