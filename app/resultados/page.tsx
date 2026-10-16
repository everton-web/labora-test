import type { Metadata } from 'next';
import { Campo, Cartao } from '@/components/Campos';
import { FormularioPrototipo } from '@/components/FormularioPrototipo';
import { IconeWhatsApp } from '@/components/Icones';
import { PaginaPrototipo } from '@/components/PaginaPrototipo';
import { WHATSAPP_EXIBICAO, whatsappComTexto } from '@/data/contato';
import { externo } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Resultados | LaboraTEST',
  description: 'Consulta de resultados de exames do LaboraTEST (protótipo).',
  alternates: { canonical: '/resultados/' },
};

const WHATSAPP_CODIGO = whatsappComTexto('Olá! Preciso do código do pedido para consultar um resultado.');

export default function Resultados() {
  return (
    <PaginaPrototipo
      atual="resultados"
      rotulo="Para clínicas e tutores"
      titulo="Resultados"
      introducao={<p>Informe o código do pedido e a data de nascimento do paciente.</p>}
    >
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
        <Cartao>
          <FormularioPrototipo
            rotulo="Consultar resultado"
            botao="Consultar"
            mensagem="Aqui apareceria o resultado do exame. Esta é uma simulação."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Campo id="codigo" label="Código do pedido" autoComplete="off" />
              <Campo id="nascimento" label="Data de nascimento do paciente" tipo="date" />
            </div>
          </FormularioPrototipo>
        </Cartao>

        <aside aria-labelledby="sem-codigo" className="rounded-3xl bg-soft p-6 sm:p-8">
          <h2 id="sem-codigo" className="text-[1.375rem]">
            Não tem o código? Fale com a&nbsp;equipe
          </h2>
          <p className="mt-2 text-muted">Atendimento pelo WhatsApp {WHATSAPP_EXIBICAO}.</p>
          <a
            href={WHATSAPP_CODIGO}
            {...externo}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-graphite px-6 py-3 font-bold text-graphite transition hover:bg-graphite hover:text-white"
          >
            <IconeWhatsApp />
            Falar no WhatsApp
          </a>
        </aside>
      </div>
    </PaginaPrototipo>
  );
}
