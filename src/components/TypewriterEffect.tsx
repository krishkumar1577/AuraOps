import { useState, useEffect } from 'react'

interface TypewriterEffectProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
  style?: React.CSSProperties
}

const TypewriterEffect = ({
  phrases,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
  className = '',
  style = {},
}: TypewriterEffectProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    let timeoutId: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < currentPhrase.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentPhrase.substring(0, displayedText.length + 1))
        }, typingSpeed)
      } else {
        // Pause before deleting
        timeoutId = setTimeout(() => {
          setIsDeleting(true)
        }, pauseDuration)
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1))
        }, deletingSpeed)
      } else {
        // Move to next phrase with a small delay
        timeoutId = setTimeout(() => {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }, 200)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayedText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={className} style={style}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypewriterEffect
