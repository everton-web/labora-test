import type { Metadata } from 'next';
import Link from 'next/link';
import { Seta } from '@/components/Icones';
import { PaginaPrototipo } from '@/components/PaginaPrototipo';
import { FRASE_APOIO, FRASE_PARCEIRO, FRASE_PRINCIPAL, MOTIVOS } from '@/data/conteudo';

export const metadata: Metadata = {
  title: 'Nosso propósito | LaboraTEST',
  description: FRASE_PRINCIPAL,
  alternates: { canonical: '/nosso-proposito/' },
};

// Só frases que já existem no site atual do cliente. Missão, visão e valores ficam de fora até o laboratório enviar.
export default function NossoProposito() {
  return (
    <PaginaPrototipo atual="proposito" rotulo="Nosso propósito" titulo={FRASE_PRINCIPAL} introducao={<p>{FRASE_APOIO}</p>}>
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <h2 className="text-[1.625rem] sm:text-[2.125rem]">{FRASE_PARCEIRO}</h2>
          <p className="mt-4 font-display text-xl font-extrabold text-brand-deep">Onde cuidar significa&nbsp;mais!</p>
          <p className="mt-1 text-muted">A vida por trás de cada exame vale&nbsp;ouro!</p>
        </div>
        <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {MOTIVOS.map((motivo, i) => (
            <li key={motivo.titulo} className="border-t-2 border-brand pt-4">
              <span aria-hidden="true" className="font-display text-sm font-extrabold text-brand">
                0{i + 1}
              </span>
              <h3 className="mt-1 text-lg">{motivo.titulo}</h3>
              <p className="mt-2 text-muted">{motivo.texto}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-14 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/solicitar-exames/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 font-bold text-white shadow-sm transition hover:bg-brand-deep"
        >
          Solicitar exames
          <Seta />
        </Link>
        <Link
          href="/#servicos"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-graphite px-7 py-3 font-bold text-graphite transition hover:bg-graphite hover:text-white"
        >
          Ver serviços
        </Link>
      </div>
    </PaginaPrototipo>
  );
}
