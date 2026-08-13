import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/ui";
import { cn } from "@/lib/utils";

type Props = {
  locale: Locale;
  page: number;
  pageCount: number;
  /** Builds the search params for a given page, preserving active filters. */
  toPage: (page: number) => Record<string, unknown>;
};

/**
 * Condensed page list: always the first and last page, plus a window around the
 * current one. `null` marks a gap rendered as an ellipsis.
 */
function pageItems(page: number, pageCount: number): (number | null)[] {
  if (pageCount <= 7) return Array.from({ length: pageCount }, (_, i) => i + 1);

  const window = new Set([1, pageCount, page, page - 1, page + 1]);
  if (page <= 3) [2, 3, 4].forEach((p) => window.add(p));
  if (page >= pageCount - 2)
    [pageCount - 3, pageCount - 2, pageCount - 1].forEach((p) => window.add(p));

  const pages = [...window].filter((p) => p >= 1 && p <= pageCount).sort((a, b) => a - b);

  return pages.flatMap((p, i) => (i > 0 && p - pages[i - 1]! > 1 ? [null, p] : [p]));
}

const base =
  "inline-flex h-11 min-w-11 items-center justify-center rounded-full px-4 font-mono text-sm transition-all duration-300";

export function PaginationNav({ locale, page, pageCount, toPage }: Props) {
  if (pageCount <= 1) return null;
  const s = t(locale);

  return (
    <nav aria-label={s.pagination} className="mt-20 flex justify-center">
      <ul className="flex flex-wrap items-center gap-1">
        <li>
          {page > 1 ? (
            <Link
              to="/$locale/projects"
              params={{ locale }}
              search={toPage(page - 1)}
              resetScroll={false}
              aria-label={s.goToPrevious}
              className={cn(base, "glass gap-1.5 pl-3 hover:text-primary")}
            >
              <ChevronLeft className="size-4" />
              {s.previous}
            </Link>
          ) : (
            <span aria-disabled className={cn(base, "gap-1.5 pl-3 text-foreground/40")}>
              <ChevronLeft className="size-4" />
              {s.previous}
            </span>
          )}
        </li>

        {pageItems(page, pageCount).map((item, i) =>
          item === null ? (
            <li key={`gap-${i}`} aria-hidden className="px-2 text-muted-foreground">
              …
            </li>
          ) : (
            <li key={item}>
              <Link
                to="/$locale/projects"
                params={{ locale }}
                search={toPage(item)}
                resetScroll={false}
                aria-label={s.goToPage(item)}
                aria-current={item === page ? "page" : undefined}
                className={cn(
                  base,
                  item === page
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                    : "glass hover:text-primary",
                )}
              >
                {item}
              </Link>
            </li>
          ),
        )}

        <li>
          {page < pageCount ? (
            <Link
              to="/$locale/projects"
              params={{ locale }}
              search={toPage(page + 1)}
              resetScroll={false}
              aria-label={s.goToNext}
              className={cn(base, "glass gap-1.5 pr-3 hover:text-primary")}
            >
              {s.next}
              <ChevronRight className="size-4" />
            </Link>
          ) : (
            <span aria-disabled className={cn(base, "gap-1.5 pr-3 text-foreground/40")}>
              {s.next}
              <ChevronRight className="size-4" />
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}
