import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { SITE_NAME } from "@/lib/seo";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesLayout,
});

function CaseStudiesLayout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-ink text-ink-foreground">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            to="/case-studies"
            aria-label={`${SITE_NAME} home`}
            className="text-lg font-bold tracking-tight"
          >
            bits<span className="text-primary">orchestra</span>
          </Link>
          <Link
            to="/case-studies"
            className="text-sm transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: true }}
          >
            Case studies
          </Link>
        </nav>
      </header>

      <Outlet />

      <footer className="bg-ink py-8 text-center text-sm text-ink-foreground/50">
        © {new Date().getFullYear()} {SITE_NAME} — case studies
      </footer>
    </div>
  );
}
