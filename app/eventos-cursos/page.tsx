import type { Metadata } from 'next';
import { Campo, Cartao } from '@/components/Campos';
import { FormularioPrototipo } from '@/components/FormularioPrototipo';
import { PaginaPrototipo } from '@/components/PaginaPrototipo';
import { CIDADES_ATENDIDAS } from '@/data/contato';

export const metadata: Metadata = {
  title: 'Eventos e cursos | LaboraTEST',
  description: 'Eventos e cursos do LaboraTEST (protótipo).',
  alternates: { canonical: '/eventos-cursos/' },
};

export default function Eventos() {
  return (
    <PaginaPrototipo
      atual="eventos-cursos"
      rotulo="Agenda"
      titulo="Eventos e cursos"
      introducao={<p>Garanta seu ingresso e faça sua doação.</p>}
    >
      <Cartao className="max-w-3xl">
        <p className="text-lg text-graphite">
          Não há detalhes de eventos publicados no site atual. Consulte a equipe pelo WhatsApp para saber as datas, os valores e como participar.
        </p>
      </Cartao>
    </PaginaPrototipo>
  );
}
