import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { nav } from '../content/site'
import { SectionLink } from './ui'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const toggleRef = useRef(null)

  useEffect(() => setOpen(false), [location.pathname, location.hash])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`ga-header${open ? ' is-open' : ''}`}>
      <div className="ga-container ga-header-inner">
        <Link to="/" className="ga-logo">
          <span className="ga-logo-mark" aria-hidden="true">
            GA
          </span>
          <span className="ga-logo-text">
            George Akai <span>Tech Consulting</span>
          </span>
        </Link>

        <nav id="primary-nav" className="ga-nav" aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.hash}>
                <SectionLink hash={item.hash} className="ga-nav-link">
                  {item.label}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ga-header-cta">
          <SectionLink hash="contact" className="ga-btn ga-btn-primary ga-btn-nav">
            <span className="ga-cta-long">Book a free consult</span>
            <span className="ga-cta-short">Free consult</span>
          </SectionLink>
          <button
            ref={toggleRef}
            type="button"
            className="ga-menu-btn"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
