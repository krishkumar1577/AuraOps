"use client";

type Variant = "primary" | "ghost" | "outline" | "violet" | "secondary";

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
    background: "var(--color-ink)",
    color: "var(--color-canvas)",
    boxShadow: "0 2px 20px rgba(255,255,255,0.1)",
  },
  secondary: {
    background: "var(--color-secondary)",
    color: "#0F0F0F",
    boxShadow: "0 4px 20px rgba(228, 255, 156, 0.2)",
  },
  ghost: {
    background: "var(--color-surface-1)",
    color: "var(--color-ink-muted)",
    boxShadow: "inset 0 0 0 1px var(--color-hairline)",
  },
  outline: {
    background: "transparent",
    color: "var(--color-ink)",
    boxShadow: "inset 0 0 0 1px var(--color-hairline-strong)",
  },
  violet: {
    background: "#7c89f8",
    color: "var(--color-ink)",
    boxShadow: "0 6px 28px rgba(124,106,247,0.3)",
  },
};

const hoverStyles: Record<Variant, React.CSSProperties> = {
  primary: { boxShadow: "0 4px 32px rgba(255,255,255,0.2), 0 0 0 1px rgba(255,255,255,0.4)" },
  secondary: { background: "var(--color-secondary-hover)", boxShadow: "0 6px 32px rgba(228, 255, 156, 0.4), 0 0 0 1px rgba(228, 255, 156, 0.6)" },
  ghost: { background: "var(--color-surface-2)", color: "var(--color-ink)", boxShadow: "inset 0 0 0 1px var(--color-hairline-strong)" },
  outline: { boxShadow: "inset 0 0 0 1px var(--color-ink)" },
  violet: { background: "#8fa4ff", boxShadow: "0 8px 36px rgba(124,106,247,0.45)" },
};

export default function RollingButton({
  label,
  variant = "primary",
  onClick,
  href,
  className = "",
  disabled = false,
}: RollingButtonProps) {
  const chars = label.split("");

  const innerContent = (
    <>
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
              transition: `transform 0.5s var(--ease-out-expo) ${i * 12}ms`,
            }}
          >
            {ch === " " ? "\u00a0" : ch}
          </span>
        ))}
      </span>

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
              transition: `transform 0.5s var(--ease-out-expo) ${i * 12}ms`,
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
    borderRadius: "var(--radius-md)",
    fontFamily: "var(--font-family-mono)",
    fontSize: 12.5,
    fontWeight: 500,
    letterSpacing: "-0.01em",
    cursor: disabled ? "default" : "pointer",
    border: "none",
    overflow: "hidden",
    position: "relative",
    transition: "all 0.3s var(--ease-soft)",
    textDecoration: "none",
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? "none" : "auto",
  };

  const variantClasses: Record<Variant, string> = {
    primary: "text-canvas",
    secondary: "text-[#0F0F0F]",
    ghost: "text-ink-muted",
    outline: "text-ink",
    violet: "text-white",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`rolling-btn ${variantClasses[variant]} ${className}`}
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
      className={`rolling-btn ${variantClasses[variant]} ${className}`}
      style={baseStyle}
      onMouseEnter={(e) => !disabled && Object.assign((e.currentTarget as HTMLElement).style, hoverStyles[variant])}
      onMouseLeave={(e) => !disabled && Object.assign((e.currentTarget as HTMLElement).style, variantStyles[variant])}
    >
      {innerContent}
    </button>
  );
}
