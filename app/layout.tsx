import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import ClickTracking from "@/components/ClickTracking";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/next";
import { ADDRESS, COMPANY_NAME, EMAIL } from "@/lib/content";

// Business details Google can read directly (helps confirm the business is real and local).
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: COMPANY_NAME,
  alternateName: "ABC Car Recovery Birmingham",
  url: "https://www.abccarrecoverybirmingham.com/",
  telephone: "+447356202939",
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${ADDRESS.line1}, ${ADDRESS.line2}`,
    addressLocality: ADDRESS.city,
    postalCode: ADDRESS.postcode,
    addressCountry: "GB",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: ["Birmingham", "West Midlands"],
};

// Only 800 is used. Each extra weight is another font file competing with the
// hero headline (the page's Largest Contentful Paint) on first load.
const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-display",
});
const body = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  // Small labels only — let it load after the important fonts.
  preload: false,
});

export const metadata: Metadata = {
  title: "ABC Car Recovery Birmingham | 24/7 Breakdown & Vehicle Recovery",
  description:
    "24/7 car & van breakdown recovery across Birmingham and the West Midlands. Roadside, motorway, accident or non-runner — call 07356 202939.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#141414",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <GoogleTagManager />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        <ClickTracking />
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
