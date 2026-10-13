import Header from "@/components/Header";
import { BreadcrumbSchema } from "@/components/JsonLd";
import FooterLinks from "@/components/FooterLinks";
import CompanyLegal from "@/components/CompanyLegal";
import { ADDRESS_ONE_LINE, COMPANY_NAME, EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";

type Props = {
  /** This page's URL path, for breadcrumb structured data. */
  path: string;
  eyebrow: string;
  title: string;
  lead?: React.ReactNode;
  children: React.ReactNode;
};

/** Shell for the supporting pages (contact, reviews, areas, services, privacy). */
export default function SitePage({ path, eyebrow, title, lead, children }: Props) {
  const whatsapp = whatsappLink("Hi ABC, I need a recovery. My location is:");
  return (
    <>
      <BreadcrumbSchema path={path} />
      <Header />

      <main>
        <section className="page-hero">
          <div className="container page-hero__inner">
            <span className="eyebrow eyebrow--yellow">{eyebrow}</span>
            <h1 className="display page-hero__title">{title}</h1>
            {lead && <p className="hero__lead">{lead}</p>}
            <div className="two-col page-hero__ctas">
              <a href={PHONE_TEL} className="btn btn--yellow lp-btn-52">Call {PHONE_DISPLAY}</a>
              <a href={whatsapp} target="_blank" rel="noopener" className="btn btn--whatsapp lp-btn-52">WhatsApp us</a>
            </div>
          </div>
        </section>
        <div className="container page-body">{children}</div>
      </main>

      <footer className="lp-footer">
        <div className="container lp-footer__inner">
          <span className="lp-footer__name">{COMPANY_NAME}</span>
          <span>{ADDRESS_ONE_LINE}</span>
          <div className="lp-footer__contact">
            <a href={PHONE_TEL} className="lp-footer__phone">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="footer__email">{EMAIL}</a>
          </div>
          <FooterLinks />
          <span className="lp-footer__legal"><CompanyLegal /></span>
        </div>
      </footer>

      <div className="sticky-spacer" style={{ background: "var(--ink)" }} />
      <div className="sticky-bar lp-sticky">
        <a href={PHONE_TEL} className="btn btn--yellow">
          <span className="dot" style={{ background: "var(--ink)" }} />
          Call 24/7
        </a>
        <a href={whatsapp} target="_blank" rel="noopener" className="btn btn--whatsapp">WhatsApp</a>
      </div>
    </>
  );
}
