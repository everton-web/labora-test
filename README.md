# LaboraTEST, site institucional (nova versão)

Site do Centro de Diagnóstico Veterinário LaboraTEST, em Salvador/BA.

- Relatório do site atual: [`docs/relatorio-site-atual.md`](docs/relatorio-site-atual.md)
- Proposta da nova versão e pendências de validação: [`docs/nova-versao.md`](docs/nova-versao.md)

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # gera out/ (export estático para a Hostinger)
```

## Onde mexer

- `data/coleta.ts`: tabela do seletor de coleta. Itens com `validado: false` aparecem como "em validação".
- `data/casos.ts`: achados da semana.
- `data/contato.ts`: WhatsApp, e-mail, Instagram, cidades e link da tabela de serviços.
- `app/globals.css`: tokens de cor e fonte.
- `app/page.tsx`: seções da página.
