import React from 'react'

interface BadgeProps {
  label: string
  variant?: 'default' | 'muted'
  className?: string
}

export default function Badge({ label, variant = 'default', className = '' }: BadgeProps): React.ReactElement {
  const baseStyles = 'inline-flex items-center gap-2 rounded-full'
  const variantStyles = {
    default: 'bg-white/5 border border-white/15 px-4 py-2 backdrop-blur-sm',
    muted: 'bg-white/8 border border-white/20 px-5 py-2.5',
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      <span className="system-label">{label}</span>
    </div>
  )
}
