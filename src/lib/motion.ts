/**
 * True when the visitor has asked their OS to reduce motion. Safe on the
 * server, where it reports false and the effect simply never starts.
 */
export function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
