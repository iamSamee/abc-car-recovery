import type { Metadata } from "next";
import SitePage from "@/components/SitePage";
import { RATING, REVIEW_COUNT } from "@/lib/content";
import { googleReviews } from "@/lib/landings";

export const metadata: Metadata = {
  title: `Reviews | ABC Car Recovery Birmingham — ${RATING}★ on Google`,
  description: `Rated ${RATING} from ${REVIEW_COUNT} Google reviews. Read what drivers say about ABC's 24/7 car recovery and towing in Birmingham.`,
  alternates: { canonical: "/reviews/" },
};

export default function ReviewsPage() {
  return (
    <SitePage
      path="/reviews/"
      eyebrow="Customer reviews"
      title={`Rated ${RATING} on Google.`}
      lead={`${REVIEW_COUNT} Google reviews from drivers we've recovered across Birmingham — many of them late at night.`}
    >
      <div className="review-grid">
        {googleReviews.map((r) => (
          <figure key={r.name} className="review" style={{ margin: 0 }}>
            <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
            <blockquote className="review__quote" style={{ margin: 0 }}>“{r.quote}”</blockquote>
            <figcaption className="review__who">
              <b>{r.name}</b>
              <span>{r.meta}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </SitePage>
  );
}
