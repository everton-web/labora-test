'use client';

import { useState } from 'react';
import { CASOS } from '@/data/casos';

const FILTROS = ['Todos', 'Cães', 'Gatos'] as const;
type Filtro = (typeof FILTROS)[number];

export default function CasosDaSemana() {
  const [filtro, setFiltro] = useState<Filtro>('Todos');

  const casos = CASOS.filter((caso) => filtro === 'Todos' || caso.especies.includes(filtro as 'Cães' | 'Gatos'));

  return (
    <div>
      <div role="group" aria-label="Filtrar por espécie" className="flex flex-wrap gap-2">
        {FILTROS.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filtro === item}
            onClick={() => setFiltro(item)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              filtro === item
                ? 'border-brand bg-brand text-white'
                : 'border-line bg-white text-ink hover:border-brand'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-5 md:grid-cols-3">
        {casos.map((caso) => (
          <li key={caso.id} className="flex flex-col rounded-2xl border border-line bg-white p-6">
            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
              <span className="rounded-full bg-soft px-2.5 py-1 text-brand-deep">{caso.metodo}</span>
              <span className="rounded-full border border-line px-2.5 py-1 text-muted">
                {caso.especies.join(' e ')}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold leading-snug">{caso.titulo}</h3>
            <p className="mt-4 text-sm font-semibold text-ink">O achado</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{caso.achado}</p>
            <p className="mt-4 text-sm font-semibold text-ink">Por que importa</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{caso.porqueImporta}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
