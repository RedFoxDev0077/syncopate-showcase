export const SERVICES = [
  "Software development",
  "Web development",
  "Mobile app development",
  "UI/UX design",
  "AI/ML",
  "Team extension",
] as const;

export const INDUSTRIES = [
  "Manufacturing",
  "Retail & Ecommerce",
  "Technology",
  "Education",
  "Energy",
  "Nonprofit",
] as const;

export const TECHNOLOGIES = [
  "Kentico",
  "Umbraco",
  ".NET",
  "Vue.js",
  ".NET Core",
  "Angular",
  "AWS",
  "Azure",
  "Node.js",
  "React",
  "React Native",
  "Typescript",
  "Shopify",
] as const;

export type CaseStudy = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  services: string[];
  industries: string[];
  technologies: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "b2b-manufacturing-portal-development",
    title: "B2B Manufacturing Portal for a Configure-to-Order Industrial Manufacturer",
    excerpt:
      "A configure-to-order portal that replaced manual quoting with real-time inventory, pricing and order tracking.",
    image:
      "https://bitsorchestra.com/getmedia/2e22d531-574c-4f17-bd78-aa26e95155dc/Manufacturing-portal-teaser.webp?ext=.webp",
    services: ["Software development", "Web development"],
    industries: ["Manufacturing"],
    technologies: ["Kentico", ".NET"],
  },
  {
    slug: "kentico-13-to-xperience-migration",
    title: "Migrating a SKU-Heavy B2B Dealer Portal from Kentico 13 to Xperience by Kentico",
    excerpt:
      "A zero-downtime migration of a catalog with tens of thousands of SKUs onto a modern CMS platform.",
    image:
      "https://bitsorchestra.com/getmedia/91b4a26f-0e52-4001-b3f2-115887322b81/Kentico-13-to-Xperience-(1).webp?ext=.webp",
    services: ["Software development", "Web development"],
    industries: ["Manufacturing"],
    technologies: ["Kentico", ".NET"],
  },
  {
    slug: "custom-employee-recognition-platform",
    title: "Building a custom employee recognition platform in 8 weeks",
    excerpt:
      "From discovery to launch in eight weeks: peer-to-peer recognition, rewards and analytics for distributed teams.",
    image:
      "https://bitsorchestra.com/getmedia/be4522a5-4542-4a2e-b85b-8ec1376a360b/Kudos-Platform.webp?ext=.webp",
    services: ["Software development", "Web development"],
    industries: ["Technology"],
    technologies: ["Node.js", "React"],
  },
  {
    slug: "kentico-cms-for-koni",
    title: "Scalable B2B Kentico solution for Koni",
    excerpt:
      "A redesigned B2B experience with multi-market content management and a faster dealer journey.",
    image:
      "https://bitsorchestra.com/getmedia/3f416efc-ae57-49aa-9c7e-84f16cf24cc2/koni-case-cover.webp?ext=.webp",
    services: ["Web development", "UI/UX design"],
    industries: ["Manufacturing", "Retail & Ecommerce"],
    technologies: ["Kentico", "Vue.js"],
  },
  {
    slug: "pj-our-way",
    title: "Scalable platform that supports Jewish literacy",
    excerpt:
      "An education platform serving thousands of young readers with community features and moderation tools.",
    image:
      "https://bitsorchestra.com/getmedia/db9e39cc-748d-4cd5-8a12-b9afb0bd5bfc/pj-ourway.webp?ext=.webp",
    services: ["Web development", "UI/UX design"],
    industries: ["Education"],
    technologies: ["Kentico", ".NET"],
  },
  {
    slug: "dynamic-document",
    title: "Document management system for manufacturing client",
    excerpt:
      "Centralized document workflows with versioning, approvals and role-based access for plant teams.",
    image:
      "https://bitsorchestra.com/getmedia/3dd16c27-6da6-48f0-a8a0-eb299469389b/document-management-system.webp?ext=.webp",
    services: ["Software development", "UI/UX design"],
    industries: ["Manufacturing"],
    technologies: ["Kentico", ".NET"],
  },
];

export const CLIENT_LOGOS = [
  {
    name: "Coretec Floors",
    src: "https://bitsorchestra.com/getmedia/d574e907-bb53-41cc-afb4-35a5b659b2e9/coretec_floors.svg?ext=.svg",
  },
  {
    name: "Shaw Industries",
    src: "https://bitsorchestra.com/getmedia/3df8c6b7-5584-4caf-a6fd-ee87522e1c81/Shaw1.png?width=154&height=34&ext=.png",
  },
  {
    name: "Harold Grinspoon Foundation",
    src: "https://bitsorchestra.com/getmedia/ccfdf50c-689a-41ba-8b69-eea1b4f6822f/HGF.png?width=150&height=50&ext=.png",
  },
  {
    name: "Total Tech School",
    src: "https://bitsorchestra.com/getmedia/f4b7ea01-c1c7-458d-b358-df3f429f15c5/TotalTechNewLogo.webp?ext=.webp",
  },
  {
    name: "Hiller",
    src: "https://bitsorchestra.com/getmedia/8b220a85-3143-4bbf-8372-7e8609d64d19/hiller.png?width=160&height=48&ext=.png",
  },
  {
    name: "Digitron Semiconductors",
    src: "https://bitsorchestra.com/getmedia/e94fb822-a155-44ee-b126-3907d08fa27a/digitron.png?width=154&height=58&ext=.png",
  },
];
