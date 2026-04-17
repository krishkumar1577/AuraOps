import React, { useState } from 'react'

interface FAQItem {
  id: string
  q: string
  a: string
}

const FAQItems: FAQItem[] = [
  {
    id: '1',
    q: 'What is the Infrastructure Tax?',
    a: 'Hidden deployment costs — DevOps overhead, environment conflicts, CUDA management — consuming 60%+ of sprint time. AuraOps eliminates it.',
  },
  {
    id: '2',
    q: 'How fast are deployments?',
    a: 'End-to-end in under 30 seconds. Model weights separated from images for lightning-fast rebuilds. Near-zero cold starts on GPU infrastructure.',
  },
  {
    id: '3',
    q: 'Can any team member deploy?',
    a: 'Yes. No DevOps expertise required. Environment management is centralized, versioned, and safe for everyone on your team.',
  },
]

export default function CompactFAQ(): React.ReactElement {
  const [openId, setOpenId] = useState<string | null>(FAQItems[0].id)

  return (
    <div className="space-y-2">
      {FAQItems.map((item) => (
        <div key={item.id} className="rounded-lg border border-white/10 overflow-hidden hover:border-white/20 transition-colors">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/5 transition-colors"
          >
            <span className="body-copy font-semibold text-white/80">{item.q}</span>
            <span className="text-white/50 text-lg leading-none">
              {openId === item.id ? '−' : '+'}
            </span>
          </button>
          {openId === item.id && (
            <div className="px-4 py-3 bg-white/5 border-t border-white/10">
              <p className="body-copy text-secondary">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
