import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const output = resolve(root, 'dist-github');
const slug = '7-stsenariev-spokoynogo-otkaza';
const title = '7 сценариев спокойного отказа';
const description = 'Готовые фразы для ситуаций, когда не хочется соглашаться, но страшно обидеть человека.';
const guide = 'guides/7-stsenariev-spokoynogo-otkaza.pdf';
const cover = 'covers/7-stsenariev-spokoynogo-otkaza.png';
const reader = `praktiki/${slug}/read/`;
const guidePages = Array.from({ length: 12 }, (_, index) => {
  const page = String(index + 1).padStart(2, '0');
  return `<img src="../../../guide-pages/${slug}/page-${page}.png" alt="Страница ${index + 1} гайда ${title}">`;
}).join('');
const css = `
:root{--ink:#151811;--sage:#909b7e;--pale-sage:#eef0e9;--paper:#fbfaf6;--line:#d8ddd1}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font-family:Arial,sans-serif}a{color:inherit;text-decoration:none}.showcase{min-height:100vh}.topbar{display:flex;align-items:center;justify-content:center;min-height:46px;padding:0 20px;border-bottom:1px solid var(--line);color:#7e8878;font-size:8px;font-weight:700;letter-spacing:.14em}.detail-topbar{justify-content:space-between}.detail-topbar a{color:#626d5c}.intro{max-width:1220px;margin:0 auto;padding:clamp(40px,6vw,76px) clamp(20px,5vw,64px) clamp(36px,5vw,64px)}h1,h2{font-family:Georgia,serif;font-weight:500;letter-spacing:-.055em;line-height:.91}.intro h1{margin:0;font-size:clamp(34px,4.5vw,58px)}.shelf{max-width:1220px;margin:0 auto;padding:0 clamp(20px,5vw,64px) 105px}.practice-card{display:grid;grid-template-columns:minmax(220px,330px) minmax(0,1fr);gap:clamp(28px,6vw,76px);align-items:center;padding:clamp(22px,4vw,48px);border:1px solid var(--line);background:#fff;box-shadow:0 20px 70px rgba(55,64,40,.06)}.detail-card{width:min(960px,calc(100% - 40px));min-height:calc(100vh - 46px);margin:0 auto;display:grid;grid-template-columns:minmax(220px,330px) minmax(0,1fr);gap:clamp(28px,7vw,88px);align-items:center;padding:clamp(48px,8vw,100px) 0}.cover{display:block;aspect-ratio:.706;overflow:hidden;background:var(--pale-sage);box-shadow:0 17px 30px rgba(41,50,34,.14)}.cover img{display:block;width:100%;height:100%;object-fit:cover}.practice-info h1,.practice-info h2{max-width:570px;margin:0;font-size:clamp(38px,4.5vw,66px)}.eyebrow{margin:0 0 18px;color:#697362;font-size:10px;font-weight:700;letter-spacing:.14em}.practice-info>p:not(.eyebrow):not(.contents){max-width:530px;margin:23px 0 0;color:#4d5649;font-size:16px;line-height:1.65}.actions{display:flex;gap:10px;margin-top:32px}.actions a{min-width:152px;padding:15px 22px;border:1px solid var(--ink);background:transparent;color:var(--ink);font-size:10px;font-weight:700;letter-spacing:.12em;text-align:center;cursor:pointer}.actions .download-guide{border-color:var(--sage);background:var(--sage);color:#fff}.contents{margin:20px 0 0;padding-top:16px;border-top:1px solid var(--line);color:#687362;font-size:12px;line-height:1.55}.guide-pages{width:min(860px,calc(100% - 32px));margin:0 auto;padding:32px 0 70px}.guide-pages img{display:block;width:100%;height:auto;margin:0 auto 22px;border:1px solid var(--line);box-shadow:0 16px 45px rgba(55,64,40,.08)}footer{padding:32px 20px;border-top:1px solid var(--line);color:#75806d;font-size:9px;font-weight:700;letter-spacing:.12em;text-align:center}@media(max-width:650px){.topbar{min-height:58px}.intro{padding-top:82px}.intro h1{font-size:clamp(58px,16vw,82px)}.practice-card,.detail-card{display:block;padding:18px}.detail-card{width:100%;min-height:0;padding-top:42px}.detail-page .detail-card{padding-top:20px}.cover{max-width:310px;margin:0 auto}.practice-info{padding:34px 5px 8px}.detail-page .practice-info{padding-top:20px}.practice-info h1,.practice-info h2{font-size:46px}.actions{display:grid;grid-template-columns:1fr 1fr}.actions a{min-width:0;padding:14px 10px}}
`;

function page({ body, script = '' }) {
  return `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Практики для границ, уважения и близких разговоров от Андрея Онгри."><title>Практики от Андрея Онгри</title><link rel="icon" href="favicon.svg"><style>${css}</style></head><body>${body}${script}</body></html>`;
}

const home = page({
  body: `<main class="showcase"><header class="topbar"><span>ПРАКТИКИ ОТ АНДРЕЯ ОНГРИ</span></header><section class="intro"><h1>Практики от Андрея Онгри</h1></section><section class="shelf"><article class="practice-card"><a class="cover" href="praktiki/${slug}/" aria-label="Открыть практику ${title}"><img src="${cover}" alt="Первая страница гайда ${title}"></a><div class="practice-info"><p class="eyebrow">БЕСПЛАТНЫЙ PDF · 12 СТРАНИЦ</p><h2>${title}</h2><p>${description}</p><div class="actions"><a href="${reader}">Смотреть</a><a class="download-guide" href="${guide}" download>Скачать</a></div><p class="contents">Внутри: просьбы близких, давление, работа, деньги и право передумать.</p></div></article></section><footer>НОВЫЕ ПРАКТИКИ ПОЯВЛЯЮТСЯ ТОЛЬКО ПОСЛЕ ПРОВЕРКИ В КОНТЕНТЕ</footer></main>`,
});

const detail = page({
  body: `<main class="showcase detail-page"><header class="topbar detail-topbar"><span>ПРАКТИКИ ОТ АНДРЕЯ ОНГРИ</span><a href="../../">← ВСЕ ПРАКТИКИ</a></header><section class="detail-card"><a class="cover" href="read/"><img src="../../${cover}" alt="Первая страница гайда ${title}"></a><div class="practice-info"><p class="eyebrow">БЕСПЛАТНЫЙ PDF · 12 СТРАНИЦ</p><h1>${title}</h1><div class="actions"><a href="read/">Смотреть практику</a><a class="download-guide" href="../../${guide}" download>Скачать</a></div></div></section></main>`,
});

const read = page({
  body: `<main class="showcase"><header class="topbar detail-topbar"><span>${title}</span><a href="../">← К ПРАКТИКЕ</a></header><section class="guide-pages" aria-label="Гайд ${title}">${guidePages}</section></main>`,
});

await rm(output, { recursive: true, force: true });
await mkdir(resolve(output, 'praktiki', slug, 'read'), { recursive: true });
await cp(resolve(root, 'public'), output, { recursive: true });
await writeFile(resolve(output, 'index.html'), home);
await writeFile(resolve(output, 'praktiki', slug, 'index.html'), detail);
await writeFile(resolve(output, 'praktiki', slug, 'read', 'index.html'), read);
await writeFile(resolve(output, '.nojekyll'), '');
console.log(`GitHub Pages bundle is ready: ${output}`);
