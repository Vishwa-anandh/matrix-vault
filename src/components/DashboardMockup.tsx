import { motion } from 'motion/react';
import { ShieldCheck, Activity, Users, AlertTriangle, CheckCircle2, ChevronRight, Search, Bell, Moon, Shield, ShieldAlert, FileText } from 'lucide-react';

export function DashboardMockup() {
  return (
    <div className="relative w-full">
      <div className="absolute -inset-2 bg-gradient-to-r from-red-200 to-red-100 dark:from-red-950/40 dark:to-red-900/20 rounded-2xl blur-2xl opacity-60 animate-pulse"></div>
      
      <div className="relative bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col ring-1 ring-slate-900/5 text-slate-800 dark:text-slate-200 text-[10px] sm:text-xs font-sans transition-colors duration-300">
        
        {/* Top Navbar */}
        <div className="h-12 bg-white dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700 flex items-center px-3 sm:px-4 justify-between select-none gap-2">
          {/* Logo & Tabs */}
          <div className="flex items-center gap-3 sm:gap-6 overflow-hidden h-full min-w-0">
            <div className="flex items-center gap-1.5 text-red-600 dark:text-red-500 font-bold shrink-0">
              <ShieldCheck className="w-5 h-5" />
              <span className="hidden sm:block text-xs font-extrabold tracking-tight">Matrix vault</span>
            </div>
            
            <div className="flex items-center h-full gap-3 sm:gap-4 text-slate-500 dark:text-slate-400 font-semibold text-[11px] overflow-hidden">
              <div className="h-full flex items-center text-red-600 dark:text-red-500 border-b-2 border-red-600 dark:border-red-500 whitespace-nowrap">
                <Activity className="w-3.5 h-3.5 mr-1.5" /> Dashboard
              </div>
              <div className="h-full flex items-center hover:text-slate-700 dark:hover:text-slate-200 whitespace-nowrap">
                <Users className="w-3.5 h-3.5 mr-1.5" /> Access control
              </div>
              <div className="h-full flex items-center hover:text-slate-700 dark:hover:text-slate-200 whitespace-nowrap hidden sm:flex">
                <Shield className="w-3.5 h-3.5 mr-1.5" /> Governance
                <span className="ml-1.5 bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold leading-none">24</span>
              </div>
            </div>
          </div>
          
          {/* Right Icons */}
          <div className="flex items-center gap-3 shrink-0">
            <Search className="w-4 h-4 text-slate-400 hidden sm:block" />
            <Bell className="w-4 h-4 text-slate-400" />
            <Moon className="w-4 h-4 text-slate-400 hidden sm:block" />
            
            <div className="flex items-center gap-2 ml-2">
              <div className="hidden sm:flex items-center gap-1.5 bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/50 px-2 py-1 rounded-md font-bold text-[10px]">
                <CheckCircle2 className="w-3.5 h-3.5" /> Admin
              </div>
              <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 flex items-center justify-center font-bold text-slate-600 dark:text-slate-200">
                J
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-3 sm:p-5 grid gap-3 sm:gap-4 bg-slate-50 dark:bg-slate-950">
          
          {/* System Health */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-3 sm:p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
              <div className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-200 text-xs sm:text-sm min-w-0">
                <div className="w-3.5 h-3.5 rounded-sm bg-red-100 dark:bg-red-950/60 flex items-center justify-center shrink-0">
                   <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                </div>
                Connected system health
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-red-500 flex items-center gap-1 cursor-pointer hover:text-red-600 shrink-0">
                <span className="text-green-600 dark:text-green-400">1/1 healthy</span> View all <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0"></div>
                 <div className="min-w-0">
                   <div className="font-bold text-slate-800 dark:text-white text-xs truncate">MSQ system</div>
                   <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">MSQ</div>
                 </div>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-green-600 dark:text-green-400 shrink-0 ml-2">Healthy</span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
             <motion.div whileHover={{ y: -2 }} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-bold mb-3 text-[10px] sm:text-xs">
                   <ShieldAlert className="w-3.5 h-3.5 text-red-400" /> Open violations
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">24</div>
             </motion.div>
             
             <motion.div whileHover={{ y: -2 }} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-bold mb-3 text-[10px] sm:text-xs">
                   <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Pending approvals
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">18</div>
             </motion.div>

             <motion.div whileHover={{ y: -2 }} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm relative overflow-hidden hidden sm:block">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-bold mb-3 text-[10px] sm:text-xs">
                   <Shield className="w-3.5 h-3.5 text-red-500" /> Vulnerabilities open
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">12</div>
             </motion.div>

             <motion.div whileHover={{ y: -2 }} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 dark:bg-red-950/40 rounded-full blur-xl -mr-10 -mt-10"></div>
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-bold mb-3 text-[10px] sm:text-xs relative">
                   <Activity className="w-3.5 h-3.5 text-red-500" /> Active ff sessions
                </div>
                <div className="flex items-end gap-2 relative">
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">3</div>
                  <div className="text-[10px] font-black text-red-500 mb-1.5 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div> Live</div>
                </div>
             </motion.div>
          </div>

          {/* Bottom Area: Donut Charts Mockup */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 hidden sm:grid">
            {['Remediation', 'Mitigation', 'Request tickets'].map((title, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-center mb-6">
                  <div className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5 text-xs">
                     {i === 0 ? <Activity className="w-3.5 h-3.5 text-red-400" /> : i === 1 ? <ShieldAlert className="w-3.5 h-3.5 text-purple-400" /> : <FileText className="w-3.5 h-3.5 text-amber-400" />} {title}
                  </div>
                  <span className="text-red-500 font-semibold cursor-pointer text-[10px] hover:text-red-600">View all &gt;</span>
                </div>
                <div className="flex items-center gap-3 xl:gap-4">
                   <div className={`relative w-20 h-20 rounded-full border-[8px] border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0`}>
                     <div className={`absolute inset-[-8px] rounded-full border-[8px] border-transparent ${i === 0 ? 'border-t-red-500 border-r-amber-400 border-b-green-500 border-l-slate-400 transform rotate-45' : i === 1 ? 'border-t-slate-400 border-r-slate-400 border-b-green-500 border-l-amber-400 transform -rotate-12' : 'border-t-green-500 border-r-amber-400 border-b-green-500 border-l-slate-400 transform rotate-90'}`}></div>
                     <div className="text-center bg-white dark:bg-slate-900 rounded-full w-full h-full flex flex-col items-center justify-center z-10">
                        <div className="font-black text-slate-900 dark:text-white text-lg leading-none">{i === 0 ? '31' : i === 1 ? '24' : '48'}</div>
                        <div className="text-[8px] text-slate-400 font-bold mt-0.5">Total</div>
                     </div>
                   </div>
                   <div className="space-y-2 flex-1 min-w-0">
                      <div className="flex justify-between gap-1 text-[10px] sm:text-[11px]"><span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300"><span className="w-2 h-2 rounded-full bg-green-500 shrink-0"></span><span className="truncate">{i === 0 ? 'Resolved' : i === 1 ? 'Active' : 'Approved'}</span></span> <span className="font-bold text-slate-900 dark:text-white">8</span></div>
                      <div className="flex justify-between gap-1 text-[10px] sm:text-[11px]"><span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300"><span className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span><span className="truncate">{i === 0 ? 'In progress' : 'Pending'}</span></span> <span className="font-bold text-slate-900 dark:text-white">2</span></div>
                      <div className="flex justify-between gap-1 text-[10px] sm:text-[11px]"><span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300"><span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span className="truncate">{i === 0 ? 'Open' : i === 1 ? 'Expired' : 'Escalated'}</span></span> <span className="font-bold text-slate-900 dark:text-white">16</span></div>
                   </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
