import { motion } from 'motion/react';
import { FileText, ArrowRight, Sparkles, ChevronUp, Eye, ExternalLink } from 'lucide-react';

const tcodes = [
  "SE09",
  "SEGW",
  "SESSION_MANAGER",
  "SE38",
  "S000",
  "STMS",
  "RFC",
  "/IWBEP/SB",
];

export function AIRiskSpotlight() {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 relative border-t border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
               From Raw Logs to <br/>
               <span className="text-red-600 dark:text-red-500">AI Risk Intelligence</span>
             </h2>
             <p className="text-slate-600 dark:text-slate-300 text-base font-medium leading-relaxed">
               Matrix Vault translates cryptic SAP logs into plain-English narratives, giving non-technical stakeholders clear visibility into Firefighter sessions.
             </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 items-stretch justify-center max-w-4xl mx-auto">
          
          {/* Raw Logs Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 min-w-0 bg-slate-900 p-4 sm:p-5 rounded-2xl shadow-xl font-mono text-xs text-slate-400 overflow-hidden relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 text-slate-500 border-b border-slate-800 pb-3 font-sans font-bold tracking-wider text-[11px]">
                <FileText className="w-3.5 h-3.5" /> Raw SAP Logs
              </div>
              <div className="space-y-2 opacity-70 text-[11px] sm:text-xs leading-relaxed">
                <p>2023-10-24 14:32:01 | TCD: SE09 | USER: FF_DEV</p>
                <p>AUTH_OBJ: S_DEVELOP | ACTVT: 02 | RC: 0</p>
                <p>AUTH_OBJ: S_TRANSLAT | ACTVT: 22 | RC: 0</p>
                <p>2023-10-24 14:35:12 | TCD: SE38 | USER: FF_DEV</p>
                <p>AUTH_OBJ: S_PROGRAM | ACTVT: 01 | RC: 0</p>
                <p>WARN: Dynamic ABAP execution via SE38</p>
                <p>2023-10-24 14:40:05 | LOGOFF | USER: FF_DEV</p>
              </div>
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
          </motion.div>

          <div className="hidden lg:flex items-center justify-center -mx-3 z-20">
             <div className="bg-red-600 p-2.5 rounded-full shadow-lg shadow-red-600/30 text-white">
               <ArrowRight className="w-5 h-5" />
             </div>
          </div>

          {/* AI Risk Assessment Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 min-w-0 bg-gradient-to-b from-red-50/40 to-white dark:from-red-950/20 dark:to-slate-900 p-4 sm:p-5 rounded-2xl shadow-xl border border-red-100 dark:border-slate-800 flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-red-100/60 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-red-600 dark:text-red-400 font-extrabold tracking-tight text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-red-500" />
                  <span>AI Risk Assessment</span>
                </div>
                <div className="flex items-center gap-1 text-red-600 dark:text-red-400 font-bold text-xs">
                  <span>75/100</span>
                  <ChevronUp className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Score Display & High Risk Badge */}
              <div className="flex items-end justify-between mb-3">
                <div className="flex items-baseline">
                  <span className="text-4xl font-black text-red-600 dark:text-red-500 leading-none">75</span>
                  <span className="text-lg font-bold text-red-300 dark:text-red-400/50 ml-1">/100</span>
                </div>
                <span className="bg-red-600 text-white font-extrabold px-2.5 py-0.5 rounded text-[10px] tracking-wider shadow-sm">
                  High Risk
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-200/80 dark:bg-slate-800 rounded-full overflow-hidden mb-4">
                <div className="w-[75%] h-full bg-red-600 dark:bg-red-500 rounded-full"></div>
              </div>

              {/* AI Analysis Narrative */}
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-medium mb-4">
                The user primarily engaged in <strong className="text-slate-900 dark:text-white font-bold">SE09</strong> activities, with frequent use of <strong className="text-slate-900 dark:text-white font-bold">SE38</strong> for dynamic ABAP code execution, and logged off at the end of the session. Lower-signal activities included <strong className="text-slate-900 dark:text-white font-bold">SEGW</strong> and <strong className="text-slate-900 dark:text-white font-bold">SESSION_MANAGER</strong> transactions.
              </p>

              {/* T-Code Badges */}
              <div className="flex flex-wrap gap-1 mb-4">
                {tcodes.map((tc, i) => (
                  <span
                    key={i}
                    className="bg-red-50/80 dark:bg-red-950/40 text-slate-800 dark:text-slate-200 border border-red-200/80 dark:border-red-900/50 px-2 py-0.5 rounded font-mono text-[10px] font-bold"
                  >
                    {tc}
                  </span>
                ))}
                <span className="text-slate-400 dark:text-slate-500 font-mono text-[10px] font-bold px-1 py-0.5">
                  +3
                </span>
              </div>
            </div>

            {/* Bottom Toolbar */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <button className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200 font-bold text-[11px]">
                <FileText className="w-3.5 h-3.5 text-slate-400" /> Logs
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200 font-bold text-[11px]">
                <Eye className="w-3.5 h-3.5 text-slate-400" /> Details
              </button>
              <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200" aria-label="Open external link">
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
