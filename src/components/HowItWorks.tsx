import { motion } from 'motion/react';
import { FileUp, ShieldQuestion, CheckSquare, Search } from 'lucide-react';

const steps = [
  {
    icon: FileUp,
    title: "1. Request Access",
    description: "Users request temporary or permanent access via the intuitive self-service portal."
  },
  {
    icon: ShieldQuestion,
    title: "2. Risk Analysis",
    description: "Matrix Vault instantly simulates the access against SoD (Segregation of Duties) rules."
  },
  {
    icon: CheckSquare,
    title: "3. Automated Routing",
    description: "Low-risk requests are auto-approved; high-risk requests are routed to specific owners."
  },
  {
    icon: Search,
    title: "4. Continuous Audit",
    description: "All activity is logged securely for one-click compliance reporting during audits."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
             <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
               How Matrix Vault Works
             </h2>
             <p className="text-slate-600 text-lg font-medium leading-relaxed">
               A streamlined, four-step process that eliminates bottlenecks without compromising on enterprise security.
             </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-slate-200" />
              )}
              
              <div className="relative z-10 w-20 h-20 mx-auto bg-white border-2 border-red-100 shadow-md rounded-2xl flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm font-medium">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
