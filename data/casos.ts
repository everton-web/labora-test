// Achados da semana. Textos baseados nos posts publicados pelo laboratório.
// Rascunhos: revisão técnica do corpo clínico do laboratório antes de publicar.

export type Caso = {
  id: string;
  titulo: string;
  especies: ('Cães' | 'Gatos')[];
  metodo: string;
  achado: string;
  porqueImporta: string;
};

export const CASOS: Caso[] = [
  {
    id: 'plasmocitoma',
    titulo: 'Plasmocitoma: quando a citologia já orienta a conduta',
    especies: ['Cães'],
    metodo: 'Citologia',
    achado:
      'Nódulo cutâneo com população de células redondas. O padrão citológico costuma apontar para plasmocitoma.',
    porqueImporta:
      'Uma leitura rápida na citologia pode evitar uma espera longa por biópsia e orientar a conversa com o tutor.',
  },
  {
    id: 'criptococose',
    titulo: 'Criptococose: uma micose que exige atenção',
    especies: ['Gatos', 'Cães'],
    metodo: 'Citologia',
    achado:
      'Leveduras arredondadas, com cápsula evidente, compatíveis com Cryptococcus spp.',
    porqueImporta:
      'Pela citologia é possível sugerir o diagnóstico cedo, o que muda a urgência do tratamento e a orientação ao tutor.',
  },
  {
    id: 'mama',
    titulo: 'Outubro também é rosa para quem tem quatro patas',
    especies: ['Cães', 'Gatos'],
    metodo: 'Histopatologia',
    achado:
      'Tumores de mama em cadelas e gatas. A maioria é avaliada por histopatologia, que define o tipo e o grau do tumor.',
    porqueImporta:
      'O laudo histopatológico é a base para decidir entre acompanhamento e cirurgia, e para estimar o prognóstico.',
  },
];
