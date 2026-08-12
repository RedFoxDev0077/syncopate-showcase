import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  /** Stagger, in ms. Use the item index in a grid. */
  delay?: number;
  /** Direction the element travels from. */
  from?: "up" | "left" | "right" | "none";
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

/**
 * Reveals its children when they scroll into view.
 *
 * The hidden state is applied by CSS scoped to `.js` on <html>, which an inline
 * script in the document head sets before first paint. Without JavaScript the
 * class is never added, so everything renders visible — the animation is a
 * progressive enhancement, never a prerequisite for reading the page. Motion is
 * disabled entirely under prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, from = "up", as, className, style }: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the observer is unavailable, show the content rather than hiding it.
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      // Start a little before the element reaches the fold so it lands settled.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", from !== "none" && `reveal-${from}`, className)}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
    >
      {children}
    </Tag>
  );
}
