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
      "Aplicação cívica co-criada com 20.000+ downloads: lei moçambicana simplificada, denúncias e encaminhamento de casos.",
    descEn:
      "Civic app co-created with 20,000+ downloads: simplified Mozambican law, complaint mechanisms, and case routing.",
  },
  {
    tagPt: "GovTech / Dados",
    tagEn: "GovTech / Data",
    namePt: "Analytics para Bibliotecas",
    nameEn: "Library Analytics System",
    descPt:
      "Sistema de dados para monitorar acesso a bibliotecas públicas, com relatórios mensais automáticos para liderança institucional.",
    descEn:
      "Data system monitoring public library access with automated monthly reports for institutional decision-making.",
  },
];

export function GovTechSection({ locale }: { locale: Locale }) {
  const isEn = locale === "en";

  return (
    <section id="govtech" className="section-shell section-spacing">
      <Reveal>
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            {isEn ? "Government & Civic Technology" : "Tecnologia Governamental & Cívica"}
          </p>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            {isEn ? "GovTech Track Record" : "Experiência em GovTech"}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            {isEn
              ? "Delivering institutional-grade technology for government agencies, civic organisations, and public-interest platforms across Mozambique — built for scale, operated for real-world impact."
              : "Entrega de tecnologia de nível institucional para agências governamentais, organizações cívicas e plataformas de interesse público em Moçambique — construída para escala, operada para impacto real."}
          </p>
        </div>
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
