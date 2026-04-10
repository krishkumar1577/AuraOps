import type { CurvePoints } from './types'

export function getCurve(
  x1: number, y1: number,
  x2: number, y2: number
): CurvePoints {
  const dx = x2 - x1
  const dy = y2 - y1
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  let cpx = mx
  let cpy = my

  if (Math.abs(dy) > 50) {
    cpx = mx + (dx > 0 ? Math.abs(dy) * 0.28 : -Math.abs(dy) * 0.28)
  }
  if (Math.abs(dx) > 120 && Math.abs(dy) < 30) {
    cpy = my + dy * 0.5 + (dx > 0 ? -24 : 24)
  }

  return {
    x1, y1, x2, y2, cpx, cpy,
    d: `M${x1},${y1} Q${cpx},${cpy} ${x2},${y2}`,
  }
}

export function approxPathLength(c: CurvePoints): number {
  let len = 0
  let px0 = c.x1
  let py0 = c.y1
  for (let t = 0.05; t <= 1; t += 0.05) {
    const mt = 1 - t
    const nx = mt * mt * c.x1 + 2 * mt * t * c.cpx + t * t * c.x2
    const ny = mt * mt * c.y1 + 2 * mt * t * c.cpy + t * t * c.y2
    len += Math.hypot(nx - px0, ny - py0)
    px0 = nx
    py0 = ny
  }
  return Math.ceil(len)
}
