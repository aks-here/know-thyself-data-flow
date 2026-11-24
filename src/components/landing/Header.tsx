import { Logo } from "./Logo";

const LINKS = [
  { href: "#devices", label: "Devices" },
  { href: "#how", label: "How it works" },
  { href: "#why", label: "Why Livora" },
];

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
      <a href="#top" aria-label="Livora home">
        <Logo />
      </a>
      <nav className="hidden items-center gap-7 md:flex">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="#how"
        className="shrink-0 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-card transition-opacity hover:opacity-85"
      >
        See how it works
      </a>
    </header>
  );
}
