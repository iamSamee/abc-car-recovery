import type { Metadata } from "next";
import SitePage from "@/components/SitePage";
import Photo from "@/components/Photo";
import { ADDRESS_ONE_LINE, COMPANY_NAME, COMPANY_NUMBER, RATING, REVIEW_COUNT, reasons } from "@/lib/content";

export const metadata: Metadata = {
  title: "About ABC Car Recovery Birmingham | Local 24/7 Recovery Team",
  description: "ABC is a Birmingham-based car recovery and towing company. Local drivers, 24/7, with a fixed price agreed before we set off.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <SitePage
      eyebrow="About ABC"
      title="Birmingham's local recovery team."
      lead="We're a Birmingham-based car recovery and towing company — not a national broker or call centre. When you call, you speak to the people who'll actually come and get you."
    >
      <div className="why">
        <div className="prose">
          <h2>Who we are</h2>
          <p>
            {COMPANY_NAME} runs recovery trucks from our base at {ADDRESS_ONE_LINE}. Because our trucks are local, we can
            usually reach drivers across Birmingham and the West Midlands within 30–45 minutes, day or night.
          </p>
          <h2>What we do</h2>
          <p>
            Breakdown and accident recovery, car and van towing, jumpstarts, refuelling, winching stuck vehicles and vehicle
            transport — locally or anywhere in the UK. We also offer garage services, a mobile mechanic and MOT testing.
          </p>
          <h2>How we work</h2>
          <p>
            You get a fixed price on the phone before we set off, with no hidden fees on arrival. There&apos;s no membership
            or breakdown cover needed — just call when you need us and pay per job. Drivers have rated us {RATING} from{" "}
            {REVIEW_COUNT} Google reviews.
          </p>
          <p>
            Registered in England and Wales, company number {COMPANY_NUMBER}.
          </p>
        </div>
        <Photo variant="why" src="/why-driver.webp" alt="ABC recovery driver with truck" placeholder="" />
      </div>
      <h2 className="h2 page-section-title">Why drivers choose us</h2>
      <div className="list">
        {reasons.map((r) => (
          <div key={r.title} className="list__item">
            <span className="check" aria-hidden>✓</span>
            <div>
              <span className="list__title">{r.title}</span>
              <span className="list__body">{r.body}</span>
            </div>
          </div>
        ))}
      </div>
    </SitePage>
  );
}
