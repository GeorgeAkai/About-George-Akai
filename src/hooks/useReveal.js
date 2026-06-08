import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const targets = document.querySelectorAll('.reveal:not(.visible)')
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])
}
