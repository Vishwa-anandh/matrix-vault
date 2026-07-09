import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Zap } from 'lucide-react';

const features = [
  {
    name: 'SoD Risk Analysis Timing',
    matrix: 'Live, in-flow checks',
    traditional: 'Background batch jobs',
  },
  {
    name: 'Role Simulation',
    matrix: 'Model before modifying',
    traditional: 'Separate technical process',
  },
  {
    name: 'Risk Intelligence',
    matrix: 'AI-generated narratives',
    traditional: 'Raw technical logs',
  },
  {
    name: 'Audit Trail',
    matrix: 'Unified single screen',
    traditional: 'Scattered across logs',
  },
  {
    name: 'Remediation',
    matrix: 'Directly from findings',
    traditional: 'Separate configuration',
  },
];

export function Comparison() {
  return (
    <section className="py-24 bg-white relative border-t border-slate-200 text-slate-900">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[100px]"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
             <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
               Matrix Vault vs. <br/>
               <span className="text-slate-500">Traditional SAP GRC</span>
             </h2>
             <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
               Stop waiting for overnight batch jobs. Experience real-time access governance built for modern security teams.
             </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 p-6 font-bold text-lg">
            <div className="col-span-1 text-slate-500">Capability</div>
            <div className="col-span-1 text-red-600 flex items-center gap-2 justify-center">
              <Zap className="w-5 h-5" /> Matrix Vault
            </div>
            <div className="col-span-1 text-slate-400 text-center">Legacy GRC</div>
          </div>
          
          <div className="divide-y divide-slate-100">
            {features.map((feature, i) => (
              <div key={i} className="grid grid-cols-3 p-6 items-center hover:bg-slate-50/50 transition-colors">
                <div className="col-span-1 font-medium text-slate-900">
                  {feature.name}
                </div>
                <div className="col-span-1 flex items-center justify-center gap-3 text-slate-900 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-center">{feature.matrix}</span>
                </div>
                <div className="col-span-1 flex items-center justify-center gap-3 text-slate-400">
                  <XCircle className="w-5 h-5 text-slate-300 shrink-0" />
                  <span className="text-center text-sm">{feature.traditional}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
