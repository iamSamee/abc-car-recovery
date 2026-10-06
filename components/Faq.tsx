"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="list">
      {faqs.map((f, i) => {
        const open = openIdx === i;
        return (
          <div key={f.q} className="faq__item" data-open={open}>
            <button
              type="button"
              className="faq__btn"
              aria-expanded={open}
              aria-controls={`faq-${i}`}
              onClick={() => setOpenIdx(open ? -1 : i)}
            >
              <span className="faq__q">{f.q}</span>
              <span className="faq__icon" aria-hidden>{open ? "–" : "+"}</span>
            </button>
            {open && <p id={`faq-${i}`} className="faq__a">{f.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
