// import LightPillar from '../components/LightPillar'
import TopNotchNav from '../components/TopNotchNav'
import RollingButton from '../components/RollingButton'
import BottomMarqueeNotch from '../components/BottomMarqueeNotch'
import BenefitsOrbital from '../components/BenefitsOrbital'
import AIPipeline from '../components/AIPipeline'
import IntegrationsPipeline from '../components/IntegrationsPipeline'
import BentoGrid from '../components/BentoGrid'
import TypewriterEffect from '../components/TypewriterEffect'
import type { LogoItem } from '../components/BottomMarqueeNotch'

// ────── Logo Icons ──────────────────────────────────────────────────────
const AuraOpsIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <circle cx="13" cy="13" r="10" stroke="white" strokeWidth="1.5" />
    <path d="M8 13c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="13" cy="13" r="2" fill="white" />
  </svg>
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
  { name: "AuraOps", italic: true, icon: <AuraOpsIcon /> },
  { name: "Vercel", italic: false, icon: <VercelIcon /> },
  { name: "Linear", italic: false, icon: <LinearIcon /> },
  { name: "Framer", italic: false, icon: <FramerIcon /> },
  { name: "Notion", italic: false, icon: <NotionIcon /> },
]

// ────── Navigation Links ─────────────────────────────────────────────────
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Home() {
  return (
    <>
      {/* ════ SECTION 1: Hero ════ */}
      <main className="w-screen h-screen overflow-hidden flex flex-col relative bg-black">
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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 bg-white/5 border border-white/15 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="px-3 py-1 bg-blue-600/80 text-white text-xs font-bold rounded-full">
                Gen AI
              </span>
              <span className="text-sm font-medium text-white/80">Intelligent Automation</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tighter drop-shadow-lg">
              We Make AI Work
              <br />
              Not Against You
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
              Intelligent automation that saves time, cuts costs, and makes your business run smoother — powered by next-gen AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-16">
              <RollingButton label="Book a call" variant="primary" href="#" />
              <RollingButton label="Learn more" variant="ghost" href="#" />
            </div>
          </section>

          {/* ── Bottom Marquee ── */}
          <div className="flex justify-center pb-0">
            <BottomMarqueeNotch logos={logos} speed={26} maxWidth={800} />
          </div>
        </div>
      </main>

      {/* ════ SECTION 2: Impact (Scrollable) ════ */}
      <div className="w-screen h-screen flex items-center justify-center bg-black">
          <div className="text-center px-6">
            <TypewriterEffect
              phrases={[
                "10M+ GPU Hours Optimized",
                "10x Faster Rebuilds",
                "10 Frameworks Supported"
              ]}
              typingSpeed={40}
              deletingSpeed={25}
              pauseDuration={2500}
              style={{
                fontSize: "clamp(60px, 15vw, 200px)",
                fontWeight: 900,
                background: "linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 25%, #e8e8e8 50%, #c0c0c0 75%, #e8e8e8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 20px 40px rgba(255,255,255,0.1), 0 0 60px rgba(200,200,200,0.15)",
                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
                letterSpacing: "-0.02em",
                display: "block",
                lineHeight: "1.1",
              }}
            />
          </div>
        </div>

      {/* ════ SECTION 3: Benefits Orbital ════ */}
      <BenefitsOrbital />

      {/* ════ SECTION 4: AuraOps Orchestration Pipeline ════ */}
      <div className="w-screen bg-black py-16">
        <AIPipeline />
      </div>

      {/* ════ SECTION 5: Integrations Pipeline ════ */}
      <IntegrationsPipeline />

      {/* ════ SECTION 6: Bento Grid Features ════ */}
      <BentoGrid />
    </>
  )
}
