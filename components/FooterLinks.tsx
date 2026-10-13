import { footerLinks } from "@/lib/content";

export default function FooterLinks() {
  return (
    <nav className="footer-links" aria-label="Site pages">
      {footerLinks.map((l) => (
        <a key={l.href} href={l.href}>{l.label}</a>
      ))}
    </nav>
  );
}
