import { Logo } from "./Logo";

const LINKS = [
  { href: "#devices", label: "Devices" },
  { href: "#how", label: "How it works" },
  { href: "#why", label: "Why Livora" },
];

export function Header() {
  return (
    <header className="mx-auto w-full max-w-6xl px-5 pb-2 pt-4 md:px-8 md:py-5">
      <div className="flex items-center justify-between gap-4">
        <a href="#top" aria-label="Livora home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#how"
          className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-foreground px-4 text-sm font-semibold text-card transition-opacity hover:opacity-85"
        >
          See how it works
        </a>
      </div>
      <nav aria-label="Sections" className="mt-3 grid grid-cols-3 gap-2 md:hidden">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="flex min-h-11 items-center justify-center rounded-full bg-card px-2 text-center text-sm font-semibold text-foreground shadow-soft"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
