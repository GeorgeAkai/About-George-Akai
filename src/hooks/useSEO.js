import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL, getRouteMeta } from '../seo/routes'

function setMetaByName(name, content) {
  const el = document.querySelector(`meta[name="${name}"]`)
  if (el) el.setAttribute('content', content)
}

function setMetaByProperty(property, content) {
  const el = document.querySelector(`meta[property="${property}"]`)
  if (el) el.setAttribute('content', content)
}

export function useSEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getRouteMeta(pathname)
    const canonicalUrl = pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname}`

    document.title = meta.title
    setMetaByName('description', meta.description)
    setMetaByProperty('og:title', meta.title)
    setMetaByProperty('og:description', meta.description)
    setMetaByProperty('og:url', canonicalUrl)
    setMetaByName('twitter:title', meta.title)
    setMetaByName('twitter:description', meta.description)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', canonicalUrl)
  }, [pathname])
}
