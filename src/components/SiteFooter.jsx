import { Link } from 'react-router-dom'
import { business } from '../content/site'
import { LinkedInIcon, SectionLink } from './ui'

export default function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="ga-footer">
      <div className="ga-container ga-footer-inner">
        <p>
          © {year} {business.name} · {business.entity} · {business.region}
        </p>
        <nav aria-label="Footer">
          <ul>
            <li>
              <SectionLink hash="services">Services</SectionLink>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
            <li>
              <a href={business.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon size={16} /> LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
