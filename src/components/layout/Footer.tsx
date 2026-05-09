import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import AuraOpsLogoSvg from '../../assets/auraops_true_vector.svg'

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin)

interface NavLink {
  label: string
  href: string
}

interface SocialLink {
  name: string
  href: string
  icon: React.ReactElement
}

const navigationLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'AI Pipeline', href: '#ai-pipeline' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Benefits', href: '#benefits' },
]

const companyLinks: NavLink[] = [
  { label: 'About AuraOps', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Founder LinkedIn', href: 'https://www.linkedin.com/in/krishdevx/' },
  { label: 'Contact', href: '#contact' },
]

const resourceLinks: NavLink[] = [
  { label: 'Documentation', href: 'https://github.com/AuraOps/docs' },
  { label: 'Backend Repo', href: 'https://github.com/krishkumar1577/AuraOps_backend' },
  { label: 'Getting Started', href: '#getting-started' },
  { label: 'CLI Guide', href: '#cli' },
  { label: 'API Reference', href: '#api' },
  { label: 'FAQ', href: '#faq' },
]

const legalLinks: NavLink[] = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
  { label: 'Cookie Policy', href: '#cookies' },
  { label: 'Security', href: '#security' },
]

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/krishkumar1577/AuraOps_backend',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 0C4.48 0 0 4.48 0 10c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7C6.73 17.6 5.93 15.8 5.93 15.8c-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.32.09-2.76 0 0 .84-.27 2.75 1.03.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.3 2.75-1.03 2.75-1.03.54 1.44.19 2.5.09 2.76.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .26.18.57.69.47C17.14 18.16 20 14.42 20 10c0-5.52-4.48-10-10-10z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/AuraOpsai',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M19.5 4.05c-.72.32-1.5.54-2.31.64.83-.5 1.47-1.28 1.77-2.22-.78.46-1.63.8-2.54.98-.73-.78-1.77-1.27-2.92-1.27-2.21 0-4 1.79-4 4 0 .31.03.62.1.91-3.33-.17-6.29-1.76-8.27-4.19-.34.59-.54 1.27-.54 2-.54 3.32 1.77 6.24 4.18 7.06-.66.02-1.28-.2-1.82-.5v.05c0 1.94 1.38 3.56 3.21 3.93-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07.5 1.56 1.95 2.7 3.67 2.73-1.37 1.07-3.1 1.71-4.98 1.71-.32 0-.64-.02-.95-.05 1.79 1.15 3.92 1.82 6.2 1.82 7.43 0 11.49-6.16 11.49-11.49 0-.17 0-.35-.01-.52.79-.57 1.47-1.28 2.01-2.09z" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/gtx6nsgg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M16.93 1.43a15.92 15.92 0 00-3.96-1.23.06.06 0 00-.07.03A11.07 11.07 0 0012.45 2.8a14.6 14.6 0 00-2.24-.11 14.6 14.6 0 00-2.24.11 10.91 10.91 0 00-.74-1.57.06.06 0 00-.07-.03 15.92 15.92 0 00-3.96 1.23.06.06 0 00-.02.03C.7 6.8-.04 11.81.5 16.76a.06.06 0 00.03.04 15.83 15.83 0 004.78 2.4.06.06 0 00.07-.02 11.4 11.4 0 00.98-1.63.06.06 0 000-.06 10.46 10.46 0 01-1.48-.72.06.06 0 01-.01-.1c.1-.08.2-.15.3-.24a.06.06 0 01.07-.01c3.1 1.42 6.48 1.42 9.5 0a.06.06 0 01.07.01c.1.09.2.16.3.24a.06.06 0 01-.01.1c-.47.28-.97.52-1.48.72a.06.06 0 000 .06c.26.6.63 1.14.98 1.63a.06.06 0 00.07.02 15.81 15.81 0 004.78-2.4.06.06 0 00.03-.04c.76-5.38-.12-10.05-1.56-14.59a.05.05 0 00-.02-.03zM6.68 14.29c-1.28 0-2.33-1.18-2.33-2.63 0-1.45 1.03-2.63 2.33-2.63 1.31 0 2.35 1.19 2.33 2.63 0 1.45-1.03 2.63-2.33 2.63zm6.64 0c-1.28 0-2.33-1.18-2.33-2.63 0-1.45 1.03-2.63 2.33-2.63 1.31 0 2.35 1.19 2.33 2.63 0 1.45-1.02 2.63-2.33 2.63z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/auraops/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.33 2.82a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM1.48 4.5h1.7v12.5h-1.7V4.5zM5.75 4.5h1.63v1.7h.02c.23-.43.8-1.7 2.63-1.7 2.75 0 3.25 1.81 3.25 4.17v4.83h-1.7V9.66c0-1.17-.42-1.96-1.5-1.96-.82 0-1.46.55-1.7 1.08-.09.21-.11.51-.11.81v5.31h-1.7V4.5z" />
      </svg>
    ),
  },
]

const FOOTER_DOWN_PATH = 'M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z'
const FOOTER_CENTER_PATH = 'M0-0.3C0-0.3,464,0,1139,0s1139-0.3,1139-0.3V683H0V-0.3z'

export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const footer = footerRef.current
    const stage = stageRef.current
    const path = pathRef.current
    if (!footer || !stage || !path) return

    path.setAttribute('d', FOOTER_DOWN_PATH)
    gsap.set(stage, {
      transformOrigin: 'center top',
      willChange: 'transform, opacity, filter',
      y: 72,
      scale: 0.95,
      opacity: 0.88,
      filter: 'blur(10px)',
    })

    const revealTrigger = ScrollTrigger.create({
      trigger: footer,
      start: 'top 100%',
      end: 'top 76%',
      scrub: 0.9,
      invalidateOnRefresh: true,
      animation: gsap.timeline().to(stage, {
        y: 0,
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        ease: 'none',
      }),
    })

    const morphTrigger = ScrollTrigger.create({
      trigger: footer,
      start: 'top 96%',
      end: 'top 72%',
      scrub: 0.8,
      invalidateOnRefresh: true,
      onEnter: (self) => {
        const velocity = self.getVelocity()
        const variation = velocity / 9000

        tweenRef.current?.kill()
        tweenRef.current = gsap.fromTo(
          path,
          { morphSVG: FOOTER_DOWN_PATH },
          {
            duration: 1.6,
            morphSVG: FOOTER_CENTER_PATH,
            ease: `elastic.out(${1 + variation * 0.4}, ${0.82 - variation * 0.12})`,
            overwrite: 'auto',
          }
        )
      },
      onLeaveBack: () => {
        tweenRef.current?.reverse()
      },
    })

    return () => {
      tweenRef.current?.kill()
      revealTrigger.kill()
      morphTrigger.kill()
    }
  }, [])

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-canvas border-t border-hairline">
      <div className="absolute inset-0 pointer-events-none">
        <svg
          preserveAspectRatio="none"
          id="footer-img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2278 683"
          className="h-full w-full block overflow-visible opacity-55"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="footer-grad" x1="0" y1="0" x2="2278" y2="683" gradientUnits="userSpaceOnUse">
              <stop offset="0.08" stopColor="rgba(255,255,255,0.52)" />
              <stop offset="0.48" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="0.92" stopColor="rgba(255,255,255,0.14)" />
            </linearGradient>
          </defs>
          <path
            ref={pathRef}
            id="bouncy-path"
            fill="url(#footer-grad)"
            d={FOOTER_DOWN_PATH}
          />
        </svg>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% -12%, rgba(255,255,255,0.26), transparent 44%), linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.1) 38%, rgba(255,255,255,0.04) 72%, transparent 100%)',
          mixBlendMode: 'screen',
        }}
      />

      <div
        ref={stageRef}
        className="relative z-10 max-w-7xl mx-auto px-8 pt-16 pb-16"
        style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.1)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <img
                src={AuraOpsLogoSvg}
                alt="AuraOps Logo"
                className="w-10 h-10 flex-shrink-0 brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]"
              />
              <span className="text-lg font-semibold text-white">AuraOps</span>
            </div>
            <p className="text-white/90 caption">
              Eliminate the Infrastructure Tax. Automate AI deployments at scale.
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-white/95 mb-4">FEATURES</h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/90 caption hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-white/95 mb-4">COMPANY</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => {
                const isExternal = link.href.startsWith('http')
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="text-white/90 caption hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-white/95 mb-4">RESOURCES</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => {
                const isExternal = link.href.startsWith('http')
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="text-white/90 caption hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-white/95 mb-4">MORE</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#blog" className="text-white/90 caption hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#changelog" className="text-white/90 caption hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#status" className="text-white/90 caption hover:text-white transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-white/95 mb-4">CONNECT</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const isExternal = social.href.startsWith('http')
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    title={social.name}
                    aria-label={social.name}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="group relative w-11 h-11 rounded-full border border-white/30 bg-gradient-to-b from-white/18 to-white/[0.06] backdrop-blur-sm overflow-hidden flex items-center justify-center text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:border-white/45 hover:from-white/24 hover:to-white/[0.1] hover:shadow-[0_12px_30px_rgba(255,255,255,0.24)]"
                  >
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.28),transparent_70%)] opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">{social.icon}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/85 caption">
            © {currentYear} AuraOps, Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-6 justify-center md:justify-end">
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-white/90 caption hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
