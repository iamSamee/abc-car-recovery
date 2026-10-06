import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import ClickTracking from "@/components/ClickTracking";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
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
      </head>
      <body>
        <GoogleTagManagerNoScript />
        <ClickTracking />
        {children}
      </body>
    </html>
  );
}
