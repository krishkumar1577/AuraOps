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

const DefaultLogo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.6" />
    <path
      d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="1.8" fill="white" />
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
  logo = <DefaultLogo />,
}: TopNotchNavProps) {
  const [open, setOpen] = useState(false);

  const mid = Math.floor(links.length / 2);
  const leftLinks = links.slice(0, mid);
  const rightLinks = links.slice(mid);

  return (
    <div
      className="relative w-full flex justify-center z-50"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Left corner curve */}
      <svg
        className="absolute top-0 z-10 pointer-events-none"
        style={{ left: `calc(50% - ${open ? 185 : 48}px - 28px)`, transition: "left 0.55s cubic-bezier(0.22,1,0.36,1)" }}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path d="M28 0 Q0 0 0 28 L28 28 Z" fill="#000" />
      </svg>

      {/* Notch body */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          width: open ? 370 : 96,
          height: 54,
          background: "#111118",
          borderRadius: "0 0 22px 22px",
          border: "1px solid rgba(255,255,255,0.1)",
          borderTop: "none",
          boxShadow: "0 4px 32px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.04)",
          transition: "width 0.55s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Closed: logo only */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            opacity: open ? 0 : 1,
            transition: "opacity 0.15s ease",
            pointerEvents: open ? "none" : "auto",
          }}
        >
          {logo}
        </div>

        {/* Open: nav links */}
        <div
          className="flex items-center whitespace-nowrap"
          style={{
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
            transition: `opacity 0.3s ease ${open ? "0.2s" : "0s"}`,
          }}
        >
          {leftLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-white transition-colors duration-200"
              style={{ fontSize: 12.5, fontWeight: 500, padding: "0 15px", letterSpacing: "0.01em", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}

          <span className="px-3 flex items-center">{logo}</span>

          {rightLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-white transition-colors duration-200"
              style={{ fontSize: 12.5, fontWeight: 500, padding: "0 15px", letterSpacing: "0.01em", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right corner curve */}
      <svg
        className="absolute top-0 z-10 pointer-events-none"
        style={{ left: `calc(50% + ${open ? 185 : 48}px)`, transition: "left 0.55s cubic-bezier(0.22,1,0.36,1)" }}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path d="M0 0 Q28 0 28 28 L0 28 Z" fill="#000" />
      </svg>
    </div>
  );
}
