import { useEffect, useRef, useState } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  language: string
  code: string
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (codeRef.current) {
      delete codeRef.current.dataset.highlighted
      hljs.highlightElement(codeRef.current)
    }
  }, [code, language])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group my-6 rounded-xl overflow-hidden border border-white/10 bg-[#1e1e1e] shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{language}</span>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[10px] font-mono text-white/40 hover:text-white transition-colors uppercase tracking-widest"
        >
          {copied ? (
            <>
              <Check size={12} className="text-[#E4FF9C]" />
              <span className="text-[#E4FF9C]">Copied</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto text-sm font-mono leading-relaxed text-white">
        <code ref={codeRef} className={`language-${language} !p-5 !bg-transparent block`}>
          {code}
        </code>
      </pre>
    </div>
  )
}
