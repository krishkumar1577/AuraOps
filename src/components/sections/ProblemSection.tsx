import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useCardHover } from '../../lib/useCardHover'
import Badge from '../ui/Badge'

gsap.registerPlugin(ScrollTrigger)

export function ProblemSection() {
  useCardHover('.problem-card')

  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const cards = document.querySelectorAll('.problem-card');
    if (cards && cards.length > 0) {
      gsap.set(cards, {
        opacity: 0,
        x: -100,
        rotation: -2,
      });
    }

    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('.problem-card');
      if (cards && cards.length > 0) {
        try {
          gsap.to(cards, {
            scrollTrigger: {
              trigger: '#problems',
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
            duration: 0.35,
            opacity: 1,
            x: 0,
            rotation: 0,
            stagger: 0.05,
            ease: 'power3.out',
          });
          console.log('Problem cards animation started');
        } catch (e) {
          console.warn('Problem cards animation error:', e);
        }
      }
    }, 150);
    
    return () => clearTimeout(timer);
  }, []);

  const painPoints = [
    {
      id: 'cuda-mismatch',
      code: 'ERR_CUDA_VERSION_MISMATCH',
      title: 'CUDA Environment Drift',
      description: 'Your local is CUDA 12.1. Production is 11.8. Torch fails silently at runtime.',
      impact: 'Segfault @ 2AM'
    },
    {
      id: 'missing-deps',
      code: 'ERR_MODULE_NOT_FOUND',
      title: 'Hidden Dependencies',
      description: 'That "one quick pip install" you did locally? It’s missing from your production Dockerfile.',
      impact: 'Dead on Arrival'
    },
    {
      id: 'weight-latency',
      code: 'ERR_WEIGHT_TRANSFER_TIMEOUT',
      title: 'The 15GB Tax',
      description: 'Downloading model weights from scratch on every deploy. Minutes of downtime.',
      impact: 'Infrastructure Tax'
    }
  ]

  return (
    <section ref={containerRef} id="problems" className="relative w-screen bg-canvas pb-16 pt-8 px-8 overflow-hidden" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255, 159, 252, 0.05), rgba(82, 39, 255, 0.05))' }}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 reveal">
          <div className="mb-8">
            <Badge label="The Infrastructure Tax" variant="muted" />
          </div>
          <h2 className="text-[40px] md:text-[56px] font-display font-bold text-ink mb-6 leading-[1.1] tracking-tightest">
            Why AI Agents <span className="text-primary italic">Break</span> in Production.
          </h2>
          <p className="text-xl text-ink-subtle max-w-2xl leading-relaxed">
            Infrastructure drift is the silent killer of AI velocity. AuraOps eliminates the "works on my machine" syndrome forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, idx) => (
            <div 
              key={point.id}
              className={`problem-card group relative bg-surface-1 border border-hairline rounded-xl p-8 transition-all duration-700 hover:border-primary/40 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="mb-6 flex justify-between items-center">
                <span className="font-mono text-[10px] text-primary/60 uppercase tracking-widest">{point.code}</span>
                <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-ink mb-4">{point.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed mb-8 h-12">
                {point.description}
              </p>

              <div className="pt-6 border-t border-hairline flex flex-col gap-1">
                <span className="text-[10px] font-mono text-ink-tertiary uppercase tracking-tighter">Resulting in</span>
                <span className="text-sm font-bold text-primary italic">{point.impact}</span>
              </div>

              <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-br from-transparent to-primary/5 rounded-br-xl pointer-events-none" />
            </div>
          ))}
        </div>
        
        <div className="mt-20 py-8 border-t border-hairline flex flex-col md:flex-row justify-between items-center gap-8 reveal" style={{ animationDelay: '800ms' }}>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-ink-tertiary uppercase tracking-widest">Average developer waste:</span>
            <span className="text-2xl font-bold text-ink tracking-tight">12+ Hours / Week</span>
          </div>
          <div className="h-px flex-1 bg-hairline hidden md:block" />
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-ink-tertiary uppercase tracking-widest">Environment Parity:</span>
            <span className="text-2xl font-bold text-primary tracking-tight">0% Drift</span>
          </div>
        </div>
      </div>
    </section>
  )
}
