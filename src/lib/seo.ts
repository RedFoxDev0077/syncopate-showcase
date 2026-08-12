/**
 * Site-level SEO helpers.
 *
 * Crawlers and social scrapers require absolute URLs for canonical links and
 * og:image, so relative asset paths have to be resolved against a known origin.
 * Set VITE_SITE_URL per environment; the deployed app URL is the fallback.
 */
export const SITE_URL = (
  import.meta.env["VITE_SITE_URL"] ?? "https://syncopate-showcase.lovable.app"
).replace(/\/$/, "");

export const SITE_NAME = "Bits Orchestra";

/** Resolves an app-relative path (`/case-studies/foo.webp`) to an absolute URL. */
export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
