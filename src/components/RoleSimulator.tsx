import { motion } from "motion/react";
import {
  ShieldCheck,
  AlertTriangle,
  PlayCircle,
  Shield,
  Activity,
  Users,
  Search,
  Bell,
  Moon,
  CheckCircle2,
  Flame,
  FileSpreadsheet,
  Plus,
  Zap,
} from "lucide-react";

const currentRoles = [
  "/BSVAGT/ALL",
  "/ECRS/INTRASTAT_SPECIALIST",
  "/FLDQ/DQM_ADMIN",
  "/FLDQ/DQM_COMM_USER",
  "/GSINS/BPADD",
  "/IPRO/AUTHOR",
  "/IPRO/CONTENT_MANAGER",
  "/ISDFPS/ALE_SYNC",
];

const simulatedChanges = [
  "+ /ISDFPS/ME_PM_SCND",
  "+ /ISDFPS/ME_REP",
  "+ /ISDFPS/PM_TESTER",
  "+ /ISDFPS/ROLE_GEN_TESTER",
  "+ /ISIDEX/U02_01C",
  "+ /ISIDEX/U12_01C",
];

const violations = [
  {
    severity: "CRITICAL",
    ruleCode: "BAS004",
    ruleName: "Assign Role and Import Transport to Production",
    subject: "TEST9100",
    mechanism: "Auth Object",
    matchedItems: ["S_USER_AGR", "S_CTS_ADMI"],
  },
  {
    severity: "CRITICAL",
    ruleCode: "BAS005",
    ruleName: "Maintain RFC Destination and User Administration",
    subject: "TEST9100",
    mechanism: "Auth Object",
    matchedItems: ["S_RFC_ADM", "S_USER_GRP"],
  },
  {
    severity: "CRITICAL",
    ruleCode: "BAS006",
    ruleName: "Maintain RFC Destination and Role Assignment",
    subject: "TEST9100",
    mechanism: "Auth Object",
    matchedItems: ["S_RFC_ADM", "S_USER_AGR"],
  },
  {
    severity: "CRITICAL",
    ruleCode: "BAS007",
    ruleName: "Maintain Profile and Assign Profile to User",
    subject: "TEST9100",
    mechanism: "Auth Object",
    matchedItems: ["S_USER_PRO"],
  },
];

export function RoleSimulator() {
  return (
    <section
      id="simulator"
      className="py-16 sm:py-20 bg-white dark:bg-slate-900 relative border-t border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-full mb-4">
              <PlayCircle className="w-4 h-4" /> SAP Role Simulator
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
              Model Before You <br />
              <span className="text-red-600 dark:text-red-500">Modify</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-medium leading-relaxed mb-8">
              Don't let SoD conflicts slip into production. Our interactive{" "}
              <strong className="text-slate-900 dark:text-white">Role Simulator</strong>{" "}
              lets you stage proposed role additions and removals, computing
              permission differences and SoD violations before a single change
              touches SAP.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
                <span>Live permission previews</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Instant conflict flagging</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                <PlayCircle className="w-5 h-5 text-red-500 shrink-0" />
                <span>Exportable impact reports</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Side: Compact Role Simulator Mockup Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="absolute inset-0 bg-red-100 dark:bg-red-950/40 rounded-3xl transform rotate-2 scale-102 -z-10"></div>
            
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl ring-1 ring-slate-900/5 dark:ring-slate-800 overflow-hidden text-[10px] sm:text-xs">
              
              {/* Top Window Chrome Header */}
              <div className="h-10 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-3 sm:px-4 select-none">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="flex items-center gap-1 text-red-600 dark:text-red-500 font-black tracking-tight text-xs shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                    <span>MATRIXVAULT</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 font-semibold text-[10px]">
                    <span className="text-red-600 dark:text-red-400 font-bold border-b-2 border-red-600 dark:border-red-400 pb-2.5 pt-3">
                      Access Control
                    </span>
                    <span className="hover:text-slate-800 dark:hover:text-white hidden sm:inline">Governance</span>
                    <span className="hover:text-slate-800 dark:hover:text-white hidden sm:inline">Analytics</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Bell className="w-3.5 h-3.5 text-slate-400" />
                  <div className="flex items-center gap-1.5">
                    <span className="bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/50 px-1.5 py-0.5 rounded font-bold text-[9px]">
                      Admin
                    </span>
                    <div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-700 dark:text-slate-200 text-[9px]">
                      J
                    </div>
                  </div>
                </div>
              </div>

              {/* Toolbar */}
              <div className="bg-white dark:bg-slate-900 px-3 sm:px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <PlayCircle className="w-4 h-4 text-red-600" />
                  <span className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm">
                    Role Simulator
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-[10px] px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
                    <FileSpreadsheet className="w-3 h-3" /> Report
                  </button>
                  <button className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-[10px] px-2 py-1 rounded-lg flex items-center gap-0.5">
                    <Plus className="w-3 h-3" /> New
                  </button>
                </div>
              </div>

              {/* Mockup Body Content */}
              <div className="p-3 sm:p-4 bg-slate-50/60 dark:bg-slate-950/60 space-y-3">
                
                {/* User Access Profile & Role Staging */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-sm">
                  <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <div className="w-7 h-7 rounded-lg bg-red-600 text-white font-black flex items-center justify-center text-[10px]">
                      TE
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 dark:text-white text-xs">SampleGK GK</div>
                      <div className="text-[9px] font-mono text-slate-400">TEST9100</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {/* Current Roles */}
                    <div className="bg-slate-50 dark:bg-slate-950/80 rounded-lg p-2 border border-slate-200/80 dark:border-slate-800">
                      <div className="text-[9px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex justify-between">
                        <span>Current (29)</span>
                      </div>
                      <div className="flex flex-wrap gap-1 max-h-16 overflow-y-auto">
                        {currentRoles.slice(0, 5).map((r, i) => (
                          <span
                            key={i}
                            className="text-[8px] font-mono bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-1 py-0.5 rounded truncate max-w-full"
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Simulated Changes */}
                    <div className="bg-slate-50 dark:bg-slate-950/80 rounded-lg p-2 border border-slate-200/80 dark:border-slate-800">
                      <div className="text-[9px] font-bold text-green-600 dark:text-green-400 mb-1 flex justify-between">
                        <span>Simulated (+21)</span>
                      </div>
                      <div className="flex flex-wrap gap-1 max-h-16 overflow-y-auto">
                        {simulatedChanges.slice(0, 4).map((r, i) => (
                          <span
                            key={i}
                            className="text-[8px] font-mono font-bold bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900/50 px-1 py-0.5 rounded truncate max-w-full"
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Risk Banner & Stat Tiles */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-sm flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-9 h-9 rounded-full border-2 border-red-500 flex items-center justify-center shrink-0 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 font-black text-xs">
                      100
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1 text-red-600 dark:text-red-400 font-extrabold text-xs">
                        <Shield className="w-3.5 h-3.5 shrink-0" /> Critical Risk
                      </div>
                      <div className="text-[9px] text-slate-500 dark:text-slate-400 truncate">
                        54 violations would be created
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-center border-l border-slate-100 dark:border-slate-800 pl-3 shrink-0">
                    <div>
                      <div className="text-xs font-black text-slate-900 dark:text-white">899</div>
                      <div className="text-[8px] font-bold text-slate-400">Checked</div>
                    </div>
                    <div>
                      <div className="text-xs font-black text-red-600 dark:text-red-400">54</div>
                      <div className="text-[8px] font-bold text-red-500">Conflicts</div>
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-2.5 border border-slate-800 text-white flex items-center justify-between gap-2 shadow-md">
                  <div className="flex items-center gap-2 min-w-0">
                    <Zap className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <div className="text-[9px] font-medium text-slate-300 min-w-0">
                      Apply staged changes to <span className="font-mono text-red-300 font-bold">TEST9100</span>
                    </div>
                  </div>
                  <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[9px] px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 shrink-0">
                    <CheckCircle2 className="w-3 h-3" /> Assign 21 Roles
                  </button>
                </div>

                {/* Violations Table */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                  <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/50 text-[10px]">
                    <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                      <Flame className="w-3.5 h-3.5 text-red-600" />
                      <span>New Violations (9+)</span>
                    </div>
                  </div>

                  <div className="overflow-x-auto max-h-36">
                    <table className="w-full text-left text-[9px] font-sans">
                      <thead className="bg-slate-50 dark:bg-slate-950/80 text-slate-500 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-800">
                        <tr>
                          <th className="px-2.5 py-1.5">Severity</th>
                          <th className="px-2.5 py-1.5">Rule</th>
                          <th className="px-2.5 py-1.5">Rule Name</th>
                          <th className="px-2.5 py-1.5">Matched</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium text-slate-700 dark:text-slate-200">
                        {violations.map((v, i) => (
                          <tr key={i} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40">
                            <td className="px-2.5 py-1.5 text-red-600 dark:text-red-400 font-black text-[8px]">
                              {v.severity}
                            </td>
                            <td className="px-2.5 py-1.5 font-bold font-mono text-slate-900 dark:text-white">
                              {v.ruleCode}
                            </td>
                            <td className="px-2.5 py-1.5 font-semibold text-slate-900 dark:text-white max-w-[140px] truncate">
                              {v.ruleName}
                            </td>
                            <td className="px-2.5 py-1.5">
                              <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[8px] px-1 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                                {v.matchedItems[0]}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
