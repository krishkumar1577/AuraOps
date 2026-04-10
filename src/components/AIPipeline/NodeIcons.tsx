import type { FC } from 'react'

interface IconProps {
  isAgent?: boolean
}

const s = (opacity = 0.6) => `rgba(255,255,255,${opacity})`
const a = (opacity = 0.85) => `rgba(167,139,250,${opacity})`

export const NodeIcons: Record<string, FC<IconProps>> = {
  git: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h12M4 10l4-4M4 10l4 4" stroke={s()} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="15" cy="10" r="1.8" fill={s()} />
    </svg>
  ),
  ci: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 5v10M5 10h6M15 7l-4 3 4 3" stroke={s()} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  lint: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 7h10M5 10.5h7M5 14h4" stroke={s()} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 12l2.5 2.5" stroke={s()} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  test: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3.5" y="3.5" width="13" height="13" rx="2.5" stroke={s()} strokeWidth="1.4"/>
      <path d="M7 10l2.5 2.5L13 7.5" stroke={s()} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  sec: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 3.5l6 2.2v4.5c0 2.8-2.4 5.4-6 6.5-3.6-1.1-6-3.7-6-6.5V5.7L10 3.5z" stroke={s()} strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M7.5 10l2 2L13 8" stroke={s()} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  qa_agent: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="8" r="3" stroke={a()} strokeWidth="1.4"/>
      <path d="M4.5 16.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke={a()} strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M15.5 5.5l1.5-1.5M15.5 12l1.5 1.5" stroke={a(0.55)} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  build: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3.5" y="3.5" width="13" height="13" rx="2.5" stroke={s()} strokeWidth="1.4"/>
      <path d="M7 10h6M10 7v6" stroke={s()} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  reg: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 4.5l6.5 3.5v4L10 15.5 3.5 12V8L10 4.5z" stroke={s()} strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M10 10v5.5M3.5 8l6.5 4 6.5-4" stroke={s(0.5)} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  infra: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="11" width="4" height="5.5" rx="1" stroke={a()} strokeWidth="1.3"/>
      <rect x="8" y="7.5" width="4" height="9" rx="1" stroke={a()} strokeWidth="1.3"/>
      <rect x="13" y="3.5" width="4" height="13" rx="1" stroke={a()} strokeWidth="1.3"/>
    </svg>
  ),
  stage: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="6.5" stroke={s()} strokeWidth="1.4"/>
      <path d="M7.5 10h5M10 7.5v5" stroke={s()} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  smoke: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="6.5" stroke={s()} strokeWidth="1.4"/>
      <path d="M7.5 10l2 2L13 7.5" stroke={s()} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  canary: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 14 Q10 4 15.5 14" stroke={s()} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 14h8" stroke={s()} strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="10" cy="9" r="1.5" fill={s()} />
    </svg>
  ),
  obs: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="2.8" stroke={a(0.9)} strokeWidth="1.4"/>
      <circle cx="10" cy="10" r="5.5" stroke={a(0.5)} strokeWidth="1.1" strokeDasharray="2.5 2"/>
      <circle cx="10" cy="10" r="8" stroke={a(0.25)} strokeWidth="1" strokeDasharray="1.5 3"/>
    </svg>
  ),
}
