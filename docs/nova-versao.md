# Nova versão do site LaboraTEST

Esta é a proposta "Bancada Aberta": o site deixa de falar só sobre o laboratório e passa a ajudar a clínica a decidir a coleta.

## O que muda

| Antes | Agora |
|---|---|
| Manchete genérica sobre "precisão e agilidade" | Manchete que responde a uma dúvida real: "Diga a suspeita. A gente diz como coletar." |
| Três CTAs de mesmo peso | Uma ação principal ("Montar a coleta") e uma secundária (WhatsApp) |
| Feed do Instagram embutido | Casos da semana próprios, com filtro por espécie |
| Serviços num bloco de texto | Seis serviços em cards, com a frase de cada área |
| Cidades escondidas no carrossel | Seção própria com as 14 cidades |
| Tabela de serviços só em PDF | Link para o PDF, e a seleção de coleta dentro da página |
| Um caminho só para todo mundo | Caminhos separados para clínicas e para tutores |
| Mobile quebrado | Layout testado em 390, 820 e 1440 px, sem rolagem horizontal |

## Estrutura da página

1. **Hero:** manchete, subtítulo, dois CTAs e uma ilustração de três tubos.
2. **Montar a coleta:** o seletor de três passos (espécie, suspeita, resultado). É o componente central da proposta.
3. **Cidades atendidas:** lista das 14 cidades.
4. **Achados da semana:** três casos com filtro por cães e gatos.
5. **Serviços:** Hematologia, Bioquímica, Citologia, Histopatologia, Parasitologia e Microbiologia.
6. **Para clínicas e para tutores:** dois blocos com caminhos diferentes.
7. **Qualidade:** três compromissos verificáveis.
8. **Contato:** WhatsApp, e-mail e Instagram.

## Como o seletor de coleta funciona

O usuário escolhe a espécie e a suspeita clínica. O seletor cruza os dados de `data/coleta.ts` e mostra, para cada exame indicado, o material, o recipiente, o volume, a conservação, o prazo e uma observação de coleta. Casos marcados como urgentes mostram um aviso para chamar a equipe no WhatsApp. O botão "Pedir esta coleta" abre o WhatsApp com a mensagem já preenchida.

O seletor é uma orientação inicial. A decisão de exames continua sendo do veterinário responsável, e o texto da página diz isso.

## Decisões técnicas

- **Stack:** Next.js com export estático (`output: "export"`), Tailwind v4 e tokens no `app/globals.css`. Segue o padrão da agência para site institucional (ver `CRITERIOS-UI-E-RESPONSIVIDADE.md`, seção 4). O resultado é uma pasta `out/` que sobe na Hostinger, sem runtime no servidor.
- **Sem fonte externa:** as fontes usam a pilha do sistema, para não depender de rede no build e para carregar rápido no celular.
- **Sem imagem do site antigo:** nenhuma imagem foi copiada ou apontada para o Wix. A ilustração do hero é SVG próprio.
- **Acessibilidade:** link para pular ao conteúdo, grupos de campos com `fieldset` e `legend`, resultado em `aria-live`, foco visível e respeito a `prefers-reduced-motion`.
- **SEO:** uma `<h1>` por página, metadados e Open Graph, e JSON-LD `MedicalBusiness` com telefone, e-mail, Instagram e cidades atendidas.
- **Contraste:** vermelho `#a8213f` sobre o fundo `#fbf8f6` tem razão de contraste de 6,7 (acima do mínimo AA de 4,5).

## O que ainda precisa ser confirmado antes de publicar

Estes itens estão marcados no código ou ficaram de fora de propósito:

1. **Tabela de coleta inteira.** Volume, conservação e prazo aparecem como "a confirmar com o laboratório" em todos os exames. O laboratório precisa validar cada linha de `data/coleta.ts` e marcar `validado: true`.
2. **Tipos de coleta de "Outra espécie".** O seletor só mostra citologia e histopatologia para aves, répteis e pets não convencionais. Confirmar a lista.
3. **Prazos.** Nenhum prazo foi publicado. O laboratório precisa informar os prazos padrão e de urgência.
4. **Endereço e CNPJ.** Ficaram fora do site e do JSON-LD. Confirmar antes de incluir, porque a informação veio de um resumo e não da página completa.
5. **WhatsApp.** Testar `https://wa.me/5571996760025` no celular antes de publicar.
6. **Horário de atendimento.** Não foi publicado. Confirmar, porque a informação de "24 horas" veio de um resumo e os posts de feriado mostram horário fechado.
7. **Parcerias de planos pet.** Petlove, Pet Health, Plamev e Care Saúde Animal aparecem num post. Confirmar a lista atual.
8. **Serviços.** Histopatologia e Microbiologia aparecem nos posts, mas não estavam na lista de serviços do site. Confirmar.
9. **Casos da semana.** Os três textos são rascunhos baseados em posts. Precisam de revisão técnica do corpo clínico antes de publicar.
10. **Controle de qualidade.** "Dois analisadores bioquímicos" e "amostra rastreada" vêm de posts e de resumo. Confirmar se são práticas atuais.
11. **Marca.** A paleta é uma proposta nova, com o vermelho da marca como base. Confirmar com o laboratório antes de aplicar em produção.

## Como rodar localmente

```bash
npm install
npm run dev          # desenvolvimento, em http://localhost:3000
npm run typecheck    # checagem de tipos
npm run build        # gera a pasta out/ para a Hostinger
```

## Como publicar

1. Confirmar os itens da seção anterior e atualizar os dados em `data/`.
2. Rodar `npm run build`.
3. Subir o conteúdo de `out/` para o `public_html` da Hostinger.
4. Conferir HTTPS, o link do WhatsApp e o layout no celular.

## Fora do escopo desta versão

- Painel de status de amostra (depende de rastreamento interno do laboratório).
- Área de login para resultados (depende de sistema do laboratório).
- Formulário próprio de cadastro de clínica (o WhatsApp cobre o início da conversa).
- Medição e pixels de campanha (serão definidos com o laboratório, depois da conferência do item 8 do relatório).
