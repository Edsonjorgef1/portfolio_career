import type { Locale } from "@/types/portfolio";

/** Pure locale helper — safe to use in client components */
export function getLocalizedValue<T>(locale: Locale, pt: T, en: T): T {
  return locale === "pt" ? pt : en;
}
