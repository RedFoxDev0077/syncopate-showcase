/**
 * Portfolio owner details. Deliberately contains no contact information —
 * this site is attached to proposals, and contact happens through the platform.
 */

export const PROFILE = {
  name: "Dylan Lee",
  headline: "Web & Mobile · AI Automation Expert",
  role: "Full-Stack Developer",
  location: "Canada",
  rate: "USD 25 / hour",
  availability: "Available for new projects",
  languages: "English — native / bilingual",

  intro:
    "Full-stack developer building production-grade web, mobile, AI and automation solutions. I take projects end to end — database design, backend architecture and APIs through to a polished frontend, mobile app, integrations and production deployment — so you don't need to coordinate multiple developers.",

  bio: [
    "I've completed 80+ projects for clients across different industries, from AI-powered SaaS platforms and mobile applications to custom WordPress, WooCommerce and business automation systems.",
    "I'm also experienced in rescuing and improving existing projects — diagnosing complex issues, working with unfamiliar codebases, fixing problematic plugins and integrations, and turning unstable applications into reliable production systems.",
    "My goal is simple: understand the business requirement, take full ownership of the technical work, communicate clearly, and deliver clean, reliable solutions on time.",
  ],

  stats: [
    { value: "80+", label: "Projects delivered" },
    { value: "5.0", label: "Client rating" },
    { value: "5–10 yrs", label: "Core stack experience" },
    { value: "100%", label: "On-time delivery" },
  ],

  /** Headline capabilities, shown as the "what I ship" list. */
  delivers: [
    "AI-powered SaaS platforms with multi-tenant architecture, role-based dashboards, real-time functionality and credit-based billing.",
    "Custom web and mobile applications built from scratch with scalable backend APIs and modern, responsive interfaces.",
    "WordPress and WooCommerce solutions including custom themes, plugins, payment gateways, shipping APIs and third-party integrations.",
    "AI automation systems connecting APIs, business tools, CRMs, messaging platforms and AI models to reduce manual work.",
  ],

  stack: [
    {
      area: "Web",
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "Laravel",
        "PHP",
        "Tailwind CSS",
        "WordPress",
        "WooCommerce",
      ],
    },
    { area: "Mobile", items: ["React Native", "Expo", "Flutter"] },
    { area: "Backend", items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Supabase"] },
    {
      area: "AI & Automation",
      items: [
        "OpenAI",
        "Claude",
        "AI Agents",
        "LLM Integrations",
        "API Automation",
        "Business Workflows",
      ],
    },
  ],

  /** Primary skills with stated experience, as listed on the freelancer profile. */
  coreSkills: [
    { name: "Node.js", experience: "5–10 years" },
    { name: "React.js", experience: "5–10 years" },
    { name: "TypeScript", experience: "5–10 years" },
  ],

  workHistory: [
    {
      role: "Senior AI & Full Stack Developer",
      company: "MindSea",
      period: "January 2016 — January 2021",
      summary:
        "Designed and developed scalable web and mobile applications for clients across multiple industries.",
    },
  ],

  certifications: [{ year: "2026", name: "CSS Básico", score: "86%" }],
} as const;

export type Testimonial = {
  author: string;
  /** Stars awarded on the platform. Every review to date is a five. */
  rating: number;
  project: string;
  when: string;
  /** Original review text, in the language it was written. */
  quote: string;
  /** English rendering, shown when the original is not in English. */
  translation?: string;
  tags: string[];
};

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "gustavo auler",
    rating: 5,
    project: "Game engine for simultaneous PvP and web integrations",
    when: "Last month",
    quote:
      "Trabalhar com Dylan foi excelente. Ele demonstrou grande conhecimento técnico, comunicação clara e entregou resultados de alta qualidade dentro do prazo. Compreendeu rapidamente requisitos complexos, implementou soluções confiáveis e foi proativo durante todo o projeto. Estou muito satisfeito com o resultado e o contrataria novamente com prazer para projetos futuros. Altamente recomendado.",
    translation:
      "Working with Dylan was excellent. He showed great technical knowledge, clear communication, and delivered high-quality results on time. He quickly understood complex requirements, implemented reliable solutions and was proactive throughout the project. I'm very satisfied with the result and would gladly hire him again for future projects. Highly recommended.",
    tags: ["Game Development", "API", "Node.js", "Socket.IO", "Python"],
  },
  {
    author: "Denis Jesus",
    rating: 5,
    project: "ManyChat, Make.com and AI integration for WhatsApp support",
    when: "Last month",
    quote:
      "É um ótimo profissional, me deu instruções da melhor forma de fazer o projeto, auxiliou do começo ao fim, vamos continuar trabalhando juntos no projeto. Recomendo a todos.",
    translation:
      "He's a great professional. He advised me on the best way to approach the project and supported me from start to finish. We'll keep working together — I recommend him to everyone.",
    tags: ["API", "Chatbot", "Python", "Node.js"],
  },
  {
    author: "Matias Price",
    rating: 5,
    project: "Editing and updating an existing website: structure, content and design",
    when: "3 weeks ago",
    quote:
      "Dylan ha sido muy atento y ha cumplido muy satisfactoriamente su propuesta. Estamos conformes con el trabajo realizado y el trato recibido.",
    translation:
      "Dylan has been very attentive and delivered on his proposal to our full satisfaction. We're happy with both the work and the way he handled it.",
    tags: ["HTML", "Responsive Web Design"],
  },
  {
    author: "Carlos Hermida Alvarez",
    rating: 5,
    project: "Premium lead-oriented corporate web development for Hermgrau",
    when: "4 weeks ago",
    quote: "",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "WordPress"],
  },
];

export const REVIEW_SUMMARY = { rating: "5.0", count: TESTIMONIALS.length } as const;
