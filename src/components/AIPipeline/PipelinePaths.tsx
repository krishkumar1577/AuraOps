'use client'

import { useMemo } from 'react'
import { NODES } from './constants'
import { getCurve, approxPathLength } from './pathUtils'

interface PipelinePathsProps {
  done: string[]
  runningId: string | null
  canvasWidth: number
  canvasHeight: number
}

export default function PipelinePaths({
  done,
  runningId,
  canvasWidth,
  canvasHeight,
}: PipelinePathsProps) {
  const nmap = useMemo(() => Object.fromEntries(NODES.map(n => [n.id, n])), [])

  const edges = useMemo(() => {
    const result: Array<{
      key: string
      fromId: string
      toId: string
      curve: ReturnType<typeof getCurve>
      isActive: boolean
      isAgentEdge: boolean
    }> = []

    NODES.forEach(to => {
      if (!to.deps) return
      to.deps.forEach(fromId => {
        const from = nmap[fromId]
        if (!from) return
        const x1 = Math.round(from.x * canvasWidth)
        const y1 = Math.round(from.y * canvasHeight)
        const x2 = Math.round(to.x * canvasWidth)
        const y2 = Math.round(to.y * canvasHeight)
        const curve = getCurve(x1, y1, x2, y2)
        const isActive = done.includes(fromId) && (done.includes(to.id) || runningId === to.id)
        const isAgentEdge = from.type === 'agent' || to.type === 'agent'
        result.push({ key: `${fromId}_${to.id}`, fromId, toId: to.id, curve, isActive, isAgentEdge })
      })
    })
    return result
  }, [done, runningId, canvasWidth, canvasHeight, nmap])

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      style={{ zIndex: 1 }}
    >
      <defs>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="sharpglow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {edges.filter(e => e.isActive).map(e => {
          const gradId = `bg_${e.key}`
          const { curve: c, isAgentEdge } = e
          const mid1 = isAgentEdge ? '#c4b5fd' : '#86efac'
          const mid2 = isAgentEdge ? 'rgba(230,220,255,1)' : 'rgba(220,255,230,1)'
          return (
            <linearGradient
              key={gradId}
              id={gradId}
              gradientUnits="userSpaceOnUse"
              x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
            >
              <stop offset="0%" stopColor="transparent" />
              <stop offset="35%" stopColor={mid1} />
              <stop offset="50%" stopColor={mid2} />
              <stop offset="65%" stopColor={mid1} />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          )
        })}
      </defs>

      {/* styles for bolt animations */}
      <style>
        {edges.filter(e => e.isActive).map(e => {
          const L = approxPathLength(e.curve)
          const segLen = Math.min(32, L * 0.18)
          const aName = `ba_${e.key}`.replace(/[^a-z0-9_]/gi, '_')
          return `@keyframes ${aName}{0%{stroke-dashoffset:${L + segLen}}100%{stroke-dashoffset:${-segLen}}}`
        }).join('\n')}
      </style>

      {edges.map(e => {
        const { curve: c, isActive, isAgentEdge, key } = e
        const gCol = isAgentEdge ? 'rgba(167,139,250,' : 'rgba(74,222,128,'
        const brightCol = isAgentEdge ? 'rgba(210,195,255,0.95)' : 'rgba(167,243,185,0.95)'
        const L = approxPathLength(c)
        const segLen = Math.min(32, L * 0.18)
        const aName = `ba_${key}`.replace(/[^a-z0-9_]/gi, '_')

        return (
          <g key={key}>
            {/* dim dashed base */}
            <path
              d={c.d} fill="none"
              stroke={isAgentEdge ? 'rgba(167,139,250,0.06)' : 'rgba(255,255,255,0.05)'}
              strokeWidth="1.5"
              strokeDasharray="3 6"
            />
            {isActive && (
              <>
                {/* outer glow */}
                <path d={c.d} fill="none" stroke={`${gCol}0.18)`} strokeWidth="5" filter="url(#glow)" />
                {/* mid glow */}
                <path d={c.d} fill="none" stroke={`${gCol}0.45)`} strokeWidth="2" filter="url(#sharpglow)" />
                {/* sharp core */}
                <path d={c.d} fill="none" stroke={brightCol} strokeWidth="1" />
                {/* travelling bolt */}
                <path
                  d={c.d} fill="none"
                  stroke={`url(#bg_${key})`}
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeDasharray={`${segLen} ${L + segLen}`}
                  strokeDashoffset={L + segLen}
                  filter="url(#sharpglow)"
                  style={{ animation: `${aName} 0.9s linear infinite` }}
                />
              </>
            )}
          </g>
        )
      })}
    </svg>
  )
}
