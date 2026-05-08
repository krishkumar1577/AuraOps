import RollingButton from '../ui/RollingButton'
import Badge from '../ui/Badge'
import FounderPortrait from '../../assets/founder_portrait.png'

interface FounderNarrativeSectionProps {
  onCtaClick?: () => void
}

export function FounderNarrativeSection({ onCtaClick }: FounderNarrativeSectionProps) {
  return (
    <section className="relative w-screen bg-black pb-16 pt-8 px-8 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column (60%) - Story & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-8 reveal">
              <Badge label="Founder's Note" variant="muted" />
            </div>

            {/* Headline */}
            <h2 className="text-[48px] md:text-[64px] font-display font-bold mb-10 leading-[1.1] tracking-tightest reveal" style={{ animationDelay: '200ms' }}>
              Solving the <span className="text-secondary italic underline decoration-secondary/20 underline-offset-8">Deployment Paradox</span>
            </h2>

            {/* Narrative with Highlighting */}
            <div className="space-y-10 mb-12">
              <p className="text-xl md:text-2xl text-ink-muted leading-relaxed reveal" style={{ animationDelay: '400ms' }}>
                I'm Krish. I spent <span className="highlight-text">8 weeks</span> building AuraOps because I got tired of wasting
                <span className="highlight-text"> 3 weeks</span> debugging why my AI agents worked locally but broke in production.
              </p>

              <div className="space-y-6 reveal" style={{ animationDelay: '600ms' }}>
                <p className="text-lg md:text-xl text-ink-subtle leading-relaxed">
                  It's always the same technical debt: <span className="highlight-technical">CUDA mismatches</span>, missing Docker dependencies,
                  and <span className="highlight-technical">15GB model downloads</span> taking forever.
                </p>
                <p className="text-lg md:text-xl text-ink-subtle leading-relaxed italic border-l-2 border-secondary/20 pl-6">
                  "You ship something, it fails silently, and you're debugging at <span className="text-ink font-bold">2AM</span> trying to figure out what's different between your laptop and the cloud."
                </p>
              </div>

              <p className="text-lg md:text-xl text-ink-subtle leading-relaxed reveal" style={{ animationDelay: '800ms' }}>
                We eliminated environment drift by building a deterministic layer that makes production
                <span className="highlight-success">byte-identical</span> to local. No surprises. No drift. Just code that works.
              </p>
            </div>

            {/* CTA */}
            <div className="reveal" style={{ animationDelay: '1s' }}>
              <RollingButton
                label="Join the Waitlist"
                variant="primary"
                onClick={onCtaClick}
              />
            </div>
          </div>

          {/* Right Column (40%) - Founder Portrait */}
          <div className="lg:col-span-5 relative reveal" style={{ animationDelay: '1.2s' }}>
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-secondary/10 rounded-[32px] group-hover:border-secondary/20 transition-colors duration-500" />

              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-hairline shadow-2xl">
                <img
                  src={FounderPortrait}
                  alt="Krish - Founder of AuraOps"
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />

                {/* Overlay Signature/Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-surface-1/40 backdrop-blur-md border border-white/10 rounded-xl">
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-secondary uppercase tracking-widest mb-1">Founder & CEO</span>
                    <span className="text-lg font-display font-bold text-ink tracking-tight">Krish.dev</span>
                  </div>
                </div>
              </div>

              {/* Technical Detail Badge */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/10 border border-secondary/20 backdrop-blur-xl rounded-full flex items-center justify-center p-4 text-center">
                <span className="text-[10px] font-mono text-secondary font-bold leading-none">BUILDING IN PUBLIC</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .highlight-text {
          background: linear-gradient(90deg, rgba(228, 255, 156, 0.15) 0%, rgba(228, 255, 156, 0.05) 100%);
          color: white;
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 600;
        }
        .highlight-technical {
          color: var(--color-secondary);
          font-family: var(--font-family-mono);
          font-size: 0.9em;
          letter-spacing: -0.02em;
        }
        .highlight-success {
          background: linear-gradient(90deg, rgba(228, 255, 156, 0.2) 0%, rgba(228, 255, 156, 0.05) 100%);
          color: var(--color-secondary);
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 600;
          border: 1px solid rgba(228, 255, 156, 0.3);
        }
      `}} />
    </section>
  )
}
