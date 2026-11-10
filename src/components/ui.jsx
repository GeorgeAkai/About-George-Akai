import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, CalendarDays } from 'lucide-react'
import ContactForm from './ContactForm'
import { business, contact, isPlaceholder } from '../content/site'

/** Link to a section of the home page that works from any route. */
export function SectionLink({ hash, state, children, ...rest }) {
  return (
    <Link to={{ pathname: '/', hash: `#${hash}` }} state={state} {...rest}>
      {children}
    </Link>
  )
}

/** LinkedIn mark (Lucide no longer ships brand icons). */
export function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

/** Dashed box shown until a real image is configured. */
export function ImageSlot({ label, className = '' }) {
  return (
    <div className={`ga-slot ${className}`} role="img" aria-label={`${label} (placeholder)`}>
      <span>{label}</span>
    </div>
  )
}

/** Contact section, shared by the home page (#contact) and /contact. */
export function ContactSection({ headingLevel = 2 }) {
  const Heading = `h${headingLevel}`
  const hasPhone = !isPlaceholder(business.phone)
  const hasCalendar = !isPlaceholder(business.calendarUrl)

  return (
    <section id="contact" className="ga-section ga-dark" aria-labelledby="contact-title">
      <div className="ga-container ga-contact">
        <div className="ga-contact-copy">
          <p className="ga-eyebrow">{contact.eyebrow}</p>
          <Heading id="contact-title" className="ga-h2">
            {contact.title}
          </Heading>
          <p className="ga-lead">{contact.subtitle}</p>

          <ul className="ga-contact-list">
            <li>
              <Mail size={20} aria-hidden="true" />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
            <li>
              <Phone size={20} aria-hidden="true" />
              {hasPhone ? <a href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}>{business.phone}</a> : business.phone}
            </li>
            <li>
              <MapPin size={20} aria-hidden="true" />
              {business.region} · Serving clients remotely
            </li>
          </ul>

          {hasCalendar ? (
            <a className="ga-btn ga-btn-secondary-dark" href={business.calendarUrl} target="_blank" rel="noreferrer">
              <CalendarDays size={18} aria-hidden="true" /> Prefer to pick a time? Open my calendar
            </a>
          ) : (
            <p className="ga-btn ga-btn-secondary-dark ga-btn-pending">
              <CalendarDays size={18} aria-hidden="true" /> Prefer to pick a time? Open my calendar{' '}
              <span className="ga-ph">{business.calendarUrl}</span>
            </p>
          )}
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
