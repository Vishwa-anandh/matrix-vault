import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Sliders, 
  Layers, 
  Search, 
  BrainCircuit, 
  FileCheck2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    title: "Live, In-Flow SoD Checks",
    description: "Risk is analyzed inside every create/assign/revoke step — not a separate batch job run after the fact.",
    icon: ShieldCheck,
    badgeColor: "bg-transparent text-red-600 border-red-200",
    badge: "Real-time inspection"
  },
  {
    title: "Role Simulator",
    description: "Model a user's access changes and preview new SoD violations before anything touches SAP.",
    icon: Sliders,
    badgeColor: "bg-transparent text-red-600 border-red-200",
    badge: "Pre-transport modeling"
  },
  {
    title: "Role Lens",
    description: "Compare up to 100 roles side-by-side for T-Code, auth-object and permission overlap in seconds.",
    icon: Layers,
    badgeColor: "bg-transparent text-blue-700 border-blue-200",
    badge: "Role overlap matrix"
  },
  {
    title: "Radar View",
    description: "One search box across Roles, Users, Profiles, User Groups, T-Codes, SoD Rules and Findings.",
    icon: Search,
    badgeColor: "bg-transparent text-purple-700 border-purple-200",
    badge: "Universal search"
  },
  {
    title: "AI Risk Intelligence",
    description: "AI-generated risk scores, session summaries and executive summaries — not just raw logs.",
    icon: BrainCircuit,
    badgeColor: "bg-transparent text-amber-700 border-amber-200",
    badge: "Behavioral scoring"
  },
  {
    title: "Unified Audit Workspace",
    description: "Timeline, Approval Trail, SAP Logs and Notes for every request in one screen.",
    icon: FileCheck2,
    badgeColor: "bg-transparent text-emerald-700 border-emerald-200",
    badge: "One-click evidence"
  },
];

export function CapabilityGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative border-t border-b border-slate-200 transition-colors duration-300 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-transparent border border-red-200 text-red-600 text-xs font-bold mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Core platform features</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight sm:whitespace-nowrap">
              Enterprise Access Risk <span className="text-red-600">Capabilities</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
              Powerful, real-time tools designed to streamline SAP access governance and simplify audit compliance.
            </p>
          </motion.div>
        </div>

        {/* 6-Card Light Mode Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white border border-slate-200 rounded-3xl p-7 shadow-xs hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-transparent text-red-600 border border-slate-200 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Matrix Vault core</span>
                  <Link to="/platform" className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-bold">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
