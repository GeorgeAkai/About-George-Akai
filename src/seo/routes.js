export const SITE_URL = 'https://georgeakaitechconsulting.com'
export const SITE_NAME = 'George Akai Tech Consulting'
export const OG_IMAGE = `${SITE_URL}/og-image.png`
export const DEFAULT_LOCALE = 'en_US'

export const routeMeta = {
  '/': {
    title: 'Custom Software, AI Chatbots & Cybersecurity Consulting | George Akai Tech Consulting',
    description:
      'Fixed-price custom software, AI chatbot integrations and cybersecurity for growing businesses. California-based, remote-friendly. Book a free strategy call.',
  },
  '/about': {
    title: 'About George Akai | Founder, George Akai Tech Consulting',
    description:
      'Meet George Akai: a cybersecurity analyst, software engineer, and AI solutions developer with hands-on experience in security operations and AWS.',
  },
  '/contact': {
    title: 'Book a Free Strategy Call | George Akai Tech Consulting',
    description:
      "Tell me what you need, whether that's custom software, an AI chatbot or a security review, and get a reply within one business day to schedule a free 30-minute call.",
  },
  '/privacy': {
    title: 'Privacy Policy | George Akai Tech Consulting',
    description: 'How George Akai Tech Consulting collects, uses and protects information submitted through this website.',
  },
  '/terms': {
    title: 'Terms of Use | George Akai Tech Consulting',
    description: 'Terms of use for the George Akai Tech Consulting website.',
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
