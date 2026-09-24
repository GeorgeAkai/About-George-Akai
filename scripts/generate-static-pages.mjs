import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { routeMeta, SITE_URL } from '../src/seo/routes.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '..', 'dist')
const baseHtml = readFileSync(resolve(distDir, 'index.html'), 'utf-8')

function escapeAttr(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

function escapeHtml(value) {
  return escapeAttr(value).replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function replaceContentAttr(html, tagRegex, newValue) {
  return html.replace(tagRegex, (match) => match.replace(/content="[^"]*"/, `content="${escapeAttr(newValue)}"`))
}

function replaceHrefAttr(html, tagRegex, newValue) {
  return html.replace(tagRegex, (match) => match.replace(/href="[^"]*"/, `href="${escapeAttr(newValue)}"`))
}

function buildHtmlForRoute(pathname) {
  const meta = routeMeta[pathname] || routeMeta['/']
  const canonicalUrl = pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname}`

  let html = baseHtml

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
  html = replaceContentAttr(html, /<meta\s+name="description"[\s\S]*?\/>/, meta.description)
  html = replaceHrefAttr(html, /<link\s+rel="canonical"[\s\S]*?\/>/, canonicalUrl)
  html = replaceContentAttr(html, /<meta\s+property="og:title"[\s\S]*?\/>/, meta.title)
  html = replaceContentAttr(html, /<meta\s+property="og:description"[\s\S]*?\/>/, meta.description)
  html = replaceContentAttr(html, /<meta\s+property="og:url"[\s\S]*?\/>/, canonicalUrl)
  html = replaceContentAttr(html, /<meta\s+name="twitter:title"[\s\S]*?\/>/, meta.title)
  html = replaceContentAttr(html, /<meta\s+name="twitter:description"[\s\S]*?\/>/, meta.description)

  return html
}

let count = 0
for (const pathname of Object.keys(routeMeta)) {
  const html = buildHtmlForRoute(pathname)

  if (pathname === '/') {
    writeFileSync(resolve(distDir, 'index.html'), html)
  } else {
    // Flat file (e.g. dist/about.html) so Vercel's cleanUrls can resolve
    // /about -> about.html without relying on directory-index behavior.
    writeFileSync(resolve(distDir, `${pathname.replace(/^\//, '')}.html`), html)
  }
  count += 1
}

console.log(`Prerendered per-route meta for ${count} routes.`)
