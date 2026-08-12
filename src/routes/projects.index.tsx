import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { FilterSelect } from "@/components/projects/FilterSelect";
import { PaginationNav } from "@/components/projects/PaginationNav";
import { JsonLd } from "@/components/JsonLd";
import { PROJECTS, INDUSTRIES, SERVICES, TECHNOLOGIES } from "@/data/projects";
import { SITE_NAME, absoluteUrl } from "@/lib/seo";

const title = `Projects — ${SITE_NAME}`;
const description =
  "Selected work across web, mobile, AI and automation — the challenge in each project, how it was solved and what it delivered.";
const canonical = absoluteUrl("/projects");

/**
 * Every field is optional so an unfiltered `/projects` link needs no search
 * params — TanStack makes `search` mandatory on links if any field is required.
 */
type Filters = {
  // Explicit `| undefined` because the project sets `exactOptionalPropertyTypes`.
  services?: string[] | undefined;
  industries?: string[] | undefined;
  technologies?: string[] | undefined;
  page?: number | undefined;
};

const PAGE_SIZE = 9;

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

/** Page 1 is implicit, so it never appears in the URL. */
function parsePage(raw: unknown) {
  const page = Math.floor(Number(raw));
  return Number.isFinite(page) && page > 1 ? page : undefined;
}

export const Route = createFileRoute("/projects/")({
  validateSearch: (search: Record<string, unknown>): Filters => ({
    services: orUndefined(parseFilter(search["services"], SERVICES)),
    industries: orUndefined(parseFilter(search["industries"], INDUSTRIES)),
    technologies: orUndefined(parseFilter(search["technologies"], TECHNOLOGIES)),
    page: parsePage(search["page"]),
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
  const { services = [], industries = [], technologies = [], page = 1 } = Route.useSearch();
  const navigate = Route.useNavigate();

  type FilterKey = "services" | "industries" | "technologies";

  const setFilter = (key: FilterKey, value: string) => {
    navigate({
      search: (prev) => ({
        ...prev,
        [key]: orUndefined(toggle(prev[key] ?? [], value)),
        // Changing a filter reshuffles the result set, so page 3 of the old
        // results is meaningless — always land back on page 1.
        page: undefined,
      }),
      replace: true,
      resetScroll: false,
    });
  };

  const filtered = useMemo(
    () =>
      PROJECTS.filter(
        (c) =>
          (!services.length || services.some((s) => c.services.includes(s))) &&
          (!industries.length || industries.some((i) => c.industries.includes(i))) &&
          (!technologies.length || technologies.some((t) => c.technologies.includes(t))),
      ),
    [services, industries, technologies],
  );

  const hasFilters = services.length + industries.length + technologies.length > 0;

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  // A hand-typed ?page=99 must not render an empty grid.
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const toPage = (target: number) => ({
    services: orUndefined(services),
    industries: orUndefined(industries),
    technologies: orUndefined(technologies),
    page: target > 1 ? target : undefined,
  });

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
            numberOfItems: PROJECTS.length,
            itemListElement: PROJECTS.map((study, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: absoluteUrl(`/projects/${study.slug}`),
              name: study.title,
            })),
          },
        }}
      />

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Selected work across web, mobile, AI and automation — the challenge in each project, how it
        was solved, and what it delivered. Filter by service, industry or technology.
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
          {pageCount > 1 && (
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              (page {currentPage} of {pageCount})
            </span>
          )}
        </h2>
        {hasFilters && (
          <Link
            to="/projects"
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
        {visible.map((study) => (
          <article key={study.slug} className="group">
            <Link to="/projects/$slug" params={{ slug: study.slug }} className="block">
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
          No projects match the selected filters.
        </p>
      )}

      <PaginationNav page={currentPage} pageCount={pageCount} toPage={toPage} />
    </main>
  );
}
