import { createFileRoute, redirect } from "@tanstack/react-router";
import { getProject } from "@/data/projects";

/**
 * Legacy detail URLs: /case-studies/<slug> now lives at /projects/<slug>.
 * Unknown slugs fall back to the project index rather than 404ing.
 */
export const Route = createFileRoute("/case-studies/$")({
  beforeLoad: ({ params }) => {
    const slug = params._splat ?? "";
    throw redirect(
      getProject(slug)
        ? { to: "/projects/$slug", params: { slug }, replace: true }
        : { to: "/projects", replace: true },
    );
  },
});
