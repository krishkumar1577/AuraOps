import RollingButton from "../ui/RollingButton";

interface FinalCTASectionProps {
  onCtaClick?: () => void
}

export function FinalCTASection({ onCtaClick }: FinalCTASectionProps) {
  return (
    <section className="w-screen bg-gradient-to-b from-canvas to-black py-24 px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main Headline */}
        <h2 className="display-lg mb-6 leading-tight">
          Ready to ship AI agents in seconds?
        </h2>

        {/* Subheading */}
        <p className="body-lg text-ink-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Stop wasting weeks on deployment infrastructure. AuraOps handles it. You focus on building.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <RollingButton
            label="Try Free (No Credit Card)"
            variant="primary"
            onClick={onCtaClick}
          />
          <RollingButton
            label="Watch 2-min Demo"
            variant="ghost"
          />
        </div>

        {/* Trust Badge */}
        <p className="body-copy text-ink-muted">
          Used by 16 founders. 47 agents deployed. Join the waitlist.
        </p>
      </div>
    </section>
  )
}
