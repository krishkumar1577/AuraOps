export default function StatusTicker() {
  const stats = [
    { label: 'Global Uptime', value: '99.99%' },
    { label: 'Deployment Latency', value: '< 12s' },
    { label: 'Active GPU Nodes', value: '1,242' },
    { label: 'Environment Drifts Prevented', value: '84k+' },
    { label: 'CUDA Compliance', value: 'Verified' },
    { label: 'Network Latency', value: '14ms' },
  ]

  const doubled = [...stats, ...stats]

  return (
    <div className="w-screen bg-surface-1 border-y border-hairline py-3 overflow-hidden group select-none">
      <div className="flex items-center gap-16 animate-marquee-fast group-hover:pause">
        {doubled.map((stat, i) => (
          <div key={i} className="flex items-center gap-4 whitespace-nowrap">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_var(--color-secondary)]" />
            <span className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest">{stat.label}:</span>
            <span className="text-[11px] font-mono text-ink font-bold">{stat.value}</span>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marqueeFast {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marqueeFast 30s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}} />
    </div>
  )
}
