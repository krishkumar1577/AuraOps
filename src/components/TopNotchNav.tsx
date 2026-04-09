"use client";

import { useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface TopNotchNavProps {
  links?: NavLink[];
  logo?: React.ReactNode;
}

const DefaultLogo = ({ collapsed }: { collapsed: boolean }) => (
  <svg 
    viewBox="0 0 512 512" 
    className={`${collapsed ? 'w-10 h-10' : 'w-8 h-8'} transition-all duration-500`}
    fill="none"
  >
    <defs>
      <style>
        {`.stroke { fill: none; stroke: white; stroke-width: 28; stroke-linecap: round; stroke-linejoin: round; }`}
      </style>
    </defs>
    {/* Triangle-like A */}
    <path className="stroke" d="M120 340 L256 120 L392 340" />
    {/* Cross/loop forming O */}
    <circle className="stroke" cx="300" cy="300" r="90" />
    {/* Connecting loop stroke */}
    <path className="stroke" d="M180 320 C240 260, 340 260, 380 320" />
  </svg>
);

const defaultLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

export default function TopNotchNav({
  links = defaultLinks,
}: TopNotchNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative flex justify-center pointer-events-auto z-20"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main notch circle */}
      <div
        className={`relative h-16 rounded-full overflow-hidden transition-all duration-700 ease-out ${
          open ? 'w-full md:w-[650px]' : 'w-16'
        }`}
      >
        {/* Background with glassmorphism */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border border-white/15 rounded-full" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/8 via-transparent to-pink-600/8 pointer-events-none rounded-full" />

        {/* Content container */}
        <div className="relative h-full flex items-center justify-center px-8">
          {/* Logo center (collapse state) */}
          <div
            className={`absolute transition-all duration-500 ${
              open
                ? 'opacity-0 scale-95 pointer-events-none'
                : 'opacity-100 scale-100'
            }`}
          >
            <DefaultLogo collapsed={!open} />
          </div>

          {/* Navigation (expand state) */}
          <nav
            className={`flex items-center gap-10 transition-all duration-500 ${
              open
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-95 pointer-events-none absolute'
            }`}
          >
            {links.slice(0, Math.floor(links.length / 2)).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}

            {/* Center logo in nav */}
            <div className="flex items-center justify-center w-10 h-10">
              <DefaultLogo collapsed={false} />
            </div>

            {links.slice(Math.floor(links.length / 2)).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap"
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
