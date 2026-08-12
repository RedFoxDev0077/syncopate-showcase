import { createFileRoute, redirect } from "@tanstack/react-router";
import { DEFAULT_LOCALE } from "@/i18n/config";

/** Legacy un-prefixed URL from before the site became multilingual. */
export const Route = createFileRoute("/projects/")({
  beforeLoad: () => {
    throw redirect({
      to: "/$locale/projects",
      params: { locale: DEFAULT_LOCALE },
      replace: true,
    });
  },
});
