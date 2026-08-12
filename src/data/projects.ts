/**
 * Case study content mirrored from https://bitsorchestra.com/case-studies
 * (all 52 published case studies, in the order the source site lists them).
 *
 * The filter vocabularies below are the canonical category orders used by the
 * source site. The SERVICES / INDUSTRIES / TECHNOLOGIES exported to the UI are
 * narrowed to the values actually present on at least one case study, so every
 * dropdown option returns at least one result.
 */

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  sourceUrl: string;
  services: string[];
  industries: string[];
  technologies: string[];
  client?: string;
  duration?: string;
  challenge: string;
  solution: string[];
  /** Quantified results, rendered as KPI tiles. May be empty. */
  results: Metric[];
  /** Qualitative outcomes, rendered as a list. May be empty. */
  outcomes: string[];
};

const ALL_SERVICES = [
  "Software development",
  "Web development",
  "Mobile app development",
  "UI/UX design",
  "AI/ML",
  "Team extension",
] as const;

const ALL_INDUSTRIES = [
  "Manufacturing",
  "Retail & Ecommerce",
  "Technology",
  "Education",
  "Energy",
  "Nonprofit",
] as const;

const ALL_TECHNOLOGIES = [
  "Kentico",
  "Umbraco",
  ".NET",
  ".NET Core",
  "ASP.NET MVC",
  "Angular",
  "React",
  "React Native",
  "Vue.js",
  "Node.js",
  "Typescript",
  "Firebase",
  "AWS",
  "Azure",
  "Shopify",
] as const;

export const PROJECTS: Project[] = [
  {
    slug: "b2b-manufacturing-portal-development",
    title: "B2B Manufacturing Portal for a Configure-to-Order Industrial Manufacturer",
    excerpt:
      "Extended a legacy manufacturing portal with customer self-service, warehouse workflow digitization and production visibility — without interrupting live operations.",
    image: "/projects/Manufacturing-portal-teaser.webp",
    sourceUrl: "https://bitsorchestra.com/projects/b2b-manufacturing-portal-development",
    services: ["Software development", "Web development"],
    industries: ["Manufacturing"],
    technologies: ["Kentico", ".NET"],
    client: "US-based B2B manufacturer of engineered-to-order modular industrial systems (NDA)",
    duration: "2024 – ongoing",
    challenge:
      "The existing portal was stable but key workflows still depended on manual updates and spreadsheets. Customers needed internal support to update orders and configure products, and warehouse teams relied on manual steps for inventory and shipment preparation. Production stoppages lacked structured tracking, limiting visibility into bottlenecks.",
    solution: [
      "Customer-facing product builder enabling independent configuration, pricing and reordering.",
      "Warehouse inbound tracking with barcode scanning and real-time inventory visibility.",
      "Automated shipment documentation and logistics provider integration.",
      "Production downtime tracking by machine, area, duration and reason category.",
      "Role-based access control and integration monitoring across seven connected systems.",
      "Incremental delivery approach preserving production system stability.",
    ],
    results: [
      { value: "30%+", label: "Fewer manual operational steps" },
      { value: "10", label: "Business-critical modules delivered" },
      { value: "7", label: "Integrations deployed" },
      { value: "Zero", label: "Production downtime across releases" },
    ],
    outcomes: [
      "Integrations cover Stripe, carrier APIs, bank reconciliation, SharePoint, Office 365 and Google Analytics.",
    ],
  },
  {
    slug: "kentico-13-to-xperience-migration",
    title: "Migrating a SKU-Heavy B2B Dealer Portal from Kentico 13 to Xperience by Kentico",
    excerpt:
      "A global B2B building-materials manufacturer moved a dealer portal serving 350+ distributors across 18 countries to Xperience by Kentico, preserving 12,000+ SKUs and every integration.",
    image: "/projects/Kentico-13-to-Xperience-(1).webp",
    sourceUrl: "https://bitsorchestra.com/projects/kentico-13-to-xperience-migration",
    services: ["Software development", "Web development"],
    industries: ["Manufacturing"],
    technologies: ["Kentico", ".NET"],
    client: "Global B2B building-materials manufacturer (NDA)",
    duration: "05/2025 — 12/2025",
    challenge:
      "The portal's architecture had become risky and slow under 40+ custom page types and 80+ widgets with deep interdependencies. ERP and CRM data sync relied on manual spreadsheets, causing stale pricing and inventory. New campaigns required 10–12 week development cycles, and dealer authentication was fragmented across the portal, Salesforce and ERP.",
    solution: [
      "Three full rehearsal migrations on a non-production environment to validate content fidelity and redirect integrity.",
      "ASP.NET Core frontend with clean separation of domain logic, integration code and presentation layer.",
      "Headless commerce via Shopify Plus, integrated through Xperience's official connectors.",
      "Custom ERP REST API integration with scheduled tasks for contract pricing and live stock levels.",
      "Salesforce and Azure AD B2C SSO for a unified dealer identity.",
      "AIRA AI assistant enabled for editorial content drafting and multilingual translation.",
    ],
    results: [
      { value: "35%", label: "Shorter campaign launch cycles" },
      { value: "45%", label: "More logged-in dealer sessions" },
      { value: "~50%", label: "Less manual ERP/CRM reconciliation" },
      { value: "~35%", label: "Faster catalog page loads" },
    ],
    outcomes: [
      "Partner campaign cycles dropped from 10–12 weeks to 6–8 weeks.",
      "Catalog page load time improved from 3.1s to 2.0s.",
    ],
  },
  {
    slug: "custom-employee-recognition-platform",
    title: "Building a custom employee recognition platform in 8 weeks",
    excerpt:
      "A Texas technology company replaced its locked-down recognition SaaS with a custom platform featuring rewards, gamification and HR analytics — built in eight weeks.",
    image: "/projects/Kudos-Platform.webp",
    sourceUrl: "https://bitsorchestra.com/projects/custom-employee-recognition-platform",
    services: ["Software development", "Web development"],
    industries: ["Technology"],
    technologies: ["Node.js", "React"],
    client: "Texas-based technology company, 200+ employees",
    duration: "02/2026 — 04/2026 (8 weeks)",
    challenge:
      "The existing recognition tool lacked customization and gave HR no engagement data or analytics. The vendor locked the team out of reward logic changes, and recurring SaaS costs of $6K–$7.2K per year bought no IP ownership or roadmap control.",
    solution: [
      "React frontend with real-time updates across recognition, rankings and balances.",
      "Node.js backend handling concurrent transactions, automation workflows and WebSocket updates.",
      "Dual-currency system (Kudos-to-Coins) with full transaction attribution.",
      "15+ badges, percentile ranking and automated lifecycle rewards for birthdays and anniversaries.",
      "HR analytics dashboard with date-range reporting.",
      "Mobile-optimized responsive UI without a separate mobile codebase.",
    ],
    results: [
      { value: "78%", label: "Employee adoption in month one" },
      { value: "12", label: "Modules live at launch" },
      { value: "$6–7.2K", label: "Annual SaaS fees eliminated" },
      { value: "3-day", label: "Rollout with zero rollback" },
    ],
    outcomes: [],
  },
  {
    slug: "kentico-cms-for-koni",
    title: "Scalable B2B Kentico solution for Koni",
    excerpt:
      "KONI moved from a template-locked website to a widget-based Kentico architecture supporting multiple regional B2B sites, with editors assembling pages without developers.",
    image: "/projects/koni-case-cover.webp",
    sourceUrl: "https://bitsorchestra.com/projects/kentico-cms-for-koni",
    services: ["Web development", "UI/UX design"],
    industries: ["Manufacturing", "Retail & Ecommerce"],
    technologies: ["Kentico", "Vue.js"],
    client: "KONI (part of ITT Group), manufacturer of adjustable hydraulic shock absorbers",
    duration: "January 2023 — April 2024",
    challenge:
      "KONI's outdated website no longer reflected current branding, lacked scalability for multiple properties and was difficult for non-developers to maintain. It also needed to align with ITT Group's Kentico standardization while serving B2B partners and distributors.",
    solution: [
      "Pivoted from template-based to widget-based Kentico architecture so content editors could assemble pages without developer involvement.",
      "Implemented Vue.js with server-side rendering for improved SEO and page load performance.",
      "Built a reusable widget library deployable across multiple B2B sites without new development cycles.",
      "Ran iterative delivery with client feedback and user acceptance testing throughout the build.",
      "Leveraged Kentico Xperience on .NET Core with ASP.NET MVC and Amazon infrastructure.",
    ],
    results: [
      { value: "62%", label: "Increase in page views" },
      { value: "67%", label: "Increase in item views" },
      { value: "439.9%", label: "Uplift in navigation and CTA clicks" },
      { value: "3", label: "B2B sites on one architecture" },
    ],
    outcomes: [
      "The architecture extended to three separate B2B sites without rebuilding from scratch.",
    ],
  },
  {
    slug: "pj-our-way",
    title: "Scalable platform that supports Jewish literacy",
    excerpt:
      "A rebuild of the PJ Our Way platform for the Harold Grinspoon Foundation, with a dual-mode interface for children and parents and capacity for 5,000 concurrent sessions.",
    image: "/projects/pj-ourway.webp",
    sourceUrl: "https://bitsorchestra.com/projects/pj-our-way",
    services: ["Web development", "UI/UX design"],
    industries: ["Education"],
    technologies: ["Kentico", ".NET"],
    client: "Harold Grinspoon Foundation",
    challenge:
      "The original PJ Our Way site was slow and difficult to maintain, and failed to meet user expectations for interactive experiences. The platform needed to handle up to 50,000 users and 5,000 concurrent sessions while serving two distinct audiences — children and parents — with different interfaces, content and permissions.",
    solution: [
      "Implemented Kentico MVC architecture with web farms and layered caching for improved performance.",
      "Built a split-view interface letting users toggle between child and parent modes with tailored layouts.",
      "Developed gamification features tracking badges for reading activities with custom backend logic.",
      "Created custom admin modules for simplified management of books, events and user data.",
      "Integrated with the Microsoft Dynamics NAV ERP system via a custom API.",
      "Added content staging, versioning, an onboarding tour and accessibility improvements.",
    ],
    results: [
      { value: "5,000", label: "Concurrent users at peak" },
      { value: "97%", label: "Success rate on a 50,000-person rollout" },
    ],
    outcomes: [
      "Reduced admin workload through simplified content management.",
      "Improved engagement and clearer experiences for both children and parents.",
    ],
  },
  {
    slug: "dynamic-document",
    title: "Document management system for manufacturing client",
    excerpt:
      "A custom enterprise document management system for a global manufacturer, eliminating paper documentation and establishing a single source of truth across 50+ countries.",
    image: "/projects/document-management-system.webp",
    sourceUrl: "https://bitsorchestra.com/projects/dynamic-document",
    services: ["Software development", "UI/UX design"],
    industries: ["Manufacturing"],
    technologies: ["Kentico", ".NET"],
    client: "Enterprise global manufacturer in building materials and commercial interiors (NDA)",
    duration: "2+ years",
    challenge:
      "Multiple business divisions maintained separate documentation standards, so outdated materials were frequently used in production and field installation. That drove costly rework, customer complaints, compliance exposure, excessive printing costs and delays from approval processes scattered across departments and brands.",
    solution: [
      "Dynamic document generator that assembles materials in real time with the correct branding, logos and disclaimers per requestor.",
      "Workflow and approval automation supporting multiple approvers, delegation and parallel approvals.",
      "Retention rules engine that automatically retires documents based on type and compliance policy.",
      "Secure viewer preventing downloads or copies of sensitive materials.",
      "User “Books” feature letting employees group frequently accessed documents for faster retrieval.",
    ],
    results: [
      { value: "95%+", label: "Reduction in printing costs" },
      { value: "60 days", label: "To enterprise-wide adoption" },
      { value: "90%+", label: "Fewer document-related errors" },
      { value: "10,000+", label: "Product documents managed" },
    ],
    outcomes: ["Centralized repository serves teams across 50+ countries."],
  },
  {
    slug: "anderson-tuftex-enterprise-cms-transformation",
    title: "Transforming Anderson Tuftex's flooring website with enterprise CMS",
    excerpt:
      "Anderson Tuftex upgraded its flooring e-commerce website with a reusable Kentico Xperience 13 template and advanced merchandising tools, removing developer dependency for daily updates.",
    image: "/projects/Anderson-tuftex.webp",
    sourceUrl: "https://bitsorchestra.com/projects/anderson-tuftex-enterprise-cms-transformation",
    services: ["Web development"],
    industries: ["Manufacturing"],
    technologies: ["Kentico", ".NET Core"],
    client:
      "Anderson Tuftex (part of Shaw Industries), hardwood flooring manufacturer, Dalton, Georgia",
    duration: "Mar. 2024 — ongoing",
    challenge:
      "Anderson Tuftex needed to modernize its website to meet customer demand for a better shopping experience. The existing platform lacked flexible content management and required developer involvement for routine updates, limiting the marketing team's independence and slowing time-to-market for new brand sites.",
    solution: [
      "Implemented a reusable Kentico Xperience 13 CMS template enabling quick, consistent brand site launches.",
      "Developed advanced e-commerce capabilities including dynamic product filtering and customizable detail pages.",
      "Integrated 8 third-party tools: Cybersource, AudioEye, OneTrust, Genesys Chat, Bazaarvoice, SharpSpring, Roomvo and Calendly.",
      "Established role-based permissions so content editors and brand managers manage their own workflows.",
      "Built React-based components for flexible page layouts with .NET backend support.",
    ],
    results: [
      { value: "439%", label: "Increase in CTA clicks" },
      { value: "62%", label: "Increase in page views" },
      { value: "67%", label: "Increase in item views" },
    ],
    outcomes: ["Zero developer dependency for everyday content updates and e-commerce workflows."],
  },
  {
    slug: "flaga-energy-management-platform",
    title: "Web upgrade for energy management platform FLAGA",
    excerpt:
      "A multilingual Umbraco Cloud website for FLAGA, Austria's major liquid gas supplier, with independent content management and a location-based distributor finder.",
    image: "/projects/flaga.webp",
    sourceUrl: "https://bitsorchestra.com/projects/flaga-energy-management-platform",
    services: ["Web development"],
    industries: ["Energy"],
    technologies: ["Umbraco", ".NET Core"],
    client: "FLAGA, major supplier of liquid gas in Austria with 65+ years in business",
    challenge:
      "FLAGA needed multilingual capabilities for a diverse customer base, better content editing features to reduce developer dependency, an integrated newsletter solution, and a location-based distributor finder to improve customer convenience and operational efficiency.",
    solution: [
      "Implemented Umbraco Cloud with modular widgets so the marketing team can publish without developer involvement.",
      "Integrated Newsletter Studio for email campaign management.",
      "Built a location-based distributor feature for customers to find their nearest gas supplier.",
      "Created flexible page layouts allowing different designs from identical templates.",
    ],
    results: [],
    outcomes: [
      "Increased website traffic and conversion rates through the multilingual interface and user-friendly design.",
      "Reduced operational costs by minimizing ongoing developer support.",
      "Improved customer communication via integrated newsletter capabilities.",
      "Strengthened brand reputation with a more professional online presence.",
    ],
  },
  {
    slug: "coretec",
    title: "E-commerce platform development for premium flooring brand",
    excerpt:
      "COREtec Floors' e-commerce site was rebuilt on Kentico 13 and React, giving marketers page-building independence and lifting traffic and conversion.",
    image: "/projects/coretech.webp",
    sourceUrl: "https://bitsorchestra.com/projects/coretec",
    services: ["Web development"],
    industries: ["Manufacturing", "Retail & Ecommerce"],
    technologies: ["Kentico", "ASP.NET MVC"],
    client: "Shaw Industries (COREtec Floors premium flooring brand)",
    challenge:
      "The team needed to balance advanced technology with user-friendly management: a robust backend supporting business operations, while letting marketers update content independently without relying on developers.",
    solution: [
      "Implemented Kentico Xperience 13 with MVC Core for a modernized stack, improved security and simpler scaling.",
      "Integrated React with server-side rendering for an enhanced front-end experience.",
      "Deployed Kentico Page Builder with 5 unique and 1 generic template so editors build pages independently.",
      "Integrated CyberSource payments, AudioEye accessibility, OneTrust privacy, Genesys Chat, Bazaarvoice reviews and Roomvo room visualization.",
    ],
    results: [
      { value: "23%", label: "Increase in website traffic" },
      { value: "34%", label: "Increase in conversion rates" },
    ],
    outcomes: [
      "Reduced development team costs through comprehensive administration tools.",
      "Enhanced user experience and consumer trust in the COREtec Floors brand.",
    ],
  },
  {
    slug: "blockchain-dashboard",
    title: "Blockchain dashboard",
    excerpt:
      "A real-time analytics dashboard processing and visualizing vast cryptocurrency market data — transactions, wallets and NFTs — on a scalable AWS pipeline.",
    image: "/projects/blockchain-dashboard.webp",
    sourceUrl: "https://bitsorchestra.com/projects/blockchain-dashboard",
    services: ["Web development", "AI/ML"],
    industries: ["Technology"],
    technologies: ["AWS", "Azure"],
    client: "Blockchain analytics company (NDA)",
    challenge:
      "The project faced three core obstacles: managing enormous distributed blockchain data across multiple nodes efficiently, ensuring continuous real-time updates as market trends evolve, and performing intensive blockchain queries that demand robust computational resources.",
    solution: [
      "Implemented an AWS data ingestion pipeline fetching from reliable sources such as Infura.",
      "Developed a real-time data processing engine for transaction and trend analysis.",
      "Built scalable AWS infrastructure for data storage, streaming and processing.",
      "Created intuitive dashboard visualization for complex blockchain metrics.",
      "Integrated real-time transaction analysis and wallet tracking.",
      "Introduced basic and advanced market indicators for trend interpretation.",
    ],
    results: [],
    outcomes: [
      "Established an efficient data management pipeline for seamless blockchain data access.",
      "Enabled real-time transaction analysis, wallet tracking and market indicators.",
      "Provided visualization that makes complex metrics interpretable for non-specialists.",
    ],
  },
  {
    slug: "time-series-analysis-and-forecasting-for-cryptocur",
    title: "Automated system for predicting cryptocurrency market trends",
    excerpt:
      "An automated ML forecasting platform for crypto, stock and bond market trends, using adaptive models and parallelized data pipelines.",
    image: "/projects/eudamonia.webp",
    sourceUrl:
      "https://bitsorchestra.com/projects/time-series-analysis-and-forecasting-for-cryptocur",
    services: ["Software development", "Web development"],
    industries: ["Technology"],
    technologies: [".NET Core", "Azure"],
    client: "Eudaimonia, specialists in robust market forecasting technologies",
    challenge:
      "High market volatility demanded adaptive models, and raw market data required complex feature engineering. The client also needed efficient parallelized data pipelines, a centralized system for testing multiple time series models, guaranteed data quality, and support for different forecasting schemas.",
    solution: [
      "Time series forecasting solution using adaptive models tailored for volatile financial markets.",
      "Rigorous feature engineering to enhance prediction accuracy and capture market trends.",
      "Centralized system for testing and developing diverse forecasting models.",
      "Microservices architecture with admin UI, user UI and a customer API.",
      "Integrated Polygon API for historical crypto data, Google Cloud Vertex AI for model deployment and Azure Functions for post-processing.",
    ],
    results: [],
    outcomes: [
      "The platform enables tracking of market trends and analysis of historical data.",
      "Users can create custom forecasting scenarios for portfolio diversification and return optimization.",
      "A suite of tools helps investors make informed investment decisions.",
    ],
  },
  {
    slug: "accounts-payable-and-invoicing-process-automation",
    title: "Invoicing process automation for leading procurement company",
    excerpt:
      "An AI-powered platform automating accounts payable and invoicing for a leading procurement company, with PEPPOL compliance and Ariba/SAP integration.",
    image: "/projects/Invoicing-process-automation.webp",
    sourceUrl:
      "https://bitsorchestra.com/projects/accounts-payable-and-invoicing-process-automation",
    services: ["AI/ML"],
    industries: [],
    technologies: [".NET Core", "Angular"],
    client: "Leading procurement solutions company in Australia, serving major Asia Pacific brands",
    challenge:
      "The platform had to integrate with multiple invoicing systems including Ariba and SAP, support diverse invoice formats from PDFs to images to electronic documents, implement configurable business rules, and manage supplier data across various identification methods.",
    solution: [
      "Seamless integration with popular invoicing platforms including Ariba and SAP.",
      "AI-powered invoice processing supporting multiple formats with intelligent data extraction.",
      "Flexible rule engine for configuring exceptions, warnings and approver assignment.",
      "Robust supplier management using unique identifiers including ABN.",
      "Multi-tenant web application with email, API and file upload intake options.",
      "PEPPOL-standards compliance for future interoperability.",
    ],
    results: [
      { value: "100%", label: "User satisfaction score" },
      { value: "18M", label: "Payments processed" },
      { value: "75%", label: "Reduction in cycle time" },
    ],
    outcomes: [],
  },
  {
    slug: "door-services",
    title: "Integrated web and mobile solutions for doors services company",
    excerpt:
      "An integrated web and mobile platform for Door Services Corporation, streamlining location-based service search, multi-brand content management and product information.",
    image: "/projects/Door-services.webp",
    sourceUrl: "https://bitsorchestra.com/projects/door-services",
    services: ["Mobile app development"],
    industries: [],
    technologies: ["Kentico", "ASP.NET MVC"],
    client: "Door Services Corporation, Canadian automatic door and window services provider",
    challenge:
      "The business needed a system letting customers easily find their nearest service location based on business rules. Content management had to balance shared content across sub-brands with brand-specific customization, and a complex product management module was required to satisfy internal processes.",
    solution: [
      "Developed a web and mobile platform with location-based search for service centers.",
      "Implemented Kentico CMS for multi-brand content management and editor independence.",
      "Created a Product Information Management system with data modeling, import/export and workflow.",
      "Integrated a data layer connecting PIM with ERP, CRM and eCommerce systems.",
      "Designed a responsive interface optimized for desktop and mobile with intuitive navigation.",
    ],
    results: [],
    outcomes: [
      "Reduced operational costs through intuitive tools for content editors and store employees.",
      "Increased site visitor volume and improved the digital journey leading to store visits.",
      "Enabled content management without developer intervention across brands and locations.",
    ],
  },
  {
    slug: "ml-based-saas",
    title: "ML based SaaS solution for students enrollment prediction",
    excerpt:
      "A machine-learning SaaS platform letting universities track enrollment and predict student enrollment likelihood from integrated warehouse and CRM data.",
    image: "/projects/enrollme.webp",
    sourceUrl: "https://bitsorchestra.com/projects/ml-based-saas",
    services: ["Software development"],
    industries: [],
    technologies: [".NET Core", "Azure"],
    client:
      "Zenuit Consulting Services, US IT consultancy in cybersecurity and applied machine learning",
    challenge:
      "The system had to integrate data warehouses while maintaining data integrity and accuracy, synchronize with Salesforce despite continuously updating table schemas, and handle complex data management requirements across institutions.",
    solution: [
      "Developed a multi-tenant web service with robust administrative capabilities for warehouse integration.",
      "Implemented scheduling jobs to update table information and schemas per administrator requirements.",
      "Built a centralized platform for managing admissions data, analytics and queries.",
      "Integrated CRM and data warehouse systems seamlessly.",
      "Created historical data upload functionality for enrollment forecasting.",
    ],
    results: [],
    outcomes: [
      "Significantly reduced admissions process time through a centralized platform.",
      "Customized enrollment markers and daily critical outreach priorities.",
      "Personalized funnel analysis to streamline enrollment efforts.",
    ],
  },
  {
    slug: "customer-churn",
    title: "Customer churn forecasting",
    excerpt:
      "A dynamic churn prediction model for a leading Azerbaijani financial institution, identifying at-risk loan customers and driving targeted retention.",
    image: "/projects/customer-churn-forecasting.webp",
    sourceUrl: "https://bitsorchestra.com/projects/customer-churn",
    services: ["AI/ML"],
    industries: [],
    technologies: [],
    client: "Leading financial institution in Azerbaijan",
    challenge:
      "The model had to stay responsive to changing customer behaviors and economic conditions, extract actionable insights from diverse datasets spanning transaction histories, demographics and market trends, and personalize loan products at scale across a vast customer base.",
    solution: [
      "Engineered a dynamic churn prediction model tailored to evolving behaviors and market conditions.",
      "Extracted insights from transaction histories, demographics and market trend data.",
      "Refined and personalized loan offerings based on behavioral analysis.",
      "Integrated churn predictions with marketing and CRM workflows for proactive retention.",
    ],
    results: [],
    outcomes: [
      "Reduced customer churn through the tailored prediction model.",
      "Attracted new clients via data-driven marketing strategies.",
      "Enhanced loan offerings, boosting satisfaction and cross-selling opportunities.",
    ],
  },
  {
    slug: "gat-flooring",
    title: "Redesign website for ecommerce flooring company",
    excerpt:
      "A UI/UX redesign of GAT Flooring's e-commerce website around a new brand identity, with restructured navigation and a dedicated product selection flow.",
    image: "/projects/gat-flooring.webp",
    sourceUrl: "https://bitsorchestra.com/projects/gat-flooring",
    services: ["UI/UX design"],
    industries: [],
    technologies: [],
    client: "GAT Flooring, Australian importer and distributor of premium construction materials",
    challenge:
      "The website needed a complete redesign aligned with the client's updated brand identity while creating an intuitive, modern interface. The design also had to accommodate scalable content for varying product offerings without overwhelming users with plain text.",
    solution: [
      "Transitioned navigation from a left panel to a top menu.",
      "Created a dedicated product selection page.",
      "Added homepage sections highlighting key information with clear visual hierarchy.",
      "Separated locations and contact information into distinct pages.",
      "Prioritized structural improvements alongside UI updates.",
      "Implemented a modern, minimalistic design approach.",
    ],
    results: [],
    outcomes: ["Website traffic increased.", "Conversion from visitor to customer improved."],
  },
  {
    slug: "kenticomigration",
    title: "Migration to Kentico Xperience 13 Core for the State Agency",
    excerpt:
      "A state agency migrated from end-of-life Kentico 12 Portal Engine to Xperience 13 Core, cutting average response time by 93.7% with under 10 minutes of visible downtime.",
    image: "/projects/migration-to-kentico-xperience.webp",
    sourceUrl: "https://bitsorchestra.com/projects/kenticomigration",
    services: [],
    industries: [],
    technologies: ["Kentico", ".NET Core"],
    client: "U.S. state environmental protection agency (NDA)",
    challenge:
      "The Kentico 12 implementation had grown complex with custom widgets and large content blocks, causing slow performance during peak traffic. The platform reached end-of-life, creating security and compliance risk, while editors struggled with accessibility inconsistencies and relied on developers for routine layout changes.",
    solution: [
      "Conducted a detailed assessment of page types, templates, widgets, media libraries and URL patterns.",
      "Implemented an automated migration layer connecting the Kentico 12 database to Xperience 13 Core, with logging for anomaly detection.",
      "Migrated rich-text embedded widgets by parsing content and replacing it with structured components.",
      "Redesigned around a component-based content model so editors assemble pages from reusable components.",
      "Preserved over 95% of URLs, with redirects for the remainder to protect SEO equity.",
      "Scheduled cutover during off-peak hours with staging validation and a rollback plan.",
    ],
    results: [
      { value: "93.7%", label: "Lower average response time" },
      { value: "93.5%", label: "Improvement at 90th percentile" },
      { value: "80%", label: "Content updates without developers" },
      { value: "<10 min", label: "User-visible downtime" },
    ],
    outcomes: [
      "Average response time fell from 2.23s to 0.141s.",
      "Zero critical accessibility regressions post-launch.",
    ],
  },
  {
    slug: "asp-guard",
    title: "Development web dispatcher app to manage crossing guards",
    excerpt:
      "A web dispatcher application for A.S.P. Incorporated managing school crossing guard scheduling, assignment and real-time location tracking across Toronto.",
    image: "/projects/asp-guard.webp",
    sourceUrl: "https://bitsorchestra.com/projects/asp-guard",
    services: ["Software development"],
    industries: [],
    technologies: [".NET Core", "AWS"],
    client: "A.S.P. Incorporated, security and concierge services provider",
    challenge:
      "The existing website needed improved UX and new functionality to replace manual Excel spreadsheets with automated reports. Processing large volumes of information caused performance issues, making the system sluggish for administrative staff managing guard operations citywide.",
    solution: [
      "Intelligent guard assignment evaluating schedule availability, holidays, distance to work areas and existing shifts.",
      "Real-time dashboard showing guard attendance status, check-in/check-out times and location.",
      "Guard location tracking with geofence monitoring and movement trajectory visualization.",
      "Reporting suite covering attendance, coverage analysis and shift assignment status.",
      "Role-based data presentation optimized for different user types.",
    ],
    results: [],
    outcomes: [
      "Significant reduction in time spent on guard management and data collection.",
      "Improved operational efficiency with intuitive workforce planning.",
      "Enhanced visibility into employee performance through detailed analysis.",
    ],
  },
  {
    slug: "asp-guard-mobile-app",
    title: "Development mobile dispatcher app for managing crossing guards",
    excerpt:
      "The XGuard mobile dispatcher app for ASP Security Services, automating crossing guard tracking with reliable location services on iOS and Android.",
    image: "/projects/asp-guard-mobile.webp",
    sourceUrl: "https://bitsorchestra.com/projects/asp-guard-(mobile-app)",
    services: ["Software development", "Mobile app development"],
    industries: [],
    technologies: [".NET Core", "AWS"],
    client: "A.S.P. Incorporated (ASP Security Services)",
    challenge:
      "The previous app suffered from inaccurate location tracking and frequent crashes, making maintenance difficult and updates slow. The user interface lacked intuitiveness, and the system needed to support both iOS and Android with background data refreshing.",
    solution: [
      "Built a stable, maintainable architecture with fresh UI/UX design for iOS and Android.",
      "Implemented reliable user location tracking as the core of staff shift management.",
      "Integrated background data refreshing to display the latest information without manual updates.",
      "Created a responsive interface matching design specifications across screen sizes.",
      "Developed COVID-19 screening, check-in/check-out, shift management and supervisor communication.",
    ],
    results: [],
    outcomes: [
      "A one-stop tool for ASP employees to manage duty assignments and attendance tracking.",
      "Support for iOS and Android with improved stability and user experience.",
      "Automated tracking enabling management to analyze attendance and create operational reports.",
    ],
  },
  {
    slug: "leak-control",
    title: "Subsea safety valve leak rate and leak fluid identification for environmental safety",
    excerpt:
      "An AI and machine learning system detecting leaks in subsea safety valves early, preventing equipment failure and environmental damage in offshore oil and gas operations.",
    image: "/projects/leak-rate-ml.webp",
    sourceUrl: "https://bitsorchestra.com/projects/leak-control",
    services: ["Software development", "AI/ML"],
    industries: [],
    technologies: ["AWS"],
    client: "Multinational energy company operating in oil and gas across 70+ countries",
    challenge:
      "The client needed early detection of leaks in subsurface safety valves to mitigate equipment failure risk, minimize non-productive time through predictive modeling, and protect marine ecosystems while reducing the cost of physical inspection.",
    solution: [
      "3D volumetric sonar data capture for comprehensive subsea condition assessment.",
      "Machine learning and AI for interpreting complex sonar data and predictive modeling.",
      "Fluid flow and pressure data analysis to develop early leakage indicators.",
      "Significant reduction in physical inspection frequency.",
    ],
    results: [],
    outcomes: [
      "Reduced risk of safety equipment failure through early leak detection.",
      "Increased revenue by lowering non-productive time and operational costs.",
      "Decreased environmental impact on marine ecosystems and animal life.",
    ],
  },
  {
    slug: "naoo",
    title: "Car service mobile application development for Naoo",
    excerpt:
      "A roadside assistance mobile app for Naoo, an Australian vehicle service platform, letting users compare fuel prices and call repair and tow services.",
    image: "/projects/Naoo.webp",
    sourceUrl: "https://bitsorchestra.com/projects/naoo",
    services: ["Software development", "Mobile app development"],
    industries: [],
    technologies: [".NET Core", "Angular"],
    client: "Naoo",
    challenge:
      "The app required a customizable payment system integrating multiple providers, push notifications, built-in chat between clients and the call center, location tracking to identify nearby services, and a multifunctional map displaying fuel price ranges across service areas.",
    solution: [
      "Developed the mobile app with React Native, TypeScript and Redux, using native phone features and Google Maps.",
      "Built a custom map architecture with specialized libraries for fuel price data visualization.",
      "Created a CRM system for employees to manage customer requests and service team responses.",
      "Implemented a customizable payment gateway configurable via the admin panel.",
      "Set up CI/CD services and app store certification for iOS and Android.",
    ],
    results: [],
    outcomes: [
      "A functional roadside assistance app connecting customers with repair and tow truck services.",
      "Real-time fuel price monitoring helping users locate the best prices nearby.",
      "A complete ecosystem: admin panel, iOS/Android apps and integrated store functionality.",
    ],
  },
  {
    slug: "kustom-printing",
    title: "Custom order management system development for Kustom Printing",
    excerpt:
      "A Progressive Web App for Kustom Printing Products managing printer maintenance and repair orders, working fully offline in low-connectivity locations.",
    image: "/projects/kustom-printing.webp",
    sourceUrl: "https://bitsorchestra.com/projects/kustom-printing",
    services: ["Software development"],
    industries: ["Manufacturing"],
    technologies: [".NET Core", "React"],
    client: "Kustom Printing Products",
    challenge:
      "The company needed an order management web application that could function offline in areas with poor or no internet connection. Employees required access to customer information and order management from remote locations while keeping data storage secure.",
    solution: [
      "Built the admin system with React and .NET Core, using PWA technology for offline access.",
      "Implemented a custom calendar for appointment and task scheduling.",
      "Created manual signature functionality for digital client approvals.",
      "Developed a custom timer for employee work hour tracking.",
      "Enabled real-time order status monitoring and distribution by administrators.",
    ],
    results: [],
    outcomes: [
      "Seamless offline order management across all locations.",
      "Streamlined workflow with real-time administrator oversight.",
      "Notification, alert and analytics functionality for performance tracking.",
      "Digital signature capture eliminating paper-based approvals.",
    ],
  },
  {
    slug: "timeoutdoors",
    title: "Rebuilding an outdoor events platform with partner self-service on Kentico",
    excerpt:
      "TimeOutdoors rebuilt its event platform on Kentico Xperience 13 to enable partner self-service publishing, growing traffic 17% and cutting partner onboarding by 75%.",
    image: "/projects/time-outdoors.webp",
    sourceUrl: "https://bitsorchestra.com/projects/timeoutdoors",
    services: [],
    industries: [],
    technologies: ["Kentico", ".NET Core"],
    client: "TimeOutdoors",
    duration: "October 2021 — March 2022",
    challenge:
      "The growing event catalog exceeded internal publishing capacity, with every listing requiring developer support. Partners had no independent management capability, marketing time was consumed by content operations, event routing logic was fragmented, and origin-server performance degraded as inventory scaled.",
    solution: [
      "Partner editing interface with simplified controls for managing listings independently.",
      "Unified routing layer resolving event URLs through the content tree with dynamic fallback.",
      "Integrated e-commerce module for cart, orders and payment processing.",
      "Segmentation-based personalization to surface relevant events.",
      "Workflow automation reducing manual marketing tasks.",
      "CDN media delivery with multi-level caching to support catalog growth.",
    ],
    results: [
      { value: "17%", label: "Website traffic increase" },
      { value: "12%", label: "Sales increase" },
      { value: "75%", label: "Faster partner onboarding" },
      { value: "6,000+", label: "Active event listings" },
    ],
    outcomes: ["Partner onboarding dropped from 12 days to 3 days."],
  },
  {
    slug: "grocery-delivery",
    title: "UI/UX design for grocery delivery",
    excerpt:
      "UI/UX design for a grocery delivery platform, moving the client from Instagram-only ordering to an automated storefront built on researched user flows.",
    image: "/projects/grocery-delivery.webp",
    sourceUrl: "https://bitsorchestra.com/projects/grocery-delivery",
    services: ["UI/UX design"],
    industries: [],
    technologies: [],
    challenge:
      "The client needed a trendy yet simple, minimalist website to increase orders. Many customers abandoned the ordering process, so the design required extensive research — competitor analysis, target audience study and user testing — to ensure easy navigation.",
    solution: [
      "Conducted target audience analysis of women and men aged 20–35 seeking quick quality purchases.",
      "Created a sitemap with 7 main sections: products, cart, account, about, delivery/payment, FAQ and contacts.",
      "Developed user flows establishing logical, complete purchase paths.",
      "Designed Lo-Fi wireframes to eliminate distracting detail, then Hi-Fi wireframes with content.",
      "Built an interactive Figma prototype with an adaptive mobile version.",
      "Performed user testing on prototypes before development.",
    ],
    results: [],
    outcomes: [
      "Transitioned from Instagram-only ordering to an automated platform.",
      "Reduced customer wait time for order responses.",
      "Increased order volume with reduced staff requirements.",
    ],
  },
  {
    slug: "productivity-mobile-app",
    title: "UI/UX design for productivity mobile app",
    excerpt:
      "Cross-platform design for a productivity app built on the Getting Things Done method, helping users organize and prioritize tasks.",
    image: "/projects/productivity-app.webp",
    sourceUrl: "https://bitsorchestra.com/projects/productivity-mobile-app",
    services: ["UI/UX design"],
    industries: [],
    technologies: [],
    challenge:
      "Create a cross-platform mobile app design that would feel intuitive to both iOS and Android users while implementing the fundamentals of the GTD method.",
    solution: [
      "Design mockups and prototype created in Figma.",
      "Competitor analysis to identify useful features beyond GTD basics.",
      "Task checking functionality without a registration requirement.",
      "Subtask capability and a calendar view of tasks.",
      "Comprehensive user flow documentation and wireframes for all app screens.",
    ],
    results: [],
    outcomes: [
      "The app achieved popularity among users focused on task organization and productivity.",
    ],
  },
  {
    slug: "vivad",
    title: "Order management system automation",
    excerpt:
      "Automated order processing for Vivad, breaking orders into job items across work centers with QR-based traceability and real-time status for customers.",
    image: "/projects/Vivad.webp",
    sourceUrl: "https://bitsorchestra.com/projects/vivad",
    services: ["Software development"],
    industries: ["Manufacturing"],
    technologies: ["Kentico", ".NET"],
    client: "Vivad, large-format digital and banner printing company, Australia",
    challenge:
      "The system needed to handle complex business logic for breaking orders into manageable job items and distributing them across work centers, while integrating with existing systems and maintaining data synchronization across all touchpoints.",
    solution: [
      "Developed a fully automated order processing platform with an intuitive interface.",
      "Implemented a mobile-friendly dashboard for work center operators to view prioritized job orders.",
      "Integrated QR code-based navigation for job traceability.",
      "Enhanced workflow visualization with real-time order status for customers and staff.",
      "Built a work queue management system to minimize production downtime.",
    ],
    results: [],
    outcomes: [
      "Significantly reduced operational workload for the Vivad team.",
      "Enabled real-time production monitoring and task prioritization.",
      "Improved customer transparency through order status tracking.",
    ],
  },
  {
    slug: "dasparts",
    title: "E-commerce system for auto parts and accessories vendor",
    excerpt:
      "An e-commerce platform for DasParts, a Canadian Volkswagen and Audi parts retailer, integrating inventory management and automated order processing through Kentico.",
    image: "/projects/dasparts.webp",
    sourceUrl: "https://bitsorchestra.com/projects/dasparts",
    services: [],
    industries: ["Retail & Ecommerce"],
    technologies: ["Kentico", ".NET"],
    client: "DasParts",
    challenge:
      "The project ran under time pressure implementing design templates, required a database migration onto a CMS flexible enough for future upgrades, and needed modern customer engagement features to boost sales.",
    solution: [
      "Deployed a Kentico-based e-commerce architecture with automated parts search.",
      "Integrated Scandit for barcode scanning and warehouse inventory management.",
      "Connected QuickBooks for real-time inventory, sales and invoice synchronization.",
      "Implemented Flagship courier integration for order delivery.",
      "Automated manual order processing and parts listing management.",
    ],
    results: [{ value: "25–30%", label: "Sales growth" }],
    outcomes: [
      "Reduced manual inventory and order-processing work.",
      "Improved data consistency across systems.",
      "Enabled customer self-service ordering without staff intervention.",
    ],
  },
  {
    slug: "lavelio",
    title: "SaaS solution development for social media AI platform",
    excerpt:
      "A multi-tenant SaaS platform letting fashion, beauty and jewelry brands analyze social media data and understand consumer preferences through AI.",
    image: "/projects/lavelio.webp",
    sourceUrl: "https://bitsorchestra.com/projects/lavelio",
    services: ["Software development"],
    industries: [],
    technologies: [".NET Core", "React"],
    client: "Lavelio",
    challenge:
      "The project required cost-effective development within tight budget constraints while building a multi-tenant SaaS solution that could scale to multiple clients without proportional infrastructure spending.",
    solution: [
      "Implemented a .NET Core boilerplate to minimize low-level functionality development.",
      "Used a client-provided React UI template to reduce interface development effort.",
      "Built a multi-tenant architecture with per-tenant database separation.",
      "Created a role-based admin system for tenant and user management.",
      "Developed an intuitive dashboard and analytics portal for social media analysis.",
    ],
    results: [],
    outcomes: [
      "A user-friendly SaaS platform delivering social media marketing insights.",
      "Cost-effective solution meeting client needs while maintaining profitability.",
      "Scalable infrastructure supporting client onboarding without significant additional investment.",
    ],
  },
  {
    slug: "prorank",
    title: "Marketplace for builders and subcontractors development",
    excerpt:
      "A construction marketplace letting builders and subcontractors connect, hire and transact digitally while maintaining quality standards through reputation and ratings.",
    image: "/projects/prorank.webp",
    sourceUrl: "https://bitsorchestra.com/projects/prorank",
    services: ["Software development"],
    industries: [],
    technologies: [".NET Core", "Angular"],
    client: "World-leading construction and building services company, $6B+ in annual contracts",
    challenge:
      "The project required intensive feature development — multi-tenancy with split databases, invoices and payments, subscription management with recurring billing, and reporting dashboards — while meeting the needs of both builders and subcontractors.",
    solution: [
      "Used the ASP.NET Zero framework to focus on business needs rather than low-level infrastructure.",
      "Implemented multi-tenant architecture with database separation for scalability.",
      "Built comprehensive invoicing, payment and subscription management.",
      "Designed an intuitive experience for builders posting projects and subcontractors bidding.",
      "Integrated a reputation and rating system to incentivize quality work.",
    ],
    results: [],
    outcomes: [
      "Platform launched within a couple of months.",
      "Several leading companies onboarded with multiple subcontractors.",
      "Successful deals closed within the first week of release.",
    ],
  },
  {
    slug: "shaw-pro",
    title: "E-commerce system for distributors of carpet manufacturer",
    excerpt:
      "Shaw Industries rebuilt its B2B carpet distributor portal on Kentico MVC, modernizing a content-heavy platform and lifting user acquisition and site performance.",
    image: "/projects/shaw-pro.webp",
    sourceUrl: "https://bitsorchestra.com/projects/shaw-pro",
    services: [],
    industries: ["Manufacturing"],
    technologies: ["Kentico", ".NET"],
    client: "Shaw Industries Group, Inc.",
    challenge:
      "The aging Portal Engine lacked the performance and features a content-heavy site needed. Migration to Kentico MVC required rebuilding functionality previously provided by older web parts and widgets with no native support in the new platform.",
    solution: [
      "Migrated to Kentico MVC for improved HTML control and cleaner, SEO-friendly markup.",
      "Built custom widgets to replace Portal Engine features without development limitations.",
      "Implemented a modern framework architecture for significantly faster page loads.",
      "Integrated content management with internal product inventory and image services.",
      "Designed a responsive interface targeting multiple device types.",
    ],
    results: [
      { value: "21%", label: "New user acquisition increase" },
      { value: "13%", label: "Overall user growth" },
      { value: "19%", label: "Session increase" },
      { value: "36%", label: "Bounce rate reduction" },
    ],
    outcomes: [],
  },
  {
    slug: "staalduinen",
    title: "Ordering system and web app for the flower distributor in Canada",
    excerpt:
      "A B2B ordering platform for Staalduinen Floral, letting customers self-serve browsing, ordering and payment with real-time ERP pricing and inventory.",
    image: "/projects/staalduinen.webp",
    sourceUrl: "https://bitsorchestra.com/projects/staalduinen",
    services: [],
    industries: ["Retail & Ecommerce"],
    technologies: ["Kentico"],
    client: "Staalduinen Floral Limited",
    challenge:
      "All customer, product and order data lived in the ERP and required real-time synchronization for pricing and inventory while maintaining platform performance. Integration complexity was the primary technical obstacle.",
    solution: [
      "Scheduled synchronization of product data — names, images, attributes — into Kentico CMS.",
      "Dedicated API endpoints for real-time pricing and inventory retrieval.",
      "Customer self-service portal reducing the order processing burden on staff.",
      "Integration with existing ERP backend systems.",
      "Collaborative delivery with the agency partner and end client.",
    ],
    results: [],
    outcomes: [
      "Reduced sales cycle time.",
      "Lightened staff workload through customer self-service.",
      "Seamless real-time data synchronization between CMS and backend systems.",
    ],
  },
  {
    slug: "digitron",
    title: "Inventory and content management system in Kentico MVC",
    excerpt:
      "Digitron Semiconductors modernized its supplier website with a dynamic inventory system on Kentico, growing traffic 136% while letting editors extend the catalog without code.",
    image: "/projects/digitron.webp",
    sourceUrl: "https://bitsorchestra.com/projects/digitron",
    services: ["UI/UX design"],
    industries: ["Manufacturing"],
    technologies: ["Kentico"],
    client: "Digitron Semiconductors",
    challenge:
      "The old site couldn't extend its inventory with new product types without significant development. The platform also lacked mobile responsiveness, had performance issues, and validation problems caused crashes when editors entered invalid data.",
    solution: [
      "Built custom Kentico modules letting editors create product types and manage fields, filters, units and visibility through the admin UI without code.",
      "Implemented dynamic page templates generating listings and filters from configuration rather than hard-coded templates.",
      "Migrated thousands of products out of the content tree to improve performance and follow Kentico best practices.",
      "Applied caching strategies and content compression to enhance site speed.",
      "Customized search indexing and integrated PDF documentation parsing for improved relevance.",
    ],
    results: [{ value: "136%", label: "Site traffic increase year-over-year" }],
    outcomes: [
      "Improved editor experience with fewer validation errors and system crashes.",
      "Achieved the five-click navigation goal for product discovery.",
      "Enhanced mobile responsiveness across all device types.",
    ],
  },
  {
    slug: "fit-factory-clubs",
    title: "Fitness mobile application and web service",
    excerpt:
      "A fitness club website redesign that strengthened brand representation and simplified the consumer journey, selling over 1,000 new memberships within months.",
    image: "/projects/fitfactory.webp",
    sourceUrl: "https://bitsorchestra.com/projects/fit-factory-clubs",
    services: ["UI/UX design"],
    industries: [],
    technologies: ["Kentico", ".NET"],
    client: "Fit Factory Clubs",
    challenge:
      "The website needed to better represent the brand and simplify the consumer journey, improving navigation for users looking for information about the luxury studio experience.",
    solution: [
      "Complete website redesign with a strong UX focus.",
      "Improved navigation and information accessibility.",
      "Enhanced content editor and marketer workflows.",
      "Extensive integration with internal client systems.",
    ],
    results: [{ value: "1,000+", label: "Memberships sold within months" }],
    outcomes: [],
  },
  {
    slug: "totaltechschool",
    title: "Digitalization of Total Tech school",
    excerpt:
      "Total Tech School digitalized offline processes through an LMS and e-commerce platform, eliminating manual data entry and enabling online course purchasing.",
    image: "/projects/total-tech-school.webp",
    sourceUrl: "https://bitsorchestra.com/projects/totaltechschool",
    services: ["Software development"],
    industries: [],
    technologies: ["Kentico", ".NET Core"],
    client: "Total Tech School",
    challenge:
      "The school needed to automate significant manual work and eliminate spreadsheet-based tracking of registrations, payments, classes and grades. The system required modular architecture to accommodate rapid process changes as the school grew.",
    solution: [
      "E-commerce site built on Kentico CMS for course and webinar purchasing.",
      "Online testing and certification capabilities.",
      "Learning Management System for program, class and schedule management.",
      "Student assignment tracking and grade management.",
      "Electronic document signature functionality.",
      "Security measures to prevent webinar sharing.",
    ],
    results: [],
    outcomes: [
      "Registration event time dropped from 1–2 days to immediate processing.",
      "Eliminated manual data entry and paper-based processes.",
      "Improved information accessibility for the administrative team.",
    ],
  },
  {
    slug: "transition-to-trades",
    title: "Transitioning educational system for Hiller",
    excerpt:
      "Transition to Trades' Excel-based management system became an automated web application, removing manual processes and increasing program manager efficiency.",
    image: "/projects/Hiller.webp",
    sourceUrl: "https://bitsorchestra.com/projects/transition-to-trades",
    services: ["Software development"],
    industries: [],
    technologies: [".NET Core", "Angular"],
    client:
      "Transition to Trades, by Hiller Plumbing, Heating, Cooling & Electrical and U.S. Army Garrison, Fort Campbell",
    challenge:
      "The client relied on Excel spreadsheets to track all processes, which required changes in multiple locations, manual validation and created data consistency issues. This manual approach was a significant burden limiting operational efficiency.",
    solution: [
      "Converted the framework into a web application with automated workflows.",
      "Implemented input validation and data relationship building.",
      "Auto-generated ToDo lists for program managers to prevent missed actions.",
      "Built a high-level abstraction enabling flexible extension with minimal development effort.",
      "Delivered interviews and employment tracking, events management, class reservations, mentorship, reporting and state authorization reports.",
    ],
    results: [],
    outcomes: [
      "Significant cost savings through increased program manager efficiency.",
      "Eliminated human errors requiring time-intensive resolution.",
      "Reduced manual actions and accelerated overall process speed.",
    ],
  },
  {
    slug: "trutech-test",
    title: "Recruitment tool for candidates assessment",
    excerpt:
      "A SaaS recruitment tool letting service companies assess candidate knowledge and identify training gaps — 160 companies subscribed in the first month.",
    image: "/projects/recruitment-tool-for-candidate.webp",
    sourceUrl: "https://bitsorchestra.com/projects/trutech-test",
    services: ["Software development"],
    industries: [],
    technologies: [".NET Core", "React"],
    client: "Hiller Plumbing, Heating, Cooling & Electrical",
    challenge:
      "The application needed to serve multiple companies with different workflows and user perspectives while maintaining data isolation. It required enterprise-grade architecture to handle multi-tenant SaaS requirements while staying responsive across devices.",
    solution: [
      "Built with a .NET Core backend and React frontend for rapid development with enterprise stability.",
      "Designed an intuitive, clean user interface with obvious navigation and functions.",
      "Implemented automated test result evaluation, reducing manual processing time by nearly 100%.",
      "Architected multi-tenant data isolation for subscriber security and privacy.",
      "Optimized for responsiveness across all devices and screen sizes.",
    ],
    results: [
      { value: "160", label: "Companies subscribed in month one" },
      { value: "100", label: "Group and individual tests taken" },
    ],
    outcomes: [
      "Focus group validation confirmed the application is fast and responsive.",
      "Stakeholders rated the interface clean and easy to use.",
    ],
  },
  {
    slug: "college-navigator",
    title: "Navigation software for the college students",
    excerpt:
      "A virtual campus tour platform letting prospective students explore a coastal college remotely through 360° panoramas and interactive hotspots.",
    image: "/projects/navigation-software.webp",
    sourceUrl: "https://bitsorchestra.com/projects/college-navigator",
    services: ["Software development"],
    industries: ["Education"],
    technologies: ["React", "Typescript"],
    client: "Private educational institution near Boston",
    challenge:
      "Creating a user-friendly virtual navigation system that integrates 360° photography with interactive hotspots inside panoramic views, while ensuring a seamless experience across devices.",
    solution: [
      "Interactive panoramic views wrapped around 3D spheres for realistic immersive tours.",
      "360° product photography adapted to showcase campus with clickable information hotspots.",
      "Custom interactive campus map with pins revealing building details, photos, videos and program information.",
      "Clean, accessible interface with navigation tools and responsive design.",
      "Robust backend infrastructure managing high-resolution images for fast loads and smooth transitions.",
    ],
    results: [
      { value: "40%", label: "Increase in college website traffic" },
      { value: "30%", label: "Decrease in bounce rate on tour pages" },
      { value: "50%", label: "Increase in prospective student inquiries" },
      { value: "50+", label: "Countries reached" },
    ],
    outcomes: [],
  },
  {
    slug: "notification-center",
    title: "Software application development for a mortgage company",
    excerpt:
      "A React-powered mortgage comparison tool with real-time calculations and side-by-side product comparison, integrated with an existing mobile app.",
    image: "/projects/mortgage.webp",
    sourceUrl: "https://bitsorchestra.com/projects/notification-center",
    services: ["Software development"],
    industries: [],
    technologies: ["React"],
    client: "Mortgage Apps",
    challenge:
      "Create a unique mortgage tool from scratch and integrate it with an existing mobile app, while delivering a powerful yet simplified experience for finding mortgage options.",
    solution: [
      "Built a React-based platform with real-time filters and facets.",
      "Implemented smart side-by-side comparison functionality.",
      "Integrated with the existing mobile application ecosystem.",
      "Designed a user-centered interface with keystroke-level responsiveness.",
      "Created a real-time calculation engine for mortgage product discovery.",
    ],
    results: [],
    outcomes: [
      "Improved user experience with an intuitive interface.",
      "Enabled side-by-side mortgage product comparison.",
      "Real-time results updating as users enter information.",
    ],
  },
  {
    slug: "driver-dispatch",
    title: "Cargo tracking automation software for Cargo Bee",
    excerpt:
      "Automated cargo tracking and driver dispatch that replaced email-and-phone load management, growing load capacity tenfold without extra administrators.",
    image: "/projects/cargo-bee-(driver-dispatch).webp",
    sourceUrl: "https://bitsorchestra.com/projects/driver-dispatch",
    services: ["Software development", "Mobile app development"],
    industries: [],
    technologies: ["Firebase", "React Native"],
    client: "Cargo Bee",
    challenge:
      "Manual load tracking through email inboxes required managers to call drivers about profitable loads, creating delays and inaccuracies. The process was time-consuming and hindered scalability.",
    solution: [
      "Implemented Firebase with the Gmail API and Cloud Functions to automatically capture incoming loads from email.",
      "Developed a cross-platform React Native app for drivers to view available loads based on geolocation.",
      "Enabled drivers to apply for loads and receive push notifications about opportunities near pickup locations.",
      "Eliminated manual tracking and reduced phone-based communication between administrators and drivers.",
    ],
    results: [{ value: "10x", label: "Increase in load capacity" }],
    outcomes: [
      "Automated manual administrative steps and reduced communication overhead.",
      "Eliminated human errors in load tracking and assignment.",
    ],
  },
  {
    slug: "workplace-budget-tool",
    title: "Office visualization quote tool for furniture company",
    excerpt:
      "An office visualization and quoting tool letting furniture sales reps generate custom workspace proposals with space visualization and pricing in minutes.",
    image: "/projects/office-visualization-quote.webp",
    sourceUrl: "https://bitsorchestra.com/projects/workplace-budget-tool",
    services: ["Software development"],
    industries: [],
    technologies: ["React"],
    client: "Office Environments of New England / BKM Total Office and Business Interiors (NDA)",
    challenge:
      "The solution required complex budget calculation logic accounting for dozens of variables, because the client's highly configurable offering made accurate quotes slow and difficult to produce.",
    solution: [
      "Interactive floor plan visualization from layout through to decoration details.",
      "Real-time budget calculation and commercial proposal generation.",
      "Intuitive user journey allowing experimentation with configuration options.",
      "Email delivery of detailed pricing offers directly to clients.",
      "Streamlined sales process with rapid quote capabilities.",
    ],
    results: [],
    outcomes: [
      "Accelerated sales cycles and faster deal closing.",
      "Reduced proposal generation time from hours to minutes.",
    ],
  },
  {
    slug: "philadelphia-commercial",
    title: "Kentico MVC platform integration for ecommerce website of rug manufacturer",
    excerpt:
      "Philadelphia Commercial migrated from Kentico Portal Engine to Kentico MVC, modernizing the e-commerce platform with cleaner markup and stronger engagement.",
    image: "/projects/philadelphia.webp",
    sourceUrl: "https://bitsorchestra.com/projects/philadelphia-commercial",
    services: [],
    industries: [],
    technologies: ["Kentico"],
    client: "Shaw Industries Group, Inc. (Philadelphia Commercial)",
    challenge:
      "The migration required recreating numerous Portal Engine features absent from Kentico MVC, including web parts and widgets the client relied on, while still taking advantage of the newer platform's capabilities.",
    solution: [
      "Leveraged Kentico MVC's superior HTML output control to build cleaner, lighter markup.",
      "Developed custom widgets to replace missing Portal Engine functionality.",
      "Implemented an integrated content management system with the product catalog.",
      "Connected internal product inventory and image service integrations.",
      "Configured a web farm setup for scalability.",
    ],
    results: [
      { value: "17%", label: "New user increase" },
      { value: "11%", label: "Overall user growth" },
      { value: "18%", label: "Session increase" },
      { value: "2x", label: "Page views" },
    ],
    outcomes: ["Bounce rate fell from 42% to 1.03%."],
  },
  {
    slug: "mortgage-calculator",
    title: "Mortgage quote tool development for financial institution",
    excerpt:
      "A mobile-first mortgage calculator enabling quick loan estimates for customers and loan officers, with automated manager notifications on every request.",
    image: "/projects/mortgage.webp",
    sourceUrl: "https://bitsorchestra.com/projects/mortgage-calculator",
    services: ["Software development"],
    industries: [],
    technologies: ["React"],
    challenge:
      "The financial institution needed to give users and sales representatives a quick, user-friendly loan and mortgage calculator to increase conversion rates and expedite the sales process.",
    solution: [
      "Built a mobile-first calculator letting end users estimate mortgage costs from their financial situation and terms.",
      "Enabled refinancing option estimates with integrated application submission.",
      "Automated manager notifications and stored requests in the client's internal system for immediate processing.",
      "Designed an efficient UI keeping key decision-making information on a single screen.",
      "Provided loan officers tools to quote mortgages and store or review client history.",
    ],
    results: [],
    outcomes: [
      "Faster client inquiry processing with centralized data storage.",
      "Increased sales and engagement with new clients.",
    ],
  },
  {
    slug: "eurobank-cyprus",
    title: "Digital transformation of Eurobank Cyprus",
    excerpt:
      "Eurobank Cyprus redesigned its banking website on Kentico, adding financial calculators and a compliance-ready, load-balanced infrastructure.",
    image: "/projects/eurobank-cyprus.webp",
    sourceUrl: "https://bitsorchestra.com/projects/eurobank-cyprus",
    services: ["AI/ML"],
    industries: [],
    technologies: ["Kentico", ".NET"],
    client: "Eurobank Cyprus (Eurobank Group)",
    challenge:
      "The bank needed to migrate from a legacy website to a mature CMS supporting advanced content management, multimedia, dynamic navigation and efficient page loading — on compliance-ready .NET, IIS and MS SQL Server infrastructure running a secure, load-balanced system.",
    solution: [
      "Implemented Kentico CMS for secure, scalable content management.",
      "Built financial online tools including a loan calculator, currency converter and IBAN calculator.",
      "Configured web farm architecture for high availability.",
      "Enabled multilingual content support for international operations.",
      "Designed an editor-friendly interface reducing developer dependency.",
    ],
    results: [{ value: "53%", label: "Traffic increase" }],
    outcomes: [
      "Better site performance and improved user experience.",
      "Compliance and marketing requirements both accommodated.",
    ],
  },
  {
    slug: "trutech-tracker",
    title: "Career Growth Tracker — TruTech",
    excerpt:
      "A career development tracking SaaS replacing spreadsheets with centralized data for technician advancement, cutting supervisor effort by 40%.",
    image: "/projects/career-growth-tracker-trutech.webp",
    sourceUrl: "https://bitsorchestra.com/projects/trutech-tracker",
    services: ["Software development"],
    industries: [],
    technologies: [".NET Core", "React"],
    client: "Hiller Plumbing, Heating, Cooling & Electrical",
    challenge:
      "The team had to build a multi-tenant SaaS supporting diverse user workflows while isolating subscriber data, migrate from legacy Excel processes, automate progress tracking across enrollment thresholds, and create an intensive interface accessible from any device.",
    solution: [
      "Technicians self-enroll for promotion eligibility based on their current position.",
      "Automated notifications alert supervisors of mentee status changes.",
      "Centralized dashboard filters mentee data by multiple criteria with progress visibility.",
      "Multi-tenant architecture isolates data across company subscribers.",
      "Learning materials and goal-setting capabilities for mentors and mentees.",
    ],
    results: [{ value: "40%", label: "Reduction in supervisor time and effort" }],
    outcomes: [
      "Eliminated hundreds of spreadsheets for enrollments and thousands of historical records.",
      "Any historical record is retrievable quickly inside the application.",
    ],
  },
  {
    slug: "pj-library-ua",
    title: "Content and user management system for PJ Library",
    excerpt:
      "A content and user management system letting the PJ Library program distribute free books to Jewish families in Ukraine, with automated mailing workflows.",
    image: "/projects/pj-library.webp",
    sourceUrl: "https://bitsorchestra.com/projects/pj-library-ua",
    services: ["Web development"],
    industries: [],
    technologies: ["Kentico", ".NET"],
    client: "Harold Grinspoon Foundation",
    challenge:
      "The foundation needed to launch the PJ Library program in Ukraine with a system that could manage user registrations, process family data, generate mailing lists and automate book delivery while minimizing manual errors.",
    solution: [
      "User registration and signup functionality for families to enroll children in the program.",
      "Automated data processing to generate mailing lists from registrations.",
      "Integration with carrier systems to eliminate manual entry errors.",
      "Automated mailing and delivery workflows for subscribers.",
      "Reporting and analytics dashboards for program insights.",
    ],
    results: [{ value: "2,500+", label: "Families subscribed within one year" }],
    outcomes: [
      "Thousands of Jewish families gained access to free, high-quality books.",
      "The program launched successfully in Ukraine.",
    ],
  },
  {
    slug: "vet-pharma-sales-tool",
    title: "Vet pharma budgeting tool",
    excerpt:
      "A sales pricing tool letting veterinary pharmaceutical managers calculate competitive prices and process orders across complex medical component dependencies.",
    image: "/projects/vet-pharma-budgeting-tool.webp",
    sourceUrl: "https://bitsorchestra.com/projects/vet-pharma-sales-tool",
    services: ["Software development"],
    industries: [],
    technologies: ["Angular"],
    challenge:
      "The application had to handle strict dependencies between medical components with complex compatibility requirements, and intricate price calculations where individual component costs varied based on their combination with other components.",
    solution: [
      "Analyzed cart contents to suggest compatible components.",
      "Built a complex price calculation pipeline accounting for inter-dependencies.",
      "Provided sales reps with precise pricing and detailed price breakdowns.",
      "Enabled quick turnaround on client pricing requests.",
    ],
    results: [],
    outcomes: [
      "Increased sales through quick turnaround and a competitive pricing model.",
      "Strong competitive advantage from a more sophisticated pricing strategy.",
    ],
  },
  {
    slug: "tour-booking-module",
    title: "Custom tour booking system for an Australian recycling facility",
    excerpt:
      "An Australian recycling facility replaced phone and email tour bookings with an online self-service module on Kentico, processing 500+ bookings in six months.",
    image: "/projects/tour-booking-system.webp",
    sourceUrl: "https://bitsorchestra.com/projects/tour-booking-module",
    services: ["Web development", "UI/UX design"],
    industries: [],
    technologies: ["Kentico", ".NET"],
    client: "Australian regional recycling and resource recovery facility",
    duration: "8 weeks",
    challenge:
      "The facility managed tour reservations through phone, email and spreadsheets, requiring staff to manually verify availability across four tour types with complex scheduling constraints — shared spaces, capacity limits, holidays and linked sessions that could conflict. Administrative work consumed up to 12 hours weekly during peak periods.",
    solution: [
      "Custom Kentico 12 extension with a rules-based .NET scheduling service.",
      "Public booking interface showing real-time availability with automatic conflict prevention.",
      "Admin dashboard for managing recurring tours, capacity, closures and dependencies.",
      "Automatic confirmation emails and centralized booking data storage.",
      "Server-side validation, role-based access control and audit logging.",
    ],
    results: [
      { value: "500+", label: "Bookings in the first six months" },
      { value: "70%", label: "Reduction in administration time" },
      { value: "1m 48s", label: "Average booking completion time" },
      { value: "Zero", label: "Double-bookings in first 60 days" },
    ],
    outcomes: [],
  },
  {
    slug: "sales-price-book",
    title: "Sales pricing catalogue for residential and repair company",
    excerpt:
      "A mobile-friendly sales catalog letting field managers prepare filtered product offers, working offline in low-connectivity locations.",
    image: "/projects/sales-pricing-catalogue.webp",
    sourceUrl: "https://bitsorchestra.com/projects/sales-price-book",
    services: ["Software development"],
    industries: [],
    technologies: ["Angular", "ASP.NET MVC"],
    client:
      "Hiller, residential and commercial service provider across Tennessee, Southern Kentucky and Northern Alabama",
    challenge:
      "The client needed to update the product catalog from a spreadsheet, manage which columns were filterable, and keep the app functional in locations with low or no internet connection.",
    solution: [
      "Read data directly from the Excel file with backend caching instead of implementing a database.",
      "Defined filterable columns within the Excel file for easy admin updates.",
      "Implemented offline mode using the Angular Service Worker for internet-independent operation.",
    ],
    results: [],
    outcomes: [
      "Faster offer preparation for in-field sales managers.",
      "Increased successfully closed sales deals.",
      "Growth in client satisfaction.",
    ],
  },
  {
    slug: "org-chart",
    title: "Employee directory software for manufacturing company",
    excerpt:
      "A web application reflecting an entire company org structure of 20,000+ employees, with type-ahead search, in-app contact and a facilities directory.",
    image: "/projects/employee-directory-software.webp",
    sourceUrl: "https://bitsorchestra.com/projects/org-chart",
    services: [],
    industries: [],
    technologies: ["Kentico", ".NET"],
    challenge:
      "Keeping employee data current across 20,000+ staff required continuous synchronization with the corporate Active Directory, where all employee information is maintained.",
    solution: [
      "Web application displaying the complete organizational structure of 20,000+ employees.",
      "Type-ahead search for quick employee discovery.",
      "Easy navigation up and down organizational structure branches.",
      "In-app emailing and calling capabilities.",
      "Company facilities directory with directions.",
    ],
    results: [{ value: "20K+", label: "Employees in the directory" }],
    outcomes: [
      "Better understanding of organization structure and quicker navigation to associates.",
      "Improved access to employee contact information.",
      "Facilities directory saving employee time on locating sites and directions.",
    ],
  },
  {
    slug: "site-builder",
    title: "Website builder templated solution for enterprise manufacturing client",
    excerpt:
      "An enterprise site builder letting a dealer network manage many promotional websites from one platform while keeping brand consistency across locations.",
    image: "/projects/website-builder-templated-solution.webp",
    sourceUrl: "https://bitsorchestra.com/projects/site-builder",
    services: [],
    industries: [],
    technologies: ["Kentico", ".NET"],
    challenge:
      "The enterprise manufacturing client needed all dealer promotional websites managed in one location and easily updated by non-technical users. Managing a dealer network where every location requires its own site, while keeping content consistent, presents significant challenges.",
    solution: [
      "Multiple templated site designs available with different color themes.",
      "Additional features including product catalog and custom domain options.",
      "Centralized content production shared across all dealer sites.",
      "Built on Kentico, .NET, React and SASS.",
      "Reduced maintenance costs through a build-once, reuse-across-sites approach.",
    ],
    results: [],
    outcomes: [
      "Saves money on marketing through centralized content production.",
      "Ensures consistent information across all dealer websites.",
      "Significantly reduces maintenance and feature development costs.",
    ],
  },
  {
    slug: "rug-calculator",
    title: "Custom rug builder for manufacturer from USA",
    excerpt:
      "A custom rug configurator letting users design personalized area rugs with dynamic pricing, lifting custom rug sales by 37%.",
    image: "/projects/custom-rug-builder.webp",
    sourceUrl: "https://bitsorchestra.com/projects/rug-calculator",
    services: ["Software development"],
    industries: [],
    technologies: ["Angular", "ASP.NET MVC"],
    challenge:
      "The team had to implement a complex price calculation algorithm handling numerous rug configurations — material, size, shape, backing and edges — and design an interface that motivated creative customization over buying pre-built products.",
    solution: [
      "Microsoft .NET backend for a flexible, extensible, customizable architecture.",
      "AngularJS frontend enabling a step-by-step customer journey with rug visualization.",
      "Lightweight, responsive web application functioning across all devices.",
      "Dynamic configuration injection for pricing logic adjustments.",
    ],
    results: [{ value: "37%", label: "Increase in custom area rug sales" }],
    outcomes: [
      "New customer capabilities and experiences.",
      "Staff time released as clients independently built custom rugs.",
    ],
  },
  {
    slug: "current-choice",
    title: "Current Choice: online marketplace for electricity suppliers",
    excerpt:
      "An online marketplace letting consumers compare electricity suppliers and switch plans through bill-to-bill analysis and real-time consumption data.",
    image: "/projects/current-choice-online-marketplace.webp",
    sourceUrl: "https://bitsorchestra.com/projects/current-choice",
    services: ["Software development", "Mobile app development"],
    industries: [],
    technologies: ["Kentico", "ASP.NET MVC"],
    client: "Current Choice",
    challenge:
      "The platform had to integrate multiple third-party APIs from suppliers and utilities to retrieve consumption data, available plans and pricing, and to process switches — while managing location-based availability constraints for suppliers and plans across service areas.",
    solution: [
      "Unified multiple third-party service interfaces behind a single generic interface.",
      "Implemented unique adapters for each third-party service.",
      "Used dependency injection and design patterns for a flexible, extendable architecture.",
      "Moved the entire switching process online to reduce manual handling.",
    ],
    results: [{ value: "30–45%", label: "Yearly growth over several years" }],
    outcomes: [
      "Increased revenue from residential switches to other suppliers and utilities.",
      "Significantly reduced man-hours needed to handle the switching process.",
    ],
  },
];

/** Keeps the canonical source-site ordering, dropping options nothing is tagged with. */
function usedOptions(
  canonical: readonly string[],
  pick: (study: Project) => string[],
): readonly string[] {
  const used = new Set(PROJECTS.flatMap(pick));
  return canonical.filter((option) => used.has(option));
}

export const SERVICES = usedOptions(ALL_SERVICES, (c) => c.services);
export const INDUSTRIES = usedOptions(ALL_INDUSTRIES, (c) => c.industries);
export const TECHNOLOGIES = usedOptions(ALL_TECHNOLOGIES, (c) => c.technologies);

export function getProject(slug: string) {
  return PROJECTS.find((c) => c.slug === slug);
}
