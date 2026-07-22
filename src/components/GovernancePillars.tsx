import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Flame, 
  FileCheck2, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Lock, 
  Sparkles,
  Search,
  Check,
  Cpu,
  Split,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function GovernancePillars() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative border-t border-b border-slate-200 transition-colors duration-300 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-100/50 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold mb-4 shadow-xs">
              <Zap className="w-3.5 h-3.5" />
              <span>Modern SAP Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              Built for <span className="text-red-600">Modern SAP Enterprises</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
              Replace legacy GRC complexity with an integrated Bento workspace for real-time risk gating, emergency access, and continuous compliance.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout (5 Asymmetric Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          
          {/* Bento Card 1: Real-Time SoD Prevention (Spans 7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 font-bold text-xs">
                  <ShieldCheck className="w-3.5 h-3.5" /> Inline Gatekeeper
                </span>
                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-green-600" /> Active Enforcement
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                Real-Time SoD Conflict Prevention
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                Intercept role provisioning and authorization requests in sub-200ms before changes hit SAP Production environments.
              </p>

              {/* Interactive Live Demo Box */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-500 font-semibold">Access Request:</span>
                  <span className="font-bold text-slate-900">User Anbarasu</span>
                </div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-slate-500 font-semibold">Target Role:</span>
                  <span className="font-mono text-red-600 font-bold">Z_FI_GL_ACCOUNTANT</span>
                </div>
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                    <span className="text-xs font-bold text-red-900 truncate">SoD Conflict: GL Posting + Payment Approval</span>
                  </div>
                  <span className="bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md shrink-0">
                    Mitigated
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Sub-200ms OData Rule Engine</span>
              <Link to="/platform" className="text-red-600 hover:text-red-700 flex items-center gap-1">
                Explore Gatekeeper <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 2: AI Firefighter Log Summaries (Spans 5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-bold text-xs">
                  <Flame className="w-3.5 h-3.5" /> Emergency Access
                </span>
                <span className="text-xs text-slate-400 font-bold">AI Copilot</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">
                AI Firefighter Summaries
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                Turn cryptic SAP T-Code logs into clear executive summaries with automated risk scoring.
              </p>

              {/* AI Score Micro Widget */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Session FF-8842</span>
                  <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">Risk Score: 12/100</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-slate-500 font-medium">T-Codes:</span>
                  {['SE09', 'SEGW', 'STMS'].map((tc, i) => (
                    <span key={i} className="bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold">
                      {tc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>90% Log Review Time Saved</span>
              <Link to="/platform" className="text-red-600 hover:text-red-700 flex items-center gap-1">
                View Copilot <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 3: Unified Evidence Vault (Spans 4 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-xs">
                  <FileCheck2 className="w-3.5 h-3.5" /> Audit Ready
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                Unified Evidence Vault
              </h3>
              <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4">
                One-click SOX & ISO 27001 audit report packages with cryptographic log verification.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs font-bold text-emerald-700">
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4" /> SOX Package
                </span>
                <span className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[10px] text-slate-700">
                  PDF / XLSX
                </span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-bold text-slate-400">
              Cryptographic Audit Proof
            </div>
          </motion.div>

          {/* Bento Card 4: Native SAP Integration (Spans 4 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold text-xs">
                  <Cpu className="w-3.5 h-3.5" /> Native Connectors
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                Native SAP Connectivity
              </h3>
              <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4">
                Connects directly to SAP S/4HANA & ECC in 2-4 weeks without heavy ABAP installations.
              </p>

              <div className="flex flex-wrap gap-1.5">
                {['S/4HANA', 'ECC 6.0', 'SAP BTP'].map((sys, i) => (
                  <span key={i} className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-[11px] font-bold">
                    {sys}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-bold text-slate-400">
              Zero ABAP Package Overhead
            </div>
          </motion.div>

          {/* Bento Card 5: Universal Radar View (Spans 4 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-bold text-xs">
                  <Search className="w-3.5 h-3.5" /> Universal Search
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                Universal Security Radar
              </h3>
              <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4">
                Single search bar across all SAP Users, Roles, Profiles, T-Codes, and Findings.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-2 text-xs text-slate-400">
                <Search className="w-4 h-4 text-purple-600" />
                <span className="font-mono text-slate-600 text-xs font-medium">Search "Anbarasu"...</span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-bold text-slate-400">
              Instant Connected Graph
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
