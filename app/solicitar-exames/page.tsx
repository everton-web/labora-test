import type { Metadata } from 'next';
import { AreaTexto, Campo, Cartao, Grupo, Opcao } from '@/components/Campos';
import { FormularioPrototipo } from '@/components/FormularioPrototipo';
import { PaginaPrototipo } from '@/components/PaginaPrototipo';
import { EXAMES } from '@/data/conteudo';

export const metadata: Metadata = {
  title: 'Solicitar exames | LaboraTEST',
  description: 'Pedido de exames veterinários ao LaboraTEST (protótipo).',
  alternates: { canonical: '/solicitar-exames/' },
};

const ESPECIES = [
  { id: 'especie-cao', label: 'Cão' },
  { id: 'especie-gato', label: 'Gato' },
  { id: 'especie-outra', label: 'Outra' },
];

const slug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

export default function SolicitarExames() {
  return (
    <PaginaPrototipo
      atual="solicitar-exames"
      rotulo="Para clínicas"
      titulo="Solicitar exames"
      introducao={<p>Preencha o pedido da sua clínica.</p>}
    >
      <Cartao className="max-w-4xl">
        <FormularioPrototipo
          rotulo="Pedido de exames"
          botao="Enviar pedido"
          mensagem="Pedido simulado. Nesta versão de protótipo nada foi enviado ao laboratório."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Campo id="clinica" label="Nome da clínica" autoComplete="organization" />
            <Campo id="veterinario" label="Veterinário responsável" autoComplete="name" />
            <Campo id="crmv" label="CRMV" />
            <Campo id="tutor" label="Nome do tutor" />
          </div>

          <Grupo legenda="Espécie">
            <div className="grid gap-2 sm:grid-cols-3">
              {ESPECIES.map((e) => (
                <Opcao key={e.id} id={e.id} label={e.label} tipo="radio" grupo="especie" />
              ))}
            </div>
          </Grupo>

          <Grupo legenda="Exames desejados">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {EXAMES.map((exame) => (
                <Opcao key={exame} id={`exame-${slug(exame)}`} label={exame} tipo="checkbox" />
              ))}
            </div>
          </Grupo>

          <AreaTexto id="observacoes" label="Observações" />
        </FormularioPrototipo>
      </Cartao>
    </PaginaPrototipo>
  );
}
