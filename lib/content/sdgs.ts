import type { L, Locale } from "@/types/content";

/**
 * UN Sustainable Development Goals (ODS), with the official goal titles
 * and the official UN colour per goal.
 */
export const SDGS: Record<number, { title: L; colour: string }> = {
  1: {
    title: { pt: "Erradicação da Pobreza", en: "No Poverty" },
    colour: "#E5243B",
  },
  2: {
    title: { pt: "Fome Zero e Agricultura Sustentável", en: "Zero Hunger" },
    colour: "#DDA63A",
  },
  3: {
    title: { pt: "Saúde e Bem-Estar", en: "Good Health and Well-being" },
    colour: "#4C9F38",
  },
  4: {
    title: { pt: "Educação de Qualidade", en: "Quality Education" },
    colour: "#C5192D",
  },
  5: {
    title: { pt: "Igualdade de Género", en: "Gender Equality" },
    colour: "#FF3A21",
  },
  6: {
    title: { pt: "Água Potável e Saneamento", en: "Clean Water and Sanitation" },
    colour: "#26BDE2",
  },
  7: {
    title: { pt: "Energia Acessível e Sustentável", en: "Affordable and Clean Energy" },
    colour: "#FCC30B",
  },
  8: {
    title: { pt: "Trabalho Digno e Crescimento Económico", en: "Decent Work and Economic Growth" },
    colour: "#A21942",
  },
  9: {
    title: { pt: "Indústria, Inovação e Infra-estruturas", en: "Industry, Innovation and Infrastructure" },
    colour: "#FD6925",
  },
  10: {
    title: { pt: "Redução das Desigualdades", en: "Reduced Inequalities" },
    colour: "#DD1367",
  },
  11: {
    title: { pt: "Cidades e Comunidades Sustentáveis", en: "Sustainable Cities and Communities" },
    colour: "#FD9D24",
  },
  12: {
    title: { pt: "Consumo e Produção Responsáveis", en: "Responsible Consumption and Production" },
    colour: "#BF8B3E",
  },
  13: {
    title: { pt: "Acção Climática", en: "Climate Action" },
    colour: "#3F7E44",
  },
  14: {
    title: { pt: "Vida Marinha", en: "Life Below Water" },
    colour: "#0A97D9",
  },
  15: {
    title: { pt: "Vida Terrestre", en: "Life on Land" },
    colour: "#56C02B",
  },
  16: {
    title: { pt: "Paz, Justiça e Instituições Eficazes", en: "Peace, Justice and Strong Institutions" },
    colour: "#00689D",
  },
  17: {
    title: { pt: "Parcerias para a Implementação dos Objectivos", en: "Partnerships for the Goals" },
    colour: "#19486A",
  },
};

/** Official UN icon for a goal (PT from UNRIC, EN from sdgs.un.org), under public/sdg. */
export function sdgIcon(goal: number, locale: Locale): string {
  return `/sdg/${locale}/${String(goal).padStart(2, "0")}.webp`;
}
