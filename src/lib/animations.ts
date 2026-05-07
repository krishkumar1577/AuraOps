/**
 * Reusable animation utilities for scroll-triggered animations
 */

/**
 * Hook for scroll-into-view animation triggers
 */
export function useScrollAnimation(callback: () => void) {
  const observerRef = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        callback()
        observerRef.unobserve(entry.target)
      }
    },
    { threshold: 0.3 }
  )

  return observerRef
}

/**
 * CSS class for fade-in on scroll
 */
export const fadeInOnScroll = `
  opacity-0 transition-opacity duration-1000 ease-out
  [&.visible]:opacity-100
`

/**
 * CSS class for slide-up on scroll
 */
export const slideUpOnScroll = `
  translate-y-8 opacity-0 transition-all duration-700 ease-out
  [&.visible]:translate-y-0 [&.visible]:opacity-100
`

/**
 * CSS class for card hover lift effect
 */
export const cardHoverLift = `
  transition-transform duration-300 ease-out
  hover:scale-105 hover:-translate-y-2
`

/**
 * CSS for staggered child animations
 */
export const staggerContainer = `
  [&>*]:opacity-0 [&>*]:transition-opacity [&>*]:duration-700 [&>*]:ease-out
`

/**
 * Generate staggered animation delays
 */
export function getStaggerDelay(index: number, baseDelay: number = 100): number {
  return index * baseDelay
}
