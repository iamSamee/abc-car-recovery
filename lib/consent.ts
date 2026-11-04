// Cookie consent, wired to Google Consent Mode v2.
// The default (denied unless previously accepted) is set in GoogleTagManager.tsx
// before GTM loads; this file handles the visitor's choice afterwards.

export const CONSENT_KEY = "abc_cookie_consent";
export const OPEN_SETTINGS_EVENT = "abc:open-cookie-settings";

export type Consent = {
  /** Google Analytics. */
  analytics: boolean;
  /** Google Ads. */
  marketing: boolean;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    if (!v) return null;
    // Choices saved before the preferences popup existed.
    if (v === "granted") return { analytics: true, marketing: true };
    if (v === "denied") return { analytics: false, marketing: false };
    const parsed = JSON.parse(v);
    return { analytics: !!parsed.analytics, marketing: !!parsed.marketing };
  } catch {
    return null;
  }
}

/** Removes cookies for a withdrawn category, on every domain level they may be set on. */
function deleteCookies(matches: (name: string) => boolean) {
  const parts = location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < parts.length - 1; i++) domains.push(`; domain=.${parts.slice(i).join(".")}`);
  for (const pair of document.cookie.split("; ")) {
    const name = pair.split("=")[0];
    if (!matches(name)) continue;
    for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
  }
}

export function saveConsent(choice: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(choice));
  } catch {
    // Storage blocked (private mode etc.) — the choice still applies to this visit.
  }
  const marketing = choice.marketing ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    analytics_storage: choice.analytics ? "granted" : "denied",
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
  });
  window.gtag?.("set", "ads_data_redaction", !choice.marketing);
  if (!choice.analytics) deleteCookies((n) => n === "_ga" || n.startsWith("_ga_"));
  if (!choice.marketing) deleteCookies((n) => n.startsWith("_gcl"));
}
