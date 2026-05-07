import React from 'react'

interface BadgeProps {
  label: string
  variant?: 'default' | 'muted'
  className?: string
}

export default function Badge({ label, variant = 'default', className = '' }: BadgeProps): React.ReactElement {
  const baseStyles = 'inline-flex items-center justify-center rounded-full transition-all duration-500 hover:scale-105'
  const variantStyles = {
    default: 'bg-primary/5 border border-primary/20 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(124,137,248,0.1)]',
    muted: 'bg-white/5 border border-hairline px-4 py-1.5 backdrop-blur-sm',
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-display text-ink-muted">
        {label}
      </span>
    </div>
  )
}
