'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import PipelinePaths from './PipelinePaths'
import PipelineNodeEl from './PipelineNode'
import RollingButton from '../../ui/RollingButton'
import { NODES, EXEC_ORDER, DURATIONS, STATUS_MSGS, CANVAS_HEIGHT } from './constants'
import type { NodeState } from './types'

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
  @keyframes nodePulse {
    0%,100% { box-shadow: 0 0 0 3px rgba(247,248,248,0.08), 0 0 20px rgba(247,248,248,0.2); }
    50%      { box-shadow: 0 0 0 6px rgba(247,248,248,0.16), 0 0 40px rgba(247,248,248,0.38); }
  }
  @keyframes agentPulse {
    0%,100% { box-shadow: 0 0 0 4px rgba(94,106,210,0.1), 0 0 24px rgba(94,106,210,0.25); }
    50%      { box-shadow: 0 0 0 8px rgba(94,106,210,0.18), 0 0 44px rgba(94,106,210,0.42); }
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
        className="relative w-full min-h-screen overflow-hidden bg-black px-7 py-11 font-sans"
        style={{ paddingBottom: '44px', fontFamily: 'Inter, sans-serif' }}
      >
        {/* faint grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(247,248,248,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(247,248,248,0.018) 1px,transparent 1px)',
            backgroundSize: '52px 52px',
            maskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%,black 40%,transparent 90%)',
            zIndex: 0,
          }}
        />

        {/* ── INTRO SECTION WITH BUTTON ── */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center mb-12">
          <h1 className="text-display-lg text-ink mb-4" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
            The Workflow Orchestration
          </h1>
          <p className="body-copy text-[rgba(247,248,248,0.6)] leading-relaxed max-w-2xl mb-8">
            Watch as AuraOps synchronizes your logic, optimizes model layers, and locks your environment. From local commit to global agent deployment in one movement.
          </p>
          <div>
            <RollingButton 
              label={isRunning ? 'Running...' : done.length === EXEC_ORDER.length ? 'Relaunch' : 'Launch Demo'}
              variant="primary"
              onClick={launch}
              disabled={isRunning}
            />
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
          className="relative flex items-center gap-3 rounded-xl bg-surface-1 border border-hairline mt-4 px-4.5 py-3 z-20"
          style={{
            marginTop: 16,
          }}
        >
          <span
            className="w-[6px] h-[6px] rounded-full flex-shrink-0 transition-all duration-300"
            style={{
              background: statusActive ? 'var(--color-secondary)' : done.length === EXEC_ORDER.length ? 'var(--color-secondary)' : 'var(--color-hairline)',
              boxShadow: statusActive ? '0 0 8px var(--color-secondary)' : done.length === EXEC_ORDER.length ? '0 0 8px var(--color-secondary)' : undefined,
              animation: statusActive ? 'sdotPulse 0.9s ease-in-out infinite' : undefined,
            }}
          />
          <span
            className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis transition-colors duration-300"
            style={{
              fontFamily: "var(--font-family-mono)",
              fontSize: 11,
              color: statusActive ? 'var(--color-secondary)' : done.length === EXEC_ORDER.length ? 'var(--color-ink-muted)' : 'var(--color-ink-tertiary)',
            }}
          >
            {statusText}
          </span>
          <span
            className="flex-shrink-0"
            style={{
              fontFamily: "var(--font-family-mono)",
              fontSize: 10,
              color: 'var(--color-ink-tertiary)',
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
