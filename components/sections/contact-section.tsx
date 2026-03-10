import Link from "next/link";
import { Github, Linkedin, Mail, Phone, Globe } from "lucide-react";

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
  };

  const links = [
    { icon: Mail, label: data.personal.email, href: `mailto:${data.personal.email}` },
    { icon: Phone, label: data.personal.phone, href: `tel:${data.personal.phone.split(" / ")[0].replace(/\s+/g, "")}` },
    { icon: Linkedin, label: "LinkedIn", href: data.personal.linkedin },
    { icon: Github, label: "GitHub", href: data.personal.github },
    { icon: Globe, label: "Website", href: data.personal.website },
  ];

  return (
    <section id="contact" className="section-shell section-spacing">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionTitle eyebrow={label.action} title={locale === "pt" ? "Contacto" : "Contact"} description={label.intro} />
        <GlassCard className="p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map(({ icon: Icon, label: itemLabel, href }) => (
              <Link
                key={itemLabel}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5 transition hover:border-primary/30 hover:bg-white/10"
              >
                <Icon className="h-5 w-5 text-primary" />
                <p className="mt-4 font-medium text-white">{itemLabel}</p>
              </Link>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
