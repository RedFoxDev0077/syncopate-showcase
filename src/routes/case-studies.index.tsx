import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL from before the site became a portfolio. */
export const Route = createFileRoute("/case-studies/")({
  beforeLoad: () => {
    throw redirect({ to: "/projects", replace: true });
  },
});
