import { Link, useLocation, useParams } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import { PROFILE } from "@/data/profile";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_LABELS,
  LOCALE_SHORT,
  isLocale,
  type Locale,
} from "@/i18n/config";
import { PROFILE_I18N } from "@/i18n/content";
import { t } from "@/i18n/ui";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";
import { cn } from "@/lib/utils";

const navLink = "link-underline text-sm transition-colors hover:text-primary";
const activeNav = { className: "text-primary" };

/** Reads the locale straight from the path so the chrome works on every route. */
function useLocale(): Locale {
  const segment = useLocation({ select: (l) => l.pathname.split("/")[1] });
  return isLocale(segment) ? segment : DEFAULT_LOCALE;
}

/**
 * Switching language keeps the reader where they are: the same project page in
 * the new language, not the home page.
 */
function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = useLocation({ select: (l) => l.pathname });
  const params = useParams({ strict: false }) as { slug?: string };
  const onProjectsList = /^\/[^/]+\/projects\/?$/.test(pathname);

  const linkClass = (code: Locale) =>
    cn(
      "rounded px-1.5 py-0.5 text-xs font-medium transition-colors",
      code === locale
        ? "bg-primary text-primary-foreground"
        : "text-ink-foreground/60 hover:text-primary",
    );

  return (
    <div className="flex items-center gap-1">
      <Globe aria-hidden className="mr-1 size-4 text-ink-foreground/50" />
      <span className="sr-only">{t(locale).languageLabel}</span>
      {LOCALES.map((code) => {
        const shared = {
          hrefLang: code,
          title: LOCALE_LABELS[code],
          "aria-current": code === locale ? ("true" as const) : undefined,
          className: linkClass(code),
          children: LOCALE_SHORT[code],
        };

        // `to` has to be a literal route path, so pick the matching route and
        // carry the current params across — switching language keeps the reader
        // on the same page rather than bouncing them home.
        if (params.slug) {
          return (
            <Link
              key={code}
              to="/$locale/projects/$slug"
              params={{ locale: code, slug: params.slug }}
              {...shared}
            />
          );
        }
        if (onProjectsList) {
          return (
            <Link
              key={code}
              to="/$locale/projects"
              params={{ locale: code }}
              search={(prev) => prev}
              {...shared}
            />
          );
        }
        return <Link key={code} to="/$locale" params={{ locale: code }} {...shared} />;
      })}
    </div>
  );
}

export function SiteHeader() {
  const locale = useLocale();
  const s = t(locale);

  return (
    <header className="bg-ink text-ink-foreground">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link
          to="/$locale"
          params={{ locale }}
          aria-label={`${SITE_NAME} — ${s.homeLink}`}
          className="text-lg font-bold tracking-tight"
        >
          dylan<span className="text-primary">lee</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/$locale"
            params={{ locale }}
            className={navLink}
            activeProps={activeNav}
            activeOptions={{ exact: true }}
          >
            {s.navAbout}
          </Link>
          <Link
            to="/$locale/projects"
            params={{ locale }}
            className={navLink}
            activeProps={activeNav}
          >
            {s.navProjects}
          </Link>
          <LanguageSwitcher locale={locale} />
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const locale = useLocale();
  const profile = PROFILE_I18N[locale];

  return (
    <footer className="bg-ink text-ink-foreground/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-8 text-sm">
        <p>
          © {new Date().getFullYear()} {PROFILE.name} —{" "}
          {locale === "en" ? SITE_TAGLINE : profile.headline}
        </p>
        <p>
          {profile.location} · {profile.languages}
        </p>
      </div>
    </footer>
  );
}
