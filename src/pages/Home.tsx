import TopNotchNav from '../components/layout/TopNotchNav'
import AIPipeline from '../components/visuals/AIPipeline/AIPipeline'
import CompactFAQ from '../components/sections/CompactFAQ'
import Footer from '../components/layout/Footer'
import { HeroSection } from '../components/sections/HeroSection'
import { FounderNarrativeSection } from '../components/sections/FounderNarrativeSection'
import { ProblemSection } from '../components/sections/ProblemSection'
import { SocialProofSection } from '../components/sections/SocialProofSection'
import { SolutionSection } from '../components/sections/SolutionSection'
import { BenefitsBeforeAfterCards } from '../components/sections/BenefitsBeforeAfterCards'
import { ComparisonSection } from '../components/sections/ComparisonSection'
import { PricingUrgencySection } from '../components/sections/PricingUrgencySection'
import { EarlySignupBar } from '../components/sections/EarlySignupBar'
import { FinalCTASection } from '../components/sections/FinalCTASection'
import StatusTicker from '../components/layout/StatusTicker'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Docs', href: 'https://github.com/AuraOps/docs', target: '_blank' as const },
  { label: 'Waitlist', href: '#waitlist' },
]

export default function Home() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 z-50 pt-16 flex justify-center">
        <TopNotchNav links={navLinks} />
      </div>

      <HeroSection
        onVideoClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        onTryClick={() => window.location.hash = '#waitlist'}
      />

      <FounderNarrativeSection
        onCtaClick={() => window.location.hash = '#story'}
      />

      <ProblemSection />

      <SocialProofSection />

      <SolutionSection
        onLearnMore={() => window.scrollTo({ top: document.querySelector('#workflow')?.getBoundingClientRect().top ?? 0, behavior: 'smooth' })}
      />

      <div
        id="workflow"
        className="w-screen bg-canvas py-16"
        style={{ backgroundImage: 'linear-gradient(135deg, rgba(82, 39, 255, 0.04), rgba(255, 159, 252, 0.03))' }}
      >
        <AIPipeline />
      </div>

      <BenefitsBeforeAfterCards />

      <ComparisonSection
        onCtaClick={() => window.location.hash = '#waitlist'}
      />

      <PricingUrgencySection />

      <EarlySignupBar />

      <FinalCTASection
        onCtaClick={() => window.location.hash = '#waitlist'}
      />

      <section
        id="waitlist"
        className="w-screen bg-canvas py-16 px-8"
        style={{ backgroundImage: 'linear-gradient(135deg, rgba(82, 39, 255, 0.05), rgba(255, 159, 252, 0.04))' }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Questions? We Have Answers</h2>
            <p className="body-copy text-secondary mb-8">Everything you need to know about AuraOps</p>
          </div>

          <div className="border-t border-white/10 pt-8">
            <CompactFAQ />
          </div>
        </div>
      </section>

      <StatusTicker />
      <Footer />
    </>
  )
}
