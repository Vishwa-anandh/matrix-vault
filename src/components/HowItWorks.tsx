import { motion } from 'motion/react';
import { Sliders, ShieldAlert, Layout } from 'lucide-react';

const steps = [
  {
    icon: Sliders,
    title: "1. Model Before You Modify",
    description: "Pick a user, stage role additions, and simulate permission differences and new SoD violations before any change is written to SAP."
  },
  {
    icon: ShieldAlert,
    title: "2. Mitigate or Remediate",
    description: "Action findings instantly — revoke conflicting access, lock the account, or attach a compensating control without leaving the findings list."
  },
  {
    icon: Layout,
    title: "3. One-Click Audit Trail",
    description: "Overview, Timeline, Approval Trail, SAP Logs, and Notes live in a single workspace with a one-click downloadable audit report."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
             <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
               How Matrix Vault Works
             </h2>
             <p className="text-slate-600 dark:text-slate-300 text-lg font-medium leading-relaxed">
               A streamlined, three-step process that eliminates bottlenecks without compromising on enterprise security.
             </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector Line (hidden on mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-slate-200 dark:bg-slate-800" />
              )}
              
              <div className="relative z-10 w-20 h-20 mx-auto bg-white dark:bg-slate-900 border-2 border-red-100 dark:border-red-900/50 shadow-md rounded-2xl flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-red-600 dark:text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
