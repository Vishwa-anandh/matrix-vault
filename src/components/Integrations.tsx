import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Integrations() {
  return (
    <section id="integrations" className="py-16 pb-20 sm:pb-16 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10 lg:mb-0"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
              Deep, native integration with your existing SAP landscape.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-8 font-medium leading-relaxed">
              No more manual syncs or spreadsheet exports. Matrix Vault connects directly to your SAP ERP, S/4HANA, and GRC systems to provide real-time access governance and automated provisioning.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Automated SAP Firefighter (FF) ID provisioning",
                "Real-time Segregation of Duties (SoD) checks",
                "Instant user access reviews (UAR)",
                "Seamless sync with SAP HR modules"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-950/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                  <span className="min-w-0 text-slate-700 dark:text-slate-200 font-semibold">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-slate-900 dark:bg-slate-800 rounded-full overflow-hidden transition-all hover:bg-slate-800 dark:hover:bg-slate-700 shadow-md">
              <span>View Supported Integrations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mb-6 sm:mb-0"
          >
            <div className="absolute inset-0 bg-red-200 dark:bg-red-950/30 rounded-3xl blur-3xl opacity-30 transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaborating on software integration"
              loading="lazy"
              className="relative rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800 object-cover object-center h-[320px] sm:h-[420px] lg:h-[500px] w-full max-w-full"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-5 left-4 sm:-left-6 max-w-[calc(100%-2rem)] sm:max-w-none bg-white dark:bg-slate-900 p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 sm:gap-4">
               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 dark:bg-blue-950/40 rounded-xl flex items-center justify-center shrink-0">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" alt="SAP" loading="lazy" className="w-7 sm:w-8" />
               </div>
               <div className="min-w-0">
                 <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">SAP Integration</div>
                 <div className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 truncate">Integration with S/4HANA</div>
               </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
