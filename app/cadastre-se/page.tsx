import type { Metadata } from 'next';
import { Campo, Cartao } from '@/components/Campos';
import { FormularioPrototipo } from '@/components/FormularioPrototipo';
import { PaginaPrototipo } from '@/components/PaginaPrototipo';
import { CIDADES_ATENDIDAS } from '@/data/contato';

export const metadata: Metadata = {
  title: 'Cadastre-se | LaboraTEST',
  description: 'Cadastro de clínica ou veterinário no LaboraTEST (protótipo).',
  alternates: { canonical: '/cadastre-se/' },
};

export default function Cadastro() {
  return (
    <PaginaPrototipo
      atual="cadastre-se"
      rotulo="Para clínicas e veterinários"
      titulo="Cadastre-se"
      introducao={<p>Cadastro de clínica ou veterinário.</p>}
    >
      <Cartao className="max-w-4xl">
        <FormularioPrototipo
          rotulo="Cadastro"
          botao="Enviar cadastro"
          mensagem="Cadastro simulado. Nesta versão de protótipo nenhum dado foi enviado ou gravado."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Campo id="nome" label="Nome" autoComplete="name" />
            <Campo id="clinica" label="Clínica" autoComplete="organization" />
            <Campo id="cidade" label="Cidade" autoComplete="address-level2" lista="cidades" />
            <Campo id="telefone" label="Telefone" tipo="tel" autoComplete="tel" inputMode="tel" />
            <div className="sm:col-span-2">
              <Campo id="email" label="E-mail" tipo="email" autoComplete="email" inputMode="email" />
            </div>
          </div>
          <datalist id="cidades">
            {CIDADES_ATENDIDAS.map((cidade) => (
              <option key={cidade} value={cidade} />
            ))}
          </datalist>

          <label htmlFor="aceite" className="flex cursor-pointer items-start gap-3 text-graphite">
            <input id="aceite" type="checkbox" className="marca mt-1" />
            <span>Concordo em ser contatado pelo LaboraTEST sobre este cadastro.</span>
          </label>
        </FormularioPrototipo>
      </Cartao>
    </PaginaPrototipo>
  );
}
