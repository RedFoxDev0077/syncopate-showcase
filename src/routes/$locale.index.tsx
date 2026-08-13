import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MousePointerClick, Quote, Star } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { CountUp } from "@/components/CountUp";
import { HeroCanvas } from "@/components/HeroCanvas";
import { JsonLd } from "@/components/JsonLd";
import { OrbitCore } from "@/components/OrbitCore";
import { Reveal } from "@/components/Reveal";
import { TechIcon } from "@/components/TechIcon";
import { TiltCard } from "@/components/TiltCard";
import { PROFILE, REVIEW_SUMMARY, TESTIMONIALS } from "@/data/profile";
import { PROJECTS } from "@/data/projects";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";
import { PROFILE_I18N, TESTIMONIAL_PROJECTS } from "@/i18n/content";
import { localizeProject } from "@/i18n/projects";
import { t } from "@/i18n/ui";
import { SITE_NAME, SITE_TAGLINE, absoluteUrl, alternateLinks, localeUrl } from "@/lib/seo";

/* Real photography rather than abstract renders: developers actually working,
   which is what the page is about. Each sits under a heavy scrim — a busy
   photo needs far more separation from text than a flat gradient does. */
const HERO_IMAGE = "/img/hero-devs.jpg";

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
        { property: "og:image", content: absoluteUrl(HERO_IMAGE) },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: absoluteUrl(HERO_IMAGE) },
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
  const allStack = PROFILE.stack.flatMap((g) => [...g.items]);

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
          knowsAbout: allStack,
        }}
      />

      {/* ---------------- hero ---------------- */}
      {/* -mt-28 cancels the root's header offset so the backdrop runs full-bleed. */}
      <section className="relative -mt-28 flex min-h-svh items-center overflow-hidden pt-28">
        <div aria-hidden className="absolute inset-0 -z-30 bg-ink" />
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="pointer-events-none absolute inset-0 -z-20 size-full object-cover opacity-35"
        />
        {/* Left-weighted scrim keeps the headline fully legible over the photo. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-r from-ink via-ink/92 to-ink/45"
        />
        <div aria-hidden className="aurora -z-20 opacity-70" />
        <HeroCanvas className="pointer-events-none absolute inset-0 -z-10 size-full opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-b from-transparent to-background"
        />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-[1fr_minmax(0,460px)] lg:px-10">
          <div>
            <p className="animate-enter glass inline-flex items-center gap-3 rounded-full px-5 py-2">
              <span className="relative flex size-2.5">
                <span className="animate-pulse-ring absolute inline-flex size-2.5 rounded-full bg-primary" />
                <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-sm tracking-wide">{profile.availability}</span>
            </p>

            <h1
              className="animate-enter mt-9 font-display text-6xl leading-[0.98] lg:text-7xl"
              style={{ animationDelay: "90ms" }}
            >
              <span className="block text-gradient">{PROFILE.name}</span>
            </h1>
            <p
              className="animate-enter mt-5 max-w-xl font-display text-2xl font-semibold text-foreground/70 lg:text-3xl"
              style={{ animationDelay: "150ms" }}
            >
              {profile.headline}
            </p>

            <p
              className="animate-enter mt-8 max-w-xl text-lg leading-relaxed text-foreground/60"
              style={{ animationDelay: "220ms" }}
            >
              {profile.intro}
            </p>

            <div
              className="animate-enter mt-11 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "300ms" }}
            >
              <Link
                to="/$locale/projects"
                params={{ locale }}
                className="group inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.03]"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                {s.viewAllProjects(PROJECTS.length)}
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <span className="glass rounded-full px-5 py-3.5 font-mono text-sm tracking-wide text-foreground/60">
                {profile.location} · {profile.rateSuffix}
              </span>
            </div>

            {/*
              Stats as one instrument strip rather than four loose columns —
              a single object with dividers, closer to a readout than a table.
            */}
            <dl
              className="animate-enter glass mt-14 grid max-w-2xl grid-cols-2 divide-x divide-y divide-white/10 rounded-3xl sm:grid-cols-4 sm:divide-y-0"
              style={{ animationDelay: "380ms" }}
            >
              {PROFILE.stats.map((stat, i) => (
                <div key={stat.label} className="px-5 py-6 text-center">
                  <dt className="sr-only">{profile.statLabels[i]}</dt>
                  <dd>
                    <CountUp
                      value={stat.value}
                      className="block font-display text-3xl font-bold text-gradient"
                    />
                    <span className="mt-2 block font-mono text-xs leading-snug tracking-wide text-foreground/55">
                      {profile.statLabels[i]}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-enter hidden lg:block" style={{ animationDelay: "420ms" }}>
            <OrbitCore image={featured[0]!.image} title={featured[0]!.title} />
          </div>
        </div>

        <span
          aria-hidden
          className="animate-float absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-foreground/40 lg:flex"
        >
          {s.scrollHint}
          <span className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
        </span>
      </section>

      {/* ---------------- stack marquee ---------------- */}
      <section className="relative overflow-hidden border-y border-white/10 py-9">
        <div className="marquee-mask flex">
          <ul className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
            {[...allStack, ...allStack].map((item, i) => (
              <li
                key={`${item}-${i}`}
                className="flex shrink-0 items-center gap-3 text-foreground/45 transition-colors hover:text-primary"
              >
                <TechIcon label={item} className="size-6" />
                <span className="whitespace-nowrap font-mono text-sm tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- about ---------------- */}
      <section className="relative overflow-hidden py-28">
        <img
          src="/img/work-desk.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute inset-0 -z-20 size-full object-cover opacity-[0.07]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/90 to-background"
        />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.15fr_minmax(0,380px)] lg:px-10">
          <Reveal>
            <p className="eyebrow">{s.secProfile}</p>
            <h2 className="mt-6 max-w-3xl text-4xl leading-[1.15]">{profile.bio[0]}</h2>
            {profile.bio.slice(1).map((paragraph) => (
              <p key={paragraph} className="mt-6 max-w-3xl text-lg text-foreground/60">
                {paragraph}
              </p>
            ))}

            <p className="eyebrow mt-16">{s.secCapabilities}</p>
            <h3 className="mt-5 text-2xl">{s.whatIShip}</h3>
            {/* Numbered rows, not four identical boxes. */}
            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {profile.delivers.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 80}
                  className="group flex gap-6 py-6 transition-colors hover:bg-white/[0.03]"
                >
                  <span className="font-mono text-sm text-primary/70 transition-colors group-hover:text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg text-foreground/65">{item}</span>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal as="aside" from="right" delay={120} className="h-fit space-y-6">
            <div className="glass ring-spin rounded-leaf p-8">
              <p className="eyebrow">{s.coreSkills}</p>
              <dl className="mt-6 space-y-5">
                {PROFILE.coreSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between gap-4">
                    <dt className="flex items-center gap-3 font-medium">
                      <TechIcon label={skill.name} className="size-5 text-primary" />
                      {skill.name}
                    </dt>
                    <dd className="font-mono text-xs text-foreground/55">
                      {profile.skillExperience}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="glass clip-notch p-8">
              <p className="eyebrow">{s.experience}</p>
              {PROFILE.workHistory.map((job) => (
                <div key={job.company} className="mt-6">
                  <p className="font-display text-xl font-semibold">{job.role}</p>
                  <p className="mt-1.5 font-mono text-xs tracking-wide text-primary">
                    {job.company} · {job.period}
                  </p>
                  <p className="mt-4 text-foreground/55">{profile.workSummary}</p>
                </div>
              ))}
            </div>

            <div className="glass rounded-3xl p-8">
              <p className="eyebrow">{s.certifications}</p>
              {PROFILE.certifications.map((cert) => (
                <p key={cert.name} className="mt-5 flex items-center justify-between gap-4">
                  <span className="font-medium">{cert.name}</span>
                  <span className="font-mono text-sm text-primary">{cert.score}</span>
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- toolkit ---------------- */}
      <section className="relative overflow-hidden py-28">
        <img
          src="/img/team-working.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute inset-0 -z-20 size-full object-cover opacity-[0.09]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/88 to-background"
        />
        <div aria-hidden className="grid-lines opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow">{s.secStack}</p>
            <h2 className="mt-6 text-4xl">{s.whatIWorkWith}</h2>
          </Reveal>

          {/* Staggered columns give the row a rhythm instead of a flat band. */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROFILE.stack.map((group, i) => (
              <Reveal key={group.area} delay={i * 90} className={i % 2 === 1 ? "lg:mt-12" : ""}>
                <TiltCard className="h-full">
                  <div
                    className={`glass h-full p-8 [transform-style:preserve-3d] ${
                      i === 0 ? "ring-spin rounded-leaf" : "ring-gradient rounded-3xl"
                    }`}
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <TechIcon label={group.items[0]!} className="size-6" />
                    </span>
                    <h3 className="tilt-layer mt-6 text-xl text-primary">
                      {profile.stackAreas[group.area] ?? group.area}
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-foreground/60">
                          <TechIcon label={item} className="size-4 shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- selected work (bento) ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">{s.secWork}</p>
            <h2 className="mt-6 text-4xl">{s.selectedWork}</h2>
          </div>
          <Link
            to="/$locale/projects"
            params={{ locale }}
            className="group glass inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-medium transition-colors hover:text-primary"
          >
            {s.browseAllProjects}
            <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        {/* Bento: the lead case runs tall and wide, the other two sit beside it. */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {featured.map((project, i) => {
            const lead = i === 0;
            return (
              <Reveal
                as="article"
                key={project.slug}
                delay={i * 110}
                className={lead ? "lg:col-span-2 lg:row-span-2" : ""}
              >
                <TiltCard className="h-full" max={lead ? 4 : 7}>
                  <Link
                    to="/$locale/projects/$slug"
                    params={{ locale, slug: project.slug }}
                    className={`glass ring-gradient group relative flex h-full flex-col overflow-hidden rounded-3xl ${
                      lead ? "clip-notch" : ""
                    }`}
                  >
                    {lead && (
                      <span className="absolute left-6 top-6 z-10 rounded-full bg-primary px-4 py-1.5 font-mono text-xs font-medium tracking-wide text-primary-foreground">
                        {s.featured}
                      </span>
                    )}
                    <div className="overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        width={960}
                        height={600}
                        className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] ${
                          lead ? "aspect-[16/10]" : "aspect-[16/9]"
                        }`}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3
                        className={`leading-snug transition-colors group-hover:text-primary ${
                          lead ? "text-3xl" : "text-xl"
                        }`}
                      >
                        {project.title}
                      </h3>
                      {lead && (
                        <p className="mt-4 max-w-2xl text-lg text-foreground/60">
                          {project.excerpt}
                        </p>
                      )}
                      <span className="mt-auto flex items-center gap-2 pt-6 font-mono text-xs tracking-wider text-primary">
                        {s.viewProject}
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------------- testimonials ---------------- */}
      <section className="relative overflow-hidden py-28">
        <img
          src="/img/client-talk.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute inset-0 -z-20 size-full object-cover opacity-[0.13]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/85 to-background"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="eyebrow">{s.secReviews}</p>
              <h2 className="mt-6 text-4xl">{s.whatClientsSay}</h2>
            </div>
            <span className="glass inline-flex items-center gap-2.5 rounded-full px-6 py-3">
              <Star className="size-5 fill-primary text-primary" />
              <span className="font-mono text-sm tracking-wide">
                {s.reviewsSummary(REVIEW_SUMMARY.rating, REVIEW_SUMMARY.count)}
              </span>
            </span>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {TESTIMONIALS.filter((x) => x.quote).map((testimonial, i) => (
              <Reveal
                as="figure"
                key={testimonial.author}
                delay={i * 120}
                // Offsetting the second column breaks the tabular feel.
                className={i % 2 === 1 ? "h-full md:mt-16" : "h-full"}
              >
                <div
                  className={`glass flex h-full flex-col p-9 ${
                    i % 2 === 1 ? "clip-notch-tl rounded-3xl" : "rounded-leaf"
                  }`}
                >
                  <Quote className="size-8 shrink-0 text-primary/60" />
                  <blockquote className="mt-6 flex-1">
                    <p className="text-xl leading-relaxed">
                      {testimonial.translation ?? testimonial.quote}
                    </p>
                    {testimonial.translation && (
                      <p className="mt-5 text-sm italic text-foreground/45">{testimonial.quote}</p>
                    )}
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-7">
                    <Avatar name={testimonial.author} size={56} />
                    <span>
                      <span className="block font-display font-semibold">{testimonial.author}</span>
                      <span className="mt-1 block text-sm text-foreground/55">
                        {TESTIMONIAL_PROJECTS[locale][testimonial.author] ?? testimonial.project}
                      </span>
                    </span>
                  </figcaption>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-20 flex justify-center">
            <Link
              to="/$locale/projects"
              params={{ locale }}
              className="group glass ring-spin inline-flex items-center gap-4 rounded-full px-10 py-5"
            >
              <MousePointerClick className="size-5 text-primary" />
              <span className="font-display text-xl font-semibold">
                {s.viewAllProjects(PROJECTS.length)}
              </span>
              <ArrowRight className="size-5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
