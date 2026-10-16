import type { Metadata } from 'next';
import { Cartao } from '@/components/Campos';
import { PaginaPrototipo } from '@/components/PaginaPrototipo';

// Texto reproduzido do site atual (laboratest.com.br/normas), sem alteração de conteúdo.
const ARTIGOS: { titulo: string; texto: string }[] = [
  {
    "titulo": "Art. 1º",
    "texto": "As coletas de material são feitas em 02 turnos, período da manhã e período da tarde, para o período da manhã, as coletas podem ser solicitadas no dia anterior ou até às 09:00 horas do dia vigente, e paras as coletas para o turno da tarde, solicitar até as 14:00 horas do dia vigente."
  },
  {
    "titulo": "Art. 2º",
    "texto": "As coletas no período da manhã ocorrem das 08:00 às 12:00hrs e no período da tarde das 13:00 às 17:00hrs, o motoboy poderá estar passando entre esses horários para efetuar a coleta da amostra."
  },
  {
    "titulo": "Art. 3",
    "texto": "Quando o motoboy chegar para fazer a retirada da amostra a mesma já deve estar coletada para entrega, em caso de atraso o tempo máximo de espera do motoboy para retirada da coleta é de 05 (cinco) minutos, passando deste prazo ele terá que seguir a rota, para não atrasar as demais coletas."
  },
  {
    "titulo": "Art. 4",
    "texto": "Em caso de solicitação de coleta e chegando no endereço informado, o local se encontrando fechado ou não tendo amostra para ser coletada, será cobrada uma taxa de R$ 20,00 reais na fatura pelo deslocamento."
  },
  {
    "titulo": "Art. 5",
    "texto": "Excedendo os horários de solicitação de coleta, não será mais possível adicionar o endereço na rota. A coleta será automaticamente feita no próximo roteiro (dias úteis). Caso haja necessidade emergencial de coleta das amostras, disponibilizamos um serviço de coleta extra, onde dedicamos um Motoboy Exclusivo para a realização desta coleta. O investimento neste serviço exclusivo é de R$40,00 em Salvador-BA e Lauro de Freitas."
  },
  {
    "titulo": "Art. 6",
    "texto": "O envio das amostras deverá ser feito juntamente com a requisição, no caso de atraso das requisições as amostras serão processadas no próximo turno (útil). As amostras permanecerão armazenadas no setor de segregação, sem processamento, até o recebimento das informações. Isso independentemente do tipo de amostra, por isso, algumas poderão perder sua viabilidade após 24h. Caso haja impossibilidade de realizar o exame desejado, será comunicado após recebimento das informações."
  },
  {
    "titulo": "Art. 7",
    "texto": "Lembramos que as solicitações precisam ser recebidas antes da entrada das amostras no setor de triagem quando enviadas pelo site ou aplicativo. Evite perda de amostras. O laboratório não se responsabiliza por atrasos nos resultados ou descarte de amostras enviadas sem os dados completos."
  },
  {
    "titulo": "Art. 8",
    "texto": "Após o envio dos dados, as amostras só darão entrada na rotina no mesmo turno do envio, caso os dados sejam enviados até as 12:00hrs (turno da manhã) ou até às 17:00hrs (turno da tarde). Após este período as amostras serão processadas no próximo turno (dias úteis)."
  },
  {
    "titulo": "Art. 9",
    "texto": "Em caso de amostra inadequada, ausente ou insuficiente para realização dos exames, será emitido um aviso de pendência que ficara disponível no portal."
  },
  {
    "titulo": "Art. 10",
    "texto": "O pagamento dos serviços é realizado através de boleto, com fechamento da fatura no dia 30 de cada mês e prazo para pagamento no dia 10 do mês seguinte."
  },
  {
    "titulo": "Art. 11",
    "texto": "O boleto é enviado por e-mail e via WhatsApp, e eventualmente pode ser direcionado à caixa spam ou lixeira, por isso verifique estas opções caso não receba seu boleto até o dia 05 (cinco), entre em contato com o setor financeiro. ( 71999142701 )."
  },
  {
    "titulo": "Art. 12",
    "texto": "O laboratório LaboraTEST, se reserva o direito de suspender os serviços após 07 dias de inadimplência, a contar da data de vencimento da fatura (caso não tenha sido feita negociação da dívida). Os pagamentos devem seguir a data informada pelo laboratório, ou uma data previamente acertada. Negociações de faturas devem ser realizadas com o laboratório, não devendo ser entregues aos motoboys quaisquer valores (valores parciais, cheques, etc.) sem o conhecimento do setor financeiro."
  },
  {
    "titulo": "Art. 13",
    "texto": "Caso deixem de trabalhar com a gente, pedimos apenas que avisem com 15 dias de antecedência, pois preparamos nossa operação para lhe atender, compramos + tubos + reagentes + adicional para o motoboy e tudo isso tem um custo, o seu aviso com antecedência somente nos prepara para organizar a rotina à triste e nova realidade, pois não gostaríamos que você fosse, mas sabemos que apesar de fazermos o nosso melhor não conseguimos agradar a todos, contudo caso você tenha alguma sugestão ou reclamação à fazer não deixe de entrar em contato conosco através do WhatsApp."
  },
  {
    "titulo": "Art. 14",
    "texto": "Nos encontramos em momentos difíceis, por isso pedimos a compreensão de todos nossos colaboradores, ao usar o material de coleta usar com consciência não praticando o desperdiço. Em caso de dúvidas de que material utilizar para coleta, entre em contato com o nosso setor técnico pelo número 71 99323-2953 . 1.1.: Para as cidades de Camaçari (centro da cidade) e Simões Filho a logística ocorre em apenas um turno, o vespertino. 1.1.2.: Solicitar no mesmo dia até às 13 horas. 2.1.: Devido a dinâmica das rotas (com entrada e saída de endereços), não é possível determinar com precisão a chegada do Motoboy. 2.1.2.: Não há como fixar horário. 5.1.: O serviço de coleta extra não está disponível para as cidades de Camaçari e Simões Filho. 5.1.2.: Coleta extra não é equivalente à taxa de urgência. 8.1.: Após 48 horas (dias úteis) as amostras sem requisição serão descartadas imediatamente, sem novo aviso. 12.1.: Após 30 dias de seu título vencido o mesmo poderá ser protestado pelo LaboraTEST. Evite a negativação do seu CPF/CNPJ no SERASA. Parágrafo único. É vedado ao laboratório realizar exames sem requisição / RESOLUÇÃO Nº 1.374, DE 2 DE DEZEMBRO DE 2020 - CFMV"
  }
];

export const metadata: Metadata = {
  title: 'Normas e termos | LaboraTEST',
  description: 'Normas e termos de coleta e pagamento do LaboraTEST.',
  alternates: { canonical: '/normas/' },
};

export default function Normas() {
  return (
    <PaginaPrototipo
      atual="normas"
      rotulo="Transparência"
      titulo="Normas e termos"
      introducao={<p>Visando um melhor relacionamento e transparência com os clientes, institui-se normas e termos.</p>}
    >
      <Cartao className="max-w-4xl">
        <div className="grid gap-4">
          {ARTIGOS.map((artigo) => (
            <article key={artigo.titulo} className="rounded-2xl border border-line bg-white p-5">
              <h2 className="font-display text-lg font-extrabold text-graphite">{artigo.titulo}</h2>
              <p className="mt-2 leading-relaxed text-graphite">{artigo.texto}</p>
            </article>
          ))}
        </div>
      </Cartao>
    </PaginaPrototipo>
  );
}
