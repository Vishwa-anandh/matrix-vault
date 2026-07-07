import { motion } from 'motion/react';
import { Network, Activity, BarChart3, Bot, Zap, Lock, ShieldAlert } from 'lucide-react';

const features = [
  {
    title: "Intelligent Access Control",
    description: "Manage hundreds of requests from a single view. Approve, reject, or escalate SAP access with automated workflow routing.",
    icon: Lock,
    colSpan: "md:col-span-2",
  },
  {
    title: "SAP Systems Integration",
    description: "Deep, native integration to manage Firefighter (FF) IDs and monitor critical SAP module health.",
    icon: Network,
    colSpan: "md:col-span-1",
  },
  {
    title: "AI Copilot Assistance",
    description: "Built-in AI assistant helps administrators navigate complex tasks, troubleshoot issues, and generate audit summaries instantly.",
    icon: Bot,
    colSpan: "md:col-span-1",
  },
  {
    title: "Real-time Analytics",
    description: "Complete visibility into active sessions, escalations, and historical request data with rich, interactive visualizations.",
    icon: BarChart3,
    colSpan: "md:col-span-2",
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
             <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
               Everything you need for <br/>
               <span className="text-red-600">Zero-Trust</span> SAP Governance
             </h2>
             <p className="text-slate-600 text-lg font-medium leading-relaxed">
               Matrix Vault transforms complex enterprise security protocols into an intuitive, automated experience, reducing audit preparation time by up to 80%.
             </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`group relative bg-slate-50 border border-slate-200 rounded-3xl p-8 overflow-hidden hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all ${feature.colSpan}`}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-100/50 rounded-full blur-3xl group-hover:bg-red-200/50 transition-colors -mr-20 -mt-20"></div>
              
              <div className="w-14 h-14 bg-white border border-slate-200 shadow-sm rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:border-red-100 group-hover:bg-red-50 transition-colors">
                <feature.icon className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
