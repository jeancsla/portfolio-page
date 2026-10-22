// Gera favicon.ico, ícones PNG e og-image.png a partir de favicon.svg e tools/og-card.html.
// Uso (na raiz do repositório):
//   npm i --no-save playwright@1.56.1 && npx playwright install chromium
//   node tools/make-assets.mjs
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const { chromium } = await import(process.env.PW_MODULE || 'playwright');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const types = { '.html': 'text/html', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.css': 'text/css', '.png': 'image/png', '.webp': 'image/webp' };

// Servidor estático mínimo (fontes não carregam via file://)
const server = http.createServer((req, res) => {
  const file = path.join(root, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404).end(); return; }
  res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}).listen(0, '127.0.0.1');
await new Promise(r => server.once('listening', r));
const base = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });

async function icon(size, out, { pad = 0, bg = null } = {}) {
  const inner = Math.round(size * (1 - 2 * pad));
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`<body style="margin:0;display:grid;place-items:center;width:${size}px;height:${size}px;background:${bg || 'transparent'}"><img src="${base}/favicon.svg" width="${inner}" height="${inner}"></body>`);
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: path.join(root, out), omitBackground: !bg, clip: { x: 0, y: 0, width: size, height: size } });
  return fs.readFileSync(path.join(root, out));
}

const tmp = fs.mkdtempSync(path.join(root, '.icons-'));
const ico = [];
for (const s of [16, 32, 48]) ico.push({ s, d: await icon(s, path.relative(root, path.join(tmp, `${s}.png`))) });
await icon(180, 'apple-touch-icon.png', { bg: '#e8c552' }); // o iOS arredonda sozinho; cantos transparentes ficariam pretos
await icon(192, 'icon-192.png');
await icon(512, 'icon-512.png');
await icon(512, 'icon-maskable-512.png', { pad: 0.1, bg: '#e8c552' }); // conteúdo dentro da zona segura de 80%; o fundo amarelo some com os cantos do SVG
fs.rmSync(tmp, { recursive: true });

// favicon.ico com PNGs embutidos (16, 32, 48)
const head = Buffer.alloc(6); head.writeUInt16LE(1, 2); head.writeUInt16LE(ico.length, 4);
let offset = 6 + 16 * ico.length;
const dir = ico.map(({ s, d }) => { const e = Buffer.alloc(16); e[0] = s; e[1] = s; e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6); e.writeUInt32LE(d.length, 8); e.writeUInt32LE(offset, 12); offset += d.length; return e; });
fs.writeFileSync(path.join(root, 'favicon.ico'), Buffer.concat([head, ...dir, ...ico.map(i => i.d)]));

// og-image.png 1200x630. Sai com ~250 KB por causa das fotos; a versão publicada foi reduzida para 256 cores
// (~90 KB, sem diferença visível), abaixo do limite de 300 KB que o WhatsApp aceita na prévia.
// Para repetir: pngquant 256 --skip-if-larger --output og-image.png --force og-image.png
await page.setViewportSize({ width: 1200, height: 630 });
await page.goto(`${base}/tools/og-card.html`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const bad = await page.evaluate(() => [...document.fonts].filter(f => f.status !== 'loaded').map(f => f.family));
if (bad.length) throw new Error('Fontes não carregadas: ' + bad.join(', '));
await page.screenshot({ path: path.join(root, 'og-image.png'), clip: { x: 0, y: 0, width: 1200, height: 630 } });

await browser.close(); server.close();
for (const f of ['favicon.ico', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'og-image.png'])
  console.log(f.padEnd(24), fs.statSync(path.join(root, f)).size, 'bytes');
