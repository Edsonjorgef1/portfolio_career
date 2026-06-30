import Link from "next/link";
import { ArrowRight, CalendarDays, Github, Globe, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/layout/section-title";
import { GlassCard } from "@/components/ui/glass-card";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function ContactSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  const label = {
    intro:
      locale === "pt"
        ? "Aberto a oportunidades em liderança tecnológica, arquitectura de sistemas, transformação digital e entrega técnica."
        : "Open to opportunities in technology leadership, systems architecture, digital transformation, and technical delivery.",
    action: locale === "pt" ? "Entrar em contacto" : "Get in touch",
    direct: locale === "pt" ? "Contactos Directos" : "Direct Contacts",
    scheduleTitle: locale === "pt" ? "Agendar uma Reunião" : "Schedule a Meeting",
    scheduleSubtitle:
      locale === "pt"
        ? "Disponível para consultoria, parcerias e oportunidades de colaboração."
        : "Available for consulting, partnerships, and collaboration opportunities.",
    scheduleButton: locale === "pt" ? "Escolher horário" : "Pick a time",
  };

  const links = [
    { icon: Mail, title: locale === "pt" ? "Email" : "Email", label: data.personal.email, href: `mailto:${data.personal.email}` },
    { icon: Phone, title: locale === "pt" ? "Telefone" : "Phone", label: data.personal.phone, href: `tel:${data.personal.phone.replace(/\s+/g, "")}` },
    ...(data.personal.phone2 ? [{ icon: Phone, title: locale === "pt" ? "Telefone" : "Phone", label: data.personal.phone2, href: `tel:${data.personal.phone2.replace(/\s+/g, "")}` }] : []),
    { icon: MessageCircle, title: "WhatsApp", label: "+258 84 56 33 335", href: "https://wa.me/258845633335" },
    { icon: Linkedin, title: "LinkedIn", label: "edsonjorgef1", href: data.personal.linkedin },
    { icon: Github, title: "GitHub", label: "edsonjorgef1", href: data.personal.github },
    { icon: Globe, title: locale === "pt" ? "Currículo Digital" : "Digital Resume", label: "edsonjorgef1.github.io/Digital-Resume", href: data.personal.website },
  ];

  return (
    <section id="contact" className="section-shell section-spacing">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionTitle eyebrow={label.action} title={locale === "pt" ? "Contacto" : "Contact"} description={label.intro} />
        <GlassCard className="p-8">
          <div className="space-y-6">
            <div className="rounded-[1.5rem] border border-primary/20 bg-primary/10 p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-primary">
                    <CalendarDays className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-semibold text-white">{label.scheduleTitle}</h3>
                    <p className="max-w-lg text-sm leading-7 text-muted-foreground">{label.scheduleSubtitle}</p>
                  </div>
                </div>
                <Button asChild>
                  <Link href="https://calendar.app.google/LeUiwfTDvDFKuJpW9" target="_blank" rel="noopener noreferrer">
                    {label.scheduleButton}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">{label.direct}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {links.map(({ icon: Icon, title, label: itemLabel, href }) => (
              <Link
                key={itemLabel}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5 transition hover:border-primary/30 hover:bg-white/10"
              >
                <Icon className="h-5 w-5 text-primary" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{title}</p>
                <p className="mt-2 font-medium text-white break-all">{itemLabel}</p>
              </Link>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
