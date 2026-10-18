/** Simple line icons for service cards (inline SVG — no image requests). */
export default function ServiceIcon({ name }: { name: "wrench" | "engine" | "battery" }) {
  const common = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "wrench")
    return (
      <svg {...common}>
        <path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8-1.3-1.3a4 4 0 0 1-5-5L13 2.4" />
        <path d="M14.7 6.3 12 9" />
      </svg>
    );
  if (name === "engine")
    return (
      <svg {...common}>
        <path d="M4 10v6M4 13h2M6 9h3l2-2h4v2h2l2 2v2h2v-2M21 11v6M19 17v-2" />
        <path d="M6 9v9h11l2-2v-3" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M7 7V5h3v2M14 7V5h3v2M7 13.5h3M15.5 12v3M14 13.5h3" />
    </svg>
  );
}
