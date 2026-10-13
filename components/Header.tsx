"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { navLinks, PHONE_TEL } from "@/lib/content";

const strip = (p: string | null) => (p ?? "").replace(/\/+$/, "") || "/";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container header__bar">
        <Logo href="/" />
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
            <a key={l.href} href={l.href} aria-current={strip(pathname) === strip(l.href) ? "page" : undefined} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
