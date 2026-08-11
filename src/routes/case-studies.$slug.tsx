import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CASE_STUDIES, getCaseStudy, type CaseStudy } from "@/data/case-studies";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { study } = loaderData;
    const title = `${study.title} — Bits Orchestra`;
    return {
      meta: [
        { title },
        { name: "description", content: study.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: study.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: study.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: study.image },
      ],
    };
  },
  notFoundComponent: CaseStudyNotFound,
  component: CaseStudyDetail,
});

function CaseStudyNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-2xl font-semibold">Case study not found</h1>
      <p className="mt-2 text-muted-foreground">This case study doesn't exist or was moved.</p>
      <Link to="/case-studies" className="mt-6 inline-block text-primary hover:underline">
        Back to all case studies
      </Link>
    </main>
  );
}

function CaseStudyDetail() {
  const { study } = Route.useLoaderData() as { study: CaseStudy };
  const others = CASE_STUDIES.filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <main>
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-ink-foreground/70 transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" /> All case studies
          </Link>
          <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
            {study.title}
          </h1>
          <p className="mt-4 max-w-2xl text-ink-foreground/75">{study.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[...study.services, ...study.industries, ...study.technologies].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground"
              >
                {tag}
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
            src={study.image}
            alt={study.title}
            className="aspect-[16/8] w-full rounded-xl object-cover"
          />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            <h2 className="text-2xl font-semibold">The challenge</h2>
            <p className="mt-3 text-muted-foreground">{study.challenge}</p>

            <h2 className="mt-10 text-2xl font-semibold">Our solution</h2>
            <ul className="mt-4 space-y-3">
              {study.solution.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-semibold">Results</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {study.results.map((r) => (
                <div key={r.label} className="rounded-xl border border-border bg-muted p-5">
                  <p className="text-2xl font-bold text-primary">{r.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{r.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-muted p-6 text-sm">
            <dl className="space-y-4">
              <div>
                <dt className="text-muted-foreground">Client</dt>
                <dd className="mt-1 font-medium">{study.client}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Duration</dt>
                <dd className="mt-1 font-medium">{study.duration}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Services</dt>
                <dd className="mt-1 font-medium">{study.services.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Technologies</dt>
                <dd className="mt-1 font-medium">{study.technologies.join(", ")}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-xl font-semibold">More case studies</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                to="/case-studies/$slug"
                params={{ slug: other.slug }}
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
