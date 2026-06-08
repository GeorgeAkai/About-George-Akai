import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Home from './pages/Home'
import Hobbies from './pages/Hobbies'
import Contact from './pages/Contact'

function AppInner() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="app-shell">
      <header className={`site-header${menuOpen ? ' nav-open' : ''}`}>
        <div className="brand-row">
          <div className="brand-mark">GA</div>
          <div className="brand-copy">
            <p className="brand-name">George Akai</p>
            <span>Cybersecurity · Software · AI</span>
          </div>
        </div>

        <button className="nav-toggle" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`site-nav${menuOpen ? ' open' : ''}`}>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/beyond">
            Beyond Technology
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/contact">
            Connect
          </NavLink>
          <a className="nav-button" href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beyond" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p className="footer-copy">
          George Akai
        </p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/georgeakai/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/georgeakai" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://georgeakai.github.io/my-portfolio/about.html" target="_blank" rel="noreferrer">Portfolio</a>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  )
}
