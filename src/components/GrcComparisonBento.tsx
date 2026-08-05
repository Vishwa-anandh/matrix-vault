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
  ArrowRight,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const bentoItems = [
  {
    id: 'firefighter',
    domain: 'Emergency Access',
    title: 'Firefighter Emergency Access & AI',
    badge: '0–100 AI score',
    icon: Flame,
    gridSpan: 'lg:col-span-12',
    matrixVaultTitle: 'AI session scoring & revoke',
    matrixVaultDesc: 'AI rates firefighter sessions 0–100 with executive summaries and instant one-click session termination.',
    matrixPoints: ['Behavioral risk scoring', 'One-click session kill switch', 'Executive session summary'],
    legacyTitle: 'Basic access logs',
    legacyDesc: 'Raw log tables without AI anomaly detection or instant session revocation.'
  },
  {
    id: 'sod',
    domain: 'Risk Management',
    title: 'SoD Risk Analysis & Live Gating',
    badge: 'Sub-200ms speed',
    icon: ShieldCheck,
    gridSpan: 'lg:col-span-6',
    matrixVaultTitle: 'Live inline prevention',
    matrixVaultDesc: 'Automatically intercepts role assignments, profile changes, and user creation before transport; blocks conflicts in real-time.',
    matrixPoints: ['Sub-200ms OData evaluation', 'Zero post-audit backlog'],
    legacyTitle: 'Background batch runs',
    legacyDesc: 'Scheduled risk analysis runs hours or days after changes occur, leaving compliance gaps.'
  },
  {
    id: 'provisioning',
    domain: 'Access Provisioning',
    title: 'User & Role Provisioning Wizard',
    badge: '6-Step flow',
    icon: Zap,
    gridSpan: 'lg:col-span-6',
    matrixVaultTitle: 'Guided conflict-free wizard',
    matrixVaultDesc: 'Step-by-step flow with real-time SoD conflict checks and inline approver verification.',
    matrixPoints: ['Guided 6-step workflow', 'Instant risk warnings'],
    legacyTitle: 'Complex MSMP / BRF+',
    legacyDesc: 'Multi-step configuration requiring separate risk checks.'
  },
  {
    id: 'radar',
    domain: 'Security Intelligence',
    title: 'Universal Security Radar View',
    badge: '1 Unified bar',
    icon: Search,
    gridSpan: 'lg:col-span-6',
    matrixVaultTitle: 'Single search discovery',
    matrixVaultDesc: 'Instantly surfaces Roles, Users, Profiles, SoD Rules, and T-Codes across all SAP instances.',
    matrixPoints: ['Cross-module search', 'Connected object graph'],
    legacyTitle: 'Siloed GRC apps',
    legacyDesc: 'Data fragmented across separate ARA and ARM reporting screens.'
  },
  {
    id: 'analytics',
    domain: 'Role Analytics',
    title: '100-Role Comparison & Change Lens',
    badge: '100 Roles',
    icon: Layers,
    gridSpan: 'lg:col-span-6',
    matrixVaultTitle: 'Side-by-side simulation',
    matrixVaultDesc: 'Compare up to 100 roles simultaneously for T-Code and auth-object collisions prior to transport.',
    matrixPoints: ['Pre-transport impact check', 'Collision matrix'],
    legacyTitle: 'Manual export & compare',
    legacyDesc: 'Role comparisons require manual table exports and spreadsheet analysis.'
  },
  {
    id: 'odata',
    domain: 'Architecture',
    title: 'OData Native Architecture',
    badge: '2–4 Wks rollout',
    icon: Cpu,
    gridSpan: 'lg:col-span-6',
    matrixVaultTitle: 'Lightweight OData connector',
    matrixVaultDesc: 'Zero heavy ABAP add-on stack. Deploys natively on S/4HANA & ECC with live health telemetry.',
    matrixPoints: ['No heavy ABAP package', 'Turnkey 2-4 week setup'],
    legacyTitle: 'Heavy ABAP stack',
    legacyDesc: 'Requires NetWeaver add-ons, RFC links, and long deployment cycles.'
  },
  {
    id: 'audit',
    domain: 'Audit & Compliance',
    title: 'One-Click Audit Evidence Vault',
    badge: '1-Click export',
    icon: FileSpreadsheet,
    gridSpan: 'lg:col-span-6',
    matrixVaultTitle: 'Consolidated evidence vault',
    matrixVaultDesc: 'Single-pane view combining approval trails, change logs, and notes with scheduled PDF/XLSX exports.',
    matrixPoints: ['Single-pane audit trail', 'Scheduled PDF/XLSX export'],
    legacyTitle: 'Fragmented audit logs',
    legacyDesc: 'Audit evidence spread across disparate logs requiring manual compilation.'
  }
];

export function GrcComparisonBento() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-b border-slate-200 transition-colors duration-300">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-100/40 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-red-200 text-red-600 text-xs font-extrabold mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Platform comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              Matrix Vault <span className="text-red-600">vs. Traditional SAP GRC</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
              Discover how Matrix Vault's modern OData platform transforms SAP governance across all 7 core domains.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid: 1 Full Card in Row 1 + 2 Cards per Row in remaining 3 Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {bentoItems.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`${item.gridSpan} bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-red-50 text-red-600 border border-red-100 rounded-2xl shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 block">{item.domain}</span>
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span className="bg-red-50 text-red-600 border border-red-200 text-xs font-bold px-3 py-1 rounded-full shrink-0 shadow-2xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* Comparison Side-by-Side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Matrix Vault Highlight Box */}
                    <div className="bg-red-50/60 border border-red-200/80 rounded-2xl p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-extrabold text-red-600 flex items-center gap-1.5">
                            <Shield className="w-3.5 h-3.5 text-red-600" /> Matrix Vault
                          </span>
                          <span className="text-[10px] font-bold text-red-600 bg-white px-2 py-0.5 rounded-md border border-red-200">
                            Modern OData
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 mb-1">{item.matrixVaultTitle}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">{item.matrixVaultDesc}</p>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-red-200/60">
                        {item.matrixPoints.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Legacy GRC Box */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                            <XCircle className="w-3.5 h-3.5 text-slate-400" /> Traditional SAP GRC
                          </span>
                          <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                            Legacy ABAP
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-slate-700 mb-1">{item.legacyTitle}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed mb-3">{item.legacyDesc}</p>
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 text-[10px] text-slate-400 font-semibold">
                        Constraint: Manual batch runs & technical overhead
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer link */}
                <div className="pt-3 mt-auto border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{item.domain}</span>
                  <Link to="/features" className="text-red-600 hover:text-red-700 font-bold flex items-center gap-1">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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










