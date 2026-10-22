# Jean Aniceto — software para pequenos negócios

Site profissional de **Jean Aniceto**, nome com que **51.046.020 JEAN CARLOS SANTOS LIMA ANICETO** (MEI, CNPJ 51.046.020/0001-34, São José dos Campos/SP) apresenta seus serviços (sites, sistemas sob medida e automações) e seus produtos próprios, como o [Catálogo Super](https://catalogosuper.com.br). A página também reúne os dados da empresa e as políticas de suporte, cancelamento, reembolso e privacidade.

**Site em produção:** [janiceto.com.br](https://janiceto.com.br)

## Estrutura

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | A página inteira (conteúdo e metadados). Sem CSS ou JS embutido. |
| `assets/site.css` | Todo o visual. As cores e tamanhos ficam em variáveis no topo do arquivo. |
| `assets/site.js` | Atualiza o ano do rodapé e mostra o botão "Copiar endereço". A página funciona sem ele. |
| `assets/fonts/` | Fontes hospedadas no próprio site (Young Serif e Hanken Grotesk, licença OFL). |
| `assets/img/` | Capturas dos projetos (WebP). |
| `404.html` | Página de "não encontrado". |
| `vercel.json` | Cabeçalhos de segurança, cache e redirecionamentos (www e vercel.app → janiceto.com.br). |
| `favicon.*`, `icon-*.png`, `apple-touch-icon.png`, `og-image.png` | Ícones e imagem de compartilhamento. |
| `site.webmanifest`, `robots.txt`, `sitemap.xml`, `.well-known/security.txt` | Metadados para navegadores e buscadores. |
| `tools/` | Scripts para recapturar telas e regenerar ícones (não vão para o ar, ver `.vercelignore`). |

## Publicação

Site estático, sem instalação nem build. A Vercel está ligada a este repositório: todo push na `main` publica em `janiceto.com.br`.

Para ver localmente:

```bash
npx serve .
```

(O `serve` não aplica os cabeçalhos do `vercel.json`. Para testar a CSP de verdade, use um deploy de preview.)

Nos deploys de preview, a Vercel injeta a barra de ferramentas dela (Vercel Toolbar), carregada de `vercel.live`. A CSP bloqueia essa barra de propósito, então erros de CSP que citam `vercel.live` no console de um preview são esperados e não vêm do site; em `janiceto.com.br` eles não aparecem. Para não vê-los, desligue a barra para Preview nas configurações do projeto na Vercel ou crie a variável de ambiente `VERCEL_PREVIEW_FEEDBACK_ENABLED=0` no ambiente de Preview.

## Regras para não quebrar o site

- **Nada de CSS ou JS dentro do HTML** (`<style>`, `style="..."`, `<script>` com código, `onclick`). A política de segurança (CSP) bloqueia tudo isso e a página fica sem estilo. Coloque estilos em `assets/site.css` e scripts em `assets/site.js`.
- **Nada carregado de outros sites** (Google Fonts, analytics, embeds). Além da CSP bloquear, a política de privacidade diz que o site não faz isso. Se um dia adicionar, atualize a CSP no `vercel.json` e o texto de Privacidade.
- **Nunca troque uma fonte mantendo o mesmo nome de arquivo**: as fontes ficam em cache por 1 ano (`immutable`). Se trocar uma fonte, use outro nome, e publique o arquivo novo no mesmo commit do CSS que aponta para ele: um nome que der 404 também fica em cache por 1 ano para quem o pedir.

## Manutenção

- **Dados da empresa:** a data em "Situação cadastral" indica quando o cadastro foi conferido. Confira de tempos em tempos (por exemplo, em `https://brasilapi.com.br/api/cnpj/v1/51046020000134`) e atualize a data.
- **Capturas dos projetos:** `node tools/capture-screens.mjs` (depois atualize a data das legendas no `index.html`).
- **Ícones e imagem de compartilhamento:** `node tools/make-assets.mjs` (instruções no topo do arquivo).
- **security.txt:** renove a data `Expires` uma vez por ano.

## Contato

- **E-mail:** [contato@janiceto.com.br](mailto:contato@janiceto.com.br)
- **GitHub:** [@jeancsla](https://github.com/jeancsla)
