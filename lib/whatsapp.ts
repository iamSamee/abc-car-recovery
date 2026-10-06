export const WHATSAPP_NUMBER = "447356202939";

/** wa.me link that opens a chat with ABC, with `text` already typed in. */
export function whatsappLink(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function mapsPinUrl(lat: number, lng: number) {
  return `https://www.google.com/maps?q=${lat.toFixed(6)},${lng.toFixed(6)}`;
}

export function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/**
 * Builds the quote request message. `pickupPin` (from "Use my location") wins
 * over the typed pickup; a typed pickup also gets a Maps search link so the
 * driver can tap through to directions.
 */
export function quoteMessage(f: {
  heading: string;
  details: [label: string, value: string][];
  pickup: string;
  pickupPin?: string;
  destination: string;
  phone: string;
}) {
  const pickup = f.pickupPin
    ? `My current location: ${f.pickupPin}`
    : `${f.pickup.trim()}\n${mapsSearchUrl(f.pickup.trim())}`;

  return [
    f.heading,
    "",
    ...f.details.map(([label, value]) => `${label}: ${value}`),
    `Pickup: ${pickup}`,
    `Destination: ${f.destination.trim() || "Not decided yet"}`,
    `Mobile: ${f.phone.trim()}`,
  ].join("\n");
}

/** Opens WhatsApp in a new tab (desktop) or the app (mobile). */
export function openWhatsApp(url: string) {
  const win = window.open(url, "_blank", "noopener");
  if (!win) window.location.href = url;
}
