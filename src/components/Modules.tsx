import { motion } from 'motion/react';
import { 
  ShieldCheck, Split, Target, Brain, FileText, UserCheck, 
  CheckCircle2, XCircle, Search, Sparkles, ArrowRight,
  Users, Eye, Sliders, Activity, Settings, Wrench, Shield, 
  Clock, Inbox, UsersRound, Route, Flame, ActivitySquare, 
  CheckSquare, ShieldAlert, Database, FileBarChart, PieChart, 
  AlertTriangle, HardDrive, Key, RefreshCw, Bell
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Modules() {

  const roleRadarCards = [
    {
      title: "Directory & Catalog",
      icon: Users,
      points: [
        { t: "Unified User Directory", d: "A single directory of every SAP user across your landscape, with assigned roles, last-login activity, and risk exposure." },
        { t: "Transparent Role Catalog", d: "Browse the full role catalog with plain-language breakdowns of the transactions and authorizations." },
        { t: "Deep-Dive Access Lens", d: "Drill into any role or user pairing to see the exact combination of authorizations creating risk." }
      ]
    },
    {
      title: "Risk Intelligence",
      icon: Target,
      points: [
        { t: "Visual Risk Radar", d: "A visual risk map of your entire access landscape, plotting users, roles, and conflicts spatially." },
        { t: "Continuous Risk Intelligence", d: "Continuously scored segregation-of-duties risk across every user and role, ranked by business impact." }
      ]
    },
    {
      title: "Simulation & Rules",
      icon: Sliders,
      points: [
        { t: "Change Simulation", d: "Model a role or access change before you commit it, and see which SoD conflicts it creates or resolves." },
        { t: "Custom Risk Rule Builder", d: "Define and tune your own SoD and sensitive-access rules in a guided builder." }
      ]
    },
    {
      title: "Remediation & Controls",
      icon: Wrench,
      points: [
        { t: "Guided Remediation", d: "Workflows for resolving an identified conflict — reassign, restrict, or mitigate — with every action logged." },
        { t: "Mitigation Control Tracking", d: "Document and track compensating controls against accepted risks, with owners, evidence, and review dates." }
      ]
    },
    {
      title: "Certifications & Approvals",
      icon: Clock,
      points: [
        { t: "Scheduled Access Certifications", d: "Auditable campaigns for managers to certify their team's access, with automatic reminders." },
        { t: "Approver Governance", d: "Configure who is authorized to approve access and risk decisions across your organization." },
        { t: "End-to-End Request Trail", d: "Every access change traces back to a governed request ticket for a clean audit record." }
      ]
    }
  ];

  const firefighterCards = [
    {
      title: "Access & Tracking",
      icon: Flame,
      points: [
        { t: "One-Click Emergency Access", d: "Request elevated or emergency access in seconds, with the business justification captured up front." },
        { t: "Request Tracking", d: "Track the status of every request you've submitted — pending, approved, active, or expired." }
      ]
    },
    {
      title: "Approvals & Routing",
      icon: Route,
      points: [
        { t: "Streamlined Approvals", d: "A focused queue for approvers to review, question, and act on incoming access requests." },
        { t: "Automatic Escalation Routing", d: "When a request needs a second look, escalation approvals route it automatically." }
      ]
    },
    {
      title: "Session Monitoring",
      icon: Eye,
      points: [
        { t: "Live Session Monitoring", d: "A live view of every active Firefighter session in progress — who's using it and for how long." },
        { t: "Tiered Approver Assignment", d: "Designate senior approvers for your most sensitive access tiers for highest scrutiny." }
      ]
    },
    {
      title: "Safeguards & Audit",
      icon: Database,
      points: [
        { t: "Escalation Safeguards", d: "Configure how and when unresolved approvals escalate so time-sensitive access isn't blocked." },
        { t: "Tamper-Evident Audit Archive", d: "A permanent, tamper-evident archive of every Firefighter session and the actions taken during it." }
      ]
    },
    {
      title: "Workspace & Reporting",
      icon: FileBarChart,
      points: [
        { t: "Bulk Audit Workspace", d: "A dedicated workspace for reviewing emergency access activity in bulk without export tooling." },
        { t: "SOX-Ready Reporting", d: "Pre-built reporting aligned to SOX control requirements, making compliance an export away." },
        { t: "Configurable Reporting", d: "Configurable reporting across every request, approval, and session tailored to your audience." }
      ]
    }
  ];

  const vulnerabilityCards = [
    {
      title: "Dashboard & Hardening",
      icon: AlertTriangle,
      points: [
        { t: "Prioritized Vulnerability Dashboard", d: "A single view of every open vulnerability across your SAP landscape, ranked by severity." },
        { t: "Automated Hardening Checks", d: "Automated checks against SAP profile parameters flag insecure or outdated configurations." }
      ]
    },
    {
      title: "Patching & Scanning",
      icon: Search,
      points: [
        { t: "Patch & Component Tracking", d: "Track installed software component versions against the latest available patches." },
        { t: "RFC Trust Scanning", d: "Continuous scanning of RFC destinations for trust relationships abused for lateral movement." }
      ]
    },
    {
      title: "Expiry & Discovery",
      icon: Key,
      points: [
        { t: "Certificate Expiry Monitoring", d: "Ongoing monitoring of SSL/TLS certificates, flagging expired, weak, or soon-to-expire certs." },
        { t: "Exposed Service Detection", d: "Identifies active ICF services that are unnecessary, unsecured, or exposed beyond intended use." }
      ]
    },
    {
      title: "Config Drift & Notes",
      icon: RefreshCw,
      points: [
        { t: "Client Configuration Drift Checks", d: "Validates client-level security settings across every client, catching configuration drift." },
        { t: "Matched Security Notes", d: "SAP Security Notes relevant to your landscape, matched automatically to your components." }
      ]
    },
    {
      title: "Live Threats & Alerts",
      icon: Bell,
      points: [
        { t: "Live Threat Detection", d: "Live monitoring for suspicious activity and known attack patterns across your SAP systems." },
        { t: "Noise-Free Smart Alerts", d: "Context-aware alerting that prioritizes what actually needs attention, cutting through noise." }
      ]
    }
  ];

  return (
    <section className="pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-red-50/60 dark:bg-red-900/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-slate-100/60 dark:bg-slate-900/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-transparent border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Platform Modules</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              Deep-Dive into <br className="md:hidden" />
              <span className="text-red-600 dark:text-red-500">Matrix Vault.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              Explore the core modules that power our full-stack governance platform, providing unmatched visibility and control over your SAP landscape.
            </p>
          </motion.div>
        </div>

        {/* ROLE RADAR BENTO */}
        <div id="role-radar" className="mb-16 pt-32 -mt-32">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800/50 font-bold text-xs mb-3 shadow-xs">
              <Target className="w-3.5 h-3.5" /> Role Radar
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Every access risk, visible and governed in one place.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-8 md:row-span-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:border-red-200 dark:hover:border-red-900 transition-all group flex flex-col min-h-[450px]">
              <div className="p-8 pb-6 flex-1">
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-3">Unified Risk Visibility</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-relaxed max-w-xl">
                  Role Radar gives SAP security teams a single, continuously updated picture of who has access to what, plus the governance tools to keep that access clean over time. Instead of reconstructing access after the fact, your team sees risk as it forms.
                </p>
              </div>
              <div className="mt-auto px-4 sm:px-8 w-full max-w-xl sm:max-w-2xl mx-auto">
                <div className="relative rounded-t-2xl overflow-hidden border-t border-x border-slate-700/50 shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500 bg-slate-900">
                  <div className="w-[104%] -ml-[2%] -mt-[4%] -mb-[6%]">
                    <img src="/images/role_radar.png" alt="Role Radar Demo" className="w-full h-auto block" />
                  </div>
                </div>
              </div>
            </motion.div>
            {roleRadarCards.map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="md:col-span-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:bg-white hover:border-red-200 dark:hover:border-red-900 transition-all flex flex-col justify-start group">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-600 dark:text-red-400">
                    <card.icon className="w-4 h-4" />
                  </div>
                  <span className="font-extrabold text-sm text-slate-900 dark:text-white">{card.title}</span>
                </div>
                <div className="space-y-4">
                  {card.points.map((pt, j) => (
                    <div key={j}>
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-1">{pt.t}</div>
                      <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium leading-snug">{pt.d}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FIREFIGHTER BENTO */}
        <div id="firefighter" className="mb-16 pt-32 -mt-32">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 font-bold text-xs mb-3 shadow-xs">
              <Flame className="w-3.5 h-3.5" /> Firefighter
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Emergency access, without the emergency.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-8 md:row-span-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-900 transition-all group flex flex-col min-h-[450px]">
              <div className="p-8 pb-6 flex-1">
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-3">Governed Elevated Access</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-relaxed max-w-xl">
                  Firefighter gives teams a controlled way to grant, monitor, and document temporary elevated access. Speed and control stop being a trade-off: a request can be approved in minutes and still leave a complete record behind.
                </p>
              </div>
              <div className="mt-auto px-4 sm:px-8 w-full max-w-xl sm:max-w-2xl mx-auto">
                <div className="relative rounded-t-2xl overflow-hidden border-t border-x border-slate-700/50 shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500 bg-slate-900">
                  <div className="w-[110%] -ml-[5%] -mt-[8%] -mb-[8%]">
                    <img src="/images/firefighter.png" alt="Firefighter Demo" className="w-full h-auto block" />
                  </div>
                </div>
              </div>
            </motion.div>
            {firefighterCards.map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="md:col-span-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:bg-white hover:border-orange-200 dark:hover:border-orange-900 transition-all flex flex-col justify-start group">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center text-orange-600 dark:text-orange-400">
                    <card.icon className="w-4 h-4" />
                  </div>
                  <span className="font-extrabold text-sm text-slate-900 dark:text-white">{card.title}</span>
                </div>
                <div className="space-y-4">
                  {card.points.map((pt, j) => (
                    <div key={j}>
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-1">{pt.t}</div>
                      <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium leading-snug">{pt.d}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* VULNERABILITIES BENTO */}
        <div id="vulnerabilities" className="pt-32 -mt-32">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800/50 font-bold text-xs mb-3 shadow-xs">
              <ShieldAlert className="w-3.5 h-3.5" /> Vulnerabilities
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Know your SAP attack surface before someone else does.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-8 md:row-span-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-900 transition-all group flex flex-col min-h-[450px]">
              <div className="p-8 pb-6 flex-1">
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-3">Continuous Posture Management</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-relaxed max-w-xl">
                  Vulnerabilities continuously scans your SAP landscape for the misconfigurations, missing patches, and exposed services that turn into real incidents. What used to require a point-in-time security assessment now runs continuously in the background.
                </p>
              </div>
              <div className="mt-auto px-4 sm:px-8 w-full max-w-xl sm:max-w-2xl mx-auto">
                <div className="relative rounded-t-2xl overflow-hidden border-t border-x border-slate-700/50 shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500 bg-slate-900">
                  <div className="w-[106%] -ml-[3%] -mt-[20%] -mb-[16%]">
                    <img src="/images/vulnerabilities.png" alt="Vulnerabilities Demo" className="w-full h-auto block" />
                  </div>
                </div>
              </div>
            </motion.div>
            {vulnerabilityCards.map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="md:col-span-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:bg-white hover:border-purple-200 dark:hover:border-purple-900 transition-all flex flex-col justify-start group">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <card.icon className="w-4 h-4" />
                  </div>
                  <span className="font-extrabold text-sm text-slate-900 dark:text-white">{card.title}</span>
                </div>
                <div className="space-y-4">
                  {card.points.map((pt, j) => (
                    <div key={j}>
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-1">{pt.t}</div>
                      <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium leading-snug">{pt.d}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
