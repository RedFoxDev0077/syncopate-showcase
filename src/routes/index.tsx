import { createFileRoute, redirect } from "@tanstack/react-router";
import { DEFAULT_LOCALE } from "@/i18n/config";

/** The site always serves a locale-prefixed URL. */
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/$locale", params: { locale: DEFAULT_LOCALE }, replace: true });
  },
});
