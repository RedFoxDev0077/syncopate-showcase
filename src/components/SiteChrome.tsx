import { Link, useLocation, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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

/** Reads the locale straight from the path so the chrome works on every route. */
function useLocale(): Locale {
  const segment = useLocation({ select: (l) => l.pathname.split("/")[1] });
  return isLocale(segment) ? segment : DEFAULT_LOCALE;
}

/** True once the page has scrolled past the hero's first fold. */
function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = useLocation({ select: (l) => l.pathname });
  const params = useParams({ strict: false }) as { slug?: string };
  const onProjectsList = /^\/[^/]+\/projects\/?$/.test(pathname);

  // Circular flags rather than text codes: recognisable at a glance and the
  // same width in every language, so the header never reflows.
  const linkClass = (code: Locale) =>
    cn(
      "block rounded-full transition-all duration-300 hover:scale-110",
      code === locale
        ? "ring-2 ring-primary ring-offset-2 ring-offset-background/40 shadow-[0_0_16px_-2px_oklch(0.78_0.19_142/0.8)]"
        : "opacity-45 grayscale hover:opacity-90 hover:grayscale-0",
    );

  return (
    <div className="glass flex items-center gap-2.5 rounded-full px-3 py-2">
      <span className="sr-only">{t(locale).languageLabel}</span>
      {LOCALES.map((code) => {
        const shared = {
          hrefLang: code,
          title: LOCALE_LABELS[code],
          "aria-label": LOCALE_LABELS[code],
          "aria-current": code === locale ? ("true" as const) : undefined,
          className: linkClass(code),
          children: (
            <img
              src={`/flags/${code}.svg`}
              alt=""
              width={26}
              height={26}
              className="size-[26px] rounded-full"
            />
          ),
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
  const scrolled = useScrolled();

  const navLink =
    "link-underline font-medium text-foreground/70 transition-colors hover:text-foreground";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        // Transparent over the hero, frosted once the content scrolls under it.
        scrolled
          ? "border-b border-white/10 bg-background/70 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 transition-all duration-500 lg:px-10",
          scrolled ? "h-20" : "h-28",
        )}
      >
        <Link
          to="/$locale"
          params={{ locale }}
          aria-label={`${SITE_NAME} — ${s.homeLink}`}
          className="group flex items-center gap-3"
        >
          <span
            aria-hidden
            className="grid size-11 place-items-center rounded-xl font-display text-base font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            DL
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-semibold tracking-tight">
              {PROFILE.name}
            </span>
            <span className="font-mono text-[0.7rem] tracking-wider text-foreground/60">
              {PROFILE_I18N[locale].role}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-7 sm:gap-9">
          <Link
            to="/$locale"
            params={{ locale }}
            className={navLink}
            activeProps={{ className: "text-foreground" }}
            activeOptions={{ exact: true }}
          >
            {s.navAbout}
          </Link>
          <Link
            to="/$locale/projects"
            params={{ locale }}
            className={navLink}
            activeProps={{ className: "text-foreground" }}
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
    <footer className="relative mt-32 overflow-hidden border-t border-white/10 bg-ink text-ink-foreground">
      <div aria-hidden className="grid-lines opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="font-display text-3xl font-semibold tracking-tight">
              <span className="text-gradient">{PROFILE.name}</span>
            </p>
            <p className="mt-2 max-w-md text-ink-foreground/65">
              {locale === "en" ? SITE_TAGLINE : profile.headline}
            </p>
          </div>
          <div className="font-mono text-xs tracking-wider text-ink-foreground/60">
            <p>{profile.location.toUpperCase()}</p>
            <p className="mt-1">{profile.languages}</p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 font-mono text-xs text-ink-foreground/65">
          © {new Date().getFullYear()} {PROFILE.name}
        </div>
      </div>
    </footer>
  );
}
