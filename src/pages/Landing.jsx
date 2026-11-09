import { Link } from 'react-router-dom'
import { Code2, Bot, ShieldCheck, ArrowRight, Check } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: Code2,
    title: 'Web & Software',
    pitch: 'Fast, maintainable websites, web apps, and APIs.',
    tags: ['Websites', 'Web apps', 'APIs'],
    image: '/reservation engine.png',
    imageAlt: 'Reservation web app built by George Akai',
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    pitch: 'Assistants trained on your docs, live on your site.',
    tags: ['RAG chatbots', 'Support chat', 'Automation'],
    image: '/AI RAG chat assistant.png',
    imageAlt: 'AI chat assistant answering from business documents',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    pitch: 'Find and fix risks before attackers do.',
    tags: ['Vulnerability mgmt', 'SIEM', 'AWS security'],
    image: '/sofelk.png',
    imageAlt: 'Security monitoring dashboard',
  },
]

const stats = [
  { value: '300+', label: 'Endpoints secured' },
  { value: '15%', label: 'Faster remediation' },
  { value: 'AWS', label: 'Cloud-native builds' },
]

const steps = [
  { title: 'Discovery call', text: 'Tell me what you need.' },
  { title: 'Fixed quote', text: 'Clear scope and price upfront.' },
  { title: 'Build', text: 'Regular check-ins, no surprises.' },
  { title: 'Launch & support', text: 'I stay after it ships.' },
]

const promises = ['Security built in from day one', 'Fixed scope and price', 'Direct access to the engineer']

export default function Landing() {
  useReveal()

  return (
    <div className="lp">
      {/* ── HERO ── */}
      <section className="lp-hero" aria-labelledby="lp-title">
        <div className="lp-hero-copy">
          <p className="lp-badge">
            <span className="lp-badge-dot" aria-hidden="true" />
            Taking new projects
          </p>
          <h1 id="lp-title">
            Secure software and AI, <span className="gradient-text">built for your business.</span>
          </h1>
          <p className="lp-lede">Web apps, AI chatbots, and cybersecurity, from one engineer, start to finish.</p>
          <div className="lp-actions">
            <Link className="button button-primary" to="/contact">
              Get a quote <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a className="button button-secondary" href="#services">
              See services
            </a>
          </div>
          <ul className="lp-proof">
            {promises.map((p) => (
              <li key={p}>
                <Check size={14} aria-hidden="true" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="lp-hero-visual" aria-hidden="true">
          <div className="lp-browser">
            <div className="lp-browser-bar">
              <span />
              <span />
              <span />
            </div>
            <img src="/admin features.png" alt="" fetchpriority="high" />
          </div>
          <div className="lp-chip lp-chip-a">
            <Bot size={16} /> AI assistant online
          </div>
          <div className="lp-chip lp-chip-b">
            <ShieldCheck size={16} /> Security hardened
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="lp-stats reveal" aria-label="Track record">
        {stats.map((s) => (
          <div key={s.label} className="lp-stat">
            <span className="lp-stat-value">{s.value}</span>
            <span className="lp-stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── SERVICES ── */}
      <section className="lp-section" id="services" aria-labelledby="lp-services">
        <header className="lp-head reveal">
          <p className="section-label">Services</p>
          <h2 id="lp-services">Three services. One point of contact.</h2>
        </header>
        <div className="lp-services">
          {services.map(({ icon: Icon, ...s }, i) => (
            <Link key={s.title} to="/contact" className={`lp-card reveal reveal-delay-${i + 1}`}>
              <div className="lp-card-img">
                <img src={s.image} alt={s.imageAlt} loading="lazy" />
              </div>
              <div className="lp-card-body">
                <div className="lp-card-title">
                  <span className="lp-card-icon">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3>{s.title}</h3>
                </div>
                <p>{s.pitch}</p>
                <ul className="lp-tags">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <span className="lp-card-cta">
                  Get a quote <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="lp-section" aria-labelledby="lp-process">
        <header className="lp-head reveal">
          <p className="section-label">How it works</p>
          <h2 id="lp-process">Simple from first call to launch.</h2>
        </header>
        <ol className="lp-steps reveal">
          {steps.map((s, i) => (
            <li key={s.title} className="lp-step">
              <span className="lp-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── CTA ── */}
      <section className="lp-cta reveal" aria-labelledby="lp-cta">
        <h2 id="lp-cta">Have a project in mind?</h2>
        <p>Tell me about it and I'll reply with next steps.</p>
        <div className="lp-cta-actions">
          <Link className="button button-primary" to="/contact">
            Get a quote <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link className="button button-tertiary" to="/about">
            Meet George
          </Link>
        </div>
      </section>
    </div>
  )
}
