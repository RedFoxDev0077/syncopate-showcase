import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Counts a stat up when it scrolls into view.
 *
 * Values arrive as display strings ("80+", "5.0", "$6–7.2K"), so the numeric
 * part is animated and the surrounding characters are preserved. If no number
 * can be parsed — or motion is reduced — the original string renders untouched,
 * which also means the server-rendered HTML is always the real value.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || typeof IntersectionObserver === "undefined") return;

    const match = value.match(/-?\d+(?:[.,]\d+)?/);
    if (!match) return;

    const raw = match[0];
    const decimals = (raw.split(/[.,]/)[1] ?? "").length;
    const target = Number(raw.replace(",", "."));
    if (!Number.isFinite(target)) return;

    const render = (n: number) => value.replace(raw, n.toFixed(decimals));
    setDisplay(render(0));

    let raf = 0;
    const DURATION = 1400;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();

        let start: number | null = null;
        const step = (ts: number) => {
          start ??= ts;
          const p = Math.min(1, (ts - start) / DURATION);
          // easeOutExpo: fast start, long settle.
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          setDisplay(render(target * eased));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
