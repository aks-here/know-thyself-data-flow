import { Brain, FileHeart, Zap, type LucideIcon } from "lucide-react";

import { SectionTitle } from "./Devices";

const REASONS: { title: string; text: string; icon: LucideIcon; tone: string }[] = [
  {
    title: "Zero Manual Logging",
    text: "Your watch and phone already track you. Livora just listens — nothing to type, tap or remember.",
    icon: Zap,
    tone: "bg-sun",
  },
  {
    title: "Personal Health Intelligence",
    text: "Compared with your own normal, not everyone else's. Small changes in you get noticed early.",
    icon: Brain,
    tone: "bg-lilac",
  },
  {
    title: "Doctor-Ready Reports",
    text: "A clear 30-day summary of heart rate, sleep and mobility, shared with a simple QR code.",
    icon: FileHeart,
    tone: "bg-coral",
  },
];

export function WhyLivora() {
  return (
    <section id="why" className="scroll-mt-6 mx-auto w-full max-w-6xl px-5 py-12 md:px-8 md:py-20">
      <SectionTitle eyebrow="Why it matters" title="Why Livora?" />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {REASONS.map(({ title, text, icon: Icon, tone }) => (
          <article key={title} className="rounded-[2rem] bg-card p-6 shadow-soft">
            <span className={`flex h-14 w-14 items-center justify-center rounded-[18px] ${tone}`}>
              <Icon className="h-6 w-6 text-card" strokeWidth={2.25} />
            </span>
            <h3 className="mt-5 text-xl font-extrabold tracking-tight text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
