# Relatório: site atual do LaboraTEST

**Site analisado:** https://www.laboratest.com.br/
**Plataforma:** Wix (gerador do próprio site, com `generator` declarado no HTML)
**Data da análise:** 14/10/2026
**Escopo:** estrutura, conteúdo, comunicação, responsividade, SEO técnico e medição.

## Como a análise foi feita

- HTML da home baixado diretamente e contado com `grep` (tamanho, imagens, scripts, links, tags).
- Captura de tela com Chromium em 1440 px (desktop) e 390 px (mobile), medindo a largura real da página.
- Leitura do texto visível por um agente de leitura de páginas, que cruzou o conteúdo com o HTML.
- O repositório `everton-web/labora-test` estava vazio (sem commits), então não há código para auditar. Toda a análise é da versão publicada.

**Limite:** não testei as páginas `/resultados`, `/solicitar-exames` e `/solicitar-material`. Os destinos que aparecem neste relatório vêm do texto da home.

## Resumo executivo

O site atual apresenta o laboratório com competência, mas não ajuda a clínica a agir. A home fala sobre o laboratório (adjetivos como "precisão", "agilidade" e "responsabilidade técnica") e empurra o visitante para formulários e para o Instagram, sem explicar o próximo passo.

O problema mais grave é técnico e imediato: **no celular a página fica mais larga que a tela** (1075 px num aparelho de 390 px). O título é cortado e o botão "Falar com o Laboratório" sai da área visível. Quem chega pelo celular, que é a maioria dos veterinários e tutores, vê uma página quebrada logo na primeira dobra.

## Pontos fortes (manter)

- **Mapa de cidades atendidas.** A seção com 14 cidades da Bahia é clara e visualmente forte. Está escondida no carrossel do hero e deve ganhar destaque própria.
- **Conteúdo técnico real.** Os posts de "Achado da semana" (plasmocitoma, criptococose, histopatologia, controle de qualidade) mostram competência de verdade. Ninguém mais no nicho de laboratórios veterinários tem esse tipo de conteúdo organizado.
- **Canais de contato claros.** WhatsApp, telefone, e-mail e Instagram estão visíveis.
- **Dados estruturados.** Há um bloco JSON-LD do tipo `LocalBusiness` e `WebSite`, o que é um bom começo para SEO local.
- **Identidade.** O vermelho da marca é reconhecível e tem bom contraste com o branco.

## Fragilidades, por prioridade

### Críticas (afetam quem chega hoje)

**1. Layout quebrado no mobile.** A largura medida no celular foi de 1075 px numa tela de 390 px. O título do hero aparece cortado ("Diagnóstico Veterinário c..."), e o botão "Falar com o Laboratório" fica fora da tela. Prints em `docs/prints/site-atual-mobile-390.png` e `docs/prints/site-atual-mobile-390-pagina-inteira.png`.

**2. Proposta de valor genérica.** A manchete "Diagnóstico Veterinário com precisão, agilidade e responsabilidade técnica" serve para qualquer laboratório do país. Não há diferencial verificável na primeira dobra.

**3. Nenhum caminho de decisão para a clínica.** A home tem três CTAs ("Solicitar Exames", "Solicitar Material", "Falar com o Laboratório") sem explicar o que cada um faz. O veterinário que quer saber qual coleta fazer para um caso precisa montar essa resposta sozinho, ou perguntar pelo WhatsApp.

### Altas (afetam conversão e confiança)

**4. O conteúdo principal está dentro de um embed do Instagram.** O feed embutido tem 33 links para o Instagram, e a página carrega 23 scripts. Os melhores conteúdos do laboratório ficam presos a um widget que o Google indexa mal e que o visitante não consegue pesquisar nem filtrar.

**5. Peso da página.** O HTML tem cerca de 1,1 MB, com 76 imagens e 23 scripts. Para uma página institucional, isso é muito, e no celular em rede móvel a primeira renderização tende a ser lenta. (Não medi Core Web Vitals; o número é do HTML bruto.)

**6. Estrutura de títulos confusa para o SEO.** O HTML tem 14 tags `<h1>`. Parte pode vir do tema do Wix, mas o correto é uma única `<h1>` por página, com as demais como `<h2>`.

**7. Link do WhatsApp possivelmente quebrado.** O link atual é `https://wa.me/71996760025`, sem o código do país (55). Nessa forma, o WhatsApp pode não abrir a conversa. Precisa de teste real no celular. A versão nova usa `5571996760025`.

**8. Medição não encontrada.** Não encontrei no HTML nenhum Google Analytics, Google Tag Manager ou Meta Pixel. Se a medição existe, pode estar configurada no painel do Wix e não no HTML. Precisa de conferência no painel antes de qualquer campanha.

### Médias (atrito e clareza)

**9. Menu com destinos repetidos.** "Início", "Nosso Propósito" e "Serviços" levam para a mesma home (segundo o texto da navegação). Quem clica em "Serviços" não chega aos serviços.

**10. "Cadastre-se" sem destino claro.** O botão aparece no topo, ao lado de "Resultados", mas não está claro para quem ele serve nem para onde leva.

**11. Excesso de CTAs sem hierarquia.** O hero tem três botões com peso visual parecido. Não há uma ação principal.

**12. Área de resultados como link secundário.** "Resultados" é o item mais importante para quem já é cliente, e está escondido no topo, sem explicação de como acessar.

**13. Tabela de serviços só em PDF.** A tabela completa é um arquivo PDF. Isso não é indexável nem pesquisável dentro da página, e obriga o visitante a baixar o arquivo para ver preços e exames.

**14. Sem prova numérica.** Nenhum prazo publicado, nenhum volume de exames, nenhum indicador de qualidade. Só adjetivos.

### Baixas (polimento)

**15. E-mail ofuscado pelo Cloudflare no link.** O texto do e-mail (`contato@laboratest.com.br`) aparece normalmente na página, mas o link usa proteção do Cloudflare. A análise preliminar tinha dito que o e-mail estava escondido. Esse ponto foi corrigido aqui: o e-mail está visível. O problema real é só a proteção no link.

**16. Textos alternativos das imagens.** Os posts do Instagram trazem a legenda inteira como texto alternativo de cada imagem, o que polui leitores de tela. Não é um erro grave, mas torna a leitura por voz cansativa.

## Ponto de partida para a nova versão

A nova versão foi construída com base neste relatório. As decisões estão em `docs/nova-versao.md`.
