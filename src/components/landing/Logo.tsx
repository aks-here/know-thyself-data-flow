import { Heart } from "lucide-react";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary">
        <Heart className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
      </span>
      <span
        className={`text-xl font-extrabold tracking-tight ${inverted ? "text-card" : "text-foreground"}`}
      >
        LIVORA
      </span>
    </span>
  );
}
