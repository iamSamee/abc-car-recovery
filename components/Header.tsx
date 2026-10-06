"use client";

import { useState } from "react";
import Logo from "./Logo";
import { navLinks, PHONE_TEL } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__bar">
        <Logo href="#top" />
        <div className="header__actions">
          <a href={PHONE_TEL} className="btn btn--yellow header__call">
            <span className="dot" style={{ background: "var(--ink)" }} />
            Call now
          </a>
          <button
            type="button"
            className="burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="container mobile-nav">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
