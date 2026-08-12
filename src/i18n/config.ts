export const LOCALES = ["en", "es", "pt"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Native names, used in the language switcher. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
};

/** Short codes shown on narrow screens. */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  pt: "PT",
};

/** BCP 47 tags for the `lang` attribute and hreflang annotations. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: "en",
  es: "es",
  pt: "pt",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}
