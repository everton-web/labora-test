import type { Metadata, Viewport } from 'next';
import './globals.css';
import { CIDADES_ATENDIDAS, EMAIL, WHATSAPP_EXIBICAO, WHATSAPP_NUMERO, INSTAGRAM_URL } from '@/data/contato';

const SITE_URL = 'https://www.laboratest.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'LaboraTEST | Diagnóstico veterinário em Salvador e região',
  description:
    'Laboratório veterinário em Salvador, BA. Hematologia, bioquímica, citologia e histopatologia, com revisão técnica e laudos interpretativos para clínicas e tutores.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'LaboraTEST | Diagnóstico veterinário em Salvador e região',
    description: 'Monte a coleta certa para o seu caso e fale com a equipe técnica pelo WhatsApp.',
    url: SITE_URL,
    siteName: 'LaboraTEST',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: { icon: '/icon.svg' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fbf8f6',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'LaboraTEST, Centro de Diagnóstico Veterinário',
  url: SITE_URL,
  telephone: `+${WHATSAPP_NUMERO}`,
  email: EMAIL,
  sameAs: [INSTAGRAM_URL],
  areaServed: CIDADES_ATENDIDAS.map((cidade) => ({ '@type': 'City', name: cidade })),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: `+${WHATSAPP_NUMERO}`,
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
    description: WHATSAPP_EXIBICAO,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
