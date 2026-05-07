import RollingButton from "../ui/RollingButton"

interface SolutionSectionProps {
  onLearnMore?: () => void
}

export function SolutionSection({ onLearnMore }: SolutionSectionProps) {
  const beforeSteps = [
    { step: 1, action: "Figure out Docker", time: "5 min" },
    { step: 2, action: "Install CUDA/cuDNN", time: "10 min" },
    { step: 3, action: "Download models", time: "15 min" },
    { step: 4, action: "Debug env issues", time: "30 min" },
    { step: 5, action: "Deploy and pray", time: "5 min" },
    { step: 6, action: "Debug in production", time: "? hours" },
  ]

  const afterSteps = [
    { status: "Auto-detected CrewAI" },
    { status: "Locked CUDA 12.1" },
    { status: "Cached models" },
    { status: "Spun up GPU" },
    { status: "Agent live" },
  ]

  return (
    <section id="solution" className="w-screen bg-canvas py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-lg mb-6 leading-tight">
            How AuraOps Solves It
          </h2>
          
          <p className="body-lg text-ink-muted max-w-3xl mx-auto leading-relaxed">
            Same code. Same behavior. Everywhere. No CUDA conflicts. No environment drift. No surprises.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* BEFORE */}
          <div className="reveal">
            <h3 className="text-xl font-bold text-ink-muted mb-6 px-2">Without AuraOps</h3>
            <div className="bg-surface-1 border border-hairline rounded-2xl p-8 space-y-4">
              {beforeSteps.map((step, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 border-b border-hairline last:border-0">
                  <div className="flex items-center gap-4">
                    <span className="w-5 h-5 rounded-full bg-surface-3 text-ink-tertiary flex items-center justify-center text-[10px] font-bold border border-hairline">
                      {step.step}
                    </span>
                    <span className="text-sm font-medium text-ink-muted">{step.action}</span>
                  </div>
                  <span className="caption text-ink-tertiary font-mono">{step.time}</span>
                </div>
              ))}
              <div className="pt-6 mt-4 border-t border-hairline flex items-baseline justify-between">
                <div>
                  <p className="text-sm text-ink-tertiary uppercase tracking-wider font-bold">Total Waste</p>
                  <p className="text-2xl font-bold text-ink mt-1">30+ minutes</p>
                </div>
                <p className="caption text-ink-tertiary italic">(+ headaches)</p>
              </div>
            </div>
          </div>

          {/* AFTER */}
          <div className="reveal" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold text-primary mb-6 px-2">With AuraOps</h3>
            <div className="bg-surface-1 border border-primary/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(124,137,248,0.05)]">
              <div className="bg-canvas border border-hairline rounded-lg p-4 font-mono text-[11px] text-primary/80 mb-8 overflow-hidden">
                <p className="flex items-center gap-2">
                  <span className="text-primary/40">$</span> auraops deploy
                </p>
              </div>
              <div className="space-y-4 mb-8">
                {afterSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-1 group">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-primary">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-ink group-hover:text-primary transition-colors">{step.status}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-hairline pt-6">
                <p className="text-sm text-primary uppercase tracking-wider font-bold">Total Time</p>
                <p className="text-2xl font-bold text-primary mt-1 flex items-baseline gap-2">
                  11 seconds
                  <span className="text-xs font-normal text-ink-tertiary">(-99% reduction)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-surface-1 border border-hairline rounded-2xl p-12 text-center mb-16 reveal" style={{ animationDelay: '0.2s' }}>
          <div className="text-4xl font-bold text-primary mb-4 tracking-tighter">30 min → 11 seconds</div>
          <p className="body-lg text-ink-muted max-w-2xl mx-auto">
            AuraOps handles the infrastructure complexity so you can focus on building agents, not Dockerfiles.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <RollingButton
            label="Learn More"
            variant="outline"
            onClick={onLearnMore}
          />
        </div>
      </div>
    </section>
  )
}
