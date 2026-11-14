/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit this one file to fill in the landing page.
 * ─────────────────────────────────────────────────────────────
 *
 *  Anything written in [SQUARE BRACKETS] is a placeholder and is shown on
 *  the live page as-is, so it's obvious what still needs real content.
 *
 *  Rules of thumb:
 *  - Only publish facts you can back up: real client names, real quotes
 *    (with permission), real numbers, real certifications.
 *  - To hide a whole block until it's ready, empty its array:
 *      clientLogos: []   → hides the logo row
 *      testimonials: []  → hides the testimonials section
 *      stats: []         → hides the proof-stats row
 *  - Images go in /public. Prefer .webp or .avif, about 1600px wide max.
 */

/** True when a value is still a [PLACEHOLDER] (or empty). */
export const isPlaceholder = (value) => !value || /^\s*\[.*\]\s*$/.test(String(value))

export const business = {
  name: 'George Akai Tech Consulting',
  shortName: 'George Akai',
  founder: 'George Akai',
  founderTitle: 'Founder & Principal Consultant',
  keyCredential: '[YOUR KEY CREDENTIAL]',
  entity: '[LLC / business entity]',
  region: 'California',
  url: 'https://georgeakaitechconsulting.com',
  email: 'info@georgeakaitechconsulting.com',
  phone: '[(XXX) XXX-XXXX]',
  linkedin: 'https://www.linkedin.com/in/georgeakai/',
  calendarUrl: '[CALENDLY/CAL.COM URL]',
  /** Formspree endpoint (existing form). Swap for a Resend route or other backend if needed. */
  formEndpoint: 'https://formspree.io/f/mjykojpl',
  /** Path under /public, e.g. '/george-headshot.webp'. Leave as placeholder until a real photo exists. */
  headshot: '[PROFESSIONAL HEADSHOT — real photo, not stock]',
  /** Included support after launch, in days. */
  supportDays: '[30]',
}

export const nav = [
  { label: 'Services', hash: 'services' },
  { label: 'Work', hash: 'portfolio' },
  { label: 'Process', hash: 'process' },
  { label: 'Pricing', hash: 'pricing' },
  { label: 'About', hash: 'about' },
  { label: 'FAQ', hash: 'faq' },
]

export const hero = {
  pill: 'Software · AI · Cybersecurity for growing businesses',
  title: 'Secure, custom technology that helps your business grow.',
  subtitle:
    'I design and build custom software, AI assistants and security programs for small and mid-sized businesses — with fixed-scope pricing, weekly updates, and one senior consultant accountable from first call to launch.',
  primaryCta: 'Book a free 30-min strategy call',
  secondaryCta: 'See recent work',
  checks: ['Based in California, remote-friendly', 'Reply within 1 business day', 'NDA available on request'],
  card: {
    eyebrow: 'Your free strategy call',
    title: "Leave with a clear plan — even if you don't hire me.",
    steps: [
      'We review your goals, current systems and biggest risks.',
      'I outline the right approach — build, buy, or fix what you have.',
      'You get a written summary with a ballpark budget and timeline within 48 hours.',
    ],
  },
}

/** Client logos: { name, src } with src under /public. Placeholders render as dashed boxes. */
export const clientLogos = [
  { name: '[CLIENT LOGO 1]', src: null },
  { name: '[CLIENT LOGO 2]', src: null },
  { name: '[CLIENT LOGO 3]', src: null },
  { name: '[CLIENT LOGO 4]', src: null },
  { name: '[CLIENT LOGO 5]', src: null },
]

export const credentials = [
  '[CERTIFICATION e.g. CompTIA Security+]',
  '[CLOUD CERT e.g. AWS Certified]',
  '[REGISTERED BUSINESS / INSURED]',
]

/** Only keep stats you can verify. */
export const stats = [
  { value: '[XX]+', label: 'Projects delivered' },
  { value: '[X] yrs', label: 'Building production software' },
  { value: '[XX]%', label: 'Clients who return or refer' },
  { value: '<24 hr', label: 'Response time on support' },
]

export const problems = {
  eyebrow: 'Sound familiar?',
  title: 'Your business has outgrown spreadsheets, off-the-shelf tools and "a friend who does IT."',
  items: [
    {
      title: 'Manual work eats your week',
      text: 'Your team copies data between tools, chases approvals by email and answers the same customer questions all day.',
    },
    {
      title: 'Past developers disappeared',
      text: "You've paid for projects that ran late, went over budget, or left you with code nobody can maintain.",
    },
    {
      title: 'Security is a guess',
      text: "You're not sure who has access to what, whether backups work, or what you'd do after a breach or ransomware attack.",
    },
  ],
}

export const services = {
  title: 'Three ways I help businesses run better and safer',
  subtitle:
    'Every engagement starts with a fixed-scope proposal, so you know the price, timeline and deliverables before any work begins.',
  items: [
    {
      icon: 'code',
      title: 'Custom Software & Web Development',
      text: 'Websites, client portals, internal tools and integrations built around how your business actually works.',
      bullets: [
        'Fast, SEO-ready business websites',
        'Customer portals and dashboards',
        'Workflow automation and API integrations',
        'You own 100% of the code',
      ],
      pricePrefix: 'Projects from',
      price: '$1,500',
      cta: 'Discuss a build',
      formValue: 'Custom software / website',
    },
    {
      icon: 'chat',
      title: 'AI Chatbot Integrations',
      text: 'AI assistants trained on your own documents that answer customers, qualify leads and support your staff — around the clock.',
      bullets: [
        'Website and support chatbots',
        'Internal knowledge assistants',
        'CRM, calendar and helpdesk hand-off',
        'Privacy-safe: your data stays yours',
      ],
      pricePrefix: 'Setups from',
      price: '$1,200',
      cta: 'Explore an AI assistant',
      formValue: 'AI chatbot',
      featured: true,
      badge: 'Most requested',
    },
    {
      icon: 'shield',
      title: 'Cybersecurity Consulting',
      text: 'Find and fix the gaps before attackers do, and meet the security questions your customers and insurers ask.',
      bullets: [
        'Security assessments with a prioritized fix list',
        'Access, MFA, backup and email hardening',
        'Incident response planning',
        'Staff security awareness training',
      ],
      pricePrefix: 'Plans from',
      price: '$250/mo',
      cta: 'Get a security review',
      formValue: 'Cybersecurity',
    },
  ],
}

/**
 * Recent work: real, live client sites. `image`: path under /public (16:9-ish
 * screenshot, .webp preferred) or null for a placeholder. `url` must be the live site.
 */
export const portfolio = {
  title: 'Recent work',
  subtitle: 'Live sites built for real businesses.',
  items: [
    {
      name: 'Kenrish Collection',
      url: 'https://kenrishcollection.com',
      tag: 'E-commerce · Beauty & fashion retail',
      summary:
        'An online store and booking site for a beauty and fashion boutique, with an AI shopping assistant and a full admin back office.',
      features: ['Product catalogue', 'Appointment booking', 'AI shopping assistant', 'Inventory & sales admin'],
      image: '/portfolio/kenrish-assistant.webp',
      imageAlt: 'Kenrish Collection product catalogue with the Kenrish Assistant AI chat answering a product question',
      width: 1280,
      height: 547,
    },
    {
      name: 'Mid Valley Lath & Plaster',
      url: 'https://midvalleylathandplaster.com',
      tag: 'Business website · Lath & plaster contractor',
      summary: '[One sentence on what the site does for the business, e.g. showcases projects and brings in quote requests.]',
      features: ['[Feature 1]', '[Feature 2]', '[Feature 3]'],
      image: null, // e.g. '/portfolio/midvalley-home.webp' (desktop screenshot ~1280×547)
      imageAlt: 'Mid Valley Lath & Plaster website home page',
      width: 1280,
      height: 547,
    },
  ],
}

/** Case studies. `image`: path under /public (16:9 works best), or null for a placeholder. */
export const caseStudies = [
  {
    tag: 'Custom software · [INDUSTRY]',
    title: '[Client type] replaced [manual process] with a custom portal',
    challenge: '[One sentence on the problem.]',
    solution: '[One sentence on what you built.]',
    metric: '[XX hrs/week saved]',
    image: null,
    imageAlt: '',
  },
  {
    tag: 'AI chatbot · [INDUSTRY]',
    title: '[Client type] now answers customer questions 24/7',
    challenge: '[One sentence on the problem.]',
    solution: '[One sentence on what you built.]',
    metric: '[XX% of tickets resolved]',
    image: null,
    imageAlt: '',
  },
  {
    tag: 'Cybersecurity · [INDUSTRY]',
    title: '[Client type] closed critical gaps before an insurance renewal',
    challenge: '[One sentence on the problem.]',
    solution: '[One sentence on what you did.]',
    metric: '[XX issues fixed]',
    image: null,
    imageAlt: '',
  },
]

/** Real quotes only, with permission. Empty the array to hide the section. */
export const testimonials = [
  {
    quote:
      '[Paste a real client quote here — ideally naming a specific result, like time saved or a problem solved.]',
    name: '[Client Name]',
    title: '[Title]',
    company: '[Company]',
    avatar: null,
  },
  {
    quote:
      '[Second real client quote — ideally about communication, reliability or delivering on time and on budget.]',
    name: '[Client Name]',
    title: '[Title]',
    company: '[Company]',
    avatar: null,
  },
]

export const reviews = {
  label: '[Link to Google Business / Clutch reviews]',
  url: '[REVIEWS URL]',
}

export const process = {
  title: 'A clear process with no surprises',
  steps: [
    {
      when: 'Week 0',
      title: 'Free strategy call',
      text: '30 minutes to understand your goals, systems and constraints.',
    },
    {
      when: 'Week 1',
      title: 'Fixed-scope proposal',
      text: 'A written plan with deliverables, timeline and a fixed price. No hourly surprises.',
    },
    {
      when: 'Build',
      title: 'Build with weekly demos',
      text: 'You see working progress every week and can steer before anything is final.',
    },
    {
      when: 'Launch',
      title: 'Launch & support',
      text: `Handover, documentation, training, and ${business.supportDays} days of included support.`,
    },
  ],
}

export const about = {
  title: 'You work directly with me — not a junior team or an offshore handoff.',
  paragraphs: [
    "I'm George Akai, founder of George Akai Tech Consulting. [2–3 sentences: background, years of experience, where you've worked, why you started the firm.]",
    "My focus is simple: build technology that's secure by default, easy for your team to use, and documented well enough that you're never locked in.",
  ],
  credentials: [
    { label: 'Education', value: '[Degree / School]' },
    { label: 'Certification', value: '[Certification]' },
    { label: 'Experience', value: '[Notable past employer / client]' },
    { label: 'Tech stack', value: '[Tech stack]' },
  ],
}

export const guarantees = {
  title: 'Low-risk by design',
  items: [
    { icon: 'quote', title: 'Fixed, written quotes', text: 'The price you approve is the price you pay.' },
    { icon: 'key', title: 'You own everything', text: 'Code, accounts and documentation are handed over in full.' },
    { icon: 'lock', title: 'Confidential', text: 'NDAs welcome. Your data is handled with least-privilege access.' },
    {
      icon: 'support',
      title: 'Included support',
      text: `${business.supportDays} days of bug fixes after launch at no charge.`,
    },
  ],
}

export const faqs = [
  {
    q: 'How much does a typical project cost?',
    a: "Most projects fall between [$X] and [$Y] depending on scope. After our free call you'll get a fixed quote — never an open-ended hourly bill.",
  },
  {
    q: 'How long does it take?',
    a: 'Websites and chatbots usually launch in [2–6] weeks; custom software in [6–12] weeks. Security assessments take about [1–2] weeks.',
  },
  {
    q: 'Do you work with businesses outside California?',
    a: "Yes. I'm based in California and work remotely with clients across [the US / your regions], with on-site visits available locally.",
  },
  {
    q: 'What happens after launch?',
    a: `Every project includes ${business.supportDays} days of support. After that you can choose an optional monthly care plan or take everything in-house with full documentation.`,
  },
  {
    q: 'Is my business data safe with an AI chatbot?',
    a: "Yes. I configure assistants so your data isn't used to train public models, limit what the bot can access, and document exactly where data is stored.",
  },
]

export const contact = {
  eyebrow: "Let's talk",
  title: "Tell me what you're trying to solve.",
  subtitle:
    "Send a few details and I'll reply within one business day to schedule your free 30-minute strategy call. No pressure, no obligation.",
  serviceOptions: ['Custom software / website', 'AI chatbot', 'Cybersecurity', 'Not sure yet'],
  budgetOptions: ['Under $5k', '$5k–$15k', '$15k–$50k', '$50k+'],
  submit: 'Request my free strategy call',
  microcopy: 'Your information is kept confidential and never shared. Reply within 1 business day.',
  success: "Thanks — I'll be in touch within one business day.",
}

/**
 * Pricing section. Each tab maps to a contact-form service so "Get a quote"
 * pre-selects the right option. `featured: true` highlights a card.
 */
export const pricing = {
  eyebrow: 'Pricing',
  title: 'Clear prices, before any work starts.',
  subtitle:
    'Most work is fixed-price, so you know the cost upfront. These are starting points. After a free discovery call, you get a written scope and an exact quote.',
  badge: 'Most popular',
  cta: 'Get a quote',
  tabs: [
    {
      id: 'web',
      label: 'Software & Web',
      shortLabel: 'Software',
      formValue: 'Custom software / website',
      plans: [
        {
          name: 'Starter Site',
          for: 'For new or small businesses that need a professional presence.',
          amount: '$1,500',
          note: 'One-time',
          features: ['Up to 5 pages, mobile-first', 'Contact form', 'Google Business Profile setup', 'Security basics built in'],
        },
        {
          name: 'Business Site',
          for: 'For businesses that want the site to bring in customers.',
          amount: '$3,500',
          note: 'One-time',
          featured: true,
          features: ['Up to 12 pages', 'Online booking or ordering', 'Basic SEO and review integration', 'Analytics setup'],
        },
        {
          name: 'Web Apps & Automation',
          for: 'Dashboards, internal tools, APIs and integrations.',
          from: true,
          amount: '$2,500',
          note: 'Scoped per project',
          features: [
            'Custom web applications',
            'API design and integrations',
            'Workflow and spreadsheet automation',
            'Online stores from $5,500',
          ],
        },
      ],
      extrasTitle: 'Monthly care plans',
      extras: [
        { label: 'Care: hosting, security updates, backups, 30 min of edits', price: '$75/mo' },
        { label: 'Growth: Care + 2 hrs of edits and a monthly report', price: '$200/mo' },
      ],
    },
    {
      id: 'ai',
      label: 'AI Chatbots',
      shortLabel: 'AI Chatbots',
      formValue: 'AI chatbot',
      plans: [
        {
          name: 'Website Chat Assistant',
          for: 'An assistant trained on your business that answers customers 24/7.',
          amount: '$1,200',
          unit: 'setup',
          note: '+ $150/mo',
          featured: true,
          features: [
            'Trained on your documents and FAQs',
            'Captures leads and quote requests',
            'Books appointments',
            'Monthly tuning and monitoring',
          ],
        },
        {
          name: 'AI Phone & Text Answering',
          for: 'Never miss a call. Answers, books and texts back.',
          amount: '$1,500',
          unit: 'setup',
          note: '+ $250/mo (call usage at cost)',
          features: ['Answers missed and after-hours calls', 'Books appointments', 'Text follow-ups', 'Call summaries sent to you'],
        },
        {
          name: 'Custom AI & Internal Assistants',
          for: 'RAG knowledge assistants and agentic workflow automation.',
          from: true,
          amount: '$2,500',
          note: 'Scoped per project',
          features: [
            'Internal knowledge assistants',
            'Workflow and agentic automation',
            'Integrations with your tools',
            'Security reviewed before launch',
          ],
        },
      ],
      extrasTitle: 'Training',
      extras: [
        {
          label: 'AI at Work team workshop: safe AI use, hands-on setup and a written AI policy (up to 10 people)',
          price: '$750 / half day',
        },
      ],
    },
    {
      id: 'sec',
      label: 'Cybersecurity',
      shortLabel: 'Security',
      formValue: 'Cybersecurity',
      plans: [
        {
          name: 'Watch',
          for: 'For tiny offices of up to 5 people.',
          amount: '$250',
          unit: '/mo flat',
          note: '3-month minimum',
          features: ['Quarterly security review', 'Monthly phishing simulation', 'Email support', 'Annual policy update'],
        },
        {
          name: 'Protect',
          for: 'Managed protection for most small businesses.',
          amount: '$75',
          unit: '/user/mo',
          note: '$375/mo minimum',
          featured: true,
          features: ['Everything in Watch', 'Managed endpoint protection', 'Backup and account monitoring', 'Patch oversight'],
        },
        {
          name: 'Shield',
          for: 'For regulated offices: medical, dental, legal, CPA.',
          amount: '$125',
          unit: '/user/mo',
          note: '$750/mo minimum',
          features: [
            'Everything in Protect',
            'Annual compliance assessment',
            'Incident response on call',
            'Quarterly strategy meeting',
          ],
        },
      ],
      extrasTitle: 'One-time assessments',
      extras: [
        { label: 'Security Essentials Assessment (1–10 users)', price: '$1,500' },
        { label: 'HIPAA Security Risk Assessment', price: '$2,500' },
        { label: 'IRS WISP Package (CPAs, tax preparers)', price: '$1,800' },
        { label: 'Law Firm Security Package', price: '$2,500' },
        { label: 'Cyber Insurance Questionnaire Help', price: '$350' },
        { label: 'Staff phishing training (up to 15 people)', price: '$400' },
      ],
    },
  ],
  notes: [
    { title: 'Free discovery call', text: '30 minutes to talk through what you need. No pressure, no jargon.' },
    { title: 'Hourly work', text: '$125/hr for work outside a package. $200/hr after hours or emergencies.' },
    { title: 'Simple terms', text: '50% deposit to start projects, 50% on delivery. Monthly plans billed in advance.' },
    { title: 'Discounts', text: '10% off when you combine a security plan and a care plan. 15% off for nonprofits.' },
  ],
  footer: "Not sure what fits? Tell me what you're working on and I'll recommend a package.",
}
