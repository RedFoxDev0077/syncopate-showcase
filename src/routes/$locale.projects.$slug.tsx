import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { PROJECTS, getProject } from "@/data/projects";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";
import { tag } from "@/i18n/content";
import { localizeProject } from "@/i18n/projects";
import { t } from "@/i18n/ui";
import { SITE_NAME, absoluteUrl, alternateLinks, localeUrl } from "@/lib/seo";

export const Route = createFileRoute("/$locale/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
    return { project: localizeProject(project, locale), locale };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project, locale } = loaderData;
    const title = `${project.title} — ${SITE_NAME}`;
    const path = `/projects/${params.slug}`;
    const canonical = localeUrl(locale, path);
    // og:image must be absolute — scrapers do not resolve relative paths.
    const image = absoluteUrl(project.image);
    return {
      meta: [
        { title },
        { name: "description", content: project.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: project.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonical },
        { property: "og:image", content: image },
        { property: "og:locale", content: locale },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: canonical }, ...alternateLinks(path)],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  const { locale } = Route.useParams() as { locale: Locale };
  const s = t(locale);
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-2xl font-semibold">{s.projectNotFound}</h1>
      <p className="mt-2 text-muted-foreground">{s.projectNotFoundBody}</p>
      <Link
        to="/$locale/projects"
        params={{ locale }}
        className="mt-6 inline-block text-primary hover:underline"
      >
        {s.backToAllProjects}
      </Link>
    </main>
  );
}

function ProjectDetail() {
  const { project, locale } = Route.useLoaderData();
  const s = t(locale);
  const tags = [...project.services, ...project.industries, ...project.technologies];

  // Prefer projects that share a tag; top up with the rest if there aren't enough.
  const related = PROJECTS.filter(
    (c) =>
      c.slug !== project.slug &&
      [...c.services, ...c.industries, ...c.technologies].some((v) => tags.includes(v)),
  );
  const others = [
    ...related,
    ...PROJECTS.filter((c) => c.slug !== project.slug && !related.includes(c)),
  ]
    .slice(0, 2)
    .map((p) => localizeProject(p, locale));

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: project.title,
          description: project.excerpt,
          image: absoluteUrl(project.image),
          url: localeUrl(locale, `/projects/${project.slug}`),
          inLanguage: locale,
          about: tags,
          isBasedOn: project.sourceUrl,
          publisher: { "@type": "Organization", name: SITE_NAME },
        }}
      />

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Link
            to="/$locale/projects"
            params={{ locale }}
            className="inline-flex items-center gap-2 text-sm text-ink-foreground/70 transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" /> {s.allProjects}
          </Link>
          <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-ink-foreground/75">{project.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((v) => (
              <span
                key={v}
                className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground"
              >
                {tag(locale, v)}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div
          className="overflow-hidden rounded-2xl p-4 shadow-[var(--shadow-card)]"
          style={{ backgroundImage: "var(--gradient-primary)" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="aspect-[16/8] w-full rounded-xl object-cover"
          />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            <h2 className="text-2xl font-semibold">{s.theChallenge}</h2>
            <p className="mt-3 text-muted-foreground">{project.challenge}</p>

            <h2 className="mt-10 text-2xl font-semibold">{s.ourSolution}</h2>
            <ul className="mt-4 space-y-3">
              {project.solution.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            {(project.results.length > 0 || project.outcomes.length > 0) && (
              <>
                <h2 className="mt-10 text-2xl font-semibold">{s.results}</h2>
                {project.results.length > 0 && (
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {project.results.map((r) => (
                      <div key={r.label} className="rounded-xl border border-border bg-muted p-5">
                        <p className="text-2xl font-bold text-primary">{r.value}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{r.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                {project.outcomes.length > 0 && (
                  <ul className="mt-4 space-y-3">
                    {project.outcomes.map((item) => (
                      <li key={item} className="flex gap-3 text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-muted p-6 text-sm">
            <dl className="space-y-4">
              {project.client && (
                <div>
                  <dt className="text-muted-foreground">{s.client}</dt>
                  <dd className="mt-1 font-medium">{project.client}</dd>
                </div>
              )}
              {project.duration && (
                <div>
                  <dt className="text-muted-foreground">{s.duration}</dt>
                  <dd className="mt-1 font-medium">{project.duration}</dd>
                </div>
              )}
              {project.services.length > 0 && (
                <div>
                  <dt className="text-muted-foreground">{s.services}</dt>
                  <dd className="mt-1 font-medium">
                    {project.services.map((v) => tag(locale, v)).join(", ")}
                  </dd>
                </div>
              )}
              {project.industries.length > 0 && (
                <div>
                  <dt className="text-muted-foreground">{s.industry}</dt>
                  <dd className="mt-1 font-medium">
                    {project.industries.map((v) => tag(locale, v)).join(", ")}
                  </dd>
                </div>
              )}
              {project.technologies.length > 0 && (
                <div>
                  <dt className="text-muted-foreground">{s.technologies}</dt>
                  <dd className="mt-1 font-medium">{project.technologies.join(", ")}</dd>
                </div>
              )}
            </dl>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              {s.viewLiveProject}
              <ExternalLink className="size-3.5" />
            </a>
          </aside>
        </div>

        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-xl font-semibold">{s.moreProjects}</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                to="/$locale/projects/$slug"
                params={{ locale, slug: other.slug }}
                className="group"
              >
                <img
                  src={other.image}
                  alt={other.title}
                  loading="lazy"
                  className="aspect-[16/9] w-full rounded-xl object-cover"
                />
                <h3 className="mt-3 font-semibold transition-colors group-hover:text-primary">
                  {other.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
