"use client";

import { useState } from "react";
import { mapsPinUrl } from "@/lib/whatsapp";

export const CURRENT_LOCATION_LABEL = "📍 My current location";

/** Wraps the browser geolocation API and returns a Google Maps pin link. */
export function useCurrentLocation(onError: (msg: string) => void) {
  const [status, setStatus] = useState<"idle" | "busy" | "done">("idle");
  const [pin, setPin] = useState<string>();

  const locate = (onFound: () => void) => {
    if (!navigator.geolocation) return onError("Location not available — please type your postcode.");
    setStatus("busy");
    navigator.geolocation.getCurrentPosition(
      (p) => {
        setPin(mapsPinUrl(p.coords.latitude, p.coords.longitude));
        setStatus("done");
        onFound();
      },
      () => {
        setStatus("idle");
        onError("Couldn't get your location — please type your postcode.");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const clear = () => {
    setPin(undefined);
    setStatus("idle");
  };

  const label = status === "busy" ? "Locating…" : status === "done" ? "Located ✓" : "Use my location";

  return { pin, status, label, locate, clear };
}
