export type NodeType = 'node' | 'agent'
export type NodeState = 'pending' | 'running' | 'done' | 'failed'

export interface PipelineNode {
  id: string
  label: string
  sub: string
  type: NodeType
  x: number // 0–1 relative to canvas width
  y: number // 0–1 relative to canvas height
  deps?: string[]
}

export interface CurvePoints {
  x1: number
  y1: number
  x2: number
  y2: number
  cpx: number
  cpy: number
  d: string
}
