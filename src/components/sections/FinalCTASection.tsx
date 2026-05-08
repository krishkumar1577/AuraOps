import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RollingButton from "../ui/RollingButton";

gsap.registerPlugin(ScrollTrigger)

interface FinalCTASectionProps {
  onCtaClick?: () => void
}

export function FinalCTASection({ onCtaClick }: FinalCTASectionProps) {
  // GSAP: Text and buttons fade in on scroll
  useEffect(() => {
    const headline = document.querySelector('[data-final-cta-headline]');
    const subheading = document.querySelector('[data-final-cta-subheading]');
    const buttons = document.querySelector('[data-final-cta-buttons]');
    const badge = document.querySelector('[data-final-cta-badge]');

    const elements = [headline, subheading, buttons, badge].filter(Boolean);
    if (elements.length > 0) {
      gsap.set(elements, {
        opacity: 0,
        y: 30,
      });

      const timer = setTimeout(() => {
        gsap.to(elements, {
          scrollTrigger: {
            trigger: '[data-final-cta-section]',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          duration: 0.35,
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: 'power3.out',
        });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <section data-final-cta-section className="w-screen bg-gradient-to-b from-canvas to-black pb-16 pt-0 px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main Headline */}
        <h2 data-final-cta-headline className="display-lg mb-6 leading-tight">
          Ready to ship AI agents in seconds?
        </h2>

        {/* Subheading */}
        <p data-final-cta-subheading className="body-lg text-ink-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Stop wasting weeks on deployment infrastructure. AuraOps handles it. You focus on building.
        </p>

        {/* CTA Buttons */}
        <div data-final-cta-buttons className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <RollingButton
            label="Try Free (No Credit Card)"
            variant="primary"
            onClick={onCtaClick}
          />
          <RollingButton
            label="Watch 2-min Demo"
            variant="ghost"
          />
        </div>

        {/* Trust Badge */}
        <p data-final-cta-badge className="body-copy text-ink-muted">
          Used by 16 founders. 47 agents deployed. Join the waitlist.
        </p>
      </div>
    </section>
  )
}
