import type { Metadata } from "next";
import LandingPage from "@/components/landing/LandingPage";
import { carTowing as c } from "@/lib/landings";

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: { canonical: c.meta.path },
};

export default function Page() {
  return <LandingPage c={c} />;
}
