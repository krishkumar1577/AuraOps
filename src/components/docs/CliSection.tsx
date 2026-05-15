import { Terminal } from 'lucide-react'
import CodeBlock from '../ui/CodeBlock'

export default function CliSection() {
  return (
    <section id="cli-commands" className="scroll-mt-32 mb-32">
      <div className="flex items-center gap-4 mb-12">
        <Terminal className="text-[#E4FF9C]" size={32} />
        <h2 className="text-4xl font-display font-bold tracking-tight text-white">1. CLI COMMANDS</h2>
      </div>

      <div className="space-y-24">
        {/* auraops init */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-[#E4FF9C]">auraops init</h3>
          <p className="text-white/80">Initialize a new AuraOps project in current directory.</p>
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/50">Syntax:</h4>
            <CodeBlock language="bash" code="auraops init [options]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-white/50">Options:</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><code className="text-white">-o, --output &lt;path&gt;</code> — Output directory</li>
                  <li><code className="text-white">--name &lt;name&gt;</code> — Project name</li>
                  <li><code className="text-white">--framework &lt;fw&gt;</code> — Force framework</li>
                </ul>
             </div>
             <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-white/50">What it does:</h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/70">
                  <li>Creates .auraops/ directory</li>
                  <li>Generates blueprint.json template</li>
                  <li>Sets up initial configuration</li>
                </ul>
             </div>
          </div>
        </div>

        {/* auraops deploy */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-[#E4FF9C]">auraops deploy</h3>
          <p className="text-white/80">Deploy an AI agent from current blueprint.</p>
          <CodeBlock language="bash" code="auraops deploy [options]" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-white/50">Expected Output:</h4>
                <div className="bg-white/5 p-6 rounded-xl font-mono text-xs text-white/80 border border-white/10">
                  <p className="text-[#E4FF9C]">✓ Logic synced</p>
                  <p className="text-[#E4FF9C]">✓ Model layers attached</p>
                  <p className="text-[#E4FF9C]">✓ Hardware synchronized</p>
                  <p className="text-[#E4FF9C]">✓ Agent live on &lt;URL&gt;</p>
                  <br/>
                  <p>Deployment ID: dep_abc123xyz</p>
                  <p>View logs: auraops logs dep_abc123xyz</p>
                </div>
             </div>
             <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-white/50">Error States:</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><span className="text-red-400">Blueprint not found</span></li>
                  <li><span className="text-red-400">Framework detection failed</span></li>
                  <li><span className="text-red-400">GPU unavailable</span></li>
                  <li><span className="text-red-400">Deployment timeout (&gt;30s)</span></li>
                </ul>
             </div>
          </div>
        </div>

        {/* auraops status */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-[#E4FF9C]">auraops status</h3>
          <p className="text-white/80">Check status of running deployment.</p>
          <CodeBlock language="bash" code="auraops status <deployment-id> [options]" />
        </div>

        {/* auraops logs */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-[#E4FF9C]">auraops logs</h3>
          <p className="text-white/80">Stream logs from running deployment.</p>
          <CodeBlock language="bash" code="auraops logs <deployment-id> --follow" />
        </div>
      </div>
    </section>
  )
}
