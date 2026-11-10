import {
  ArrowRight,
  Check,
  Code2,
  FileCheck,
  KeyRound,
  LifeBuoy,
  Lock,
  MessageSquare,
  Shield,
  ShieldCheck,
  Star,
} from 'lucide-react'
import {
  about,
  business,
  caseStudies,
  clientLogos,
  credentials,
  faqs,
  guarantees,
  hero,
  isPlaceholder,
  problems,
  process,
  reviews,
  services,
  stats,
  testimonials,
} from '../content/site'
import { ContactSection, ImageSlot, LinkedInIcon, SectionLink } from '../components/ui'
import { useSectionReveal } from '../hooks/useSectionReveal'

const serviceIcons = { code: Code2, chat: MessageSquare, shield: ShieldCheck }
const guaranteeIcons = { quote: FileCheck, key: KeyRound, lock: Lock, support: LifeBuoy }

function faqJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

/** Renders text, wrapping any [PLACEHOLDER] runs so they stand out. */
function T({ children }) {
  if (typeof children !== 'string' || !children.includes('[')) return children
  return children.split(/(\[[^\]]+\])/g).map((part, i) =>
    /^\[.*\]$/.test(part) ? (
      <span key={i} className="ga-ph">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

function Hero() {
  return (
    <section className="ga-hero ga-dark" aria-labelledby="hero-title">
      <div className="ga-container ga-hero-grid">
        <div>
          <p className="ga-pill">
            <Shield size={14} aria-hidden="true" />
            {hero.pill}
          </p>
          <h1 id="hero-title" className="ga-h1">
            {hero.title}
          </h1>
          <p className="ga-hero-sub">{hero.subtitle}</p>
          <div className="ga-actions">
            <SectionLink hash="contact" className="ga-btn ga-btn-primary">
              {hero.primaryCta} <ArrowRight size={18} aria-hidden="true" />
            </SectionLink>
            <SectionLink hash="work" className="ga-btn ga-btn-secondary-dark">
              {hero.secondaryCta}
            </SectionLink>
          </div>
          <ul className="ga-checks">
            {hero.checks.map((c) => (
              <li key={c}>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <aside className="ga-call-card" aria-labelledby="call-card-title">
          <p className="ga-eyebrow">{hero.card.eyebrow}</p>
          <h2 id="call-card-title">{hero.card.title}</h2>
          <ol className="ga-call-steps">
            {hero.card.steps.map((s, i) => (
              <li key={s}>
                <span className="ga-call-num" aria-hidden="true">
                  {i + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <div className="ga-call-person">
            {isPlaceholder(business.headshot) ? (
              <div className="ga-avatar ga-avatar-ph" role="img" aria-label="Photo of George Akai (placeholder)">
                PHOTO
              </div>
            ) : (
              <img className="ga-avatar" src={business.headshot} alt="George Akai" width="52" height="52" />
            )}
            <div>
              <p className="ga-call-name">{business.founder}</p>
              <p className="ga-call-role">
                {business.founderTitle} · <T>{business.keyCredential}</T>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

function TrustBar() {
  if (!clientLogos.length && !credentials.length) return null
  return (
    <section className="ga-trust" aria-label="Clients and credentials">
      <div className="ga-container ga-trust-inner">
        {clientLogos.length > 0 && (
          <>
            <p className="ga-trust-label">Trusted by teams at</p>
            <ul className="ga-logos">
              {clientLogos.map((l) => (
                <li key={l.name}>
                  {l.src ? (
                    <img src={l.src} alt={l.name} loading="lazy" height="40" />
                  ) : (
                    <span className="ga-logo-ph">{l.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
        {credentials.length > 0 && (
          <ul className="ga-cred-pills" aria-label="Credentials">
            {credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

function Stats() {
  if (!stats.length) return null
  return (
    <section className="ga-stats-wrap" aria-label="Track record">
      <ul className="ga-container ga-stats">
        {stats.map((s) => (
          <li key={s.label} className="ga-stat">
            <span className="ga-stat-value">
              <T>{s.value}</T>
            </span>
            <span className="ga-stat-label">{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Problems() {
  return (
    <section className="ga-section ga-gray" aria-labelledby="problems-title">
      <div className="ga-container">
        <header className="ga-head ga-reveal">
          <p className="ga-eyebrow">{problems.eyebrow}</p>
          <h2 id="problems-title" className="ga-h2">
            {problems.title}
          </h2>
        </header>
        <ul className="ga-grid-3">
          {problems.items.map((p) => (
            <li key={p.title} className="ga-card ga-reveal">
              <h3 className="ga-h3">{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="ga-section" aria-labelledby="services-title">
      <div className="ga-container">
        <header className="ga-head ga-reveal">
          <p className="ga-eyebrow">Services</p>
          <h2 id="services-title" className="ga-h2">
            {services.title}
          </h2>
          <p className="ga-lead">{services.subtitle}</p>
        </header>
        <div className="ga-grid-3 ga-services">
          {services.items.map((s) => {
            const Icon = serviceIcons[s.icon]
            return (
              <article key={s.title} className={`ga-card ga-service ga-reveal${s.featured ? ' is-featured' : ''}`}>
                {s.badge && <span className="ga-badge">{s.badge}</span>}
                <span className="ga-icon-tile" aria-hidden="true">
                  <Icon size={24} />
                </span>
                <h3 className="ga-h3 ga-h3-lg">{s.title}</h3>
                <p>{s.text}</p>
                <ul className="ga-bullets">
                  {s.bullets.map((b) => (
                    <li key={b}>
                      <Check size={18} strokeWidth={2.5} aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="ga-service-foot">
                  <p className="ga-price">
                    {s.pricePrefix}{' '}
                    <strong>
                      <T>{s.price}</T>
                    </strong>
                  </p>
                  <SectionLink
                    hash="contact"
                    state={{ service: s.formValue }}
                    className={`ga-btn ga-btn-sm ga-btn-block ${s.featured ? 'ga-btn-primary' : 'ga-btn-secondary-light'}`}
                  >
                    {s.cta}
                  </SectionLink>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Results() {
  return (
    <section id="work" className="ga-section ga-dark" aria-labelledby="work-title">
      <div className="ga-container">
        <header className="ga-head ga-head-split ga-reveal">
          <div>
            <p className="ga-eyebrow">Client results</p>
            <h2 id="work-title" className="ga-h2">
              Real problems, measurable outcomes
            </h2>
          </div>
          <SectionLink hash="contact" className="ga-link-dark">
            Discuss a similar project <ArrowRight size={16} aria-hidden="true" />
          </SectionLink>
        </header>
        <div className="ga-grid-3">
          {caseStudies.map((c) => (
            <article key={c.title} className="ga-case ga-reveal">
              {c.image ? (
                <img className="ga-case-img" src={c.image} alt={c.imageAlt} loading="lazy" width="640" height="360" />
              ) : (
                <ImageSlot label="[PROJECT SCREENSHOT]" className="ga-case-img" />
              )}
              <div className="ga-case-body">
                <p className="ga-case-tag">
                  <T>{c.tag}</T>
                </p>
                <h3 className="ga-h3">
                  <T>{c.title}</T>
                </h3>
                <p className="ga-case-text">
                  <strong>Challenge:</strong> <T>{c.challenge}</T>
                </p>
                <p className="ga-case-text">
                  <strong>Solution:</strong> <T>{c.solution}</T>
                </p>
                <p className="ga-case-metric">
                  <T>{c.metric}</T>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  if (!testimonials.length) return null
  return (
    <section className="ga-section ga-gray" aria-labelledby="testimonials-title">
      <div className="ga-container">
        <h2 id="testimonials-title" className="ga-h2 ga-center ga-reveal">
          What clients say
        </h2>
        <div className="ga-grid-2">
          {testimonials.map((t, i) => (
            <figure key={i} className="ga-card ga-quote ga-reveal">
              <div className="ga-stars" role="img" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((n) => (
                  <Star key={n} size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                ))}
              </div>
              <blockquote>
                <p>
                  “<T>{t.quote}</T>”
                </p>
              </blockquote>
              <figcaption>
                {t.avatar ? (
                  <img className="ga-quote-avatar" src={t.avatar} alt="" width="44" height="44" loading="lazy" />
                ) : (
                  <span className="ga-quote-avatar ga-avatar-ph" aria-hidden="true" />
                )}
                <span>
                  <span className="ga-quote-name">
                    <T>{t.name}</T>
                  </span>
                  <span className="ga-quote-role">
                    <T>{`${t.title}, ${t.company}`}</T>
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="ga-reviews">
          <T>{reviews.label}</T> ·{' '}
          {isPlaceholder(reviews.url) ? (
            <span>Read all reviews</span>
          ) : (
            <a href={reviews.url} target="_blank" rel="noreferrer">
              Read all reviews
            </a>
          )}
        </p>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="ga-section" aria-labelledby="process-title">
      <div className="ga-container">
        <header className="ga-head ga-reveal">
          <p className="ga-eyebrow">How it works</p>
          <h2 id="process-title" className="ga-h2">
            {process.title}
          </h2>
        </header>
        <ol className="ga-steps">
          {process.steps.map((s, i) => (
            <li key={s.title} className="ga-step ga-reveal">
              <p className="ga-step-meta">
                <span>{String(i + 1).padStart(2, '0')}</span> · {s.when}
              </p>
              <h3 className="ga-h3">{s.title}</h3>
              <p>
                <T>{s.text}</T>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="ga-section ga-gray" aria-labelledby="about-title">
      <div className="ga-container ga-about">
        {isPlaceholder(business.headshot) ? (
          <ImageSlot label={business.headshot} className="ga-headshot" />
        ) : (
          <img className="ga-headshot" src={business.headshot} alt="George Akai" width="480" height="600" loading="lazy" />
        )}
        <div className="ga-reveal">
          <p className="ga-eyebrow">About</p>
          <h2 id="about-title" className="ga-h2">
            {about.title}
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="ga-about-p">
              <T>{p}</T>
            </p>
          ))}
          <dl className="ga-cred-grid">
            {about.credentials.map((c) => (
              <div key={c.label} className="ga-cred">
                <dt>{c.label}</dt>
                <dd>
                  <T>{c.value}</T>
                </dd>
              </div>
            ))}
          </dl>
          <a className="ga-link-light" href={business.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon size={18} /> Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

function Guarantees() {
  return (
    <section className="ga-section" aria-labelledby="guarantees-title">
      <div className="ga-container">
        <h2 id="guarantees-title" className="ga-h2 ga-center ga-reveal">
          {guarantees.title}
        </h2>
        <ul className="ga-grid-4">
          {guarantees.items.map((g) => {
            const Icon = guaranteeIcons[g.icon]
            return (
              <li key={g.title} className="ga-guarantee ga-reveal">
                <span className="ga-icon-tile" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3 className="ga-h3">{g.title}</h3>
                <p>
                  <T>{g.text}</T>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="ga-section ga-gray" aria-labelledby="faq-title">
      <div className="ga-container ga-faq">
        <header className="ga-head ga-center ga-reveal">
          <p className="ga-eyebrow">FAQ</p>
          <h2 id="faq-title" className="ga-h2">
            Questions, answered
          </h2>
        </header>
        <div className="ga-faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} className="ga-faq-item" open={i === 0}>
              <summary>
                <h3>{f.q}</h3>
                <span className="ga-faq-icon" aria-hidden="true" />
              </summary>
              <p>
                <T>{f.a}</T>
              </p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd() }} />
    </section>
  )
}

export default function Home() {
  useSectionReveal()

  return (
    <div className="ga-home">
      <Hero />
      <TrustBar />
      <Stats />
      <Problems />
      <Services />
      <Results />
      <Testimonials />
      <Process />
      <About />
      <Guarantees />
      <Faq />
      <ContactSection />
    </div>
  )
}
