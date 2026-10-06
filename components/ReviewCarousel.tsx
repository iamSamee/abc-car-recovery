"use client";

import { useEffect, useRef } from "react";
import { reviews as defaultReviews } from "@/lib/content";

type Review = { quote: string; name: string; meta: string };

export default function ReviewCarousel({ items = defaultReviews }: { items?: Review[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      const el = ref.current;
      if (!el || paused.current) return;
      const card = el.firstElementChild;
      const step = card ? card.getBoundingClientRect().width + 12 : 300;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) el.scrollLeft = 0;
      else el.scrollLeft += step;
    }, 3000);
    return () => {
      clearInterval(id);
      clearTimeout(resumeTimer.current);
    };
  }, []);

  const pause = () => {
    paused.current = true;
  };
  const resume = () => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => (paused.current = false), 2500);
  };

  return (
    <div
      ref={ref}
      className="carousel"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      {items.map((r, i) => (
        <figure key={i} className="review" style={{ margin: 0 }}>
          <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
          <blockquote className="review__quote" style={{ margin: 0 }}>“{r.quote}”</blockquote>
          <figcaption className="review__who">
            <b>{r.name}</b>
            <span>{r.meta}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
