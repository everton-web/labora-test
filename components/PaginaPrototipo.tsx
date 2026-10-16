import type { ReactNode } from 'react';
import type { Pagina } from '@/lib/site';
import { Cabecalho } from './Cabecalho';
import { Rodape } from './Rodape';

// Moldura das páginas-protótipo: cabeçalho, aviso de protótipo, título e rodapé.
export function PaginaPrototipo({
  atual,
  rotulo,
  titulo,
  introducao,
  children,
}: {
  atual: Pagina;
  rotulo: string;
  titulo: string;
  introducao?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <Cabecalho atual={atual} />
      <div className="aviso-prototipo" role="note">
        <p className="mx-auto flex max-w-6xl items-center gap-2.5 px-4 py-2.5 text-sm font-semibold sm:px-6">
          <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-graphite" />
          Protótipo: os formulários e as consultas não funcionam de verdade.
        </p>
      </div>
      <main id="conteudo">
        <section className="bg-gradient-to-b from-soft to-paper">
          <div className="mx-auto max-w-6xl px-4 pb-6 pt-10 sm:px-6 sm:pt-14">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">{rotulo}</p>
            <h1 className="mt-3 text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] lg:leading-[1.1]">{titulo}</h1>
            {introducao ? <div className="mt-4 max-w-2xl text-lg text-muted">{introducao}</div> : null}
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 sm:pb-24">{children}</div>
      </main>
      <Rodape />
    </>
  );
}
