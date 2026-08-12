import { createFileRoute, redirect } from "@tanstack/react-router";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { getProject } from "@/data/projects";

/**
 * Legacy detail URLs: /case-studies/<slug> now lives at /<locale>/projects/<slug>.
 * Unknown slugs fall back to the project index rather than 404ing.
 */
export const Route = createFileRoute("/case-studies/$")({
  beforeLoad: ({ params }) => {
    const slug = params._splat ?? "";
    throw redirect(
      getProject(slug)
        ? {
            to: "/$locale/projects/$slug",
            params: { locale: DEFAULT_LOCALE, slug },
            replace: true,
          }
        : { to: "/$locale/projects", params: { locale: DEFAULT_LOCALE }, replace: true },
    );
  },
});
