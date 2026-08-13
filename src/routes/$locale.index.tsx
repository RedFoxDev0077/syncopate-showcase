import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Quote, Sparkles, Star } from "lucide-react";
import type { CSSProperties } from "react";
import { Avatar } from "@/components/Avatar";
import { CountUp } from "@/components/CountUp";
import { HeroCanvas } from "@/components/HeroCanvas";
import { JsonLd } from "@/components/JsonLd";
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
import heroBackdrop from "@/assets/hero-network.jpg";

/** Offsets for the floating screenshot cluster in the hero. */
const HERO_STACK: CSSProperties[] = [
  { top: "2%", right: 0, width: "86%", rotate: "3deg", animationDelay: "420ms" },
  { top: "34%", left: 0, width: "78%", rotate: "-4deg", animationDelay: "560ms" },
  { bottom: 0, right: "6%", width: "72%", rotate: "2deg", animationDelay: "700ms" },
];

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
        { property: "og:image", content: absoluteUrl(heroBackdrop) },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: absoluteUrl(heroBackdrop) },
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
          src={heroBackdrop}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="pointer-events-none absolute inset-0 -z-20 size-full object-cover opacity-25"
        />
        <div aria-hidden className="aurora -z-20" />
        <HeroCanvas className="pointer-events-none absolute inset-0 -z-10 size-full opacity-70" />
        <div aria-hidden className="grid-lines -z-10" />
        <div aria-hidden className="noise pointer-events-none -z-10" />
        {/* Bottom fade so the hero dissolves into the page rather than stopping. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background"
        />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_minmax(0,440px)] lg:px-10">
          <div>
            <p className="animate-enter glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm">
              <span className="relative flex size-2">
                <span className="animate-pulse-ring absolute inline-flex size-2 rounded-full bg-primary" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {profile.availability}
            </p>

            <h1
              className="animate-enter mt-8 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "90ms" }}
            >
              <span className="block text-gradient">{PROFILE.name}</span>
              <span className="mt-3 block text-3xl font-semibold text-foreground/65 sm:text-4xl lg:text-5xl">
                {profile.headline}
              </span>
            </h1>

            <p
              className="animate-enter mt-8 max-w-2xl text-lg leading-relaxed text-foreground/65"
              style={{ animationDelay: "180ms" }}
            >
              {profile.intro}
            </p>

            <div
              className="animate-enter mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "270ms" }}
            >
              <Link
                to="/$locale/projects"
                params={{ locale }}
                className="group inline-flex items-center gap-2.5 rounded-full px-7 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.03]"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                {s.viewAllProjects(PROJECTS.length)}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <span className="glass rounded-full px-5 py-3 font-mono text-xs tracking-wider text-foreground/60">
                {profile.location} · {profile.rateSuffix}
              </span>
            </div>

            <dl
              className="animate-enter mt-14 grid max-w-2xl grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4"
              style={{ animationDelay: "360ms" }}
            >
              {PROFILE.stats.map((stat, i) => (
                <div key={stat.label}>
                  <dt className="sr-only">{profile.statLabels[i]}</dt>
                  <dd>
                    <CountUp
                      value={stat.value}
                      className="block font-display text-4xl font-bold text-gradient"
                    />
                    <span className="mt-2 block text-sm leading-snug text-foreground/60">
                      {profile.statLabels[i]}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/*
            Floating screenshots from the work below. Decorative — the same
            projects are listed further down — and dropped below lg, where the
            layering would read as clutter.
          */}
          <div aria-hidden="true" className="relative hidden h-[520px] lg:block">
            {featured.map((project, i) => (
              <div
                key={project.slug}
                className="animate-enter animate-float absolute overflow-hidden rounded-2xl ring-gradient"
                style={{ ...HERO_STACK[i], boxShadow: "var(--shadow-float)" }}
              >
                <img
                  src={project.image}
                  alt=""
                  loading="eager"
                  width={640}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- stack marquee ---------------- */}
      <section className="relative overflow-hidden border-y border-white/10 py-10">
        <div className="marquee-mask flex">
          <ul className="animate-marquee flex shrink-0 items-center gap-14 pr-14">
            {[...allStack, ...allStack].map((item, i) => (
              <li
                key={`${item}-${i}`}
                className="flex shrink-0 items-center gap-3 text-foreground/55 transition-colors hover:text-primary"
              >
                <TechIcon label={item} className="size-6" />
                <span className="whitespace-nowrap font-mono text-sm tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- about ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_minmax(0,400px)]">
          <Reveal>
            <p className="eyebrow">{s.aboutMe}</p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight">
              {profile.bio[0]}
            </h2>
            {profile.bio.slice(1).map((paragraph) => (
              <p key={paragraph} className="mt-6 max-w-3xl text-lg text-foreground/60">
                {paragraph}
              </p>
            ))}

            <h3 className="mt-14 flex items-center gap-2.5 font-display text-xl font-semibold">
              <Sparkles className="size-5 text-primary" />
              {s.whatIShip}
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {profile.delivers.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 90}
                  className="glass rounded-2xl p-6 text-foreground/65"
                >
                  <span className="mb-3 block font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal as="aside" from="right" delay={120} className="h-fit space-y-8">
            <div className="glass ring-gradient rounded-3xl p-7">
              <p className="eyebrow">{s.coreSkills}</p>
              <dl className="mt-5 space-y-4">
                {PROFILE.coreSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between gap-4">
                    <dt className="flex items-center gap-2.5 font-medium">
                      <TechIcon label={skill.name} className="size-4 text-primary" />
                      {skill.name}
                    </dt>
                    <dd className="font-mono text-xs text-foreground/60">
                      {profile.skillExperience}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="glass ring-gradient rounded-3xl p-7">
              <p className="eyebrow">{s.experience}</p>
              {PROFILE.workHistory.map((job) => (
                <div key={job.company} className="mt-5">
                  <p className="font-display text-lg font-semibold">{job.role}</p>
                  <p className="mt-1 font-mono text-xs tracking-wide text-primary">
                    {job.company} · {job.period}
                  </p>
                  <p className="mt-3 text-foreground/55">{profile.workSummary}</p>
                </div>
              ))}
            </div>

            <div className="glass ring-gradient rounded-3xl p-7">
              <p className="eyebrow">{s.certifications}</p>
              {PROFILE.certifications.map((cert) => (
                <p key={cert.name} className="mt-4 flex items-center justify-between gap-4">
                  <span className="font-medium">{cert.name}</span>
                  <span className="font-mono text-xs text-primary">{cert.score}</span>
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- stack grid ---------------- */}
      <section className="relative overflow-hidden py-28">
        <div aria-hidden className="grid-lines opacity-70" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow">{s.whatIWorkWith}</p>
            <h2 className="mt-5 font-display text-4xl font-bold">{s.whatIWorkWith}</h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROFILE.stack.map((group, i) => (
              <Reveal key={group.area} delay={i * 90}>
                <TiltCard className="h-full">
                  <div className="glass ring-gradient h-full rounded-3xl p-7 [transform-style:preserve-3d]">
                    <h3 className="tilt-layer font-display text-lg font-semibold text-primary">
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

      {/* ---------------- selected work ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">{s.selectedWork}</p>
            <h2 className="mt-5 font-display text-4xl font-bold">{s.selectedWork}</h2>
            <p className="mt-3 text-lg text-foreground/55">{s.selectedWorkSub(PROJECTS.length)}</p>
          </div>
          <Link
            to="/$locale/projects"
            params={{ locale }}
            className="group glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-colors hover:text-primary"
          >
            {s.browseAllProjects}
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal as="article" key={project.slug} delay={i * 110}>
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
                    <span
                      aria-hidden
                      className="mt-6 inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10"
                    >
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- testimonials ---------------- */}
      <section className="relative overflow-hidden py-28">
        <img
          src="/img/grid-dark.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute inset-0 -z-20 size-full object-cover opacity-20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/85 to-background"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="eyebrow">{s.whatClientsSay}</p>
              <h2 className="mt-5 font-display text-4xl font-bold">{s.whatClientsSay}</h2>
            </div>
            <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5">
              <Star className="size-4 fill-primary text-primary" />
              <span className="font-mono text-sm tracking-wide">
                {s.reviewsSummary(REVIEW_SUMMARY.rating, REVIEW_SUMMARY.count)}
              </span>
            </span>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {TESTIMONIALS.filter((x) => x.quote).map((testimonial, i) => (
              <Reveal as="figure" key={testimonial.author} delay={i * 120} className="h-full">
                <div className="glass ring-gradient flex h-full flex-col rounded-3xl p-8">
                  <Quote className="size-7 shrink-0 text-primary/70" />
                  <blockquote className="mt-5 flex-1">
                    <p className="text-lg leading-relaxed">
                      {testimonial.translation ?? testimonial.quote}
                    </p>
                    {testimonial.translation && (
                      <p className="mt-4 text-sm italic text-foreground/55">{testimonial.quote}</p>
                    )}
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-4 border-t border-white/10 pt-6">
                    <Avatar name={testimonial.author} />
                    <span>
                      <span className="block font-medium">{testimonial.author}</span>
                      <span className="mt-0.5 block text-sm text-foreground/60">
                        {TESTIMONIAL_PROJECTS[locale][testimonial.author] ?? testimonial.project}
                      </span>
                    </span>
                  </figcaption>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
