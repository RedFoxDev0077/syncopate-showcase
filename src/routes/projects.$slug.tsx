import { createFileRoute, redirect } from "@tanstack/react-router";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { getProject } from "@/data/projects";

/** Legacy un-prefixed detail URL. Unknown slugs fall back to the index. */
export const Route = createFileRoute("/projects/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect(
      getProject(params.slug)
        ? {
            to: "/$locale/projects/$slug",
            params: { locale: DEFAULT_LOCALE, slug: params.slug },
            replace: true,
          }
        : { to: "/$locale/projects", params: { locale: DEFAULT_LOCALE }, replace: true },
    );
  },
});
