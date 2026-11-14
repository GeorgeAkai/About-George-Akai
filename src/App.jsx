import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import Home from './pages/Home'
import About from './pages/About'
import Hobbies from './pages/Hobbies'
import ContactPage from './pages/ContactPage'
import { Privacy, Terms } from './pages/Legal'
import { useSEO } from './hooks/useSEO'

/** Older pages keep their original look inside the legacy shell. */
function Legacy({ children }) {
  return <div className="app-shell legacy-shell">{children}</div>
}

/** Scroll to #hash targets (smooth via CSS), or to the top on page changes. */
function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, key])

  return null
}

export function AppRoutes() {
  useSEO()

  return (
    <>
      <a className="ga-skip" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route
            path="/about"
            element={
              <Legacy>
                <About />
              </Legacy>
            }
          />
          <Route
            path="/beyond"
            element={
              <Legacy>
                <Hobbies />
              </Legacy>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
