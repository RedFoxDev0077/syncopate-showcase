import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

type Node = { x: number; y: number; vx: number; vy: number; r: number };

/**
 * Animated constellation backdrop.
 *
 * This is the "video" layer of the hero, drawn rather than streamed: a real
 * video loop would cost megabytes, can't take the brand colour, and would still
 * need a poster frame. A canvas costs a few kilobytes, stays sharp at any
 * viewport, and pauses when off-screen.
 *
 * Skipped entirely under prefers-reduced-motion, where the static gradients
 * behind it carry the hero on their own.
 */
export function HeroCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || prefersReducedMotion()) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let running = true;

    // Cap the pixel ratio: past 2x the extra fill cost buys nothing visible.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Scale the node count to the area so large screens don't look sparse
      // and phones don't burn battery.
      const count = Math.round(Math.min(90, Math.max(28, (width * height) / 18000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.7,
      }));
    };

    const LINK_DISTANCE = 150;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        // Bounce rather than wrap: wrapping makes links snap across the canvas.
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]!;
          const b = nodes[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > LINK_DISTANCE) continue;

          ctx.globalAlpha = (1 - dist / LINK_DISTANCE) * 0.28;
          ctx.strokeStyle = "#4ade80";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        ctx.globalAlpha = 0.75;
        ctx.fillStyle = "#6ee7a8";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      if (running) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    // Stop drawing once the hero scrolls away — no point animating off-screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        running = Boolean(entry?.isIntersecting);
        if (running) {
          raf = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
