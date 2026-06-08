import { Link2, GitBranch, Globe, Mail, ArrowUpRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const links = [
  {
    icon: <Link2 size={22} />,
    title: 'LinkedIn',
    handle: 'linkedin.com/in/georgeakai',
    description:
      'I post regularly about cybersecurity, AI projects, and what I am working on. Good place to see what I am thinking about and reach out directly.',
    href: 'https://www.linkedin.com/in/georgeakai/',
  },
  {
    icon: <GitBranch size={22} />,
    title: 'GitHub',
    handle: 'github.com/georgeakai',
    description:
      'Automation scripts, AI experiments, and security tooling. Code that shows how I actually work.',
    href: 'https://github.com/georgeakai',
  },
  {
    icon: <Globe size={22} />,
    title: 'Portfolio',
    handle: 'georgeakai.github.io/my-portfolio',
    description:
      'Projects, certifications, and academic work. The full breakdown of what I have built and studied.',
    href: 'https://georgeakai.github.io/my-portfolio/about.html',
  },
  {
    icon: <Mail size={22} />,
    title: 'Email',
    handle: 'georgeakaing@gmail.com',
    description:
      'Best for longer conversations about opportunities, collaboration, or mentorship. I read every message.',
    href: 'mailto:georgeakaing@gmail.com',
  },
]

export default function Contact() {
  useReveal()

  return (
    <div className="page-content">
      <section className="contact-hero glass-panel reveal">
        <div className="section-label">Let's Connect</div>
        <h2>
          Whether you are looking to collaborate, talk about an opportunity, or just connect with someone who takes security and software seriously, I am easy to reach.
        </h2>
        <p>
          I am open to conversations about cybersecurity, software engineering, AI, and the overlap between all three.
          Drop me a message and I will get back to you.
        </p>
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
