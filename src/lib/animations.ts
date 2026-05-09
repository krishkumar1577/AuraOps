import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const easings = {
  outExpo: 'power2.out',
  inOutExpo: 'power2.inOut',
  outBack: 'back.out',
  outElastic: 'elastic.out(1, 0.5)',
  outCirc: 'circ.out',
  sine: 'sine.inOut',
};


export const heroTitleReveal = (selector: string, delay = 0.2) => {
  gsap.from(selector, {
    duration: 0.6,
    opacity: 0,
    yPercent: 120,
    stagger: 0.05,
    ease: easings.outExpo,
    delay,
  });
};

export const navFadeIn = (selector: string) => {
  gsap.from(selector, {
    duration: 1,
    opacity: 0,
    y: -20,
    filter: 'blur(10px)',
    ease: easings.outExpo,
  });
};

export const heroBackgroundParallax = (selector: string) => {
  gsap.to(selector, {
    duration: 2,
    yPercent: -10,
    opacity: 1,
    ease: easings.sine,
  });
};


export const cardCascadeReveal = (selector: string, fromX = -100) => {
  gsap.utils.toArray<HTMLElement>(selector).forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      duration: 0.8,
      opacity: 0,
      x: fromX,
      rotation: -2,
      stagger: 0.15,
      ease: easings.outExpo,
      delay: i * 0.1,
    });
  });
};

export const tableRowReveal = (selector: string) => {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
    duration: 0.6,
    opacity: 0,
    y: 20,
    stagger: 0.1,
    ease: easings.sine,
  });
};

export const cardScaleReveal = (selector: string, staggerAmount = 0.3) => {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
    duration: 0.8,
    opacity: 0,
    scale: 0.85,
    stagger: {
      amount: staggerAmount,
      from: 'center',
    },
    ease: easings.outBack,
  });
};

export const proCardLift = (selector: string) => {
  gsap.to(selector, {
    scrollTrigger: {
      trigger: selector,
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
    yPercent: -5,
    duration: 1.2,
    ease: easings.sine,
  });
};


export interface CounterOptions {
  from: number;
  to: number;
  duration: number;
  formatter?: (value: number) => string;
  onUpdate?: (value: number) => void;
}

export const counterAnimation = (options: CounterOptions) => {
  const counter = { value: options.from };
  const { formatter = (v) => Math.round(v).toString(), onUpdate } = options;

  gsap.to(counter, {
    scrollTrigger: {
      trigger: '[data-counter-trigger]',
      start: 'top 60%',
      toggleActions: 'play none none none',
    },
    value: options.to,
    duration: options.duration,
    ease: easings.inOutExpo,
    onUpdate: () => {
      const formatted = formatter(counter.value);
      const element = document.querySelector('[data-counter-display]');
      if (element) element.textContent = formatted;
      if (onUpdate) onUpdate(counter.value);
    },
  });
};

export const progressBarAnimation = (selector: string, duration: number) => {
  gsap.to(selector, {
    scrollTrigger: {
      trigger: '[data-counter-trigger]',
      start: 'top 60%',
      toggleActions: 'play none none none',
    },
    width: '100%',
    duration,
    ease: easings.inOutExpo,
  });
};

export const glowPulse = (selector: string, delay: number = 0) => {
  gsap.to(selector, {
    scrollTrigger: {
      trigger: '[data-counter-trigger]',
      start: 'top 60%',
      toggleActions: 'play none none none',
    },
    keyframes: [
      { boxShadow: '0 0 20px rgba(124,137,248,0)', offset: 0 },
      { boxShadow: '0 0 40px rgba(124,137,248,0.6)', offset: 0.5 },
      { boxShadow: '0 0 20px rgba(124,137,248,0)', offset: 1 },
    ],
    duration: 1.5,
    repeat: 2,
    delay,
    ease: easings.sine,
  });
};


export const cardHoverEffect = (selector: string) => {
  gsap.utils.toArray<HTMLElement>(selector).forEach((card) => {
    const timeline = gsap.timeline({ paused: true });

    timeline.to(
      card,
      {
        scale: 1.03,
        boxShadow: '0 0 30px rgba(124,137,248,0.4)',
        borderColor: 'rgba(124,137,248,0.8)',
        duration: 0.3,
        ease: easings.outCirc,
      },
      0
    );

    const icon = card.querySelector('.card-icon');
    if (icon) {
      timeline.to(
        icon,
        {
          rotation: 360,
          duration: 0.6,
          ease: easings.outExpo,
        },
        0
      );
    }

    card.addEventListener('mouseenter', () => timeline.play());
    card.addEventListener('mouseleave', () => timeline.reverse());
  });
};

export const buttonHoverEffect = (selector: string) => {
  gsap.utils.toArray<HTMLElement>(selector).forEach((btn) => {
    btn.addEventListener('mouseenter', function () {
      gsap.to(this, {
        scale: 1.05,
        boxShadow: '0 0 20px rgba(255,255,255,0.3)',
        duration: 0.2,
        ease: easings.outCirc,
      });
    });

    btn.addEventListener('mouseleave', function () {
      gsap.to(this, {
        scale: 1,
        boxShadow: '0 0 0px rgba(255,255,255,0)',
        duration: 0.2,
        ease: easings.outCirc,
      });
    });
  });
};


export interface AccordionItem {
  trigger: HTMLElement;
  content: HTMLElement;
}

export const setupAccordion = (items: AccordionItem[]) => {
  items.forEach(({ trigger, content }) => {
    trigger.addEventListener('click', function () {
      const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

      if (isOpen) {
        gsap.to(content, {
          maxHeight: 0,
          opacity: 0,
          paddingBottom: 0,
          duration: 0.3,
          ease: easings.sine,
          onComplete: () => {
            content.style.maxHeight = '';
          },
        });
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        gsap.from(content, {
          maxHeight: 0,
          opacity: 0,
          paddingBottom: 24,
          duration: 0.4,
          ease: easings.sine,
        });
      }
    });
  });
};


export const killAllAnimations = () => {
  gsap.globalTimeline.clear();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

export const refreshScrollTriggers = () => {
  ScrollTrigger.refresh();
};

export const onWindowResize = (callback: () => void) => {
  window.addEventListener('resize', () => {
    gsap.delayedCall(0.2, callback);
  });
};


export const setupSectionAnimations = () => {
  if (typeof window === 'undefined') return;

  const heroTitles = document.querySelectorAll('.hero-title span');
  if (heroTitles.length > 0) {
    gsap.from(heroTitles, {
      duration: 0.6,
      opacity: 0,
      yPercent: 120,
      stagger: 0.05,
      ease: easings.outExpo,
      delay: 0.2,
    });
  }

  const navContainer = document.querySelector('.nav-container');
  if (navContainer) {
    gsap.from(navContainer, {
      duration: 1,
      opacity: 0,
      y: -20,
      filter: 'blur(10px)',
      ease: easings.outExpo,
    });
  }

  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    gsap.to(heroBg, {
      duration: 2,
      yPercent: -10,
      opacity: 1,
      ease: easings.sine,
    });
  }

  cardCascadeReveal('.problem-card', -100);

  tableRowReveal('.comparison-row');

  cardScaleReveal('.pricing-card', 0.3);
  proCardLift('.pricing-card.pro');

  cardHoverEffect('.interactive-card');
  buttonHoverEffect('button');

  const faqItems: AccordionItem[] = [];
  document.querySelectorAll('.faq-item').forEach((item) => {
    const trigger = item.querySelector('.faq-trigger') as HTMLElement;
    const content = item.querySelector('.faq-content') as HTMLElement;
    if (trigger && content) {
      faqItems.push({ trigger, content });
    }
  });
  if (faqItems.length > 0) {
    setupAccordion(faqItems);
  }

  gsap.delayedCall(0.5, () => {
    ScrollTrigger.refresh();
  });
};

export default {
  easings,
  heroTitleReveal,
  navFadeIn,
  heroBackgroundParallax,
  cardCascadeReveal,
  tableRowReveal,
  cardScaleReveal,
  proCardLift,
  counterAnimation,
  progressBarAnimation,
  glowPulse,
  cardHoverEffect,
  buttonHoverEffect,
  setupAccordion,
  setupSectionAnimations,
  killAllAnimations,
  refreshScrollTriggers,
  onWindowResize,
};
