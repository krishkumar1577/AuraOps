export default function BentoGrid(): React.ReactElement {
  return (
    <section className="bg-black min-h-screen py-12 px-7">
      <div className="grid grid-cols-4 gap-3.5">
        {/* ── CARD 1: Single Command ── */}
        <div className="bg-[#161618] border border-white/6 rounded-2xl overflow-hidden flex flex-col">
          <div className="flex-1 p-[18px] pt-[18px] overflow-hidden">
            <div className="flex flex-col gap-1.5 mb-2.5">
              <div className="flex items-center gap-2.5 bg-[#111113] border border-white/7 rounded-[10px] px-3 py-2.25">
                <div className="w-7 h-7 rounded-[7px] bg-[#1a1a2e] flex items-center justify-center flex-shrink-0" style={{ background: '#1a1a2e' }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <rect x="2" y="2" width="11" height="11" rx="2" stroke="rgba(99,102,241,0.8)" strokeWidth="1.2"/>
                    <path d="M5 7.5l2 2 3.5-3" stroke="#818cf8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[11.5px] text-white/45 truncate">Detect LangChain · PyTorch · HuggingFace</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#111113] border border-white/7 rounded-[10px] px-3 py-2.25">
                <div className="w-7 h-7 rounded-[7px] bg-[#0d1a0d] flex items-center justify-center flex-shrink-0" style={{ background: '#0d1a0d' }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <circle cx="7.5" cy="7.5" r="5" stroke="#4ade80" strokeWidth="1.2"/>
                    <path d="M5 7.5l2 2 3-2.5" stroke="#4ade80" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[11.5px] text-white/45 truncate">Zero-config env · no CUDA conflicts</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#111113] border border-white/7 rounded-[10px] px-3 py-2.25">
                <div className="w-7 h-7 rounded-[7px] bg-[#1a100a] flex items-center justify-center flex-shrink-0" style={{ background: '#1a100a' }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M7.5 2v11M2 7.5h11" stroke="#f97316" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-[11.5px] text-white/45 truncate">GPU cloud · weights split from app layer</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#111113] border border-white/9 rounded-[8px] px-3 py-2">
              <div className="w-[18px] h-[18px] rounded-[4px] bg-white/7 flex items-center justify-center flex-shrink-0 text-[13px] text-white/35 leading-none">+</div>
              <span className="text-[11.5px] text-white/30 font-mono">/ auraops deploy --gpu a100</span>
            </div>
          </div>
          <CardFooter title="/= Slash commands." desc="Run one command. AuraOps analyzes frameworks, locks env, deploys to GPU."/>
        </div>

        {/* ── CARD 2: Embeds ── */}
        <div className="bg-[#161618] border border-white/6 rounded-2xl overflow-hidden flex flex-col">
          <div className="flex-1 p-[18px] overflow-hidden">
            <div className="flex flex-col gap-2">
              <div className="bg-[#111113] border border-white/7 rounded-[10px] p-3">
                <div className="flex items-center gap-1.75 mb-1.25">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <circle cx="6.5" cy="6.5" r="5" stroke="rgba(255,255,255,0.45)" strokeWidth="1.1"/>
                    <path d="M4 6.5l1.5 1.5L9 4.5" stroke="rgba(255,255,255,0.45)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[12px] font-semibold text-white/60">Linear · IOS-421 — OOM on weight loader</span>
                </div>
                <div className="text-[11px] text-white/28 leading-relaxed min-h-[48px] mb-1.5">Separating model weights from app image — Docker layer shrinks 4.2 GB. Rebuild now deterministic under 10s.</div>
                <div className="flex gap-1.25 mt-1.75 flex-wrap">
                  <span className="text-[9.5px] font-mono text-white/30 bg-white/5 px-1.75 py-0.5 rounded">pytorch</span>
                  <span className="text-[9.5px] font-mono text-white/30 bg-white/5 px-1.75 py-0.5 rounded">weights</span>
                  <span className="text-[9.5px] font-mono text-white/30 bg-white/5 px-1.75 py-0.5 rounded">docker</span>
                  <span className="text-[9.5px] font-mono text-white/30 bg-white/5 px-1.75 py-0.5 rounded">critical</span>
                </div>
              </div>
              <div className="bg-[#111113] border border-white/7 rounded-[10px] p-3" style={{ opacity: 0.55 }}>
                <div className="flex items-center gap-1.75 mb-1.25">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M6.5 2l3.5 2v3L6.5 9.5 3 7V4L6.5 2z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.1" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[12px] font-semibold text-white/60">Vercel · GPU preview — inference 74ms</span>
                </div>
                <div className="text-[11px] text-white/28 leading-1.5">A100 staging env · auto-scaled · zero cold start</div>
              </div>
            </div>
          </div>
          <CardFooter title="Embeds." desc="Linear issues, Vercel deploys, HuggingFace models — info at a glance."/>
        </div>

        {/* ── CARD 3: Activity / Deploy Feed ── */}
        <div className="bg-[#161618] border border-white/6 rounded-2xl overflow-hidden flex flex-col col-span-2">
          <div className="flex-1 p-[18px] overflow-hidden">
            <div className="flex flex-col gap-1.25">
              <DeployRow icon={<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="4.5" stroke="#4ade80" strokeWidth="1.1"/><path d="M4.5 6.5l1.5 1.5 3-2.5" stroke="#4ade80" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>} bg="#0d1a0d" name="llm-api-prod · langchain-v0.2" ref="main · a3f2c9d · Production" status="Ready" statusColor="#4ade80" time="18s" branch="Main"/>
              <DeployRow icon={<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 2.5l3.5 2v2.5l-3.5 2-3.5-2V4.5L6.5 2.5z" stroke="#f59e0b" strokeWidth="1.1" strokeLinejoin="round"/></svg>} bg="#1a1000" name="embed-worker · torch-2.3.0" ref="staging · b84521a · Production" status="Building" statusColor="#f59e0b" time="1m" branch="Main"/>
              <DeployRow icon={<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="4.5" stroke="rgba(99,102,241,0.6)" strokeWidth="1.1"/><path d="M5 6.5h3M6.5 5v3" stroke="rgba(99,102,241,0.6)" strokeWidth="1.1" strokeLinecap="round"/></svg>} bg="#0e0e14" name="rag-pipeline · faiss-1.7" ref="main · d92f140 · Production" status="Ready" statusColor="rgba(255,255,255,0.2)" time="3d" branch="Main" opacity={0.4}/>
            </div>
          </div>
          <CardFooter title="Activity channels." desc="Stay in the know. Every model push and rollout — live."/>
        </div>

        {/* ── CARD 4: Weight Registry ── */}
        <div className="bg-[#161618] border border-white/6 rounded-2xl overflow-hidden flex flex-col">
          <div className="flex-1 p-[18px] overflow-hidden">
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-0 items-center mb-0.5">
                <div style={{ width: '80px', height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', marginRight: '6px' }}></div>
                <div className="flex items-center gap-1.5 bg-[#111113] border border-white/7 rounded-[7px] px-2.5 py-1.25">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="5.5" r="4" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
                    <path d="M3.5 5.5l1.5 1.5 3-2.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[11px] font-semibold text-white/55">Weights Registry</span>
                </div>
              </div>
              <div className="bg-[#111113] border border-white/7 rounded-[10px] px-3 py-3">
                <div className="text-[9.5px] font-semibold text-white/25 uppercase tracking-wider mb-1.5">Pinned model artifacts</div>
                <RegistryItem name="llama-3-8b.Q4_K_M.gguf" size="4.7 GB" checked/>
                <RegistryItem name="bge-small-en-v1.5" size="133 MB" checked/>
                <RegistryItem name="whisper-large-v3" size="2.9 GB" opacity={0.45}/>
              </div>
              <div className="flex items-center gap-1.5 px-0.5 text-[10px] text-white/20 font-mono">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M5.5 2l3 1.7v2.6l-3 1.7-3-1.7V3.7L5.5 2z" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinejoin="round"/>
                </svg>
                <span>Deployments · Frontend</span>
              </div>
            </div>
          </div>
          <CardFooter title="Auto resource pinning." desc="We'll keep weights pinned and outside your app image — always."/>
        </div>

        {/* ── CARD 5: Collaborative Debugging ── */}
        <div className="bg-[#161618] border border-white/6 rounded-2xl overflow-hidden flex flex-col col-span-2">
          <div className="flex-1 p-[18px] overflow-hidden">
            <div className="bg-[#0e0e11] border border-white/7 rounded-[10px] overflow-hidden font-mono text-[10.5px]">
              <div className="flex items-center gap-1.25 px-3 py-1.75 border-b border-white/5">
                <div className="w-2.25 h-2.25 rounded-full" style={{ background: '#ff5f57' }}></div>
                <div className="w-2.25 h-2.25 rounded-full" style={{ background: '#febc2e' }}></div>
                <div className="w-2.25 h-2.25 rounded-full" style={{ background: '#28c840' }}></div>
                <span className="text-[10px] text-white/20 ml-1.75">auraops.config.py</span>
              </div>
              <div className="py-2.25 px-1">
                <CodeLine num="1" code={<><span className="text-[#c084fc]">from</span> auraops <span className="text-[#c084fc]">import</span> <span className="text-[#60a5fa]">InfraEngine</span></>}/>
                <CodeLine num="2" code={<><span className="text-[#c084fc]">from</span> langchain_core <span className="text-[#c084fc]">import</span> <span className="text-[#60a5fa]">BaseLLM</span></>}/>
                <CodeLine num="3" code={<><span className="text-[#60a5fa]">engine</span> = <span className="text-[#60a5fa]">InfraEngine</span>(<span className="text-[#86efac]">"./repo"</span></>} highlight tag="kawai"/>
                <CodeLine num="4" code={<><span className="text-white/20"># Conflicts detected: torch 2.3 requires CUDA 12.1</span></>}/>
                <CodeLine num="5" code={<><span className="text-[#60a5fa]">conflicts</span> = engine.<span className="text-[#60a5fa]">auto_detect</span>(<span className="text-[#86efac]">"cuda"</span>)</>}/>
                <CodeLine num="6" code={<><span className="text-white/20"># Found: [11.8 in env] vs [12.1 required]</span></>} tag="Krish"/>
                <CodeLine num="7" code={<>lock = engine.<span className="text-[#60a5fa]">auto_lock</span>(<span className="text-[#86efac]">"auraops.lock"</span>) <span className="text-white/20"># ✓</span></>}/>
                <CodeLine num="8" code={<>env = engine.<span className="text-[#60a5fa]">inject_env</span>(gpu=<span className="text-[#86efac]">"A100"</span>, cuda=<span className="text-[#86efac]">"12.1"</span></>}/>
                <CodeLine num="9" code={<>weights = engine.<span className="text-[#60a5fa]">separate_weights</span>() <span className="text-white/20"># 4.2GB → layer</span></>}/>
                <CodeLine num="10" code={<>engine.<span className="text-[#60a5fa]">deploy</span>(target=<span className="text-[#86efac]">"lambda-gpu"</span>, env=env)</>}/>
              </div>
            </div>
          </div>
          <CardFooter title="{ } Collaborative debugging." desc="Share and collaboratively debug GPU configs — together."/>
        </div>

        {/* ── CARD 6: AI Summarize ── */}
        <div className="bg-[#161618] border border-white/6 rounded-2xl overflow-hidden flex flex-col">
          <div className="flex-1 p-[18px] overflow-hidden">
            <div className="flex flex-col gap-2.25">
              <Message avatar="Ki" bg="#1e3a5f" name="kidkrish" time="11:42PM" text="staging failed — CUDA 11.8 vs 12.1 mismatch on"/>
              <Message avatar="K" bg="#1a3a1a" name="Krish" time="11:43PM" text="AuraOps pinned it — bumping base image now"/>
              <Message avatar="P" bg="#2a1a3a" name="Pokemon" time="11:44PM" text="torch 2.3 min requires 12.1 — deterministic lock?"/>
              <Message avatar="G" bg="#1e3a5f" name="Google" time="11:45PM" text="yes — locking cuda==12.1 in auraops.lock" opacity={0.4}/>
            </div>
            <div className="flex items-center gap-1.75 bg-[#5b5ef4]/10 border border-[#5b5ef4]/20 rounded-2xl p-2 mt-2.25">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="4.5" stroke="#818cf8" strokeWidth="1.2"/>
                <path d="M5 7c0-1.1.9-2 2-2s2 .9 2 2" stroke="#818cf8" strokeWidth="1.1" strokeLinecap="round"/>
                <circle cx="7" cy="7" r="1" fill="#818cf8"/>
              </svg>
              <span className="text-[10.5px] text-white/45 flex-1">CUDA conflict resolved — env locked 12.1</span>
              <span className="text-[9.5px] font-semibold text-[#818cf8] bg-[#5b5ef4]/15 rounded px-1.75 py-0.5 whitespace-nowrap">View fix</span>
            </div>
          </div>
          <CardFooter title="AI auto summarize." desc="Get the gist, without the fluff."/>
        </div>
      </div>
    </section>
  )
}

function CardFooter({ title, desc }: { title: string; desc: string }): React.ReactElement {
  const getIcon = () => {
    if (title.includes('/=')) return <IconSlash/>
    if (title.includes('Embeds')) return <IconEmbeds/>
    if (title.includes('Activity')) return <IconActivity/>
    if (title.includes('resource')) return <IconResource/>
    if (title.includes('Collaborative')) return <IconDebug/>
    return <IconAI/>
  }

  return (
    <div className="px-4.5 py-4.5 border-t border-white/5 mt-4">
      <div className="text-[13px] font-semibold text-white/75 tracking-[-0.15px] mb-1 flex items-center gap-1.5" style={{ opacity: 0.45 }}>
        {getIcon()}
        {title}
      </div>
      <div className="text-[11.5px] text-white/30 leading-relaxed min-h-[44px]">{desc}</div>
    </div>
  )
}

function DeployRow({ icon, bg, name, ref, status, statusColor, time, branch, opacity }: {
  icon: React.ReactElement
  bg: string
  name: string
  ref: string
  status: string
  statusColor: string
  time: string
  branch: string
  opacity?: number
}) {
  return (
    <div className="flex items-center gap-2.25 bg-[#111113] rounded-[9px] px-3 py-2.5" style={{ opacity: opacity || 1 }}>
      <div className="w-6 h-6 rounded-1.5 flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
        {icon}
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="text-[11px] font-semibold text-white/65 truncate">{name}</div>
        <div className="text-[9.5px] text-white/22 font-mono mt-0.25">{ref}</div>
      </div>
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: statusColor }}></span>
        <span className="text-[10px] font-semibold" style={{ color: statusColor }}>{status}</span>
        <span className="text-[9.5px] text-white/22 font-mono">{time}</span>
        <span className="text-[9.5px] text-white/22 font-mono">{branch}</span>
      </div>
    </div>
  )
}

function RegistryItem({ name, size, checked, opacity }: {
  name: string
  size: string
  checked?: boolean
  opacity?: number
}) {
  return (
    <div className="flex items-center gap-2 bg-[#111113] border border-white/6 rounded-[8px] px-2.5 py-2 mb-1.25" style={{ opacity: opacity || 1 }}>
      <div className={`w-3.5 h-3.5 rounded-[3px] flex-shrink-0 border-[1.5px] flex items-center justify-center ${checked ? 'bg-[#5b5ef4] border-[#5b5ef4]' : 'border-white/18'}`}>
        {checked && <svg width="7" height="7" viewBox="0 0 7 7" fill="none"><path d="M1 3.5l1.5 1.5L6 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </div>
      <span className="text-[11px] text-white/55 flex-1">{name}</span>
      <span className="text-[9.5px] text-white/22 font-mono">{size}</span>
    </div>
  )
}

function CodeLine({ num, code, highlight, tag }: {
  num: string | number
  code: React.ReactElement
  highlight?: boolean
  tag?: string
}) {
  return (
    <div className="flex items-center relative" style={{ position: 'relative' }}>
      {highlight && <div className="absolute inset-0 bg-[#5b5ef4]/10 pointer-events-none"></div>}
      <span className="w-[26px] text-right text-white/14 text-[10px] pr-2.25 flex-shrink-0">{num}</span>
      <span className="text-[10.5px] text-white/50 whitespace-nowrap">{code}</span>
      {tag && <div className="absolute -top-4 bg-[#1e1e2e] border border-[#5b5ef4]/40 rounded px-1.75 py-0.5 text-[9.5px] font-semibold text-white/75 font-sans whitespace-nowrap z-5" style={{ right: tag === 'MEnotkrish' ? '6px' : '34px' }}>{tag}</div>}
    </div>
  )
}

function Message({ avatar, bg, name, time, text, opacity }: {
  avatar: string
  bg: string
  name: string
  time: string
  text: string
  opacity?: number
}) {
  return (
    <div className="flex items-start gap-2" style={{ opacity: opacity || 1 }}>
      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-white" style={{ background: bg }}>
        {avatar}
      </div>
      <div>
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="text-[11px] font-bold text-white/70">{name}</span>
          <span className="text-[9.5px] text-white/22 font-mono">{time}</span>
        </div>
        <div className="text-[11px] text-white/35 leading-1.45 truncate max-w-[210px]">{text}</div>
      </div>
    </div>
  )
}

function IconSlash() {
  return <svg className="w-3.25 h-3.25 flex-shrink-0" style={{ opacity: 0.45 }} viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M2 6.5l3-3M2 6.5l3 3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

function IconEmbeds() {
  return <svg className="w-3.25 h-3.25 flex-shrink-0" style={{ opacity: 0.45 }} viewBox="0 0 13 13" fill="none"><rect x="2" y="2" width="9" height="9" rx="1.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.1"/><path d="M5 6.5h3M6.5 5v3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.1" strokeLinecap="round"/></svg>
}

function IconActivity() {
  return <svg className="w-3.25 h-3.25 flex-shrink-0" style={{ opacity: 0.45 }} viewBox="0 0 13 13" fill="none"><path d="M2 6.5l2 2L11 2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

function IconResource() {
  return <svg className="w-3.25 h-3.25 flex-shrink-0" style={{ opacity: 0.45 }} viewBox="0 0 13 13" fill="none"><path d="M6.5 2v9M3 9l3.5 2 3.5-2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

function IconDebug() {
  return <svg className="w-3.25 h-3.25 flex-shrink-0" style={{ opacity: 0.45 }} viewBox="0 0 13 13" fill="none"><path d="M3 4h7M3 6.5h5M3 9h3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round"/></svg>
}

function IconAI() {
  return <svg className="w-3.25 h-3.25 flex-shrink-0" style={{ opacity: 0.45 }} viewBox="0 0 13 13" fill="none"><path d="M2 4h9M2 6.5h6M2 9h4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round"/><path d="M10 8l1.5 1.5-1.5 1.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
