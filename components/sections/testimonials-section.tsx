import { Quote } from "lucide-react";

import { SectionTitle } from "@/components/layout/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import type { Locale } from "@/types/portfolio";

const testimonials = {
  pt: [
    {
      quote: "Um dos sistemas digitais mais flexíveis e adaptáveis para o agronegócio que encontrei em África.",
      author: "Ralph",
      role: "Consultor Sénior, GIZ",
      initials: "RA",
    },
    {
      quote: "Entre mais de 20 candidatos, a Empoderando Moçambique foi seleccionada pela GIZ para liderar a implementação do FAMS em empresas agronegócio a nível nacional.",
      author: "GIZ Moçambique",
      role: "Deutsche Gesellschaft für Internationale Zusammenarbeit",
      initials: "GZ",
    },
    {
      quote: "Aplicação aprovada oficialmente pelo Ministério da Saúde de Moçambique (MISAU) para distribuição ao público.",
      author: "MISAU",
      role: "Ministério da Saúde de Moçambique",
      initials: "MS",
    },
  ],
  en: [
    {
      quote: "One of the most flexible and adaptable digital systems for agribusiness I have encountered in Mozambique.",
      author: "Ralph",
      role: "Senior Consultant, GIZ",
      initials: "RA",
    },
    {
      quote: "Among more than 20 applicants, Empoderando Moçambique was selected by GIZ to lead FAMS implementation in agribusiness companies at national level.",
      author: "GIZ Mozambique",
      role: "Deutsche Gesellschaft für Internationale Zusammenarbeit",
      initials: "GZ",
    },
    {
      quote: "Application officially approved by the Ministry of Health of Mozambique (MISAU) for public distribution.",
      author: "MISAU",
      role: "Ministry of Health of Mozambique",
      initials: "MS",
    },
  ],
};

export function TestimonialsSection({ locale }: { locale: Locale }) {
  const items = testimonials[locale];

  return (
    <section className="section-shell section-spacing">
      <SectionTitle
        eyebrow={locale === "pt" ? "Prova Social" : "Social Proof"}
        title={locale === "pt" ? "O que dizem sobre o meu trabalho" : "What people say about my work"}
        description={
          locale === "pt"
            ? "Reconhecimento institucional e validação prática do impacto entregue em campo e em produção."
            : "Institutional recognition and practical validation of work delivered in the field and in production."
        }
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={`${item.author}-${item.initials}`} delay={index * 0.08}>
            <GlassCard className="relative h-full overflow-hidden p-6">
              <Quote className="absolute right-5 top-5 h-12 w-12 text-white/5" />
              <div className="flex h-full flex-col justify-between gap-8">
                <p className="text-base italic leading-8 text-muted-foreground">“{item.quote}”</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 font-semibold text-primary">
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.author}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
