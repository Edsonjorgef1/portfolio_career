import type { L, Locale, Project } from "@/types/content";

export const LOCALES: Locale[] = ["pt", "en"];

export function t(locale: Locale, value: L) {
  return value[locale];
}

export const UI = {
  skip: { pt: "Saltar para o conteúdo", en: "Skip to content" },
  nav: {
    work: { pt: "Projectos", en: "Work" },
    about: { pt: "Sobre", en: "About" },
    experience: { pt: "Experiência", en: "Experience" },
    now: { pt: "Agora", en: "Now" },
    contact: { pt: "Contacto", en: "Contact" },
  },
  langSwitch: { pt: "Read in English", en: "Ler em português" },
  cv: { pt: "Currículo (PDF)", en: "Résumé (PDF)" },
  featured: {
    title: { pt: "Projectos em destaque", en: "Featured work" },
    intro: {
      pt: "Plataformas que lidero e mantenho em produção, e dois casos de sucesso com agronegócios: do problema às decisões que aguentaram o terreno.",
      en: "Platforms I lead and keep in production, plus two success stories with agribusinesses: from the problem to the decisions that held up in the field.",
    },
    all: { pt: "Ver todos os projectos ({n})", en: "See all projects ({n})" },
    read: { pt: "Ler o estudo de caso", en: "Read the case study" },
  },
  gallery: {
    title: { pt: "Todos os projectos", en: "All projects" },
    metaDescription: {
      pt: "Todos os projectos de Edson Francisco, filtráveis por área e por tecnologia.",
      en: "All of Edson Francisco's projects, filterable by area and technology.",
    },
    intro: {
      pt: "Filtre por área ou por tecnologia. Cada projecto descreve o problema, a solução, as decisões técnicas e o meu papel.",
      en: "Filter by area or by technology. Each project describes the problem, the solution, the technical decisions and my role.",
    },
    all: { pt: "Todas as áreas", en: "All areas" },
    tech: { pt: "Tecnologia", en: "Technology" },
    anyTech: { pt: "Qualquer tecnologia", en: "Any technology" },
    clear: { pt: "Limpar filtros", en: "Clear filters" },
    count: { pt: "{n} projectos", en: "{n} projects" },
    countOne: { pt: "1 projecto", en: "1 project" },
    empty: { pt: "Nenhum projecto com estes filtros.", en: "No projects match these filters." },
    areaLabel: { pt: "Filtrar por área", en: "Filter by area" },
  },
  openSource: {
    title: { pt: "Open source e ferramentas", en: "Open source & tooling" },
    intro: {
      pt: "Pacotes, templates e contribuições fora dos produtos.",
      en: "Packages, templates and contributions outside the products.",
    },
  },
  experience: { title: { pt: "Experiência", en: "Experience" } },
  about: {
    title: { pt: "Sobre", en: "About" },
    languages: { pt: "Línguas", en: "Languages" },
    education: { pt: "Formação", en: "Education" },
    awards: { pt: "Reconhecimentos", en: "Recognition" },
    certifications: { pt: "Certificações ({n})", en: "Certifications ({n})" },
  },
  contact: {
    title: { pt: "Contacto", en: "Contact" },
    body: {
      pt: "Aberto a projectos remotos, consultoria e funções de engenharia. A forma mais rápida é email.",
      en: "Open to remote projects, consulting and engineering roles. Email is the fastest way.",
    },
  },
  project: {
    back: { pt: "Todos os projectos", en: "All projects" },
    problem: { pt: "Problema", en: "Problem" },
    solution: { pt: "Solução", en: "Solution" },
    decisions: { pt: "Decisões técnicas", en: "Technical decisions" },
    screens: { pt: "Imagens", en: "Images" },
    flow: { pt: "Etapas digitalizadas no FAMS", en: "Stages digitised in FAMS" },
    tech: { pt: "Tecnologias", en: "Technologies" },
    results: { pt: "Resultados verificáveis", en: "Verifiable results" },
    learnings: { pt: "O que aprendi", en: "What I learned" },
    links: { pt: "Links", en: "Links" },
    role: { pt: "Papel", en: "Role" },
    period: { pt: "Período", en: "Period" },
    status: { pt: "Estado", en: "Status" },
    authorship: { pt: "Autoria", en: "Authorship" },
    client: { pt: "Cliente", en: "Client" },
    partners: { pt: "Parceiros", en: "Partners" },
    openImage: { pt: "Abrir imagem em tamanho real", en: "Open full-size image" },
    next: { pt: "Projecto seguinte", en: "Next project" },
    prev: { pt: "Projecto anterior", en: "Previous project" },
    noScreens: {
      pt: "Sem capturas publicáveis: o sistema precisa de dados reais para correr ou já não está online.",
      en: "No publishable screens: the system needs real data to run or is no longer online.",
    },
  },
  now: {
    title: { pt: "Agora", en: "Now" },
    intro: {
      pt: "No que estou a trabalhar neste momento. Cada ponto corresponde a actividade recente nos repositórios.",
      en: "What I'm working on right now. Each item matches recent activity in the repositories.",
    },
    updated: { pt: "Actualizado a", en: "Updated on" },
  },
  footer: {
    built: {
      pt: "Construído com Next.js. Números verificáveis; capturas sem dados pessoais.",
      en: "Built with Next.js. Numbers are verifiable; screenshots contain no personal data.",
    },
  },
} as const;

export function fill(template: string, n: number) {
  return template.replace("{n}", String(n));
}

export function projectHref(locale: Locale, slug: string) {
  return `/${locale}/projects/${slug}`;
}

export function nameOf(project: Pick<Project, "name">, locale: Locale) {
  return typeof project.name === "string" ? project.name : project.name[locale];
}
