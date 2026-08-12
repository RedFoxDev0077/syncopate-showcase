import type { Project } from "@/data/projects";
import type { Locale } from "./config";
import { PROJECTS_ES } from "./projects.es";
import { PROJECTS_PT } from "./projects.pt";

/**
 * Per-locale overrides for a project. `resultLabels` is parallel to the
 * project's `results` array — the metric values themselves are numbers and
 * stay as they are.
 */
export type ProjectTranslation = {
  title: string;
  excerpt: string;
  challenge: string;
  solution: string[];
  outcomes: string[];
  resultLabels: string[];
  client?: string;
  duration?: string;
};

const DICTIONARIES: Record<Locale, Record<string, ProjectTranslation>> = {
  en: {},
  es: PROJECTS_ES,
  pt: PROJECTS_PT,
};

/**
 * Returns the project with any available translation applied. Anything without
 * a translation falls back to the canonical English content field by field, so
 * a partially translated entry still renders coherently.
 */
export function localizeProject(project: Project, locale: Locale): Project {
  const translation = DICTIONARIES[locale][project.slug];
  if (!translation) return project;

  return {
    ...project,
    title: translation.title,
    excerpt: translation.excerpt,
    challenge: translation.challenge,
    solution: translation.solution.length ? translation.solution : project.solution,
    outcomes: translation.outcomes.length ? translation.outcomes : project.outcomes,
    results: project.results.map((result, i) => ({
      value: result.value,
      label: translation.resultLabels[i] ?? result.label,
    })),
    ...(translation.client ? { client: translation.client } : {}),
    ...(translation.duration ? { duration: translation.duration } : {}),
  };
}

export function localizeProjects(projects: Project[], locale: Locale): Project[] {
  return projects.map((project) => localizeProject(project, locale));
}
