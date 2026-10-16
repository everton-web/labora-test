import type { Metadata } from 'next';
import { Campo, Cartao } from '@/components/Campos';
import { FormularioPrototipo } from '@/components/FormularioPrototipo';
import { PaginaPrototipo } from '@/components/PaginaPrototipo';
import { CIDADES_ATENDIDAS } from '@/data/contato';

export const metadata: Metadata = {
  title: 'Cadastro pessoa jurídica | LaboraTEST',
  description: 'Cadastro de clínica ou hospital veterinário no LaboraTEST (protótipo).',
  alternates: { canonical: '/cadastro-pessoa-juridica/' },
};

export default function CadastroPJ() {
  return (
    <PaginaPrototipo
      atual="cadastro-pessoa-juridica"
      rotulo="Seja nosso parceiro"
      titulo="Cadastro pessoa jurídica"
      introducao={<p>Para clínicas e hospitais veterinários.</p>}
    >
      <Cartao className="max-w-4xl">
        <FormularioPrototipo
          rotulo="Cadastro pessoa jurídica"
          botao="Enviar cadastro"
          mensagem="Cadastro simulado. Nesta versão de protótipo nenhum dado foi enviado ou gravado."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Campo id="razao" label="Razão social" autoComplete="organization" />
            <Campo id="cnpj" label="CNPJ" inputMode="numeric" />
            <Campo id="contato" label="Nome do contato" autoComplete="name" />
            <Campo id="telefone" label="Telefone / contato" tipo="tel" autoComplete="tel" inputMode="tel" />
            <Campo id="email-recepcao" label="E-mail da recepção" tipo="email" autoComplete="email" inputMode="email" />
            <Campo id="email-financeiro" label="E-mail do financeiro" tipo="email" inputMode="email" />
            <Campo id="rt" label="Nome do responsável técnico (RT)" />
            <Campo id="crmv" label="CRMV-BA do RT" />
            <Campo id="nascimento-rt" label="Data de nascimento do RT" tipo="date" />
          </div>
          <datalist id="cidades">
            {CIDADES_ATENDIDAS.map((cidade) => (
              <option key={cidade} value={cidade} />
            ))}
          </datalist>
        </FormularioPrototipo>
      </Cartao>
    </PaginaPrototipo>
  );
}
