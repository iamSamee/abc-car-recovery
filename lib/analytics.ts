export const GTM_ID = "GTM-57BM8M6S";
export const GA4_ID = "G-LWWZ5YBEN1";

type DataLayerEvent = { event: string } & Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

/**
 * Send an event to GTM (dataLayer trigger) and GA4 (gtag event). Safe to call
 * before either has loaded: both are queued in dataLayer.
 */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  // send_to keeps this out of the Google Ads tag, which GTM fires separately.
  window.gtag?.("event", event, { ...params, send_to: GA4_ID });
}
