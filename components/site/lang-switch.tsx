"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/types/content";

export function LangSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() || `/${locale}`;
  const other: Locale = locale === "pt" ? "en" : "pt";
  const href = pathname.replace(/^\/(pt|en)(?=\/|$)/, `/${other}`);

  return (
    <Link
      href={href}
      hrefLang={other}
      lang={other}
      className="rounded-md border border-border px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground"
    >
      <span aria-hidden="true">{other.toUpperCase()}</span>
      <span className="sr-only">{label}</span>
    </Link>
  );
}
