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
  client: string;
  duration: string;
  challenge: string;
  solution: string[];
  results: { value: string; label: string }[];
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
    client: "Industrial manufacturer, USA",
    duration: "9 months",
    challenge:
      "Dealers ordered configure-to-order equipment by email and spreadsheets. Quotes took days, pricing rules lived in people's heads, and the sales team had no visibility into order status.",
    solution: [
      "Mapped the full product configuration rule set and modelled it as a reusable pricing engine.",
      "Built a self-service dealer portal with live inventory, tiered pricing and instant quoting.",
      "Integrated the portal with the ERP so orders, shipments and invoices sync automatically.",
      "Added role-based dashboards for dealers, sales reps and internal operations.",
    ],
    results: [
      { value: "-85%", label: "Quote turnaround time" },
      { value: "3x", label: "Orders processed per rep" },
      { value: "100%", label: "Order status visibility" },
    ],
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
    client: "B2B distributor",
    duration: "6 months",
    challenge:
      "An aging Kentico 13 site carried tens of thousands of SKUs, custom modules and years of content debt. The business needed a modern platform without losing SEO or taking the store offline.",
    solution: [
      "Audited every custom module and retired the ones no longer used by the business.",
      "Wrote repeatable migration scripts for content types, media and product data.",
      "Rebuilt the front end on Xperience by Kentico with a component-driven page builder.",
      "Ran a redirect map and staged cut-over to protect organic traffic.",
    ],
    results: [
      { value: "0 min", label: "Downtime at launch" },
      { value: "-40%", label: "Page load time" },
      { value: "98%", label: "SEO rankings retained" },
    ],
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
    client: "HR technology startup",
    duration: "8 weeks",
    challenge:
      "The founders needed a working product for a launch event two months out, with recognition feeds, a reward catalog and admin analytics.",
    solution: [
      "Scoped a lean MVP and cut anything that did not serve the launch demo.",
      "Shipped weekly increments with the founders reviewing every Friday.",
      "Built peer-to-peer kudos, points, a reward catalog and Slack notifications.",
      "Added an admin dashboard with engagement and budget analytics.",
    ],
    results: [
      { value: "8 weeks", label: "Discovery to launch" },
      { value: "70%", label: "Weekly active employees" },
      { value: "4.8/5", label: "User satisfaction" },
    ],
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
    client: "Koni",
    duration: "12 months",
    challenge:
      "Multiple regional sites were maintained separately, causing duplicated content, inconsistent branding and slow campaign launches.",
    solution: [
      "Consolidated regional sites into one multi-market Kentico instance.",
      "Designed a shared component library so marketers assemble pages without developers.",
      "Rebuilt the product finder as a Vue.js application with instant filtering.",
      "Set up localisation workflows with per-market approvals.",
    ],
    results: [
      { value: "-60%", label: "Time to launch a campaign" },
      { value: "1", label: "Platform for all markets" },
      { value: "+25%", label: "Dealer conversions" },
    ],
  },
  {
    slug: "pj-our-way",
    title: "Scalable platform that supports Jewish literacy",
    excerpt:
      "An education platform serving thousands of young readers with community features and moderation tools.",
    image:
      "https://bitsorchestra.com/getmedia/db9e39cc-748d-4cd5-8a12-b9afb0bd5bfc/pj-ourway.webp?ext=.webp",
    services: ["Web development", "UI/UX design"],
    industries: ["Education", "Nonprofit"],
    technologies: ["Kentico", ".NET"],
    client: "Harold Grinspoon Foundation",
    duration: "Ongoing partnership",
    challenge:
      "A growing community of young readers needed a safe, engaging platform with book selection, reviews and youth-appropriate moderation.",
    solution: [
      "Built monthly book selection flows with voting and personalised recommendations.",
      "Implemented moderation queues and safeguards for user-generated content.",
      "Optimised infrastructure for traffic spikes during selection windows.",
      "Continuously ship new community features alongside the foundation's team.",
    ],
    results: [
      { value: "50k+", label: "Young readers served" },
      { value: "99.9%", label: "Uptime during peaks" },
      { value: "10+ yrs", label: "Partnership" },
    ],
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
    client: "Manufacturing group",
    duration: "7 months",
    challenge:
      "Critical plant documentation lived on shared drives with no versioning, no approvals and no audit trail for compliance reviews.",
    solution: [
      "Designed a document model with revisions, approvals and expiry reminders.",
      "Implemented role-based access down to plant and department level.",
      "Added full-text search across scanned and digital documents.",
      "Produced audit-ready activity logs for compliance officers.",
    ],
    results: [
      { value: "-70%", label: "Time to find a document" },
      { value: "100%", label: "Audit trail coverage" },
      { value: "12", label: "Plants onboarded" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
