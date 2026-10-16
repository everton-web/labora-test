import CasosDaSemana from '@/components/CasosDaSemana';
import SeletorColeta from '@/components/SeletorColeta';
import {
  CIDADES_ATENDIDAS,
  EMAIL,
  INSTAGRAM_URL,
  TABELA_SERVICOS_URL,
  WHATSAPP_EXIBICAO,
  WHATSAPP_URL,
} from '@/data/contato';

const SERVICOS = [
  { nome: 'Hematologia', texto: 'Hemograma e avaliação celular do sangue.' },
  { nome: 'Bioquímica', texto: 'Perfis renal, hepático e demais dosagens, com controle de qualidade diário.' },
  { nome: 'Citologia', texto: 'Leitura de lâminas de nódulos, líquidos e lesões.' },
  { nome: 'Histopatologia', texto: 'Biópsias e peças cirúrgicas, com laudo interpretativo.' },
  { nome: 'Parasitologia', texto: 'Pesquisa de parasitos em amostras clínicas.' },
  { nome: 'Microbiologia', texto: 'Cultivo e identificação de microrganismos.' },
];

const QUALIDADE = [
  { titulo: 'Controle de qualidade diário', texto: 'A bioquímica roda controle de qualidade todos os dias, antes de liberar resultados.' },
  { titulo: 'Revisão técnica antes da liberação', texto: 'Cada laudo passa por revisão especializada antes de chegar à clínica.' },
  { titulo: 'Amostra rastreada', texto: 'Da chegada ao laudo, cada amostra tem identificação e histórico próprios.' },
];

const NAV = [
  { href: '#coleta', label: 'Montar coleta' },
  { href: '#cidades', label: 'Cidades' },
  { href: '#casos', label: 'Casos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Contato' },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#inicio" className="flex flex-col leading-none" aria-label="LaboraTEST, início">
            <span className="font-display text-2xl font-bold tracking-tight">
              labora<span className="text-brand">TEST</span>
            </span>
            <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted">
              Centro de diagnóstico veterinário
            </span>
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-6 text-sm font-medium md:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-brand">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-deep sm:inline-flex"
          >
            Chamar no WhatsApp
          </a>

          <details className="group md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold">
              Menu
            </summary>
            <nav aria-label="Menu" className="absolute inset-x-0 top-full border-b border-line bg-paper px-4 pb-5 pt-2 shadow-sm">
              <ul className="flex flex-col">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="block py-3 text-base font-medium">
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={WHATSAPP_URL} className="mt-2 block rounded-full bg-brand px-5 py-3 text-center font-semibold text-white">
                    Chamar no WhatsApp
                  </a>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </header>

      <main id="conteudo">
        {/* HERO */}
        <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Laboratório veterinário em Salvador, BA
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              Diga a suspeita. A gente diz como coletar.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Escolha a espécie e a suspeita clínica. Você vê os exames indicados, o material, o recipiente e o
              que muda quando o caso é urgente.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#coleta" className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-deep">
                Montar a coleta
              </a>
              <a href={WHATSAPP_URL} className="inline-flex items-center justify-center rounded-full border border-ink px-7 py-3.5 font-semibold transition hover:bg-ink hover:text-white">
                Falar com a equipe técnica
              </a>
            </div>
            <p className="mt-6 text-sm text-muted">
              Resultados com revisão técnica, controle de qualidade e laudo interpretativo.
            </p>
          </div>

          <div aria-hidden="true" className="relative mx-auto w-full max-w-md rounded-[2rem] bg-soft p-10">
            <svg viewBox="0 0 320 300" className="h-auto w-full" role="presentation">
              <rect x="20" y="236" width="280" height="20" rx="10" fill="#e7dcdc" />
              <g>
                <rect x="72" y="60" width="44" height="190" rx="22" fill="#fff" stroke="#c72a4a" strokeWidth="3" />
                <rect x="72" y="60" width="44" height="46" rx="18" fill="#c72a4a" />
                <rect x="72" y="150" width="44" height="100" rx="0" fill="#c72a4a" opacity="0.85" />
              </g>
              <g>
                <rect x="138" y="36" width="44" height="214" rx="22" fill="#fff" stroke="#303030" strokeWidth="3" />
                <rect x="138" y="36" width="44" height="46" rx="18" fill="#303030" />
                <rect x="138" y="128" width="44" height="122" rx="0" fill="#f6ecec" />
              </g>
              <g>
                <rect x="204" y="76" width="44" height="174" rx="22" fill="#fff" stroke="#c72a4a" strokeWidth="3" />
                <rect x="204" y="76" width="44" height="46" rx="18" fill="#c72a4a" />
                <rect x="204" y="170" width="44" height="80" rx="0" fill="#606060" opacity="0.6" />
              </g>
              <text x="160" y="278" textAnchor="middle" fontSize="13" fill="#606060" fontFamily="inherit">
                Painel de coleta, uma amostra por exame
              </text>
            </svg>
          </div>
        </section>

        {/* SELETOR */}
        <section id="coleta" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Qual é a coleta para este caso?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              Três passos. O resultado é uma orientação inicial, com os dados que o laboratório precisa para receber a amostra.
            </p>
            <div className="mt-6 rounded-xl border border-line bg-paper px-4 py-3 text-sm text-muted">
              <strong className="text-ink">Prévia:</strong> volume, prazo e conservação aparecem como “a confirmar”
              até a tabela ser validada pelo laboratório.
            </div>
            <div className="mt-10">
              <SeletorColeta />
            </div>
          </div>
        </section>

        {/* CIDADES */}
        <section id="cidades" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Salvador, região metropolitana e outras cidades da Bahia.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Confirme a logística de coleta da sua cidade pelo WhatsApp antes de enviar a amostra.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {CIDADES_ATENDIDAS.map((cidade) => (
                <li key={cidade} className="flex items-center gap-3 border-b border-line pb-3 font-medium">
                  <span aria-hidden="true" className="size-2 rounded-full bg-brand" />
                  {cidade}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CASOS */}
        <section id="casos" className="bg-soft py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="max-w-3xl font-display text-3xl font-bold sm:text-4xl">
              Achados da semana, explicados para quem decide a conduta.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              Casos do nosso dia a dia com a leitura do laudo em linguagem clínica. Use o filtro para ver só cães ou gatos.
            </p>
            <div className="mt-10">
              <CasosDaSemana />
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">Uma bancada completa para a rotina clínica.</h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {SERVICOS.map((servico) => (
              <li key={servico.nome} className="bg-white p-6">
                <h3 className="text-lg font-semibold">{servico.nome}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{servico.texto}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* DOIS CAMINHOS */}
        <section id="para-quem" className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
            <article className="rounded-2xl bg-ink p-8 text-white sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#ffffff]">Para clínicas e hospitais</p>
              <h2 className="mt-3 font-display text-3xl font-bold">Parceria técnica, não só entrega de laudo.</h2>
              <ul className="mt-6 space-y-3 text-white/85">
                <li>Suporte técnico para interpretar o resultado com o clínico.</li>
                <li>Tabela de serviços completa para consulta e repasse.</li>
                <li>Atendimento direto pelo WhatsApp da equipe.</li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={WHATSAPP_URL} className="inline-flex justify-center rounded-full bg-white px-6 py-3 font-semibold text-ink hover:bg-soft">
                  Falar com a equipe
                </a>
                <a href={TABELA_SERVICOS_URL} className="inline-flex justify-center rounded-full border border-white/40 px-6 py-3 font-semibold text-white hover:border-white">
                  Tabela de serviços (PDF)
                </a>
              </div>
            </article>

            <article className="rounded-2xl border border-line bg-paper p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">Para tutores</p>
              <h2 className="mt-3 font-display text-3xl font-bold">Entenda o resultado com o seu veterinário.</h2>
              <p className="mt-5 leading-relaxed text-muted">
                O laudo é feito para o veterinário, que conversa com você sobre o que ele significa para o seu pet.
                Se tiver dúvida, peça ao seu veterinário que retome o laudo com a gente.
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                Tem plano de saúde pet? O laboratório divulgou parceria com Petlove, Pet Health, Plamev e Care Saúde
                Animal. Confirme a cobertura no seu plano antes da coleta.
              </p>
            </article>
          </div>
        </section>

        {/* QUALIDADE */}
        <section id="qualidade" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">Qualidade que você pode conferir.</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {QUALIDADE.map((item) => (
              <li key={item.titulo} className="border-t-2 border-brand pt-5">
                <h3 className="text-lg font-semibold">{item.titulo}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.texto}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* CONTATO */}
        <section id="contato" className="bg-brand py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr] md:items-end">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Fale com a equipe técnica.</h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/90">
                Dúvida de coleta, urgência ou pedido de material. Resposta pelo WhatsApp.
              </p>
              <a href={WHATSAPP_URL} className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 font-semibold text-brand-deep hover:bg-soft">
                Chamar no WhatsApp
              </a>
            </div>
            <ul className="space-y-3 text-white/95">
              <li>
                WhatsApp: <span className="font-semibold">{WHATSAPP_EXIBICAO}</span>
              </li>
              <li>
                E-mail: <a href={`mailto:${EMAIL}`} className="font-semibold underline underline-offset-4">{EMAIL}</a>
              </li>
              <li>
                Instagram:{' '}
                <a href={INSTAGRAM_URL} className="font-semibold underline underline-offset-4">
                  @laboratest_vet
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-ink py-8 text-sm text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:px-6">
          <p className="font-display text-lg font-bold text-white">
            labora<span className="text-[#ffffff]">TEST</span>
          </p>
          <p>© 2021 a 2026 LaboraTEST, Centro de Diagnóstico Veterinário. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
