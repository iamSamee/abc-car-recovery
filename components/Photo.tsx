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
export default function Photo({ src, alt, placeholder, variant, sizes = "(max-width: 900px) calc(100vw - 32px), 568px", priority, children }: Props) {
  return (
    <div className={`photo photo--${variant}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          // Hero photo is the page's LCP: preload it and ask for it first.
          preload={priority}
          fetchPriority={priority ? "high" : undefined}
          loading={priority ? "eager" : undefined}
        />
      ) : (
        <div className="photo__placeholder">{placeholder}</div>
      )}
      {children}
    </div>
  );
}
