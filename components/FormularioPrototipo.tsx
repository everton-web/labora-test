'use client';

import { useRef, useState, type FormEvent, type ReactNode } from 'react';

// Formulário de protótipo: nada é enviado nem gravado. O envio só mostra a mensagem de simulação.
// Os campos de texto não têm `name`: nem um envio sem JS leva o que foi digitado para a URL.
export function FormularioPrototipo({
  rotulo,
  botao,
  mensagem,
  children,
}: {
  rotulo: string;
  botao: string;
  mensagem: string;
  children: ReactNode;
}) {
  const [enviado, setEnviado] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);

  function simular(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  return (
    <form aria-label={rotulo} onSubmit={simular} noValidate className="grid gap-5">
      {children}
      <div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-brand px-7 py-3.5 font-bold text-white shadow-sm transition hover:bg-brand-deep sm:w-auto"
        >
          {botao}
        </button>
      </div>
      <div role="status" aria-live="polite">
        {enviado ? (
          <div
            ref={statusRef}
            tabIndex={-1}
            className="rounded-2xl border-2 border-dashed border-graphite bg-soft p-5 text-graphite"
          >
            <p className="font-display text-lg font-extrabold">Simulação</p>
            <p className="mt-1">{mensagem}</p>
          </div>
        ) : null}
      </div>
    </form>
  );
}
