/**
 * Post-build step: prerender every route to static HTML.
 *  - renders the React app on the server (dist-ssr/entry-server.js) into each page
 *  - writes per-route <title>, description, canonical, OG and Twitter tags
 *  - preloads the two above-the-fold font files
 */
import { readFileSync, writeFileSync, readdirSync, rmSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { routeMeta, SITE_URL } from '../src/seo/routes.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const distDir = resolve(root, 'dist')
const ssrDir = resolve(root, 'dist-ssr')
const baseHtml = readFileSync(resolve(distDir, 'index.html'), 'utf-8')

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)

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

// Preload the body (Inter 400) and heading (Inter 700) fonts.
const assets = readdirSync(resolve(distDir, 'assets'))
const preloadFonts = [/^inter-latin-400-normal.*\.woff2$/, /^inter-latin-700-normal.*\.woff2$/]
  .map((re) => assets.find((f) => re.test(f)))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')

function buildHtmlForRoute(pathname) {
  const meta = routeMeta[pathname] || routeMeta['/']
  const canonicalUrl = pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname}`

  let html = baseHtml

  html = html.replace('<!-- FONT_PRELOADS -->', preloadFonts)
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
  html = replaceContentAttr(html, /<meta\s+name="description"[\s\S]*?\/>/, meta.description)
  html = replaceHrefAttr(html, /<link\s+rel="canonical"[\s\S]*?\/>/, canonicalUrl)
  html = replaceContentAttr(html, /<meta\s+property="og:title"[\s\S]*?\/>/, meta.title)
  html = replaceContentAttr(html, /<meta\s+property="og:description"[\s\S]*?\/>/, meta.description)
  html = replaceContentAttr(html, /<meta\s+property="og:url"[\s\S]*?\/>/, canonicalUrl)
  html = replaceContentAttr(html, /<meta\s+name="twitter:title"[\s\S]*?\/>/, meta.title)
  html = replaceContentAttr(html, /<meta\s+name="twitter:description"[\s\S]*?\/>/, meta.description)
  html = html.replace('<!--app-html-->', render(pathname))

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

rmSync(ssrDir, { recursive: true, force: true })
console.log(`Prerendered ${count} routes.`)
