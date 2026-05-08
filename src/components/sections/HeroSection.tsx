import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RollingButton from '../ui/RollingButton'
import LightPillar from '../visuals/LightPillar'
import Badge from '../ui/Badge'
import BottomMarqueeNotch from '../layout/BottomMarqueeNotch'
import type { LogoItem } from '../layout/BottomMarqueeNotch'
import AuraOpsLogoSvg from '../../assets/auraops_true_vector.svg'

gsap.registerPlugin(ScrollTrigger)

// Logo Icons
const AuraOpsLogoIcon = () => (
  <img src={AuraOpsLogoSvg} alt="AuraOps" className="w-6 h-6" style={{ filter: 'brightness(0) invert(1)' }} />
)

const VercelIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M13 4L24 21H2Z" fill="white" />
  </svg>
)

const LinearIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <circle cx="13" cy="13" r="9.5" stroke="white" strokeWidth="1.4" />
    <path d="M6 20L20 6M6 13l7-7M13 20l7-7" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
)

const FramerIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M7 4h12l-6 9h6L7 23v-9h6L7 4z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
  </svg>
)

const NotionIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <rect x="4" y="3" width="18" height="20" rx="2.5" stroke="white" strokeWidth="1.4" />
    <path d="M8 9h10M8 13h8M8 17h5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
)

// Logo Data
const logos: LogoItem[] = [
  { name: "AuraOps", italic: true, icon: <AuraOpsLogoIcon /> },
  { name: "Vercel", italic: false, icon: <VercelIcon /> },
  { name: "Linear", italic: false, icon: <LinearIcon /> },
  { name: "Framer", italic: false, icon: <FramerIcon /> },
  { name: "Notion", italic: false, icon: <NotionIcon /> },
]

interface HeroSectionProps {
  onVideoClick?: () => void
  onTryClick?: () => void
}

export function HeroSection({ onVideoClick, onTryClick }: HeroSectionProps) {
  const [visibleWords, setVisibleWords] = useState<number[]>([])
  const [statsVisible, setStatsVisible] = useState(false)

  // GSAP: Staggered headline animation - Animate IN from hidden state
  useEffect(() => {
    // Set initial state
    const titleSpans = document.querySelectorAll('.hero-title-word');
    if (titleSpans && titleSpans.length > 0) {
      gsap.set(titleSpans, {
        opacity: 0,
        yPercent: 120,
      });
    }

    const timer = setTimeout(() => {
      const titleSpans = document.querySelectorAll('.hero-title-word');
      console.log('Hero animation check:', titleSpans.length, 'elements found');
      if (titleSpans && titleSpans.length > 0) {
        try {
          gsap.to(titleSpans, {
            duration: 0.35,
            opacity: 1,
            yPercent: 0,
            stagger: 0.05,
            ease: 'power3.out',
            delay: 0.05,
          });
          console.log('Hero title animation started');
        } catch (e) {
          console.warn('Hero title animation error:', e);
        }
      }
    }, 30);

    return () => clearTimeout(timer);
  }, []);

  // GSAP: Background parallax effect
  useEffect(() => {
    const timer = setTimeout(() => {
      const heroBg = document.querySelector('.hero-light-pillar');
      if (heroBg) {
        try {
          gsap.to(heroBg, {
            yPercent: -10,
            ease: 'sine.inOut',
            scrollTrigger: {
              trigger: '#home',
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
              markers: false,
            },
          });
        } catch (e) {
          console.warn('Hero parallax animation error:', e);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Staggered headline animation (fallback state)
  useEffect(() => {
    const words = ['Your AI Agent Works Locally.', 'Breaks in Production.', 'Not Anymore.']
    words.forEach((_, index) => {
      setTimeout(() => {
        setVisibleWords(prev => [...prev, index])
      }, index * 150)
    })
  }, [])

  // Stats count-up animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    const statsElement = document.getElementById('hero-stats')
    if (statsElement) {
      observer.observe(statsElement)
    }

    return () => observer.disconnect()
  }, [])

  const headlineWords = ['Your AI Agent Works Locally.', 'Breaks in Production.', 'Not Anymore.']

  return (
    <section id="home" className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center bg-black px-8">
      <div className="absolute inset-0 hero-light-pillar">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1.5}
          rotationSpeed={0.4}
          glowAmount={0.002}
          pillarWidth={8.3}
          pillarHeight={0.3}
          noiseIntensity={0.2}
          pillarRotation={55}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-7xl mx-auto text-center">

        {/* Eyebrow - Refined Detail */}
        <div className="mb-8 reveal">
          <Badge label="AI Deployment Infrastructure" variant="default" />
        </div>

        {/* Main Headline - Orchestrated Staggered Reveal */}
        <h1 className="hero-title text-[48px] md:text-[64px] mb-8 max-w-4xl font-bold leading-[1.1] font-display tracking-tightest">
          {headlineWords.map((word, idx) => (
            <div
              key={idx}
              className={`hero-title-word transition-all duration-1000 ease-[var(--ease-out-expo)] ${visibleWords.includes(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {idx === 2 ? (
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-secondary to-white bg-[length:200%_auto] animate-shimmer">
                  {word}
                </span>
              ) : (
                word
              )}
            </div>
          ))}
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-ink-muted max-w-2xl mb-10 leading-relaxed reveal" style={{ animationDelay: '1.2s' }}>
          Deploy from laptop to live GPU in 30 seconds. Same code. Same behavior everywhere.
          <br />
          No CUDA conflicts. No environment drift. No surprises.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center reveal" style={{ animationDelay: '1.4s' }}>
          <RollingButton
            label="See It Live (2 min video)"
            variant="primary"
            onClick={onVideoClick}
          />
          <RollingButton
            label="Try Free"
            variant="ghost"
            onClick={onTryClick}
          />
        </div>

        {/* Social Proof Stats */}
        <div
          id="hero-stats"
          className="flex flex-col sm:flex-row gap-6 justify-center text-center"
        >
          <StatCard
            number={16}
            label="Founders using"
            visible={statsVisible}
            delay={0}
          />
          <div className="w-px h-8 bg-white/10 hidden sm:block" />
          <StatCard
            number={47}
            label="Agents deployed"
            visible={statsVisible}
            delay={0.2}
          />
          <div className="w-px h-8 bg-white/10 hidden sm:block" />
          <StatCard
            number={2}
            label="Paying customers"
            visible={statsVisible}
            delay={0.4}
          />
        </div>
      </div>

      {/* Bottom Marquee - Logo showcase */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <BottomMarqueeNotch logos={logos} speed={26} maxWidth={800} />
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-ink-muted"
        >
          <path
            d="M12 5v14M19 12l-7 7-7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}

interface StatCardProps {
  number: number
  label: string
  visible: boolean
  delay: number
}

function StatCard({ number, label, visible, delay }: StatCardProps) {
  const [displayNumber, setDisplayNumber] = useState(0)

  useEffect(() => {
    if (!visible) return

    const startTime = Date.now()
    const duration = 2000 // 2 seconds
    const startDelay = delay * 1000

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime - startDelay
        const progress = Math.min(elapsed / duration, 1)
        setDisplayNumber(Math.floor(number * progress))

        if (progress >= 1) {
          clearInterval(interval)
          setDisplayNumber(number)
        }
      }, 16) // ~60fps

      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(timer)
  }, [visible, number, delay])

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold text-primary mb-1 font-mono">
        {displayNumber}
      </div>
      <div className="caption text-ink-muted">{label}</div>
    </div>
  )
}
