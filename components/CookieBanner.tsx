"use client";

import { useEffect, useState } from "react";
import { OPEN_SETTINGS_EVENT, readConsent, saveConsent } from "@/lib/consent";

/**
 * Small fixed banner, rendered only after hydration so it never delays the
 * first paint. Fixed position means it can't shift the page layout.
 */
export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!readConsent()) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (choice: "granted" | "denied") => {
    saveConsent(choice);
    setOpen(false);
  };

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie preferences">
      <p className="cookie-banner__text">
        We use cookies to see which of our adverts bring in calls. <a href="/privacy-policy/#cookies">Learn more</a>
      </p>
      <div className="cookie-banner__actions">
        <button type="button" className="cookie-banner__btn" onClick={() => choose("denied")}>Reject</button>
        <button type="button" className="cookie-banner__btn cookie-banner__btn--accept" onClick={() => choose("granted")}>Accept</button>
      </div>
    </div>
  );
}
