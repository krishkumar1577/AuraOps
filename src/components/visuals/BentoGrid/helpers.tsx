import React from 'react'

// ════ CARD FOOTER ════
export function CardFooter({ title, desc }: { title: string; desc: string }): React.ReactElement {
  const getIcon = () => {
    if (title.includes('/=')) return <IconSlash />
    if (title.includes('Embeds')) return <IconEmbeds />
    if (title.includes('Activity')) return <IconActivity />
    if (title.includes('resource')) return <IconResource />
    if (title.includes('Collaborative')) return <IconDebug />
    return <IconAI />
  }

  return (
    <div className="px-4.5 py-4.5 border-t border-white/5 mt-4">
      <div className="text-[13px] font-semibold text-white/75 tracking-[-0.15px] mb-1 flex items-center gap-1.5" style={{ opacity: 0.45 }}>
        {getIcon()}
        {title}
      </div>
      <div className="text-[11.5px] text-white/30 leading-relaxed min-h-[44px]">{desc}</div>
    </div>
  )
}

// ════ DEPLOY ROW ════
export function DeployRow({ icon, bg, name, ref, status, statusColor, time, branch, opacity }: {
  icon: React.ReactElement
  bg: string
  name: string
  ref: string
  status: string
  statusColor: string
  time: string
  branch: string
  opacity?: number
}) {
  return (
    <div className="flex items-center gap-2.25 bg-[#111113] rounded-[9px] px-3 py-2.5" style={{ opacity: opacity || 1 }}>
      <div className="w-6 h-6 rounded-1.5 flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
        {icon}
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="text-[11px] font-semibold text-white/65 truncate">{name}</div>
        <div className="text-[9.5px] text-white/22 font-mono mt-0.25">{ref}</div>
      </div>
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: statusColor }}></span>
        <span className="text-[10px] font-semibold" style={{ color: statusColor }}>{status}</span>
        <span className="text-[9.5px] text-white/22 font-mono">{time}</span>
        <span className="text-[9.5px] text-white/22 font-mono">{branch}</span>
      </div>
    </div>
  )
}

// ════ REGISTRY ITEM ════
export function RegistryItem({ name, size, checked, opacity }: {
  name: string
  size: string
  checked?: boolean
  opacity?: number
}) {
  return (
    <div className="flex items-center gap-2 bg-[#111113] border border-white/6 rounded-[8px] px-2.5 py-2 mb-1.25" style={{ opacity: opacity || 1 }}>
      <div className={`w-3.5 h-3.5 rounded-[3px] flex-shrink-0 border-[1.5px] flex items-center justify-center ${checked ? 'bg-[#5b5ef4] border-[#5b5ef4]' : 'border-white/18'}`}>
        {checked && <svg width="7" height="7" viewBox="0 0 7 7" fill="none"><path d="M1 3.5l1.5 1.5L6 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </div>
      <span className="text-[11px] text-white/55 flex-1">{name}</span>
      <span className="text-[9.5px] text-white/22 font-mono">{size}</span>
    </div>
  )
}

// ════ CODE LINE ════
export function CodeLine({ num, code, highlight, tag }: {
  num: string | number
  code: React.ReactElement
  highlight?: boolean
  tag?: string
}) {
  return (
    <div className="flex items-center relative" style={{ position: 'relative' }}>
      {highlight && <div className="absolute inset-0 bg-[#5b5ef4]/10 pointer-events-none"></div>}
      <span className="w-[26px] text-right text-white/14 text-[10px] pr-2.25 flex-shrink-0">{num}</span>
      <span className="text-[10.5px] text-white/50 whitespace-nowrap">{code}</span>
      {tag && <div className="absolute -top-4 bg-[#1e1e2e] border border-[#5b5ef4]/40 rounded px-1.75 py-0.5 text-[9.5px] font-semibold text-white/75 font-sans whitespace-nowrap z-5" style={{ right: tag === 'MEnotkrish' ? '6px' : '34px' }}>{tag}</div>}
    </div>
  )
}

// ════ MESSAGE ════
export function Message({ avatar, bg, name, time, text, opacity }: {
  avatar: string
  bg: string
  name: string
  time: string
  text: string
  opacity?: number
}) {
  return (
    <div className="flex items-start gap-2" style={{ opacity: opacity || 1 }}>
      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-white" style={{ background: bg }}>
        {avatar}
      </div>
      <div>
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="text-[11px] font-bold text-white/70">{name}</span>
          <span className="text-[9.5px] text-white/22 font-mono">{time}</span>
        </div>
        <div className="text-[11px] text-white/35 leading-1.45 truncate max-w-[210px]">{text}</div>
      </div>
    </div>
  )
}

// ════ CARD FOOTER ICONS ════
function IconSlash() {
  return <svg className="w-3.25 h-3.25 flex-shrink-0" style={{ opacity: 0.45 }} viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M2 6.5l3-3M2 6.5l3 3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

function IconEmbeds() {
  return <svg className="w-3.25 h-3.25 flex-shrink-0" style={{ opacity: 0.45 }} viewBox="0 0 13 13" fill="none"><rect x="2" y="2" width="9" height="9" rx="1.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.1"/><path d="M5 6.5h3M6.5 5v3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.1" strokeLinecap="round"/></svg>
}

function IconActivity() {
  return <svg className="w-3.25 h-3.25 flex-shrink-0" style={{ opacity: 0.45 }} viewBox="0 0 13 13" fill="none"><path d="M2 6.5l2 2L11 2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

function IconResource() {
  return <svg className="w-3.25 h-3.25 flex-shrink-0" style={{ opacity: 0.45 }} viewBox="0 0 13 13" fill="none"><path d="M6.5 2v9M3 9l3.5 2 3.5-2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

function IconDebug() {
  return <svg className="w-3.25 h-3.25 flex-shrink-0" style={{ opacity: 0.45 }} viewBox="0 0 13 13" fill="none"><path d="M3 4h7M3 6.5h5M3 9h3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round"/></svg>
}

function IconAI() {
  return <svg className="w-3.25 h-3.25 flex-shrink-0" style={{ opacity: 0.45 }} viewBox="0 0 13 13" fill="none"><path d="M2 4h9M2 6.5h6M2 9h4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round"/><path d="M10 8l1.5 1.5-1.5 1.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
}