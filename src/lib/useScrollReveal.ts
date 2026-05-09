import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealOptions {
  selector: string
  triggerSelector: string
  duration?: number
  stagger?: number
  delay?: number
  fromX?: number
  fromY?: number
  ease?: string
}

export function useScrollReveal(options: ScrollRevealOptions) {
  const {
    selector,
    triggerSelector,
    duration = 0.35,
    stagger = 0.05,
    delay = 0,
    fromX = 0,
    fromY = 50,
    ease = 'power3.out',
  } = options

  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    if (!elements || elements.length === 0) return

    gsap.set(elements, {
      opacity: 0,
      x: fromX,
      y: fromY,
    })

    const timer = setTimeout(() => {
      gsap.to(elements, {
        scrollTrigger: {
          trigger: triggerSelector,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        duration,
        opacity: 1,
        x: 0,
        y: 0,
        stagger,
        ease,
        delay,
      })
    }, 150)

    return () => clearTimeout(timer)
  }, [selector, triggerSelector, duration, stagger, delay, fromX, fromY, ease])
}

export function useCardHoverEffects(selector: string) {
  useEffect(() => {
    const cards = document.querySelectorAll(selector)
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.03,
          boxShadow: '0 0 30px rgba(124,137,248,0.15)',
          duration: 0.2,
        })
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: '0 0 0px rgba(124,137,248,0)',
          duration: 0.2,
        })
      })
    })
  }, [selector])
}
