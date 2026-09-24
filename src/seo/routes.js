export const SITE_URL = 'https://georgeakaitechconsulting.com'
export const SITE_NAME = 'George Akai Tech Consulting'
export const OG_IMAGE = `${SITE_URL}/og-image.png`
export const DEFAULT_LOCALE = 'en_US'

export const routeMeta = {
  '/': {
    title: 'George Akai Tech Consulting | Software, AI & Cybersecurity',
    description:
      'Custom software and web development, AI chatbot integrations, and cybersecurity consulting for growing businesses. Based in California, remote-friendly.',
  },
  '/about': {
    title: 'About George Akai | Founder, George Akai Tech Consulting',
    description:
      'Meet George Akai: a cybersecurity analyst, software engineer, and AI solutions developer with hands-on experience in security operations and AWS.',
  },
  '/contact': {
    title: 'Contact | Get a Quote from George Akai Tech Consulting',
    description:
      'Request a quote for web development, AI chatbot integration, or cybersecurity consulting. Fill out the form or reach out to George Akai directly.',
  },
  '/beyond': {
    title: 'Beyond the Work | George Akai Tech Consulting',
    description:
      'A look at what George Akai does outside of client work: soccer, hiking, bowling, gardening, photography, and hot air balloon adventures.',
  },
}

export function getRouteMeta(pathname) {
  return routeMeta[pathname] || routeMeta['/']
}
