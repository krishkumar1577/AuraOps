import { Cpu, ChevronRight } from 'lucide-react'
import CodeBlock from '../ui/CodeBlock'

export default function FrameworksSection() {
  return (
    <section id="frameworks" className="scroll-mt-32 mb-32">
      <div className="flex items-center gap-4 mb-12">
        <Cpu className="text-[#E4FF9C]" size={32} />
        <h2 className="text-4xl font-display font-bold tracking-tight text-white">3. SUPPORTED FRAMEWORKS</h2>
      </div>
      
      <div className="overflow-hidden rounded-2xl border border-white/5 mb-12">
         <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-white/5 text-white/40 font-mono text-[10px] uppercase tracking-widest">
               <tr>
                  <th className="px-6 py-4">Framework</th>
                  <th className="px-6 py-4">Detection</th>
                  <th className="px-6 py-4">Python</th>
                  <th className="px-6 py-4">Status</th>
               </tr>
            </thead>
            <tbody className="text-white/70">
               {[
                 { name: 'PyTorch', pattern: 'torch', py: '3.9-3.11', status: '✅ Stable' },
                 { name: 'LangChain', pattern: 'langchain', py: '3.9-3.11', status: '✅ Stable' },
                 { name: 'Transformers', pattern: 'transformers', py: '3.9-3.11', status: '✅ Stable' },
                 { name: 'JAX', pattern: 'jax', py: '3.9-3.11', status: '✅ Stable' },
                 { name: 'TensorFlow', pattern: 'tensorflow', py: '3.9-3.10', status: '✅ Stable' },
               ].map(fw => (
                 <tr key={fw.name} className="border-t border-white/5">
                    <td className="px-6 py-4 font-bold text-white">{fw.name}</td>
                    <td className="px-6 py-4 font-mono text-xs">{fw.pattern}</td>
                    <td className="px-6 py-4">{fw.py}</td>
                    <td className="px-6 py-4">{fw.status}</td>
                 </tr>
               ))}
            </tbody>
         </table>
      </div>

      <div className="bg-white/[0.02] border border-white/5 p-10 rounded-3xl">
         <h4 className="text-xl font-bold mb-8">Detection Logic</h4>
         <p className="text-white/80 leading-relaxed mb-10">
           AuraOps scans your manifest files and applies a scoring system to identify the primary architecture. Hierarchy for ties:
         </p>
         
         {/* Visual Hierarchy Ladder */}
         <div className="flex flex-wrap items-center gap-3 mb-12">
            {['LangChain', 'Transformers', 'PyTorch', 'JAX', 'TensorFlow'].map((fw, i) => (
              <div key={fw} className="flex items-center gap-3">
                 <div className={`px-4 py-2 rounded-xl border font-bold text-xs uppercase tracking-widest transition-all
                   ${i === 0 ? 'bg-[#E4FF9C] text-[#0A0A0A] border-[#E4FF9C] shadow-[0_0_20px_rgba(228,255,156,0.3)]' : 'bg-white/5 text-white border-white/10'}
                 `}>
                    {fw}
                 </div>
                 {i < 4 && <ChevronRight size={14} className="text-white/20" />}
              </div>
            ))}
         </div>

         <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/50">Example Detection:</h4>
            <CodeBlock language="bash" code="# requirements.txt\ntorch==2.1.0\nlangchain==0.1.0\n\n# Terminal Output\n✓ LangChain 0.1 detected → primary use: agent" />
         </div>
      </div>
    </section>
  )
}
