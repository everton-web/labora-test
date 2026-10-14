'use client';

import { useMemo, useState } from 'react';
import { ESPECIES, EXAMES, OUTRAS_ESPECIES_MENSAGEM, SUSPEITAS } from '@/data/coleta';
import { whatsappComTexto } from '@/data/contato';

export default function SeletorColeta() {
  const [especie, setEspecie] = useState('cao');
  const [suspeita, setSuspeita] = useState('rotina');

  const especieAtual = ESPECIES.find((e) => e.id === especie);
  const suspeitaAtual = SUSPEITAS.find((s) => s.id === suspeita);

  const exames = useMemo(
    () => EXAMES.filter((e) => e.especies.includes(especie) && e.suspeitas.includes(suspeita)),
    [especie, suspeita],
  );

  const pedido = whatsappComTexto(
    `Olá! Quero orientação para coleta. Espécie: ${especieAtual?.label}. ` +
      `Suspeita: ${suspeitaAtual?.label}. Exames sugeridos: ${exames.map((e) => e.nome).join(', ') || 'a definir'}.`,
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
      <div className="space-y-8">
        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
            1. Espécie
          </legend>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {ESPECIES.map((item) => (
              <label
                key={item.id}
                className="cursor-pointer rounded-xl border border-line bg-white px-3 py-3 text-center text-sm font-medium transition has-[:checked]:border-brand has-[:checked]:bg-soft has-[:checked]:text-brand-deep"
              >
                <input
                  type="radio"
                  name="especie"
                  value={item.id}
                  checked={especie === item.id}
                  onChange={() => setEspecie(item.id)}
                  className="sr-only"
                />
                {item.label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
            2. Suspeita clínica
          </legend>
          <div className="mt-3 flex flex-col gap-2">
            {SUSPEITAS.map((item) => (
              <label
                key={item.id}
                className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm transition has-[:checked]:border-brand has-[:checked]:bg-soft"
              >
                <span className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="suspeita"
                    value={item.id}
                    checked={suspeita === item.id}
                    onChange={() => setSuspeita(item.id)}
                    className="size-4 accent-[var(--color-brand)]"
                  />
                  {item.label}
                </span>
                {item.urgente && (
                  <span className="rounded-full bg-brand px-2 py-0.5 text-xs font-semibold text-white">
                    urgente
                  </span>
                )}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div aria-live="polite" className="rounded-2xl border border-line bg-white p-5 sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">3. Coleta indicada</p>

        {especie === 'outras' ? (
          <p className="mt-4 text-base leading-relaxed text-muted">{OUTRAS_ESPECIES_MENSAGEM}</p>
        ) : exames.length === 0 ? (
          <p className="mt-4 text-base leading-relaxed text-muted">
            Não há painel padrão para essa combinação. Fale com a equipe técnica para definir a coleta.
          </p>
        ) : (
          <ul className="mt-4 space-y-5">
            {exames.map((exame) => (
              <li key={exame.id} className="border-t border-line pt-5 first:border-t-0 first:pt-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold">{exame.nome}</h3>
                  {!exame.validado && (
                    <span className="rounded-full border border-line px-2 py-0.5 text-xs text-muted">
                      em validação
                    </span>
                  )}
                </div>
                <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
                  <dt className="font-medium text-muted">Material</dt>
                  <dd>{exame.material}</dd>
                  <dt className="font-medium text-muted">Recipiente</dt>
                  <dd>{exame.recipiente}</dd>
                  <dt className="font-medium text-muted">Volume</dt>
                  <dd>{exame.volume}</dd>
                  <dt className="font-medium text-muted">Conservação</dt>
                  <dd>{exame.conservacao}</dd>
                  <dt className="font-medium text-muted">Prazo</dt>
                  <dd>{exame.prazo}</dd>
                </dl>
                <p className="mt-3 text-sm leading-relaxed text-muted">{exame.observacao}</p>
              </li>
            ))}
          </ul>
        )}

        {suspeitaAtual?.urgente && (
          <div className="mt-6 rounded-xl bg-brand p-4 text-white">
            <p className="font-semibold">Caso urgente? Não espere o formulário.</p>
            <p className="mt-1 text-sm text-white/90">
              Chame a equipe agora pelo WhatsApp para definir a prioridade da amostra.
            </p>
          </div>
        )}

        <a
          href={pedido}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep sm:w-auto"
        >
          Pedir esta coleta pelo WhatsApp
        </a>
        <p className="mt-3 text-xs text-muted">
          Esta é uma orientação inicial. A decisão de exames é sempre do médico-veterinário responsável.
        </p>
      </div>
    </div>
  );
}
