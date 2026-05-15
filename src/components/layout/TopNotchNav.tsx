"use client";

import { useState } from "react";
import AuraOpsLogoSvg from "../../assets/auraops_true_vector.svg";

interface NavLink {
  label: string;
  href: string;
  target?: '_blank' | '_self';
}

interface TopNotchNavProps {
  links?: NavLink[];
  logo?: React.ReactNode;
}

const defaultLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Docs", href: "https://github.com/AuraOps/docs", target: "_blank" },
  { label: "Waitlist", href: "#waitlist" },
];

export default function TopNotchNav({
  links = defaultLinks,
}: TopNotchNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="absolute top-0 left-0 right-0 flex justify-center pointer-events-auto z-50 pt-10"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main notch circle */}
      <div
        className={`relative h-14 rounded-full overflow-hidden transition-all duration-700 ease-[var(--ease-out-expo)] ${
          open ? 'w-full md:w-[720px]' : 'w-14'
        }`}
      >
        {/* Background with Linear canvas color - Higher opacity for visibility */}
        <div className="absolute inset-0 bg-surface-1/90 backdrop-blur-xl border border-white/20 rounded-full" />


        {/* Gradient overlay — subtle blue tint glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none rounded-full" />

        {/* Content container */}
        <div className={`relative h-full flex items-center transition-all duration-700 ease-[var(--ease-out-expo)] ${
          open ? 'justify-between px-10' : 'justify-center'
        }`}>
          {/* Logo center (collapse state) */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-[var(--ease-out-expo)] ${
              open
                ? 'opacity-0 scale-90 pointer-events-none'
                : 'opacity-100 scale-100'
            }`}
          >
            <img
              src={AuraOpsLogoSvg}
              alt="AuraOps"
              className="w-7 h-7 hover:rotate-12 transition-transform duration-300 brightness-0 invert"
            />
          </div>

          {/* Navigation (expand state) */}
          <nav
            className={`flex items-center gap-8 transition-all duration-500 w-full justify-center ${
              open
                ? 'opacity-100 scale-100 pointer-events-auto translate-y-0'
                : 'opacity-0 scale-95 pointer-events-none translate-y-2'
            }`}
          >
            {/* Left nav items (before logo) */}
            {links.slice(0, 2).map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] font-medium tracking-tight text-white/70 hover:text-white transition-all duration-300 whitespace-nowrap"
                style={{
                  transitionDelay: open ? `${i * 40}ms` : '0ms',
                  transform: open ? 'translateX(0)' : 'translateX(-10px)',
                  opacity: open ? 1 : 0
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Center logo in nav */}
            <div className="flex items-center justify-center w-8 h-8 flex-shrink-0 mx-2">
              <img
                src={AuraOpsLogoSvg}
                alt="AuraOps"
                className="w-6 h-6 hover:rotate-12 transition-transform duration-300 brightness-0 invert"
              />
            </div>

            {/* Right nav items (after logo) */}
            {links.slice(2).map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="text-[12px] font-medium tracking-tight text-white/70 hover:text-white transition-all duration-300 whitespace-nowrap"
                style={{
                  transitionDelay: open ? `${(i + 2) * 40}ms` : '0ms',
                  transform: open ? 'translateX(0)' : 'translateX(10px)',
                  opacity: open ? 1 : 0
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none rounded-full" />
        </div>
      </div>
    </div>
  );
}
