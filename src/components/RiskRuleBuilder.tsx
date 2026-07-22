import { motion } from "motion/react";
import {
  Code2,
  Layers,
  Boxes,
  Eye,
  ScanLine,
  Plus,
  SlidersHorizontal,
} from "lucide-react";

const ruleTypes = [
  { label: "T-Code / Auth-Object", icon: Code2, active: true },
  { label: "Profile-Based", icon: Layers, active: false },
  { label: "Role-Based", icon: Boxes, active: false },
];

export function RiskRuleBuilder() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-red-100 dark:bg-red-950/40 rounded-3xl transform -rotate-2 scale-102 -z-10"></div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-5 pb-5 border-b border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-800 dark:text-white">Risk Rule Builder</div>
                <div className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold px-3 py-1 rounded-full">
                  New Rule
                </div>
              </div>

              {/* Rule Type Tabs */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {ruleTypes.map((type, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center gap-1.5 py-3 rounded-xl border text-center transition-colors ${
                      type.active
                        ? "bg-red-50 dark:bg-red-950/50 border-red-300 dark:border-red-800 text-red-700 dark:text-red-400"
                        : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    <type.icon className="w-4 h-4" />
                    <span className="text-[10px] font-bold leading-tight">
                      {type.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Rule Definition */}
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-300 space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">IF</span>
                  <span className="bg-slate-800 px-2 py-0.5 rounded text-red-300">
                    TCD = SU01
                  </span>
                  <span className="text-slate-500">AND</span>
                  <span className="bg-slate-800 px-2 py-0.5 rounded text-red-300">
                    TCD = F110
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">THEN</span>
                  <span className="text-amber-300">SoD Conflict</span>
                  <span className="bg-slate-800 px-2 py-0.5 rounded text-amber-200">
                    Rule F014
                  </span>
                </div>
                <button className="flex items-center gap-1.5 text-slate-400 hover:text-white text-[11px] pt-1 transition-colors">
                  <Plus className="w-3 h-3" /> Add condition
                </button>
              </div>

              {/* Live Preview Pane */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-xl"
              >
                <div className="flex items-center gap-2.5">
                  <Eye className="w-5 h-5 text-red-600 shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-red-900">
                      Live Preview
                    </div>
                    <div className="text-xs text-red-700">
                      42 users match this rule
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-1.5 bg-red-600 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-sm">
                  <ScanLine className="w-3.5 h-3.5" /> Scan
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold tracking-wider px-3 py-1.5 rounded-full mb-5">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Risk Rule Builder
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
              Author Risk Rules <br />
              <span className="text-red-600 dark:text-red-500">Visually</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-medium leading-relaxed mb-8">
              No more config-heavy backend transactions. The{" "}
              <strong className="text-slate-900 dark:text-white">Risk Rule Builder</strong>{" "}
              supports three rule types with a live preview pane and one-click
              scan — so you see exactly who a rule catches before you ever save
              it.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-700 dark:text-slate-200 font-medium">
                <Code2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>
                  Three rule types —{" "}
                  <strong className="text-slate-900 dark:text-white">
                    T-Code/Auth-Object, Profile-Based, Role-Based
                  </strong>
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 dark:text-slate-200 font-medium">
                <Eye className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>Live rule preview pane — see matches before you save</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 dark:text-slate-200 font-medium">
                <ScanLine className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>One-click scan across your entire SAP landscape</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
