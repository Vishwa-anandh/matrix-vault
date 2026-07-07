import { motion } from 'motion/react';
import { Activity, ShieldCheck, Users, AlertTriangle, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Decorative glows */}
      <div className="absolute -inset-2 bg-gradient-to-r from-red-200 to-red-100 rounded-2xl blur-2xl opacity-60 animate-pulse"></div>
      
      <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col ring-1 ring-slate-900/5">
        {/* Mockup Header */}
        <div className="h-14 border-b border-slate-200 bg-slate-50 flex items-center px-4 justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex bg-white px-4 sm:px-24 py-1.5 rounded-md border border-slate-200 shadow-sm">
             <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
               <ShieldCheck className="w-3 h-3 text-slate-400" />
               matrixvault.app
             </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-200">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider hidden sm:block">Secure</span>
          </div>
        </div>

        {/* Mockup Body */}
        <div className="p-6 bg-slate-50/50 grid gap-6">
          {/* Top Stat Pills */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <motion.div whileHover={{ y: -2 }} className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">Pending</span>
                <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">124</div>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="bg-white rounded-xl p-3 sm:p-4 border border-red-200 shadow-sm shadow-red-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-full blur-xl -mr-10 -mt-10"></div>
              <div className="flex items-center justify-between mb-3 relative">
                <span className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">Active FFs</span>
                <div className="p-1.5 bg-red-50 text-red-600 rounded-md">
                  <Activity className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-red-600 relative">18</div>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">Escalations</span>
                <div className="p-1.5 bg-amber-50 text-amber-600 rounded-md">
                  <AlertTriangle className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">3</div>
            </motion.div>
          </div>

          {/* Chart Area */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-bold text-slate-900">Request History (7 Days)</span>
              <button className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1">
                View Report <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="flex items-end justify-between h-24 sm:h-32 gap-3 px-2">
              {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                <div key={i} className="w-full bg-slate-100 rounded-t-lg relative group overflow-hidden">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className={`absolute bottom-0 w-full rounded-t-lg transition-colors ${i === 5 ? 'bg-red-500' : 'bg-slate-300 group-hover:bg-slate-400'}`}
                  ></motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Activity List */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
             <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <span className="text-sm font-bold text-slate-900">Recent Approvals</span>
             </div>
            <div className="divide-y divide-slate-100">
              {[
                { id: 'REQ-8902', user: 'Sarah Jenkins', role: 'SAP_ALL', status: 'Approved', color: 'text-green-700', bg: 'bg-green-50 border-green-200', icon: CheckCircle2 },
                { id: 'REQ-8901', user: 'Alex Davis', role: 'FI_ADMIN', status: 'In Review', color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200', icon: Activity },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-600 border border-slate-200 shadow-sm">
                      {item.user.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{item.user}</div>
                      <div className="text-xs font-medium text-slate-500 mt-0.5 flex items-center gap-1.5">
                        <FileText className="w-3 h-3" /> {item.id} <span className="text-slate-300">&bull;</span> {item.role}
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border ${item.bg} ${item.color}`}>
                    <item.icon className="w-3.5 h-3.5 hidden sm:block" />
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
