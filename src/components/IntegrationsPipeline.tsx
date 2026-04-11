import './IntegrationsPipeline.css';

const IntegrationsPipeline = () => {
  const iconChips = [
    // Ring 1 (3 items)
    {
      group: 1,
      position: 'g1-a',
      size: 'large',
      label: 'GitHub',
      bg: '#fff',
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="#24292e">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      group: 1,
      position: 'g1-b',
      size: 'sm',
      label: 'Docker',
      bg: '#fff',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#2496ed">
          <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.186V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.317 2.596-2.208 1.253-1.418 1.997-2.997 2.54-4.408h.22c1.363 0 2.202-.543 2.667-1 .29-.28.514-.62.655-.994l.09-.266z"/>
        </svg>
      ),
    },
    {
      group: 1,
      position: 'g1-c',
      size: 'sm',
      label: 'Kubernetes',
      bg: '#fff',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#326ce5">
          <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.87 3.248l2.656-.727zm1.145-1.98a.44.44 0 0 0 .76-.003l.01.003 1.73-1.815a5.17 5.17 0 0 0-3.233-.002l1.73 1.817zm5.955 3.52a5.165 5.165 0 0 0-.867-3.249l-1.96 1.758a.44.44 0 0 0 .167.758l2.66.733zm-1.254 1.833a.44.44 0 0 0-.485-.608l-.004-.006-2.58.438a5.17 5.17 0 0 0 2.076 2.6l1-2.424zM12 16.025a.44.44 0 0 0-.447.44v2.501a5.164 5.164 0 0 0 .894 0v-2.5a.44.44 0 0 0-.447-.44zM12 2C6.476 2 2 6.476 2 12s4.476 10 10 10 10-4.476 10-10S17.524 2 12 2zm4.703 13.81l-1.477-3.563a1.435 1.435 0 0 1-.042-1.017l1.067-3.965c.212-.79-.718-1.42-1.388-.931L11.53 8.89a1.435 1.435 0 0 1-.986.146L6.755 8.39c-.789-.15-1.318.813-.777 1.43l2.696 3.112c.241.278.336.652.254 1.007l-.938 3.988c-.188.8.756 1.366 1.39.852l3.29-2.74c.294-.245.69-.314 1.05-.183l3.813 1.423c.762.284 1.468-.614 1.17-1.47z"/>
        </svg>
      ),
    },
    // Ring 2 (4 items)
    {
      group: 2,
      position: 'g2-a',
      size: 'large',
      label: 'GitHub Actions',
      bg: '#f0f6ff',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="gha" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2ea44f"/>
              <stop offset="100%" stopColor="#1a7f37"/>
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill="url(#gha)" opacity="0.15"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#2ea44f"/>
          <path d="M8 10 L12 6 L16 10" stroke="#2ea44f" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      group: 2,
      position: 'g2-b',
      size: 'sm',
      label: 'Terraform',
      bg: '#f5f0ff',
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#7B42BC">
          <path d="M15.35 7.498l4.394 2.538v5.076l-4.394-2.538V7.498zM8.306 3.748l4.394 2.538v5.078l-4.394-2.54V3.748zM.516 7.756l4.394 2.538v5.076L.516 12.832V7.756zm14.834 9.748l4.394-2.54V9.888l-4.394 2.538v5.078z"/>
        </svg>
      ),
    },
    {
      group: 2,
      position: 'g2-c',
      size: 'large',
      label: 'OpenAI',
      bg: '#f0f0f0',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#10a37f">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.065 6.065 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
        </svg>
      ),
    },
    {
      group: 2,
      position: 'g2-d',
      size: 'sm',
      label: 'Prometheus',
      bg: '#fff4ee',
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#e6522c">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm-.375 4.5h.75v1.5h-.75V4.5ZM12 18.75A6.75 6.75 0 1 1 12 5.25a6.75 6.75 0 0 1 0 13.5Zm.375-5.25h-.75V9h.75v4.5Zm0 2.25h-.75V14.25h.75V15.75Z"/>
          <circle cx="12" cy="12" r="5" fill="none" stroke="#e6522c" strokeWidth="1.2"/>
          <path d="M12 8v4l2.5 2.5" stroke="#e6522c" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      ),
    },
    // Ring 3 (4 items - outer)
    {
      group: 3,
      position: 'g3-a',
      size: 'large',
      label: 'Claude AI',
      bg: '#f9f5f0',
      icon: (
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="#d97757" opacity="0.12"/>
          <path d="M13 28 Q20 10 27 28" stroke="#d97757" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M10 22 Q20 8 30 22" stroke="#d97757" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
          <circle cx="20" cy="20" r="3.5" fill="#d97757"/>
        </svg>
      ),
    },
    {
      group: 3,
      position: 'g3-b',
      size: 'sm',
      label: 'Jenkins',
      bg: '#fff8ee',
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="jk" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f0a040"/>
              <stop offset="100%" stopColor="#d4760a"/>
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill="url(#jk)" opacity="0.2"/>
          <path d="M12 4a8 8 0 1 0 0 16A8 8 0 0 0 12 4zm0 2a6 6 0 1 1 0 12A6 6 0 0 1 12 6z" fill="#d4760a"/>
          <path d="M9 12l2 2 4-4" stroke="#d4760a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
    {
      group: 3,
      position: 'g3-c',
      size: 'large',
      label: 'Hugging Face',
      bg: '#fffbf0',
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="#FFD21E">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-4c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v3.5z" fill="#FFD21E"/>
          <circle cx="9.5" cy="14" r="1.5" fill="#ff9a00"/>
          <circle cx="14.5" cy="14" r="1.5" fill="#ff9a00"/>
          <path d="M9 10h2M13 10h2" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      group: 3,
      position: 'g3-d',
      size: 'sm',
      label: 'ArgoCD',
      bg: '#f0f8ff',
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="argo" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ef7b4d"/>
              <stop offset="100%" stopColor="#e96c36"/>
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill="url(#argo)" opacity="0.18"/>
          <path d="M12 4 L20 18 L4 18 Z" fill="none" stroke="#e96c36" strokeWidth="1.8" strokeLinejoin="round"/>
          <circle cx="12" cy="14" r="2.5" fill="#e96c36"/>
          <path d="M12 8 L12 11.5" stroke="#e96c36" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  const getPositionClass = (position: string) => {
    const positions: Record<string, string> = {
      'g1-a': 'left-[85px] top-0',
      'g1-b': 'left-[-42px] top-[73px]',
      'g1-c': 'left-[-42px] top-[-73px]',
      'g2-a': 'left-[150px] top-0',
      'g2-b': 'left-0 top-[150px]',
      'g2-c': 'left-[-150px] top-0',
      'g2-d': 'left-0 top-[-150px]',
      'g3-a': 'left-[205px] top-0',
      'g3-b': 'left-0 top-[205px]',
      'g3-c': 'left-[-205px] top-0',
      'g3-d': 'left-0 top-[-205px]',
    };
    return positions[position] || '';
  };

  const cards = [
    {
      title: 'GitHub Actions',
      desc: 'AI-powered CI/CD pipelines with automated review and deploy',
      bg: '#fff0ec',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#e96c36">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
        </svg>
      ),
    },
    {
      title: 'Kubernetes Orchestration',
      desc: 'Auto-scale AI workloads across clusters with zero downtime',
      bg: '#f0f5ff',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#326ce5">
          <path d="M12 2C6.476 2 2 6.476 2 12s4.476 10 10 10 10-4.476 10-10S17.524 2 12 2zm4.703 13.81l-3.813-1.423a1.05 1.05 0 0 0-.77.134l-3.29 2.74c-.634.514-1.578-.052-1.39-.852l.938-3.988a1.05 1.05 0 0 0-.254-1.007L5.428 8.302c-.541-.617-.012-1.58.777-1.43l3.789.646a1.05 1.05 0 0 0 .986-.146l3.333-2.556c.67-.489 1.6.141 1.388.931l-1.067 3.965a1.05 1.05 0 0 0 .042 1.017l1.477 3.563c.298.856-.408 1.754-1.17 1.47z"/>
        </svg>
      ),
    },
    {
      title: 'Claude API',
      desc: 'Drop-in intelligence layer for any app, pipeline or service',
      bg: '#f9f5f0',
      icon: (
        <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
          <path d="M10 30 Q20 10 30 30" stroke="#d97757" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <circle cx="20" cy="22" r="4" fill="#d97757"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white text-neutral-900 relative">
      {/* Hero Section */}
      <div className="integration-hero relative grid grid-cols-2 items-center min-h-[72vh] px-20 py-20 gap-10 overflow-hidden">
        {/* Orbit Container */}
        <div className="relative w-[420px] h-[420px] mx-auto flex-shrink-0">
          {/* Dashed Rings */}
          <div className="absolute top-1/2 left-1/2 w-[170px] h-[170px] border-[1.5px] border-dashed border-black/12 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] border-[1.5px] border-dashed border-black/12 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[410px] h-[410px] border-[1.5px] border-dashed border-black/12 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 w-[72px] h-[72px] bg-black rounded-full flex items-center justify-center z-20 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              boxShadow: '0 0 0 3px rgba(255,255,255,0.9), 0 0 0 5px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.18)'
            }}>
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <circle cx="16" cy="16" r="14" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.3"/>
              <path d="M10 20 Q16 8 22 20" stroke="#e8976a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <path d="M8 16 Q16 6 24 16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
              <circle cx="16" cy="16" r="2.5" fill="#e8976a"/>
            </svg>
          </div>

          {/* Orbit Groups */}
          {[1, 2, 3].map((groupNum) => (
            <div key={`orbit-group-${groupNum}`} className={`orbit-group-${groupNum} absolute top-1/2 left-1/2 w-0 h-0`}>
              {iconChips.filter(chip => chip.group === groupNum).map((chip) => (
                <div
                  key={`${chip.group}-${chip.position}`}
                  className={`icon-chip ${chip.size === 'large' ? 'w-[66px] h-[66px]' : chip.size === 'sm' ? 'w-[44px] h-[44px]' : 'w-[54px] h-[54px]'} rounded-full absolute flex items-center justify-center cursor-pointer transition-all hover:shadow-lg hover:scale-112 ${getPositionClass(chip.position)}`}
                  style={{
                    background: chip.bg,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)',
                    transform: 'translate(-50%, -50%)',
                  }}
                  data-tooltip={chip.label}
                >
                  {chip.icon}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right Text Column */}
        <div className="pl-5">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-neutral-900 border-[1.5px] border-black/20 px-4 py-1.5 rounded mb-7">
            Work with your tools
          </span>
          <h1 className="font-serif text-5xl font-light leading-tight mb-6">
            Seamless Integrations,<br/>Zero Hassle
          </h1>
          <p className="text-base font-light leading-relaxed text-neutral-600 max-w-md mb-10">
            Connect your AI pipelines in seconds — from GitHub Actions to Kubernetes, our agents orchestrate wherever you ship.
          </p>
          <a href="#" className="inline-flex items-center gap-2.5 bg-neutral-900 text-white text-sm font-medium px-7 py-3.5 rounded-lg transition-all hover:bg-neutral-800 hover:-translate-y-0.5">
            Explore Features
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="px-20 pb-20 grid grid-cols-3 gap-4">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white/70 border border-black/10 rounded-2xl p-6 flex gap-4.5 backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: 'rgba(255,255,255,0.7)' }}>
            <div className="w-[46px] h-[46px] rounded-full flex-shrink-0 flex items-center justify-center"
              style={{ background: card.bg }}>
              {card.icon}
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900 mb-1">{card.title}</div>
              <div className="text-xs font-light text-neutral-600 leading-relaxed">{card.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationsPipeline;
