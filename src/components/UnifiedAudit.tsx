import { motion } from 'motion/react';
import { Database, FileText, CheckSquare, Clock } from 'lucide-react';

export function UnifiedAudit() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 relative border-t border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-[95%] xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
               One Screen, <br/>
               <span className="text-red-500">The Full Story</span>
             </h2>
             <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
               Stop hunting for evidence across multiple systems. The Unified Audit Workspace consolidates Timeline, Approval Trails, SAP Logs, and Notes for every request into a single pane of glass.
             </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-6 max-w-5xl mx-auto shadow-xl"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-slate-100 dark:border-slate-800 gap-4">
            <div className="min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1 break-words">REQ-2023-8942: Access for J.Smith</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">SOX Compliance Review ID: 9482A</p>
            </div>
            <button className="shrink-0 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-6 rounded-xl transition-colors text-sm">
              Download Audit PDF
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="col-span-1 md:col-span-1 space-y-6">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-bold tracking-wider">Requested</div>
                  <div className="font-medium text-sm text-slate-800 dark:text-slate-200">Oct 24, 09:12 AM</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-900/50 flex items-center justify-center shrink-0">
                  <CheckSquare className="w-5 h-5 text-green-500 dark:text-green-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-bold tracking-wider">Approved By</div>
                  <div className="font-medium text-sm text-green-600 dark:text-green-400">M. Davis (Security)</div>
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-3 bg-slate-50 dark:bg-slate-950/80 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-4 text-slate-500 dark:text-slate-400 text-sm font-bold tracking-wider">
                <Database className="w-4 h-4" /> Consolidated SAP Logs
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-slate-500 dark:bg-slate-400 mt-2 shrink-0"></div>
                  <div className="min-w-0 break-words">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Role Z_FI_GL_ACCOUNTANT assigned</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">System: PRD_100 | Executed by: SYSTEM_API</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
                  <div className="min-w-0 break-words">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Mitigation Control attached</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Control: FIN-002 (Quarterly Review) | Valid until: Dec 31, 2024</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-slate-500 dark:bg-slate-400 mt-2 shrink-0"></div>
                  <div className="min-w-0 break-words">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Request Closed</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">All provisioning steps completed successfully.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
