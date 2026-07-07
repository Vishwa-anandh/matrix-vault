import { CheckCircle2, ShieldAlert, ArrowRight, LockKeyhole } from 'lucide-react';
import { motion } from 'motion/react';

export function SecurityTrust() {
  return (
    <section id="security" className="py-24 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#00000011_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-slate-100 rounded-full blur-[80px] opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-sm font-semibold mb-6 backdrop-blur-sm">
                <ShieldAlert className="w-4 h-4" />
                <span>Uncompromising Security</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Built for the most demanding compliance requirements.
              </h2>
              <p className="text-slate-600 text-lg mb-8 font-medium">
                We understand that your SAP system houses your most critical business data. Matrix Vault is engineered from the ground up with a zero-trust architecture.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "SOC 2 Type II and ISO 27001 Certified",
                  "AES-256 Encryption at Rest & TLS 1.3 in Transit",
                  "Granular Role-Based Access Control (RBAC)",
                  "Immutable Audit Logging for Regulatory Compliance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-slate-400 flex-shrink-0" />
                    <span className="text-slate-700 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#" className="inline-flex items-center text-white font-bold bg-slate-900 hover:bg-slate-800 transition-colors px-6 py-3 rounded-full shadow-lg">
                View our Trust Center
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-2xl relative">
               <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                 <LockKeyhole className="w-32 h-32 text-slate-900" />
               </div>
               
               <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Live Threat Prevention</h3>
               
               <div className="space-y-4">
                 <motion.div whileHover={{ scale: 1.02 }} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div>
                      <div className="text-sm font-bold text-slate-900">Anomalous Access Detected</div>
                      <div className="text-xs font-semibold text-slate-500 mt-0.5">SAP Instance PRD_01</div>
                    </div>
                    <span className="px-3 py-1 bg-red-100 text-red-700 font-bold text-xs rounded-full border border-red-200 shadow-sm">Blocked</span>
                 </motion.div>
                 
                 <motion.div whileHover={{ scale: 1.02 }} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div>
                      <div className="text-sm font-bold text-slate-900">Firefighter Session Expired</div>
                      <div className="text-xs font-semibold text-slate-500 mt-0.5">User: E. Wallace &bull; FI_ADMIN</div>
                    </div>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 font-bold text-xs rounded-full border border-amber-200 shadow-sm">Revoked</span>
                 </motion.div>

                 <motion.div whileHover={{ scale: 1.02 }} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div>
                      <div className="text-sm font-bold text-slate-900">Audit Log Hashed</div>
                      <div className="text-xs font-semibold text-slate-500 mt-0.5">SHA-256 Verification</div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 font-bold text-xs rounded-full border border-green-200 shadow-sm">Verified</span>
                 </motion.div>
               </div>
               
               <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between bg-slate-50 -mx-8 -mb-8 px-8 py-4 rounded-b-2xl">
                 <span className="text-sm font-bold text-slate-600">System Status</span>
                 <div className="flex items-center gap-2 text-sm text-green-600 font-bold">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                   Fully Operational
                 </div>
               </div>
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
