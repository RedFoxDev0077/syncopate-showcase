import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Quote, Star } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { PROFILE, REVIEW_SUMMARY, TESTIMONIALS } from "@/data/profile";
import { PROJECTS } from "@/data/projects";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";
import { PROFILE_I18N, TESTIMONIAL_PROJECTS } from "@/i18n/content";
import { localizeProject } from "@/i18n/projects";
import { t } from "@/i18n/ui";
import { SITE_NAME, SITE_TAGLINE, alternateLinks, localeUrl } from "@/lib/seo";

export const Route = createFileRoute("/$locale/")({
  head: ({ params }) => {
    const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
    const profile = PROFILE_I18N[locale];
    const title = `${SITE_NAME} — ${locale === "en" ? SITE_TAGLINE : profile.headline}`;
    const canonical = localeUrl(locale);
    return {
      meta: [
        { title },
        { name: "description", content: profile.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: profile.intro },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: canonical },
        { property: "og:locale", content: locale },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: canonical }, ...alternateLinks()],
    };
  },
  component: PortfolioHome,
});

function PortfolioHome() {
  const { locale } = Route.useParams() as { locale: Locale };
  const s = t(locale);
  const profile = PROFILE_I18N[locale];
  const featured = PROJECTS.slice(0, 3).map((p) => localizeProject(p, locale));

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: PROFILE.name,
          jobTitle: profile.role,
          description: profile.intro,
          url: localeUrl(locale),
          address: { "@type": "PostalAddress", addressCountry: profile.location },
          knowsLanguage: "English",
          knowsAbout: PROFILE.stack.flatMap((group) => [...group.items]),
        }}
      />

      {/* Hero — who I am, kept short; no contact details anywhere on this site. */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-3 py-1 text-xs font-medium text-ink-foreground/80">
            <span className="size-1.5 rounded-full bg-primary" />
            {profile.availability}
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {PROFILE.name}
            <span className="mt-2 block text-primary">{profile.headline}</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-foreground/80">
            {profile.intro}
          </p>

          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            {PROFILE.stats.map((stat, i) => (
              <div key={stat.label}>
                <dt className="sr-only">{profile.statLabels[i]}</dt>
                <dd>
                  <span className="block text-3xl font-bold text-primary">{stat.value}</span>
                  <span className="mt-1 block text-sm text-ink-foreground/60">
                    {profile.statLabels[i]}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/$locale/projects"
              params={{ locale }}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {s.viewAllProjects(PROJECTS.length)}
              <ArrowRight className="size-4" />
            </Link>
            <p className="text-sm text-ink-foreground/60">
              {profile.location} · {profile.rateSuffix} · {profile.languages}
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{s.aboutMe}</h2>
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}

            <h3 className="mt-10 text-lg font-semibold">{s.whatIShip}</h3>
            <ul className="mt-4 space-y-3">
              {profile.delivers.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit space-y-8 rounded-2xl border border-border bg-muted p-6">
            <div>
              <h3 className="text-sm font-semibold">{s.coreSkills}</h3>
              <dl className="mt-3 space-y-2 text-sm">
                {PROFILE.coreSkills.map((skill) => (
                  <div key={skill.name} className="flex justify-between gap-4">
                    <dt className="font-medium">{skill.name}</dt>
                    <dd className="text-muted-foreground">{profile.skillExperience}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="text-sm font-semibold">{s.experience}</h3>
              {PROFILE.workHistory.map((job) => (
                <div key={job.company} className="mt-3 text-sm">
                  <p className="font-medium">{job.role}</p>
                  <p className="text-muted-foreground">
                    {job.company} · {job.period}
                  </p>
                  <p className="mt-2 text-muted-foreground">{profile.workSummary}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-semibold">{s.certifications}</h3>
              {PROFILE.certifications.map((cert) => (
                <p key={cert.name} className="mt-3 text-sm text-muted-foreground">
                  {cert.name} — {cert.score} ({cert.year})
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Stack */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">{s.whatIWorkWith}</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROFILE.stack.map((group) => (
              <div key={group.area}>
                <h3 className="text-sm font-semibold text-primary">
                  {profile.stackAreas[group.area] ?? group.area}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{s.selectedWork}</h2>
            <p className="mt-2 text-muted-foreground">{s.selectedWorkSub(PROJECTS.length)}</p>
          </div>
          <Link
            to="/$locale/projects"
            params={{ locale }}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            {s.browseAllProjects}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <article key={project.slug} className="group">
              <Link
                to="/$locale/projects/$slug"
                params={{ locale, slug: project.slug }}
                className="block"
              >
                <div
                  className="overflow-hidden rounded-2xl p-4 shadow-[var(--shadow-card)]"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={640}
                    height={400}
                    className="aspect-[16/10] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">{project.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-semibold tracking-tight">{s.whatClientsSay}</h2>
            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="size-4 fill-primary text-primary" />
              {s.reviewsSummary(REVIEW_SUMMARY.rating, REVIEW_SUMMARY.count)}
            </span>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.filter((t) => t.quote).map((testimonial) => (
              <figure
                key={testimonial.author}
                className="flex h-full flex-col rounded-2xl border border-border bg-background p-6"
              >
                <Quote className="size-5 shrink-0 text-primary" />
                <blockquote className="mt-4 flex-1">
                  <p className="leading-relaxed">{testimonial.translation ?? testimonial.quote}</p>
                  {testimonial.translation && (
                    <p lang="und" className="mt-3 text-sm italic text-muted-foreground">
                      {testimonial.quote}
                    </p>
                  )}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                  <span className="font-medium">{testimonial.author}</span>
                  <span className="mt-1 block text-muted-foreground">
                    {TESTIMONIAL_PROJECTS[locale][testimonial.author] ?? testimonial.project}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
