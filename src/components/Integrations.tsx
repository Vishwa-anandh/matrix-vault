import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Integrations() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Deep, native integration with your existing SAP landscape.
            </h2>
            <p className="text-slate-600 text-lg mb-8 font-medium leading-relaxed">
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
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-slate-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-slate-900 rounded-full overflow-hidden transition-all hover:bg-slate-800 shadow-md">
              <span>View Supported Integrations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-red-200 rounded-3xl blur-3xl opacity-30 transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaborating on software integration" 
              className="relative rounded-3xl shadow-2xl border-4 border-white object-cover h-[500px] w-full"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
               <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" alt="SAP" className="w-8" />
               </div>
               <div>
                 <div className="text-sm font-bold text-slate-900">SAP Certified</div>
                 <div className="text-xs font-semibold text-slate-500">Integration with S/4HANA</div>
               </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
