import type { Metadata } from "next";
import SitePage from "@/components/SitePage";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Services | Recovery, Towing, Mobile Mechanic & MOT | ABC",
  description: "Breakdown and accident recovery, car towing, jumpstarts, vehicle transport, garage services, mobile mechanic and MOT testing in Birmingham.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <SitePage
      eyebrow="Our services"
      title="Recovery, towing & garage services."
      lead="From a flat battery at the roadside to a non-runner that needs towing across the country — one local team, one call."
    >
      <div className="card-grid">
        {services.map((s) => (
          <div key={s.num} className="service">
            <div className="service__top">
              <span className="service__num">{s.num}</span>
              <span className="tag">{s.tag}</span>
            </div>
            <h2 className="display service__title">{s.title}</h2>
            <p className="service__body">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="two-col page-links">
        <a href="/car-towing-birmingham/" className="btn btn--dark lp-btn-52">Car towing in Birmingham</a>
        <a href="/car-breakdown-recovery-birmingham/" className="btn btn--dark lp-btn-52">Breakdown recovery</a>
      </div>
    </SitePage>
  );
}
