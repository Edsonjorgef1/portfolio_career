import Link from "next/link";

/** Shown for unknown paths under /pt or /en. Bilingual because the locale isn't passed to not-found. */
export default function NotFound() {
  return (
    <main className="container-page flex min-h-[70vh] flex-col justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Página não encontrada · Page not found</h1>
      <p className="mt-4 max-w-prose text-muted">
        O endereço pode ter mudado com a nova versão do portefólio. · The address may have changed with the new version of the
        portfolio.
      </p>
      <ul className="mt-8 flex gap-6 text-sm">
        <li>
          <Link className="link" href="/pt" hrefLang="pt">
            Ir para o início
          </Link>
        </li>
        <li>
          <Link className="link" href="/en" hrefLang="en">
            Go to home
          </Link>
        </li>
      </ul>
    </main>
  );
}
