import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Split, 
  Target, 
  Brain, 
  FileText, 
  UserCheck, 
  CheckCircle2, 
  XCircle, 
  Search, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Features() {
  return (
    <section id="features" className="py-8 sm:py-10 lg:py-12 bg-white relative border-t border-b border-slate-200 transition-colors duration-300 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-transparent border border-red-200 text-red-600 text-xs font-bold mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Full-Stack Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              One Platform. <br className="md:hidden" />
              Every Layer of <span className="text-red-600">SAP Risk.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
              From access requests to audit reports, Matrix Vault watches, checks, and explains SAP risk in real time — so nothing reaches production unreviewed.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          
          {/* Bento Card 1: Risk-Aware by Design (Featured Card - Spans 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-xl hover:bg-white hover:border-red-200 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 font-bold text-xs">
                  <ShieldCheck className="w-3.5 h-3.5" /> Inline Gatekeeper
                </span>
                <span className="text-xs text-slate-400 font-semibold">Risk-Aware Architecture</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Risk-Aware by Design
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                Every access action runs SoD analysis inline. It’s a gate built into the transaction itself—not a separate report run days later.
              </p>

              {/* Side-by-Side Comparison Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-4">
                  <div className="flex items-center gap-1.5 mb-2 text-slate-400 font-bold text-xs">
                    <XCircle className="w-3.5 h-3.5 text-slate-400" /> Legacy GRC
                  </div>
                  <p className="text-xs font-medium text-slate-500 leading-snug">
                    Complex, multi-step provisioning workflows.
                  </p>
                </div>
                <div className="bg-red-50/70 border border-red-200/90 rounded-2xl p-4">
                  <div className="flex items-center gap-1.5 mb-2 text-red-600 font-bold text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-600" /> Matrix Vault
                  </div>
                  <p className="text-xs font-bold text-slate-900 leading-snug">
                    Guided wizard with built-in inline SoD checks.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Inline Transaction Gating</span>
              <Link to="/platform" className="text-red-600 hover:text-red-700 flex items-center gap-1">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 2: Instant Multi-Role Comparison (Spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-xl hover:bg-white hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold text-xs">
                  <Split className="w-3.5 h-3.5" /> Role Analytics
                </span>
                <span className="text-xs text-slate-400 font-bold">100 Roles Max</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Instant Multi-Role Comparison
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                Select up to 100 roles and get a unified breakdown of matched vs. unmatched authorizations, T-Codes, and a live SoD verdict.
              </p>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">Authorization Breakdown</div>
                  <div className="text-[11px] text-slate-500 font-medium">Matched & Overlapping T-Codes</div>
                </div>
                <span className="bg-blue-100 text-blue-800 text-[10px] font-extrabold px-2.5 py-1 rounded-md">
                  Instant Verdict
                </span>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Compare 100 Roles Instantly</span>
              <Link to="/platform" className="text-red-600 hover:text-red-700 flex items-center gap-1">
                Explore Matrix <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 3: Universal Radar View (Spans 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-xl hover:bg-white hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-bold text-xs">
                  <Target className="w-3.5 h-3.5" /> Single Search Bar
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                Universal Radar View
              </h3>
              <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4">
                Search a Role, User, Profile, User Group, T-Code, or Finding and see everything connected in one unified view.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-2 text-xs text-slate-400">
                <Search className="w-4 h-4 text-purple-600" />
                <span className="font-mono text-slate-600 text-xs font-medium">Search security entities...</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 4: AI-Generated Risk Narratives (Spans 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-xl hover:bg-white hover:border-amber-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-bold text-xs">
                  <Brain className="w-3.5 h-3.5" /> AI Behavioral Risk
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                AI Risk Narratives
              </h3>
              <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4">
                Firefighter sessions come with AI-written summaries alongside a 0–100 risk score, turning raw logs into insights.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Behavioral Score:</span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded">
                  12/100 (Low Risk)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 5: Scheduled Reporting & Approver Coverage (Spans 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-xl hover:bg-white hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-xs">
                  <FileText className="w-3.5 h-3.5" /> Compliance & Approvers
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                Scheduled Audits & Approvers
              </h3>
              <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4">
                On-demand or scheduled audit compliance reports covering SoD Conflicts & Firefighter Evidence, plus visual approver coverage tracking.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Approver Coverage:</span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded flex items-center gap-1">
                  <UserCheck className="w-3 h-3" /> 100% Verified
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
