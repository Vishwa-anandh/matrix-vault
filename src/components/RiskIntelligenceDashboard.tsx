import { motion } from "motion/react";
import {
  ShieldAlert,
  KeyRound,
  Flame,
  Bug,
  ArrowUp,
  ArrowDown,
  Bot,
  Trophy,
} from "lucide-react";

const stats = [
  {
    label: "SoD Violations",
    value: "42",
    delta: "-12%",
    down: true,
    icon: ShieldAlert,
    accent: "red",
  },
  {
    label: "Critical Access",
    value: "18",
    delta: "-5%",
    down: true,
    icon: KeyRound,
    accent: "amber",
  },
  {
    label: "Fraud Risk",
    value: "7",
    delta: "+2",
    down: false,
    icon: Flame,
    accent: "red",
  },
  {
    label: "Vulnerabilities",
    value: "23",
    delta: "-8%",
    down: true,
    icon: Bug,
    accent: "indigo",
  },
];

const topRiskUsers = [
  { name: "F. Keller", dept: "Finance", score: 92 },
  { name: "R. Osei", dept: "Procurement", score: 78 },
  { name: "M. Tan", dept: "IT Basis", score: 64 },
  { name: "L. García", dept: "Payroll", score: 51 },
];

const trend = [45, 60, 40, 72, 55, 48, 38];

const accentMap: Record<string, { tile: string; icon: string }> = {
  red: { tile: "border-red-200 shadow-red-100", icon: "bg-red-50 text-red-600" },
  amber: {
    tile: "border-amber-200 shadow-amber-100",
    icon: "bg-amber-50 text-amber-600",
  },
  indigo: {
    tile: "border-indigo-200 shadow-indigo-100",
    icon: "bg-indigo-50 text-indigo-600",
  },
};

function scoreColor(score: number) {
  if (score >= 80) return "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 border-red-200 dark:border-red-900/50";
  if (score >= 60) return "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-900/50";
  return "text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700";
}

export function RiskIntelligenceDashboard() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
              Every Risk, <span className="text-red-600 dark:text-red-500">One Dashboard</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-medium leading-relaxed">
              One unified view combines SoD Violations, Critical Access, Fraud
              Risk and Vulnerabilities — with detection trends, a Top Risk Users
              leaderboard, and AI-written executive summaries.
            </p>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl ring-1 ring-slate-900/5 dark:ring-slate-800 overflow-hidden"
        >
          {/* Window chrome */}
          <div className="h-12 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="ml-3 text-xs font-bold text-slate-500 dark:text-slate-400">
              Risk Intelligence Dashboard
            </span>
          </div>

          <div className="p-4 sm:p-6 grid gap-4 sm:gap-6">
            {/* Stat tiles */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((s, i) => {
                const a = accentMap[s.accent];
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className={`bg-white dark:bg-slate-900/90 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm ${a.tile}`}
                  >
                    <div className="flex items-center justify-between mb-3 gap-2">
                      <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wider truncate min-w-0">
                        {s.label}
                      </span>
                      <div className={`p-1.5 rounded-md shrink-0 ${a.icon}`}>
                        <s.icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                        {s.value}
                      </div>
                      <div
                        className={`flex items-center gap-0.5 text-xs font-bold ${
                          s.down ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {s.down ? (
                          <ArrowDown className="w-3 h-3" />
                        ) : (
                          <ArrowUp className="w-3 h-3" />
                        )}
                        {s.delta}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Lower grid: leaderboard + AI summary */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {/* Top Risk Users leaderboard */}
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2 bg-slate-50/50 dark:bg-slate-950/50">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    Top Risk Users
                  </span>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {topRiskUsers.map((u, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-4 py-3 gap-2"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-xs font-black text-slate-300 dark:text-slate-600 w-4 shrink-0">
                          {i + 1}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300 shrink-0">
                          {u.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                            {u.name}
                          </div>
                          <div className="text-xs font-medium text-slate-500 dark:text-slate-400 truncate">
                            {u.dept}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`text-xs font-bold px-2.5 py-1 rounded-full border shrink-0 ${scoreColor(
                          u.score
                        )}`}
                      >
                        {u.score}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Executive Summary + trend */}
              <div className="lg:col-span-3 flex flex-col gap-4">
                <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-4 sm:p-5 text-white relative overflow-hidden flex-1 border border-slate-800">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <div className="flex items-center gap-2 mb-3 relative">
                    <div className="p-1.5 bg-red-500/20 rounded-md">
                      <Bot className="w-4 h-4 text-red-300" />
                    </div>
                    <span className="text-sm font-bold">
                      AI Executive Summary
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed relative">
                    SoD violations dropped{" "}
                    <strong className="text-white">12%</strong> this quarter,
                    driven by 9 auto-remediated Finance conflicts. Fraud-risk
                    signals rose slightly in Procurement —{" "}
                    <strong className="text-white">F. Keller</strong> is the top
                    risk user (92/100) after extensive activity in{" "}
                    <span className="font-mono text-red-300">SU01</span> and{" "}
                    <span className="font-mono text-red-300">F110</span>.
                    Recommend reviewing 3 mitigating controls before quarter
                    close.
                  </p>
                </div>

                {/* Detection trend */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Detection Trend (7 Days)
                    </span>
                  </div>
                  <div className="flex items-end justify-between h-16 gap-2">
                    {trend.map((h, i) => (
                      <div
                        key={i}
                        className="w-full bg-slate-100 dark:bg-slate-800 rounded-t relative overflow-hidden"
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.08 }}
                          className={`absolute bottom-0 w-full rounded-t ${
                            i === 3 ? "bg-red-500" : "bg-slate-300 dark:bg-slate-600"
                          }`}
                        ></motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
