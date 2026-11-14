/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT: edit this one file to fill in the landing page.
 * ─────────────────────────────────────────────────────────────
 *
 *  Anything written in [SQUARE BRACKETS] is a placeholder and is shown on
 *  the live page as-is, so it's obvious what still needs real content.
 *
 *  Rules of thumb:
 *  - Only publish facts you can back up: real client names, real quotes
 *    (with permission), real numbers, real certifications.
 *  - To hide a whole block until it's ready, empty its array:
 *      clientLogos: []   → hides the logo row (currently hidden)
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
  keyCredential: 'BS Computer Information Systems and Cybersecurity',
  entity: 'Sole Proprietor',
  region: 'California',
  url: 'https://georgeakaitechconsulting.com',
  email: 'info@georgeakaitechconsulting.com',
  phone: '(530) 591-5143',
  /** Same number in international format, used for tap-to-call links. */
  phoneTel: '+15305915143',
  linkedin: 'https://www.linkedin.com/in/georgeakai/',
  /** Booking link (Calendly / Cal.com). Empty = no calendar button. */
  calendarUrl: '',
  /** Formspree endpoint (existing form). Swap for a Resend route or other backend if needed. */
  formEndpoint: 'https://formspree.io/f/mjykojpl',
  /** Real photos under /public: 4:5 portrait (About) and a square graduation photo (hero card). */
  headshot: '/george-headshot.webp',
  avatar: '/george-avatar.webp',
  /** Included support after launch, in days. */
  supportDays: '30',
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
    'I build custom software, AI assistants and security protection for small and mid-sized businesses. You get a fixed price, weekly updates, and one experienced expert responsible from the first call to launch.',
  primaryCta: 'Book a free 30-minute call',
  secondaryCta: 'See recent work',
  checks: ['Based in California, working with clients anywhere', 'Replies within 1 business day', 'Happy to sign a confidentiality agreement'],
  card: {
    eyebrow: 'Your free 30-minute call',
    title: "Leave with a clear plan, even if you don't hire me.",
    steps: [
      'We look at your goals, the tools you use today and your biggest risks.',
      'I recommend the best option: build something new, buy a ready-made tool, or fix what you have.',
      'Within 48 hours, you get a written summary with an estimated cost and timeline.',
    ],
  },
}

/** Client logos: { name, src } with src under /public. Empty = row hidden. */
export const clientLogos = []

/** Shown in the bar under the hero. */
export const credentialsLabel = 'Credentials'
export const credentials = [
  "Bachelor's Degree in Computer Information Systems",
  'CompTIA Security+',
  'Google Cybersecurity Certificate',
  'AWS Building Generative AI Solutions',
]

/** Only keep stats you can verify. */
export const stats = [
  { value: '5+', label: 'Projects delivered' },
  { value: '1 yr', label: 'Building software for real businesses' },
  { value: '90%', label: 'Clients who return or refer' },
  { value: '<24 hr', label: 'Reply time on support requests' },
]

export const problems = {
  eyebrow: 'Does this sound like you?',
  title: 'Your business has outgrown spreadsheets, basic apps and "a friend who does IT."',
  items: [
    {
      title: 'Manual work takes up your week',
      text: 'Your team copies information from one app to another, follows up on approvals by email and answers the same customer questions all day.',
    },
    {
      title: 'Past developers disappeared',
      text: "You've paid for projects that ran late, cost more than planned, or left you with a system nobody knows how to fix.",
    },
    {
      title: "You're not sure you're secure",
      text: "You don't know who can access what, whether your backups work, or what you'd do if you were hacked or your files were locked for ransom.",
    },
  ],
}

export const services = {
  title: 'Three ways I help businesses run better and safer',
  subtitle:
    "Every project starts with a written plan and a fixed price, so you know the cost, the timeline and exactly what you'll get before any work begins.",
  items: [
    {
      icon: 'code',
      title: 'Custom Software & Web Development',
      text: 'Websites, customer portals and business tools built around the way your business actually works.',
      bullets: [
        'Fast websites that show up on Google',
        'Customer portals and dashboards',
        'Automated tasks and apps that share information',
        'You own 100% of the code',
      ],
      pricePrefix: 'Projects from',
      price: '$1,500',
      cta: 'Talk about your project',
      formValue: 'Custom software / website',
    },
    {
      icon: 'chat',
      title: 'AI Chatbots & Assistants',
      text: 'AI assistants that learn from your own documents. They answer customer questions, collect details from people interested in buying, and help your staff, day and night.',
      bullets: [
        'Chatbots for your website and customer support',
        "Assistants that answer your staff's questions",
        'Connects to your calendar, customer list and support tools',
        'Private: your data stays yours',
      ],
      pricePrefix: 'Setups from',
      price: '$1,200',
      cta: 'Ask about an AI assistant',
      formValue: 'AI chatbot',
      featured: true,
      badge: 'Most requested',
    },
    {
      icon: 'shield',
      title: 'Cybersecurity Consulting',
      text: 'Find and fix weak spots before hackers do, and answer the security questions your customers and insurance company ask.',
      bullets: [
        'A security check-up with a clear list of what to fix first',
        'Stronger logins, two-step sign-in, backups and email security',
        'A plan for what to do if you get hacked',
        'Training so your staff can spot scams',
      ],
      pricePrefix: 'Plans from',
      price: '$250/mo',
      cta: 'Get a security check-up',
      formValue: 'Cybersecurity',
    },
  ],
}

/**
 * Recent work: real, live client sites. `screens` are phone screenshots
 * (480×817 .webp under /public/portfolio); the first is shown in front.
 */
export const portfolio = {
  title: 'Recent work',
  subtitle: 'Websites I built for real businesses, live today.',
  items: [
    {
      name: 'Kenrish Collection',
      kind: 'Online store & business dashboard',
      url: 'https://www.kenrishcollection.com',
      tag: 'Online store + business dashboard · Beauty & fashion',
      summary:
        'An online store for two brands, beauty and fashion, plus a private dashboard the owner uses to run the whole business.',
      features: [
        'Beauty & fashion online stores',
        'Product search & wishlist',
        'Business overview dashboard',
        'Orders, invoices & expenses',
        'Staff management',
      ],
      screens: [
        { src: '/portfolio/kenrish-store.webp', alt: 'Kenrish Collection storefront: Our Collections with Beauty, Handbags and Clothing filters' },
        { src: '/portfolio/kenrish-admin.webp', alt: 'Kenrish admin menu: Executive Dashboard, Customer & Order Management, Expenses, Employees, Invoices and Offers' },
      ],
    },
    {
      name: 'Mid Valley Lath & Plaster',
      kind: 'Contractor website',
      url: 'https://midvalleylathandplaster.vercel.app',
      tag: 'Website that brings in customers · Lath, plaster & stucco contractor',
      summary:
        'A phone-friendly website for a licensed California stucco contractor, built to get visitors to call or ask for a free estimate.',
      features: ['One-tap call & text buttons', 'Free estimate request form', 'License & experience shown up front', 'Designed for phones first'],
      screens: [
        { src: '/portfolio/midvalley-home.webp', alt: 'Mid Valley Lath & Plaster home page: Stucco done right. Built to last, with call and free estimate buttons' },
        { src: '/portfolio/midvalley-quote.webp', alt: 'Mid Valley estimate request form with name, phone, city, service and project details' },
      ],
    },
  ],
}

/**
 * Client results (challenge → solution → outcome). Add AI and cybersecurity
 * results here as they happen. `image`: path under /public, or null.
 */
export const caseStudies = [
  {
    tag: 'Custom software · Beauty & fashion',
    title: 'Kenrish Collection moved from paper admin to one modern dashboard',
    challenge: 'Accounting, inventory, staff records and customer records were all managed by hand.',
    solution:
      'One custom dashboard that brings accounting, inventory, staff and customer records together and does the repetitive tasks automatically.',
    metric: 'Hours saved, no more guesswork',
    image: '/portfolio/kenrish-admin.webp',
    imageAlt: 'Kenrish admin menu with Executive Dashboard, Customer & Order Management, Expenses, Employees and Invoices',
  },
  {
    tag: 'Website · Stucco contractor',
    title: 'Mid Valley Lath & Plaster now gets customers from its website',
    challenge: 'Homeowners needed a fast way to reach a licensed stucco contractor from their phones.',
    solution:
      'A phone-friendly website with one-tap call and text buttons, a free estimate form, and their license and experience shown up front.',
    metric: 'Customers can call or ask for an estimate in one tap',
    image: '/portfolio/midvalley-home.webp',
    imageAlt: 'Mid Valley Lath & Plaster home page with call and free estimate buttons',
  },
]

/** Real quotes only, with permission. Empty the array to hide the section. `rating` (1–5) is optional. */
export const testimonials = [
  {
    quote:
      'George built a modern system for me that has revolutionized how I do admin work. I have moved from paper accounting into automated workflows, which helps me see what is going on in my business.',
    name: 'Elizabeth Ekale',
    title: 'Owner & CEO',
    company: 'Kenrish Collection',
    avatar: null,
  },
]

/** Link to public reviews (Google Business, Clutch). Leave url empty to hide the line. */
export const reviews = {
  label: '',
  url: '',
}

export const process = {
  title: 'A clear process with no surprises',
  steps: [
    {
      when: 'Start',
      title: 'Free 30-minute call',
      text: 'We talk about your goals, the tools you use and any limits, like budget or deadlines.',
    },
    {
      when: 'Week 1',
      title: 'Written plan and fixed price',
      text: "A written plan showing what you'll get, when, and a fixed price. No surprise hourly bills.",
    },
    {
      when: 'During the build',
      title: 'A demo every week',
      text: 'Every week you see what is working so far and can ask for changes before anything is final.',
    },
    {
      when: 'Launch',
      title: 'Launch & support',
      text: `I hand everything over with written instructions and training, plus ${business.supportDays} days of free support.`,
    },
  ],
}

export const about = {
  title: 'You work directly with me, not a junior team or an outsourced company.',
  paragraphs: [
    "I'm George Akai, founder of George Akai Tech Consulting. I hold a BS in Computer Information Systems and Cybersecurity and worked as an Information Security Analyst Assistant at CSU Chico. I started this firm to give growing businesses the kind of secure, well-built technology usually reserved for large companies.",
    "My focus is simple: build technology that is secure from the start, easy for your team to use, and comes with clear written instructions, so you're never stuck depending on me.",
  ],
  credentials: [
    { label: 'Education', value: 'BS, Computer Information Systems & Cybersecurity' },
    { label: 'Certifications', value: 'CompTIA Security+ · Google Cybersecurity · AWS Building Generative AI Solutions' },
    { label: 'Experience', value: 'Information Security Analyst Assistant, CSU Chico' },
    { label: 'Tools I build with', value: 'React, Python, Node.js, C++' },
  ],
}

export const guarantees = {
  title: 'Working with me is low-risk',
  items: [
    { icon: 'quote', title: 'Fixed, written quotes', text: 'The price you approve is the price you pay.' },
    { icon: 'key', title: 'You own everything', text: 'You get all the code, accounts and written instructions.' },
    { icon: 'lock', title: 'Confidential', text: 'Happy to sign a confidentiality agreement (NDA). I only access the data I need.' },
    {
      icon: 'support',
      title: 'Included support',
      text: `${business.supportDays} days of free fixes after launch.`,
    },
  ],
}

export const faqs = [
  {
    q: 'How much does a typical project cost?',
    a: "Most projects cost between $1,000 and $3,000, depending on what you need. After our free call you'll get a fixed price, never an open-ended hourly bill.",
  },
  {
    q: 'How long does it take?',
    a: 'Websites and chatbots usually launch in 2–6 weeks; custom software in 6–12 weeks. Security check-ups take about 1–2 weeks.',
  },
  {
    q: 'Do you work with businesses outside California?',
    a: "Yes. I'm based in California and work online with clients across the US and Kenya. I can also visit in person if you're nearby.",
  },
  {
    q: 'What happens after launch?',
    a: `Every project includes ${business.supportDays} days of support. After that, you can choose an optional monthly support plan or manage everything yourself using the written instructions I provide.`,
  },
  {
    q: 'Is my business data safe with an AI chatbot?',
    a: "Yes. I set up assistants so your data isn't used to train public AI tools, limit what the chatbot can see, and write down exactly where your data is stored.",
  },
]

export const contact = {
  eyebrow: "Let's talk",
  title: "Tell me what you're trying to solve.",
  subtitle:
    "Send a few details and I'll reply within one business day to set up your free 30-minute call. No pressure, no obligation.",
  serviceOptions: ['Custom software / website', 'AI chatbot', 'Cybersecurity', 'Not sure yet'],
  budgetOptions: ['Under $5k', '$5k–$15k', '$15k–$50k', '$50k+'],
  submit: 'Request my free call',
  microcopy: 'Your information is kept confidential and never shared. Reply within 1 business day.',
  success: "Thanks! I'll be in touch within one business day.",
}

/**
 * Pricing section. Each tab maps to a contact-form service so "Get a quote"
 * pre-selects the right option. `featured: true` highlights a card.
 */
export const pricing = {
  eyebrow: 'Pricing',
  title: 'Clear prices, before any work starts.',
  subtitle:
    'Most work has a fixed price, so you know the cost upfront. These are starting prices. After a free call, you get a written plan and an exact price.',
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
          for: 'For new or small businesses that need a professional website.',
          amount: '$1,500',
          note: 'One-time',
          features: ['Up to 5 pages, built for phones first', 'Contact form', 'Google Business Profile setup (your listing on Google Maps)', 'Basic security built in'],
        },
        {
          name: 'Business Site',
          for: 'For businesses that want the site to bring in customers.',
          amount: '$3,500',
          note: 'One-time',
          featured: true,
          features: ['Up to 12 pages', 'Online booking or ordering', 'Help showing up on Google, plus your customer reviews', 'Visitor statistics set up'],
        },
        {
          name: 'Web Apps & Automation',
          for: 'Dashboards, business tools and apps that share information.',
          from: true,
          amount: '$2,500',
          note: 'Price depends on the project',
          features: [
            'Custom web applications',
            'Connecting your apps so they share information',
            'Automating repetitive tasks and spreadsheets',
            'Online stores from $5,500',
          ],
        },
      ],
      extrasTitle: 'Monthly website care',
      extras: [
        { label: 'Care: hosting, security updates, backups and 30 minutes of changes', price: '$75/mo' },
        { label: 'Growth: everything in Care, plus 2 hours of changes and a monthly report', price: '$200/mo' },
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
          for: 'A chatbot trained on your business that answers customers day and night.',
          amount: '$1,200',
          unit: 'setup',
          note: '+ $150/mo',
          featured: true,
          features: [
            'Learns from your documents and FAQs',
            'Collects contact details and quote requests',
            'Books appointments',
            'Monthly improvements and checks',
          ],
        },
        {
          name: 'AI Phone & Text Answering',
          for: 'Never miss a call. It answers, books appointments and texts back.',
          amount: '$1,500',
          unit: 'setup',
          note: '+ $250/mo (plus phone call costs)',
          features: ['Answers missed and after-hours calls', 'Books appointments', 'Text follow-ups', 'Call summaries sent to you'],
        },
        {
          name: 'Custom AI & Internal Assistants',
          for: "AI that answers your staff's questions from company documents and handles multi-step tasks.",
          from: true,
          amount: '$2,500',
          note: 'Price depends on the project',
          features: [
            'Answers staff questions from your documents',
            'Automates multi-step tasks',
            'Connects with the tools you already use',
            'Security checked before launch',
          ],
        },
      ],
      extrasTitle: 'Training',
      extras: [
        {
          label: 'AI at Work team workshop: how to use AI safely, hands-on setup and written AI rules for your team (up to 10 people)',
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
          for: 'For small offices of up to 5 people.',
          amount: '$250',
          unit: '/month',
          note: '3-month minimum',
          features: ['Security review every 3 months', 'Monthly practice scam emails to train your staff', 'Email support', 'Yearly update of your security rules'],
        },
        {
          name: 'Protect',
          for: 'Ongoing protection for most small businesses.',
          amount: '$75',
          unit: '/person/month',
          note: '$375/mo minimum',
          featured: true,
          features: ['Everything in Watch', 'Virus and threat protection on every computer', 'Backup and account monitoring', 'Making sure software updates get installed'],
        },
        {
          name: 'Shield',
          for: 'For offices with strict rules: medical, dental, legal and accounting.',
          amount: '$125',
          unit: '/person/month',
          note: '$750/mo minimum',
          features: [
            'Everything in Protect',
            'Yearly check that you meet industry rules',
            'Help right away if you get hacked',
            'Planning meeting every 3 months',
          ],
        },
      ],
      extrasTitle: 'One-time security check-ups',
      extras: [
        { label: 'Basic security check-up (1–10 people)', price: '$1,500' },
        { label: 'HIPAA security check for medical and dental offices', price: '$2,500' },
        { label: 'IRS-required written security plan (WISP) for tax preparers and CPAs', price: '$1,800' },
        { label: 'Security package for law firms', price: '$2,500' },
        { label: 'Help filling out cyber insurance forms', price: '$350' },
        { label: 'Staff training on spotting scam emails (up to 15 people)', price: '$400' },
      ],
    },
  ],
  notes: [
    { title: 'Free 30-minute call', text: 'We talk through what you need in plain language. No pressure.' },
    { title: 'Hourly work', text: '$125 an hour for work not covered by a package. $200 an hour for after-hours or emergency work.' },
    { title: 'Simple payment terms', text: "Pay 50% to start a project and 50% when it's done. Monthly plans are paid at the start of each month." },
    { title: 'Discounts', text: 'Save 10% when you combine a security plan with website care. Nonprofits save 15%.' },
  ],
  footer: "Not sure which one fits? Tell me what you're working on and I'll recommend one.",
}
