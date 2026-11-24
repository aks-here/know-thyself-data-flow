import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pb-6 md:px-8">
      <div className="flex flex-col gap-5 rounded-[2rem] bg-foreground px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <Logo inverted />
          <p className="mt-3 text-lg font-medium text-card/80">Your Body. Your Data. Your Understanding.</p>
        </div>
        <p className="text-sm font-semibold text-card/70">
          wHACKiest 2026 <span className="text-primary">|</span> Track 3
        </p>
      </div>
    </footer>
  );
}
