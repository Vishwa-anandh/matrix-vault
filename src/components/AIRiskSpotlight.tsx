import { motion } from 'motion/react';
import { Bot, FileText, ArrowRight } from 'lucide-react';

export function AIRiskSpotlight() {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
             <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
               From Raw Logs to <br/>
               <span className="text-red-600">AI Risk Intelligence</span>
             </h2>
             <p className="text-slate-600 text-lg font-medium leading-relaxed">
               Matrix Vault translates cryptic SAP logs into plain-English narratives, giving non-technical stakeholders clear visibility into Firefighter sessions.
             </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center">
          
          {/* Raw Logs Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-slate-900 p-8 rounded-3xl shadow-xl font-mono text-sm text-slate-400 overflow-hidden relative"
          >
            <div className="flex items-center gap-2 mb-6 text-slate-500 border-b border-slate-800 pb-4 font-sans font-bold uppercase tracking-wider text-xs">
              <FileText className="w-4 h-4" /> Raw SAP Logs
            </div>
            <div className="space-y-2 opacity-70">
              <p>2023-10-24 14:32:01 | TCD: SU01 | USER: FF_ADMIN</p>
              <p>AUTH_OBJ: S_USER_GRP | ACTVT: 02 | RC: 0</p>
              <p>AUTH_OBJ: S_USER_PRO | ACTVT: 22 | RC: 0</p>
              <p>2023-10-24 14:35:12 | TCD: PFCG | USER: FF_ADMIN</p>
              <p>AUTH_OBJ: S_USER_AGR | ACTVT: 01 | RC: 0</p>
              <p>WARN: Table TRDIR updated via SE16N</p>
              <p>2023-10-24 14:40:05 | LOGOFF | USER: FF_ADMIN</p>
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </motion.div>

          <div className="hidden lg:flex items-center justify-center -mx-4 z-20">
             <div className="bg-red-600 p-3 rounded-full shadow-lg shadow-red-600/30 text-white">
               <ArrowRight className="w-6 h-6" />
             </div>
          </div>

          {/* AI Narrative Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white p-8 rounded-3xl shadow-xl border border-slate-200"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-wider text-xs">
                <Bot className="w-4 h-4" /> AI Risk Summary
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase">Risk Score</span>
                <span className="bg-red-100 text-red-700 font-extrabold px-3 py-1 rounded-full text-sm">85/100</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 text-lg">High-Risk Profile Modifications Detected</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                During this Firefighter session, the user extensively interacted with <strong className="text-slate-900">SU01</strong>, modifying critical user master records. 
              </p>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-800 text-sm font-medium">
                They also directly updated the <strong>TRDIR</strong> table (program directory) bypassing standard transport routes, which violates our change management policy.
              </div>
              <button className="mt-4 w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-xl hover:bg-red-600 transition-colors">
                Revoke Firefighter Access
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
