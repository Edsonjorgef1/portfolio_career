import { SectionTitle } from "@/components/layout/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import type { Locale } from "@/types/portfolio";

const govtechItems = [
  {
    tagPt: "GovTech / Energia",
    tagEn: "GovTech / Energy",
    namePt: "FUNAE – Sistema GRM",
    nameEn: "FUNAE – GRM Platform",
    descPt:
      "Plataforma institucional de mecanismo de queixas para o Fundo Nacional de Energia de Moçambique, financiada pela Enabel (Bélgica).",
    descEn:
      "Institutional grievance mechanism platform for the Mozambique National Energy Fund, funded by Enabel (Belgium).",
  },
  {
    tagPt: "GovTech / Portal",
    tagEn: "GovTech / Portal",
    namePt: "Município do Dondo",
    nameEn: "Município do Dondo",
    descPt:
      "Portal governamental oficial em produção desde 2019, com publicação de serviços municipais, editais e SLAs definidos.",
    descEn:
      "Official government portal in production since 2019, delivering municipal services, notices, and defined SLAs.",
  },
  {
    tagPt: "CivicTech / Justiça",
    tagEn: "CivicTech / Justice",
    namePt: "JURIS – Acesso à Justiça",
    nameEn: "JURIS – Access to Justice",
    descPt:
      "App cívica com 20.000+ downloads: lei moçambicana simplificada, denúncias e encaminhamento de casos. Parceria com o Gabinete Central e o Gabinete Provincial de Combate Contra a Corrupção de Sofala.",
    descEn:
      "Civic app with 20,000+ downloads: simplified Mozambican law, complaint mechanisms, and case routing. Partnership with the Central and Sofala Provincial Anti-Corruption Bureaus.",
  },
  {
    tagPt: "HealthTech / GovTech",
    tagEn: "HealthTech / GovTech",
    namePt: "Consultare – Aprovação MISAU",
    nameEn: "Consultare – MISAU Approved",
    descPt:
      "Aplicação de saúde com aprovação oficial do Ministério da Saúde de Moçambique (MISAU), com informação sobre doenças comuns, primeiros socorros e back-office PT/EN.",
    descEn:
      "Health app with official approval from Mozambique's Ministry of Health (MISAU), covering common diseases, first aid, with back-office and PT/EN website.",
  },
];

export function GovTechSection({ locale }: { locale: Locale }) {
  const isEn = locale === "en";

  return (
    <section id="govtech" className="section-shell section-spacing">
      <Reveal>
        <SectionTitle
          eyebrow={isEn ? "Government & Civic Technology" : "Tecnologia Governamental & Cívica"}
          title={isEn ? "GovTech Track Record" : "Experiência em GovTech"}
          description={
            isEn
              ? "Institutional-grade technology for government agencies, civic organisations, and public-interest platforms across Mozambique — from grievance redress mechanisms for national energy funds to civic justice apps with 20,000+ users."
              : "Tecnologia de nível institucional para agências governamentais, organizações cívicas e plataformas de interesse público em Moçambique — desde mecanismos de queixas para fundos nacionais de energia a aplicações cívicas com mais de 20.000 utilizadores."
          }
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {govtechItems.map((item, i) => (
          <Reveal key={item.namePt} delay={i * 0.08}>
            <GlassCard className="p-5 h-full flex flex-col gap-3">
              <span className="inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {isEn ? item.tagEn : item.tagPt}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-base font-semibold text-white">
                  {isEn ? item.nameEn : item.namePt}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {isEn ? item.descEn : item.descPt}
                </p>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
