"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** Where on the page a link sits, e.g. "header", "sticky_bar", "quote". */
function clickLocation(el: Element) {
  if (el.closest(".sticky-bar")) return "sticky_bar";
  const area = el.closest("header, footer, section");
  if (!area) return "other";
  return area.id || area.tagName.toLowerCase();
}

/**
 * Sends a GTM event for every tap on a phone link (`phone_call_click`) or a
 * WhatsApp link (`whatsapp_click`), anywhere on the site.
 */
export default function ClickTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const params = { link_url: href, click_location: clickLocation(link), page_path: location.pathname };
      if (href.startsWith("tel:")) track("phone_call_click", params);
      else if (href.includes("wa.me/")) track("whatsapp_click", { ...params, whatsapp_source: "button" });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
