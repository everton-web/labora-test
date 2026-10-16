import type { Metadata } from 'next';
import { Campo, Cartao } from '@/components/Campos';
import { FormularioPrototipo } from '@/components/FormularioPrototipo';
import { PaginaPrototipo } from '@/components/PaginaPrototipo';
import { CIDADES_ATENDIDAS } from '@/data/contato';

export const metadata: Metadata = {
  title: 'Cadastro pessoa física | LaboraTEST',
  description: 'Cadastro de médico-veterinário no LaboraTEST (protótipo).',
  alternates: { canonical: '/cadastro-pessoa-fisica/' },
};

export default function CadastroPF() {
  return (
    <PaginaPrototipo
      atual="cadastro-pessoa-fisica"
      rotulo="Seja nosso parceiro"
      titulo="Cadastro pessoa física"
      introducao={<p>Para médicos-veterinários que atendem de forma autônoma.</p>}
    >
      <Cartao className="max-w-4xl">
        <FormularioPrototipo
          rotulo="Cadastro pessoa física"
          botao="Enviar cadastro"
          mensagem="Cadastro simulado. Nesta versão de protótipo nenhum dado foi enviado ou gravado."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Campo id="nome" label="Nome completo" autoComplete="name" />
            </div>
            <Campo id="crmv" label="CRMV-BA" />
            <Campo id="nascimento" label="Data de nascimento" tipo="date" />
            <Campo id="email" label="E-mail" tipo="email" autoComplete="email" inputMode="email" />
            <Campo id="telefone" label="Telefone" tipo="tel" autoComplete="tel" inputMode="tel" />
          </div>
        </FormularioPrototipo>
      </Cartao>
    </PaginaPrototipo>
  );
}
