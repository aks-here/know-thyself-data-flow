/** Static sample data shown on the landing page (no backend). */

export type DeviceId = "fitbit" | "health-connect" | "samsung" | "phone";

export const DEVICES: { id: DeviceId; name: string; detail: string; connected: boolean }[] = [
  { id: "fitbit", name: "Fitbit", detail: "Heart rate · Sleep", connected: true },
  { id: "health-connect", name: "Google Health Connect", detail: "Steps · Activity", connected: true },
  { id: "samsung", name: "Samsung Health", detail: "Sleep · Workouts", connected: true },
  { id: "phone", name: "This Phone", detail: "Walking speed · Gait", connected: true },
];

export const TODAY = {
  heartRateBpm: 72,
  sleep: "7h 12m",
  steps: "8,214",
  walkingKmh: 5.2,
};

export const FUSION = {
  sources: 4,
  duplicatesRemoved: 142,
  gapsFilled: 6,
};

const baselineKmh = 5.2;
const currentKmh = 4.4;

export const BASELINE = {
  baselineKmh,
  currentKmh,
  changePercent: Math.round(((baselineKmh - currentKmh) / baselineKmh) * 100),
};

/** Last 7 days of sample readings for the analytics section. */
export const WEEK = [
  { day: "Mon", heartRate: 68, sleepHours: 7.2, steps: 8214 },
  { day: "Tue", heartRate: 70, sleepHours: 6.8, steps: 9420 },
  { day: "Wed", heartRate: 67, sleepHours: 7.5, steps: 7105 },
  { day: "Thu", heartRate: 72, sleepHours: 6.1, steps: 10230 },
  { day: "Fri", heartRate: 74, sleepHours: 7.9, steps: 6540 },
  { day: "Sat", heartRate: 71, sleepHours: 8.3, steps: 11880 },
  { day: "Sun", heartRate: 69, sleepHours: 7.2, steps: 8900 },
];

const avg = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;
const avgSleep = avg(WEEK.map((d) => d.sleepHours));

export const WEEK_SUMMARY = {
  avgHeartRate: Math.round(avg(WEEK.map((d) => d.heartRate))),
  avgSleep: `${Math.floor(avgSleep)}h ${Math.round((avgSleep % 1) * 60)}m`,
  avgSteps: Math.round(avg(WEEK.map((d) => d.steps))).toLocaleString("en-US"),
  bestSleepDay: WEEK.reduce((a, b) => (b.sleepHours > a.sleepHours ? b : a)).day,
};
