// Prefixo do BASE_PATH para arquivos de public/ (o site pode ser publicado em subpasta).
// Links internos usam next/link, que já aplica o basePath sozinho.
export const asset = (p: string) => `${process.env.BASE_PATH ?? ''}${p}`;

// Links externos abrem em nova aba, sempre com rel="noopener".
export const externo = { target: '_blank', rel: 'noopener noreferrer' } as const;

// Páginas do site. A chave identifica a página atual no cabeçalho (aria-current).
export type Pagina =
  | 'inicio'
  | 'proposito'
  | 'servicos'
  | 'resultados'
  | 'solicitar-exames'
  | 'solicitar-material'
  | 'tabela'
  | 'cadastre-se';

export const NAV_PRINCIPAL: { id: Pagina; href: string; label: string }[] = [
  { id: 'inicio', href: '/', label: 'Início' },
  { id: 'proposito', href: '/nosso-proposito/', label: 'Nosso propósito' },
  { id: 'servicos', href: '/#servicos', label: 'Serviços' },
  { id: 'tabela', href: '/tabela-de-servicos/', label: 'Tabela de serviços' },
];

// Funções que as clínicas usam (faixa superior do cabeçalho e acesso rápido).
export const NAV_CLINICAS: { id: Pagina; href: string; label: string; texto: string }[] = [
  { id: 'resultados', href: '/resultados/', label: 'Resultados', texto: 'Consulte os laudos liberados.' },
  { id: 'solicitar-exames', href: '/solicitar-exames/', label: 'Solicitar exames', texto: 'Envie o pedido da sua clínica.' },
  { id: 'solicitar-material', href: '/solicitar-material/', label: 'Solicitar material', texto: 'Peça material de coleta.' },
  { id: 'cadastre-se', href: '/cadastre-se/', label: 'Cadastre-se', texto: 'Cadastro de clínica ou veterinário.' },
];
