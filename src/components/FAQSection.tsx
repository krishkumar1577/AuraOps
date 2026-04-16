import React, { useState } from 'react'
import RollingButton from './RollingButton'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 'what-is-infrastructure-tax',
    question: 'What is the Infrastructure Tax?',
    answer: 'The Infrastructure Tax is the hidden cost of managing deployment infrastructure — DevOps overhead, environment conflicts, CUDA version management, and manual configuration that consumes 60%+ of development sprint time. AuraOps eliminates it entirely.',
  },
  {
    id: 'how-does-auraops-work',
    question: 'How does AuraOps eliminate deployment friction?',
    answer: 'AuraOps detects your AI frameworks automatically, intelligently handles GPU dependencies, locks environments deterministically, and deploys in seconds. Run a single command — the rest is automated.',
  },
  {
    id: 'frameworks-supported',
    question: 'What AI frameworks are supported?',
    answer: 'AuraOps supports LangChain, PyTorch, TensorFlow, HuggingFace, FastAPI, Llama.cpp, and 10+ other frameworks. We detect your stack automatically and optimize for each.',
  },
  {
    id: 'deployment-time',
    question: 'How fast are deployments?',
    answer: 'End-to-end deployments complete in under 30 seconds. Model weights are separated from application images for lightning-fast rebuilds. Cold starts are near-zero on GPU infrastructure.',
  },
  {
    id: 'team-deployment',
    question: 'Can any team member deploy, or do we need DevOps experts?',
    answer: 'Anyone on your team can deploy. AuraOps eliminates gatekeeping — no DevOps expertise required. Environment management is centralized and versioned, so deployments are safe and reproducible.',
  },
  {
    id: 'version-conflicts',
    question: 'How are CUDA/Torch version conflicts handled?',
    answer: 'AuraOps automatically detects and locks compatible versions across your entire stack. Conflicts are resolved at build time, ensuring reproducible deployments every single time.',
  },
  {
    id: 'existing-pipeline',
    question: 'Can we integrate AuraOps with existing CI/CD pipelines?',
    answer: 'Yes. AuraOps works with your existing GitHub Actions, GitLab CI, Jenkins, or custom pipelines. We provide webhooks, API endpoints, and CLI tools for seamless integration.',
  },
  {
    id: 'cost-pricing',
    question: 'How is AuraOps priced?',
    answer: 'AuraOps offers flexible pricing based on deployment frequency and infrastructure size. We provide free tier for development, flexible scale-as-you-grow plans, and enterprise contracts for organizations.',
  },
  {
    id: 'security',
    question: 'How does AuraOps handle security and compliance?',
    answer: 'All deployments are encrypted in transit and at rest. We support air-gapped deployments, custom VPC routing, and comply with SOC 2, HIPAA, and other enterprise standards.',
  },
  {
    id: 'support',
    question: 'What support options are available?',
    answer: 'Community support via Discord, email support for standard plans, and 24/7 dedicated support for enterprise customers. Response times: <24h community, <4h standard, <1h enterprise.',
  },
]

const FAQItem: React.FC<{ item: FAQItem; isOpen: boolean; onToggle: () => void }> = ({
  item,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className="border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ease-out"
      style={{
        backgroundColor: isOpen ? '#111113' : '#0a0a0a',
        borderColor: isOpen ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.1)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/2 transition-colors duration-200"
      >
        <h3 className="text-left text-[15px] font-semibold text-white/85 leading-relaxed">
          {item.question}
        </h3>
        <div
          className="flex-shrink-0 ml-4 w-5 h-5 flex items-center justify-center text-white/50 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-4 pt-1 border-t border-white/5 animate-in fade-in duration-200">
          <p className="text-[14px] text-white/60 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection(): React.ReactElement {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id)

  return (
    <section className="bg-black min-h-screen py-24 px-8 flex flex-col items-center justify-center">
      {/* ── Badge ── */}
      <div className="inline-flex items-center gap-2 mb-8 bg-white/5 border border-white/15 rounded-full px-4 py-2 backdrop-blur-sm">
        <span className="text-xs font-bold text-white/70 tracking-widest">FREQUENTLY ASKED QUESTIONS</span>
      </div>

      {/* ── Heading ── */}
      <h2 className="text-5xl md:text-6xl font-black text-center max-w-3xl mb-6 leading-tight text-white">
        Everything You Need to Know
      </h2>

      {/* ── Subheading ── */}
      <p className="text-center text-white/50 max-w-2xl mb-16 text-base">
        Get answers to common questions about Infrastructure Tax, AuraOps setup, deployment workflows, and how we help teams ship AI faster.
      </p>

      {/* ── FAQ Grid ── */}
      <div className="w-full max-w-4xl">
        <div className="space-y-3">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>

      {/* ── CTA Below FAQ ── */}
      <div className="mt-20 text-center">
        <p className="text-white/50 text-sm mb-6">Still have questions?</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <RollingButton label="Email us" variant="ghost" href="mailto:support@auraops.dev" />
          <RollingButton label="Join Discord" variant="primary" href="#" />
        </div>
      </div>
    </section>
  )
}
