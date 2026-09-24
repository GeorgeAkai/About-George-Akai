import { useState } from 'react'
import { Link2, Globe, Mail, ArrowUpRight, Send } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const BUSINESS_EMAIL = 'info@georgeakaitechconsulting.com'

const serviceOptions = [
  'Software & Web Development',
  'AI Chatbot Integration',
  'Cybersecurity Consulting',
  'Something else / not sure yet',
]

const links = [
  {
    icon: <Mail size={22} />,
    title: 'Email',
    handle: BUSINESS_EMAIL,
    description: 'Best for project inquiries and quotes. I read and respond to every message.',
    href: `mailto:${BUSINESS_EMAIL}`,
  },
  {
    icon: <Link2 size={22} />,
    title: 'LinkedIn',
    handle: 'linkedin.com/in/georgeakai',
    description: 'I post regularly about cybersecurity, AI projects, and what I am working on.',
    href: 'https://www.linkedin.com/in/georgeakai/',
  },
  {
    icon: <Globe size={22} />,
    title: 'Portfolio',
    handle: 'georgeakai.github.io/my-portfolio',
    description: 'Projects, certifications, and academic work. The full breakdown of what I have built and studied.',
    href: 'https://georgeakai.github.io/my-portfolio/about.html',
  },
]

export default function Contact() {
  useReveal()

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: serviceOptions[0],
    message: '',
  })

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = `New inquiry: ${form.service} - ${form.name}`
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      `Service: ${form.service}`,
      '',
      'Message:',
      form.message,
    ].filter(Boolean)

    const mailtoUrl = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
    window.location.href = mailtoUrl
  }

  return (
    <div className="page-content">
      <section className="contact-hero glass-panel reveal">
        <div className="section-label">Let's Talk About Your Project</div>
        <h1>
          Whether you need a website built, an AI chatbot integrated, or a security review, I'm easy to reach.
        </h1>
        <p>
          Fill out the form below or reach out directly. I'll get back to you with next steps, usually within a
          couple of business days.
        </p>
      </section>

      <section className="contact-form-section glass-panel reveal">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" required value={form.name} onChange={handleChange('name')} placeholder="Jane Smith" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" required value={form.email} onChange={handleChange('email')} placeholder="jane@company.com" />
            </div>
            <div className="form-field">
              <label htmlFor="company">Company (optional)</label>
              <input id="company" type="text" value={form.company} onChange={handleChange('company')} placeholder="Company name" />
            </div>
            <div className="form-field">
              <label htmlFor="service">Service you're interested in</label>
              <select id="service" value={form.service} onChange={handleChange('service')}>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Tell me about your project</label>
            <textarea
              id="message"
              required
              rows={6}
              value={form.message}
              onChange={handleChange('message')}
              placeholder="What are you looking to build, integrate, or secure?"
            />
          </div>

          <div className="form-submit-row">
            <button type="submit" className="button button-primary">
              <Send size={16} />
              Send Inquiry
            </button>
            <p className="form-note">
              This opens your email app with your message pre-filled, addressed to {BUSINESS_EMAIL}.
            </p>
          </div>
        </form>
      </section>

      <div className="contact-grid">
        {links.map((link, i) => (
          <a
            key={link.title}
            className={`contact-card glass-panel reveal reveal-delay-${i + 1}`}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
          >
            <div className="contact-icon">{link.icon}</div>
            <div>
              <h3>
                {link.title}{' '}
                <ArrowUpRight size={14} style={{ opacity: 0.5, verticalAlign: 'middle' }} />
              </h3>
              <p className="contact-handle">{link.handle}</p>
            </div>
            <p>{link.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
