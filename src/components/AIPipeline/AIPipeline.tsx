'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import PipelinePaths from './PipelinePaths'
import PipelineNodeEl from './PipelineNode'
import RollingButton from '../RollingButton'
import { NODES, EXEC_ORDER, DURATIONS, STATUS_MSGS, CANVAS_HEIGHT } from './constants'
import type { NodeState } from './types'

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
  @keyframes nodePulse {
    0%,100% { box-shadow: 0 0 0 3px rgba(74,222,128,0.08), 0 0 20px rgba(74,222,128,0.2); }
    50%      { box-shadow: 0 0 0 6px rgba(74,222,128,0.16), 0 0 40px rgba(74,222,128,0.38); }
  }
  @keyframes agentPulse {
    0%,100% { box-shadow: 0 0 0 4px rgba(167,139,250,0.1), 0 0 24px rgba(167,139,250,0.25); }
    50%      { box-shadow: 0 0 0 8px rgba(167,139,250,0.18), 0 0 44px rgba(167,139,250,0.42); }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes sdotPulse {
    0%,100% { opacity: 1; }
    50%      { opacity: 0.35; }
  }
  @keyframes btnDot {
    0%,100% { opacity: 1; transform: scale(1); }
    50%      { opacity: 0.3; transform: scale(0.6); }
  }
`

function sleep(ms: number) {
  return new Promise<void>(resolve => setTimeout(resolve, ms))
}

export default function AIPipeline() {
  const [nodeStates, setNodeStates] = useState<Record<string, NodeState>>(() =>
    Object.fromEntries(NODES.map(n => [n.id, 'pending']))
  )
  const [done, setDone] = useState<string[]>([])
  const [runningId, setRunningId] = useState<string | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [statusText, setStatusText] = useState('Ready — pipeline pre-configured')
  const [statusActive, setStatusActive] = useState(false)
  const [stageLabel, setStageLabel] = useState('')
  const [canvasWidth, setCanvasWidth] = useState(900)
  const canvasRef = useRef<HTMLDivElement>(null)

  /* observe canvas width */
  useEffect(() => {
    const el = canvasRef.current
    if (!el) return
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) setCanvasWidth(entry.contentRect.width)
    })
    ro.observe(el)
    setCanvasWidth(el.offsetWidth)
    return () => ro.disconnect()
  }, [])

  const reset = useCallback(() => {
    setNodeStates(Object.fromEntries(NODES.map(n => [n.id, 'pending'])))
    setDone([])
    setRunningId(null)
    setStatusText('Ready — pipeline pre-configured')
    setStatusActive(false)
    setStageLabel('')
  }, [])

  const launch = useCallback(async () => {
    if (isRunning) return
    setIsRunning(true)
    reset()
    setStatusActive(true)

    const doneList: string[] = []

    for (let i = 0; i < EXEC_ORDER.length; i++) {
      const id = EXEC_ORDER[i]

      setNodeStates(prev => ({ ...prev, [id]: 'running' }))
      setRunningId(id)
      setStatusText('› ' + (STATUS_MSGS[id] ?? id))
      setStageLabel(`${i + 1}/${EXEC_ORDER.length}`)

      await sleep(DURATIONS[id] ?? 600)

      doneList.push(id)
      setDone([...doneList])
      setNodeStates(prev => ({ ...prev, [id]: 'done' }))
      setRunningId(null)

      await sleep(60)
    }

    setStatusText('✓ ai-model:v4.1.0 live in production — all systems nominal')
    setStatusActive(false)
    setStageLabel('done')
    setIsRunning(false)
  }, [isRunning, reset])

  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      <div
        className="relative w-full min-h-screen overflow-hidden"
        style={{ background: '#000', padding: '32px 28px 44px', fontFamily: 'Inter, sans-serif' }}
      >
        {/* faint grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)',
            backgroundSize: '52px 52px',
            maskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%,black 40%,transparent 90%)',
            zIndex: 0,
          }}
        />

        {/* ── INTRO SECTION WITH BUTTON ── */}
          <div className="relative z-10 mb-6">
            <h1 className="section-title text-white tracking-[-2.2px]" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              AuraOps Orchestration Engine
            </h1>
          </div>
        <div className="relative max-w-7xl mx-auto px-8 mb-8" style={{ zIndex: 2 }}>
          <div className="relative flex items-start justify-between gap-8 mb-6">
            <div className="flex-1 max-w-2xl">
              <p className="body-copy text-secondary leading-relaxed">
                Watch as AuraOps analyzes your repository, optimizes dependencies, separates model weights from logic, and orchestrates a deterministic deployment pipeline to GPU clouds. From code to production in one command.
              </p>
            </div>
            
            <div className="flex-shrink-0 pt-2">
              <RollingButton 
                label={isRunning ? 'Running...' : done.length === EXEC_ORDER.length ? 'Relaunch' : 'Launch'}
                variant="primary"
                onClick={launch}
                disabled={isRunning}
              />
            </div>
          </div>
        </div>

        {/* ── CANVAS ── */}
        <div
          ref={canvasRef}
          className="relative w-full"
          style={{ height: CANVAS_HEIGHT, zIndex: 1 }}
        >
          {canvasWidth > 0 && (
            <>
              <PipelinePaths
                done={done}
                runningId={runningId}
                canvasWidth={canvasWidth}
                canvasHeight={CANVAS_HEIGHT}
              />
              {NODES.map(node => (
                <PipelineNodeEl
                  key={node.id}
                  node={node}
                  state={nodeStates[node.id] ?? 'pending'}
                  canvasWidth={canvasWidth}
                  canvasHeight={CANVAS_HEIGHT}
                />
              ))}
            </>
          )}
        </div>

        {/* ── STATUS BAR ── */}
        <div
          className="relative flex items-center gap-3 rounded-xl"
          style={{
            zIndex: 2, marginTop: 16,
            background: '#06060e',
            border: '1px solid rgba(255,255,255,0.07)',
            padding: '12px 18px',
          }}
        >
          <span
            className="w-[6px] h-[6px] rounded-full flex-shrink-0 transition-all duration-300"
            style={{
              background: statusActive ? '#4ade80' : done.length === EXEC_ORDER.length ? '#22c55e' : 'rgba(255,255,255,0.18)',
              boxShadow: statusActive ? '0 0 8px rgba(74,222,128,0.55)' : done.length === EXEC_ORDER.length ? '0 0 8px rgba(34,197,94,0.6)' : undefined,
              animation: statusActive ? 'sdotPulse 0.9s ease-in-out infinite' : undefined,
            }}
          />
          <span
            className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis transition-colors duration-300"
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 11,
              color: statusActive ? 'rgba(74,222,128,0.85)' : done.length === EXEC_ORDER.length ? 'rgba(74,222,128,0.7)' : 'rgba(255,255,255,0.35)',
            }}
          >
            {statusText}
          </span>
          <span
            className="flex-shrink-0"
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 10,
              color: 'rgba(255,255,255,0.18)',
              letterSpacing: '0.06em',
            }}
          >
            {stageLabel}
          </span>
        </div>
      </div>
    </>
  )
}
