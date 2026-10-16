import Link from 'next/link';
import { EMAIL, INSTAGRAM_URL, WHATSAPP_EXIBICAO, WHATSAPP_URL } from '@/data/contato';
import { asset, externo, NAV_CLINICAS, NAV_PRINCIPAL } from '@/lib/site';

export function Rodape() {
  return (
    <footer className="border-t border-line bg-paper py-10 text-sm text-muted">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto_auto] md:gap-14">
        <div>
          <img
            src={asset('/img/logo-laboratest.png')}
            alt="LaboraTEST, Centro de Diagnóstico Veterinário"
            width={169}
            height={40}
            loading="lazy"
            className="h-10 w-auto"
          />
          <ul className="mt-5 space-y-1">
            <li>
              <a href={WHATSAPP_URL} {...externo} className="font-semibold text-graphite hover:text-brand">
                WhatsApp {WHATSAPP_EXIBICAO}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="font-semibold text-graphite hover:text-brand">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} {...externo} className="font-semibold text-graphite hover:text-brand">
                @laboratest_vet
              </a>
            </li>
          </ul>
        </div>
        <nav aria-label="Site">
          <ul className="space-y-2 font-semibold text-graphite">
            {NAV_PRINCIPAL.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Para clínicas no rodapé">
          <ul className="space-y-2 font-semibold text-graphite">
            {NAV_CLINICAS.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        © 2021 a 2026 LaboraTEST, Centro de Diagnóstico Veterinário. Todos os direitos reservados.
      </p>
    </footer>
  );
}
