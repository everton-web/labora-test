import type { Metadata } from 'next';
import Link from 'next/link';
import { Cartao } from '@/components/Campos';
import { PaginaPrototipo } from '@/components/PaginaPrototipo';

export const metadata: Metadata = {
  title: 'Cadastre-se | LaboraTEST',
  description: 'Cadastro de clínica ou veterinário no LaboraTEST (protótipo).',
  alternates: { canonical: '/cadastre-se/' },
};

const OPCOES = [
  {
    href: '/cadastro-pessoa-juridica/',
    titulo: 'Sou clínica ou hospital',
    texto: 'Cadastro pessoa jurídica, com CNPJ e dados do responsável técnico.',
  },
  {
    href: '/cadastro-pessoa-fisica/',
    titulo: 'Sou médico-veterinário',
    texto: 'Cadastro pessoa física, para atendimento autônomo.',
  },
];

export default function Cadastro() {
  return (
    <PaginaPrototipo
      atual="cadastre-se"
      rotulo="Seja nosso parceiro"
      titulo="Cadastre-se"
      introducao={<p>Escolha o tipo de cadastro.</p>}
    >
      <div className="grid max-w-4xl gap-5 md:grid-cols-2">
        {OPCOES.map((opcao) => (
          <Cartao key={opcao.href}>
            <h2 className="font-display text-xl font-extrabold text-graphite">{opcao.titulo}</h2>
            <p className="mt-2 text-muted">{opcao.texto}</p>
            <Link
              href={opcao.href}
              className="mt-5 inline-flex rounded-full bg-brand px-6 py-3 font-bold text-white transition hover:bg-brand-deep"
            >
              Fazer cadastro
            </Link>
          </Cartao>
        ))}
      </div>
    </PaginaPrototipo>
  );
}
