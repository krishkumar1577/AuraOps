import { useEffect } from 'react'
import gsap from 'gsap'

/**
 * Universal card hover effect hook
 * Applies scale + glow animation on hover
 */
export function useCardHover(selector: string) {
  useEffect(() => {
    const hoverHandlers = new WeakMap<Element, {
      handleMouseEnter: () => void
      handleMouseLeave: () => void
    }>()

    const timer = setTimeout(() => {
      const cards = document.querySelectorAll(selector)
      
      if (!cards || cards.length === 0) {
        console.warn(`[useCardHover] No elements found for selector: ${selector}`)
        return
      }

      console.log(`[useCardHover] Attached to ${cards.length} card(s) with selector: ${selector}`)

      cards.forEach((card, idx) => {
        const handleMouseEnter = () => {
          console.log(`[useCardHover] Hover on card ${idx}`)
          gsap.to(card, {
            scale: 1.03,
            boxShadow: '0 0 30px rgba(124,137,248,0.2), 0 0 60px rgba(124,137,248,0.1)',
            duration: 0.2,
            overwrite: 'auto',
          })
        }

        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: '0 0 0px rgba(124,137,248,0)',
            duration: 0.2,
            overwrite: 'auto',
          })
        }

        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)

        hoverHandlers.set(card, { handleMouseEnter, handleMouseLeave })
      })
    }, 100) // Wait for DOM to settle

    return () => {
      clearTimeout(timer)
      const cards = document.querySelectorAll(selector)
      cards.forEach((card) => {
        const handlers = hoverHandlers.get(card)
        if (handlers) {
          card.removeEventListener('mouseenter', handlers.handleMouseEnter)
          card.removeEventListener('mouseleave', handlers.handleMouseLeave)
        }
      })
    }
  }, [selector])
}
