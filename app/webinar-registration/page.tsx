import type { Metadata } from 'next';
import { Campo, Cartao } from '@/components/Campos';
import { FormularioPrototipo } from '@/components/FormularioPrototipo';
import { PaginaPrototipo } from '@/components/PaginaPrototipo';
import { CIDADES_ATENDIDAS } from '@/data/contato';

export const metadata: Metadata = {
  title: 'Webinars | LaboraTEST',
  description: 'Inscrição em webinars do LaboraTEST (protótipo).',
  alternates: { canonical: '/webinar-registration/' },
};

export default function Webinar() {
  return (
    <PaginaPrototipo
      atual="webinar-registration"
      rotulo="Atualização técnica"
      titulo="Webinars"
      introducao={<p>Não há webinar agendado no momento. Deixe seu contato para ser avisado.</p>}
    >
      <Cartao className="max-w-4xl">
        <FormularioPrototipo
          rotulo="Inscrição em webinar"
          botao="Quero ser avisado"
          mensagem="Inscrição simulada. Nesta versão de protótipo nenhum dado foi enviado ou gravado."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Campo id="nome" label="Nome" autoComplete="name" />
            <Campo id="crmv" label="CRMV-BA" />
            <div className="sm:col-span-2">
              <Campo id="email" label="E-mail" tipo="email" autoComplete="email" inputMode="email" />
            </div>
          </div>
        </FormularioPrototipo>
      </Cartao>
    </PaginaPrototipo>
  );
}
