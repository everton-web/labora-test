import type { ReactNode } from 'react';

type CampoProps = {
  id: string;
  label: string;
  tipo?: 'text' | 'email' | 'tel' | 'date' | 'number';
  autoComplete?: string;
  ajuda?: string;
  min?: number;
  inputMode?: 'numeric' | 'text' | 'tel' | 'email';
  lista?: string;
};

export function Campo({ id, label, tipo = 'text', autoComplete, ajuda, min, inputMode, lista }: CampoProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-semibold text-graphite">
        {label}
      </label>
      <input
        id={id}
        type={tipo}
        autoComplete={autoComplete ?? 'off'}
        min={min}
        inputMode={inputMode}
        list={lista}
        aria-describedby={ajuda ? `${id}-ajuda` : undefined}
        className="campo"
      />
      {ajuda ? (
        <p id={`${id}-ajuda`} className="mt-1 text-sm text-muted">
          {ajuda}
        </p>
      ) : null}
    </div>
  );
}

export function AreaTexto({ id, label }: { id: string; label: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-semibold text-graphite">
        {label}
      </label>
      <textarea id={id} rows={4} className="campo" />
    </div>
  );
}

export function Grupo({ legenda, children }: { legenda: string; children: ReactNode }) {
  return (
    <fieldset>
      <legend className="mb-2 font-semibold text-graphite">{legenda}</legend>
      {children}
    </fieldset>
  );
}

export function Opcao({ id, label, tipo, grupo }: { id: string; label: string; tipo: 'radio' | 'checkbox'; grupo?: string }) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3 font-semibold text-graphite transition hover:border-brand has-[:checked]:border-brand has-[:checked]:bg-soft"
    >
      <input id={id} type={tipo} name={tipo === 'radio' ? grupo : undefined} className="marca" />
      {label}
    </label>
  );
}

// Cartão branco que envolve cada formulário.
export function Cartao({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-line bg-paper p-5 sm:p-8 ${className}`}>{children}</div>;
}
