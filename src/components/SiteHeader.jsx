import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { nav } from '../content/site'
import { SectionLink } from './ui'

/**
 * Header with a desktop nav and a mobile menu.
 *
 * The mobile menu is a native <details>/<summary> disclosure, so it opens and
 * closes even before (or without) JavaScript, e.g. in an installed PWA that is
 * still loading or holding an older cached page. React layers on the extras:
 * closing after a link tap, on an outside tap, and on Escape.
 */
export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)
  const summaryRef = useRef(null)
  const close = () => setOpen(false)

  // Close on every navigation, including a repeat tap on the current section link.
  useEffect(() => setOpen(false), [location.pathname, location.hash, location.key])

  // While open: close on an outside tap/click or on Escape.
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e) => {
      if (!menuRef.current?.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        summaryRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const links = nav.map((item) => (
    <li key={item.hash}>
      <SectionLink hash={item.hash} className="ga-nav-link" onClick={close}>
        {item.label}
      </SectionLink>
    </li>
  ))

  return (
    <header className="ga-header">
      <div className="ga-container ga-header-inner">
        <Link to="/" className="ga-logo" onClick={close}>
          <span className="ga-logo-mark" aria-hidden="true">
            GA
          </span>
          <span className="ga-logo-text">
            George Akai <span>Tech Consulting</span>
          </span>
        </Link>

        <nav className="ga-nav" aria-label="Main">
          <ul>{links}</ul>
        </nav>

        <div className="ga-header-cta">
          <SectionLink hash="contact" className="ga-btn ga-btn-primary ga-btn-nav" onClick={close}>
            <span className="ga-cta-long">Book a free consult</span>
            <span className="ga-cta-short">Free consult</span>
          </SectionLink>

          <details ref={menuRef} className="ga-menu" open={open} onToggle={(e) => setOpen(e.currentTarget.open)}>
            <summary ref={summaryRef} className="ga-menu-btn" aria-label="Menu">
              <Menu size={22} aria-hidden="true" className="ga-menu-icon-open" />
              <X size={22} aria-hidden="true" className="ga-menu-icon-close" />
            </summary>
            <nav className="ga-menu-panel" aria-label="Main">
              <ul>{links}</ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
