import { useEffect, useState } from "react";

import heartMascot from "@/assets/heart_mascot.webp.asset.json";

import { Popup, PopupButton } from "./Popup";

export function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <Popup open={open} onOpenChange={setOpen} title="Welcome to LIVORA" size="sm">
      <div className="-mt-3 text-center">
        <img src={heartMascot.url} alt="" width={160} height={160} className="animate-bob mx-auto h-36 w-36" />
        <p className="mt-2 text-lg font-semibold text-foreground">Your health, all in one place!</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Take a quick tour of how Livora turns everyday device data into insights.
        </p>
        <div className="mt-5">
          <PopupButton onClick={() => setOpen(false)}>Let’s explore</PopupButton>
        </div>
      </div>
    </Popup>
  );
}
