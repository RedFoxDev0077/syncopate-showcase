import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { FilterSelect } from "@/components/case-studies/FilterSelect";
import { JsonLd } from "@/components/JsonLd";
import { CASE_STUDIES, INDUSTRIES, SERVICES, TECHNOLOGIES } from "@/data/case-studies";
import { SITE_NAME, absoluteUrl } from "@/lib/seo";

const title = `Case Studies — ${SITE_NAME}`;
const description =
  "Browse all our case studies: software, web and UI/UX projects with the challenges faced, the solutions implemented and the results achieved.";
const canonical = absoluteUrl("/case-studies");

/**
 * Every field is optional so an unfiltered `/case-studies` link needs no search
 * params — TanStack makes `search` mandatory on links if any field is required.
 */
type Filters = {
  // Explicit `| undefined` because the project sets `exactOptionalPropertyTypes`.
  services?: string[] | undefined;
  industries?: string[] | undefined;
  technologies?: string[] | undefined;
};

/**
 * Query strings arrive as `?services=A&services=B` (array) or `?services=A`
 * (string). Normalise both, and drop anything outside the known vocabulary so a
 * hand-edited URL can never poison the filter state.
 */
function parseFilter(raw: unknown, allowed: readonly string[]): string[] {
  const values = Array.isArray(raw) ? raw : raw == null ? [] : [raw];
  return values.filter((v): v is string => typeof v === "string" && allowed.includes(v));
}

/** Empty arrays are stripped so an unfiltered view has a clean URL. */
function orUndefined(list: string[]) {
  return list.length ? list : undefined;
}

export const Route = createFileRoute("/case-studies/")({
  validateSearch: (search: Record<string, unknown>): Filters => ({
    services: orUndefined(parseFilter(search["services"], SERVICES)),
    industries: orUndefined(parseFilter(search["industries"], INDUSTRIES)),
    technologies: orUndefined(parseFilter(search["technologies"], TECHNOLOGIES)),
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: CaseStudiesListPage,
});

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function CaseStudiesListPage() {
  const { services = [], industries = [], technologies = [] } = Route.useSearch();
  const navigate = Route.useNavigate();

  const setFilter = (key: keyof Filters, value: string) => {
    navigate({
      search: (prev) => ({ ...prev, [key]: orUndefined(toggle(prev[key] ?? [], value)) }),
      replace: true,
      resetScroll: false,
    });
  };

  const filtered = useMemo(
    () =>
      CASE_STUDIES.filter(
        (c) =>
          (!services.length || services.some((s) => c.services.includes(s))) &&
          (!industries.length || industries.some((i) => c.industries.includes(i))) &&
          (!technologies.length || technologies.some((t) => c.technologies.includes(t))),
      ),
    [services, industries, technologies],
  );

  const hasFilters = services.length + industries.length + technologies.length > 0;

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: title,
          description,
          url: canonical,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: CASE_STUDIES.length,
            itemListElement: CASE_STUDIES.map((study, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: absoluteUrl(`/case-studies/${study.slug}`),
              name: study.title,
            })),
          },
        }}
      />

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Case studies</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Real-life examples of our projects — the challenges faced, the solutions implemented and the
        results achieved.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <FilterSelect
          label="Services"
          options={SERVICES}
          selected={services}
          onToggle={(v) => setFilter("services", v)}
        />
        <FilterSelect
          label="Industry"
          options={INDUSTRIES}
          selected={industries}
          onToggle={(v) => setFilter("industries", v)}
        />
        <FilterSelect
          label="Technologies"
          options={TECHNOLOGIES}
          selected={technologies}
          onToggle={(v) => setFilter("technologies", v)}
        />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-lg font-semibold" aria-live="polite">
          Result: {filtered.length}
        </h2>
        {hasFilters && (
          <Link
            to="/case-studies"
            search={{}}
            replace
            resetScroll={false}
            className="text-sm font-medium text-primary hover:underline"
          >
            Clear All
          </Link>
        )}
      </div>

      <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((study) => (
          <article key={study.slug} className="group">
            <Link to="/case-studies/$slug" params={{ slug: study.slug }} className="block">
              <div
                className="overflow-hidden rounded-2xl p-4 shadow-[var(--shadow-card)]"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  loading="lazy"
                  width={640}
                  height={400}
                  className="aspect-[16/10] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
                {study.title}
              </h3>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">{study.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[...study.services, ...study.industries, ...study.technologies].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {!filtered.length && (
        <p className="py-16 text-center text-muted-foreground">
          No case studies match the selected filters.
        </p>
      )}
    </main>
  );
}
