import RollingButton from "../ui/RollingButton"

interface ComparisonSectionProps {
  onCtaClick?: () => void
}

export function ComparisonSection({ onCtaClick }: ComparisonSectionProps) {
  const features = [
    '11 Second Deploy',
    'Always-On Agents',
    'Deterministic Builds',
    'Works with CrewAI',
    'Multi-Cloud Support',
    'Zero Configuration',
    'Founder Support'
  ]

  const competitors = [
    {
      name: 'Modal',
      highlight: false,
      values: [false, false, false, false, false, false, false]
    },
    {
      name: 'Railway',
      highlight: false,
      values: [true, true, false, true, true, false, false]
    },
    {
      name: 'Vast.ai',
      highlight: false,
      values: [false, true, false, true, true, false, false]
    },
    {
      name: 'AuraOps',
      highlight: true,
      values: [true, true, true, true, true, true, true]
    }
  ]

  return (
    <section className="w-screen bg-canvas py-24 px-8 overflow-x-auto">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-lg mb-6 leading-tight">
            Why AuraOps
          </h2>
          
          <p className="body-lg text-ink-muted max-w-2xl mx-auto">
            The only platform that does all three
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-900">
                <th className="text-left py-4 px-6 text-sm font-semibold sticky left-0 bg-canvas z-10 text-zinc-400">Feature</th>
                {competitors.map((competitor) => (
                  <th 
                    key={competitor.name}
                    className={`py-4 px-6 text-sm font-semibold text-center min-w-40 transition-all ${
                      competitor.highlight 
                        ? 'border-2 border-white' 
                        : ''
                    }`}
                    style={{
                      backgroundColor: competitor.highlight ? 'var(--color-auraops-bg)' : 'transparent'
                    }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className={`${
                        competitor.highlight 
                          ? 'text-white font-bold' 
                          : 'text-zinc-500 font-medium'
                      }`}>
                        {competitor.name}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, fidx) => (
                <tr key={feature} className="border-b border-zinc-900 hover:bg-white/[0.02] transition-colors">
                  <td className="py-6 px-6 text-sm font-medium sticky left-0 bg-canvas z-10 text-zinc-400">
                    {feature}
                  </td>
                  {competitors.map((competitor) => (
                    <td 
                      key={`${feature}-${competitor.name}`}
                      className="py-6 px-6 text-sm text-center"
                      style={{
                        backgroundColor: competitor.highlight ? 'var(--color-auraops-bg)' : 'transparent'
                      }}
                    >
                      <div className="flex items-center justify-center">
                        {competitor.values[fidx] ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--color-emerald-600)' }}>
                            <path d="M13 4l-8 8-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--color-zinc-600)' }}>
                            <path d="M3 3l10 10M13 3l-10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center mb-12">
          <p className="body-lg text-ink">
            Other platforms solve <span className="font-semibold">part</span> of the problem.
            <br />
            <span className="text-primary font-semibold">AuraOps solves all of it.</span>
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <RollingButton
            label="Try AuraOps Free"
            variant="primary"
            onClick={onCtaClick}
          />
        </div>
      </div>
    </section>
  )
}
