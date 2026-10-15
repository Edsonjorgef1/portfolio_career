import type { CategoryId, L } from "@/types/content";

export const CATEGORIES: { id: CategoryId; name: L; description: L }[] = [
  {
    id: "offline-first",
    name: { pt: "Sistemas de campo offline-first", en: "Offline-first field systems" },
    description: {
      pt: "Apps e APIs que funcionam sem rede e sincronizam quando a ligação volta.",
      en: "Apps and APIs that work without a network and sync when the connection returns.",
    },
  },
  {
    id: "agritech",
    name: { pt: "AgriTech e rastreabilidade", en: "AgriTech & traceability" },
    description: {
      pt: "Gestão de produtores, compras no campo e rastreabilidade de cadeias de valor.",
      en: "Farmer management, field purchasing and value-chain traceability.",
    },
  },
  {
    id: "saas",
    name: { pt: "SaaS multi-empresa", en: "Multi-tenant SaaS" },
    description: {
      pt: "Produtos partilhados por várias empresas, com isolamento de dados, planos e faturação.",
      en: "Products shared by many companies, with data isolation, plans and billing.",
    },
  },
  {
    id: "govtech",
    name: { pt: "GovTech e mecanismos de queixa", en: "GovTech & grievance mechanisms" },
    description: {
      pt: "Plataformas para instituições públicas: queixas, informação legal e portais.",
      en: "Platforms for public institutions: grievances, legal information and portals.",
    },
  },
  {
    id: "health",
    name: { pt: "Saúde digital", en: "Digital health" },
    description: {
      pt: "Referência de pacientes, informação de saúde e primeiros socorros.",
      en: "Patient referral, health information and first aid.",
    },
  },
  {
    id: "community",
    name: { pt: "Comunidades e informação", en: "Communities & information" },
    description: {
      pt: "Conteúdo e serviços para igrejas, organizações comunitárias e doadores.",
      en: "Content and services for churches, community organisations and donors.",
    },
  },
  {
    id: "reliability",
    name: { pt: "Fiabilidade, DevOps e legado", en: "Reliability, DevOps & legacy" },
    description: {
      pt: "CI/CD, auditorias de segurança, testes e manutenção de sistemas herdados.",
      en: "CI/CD, security audits, testing and maintenance of inherited systems.",
    },
  },
  {
    id: "hospitality",
    name: { pt: "Hotelaria, restauração e redes", en: "Hospitality, restaurants & networks" },
    description: {
      pt: "Menus digitais, gestão de hóspedes e ginásios, e redes Wi-Fi para hotéis.",
      en: "Digital menus, guest and gym management, and Wi-Fi networks for hotels.",
    },
  },
];

/** Canonical technology names used by the gallery filter. */
export const TECH_NAMES = [
  "Laravel",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "PostGIS",
  "Vue",
  "Inertia.js",
  "Livewire",
  "Tailwind CSS",
  "Bootstrap",
  "Angular",
  "Ionic",
  "Capacitor",
  "Electron",
  "Next.js",
  "React",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "Prisma",
  "Supabase",
  "Flutter",
  "Quasar",
  "LoopBack",
  "Docker",
  "GitHub Actions",
  "Azure DevOps",
  "Coolify",
  "Twilio",
  "WhatsApp Cloud API",
  "Firebase",
  "WebSockets",
  "Pusher",
  "M-Pesa",
  "Bash",
  "WordPress",
  "HTML/CSS",
  "Networking",
] as const;

export const STATUS_LABEL: Record<string, L> = {
  production: { pt: "Em produção", en: "In production" },
  development: { pt: "Em desenvolvimento", en: "In development" },
  archived: { pt: "Arquivado", en: "Archived" },
  prototype: { pt: "Protótipo", en: "Prototype" },
  concept: { pt: "Conceito", en: "Concept" },
};

export const AUTHORSHIP_LABEL: Record<string, L> = {
  lead: { pt: "Autor principal", en: "Lead author" },
  main: { pt: "Maior contribuidor", en: "Main contributor" },
  contributor: { pt: "Contribuição definida", en: "Defined contribution" },
  team: { pt: "Trabalho de equipa", en: "Team project" },
  consulting: { pt: "Consultoria / implementação", en: "Consulting / implementation" },
};

/** Decorative accent per area (used only in cover backgrounds, never for text). */
export const CATEGORY_ACCENT: Record<CategoryId, string> = {
  "offline-first": "56,189,248",
  agritech: "52,211,153",
  saas: "167,139,250",
  govtech: "251,191,36",
  health: "251,113,133",
  community: "45,212,191",
  reliability: "129,140,248",
  hospitality: "251,146,60",
};
