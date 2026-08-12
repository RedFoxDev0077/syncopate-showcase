import { Link } from "@tanstack/react-router";
import { PROFILE } from "@/data/profile";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

const navLink = "text-sm transition-colors hover:text-primary";
const activeNav = { className: "text-primary" };

export function SiteHeader() {
  return (
    <header className="bg-ink text-ink-foreground">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          to="/"
          aria-label={`${SITE_NAME} — home`}
          className="text-lg font-bold tracking-tight"
        >
          dylan<span className="text-primary">lee</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className={navLink} activeProps={activeNav} activeOptions={{ exact: true }}>
            About
          </Link>
          <Link to="/projects" className={navLink} activeProps={activeNav}>
            Projects
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-8 text-sm">
        <p>
          © {new Date().getFullYear()} {SITE_NAME} — {SITE_TAGLINE}
        </p>
        <p>
          {PROFILE.location} · {PROFILE.languages}
        </p>
      </div>
    </footer>
  );
}
