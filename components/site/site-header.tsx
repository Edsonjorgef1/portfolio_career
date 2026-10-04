import Link from "next/link";

import { LangSwitch } from "@/components/site/lang-switch";
import { PERSON } from "@/lib/content/profile";
import { UI, t } from "@/lib/content/ui";
import type { Locale } from "@/types/content";

export function SiteHeader({ locale }: { locale: Locale }) {
  const home = `/${locale}`;
  const links = [
    { href: `/${locale}/projects`, label: t(locale, UI.nav.work) },
    { href: `${home}#experience`, label: t(locale, UI.nav.experience) },
    { href: `${home}#about`, label: t(locale, UI.nav.about) },
    { href: `/${locale}/now`, label: t(locale, UI.nav.now) },
    { href: `${home}#contact`, label: t(locale, UI.nav.contact) },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-[rgba(10,10,10,0.85)] backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between gap-4">
        <Link href={home} className="text-sm font-semibold tracking-tight text-foreground">
          {PERSON.name}
        </Link>
        <nav aria-label={locale === "pt" ? "Principal" : "Main"} className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-2.5 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={`/${locale}/projects`}
            className="rounded-md px-2.5 py-1.5 text-sm text-muted transition-colors hover:text-foreground md:hidden"
          >
            {t(locale, UI.nav.work)}
          </Link>
          <LangSwitch locale={locale} label={t(locale, UI.langSwitch)} />
        </nav>
      </div>
    </header>
  );
}
