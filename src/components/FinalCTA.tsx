import React from 'react'
import RollingButton from './RollingButton'

export default function FinalCTA(): React.ReactElement {
  return (
    <section className="bg-black min-h-screen py-24 px-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* ── Gradient Background Accent ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 1200px 400px at 50% 0%, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* ── Badge ── */}
        <div className="inline-flex items-center gap-2 mb-8 bg-white/5 border border-white/15 rounded-full px-4 py-2 backdrop-blur-sm">
          <span className="text-xs font-bold text-white/70 tracking-widest">READY TO SHIP?</span>
        </div>

        {/* ── Main Headline ── */}
        <h2 className="text-6xl md:text-7xl font-black leading-tight mb-6 text-white">
          Eliminate the Infrastructure Tax
          <br />
          <span className="text-white/40">Ship AI Faster</span>
        </h2>

        {/* ── Subheading ── */}
        <p className="text-base md:text-lg text-white/60 mb-12 max-w-2xl leading-relaxed">
          Join engineering teams shipping production AI at 10x speed. Start with a free tier, scale with confidence, migrate infra to GPU clouds in seconds.
        </p>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-3 gap-6 mb-16 w-full max-w-2xl">
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-black text-white mb-2">30s</div>
            <div className="text-sm text-white/50">End-to-end deployments</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-black text-white mb-2">0</div>
            <div className="text-sm text-white/50">DevOps gatekeeping</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-black text-white mb-2">60%</div>
            <div className="text-sm text-white/50">Time saved vs manual</div>
          </div>
        </div>

        {/* ── CTA Buttons ── */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full justify-center">
          <RollingButton label="Get Started Free" variant="primary" href="#" />
          <RollingButton label="Request Demo" variant="ghost" href="#" />
        </div>

        {/* ── Floating Cards Accent (Optional) ── */}
        <div className="absolute bottom-32 left-8 w-48 h-32 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm opacity-20 pointer-events-none" />
        <div className="absolute bottom-16 right-12 w-64 h-48 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm opacity-20 pointer-events-none" />
      </div>
    </section>
  )
}
