import { CardFooter, DeployRow, RegistryItem, CodeLine, Message } from './helpers'

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
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#1e2b5f]/40 to-[#111113] border border-[#386dff]/30 rounded-[8px] px-3 py-2.5">
              <span className="text-[10px] font-mono text-[#818cf8] font-semibold">$</span>
              <span className="text-[11px] text-[#c7d2fe] font-mono">/deploy --gpu-a100 --cache-warm</span>
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
                <div className="text-[9.5px] font-semibold text-white/25 uppercase tracking-wider mb-1.5">Pinned artifacts (.safetensors + LFS)</div>
                <RegistryItem name="llama-3-8b.safetensors" size="4.7 GB" checked/>
                <RegistryItem name="bge-small-en-v1.5.safetensors" size="133 MB" checked/>
                <RegistryItem name="whisper-large-v3.safetensors" size="2.9 GB" opacity={0.45}/>
              </div>
              <div className="flex items-center gap-1.5 px-0.5 text-[9.5px] text-white/30 font-mono">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <circle cx="5.5" cy="5.5" r="4" stroke="#4ade80" strokeWidth="1.2"/>
                  <path d="M3.5 5.5l1.5 1.5 3-2.5" stroke="#4ade80" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#4ade80] font-semibold">Git LFS cached</span> · <span className="text-white/40">sub-2s pull</span>
              </div>
            </div>
          </div>
          <CardFooter title="Smart weight pinning." desc=".safetensors + Git LFS — cache once, deploy instantly. No bloat, no conflicts."/>
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