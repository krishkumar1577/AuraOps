import { useEffect, useState } from 'react'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
}

interface SocialProofSectionProps {
  onCtaClick?: () => void
}

export function SocialProofSection({}: SocialProofSectionProps) {
  const [statsVisible, setStatsVisible] = useState(false)

  // EXACT testimonials from spec
  const testimonials: Testimonial[] = [
    {
      id: 'priya',
      name: 'Priya',
      role: 'Founder',
      company: 'AIStartup Labs',
      quote: 'Saved us 3 weeks of debugging. Deployed our first agent in 2 hours.'
    },
    {
      id: 'marcus',
      name: 'Marcus',
      role: 'ML Engineer',
      company: 'TechCorp',
      quote: 'Works out of the box. No CUDA conflicts. Best deployment experience I\'ve had.'
    },
    {
      id: 'sam',
      name: 'Sam',
      role: 'Founder',
      company: 'Agent.ai',
      quote: 'Our team ships 10x faster now. No more DevOps bottleneck.'
    },
  ]

  // Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const statsElement = document.getElementById('social-proof-stats')
    if (statsElement) {
      observer.observe(statsElement)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-screen bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - EXACT from spec */}
        <div className="text-center mb-16">
          <h2 className="display-lg mb-4">
            Who's Using AuraOps
          </h2>
          
          <p className="body-lg text-ink-muted max-w-2xl mx-auto">
            Founders are already shipping with AuraOps
          </p>
        </div>

        {/* Metrics - 3 cards with count-up animation - EXACT from spec */}
        <div 
          id="social-proof-stats"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <MetricCard 
            number={16} 
            label="Founders"
            visible={statsVisible}
            delay={0}
          />
          <MetricCard 
            number={47} 
            label="Agents Deployed"
            visible={statsVisible}
            delay={0.15}
          />
          <MetricCard 
            number={2} 
            label="Paying Customers"
            visible={statsVisible}
            delay={0.3}
          />
        </div>

        {/* Testimonial Cards - EXACT from spec */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div 
              key={testimonial.id}
              className="bg-surface-1 border border-hairline rounded-2xl p-8 group reveal"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Quote Mark Indicator */}
              <div className="text-primary/30 text-4xl mb-4 leading-none group-hover:text-primary transition-all duration-500">
                "
              </div>

              {/* Quote */}
              <p className="text-sm font-medium text-ink mb-8 leading-relaxed italic">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="border-t border-hairline mb-6 group-hover:border-primary/20 transition-colors duration-500" />

              {/* Author - EXACT: Name, Role @ Company */}
              <div>
                <div className="text-[13px] font-bold text-ink transition-colors duration-300">{testimonial.name}</div>
                <div className="text-[11px] uppercase tracking-wider text-ink-tertiary mt-1">{testimonial.role} @ {testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface MetricCardProps {
  number: number
  label: string
  visible: boolean
  delay: number
}

function MetricCard({ number, label, visible, delay }: MetricCardProps) {
  const [displayNumber, setDisplayNumber] = useState(0)

  useEffect(() => {
    if (!visible) return

    const startTime = Date.now()
    const duration = 2000
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
      }, 16)

      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(timer)
  }, [visible, number, delay])

  return (
    <div className="bg-surface-1 border border-hairline rounded-2xl p-8 text-center group reveal" style={{ animationDelay: `${delay}s` }}>
      <div className="text-4xl font-bold text-primary mb-2 font-mono tracking-tighter group-hover:scale-105 transition-transform duration-500">
        {displayNumber}+
      </div>
      <p className="caption text-ink-tertiary uppercase tracking-widest font-bold group-hover:text-ink-muted transition-colors duration-500">{label}</p>
    </div>
  )
}
