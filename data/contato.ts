// Dados de contato extraídos do site atual. Endereço e CNPJ ficaram de fora até o laboratório
// confirmar, e o número do WhatsApp precisa de teste real. Ver docs/nova-versao.md.

export const WHATSAPP_NUMERO = '5571996760025';
export const WHATSAPP_EXIBICAO = '(71) 9 9676-0025';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}`;

export function whatsappComTexto(texto: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(texto)}`;
}

export const EMAIL = 'contato@laboratest.com.br';
export const INSTAGRAM_URL = 'https://www.instagram.com/laboratest_vet/';
// Funções do site atual que as clínicas usam (páginas do próprio laboratório).
export const RESULTADOS_URL = 'https://www.laboratest.com.br/resultados';
export const SOLICITAR_EXAMES_URL = 'https://www.laboratest.com.br/solicitar-exames';
export const SOLICITAR_MATERIAL_URL = 'https://www.laboratest.com.br/solicitar-material';

export const TABELA_SERVICOS_URL =
  'https://www.laboratest.com.br/_files/ugd/21bda8_5c827e356f224e0788066aae04a8d127.pdf';

export const CIDADES_ATENDIDAS = [
  'Salvador',
  'Lauro de Freitas',
  'Camaçari',
  'Simões Filho',
  'Candeias',
  'Dias d’Ávila',
  'Arembepe',
  'Jauá',
  'Pojuca',
  'São Sebastião do Passé',
  'Irecê',
  'Mata de São João',
  'Guarajuba',
  'Barra de Jacuípe',
];
