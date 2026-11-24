import { Footprints, HeartPulse, Moon, TrendingUp, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { WEEK, WEEK_SUMMARY } from "@/lib/sample-data";

import { SectionTitle } from "./Devices";

const axis = { fontSize: 11, fill: "var(--muted-foreground)" };
const tooltipStyle = {
  borderRadius: 14,
  border: "none",
  boxShadow: "var(--shadow-soft)",
  fontSize: 12,
};

function ChartCard({
  icon: Icon,
  title,
  value,
  unit,
  note,
  children,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  unit: string;
  note: string;
  children: ReactNode;
}) {
  return (
    <article className="flex flex-col rounded-[2rem] bg-card p-5 shadow-soft">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-lime-soft text-leaf">
          <Icon className="h-4 w-4" strokeWidth={2.25} />
        </span>
        <h3 className="text-sm font-semibold text-muted-foreground">{title}</h3>
      </div>
      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="text-3xl font-extrabold tracking-tight text-foreground">{value}</span>
        <span className="text-sm font-medium text-muted-foreground">{unit}</span>
      </div>
      <p className="text-xs text-muted-foreground">{note}</p>
      <div className="mt-4 h-44 w-full">{children}</div>
    </article>
  );
}

export function HealthAnalytics() {
  const metrics = [
    { label: "Avg resting heart rate", value: `${WEEK_SUMMARY.avgHeartRate} bpm`, icon: HeartPulse },
    { label: "Avg sleep", value: WEEK_SUMMARY.avgSleep, icon: Moon },
    { label: "Avg daily steps", value: WEEK_SUMMARY.avgSteps, icon: Footprints },
    { label: "Best sleep", value: WEEK_SUMMARY.bestSleepDay, icon: TrendingUp },
  ];

  return (
    <section id="analytics" className="scroll-mt-6 mx-auto w-full max-w-6xl px-5 py-12 md:px-8 md:py-20">
      <SectionTitle
        eyebrow="Health analytics"
        title="Your Week at a Glance"
        sub="Seven days of combined data from your devices, turned into clear trends."
      />

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {metrics.map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex items-center gap-3 rounded-3xl bg-card p-4 shadow-soft">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-primary text-primary-foreground">
              <Icon className="h-5 w-5" strokeWidth={2.25} />
            </span>
            <div className="min-w-0">
              <div className="truncate text-lg font-extrabold text-foreground">{value}</div>
              <div className="truncate text-xs text-muted-foreground">{label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ChartCard
          icon={HeartPulse}
          title="Heart rate trend"
          value={String(WEEK_SUMMARY.avgHeartRate)}
          unit="bpm avg"
          note="Resting heart rate, last 7 days"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={WEEK} margin={{ top: 8, right: 8, left: -24, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="var(--border)" />
              <XAxis dataKey="day" tickLine={false} axisLine={false} tick={axis} />
              <YAxis domain={[60, 80]} tickLine={false} axisLine={false} tick={axis} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v} bpm`, "Heart rate"]} />
              <Line
                type="monotone"
                dataKey="heartRate"
                stroke="var(--primary)"
                strokeWidth={3}
                dot={{ r: 3.5, fill: "var(--card)", stroke: "var(--primary)", strokeWidth: 2 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard icon={Moon} title="Sleep duration" value={WEEK_SUMMARY.avgSleep} unit="avg" note="Hours asleep per night">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={WEEK} margin={{ top: 8, right: 8, left: -24, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="var(--border)" />
              <XAxis dataKey="day" tickLine={false} axisLine={false} tick={axis} />
              <YAxis domain={[0, 9]} ticks={[0, 3, 6, 9]} tickLine={false} axisLine={false} tick={axis} />
              <Tooltip
                cursor={{ fill: "var(--lime-soft)" }}
                contentStyle={tooltipStyle}
                formatter={(v) => [`${v} h`, "Sleep"]}
              />
              <Bar dataKey="sleepHours" fill="var(--lime)" stroke="var(--primary)" strokeWidth={1.5} radius={[10, 10, 4, 4]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard icon={Footprints} title="Daily steps" value={WEEK_SUMMARY.avgSteps} unit="avg" note="Steps per day">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={WEEK} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
              <defs>
                <linearGradient id="steps-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="var(--lime)" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="var(--border)" />
              <XAxis dataKey="day" tickLine={false} axisLine={false} tick={axis} />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={axis}
                tickFormatter={(v: number) => `${Math.round(v / 1000)}k`}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(v) => [Number(v).toLocaleString("en-US"), "Steps"]}
              />
              <Area type="monotone" dataKey="steps" stroke="var(--leaf)" strokeWidth={3} fill="url(#steps-fill)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">Sample data for demonstration.</p>
    </section>
  );
}
