import React from 'react'

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
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
]

const companyLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Careers', href: '#careers' },
  { label: 'Status', href: '#status' },
]

const resourceLinks: NavLink[] = [
  { label: 'Documentation', href: '#docs' },
  { label: 'Tutorials', href: '#tutorials' },
  { label: 'API Reference', href: '#api' },
  { label: 'Community', href: '#community' },
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
    href: '#github',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 0C4.48 0 0 4.48 0 10c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7C6.73 17.6 5.93 15.8 5.93 15.8c-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.32.09-2.76 0 0 .84-.27 2.75 1.03.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.3 2.75-1.03 2.75-1.03.54 1.44.19 2.5.09 2.76.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .26.18.57.69.47C17.14 18.16 20 14.42 20 10c0-5.52-4.48-10-10-10z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#twitter',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M19.5 4.05c-.72.32-1.5.54-2.31.64.83-.5 1.47-1.28 1.77-2.22-.78.46-1.63.8-2.54.98-.73-.78-1.77-1.27-2.92-1.27-2.21 0-4 1.79-4 4 0 .31.03.62.1.91-3.33-.17-6.29-1.76-8.27-4.19-.34.59-.54 1.27-.54 2-.54 3.32 1.77 6.24 4.18 7.06-.66.02-1.28-.2-1.82-.5v.05c0 1.94 1.38 3.56 3.21 3.93-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07.5 1.56 1.95 2.7 3.67 2.73-1.37 1.07-3.1 1.71-4.98 1.71-.32 0-.64-.02-.95-.05 1.79 1.15 3.92 1.82 6.2 1.82 7.43 0 11.49-6.16 11.49-11.49 0-.17 0-.35-.01-.52.79-.57 1.47-1.28 2.01-2.09z" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    href: '#discord',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M16.93 1.43a15.92 15.92 0 00-3.96-1.23.06.06 0 00-.07.03A11.07 11.07 0 0012.45 2.8a14.6 14.6 0 00-2.24-.11 14.6 14.6 0 00-2.24.11 10.91 10.91 0 00-.74-1.57.06.06 0 00-.07-.03 15.92 15.92 0 00-3.96 1.23.06.06 0 00-.02.03C.7 6.8-.04 11.81.5 16.76a.06.06 0 00.03.04 15.83 15.83 0 004.78 2.4.06.06 0 00.07-.02 11.4 11.4 0 00.98-1.63.06.06 0 000-.06 10.46 10.46 0 01-1.48-.72.06.06 0 01-.01-.1c.1-.08.2-.15.3-.24a.06.06 0 01.07-.01c3.1 1.42 6.48 1.42 9.5 0a.06.06 0 01.07.01c.1.09.2.16.3.24a.06.06 0 01-.01.1c-.47.28-.97.52-1.48.72a.06.06 0 000.06c.26.6.63 1.14.98 1.63a.06.06 0 00.07.02 15.81 15.81 0 004.78-2.4.06.06 0 00.03-.04c.76-5.38-.12-10.05-1.56-14.59a.05.05 0 00-.02-.03zM6.68 14.29c-1.28 0-2.33-1.18-2.33-2.63 0-1.45 1.03-2.63 2.33-2.63 1.31 0 2.35 1.19 2.33 2.63 0 1.45-1.03 2.63-2.33 2.63zm6.64 0c-1.28 0-2.33-1.18-2.33-2.63 0-1.45 1.03-2.63 2.33-2.63 1.31 0 2.35 1.19 2.33 2.63 0 1.45-1.02 2.63-2.33 2.63z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#linkedin',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.33 2.82a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM1.48 4.5h1.7v12.5h-1.7V4.5zM5.75 4.5h1.63v1.7h.02c.23-.43.8-1.7 2.63-1.7 2.75 0 3.25 1.81 3.25 4.17v4.83h-1.7V9.66c0-1.17-.42-1.96-1.5-1.96-.82 0-1.46.55-1.7 1.08-.09.21-.11.51-.11.81v5.31h-1.7V4.5z" />
      </svg>
    ),
  },
]

export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10">
      {/* ── Main Footer Content ── */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* ── Brand Section ── */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.2" />
                  <path d="M8 4v8M4 8h8" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">AuraOps</span>
            </div>
            <p className="text-sm text-white/40">
              Eliminate the Infrastructure Tax. Automate AI deployments at scale.
            </p>
          </div>

          {/* ── Product Links ── */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider">PRODUCT</h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company Links ── */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider">COMPANY</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Resources Links ── */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider">RESOURCES</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Social Links ── */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider">CONNECT</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  title={social.name}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-white/10 my-12" />

        {/* ── Bottom Footer ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* ── Copyright ── */}
          <div className="text-sm text-white/40">
            © {currentYear} AuraOps, Inc. All rights reserved.
          </div>

          {/* ── Legal Links ── */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-end">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs md:text-sm text-white/40 hover:text-white/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
