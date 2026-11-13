// Pre-renders every route to static HTML so crawlers (including Meta's) can read
// the pages without running JavaScript. Also writes sitemap.xml and reports
// any placeholders that are still unresolved.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const server = await import(pathToFileURL(path.join(root, 'dist-server', 'entry-server.js')).href);
const { render, routes, business, isPlaceholder, PLACEHOLDER_RE } = server;

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const siteUrl = isPlaceholder(business.websiteUrl) || /YOUR-DOMAIN/.test(business.websiteUrl) ? '' : business.websiteUrl.replace(/\/$/, '');

function page(url, title, description, html) {
  const canonical = siteUrl ? `<link rel="canonical" href="${siteUrl}${url === '/' ? '/' : url}" />` : '';
  return template
    .replaceAll('<!--app-title-->', esc(title))
    .replaceAll('<!--app-description-->', esc(description))
    .replace('<!--app-canonical-->', canonical)
    .replace('<!--app-html-->', html);
}

const placeholders = new Set();
for (const r of routes) {
  const html = render(r.path);
  for (const m of html.matchAll(new RegExp(PLACEHOLDER_RE.source, 'g'))) placeholders.add(m[0]);
  const out = r.path === '/' ? path.join(dist, 'index.html') : path.join(dist, r.path, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page(r.path, r.title, r.description, html));
}
// 404 page (Netlify / Cloudflare Pages / GitHub Pages serve /404.html automatically)
fs.writeFileSync(path.join(dist, '404.html'), page('/404', `Page not found - ${business.brandName}`, 'Page not found.', render('/404')).replace('content="index, follow"', 'content="noindex"'));

if (siteUrl) {
  const urls = routes.map((r) => `  <url><loc>${siteUrl}${r.path}</loc></url>`).join('\n');
  fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
}
fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });

console.log(`\nPre-rendered ${routes.length} pages + 404.html`);
if (!siteUrl) console.warn('WARNING: websiteUrl is still a placeholder - canonical tags and sitemap.xml were skipped.');
if (business.showReviewNotes) console.warn('WARNING: showReviewNotes is true - "Owner to confirm" notes are visible on the legal pages.');
if (placeholders.size) {
  console.warn(`\nWARNING: ${placeholders.size} unresolved placeholder(s) in the built site:`);
  for (const p of [...placeholders].sort()) console.warn('  ' + p);
  console.warn('Replace them in src/config/business.js before going live.\n');
} else console.log('No unresolved placeholders.');
