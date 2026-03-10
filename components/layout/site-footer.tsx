import Link from "next/link";

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
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="section-shell flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-white">{name}</p>
          <p>{locale === "pt" ? "Portfólio técnico bilingue" : "Bilingual technical portfolio"}</p>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <Link href={`mailto:${email}`} className="transition hover:text-white">
            {email}
          </Link>
          <p>{locale === "pt" ? "Pronto para colaboração estratégica e execução técnica." : "Available for strategic collaboration and technical delivery."}</p>
        </div>
      </div>
    </footer>
  );
}
