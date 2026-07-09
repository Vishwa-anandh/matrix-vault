import { motion } from 'motion/react';
import { PlayCircle, ShieldCheck, AlertTriangle } from 'lucide-react';

export function RoleSimulator() {
  return (
    <section className="py-24 bg-white relative border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
             <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
               Model Before You <br/>
               <span className="text-red-600">Modify</span>
             </h2>
             <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8">
               Don't let SoD conflicts slip into production. Our interactive <strong className="text-slate-900">Role Simulator</strong> lets you stage proposed role additions and removals, computing permission differences and SoD violations before a single change touches SAP.
             </p>
             <ul className="space-y-4 mb-8">
               <li className="flex items-center gap-3 text-slate-700 font-medium">
                 <ShieldCheck className="w-5 h-5 text-green-500" /> Live permission previews
               </li>
               <li className="flex items-center gap-3 text-slate-700 font-medium">
                 <AlertTriangle className="w-5 h-5 text-amber-500" /> Instant conflict flagging
               </li>
               <li className="flex items-center gap-3 text-slate-700 font-medium">
                 <PlayCircle className="w-5 h-5 text-red-500" /> Exportable impact reports
               </li>
             </ul>
          </motion.div>

          {/* Visual Mockup */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="absolute inset-0 bg-red-100 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-200">
                <div className="font-bold text-slate-800">Role Staging</div>
                <div className="bg-slate-200 text-slate-600 text-xs font-bold px-3 py-1 rounded-full">Simulation Mode</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <div>
                    <div className="font-bold text-slate-900">Z_FI_AP_CLERK</div>
                    <div className="text-sm text-slate-500">Accounts Payable</div>
                  </div>
                  <div className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-lg text-sm">+ Stage Add</div>
                </div>

                <div className="flex justify-center my-2">
                  <div className="w-px h-8 bg-slate-300"></div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl"
                >
                  <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-red-900 mb-1">SoD Conflict Detected</div>
                    <div className="text-sm text-red-700">
                      Adding this role conflicts with existing <strong className="font-semibold">Z_FI_AR_CLERK</strong> permissions. Proceeding will violate Rule <strong className="font-semibold">F014</strong>.
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
