import { useEffect, useRef, useState } from 'react'

interface ProblemSectionProps {
  onLearnMore?: () => void
}

export function ProblemSection({}: ProblemSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [cardsVisible, setCardsVisible] = useState([false, false, false])
  const painPoints = [
    {
      id: 'cuda-mismatch',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
          <path 
            d="M14 16h12M14 20h12M14 24h12M10 15v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-10" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      ),
      title: 'CUDA Mismatch',
      problem: 'Torch 2.3 requires CUDA 12.1 but you have 11.8',
      result: 'Segfault. @2AM in prod'
    },
    {
      id: 'missing-deps',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
          <path 
            d="M12 20h16M20 12v16M28 20a8 8 0 1 1-16 0 8 8 0 0 1 16 0M20 15v10" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      ),
      title: 'Missing Dependencies',
      problem: 'Missing transitive deps in prod but not dev',
      result: 'ImportError. @deploy time'
    },
    {
      id: 'model-download',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
          <path 
            d="M12 18v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4M20 22v-8M16 18l4 4 4-4" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      ),
      title: 'Model Downloads',
      problem: '15GB models take 15+ min to download blocking deployment',
      result: 'Timeout. @first ship'
    }
  ]

  // Scroll animation for cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger card animations
          painPoints.forEach((_, idx) => {
            setTimeout(() => {
              setCardsVisible(prev => {
                const newState = [...prev]
                newState[idx] = true
                return newState
              })
            }, idx * 100)
          })
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-screen bg-canvas py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - EXACT from spec */}
        <div className="text-center mb-16">
          <h2 className="display-lg mb-4 leading-tight">
            Environment Drift
          </h2>
          
          <p className="body-lg text-ink-muted max-w-3xl mx-auto leading-relaxed mb-8">
            Your code works. Your cloud doesn't.
          </p>
        </div>

        {/* Pain Points - 3 cards showing exact problem/result from spec */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, idx) => (
            <div 
              key={point.id}
              className={`bg-surface-1 border border-hairline rounded-2xl p-10 group transform ${
                cardsVisible[idx] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } transition-all duration-[800ms] ease-[var(--ease-out-expo)]`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-8 w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-500">
                {point.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-ink mb-4 group-hover:text-primary transition-colors">
                {point.title}
              </h3>

              {/* Problem */}
              <p className="body-copy text-ink-muted leading-relaxed mb-6 italic">
                "{point.problem}"
              </p>

              {/* Result */}
              <div className="pt-6 border-t border-hairline">
                <p className="caption text-primary tracking-wider uppercase">
                  Result
                </p>
                <p className="text-sm font-bold text-ink mt-1">
                  {point.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement - EXACT from spec */}
        <div className="bg-gradient-to-r from-primary/10 via-transparent to-primary/10 border border-primary/30 rounded-2xl p-12 text-center mb-12">
          <p className="display-md text-white mb-4">
            This costs <span className="text-primary">3 weeks</span> per deployment cycle
          </p>
          <p className="body-lg text-ink-muted">
            Or you skip it and deploy broken code, debugging in production at 2AM.
          </p>
        </div>
      </div>
    </section>
  )
}
