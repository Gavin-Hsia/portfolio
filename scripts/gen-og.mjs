// Generates public/og.png (1200x630 link-preview card) from local assets.
// Run from the project root: node scripts/gen-og.mjs
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const b64 = (p) => readFileSync(resolve(root, p)).toString('base64');

const anton = b64('node_modules/@fontsource/anton/files/anton-latin-400-normal.woff2');
const inter = b64('node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2');
const bg = b64('public/images/circuit-bg.jpg');
const head = b64('public/images/headshot.jpg');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:'Anton';src:url(data:font/woff2;base64,${anton}) format('woff2');}
@font-face{font-family:'Inter';src:url(data:font/woff2;base64,${inter}) format('woff2');font-weight:100 900;}
*{margin:0;padding:0;box-sizing:border-box;}
.card{position:relative;width:1200px;height:630px;overflow:hidden;background:#0b0c10;font-family:'Inter',sans-serif;}
.bg{position:absolute;inset:0;background:
  linear-gradient(105deg, rgba(8,10,15,.94) 0%, rgba(8,10,15,.82) 42%, rgba(12,26,48,.62) 100%),
  url(data:image/jpeg;base64,${bg}) center/cover no-repeat;}
.inner{position:relative;padding:64px 72px;height:100%;display:flex;flex-direction:column;justify-content:center;}
.eyebrow{font-weight:700;font-size:26px;letter-spacing:.32em;text-transform:uppercase;color:#4da3ff;margin-bottom:14px;}
.name{font-family:'Anton',sans-serif;font-weight:400;text-transform:uppercase;color:#fff;font-size:150px;line-height:.92;letter-spacing:.01em;}
.sub{font-weight:600;font-size:40px;color:#e6ebf2;margin-top:26px;max-width:640px;line-height:1.2;}
.rule{width:120px;height:5px;background:#4da3ff;margin:34px 0 18px;border-radius:3px;}
.url{font-family:'Anton',sans-serif;font-size:30px;letter-spacing:.03em;color:#fff;text-transform:lowercase;}
.photo{position:absolute;top:130px;right:72px;width:300px;height:370px;border-radius:16px;
  border:3px solid rgba(255,255,255,.18);object-fit:cover;box-shadow:0 24px 60px rgba(0,0,0,.5);}
</style></head><body>
<div class="card">
  <div class="bg"></div>
  <img class="photo" src="data:image/jpeg;base64,${head}">
  <div class="inner">
    <div class="eyebrow">Hardware &amp; Networking Engineer</div>
    <div class="name">Gavin<br>Hsia</div>
    <div class="sub">Electrical &amp; Computer Engineer · Santa Clara University</div>
    <div class="rule"></div>
    <div class="url">gavinhsia.com</div>
  </div>
</div>
</body></html>`;

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.locator('.card').screenshot({ path: resolve(root, 'public/og.png') });
await browser.close();
console.log('wrote public/og.png');
