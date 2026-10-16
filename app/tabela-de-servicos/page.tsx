import type { Metadata } from 'next';
import Link from 'next/link';
import { Seta } from '@/components/Icones';
import { PaginaPrototipo } from '@/components/PaginaPrototipo';
import { TABELA_SERVICOS_URL } from '@/data/contato';
import { externo } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Tabela de serviços | LaboraTEST',
  description: 'Tabela de serviços do LaboraTEST, em PDF.',
  alternates: { canonical: '/tabela-de-servicos/' },
};

// A tabela não é recriada aqui: o link aponta para o PDF publicado pelo laboratório.
export default function TabelaDeServicos() {
  return (
    <PaginaPrototipo
      atual="tabela"
      rotulo="Nossos serviços"
      titulo="Tabela de serviços"
      introducao={<p>Os exames oferecidos pelo laboratório estão na tabela em PDF.</p>}
    >
      <div className="flex max-w-3xl flex-col gap-6 rounded-3xl border border-line p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h2 className="text-[1.375rem]">Tabela de serviços (PDF)</h2>
          <p className="mt-1 text-muted">O arquivo abre em uma nova aba.</p>
        </div>
        <a
          href={TABELA_SERVICOS_URL}
          {...externo}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 font-bold text-white shadow-sm transition hover:bg-brand-deep"
        >
          Abrir a tabela
          <Seta />
        </a>
      </div>
      <p className="mt-8 text-muted">
        Para pedir um exame,{' '}
        <Link href="/solicitar-exames/" className="font-bold text-brand-deep underline underline-offset-4 hover:text-brand">
          envie o pedido da sua&nbsp;clínica
        </Link>
        .
      </p>
    </PaginaPrototipo>
  );
}
