export default function Logo({ href }: { href?: string }) {
  const inner = (
    <>
      <span className="logo__mark" aria-hidden>
        <span className="logo__abc">ABC</span>
        <span className="logo__bar" />
      </span>
      <span className="logo__text">
        <span className="logo__name">Car Recovery</span>
        <span className="logo__sub">Birmingham · 24/7</span>
      </span>
    </>
  );
  return href ? (
    <a href={href} className="logo" aria-label="ABC Car Recovery — home">{inner}</a>
  ) : (
    <div className="logo">{inner}</div>
  );
}
