import React from 'react'

const InfraIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8"/>
    <path d="M8 12h8M12 8v8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const AutomationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#4ade80" strokeWidth="1.8"/>
    <path d="M9 12l2 2 4-4" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function UseCaseComparison(): React.ReactElement {
  const traditionalItems = [
    'Infrastructure Tax: DevOps overhead consuming 60% of sprint time',
    'CUDA/Torch version conflicts derail deployments',
    'Requires expert DevOps gatekeepers',
    '30+ minutes per deployment cycle',
    'Manual environment configuration & tracking'
  ]

  const auraopsItems = [
    'Zero Infrastructure Tax — deploy in seconds',
    'Auto-detect & lock conflicts instantly',
    'Any team member can deploy (no gatekeeping)',
    'Sub-30 second end-to-end deployments',
    'Centralized, versioned environment state'
  ]

  return (
    <section className="bg-black min-h-screen py-24 px-8 flex flex-col items-center justify-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 mb-8 bg-white/8 border border-white/20 rounded-full px-5 py-2.5">
        <span className="text-xs font-bold text-white/70 tracking-widest">INFRASTRUCTURE COMPARISON</span>
      </div>

      {/* Heading */}
      <h2 className="text-6xl md:text-7xl font-black text-center max-w-4xl mb-24 leading-tight">
        The <span className="text-white">Infrastructure Tax</span>
        <br />
        <span className="text-white/40">vs</span> <span className="text-white">AuraOps</span>
      </h2>

      {/* Comparison Grid */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-3 gap-4 items-start">
          
            {/* Left Column - Traditional */}
            <div className="space-y-4 h-full">
              <div className="flex items-center gap-3 bg-white/3 border border-white/15 rounded-2xl p-5 backdrop-blur-sm h-24 flex-shrink-0">
                <InfraIcon />
                <div>
                  <span className="text-xs font-bold text-white/60 tracking-wider uppercase">Without</span>
                  <span className="block text-sm font-bold text-white/85">Manual Infrastructure</span>
                </div>
              </div>
              <ul className="space-y-0 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-3xl p-8 overflow-hidden shadow-2xl min-h-[380px]">
                {traditionalItems.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-4 py-5 text-sm text-white/65 leading-relaxed transition-colors hover:text-white/80 ${
                      idx !== traditionalItems.length - 1 ? 'border-b border-white/8' : ''
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white/20 flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center Column - VS */}
            <div className="flex flex-col items-center pt-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/30 to-white/10 border border-white/40 flex items-center justify-center font-bold text-sm flex-shrink-0 z-10 relative shadow-lg backdrop-blur-sm">
                <span className="text-white/90">VS</span>
              </div>
              <div className="w-0.5 bg-gradient-to-b from-white/30 via-white/20 to-white/10 flex-1 min-h-[380px] mt-4" />
            </div>

            {/* Right Column - AuraOps */}
            <div className="space-y-4 h-full">
              <div className="flex items-center gap-3 bg-[#1a2e1a]/30 border border-[#4ade80]/20 rounded-2xl p-5 backdrop-blur-sm h-24 flex-shrink-0 shadow-lg shadow-[#4ade80]/5">
                <AutomationIcon />
                <div>
                  <span className="text-xs font-bold text-[#4ade80]/70 tracking-wider uppercase">With</span>
                  <span className="block text-sm font-bold text-white/90">AuraOps Automation</span>
                </div>
              </div>
              <ul className="space-y-0 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-3xl p-8 overflow-hidden shadow-2xl min-h-[380px]">
                {auraopsItems.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-4 py-5 text-sm text-white/65 leading-relaxed transition-colors hover:text-white/80 ${
                      idx !== auraopsItems.length - 1 ? 'border-b border-white/8' : ''
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#4ade80] flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
