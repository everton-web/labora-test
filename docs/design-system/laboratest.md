# Design system: LaboraTEST (identidade do cliente)

Fonte: site atual https://www.laboratest.com.br/ e os arquivos de marca publicados nele (logo, foto principal, banner e ícones de serviço), lidos em outubro de 2026. Base de qualquer página nova do cliente. Não usa a IDV da Asymmetrics.

Revisão 2: cores tiradas dos pixels do logo, e não da contagem no HTML (a contagem trazia cores do tema do Wix).

## Cores

| Token | Hex | Origem | Uso |
|---|---|---|---|
| brand | #C72A4A | Logo ("TEST") e ícones | Botões principais, destaques, ícones |
| brand-deep | #A8213F | Derivado | Hover e estado ativo |
| graphite | #4C4C4C | Logo ("labora", tubo de ensaio) | Títulos, partes escuras dos ícones |
| ink | #303030 | Texto do site atual | Texto corrido |
| muted | #606060 | Texto do site atual | Texto de apoio |
| paper | #FFFFFF | Fundo do site atual | Fundo principal |
| soft | #F7EEF0 | Derivado do vermelho | Fundo de seções alternadas |
| line | #E8DFE1 | Derivado | Bordas |

Contraste: brand sobre branco 5,4 (AA). Branco sobre brand 5,4 (AA). Graphite sobre branco 8,7.

**Não usar:** o azul #2B5672 e o azul #116DFF aparecem no HTML, mas não em nenhum material da marca. São do tema do Wix.

## Tipografia

- O logo usa uma sans geométrica arredondada e muito pesada. As manchetes do site atual usam sans (família Avenir).
- **Títulos:** Nunito, peso 800 (arredondada e pesada, próxima do logo).
- **Texto:** Nunito Sans, pesos 400 e 600.
- Escala: manchete 52px desktop e 36px mobile; título de seção 34px e 26px; corpo 17px e 16px.

## Logo

- Arquivo: `public/img/logo-laboratest.png` (fundo transparente, 800px de largura).
- Composição: tubo de ensaio com bolhas, "labora" em grafite, "TEST" em vermelho, e "CENTRO DE DIAGNÓSTICO VETERINÁRIO" em vermelho, caixa alta.
- Altura mínima no cabeçalho: 40px. Não recriar em texto.

## Imagens

- **Foto principal:** cachorro e gato, fundo transparente (`pets-hero.webp`). É o elemento afetivo da marca.
- **Banner:** "Onde cuidar significa mais", com filtro vermelho sobre foto de animais (`banner-cuidar.webp`).
- **Ícones de serviço:** desenho plano em vermelho e grafite, sobre fundo claro. Hematologia, bioquímica, citologia, parasitologia, microbiologia, logística (moto de entrega) e parceiros (aperto de mão). Arquivos `icone-*.webp`.

## Componentes

- **Botão principal:** fundo brand, texto branco, raio pill, peso 700.
- **Botão secundário:** borda graphite, fundo transparente, texto graphite.
- **Cartão de serviço:** ícone no topo, título em graphite, uma linha de descrição.
- **Faixa afetiva:** banner com foto de animais e filtro vermelho, uma por página.

## Tom de voz

Técnico e acolhedor, frases curtas, linguagem de clínica. Frases reais do site: "Diagnóstico Veterinário com precisão, agilidade e responsabilidade técnica", "A vida por trás de cada exame exige ciência, controle e confiabilidade", "Seu diagnóstico merece mais do que um laudo. Merece um parceiro."

## O que manter do site atual

- Acesso a **Resultados**, **Cadastre-se**, **Solicitar exames** e **Solicitar material** (funções que as clínicas usam).
- Cidades atendidas (14), com a logística de coleta como diferencial.
- Canais: WhatsApp (71) 9 9676-0025, e-mail contato@laboratest.com.br, Instagram @laboratest_vet.
- Tabela de serviços em PDF.
