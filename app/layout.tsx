import type { Metadata, Viewport } from 'next';
import './globals.css';
import { CIDADES_ATENDIDAS, EMAIL, WHATSAPP_EXIBICAO, WHATSAPP_NUMERO, INSTAGRAM_URL } from '@/data/contato';

const SITE_URL = 'https://www.laboratest.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'LaboraTEST | Diagnóstico veterinário em Salvador e região',
  description:
    'Centro de diagnóstico veterinário em Salvador, BA. Hematologia, bioquímica, citologia, parasitologia e microbiologia, com coleta em Salvador e região.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'LaboraTEST | Diagnóstico veterinário em Salvador e região',
    description: 'Diagnóstico veterinário com precisão, agilidade e responsabilidade técnica. Solicite exames, material e acesse resultados.',
    url: SITE_URL,
    siteName: 'LaboraTEST',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: { icon: `${process.env.BASE_PATH ?? ''}/icon.svg` },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&family=Nunito+Sans:wght@400;600;700&family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
      </head>
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
