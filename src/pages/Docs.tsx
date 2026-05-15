import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Badge from '../components/ui/Badge'
import DocSidebar from '../components/docs/DocSidebar'
import CliSection from '../components/docs/CliSection'
import FrameworksSection from '../components/docs/FrameworksSection'
import {
  InstallationSection,
  GpuSection,
  ApiSection,
  QuickStartSection,
  EnvVarsSection,
  ErrorSection,
  ArchitectureSection,
  LimitationsSection
} from '../components/docs/ReferenceSections'

export default function Docs() {
  const [activeSection, setActiveSection] = useState('cli-commands')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = activeSection

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        if (window.pageYOffset >= sectionTop - 150) {
          current = section.getAttribute('id') || current
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF] font-sans selection:bg-[#E4FF9C] selection:text-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto flex">

        {/* Modular Sidebar */}
        <DocSidebar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          isMobileMenuOpen={isMobileMenuOpen}
        />

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#E4FF9C] text-[#0A0A0A] shadow-[0_10px_30px_rgba(228,255,156,0.4)] flex items-center justify-center font-bold"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Main Content Area */}
        <main className="flex-1 px-8 md:px-20 py-24 max-w-5xl mx-auto">
          {/* Hero Header */}
          <div className="mb-32">
            <Badge label="Version 0.1.0 MVP" variant="secondary" />
            <h1 className="text-5xl md:text-8xl font-display font-bold mt-8 mb-8 tracking-tightest leading-[0.85]">
              AuraOps <br />
              <span className="text-[#E4FF9C] italic drop-shadow-[0_0_30px_rgba(228,255,156,0.3)]">Documentation.</span>
            </h1>
            <p className="text-2xl text-white/80 leading-tight max-w-2xl font-medium tracking-tight">
              Complete reference guide for the AuraOps backend — deploy AI agents to GPU in seconds.
            </p>
          </div>

          {/* Modular Sections */}
          <CliSection />
          <InstallationSection />
          <FrameworksSection />
          <GpuSection />
          <ApiSection />
          <EnvVarsSection />
          <QuickStartSection />
          <ErrorSection />
          <ArchitectureSection />
          <LimitationsSection />

          {/* Footer */}
          <footer className="pt-24 border-t border-white/5 text-center flex flex-col items-center gap-8">
            <div className="flex items-center gap-12">
              <button onClick={() => window.location.href = '/'} className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/70 hover:text-[#E4FF9C] transition-colors">Home</button>
              <button onClick={() => window.open('https://github.com', '_blank')} className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/70 hover:text-[#E4FF9C] transition-colors">GitHub</button>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/70 hover:text-[#E4FF9C] transition-colors">Top</button>
            </div>
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60">
              AuraOps Laboratory <span className="text-[#E4FF9C] mx-2">•</span> All Systems Deterministic
            </p>
          </footer>
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(228, 255, 156, 0.2);
        }
      `}</style>
    </div>
  )
}
