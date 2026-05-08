import RollingButton from "../ui/RollingButton"
import CodeTerminal from "../visuals/CodeTerminal"
import Badge from "../ui/Badge"

interface SolutionSectionProps {
  onLearnMore?: () => void
}

export function SolutionSection({ onLearnMore }: SolutionSectionProps) {
  return (
    <section id="workflow" className="relative w-screen bg-black py-32 px-8 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Column: Technical Narrative (60%) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-8 reveal">
              <Badge label="Deployment Workflow" variant="muted" />
            </div>

            <h2 className="text-[40px] md:text-[56px] font-display font-bold text-ink mb-10 leading-[1.1] tracking-tightest reveal" style={{ animationDelay: '200ms' }}>
              One Command. <br />
              <span className="text-secondary italic">Zero Infrastructure Tax.</span>
            </h2>

            <div className="space-y-8 mb-12 reveal" style={{ animationDelay: '400ms' }}>
              <p className="text-xl md:text-2xl text-ink-muted leading-relaxed max-w-2xl">
                AuraOps wraps your AI logic in a <span className="text-ink font-semibold">deterministic shell</span>. It snapshots your environment and replicates it byte-for-byte on any GPU.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-secondary">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Step 01</span>
                    <div className="h-px flex-1 bg-secondary/20" />
                  </div>
                  <h4 className="text-lg font-bold text-ink">Commit Code</h4>
                  <p className="text-sm text-ink-subtle">Develop locally with any CUDA version or library.</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-secondary">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Step 02</span>
                    <div className="h-px flex-1 bg-secondary/20" />
                  </div>
                  <h4 className="text-lg font-bold text-ink">Auto-Sync</h4>
                  <p className="text-sm text-ink-subtle">AuraOps handles weight checksumming and environment locking.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 reveal" style={{ animationDelay: '600ms' }}>
              <RollingButton 
                label="Explore the CLI Docs" 
                variant="secondary"
                onClick={onLearnMore}
              />
              <div className="flex items-center gap-3 px-6 py-3 border border-hairline rounded-full bg-surface-1/50 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-[10px] font-mono text-secondary uppercase tracking-widest font-bold italic">30 min → 11s Deploy</span>
              </div>
            </div>
          </div>

          {/* Right Column: The Terminal (40%) */}
          <div className="lg:col-span-5 relative">
            {/* Visual Depth Background */}
            <div className="absolute inset-0 bg-secondary/10 blur-[100px] opacity-30 -z-10" />
            
            <div className="reveal" style={{ animationDelay: '800ms' }}>
              <CodeTerminal />
            </div>
            
            {/* Context Floating Badge */}
            <div className="absolute -bottom-6 -right-6 px-4 py-2 bg-surface-1/80 backdrop-blur-md border border-hairline rounded-lg shadow-xl reveal" style={{ animationDelay: '2.5s' }}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-[10px] font-mono text-ink tracking-widest uppercase font-bold">SHA-256 Verified</span>
              </div>
            </div>

            {/* Decorative Grid Element */}
            <div className="absolute -top-12 -left-12 w-24 h-24 border border-hairline rounded-full opacity-20 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  )
}
