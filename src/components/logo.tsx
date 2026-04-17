// Logo.tsx
// Drop-in loading screen / logo component for AuraOps.
// Animations are 1-to-1 with the original HTML — same paths, same keyframes,
// same cubic-bezier easings, same delays and durations.
//
// Usage (loading screen):  <Logo mode="screen" />
// Usage (navbar logo):     <Logo mode="mark" />
// Usage (mark + wordmark): <Logo mode="full" />   ← default

import React from "react";
import AuraOpsVectorSvg from "../assets/auraops_true_vector.svg";

// ─────────────────────────────────────────────────────────────────────────────
// 1.  Keyframe CSS injected once into <head>.
//     Tailwind cannot express pathLength-based stroke-dash animations or
//     the exact cubic-bezier values, so we use a <style> tag approach.
// ─────────────────────────────────────────────────────────────────────────────
const KEYFRAMES = `
  @keyframes aura-draw-main {
    to { stroke-dashoffset: 0; }
  }
  @keyframes aura-draw-slash {
    to { stroke-dashoffset: 0; }
  }
  @keyframes aura-fade-word {
    to { color: rgba(255,255,255,0.72); }
  }
  @keyframes aura-idle {
    0%,100% { transform: scale(1);     opacity: 1;    }
    50%      { transform: scale(1.025); opacity: 0.94; }
  }
`;

function injectKeyframes() {
  if (typeof document === "undefined") return;
  if (document.getElementById("aura-keyframes")) return;
  const style = document.createElement("style");
  style.id = "aura-keyframes";
  style.textContent = KEYFRAMES;
  document.head.appendChild(style);
}

// ─────────────────────────────────────────────────────────────────────────────
// 2.  Inline style objects — exact values from original CSS.
// ─────────────────────────────────────────────────────────────────────────────
const styles = {
  /** #main path */
  mainPath: {
    strokeDasharray: 1,
    strokeDashoffset: 1,
    animation: "aura-draw-main 1.4s cubic-bezier(0.65,0,0.35,1) forwards",
  } as React.CSSProperties,

  /** #slash path */
  slashPath: {
    strokeDasharray: 1,
    strokeDashoffset: 1,
    animation:
      "aura-draw-slash 0.6s cubic-bezier(0.65,0,0.35,1) 1.1s forwards",
  } as React.CSSProperties,

  /** WORDMARK text */
  wordmark: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "13px",
    letterSpacing: "9px",
    fontWeight: 500,
    color: "rgba(255,255,255,0)",
    textTransform: "uppercase" as const,
    textIndent: "9px",
    animation: "aura-fade-word 0.6s ease 1.6s forwards",
  } as React.CSSProperties,

  /** SVG logo — idle pulse (starts after 1.8s) */
  logoSvg: {
    width: "220px",
    height: "260px",
    overflow: "visible" as const,
    animation: "aura-idle 5s ease-in-out 1.8s infinite",
  } as React.CSSProperties,
};

// ─────────────────────────────────────────────────────────────────────────────
// 3.  Sub-components
// ─────────────────────────────────────────────────────────────────────────────

/** The dot-grid background — identical to the original .grid SVG */
function GridBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.035 }}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="aura-grid"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M32 0 L0 0 0 32"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#aura-grid)" />
    </svg>
  );
}

/** The mark SVG — loads from auraops_true_vector.svg */
function LogoMark({ size = 220 }: { size?: number }) {
  return (
    <img
      src={AuraOpsVectorSvg}
      alt="AuraOps Logo"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animation: "aura-idle 5s ease-in-out 1.8s infinite",
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLImageElement;
        el.style.animation = "none";
        el.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLImageElement;
        el.style.transform = "";
        setTimeout(() => {
          el.style.animation = "aura-idle 5s ease-in-out infinite";
        }, 400);
      }}
    />
  );
}

/** The AURAOPS wordmark */
function Wordmark() {
  return <div style={styles.wordmark}>AURAOPS</div>;
}

// ─────────────────────────────────────────────────────────────────────────────
// 4.  Main exported component
// ─────────────────────────────────────────────────────────────────────────────

type LogoMode =
  | "screen" // full-screen loading animation (black bg + grid)
  | "full"   // mark + wordmark, transparent bg  ← default
  | "mark";  // mark only, transparent bg

interface LogoProps {
  mode?: LogoMode;
  /** Override mark pixel width (height scales proportionally) */
  markSize?: number;
  /** Extra className on the root element */
  className?: string;
}

export default function Logo({
  mode = "full",
  markSize = 220,
  className = "",
}: LogoProps) {
  // Inject keyframes once on first render
  React.useEffect(() => {
    injectKeyframes();
  }, []);

  // ── SCREEN MODE ─────────────────────────────────────────────────────────
  if (mode === "screen") {
    return (
      <div
        className={`relative flex items-center justify-center w-full h-screen overflow-hidden bg-[#080808] ${className}`}
      >
        <GridBackground />

        {/* z-10 so it sits above the grid */}
        <div className="relative z-10 flex flex-col items-center gap-9">
          <LogoMark size={markSize} />
          <Wordmark />
        </div>
      </div>
    );
  }

  if (mode === "full") {
    return (
      <div
        className={`flex flex-col items-center gap-9 ${className}`}
      >
        <LogoMark size={markSize} />
        <Wordmark />
      </div>
    );
  }

  return (
    <div className={className}>
      <LogoMark size={markSize} />
    </div>
  );
}