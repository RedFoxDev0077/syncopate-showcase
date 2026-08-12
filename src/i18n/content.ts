import type { Locale } from "./config";

/**
 * Taxonomy display labels. Filter *values* stay canonical English so URLs are
 * stable across locales — only what the user reads is translated. Technology
 * names are proper nouns and intentionally left untranslated.
 */
const TAXONOMY: Record<Locale, Record<string, string>> = {
  en: {},
  es: {
    "Software development": "Desarrollo de software",
    "Web development": "Desarrollo web",
    "Mobile app development": "Desarrollo de apps móviles",
    "UI/UX design": "Diseño UI/UX",
    "AI/ML": "IA/ML",
    Manufacturing: "Manufactura",
    "Retail & Ecommerce": "Retail y ecommerce",
    Technology: "Tecnología",
    Education: "Educación",
    Energy: "Energía",
  },
  pt: {
    "Software development": "Desenvolvimento de software",
    "Web development": "Desenvolvimento web",
    "Mobile app development": "Desenvolvimento de apps móveis",
    "UI/UX design": "Design UI/UX",
    "AI/ML": "IA/ML",
    Manufacturing: "Manufatura",
    "Retail & Ecommerce": "Varejo e e-commerce",
    Technology: "Tecnologia",
    Education: "Educação",
    Energy: "Energia",
  },
};

/** Falls back to the canonical English label when no translation exists. */
export function tag(locale: Locale, value: string) {
  return TAXONOMY[locale][value] ?? value;
}

export type ProfileStrings = {
  headline: string;
  role: string;
  location: string;
  availability: string;
  languages: string;
  rateSuffix: string;
  intro: string;
  bio: string[];
  delivers: string[];
  statLabels: string[];
  skillExperience: string;
  workSummary: string;
  stackAreas: Record<string, string>;
};

export const PROFILE_I18N: Record<Locale, ProfileStrings> = {
  en: {
    headline: "Web & Mobile · AI Automation Expert",
    role: "Full-Stack Developer",
    location: "Canada",
    availability: "Available for new projects",
    languages: "English — native / bilingual",
    rateSuffix: "USD 25 / hour",
    intro:
      "Full-stack developer building production-grade web, mobile, AI and automation solutions. I take projects end to end — database design, backend architecture and APIs through to a polished frontend, mobile app, integrations and production deployment — so you don't need to coordinate multiple developers.",
    bio: [
      "I've completed 80+ projects for clients across different industries, from AI-powered SaaS platforms and mobile applications to custom WordPress, WooCommerce and business automation systems.",
      "I'm also experienced in rescuing and improving existing projects — diagnosing complex issues, working with unfamiliar codebases, fixing problematic plugins and integrations, and turning unstable applications into reliable production systems.",
      "My goal is simple: understand the business requirement, take full ownership of the technical work, communicate clearly, and deliver clean, reliable solutions on time.",
    ],
    delivers: [
      "AI-powered SaaS platforms with multi-tenant architecture, role-based dashboards, real-time functionality and credit-based billing.",
      "Custom web and mobile applications built from scratch with scalable backend APIs and modern, responsive interfaces.",
      "WordPress and WooCommerce solutions including custom themes, plugins, payment gateways, shipping APIs and third-party integrations.",
      "AI automation systems connecting APIs, business tools, CRMs, messaging platforms and AI models to reduce manual work.",
    ],
    statLabels: [
      "Projects delivered",
      "Client rating",
      "Core stack experience",
      "On-time delivery",
    ],
    skillExperience: "5–10 years",
    workSummary:
      "Designed and developed scalable web and mobile applications for clients across multiple industries.",
    stackAreas: {
      Web: "Web",
      Mobile: "Mobile",
      Backend: "Backend",
      "AI & Automation": "AI & Automation",
    },
  },

  es: {
    headline: "Web y móvil · Experto en automatización con IA",
    role: "Desarrollador Full-Stack",
    location: "Canadá",
    availability: "Disponible para nuevos proyectos",
    languages: "Inglés — nativo / bilingüe",
    rateSuffix: "USD 25 / hora",
    intro:
      "Desarrollador full-stack que crea soluciones web, móviles, de IA y automatización listas para producción. Llevo los proyectos de principio a fin: diseño de base de datos, arquitectura backend y APIs, hasta un frontend pulido, app móvil, integraciones y despliegue en producción, sin que tengas que coordinar a varios desarrolladores.",
    bio: [
      "He completado más de 80 proyectos para clientes de distintas industrias, desde plataformas SaaS con IA y aplicaciones móviles hasta desarrollos a medida en WordPress, WooCommerce y sistemas de automatización de negocio.",
      "También tengo experiencia rescatando y mejorando proyectos existentes: diagnosticar problemas complejos, trabajar con código ajeno, arreglar plugins e integraciones problemáticas y convertir aplicaciones inestables en sistemas de producción confiables.",
      "Mi objetivo es simple: entender el requerimiento de negocio, hacerme cargo por completo del trabajo técnico, comunicarme con claridad y entregar soluciones limpias y confiables a tiempo.",
    ],
    delivers: [
      "Plataformas SaaS con IA, arquitectura multi-tenant, paneles por rol, funcionalidad en tiempo real y facturación por créditos.",
      "Aplicaciones web y móviles a medida, construidas desde cero con APIs backend escalables e interfaces modernas y responsivas.",
      "Soluciones en WordPress y WooCommerce: temas y plugins a medida, pasarelas de pago, APIs de envío e integraciones con terceros.",
      "Sistemas de automatización con IA que conectan APIs, herramientas de negocio, CRMs, plataformas de mensajería y modelos de IA para reducir el trabajo manual.",
    ],
    statLabels: [
      "Proyectos entregados",
      "Valoración de clientes",
      "Experiencia en el stack",
      "Entrega a tiempo",
    ],
    skillExperience: "5–10 años",
    workSummary:
      "Diseñé y desarrollé aplicaciones web y móviles escalables para clientes de múltiples industrias.",
    stackAreas: {
      Web: "Web",
      Mobile: "Móvil",
      Backend: "Backend",
      "AI & Automation": "IA y automatización",
    },
  },

  pt: {
    headline: "Web e mobile · Especialista em automação com IA",
    role: "Desenvolvedor Full-Stack",
    location: "Canadá",
    availability: "Disponível para novos projetos",
    languages: "Inglês — nativo / bilíngue",
    rateSuffix: "USD 25 / hora",
    intro:
      "Desenvolvedor full-stack que cria soluções web, mobile, de IA e automação prontas para produção. Conduzo os projetos de ponta a ponta: modelagem de banco de dados, arquitetura de backend e APIs, até um frontend polido, aplicativo mobile, integrações e deploy em produção, sem que você precise coordenar vários desenvolvedores.",
    bio: [
      "Já concluí mais de 80 projetos para clientes de diferentes setores, de plataformas SaaS com IA e aplicativos mobile a desenvolvimentos sob medida em WordPress, WooCommerce e sistemas de automação de negócios.",
      "Também tenho experiência em resgatar e melhorar projetos existentes: diagnosticar problemas complexos, trabalhar com bases de código desconhecidas, corrigir plugins e integrações problemáticas e transformar aplicações instáveis em sistemas de produção confiáveis.",
      "Meu objetivo é simples: entender o requisito de negócio, assumir total responsabilidade pelo trabalho técnico, comunicar com clareza e entregar soluções limpas e confiáveis no prazo.",
    ],
    delivers: [
      "Plataformas SaaS com IA, arquitetura multi-tenant, painéis por perfil, funcionalidade em tempo real e cobrança por créditos.",
      "Aplicações web e mobile sob medida, construídas do zero com APIs de backend escaláveis e interfaces modernas e responsivas.",
      "Soluções em WordPress e WooCommerce: temas e plugins sob medida, gateways de pagamento, APIs de frete e integrações com terceiros.",
      "Sistemas de automação com IA que conectam APIs, ferramentas de negócio, CRMs, plataformas de mensagens e modelos de IA para reduzir trabalho manual.",
    ],
    statLabels: [
      "Projetos entregues",
      "Avaliação dos clientes",
      "Experiência no stack",
      "Entrega no prazo",
    ],
    skillExperience: "5–10 anos",
    workSummary:
      "Projetei e desenvolvi aplicações web e mobile escaláveis para clientes de múltiplos setores.",
    stackAreas: {
      Web: "Web",
      Mobile: "Mobile",
      Backend: "Backend",
      "AI & Automation": "IA e automação",
    },
  },
};

/** Testimonial project titles, translated for display alongside each quote. */
export const TESTIMONIAL_PROJECTS: Record<Locale, Record<string, string>> = {
  en: {},
  es: {
    "gustavo auler": "Motor de juego PvP simultáneo e integraciones web",
    "Denis Jesus": "Integración de ManyChat, Make.com e IA para atención por WhatsApp",
    "Matias Price": "Edición y actualización de web existente: estructura, contenido y diseño",
    "Carlos Hermida Alvarez": "Desarrollo web corporativo premium orientado a leads para Hermgrau",
  },
  pt: {
    "gustavo auler": "Motor de jogo PvP simultâneo e integrações web",
    "Denis Jesus": "Integração de ManyChat, Make.com e IA para atendimento no WhatsApp",
    "Matias Price": "Edição e atualização de site existente: estrutura, conteúdo e design",
    "Carlos Hermida Alvarez":
      "Desenvolvimento web corporativo premium orientado a leads para Hermgrau",
  },
};
