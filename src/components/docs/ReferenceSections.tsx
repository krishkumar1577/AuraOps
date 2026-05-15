import { Globe, Database, Settings, AlertTriangle, Layers, Construction, Info, Download, Rocket } from 'lucide-react'
import CodeBlock from '../ui/CodeBlock'

export function InstallationSection() {
  return (
    <section id="installation" className="scroll-mt-32 mb-32">
      <div className="flex items-center gap-4 mb-12">
        <Download className="text-[#E4FF9C]" size={32} />
        <h2 className="text-4xl font-display font-bold tracking-tight text-white">2. INSTALLATION</h2>
      </div>
      <div className="space-y-16">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Package Installation</h3>
          <CodeBlock language="bash" code="npm install -g auraops" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
             <h4 className="text-sm font-bold mb-4 uppercase tracking-widest text-white/50">Node.js Requirements</h4>
             <ul className="space-y-2 text-white/80">
                <li>• Minimum: 18.x</li>
                <li>• Recommended: 20.x LTS</li>
             </ul>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
             <h4 className="text-sm font-bold mb-4 uppercase tracking-widest text-white/50">First-Time Setup</h4>
             <ol className="list-decimal list-inside space-y-2 text-white/80">
                <li>Create .env from example</li>
                <li>Configure providers</li>
                <li>Run <code className="text-[#E4FF9C]">auraops login</code></li>
             </ol>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Prerequisites</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
               { name: 'Redis Server', desc: 'For model weight caching' },
               { name: 'AWS S3 Bucket', desc: 'For model weight storage' },
               { name: 'GPU Provider', desc: 'LambdaLabs, Modal, or AWS' },
               { name: 'Docker', desc: 'For local testing only' }
             ].map(p => (
               <div key={p.name} className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Info className="text-[#E4FF9C]" size={20} />
                  <div>
                     <p className="font-bold text-white">{p.name}</p>
                     <p className="text-xs text-white/50">{p.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function GpuSection() {
  return (
    <section id="gpu-tiers" className="scroll-mt-32 mb-32">
      <div className="flex items-center gap-4 mb-12">
        <Globe className="text-[#E4FF9C]" size={32} />
        <h2 className="text-4xl font-display font-bold tracking-tight text-white">4. GPU TIERS & PROVIDERS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {[
           { name: 'A100 (40GB)', provider: 'LambdaLabs', price: '~$1.10', best: 'Large models' },
           { name: 'A100 (80GB)', provider: 'AWS', price: '~$2.20', best: 'Huge models' },
           { name: 'H100 (80GB)', provider: 'Modal', price: '~$2.50', best: 'Training' },
           { name: 'V100 (32GB)', provider: 'LambdaLabs', price: '~$0.60', best: 'Cost-effective' },
           { name: 'T4 (16GB)', provider: 'AWS/Modal', price: '~$0.35', best: 'Inference' },
           { name: 'RTX 4090', provider: 'Docker', price: 'Free', best: 'Testing' },
         ].map(gpu => (
           <div key={gpu.name} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
              <p className="text-[10px] font-mono text-white/40 uppercase mb-2">{gpu.provider}</p>
              <h4 className="text-xl font-bold mb-4 text-white">{gpu.name}</h4>
              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                 <span className="text-[#E4FF9C] font-mono text-xs">{gpu.price}/hr</span>
                 <span className="text-white/40 text-[10px] uppercase font-bold">{gpu.best}</span>
              </div>
           </div>
         ))}
      </div>
    </section>
  )
}

export function ApiSection() {
  return (
    <section id="api-reference" className="scroll-mt-32 mb-32">
      <div className="flex items-center gap-4 mb-12">
        <Database className="text-[#E4FF9C]" size={32} />
        <h2 className="text-4xl font-display font-bold tracking-tight text-white">5. API ENDPOINTS</h2>
      </div>
      <div className="space-y-16">
         <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.01]">
            <h4 className="font-bold text-xl mb-4 text-white">POST /api/v1/deploy</h4>
            <p className="text-white/70 mb-8">Triggers an immediate GPU acquisition and agent instantiation.</p>
            <CodeBlock language="json" code={`{ "blueprintId": "bp_xyz123", "gpuType": "a100", "provider": "lambdalabs" }`} />
         </div>
         <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.01]">
            <h4 className="font-bold text-xl mb-4 text-white">GET /api/v1/deployment/:id</h4>
            <p className="text-white/70 mb-8">Returns real-time metrics: utilization, VRAM usage, and uptime.</p>
         </div>
      </div>
    </section>
  )
}

export function QuickStartSection() {
  return (
    <section id="quick-start" className="scroll-mt-32 mb-32">
      <div className="flex items-center gap-4 mb-12">
        <Rocket className="text-[#E4FF9C]" size={32} />
        <h2 className="text-4xl font-display font-bold tracking-tight text-white">7. QUICK START GUIDE</h2>
      </div>
      <div className="bg-white/5 p-12 rounded-[40px] border border-white/10">
         <h3 className="text-2xl font-bold mb-8 text-white">Deploy Your First Agent (5 min)</h3>
         <div className="space-y-12">
            {[
              { step: '1', title: 'Create Project', code: 'mkdir my-agent && cd my-agent\nauraops init --name "my-first-agent"' },
              { step: '2', title: 'Add Dependencies', code: 'cat > requirements.txt << EOF\nlangchain==0.1.0\ntorch==2.1.0\nEOF' },
              { step: '3', title: 'Configure .env', code: 'cp .env.example .env\n# Update keys...' },
              { step: '4', title: 'Deploy', code: 'auraops deploy --gpu auto' }
            ].map(s => (
              <div key={s.step} className="relative pl-12 border-l border-white/10">
                 <div className="absolute left-[-16px] top-0 w-8 h-8 rounded-full bg-[#E4FF9C] text-[#0A0A0A] flex items-center justify-center font-bold text-sm">{s.step}</div>
                 <h4 className="text-lg font-bold mb-4 text-white">{s.title}</h4>
                 <CodeBlock language="bash" code={s.code} />
              </div>
            ))}
         </div>
      </div>
    </section>
  )
}

export function EnvVarsSection() {
  return (
    <section id="env-vars" className="scroll-mt-32 mb-32">
      <div className="flex items-center gap-4 mb-12">
        <Settings className="text-[#E4FF9C]" size={32} />
        <h2 className="text-4xl font-display font-bold tracking-tight text-white">6. ENVIRONMENT VARIABLES</h2>
      </div>
      <CodeBlock language="bash" code="# Core Required\nJWT_SECRET=your-secret\nMONGODB_URI=mongodb+srv://...\nREDIS_URL=redis://localhost:6379\n\n# Providers\nLAMBDALABS_TOKEN=token_xyz\nMODAL_TOKEN_ID=id_xyz" />
    </section>
  )
}

export function ErrorSection() {
  return (
    <section id="errors" className="scroll-mt-32 mb-32">
      <div className="flex items-center gap-4 mb-12">
        <AlertTriangle className="text-[#E4FF9C]" size={32} />
        <h2 className="text-4xl font-display font-bold tracking-tight text-white">8. ERROR REFERENCE</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         {[
           { err: 'Unauthorized', sol: 'Set AURAOPS_API_TOKEN env var' },
           { err: 'GPU unavailable', sol: 'Try different provider or retry' },
           { err: 'Redis failed', sol: 'Start redis service or container' },
           { err: 'Blueprint missing', sol: 'Run auraops init' },
         ].map(e => (
           <div key={e.err} className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 flex items-center justify-between">
              <span className="font-mono text-red-400 font-bold">{e.err}</span>
              <span className="text-xs text-white/40">{e.sol}</span>
           </div>
         ))}
      </div>
    </section>
  )
}

export function ArchitectureSection() {
  return (
    <section id="architecture" className="scroll-mt-32 mb-32">
      <div className="flex items-center gap-4 mb-12">
        <Layers className="text-[#E4FF9C]" size={32} />
        <h2 className="text-4xl font-display font-bold tracking-tight text-white">9. ARCHITECTURE</h2>
      </div>
      <p className="text-xl text-white/80 leading-relaxed font-light bg-white/5 p-12 rounded-[40px] border border-white/10 italic">
        When you run <code className="text-[#E4FF9C] font-bold">auraops deploy</code>, AuraOps orchestrates a 4-phase pipeline: (1) Blueprinting — requirements.txt is parsed to detect frameworks; (2) Smart Weights — weights are cached in Redis for fast retrieval; (3) Deterministic Locking — dependencies are locked using pip-compile; (4) GPU Orchestration — the backend acquires a GPU worker and deploys your agent container in &lt;30 seconds.
      </p>
    </section>
  )
}

export function LimitationsSection() {
  return (
    <section id="limitations" className="scroll-mt-32 mb-32">
      <div className="flex items-center gap-4 mb-12">
        <Construction className="text-[#E4FF9C]" size={32} />
        <h2 className="text-4xl font-display font-bold tracking-tight text-white">10. KNOWN LIMITATIONS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/50">What Works:</h4>
            <ul className="space-y-3 text-sm text-white/70">
               <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#E4FF9C]"/> Framework Detection</li>
               <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#E4FF9C]"/> Local Docker Dev</li>
               <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#E4FF9C]"/> Model Caching</li>
            </ul>
         </div>
         <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/50">In Progress:</h4>
            <ul className="space-y-3 text-sm text-white/40">
               <li>• Live GPU Metrics</li>
               <li>• Persistent MongoDB records</li>
               <li>• Provider Failover</li>
            </ul>
         </div>
      </div>
    </section>
  )
}
