interface BenefitCardProps {
  feature: string
  before: string
  after: string
  metric: string
  icon: React.ReactNode
}

export function BenefitsBeforeAfterCards() {
  const benefits: BenefitCardProps[] = [
    {
      feature: '11 Second Deploy',
      before: '30 minutes (Docker, CUDA, models, debugging)',
      after: '11 seconds ($ auraops deploy)',
      metric: '163x faster',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
          <path 
            d="M12 20h16M20 12v16M28 16l-4 4-4-4" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      )
    },
    {
      feature: 'No Environment Drift',
      before: 'Works locally, breaks in production',
      after: 'Same code = same behavior everywhere',
      metric: '100% reproducible',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
          <path 
            d="M20 12v16M12 20h16M14 14l12 12M26 14l-12 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      )
    },
    {
      feature: 'Global Model Caching',
      before: 'Download 15GB models every deployment',
      after: 'Download once, reuse everywhere',
      metric: '15GB → <1s',
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
      )
    },
    {
      feature: 'Works With Your Stack',
      before: 'Reconfigure everything for production',
      after: 'CrewAI/LangChain code works as-is',
      metric: 'Zero changes needed',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
          <rect x="10" y="12" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path 
            d="M14 18h12M14 22h12M14 26h8" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
          />
        </svg>
      )
    },
    {
      feature: 'Deploy Anywhere',
      before: 'Locked into one GPU provider',
      after: 'Lambda Labs, AWS, Vast.ai (same command)',
      metric: 'Provider agnostic',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
          <path 
            d="M16 14h8v12h-8zM18 18h4M18 22h4M12 16v10M28 16v10" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      )
    },
    {
      feature: 'Deterministic Everything',
      before: '"Works for me" ≠ works for everyone',
      after: 'SHA256 hash = byte-identical builds',
      metric: 'Perfect reproducibility',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
          <circle cx="20" cy="20" r="4" fill="currentColor" />
          <path 
            d="M20 8a12 12 0 0 1 0 24M20 12a8 8 0 0 1 0 16" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
          />
        </svg>
      )
    }
  ]

  return (
    <section className="w-screen bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-lg mb-6 leading-tight">
            What Changes
          </h2>
          
          <p className="body-lg text-ink-muted max-w-2xl mx-auto">
            From pain to productivity, in concrete terms
          </p>
        </div>

        {/* Benefits Grid - 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <BeforeAfterCard key={idx} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BeforeAfterCard({ feature, before, after, metric, icon }: BenefitCardProps) {
  return (
    <div className="bg-surface-1 border border-hairline rounded-2xl group transition-all duration-500 hover:border-primary/20 hover:shadow-[0_0_40px_rgba(124,137,248,0.05)] reveal">
      {/* Card Content */}
      <div className="p-8">
        {/* Icon */}
        <div className="mb-8 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-500">
          {icon}
        </div>

        {/* Feature Title */}
        <h3 className="text-[17px] font-bold text-ink mb-8 group-hover:text-primary transition-colors">
          {feature}
        </h3>

        {/* Before */}
        <div className="mb-6 pb-6 border-b border-hairline">
          <div className="text-[10px] font-bold text-red-500/50 uppercase tracking-[0.2em] mb-3">Before</div>
          <p className="text-sm leading-relaxed text-ink-muted">
            {before}
          </p>
        </div>

        {/* After */}
        <div className="mb-8 pb-8 border-b border-hairline">
          <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">After</div>
          <p className="text-sm font-semibold leading-relaxed text-primary">
            {after}
          </p>
        </div>

        {/* Metric */}
        <div className="flex items-center justify-between">
          <span className="caption text-ink-tertiary uppercase tracking-widest font-bold">Impact</span>
          <p className="text-sm font-bold text-ink bg-surface-2 px-3 py-1 rounded-full border border-hairline group-hover:border-primary/30 transition-colors">
            {metric}
          </p>
        </div>
      </div>
    </div>
  )
}
