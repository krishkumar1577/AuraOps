import { Terminal, Download, Cpu, Globe, Database, Settings, Rocket, AlertTriangle, Layers, Construction } from 'lucide-react'
import RollingButton from '../ui/RollingButton'

export const MENU_STRUCTURE = [
  {
    group: 'GUIDES',
    items: [
      { label: 'CLI Commands', id: 'cli-commands', icon: Terminal },
      { label: 'Installation', id: 'installation', icon: Download },
      { label: 'Quick Start', id: 'quick-start', icon: Rocket },
      { label: 'Architecture', id: 'architecture', icon: Layers },
    ]
  },
  {
    group: 'REFERENCE',
    items: [
      { label: 'Supported Frameworks', id: 'frameworks', icon: Cpu },
      { label: 'GPU Tiers & Providers', id: 'gpu-tiers', icon: Globe },
      { label: 'API Endpoints', id: 'api-reference', icon: Database },
      { label: 'Environment Variables', id: 'env-vars', icon: Settings },
      { label: 'Error Reference', id: 'errors', icon: AlertTriangle },
      { label: 'Known Limitations', id: 'limitations', icon: Construction },
    ]
  }
]

interface DocSidebarProps {
  activeSection: string
  scrollToSection: (id: string) => void
  isMobileMenuOpen: boolean
}

export default function DocSidebar({ activeSection, scrollToSection, isMobileMenuOpen }: DocSidebarProps) {
  return (
    <aside className={`
      fixed md:sticky top-0 h-screen w-full md:w-80 border-r border-white/5 bg-[#0A0A0A] z-40 transition-all duration-300
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="h-full overflow-y-auto py-10 px-8 space-y-10 custom-scrollbar">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-display font-bold text-xl tracking-tight text-white">AuraOps</span>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            <RollingButton 
              label="Back to Home" 
              variant="secondary" 
              onClick={() => window.location.href = '/'}
              className="w-full justify-center text-[10px] uppercase tracking-[0.2em] font-bold py-3"
            />
            <RollingButton 
              label="GitHub Repo" 
              variant="outline" 
              onClick={() => window.open('https://github.com/krishkumar1577/AuraOps_backend', '_blank')}
              className="w-full justify-center text-[10px] uppercase tracking-[0.2em] font-bold py-3 border-white/10"
            />
          </div>
        </div>

        <div className="h-px w-full bg-white/5" />

        {MENU_STRUCTURE.map((group) => (
          <div key={group.group} className="space-y-4">
            <h4 className="text-[10px] font-mono font-bold text-white/70 uppercase tracking-[0.3em]">
              {group.group}
            </h4>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2 text-sm transition-all duration-200 rounded-lg group/item
                      ${activeSection === item.id 
                        ? 'bg-[#E4FF9C]/5 text-[#E4FF9C] font-bold' 
                        : 'text-white/80 hover:text-white hover:bg-white/5'}
                    `}
                  >
                    <item.icon size={16} className={activeSection === item.id ? 'text-[#E4FF9C]' : 'text-white/70 group-hover/item:text-white/80'} />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  )
}
