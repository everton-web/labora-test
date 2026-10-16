'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Seta } from '@/components/Icones';
import { asset } from '@/lib/site';

// Faixa afetiva "Laudo vivo": um laudo em papel aparece sobre o vermelho da marca, as etapas
// são conferidas uma a uma e o carimbo "Liberado" fecha a sequência.
// O JS só marca a seção quando ela entra na tela (data-visivel); a animação está em .laudo
// (app/globals.css). Sem JS, ou com movimento reduzido, tudo aparece pronto e parado.
// O espaço não quebrável (\u00A0) junta as duas últimas palavras: nenhuma linha fica com uma palavra só.
const ETAPAS = [
  'Amostra coletada na sua\u00A0clínica',
  'Rigor técnico e revisão\u00A0especializada',
  'Controle de qualidade e\u00A0padronização',
  'Prazos ágeis, inclusive\u00A0urgência',
];

export function BannerNovo() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    el.dataset.anim = '';
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada?.isIntersecting) {
          el.dataset.visivel = '';
          obs.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      delete el.dataset.anim;
      delete el.dataset.visivel;
    };
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="laudo-titulo"
      className="laudo relative isolate overflow-hidden bg-gradient-to-br from-brand via-brand to-brand-deep"
    >
      {/* Bolhas do tubo de ensaio do logo, só decoração. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <span className="laudo__bolha left-[6%] top-[62%] size-24 sm:size-40" />
        <span className="laudo__bolha left-[38%] top-[8%] size-10 [animation-delay:-3s] sm:size-14" />
        <span className="laudo__bolha left-[88%] top-[14%] size-16 [animation-delay:-6s] sm:size-28" />
        <span className="laudo__bolha left-[54%] top-[80%] size-8 [animation-delay:-9s] sm:size-12" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="text-paper">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-paper/90">Responsabilidade técnica</p>
          <h2 id="laudo-titulo" className="mt-4 text-[2.25rem] leading-[1.05] text-paper sm:text-[3rem] lg:text-[3.5rem]">
            Onde cuidar significa&nbsp;mais!
          </h2>
          <p className="mt-5 max-w-md text-lg text-paper/90">
            A vida por trás de cada exame vale ouro. Por isso cada laudo passa por conferência antes de&nbsp;sair.
          </p>
          <Link
            href="/resultados/"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-paper px-7 py-3.5 font-bold text-brand-deep shadow-sm transition hover:bg-soft"
          >
            Consultar resultados
            <Seta />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <article className="laudo__papel relative rounded-3xl bg-paper p-5 shadow-2xl shadow-ink/30 sm:p-8">
            <header className="flex items-center justify-between gap-4 border-b border-line pb-4">
              <img
                src={asset('/img/logo-laboratest.png')}
                alt="LaboraTEST"
                width={800}
                height={189}
                loading="lazy"
                className="h-9 w-auto sm:h-11"
              />
              <span className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-muted sm:text-sm">
                Laudo
              </span>
            </header>

            <div className="mt-5 flex items-center gap-4">
              <img
                src={asset('/img/pets-hero.webp')}
                alt=""
                width={1100}
                height={1100}
                loading="lazy"
                className="size-16 shrink-0 rounded-full bg-soft object-cover object-[50%_35%] sm:size-20"
              />
              <dl className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
                <dt className="text-muted">Paciente</dt>
                <dt className="text-muted">Solicitante</dt>
                <dd className="font-display text-base font-extrabold text-graphite">O seu</dd>
                <dd className="font-display text-base font-extrabold text-graphite">Sua clínica</dd>
              </dl>
            </div>

            <ol className="mt-6 grid gap-3">
              {ETAPAS.map((etapa) => (
                <li key={etapa} className="laudo__etapa flex items-center gap-3 rounded-xl bg-soft px-4 py-3">
                  <span aria-hidden="true" className="laudo__check grid size-7 shrink-0 place-items-center rounded-full bg-brand text-paper">
                    <svg viewBox="0 0 20 20" fill="none" className="size-4">
                      <path d="M5 10.5l3.2 3L15 6.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-semibold text-ink">{etapa}</span>
                </li>
              ))}
            </ol>

            <p className="laudo__carimbo absolute -right-2 -top-5 rounded-xl border-[3px] border-brand bg-paper px-4 py-1.5 font-display text-lg font-extrabold uppercase tracking-[0.12em] text-brand sm:-right-5 sm:-top-6 sm:text-xl">
              Liberado
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
