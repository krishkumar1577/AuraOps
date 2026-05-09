import { useState, useEffect } from 'react'

interface TerminalLine {
  text: string
  type: 'command' | 'info' | 'success' | 'warning' | 'error'
  delay: number
}

const SEQUENCE: TerminalLine[] = [
  { text: 'npx auraops deploy --prod', type: 'command', delay: 0 },
  { text: '→ Scanning local environment...', type: 'info', delay: 800 },
  { text: '→ Identified CUDA Toolkit v12.4.1', type: 'info', delay: 1200 },
  { text: '→ Checksumming weights [llama-3-70b-q4.gguf] ...', type: 'info', delay: 1800 },
  { text: '→ Match found in registry. No upload needed.', type: 'success', delay: 2400 },
  { text: '→ Provisioning deterministic GPU node (Lambda Cloud)...', type: 'info', delay: 3000 },
  { text: '→ Syncing byte-identical environment layers...', type: 'info', delay: 3600 },
  { text: '✓ Deployment complete in 4.2s', type: 'success', delay: 4200 },
  { text: '➜ auraops.sh/agent-v4-91bc (Live)', type: 'command', delay: 4800 },
]

export default function CodeTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0)

  useEffect(() => {
    if (visibleLines < SEQUENCE.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1)
      }, SEQUENCE[visibleLines].delay - (visibleLines > 0 ? SEQUENCE[visibleLines - 1].delay : 0))
      return () => clearTimeout(timer)
    } else {
      const loopTimer = setTimeout(() => {
        setVisibleLines(0)
      }, 5000)
      return () => clearTimeout(loopTimer)
    }
  }, [visibleLines])

  return (
    <div className="w-full max-w-2xl mx-auto bg-surface-1 border border-hairline rounded-xl overflow-hidden shadow-2xl reveal" style={{ animationDelay: '1.4s' }}>
      <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-hairline">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest">zsh — auraops deploy</span>
        </div>
        <div className="w-12" /> {/* spacer */}
      </div>

      <div className="p-6 font-mono text-[13px] leading-relaxed h-[280px] overflow-hidden">
        <div className="flex flex-col gap-2">
          {SEQUENCE.slice(0, visibleLines).map((line, idx) => (
            <div key={idx} className="flex gap-3">
              <span className="text-secondary opacity-50 shrink-0 select-none">
                {line.type === 'command' ? '$' : idx === SEQUENCE.length - 1 ? '➜' : ' '}
              </span>
              <span className={`
                ${line.type === 'command' ? 'text-ink font-semibold' : ''}
                ${line.type === 'info' ? 'text-ink-muted' : ''}
                ${line.type === 'success' ? 'text-secondary' : ''}
              `}>
                {line.text}
              </span>
            </div>
          ))}
          
          {visibleLines < SEQUENCE.length && (
            <div className="flex gap-3">
              <span className="text-secondary opacity-50 shrink-0 select-none">$</span>
              <span className="w-2 h-4 bg-secondary/40 animate-pulse" />
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-secondary/5 pointer-events-none blur-[60px]" />
    </div>
  )
}
