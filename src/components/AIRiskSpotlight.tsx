import { motion } from 'motion/react';
import { FileText, ArrowRight, Sparkles, ChevronUp, Eye, ExternalLink, ShieldAlert, CheckCircle2 } from 'lucide-react';

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
    <section className="py-8 sm:py-10 lg:py-12 bg-slate-50 relative border-t border-b border-slate-200 transition-colors duration-300 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>AI Log Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              From Raw Logs to <span className="text-red-600">AI Risk Intelligence</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
              Matrix Vault translates cryptic SAP logs into plain-English narratives, giving non-technical stakeholders clear visibility into Firefighter sessions.
            </p>
          </motion.div>
        </div>

        {/* Bento Side-by-Side Cards (Full Width) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch">
          
          {/* Raw Logs Console Card (Spans 6 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white border border-slate-200 p-6 sm:p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-slate-700 font-extrabold text-xs tracking-wider uppercase">
                  <FileText className="w-4 h-4 text-slate-500" /> Raw SAP Log Stream
                </div>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                  System: PRD_100
                </span>
              </div>

              <div className="bg-slate-900 p-4 sm:p-5 rounded-2xl font-mono text-xs text-slate-300 space-y-2.5 overflow-x-auto shadow-inner leading-relaxed">
                <p><span className="text-slate-500">2023-10-24 14:32:01</span> | TCD: <span className="text-amber-400 font-bold">SE09</span> | USER: FF_DEV</p>
                <p className="text-slate-400 pl-4">AUTH_OBJ: S_DEVELOP | ACTVT: 02 | RC: 0</p>
                <p className="text-slate-400 pl-4">AUTH_OBJ: S_TRANSLAT | ACTVT: 22 | RC: 0</p>
                <p><span className="text-slate-500">2023-10-24 14:35:12</span> | TCD: <span className="text-red-400 font-bold">SE38</span> | USER: FF_DEV</p>
                <p className="text-slate-400 pl-4">AUTH_OBJ: S_PROGRAM | ACTVT: 01 | RC: 0</p>
                <p className="text-red-400 font-bold bg-red-950/60 p-1.5 rounded border border-red-800/60">
                  WARN: Dynamic ABAP execution via SE38
                </p>
                <p><span className="text-slate-500">2023-10-24 14:40:05</span> | LOGOFF | USER: FF_DEV</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Raw Unformatted Session Logs</span>
              <span className="text-slate-400">7 Entries Recorded</span>
            </div>
          </motion.div>

          {/* AI Risk Assessment Card (Spans 6 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white border border-slate-200 p-6 sm:p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-red-600 font-extrabold text-xs tracking-wider">
                  <Sparkles className="w-4 h-4 text-red-600" /> AI risk assessment
                </div>
                <div className="flex items-center gap-1.5 text-red-600 font-bold text-xs">
                  <span>75/100</span>
                  <ChevronUp className="w-4 h-4" />
                </div>
              </div>

              {/* Score Display & High Risk Badge */}
              <div className="flex items-end justify-between mb-3">
                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-extrabold text-red-600 leading-none">75</span>
                  <span className="text-base font-bold text-slate-400 ml-1.5">/100</span>
                </div>
                <span className="bg-red-600 text-white font-extrabold px-3 py-1 rounded-lg text-xs tracking-wider shadow-xs flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" /> High Risk
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mb-5 border border-slate-200/60">
                <div className="w-[75%] h-full bg-red-600 rounded-full"></div>
              </div>

              {/* AI Analysis Narrative */}
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium mb-5">
                The user primarily engaged in <strong className="text-slate-900 font-bold">SE09</strong> activities, with frequent use of <strong className="text-slate-900 font-bold">SE38</strong> for dynamic ABAP code execution, and logged off at the end of the session. Lower-signal activities included <strong className="text-slate-900 font-bold">SEGW</strong> and <strong className="text-slate-900 font-bold">SESSION_MANAGER</strong> transactions.
              </p>

              {/* T-Code Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {tcodes.map((tc, i) => (
                  <span
                    key={i}
                    className="bg-red-50 text-red-700 border border-red-200/80 px-2.5 py-1 rounded-md font-mono text-[11px] font-bold"
                  >
                    {tc}
                  </span>
                ))}
                <span className="text-slate-400 font-mono text-xs font-bold px-1 py-1">
                  +3
                </span>
              </div>
            </div>

            {/* Bottom Toolbar */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-800 font-bold text-xs cursor-pointer shadow-2xs">
                <FileText className="w-3.5 h-3.5 text-slate-500" /> View Logs
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-800 font-bold text-xs cursor-pointer shadow-2xs">
                <Eye className="w-3.5 h-3.5 text-slate-500" /> Details
              </button>
              <button className="p-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 cursor-pointer shadow-2xs" aria-label="Open external link">
                <ExternalLink className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
