import { Link } from 'react-router-dom'
import {
  Code2,
  Bot,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Search,
  Wrench,
  Rocket,
  LifeBuoy,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: <Code2 size={22} />,
    title: 'Software & Web Development',
    description:
      'Custom websites, web applications, and APIs built to be fast, maintainable, and ready to grow with your business. No bloated templates, no throwaway code.',
    bullets: ['Business & marketing websites', 'Web applications & dashboards', 'API design & integrations', 'Automation & internal tools'],
    image: '/reservation engine.png',
    imageAlt: 'Web application screenshot',
  },
  {
    icon: <Bot size={22} />,
    title: 'AI Chatbot Integrations',
    description:
      'AI assistants and chatbots that actually know your business, trained on your documents and workflows and integrated into your site or internal tools.',
    bullets: ['Custom RAG-based chatbots', 'Website & support chat assistants', 'Internal knowledge assistants', 'Workflow & agentic automation'],
    image: '/AI RAG chat assistant.png',
    imageAlt: 'AI RAG chat assistant screenshot',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Cybersecurity Consulting & Engineering',
    description:
      'Practical security work grounded in real security operations experience: vulnerability management, security monitoring, and hardening that fits your risk and budget.',
    bullets: ['Vulnerability management', 'Security monitoring (SIEM)', 'Cloud security (AWS)', 'Risk assessments & hardening'],
    image: '/sofelk.png',
    imageAlt: 'Security operations dashboard screenshot',
  },
]

const trustStats = [
  { value: '300+', label: 'endpoints deployed & managed' },
  { value: 'AWS', label: 'EC2 · Bedrock · S3 · IAM' },
  { value: '15%', label: 'faster vulnerability remediation' },
  { value: 'AI + Security', label: 'background, not just one or the other' },
]

const process = [
  {
    icon: <Search size={20} />,
    step: '01',
    title: 'Discovery Call',
    description: 'We talk through what you need, your constraints, and what success looks like. No pressure, no jargon.',
  },
  {
    icon: <Wrench size={20} />,
    step: '02',
    title: 'Proposal & Scope',
    description: 'You get a clear, written scope and price before any work starts. No surprise invoices.',
  },
  {
    icon: <Rocket size={20} />,
    step: '03',
    title: 'Build & Iterate',
    description: 'Regular check-ins as the work progresses, so you always know where things stand.',
  },
  {
    icon: <LifeBuoy size={20} />,
    step: '04',
    title: 'Launch & Support',
    description: 'Delivery, documentation, and support after launch. I do not disappear once it ships.',
  },
]

export default function Landing() {
  useReveal()

  return (
    <div className="page-content">
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-copy reveal">
          <p className="eyebrow">George Akai Tech Consulting</p>
          <h1>
            Secure Software and{' '}
            <span className="gradient-text">AI-Powered Tools</span>
            {' '}for Growing Businesses.
          </h1>
          <p className="hero-paragraph">
            I design and build web applications, integrate AI chatbots that actually know your business, and provide
            cybersecurity consulting grounded in real security operations experience, so you get software that works
            and holds up under real use.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">
              Start a Project
            </Link>
            <a className="button button-secondary" href="#services">
              View Services
            </a>
            <Link className="button button-tertiary" to="/about">
              Meet George →
            </Link>
          </div>
        </div>

        <div className="hero-visual-wrap reveal reveal-delay-2">
          <div className="hero-photo-ring" />
          <div className="hero-visual-panel glass-panel">
            <div className="hero-visual-row">
              <span className="hero-visual-icon"><Code2 size={18} /></span>
              Software & Web Development
            </div>
            <div className="hero-visual-row">
              <span className="hero-visual-icon"><Bot size={18} /></span>
              AI Chatbot Integrations
            </div>
            <div className="hero-visual-row">
              <span className="hero-visual-icon"><ShieldCheck size={18} /></span>
              Cybersecurity Consulting
            </div>
            <div className="hero-visual-divider" />
            <p className="hero-visual-note">Based in California · Remote-friendly</p>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="trust-strip reveal">
        {trustStats.map((s) => (
          <div key={s.label} className="trust-pill">
            <span className="trust-value">{s.value}</span>
            <span className="trust-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── SERVICES ── */}
      <section className="work-section" id="services">
        <div className="section-headline reveal">
          <div className="section-label">Services</div>
          <h2>Three ways I can help your business run better.</h2>
        </div>
        <div className="card-grid">
          {services.map((card, i) => (
            <article key={card.title} className={`service-card glass-panel reveal reveal-delay-${i + 1}`}>
              <div className="service-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
              {card.image && (
                <div className="service-card-img">
                  <img src={card.image} alt={card.imageAlt} />
                </div>
              )}
              <ul>
                {card.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Link className="button button-tertiary service-card-cta" to="/contact">
                Request this service <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process-section">
        <div className="section-headline reveal">
          <div className="section-label">How It Works</div>
          <h2>A straightforward process, start to finish.</h2>
        </div>
        <div className="process-grid">
          {process.map((p, i) => (
            <div key={p.title} className={`process-step glass-panel reveal reveal-delay-${i + 1}`}>
              <div className="process-step-top">
                <span className="process-icon">{p.icon}</span>
                <span className="process-number">{p.step}</span>
              </div>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY WORK WITH ME ── */}
      <section className="about-section glass-panel reveal">
        <div className="about-copy">
          <div className="section-label">Why Work With Me</div>
          <h2>One person, three disciplines, no handoffs between teams.</h2>
          <p>
            Most freelancers or agencies specialize in one lane: a developer who does not think about security, or a
            security consultant who cannot build the fix. I have hands-on experience in security operations,
            vulnerability management, software engineering, and applied AI, which means the person who scopes your
            project is the same person who builds and secures it.
          </p>
          <p>
            You get direct communication, a fixed point of contact, and work that is held to the same standard I'd
            want for my own systems.
          </p>
          <ul className="checklist">
            <li><CheckCircle2 size={18} /> Clear, written scope and pricing before work begins</li>
            <li><CheckCircle2 size={18} /> Security considered from day one, not bolted on after</li>
            <li><CheckCircle2 size={18} /> Direct access to the person doing the work</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="/admin features.png" alt="Admin dashboard project screenshot" />
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner glass-panel reveal">
        <div>
          <h2>Have a project in mind?</h2>
          <p>Tell me what you're working on and I'll get back to you with next steps.</p>
        </div>
        <Link className="button button-primary" to="/contact">
          Get a Quote <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  )
}
