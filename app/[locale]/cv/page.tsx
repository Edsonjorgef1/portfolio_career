import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CERTIFICATION_GROUPS } from "@/lib/content/certifications";
import { ABOUT, AWARDS, EDUCATION, EXPERIENCE, PERSON } from "@/lib/content/profile";
import { PROJECTS, getUsedTech } from "@/lib/content/projects";
import { LOCALES, t, nameOf } from "@/lib/content/ui";
import type { Locale } from "@/types/content";

type Params = Promise<{ locale: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = { title: "CV", robots: { index: false } };

const CV_PROJECTS = ["fams", "juris", "kukura", "mhc-honey-traceability", "olimax-copra", "vamoz-competir", "funae-mgqr", "siga-ipp", "fonte-da-vida", "consultare"];

const LABELS = {
  summary: { pt: "Perfil", en: "Profile" },
  experience: { pt: "Experiência", en: "Experience" },
  projects: { pt: "Projectos seleccionados", en: "Selected projects" },
  skills: { pt: "Tecnologias", en: "Technologies" },
  education: { pt: "Formação", en: "Education" },
  awards: { pt: "Reconhecimentos", en: "Recognition" },
  certs: { pt: "Certificações", en: "Certifications" },
  languages: { pt: "Línguas", en: "Languages" },
  portfolio: { pt: "Portefólio", en: "Portfolio" },
};

/** Printable CV, generated from the same content as the site. Exported to /public/cv/*.pdf. */
export default async function CvPage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  if (!LOCALES.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const selected = CV_PROJECTS.map((slug) => PROJECTS.find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );
  const certCount = CERTIFICATION_GROUPS.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <div className="min-h-screen bg-white text-[13px] leading-snug text-neutral-900 print:text-[11px]">
      <div className="mx-auto max-w-[52rem] px-10 py-10 print:px-0 print:py-0">
        <header className="border-b border-neutral-300 pb-4">
          <h1 className="text-3xl font-semibold tracking-tight">{PERSON.name}</h1>
          <p className="mt-1 text-base text-neutral-700">{PERSON.title[locale]}</p>
          <p className="mt-2 text-neutral-700">
            {PERSON.location[locale]} · {PERSON.email} · linkedin.com/in/edsonjorgef1 · github.com/edsonjorgef1 ·{" "}
            {LABELS.portfolio[locale]}: portfolio.edsonfrancisco.site
          </p>
        </header>

        <section className="mt-5">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{t(locale, LABELS.summary)}</h2>
          <p className="mt-2">{ABOUT.paragraphs[0][locale]}</p>
        </section>

        <section className="mt-5">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{t(locale, LABELS.experience)}</h2>
          <ol className="mt-2 space-y-3">
            {EXPERIENCE.map((item) => (
              <li key={item.company + item.period.en} className="break-inside-avoid">
                <div className="flex justify-between gap-4">
                  <p className="font-semibold">{item.company}</p>
                  <p className="shrink-0 text-neutral-600">{item.period[locale]}</p>
                </div>
                <p className="text-neutral-700">{item.role[locale]}</p>
                <ul className="mt-1 list-disc pl-5">
                  {item.bullets.map((b) => (
                    <li key={b.en}>{b[locale]}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-5">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{t(locale, LABELS.projects)}</h2>
          <ul className="mt-2 space-y-1.5">
            {selected.map((p) => (
              <li key={p.slug} className="break-inside-avoid">
                <span className="font-semibold">{nameOf(p, locale)}</span> ({p.period}) — {p.tagline[locale]}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-5 break-inside-avoid">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{t(locale, LABELS.skills)}</h2>
          <p className="mt-2">{getUsedTech().join(" · ")}</p>
        </section>

        <div className="mt-5 grid grid-cols-2 gap-6 break-inside-avoid">
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{t(locale, LABELS.education)}</h2>
            <ul className="mt-2 space-y-1">
              {EDUCATION.map((e) => (
                <li key={e.institution}>
                  {e.degree[locale]} — {e.institution}
                </li>
              ))}
            </ul>
            <h2 className="mt-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">{t(locale, LABELS.languages)}</h2>
            <p className="mt-2">{PERSON.languages.map((l) => `${l.name[locale]} (${l.level[locale]})`).join(" · ")}</p>
          </section>
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{t(locale, LABELS.awards)}</h2>
            <ul className="mt-2 space-y-1">
              {AWARDS.map((a) => (
                <li key={a.title.en}>
                  {a.place[locale]} — {a.title[locale]} ({a.issuer}, {a.date[locale]})
                </li>
              ))}
            </ul>
            <h2 className="mt-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              {t(locale, LABELS.certs)} ({certCount})
            </h2>
            <p className="mt-2">
              {CERTIFICATION_GROUPS.flatMap((g) => g.items)
                .filter((c) => c.issuer !== "LinkedIn")
                .slice(0, 8)
                .map((c) => `${c.name} (${c.issuer})`)
                .join(" · ")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
