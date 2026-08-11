import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FilterSelect } from "@/components/case-studies/FilterSelect";
import { CASE_STUDIES, INDUSTRIES, SERVICES, TECHNOLOGIES } from "@/data/case-studies";

const title = "Case Studies — Bits Orchestra";
const description =
  "Browse all our case studies: software, web and UI/UX projects with the challenges faced, the solutions implemented and the results achieved.";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudiesListPage,
});

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function CaseStudiesListPage() {
  const [services, setServices] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);

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
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Case studies</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Real-life examples of our projects — the challenges faced, the solutions implemented and
        the results achieved.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <FilterSelect
          label="Services"
          options={SERVICES}
          selected={services}
          onToggle={(v) => setServices((s) => toggle(s, v))}
        />
        <FilterSelect
          label="Industry"
          options={INDUSTRIES}
          selected={industries}
          onToggle={(v) => setIndustries((s) => toggle(s, v))}
        />
        <FilterSelect
          label="Technologies"
          options={TECHNOLOGIES}
          selected={technologies}
          onToggle={(v) => setTechnologies((s) => toggle(s, v))}
        />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Result: {filtered.length}</h2>
        {hasFilters && (
          <button
            type="button"
            onClick={() => {
              setServices([]);
              setIndustries([]);
              setTechnologies([]);
            }}
            className="text-sm font-medium text-primary hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
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
