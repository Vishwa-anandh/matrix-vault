import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ShieldCheck, Split, Target, Brain, FileText, UserCheck } from 'lucide-react';

// Animation variants for card components
const cardVariants: Variants = {
  initial: { opacity: 0, y: 30, scale: 1 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  hover: {
    scale: 1.03,
    y: -5,
    borderColor: "#fca5a5", // Soften hover border outline (red-300)
    boxShadow: "0 20px 25px -5px rgb(239 68 68 / 0.06), 0 8px 10px -6px rgb(239 68 68 / 0.06)",
    transition: { duration: 0.3, ease: "easeOut" as const }
  }
};

export function Features() {
  const features = [
    {
      title: "Risk-Aware by Design",
      description: "Every access action runs SoD analysis inline. It’s a gate built into the transaction itself—not a separate report run days later.",
      icon: ShieldCheck,
      delay: 0,
      comparison: { traditional: "Complex, multi-step provisioning workflows.", matrix: "Guided wizard with built-in SoD checks." }
    },
    {
      title: "Instant Multi-Role Comparison",
      description: "Select up to 100 roles and get a unified breakdown of matched vs. unmatched authorizations, T-Codes, and a live SoD conflict verdict.",
      icon: Split,
      delay: 0.1,
      comparison: { traditional: "Manual data extraction and custom reporting.", matrix: "Compare up to 100 roles instantly for overlaps." }
    },
    {
      title: "Universal Radar View",
      description: "Search a Role, User, Profile, User Group, T-Code, or Finding and see everything connected to it in one single, unified place.",
      icon: Target,
      delay: 0.2,
      comparison: { traditional: "Data scattered across multiple apps and modules.", matrix: "Single search bar across all security entities." }
    },
    {
      title: "AI-Generated Risk Narratives",
      description: "Firefighter sessions come with AI-written, plain-English summaries alongside a 0–100 risk score, turning raw logs into actionable insights.",
      icon: Brain,
      delay: 0.3,
      comparison: { traditional: "Raw logs; no behavioral risk scoring.", matrix: "AI risk scoring (0-100) with session summaries." }
    },
    {
      title: "Scheduled Compliance Reporting",
      description: "Generate on-demand or scheduled SOX Compliance reports covering SoD Conflicts and Firefighter Evidence, delivered via PDF or XLSX.",
      icon: FileText,
      delay: 0.4,
      comparison: { traditional: "Requires custom BI tools or manual building.", matrix: "Scheduled, multi-format exportable reports." }
    },
    {
      title: "Approver Coverage at a Glance",
      description: "The Approver Management screen shows exactly what percentage of roles have assigned approvers and lets you close gaps in a few clicks.",
      icon: UserCheck,
      delay: 0.5,
      comparison: { traditional: "Configured manually via backend org-structure.", matrix: "Visual coverage (%) dashboard; assign in clicks." }
    }
  ];

  return (
    <section id="features" className="py-12 bg-white relative border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              One Platform. <br className="md:hidden" />
              Every Layer of <span className="text-red-600">SAP Risk.</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">
              From access requests to audit reports, Matrix Vault watches, checks, and explains SAP risk in real time — so nothing reaches production unreviewed.
            </p>
          </motion.div>
        </div>

        {/* Feature Grid - 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: feature.delay }}
              className="p-5 bg-white/70 backdrop-blur-md border-l-2 border-l-red-500 border-y border-r border-red-100 rounded-2xl transition-all shadow-[0_4px_20px_rgba(15,23,42,0.02)] h-full flex flex-col justify-start"
            >
              {/* Header: Icon container and Title side-by-side */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-50/70 border border-red-100/80 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 stroke-[2.25]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {feature.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-slate-500 leading-relaxed text-xs font-medium pl-1 mb-6">
                {feature.description}
              </p>
              
              {/* Mini Comparison */}
              {feature.comparison && (
                <div className="mt-auto pt-4 border-t border-red-100/60 space-y-2.5">
                  <div className="flex items-start gap-2">
                    <span className="text-[9px] font-black text-slate-400 tracking-widest shrink-0 mt-0.5 w-[76px]">Legacy GRC</span>
                    <span className="min-w-0 text-[11px] font-semibold text-slate-500 leading-snug">{feature.comparison.traditional}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[9px] font-black text-red-600 tracking-widest shrink-0 mt-0.5 w-[76px]">Matrix Vault</span>
                    <span className="min-w-0 text-[11px] font-extrabold text-slate-800 leading-snug">{feature.comparison.matrix}</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
