import Link from 'next/link';
import { BannerNovo } from '@/components/BannerNovo';
import { Cabecalho } from '@/components/Cabecalho';
import { IconeWhatsApp, Seta } from '@/components/Icones';
import { Rodape } from '@/components/Rodape';
import { FRASE_APOIO, FRASE_PARCEIRO, FRASE_PRINCIPAL, MOTIVOS } from '@/data/conteudo';
import {
  CIDADES_ATENDIDAS,
  EMAIL,
  INSTAGRAM_URL,
  TABELA_SERVICOS_URL,
  WHATSAPP_EXIBICAO,
  WHATSAPP_URL,
  whatsappComTexto,
} from '@/data/contato';
import { asset, externo } from '@/lib/site';

const WHATSAPP_COLETA = whatsappComTexto('Olá! Gostaria de confirmar a coleta na minha cidade.');

// Funções que as clínicas usam. Agora apontam para as páginas-protótipo do próprio site.
const ACESSO_RAPIDO = [
  { titulo: 'Resultados', texto: 'Consulte os laudos liberados.', href: '/resultados/' },
  { titulo: 'Solicitar exames', texto: 'Envie o pedido da sua clínica.', href: '/solicitar-exames/' },
  { titulo: 'Solicitar material', texto: 'Peça material de coleta.', href: '/solicitar-material/' },
  { titulo: 'Tabela de serviços', texto: 'Exames oferecidos, em PDF.', href: '/tabela-de-servicos/' },
];

const SERVICOS = [
  { nome: 'Hematologia', texto: 'Análise das células do sangue.', icone: 'hematologia', alt: 'Ícone de tubo de ensaio com sangue' },
  { nome: 'Bioquímica', texto: 'Dosagens que ajudam a avaliar os órgãos.', icone: 'bioquimica', alt: 'Ícone de balão de laboratório com bolhas' },
  { nome: 'Citologia', texto: 'Avaliação de células ao microscópio.', icone: 'citologia', alt: 'Ícone de microscópio' },
  { nome: 'Parasitologia', texto: 'Pesquisa de parasitos em amostras.', icone: 'parasitologia', alt: 'Ícone de parasito visto ao microscópio' },
  { nome: 'Microbiologia', texto: 'Pesquisa de microrganismos em amostras.', icone: 'microbiologia', alt: 'Ícone de microrganismos' },
];

const PLANOS = ['Petlove', 'Pet Health', 'Plamev', 'Care Saúde Animal'];

export default function Home() {
  return (
    <>
      <Cabecalho atual="inicio" />

      <main id="conteudo">
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-soft to-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 pt-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:pt-14">
            <div className="pb-2 lg:pb-16">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">
                Centro de Diagnóstico Veterinário em Salvador, BA
              </p>
              <h1 className="mt-4 text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] lg:leading-[1.1]">
                {FRASE_PRINCIPAL}
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted">
                {FRASE_APOIO}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/solicitar-exames/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 font-bold text-white shadow-sm transition hover:bg-brand-deep"
                >
                  Solicitar exames
                  <Seta />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  {...externo}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-graphite px-7 py-3 font-bold text-graphite transition hover:bg-graphite hover:text-white"
                >
                  <IconeWhatsApp />
                  Falar com o laboratório
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-md lg:max-w-none">
              <div aria-hidden="true" className="absolute inset-x-[8%] bottom-0 top-[14%] rounded-t-full bg-brand/10" />
              <img
                src={asset('/img/pets-hero.webp')}
                alt="Cachorro golden retriever e gato tigrado sentados lado a lado"
                width={1100}
                height={1100}
                fetchPriority="high"
                className="relative h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* ACESSO RÁPIDO */}
        <section aria-labelledby="acesso-titulo" className="border-y border-line bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            <h2 id="acesso-titulo" className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-muted">
              Acesso rápido para clínicas
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ACESSO_RAPIDO.map((item) => (
                <li key={item.titulo}>
                  <Link
                    href={item.href}
                    className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-line bg-paper px-5 py-4 transition hover:border-brand hover:bg-soft"
                  >
                    <span>
                      <span className="block font-display text-lg font-extrabold text-graphite group-hover:text-brand-deep">
                        {item.titulo}
                      </span>
                      <span className="block text-sm text-muted">{item.texto}</span>
                    </span>
                    <Seta className="text-brand transition group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* POR QUE O LABORATEST */}
        <section id="por-que" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">Por que o LaboraTEST</p>
              <h2 className="mt-3 text-[1.625rem] sm:text-[2.125rem]">
                {FRASE_PARCEIRO}
              </h2>
            </div>
            <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {MOTIVOS.map((motivo, i) => (
                <li key={motivo.titulo} className="border-t-2 border-brand pt-4">
                  <span aria-hidden="true" className="font-display text-sm font-extrabold text-brand">
                    0{i + 1}
                  </span>
                  <h3 className="mt-1 text-lg">{motivo.titulo}</h3>
                  <p className="mt-2 text-muted">{motivo.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="bg-soft py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">Nossos serviços</p>
                <h2 className="mt-3 text-[1.625rem] sm:text-[2.125rem]">Exames para a rotina da clínica.</h2>
              </div>
              <a
                href={TABELA_SERVICOS_URL}
                {...externo}
                className="inline-flex items-center gap-1 font-bold text-brand-deep underline underline-offset-4 hover:text-brand"
              >
                Ver tabela de serviços (PDF)
                <Seta className="size-4" />
              </a>
            </div>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
              {SERVICOS.map((servico) => (
                <li
                  key={servico.nome}
                  className="flex items-center gap-4 rounded-2xl bg-paper p-4 lg:flex-col lg:items-start lg:p-6"
                >
                  <img
                    src={asset(`/img/icone-${servico.icone}.webp`)}
                    alt={servico.alt}
                    width={360}
                    height={360}
                    loading="lazy"
                    className="size-16 shrink-0 rounded-full mix-blend-multiply lg:size-20"
                  />
                  <div>
                    <h3 className="text-lg">{servico.nome}</h3>
                    <p className="mt-1 text-[0.95rem] text-muted">{servico.texto}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* LOGÍSTICA E CIDADES */}
        <section id="cidades" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <img
                src={asset('/img/icone-logistica.webp')}
                alt="Ícone de moto de entrega com caixa de amostras"
                width={360}
                height={360}
                loading="lazy"
                className="size-20 rounded-full mix-blend-multiply"
              />
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-brand">Logística</p>
              <h2 className="mt-3 text-[1.625rem] sm:text-[2.125rem]">
                Coleta em Salvador, região metropolitana e outras cidades da&nbsp;Bahia.
              </h2>
              <p className="mt-4 text-muted">Confirme a coleta da sua cidade pelo WhatsApp.</p>
              <a
                href={WHATSAPP_COLETA}
                {...externo}
                className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-graphite px-6 py-3 font-bold text-graphite transition hover:bg-graphite hover:text-white"
              >
                <IconeWhatsApp />
                Confirmar coleta
              </a>
            </div>
            <div>
              <h3 className="font-sans text-base font-bold text-muted">
                {CIDADES_ATENDIDAS.length} cidades atendidas
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 sm:grid-cols-3">
                {CIDADES_ATENDIDAS.map((cidade) => (
                  <li key={cidade} className="flex items-center gap-2.5 border-b border-line py-3 font-semibold text-graphite">
                    <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-brand" />
                    {cidade}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAIXA AFETIVA: LAUDO VIVO */}
        <BannerNovo />

        {/* PLANOS PET PARCEIROS */}
        <section id="planos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-6 rounded-3xl border border-line p-6 sm:p-10 md:flex-row md:items-center md:gap-10">
            <img
              src={asset('/img/icone-parceiros.webp')}
              alt="Ícone de aperto de mão"
              width={360}
              height={360}
              loading="lazy"
              className="size-20 shrink-0 rounded-full mix-blend-multiply"
            />
            <div className="flex-1">
              <h2 className="text-[1.625rem] sm:text-[2.125rem]">Planos pet parceiros</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {PLANOS.map((plano) => (
                  <li key={plano} className="rounded-full bg-soft px-4 py-2 font-semibold text-graphite">
                    {plano}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-muted">Confirme a cobertura no seu plano antes da coleta.</p>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="bg-soft py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">Contato</p>
            <h2 className="mt-3 text-[1.625rem] sm:text-[2.125rem]">Fale com o laboratório.</h2>
            <ul className="mt-8 grid gap-3 md:grid-cols-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  {...externo}
                  className="flex h-full flex-col rounded-2xl bg-paper p-6 transition hover:ring-2 hover:ring-brand"
                >
                  <span className="text-sm font-semibold text-muted">WhatsApp</span>
                  <span className="mt-1 font-display text-xl font-extrabold text-graphite">{WHATSAPP_EXIBICAO}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex h-full flex-col rounded-2xl bg-paper p-6 transition hover:ring-2 hover:ring-brand"
                >
                  <span className="text-sm font-semibold text-muted">E-mail</span>
                  <span className="mt-1 break-all font-display text-xl font-extrabold text-graphite">{EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  {...externo}
                  className="flex h-full flex-col rounded-2xl bg-paper p-6 transition hover:ring-2 hover:ring-brand"
                >
                  <span className="text-sm font-semibold text-muted">Instagram</span>
                  <span className="mt-1 font-display text-xl font-extrabold text-graphite">@laboratest_vet</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Rodape />
    </>
  );
}
