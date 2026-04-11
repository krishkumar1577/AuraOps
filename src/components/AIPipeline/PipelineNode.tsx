'use client'

import { NodeIcons } from './NodeIcons'
import type { PipelineNode, NodeState } from './types'

interface PipelineNodeProps {
  node: PipelineNode
  state: NodeState
  canvasWidth: number
  canvasHeight: number
}

const CHECK_ICON = (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <path d="M1.5 4l2 2L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function PipelineNode({ node, state, canvasWidth, canvasHeight }: PipelineNodeProps) {
  const cx = Math.round(node.x * canvasWidth)
  const cy = Math.round(node.y * canvasHeight)
  const isAgent = node.type === 'agent'

  const Icon = NodeIcons[node.id]

  /* box border/shadow based on state */
  const boxStateStyle = (): React.CSSProperties => {
    if (state === 'running') {
      return isAgent
        ? { borderColor: 'rgba(167,139,250,0.85)', boxShadow: '0 0 0 4px rgba(167,139,250,0.12),0 0 32px rgba(167,139,250,0.32)' }
        : { borderColor: 'rgba(74,222,128,0.75)',  boxShadow: '0 0 0 3px rgba(74,222,128,0.1),0 0 28px rgba(74,222,128,0.28)' }
    }
    if (state === 'done') {
      return isAgent
        ? { borderColor: 'rgba(167,139,250,0.45)', boxShadow: '0 0 12px rgba(167,139,250,0.18)' }
        : { borderColor: 'rgba(74,222,128,0.4)',   boxShadow: '0 0 0 2px rgba(74,222,128,0.07),0 0 14px rgba(74,222,128,0.14)' }
    }
    return { borderColor: isAgent ? 'rgba(167,139,250,0.25)' : 'rgba(255,255,255,0.09)' }
  }

  const labelColor = () => {
    if (state === 'running') return isAgent ? 'rgba(200,180,255,0.95)' : 'rgba(74,222,128,0.85)'
    if (state === 'done')    return isAgent ? 'rgba(167,139,250,0.6)'  : 'rgba(74,222,128,0.5)'
    return isAgent ? 'rgba(167,139,250,0.4)' : 'rgba(255,255,255,0.28)'
  }

  const subColor = () => {
    if (state === 'done') return isAgent ? 'rgba(167,139,250,0.35)' : 'rgba(74,222,128,0.32)'
    return 'rgba(255,255,255,0.14)'
  }

  return (
    <div
      className="absolute flex flex-col items-center"
      style={{ left: cx - 29, top: cy - 29, zIndex: 10 }}
    >
      {/* ── box ── */}
      <div
        className="relative flex items-center justify-center transition-all duration-300"
        style={{
          width: 58, height: 58,
          background: 'linear-gradient(145deg,#0e0e18,#07070f)',
          border: '1.5px solid',
          borderRadius: isAgent ? 12 : 14,
          transform: isAgent ? 'rotate(45deg)' : undefined,
          clipPath: isAgent ? undefined : 'polygon(10px 0%,calc(100% - 10px) 0%,100% 10px,100% calc(100% - 10px),calc(100% - 10px) 100%,10px 100%,0% calc(100% - 10px),0% 10px)',
          animation: state === 'running'
            ? isAgent ? 'agentPulse 1.2s ease-in-out infinite' : 'nodePulse 1.2s ease-in-out infinite'
            : undefined,
          ...boxStateStyle(),
        }}
      >
        {/* inner sheen */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(145deg,rgba(255,255,255,0.04),transparent 60%)',
            borderRadius: 'inherit',
            clipPath: 'inherit',
          }}
        />

        {/* spinner */}
        {state === 'running' && (
          <div
            className="absolute pointer-events-none"
            style={{
              inset: -6, borderRadius: '50%',
              border: '1.5px solid transparent',
              borderTopColor: isAgent ? 'rgba(167,139,250,0.9)' : 'rgba(74,222,128,0.9)',
              animation: 'spin 0.75s linear infinite',
            }}
          />
        )}

        {/* check badge */}
        {state === 'done' && (
          <div
            className="absolute flex items-center justify-center"
            style={{
              top: 4, right: 1,
              width: 16, height: 16,
              borderRadius: '50%',
              background: '#22c55e',
              border: '1.5px solid #000',
              transform: isAgent ? 'scale(1) rotate(-45deg)' : 'scale(1)',
              zIndex: 20,
            }}
          >
            {CHECK_ICON}
          </div>
        )}

        {/* icon — counter-rotate for agent diamond */}
        <div style={{ transform: isAgent ? 'rotate(-45deg)' : undefined, position: 'relative', zIndex: 1 }}>
          {Icon ? <Icon isAgent={isAgent} /> : null}
        </div>
      </div>

      {/* label */}
      <div
        className="mt-2 text-center whitespace-nowrap transition-colors duration-300"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9.5, fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: labelColor(),
        }}
      >
        {node.label}
      </div>

      {/* sublabel */}
      <div
        className="text-center transition-colors duration-300"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 8, letterSpacing: '0.02em',
          height: 12, color: subColor(),
        }}
      >
        {node.sub}
      </div>
    </div>
  )
}
