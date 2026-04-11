import React, { useEffect, useRef, useState } from 'react';

const cardsData = [
  {
    id: 'fc',
    positionClasses: 'top-[4%] left-[6%]',
    hoverTranslate: 'translate(-3px, -4px)',
    icon: (
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
        <circle cx="8.5" cy="8.5" r="7" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" />
        <path d="M8.5 4.5v8M6.2 7C6.2 5.78 7.23 4.8 8.5 4.8s2.3.98 2.3 2.2S9.77 9.2 8.5 9.2s-2.3.98-2.3 2.2S7.23 14 8.5 14" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Zero-Config.',
    desc: 'Single command analyzes and deploys automatically.',
  },
  {
    id: 'fi',
    positionClasses: 'top-[4%] right-[6%]',
    hoverTranslate: 'translate(3px, -4px)',
    icon: (
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
        <path d="M8.5 2a5 5 0 015 5c0 2.1-1.3 3.9-3.1 4.7V13H5.6v-1.3A5 5 0 018.5 2z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M6.5 14.2h4M7.2 15.5h2.6" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Model Separation.',
    desc: 'Weights split from logic for lightning rebuilds.',
  },
  {
    id: 'ft',
    positionClasses: 'top-[38%] left-[0%]',
    hoverTranslate: 'translate(-4px, 0px)',
    icon: (
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
        <circle cx="8.5" cy="8.5" r="7" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" />
        <path d="M8.5 5.5V8.5l2.2 2.2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'CUDA Native.',
    desc: 'Intelligent handling of GPU dependencies & optimization.',
  },
  {
    id: 'fsc',
    positionClasses: 'top-[38%] right-[0%]',
    hoverTranslate: 'translate(4px, 0px)',
    icon: (
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
        <path d="M2.5 13V9.5M5.5 13V6.5M8.5 13V3.5M11.5 13V7M14.5 13V5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    title: 'AI Framework Aware.',
    desc: 'Native support for LangChain, PyTorch, and more.',
  },
  {
    id: 'fw',
    positionClasses: 'bottom-[4%] left-[10%]',
    hoverTranslate: 'translate(-3px, 4px)',
    icon: (
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
        <path d="M2 8.5h5M4 6l3 2.5L4 11" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 8.5h5M10.5 6l3 2.5-3 2.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Deterministic.',
    desc: 'Reproducible builds every deployment, guaranteed.',
  },
  {
    id: 'fa',
    positionClasses: 'bottom-[4%] right-[10%]',
    hoverTranslate: 'translate(3px, 4px)',
    icon: (
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
        <circle cx="8.5" cy="8.5" r="7" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" />
        <circle cx="8.5" cy="8.5" r="3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
        <circle cx="8.5" cy="8.5" r="1.1" fill="rgba(255,255,255,0.7)" />
      </svg>
    ),
    title: 'GPU Cloud Ready.',
    desc: 'Seamless deployment to specialized GPU infrastructure.',
  },
];

const FeatureCard = ({ card }: { card: typeof cardsData[0] }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      id={card.id}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`card-node absolute w-[200px] bg-[#0d0d10] border border-white/5 rounded-[20px] p-[20px_18px] z-10 cursor-default transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] group overflow-hidden ${card.positionClasses}`}
      style={{
        transform: isHovered ? card.hoverTranslate : 'translate(0,0)',
      }}
    >
      {/* Top reflection line */}
      <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Hover glow effect */}
      <div
        className="absolute w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_65%)] pointer-events-none transition-opacity duration-200"
        style={{
          opacity: isHovered ? 1 : 0,
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="w-[36px] h-[36px] rounded-[10px] bg-white/5 border border-white/5 flex items-center justify-center mb-[14px]">
        {card.icon}
      </div>
      <div className="text-[14.5px] font-bold text-white tracking-[-0.4px] mb-[4px]">
        {card.title}
      </div>
      <div className="text-[12.5px] text-white/35 leading-tight tracking-[-0.1px]">
        {card.desc}
      </div>
    </div>
  );
};

export default function BenefitsOrbital() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [connectors, setConnectors] = useState<React.ReactNode[]>([]);

  // Draw SVG Connectors
  useEffect(() => {
    const drawConnectors = () => {
      if (!stageRef.current) return;
      const sr = stageRef.current.getBoundingClientRect();
      const cx = sr.width / 2;
      const cy = sr.height / 2;

      const newConnectors: React.ReactNode[] = [];

      cardsData.forEach((card) => {
        const el = document.getElementById(card.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        
        // Exact element center relative to stage
        const ex = (r.left - sr.left) + r.width / 2;
        const ey = (r.top - sr.top) + r.height / 2;

        const dx = cx - ex;
        const dy = cy - ey;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Line gap so it doesn't overlap to the center and edge
        const nx = ex + dx * (1 - 90 / dist);
        const ny = ey + dy * (1 - 90 / dist);
        const fx = ex + dx * (90 / dist);
        const fy = ey + dy * (90 / dist);

        // Control points for curving
        const cpx = (ex + cx) / 2 + (cy - ey) * 0.12;
        const cpy = (ey + cy) / 2 + (cx - ex) * 0.12;

        newConnectors.push(
          <g key={card.id}>
            <path
              d={`M${fx},${fy} Q${cpx},${cpy} ${nx},${ny}`}
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 6"
            />
            <circle cx={fx} cy={fy} r="2.5" fill="rgba(255,255,255,0.15)" />
          </g>
        );
      });

      setConnectors(newConnectors);
    };

    // Delay drawing logic slightly to let layout finish and bounds be reliable
    const timeoutId = setTimeout(drawConnectors, 80);
    window.addEventListener('resize', drawConnectors);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', drawConnectors);
    };
  }, []);

  // Floating particles canvas logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.offsetWidth || 900;
    canvas.height = canvas.offsetHeight || 700;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random() * 0.35 + 0.05,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.a})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-black font-['Inter',sans-serif] px-[44px] py-[64px] pt-[52px] relative overflow-hidden min-h-[700px]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          @keyframes orbPulse {
            0%, 100% { opacity: 0.6; transform: scale(0.92); }
            50% { opacity: 1; transform: scale(1.1); }
          }
        `}
      </style>

      {/* Floating particles background background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 w-full h-full" />

      {/* Header section */}
      <div className="relative z-10 mb-0">
        <div className="inline-flex items-center gap-[6px] bg-white/5 border border-white/10 rounded-full px-[14px] py-[5px] text-[12px] font-medium text-white/50 mb-[16px]">
          <span className="w-[5px] h-[5px] rounded-full bg-[#7c6af7] shadow-[0_0_6px_rgba(124,106,247,0.8)]" />
          Benefits
        </div>
        <h1 className="text-[clamp(32px,4vw,52px)] font-black text-white tracking-[-2.2px] leading-[1.06]">
          What Makes Our AI<br />Better for Your Business
        </h1>
      </div>

      {/* Interactive stage */}
      <div ref={stageRef} className="relative h-[520px] w-full max-w-[1040px] mx-auto z-10">
        
        {/* SVG connectors layer */}
        <svg
          className="absolute inset-0 pointer-events-none z-0"
          viewBox="0 0 1040 520"
          preserveAspectRatio="none"
        >
          {connectors}
        </svg>

        {/* Center Hero Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group">
          <div className="w-[136px] h-[136px] rounded-[32px] bg-[#0e0e14] border border-white/10 flex items-center justify-center relative transition-transform duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.06]">
            
            {/* Pulsing gradient effect under the orb */}
            <div className="absolute inset-[-48px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.11)_0%,rgba(255,255,255,0.03)_45%,transparent_70%)] pointer-events-none animate-[orbPulse_3.5s_ease-in-out_infinite]" />
            
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="24" stroke="white" strokeWidth="1.8" />
              <path
                d="M18 30c0-6.63 5.37-12 12-12s12 5.37 12 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="30" cy="30" r="4" fill="white" />
            </svg>

          </div>
        </div>

        {/* Feature Cards Loop */}
        {cardsData.map((card) => (
          <FeatureCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
