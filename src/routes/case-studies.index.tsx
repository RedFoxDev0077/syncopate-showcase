import { createFileRoute, redirect } from "@tanstack/react-router";
import { DEFAULT_LOCALE } from "@/i18n/config";

/** Legacy URL from before the site became a portfolio. */
export const Route = createFileRoute("/case-studies/")({
  beforeLoad: () => {
    throw redirect({
      to: "/$locale/projects",
      params: { locale: DEFAULT_LOCALE },
      replace: true,
    });
  },
});
