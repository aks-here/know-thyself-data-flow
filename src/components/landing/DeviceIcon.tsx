import { PersonStanding, Smartphone } from "lucide-react";

import type { DeviceId } from "@/lib/sample-data";

const DOTS: [number, number, number][] = [
  // [cx, cy, r] — diamond of dots
  [12, 4, 1.6], [12, 9, 1.9], [12, 14, 2.2], [12, 19, 1.9], [12, 24, 1.6],
  [7, 9, 1.4], [7, 14, 1.7], [7, 19, 1.4],
  [17, 9, 1.4], [17, 14, 1.7], [17, 19, 1.4],
  [2.5, 14, 1.2], [21.5, 14, 1.2],
];

export function DeviceIcon({ id }: { id: DeviceId }) {
  const base = "flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px]";
  switch (id) {
    case "fitbit":
      return (
        <span className={`${base} bg-teal`}>
          <svg viewBox="0 0 24 28" className="h-7 w-7" aria-hidden="true">
            {DOTS.map(([cx, cy, r]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} className="fill-card" />
            ))}
          </svg>
        </span>
      );
    case "health-connect":
      return (
        <span className={`${base} border bg-card`}>
          <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
            <defs>
              <linearGradient id="hc-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--coral)" />
                <stop offset="40%" stopColor="var(--sun)" />
                <stop offset="70%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--sky)" />
              </linearGradient>
            </defs>
            <path
              d="M12 21 C 5 16, 2 12, 2 8.5 C 2 5.5, 4.4 3.5, 7 3.5 C 9 3.5, 11 4.8, 12 6.5 C 13 4.8, 15 3.5, 17 3.5 C 19.6 3.5, 22 5.5, 22 8.5 C 22 12, 19 16, 12 21 Z"
              fill="none"
              stroke="url(#hc-grad)"
              strokeWidth="3.2"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      );
    case "samsung":
      return (
        <span className={`${base} bg-sky`}>
          <PersonStanding className="h-6 w-6 text-card" strokeWidth={2.5} />
        </span>
      );
    case "phone":
      return (
        <span className={`${base} bg-lilac`}>
          <Smartphone className="h-6 w-6 text-card" strokeWidth={2.25} />
        </span>
      );
  }
}
