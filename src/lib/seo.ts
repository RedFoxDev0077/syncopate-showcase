/**
 * Site-level SEO helpers.
 *
 * Crawlers and social scrapers require absolute URLs for canonical links and
 * og:image, so relative asset paths have to be resolved against a known origin.
 * Set VITE_SITE_URL per environment; the deployed app URL is the fallback.
 */
import { DEFAULT_LOCALE, LOCALES, LOCALE_TAGS, type Locale } from "@/i18n/config";

export const SITE_URL = (
  import.meta.env["VITE_SITE_URL"] ?? "https://syncopate-showcase.lovable.app"
).replace(/\/$/, "");

export const SITE_NAME = "Dylan Lee";
export const SITE_TAGLINE = "Full-Stack Developer — Web, Mobile & AI Automation";

/** Resolves an app-relative path (`/projects/foo.webp`) to an absolute URL. */
export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Absolute URL of `path` (without locale prefix) in a given locale. */
export function localeUrl(locale: Locale, path = "") {
  return absoluteUrl(`/${locale}${path}`);
}

/**
 * hreflang link tags for every locale plus x-default, so search engines serve
 * the right language and don't treat the translations as duplicates.
 */
export function alternateLinks(path = "") {
  return [
    ...LOCALES.map((locale) => ({
      rel: "alternate",
      hrefLang: LOCALE_TAGS[locale],
      href: localeUrl(locale, path),
    })),
    { rel: "alternate", hrefLang: "x-default", href: localeUrl(DEFAULT_LOCALE, path) },
  ];
}
