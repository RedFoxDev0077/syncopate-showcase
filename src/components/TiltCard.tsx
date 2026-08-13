import { useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/lib/motion";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Maximum rotation in degrees. Small values read as premium; large as a toy. */
  max?: number;
};

/**
 * Tilts toward the cursor in 3D and moves a specular highlight with it.
 *
 * Pointer-driven only: it never runs on touch (where there is no hover) and is
 * skipped entirely under prefers-reduced-motion. All work happens on transform,
 * so it stays on the compositor.
 */
export function TiltCard({ children, as, className, max = 7 }: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const frame = useRef(0);

  const handleMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse" || prefersReducedMotion()) return;

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;

      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
      el.style.transform = `rotateY(${(px - 0.5) * 2 * max}deg) rotateX(${(0.5 - py) * 2 * max}deg)`;
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.transform = "";
  };

  return (
    <div className={cn("tilt-scene", className)}>
      <Tag
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        // The sheen is drawn on this element and inherits its radius, so it has
        // to match the rounded card inside or the highlight shows square corners.
        className="tilt tilt-sheen relative h-full rounded-3xl"
      >
        {children}
      </Tag>
    </div>
  );
}
