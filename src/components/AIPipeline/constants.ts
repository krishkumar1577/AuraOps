import type { PipelineNode } from './types'

export const CANVAS_HEIGHT = 560

export const NODES: PipelineNode[] = [
  { id: 'git',       label: 'Git Push',    sub: 'webhook',       type: 'node',  x: 0.04, y: 0.48 },
  { id: 'ci',        label: 'CI Trigger',  sub: 'gh-actions',    type: 'node',  x: 0.17, y: 0.48 },
  { id: 'lint',      label: 'Lint',        sub: 'eslint',        type: 'node',  x: 0.30, y: 0.18, deps: ['ci'] },
  { id: 'test',      label: 'Tests',       sub: 'pytest·jest',   type: 'node',  x: 0.30, y: 0.52, deps: ['ci'] },
  { id: 'sec',       label: 'Sec Scan',    sub: 'snyk',          type: 'node',  x: 0.30, y: 0.82, deps: ['ci'] },
  { id: 'qa_agent',  label: 'QA Agent',    sub: 'ai·review',     type: 'agent', x: 0.47, y: 0.35, deps: ['lint', 'test'] },
  { id: 'build',     label: 'Build',       sub: 'docker',        type: 'node',  x: 0.47, y: 0.72, deps: ['test', 'sec'] },
  { id: 'reg',       label: 'Registry',    sub: 'ecr·push',      type: 'node',  x: 0.60, y: 0.72, deps: ['build'] },
  { id: 'infra',     label: 'Infra Agent', sub: 'terraform·ai',  type: 'agent', x: 0.60, y: 0.18, deps: ['qa_agent'] },
  { id: 'stage',     label: 'Staging',     sub: 'k8s·deploy',    type: 'node',  x: 0.73, y: 0.48, deps: ['reg', 'infra'] },
  { id: 'smoke',     label: 'Smoke',       sub: 'e2e·cypress',   type: 'node',  x: 0.85, y: 0.28, deps: ['stage'] },
  { id: 'canary',    label: 'Canary 10%',  sub: 'traffic·split', type: 'node',  x: 0.85, y: 0.68, deps: ['stage'] },
  { id: 'obs',       label: 'Obs Agent',   sub: 'monitor·ai',    type: 'agent', x: 0.95, y: 0.48, deps: ['smoke', 'canary'] },
]

export const EXEC_ORDER = [
  'git', 'ci', 'lint', 'test', 'sec',
  'qa_agent', 'build', 'reg', 'infra',
  'stage', 'smoke', 'canary', 'obs',
]

export const DURATIONS: Record<string, number> = {
  git: 420, ci: 380, lint: 680, test: 900, sec: 720,
  qa_agent: 820, build: 760, reg: 500, infra: 700,
  stage: 640, smoke: 680, canary: 540, obs: 760,
}

export const STATUS_MSGS: Record<string, string> = {
  git:      'Detected push on main — SHA a3f2c9d',
  ci:       'Pipeline triggered — allocating runners',
  lint:     'ESLint + TS check across 312 files',
  test:     'Running 847 unit + integration tests',
  sec:      'Scanning dependencies — Snyk CVE check',
  qa_agent: 'QA Agent reviewing diffs and coverage',
  build:    'Building Docker image ai-model:v4.1.0',
  reg:      'Pushing image to ECR registry',
  infra:    'Infra Agent computing Terraform delta',
  stage:    'Rolling deploy to staging cluster (3 pods)',
  smoke:    'E2E smoke suite against staging env',
  canary:   '10% canary traffic split activated',
  obs:      'Obs Agent monitoring p99 latency + errors',
}
