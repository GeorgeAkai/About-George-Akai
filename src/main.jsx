import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/inter/latin-700.css' // legacy pages
import '@fontsource/inter/latin-800.css' // legacy pages
import '@fontsource/space-grotesk/latin-600.css'
import '@fontsource/space-grotesk/latin-700.css'
import App from './App'
import './index.css'
import './styles/ga.css'

const root = document.getElementById('root')
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Pages are prerendered at build time; hydrate when markup is present.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
