"use client";

import { useState } from "react";
import AuraOpsLogoSvg from "../assets/auraops_true_vector.svg";

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
      className="relative flex justify-center pointer-events-auto z-20 "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main notch circle */}
      <div
        className={`relative h-16 rounded-full overflow-visible transition-all duration-700 ease-out ${
          open ? 'w-full md:w-[800px]' : 'w-16'
        }`}
      >
        {/* Background with dark solid color */}
        <div className="absolute inset-0 bg-[#0e0e14] border border-white/10 rounded-full" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/8 via-transparent to-pink-600/8 pointer-events-none rounded-full" />

        {/* Content container */}
        <div className={`relative h-full flex items-center transition-all duration-700 ease-out ${
          open ? 'justify-between px-12' : 'justify-center px-8'
        }`}>
          {/* Logo center (collapse state) */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
              open
                ? 'opacity-0 scale-95 pointer-events-none'
                : 'opacity-100 scale-100'
            }`}
          >
            <img
              src={AuraOpsLogoSvg}
              alt="AuraOps"
              className="w-8 h-8 hover:scale-110 transition-transform duration-300"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>

          {/* Navigation (expand state) */}
          <nav
            className={`flex items-center gap-8 transition-all duration-500 w-full justify-center ${
              open
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            {/* Left nav items (before logo) */}
            {links.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="system-label hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}

            {/* Center logo in nav */}
            <div className="flex items-center justify-center w-10 h-10 flex-shrink-0">
              <img
                src={AuraOpsLogoSvg}
                alt="AuraOps"
                className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>

            {/* Right nav items (after logo) */}
            {links.slice(2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="system-label hover:text-white transition-colors duration-200 whitespace-nowrap"
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
