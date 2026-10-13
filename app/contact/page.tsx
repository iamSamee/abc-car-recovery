import type { Metadata } from "next";
import SitePage from "@/components/SitePage";
import QuoteForm from "@/components/QuoteForm";
import { ADDRESS, COMPANY_NAME, EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/content";
import { mapsSearchUrl, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact ABC Car Recovery Birmingham | 24/7 Call or WhatsApp",
  description: "Call 07356 202939 or WhatsApp us 24/7 for car recovery and towing in Birmingham. Upfront quote before we set off.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <SitePage
      path="/contact/"
      eyebrow="Contact us 24/7"
      title="Call, WhatsApp or get a quote."
      lead="We answer day and night, including weekends and bank holidays. Tell us where the vehicle is and where it needs to go, and we'll give you a fixed price before we set off."
    >
      <div className="contact-grid">
        <div className="info-card">
          <h2 className="info-card__title">Get in touch</h2>
          <dl className="info-list">
            <dt>Phone (24/7)</dt>
            <dd><a href={PHONE_TEL}>{PHONE_DISPLAY}</a></dd>
            <dt>WhatsApp</dt>
            <dd><a href={whatsappLink()} target="_blank" rel="noopener">Message us on WhatsApp</a></dd>
            <dt>Email</dt>
            <dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
            <dt>Opening hours</dt>
            <dd>Open 24 hours, 7 days a week</dd>
            <dt>Address</dt>
            <dd>
              <address>
                {COMPANY_NAME}<br />
                {ADDRESS.line1}<br />
                {ADDRESS.line2}<br />
                {ADDRESS.city} {ADDRESS.postcode}
              </address>
              <a href={mapsSearchUrl(`${COMPANY_NAME}, ${ADDRESS.postcode}`)} target="_blank" rel="noopener">Open in Google Maps</a>
            </dd>
          </dl>
        </div>
        <div className="info-card" id="quote">
          <h2 className="info-card__title">Free, no-obligation quote</h2>
          <p className="lead" style={{ marginBottom: 16 }}>Fill this in and WhatsApp opens with your details ready to send.</p>
          <QuoteForm />
        </div>
      </div>
    </SitePage>
  );
}
