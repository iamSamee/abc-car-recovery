"use client";

import { useEffect, useRef, useState } from "react";
import { OPEN_SETTINGS_EVENT, readConsent, saveConsent, type Consent } from "@/lib/consent";

type View = "loading" | "banner" | "panel" | "icon";

const ALL_ON: Consent = { analytics: true, marketing: true };
const ALL_OFF: Consent = { analytics: false, marketing: false };

/**
 * First-visit banner, preferences popup, and the small floating icon that
 * reopens it. Rendered only after hydration so it never delays the first paint,
 * and fixed-position so it can't shift the page layout.
 */
export default function CookieBanner() {
  const [view, setView] = useState<View>("loading");
  const [choice, setChoice] = useState<Consent>(ALL_OFF);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setView(readConsent() ? "icon" : "banner");
    const open = () => {
      setChoice(readConsent() ?? ALL_OFF);
      setView("panel");
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  useEffect(() => {
    if (view === "panel") panelRef.current?.focus();
  }, [view]);

  const openPanel = () => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
  const closePanel = () => setView(readConsent() ? "icon" : "banner");
  const save = (c: Consent) => {
    saveConsent(c);
    setView("icon");
  };

  if (view === "loading") return null;

  if (view === "icon") {
    return (
      <button type="button" className="cookie-icon" aria-label="Cookie settings" title="Cookie settings" onClick={openPanel}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 3a9 9 0 1 0 9 9 4 4 0 0 1-4.5-4.5A4 4 0 0 1 12 3Z" />
          <path d="M8.5 9.5h.01M8 14.5h.01M12.5 12.5h.01M12 17h.01M16 15.5h.01" />
        </svg>
      </button>
    );
  }

  if (view === "banner") {
    return (
      <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie preferences">
        <p className="cookie-banner__text">
          We use cookies to measure site visits and see which adverts bring in calls.{" "}
          <a href="/privacy-policy/#cookies">Learn more</a>
        </p>
        <div className="cookie-banner__actions">
          <button type="button" className="cookie-banner__btn" onClick={() => save(ALL_OFF)}>Reject</button>
          <button type="button" className="cookie-banner__btn" onClick={openPanel}>Manage</button>
          <button type="button" className="cookie-banner__btn cookie-banner__btn--accept" onClick={() => save(ALL_ON)}>Accept</button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={panelRef}
      tabIndex={-1}
      className="cookie-panel"
      role="dialog"
      aria-labelledby="cookie-panel-title"
      onKeyDown={(e) => e.key === "Escape" && closePanel()}
    >
      <div className="cookie-panel__head">
        <h2 id="cookie-panel-title" className="cookie-panel__title">Cookie preferences</h2>
        <button type="button" className="cookie-panel__close" aria-label="Close" onClick={closePanel}>×</button>
      </div>
      <div className="cookie-option">
        <div>
          <span className="cookie-option__name">Essential</span>
          <span className="cookie-option__desc">Remembers your cookie choice. Always on.</span>
        </div>
        <input type="checkbox" className="cookie-switch" checked disabled aria-label="Essential (always on)" />
      </div>
      <label className="cookie-option">
        <div>
          <span className="cookie-option__name">Statistics</span>
          <span className="cookie-option__desc">Google Analytics, so we can see how the site is used.</span>
        </div>
        <input type="checkbox" className="cookie-switch" checked={choice.analytics} onChange={(e) => setChoice({ ...choice, analytics: e.target.checked })} />
      </label>
      <label className="cookie-option">
        <div>
          <span className="cookie-option__name">Marketing</span>
          <span className="cookie-option__desc">Google Ads, so we can see which adverts bring in enquiries.</span>
        </div>
        <input type="checkbox" className="cookie-switch" checked={choice.marketing} onChange={(e) => setChoice({ ...choice, marketing: e.target.checked })} />
      </label>
      <a className="cookie-panel__link" href="/privacy-policy/#cookies">Read our privacy policy</a>
      <div className="cookie-panel__actions">
        <button type="button" className="cookie-banner__btn" onClick={() => save(ALL_OFF)}>Reject all</button>
        <button type="button" className="cookie-banner__btn" onClick={() => save(choice)}>Save choices</button>
        <button type="button" className="cookie-banner__btn cookie-banner__btn--accept" onClick={() => save(ALL_ON)}>Accept all</button>
      </div>
    </div>
  );
}
