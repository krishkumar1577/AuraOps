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

// Navigation Links 
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
      <div className="absolute top-0 left-0 right-0 z-50 pt-20 flex justify-center">
        <TopNotchNav links={navLinks} />
      </div>

      {/* SECTION 1: HERO */}
      <HeroSection
        onVideoClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        onTryClick={() => window.location.hash = '#waitlist'}
      />

      {/* SECTION 2: FOUNDER NARRATIVE */}
      <FounderNarrativeSection
        onCtaClick={() => window.location.hash = '#story'}
      />

      {/* SECTION 3: PROBLEM DEEP DIVE */}
      <ProblemSection
        onLearnMore={() => window.scrollTo({ top: document.querySelector('#solution')?.getBoundingClientRect().top ?? 0, behavior: 'smooth' })}
      />

      {/* SECTION 4: SOCIAL PROOF */}
      <SocialProofSection />

      {/* SECTION 5: SOLUTION */}
      <SolutionSection
        onLearnMore={() => window.scrollTo({ top: document.querySelector('#workflow')?.getBoundingClientRect().top ?? 0, behavior: 'smooth' })}
      />

      {/* SECTION 6: PIPELINE VISUALIZATION (existing AIPipeline) */}
      <div id="workflow" className="w-screen bg-black py-16">
        <AIPipeline />
      </div>

      {/* SECTION 7: BENEFITS BEFORE/AFTER */}
      <BenefitsBeforeAfterCards />

      {/* SECTION 8: COMPARISON */}
      <ComparisonSection
        onCtaClick={() => window.location.hash = '#waitlist'}
      />

      {/* SECTION 9: PRICING + URGENCY */}
      <PricingUrgencySection />

      {/* EARLY SIGNUP BAR - High-contrast email capture */}
      <EarlySignupBar />

      {/* SECTION 10: FINAL CTA */}
      <FinalCTASection
        onCtaClick={() => window.location.hash = '#waitlist'}
      />

      {/* SECTION 11: FAQ */}
      <section id="waitlist" className="w-screen bg-gradient-to-b from-black to-[#0a0a0f] py-16 px-8">
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

      {/* SECTION 12: FOOTER */}
      <StatusTicker />
      <Footer />
    </>
  )
}
