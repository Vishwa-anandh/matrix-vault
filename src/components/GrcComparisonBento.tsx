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
  Shield,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const bentoItems = [
  {
    id: 'firefighter',
    domain: 'Emergency Access',
    title: 'Firefighter Emergency Access',
    badge: 'AI Risk Score 0–100',
    icon: Flame,
    matrixVaultTitle: 'AI-scored sessions with live revoke',
    matrixVaultDesc: 'Firefighter requests carry an AI Risk Assessment score (0–100) per session with a plain-language summary of what the user actually did, plus live session revoke.',
    matrixPoints: ['Behavioral risk scoring', 'Live session kill switch', 'AI executive summaries'],
    legacyTitle: 'Standard emergency logs',
    legacyDesc: 'Emergency Access Management logs are available, but AI-generated behavioral risk scoring of sessions is not a standard capability.',
    legacyPoints: ['Standard access logs only', 'No live session termination', 'Manual review required']
  },
  {
    id: 'sod',
    domain: 'Risk Management',
    title: 'SoD Risk Analysis',
    badge: 'Live & Inline',
    icon: ShieldCheck,
    matrixVaultTitle: 'Real-time inline prevention',
    matrixVaultDesc: 'Runs automatically at role/profile assignment, revocation, and user creation; blocks progress until conflicts are reviewed and acknowledged.',
    matrixPoints: ['Automatic execution at assignment', 'Blocks progress until reviewed'],
    legacyTitle: 'Background batch jobs',
    legacyDesc: 'Commonly scheduled as background batch risk analysis jobs; real-time checks depend on additional configuration.',
    legacyPoints: ['Scheduled batch execution', 'No default inline blocking']
  },
  {
    id: 'provisioning',
    domain: 'Access Provisioning',
    title: 'User & Role Provisioning',
    badge: '6-7 Step Wizard',
    icon: Zap,
    matrixVaultTitle: 'Guided wizard with inline SoD',
    matrixVaultDesc: 'Guided 6–7 step wizard with SoD acknowledgement built directly into the flow.',
    matrixPoints: ['Guided 6-7 step workflow', 'Inline SoD acknowledgement'],
    legacyTitle: 'Complex workflow routing',
    legacyDesc: 'Access requests typically routed through configurable workflows (MSMP/BRF+); risk analysis is often a separate step.',
    legacyPoints: ['Complex workflow routing', 'Separated risk analysis']
  },
  {
    id: 'radar',
    domain: 'Security Intelligence',
    title: 'Universal Search Radar View',
    badge: '1 Unified Search',
    icon: Search,
    matrixVaultTitle: 'Single search discovery',
    matrixVaultDesc: 'A single search bar surfaces Roles, Users, Profiles, User Groups, Findings, SoD Rules, and T-Codes with relationships in one place.',
    matrixPoints: ['Cross-module search', 'Connected object relationships'],
    legacyTitle: 'Siloed GRC applications',
    legacyDesc: 'Data is generally spread across separate GRC apps/reports (Access Risk Analysis, Role Management), requiring multiple navigations.',
    legacyPoints: ['Siloed applications', 'Disconnected data views']
  },
  {
    id: 'analytics',
    domain: 'Role Analytics',
    title: 'Role Comparison & Analysis',
    badge: '100 Role Lens',
    icon: Layers,
    matrixVaultTitle: 'Instant role collision matrix',
    matrixVaultDesc: 'Role Lens lets you select up to 100 roles and instantly see matched/unmatched T-Codes, auth-objects, and SoD conflicts.',
    matrixPoints: ['Compare up to 100 roles', 'Instant SoD conflict visibility'],
    legacyTitle: 'Manual export workflows',
    legacyDesc: 'Cross-role comparison generally requires manual extraction/reporting rather than an interactive, self-service screen.',
    legacyPoints: ['Manual data extraction', 'Delayed conflict visibility']
  },
  {
    id: 'dashboard',
    domain: 'Risk Intelligence',
    title: 'Risk Intelligence Dashboard',
    badge: 'AI Summaries',
    icon: Sparkles,
    matrixVaultTitle: 'Unified dashboard with AI',
    matrixVaultDesc: 'Combines SoD Violations, Critical Access, Fraud Risk, and Vulnerabilities with detection trends and a Top Risk Users leaderboard, plus AI-written summaries.',
    matrixPoints: ['Unified risk & vulnerability view', 'AI-written executive summaries'],
    legacyTitle: 'Fragmented reporting',
    legacyDesc: 'Access Risk Analysis and Fraud Management are typically separate modules; consolidated AI-written summaries are not standard.',
    legacyPoints: ['Fragmented reporting views', 'No AI executive summaries']
  },
  {
    id: 'setup',
    domain: 'Architecture',
    title: 'Setup & Integration',
    badge: 'Lightweight OData',
    icon: Cpu,
    matrixVaultTitle: 'Lightweight OData connector',
    matrixVaultDesc: 'Lightweight OData-based connector with a Health Check and visible SAP call history for fast, transparent onboarding.',
    matrixPoints: ['No heavy ABAP package', 'Visible SAP call history'],
    legacyTitle: 'Heavy ABAP stack',
    legacyDesc: 'Typically requires a NetWeaver ABAP add-on stack, RFC connectivity, and a longer implementation cycle.',
    legacyPoints: ['Requires ABAP add-on', 'Longer implementation cycle']
  },
  {
    id: 'evidence',
    domain: 'Compliance & Audit',
    title: 'Evidence Vault & Export',
    badge: 'Automated Export',
    icon: FileSpreadsheet,
    matrixVaultTitle: 'Scheduled Audit Export',
    matrixVaultDesc: 'Automated compliance packages with log timestamps for internal audit preparation in PDF and XLSX formats.',
    matrixPoints: ['Automated compliance packages', 'One-click evidence export'],
    legacyTitle: 'Manual audit compilation',
    legacyDesc: 'Audit evidence is typically gathered manually through disjointed screenshots and exports across multiple SAP modules.',
    legacyPoints: ['Manual evidence gathering', 'Fragmented audit trails']
  },
  {
    id: 'approver',
    domain: 'Governance',
    title: 'Approver Gap Matrix',
    badge: '100% Coverage',
    icon: UserCheck,
    matrixVaultTitle: 'Visual approver tracking',
    matrixVaultDesc: 'Visual matrix tracking role approver assignments across your entire SAP landscape to ensure 100% coverage.',
    matrixPoints: ['Global approver visibility', 'Instant gap identification'],
    legacyTitle: 'Spreadsheet tracking',
    legacyDesc: 'Approver coverage is often tracked in external spreadsheets or requires custom ABAP reports to identify missing owners.',
    legacyPoints: ['External spreadsheet tracking', 'Custom reporting required']
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

        {/* Unified Comparison Table Layout */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden relative">
          
          {/* Desktop Table Header */}
          <div className="hidden lg:grid grid-cols-12 bg-slate-50 border-b border-slate-200">
            <div className="col-span-4 p-6 lg:p-8 flex items-end">
              <h3 className="text-sm font-extrabold text-slate-400 tracking-wider">Feature & Capability</h3>
            </div>
            <div className="col-span-4 p-6 lg:p-8 bg-red-50/50 border-x border-red-100/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-[40px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-red-200 text-red-600 text-[10px] font-bold mb-3 shadow-sm">
                  <Shield className="w-3.5 h-3.5" /> Modern OData
                </div>
                <h3 className="text-xl font-extrabold text-red-600 tracking-tight">Matrix Vault</h3>
                <p className="text-xs text-red-700/70 font-semibold mt-1">Real-time inline prevention</p>
              </div>
            </div>
            <div className="col-span-4 p-6 lg:p-8 bg-slate-50/50 border-r border-slate-200/50">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-[10px] font-bold mb-3 shadow-sm">
                <XCircle className="w-3.5 h-3.5" /> Legacy ABAP
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Traditional SAP GRC</h3>
              <p className="text-xs text-slate-500 font-semibold mt-1">Batch-based detection</p>
            </div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            {bentoItems.map((item, idx) => {
              const Icon = item.icon;
              const isLast = idx === bentoItems.length - 1;

              return (
                <div 
                  key={item.id} 
                  className={`grid grid-cols-1 lg:grid-cols-12 transition-colors duration-300 hover:bg-slate-50/50 group ${!isLast ? 'border-b border-slate-100' : ''}`}
                >
                  {/* Feature Cell */}
                  <div className="col-span-1 lg:col-span-4 p-6 lg:p-8 flex flex-col justify-center border-b lg:border-b-0 border-slate-100">
                    <div className="flex items-center gap-3 mb-3 lg:mb-4">
                      <div className="p-2.5 bg-slate-100 text-slate-600 rounded-xl shrink-0 group-hover:scale-105 group-hover:bg-red-50 group-hover:text-red-600 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-extrabold text-slate-400 tracking-wide">{item.domain}</span>
                    </div>
                    <h4 className="text-lg font-extrabold text-slate-900 leading-tight mb-2">{item.title}</h4>
                    <Link to="/features" className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      Explore <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {/* Matrix Vault Cell */}
                  <div className="col-span-1 lg:col-span-4 p-6 lg:p-8 bg-red-50/30 lg:border-x lg:border-red-100/50 border-b lg:border-b-0 border-red-100/50 flex flex-col justify-center">
                    <div className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-[10px] font-bold mb-3 shadow-xs w-fit">
                      <Shield className="w-3.5 h-3.5" /> Matrix Vault
                    </div>
                    <h5 className="text-sm font-extrabold text-slate-900 mb-2">{item.matrixVaultTitle}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.matrixVaultDesc}</p>
                    <div className="space-y-1.5 mt-auto">
                      {item.matrixPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Legacy GRC Cell */}
                  <div className="col-span-1 lg:col-span-4 p-6 lg:p-8 flex flex-col justify-center bg-slate-50/30 lg:border-r lg:border-slate-100">
                    <div className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold mb-3 shadow-xs w-fit">
                      <XCircle className="w-3.5 h-3.5" /> Traditional SAP GRC
                    </div>
                    <h5 className="text-sm font-extrabold text-slate-700 mb-2">{item.legacyTitle}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">{item.legacyDesc}</p>
                    <div className="space-y-1.5 mt-auto">
                      {item.legacyPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-500">
                          <XCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}










