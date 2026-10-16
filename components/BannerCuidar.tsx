'use client';

import { useEffect, useRef } from 'react';
import { asset } from '@/lib/site';

// Faixa afetiva com efeito de rolagem. O JS só calcula --p (0 a 1) a partir da posição da seção;
// todo o movimento está no CSS (.cuidar em app/globals.css). Sem JS, ou com movimento reduzido,
// --p fica em 1 e o texto final aparece parado.
export function BannerCuidar() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    el.dataset.anim = '';
    let raf = 0;

    const atualizar = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Começa um pouco antes do palco fixar (35% da tela) e termina quando a seção sai.
      const inicio = vh * 0.35;
      const percurso = Math.max(r.height - vh, 1) + inicio;
      const p = Math.min(1, Math.max(0, (inicio - r.top) / percurso));
      el.style.setProperty('--p', p.toFixed(4));
    };
    const agendar = () => {
      if (!raf) raf = requestAnimationFrame(atualizar);
    };

    atualizar();
    window.addEventListener('scroll', agendar, { passive: true });
    window.addEventListener('resize', agendar);
    return () => {
      window.removeEventListener('scroll', agendar);
      window.removeEventListener('resize', agendar);
      if (raf) cancelAnimationFrame(raf);
      delete el.dataset.anim;
      el.style.removeProperty('--p');
    };
  }, []);

  return (
    <section ref={ref} className="cuidar" aria-labelledby="cuidar-titulo">
      <div className="cuidar__palco">
        <div aria-hidden="true" className="cuidar__tom" />
        <img
          src={asset('/img/banner-cuidar-esquerda.webp')}
          alt=""
          width={615}
          height={599}
          loading="lazy"
          className="cuidar__foto cuidar__foto--esq"
        />
        <img
          src={asset('/img/banner-cuidar-direita.webp')}
          alt=""
          width={404}
          height={599}
          loading="lazy"
          className="cuidar__foto cuidar__foto--dir"
        />
        <div className="cuidar__texto">
          <h2 id="cuidar-titulo" className="cuidar__titulo">
            <span className="cuidar__linha1">
              <span className="cuidar__onde">Onde</span>{' '}
              <span className="cuidar__script">cuidar</span>
            </span>{' '}
            <span className="cuidar__linha2">
              <span className="cuidar__w1">Significa</span>{' '}
              <span className="cuidar__w2">Mais!</span>
            </span>
          </h2>
          <p className="cuidar__apoio">A vida por trás de cada exame vale ouro!</p>
        </div>
      </div>
    </section>
  );
}
