import { Outlet, createFileRoute, notFound } from "@tanstack/react-router";
import { isLocale } from "@/i18n/config";

/**
 * Locale segment. Every page lives under /en, /es or /pt; anything else is a
 * 404 rather than a silent fallback, so a typo never renders the wrong language
 * under a URL that claims otherwise.
 */
export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) throw notFound();
    return { locale: params.locale };
  },
  component: () => <Outlet />,
});
