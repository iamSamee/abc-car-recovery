import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  placeholder: string;
  variant: "hero" | "why";
  sizes?: string;
  priority?: boolean;
  children?: React.ReactNode;
};

/**
 * Photo frame. Pass `src` (e.g. "/hero-truck.jpg" in /public) to show a real
 * image; without it, a striped placeholder is rendered.
 */
export default function Photo({ src, alt, placeholder, variant, sizes = "(max-width: 900px) 100vw, 600px", priority, children }: Props) {
  return (
    <div className={`photo photo--${variant}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
      ) : (
        <div className="photo__placeholder">{placeholder}</div>
      )}
      {children}
    </div>
  );
}
