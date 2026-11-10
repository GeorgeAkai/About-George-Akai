import { useEffect } from 'react'

/**
 * Subtle fade/slide-up for `.ga-reveal` elements as they enter the viewport.
 * Content is fully visible in the server-rendered HTML; motion is only switched on
 * after hydration, never for elements already on screen, and never when the user
 * prefers reduced motion.
 */
export function useSectionReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const vh = window.innerHeight
    const targets = [...document.querySelectorAll('.ga-reveal')].filter(
      (el) => el.getBoundingClientRect().top > vh,
    )
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach((el) => {
      el.classList.add('is-pending')
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
      targets.forEach((el) => el.classList.remove('is-pending', 'is-visible'))
    }
  }, [])
}
