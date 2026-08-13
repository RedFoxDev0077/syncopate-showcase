import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
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
    <main className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl font-bold">{s.projectNotFound}</h1>
      <p className="mt-4 text-lg text-foreground/55">{s.projectNotFoundBody}</p>
      <Link
        to="/$locale/projects"
        params={{ locale }}
        className="glass mt-8 inline-flex rounded-full px-6 py-3 font-medium text-primary transition-colors hover:bg-primary/10"
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
          publisher: { "@type": "Organization", name: SITE_NAME },
        }}
      />

      <section className="relative -mt-28 overflow-hidden pt-28">
        <div aria-hidden className="absolute inset-0 -z-30 bg-ink" />
        <div aria-hidden className="aurora -z-20 opacity-60" />
        <div aria-hidden className="grid-lines -z-10" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-background"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <Link
            to="/$locale/projects"
            params={{ locale }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs tracking-wider transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" /> {s.allProjects}
          </Link>
          <h1
            className="animate-enter mt-8 max-w-4xl font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "60ms" }}
          >
            {project.title}
          </h1>
          <p
            className="animate-enter mt-7 max-w-3xl text-lg leading-relaxed text-ink-foreground/60"
            style={{ animationDelay: "140ms" }}
          >
            {project.excerpt}
          </p>
          <div
            className="animate-enter mt-6 flex flex-wrap gap-2"
            style={{ animationDelay: "220ms" }}
          >
            {tags.map((v) => (
              <span
                key={v}
                className="glass rounded-full px-3.5 py-1.5 font-mono text-xs tracking-wide text-foreground/70"
              >
                {tag(locale, v)}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Reveal
          className="ring-gradient overflow-hidden rounded-3xl"
          style={{ boxShadow: "var(--shadow-float)" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="aspect-[16/8] w-full object-cover"
          />
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_320px]">
          <Reveal>
            <h2 className="font-display text-3xl font-bold">{s.theChallenge}</h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/60">{project.challenge}</p>

            <h2 className="mt-14 font-display text-3xl font-bold">{s.ourSolution}</h2>
            <ul className="mt-4 space-y-3">
              {project.solution.map((item) => (
                <li key={item} className="flex gap-4 text-lg text-foreground/60">
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            {(project.results.length > 0 || project.outcomes.length > 0) && (
              <>
                <h2 className="mt-14 font-display text-3xl font-bold">{s.results}</h2>
                {project.results.length > 0 && (
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {project.results.map((r) => (
                      <div key={r.label} className="glass ring-gradient rounded-2xl p-6">
                        <p className="font-display text-3xl font-bold text-gradient">{r.value}</p>
                        <p className="mt-2 text-sm leading-snug text-foreground/60">{r.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                {project.outcomes.length > 0 && (
                  <ul className="mt-4 space-y-3">
                    {project.outcomes.map((item) => (
                      <li key={item} className="flex gap-4 text-lg text-foreground/60">
                        <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </Reveal>

          <Reveal
            as="aside"
            from="right"
            delay={120}
            className="glass ring-gradient h-fit rounded-3xl p-7"
          >
            <dl className="space-y-4">
              {project.client && (
                <div>
                  <dt className="eyebrow">{s.client}</dt>
                  <dd className="mt-2 font-medium">{project.client}</dd>
                </div>
              )}
              {project.duration && (
                <div>
                  <dt className="eyebrow">{s.duration}</dt>
                  <dd className="mt-2 font-medium">{project.duration}</dd>
                </div>
              )}
              {project.services.length > 0 && (
                <div>
                  <dt className="eyebrow">{s.services}</dt>
                  <dd className="mt-2 font-medium">
                    {project.services.map((v) => tag(locale, v)).join(", ")}
                  </dd>
                </div>
              )}
              {project.industries.length > 0 && (
                <div>
                  <dt className="eyebrow">{s.industry}</dt>
                  <dd className="mt-2 font-medium">
                    {project.industries.map((v) => tag(locale, v)).join(", ")}
                  </dd>
                </div>
              )}
              {project.technologies.length > 0 && (
                <div>
                  <dt className="eyebrow">{s.technologies}</dt>
                  <dd className="mt-2 font-medium">{project.technologies.join(", ")}</dd>
                </div>
              )}
            </dl>
          </Reveal>
        </div>

        <Reveal as="section" className="mt-24 border-t border-white/10 pt-14">
          <h2 className="font-display text-3xl font-bold">{s.moreProjects}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
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
                  className="aspect-[16/9] w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <h3 className="mt-4 font-display text-lg font-semibold transition-colors group-hover:text-primary">
                  {other.title}
                </h3>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </main>
  );
}
