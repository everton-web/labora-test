// Tabela de coleta do seletor. PRÉVIA: todos os itens estão com `validado: false`.
// Volume, prazo e conservação só entram com a confirmação do laboratório.
// Enquanto isso, o site mostra "a confirmar" em vez de um número inventado.

export type Especie = { id: string; label: string };
export type Suspeita = { id: string; label: string; urgente: boolean };
export type Exame = {
  id: string;
  nome: string;
  suspeitas: string[];
  especies: string[];
  material: string;
  recipiente: string;
  volume: string;
  conservacao: string;
  prazo: string;
  observacao: string;
  validado: boolean;
};

export const ESPECIES: Especie[] = [
  { id: 'cao', label: 'Cão' },
  { id: 'gato', label: 'Gato' },
  { id: 'outras', label: 'Outra espécie' },
];

export const SUSPEITAS: Suspeita[] = [
  { id: 'rotina', label: 'Check-up ou rotina', urgente: false },
  { id: 'anemia', label: 'Palidez, fraqueza ou sangramento', urgente: false },
  { id: 'infeccao', label: 'Febre ou suspeita de infecção', urgente: false },
  { id: 'renal', label: 'Função renal ou hepática', urgente: false },
  { id: 'urinario', label: 'Alteração na urina', urgente: false },
  { id: 'lesao', label: 'Nódulo ou lesão na pele', urgente: false },
  { id: 'agudo', label: 'Sinais agudos, como colapso ou convulsão', urgente: true },
];

const A_CONFIRMAR = 'a confirmar com o laboratório';

export const EXAMES: Exame[] = [
  {
    id: 'hemograma',
    nome: 'Hemograma completo',
    suspeitas: ['rotina', 'anemia', 'infeccao', 'agudo'],
    especies: ['cao', 'gato'],
    material: 'Sangue total',
    recipiente: 'Tubo com anticoagulante EDTA',
    volume: A_CONFIRMAR,
    conservacao: A_CONFIRMAR,
    prazo: A_CONFIRMAR,
    observacao: 'Homogeneizar bem o tubo antes do envio. Sangue sem anticoagulante coagula e não serve.',
    validado: false,
  },
  {
    id: 'bioquimica',
    nome: 'Bioquímica (perfil renal e hepático)',
    suspeitas: ['rotina', 'renal', 'agudo'],
    especies: ['cao', 'gato'],
    material: 'Soro',
    recipiente: 'Tubo seco ou com gel separador',
    volume: A_CONFIRMAR,
    conservacao: A_CONFIRMAR,
    prazo: A_CONFIRMAR,
    observacao: 'Separar o soro do coágulo o quanto antes. Amostra hemolisada ou lipêmica pode alterar valores.',
    validado: false,
  },
  {
    id: 'urinalise',
    nome: 'Urinálise',
    suspeitas: ['rotina', 'urinario', 'renal'],
    especies: ['cao', 'gato'],
    material: 'Urina',
    recipiente: 'Frasco estéril, sem conservante',
    volume: A_CONFIRMAR,
    conservacao: A_CONFIRMAR,
    prazo: A_CONFIRMAR,
    observacao: 'A primeira urina da manhã costuma ser a mais concentrada e a mais útil.',
    validado: false,
  },
  {
    id: 'citologia',
    nome: 'Citologia',
    suspeitas: ['lesao', 'infeccao'],
    especies: ['cao', 'gato', 'outras'],
    material: 'Células da lesão ou de líquido',
    recipiente: 'Lâmina identificada, com ficha de coleta',
    volume: 'Esfregaço ou impressão, sem volume mínimo',
    conservacao: 'Lâmina seca, ao abrigo da umidade',
    prazo: A_CONFIRMAR,
    observacao: 'Informe a localização da lesão e há quanto tempo ela existe.',
    validado: false,
  },
  {
    id: 'histopatologia',
    nome: 'Histopatologia',
    suspeitas: ['lesao'],
    especies: ['cao', 'gato', 'outras'],
    material: 'Biópsia ou peça cirúrgica',
    recipiente: 'Frasco com formol tamponado',
    volume: 'Fragmento inteiro, sem cortar em excesso',
    conservacao: 'Temperatura ambiente, em formol',
    prazo: A_CONFIRMAR,
    observacao: 'Não deixe a amostra secar. Envie a ficha com o histórico clínico do paciente.',
    validado: false,
  },
];

export const OUTRAS_ESPECIES_MENSAGEM =
  'Aves, répteis e pets não convencionais têm protocolo próprio de coleta. Fale com o laboratório antes de colher.';
