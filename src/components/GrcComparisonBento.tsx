import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  ChevronDown,
  ArrowRight,
  ShieldAlert,
  SlidersHorizontal
} from 'lucide-react';
import { Link } from 'react-router-dom';

const comparisons = [
  {
    id: 'sod',
    title: 'SoD Risk Analysis & Live Gating',
    metric: 'Sub-200ms',
    metricLabel: 'Real-time gating speed',
    icon: ShieldCheck,
    badge: 'Real-time enforcement',
    matrixVault: 'Live inline prevention — runs automatically at role/profile assignment, revocation, and user creation; blocks progress until conflicts are reviewed.',
    traditionalGrc: 'Commonly scheduled as background batch risk analysis jobs run hours or days after changes occur.',
    details: [
      'Inline OData risk check before transport',
      'Zero post-audit remediation backlog',
      'Automatic risk mitigation workflow'
    ]
  },
  {
    id: 'firefighter',
    title: 'Firefighter Emergency Access & AI',
    metric: '0–100',
    metricLabel: 'AI behavioral score',
    icon: Flame,
    badge: 'AI intelligence',
    matrixVault: 'AI Risk Assessment score per session with plain-language executive summaries & live session revoke.',
    traditionalGrc: 'Emergency logs available, but AI-generated behavioral risk scoring of sessions is not a standard feature.',
    details: [
      'Automated session risk scoring',
      'Plain-English executive summaries',
      'One-click emergency session termination'
    ]
  },
  {
    id: 'provisioning',
    title: 'User & Role Provisioning Wizard',
    metric: '6-Step',
    metricLabel: 'Guided wizard flow',
    icon: Zap,
    badge: 'Guided provisioning',
    matrixVault: 'Guided 6–7 step wizard (System → User → Roles → Profiles → SoD Analysis → Confirm) with inline SoD acknowledgment.',
    traditionalGrc: 'Complex MSMP/BRF+ workflows where risk analysis is often a separate step or background run.',
    details: [
      'Step-by-step role assignment',
      'Inline conflict warnings before commit',
      'Built-in approver assignment verification'
    ]
  },
  {
    id: 'radar',
    title: 'Universal Security Radar View',
    metric: '1 Search',
    metricLabel: 'Across all SAP objects',
    icon: Search,
    badge: 'Unified discovery',
    matrixVault: 'Radar View — a single search bar surfaces Roles, Users, Profiles, User Groups, Findings, SoD Rules, and T-Codes in one place.',
    traditionalGrc: 'Data is spread across separate GRC apps and reports (ARA, Role Management, User Access).',
    details: [
      'Universal search for any T-Code or user',
      'Interactive connected graph visualization',
      'Cross-module permission discovery'
    ]
  },
  {
    id: 'analytics',
    title: '100-Role Comparison & Lens',
    metric: '100 Roles',
    metricLabel: 'Simultaneous comparison',
    icon: Layers,
    badge: 'Pre-transport simulation',
    matrixVault: 'Compare up to 100 roles side-by-side for T-Codes, auth-objects, and SoD conflicts, plus pre-transport change simulation.',
    traditionalGrc: 'Cross-role comparison requires manual data extraction; simulation is a separate technical process.',
    details: [
      'Side-by-side authorization comparison',
      'Pre-transport change impact simulation',
      'T-Code overlap collision matrix'
    ]
  },
  {
    id: 'odata',
    title: 'OData Native Architecture',
    metric: '2–4 Wks',
    metricLabel: 'Turnkey rollout time',
    icon: Cpu,
    badge: 'OData native',
    matrixVault: 'Lightweight OData-based connector (Firefighter & Role Radar Service) with Health Check & live call history for rapid deployment.',
    traditionalGrc: 'Requires NetWeaver ABAP add-on stack, RFC connectivity, and longer configuration cycles.',
    details: [
      'Zero heavy ABAP package overhead',
      'Native S/4HANA & ECC support',
      'Built-in OData service health diagnostics'
    ]
  },
  {
    id: 'audit',
    title: 'One-Click Audit Evidence Vault',
    metric: '1 Click',
    metricLabel: 'PDF & XLSX export',
    icon: FileSpreadsheet,
    badge: 'One-click audit',
    matrixVault: 'Audit Workspace consolidates Timeline, Approval Trail, SAP Logs, and Notes with on-demand scheduled PDF/XLSX export.',
    traditionalGrc: 'Audit evidence spread across multiple logs/tables, requiring custom BI tools or manual compilation.',
    details: [
      'Single-pane timeline and approval logs',
      'Automated scheduled report delivery',
      'Audit-ready evidence package generator'
    ]
  }
];

export function GrcComparisonBento() {
  const [openId, setOpenId] = useState<string>('sod');

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white relative border-t border-b border-slate-200 transition-colors duration-300 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-red-100/30 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-transparent border border-red-200 text-red-600 text-xs font-bold mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Feature-by-feature comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              Matrix Vault <span className="text-red-600">vs. Traditional SAP GRC</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
              Explore how Matrix Vault's modern OData architecture outperforms legacy GRC across 7 critical governance domains.
            </p>
          </motion.div>
        </div>

        {/* Interactive Comparison Accordion List */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {comparisons.map((item, idx) => {
            const Icon = item.icon;
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-red-200 shadow-lg ring-1 ring-red-100' 
                    : 'bg-slate-50/70 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                {/* Accordion Row Header */}
                <button
                  onClick={() => setOpenId(isOpen ? '' : item.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`p-3 rounded-xl shrink-0 transition-colors ${
                      isOpen ? 'bg-red-600 text-white' : 'bg-white text-slate-700 border border-slate-200'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-bold text-red-600 bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium truncate">
                        {isOpen ? 'Click to collapse details' : item.matrixVault}
                      </p>
                    </div>
                  </div>

                  {/* Chevron Icon */}
                  <div className="shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-transform duration-300 ${
                      isOpen ? 'bg-red-50 border-red-200 text-red-600 rotate-180' : 'bg-white border-slate-200 text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Comparison Details */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-100 bg-slate-50/50 p-5 sm:p-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        
                        {/* Matrix Vault Box */}
                        <div className="p-5 rounded-2xl border-2 bg-red-50/80 border-red-300 shadow-sm transition-all">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-extrabold text-red-600 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4" /> Matrix Vault
                            </span>
                            <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded">
                              Modern OData
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed mb-3">
                            {item.matrixVault}
                          </p>
                          <ul className="space-y-1.5 pt-2 border-t border-red-200/60">
                            {item.details.map((d, i) => (
                              <li key={i} className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Traditional SAP GRC Box */}
                        <div className="p-5 rounded-2xl border bg-white border-slate-200 shadow-2xs transition-all">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                              <XCircle className="w-4 h-4 text-slate-400" /> Traditional SAP GRC
                            </span>
                            <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded">
                              Legacy ABAP
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                            {item.traditionalGrc}
                          </p>
                        </div>

                      </div>

                      <div className="flex items-center justify-between text-xs font-bold text-slate-500 pt-3 border-t border-slate-200/60">
                        <span>Domain: {item.title}</span>
                        <Link to="/platform" className="text-red-600 hover:text-red-700 flex items-center gap-1">
                          Explore feature <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
