import { useState } from 'react'

const Logo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => {
  const dimensions = size === 'sm' ? 'w-5 h-5' : 'w-6 h-6'
  return (
    <svg className={dimensions} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    </svg>
  )
}

export default function TopNotch() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative flex justify-center pointer-events-auto z-20">
      {/* Main notch container */}
      <div
        className={`relative transition-all duration-500 ease-out ${
          isExpanded ? 'w-96' : 'w-28'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Notch bar with glass effect */}
        <div className="relative h-16 rounded-b-3xl overflow-hidden">
          {/* Background with glassmorphism */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-md border border-white/10" />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-pink-600/5 pointer-events-none" />

          {/* Content container */}
          <div className="relative h-full flex items-center justify-center px-6">
            {/* Logo center (collapse state) */}
            <div
              className={`absolute transition-all duration-300 ${
                isExpanded
                  ? 'opacity-0 scale-75 pointer-events-none'
                  : 'opacity-100 scale-100'
              }`}
            >
              <Logo size="md" />
            </div>

            {/* Navigation (expand state) */}
            <nav
              className={`flex items-center gap-8 transition-all duration-300 ${
                isExpanded
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <a
                href="#"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                About
              </a>

              {/* Center logo in nav */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/80">
                <Logo size="sm" />
              </div>

              <a
                href="#"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
