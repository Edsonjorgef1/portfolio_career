import Link from "next/link";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import type { Locale } from "@/types/portfolio";

export function SiteFooter({
  locale,
  name,
  email,
}: {
  locale: Locale;
  name: string;
  email: string;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="section-shell flex flex-col gap-6 text-sm text-muted-foreground">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium text-white">{name}</p>
            <p>{locale === "pt" ? `© ${currentYear} Edson Francisco. Todos os direitos reservados.` : `© ${currentYear} Edson Francisco. All rights reserved.`}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="https://github.com/edsonjorgef1" target="_blank" rel="noreferrer" className="transition hover:text-white">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/edsonjorgef1" target="_blank" rel="noreferrer" className="transition hover:text-white">
              LinkedIn
            </Link>
            <Link href="https://edsonjorgef1.github.io/Digital-Resume/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              {locale === "pt" ? "Currículo Digital" : "Digital Resume"}
            </Link>
            <Link href="https://calendar.app.google/LeUiwfTDvDFKuJpW9" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              {locale === "pt" ? "Agendar Reunião" : "Schedule a Meeting"}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 md:items-start">
            <Link href={`mailto:${email}`} className="transition hover:text-white">
            {email}
            </Link>
            <p>{locale === "pt" ? "Pronto para colaboração estratégica e execução técnica." : "Available for strategic collaboration and technical delivery."}</p>
          </div>
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </footer>
  );
}
