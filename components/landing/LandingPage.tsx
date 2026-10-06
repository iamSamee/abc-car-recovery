import Logo from "@/components/Logo";
import Photo from "@/components/Photo";
import ReviewCarousel from "@/components/ReviewCarousel";
import Faq from "@/components/Faq";
import LandingQuoteForm from "./LandingQuoteForm";
import { whatsappLink } from "@/lib/whatsapp";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, RATING, REVIEW_COUNT } from "@/lib/content";
import { googleReviews, type Landing } from "@/lib/landings";

// Set to false to hide the fixed mobile call / WhatsApp bar.
const STICKY_CALL_BAR = true;

export default function LandingPage({ c }: { c: Landing }) {
  const whatsapp = whatsappLink(c.whatsappText);

  return (
    <>
      {/* Header — no nav, single conversion goal */}
      <header className="header">
        <div className="container header__bar">
          <Logo name={c.brandName} />
          <a href={PHONE_TEL} className="lp-header-call">
            <span className="lp-header-call__label">Call 24/7</span>
            <span className="lp-header-call__number">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container hero__grid lp-hero">
            <div className="hero__copy lp-hero__copy">
              <div className="pill">
                <span className="dot dot--pulse" style={{ background: "#34C759" }} />
                {c.hero.pill}
              </div>
              <h1 className="display hero__title">
                {c.hero.title}
                <br />
                <span>{c.hero.highlight}</span>
              </h1>
              <p className="hero__lead">{c.hero.lead}</p>
              <div className="hero__ctas">
                <a href={PHONE_TEL} className="btn btn--yellow hero__phone lp-hero__phone">
                  <span className="hero__phone-text">
                    <span className="hero__phone-label">{c.hero.callLabel}</span>
                    <span className="hero__phone-number">{PHONE_DISPLAY}</span>
                  </span>
                  <span className="hero__arrow" aria-hidden>→</span>
                </a>
                <div className="two-col">
                  <a href={whatsapp} target="_blank" rel="noopener" className="btn btn--whatsapp lp-btn-52">WhatsApp us</a>
                  <a href="#quote" className="btn btn--outline">{c.hero.quoteLabel}</a>
                </div>
              </div>
              <div className="ticks">
                {c.hero.ticks.map((t) => (
                  <span key={t} className="tick">
                    <span className="tick__box" aria-hidden>✓</span>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <Photo variant="hero" src={c.hero.image} alt={c.hero.imageAlt} placeholder="" priority>
              <div className="badge">
                <span className="stars" style={{ fontSize: 15, letterSpacing: 1 }}>★★★★★</span>
                <span style={{ fontWeight: 700, fontSize: 14 }}>{RATING} rated {c.hero.badge}</span>
              </div>
            </Photo>
          </div>
        </section>

        {/* Trust strip */}
        <section className="trust">
          <div className="container trust__grid">
            {c.trust.map((t) => (
              <div key={t.title}>
                <span className="display trust__title">{t.title}</span>
                <span className="trust__sub">{t.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section id="quote" className="container lp-quote-section">
          <div className="quote lp-quote">
            <div className="quote__intro">
              <span className="eyebrow">{c.quote.eyebrow}</span>
              <h2 className="h2">{c.quote.title}</h2>
              <p className="lead">{c.quote.lead}</p>
              <div className="lp-urgent">
                <span className="lp-urgent__line">
                  <span className="dot" style={{ background: "var(--green)" }} />
                  {c.quote.urgent}
                </span>
                <a href={PHONE_TEL} className="lp-urgent__phone">{PHONE_DISPLAY}</a>
              </div>
            </div>
            <LandingQuoteForm config={c.quote} />
          </div>
        </section>

        {/* Services */}
        <section className="container section">
          <div className="section-head" style={{ marginBottom: 22 }}>
            <span className="eyebrow">{c.services.eyebrow}</span>
            <h2 className="h2">{c.services.title}</h2>
          </div>
          <div className="card-grid lp-card-grid">
            {c.services.items.map((s) => (
              <div key={s.num} className="service">
                <span className="service__num">{s.num}</span>
                <h3 className="display service__title">{s.title}</h3>
                <p className="service__body">{s.body}</p>
              </div>
            ))}
          </div>
          <a href={PHONE_TEL} className="btn btn--yellow how__cta" style={{ marginTop: 16 }}>{c.services.cta}</a>
        </section>

        {/* How it works */}
        <section className="container lp-how-section">
          <div className="how">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow eyebrow--yellow">{c.how.eyebrow}</span>
              <h2 className="h2">{c.how.title}</h2>
            </div>
            <div className="steps">
              {c.how.steps.map((st) => (
                <div key={st.n} className="step">
                  <span className="display step__n">{st.n}</span>
                  <div className="step__text">
                    <span className="step__title">{st.title}</span>
                    <span className="step__body">{st.body}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="note">
              <span className="note__icon" aria-hidden>!</span>
              <span className="note__body">
                <strong>{c.how.noteStrong}</strong> {c.how.noteBody}
              </span>
            </div>
          </div>
        </section>

        {/* Why ABC */}
        <section className="container lp-block">
          <div className="why">
            <div className="why__intro">
              <span className="eyebrow">{c.why.eyebrow}</span>
              <h2 className="h2">{c.why.title}</h2>
              <p className="lead">{c.why.body}</p>
              <Photo variant="why" src={c.why.image} alt={c.why.imageAlt} placeholder="" />
            </div>
            <div className="list">
              {c.why.reasons.map((r) => (
                <div key={r.title} className="list__item">
                  <span className="check" aria-hidden>✓</span>
                  <div>
                    <span className="list__title">{r.title}</span>
                    <span className="list__body">{r.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="lp-reviews">
          <div className="container reviews-head">
            <h2 className="h2">{c.reviewsTitle}</h2>
            <div className="rating">
              <span className="rating__score">{RATING}</span>
              <div className="rating__meta">
                <span className="stars">★★★★★</span>
                <span>{REVIEW_COUNT} Google reviews</span>
              </div>
            </div>
          </div>
          <ReviewCarousel items={googleReviews} />
        </section>

        {/* Areas */}
        <section className="container lp-block">
          <div className="section-head" style={{ marginBottom: 18 }}>
            <span className="eyebrow">{c.areas.eyebrow}</span>
            <h2 className="h2">Covering all of Birmingham.</h2>
            <p className="lead" style={{ maxWidth: 620 }}>{c.areas.lead}</p>
          </div>
          <div className="areas">
            {c.areas.items.map((a) => (
              <span key={a} className="area">{a}</span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="container lp-block faq">
          <h2 className="h2" style={{ marginBottom: 18 }}>{c.faq.title}</h2>
          <Faq items={c.faq.items} />
        </section>

        {/* Final CTA */}
        <section className="final lp-final">
          <div className="final__box">
            <h2 className="display final__title">{c.final.title}</h2>
            <p className="final__lead">{c.final.lead}</p>
            <div className="lp-final__ctas">
              <a href={PHONE_TEL} className="btn btn--dark final__btn">Call {PHONE_DISPLAY}</a>
              <a href={whatsapp} target="_blank" rel="noopener" className="btn btn--outline-dark">{c.final.whatsappLabel}</a>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal footer */}
      <footer className="lp-footer">
        <div className="container lp-footer__inner">
          <span className="lp-footer__name">ABC Car Breakdown Recovery Birmingham Ltd</span>
          <span>Unit 3, Northwood Works, 155 Tame Rd, Birmingham B6 7DG</span>
          <div className="lp-footer__contact">
            <a href={PHONE_TEL} className="lp-footer__phone">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="footer__email">{EMAIL}</a>
          </div>
          <span className="lp-footer__legal">
            © 2026 · Company no. 16578043 · <a href="/">Main site</a> · Privacy
          </span>
        </div>
      </footer>

      {STICKY_CALL_BAR && (
        <>
          <div className="sticky-spacer" style={{ background: "var(--ink)" }} />
          <div className="sticky-bar lp-sticky">
            <a href={PHONE_TEL} className="btn btn--yellow">
              <span className="dot" style={{ background: "var(--ink)" }} />
              {c.stickyCallLabel}
            </a>
            <a href={whatsapp} target="_blank" rel="noopener" className="btn btn--whatsapp">WhatsApp</a>
          </div>
        </>
      )}
    </>
  );
}
