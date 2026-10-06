export const GTM_ID = "GTM-57BM8M6S";

type DataLayerEvent = { event: string } & Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

/** Push an event to GTM's dataLayer. Safe to call before GTM has loaded. */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
