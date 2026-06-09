import { Shield, Code2, Sparkles, ExternalLink } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const serviceCards = [
  {
    icon: <Shield size={22} />,
    title: 'Cybersecurity',
    description:
      'Security starts with understanding what you are actually protecting and why. I have worked in security operations, managed vulnerability programs with Qualys VMDR, and helped teams get ahead of exposure before it turns into an incident.',
    bullets: ['Security operations', 'Vulnerability management', 'Cloud security', 'Risk reduction'],
    image: '/security.png',
  },
  {
    icon: <Code2 size={22} />,
    title: 'Software Development',
    description:
      'I build web applications, APIs, and automation systems. My focus is on writing code that works correctly, reads clearly, and does not create more problems down the road.',
    bullets: ['Web applications', 'API design', 'Automation workflows', 'Scalable systems'],
    image: '/software.png',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'AI & Automation',
    description:
      'I have built RAG applications on AWS Bedrock, agentic workflows using MCP servers, and AI assistants that cut the time teams spend navigating complex information. These tools are most useful when they handle the tedious parts so people can focus on the real work.',
    bullets: ['AI-powered assistants', 'RAG applications', 'Agentic workflows', 'Business automation'],
    image: '/Forensics agent.png',
  },
]

const highlights = [
  { value: '300+', label: 'Windows 11 endpoints deployed and configured across campus labs and offices' },
  { value: '15%', label: 'improvement in vulnerability remediation efficiency through Qualys VMDR reporting' },
  { value: 'AI Assistants', label: 'built on AWS Bedrock to speed up research and reduce information overload' },
  { value: 'Security Automation', label: 'built to reduce manual work and speed up incident response' },
  { value: 'AWS', label: 'hands-on with EC2, Bedrock, S3, IAM, Inspector, and Macie' },
]

const values = [
  'Integrity',
  'Curiosity',
  'Continuous Learning',
  'Community',
  'Innovation',
  'Accountability',
]

export default function Home() {
  useReveal()

  return (
    <div className="page-content">
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-copy reveal">
          <p className="eyebrow">Cybersecurity Analyst · Software Engineer · AI Solutions Developer</p>
          <h1>
            Building{' '}
            <span className="gradient-text">Secure Systems</span>,
            Intelligent Solutions,
            and Meaningful Impact.
          </h1>
          <p className="hero-paragraph">
            Hi, I'm George Akai. My work covers cybersecurity, software engineering, and AI.
            I care about building systems that are actually secure and software that holds up when it needs to.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://georgeakai.github.io/my-portfolio/about.html"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={16} />
              View Portfolio
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/georgeakai/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
            <a className="button button-tertiary" href="/resume.pdf" target="_blank" rel="noreferrer">
              Download Resume →
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap reveal reveal-delay-2">
          <div className="hero-photo-ring" />
          <div className="hero-photo-card">
            <img src="/graduation-1.jpg" alt="George Akai" />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section glass-panel reveal">
        <div className="about-copy">
          <div className="section-label">Technology, Security, and Curiosity</div>
          <h2>
            I got into technology because I wanted to understand how things break. That curiosity turned into a career.
          </h2>
          <p>
            I got into cybersecurity wanting to understand how systems fail, and what it actually takes to stop them
            from failing again. That led me to security operations and vulnerability management, where I learned that
            most problems start long before an incident ever gets reported.
          </p>
          <p>
            Software engineering taught me that clever code is rarely the goal. The goal is code that the next person
            can read, maintain, and extend without wanting to rewrite everything from scratch.
          </p>
          <p>
            A lot of my current work touches AI and automation. I have built RAG assistants, agentic workflows, and
            tools that help teams make decisions faster. That feels like a genuinely useful place to be right now.
          </p>
          <p>
            I am always studying something new, whether it is a different security framework, a better way to
            structure an agent, or a topic completely outside my field. Staying curious is the habit that keeps
            everything else moving.
          </p>
        </div>
        <div className="about-image">
          <img src="/Wazuh SIEM.png" alt="Wazuh SIEM security operations dashboard" />
        </div>
      </section>

      {/* ── WHAT I DO ── */}
      <section className="work-section">
        <div className="section-headline reveal">
          <div className="section-label">What I Do</div>
          <h3>Practical experience across security, software, and AI.</h3>
        </div>
        <div className="card-grid">
          {serviceCards.map((card, i) => (
            <article key={card.title} className={`service-card glass-panel reveal reveal-delay-${i + 1}`}>
              <div className="service-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
              {card.image && (
                <div className="service-card-img">
                  <img src={card.image} alt={`${card.title} project screenshot`} />
                </div>
              )}
              <ul>
                {card.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="highlight-section">
        <div className="section-headline reveal">
          <div className="section-label">Featured Highlights</div>
          <h3>A few numbers worth sharing.</h3>
        </div>
        <div className="highlight-grid">
          {highlights.map((h, i) => (
            <div key={h.label} className={`highlight-card glass-panel reveal reveal-delay-${i + 1}`}>
              <span className="highlight-value">{h.value}</span>
              <p className="highlight-label">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="values-section glass-panel reveal">
        <div className="values-copy">
          <div className="section-label">Personal Values</div>
          <h3>The principles I hold myself to, at work and outside of it.</h3>
          <p style={{ marginTop: 16, color: 'var(--text-2)', lineHeight: 1.75, fontSize: '0.97rem' }}>
            I try to live these consistently, not just list them.
          </p>
        </div>
        <div className="values-grid">
          {values.map((v) => (
            <div key={v} className="value-pill">{v}</div>
          ))}
        </div>
      </section>

    </div>
  )
}
