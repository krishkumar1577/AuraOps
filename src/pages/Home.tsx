// import LightPillar from '../components/LightPillar'
import TopNotchNav from '../components/TopNotchNav'
import RollingButton from '../components/RollingButton'
import BottomMarqueeNotch from '../components/BottomMarqueeNotch'
import BenefitsOrbital from '../components/BenefitsOrbital'
import AIPipeline from '../components/AIPipeline'
import IntegrationsPipeline from '../components/IntegrationsPipeline'
import BentoGrid from '../components/BentoGrid/BentoGrid'
import SectionHeader from '../components/SectionHeader'
import UseCaseComparison from '../components/UseCaseComparison'
import TypewriterEffect from '../components/TypewriterEffect'
import CompactFAQ from '../components/CompactFAQ'
import Footer from '../components/Footer'
import AuraOpsLogoSvg from '../assets/auraops_true_vector.svg'
import type { LogoItem } from '../components/BottomMarqueeNotch'

// ────── Logo Icons ──────────────────────────────────────────────────────
const AuraOpsLogoIcon = () => (
  <img src={AuraOpsLogoSvg} alt="AuraOps" className="w-6 h-6" style={{ filter: 'brightness(0) invert(1)' }} />
)

const VercelIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M13 4L24 21H2Z" fill="white" />
  </svg>
)

const LinearIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <circle cx="13" cy="13" r="9.5" stroke="white" strokeWidth="1.4" />
    <path d="M6 20L20 6M6 13l7-7M13 20l7-7" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
)

const FramerIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M7 4h12l-6 9h6L7 23v-9h6L7 4z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
  </svg>
)

const NotionIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <rect x="4" y="3" width="18" height="20" rx="2.5" stroke="white" strokeWidth="1.4" />
    <path d="M8 9h10M8 13h8M8 17h5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
)

// ────── Logo Data ────────────────────────────────────────────────────────
const logos: LogoItem[] = [
  { name: "AuraOps", italic: true, icon: <AuraOpsLogoIcon /> },
  { name: "Vercel", italic: false, icon: <VercelIcon /> },
  { name: "Linear", italic: false, icon: <LinearIcon /> },
  { name: "Framer", italic: false, icon: <FramerIcon /> },
  { name: "Notion", italic: false, icon: <NotionIcon /> },
]

// ────── Navigation Links ─────────────────────────────────────────────────
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
      {/* ════ SECTION 1: Hero (Home) ════ */}
      <main id="home" className="w-screen h-screen overflow-hidden flex flex-col relative bg-black">
        {/* ════ Light Pillar Background ════ */}
        {/* <div className="absolute inset-0">
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={1.5}
            rotationSpeed={0.4}
            glowAmount={0.002}
            pillarWidth={8.3}
            pillarHeight={0.3}
            noiseIntensity={0.2}
            pillarRotation={55}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />
        </div> */}

        {/* ════ Top Navigation ════ */}
        <div className="relative z-20 pt-4 flex justify-center">
          <TopNotchNav links={navLinks} />
        </div>

        {/* ════ Content Layer ════ */}
        <div className="relative z-10 flex flex-col flex-1 w-full">
          {/* ── Hero Section ── */}
          <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-6">
            <SectionHeader
              badge={
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-4 py-2 backdrop-blur-sm">
                  <span className="px-3 py-1 bg-blue-600/80 text-white text-xs font-bold rounded-full">
                    Gen AI
                  </span>
                  <span className="system-label text-white/80">Intelligent Automation</span>
                </div>
              }
              heading={
                <>
                  We Make AI Work
                  <br />
                  Not Against You
                </>
              }
              subheading="Intelligent automation that saves time, cuts costs, and makes your business run smoother — powered by next-gen AI."
              headingClassName="hero-heading mb-6 drop-shadow-lg tracking-tighter"
              subheadingClassName="body-copy text-secondary mb-10 max-w-lg"
            />

            {/* Copyable Terminal Snippet */}
            <div className="flex items-center gap-3 bg-[#0a0a0f] border border-[#1A1A1A] rounded-xl px-10 py-4 mb-8 max-w-2xl mx-auto">
              <span className="text-green-400 text-xl">$</span>
              <span className="cli-data">npx auraops init</span>
              <button
                onClick={() => navigator.clipboard.writeText('npx auraops init')}
                className="flex-shrink-0 p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/60 hover:text-white/80 transition-all"
                title="Copy to clipboard"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-16">
              <RollingButton label="Get Early Access" variant="primary" href="#waitlist" />
              <RollingButton label="View Docs" variant="ghost" href="https://github.com/AuraOps/docs" />
            </div>
          </section>

          {/* ── Bottom Marquee ── */}
          <div className="flex justify-center pb-0">
            <BottomMarqueeNotch logos={logos} speed={26} maxWidth={800} />
          </div>
        </div>
      </main>

      {/* ════ SECTION 2: Workflow - AuraOps Orchestration Pipeline ════ */}
      <div id="workflow" className="w-screen bg-black py-16">
        <AIPipeline />
      </div>

      {/* ════ SECTION 3: Benefits Orbital ════ */}
      <BenefitsOrbital />

      {/* ════ SECTION 4: Impact (Compact Stats) ════ */}
      <div className="w-screen bg-black py-24 px-8 flex items-center justify-center">
        <div className="text-center min-h-[220px] flex items-center">
          <TypewriterEffect
            phrases={[
              "10x Faster Rebuilds",
              "Zero Cold Starts",
              "Instant Model Deploys",
              "Zero Config Pipelines"
            ]}
            typingSpeed={40}
            deletingSpeed={25}
            pauseDuration={2500}
            className="impact-metric"
            style={{
              background: "linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 25%, #e8e8e8 50%, #c0c0c0 75%, #e8e8e8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 20px 40px rgba(255,255,255,0.1), 0 0 60px rgba(200,200,200,0.15)",
              filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
              display: "block",
              lineHeight: "1.25",
              fontSize: "clamp(64px, 8vw, 110px)"
            }}
          />
        </div>
      </div>

      {/* ════ SECTION 5: Ecosystem - Integrations Pipeline ════ */}
      <div id="ecosystem">
        <IntegrationsPipeline />
      </div>

      {/* ════ SECTION 6: Features - Bento Grid ════ */}
      <section id="features" className="w-screen bg-black px-8 py-16">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="h2 text-white mb-4">Powerful Features, Built Different</h2>
          <p className="body-lg text-text-muted max-w-2xl">Everything you need to deploy AI models at scale, with zero infrastructure headaches.</p>
        </div>
        <BentoGrid />
      </section>

      {/* ════ SECTION 7: Use Case Comparison ════ */}
      <div id="comparison">
        <UseCaseComparison />
      </div>

      {/* ════ SECTION 8: Waitlist + Compact FAQ ════ */}
      <section id="waitlist" className="w-screen bg-gradient-to-b from-black to-[#0a0a0f] py-16 px-8">
        <div className="max-w-3xl mx-auto">
          {/* Waitlist Signup */}
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Join the Waitlist</h2>
            <p className="body-copy text-secondary mb-8">Get early access to intelligent AI deployments.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors flex-1 sm:flex-none"
              />
              <RollingButton label="Get Access" variant="primary" href="#" />
            </div>
          </div>

          {/* Compact FAQ */}
          <div className="border-t border-white/10 pt-8">
            <CompactFAQ />
          </div>
        </div>
      </section>

      {/* ════ FOOTER ════ */}
      <Footer />
    </>
  )
}
