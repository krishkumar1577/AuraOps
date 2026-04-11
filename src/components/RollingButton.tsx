"use client";

import { useRef } from "react";

type Variant = "primary" | "ghost" | "outline" | "violet";

interface RollingButtonProps {
  label: string;
  variant?: Variant;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: "#ffffff",
    color: "#000000",
    boxShadow: "0 2px 20px rgba(255,255,255,0.18)",
  },
  ghost: {
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.9)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.22)",
  },
  outline: {
    background: "transparent",
    color: "rgba(255,255,255,0.85)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.25)",
  },
  violet: {
    background: "#7c6af7",
    color: "#ffffff",
    boxShadow: "0 0 0 1px rgba(124,106,247,0.4), 0 6px 28px rgba(124,106,247,0.3)",
  },
};

const hoverStyles: Record<Variant, React.CSSProperties> = {
  primary: { boxShadow: "0 4px 32px rgba(255,255,255,0.28), 0 0 0 1px rgba(255,255,255,0.4)" },
  ghost: { background: "rgba(255,255,255,0.10)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)" },
  outline: { boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.45)" },
  violet: { boxShadow: "0 0 0 1px rgba(124,106,247,0.6), 0 8px 36px rgba(124,106,247,0.45)" },
};

export default function RollingButton({
  label,
  variant = "primary",
  onClick,
  href,
  className = "",
  disabled = false,
}: RollingButtonProps) {
  useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const chars = label.split("");

  const innerContent = (
    <>
      {/* Top row — slides up on hover */}
      <span
        className="rolling-top"
        style={{ display: "flex", overflow: "hidden", lineHeight: "1.2em" }}
      >
        {chars.map((ch, i) => (
          <span
            key={i}
            style={{
              display: "block",
              whiteSpace: "pre",
              flexShrink: 0,
              lineHeight: "1.2em",
              willChange: "transform",
              transition: `transform 0.48s cubic-bezier(0.22,1,0.36,1) ${i * 16}ms`,
            }}
          >
            {ch === " " ? "\u00a0" : ch}
          </span>
        ))}
      </span>

      {/* Bottom shadow row — rises up on hover */}
      <span
        className="rolling-shadow"
        style={{
          position: "absolute",
          display: "flex",
          overflow: "hidden",
          lineHeight: "1.2em",
          pointerEvents: "none",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        {chars.map((ch, i) => (
          <span
            key={i}
            style={{
              display: "block",
              whiteSpace: "pre",
              flexShrink: 0,
              lineHeight: "1.2em",
              willChange: "transform",
              transform: "translateY(100%)",
              transition: `transform 0.48s cubic-bezier(0.22,1,0.36,1) ${i * 16}ms`,
            }}
          >
            {ch === " " ? "\u00a0" : ch}
          </span>
        ))}
      </span>

      <style>{`
        .rolling-btn:hover .rolling-top span { transform: translateY(-100%) !important; }
        .rolling-btn:hover .rolling-shadow span { transform: translateY(0%) !important; }
        .rolling-btn:active { transform: scale(0.96) !important; }
      `}</style>
    </>
  );

  const baseStyle: React.CSSProperties = {
    ...variantStyles[variant],
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    padding: "0 24px",
    borderRadius: 10,
    fontFamily: "Inter, sans-serif",
    fontSize: 13.5,
    fontWeight: 600,
    letterSpacing: "-0.2px",
    cursor: disabled ? "default" : "pointer",
    border: "none",
    overflow: "hidden",
    position: "relative",
    transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
    textDecoration: "none",
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? "none" : "auto",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`rolling-btn ${className}`}
        style={baseStyle}
        onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLElement).style, hoverStyles[variant])}
        onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLElement).style, variantStyles[variant])}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rolling-btn ${className}`}
      style={baseStyle}
      onMouseEnter={(e) => !disabled && Object.assign((e.currentTarget as HTMLElement).style, hoverStyles[variant])}
      onMouseLeave={(e) => !disabled && Object.assign((e.currentTarget as HTMLElement).style, variantStyles[variant])}
    >
      {innerContent}
    </button>
  );
}
