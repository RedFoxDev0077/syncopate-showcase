import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import heroBg from "@/assets/hero-network.jpg";
import { Button } from "@/components/ui/button";
import { FilterSelect } from "@/components/case-studies/FilterSelect";
import { ContactSection } from "@/components/case-studies/ContactSection";
import {
  CASE_STUDIES,
  CLIENT_LOGOS,
  INDUSTRIES,
  SERVICES,
  TECHNOLOGIES,
} from "@/data/case-studies";

const title = "Our Case Studies — Bits Orchestra";
const description =
  "Real-life examples of successful software, web and UI/UX projects: the challenges faced, the solutions implemented and the results achieved.";

export const Route = createFileRoute("/")({
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
  component: CaseStudiesPage,
});

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function CaseStudiesPage() {
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
    <main>
      <header className="bg-ink text-ink-foreground">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight">
            bits<span className="text-primary">orchestra</span>
          </span>
          <div className="hidden items-center gap-7 text-sm md:flex">
            <a href="#cases" className="transition-colors hover:text-primary">Case studies</a>
            <a href="#contactus" className="transition-colors hover:text-primary">Contact</a>
          </div>
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#contactus">Get in touch</a>
          </Button>
        </nav>
      </header>

      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={900}
          className="absolute inset-0 -z-10 size-full object-cover opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/60 to-ink/90" />
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Our case studies</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-ink-foreground/80">
            Showcased real-life examples of our successful projects, highlighting the challenges
            faced, the solutions implemented, and the impactful results achieved
          </p>
          <Button asChild size="lg" className="mt-9 rounded-full px-9 shadow-[var(--shadow-glow)]">
            <a href="#contactus">Get in touch</a>
          </Button>
        </div>
      </section>

      <section className="border-b border-border bg-muted py-10">
        <p className="text-center text-sm text-muted-foreground">
          Trusted by startups, growing businesses, and industry leaders
        </p>
        <div className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6">
          {CLIENT_LOGOS.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="h-10 w-auto max-w-[150px] object-contain opacity-80 transition-opacity hover:opacity-100"
            />
          ))}
        </div>
      </section>

      <section id="cases" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-3">
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
      </section>

      <ContactSection />

      <footer className="bg-ink py-8 text-center text-sm text-ink-foreground/50">
        © {new Date().getFullYear()} Bits Orchestra — case studies concept page
      </footer>
    </main>
  );
}
