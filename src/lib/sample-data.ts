/** Static sample data shown on the landing page (no backend). */
const baselineKmh = 5.2;
const currentKmh = 4.4;

export const BASELINE = {
  baselineKmh,
  currentKmh,
  changePercent: Math.round(((baselineKmh - currentKmh) / baselineKmh) * 100),
};
