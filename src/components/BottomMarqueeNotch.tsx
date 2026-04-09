"use client";

export interface LogoItem {
  name: string;
  italic?: boolean;
  icon: React.ReactNode;
}

interface BottomMarqueeNotchProps {
  logos: LogoItem[];
  speed?: number; // seconds for full loop, default 26
  maxWidth?: number; // default 780
}

export default function BottomMarqueeNotch({
  logos,
  speed = 26,
  maxWidth = 780,
}: BottomMarqueeNotchProps) {
  const doubled = [...logos, ...logos];

  return (
    <div className="relative w-full flex flex-col items-center z-10">
      {/* Notch row */}
      <div className="relative w-full flex justify-center items-end">
        {/* Left curve */}
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ flexShrink: 0 }}>
          <path d="M0 56 Q0 0 56 0 L56 56 Z" fill="#000" />
          <path d="M56 0 Q0 0 0 56" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />
        </svg>

        {/* Pill */}
        <div
          style={{
            flex: 1,
            maxWidth,
            height: 57,
            background: "#0e0e14",
            borderRadius: "0",
            position: "relative",
            overflow: "hidden",
            // border: "1px solid rgba(255,255,255,0.1)",
            borderBottom: "none",
            boxShadow:
              "inset 0 3px 12px rgba(0,0,0,1), inset 0 10px 40px rgba(0,0,0,0.7), inset 6px 0 28px rgba(0,0,0,0.7), inset -6px 0 28px rgba(0,0,0,0.7)",
          }}
        >
          {/* Inner sheen overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "20px 20px 0 0",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 28%), linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 14%, transparent 30%, transparent 70%, rgba(0,0,0,0.2) 86%, rgba(0,0,0,0.75) 100%)",
              pointerEvents: "none",
              zIndex: 10,
            }}
          />

          {/* Fade mask + scrolling track */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 4%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.15) 96%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 4%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.15) 96%, rgba(0,0,0,0) 100%)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap",
                willChange: "transform",
                animation: `marqueeScroll ${speed}s linear infinite`,
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = "paused")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = "running")}
            >
              {doubled.map((logo, i) => (
                <div
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0 44px",
                    height: 66,
                    gap: 10,
                    flexShrink: 0,
                    opacity: 0.5,
                    transition: "opacity 0.3s ease",
                    cursor: "default",
                    borderRight: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.5")}
                >
                  {logo.icon}
                  <span
                    style={{
                      fontSize: logo.italic ? 17 : 15,
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: logo.italic ? "-0.6px" : "-0.3px",
                      fontStyle: logo.italic ? "italic" : "normal",
                      whiteSpace: "nowrap",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right curve */}
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ flexShrink: 0 }}>
          <path d="M56 56 Q56 0 0 0 L0 56 Z" fill="#000" />
          <path d="M0 0 Q56 0 56 56" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />
        </svg>
      </div>


      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
