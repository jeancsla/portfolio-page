// Captura as telas dos projetos e salva em assets/img/*.webp (sem dependências além do Playwright).
// Uso (na raiz do repositório):
//   npm i --no-save playwright@1.56.1 && npx playwright install chromium
//   node tools/capture-screens.mjs
// Depois de recapturar, atualize a data nas <figcaption> do index.html.
//
// Arquivos gerados:
//   <site>-desktop.webp      1280×800 (16:10), cartões de Projetos em telas largas
//   <site>-desktop-720.webp  720×450, a mesma captura reduzida, para celulares (srcset)
//   catalogo-super-loja.webp a vitrine de exemplo ("Panela da Vila") que a página do Catálogo Super
//                            mostra dentro de um celular; usada no celular do topo da página
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const { chromium } = await import(process.env.PW_MODULE || 'playwright');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'assets', 'img');
fs.mkdirSync(outDir, { recursive: true });

const sites = [
  ['catalogo-super', 'https://catalogosuper.com.br'],
  ['guincho-na-hora', 'https://guinchonahorasjc.com.br'],
];
const QUALITY = 0.82;

const launch = process.env.HTTPS_PROXY ? { proxy: { server: process.env.HTTPS_PROXY } } : {};
const browser = await chromium.launch(launch);
const encoder = await browser.newPage();

async function open(url, viewport, scale) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: scale });
  await page.goto(url, { waitUntil: 'load', timeout: 60_000 });
  await page.waitForTimeout(2500);
  // Fecha aviso de cookies.
  for (const label of ['Recusar', 'Rejeitar']) {
    const btn = page.getByRole('button', { name: label });
    if (await btn.count()) { await btn.first().click().catch(() => {}); break; }
  }
  // Esconde a barra de rolagem (aparecia como uma faixa branca à direita) e botões flutuantes de WhatsApp.
  await page.addStyleTag({ content: 'a[href*="wa.me"][style*="fixed"], .whatsapp-float, [class*="whatsapp"][class*="float"]{display:none!important} html{scrollbar-gutter:auto!important;scrollbar-width:none!important} ::-webkit-scrollbar{display:none}' });
  await page.evaluate(() => document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(a => {
    for (let el = a; el && el !== document.body; el = el.parentElement) if (getComputedStyle(el).position === 'fixed') { el.style.display = 'none'; break; }
  }));
  await page.waitForTimeout(800);
  return page;
}

// PNG → WebP pelo canvas do próprio Chromium, reduzindo a qualidade até caber no limite.
async function save(png, file, { outScale = 1, maxBytes }) {
  let q = QUALITY, webp;
  do {
    const dataUrl = await encoder.evaluate(async ({ b64, q, outScale }) => {
      const img = new Image(); img.src = 'data:image/png;base64,' + b64; await img.decode();
      const c = document.createElement('canvas');
      c.width = Math.round(img.naturalWidth * outScale); c.height = Math.round(img.naturalHeight * outScale);
      const ctx = c.getContext('2d'); ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, c.width, c.height);
      return c.toDataURL('image/webp', q);
    }, { b64: png.toString('base64'), q, outScale });
    webp = Buffer.from(dataUrl.split(',')[1], 'base64');
    q -= 0.06;
  } while (webp.length > maxBytes && q > 0.4);
  fs.writeFileSync(path.join(outDir, file), webp);
  console.log(('assets/img/' + file).padEnd(40), webp.length, 'bytes', `q=${(q + 0.06).toFixed(2)}`);
}

// 1. Páginas iniciais em 1280×800, em dois tamanhos.
for (const [name, url] of sites) {
  const page = await open(url, { width: 1280, height: 800 }, 1);
  const png = await page.screenshot({ type: 'png' });
  await page.close();
  await save(png, `${name}-desktop.webp`, { maxBytes: 90_000 });
  await save(png, `${name}-desktop-720.webp`, { outScale: 0.5625, maxBytes: 40_000 });
}

// 2. A vitrine de exemplo do Catálogo Super: só a tela do celular desenhado na página inicial,
//    sem a moldura, sem o degradê e sem o botão flutuante "Falar com a loja" e sem a barra de endereço, com a lista inteira de produtos.
{
  const page = await open('https://catalogosuper.com.br', { width: 1280, height: 1100 }, 2);
  const ok = await page.evaluate(() => {
    const screen = [...document.querySelectorAll('div')].find(e => /aspect-\[9\/17\]/.test(e.className) && /Panela da Vila/.test(e.textContent));
    if (!screen) return false;
    screen.id = 'vitrine-exemplo';
    Object.assign(screen.style, { aspectRatio: 'auto', height: 'auto', borderRadius: '0', paddingBottom: '16px' });
    for (const el of screen.querySelectorAll('*')) if (getComputedStyle(el).position === 'absolute') el.style.display = 'none';
    // Esconde a barra de endereço desenhada (catalogosuper.com.br/paneladavila): esse endereço não existe de verdade.
    const bars = [...screen.querySelectorAll('*')].filter(el => /catalogosuper\.com\.br\//.test(el.textContent) && el.getBoundingClientRect().height < 60);
    if (bars.length) bars[0].style.display = 'none';
    return true;
  });
  if (!ok) throw new Error('Não achei a vitrine de exemplo na página do Catálogo Super.');
  await page.waitForTimeout(600);
  const png = await page.locator('#vitrine-exemplo').screenshot({ type: 'png' });
  await page.close();
  await save(png, 'catalogo-super-loja.webp', { outScale: 0.875, maxBytes: 60_000 });
}

await browser.close();
