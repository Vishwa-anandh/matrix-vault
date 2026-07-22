import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Flame, 
  Search, 
  Layers, 
  Cpu, 
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const grcComparisons = [
  {
    category: "SoD Risk Analysis Timing",
    title: "Live In-Flow Gating vs. Batch Background Runs",
    matrixVault: "Live — runs automatically at role/profile assignment, revocation, and user creation; blocks progress until conflicts are reviewed.",
    traditionalGrc: "Commonly scheduled as background batch risk analysis jobs run hours or days after changes occur.",
    icon: ShieldCheck,
    span: "md:col-span-7",
    badge: "Real-Time Enforcement"
  },
  {
    category: "Firefighter & Emergency Access",
    title: "AI Risk Scoring vs. Raw Unscored Logs",
    matrixVault: "AI Risk Assessment score (0–100) per session with plain-language executive summaries & live session revoke.",
    traditionalGrc: "Emergency logs available, but AI-generated behavioral risk scoring of sessions is not a standard feature.",
    icon: Flame,
    span: "md:col-span-5",
    badge: "AI Intelligence"
  },
  {
    category: "User & Role Provisioning",
    title: "Guided 6-Step Wizard vs. MSMP Workflows",
    matrixVault: "Guided 6–7 step wizard (System → User → Roles → Profiles → SoD Analysis → Confirm) with inline SoD acknowledgment.",
    traditionalGrc: "Complex MSMP/BRF+ workflows where risk analysis is often a separate step or background run.",
    icon: Zap,
    span: "md:col-span-4",
    badge: "Guided Provisioning"
  },
  {
    category: "Universal Search",
    title: "Radar View vs. Fragmented GRC Apps",
    matrixVault: "Radar View — a single search bar surfaces Roles, Users, Profiles, User Groups, Findings, SoD Rules, and T-Codes in one place.",
    traditionalGrc: "Data is spread across separate GRC apps and reports (ARA, Role Management, User Access).",
    icon: Search,
    span: "md:col-span-4",
    badge: "Unified Discovery"
  },
  {
    category: "Role Analytics & Simulation",
    title: "100-Role Lens vs. Manual Spreadsheet Exports",
    matrixVault: "Compare up to 100 roles side-by-side for T-Codes, auth-objects, and SoD conflicts, plus pre-transport change simulation.",
    traditionalGrc: "Cross-role comparison requires manual data extraction; simulation is a separate technical process.",
    icon: Layers,
    span: "md:col-span-4",
    badge: "Pre-Transport Simulation"
  },
  {
    category: "Setup & Integration",
    title: "Lightweight OData vs. Heavy ABAP Add-On Stack",
    matrixVault: "Lightweight OData-based connector (Firefighter & Role Radar Service) with Health Check & live call history for 2-4 week rollout.",
    traditionalGrc: "Requires NetWeaver ABAP add-on stack, RFC connectivity, and longer configuration cycles.",
    icon: Cpu,
    span: "md:col-span-6",
    badge: "OData Native"
  },
  {
    category: "Audit Trail & Reporting",
    title: "One-Screen Audit Workspace vs. Custom BI Reports",
    matrixVault: "Audit Workspace consolidates Timeline, Approval Trail, SAP Logs, and Notes with on-demand scheduled PDF/XLSX export.",
    traditionalGrc: "Audit evidence spread across multiple logs/tables, requiring custom BI tools or manual compilation.",
    icon: FileSpreadsheet,
    span: "md:col-span-6",
    badge: "One-Click Audit"
  }
];

export function GrcComparisonBento() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative border-t border-b border-slate-200 transition-colors duration-300 overflow-hidden">
      {/* Glow Ambient background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-red-100/40 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-transparent border border-red-200 text-red-600 text-xs font-bold mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Feature-by-Feature Comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              Matrix Vault <span className="text-red-600">vs. Traditional SAP GRC</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
              Compare how Matrix Vault's lightweight OData architecture eliminates legacy GRC configuration friction, background batch latency, and manual audit compilation.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          {grcComparisons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`${item.span} bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-xl hover:bg-white hover:border-red-200 transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-transparent border border-red-200 text-red-600 font-bold text-xs">
                      <Icon className="w-3.5 h-3.5" /> {item.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{item.category}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Comparison Side-by-Side Boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="bg-red-50/70 border border-red-200/90 rounded-2xl p-4">
                      <div className="flex items-center gap-1.5 mb-2 text-red-600 font-bold text-xs">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                        <span>Matrix Vault</span>
                      </div>
                      <p className="text-xs font-bold text-slate-900 leading-snug">
                        {item.matrixVault}
                      </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-4">
                      <div className="flex items-center gap-1.5 mb-2 text-slate-400 font-bold text-xs">
                        <XCircle className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>Traditional SAP GRC</span>
                      </div>
                      <p className="text-xs font-medium text-slate-500 leading-snug">
                        {item.traditionalGrc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>{item.category}</span>
                  <Link to="/platform" className="text-red-600 hover:text-red-700 flex items-center gap-1">
                    See Features <ArrowRight className="w-3.5 h-3.5" />
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
