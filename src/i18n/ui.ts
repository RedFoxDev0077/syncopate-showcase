import type { Locale } from "./config";

/**
 * UI chrome strings. Keys are English so a missing translation is obvious in
 * review; every locale must implement the full set (enforced by the type).
 */
export type UiStrings = {
  navAbout: string;
  navProjects: string;
  homeLink: string;
  languageLabel: string;

  /* Short section labels. Deliberately different from the heading they sit
     above — repeating the same words twice reads as a mistake. */
  secProfile: string;
  secCapabilities: string;
  secStack: string;
  secWork: string;
  secReviews: string;
  scrollHint: string;
  viewProject: string;
  featured: string;
  verifiedReview: string;
  ratingOutOf: (n: string) => string;

  // Home
  viewAllProjects: (count: number) => string;
  aboutMe: string;
  whatIShip: string;
  whatIWorkWith: string;
  coreSkills: string;
  experience: string;
  certifications: string;
  selectedWork: string;
  selectedWorkSub: (count: number) => string;
  browseAllProjects: string;
  whatClientsSay: string;
  reviewsSummary: (rating: string, count: number) => string;

  // Projects index
  projectsTitle: string;
  projectsIntro: string;
  filterServices: string;
  filterIndustry: string;
  filterTechnologies: string;
  noFilterSelected: (label: string) => string;
  result: string;
  pageOf: (page: number, total: number) => string;
  clearAll: string;
  noMatches: string;

  // Pagination
  pagination: string;
  previous: string;
  next: string;
  goToPage: (page: number) => string;
  goToPrevious: string;
  goToNext: string;

  // Project detail
  allProjects: string;
  theChallenge: string;
  ourSolution: string;
  results: string;
  moreProjects: string;
  client: string;
  duration: string;
  services: string;
  industry: string;
  technologies: string;
  projectNotFound: string;
  projectNotFoundBody: string;
  backToAllProjects: string;

  // Errors
  notFoundTitle: string;
  notFoundBody: string;
  goHome: string;
  errorTitle: string;
  errorBody: string;
  tryAgain: string;
};

const en: UiStrings = {
  navAbout: "About",
  navProjects: "Projects",
  homeLink: "home",
  languageLabel: "Language",

  secProfile: "Profile",
  secCapabilities: "Capabilities",
  secStack: "Toolkit",
  secWork: "Case files",
  secReviews: "Signals",
  scrollHint: "Scroll",
  viewProject: "View project",
  featured: "Featured",
  verifiedReview: "Verified client review",
  ratingOutOf: (n) => `${n} out of 5`,

  viewAllProjects: (count) => `View all ${count} projects`,
  aboutMe: "About me",
  whatIShip: "What I ship",
  whatIWorkWith: "What I work with",
  coreSkills: "Core skills",
  experience: "Experience",
  certifications: "Certifications",
  selectedWork: "Selected work",
  selectedWorkSub: (count) => `A few recent projects — ${count} in total.`,
  browseAllProjects: "Browse all projects",
  whatClientsSay: "What clients say",
  reviewsSummary: (rating, count) => `${rating} · ${count} reviews`,

  projectsTitle: "Projects",
  projectsIntro:
    "Selected work across web, mobile, AI and automation — the challenge in each project, how it was solved, and what it delivered. Filter by service, industry or technology.",
  filterServices: "Services",
  filterIndustry: "Industry",
  filterTechnologies: "Technologies",
  noFilterSelected: (label) => `${label}: no filter selected`,
  result: "Result",
  pageOf: (page, total) => `page ${page} of ${total}`,
  clearAll: "Clear All",
  noMatches: "No projects match the selected filters.",

  pagination: "Pagination",
  previous: "Previous",
  next: "Next",
  goToPage: (page) => `Go to page ${page}`,
  goToPrevious: "Go to previous page",
  goToNext: "Go to next page",

  allProjects: "All projects",
  theChallenge: "The challenge",
  ourSolution: "The solution",
  results: "Results",
  moreProjects: "More projects",
  client: "Client",
  duration: "Duration",
  services: "Services",
  industry: "Industry",
  technologies: "Technologies",
  projectNotFound: "Project not found",
  projectNotFoundBody: "This project doesn't exist or was moved.",
  backToAllProjects: "Back to all projects",

  notFoundTitle: "Page not found",
  notFoundBody: "The page you're looking for doesn't exist or has been moved.",
  goHome: "Go home",
  errorTitle: "This page didn't load",
  errorBody: "Something went wrong on our end. You can try refreshing or head back home.",
  tryAgain: "Try again",
};

const es: UiStrings = {
  navAbout: "Sobre mí",
  navProjects: "Proyectos",
  homeLink: "inicio",
  languageLabel: "Idioma",

  secProfile: "Perfil",
  secCapabilities: "Capacidades",
  secStack: "Herramientas",
  secWork: "Casos",
  secReviews: "Señales",
  scrollHint: "Desliza",
  viewProject: "Ver proyecto",
  featured: "Destacado",
  verifiedReview: "Reseña verificada de cliente",
  ratingOutOf: (n) => `${n} de 5`,

  viewAllProjects: (count) => `Ver los ${count} proyectos`,
  aboutMe: "Sobre mí",
  whatIShip: "Lo que entrego",
  whatIWorkWith: "Con qué trabajo",
  coreSkills: "Habilidades principales",
  experience: "Experiencia",
  certifications: "Certificaciones",
  selectedWork: "Trabajos seleccionados",
  selectedWorkSub: (count) => `Algunos proyectos recientes — ${count} en total.`,
  browseAllProjects: "Ver todos los proyectos",
  whatClientsSay: "Lo que dicen los clientes",
  reviewsSummary: (rating, count) => `${rating} · ${count} reseñas`,

  projectsTitle: "Proyectos",
  projectsIntro:
    "Trabajos seleccionados en web, móvil, IA y automatización: el desafío de cada proyecto, cómo se resolvió y qué resultados dio. Filtra por servicio, industria o tecnología.",
  filterServices: "Servicios",
  filterIndustry: "Industria",
  filterTechnologies: "Tecnologías",
  noFilterSelected: (label) => `${label}: sin filtro seleccionado`,
  result: "Resultados",
  pageOf: (page, total) => `página ${page} de ${total}`,
  clearAll: "Limpiar todo",
  noMatches: "Ningún proyecto coincide con los filtros seleccionados.",

  pagination: "Paginación",
  previous: "Anterior",
  next: "Siguiente",
  goToPage: (page) => `Ir a la página ${page}`,
  goToPrevious: "Ir a la página anterior",
  goToNext: "Ir a la página siguiente",

  allProjects: "Todos los proyectos",
  theChallenge: "El desafío",
  ourSolution: "La solución",
  results: "Resultados",
  moreProjects: "Más proyectos",
  client: "Cliente",
  duration: "Duración",
  services: "Servicios",
  industry: "Industria",
  technologies: "Tecnologías",
  projectNotFound: "Proyecto no encontrado",
  projectNotFoundBody: "Este proyecto no existe o fue movido.",
  backToAllProjects: "Volver a todos los proyectos",

  notFoundTitle: "Página no encontrada",
  notFoundBody: "La página que buscas no existe o fue movida.",
  goHome: "Ir al inicio",
  errorTitle: "Esta página no se cargó",
  errorBody: "Algo salió mal de nuestro lado. Puedes recargar o volver al inicio.",
  tryAgain: "Intentar de nuevo",
};

const pt: UiStrings = {
  navAbout: "Sobre mim",
  navProjects: "Projetos",
  homeLink: "início",
  languageLabel: "Idioma",

  secProfile: "Perfil",
  secCapabilities: "Capacidades",
  secStack: "Ferramentas",
  secWork: "Casos",
  secReviews: "Sinais",
  scrollHint: "Role",
  viewProject: "Ver projeto",
  featured: "Destaque",
  verifiedReview: "Avaliação verificada de cliente",
  ratingOutOf: (n) => `${n} de 5`,

  viewAllProjects: (count) => `Ver todos os ${count} projetos`,
  aboutMe: "Sobre mim",
  whatIShip: "O que eu entrego",
  whatIWorkWith: "Com o que eu trabalho",
  coreSkills: "Principais habilidades",
  experience: "Experiência",
  certifications: "Certificações",
  selectedWork: "Trabalhos selecionados",
  selectedWorkSub: (count) => `Alguns projetos recentes — ${count} no total.`,
  browseAllProjects: "Ver todos os projetos",
  whatClientsSay: "O que os clientes dizem",
  reviewsSummary: (rating, count) => `${rating} · ${count} avaliações`,

  projectsTitle: "Projetos",
  projectsIntro:
    "Trabalhos selecionados em web, mobile, IA e automação: o desafio de cada projeto, como foi resolvido e o que entregou. Filtre por serviço, setor ou tecnologia.",
  filterServices: "Serviços",
  filterIndustry: "Setor",
  filterTechnologies: "Tecnologias",
  noFilterSelected: (label) => `${label}: nenhum filtro selecionado`,
  result: "Resultados",
  pageOf: (page, total) => `página ${page} de ${total}`,
  clearAll: "Limpar tudo",
  noMatches: "Nenhum projeto corresponde aos filtros selecionados.",

  pagination: "Paginação",
  previous: "Anterior",
  next: "Próximo",
  goToPage: (page) => `Ir para a página ${page}`,
  goToPrevious: "Ir para a página anterior",
  goToNext: "Ir para a próxima página",

  allProjects: "Todos os projetos",
  theChallenge: "O desafio",
  ourSolution: "A solução",
  results: "Resultados",
  moreProjects: "Mais projetos",
  client: "Cliente",
  duration: "Duração",
  services: "Serviços",
  industry: "Setor",
  technologies: "Tecnologias",
  projectNotFound: "Projeto não encontrado",
  projectNotFoundBody: "Este projeto não existe ou foi movido.",
  backToAllProjects: "Voltar para todos os projetos",

  notFoundTitle: "Página não encontrada",
  notFoundBody: "A página que você procura não existe ou foi movida.",
  goHome: "Ir para o início",
  errorTitle: "Esta página não carregou",
  errorBody: "Algo deu errado do nosso lado. Você pode recarregar ou voltar ao início.",
  tryAgain: "Tentar novamente",
};

export const UI: Record<Locale, UiStrings> = { en, es, pt };

export function t(locale: Locale) {
  return UI[locale];
}
