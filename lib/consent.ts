// Cookie consent, wired to Google Consent Mode v2.
// The default (denied unless previously accepted) is set in GoogleTagManager.tsx
// before GTM loads; this file handles the visitor's choice afterwards.

export const CONSENT_KEY = "abc_cookie_consent"; // "granted" | "denied"
export const OPEN_SETTINGS_EVENT = "abc:open-cookie-settings";

type Choice = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function readConsent(): Choice | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: Choice) {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Storage blocked (private mode etc.) — the choice still applies to this visit.
  }
  window.gtag?.("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
}
