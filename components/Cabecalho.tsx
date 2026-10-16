import Link from 'next/link';
import { WHATSAPP_URL } from '@/data/contato';
import { asset, externo, NAV_CLINICAS, NAV_PRINCIPAL, type Pagina } from '@/lib/site';
import { IconeWhatsApp } from './Icones';

// Cabeçalho único do site. `atual` marca a página aberta (aria-current).
export function Cabecalho({ atual }: { atual?: Pagina }) {
  const corrente = (id: Pagina) => (id === atual ? ('page' as const) : undefined);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      {/* Faixa das clínicas: só em telas largas; no celular os links ficam no menu. */}
      <div className="hidden border-b border-line bg-soft lg:block">
        <nav aria-label="Para clínicas" className="mx-auto flex max-w-6xl items-center justify-end gap-6 px-6 py-1.5 text-sm">
          <span className="mr-auto font-semibold text-muted">Para clínicas e veterinários</span>
          {NAV_CLINICAS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={corrente(item.id)}
              className="font-bold text-graphite underline-offset-4 transition hover:text-brand-deep hover:underline aria-[current=page]:text-brand-deep aria-[current=page]:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0 rounded-md">
          <img
            src={asset('/img/logo-laboratest.png')}
            alt="LaboraTEST, Centro de Diagnóstico Veterinário. Ir para o início"
            width={169}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 text-[0.95rem] font-semibold text-graphite lg:flex">
          {NAV_PRINCIPAL.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={corrente(item.id)}
              className="transition hover:text-brand aria-[current=page]:text-brand-deep"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-3">
          <Link
            href="/resultados/"
            className="inline-flex items-center rounded-full px-2 py-2 text-sm font-bold text-brand underline-offset-4 transition hover:underline sm:text-[0.95rem] lg:hidden"
          >
            Resultados
          </Link>
          <a
            href={WHATSAPP_URL}
            {...externo}
            className="hidden items-center gap-2 rounded-full border-2 border-graphite px-4 py-2 text-sm font-bold text-graphite transition hover:bg-graphite hover:text-white sm:inline-flex"
          >
            <IconeWhatsApp />
            WhatsApp
          </a>

          <details className="lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-line px-3 py-2 text-sm font-bold text-graphite">
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Menu
            </summary>
            <nav
              aria-label="Menu"
              className="absolute inset-x-0 top-full max-h-[calc(100svh-4.5rem)] overflow-y-auto border-b border-line bg-paper px-4 pb-6 pt-2 shadow-lg sm:px-6"
            >
              <ul className="mx-auto flex max-w-6xl flex-col">
                {NAV_PRINCIPAL.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      aria-current={corrente(item.id)}
                      className="block border-b border-line py-3 text-base font-semibold text-graphite aria-[current=page]:text-brand-deep"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mx-auto mt-5 max-w-6xl text-xs font-bold uppercase tracking-[0.14em] text-muted">Para clínicas</p>
              <ul className="mx-auto mt-1 flex max-w-6xl flex-col">
                {NAV_CLINICAS.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      aria-current={corrente(item.id)}
                      className="block border-b border-line py-3 text-base font-semibold text-graphite aria-[current=page]:text-brand-deep"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <a
                    href={WHATSAPP_URL}
                    {...externo}
                    className="flex items-center justify-center gap-2 rounded-full border-2 border-graphite px-5 py-3 font-bold text-graphite"
                  >
                    <IconeWhatsApp />
                    Falar no WhatsApp
                  </a>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
