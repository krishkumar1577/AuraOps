import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useCardHover } from '../../lib/useCardHover'
import Badge from '../ui/Badge'

gsap.registerPlugin(ScrollTrigger)

export function SocialProofSection() {
  // Hover effects for integration badges
  useCardHover('[data-integration-badge]')

  // GSAP: Integration badges scroll reveal
  useEffect(() => {
    const badges = document.querySelectorAll('[data-integration-badge]');
    if (badges && badges.length > 0) {
      gsap.set(badges, {
        opacity: 0,
        scale: 0.9,
      });

      const timer = setTimeout(() => {
        gsap.to(badges, {
          scrollTrigger: {
            trigger: '[data-social-proof-section]',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          duration: 0.35,
          opacity: 1,
          scale: 1,
          stagger: 0.04,
          ease: 'power3.out',
        });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);
  const integrations = [
    { 
      name: 'PyTorch', 
      description: 'Native Tensor Sync',
      logo: 'https://cdn.simpleicons.org/pytorch/FFFFFF'
    },
    { 
      name: 'HuggingFace', 
      description: 'Model Registry Link',
      logo: 'https://cdn.simpleicons.org/huggingface/FFFFFF'
    },
    { 
      name: 'CUDA', 
      description: 'Toolkit Verification',
      logo: 'https://cdn.simpleicons.org/nvidia/FFFFFF'
    },
    { 
      name: 'Docker', 
      description: 'Layer Locking',
      logo: 'https://cdn.simpleicons.org/docker/FFFFFF'
    },
    { 
      name: 'AWS GPU', 
      description: 'H100/A100 Provisioning',
      logo: 'https://cdn.simpleicons.org/amazonaws/FFFFFF'
    },
    { 
      name: 'Lambda', 
      description: 'Instant Node Sync',
      // Using a generic server/lambda icon or text since Lambda Cloud isn't standard in simpleicons
      logo: null,
      customIcon: 'λ'
    },
  ]

  return (
    <section data-social-proof-section id="ecosystem" className="relative w-screen bg-black pb-16 pt-8 px-8 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 reveal">
          <div className="mb-8 flex justify-center">
            <Badge label="Integration Ecosystem" variant="muted" />
          </div>
          <h2 className="text-[40px] md:text-[56px] font-display font-bold text-ink mb-6 tracking-tightest leading-tight">
            Built for the <span className="text-secondary italic">Modern AI Stack.</span>
          </h2>
          <p className="text-xl text-ink-subtle max-w-2xl mx-auto leading-relaxed">
            AuraOps integrates deeply with your existing infrastructure to ensure zero-drift deployments across any cloud provider.
          </p>
        </div>

        {/* Integration Grid - High End Technical Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
          {integrations.map((item, idx) => (
            <div 
              key={item.name} 
              data-integration-badge
              className="group bg-surface-1 border border-hairline rounded-xl p-6 flex flex-col items-center text-center transition-all duration-500 hover:border-secondary/40 reveal"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 mb-6 rounded-lg bg-black border border-hairline flex items-center justify-center group-hover:border-secondary/20 transition-colors overflow-hidden">
                {item.logo ? (
                  <img src={item.logo} alt={item.name} className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                ) : (
                  <span className="text-xl font-display font-bold text-ink-muted group-hover:text-secondary transition-colors">{item.customIcon}</span>
                )}
              </div>
              <h4 className="text-xs font-mono text-ink font-bold mb-2 uppercase tracking-widest">{item.name}</h4>
              <p className="text-[10px] text-ink-tertiary leading-tight">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Footnote */}
        <div className="flex flex-wrap justify-center items-center gap-12 pt-12 border-t border-hairline reveal" style={{ animationDelay: '800ms' }}>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest font-bold">SOC2 Type II Compliant</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest font-bold">GCP Partner Network</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest font-bold">NVIDIA Inception Program</span>
          </div>
        </div>
      </div>
    </section>
  )
}
