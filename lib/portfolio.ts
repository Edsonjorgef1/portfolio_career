import { existsSync } from "node:fs";
import path from "node:path";

import { portfolioData } from "@/lib/portfolioData";
import type { DeploymentItem, Locale, ProjectItem } from "@/types/portfolio";

export type CaseStudySource =
  | { kind: "project"; item: ProjectItem }
  | { kind: "deployment"; item: DeploymentItem };

export function getLocalizedValue<T>(locale: Locale, pt: T, en: T): T {
  return locale === "pt" ? pt : en;
}

export function getNavigation(locale: Locale) {
  return portfolioData.navigation[locale];
}

export function getFeaturedProjects() {
  return portfolioData.featuredProjects.items.filter((item) => item.featured);
}

export function getProjectBySlug(slug: string): CaseStudySource | undefined {
  const project = portfolioData.featuredProjects.items.find((item) => item.slug === slug);
  if (project) {
    return { kind: "project", item: project };
  }

  const deployment = portfolioData.freelanceDeployments.items.find((item) => item.slug === slug);
  if (deployment) {
    return { kind: "deployment", item: deployment };
  }

  return undefined;
}

export function getAllCaseStudySlugs() {
  return [
    ...portfolioData.featuredProjects.items.map((item) => item.slug),
    ...portfolioData.freelanceDeployments.items
      .filter((item) => item.slug === "hospitality-network-deployments")
      .map((item) => item.slug),
  ];
}

export function assetExists(...segments: string[]) {
  return existsSync(path.join(process.cwd(), "public", ...segments));
}

function resolveAssetPath(folder: string, baseName: string) {
  const jpgFile = `${baseName}.jpg`;
  if (assetExists(folder, jpgFile)) {
    return `/${folder}/${jpgFile}`;
  }

  const svgFile = `${baseName}.svg`;
  if (assetExists(folder, svgFile)) {
    return `/${folder}/${svgFile}`;
  }

  return null;
}

export function getProfileImage() {
  return resolveAssetPath("profile", "profile");
}

export function getProjectImage(slug: string) {
  return resolveAssetPath("projects", slug);
}

export function getCvFile() {
  return assetExists("Edson-Francisco-CV.pdf") ? "/Edson-Francisco-CV.pdf" : null;
}

export function getCaseStudyContent(source: CaseStudySource, locale: Locale) {
  if (source.kind === "project") {
    const item = source.item;
    const highlights = locale === "pt" ? item.highlightsPt : item.highlightsEn;
    const role = locale === "pt" ? item.rolePt : item.roleEn;
    const period = locale === "pt" ? item.periodPt : item.periodEn;
    const category = locale === "pt" ? item.categoryPt : item.categoryEn;
    const summary = locale === "pt" ? item.summaryPt : item.summaryEn;

    return {
      title: item.name,
      eyebrow: category,
      role,
      period,
      summary,
      highlights,
      technologies: item.stack,
      externalLink: item.link,
      sections: {
        context:
          locale === "pt"
            ? `${item.name} foi conduzido num contexto em que a operação exigia mais consistência, visibilidade e capacidade de entrega tecnológica. O trabalho exigiu coordenação entre objectivos institucionais, utilizadores e execução técnica.`
            : `${item.name} was delivered in a context where operations required stronger consistency, visibility, and technical delivery capacity. The engagement demanded coordination across institutional goals, end users, and execution teams.`,
        solution:
          locale === "pt"
            ? `A solução combinou ${highlights.slice(0, 2).join(" e ").toLowerCase()}, com foco em execução sustentável, qualidade operacional e adopção prática. O trabalho foi estruturado para garantir que tecnologia e operação evoluíssem em conjunto.`
            : `The solution combined ${highlights.slice(0, 2).join(" and ").toLowerCase()}, with emphasis on sustainable execution, operational quality, and practical adoption. The work was structured so technology and operations could evolve together.`,
        myRole:
          locale === "pt"
            ? `Actuei como ${role}, assumindo responsabilidade por decisões técnicas, coordenação de entrega e alinhamento entre requisitos, solução e resultados esperados.`
            : `I worked as ${role}, taking ownership of technical decisions, delivery coordination, and alignment between requirements, solution design, and expected outcomes.`,
        impact:
          locale === "pt"
            ? `O impacto concentrou-se em acelerar adopção, aumentar previsibilidade operacional e melhorar a capacidade institucional de sustentar a solução ao longo do tempo, com entregas orientadas a resultados concretos.`
            : `The impact centered on accelerating adoption, increasing operational predictability, and improving the institution's ability to sustain the solution over time, with delivery tied to concrete outcomes.`,
      },
    };
  }

  const item = source.item;
  const bullets = locale === "pt" ? item.bulletsPt : item.bulletsEn;
  const role = locale === "pt" ? item.rolePt : item.roleEn;
  const title = locale === "pt" ? item.namePt : item.nameEn;
  const summary = locale === "pt" ? item.summaryPt : item.summaryEn;

  return {
    title,
    eyebrow: locale === "pt" ? "Implementação Técnica" : "Technical Deployment",
    role,
    period: item.clients.join(" · "),
    summary,
    highlights: bullets,
    technologies: item.stack,
    externalLink: undefined,
    sections: {
      context:
        locale === "pt"
          ? `Este trabalho respondeu à necessidade de conectividade estável, cobertura eficiente e suporte técnico confiável em ambientes com exigência operacional contínua.`
          : `This engagement addressed the need for stable connectivity, efficient coverage, and reliable technical support in environments with ongoing operational demands.`,
      solution:
        locale === "pt"
          ? `A entrega combinou desenho de rede, instalação, configuração e optimização em campo, garantindo cobertura adequada, segmentação e facilidade de manutenção.`
          : `The solution combined network design, installation, configuration, and on-site optimization to ensure reliable coverage, segmentation, and maintainability.`,
      myRole:
        locale === "pt"
          ? `Actuei como ${role}, liderando diagnóstico técnico, desenho da solução, implementação e suporte pós-activação para os clientes envolvidos.`
          : `I acted as ${role}, leading technical assessment, solution design, implementation, and post-activation support for the client environments.`,
      impact:
        locale === "pt"
          ? `O resultado foi uma infraestrutura mais estável e adaptada ao contexto de uso, melhorando experiência de conectividade, continuidade operacional e capacidade de resolução de falhas.`
          : `The result was a more stable infrastructure adapted to the usage context, improving connectivity experience, operational continuity, and troubleshooting capability.`,
    },
  };
}
