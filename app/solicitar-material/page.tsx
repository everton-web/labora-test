import type { Metadata } from 'next';
import { AreaTexto, Campo, Cartao, Grupo } from '@/components/Campos';
import { FormularioPrototipo } from '@/components/FormularioPrototipo';
import { PaginaPrototipo } from '@/components/PaginaPrototipo';

export const metadata: Metadata = {
  title: 'Solicitar material | LaboraTEST',
  description: 'Pedido de material de coleta ao LaboraTEST (protótipo).',
  alternates: { canonical: '/solicitar-material/' },
};

export default function SolicitarMaterial() {
  return (
    <PaginaPrototipo
      atual="solicitar-material"
      rotulo="Para clínicas"
      titulo="Solicitar material"
      introducao={<p>Peça o material de coleta para a sua clínica.</p>}
    >
      <Cartao className="max-w-4xl">
        <FormularioPrototipo
          rotulo="Pedido de material de coleta"
          botao="Enviar pedido"
          mensagem="Pedido simulado. Nesta versão de protótipo nada foi enviado ao laboratório."
        >
          <Campo id="clinica" label="Clínica" autoComplete="organization" />

          <Grupo legenda="Quantidade de material">
            <div className="grid gap-5 sm:grid-cols-3">
              <Campo id="tubos" label="Tubos" tipo="number" min={0} inputMode="numeric" />
              <Campo id="frascos" label="Frascos" tipo="number" min={0} inputMode="numeric" />
              <Campo id="laminas" label="Lâminas" tipo="number" min={0} inputMode="numeric" />
            </div>
          </Grupo>

          <AreaTexto id="endereco" label="Endereço de entrega" />
        </FormularioPrototipo>
      </Cartao>
    </PaginaPrototipo>
  );
}
