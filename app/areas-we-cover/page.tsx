import type { Metadata } from "next";
import SitePage from "@/components/SitePage";
import { areas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Areas We Cover | Car Recovery & Towing Across Birmingham",
  description: "Local car recovery and towing across Birmingham and the West Midlands, including the M5, M6, M42 and M6 Toll — plus UK-wide transport.",
  alternates: { canonical: "/areas-we-cover/" },
};

export default function AreasPage() {
  return (
    <SitePage
      eyebrow="Areas we cover"
      title="Recovery near you in Birmingham."
      lead="Our trucks are based in Birmingham (B6), so we reach most of the city and the West Midlands quickly — typically within 30–45 minutes. We also move vehicles anywhere in the UK."
    >
      <h2 className="h2 page-section-title">Birmingham &amp; West Midlands</h2>
      <div className="areas">
        {areas.map((a) => (
          <span key={a} className="area">{a}</span>
        ))}
      </div>
      <h2 className="h2 page-section-title">Motorways</h2>
      <p className="lead">
        We recover broken-down and accident-damaged vehicles from the M5, M6, M42, M6 Toll and surrounding A-roads.
        If you&apos;re on a motorway, put your hazards on, get behind the barrier and away from traffic, then call us.
      </p>
      <h2 className="h2 page-section-title">Long distance</h2>
      <p className="lead">
        Need a car moved further? We tow and transport vehicles from Birmingham to anywhere in the UK, with the price agreed up front.
      </p>
    </SitePage>
  );
}
