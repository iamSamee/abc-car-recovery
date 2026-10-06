import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Photo from "@/components/Photo";
import QuoteForm from "@/components/QuoteForm";
import ReviewCarousel from "@/components/ReviewCarousel";
import Faq from "@/components/Faq";
import {
  PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, EMAIL, RATING, REVIEW_COUNT,
  trust, services, steps, reasons, areas,
} from "@/lib/content";

// Set to false to hide the fixed mobile call / WhatsApp bar.
const STICKY_CALL_BAR = true;

export default function Home() {
  return (
    <>
      <div className="topstrip">
        <span className="dot dot--pulse" style={{ background: "var(--green)" }} />
        <span>Recovery trucks on the road now — Birmingham &amp; West Midlands</span>
      </div>

      <Header />

      <main>
        {/* Hero */}
        <section id="top" className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <div className="pill">
                <span className="dot dot--pulse" style={{ background: "#34C759" }} />
                Average arrival: 30–45 mins
              </div>
              <h1 className="display hero__title">
                Broken down?<br />
                <span>We&apos;re on our way.</span>
              </h1>
              <p className="hero__lead">
                24/7 car &amp; van breakdown recovery across Birmingham and the West Midlands. Roadside,
                motorway, accident or non-runner — one call and a driver is dispatched.
              </p>
              <div className="hero__ctas">
                <a href={PHONE_TEL} className="btn btn--yellow hero__phone">
                  <span className="hero__phone-text">
                    <span className="hero__phone-label">Call 24/7</span>
                    <span className="hero__phone-number">{PHONE_DISPLAY}</span>
                  </span>
                  <span className="hero__arrow" aria-hidden>→</span>
                </a>
                <div className="two-col">
                  <a href={WHATSAPP_URL} className="btn btn--outline">
                    <span className="dot" style={{ width: 10, height: 10, background: "var(--whatsapp)" }} />
                    WhatsApp
                  </a>
                  <a href="#quote" className="btn btn--outline">Get a quote</a>
                </div>
              </div>
              <div className="hero__proof">
                <span><b>★★★★★</b> {RATING} from {REVIEW_COUNT} Google reviews</span>
                <span>Fully insured</span>
                <span>No hidden fees</span>
              </div>
            </div>

            <Photo
              variant="hero"
              src="/hero-truck222.webp"
              alt="ABC Car Recovery tow truck loading a car"
              placeholder="Add photo: /public/hero-truck.webp"
              priority
            >
              <div className="badge">
                <div className="badge__icon">24/7</div>
                <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>Open all night, every night</span>
                  <span style={{ fontSize: 13, color: "#555" }}>Including bank holidays</span>
                </div>
              </div>
            </Photo>
          </div>
        </section>

        {/* Trust strip */}
        <section className="trust">
          <div className="container trust__grid">
            {trust.map((t) => (
              <div key={t.title}>
                <span className="display trust__title">{t.title}</span>
                <span className="trust__sub">{t.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="container services">
          <div className="section-head" style={{ marginBottom: 24 }}>
            <span className="eyebrow">01 — Services</span>
            <h2 className="h2">Whatever stopped you, we&apos;ll move it.</h2>
          </div>
          <div className="card-grid">
            {services.map((s) => (
              <a key={s.num} href={PHONE_TEL} className="service">
                <div className="service__top">
                  <span className="service__num">{s.num}</span>
                  <span className="tag">{s.tag}</span>
                </div>
                <h3 className="display service__title">{s.title}</h3>
                <p className="service__body">{s.body}</p>
                <span className="service__cta">Call for this service <span>→</span></span>
              </a>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="container section">
          <div className="how">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow eyebrow--yellow">02 — How it works</span>
              <h2 className="h2">Three steps back to moving.</h2>
            </div>
            <div className="steps">
              {steps.map((st) => (
                <div key={st.n} className="step">
                  <span className="display step__n">{st.n}</span>
                  <div className="step__text">
                    <span className="step__title">{st.title}</span>
                    <span className="step__body">{st.body}</span>
                  </div>
                </div>
              ))}
            </div>
            <a href={PHONE_TEL} className="btn btn--yellow how__cta">
              Start with a call — {PHONE_DISPLAY}
            </a>
          </div>
        </section>

        {/* Why us */}
        <section id="why" className="container section">
          <div className="why">
            <div className="why__intro">
              <span className="eyebrow">03 — Why ABC</span>
              <h2 className="h2">Local drivers. Honest prices. No call centre.</h2>
              <p className="lead">
                We&apos;re a Birmingham-based recovery team, not a national broker. When you call, you speak
                to the people who&apos;ll actually come and get you — and you get a fixed price before we
                set off.
              </p>
              <Photo
                variant="why"
                src="/why-driver.webp"
                alt="ABC Car Recovery driver with recovery truck"
                placeholder="Add photo: /public/why-driver.webp"
              />
            </div>
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
          </div>
        </section>

        {/* Quote */}
        <section id="quote" className="container section">
          <div className="quote">
            <div className="quote__intro">
              <span className="eyebrow">04 — Free quote</span>
              <h2 className="h2">Get a price in minutes.</h2>
              <p className="lead">
                Not urgent? Send us the details and we&apos;ll text you a fixed price. Stuck right now?
                Calling is fastest.
              </p>
              <a href={PHONE_TEL} className="quote__urgent">
                <span className="dot" style={{ background: "var(--green)" }} />
                Urgent: {PHONE_DISPLAY}
              </a>
            </div>
            <QuoteForm />
          </div>
        </section>

        {/* Areas */}
        <section id="areas" className="container section">
          <div className="section-head">
            <span className="eyebrow">05 — Coverage</span>
            <h2 className="h2">Based in Birmingham. Covering the UK.</h2>
            <p className="lead" style={{ maxWidth: 620 }}>
              Fastest response across Birmingham and the West Midlands, including the M5, M6, M42 and M6
              Toll. Long-distance and nationwide transport also available.
            </p>
          </div>
          <div className="areas">
            {areas.map((a) => (
              <span key={a} className="area">{a}</span>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="section">
          <div className="container reviews-head">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">06 — Reviews</span>
              <h2 className="h2">Drivers we&apos;ve rescued.</h2>
            </div>
            <div className="rating">
              <span className="rating__score">{RATING}</span>
              <div className="rating__meta">
                <span className="stars">★★★★★</span>
                <span>{REVIEW_COUNT} Google reviews</span>
              </div>
            </div>
          </div>
          <ReviewCarousel />
        </section>

        {/* FAQ */}
        <section id="faq" className="container section faq">
          <div className="section-head">
            <span className="eyebrow">07 — FAQ</span>
            <h2 className="h2">Good to know.</h2>
          </div>
          <Faq />
        </section>

        {/* Final CTA */}
        <section className="final">
          <div className="final__box">
            <h2 className="display final__title">
              Stuck right now? <br />
              Don&apos;t wait.
            </h2>
            <p className="final__lead">
              Tell us where you are and we&apos;ll dispatch the nearest truck. Day or night.
            </p>
            <a href={PHONE_TEL} className="btn btn--dark final__btn">Call {PHONE_DISPLAY}</a>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container footer__grid">
          <div className="footer__col footer__col--brand">
            <Logo />
            <p className="footer__about">
              Fast, reliable, affordable 24/7 breakdown recovery — getting Birmingham back on the road.
            </p>
          </div>
          <div className="footer__col">
            <span className="eyebrow">Contact</span>
            <a href={PHONE_TEL} className="footer__phone">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="footer__email">{EMAIL}</a>
            <address style={{ fontStyle: "normal", lineHeight: 1.5 }}>
              Unit 3, Northwood Works,<br />155 Tame Rd, Birmingham B6 7DG
            </address>
          </div>
          <div className="footer__col">
            <span className="eyebrow">Services</span>
            {services.map((s) => (
              <a key={s.num} href="#services">{s.title}</a>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container footer__legal">
            <span>© 2026 ABC Car Breakdown Recovery Birmingham Ltd · Company no. 16578043</span>
            <span>Privacy · Terms</span>
          </div>
        </div>
      </footer>

      {STICKY_CALL_BAR && (
        <>
          <div className="sticky-spacer" />
          <div className="sticky-bar">
            <a href={PHONE_TEL} className="btn btn--yellow">
              <span className="dot" style={{ background: "var(--ink)" }} />
              Call 24/7
            </a>
            <a href={WHATSAPP_URL} className="btn btn--whatsapp">WhatsApp</a>
          </div>
        </>
      )}
    </>
  );
}
