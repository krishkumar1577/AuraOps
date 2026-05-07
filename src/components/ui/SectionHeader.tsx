import React from 'react'
import Badge from './Badge'

interface SectionHeaderProps {
  badge?: {
    label: string
    variant?: 'default' | 'muted'
  } | React.ReactNode
  heading: React.ReactNode
  subheading?: React.ReactNode
  headingClassName?: string
  subheadingClassName?: string
  centered?: boolean
}

export default function SectionHeader({
  badge,
  heading,
  subheading,
  headingClassName = 'section-title mb-6',
  subheadingClassName = 'body-copy text-secondary mb-10 max-w-lg',
  centered = true,
}: SectionHeaderProps): React.ReactElement {
  const renderBadge = () => {
    if (!badge) return null

    if (React.isValidElement(badge)) {
      return <div className="mb-8">{badge}</div>
    }

    if (typeof badge === 'object' && 'label' in badge) {
      return (
        <div className="mb-8">
          <Badge label={badge.label} variant={badge.variant} />
        </div>
      )
    }

    return null
  }

  return (
    <div className={centered ? 'flex flex-col items-center text-center' : ''}>
      {renderBadge()}

      <h2 className={`${headingClassName} reveal`}>{heading}</h2>

      {subheading && (
        <p 
          className={`${subheadingClassName} reveal`}
          style={{ animationDelay: '0.2s' }}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}

