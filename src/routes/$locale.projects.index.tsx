import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { FilterSelect } from "@/components/projects/FilterSelect";
import { PaginationNav } from "@/components/projects/PaginationNav";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { TechIcon, techSlug } from "@/components/TechIcon";
import { TiltCard } from "@/components/TiltCard";
import { INDUSTRIES, PROJECTS, SERVICES, TECHNOLOGIES } from "@/data/projects";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";
import { tag } from "@/i18n/content";
import { localizeProjects } from "@/i18n/projects";
import { t } from "@/i18n/ui";
import { SITE_NAME, alternateLinks, localeUrl } from "@/lib/seo";

type Filters = {
  // Explicit `| undefined` because the project sets `exactOptionalPropertyTypes`.
  services?: string[] | undefined;
  industries?: string[] | undefined;
  technologies?: string[] | undefined;
  page?: number | undefined;
};

const PAGE_SIZE = 9;

/**
 * Query strings arrive as an array or a bare string depending on how they were
 * written. Normalise both, and drop anything outside the known vocabulary so a
 * hand-edited URL can never poison the filter state. Values stay canonical
 * English across locales — only the labels are translated.
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

export const Route = createFileRoute("/$locale/projects/")({
  validateSearch: (search: Record<string, unknown>): Filters => ({
    services: orUndefined(parseFilter(search["services"], SERVICES)),
    industries: orUndefined(parseFilter(search["industries"], INDUSTRIES)),
    technologies: orUndefined(parseFilter(search["technologies"], TECHNOLOGIES)),
    page: parsePage(search["page"]),
  }),
  head: ({ params }) => {
    const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
    const s = t(locale);
    const title = `${s.projectsTitle} — ${SITE_NAME}`;
    const canonical = localeUrl(locale, "/projects");
    return {
      meta: [
        { title },
        { name: "description", content: s.projectsIntro },
        { property: "og:title", content: title },
        { property: "og:description", content: s.projectsIntro },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
        { property: "og:locale", content: locale },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: canonical }, ...alternateLinks("/projects")],
    };
  },
  component: ProjectsIndexPage,
});

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function ProjectsIndexPage() {
  const { locale } = Route.useParams() as { locale: Locale };
  const { services = [], industries = [], technologies = [], page = 1 } = Route.useSearch();
  const navigate = Route.useNavigate();
  const s = t(locale);

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

  const localized = useMemo(() => localizeProjects(PROJECTS, locale), [locale]);

  const filtered = useMemo(
    () =>
      localized.filter(
        (c) =>
          (!services.length || services.some((v) => c.services.includes(v))) &&
          (!industries.length || industries.some((v) => c.industries.includes(v))) &&
          (!technologies.length || technologies.some((v) => c.technologies.includes(v))),
      ),
    [localized, services, industries, technologies],
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
    <main className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${s.projectsTitle} — ${SITE_NAME}`,
          description: s.projectsIntro,
          url: localeUrl(locale, "/projects"),
          inLanguage: locale,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: localized.length,
            itemListElement: localized.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: localeUrl(locale, `/projects/${project.slug}`),
              name: project.title,
            })),
          },
        }}
      />

      <p className="eyebrow">{s.secWork}</p>
      <h1 className="mt-6 text-6xl leading-[1.02]">
        <span className="text-gradient">{s.projectsTitle}</span>
      </h1>
      <p className="mt-7 max-w-3xl text-lg text-foreground/60">{s.projectsIntro}</p>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <FilterSelect
          locale={locale}
          label={s.filterServices}
          options={SERVICES}
          selected={services}
          onToggle={(v) => setFilter("services", v)}
        />
        <FilterSelect
          locale={locale}
          label={s.filterIndustry}
          options={INDUSTRIES}
          selected={industries}
          onToggle={(v) => setFilter("industries", v)}
        />
        <FilterSelect
          locale={locale}
          label={s.filterTechnologies}
          options={TECHNOLOGIES}
          selected={technologies}
          onToggle={(v) => setFilter("technologies", v)}
        />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <h2 className="font-mono text-sm tracking-wider text-foreground/60" aria-live="polite">
          <span className="text-primary">{s.result}</span> — {filtered.length}
          {pageCount > 1 && (
            <span className="ml-2 text-foreground/50">({s.pageOf(currentPage, pageCount)})</span>
          )}
        </h2>
        {hasFilters && (
          <Link
            to="/$locale/projects"
            params={{ locale }}
            search={{}}
            replace
            resetScroll={false}
            className="glass rounded-full px-4 py-2 font-mono text-xs tracking-wider text-primary transition-colors hover:bg-primary/10"
          >
            {s.clearAll}
          </Link>
        )}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <Reveal as="article" key={project.slug} delay={(i % 3) * 90}>
            <TiltCard className="h-full" max={6}>
              <Link
                to="/$locale/projects/$slug"
                params={{ locale, slug: project.slug }}
                className="glass ring-gradient group flex h-full flex-col overflow-hidden rounded-3xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={640}
                    height={400}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-semibold leading-snug transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-foreground/55">{project.excerpt}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[...project.services, ...project.industries, ...project.technologies]
                      .slice(0, 4)
                      .map((v) => (
                        <span
                          key={v}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-3 py-1 font-mono text-xs tracking-wide text-foreground/60"
                        >
                          {/* Only badge values that have a real brand mark —
                              a generic glyph on every service reads as noise. */}
                          {techSlug(v) && <TechIcon label={v} className="size-3.5" />}
                          {tag(locale, v)}
                        </span>
                      ))}
                  </div>
                </div>
              </Link>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {!filtered.length && (
        <p className="py-24 text-center text-lg text-foreground/60">{s.noMatches}</p>
      )}

      <PaginationNav locale={locale} page={currentPage} pageCount={pageCount} toPage={toPage} />
    </main>
  );
}
