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
