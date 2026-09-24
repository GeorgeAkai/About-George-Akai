import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Landing from './pages/Landing'
import About from './pages/About'
import Hobbies from './pages/Hobbies'
import Contact from './pages/Contact'
import { useTheme } from './hooks/useTheme'
import { useSEO } from './hooks/useSEO'

function AppInner() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  useSEO()

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
            <p className="brand-name">George Akai Tech Consulting</p>
            <span>Software · AI · Cybersecurity</span>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="nav-toggle" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className={`site-nav${menuOpen ? ' open' : ''}`}>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/about">
            About
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/contact">
            Contact
          </NavLink>
          <NavLink className="nav-button" to="/contact">
            Get a Quote
          </NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/beyond" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p className="footer-copy">
          George Akai Tech Consulting
          <br />
          <a href="mailto:info@georgeakaitechconsulting.com">info@georgeakaitechconsulting.com</a>
        </p>
        <div className="footer-links">
          <NavLink to="/beyond">Beyond the Work</NavLink>
          <a href="https://www.linkedin.com/in/georgeakai/" target="_blank" rel="noreferrer">LinkedIn</a>
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
