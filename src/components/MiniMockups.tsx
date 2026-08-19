import React from "react";
import {
  MoreHorizontal, MoreVertical, Calendar, UserMinus, Loader2, Layers, Wrench,
  Users,
  CheckCircle2,
  ArrowRight,
  Activity,
  Database,
  Search,
  Bell,
  Sliders,
  Shield,
  LayoutDashboard,
  ShieldCheck,
  GitMerge,
  BarChart2,
  ShieldAlert,
  Plus,
  Globe,
  Server,
  Box,
  Info,
  Edit2,
  Trash2,
  Clock,
  Bot,
  ArrowDown,
  KeyRound,
  Save,
  FileText,
  XCircle,
  AlertTriangle,
  UserCheck,
  RefreshCw,
  Eye,
  User,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Check,
  Lock,
  Hash, MessageSquare,
  Square, Star, Link2,
  X, BellRing, Download, ExternalLink, Radio, Mail, History, EyeOff, Sparkles,
  Settings
} from "lucide-react";
export const DirectoryCatalogMiniMockup = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }
  }, [isHovered]);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm relative">
      {/* Title Bar */}
      <div className="bg-white border-b border-slate-200 px-6 sm:px-3 py-4 sm:py-2 flex items-center justify-between shrink-0 z-10 relative shadow-sm">
        <div className="flex items-center gap-3 sm:gap-1.5">
          <div className="w-10 sm:w-8 h-10 sm:h-8 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
            <Users className="w-5 sm:w-4 h-5 sm:h-4" />
          </div>
          <div>
            <div className="text-[18px] sm:text-[14px] font-bold text-slate-900 leading-tight">Role Lens Comparison</div>
            <div className="text-[13px] sm:text-[10px] text-slate-500 font-medium mt-0.5">Cross-role authorization analysis</div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-1 w-[200%] transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
      >
        {/* View 1: Summary Table */}
        <div className="w-1/2 h-full flex flex-col bg-white">
          <div className="px-5 sm:px-4 py-4 sm:py-3 flex items-center gap-6 text-[11px] sm:text-[7.7px]">
            <div className="font-semibold text-slate-700"><span className="font-black">0</span> Matched — Auth rows present in ALL roles</div>
            <div className="font-semibold text-purple-700"><span className="font-black text-purple-600">112 Unmatched</span> — Auth rows missing from one or more roles</div>
          </div>

          <div className="px-5 sm:px-4 pb-4 sm:pb-3 flex items-center gap-2 border-b border-slate-100">
            {["All 112", "Matched 0", "Unmatched 112", "T-Code 18", "Auth Object 81"].map((tab, i) => (
              <div key={i} className={`text-[10.2px] sm:text-[6.8px] font-bold px-4 py-2 rounded-md border flex-1 text-center ${i === 0 ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-slate-200'}`}>
                {tab}
              </div>
            ))}
          </div>

          <div className="flex-1 overflow-x-auto custom-scrollbar">
            <div className="min-w-[600px] w-full">
              <div className="px-5 sm:px-4 pt-4 pb-2 grid grid-cols-12 gap-2 border-b border-slate-100 text-[9.4px] sm:text-[6px] font-bold text-slate-600">
                <div className="col-span-4 grid grid-cols-4 w-full items-end pb-1">
                  <div className="col-span-1 text-center">#</div>
                  <div className="col-span-3">Summary</div>
                </div>
                <div className="col-span-2 flex flex-col items-center gap-1.5">
                  <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-purple-600"></div> Role A</div>
                  <div className="text-[8.5px] sm:text-[5.1px] text-slate-500">Only in A</div>
                </div>
                <div className="col-span-2 flex flex-col items-center gap-1.5">
                  <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div> Role B</div>
                  <div className="text-[8.5px] sm:text-[5.1px] text-slate-500">Only in B</div>
                </div>
                <div className="col-span-2 flex flex-col items-center gap-1.5">
                  <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-teal-500"></div> Role C</div>
                  <div className="text-[8.5px] sm:text-[5.1px] text-slate-500">Only in C</div>
                </div>
                <div className="col-span-2 flex items-end justify-between pb-1">
                  <div className="text-[8.5px] sm:text-[5.1px] text-slate-500 text-center w-1/2">In All</div>
                  <div className="text-[8.5px] sm:text-[5.1px] text-slate-500 text-center w-1/2 flex items-center justify-center gap-1">SoD Conflicts <Info className="w-2 h-2" /></div>
                </div>
              </div>

              {[
                { n: 1, sum: "Authorization Objects", alpha: 36, beta: 29, gamma: 27, inAll: 11, sod: 4 },
                { n: 2, sum: "T-Codes", alpha: 9, beta: 7, gamma: 6, inAll: 4, sod: 2 },
                { n: 3, sum: "Authorization Fields", alpha: 67, beta: 55, gamma: 48, inAll: 21, sod: 5 },
              ].map((r, i) => (
                <div key={i} className="px-5 sm:px-4 py-3 sm:py-2.5 grid grid-cols-12 gap-2 border-b border-slate-50 text-[10.2px] sm:text-[6.8px] font-semibold text-slate-700">
                  <div className="col-span-4 grid grid-cols-4 w-full">
                    <div className="col-span-1 text-center text-slate-500">{r.n}</div>
                    <div className="col-span-3">{r.sum}</div>
                  </div>
                  <div className="col-span-2 text-center">{r.alpha}</div>
                  <div className="col-span-2 text-center">{r.beta}</div>
                  <div className="col-span-2 text-center">{r.gamma}</div>
                  <div className="col-span-2 flex justify-between">
                    <div className="w-1/2 text-center">{r.inAll}</div>
                    <div className="w-1/2 text-center text-red-600 font-bold">{r.sod}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View 2: Detailed Table */}
        <div className="w-1/2 h-full flex flex-col bg-white">
          <div className="px-5 sm:px-4 py-4 sm:py-3 flex items-center gap-2 border-b border-slate-100 text-[10.2px] sm:text-[6.8px]">
            <div className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-md text-slate-500 flex-1">
              <Search className="w-3 h-3" /> Search auth object, field, value... <ArrowDown className="w-3 h-3 ml-auto" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-md text-slate-700 font-semibold">
              All Sources <ArrowDown className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-md text-slate-700 font-semibold">
              All Data Types <ArrowDown className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-1 px-3 py-1.5 border border-slate-200 rounded-md text-slate-600 font-semibold">
              <Sliders className="w-3 h-3" /> Add Filter
            </div>
          </div>

          <div className="flex-1 overflow-x-auto custom-scrollbar">
            <div className="min-w-[600px] w-full">
              <div className="px-5 sm:px-4 py-3 sm:py-2 grid grid-cols-12 gap-1 border-b border-slate-100 text-[9.4px] sm:text-[6px] font-bold text-slate-500">
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-2">Auth Object</div>
                <div className="col-span-1">Field</div>
                <div className="col-span-1">Value</div>
                <div className="col-span-2">Description</div>
                <div className="col-span-1">Source</div>
                <div className="col-span-1 text-center">In Role A</div>
                <div className="col-span-1 text-center">In Role B</div>
                <div className="col-span-1 text-center">In Role C</div>
                <div className="col-span-1 text-center">Trace</div>
              </div>

              {[
                { n: 1, obj: "Z_TCODE", field: "ACTVT", val: "01", desc: "Create Purchase", src: "Role", a: true, b: true, c: false },
                { n: 2, obj: "Z_TCODE", field: "ACTVT", val: "02", desc: "Change Purchase", src: "Profile", a: true, b: false, c: true },
                { n: 3, obj: "Z_TCODE", field: "BUKRS", val: "1000", desc: "Company Code 1000", src: "Role", a: true, b: true, c: true },
                { n: 4, obj: "Z_TCODE", field: "BUKRS", val: "2000", desc: "Company Code 2000", src: "Role", a: false, b: true, c: true },
                { n: 5, obj: "Z_TCODE", field: "VKORG", val: "2000", desc: "Sales Organization", src: "Profile", a: true, b: false, c: false },
              ].map((r, i) => (
                <div key={i} className="px-5 sm:px-4 py-3 sm:py-2.5 grid grid-cols-12 gap-1 border-b border-slate-50 text-[9.4px] sm:text-[6.4px] font-semibold text-slate-700 items-center">
                  <div className="col-span-1 text-center text-slate-500">{r.n}</div>
                  <div className="col-span-2 font-mono font-bold text-slate-800">{r.obj}</div>
                  <div className="col-span-1 font-mono">{r.field}</div>
                  <div className="col-span-1 font-mono">{r.val}</div>
                  <div className="col-span-2 truncate pr-2">{r.desc}</div>
                  <div className="col-span-1 text-purple-700 font-bold">{r.src}</div>
                  <div className="col-span-1 flex justify-center text-emerald-500">{r.a ? <CheckCircle2 className="w-3.5 h-3.5 sm:w-3 sm:h-3" /> : <span className="text-slate-300">—</span>}</div>
                  <div className="col-span-1 flex justify-center text-emerald-500">{r.b ? <CheckCircle2 className="w-3.5 h-3.5 sm:w-3 sm:h-3" /> : <span className="text-slate-300">—</span>}</div>
                  <div className="col-span-1 flex justify-center text-emerald-500">{r.c ? <CheckCircle2 className="w-3.5 h-3.5 sm:w-3 sm:h-3" /> : <span className="text-slate-300">—</span>}</div>
                  <div className="col-span-1 flex justify-center text-purple-600"><Eye className="w-3.5 h-3.5 sm:w-3 sm:h-3" /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <button onClick={() => setActiveIndex(0)} className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${activeIndex === 0 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 1" />
        <button onClick={() => setActiveIndex(1)} className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${activeIndex === 1 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 2" />
      </div>
    </div>
  );
};
export const CertificationsMiniMockup = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }
  }, [isHovered]);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm relative">
      <div
        className="flex h-full w-[200%] transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
      >
        {/* View 1: Approver Management */}
        <div className="w-1/2 h-full flex flex-col bg-[#f8fafc]">
          <div className="bg-white px-6 sm:px-4 py-5 sm:py-4 flex max-sm:flex-wrap items-center justify-between">
            <div className="flex items-center gap-4 sm:gap-3">
              <div className="w-10 sm:w-8 h-10 sm:h-8 rounded-full bg-blue-50 flex items-center justify-center text-[15.3px] sm:text-[11.9px] font-bold text-blue-700">
                AM
              </div>
              <div>
                <div className="text-[15.3px] sm:text-[11.9px] font-bold text-slate-800">
                  Approver Management
                </div>
                <div className="text-[11px] sm:text-[8.5px] text-slate-500 font-medium">
                  498 covered · 0 unassigned roles
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-3">
              <span className="text-[10.2px] sm:text-[7.7px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                100% covered
              </span>
              <div className="w-24 sm:w-16 h-2 sm:h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-full bg-emerald-500 rounded-full"></div>
              </div>
              <span className="text-[11px] sm:text-[8.5px] text-slate-500 font-medium">
                498 / 498
              </span>
            </div>
          </div>

          {/* Sub-tabs */}
          <div className="bg-white border-b border-slate-200 px-6 sm:px-4 flex items-center gap-8 sm:gap-6 text-[11.9px] sm:text-[9.4px] font-bold">
            <span className="text-blue-700 border-b-2 border-blue-600 pb-3">
              Role Approvers
            </span>
            <span className="text-slate-500 pb-3">Profile Approvers</span>
          </div>

          {/* Search/Filter bar */}
          <div className="bg-white border-b border-slate-100 px-6 sm:px-4 py-3 sm:py-2.5 flex items-center gap-4 sm:gap-3">
            <div className="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-1.5 text-[11px] sm:text-[8.5px] text-slate-600 font-medium shadow-sm">
              <span>All systems</span>
              <span className="text-[8.5px]">▼</span>
            </div>
            <div className="flex-1 flex items-center gap-2 border border-slate-200 rounded-md px-3 py-1.5 text-[11px] sm:text-[8.5px] text-slate-400 shadow-sm">
              <Search className="w-4 h-4 sm:w-3 sm:h-3" />
              <span>Search role name...</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 sm:w-7 h-4 sm:h-3.5 bg-slate-200 rounded-full flex items-center px-0.5 shadow-inner">
                <div className="w-3 sm:w-2.5 h-3 sm:h-2.5 bg-white rounded-full shadow-sm"></div>
              </div>
              <span className="text-[11px] sm:text-[8.5px] text-slate-600 font-medium">
                Unassigned only
              </span>
            </div>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-12 gap-4 px-6 sm:px-4 py-2 sm:py-1.5 bg-white border-b border-slate-100 text-[10.2px] sm:text-[7.7px] font-bold text-slate-700">
            <div className="col-span-4">Role Name</div>
            <div className="col-span-2">System</div>
            <div className="col-span-6">Assigned Approvers</div>
          </div>

          {/* Table rows */}
          <div className="flex-1 overflow-hidden bg-white pb-2">
            {[
              { role: "SAP_ALL", approvers: ["Approver A", "Approver B"] },
              { role: "SAP_NEW", approvers: ["Approver C", "Approver D"] },
              // { role: "SAP_SCR", approvers: ["Approver E", "Approver F"] },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-4 px-6 sm:px-4 py-3 sm:py-2 border-b border-slate-50 items-center"
              >
                <div className="col-span-4 flex items-center gap-3 sm:gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                  <span className="text-[11px] sm:text-[8.5px] font-bold text-slate-700">
                    {row.role}
                  </span>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <span className="text-[10.2px] sm:text-[7.7px] text-slate-500 font-medium">PRD System</span>
                  <span className="text-[8.5px] sm:text-[6.8px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded">
                    Active
                  </span>
                </div>
                <div className="col-span-6 flex items-center gap-2 flex-wrap">
                  {row.approvers.map((a, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-md px-2 py-1 shadow-sm"
                    >
                      <User className="w-3.5 h-3.5 sm:w-3 sm:h-3 text-slate-400" />
                      <span className="text-[10.2px] sm:text-[7.7px] text-slate-600 font-medium">
                        {a}
                      </span>
                      <span className="text-[10.2px] sm:text-[7.7px] text-slate-400 ml-1 cursor-pointer hover:text-slate-600 font-medium">×</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-1 text-[10.2px] sm:text-[7.7px] text-slate-500 font-medium border border-slate-200 border-dashed rounded-md px-2.5 py-1 cursor-pointer hover:bg-slate-50">
                    <span className="text-slate-400">+</span> Assign
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View 2: Personal Review Queue */}
        <div className="w-1/2 h-full flex flex-col bg-white">
          <div className="px-6 sm:px-4 py-5 sm:py-4 flex items-center gap-4 sm:gap-3 border-b border-slate-100">
            <div className="w-10 sm:w-8 h-10 sm:h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <User className="w-5 sm:w-4 h-5 sm:h-4" />
            </div>
            <div>
              <div className="text-[15.3px] sm:text-[11.9px] font-bold text-slate-900">
                Personal Review Queue
              </div>
              <div className="text-[11px] sm:text-[8.5px] text-slate-500 font-medium mt-0.5">
                A personal queue of pending access certifications, improving completion rates.
              </div>
            </div>
          </div>

          <div className="flex-1 p-5 sm:p-4 overflow-hidden bg-[#f8fafc] pb-2">
            <div className="grid grid-cols-2 gap-4 sm:gap-3 max-w-[800px] mx-auto">
              {[
                { type: "Critical", score: "100/100", dot: "bg-red-600", text: "text-red-600", icon: "BA", sysName: "SAP_PRD_001", sysDesc: "SAP Production System", role: "SAP_BASIS_ADMIN", violations: 72 },
                { type: "Critical", score: "100/100", dot: "bg-red-600", text: "text-red-600", icon: "S4", sysName: "S4H_PRD_100", sysDesc: "SAP S/4HANA Production", role: "S4_FIN_AP", violations: 65 },

              ].map((card, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-lg p-4 sm:p-3 shadow-sm flex flex-col gap-3 sm:gap-2">
                  <div className="flex justify-between items-center text-[10.2px] sm:text-[7.7px] font-semibold text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 sm:w-1 sm:h-1 rounded-full ${card.dot}`}></div>
                      <span className={`${card.text} font-bold`}>{card.type}</span>
                      <span>{card.score}</span>
                    </div>
                    <span className="text-slate-400 font-medium">Pending</span>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-2 mt-1 sm:mt-0">
                    <div className="w-8 h-8 sm:w-6 sm:h-6 rounded bg-slate-100 flex items-center justify-center text-[11.9px] sm:text-[8.5px] font-bold text-slate-700">
                      {card.icon}
                    </div>
                    <div>
                      <div className="text-[11.9px] sm:text-[9.4px] font-bold text-slate-900 leading-tight">{card.sysName}</div>
                      <div className="text-[9.4px] sm:text-[7.2px] text-slate-500">{card.sysDesc}</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 mt-1 sm:mt-0">
                    <div className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-400 tracking-wider">Role</div>
                    <div className="bg-slate-50 border border-slate-100 rounded text-[11px] sm:text-[8.5px] font-semibold text-slate-700 px-3 py-1.5 sm:py-1">
                      {card.role}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:gap-2 mt-2 sm:mt-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 sm:gap-1 text-[10.2px] sm:text-[8.1px] font-bold text-orange-600">
                        <AlertTriangle className="w-3.5 h-3.5 sm:w-3 sm:h-3" />
                        {card.violations} SoD violations
                      </div>
                      <div className="text-[9.4px] sm:text-[7.2px] font-semibold text-slate-500 cursor-pointer flex items-center gap-1 hover:text-slate-700">
                        Details <ArrowRight className="w-3 h-3 sm:w-2.5 sm:h-2.5" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-1.5">
                      <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10.2px] sm:text-[7.7px] py-1.5 sm:py-1 rounded shadow-sm">Approve</button>
                      <button className="bg-[#e11d48] hover:bg-rose-700 text-white font-bold text-[10.2px] sm:text-[7.7px] py-1.5 sm:py-1 rounded shadow-sm">Revoke</button>
                      <button className="bg-slate-600 hover:bg-slate-700 text-white font-bold text-[10.2px] sm:text-[7.7px] py-1.5 sm:py-1 rounded shadow-sm">Escalate</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <button onClick={() => setActiveIndex(0)} className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${activeIndex === 0 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 1" />
        <button onClick={() => setActiveIndex(1)} className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${activeIndex === 1 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 2" />
      </div>
    </div>
  );
};
export const SimulationMiniMockup = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }
  }, [isHovered]);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm relative">
      {/* Title Bar */}
      <div className="bg-white border-b border-slate-200 px-6 sm:px-3 py-4 sm:py-2 flex items-center justify-between shrink-0 z-10 relative shadow-sm">
        <div className="flex items-center gap-2 sm:gap-1.5">
          <div className="w-8 h-8 sm:w-6 sm:h-6 rounded-full border-2 border-red-600 flex items-center justify-center text-red-600">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 sm:w-3 sm:h-3 ml-0.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
          <div className="text-[18px] sm:text-[14px] font-bold text-slate-900 leading-tight">Role Simulator</div>
        </div>
        <div className="flex items-center gap-2 sm:gap-1">
          <button className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 sm:gap-1 px-4 sm:px-2.5 py-1.5 sm:py-1 rounded sm:rounded text-[13px] sm:text-[10px] font-bold transition-colors">
            <FileText className="w-3.5 h-3.5 sm:w-2.5 sm:h-2.5" /> Report
          </button>
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center gap-1 sm:gap-0.5 px-3 sm:px-2 py-1.5 sm:py-1 rounded sm:rounded text-[13px] sm:text-[10px] font-bold transition-colors">
            <Plus className="w-3.5 h-3.5 sm:w-2.5 sm:h-2.5" /> New
          </button>
        </div>
      </div>
      <div
        className="flex flex-1 w-[200%] transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
      >
        {/* View 1: Change Simulation */}
        <div className="w-1/2 h-full flex flex-col bg-[#f8fafc]">
          {/* Header Summary */}
          <div className="bg-white px-6 sm:px-4 py-6 sm:py-4 flex max-sm:flex-wrap items-center justify-between border-b border-slate-100 shadow-sm z-10">
            <div className="flex items-center gap-5 sm:gap-3">
              <div className="w-14 sm:w-12 h-14 sm:h-12 flex items-center justify-center text-[18.7px] sm:text-[13.6px] font-black text-red-600">
                72
              </div>
              <div>
                <div className="text-[14.5px] sm:text-[11px] font-bold text-red-600">
                  High Risk
                </div>
                <div className="text-[11px] sm:text-[8.1px] text-slate-700 font-medium">
                  4 SoD conflicts will be created.
                </div>
                <div className="text-[10.2px] sm:text-[7.7px] text-slate-500 font-medium">
                  Please review before applying changes.
                </div>
              </div>
            </div>

            <div className="flex gap-10 sm:gap-6 text-center border-l border-slate-200 pl-10 sm:pl-6">
              <div>
                <div className="text-[18.7px] sm:text-[13.6px] font-black text-slate-900">512</div>
                <div className="text-[10.2px] sm:text-[7.7px] text-slate-500 font-medium mt-0.5">Rules Checked</div>
              </div>
              <div>
                <div className="text-[18.7px] sm:text-[13.6px] font-black text-red-600">4</div>
                <div className="text-[10.2px] sm:text-[7.7px] text-slate-500 font-medium mt-0.5">New Conflicts</div>
              </div>
              <div>
                <div className="text-[18.7px] sm:text-[13.6px] font-black text-emerald-600">0</div>
                <div className="text-[10.2px] sm:text-[7.7px] text-slate-500 font-medium mt-0.5">Resolved Conflicts</div>
              </div>
              <div>
                <div className="text-[18.7px] sm:text-[13.6px] font-black text-slate-900">0</div>
                <div className="text-[10.2px] sm:text-[7.7px] text-slate-500 font-medium mt-0.5">Escalations</div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 p-6 sm:p-5 bg-[#f8fafc] flex flex-col overflow-hidden">
            <div className="bg-white border border-slate-100 rounded-xl shadow-sm flex flex-col overflow-hidden">
              <div className="px-6 sm:px-4 py-4 sm:py-3 text-[11.9px] sm:text-[9.4px] font-bold text-slate-800 border-b border-slate-100">
                Potential SoD Conflicts
              </div>
              <div className="px-4 sm:px-2 grid grid-cols-12 gap-1 py-3 sm:py-2 border-b border-slate-100 bg-slate-50 text-[9.4px] sm:text-[6.8px] font-bold text-slate-500">
                <div className="col-span-2">Severity</div>
                <div className="col-span-2">Conflict</div>
                <div className="col-span-3">Description</div>
                <div className="col-span-5">Conflicting Roles</div>
              </div>
              <div className="flex flex-col flex-1 overflow-hidden">
                {[
                  { sev: "Critical", sevColor: "text-red-600 bg-red-50 border-red-100", conf: "FIN-001", desc: "Invoice entry vs Payment run", r1: "SAP_AP_INVOICE_CREATE", r2: "SAP_AP_PAYMENT_RUN" },
                  { sev: "High", sevColor: "text-orange-600 bg-orange-50 border-orange-100", conf: "FIN-004", desc: "Vendor master vs Payment run", r1: "SAP_VENDOR_MAINT", r2: "SAP_AP_PAYMENT_RUN" },
                ].map((row, i) => (
                  <div key={i} className="px-4 sm:px-2 grid grid-cols-12 gap-1 py-4 sm:py-3 border-b border-slate-50 items-center w-full">
                    <div className="col-span-2 flex items-center">
                      <span className={`text-[8.5px] sm:text-[6.4px] font-bold px-1.5 py-1 rounded border ${row.sevColor}`}>{row.sev}</span>
                    </div>
                    <div className="col-span-2 text-[10.2px] sm:text-[7.7px] font-bold text-slate-700">{row.conf}</div>
                    <div className="col-span-3 text-[10.2px] sm:text-[7.7px] text-slate-600 font-medium pr-2">{row.desc}</div>
                    <div className="col-span-5 flex items-center gap-1 text-[8.1px] sm:text-[6px] font-bold">
                      <span className="bg-slate-100 text-slate-600 px-1.5 py-1 rounded break-all">{row.r1}</span>
                      <span className="text-red-500 font-bold text-[6.8px] sm:text-[5.1px]">VS</span>
                      <span className="bg-slate-100 text-slate-600 px-1.5 py-1 rounded break-all">{row.r2}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 sm:px-4 py-3 sm:py-2.5 bg-slate-50 border-t border-slate-100 text-[10.2px] sm:text-[7.7px] text-slate-500 font-medium shrink-0">
                Showing 1 to 2 of 4 conflicts
              </div>
            </div>
          </div>
        </div>

        {/* View 2: Custom Risk Rule Builder */}
        <div className="w-1/2 h-full flex flex-col bg-white">
          {/* Header */}
          <div className="px-6 sm:px-4 py-5 sm:py-3.5 border-b border-slate-100 flex justify-between items-center shadow-sm z-10">
            <div className="flex items-center gap-4 sm:gap-3">
              <div className="w-10 sm:w-8 h-10 sm:h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
                <Shield className="w-5 sm:w-4 h-5 sm:h-4" />
              </div>
              <div>
                <div className="text-[15.3px] sm:text-[11.9px] font-bold text-slate-900">Custom Risk Rule Builder</div>
                <div className="text-[11px] sm:text-[8.1px] text-slate-500 font-medium mt-0.5">Define and tune your own SoD and sensitive-access rules in a guided builder.</div>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-2">
              <button className="px-4 sm:px-3 py-2 sm:py-1.5 border border-slate-200 rounded-lg text-[11px] sm:text-[8.1px] font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-1.5 shadow-sm"><XCircle className="w-4 h-4 sm:w-3.5 sm:h-3.5" /> Cancel</button>
              <button className="px-4 sm:px-3 py-2 sm:py-1.5 bg-indigo-500 rounded-lg text-[11px] sm:text-[8.1px] font-bold text-white hover:bg-indigo-600 flex items-center gap-1.5 shadow-sm"><Save className="w-4 h-4 sm:w-3.5 sm:h-3.5" /> Save Rule</button>
            </div>
          </div>

          {/* Progress Tabs */}
          <div className="flex px-10 sm:px-6 pt-5 pb-0 items-center justify-between text-[10.2px] sm:text-[7.7px] font-bold text-slate-500 relative">
            <div className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-indigo-500"></div>
            <div className="flex items-center gap-2.5 text-indigo-600 pb-4"><div className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center">1</div> Define Rule</div>
            {/* <div className="flex items-center gap-2.5 pb-4"><div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">2</div> Set Conditions</div>
            <div className="flex items-center gap-2.5 pb-4"><div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">3</div> Set Exceptions</div>
            <div className="flex items-center gap-2.5 pb-4"><div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">4</div> Review & Activate</div> */}
          </div>
          <div className="w-full h-px bg-slate-100"></div>

          {/* Body */}
          <div className="flex-1 flex max-sm:flex-col bg-[#f8fafc] p-4 sm:p-5 gap-4 overflow-hidden">
            {/* Left Panel */}
            <div className="w-full sm:w-[30%] flex flex-col gap-3 sm:gap-4 shrink-0">
              <div className="flex max-sm:gap-4 max-sm:flex-row flex-col gap-3 sm:gap-4">
                <div className="flex-1 flex flex-col gap-1 sm:gap-2">
                  <label className="text-[10.2px] sm:text-[7.7px] font-bold text-slate-600">Rule Name</label>
                  <div className="bg-white border border-slate-200 rounded-md px-3 py-2 sm:py-2.5 text-[10.2px] sm:text-[8.1px] font-semibold text-slate-800 shadow-sm truncate">AP Invoice Entry vs Payment Release</div>
                </div>
                <div className="flex-1 flex flex-col gap-1 sm:gap-2">
                  <label className="text-[10.2px] sm:text-[7.7px] font-bold text-slate-600">Rule Code</label>
                  <div className="bg-white border border-slate-200 rounded-md px-3 py-2 sm:py-2.5 text-[10.2px] sm:text-[8.1px] font-semibold text-slate-800 shadow-sm">AP-INV-PAY-001</div>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-2">
                <div className="flex-1 flex flex-col gap-1 sm:gap-2">
                  <label className="text-[10.2px] sm:text-[7.7px] font-bold text-slate-600">Category</label>
                  <div className="bg-white border border-slate-200 rounded-md px-3 py-2 sm:py-1.5 text-[10.2px] sm:text-[8.1px] font-semibold text-slate-800 flex justify-between shadow-sm">Finance <span className="text-slate-400">v</span></div>
                </div>
                <div className="flex-1 flex flex-col gap-1 sm:gap-2">
                  <label className="text-[10.2px] sm:text-[7.7px] font-bold text-slate-600">Risk Severity</label>
                  <div className="bg-white border border-slate-200 rounded-md px-3 py-2 sm:py-1.5 text-[10.2px] sm:text-[8.1px] font-semibold text-red-600 flex justify-between shadow-sm border-l-[3px] border-l-red-500">Critical <span className="text-slate-400">v</span></div>
                </div>
              </div>
            </div>

            {/* Middle Panel */}
            <div className="flex-1 min-w-0 bg-white border border-slate-200 rounded-xl p-6 sm:p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col">
              <div className="text-[12.8px] sm:text-[9.4px] font-bold text-slate-900 mb-5 sm:mb-4 truncate">Define the conflicting combination</div>
              <div className="flex max-sm:flex-col items-center gap-4 sm:gap-2 flex-1 min-w-0 overflow-y-auto custom-scrollbar pr-1">
                {/* Block 1 */}
                <div className="flex-1 max-sm:w-full min-w-0 h-full border border-slate-100 rounded-xl p-4 sm:p-3 bg-slate-50 flex flex-col gap-3">
                  <div className="text-[11px] sm:text-[8.1px] font-semibold text-slate-700 truncate">Users have ANY of these roles</div>
                  <div className="bg-white border border-slate-200 rounded-lg px-2 sm:px-3 py-2 sm:py-2 text-[10.2px] sm:text-[7.7px] font-medium text-slate-600 flex justify-between shadow-sm items-center"><span className="truncate">Match Any</span></div>
                  <div className="bg-white border border-slate-200 rounded-lg px-2 sm:px-3 py-2 sm:py-2 text-[10.2px] sm:text-[7.2px] font-bold text-slate-700 flex justify-between shadow-sm items-center gap-1.5"><div className="flex items-center gap-1.5 truncate"> <span className="truncate">SAP_FIN_CLERK_AP</span></div> <span className="text-slate-400 text-[11.9px] shrink-0">×</span></div>
                  {/* <div className="bg-white border border-slate-200 rounded-lg px-2 sm:px-3 py-2 sm:py-2 text-[10.2px] sm:text-[7.2px] font-bold text-slate-700 flex justify-between shadow-sm items-center gap-1.5"><div className="flex items-center gap-1.5 truncate"><span className="text-slate-300 shrink-0">⋮⋮</span> <span className="truncate">SAP_AP_INVOICE_CREATE</span></div> <span className="text-slate-400 text-[11.9px] shrink-0">×</span></div> */}
                  {/* <div className="text-indigo-600 font-bold text-[11px] sm:text-[8.1px] cursor-pointer mt-1 hover:text-indigo-700 flex items-center gap-1 truncate">+ Add Role</div> */}
                </div>

                {/* Separator */}
                <div className="flex flex-col items-center justify-center gap-1 shrink-0 px-1 py-1">
                  <div className="text-[9.4px] sm:text-[6.4px] font-bold text-red-600 tracking-wide text-center">Conflicts With</div>
                  <div className="text-[20.4px] sm:text-[15.3px] font-black text-red-600 leading-none max-sm:rotate-90">↔</div>
                </div>

                {/* Block 2 */}
                <div className="flex-1 max-sm:w-full min-w-0 h-full border border-slate-100 rounded-xl p-4 sm:p-3 bg-slate-50 flex flex-col gap-3">
                  <div className="text-[11px] sm:text-[8.1px] font-semibold text-slate-700 truncate">Users have ANY of these roles</div>
                  <div className="bg-white border border-slate-200 rounded-lg px-2 sm:px-3 py-2 sm:py-2 text-[10.2px] sm:text-[7.7px] font-medium text-slate-600 flex justify-between shadow-sm items-center"><span className="truncate">Match Any</span> </div>
                  <div className="bg-white border border-slate-200 rounded-lg px-2 sm:px-3 py-2 sm:py-2 text-[10.2px] sm:text-[7.2px] font-bold text-slate-700 flex justify-between shadow-sm items-center gap-1.5"><div className="flex items-center gap-1.5 truncate"> <span className="truncate">SAP_PAYMENT_RUN</span></div> <span className="text-slate-400 text-[11.9px] shrink-0">×</span></div>
                  {/* <div className="bg-white border border-slate-200 rounded-lg px-2 sm:px-3 py-2 sm:py-2 text-[10.2px] sm:text-[7.2px] font-bold text-slate-700 flex justify-between shadow-sm items-center gap-1.5"><div className="flex items-center gap-1.5 truncate"><span className="text-slate-300 shrink-0">⋮⋮</span> <span className="truncate">SAP_PAYMENT_RELEASE</span></div> <span className="text-slate-400 text-[11.9px] shrink-0">×</span></div> */}
                  {/* <div className="text-indigo-600 font-bold text-[11px] sm:text-[8.1px] cursor-pointer mt-1 hover:text-indigo-700 flex items-center gap-1 truncate">+ Add Role</div> */}
                </div>
              </div>
            </div>

            {/* Right Panel Removed */}
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <button onClick={() => setActiveIndex(0)} className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${activeIndex === 0 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 1" />
        <button onClick={() => setActiveIndex(1)} className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${activeIndex === 1 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 2" />
      </div>
    </div>
  );
};
export const RemediationMiniMockup = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }
  }, [isHovered]);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm relative">
      <div
        className="flex h-full w-[200%] transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
      >
        {/* View 1: Guided Remediation */}
        <div className="w-1/2 h-full flex flex-col bg-white overflow-hidden shrink-0">
          {/* Header */}
          <div className="px-6 sm:px-4 py-5 sm:py-4 flex items-center justify-between border-b border-slate-100 z-10 shrink-0">
            <div className="flex items-center gap-4 sm:gap-3">
              <div className="w-10 sm:w-8 h-10 sm:h-8 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
                <Wrench className="w-5 sm:w-4 h-5 sm:h-4" />
              </div>
              <div>
                <div className="text-[15.3px] sm:text-[11.9px] font-bold text-slate-900">Guided Remediation</div>
                <div className="text-[11px] sm:text-[8.5px] text-slate-500 font-medium mt-0.5">Workflows for resolving an identified conflict — reassign, restrict, or mitigate — with every action logged.</div>
              </div>
            </div>
          </div>

          {/* Top Stats */}
          <div className="px-6 sm:px-4 py-4 sm:py-3 flex gap-4 sm:gap-3 shrink-0">
            <div className="flex-1 border border-slate-200 rounded-lg p-3 sm:p-2 flex items-center gap-3 sm:gap-2 shadow-sm">
              <div className="w-8 sm:w-6 h-8 sm:h-6 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600"><Layers className="w-4 sm:w-3 h-4 sm:h-3" /></div>
              <div>
                <div className="text-[9.4px] sm:text-[6.8px] font-semibold text-slate-500">All Conflicts</div>
                <div className="text-[15.3px] sm:text-[11.9px] font-black text-slate-900 leading-none mt-0.5">21</div>
              </div>
            </div>
            <div className="flex-1 border border-slate-200 rounded-lg p-3 sm:p-2 flex items-center gap-3 sm:gap-2 shadow-sm">
              <div className="w-8 sm:w-6 h-8 sm:h-6 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500"><Loader2 className="w-4 sm:w-3 h-4 sm:h-3" /></div>
              <div>
                <div className="text-[9.4px] sm:text-[6.8px] font-semibold text-slate-500">In Progress</div>
                <div className="text-[15.3px] sm:text-[11.9px] font-black text-slate-900 leading-none mt-0.5">5</div>
              </div>
            </div>
            <div className="flex-1 border border-slate-200 rounded-lg p-3 sm:p-2 flex items-center gap-3 sm:gap-2 shadow-sm">
              <div className="w-8 sm:w-6 h-8 sm:h-6 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500"><Clock className="w-4 sm:w-3 h-4 sm:h-3" /></div>
              <div>
                <div className="text-[9.4px] sm:text-[6.8px] font-semibold text-slate-500">Pending Action</div>
                <div className="text-[15.3px] sm:text-[11.9px] font-black text-slate-900 leading-none mt-0.5">3</div>
              </div>
            </div>
            <div className="flex-1 border border-slate-200 rounded-lg p-3 sm:p-2 flex items-center gap-3 sm:gap-2 shadow-sm">
              <div className="w-8 sm:w-6 h-8 sm:h-6 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500"><CheckCircle2 className="w-4 sm:w-3 h-4 sm:h-3" /></div>
              <div>
                <div className="text-[9.4px] sm:text-[6.8px] font-semibold text-slate-500">Resolved</div>
                <div className="text-[15.3px] sm:text-[11.9px] font-black text-slate-900 leading-none mt-0.5">13</div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 flex flex-col overflow-hidden bg-white">
            <div className="flex items-center px-4 sm:px-2 py-2 bg-slate-50 border-y border-slate-100 text-[8.5px] sm:text-[6.4px] font-bold text-slate-500 shrink-0">
              <div className="w-[8%] truncate pr-1">ID</div>
              <div className="w-[22%] truncate pr-1">Conflict</div>
              <div className="w-[10%] text-center shrink-0 pr-1">Risk</div>
              <div className="w-[18%] truncate pr-1">Remediation Path</div>
              <div className="w-[15%] text-center shrink-0 pr-1">Status</div>
              <div className="w-[12%] truncate pr-1">Owner</div>
              <div className="flex-1 shrink-0 ml-auto"></div>
            </div>
            <div className="flex flex-col overflow-hidden bg-white">
              {[
                { id: "CON-0412", title: "Vendor Master vs Payment Run", risk: "High", riskCol: "text-red-600 bg-red-50", path: "Reassign Access", pathIcon: <UserMinus className="w-3.5 h-3.5" />, status: "In Progress", statusCol: "text-orange-600 bg-orange-50", owner: "Priya Nair", btn: "Continue", btnCol: "bg-indigo-600" },
                { id: "CON-0398", title: "Create User vs Change Role", risk: "High", riskCol: "text-red-600 bg-red-50", path: "Restrict Access", pathIcon: <Shield className="w-3.5 h-3.5" />, status: "Pending Action", statusCol: "text-blue-600 bg-blue-50", owner: "Akshana", btn: "Take Action", btnCol: "bg-indigo-600" },
                { id: "CON-0287", title: "PO Create vs PO Change", risk: "Medium", riskCol: "text-orange-600 bg-orange-50", path: "Restrict Access", pathIcon: <Shield className="w-3.5 h-3.5" />, status: "In Progress", statusCol: "text-orange-600 bg-orange-50", owner: "Jai Sharan", btn: "Continue", btnCol: "bg-indigo-600" },
                //  { id: "CON-0155", title: "Journal Entry vs Payment Release", risk: "High", riskCol: "text-red-600 bg-red-50", path: "Mitigate (Control)", pathIcon: <ShieldCheck className="w-3.5 h-3.5" />, status: "Pending Approval", statusCol: "text-purple-600 bg-purple-50", owner: "Arun BS", btn: "Review", btnCol: "bg-indigo-600" },
                //  { id: "CON-0091", title: "Maintain Vendor vs Bank Details", risk: "Low", riskCol: "text-emerald-600 bg-emerald-50", path: "Reassign Access", pathIcon: <UserMinus className="w-3.5 h-3.5" />, status: "Resolved", statusCol: "text-emerald-600 bg-emerald-50", owner: "Gowtham Kumar", btn: "View Logs", btnCol: "bg-indigo-600" },
              ].map((row, i) => (
                <div key={i} className="flex items-center px-4 sm:px-2 py-3 sm:py-2.5 border-b border-slate-50">
                  <div className="w-[8%] text-[8.5px] sm:text-[6.4px] font-bold text-slate-700 truncate pr-1">{row.id}</div>
                  <div className="w-[22%] text-[8.5px] sm:text-[6.4px] font-bold text-slate-900 truncate pr-1">{row.title}</div>
                  <div className="w-[10%] flex items-center justify-center shrink-0 pr-1">
                    <span className={`text-[7.7px] sm:text-[5.5px] font-bold px-1.5 py-0.5 rounded ${row.riskCol}`}>{row.risk}</span>
                  </div>
                  <div className="w-[18%] flex items-center gap-1 text-[8.5px] sm:text-[6.4px] font-semibold text-slate-700 truncate pr-1">
                     <span className="truncate">{row.path}</span>
                  </div>
                  <div className="w-[15%] flex items-center justify-center shrink-0 pr-1">
                    <span className={`text-[7.7px] sm:text-[5.5px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap ${row.statusCol}`}>{row.status}</span>
                  </div>
                  <div className="w-[12%] text-[8.5px] sm:text-[6.4px] font-bold text-slate-700 truncate pr-1">{row.owner}</div>
                  <div className="flex-1 flex items-center justify-end gap-1.5 shrink-0 ml-auto">
                    <button className="px-2 py-1 text-[7.7px] sm:text-[5.5px] font-bold text-slate-600 bg-white border border-slate-200 rounded hover:bg-slate-50 shadow-sm shrink-0 whitespace-nowrap">View</button>
                    <button className={`px-2 py-1 text-[7.7px] sm:text-[5.5px] font-bold text-white ${row.btnCol} rounded hover:opacity-90 shadow-sm shrink-0 whitespace-nowrap`}>{row.btn}</button>
                    <button className="text-slate-400 hover:text-slate-600 shrink-0"><MoreVertical className="w-3.5 h-3.5" /></button>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 sm:px-4 py-2 flex items-center justify-between border-t border-slate-100 bg-white shrink-0 mt-auto">
              <span className="text-[9.4px] sm:text-[6.8px] text-slate-500 font-bold">Showing 1 to 5 of 21</span>
              <button className="px-3 py-1.5 text-[9.4px] sm:text-[6.8px] font-bold text-indigo-600 bg-white border border-indigo-200 rounded hover:bg-indigo-50 shadow-sm">Load more</button>
            </div>
          </div>
        </div>

        {/* View 2: Mitigation Control Tracking */}
        <div className="w-1/2 h-full flex flex-col bg-slate-50 overflow-hidden shrink-0">
          {/* Header */}
          <div className="px-6 sm:px-4 py-5 sm:py-4 flex items-center justify-between border-b border-slate-200 bg-white z-10 shrink-0">
            <div className="flex items-center gap-4 sm:gap-3">
              <div className="w-10 sm:w-8 h-10 sm:h-8 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
                <ShieldCheck className="w-5 sm:w-4 h-5 sm:h-4" />
              </div>
              <div>
                <div className="text-[15.3px] sm:text-[11.9px] font-bold text-slate-900">Mitigation Control Tracking</div>
                <div className="text-[11px] sm:text-[8.5px] text-slate-500 font-medium mt-0.5">Document and track compensating controls against accepted risks, with owners, evidence, and review dates.</div>
              </div>
            </div>
            <button className="px-3 py-1.5 bg-indigo-600 text-white text-[9.4px] sm:text-[6.8px] font-bold rounded-lg flex items-center gap-1.5 shadow-sm hover:bg-indigo-700">
              <Plus className="w-3.5 h-3.5" /> Add Control
            </button>
          </div>

          {/* Top Stats */}
          <div className="px-6 sm:px-4 py-4 sm:py-3 flex gap-4 sm:gap-3 shrink-0 bg-white border-b border-slate-100">
            <div className="flex-1 border border-slate-200 rounded-lg p-3 sm:p-2 flex items-center gap-3 sm:gap-2 shadow-sm">
              <div className="w-8 sm:w-6 h-8 sm:h-6 rounded bg-purple-50 flex items-center justify-center text-purple-500"><FileText className="w-4 sm:w-3 h-4 sm:h-3" /></div>
              <div>
                <div className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-500">Total Controls</div>
                <div className="text-[13.6px] sm:text-[10.2px] font-black text-slate-900 leading-none mt-0.5">17</div>
              </div>
            </div>
            <div className="flex-1 border border-slate-200 rounded-lg p-3 sm:p-2 flex items-center gap-3 sm:gap-2 shadow-sm">
              <div className="w-8 sm:w-6 h-8 sm:h-6 rounded bg-emerald-50 flex items-center justify-center text-emerald-500"><ShieldCheck className="w-4 sm:w-3 h-4 sm:h-3" /></div>
              <div>
                <div className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-500">Active</div>
                <div className="text-[13.6px] sm:text-[10.2px] font-black text-slate-900 leading-none mt-0.5">11</div>
              </div>
            </div>
            <div className="flex-1 border border-slate-200 rounded-lg p-3 sm:p-2 flex items-center gap-3 sm:gap-2 shadow-sm">
              <div className="w-8 sm:w-6 h-8 sm:h-6 rounded bg-orange-50 flex items-center justify-center text-orange-500"><Clock className="w-4 sm:w-3 h-4 sm:h-3" /></div>
              <div>
                <div className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-500">Under Review</div>
                <div className="text-[13.6px] sm:text-[10.2px] font-black text-slate-900 leading-none mt-0.5">3</div>
              </div>
            </div>
            <div className="flex-1 border border-slate-200 rounded-lg p-3 sm:p-2 flex items-center gap-3 sm:gap-2 shadow-sm">
              <div className="w-8 sm:w-6 h-8 sm:h-6 rounded bg-red-50 flex items-center justify-center text-red-500"><XCircle className="w-4 sm:w-3 h-4 sm:h-3" /></div>
              <div>
                <div className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-500">Expired</div>
                <div className="text-[13.6px] sm:text-[10.2px] font-black text-slate-900 leading-none mt-0.5">2</div>
              </div>
            </div>
            <div className="flex-1 border border-slate-200 rounded-lg p-3 sm:p-2 flex items-center gap-3 sm:gap-2 shadow-sm">
              <div className="w-8 sm:w-6 h-8 sm:h-6 rounded bg-blue-50 flex items-center justify-center text-blue-500"><Calendar className="w-4 sm:w-3 h-4 sm:h-3" /></div>
              <div>
                <div className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-500">Next Review (30 Days)</div>
                <div className="text-[13.6px] sm:text-[10.2px] font-black text-slate-900 leading-none mt-0.5">4</div>
              </div>
            </div>
          </div>

          <div className="px-6 sm:px-4 py-4 sm:py-3 flex-1 flex flex-col overflow-hidden">
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col flex-1 overflow-hidden">
              <div className="px-4 py-3 flex gap-3 border-b border-slate-100 shrink-0">
                <div className="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-1.5 text-[9.4px] sm:text-[6.8px] text-slate-400 w-64 bg-slate-50 shadow-inner">
                  <Search className="w-3.5 h-3.5" /> Search controls...
                </div>
                <button className="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-1.5 text-[9.4px] sm:text-[6.8px] font-bold text-slate-600 hover:bg-slate-50">
                  <Filter className="w-3.5 h-3.5" /> Filters
                </button>
              </div>

              <div className="flex items-center px-4 py-2 bg-slate-50 border-b border-slate-100 text-[8.5px] sm:text-[6.4px] font-bold text-slate-500 shrink-0">
                <div className="w-[18%]">Control Name</div>
                <div className="w-[18%]">Risk / Conflict</div>
                <div className="w-[15%]">Control Owner</div>
                <div className="w-[15%]">Status</div>
                <div className="w-[12%]">Review Date</div>
                <div className="w-[10%] text-center">Evidence</div>
                <div className="w-[7%] text-center">Updated</div>
                <div className="flex-1 text-center">Actions</div>
              </div>
              <div className="flex flex-col flex-1 overflow-hidden">
                {[
                  { name: "Dual Control for Payments", risk: "Invoice Entry vs Payment Run", riskId: "CON-0412", owner: "Priya Nair", dept: "Finance", init: "PN", initBg: "bg-purple-100 text-purple-600", status: "Active", statusCol: "text-emerald-600 bg-emerald-50", date: "Jun 30, 2024", files: "2 files", lastUpdated: "May 15", lastUpdatedBy: "P. Nair" },
                  { name: "Vendor Change Approval", risk: "Vendor Master vs Payment Run", riskId: "CON-0398", owner: "Rohit Kapoor", dept: "Procurement", init: "RK", initBg: "bg-purple-100 text-purple-600", status: "Active", statusCol: "text-emerald-600 bg-emerald-50", date: "May 20, 2024", files: "1 file", lastUpdated: "May 10", lastUpdatedBy: "R. Kapoor" },
                  { name: "Journal Entry Review", risk: "Journal Entry vs Payment Release", riskId: "CON-0155", owner: "Anita Singh", dept: "Finance", init: "AS", initBg: "bg-indigo-100 text-indigo-600", status: "Under Review", statusCol: "text-orange-600 bg-orange-50", date: "May 28, 2024", files: "3 files", lastUpdated: "May 08", lastUpdatedBy: "A. Singh" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center px-4 py-3 sm:py-2 border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <div className="w-[18%] text-[8.5px] sm:text-[6.4px] font-bold text-slate-800 truncate pr-1">{row.name}</div>
                    <div className="w-[18%] pr-1 truncate">
                      <div className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-800 truncate">{row.risk}</div>
                      {row.riskId && <div className="text-[7.7px] sm:text-[5.5px] font-medium text-slate-400 truncate">{row.riskId}</div>}
                    </div>
                    <div className="w-[15%] flex items-center gap-1.5 truncate pr-1">
                      {/* <div className={`w-6 sm:w-4.5 h-6 sm:h-4.5 rounded-full flex items-center justify-center text-[7.7px] sm:text-[5.1px] font-bold shrink-0 ${row.initBg}`}>{row.init}</div> */}
                      <div className="truncate">
                        <div className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-800 truncate">{row.owner}</div>
                        <div className="text-[7.7px] sm:text-[5.5px] font-medium text-slate-500 truncate">{row.dept}</div>
                      </div>
                    </div>
                    <div className="w-[15%] flex items-center">
                      <span className={`text-[7.7px] sm:text-[5.5px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap truncate ${row.statusCol}`}>{row.status}</span>
                    </div>
                    <div className="w-[12%] flex flex-col gap-0.5 justify-center truncate pr-1">
                      <div className="flex items-center gap-1 text-[7.7px] sm:text-[5.5px] font-bold text-slate-600 truncate">
                        <Calendar className="w-2.5 h-2.5 text-slate-400 shrink-0" /> <span className="truncate">{row.date.split(" (")[0]}</span>
                      </div>
                      {row.date.includes("(") && (
                        <div className="text-[6.8px] sm:text-[4.7px] font-bold text-red-500 ml-3.5 pl-0.5 truncate">(Overdue)</div>
                      )}
                    </div>
                    <div className="w-[10%] text-[8.5px] sm:text-[6.4px] font-bold text-indigo-600 text-center truncate pr-1">
                      {row.files}
                    </div>
                    <div className="w-[7%] flex flex-col text-[7.7px] sm:text-[5.5px] font-medium text-slate-500 text-center truncate pr-1">
                      <div className="truncate font-bold text-slate-700">{row.lastUpdated}</div>
                      <div className="truncate">{row.lastUpdatedBy}</div>
                    </div>
                    <div className="flex-1 text-center text-slate-400 flex justify-center shrink-0">
                      <MoreHorizontal className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <button onClick={() => setActiveIndex(0)} className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${activeIndex === 0 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 1" />
        <button onClick={() => setActiveIndex(1)} className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${activeIndex === 1 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 2" />
      </div>
    </div>
  );
};

export const RiskIntelMiniMockup = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }
  }, [isHovered]);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm relative">
      <div
        className="flex h-full w-[200%] transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
      >
        {/* View 1: SoD Violations (Visual Risk Radar) */}
        <div className="w-1/2 h-full flex flex-col bg-slate-50 overflow-hidden shrink-0">
          {/* Header */}
          <div className="px-4 py-3 sm:py-2 flex items-center gap-3 bg-slate-50 border-b border-slate-200 shrink-0 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex items-center gap-1.5 text-[9.4px] sm:text-[6.8px] font-semibold text-slate-500 shrink-0 whitespace-nowrap">
              <Shield className="w-3.5 h-3.5" /> Risk Intelligence 
            </div>
            <div className="flex items-center gap-1.5 shrink-0 whitespace-nowrap">
              <div className="w-5 h-5 rounded bg-red-600 flex items-center justify-center text-white"><Shield className="w-3 h-3" /></div>
              <span className="text-[11.9px] sm:text-[9.4px] font-bold text-slate-900">SoD Violations</span>
            </div>
            {/* Tabs */}
            <div className="ml-4 flex items-center gap-4 text-[8.5px] sm:text-[6.4px] font-bold text-slate-500 shrink-0 whitespace-nowrap">
              <span className="text-red-600 border-b-2 border-red-600 py-2 sm:py-1">Open 64</span>
              {/* <span className="hover:text-slate-700 cursor-pointer">All 64</span>
              <span className="hover:text-slate-700 cursor-pointer">Remediating</span>
              <span className="hover:text-slate-700 cursor-pointer">Resolved</span>
              <span className="hover:text-slate-700 cursor-pointer">Accepted</span> */}
            </div>
            {/* <div className="ml-auto flex items-center gap-3 shrink-0 whitespace-nowrap">
              <span className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-700">64 of 64</span>
              <button className="flex items-center gap-1 px-2 py-1 bg-white border border-slate-200 rounded text-[8.5px] sm:text-[6.4px] font-bold text-slate-600 shadow-sm"><Clock className="w-3 h-3" /> Scans <ChevronDown className="w-3 h-3" /></button>
              <button className="p-1 bg-white border border-slate-200 rounded text-slate-600 shadow-sm"><RefreshCw className="w-3 h-3" /></button>
            </div> */}
          </div>
          {/* Toolbar */}
          <div className="px-4 py-2 sm:py-1.5 flex items-center gap-2 shrink-0 border-b border-slate-100 bg-slate-50">
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded px-2 py-1 w-64 shadow-sm text-[8.5px] sm:text-[6.4px]">
              <Search className="w-3 h-3 text-slate-400" /> <span className="text-slate-400">Search by rule, user, system...</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded px-2 py-1 shadow-sm text-[8.5px] sm:text-[6.4px] font-bold text-slate-600">
              System: <span className="text-slate-900">All Systems</span> <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded px-2 py-1 shadow-sm text-[8.5px] sm:text-[6.4px] font-bold text-slate-600">
              <Filter className="w-3 h-3" /> Filters <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>
          </div>
          {/* Table */}
          <div className="flex-1 flex flex-col bg-white overflow-hidden">
            <div className="flex items-center gap-1 px-4 py-2 bg-slate-50 border-b border-slate-100 text-[7.7px] sm:text-[6px] font-bold text-slate-500 shrink-0">
              <div className="w-[18%]">Rule</div>
              <div className="w-[16%]">Subject</div>
              <div className="w-[13%]">System</div>
              <div className="w-[9%]">Severity</div>
              <div className="w-[10%]">Mechanism</div>
              <div className="w-[9%]">Status</div>
              <div className="w-[8%]">Detected</div>
              <div className="flex-1 text-right">Actions</div>
            </div>
            <div className="flex flex-col overflow-hidden">
              {[
                { rule: "User assigned to incompatible roles", id: "SOD-RULE-12", subj: "Aaron.D", sId: "U10021", sys: "SAP S/4HANA", sev: "Critical", sevCol: "text-red-600", sevDot: "bg-red-600", mech: "TCode Auth", stat: "Open", statDot: "bg-red-600", statCol: "text-red-600", det: "8m ago" },
                { rule: "Posting & Vendor Master access", id: "SOD-RULE-07", subj: "Priya.S", sId: "U10045", sys: "SAP ECC", sev: "Critical", sevCol: "text-red-600", sevDot: "bg-red-600", mech: "TCode Auth", stat: "Open", statDot: "bg-red-600", statCol: "text-red-600", det: "15m ago" },
                { rule: "Create Vendor & Release Payment", id: "SOD-RULE-02", subj: "Rohit.K", sId: "U10073", sys: "SAP S/4HANA", sev: "Critical", sevCol: "text-red-600", sevDot: "bg-red-600", mech: "TCode Auth", stat: "Open", statDot: "bg-red-600", statCol: "text-red-600", det: "22m ago" },
                { rule: "Purchasing & Goods Receipt", id: "SOD-RULE-05", subj: "Neha.M", sId: "U10102", sys: "SAP ECC", sev: "High", sevCol: "text-orange-500", sevDot: "bg-orange-500", mech: "TCode Auth", stat: "Open", statDot: "bg-red-600", statCol: "text-red-600", det: "28m ago" },
                //  { rule: "Sales Order & Billing", id: "SOD-RULE-03", subj: "Vishal.R", sId: "U10088", sys: "SAP S/4HANA", sev: "High", sevCol: "text-orange-500", sevDot: "bg-orange-500", mech: "TCode Auth", stat: "Open", statDot: "bg-red-600", statCol: "text-red-600", det: "31m ago" },
                //  { rule: "Journal Entry & Vendor Payment", id: "SOD-RULE-01", subj: "Kavya.P", sId: "U10057", sys: "SAP ECC", sev: "Critical", sevCol: "text-red-600", sevDot: "bg-red-600", mech: "TCode Auth", stat: "Open", statDot: "bg-red-600", statCol: "text-red-600", det: "42m ago" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-1 px-4 py-2 sm:py-1.5 border-b border-slate-50 hover:bg-slate-50 transition-colors relative">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-red-500"></div>
                  <div className="w-[18%] truncate pr-1">
                    <div className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-800 truncate">{row.rule}</div>
                    {/* <div className="text-[7.7px] sm:text-[5.5px] font-bold text-slate-400">{row.id}</div> */}
                  </div>
                  <div className="w-[16%] flex flex-col pr-1 truncate">
                    <div className="flex items-center gap-1 text-[8.5px] sm:text-[6.4px] font-bold text-slate-800 truncate">
                      <User className="w-2.5 h-2.5 text-slate-500 shrink-0" /> <span className="truncate">{row.subj}</span>
                    </div>
                    <div className="text-[7.7px] sm:text-[5.5px] text-slate-400 ml-3.5 truncate">ID: {row.sId}</div>
                  </div>
                  <div className="w-[13%] flex items-center gap-1 text-[8.5px] sm:text-[6.4px] font-semibold text-slate-600 truncate pr-1">
                    <Layers className="w-3 h-3 text-slate-400 shrink-0" /> <span className="truncate">{row.sys}</span>
                  </div>
                  <div className={`w-[9%] flex items-center gap-1 text-[8.1px] sm:text-[6px] font-bold ${row.sevCol} truncate pr-1`}>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${row.sevDot}`}></span> <span className="truncate">{row.sev}</span>
                  </div>
                  {/* <div className="w-[10%] text-[8.5px] sm:text-[6.4px] font-bold text-blue-600 truncate pr-1">
                       {row.mech}
                    </div> */}
                  <div className={`w-[9%] flex items-center gap-1 text-[8.1px] sm:text-[6px] font-bold ${row.statCol} truncate pr-1`}>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${row.statDot}`}></span> <span className="truncate">{row.stat}</span>
                  </div>
                  <div className="w-[8%] text-[8.5px] sm:text-[6.4px] font-bold text-slate-600 truncate pr-1">
                    {row.det}
                  </div>
                  <div className="flex-1 flex items-center justify-end gap-1 shrink-0 ml-auto">
                    <button className="flex items-center gap-1 px-1.5 py-1 bg-orange-50 border border-orange-200 text-orange-600 text-[7.7px] sm:text-[5.5px] font-bold rounded shadow-sm hover:bg-orange-100 whitespace-nowrap">
                      <Wrench className="w-2.5 h-2.5 shrink-0" /> Remediate
                    </button>
                    <button className="flex items-center gap-1 px-1.5 py-1 bg-purple-50 border border-purple-200 text-purple-600 text-[7.7px] sm:text-[5.5px] font-bold rounded shadow-sm hover:bg-purple-100 whitespace-nowrap">
                      <ShieldCheck className="w-2.5 h-2.5 shrink-0" /> Mitigate
                    </button>
                    <button className="text-slate-400 hover:text-slate-600 shrink-0"><MoreVertical className="w-3 h-3" /></button>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="px-4 py-2 sm:py-1.5 flex items-center justify-between border-t border-slate-100 bg-white mt-auto shrink-0">
              <div className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-500">Showing 1 to 6 of 64 findings</div>
              <div className="flex items-center gap-1">
                <button className="w-6 sm:w-5 h-6 sm:h-5 flex items-center justify-center bg-white border border-slate-200 rounded text-slate-400 hover:bg-slate-50"><ChevronLeft className="w-3 h-3" /></button>
                <button className="w-6 sm:w-5 h-6 sm:h-5 flex items-center justify-center bg-purple-50 border border-purple-200 text-purple-600 rounded font-bold text-[7.7px] sm:text-[5.5px]">1</button>
                <button className="w-6 sm:w-5 h-6 sm:h-5 flex items-center justify-center bg-white border border-slate-200 rounded text-slate-600 font-bold text-[7.7px] sm:text-[5.5px] hover:bg-slate-50">2</button>
                <button className="w-6 sm:w-5 h-6 sm:h-5 flex items-center justify-center bg-white border border-slate-200 rounded text-slate-600 text-[7.7px] sm:text-[5.5px]">...</button>
                <button className="w-6 sm:w-5 h-6 sm:h-5 flex items-center justify-center bg-white border border-slate-200 rounded text-slate-400 hover:bg-slate-50"><ChevronRight className="w-3 h-3" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* View 2: Continuous Risk Intelligence */}
        <div className="w-1/2 h-full flex flex-col bg-slate-50 overflow-hidden shrink-0">
          {/* Header */}
          <div className="px-4 py-3 sm:py-2 flex items-center justify-between border-b border-slate-200 bg-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 sm:w-6 h-8 sm:h-6 rounded bg-red-50 flex items-center justify-center text-red-500 border border-red-100">
                <TrendingUp className="w-4 sm:w-3 h-4 sm:h-3" />
              </div>
              <div>
                <div className="text-[13.6px] sm:text-[11px] font-bold text-slate-900">Continuous Risk Intelligence</div>
                {/* <div className="text-[9.4px] sm:text-[6.8px] text-slate-500 font-medium">Continuously scored segregation-of-duties risk across every user and role, ranked by business impact.</div> */}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1.5 bg-white border border-slate-200 text-[8.5px] sm:text-[6.4px] font-bold text-slate-700 rounded shadow-sm flex items-center gap-1.5">
                All Business Processes <ChevronDown className="w-3 h-3" />
              </button>
              <button className="p-1.5 bg-white border border-slate-200 rounded shadow-sm text-slate-600"><RefreshCw className="w-3.5 h-3.5" /></button>
            </div>
          </div>

          {/* Top KPIs */}
          <div className="px-4 py-3 sm:py-2 flex gap-3 sm:gap-2 shrink-0 bg-slate-50">
            <div className="flex-1 bg-white border border-slate-200 rounded-lg p-2 sm:p-1.5 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-red-50 text-red-500 flex items-center justify-center"><Shield className="w-3 h-3" /></div>
                <span className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-600">Critical Risk</span>
              </div>
              <div className="text-[15.3px] sm:text-[11.9px] font-black text-slate-900 mt-1">16</div>
              <div className="text-[7.7px] sm:text-[5.5px] font-bold text-slate-400">Users / Roles</div>
            </div>
            <div className="flex-1 bg-white border border-slate-200 rounded-lg p-2 sm:p-1.5 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-orange-50 text-orange-500 flex items-center justify-center"><Shield className="w-3 h-3" /></div>
                <span className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-600">High Risk</span>
              </div>
              <div className="text-[15.3px] sm:text-[11.9px] font-black text-slate-900 mt-1">38</div>
              <div className="text-[7.7px] sm:text-[5.5px] font-bold text-slate-400">Users / Roles</div>
            </div>
            <div className="flex-1 bg-white border border-slate-200 rounded-lg p-2 sm:p-1.5 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-amber-50 text-amber-500 flex items-center justify-center"><ShieldCheck className="w-3 h-3" /></div>
                <span className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-600">Medium Risk</span>
              </div>
              <div className="text-[15.3px] sm:text-[11.9px] font-black text-slate-900 mt-1">76</div>
              <div className="text-[7.7px] sm:text-[5.5px] font-bold text-slate-400">Users / Roles</div>
            </div>
            <div className="flex-1 bg-white border border-slate-200 rounded-lg p-2 sm:p-1.5 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-500 flex items-center justify-center"><ShieldCheck className="w-3 h-3" /></div>
                <span className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-600">Low Risk</span>
              </div>
              <div className="text-[15.3px] sm:text-[11.9px] font-black text-slate-900 mt-1">142</div>
              <div className="text-[7.7px] sm:text-[5.5px] font-bold text-slate-400">Users / Roles</div>
            </div>
            <div className="flex-1 bg-white border border-slate-200 rounded-lg p-2 sm:p-1.5 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-indigo-50 text-indigo-500 flex items-center justify-center"><TrendingUp className="w-3 h-3" /></div>
                <span className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-600">Average Risk Score</span>
              </div>
              <div className="text-[15.3px] sm:text-[11.9px] font-black text-slate-900 mt-1">64</div>
              <div className="text-[7.7px] sm:text-[5.5px] font-bold text-emerald-600 flex items-center gap-0.5"><TrendingUp className="w-2.5 h-2.5" /> 6 vs yesterday</div>
            </div>
          </div>
          {/* Table Container */}
          <div className="flex-1 flex flex-col bg-white border border-slate-200 rounded-t-lg mx-4 mt-1 overflow-hidden shadow-sm">
            {/* Toolbar */}
            <div className="px-4 py-2 sm:py-1.5 border-b border-slate-100 flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded px-2 py-1 w-48 text-[8.5px] sm:text-[6.4px]">
                <Search className="w-3 h-3 text-slate-400" /> <span className="text-slate-400">Search users or roles...</span>
              </div>
              <button className="px-2 py-1 border border-slate-200 rounded text-[8.5px] sm:text-[6.4px] font-bold text-slate-600 bg-white flex items-center gap-1 shadow-sm">
                Risk Level <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
              <button className="px-2 py-1 border border-slate-200 rounded text-[8.5px] sm:text-[6.4px] font-bold text-slate-600 bg-white flex items-center gap-1 shadow-sm">
                Business Impact <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
              <button className="px-2 py-1 border border-slate-200 rounded text-[8.5px] sm:text-[6.4px] font-bold text-slate-600 bg-white flex items-center gap-1 shadow-sm ml-auto">
                <Filter className="w-3 h-3" /> Filters
              </button>
            </div>
            {/* Table Headers */}
            <div className="grid grid-cols-12 gap-1 px-4 py-2 bg-slate-50 border-b border-slate-100 text-[7.7px] sm:text-[6px] font-bold text-slate-500">
              <div className="col-span-1 truncate">Type</div>
              <div className="col-span-2 truncate">Name</div>
              <div className="col-span-1 truncate">Process</div>
              <div className="col-span-2 flex items-center gap-1 truncate">Risk Score</div>
              <div className="col-span-1 text-center truncate">Level</div>
              <div className="col-span-1 text-center truncate">Conflicts</div>
              <div className="col-span-1 text-center truncate">Impact</div>
              <div className="col-span-1 text-center truncate">Trend</div>
              <div className="col-span-1 text-center truncate">Updated</div>
              <div className="col-span-1 text-center truncate">Actions</div>
            </div>
            <div className="flex flex-col flex-1 overflow-hidden">
              {[
                { type: "User", typeIcon: <User className="w-3 h-3" />, tCol: "text-purple-600 bg-purple-50 border-purple-100", name: "Rahul Mehta", sub: "rahul.mehta", bp: "Procure to Pay", score: 91, bar: "w-[91%] bg-red-500", level: "Critical", lCol: "text-red-600 bg-red-50", conf: "6", bi: "Very High", d1: "May 12, 2024", d2: "10:15 AM", trColor: "text-red-500" },
                { type: "Role", typeIcon: <Shield className="w-3 h-3" />, tCol: "text-blue-600 bg-blue-50 border-blue-100", name: "Payment Approver", sub: "R_PAY_APPROVER", bp: "Finance Operations", score: 86, bar: "w-[86%] bg-red-500", level: "High", lCol: "text-red-600 bg-red-50", conf: "5", bi: "Very High", d1: "May 12, 2024", d2: "09:40 AM", trColor: "text-red-500" },
                // { type: "User", typeIcon: <User className="w-3 h-3" />, tCol: "text-purple-600 bg-purple-50 border-purple-100", name: "Neha Singh", sub: "neha.singh", bp: "Order to Cash", score: 74, bar: "w-[74%] bg-orange-500", level: "High", lCol: "text-red-600 bg-red-50", conf: "4", bi: "High", d1: "May 12, 2024", d2: "08:55 AM", trColor: "text-orange-500" },
                // { type: "Role", typeIcon: <Shield className="w-3 h-3" />, tCol: "text-blue-600 bg-blue-50 border-blue-100", name: "Vendor Master Maint.", sub: "R_VENDOR_MAINT", bp: "Procure to Pay", score: 63, bar: "w-[63%] bg-amber-500", level: "Medium", lCol: "text-amber-600 bg-amber-50", conf: "3", bi: "Medium", d1: "May 12, 2024", d2: "07:30 AM", trColor: "text-amber-500" },
                // { type: "User", typeIcon: <User className="w-3 h-3" />, tCol: "text-purple-600 bg-purple-50 border-purple-100", name: "Amit Kapoor", sub: "amit.kapoor", bp: "Record to Report", score: 41, bar: "w-[41%] bg-emerald-500", level: "Low", lCol: "text-emerald-600 bg-emerald-50", conf: "1", bi: "Low", d1: "May 12, 2024", d2: "06:20 AM", trColor: "text-emerald-500" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-12 gap-1 px-4 py-2 sm:py-1.5 border-b border-slate-50 items-center hover:bg-slate-50 transition-colors">
                  <div className="col-span-1 flex items-center gap-1.5 text-[8.5px] sm:text-[6.4px] font-bold text-slate-700 truncate pr-1">
                    {/* <div className={`w-5 sm:w-4.5 h-5 sm:h-4.5 rounded flex items-center justify-center border ${row.tCol} shrink-0`}>{row.typeIcon}</div> */}
                    <span className="truncate">{row.type}</span>
                  </div>
                  <div className="col-span-2 truncate pr-1">
                    <div className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-800 truncate">{row.name}</div>
                    <div className="text-[7.7px] sm:text-[5.5px] font-medium text-slate-400 truncate">{row.sub}</div>
                  </div>
                  <div className="col-span-1 text-[8.5px] sm:text-[6.4px] font-semibold text-slate-700 truncate pr-1">
                    {row.bp}
                  </div>
                  <div className="col-span-2 flex items-center gap-2 pr-2">
                    <span className="text-[8.5px] sm:text-[6.4px] font-black text-slate-800 w-4 shrink-0">{row.score}</span>
                    <div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${row.bar}`}></div>
                    </div>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <span className={`text-[7.7px] sm:text-[5.1px] font-bold px-1.5 py-0.5 rounded truncate ${row.lCol}`}>{row.level}</span>
                  </div>
                  <div className="col-span-1 text-[8.5px] sm:text-[6.4px] font-bold text-slate-700 text-center truncate">
                    {row.conf}
                  </div>
                  <div className="col-span-1 text-[8.5px] sm:text-[6.4px] font-semibold text-slate-600 text-center truncate pr-1">
                    {row.bi}
                  </div>
                  <div className="col-span-1 flex items-center justify-center shrink-0">
                    <TrendingUp className={`w-3 h-3 ${row.trColor}`} />
                  </div>
                  <div className="col-span-1 flex flex-col text-[7.7px] sm:text-[5.1px] font-medium text-slate-500 text-center truncate">
                    <span className="truncate">{row.d1}</span>
                    <span className="truncate">{row.d2}</span>
                  </div>
                  <div className="col-span-1 flex justify-center text-slate-400">
                    <MoreHorizontal className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="px-4 py-2 sm:py-1.5 flex items-center justify-between border-t border-slate-100 bg-white mt-auto shrink-0">
              <div className="text-[8.5px] sm:text-[6.4px] font-bold text-slate-500">Showing 1 to 5 of 50</div>
              <div className="flex items-center gap-1">
                <button className="w-6 sm:w-5 h-6 sm:h-5 flex items-center justify-center bg-white border border-slate-200 rounded text-slate-400 hover:bg-slate-50"><ChevronLeft className="w-3 h-3" /></button>
                <button className="w-6 sm:w-5 h-6 sm:h-5 flex items-center justify-center bg-purple-50 border border-purple-200 text-purple-600 rounded font-bold text-[7.7px] sm:text-[5.5px]">1</button>
                <button className="w-6 sm:w-5 h-6 sm:h-5 flex items-center justify-center bg-white border border-slate-200 rounded text-slate-600 font-bold text-[7.7px] sm:text-[5.5px] hover:bg-slate-50">2</button>
                <button className="w-6 sm:w-5 h-6 sm:h-5 flex items-center justify-center bg-white border border-slate-200 rounded text-slate-600 text-[7.7px] sm:text-[5.5px]">...</button>
                <button className="w-6 sm:w-5 h-6 sm:h-5 flex items-center justify-center bg-white border border-slate-200 rounded text-slate-600 font-bold text-[7.7px] sm:text-[5.5px] hover:bg-slate-50">10</button>
                <button className="w-6 sm:w-5 h-6 sm:h-5 flex items-center justify-center bg-white border border-slate-200 rounded text-slate-400 hover:bg-slate-50"><ChevronRight className="w-3 h-3" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <button onClick={() => setActiveIndex(0)} className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${activeIndex === 0 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 1" />
        <button onClick={() => setActiveIndex(1)} className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${activeIndex === 1 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 2" />
      </div>
    </div>
  );
};

export const AccessTrackingMiniMockup = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }
  }, [isHovered]);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full aspect-[16/10]  aspect-[16/10] bg-[#f8f9fa] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm relative">
      <div
        className="flex h-full w-[200%] transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
      >
        {/* View 1: New Request */}
        <div className="w-1/2 h-full flex flex-col bg-[#f8f9fa] overflow-hidden shrink-0 relative">
          <div className="bg-white border-b border-slate-100 flex items-center justify-between px-3 py-2 shrink-0">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-red-600" />
              <div className="flex flex-col leading-none">
                <span className="text-[10.6px] sm:text-[8.5px] font-black text-red-600 tracking-tight">MATRIXVAULT</span>
              </div>
            </div>
            {/* <div className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 rounded-full bg-slate-100 flex items-center justify-center text-[6.4px] sm:text-[5.1px] font-bold">G</div>
              <span className="text-[8px] sm:text-[6.4px] font-bold">Gowtham Admin</span>
            </div> */}
          </div>

          <div className="flex-1 overflow-hidden p-2.5">
            <div className="max-w-4xl mx-auto flex flex-col gap-1.5">
              <div className="mb-0">
                <h1 className="text-[13.9px] sm:text-[11px] font-extrabold tracking-tight">New Request</h1>
                <p className="text-[8.5px] sm:text-[6.8px] font-medium mt-0">Submit access request for approval</p>
              </div>

              {/* Access System Panel */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-2.5 flex flex-col gap-1.5">
                <h2 className="text-[10.1px] sm:text-[8.1px] font-bold">Access System</h2>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[8px] sm:text-[6.4px] font-bold">Target System <span className="text-red-500">*</span></label>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg px-1.5 py-1 flex justify-between items-center text-[8px] sm:text-[6.4px]">
                      Select System... <ChevronDown className="w-2.5 h-2.5 text-slate-300" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[8px] sm:text-[6.4px] font-bold">Module <span className="text-red-500">*</span></label>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg px-1.5 py-1 flex justify-between items-center text-[8px] sm:text-[6.4px]">
                      Select Module... <ChevronDown className="w-2.5 h-2.5 text-slate-300" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-0.5">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-1.5 py-1 flex items-center gap-1 text-[8px] sm:text-[6.4px] font-medium">
                    <Clock className="w-2.5 h-2.5 text-indigo-400" /> 07/16/2026 11:09:00 AM
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-1.5 py-1 flex items-center gap-1 text-[8px] sm:text-[6.4px] font-medium">
                    <Clock className="w-2.5 h-2.5 text-indigo-400" /> 07/16/2026 11:24:00 AM
                  </div>
                </div>
              </div>

              {/* Identity & Justification Panel */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-2.5 flex flex-col gap-1.5">
                <h2 className="text-[10.1px] sm:text-[8.1px] font-bold">Identity & Justification</h2>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[8px] sm:text-[6.4px] font-bold">ID <span className="text-red-500">*</span></label>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg px-1.5 py-1 flex justify-between items-center text-[8px] sm:text-[6.4px]">
                      Select Firefighter ID... <ChevronDown className="w-2.5 h-2.5 text-slate-300" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[8px] sm:text-[6.4px] font-bold">Incident Reference</label>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg px-1.5 py-1 flex justify-between items-center text-[8px] sm:text-[6.4px]">
                      e.g. INC-12345
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-0.5">
                  <label className="text-[8px] sm:text-[6.4px] font-bold">Business Justification</label>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-1.5 py-1 text-[8px] sm:text-[6.4px] h-5">
                  Explain</div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="bg-red-500 hover:bg-red-600 font-bold text-[7.5px] sm:text-[6.5px] rounded-lg sm:rounded-md px-6 py-1 sm:py-0.5 w-fit mx-auto flex items-center justify-center gap-1.5 shadow-sm shadow-red-500/30 cursor-pointer mt-1">
                <ArrowRight className="w-2.5 h-2.5 sm:w-2 sm:h-2" /> Submit Request
              </div>
            </div>
          </div>
        </div>

        {/* View 2: My Requests */}
        <div className="w-1/2 h-full flex flex-col bg-[#f8f9fa] overflow-hidden shrink-0 relative">
          <div className="bg-white border-b border-slate-100 flex flex-col px-3 py-2 shrink-0">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-red-600" />
              <div className="flex flex-col leading-none">
                <span className="text-[10.6px] sm:text-[8.5px] font-black text-red-600 tracking-tight">MATRIXVAULT</span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-hidden p-3">
            <div className="max-w-4xl mx-auto flex flex-col gap-2.5">

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-red-50 text-red-500 rounded-xl sm:rounded-md flex items-center justify-center shrink-0">
                  <Activity className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[12.8px] sm:text-[10.2px] font-extrabold tracking-tight">My Requests</h1>
                  <p className="text-[8px] sm:text-[6.4px] font-medium mt-0.5">Track and manage your access request workflow</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="px-1.5 py-0.5 bg-white border border-slate-200 rounded-lg sm:rounded flex items-center gap-1 text-[8px] sm:text-[6.4px] font-bold shadow-sm">All <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[6.4px] sm:text-[5.1px]">8</span></div>
                <div className="px-1.5 py-0.5 bg-white border border-slate-200 rounded-lg sm:rounded flex items-center gap-1 text-[8px] sm:text-[6.4px] font-bold shadow-sm">Pending <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[6.4px] sm:text-[5.1px]">2</span></div>
                <div className="px-1.5 py-0.5 bg-emerald-50 border border-emerald-200 rounded-lg sm:rounded flex items-center gap-1 text-[8px] sm:text-[6.4px] font-bold shadow-sm">Approved <span className="bg-emerald-100 px-1.5 py-0.5 rounded text-[6.4px] sm:text-[5.1px]">4</span></div>
                <div className="px-1.5 py-0.5 bg-white border border-slate-200 rounded-lg sm:rounded flex items-center gap-1 text-[8px] sm:text-[6.4px] font-bold shadow-sm">Rejected <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[6.4px] sm:text-[5.1px]">1</span></div>
              </div>

              <p className="text-[8px] sm:text-[6.4px] font-bold">Showing 1 to 3 of 4 requests</p>

              {/* Request 1 */}
              <div className="bg-white border-l-4 border-l-emerald-500 border-y border-r border-slate-200 rounded-xl sm:rounded-md p-2.5 flex gap-3 shadow-sm">
                <div className="flex flex-col gap-1 shrink-0 w-20 border-r border-slate-100 pr-2">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-[8.5px] sm:text-[6.8px]">AS</div>
                  <div className="flex flex-col mt-0">
                    <span className="text-[8.5px] sm:text-[6.8px] font-bold leading-tight">Arjun Singh</span>
                  </div>
                  <div className="flex items-center gap-1 text-[6.9px] sm:text-[5.5px] font-bold mt-0">
                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div> Active
                  </div>
                  <div className="mt-auto pt-2">
                    <div className="px-2 py-0.5 bg-emerald-50 text-[6.9px] sm:text-[5.5px] font-bold rounded flex items-center gap-1.5 w-max"><CheckCircle2 className="w-2 h-2" /> Signed Off</div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-1.5 min-w-0 border-r border-slate-100 pr-2">
                  {/* <h3 className="text-[9px] sm:text-[7.2px] font-bold truncate">Access request for Sales Order Process in ERP Production</h3> */}

                  {/* <div className="flex items-start justify-between border-b border-slate-100 pb-1.5">
                     <div className="flex flex-col gap-0.5 w-[20%]">
                       <span className="text-[6.9px] sm:text-[5.5px] font-bold">System</span>
                       <span className="text-[8px] sm:text-[6.4px] font-bold truncate">ERP PROD</span>
                     </div>
                     <div className="flex flex-col gap-0.5 w-[25%]">
                       <span className="text-[6.9px] sm:text-[5.5px] font-bold">Module</span>
                       <span className="text-[8px] sm:text-[6.4px] font-bold truncate">SD - Sales</span>
                     </div>
                     <div className="flex flex-col gap-0.5 w-[25%]">
                       <span className="text-[6.9px] sm:text-[5.5px] font-bold">Requested On</span>
                       <span className="text-[8px] sm:text-[6.4px] font-medium flex items-center gap-0.5 truncate">14 Jul 2026</span>
                     </div>
                     <div className="flex flex-col gap-0.5 w-[30%]">
                       <span className="text-[6.9px] sm:text-[5.5px] font-bold">Access Window</span>
                       <span className="text-[8px] sm:text-[6.4px] font-medium flex items-center gap-0.5 truncate">14 Jul 2026</span>
                     </div>
                   </div> */}

                  <div className="flex flex-col gap-1 pt-0">
                    <span className="text-[6.9px] sm:text-[5.5px] font-bold">Approval Workflow</span>
                    <div className="flex items-center gap-1.5 mt-0 px-2">
                      <div className="flex flex-col items-center gap-0.5 relative z-10">
                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center"><FileText className="w-2.5 h-2.5" /></div>
                        <span className="text-[6.4px] sm:text-[5.1px] font-bold whitespace-nowrap">Submitted</span>
                        <span className="text-[5.4px] sm:text-[4.3px] font-medium whitespace-nowrap">14 Jul, 10:15 AM</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-emerald-500 -mt-8 sm:-mt-5"></div>
                      <div className="flex flex-col items-center gap-0.5 relative z-10">
                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center"><CheckCircle2 className="w-2.5 h-2.5" /></div>
                        <span className="text-[6.4px] sm:text-[5.1px] font-bold whitespace-nowrap">L1 Approval</span>
                        <span className="text-[5.4px] sm:text-[4.3px] font-medium whitespace-nowrap">14 Jul, 10:32 AM</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-emerald-500 -mt-8 sm:-mt-5"></div>
                      <div className="flex flex-col items-center gap-0.5 relative z-10">
                        <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center"><Shield className="w-2.5 h-2.5" /></div>
                        <span className="text-[6.4px] sm:text-[5.1px] font-bold whitespace-nowrap">Access</span>
                        <span className="text-[5.4px] sm:text-[4.3px] font-medium whitespace-nowrap">In Progress</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-slate-200 border-b border-dashed border-slate-300 -mt-8 sm:-mt-5"></div>
                      <div className="flex flex-col items-center gap-0.5 relative z-10 opacity-50">
                        <div className="w-5 h-5 rounded-full bg-slate-300 text-white flex items-center justify-center"><Lock className="w-2.5 h-2.5" /></div>
                        <span className="text-[6.4px] sm:text-[5.1px] font-bold whitespace-nowrap">Sign-Off</span>
                        <span className="text-[5.4px] sm:text-[4.3px] font-medium whitespace-nowrap">Pending</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 w-28 shrink-0 pt-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[6.9px] sm:text-[5.5px] font-bold">
                      <ShieldCheck className="w-2.5 h-2.5" /> Risk Assessment
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between mt-0">
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[17px] sm:text-[13.6px] font-black leading-none">10</span>
                      <span className="text-[6.9px] sm:text-[5.5px] font-bold">/100</span>
                    </div>

                  </div>
                  <div className="w-full h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[10%]"></div>
                  </div>
                  <div className="text-[6.4px] sm:text-[5.1px] font-medium mt-1">No activity found for this request.</div>
                  <div className="w-full px-3 py-1 border border-slate-200 rounded-md sm:rounded flex items-center justify-center gap-1.5 text-[6.9px] sm:text-[5.5px] font-bold mt-2 hover:bg-slate-50 cursor-pointer shadow-sm">
                    <FileText className="w-2 h-2" /> View Logs
                  </div>
                  <div className="text-[6.4px] sm:text-[5.1px] font-medium mt-auto">Updated: 14 Jul 2026, 10:32 AM</div>
                </div>
              </div>

              {/* Only 1 request shown to prevent scrolling */}
            </div>
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <button onClick={() => setActiveIndex(0)} className={`w-2 h-2 sm:w-1.5 sm:h-1.5 rounded-full transition-colors cursor-pointer ${activeIndex === 0 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 1" />
        <button onClick={() => setActiveIndex(1)} className={`w-2 h-2 sm:w-1.5 sm:h-1.5 rounded-full transition-colors cursor-pointer ${activeIndex === 1 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 2" />
      </div>
    </div>
  );
};

export const WorkspaceReportingMiniMockup = () => (
  <div className="w-full aspect-[16/10] bg-[#f8f9fa] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm relative">
    {/* Top Navbar */}
    <div className="bg-white border-b border-slate-100 flex items-center justify-between px-4 py-2.5 shrink-0">
      <div className="flex items-center gap-2">
        <Shield className="w-5 h-5 text-red-600" />
        <div className="flex flex-col leading-none">
          <span className="text-[12.8px] sm:text-[10.2px] font-black tracking-tight text-red-600">MATRIXVAULT</span>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex flex-1 overflow-hidden bg-white">
      {/* Left Sidebar */}
      <div className="w-[30%] bg-[#fcfcfc] border-r border-slate-200 flex flex-col overflow-hidden shrink-0">
        <div className="p-3 border-b border-slate-200 flex flex-col gap-3">
          <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[11.7px] sm:text-[9.4px]">
            <Calendar className="w-3.5 h-3.5 text-red-500" /> Audit Workspace
          </div>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search requests..."
              className="w-full bg-white border border-slate-200 rounded pl-6 pr-2 py-1.5 text-[9.6px] sm:text-[7.7px] text-slate-600 pointer-events-none shadow-sm"
            />
          </div>
        </div>

        {/* List items */}
        <div className="flex-1 p-2 flex flex-col gap-2 overflow-hidden">
          {/* Selected Item */}
          <div className="bg-[#fcfcfc] border border-slate-200 border-l-4 border-l-red-500 rounded-lg p-2.5 shadow-sm flex flex-col gap-1.5 relative">
            <div className="flex items-center gap-1.5">
              <span className="text-[10.6px] sm:text-[8.5px] font-bold text-slate-800">#REQ-2026-00045</span>
              <span className="bg-red-100 text-red-600 px-1.5 py-0.5 rounded text-[7.5px] sm:text-[6px] font-bold">Expired</span>
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[7.5px] sm:text-[6px] font-bold">Finance</span>
              <span className="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[7.5px] sm:text-[6px] font-bold">Yoga</span>
            </div>
            <div className="flex items-end justify-between mt-2">
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] sm:text-[7.2px] font-medium text-slate-500">Ravi Kumar</span>
                <span className="text-[8px] sm:text-[6.4px] font-medium text-slate-400 flex items-center gap-1"><Calendar className="w-2.5 h-2.5" /> Jul 20, 2026 11:20 AM</span>
              </div>
              {/* <div className="flex flex-col items-end gap-0.5 w-16">
                <span className="text-[8.5px] sm:text-[6.8px] font-bold text-slate-700">65<span className="text-slate-400 font-medium">/100</span></span>
                <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-[65%] bg-red-600 rounded-full"></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-[#fdfdfd] overflow-hidden">
        {/* Header Section */}
        <div className="p-4 border-b border-slate-100 flex flex-col gap-2 bg-white">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-[14.9px] sm:text-[11.9px] font-black text-slate-800">#REQ-2026-00045</h2>
              <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-[8.5px] sm:text-[6.8px] font-bold">Expired</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] sm:text-[7.2px] font-medium text-slate-400">Risk Score</span>
              <div className="w-16 h-1 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full w-[65%] bg-red-600 rounded-full"></div>
              </div>
              <span className="text-[9.6px] sm:text-[7.7px] font-bold text-slate-700">65<span className="text-slate-400">/100</span></span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[8.5px] sm:text-[6.8px] font-bold">ERP QA</span>
            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[8.5px] sm:text-[6.8px] font-bold">Finance</span>
            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[8.5px] sm:text-[6.8px] font-bold">Yoga</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center px-4 gap-6 border-b border-slate-100 bg-white">
          {/* <div className="text-[9.6px] sm:text-[7.7px] font-bold text-slate-400 py-3 flex items-center gap-1.5"><FileText className="w-3 h-3" /> Overview</div>
          <div className="text-[9.6px] sm:text-[7.7px] font-bold text-slate-400 py-3 flex items-center gap-1.5"><Activity className="w-3 h-3" /> Timeline</div>
          <div className="text-[9.6px] sm:text-[7.7px] font-bold text-slate-400 py-3 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> Approval Trail</div> */}
          <div className="text-[9.6px] sm:text-[7.7px] font-bold text-red-600 border-b-2 border-red-600 py-3 flex items-center gap-1.5"><FileText className="w-3 h-3" /> SAP Logs</div>
          {/* <div className="text-[9.6px] sm:text-[7.7px] font-bold text-slate-400 py-3 flex items-center gap-1.5"><MessageSquare className="w-3 h-3" /> Notes</div> */}
        </div>



        {/* Table Content */}
        <div className="flex-1 p-4 bg-slate-50 overflow-hidden flex flex-col gap-2">
          {/* Header */}
          <div className="grid grid-cols-12 gap-2 text-[9.6px] sm:text-[7.7px] font-bold text-slate-400 px-3 pb-1 border-b border-slate-200">
            <div className="col-span-3">Date / Time</div>
            <div className="col-span-2">Source</div>
            <div className="col-span-5">Event</div>
            <div className="col-span-2">Severity</div>
          </div>

          {/* Row */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-3 grid grid-cols-12 gap-2 items-start">
            <div className="col-span-3 flex flex-col gap-0.5">
              <span className="text-[10.1px] sm:text-[8.1px] font-medium text-slate-600">Jul 20, 2026</span>
              <span className="text-[9px] sm:text-[7.2px] font-medium text-slate-400">11:18:34 AM</span>
            </div>
            <div className="col-span-2 pt-0.5">
              <span className="bg-slate-100 text-slate-500 px-2 py-1 rounded-full text-[8.5px] sm:text-[6.8px] font-bold">SM20</span>
            </div>
            <div className="col-span-5 flex flex-col gap-1.5">
              <span className="text-[10.6px] sm:text-[8.5px] font-bold text-slate-800">Background job scheduled</span>
              <div className="flex flex-col gap-0.5 text-[8.5px] sm:text-[6.8px] font-medium text-slate-500">
                <span>Job Name: FIN_MONTHLY_CLOSE</span>
                <span>Target: FIN_CLERK</span>
                <span className="text-slate-500 flex items-center gap-1 text-[8px] sm:text-[6.4px] font-bold"><User className="w-2.5 h-2.5" /> Ravi.Kumar</span>

              </div>

            </div>
            <div className="col-span-2 pt-0.5 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
              <span className="text-[9.6px] sm:text-[7.7px] font-bold text-slate-800">Medium</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export const SessionMonitoringMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden custom-scrollbar shadow-sm">
    {" "}
    {/* Header */}{" "}
    <div className="bg-white border-b border-slate-200 px-6 sm:px-3 py-4 sm:py-2 flex max-sm:flex-wrap items-center justify-between">
      {" "}
      <div>
        {" "}
        <h3 className="text-[21.3px] sm:text-[8.5px] font-extrabold text-slate-900">
          Sessions
        </h3>{" "}
        <p className="text-[12.8px] sm:text-[5.1px] text-slate-500">
          Manage active firefighter sessions and monitor availability
        </p>{" "}
      </div>{" "}
      <div className="flex items-center gap-2 sm:gap-1 bg-slate-50 border border-slate-200 rounded px-3 sm:px-1.5 py-2 sm:py-1 text-[12.8px] sm:text-[5.1px] text-slate-500">
        {" "}
        <Search className="w-4 sm:w-2 h-4 sm:h-2" /> Search IDs...{" "}
      </div>{" "}
    </div>{" "}
    <div className="flex flex-1 overflow-hidden">
      {" "}
      {/* Sidebar */}{" "}
      <div className="w-2 sm:w-1/3 border-r border-slate-200 bg-slate-50 flex flex-col">
        {" "}
        <div className="p-4 sm:p-2 border-b border-slate-200 bg-slate-100">
          {" "}
          <div className="text-[15.9px] sm:text-[6.4px] font-bold text-slate-800 flex items-center gap-2 sm:gap-1">
            <Database className="w-4 sm:w-2 h-4 sm:h-2 text-red-500" /> PRD System
          </div>{" "}
          <div className="text-[10.6px] sm:text-[4.3px] text-slate-500 mt-0.5">
            3 active sessions
          </div>{" "}
        </div>{" "}
        <div className="p-4 sm:p-2 border-b border-slate-100 flex justify-between items-center bg-white border-l-2 border-l-red-500">
          {" "}
          <span className="text-[12.8px] sm:text-[5.1px] font-bold text-slate-700">
            FI Module
          </span>{" "}
          <span className="text-[12.8px] sm:text-[5.1px] font-bold text-emerald-600 bg-emerald-50 px-2 sm:px-1 rounded">
            2
          </span>{" "}
        </div>{" "}
        <div className="p-4 sm:p-2 border-b border-slate-100 flex justify-between items-center hover:bg-white transition-colors cursor-pointer">
          {" "}
          <span className="text-[12.8px] sm:text-[5.1px] font-bold text-slate-700">
            HR Module
          </span>{" "}
          <span className="text-[12.8px] sm:text-[5.1px] font-bold text-emerald-600 bg-emerald-50 px-2 sm:px-1 rounded">
            1
          </span>{" "}
        </div>{" "}
      </div>{" "}
      {/* Main Content */}{" "}
      <div className="flex-1 bg-white p-4 sm:p-2 flex flex-col gap-3 sm:gap-1.5 overflow-hidden">
        {" "}
        <div className="flex max-sm:flex-wrap items-center justify-between mb-1">
          {" "}
          <span className="text-[15.9px] sm:text-[6.4px] font-bold text-slate-800">
            FI Module Sessions
          </span>{" "}
          <div className="flex gap-2 sm:gap-1">
            {" "}
            <span className="text-[11.7px] sm:text-[4.7px] font-bold text-emerald-600 bg-emerald-50 px-2 sm:px-1 py-1 sm:py-0.5 rounded border border-emerald-100">
              Active: 2
            </span>{" "}
            <span className="text-[11.7px] sm:text-[4.7px] font-bold text-slate-500 bg-slate-50 px-2 sm:px-1 py-1 sm:py-0.5 rounded border border-slate-200">
              Available: 3
            </span>{" "}
          </div>{" "}
        </div>{" "}
        <div className="grid grid-cols-2 gap-4 sm:gap-2">
          {" "}
          {/* Card 1 */}{" "}
          <div className="border border-slate-200 rounded p-3 sm:p-1.5 shadow-sm bg-slate-50">
            {" "}
            <div className="flex justify-between items-start mb-1.5">
              {" "}
              <span className="text-[12.8px] sm:text-[5.1px] font-bold text-slate-800">
                Sarah Jenkins
              </span>{" "}
              <span className="text-[10.6px] sm:text-[4.3px] font-bold text-emerald-600 bg-emerald-100 px-2 sm:px-1 py-1 sm:py-0.5 rounded">
                Active
              </span>{" "}
            </div>{" "}
            <div className="flex items-center gap-3 sm:gap-1.5 mb-2">
              <div>
                {" "}
                <div className="text-[12.8px] sm:text-[5.1px] font-mono font-bold text-slate-700">
                  FF_FI_01
                </div>{" "}
                <div className="text-[10.6px] sm:text-[4.3px] text-slate-500">PRD System</div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex justify-between text-[10.6px] sm:text-[4.3px] text-slate-500 mb-1">
              {" "}
              <span>Duration</span>{" "}
              <span className="font-bold text-slate-700">1h 45m left</span>{" "}
            </div>{" "}
            <div className="flex justify-between text-[9.6px] sm:text-[4px] text-slate-400 mb-1.5">
              {" "}
              <span>Started: 09:00 AM</span> <span>Ends: 12:00 PM</span>{" "}
            </div>{" "}
            <button className="w-full py-2 sm:py-1 text-[11.7px] sm:text-[4.7px] font-bold text-red-600 bg-red-50 border border-red-200 rounded">
              Revoke Session
            </button>{" "}
          </div>{" "}
          {/* Card 2 */}{" "}
          <div className="border border-slate-200 rounded p-3 sm:p-1.5 shadow-sm bg-slate-50">
            {" "}
            <div className="flex justify-between items-start mb-1.5">
              {" "}
              <span className="text-[12.8px] sm:text-[5.1px] font-bold text-slate-800">
                Michael Chang
              </span>{" "}
              <span className="text-[10.6px] sm:text-[4.3px] font-bold text-emerald-600 bg-emerald-100 px-2 sm:px-1 py-1 sm:py-0.5 rounded">
                Active
              </span>{" "}
            </div>{" "}
            <div className="flex items-center gap-3 sm:gap-1.5 mb-2">
              <div>
                {" "}
                <div className="text-[12.8px] sm:text-[5.1px] font-mono font-bold text-slate-700">
                  FF_FI_02
                </div>{" "}
                <div className="text-[10.6px] sm:text-[4.3px] text-slate-500">PRD System</div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex justify-between text-[10.6px] sm:text-[4.3px] text-slate-500 mb-1">
              {" "}
              <span>Duration</span>{" "}
              <span className="font-bold text-red-600">0h 12m left</span>{" "}
            </div>{" "}
            <div className="flex justify-between text-[9.6px] sm:text-[4px] text-slate-400 mb-1.5">
              {" "}
              <span>Started: 10:15 AM</span> <span>Ends: 11:15 AM</span>{" "}
            </div>{" "}
            <button className="w-full py-2 sm:py-1 text-[11.7px] sm:text-[4.7px] font-bold text-red-600 bg-red-50 border border-red-200 rounded">
              Revoke Session
            </button>{" "}
          </div>{" "}

        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>
);
export const SafeguardsAuditMiniMockup = () => (
  <div className="w-full aspect-[16/10] bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col font-sans overflow-hidden relative">
    {/* Top Navbar */}
    <div className="bg-white border-b border-slate-100 flex items-center px-4 py-2.5 shrink-0">
      <div className="flex items-center gap-2">
        <Shield className="w-5 h-5 text-red-600" />
        <span className="text-[13.1px] sm:text-[10.2px] font-black tracking-tight text-red-600">MATRIXVAULT</span>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex flex-1 overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-[30%] bg-white border-r border-slate-200 flex flex-col shrink-0">
        <div className="p-2 sm:p-1.5 border-b border-slate-100">
          <div className="flex items-center gap-1.5 font-bold text-slate-700 text-[15.5px] sm:text-[8.5px]">
            <AlertTriangle className="w-3 h-3 text-amber-500" /> Sign-Off Escalations
          </div>
        </div>
        <div className="p-2 sm:p-1.5 flex items-center justify-between border-b border-slate-100 text-[14.9px] sm:text-[7.7px] font-bold text-slate-600">
          <div className="flex items-center gap-1.5"><Server className="w-3 h-3" /> Systems</div>
          <RefreshCw className="w-2.5 h-2.5 text-slate-400" />
        </div>

        {/* Selected List Item */}
        <div className="p-2 sm:p-1.5 bg-[#fdfaf5] border-l-2 border-amber-500 flex flex-col">
          <div className="text-[12px] sm:text-[8.5px] font-bold text-amber-600 flex items-center gap-1">PR <span className="text-amber-600">PRD</span></div>
          <div className="text-[11.4px] sm:text-[7.9px] font-medium text-slate-500 ml-4">PRD System</div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        {/* Header */}
        <div className="p-2 sm:p-1.5 sm:p-2 border-b border-slate-200 flex flex-col">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-amber-500 text-white font-bold text-[14.9px] sm:text-[7.7px] flex items-center justify-center">PR</div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13.1px] sm:text-[10.2px] font-bold text-slate-800">PRD</span>
                  <span className="bg-amber-100 text-amber-600 text-[13.7px] sm:text-[6px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5"><Star className="w-2 h-2 fill-amber-500" /> SAP</span>
                </div>
                <span className="text-[11.4px] sm:text-[7.7px] text-slate-500 font-medium mt-0.5">PRD System</span>
              </div>
            </div>
            <div className="w-6 h-6 bg-amber-500 text-white rounded flex items-center justify-center shadow-sm">
              <Save className="w-3 h-3" />
            </div>
          </div>

          <div className="flex items-center justify-between mt-2 sm:mt-1.5">
            <div className="flex items-center gap-2 sm:p-1.5 sm:p-2 text-[14.9px] sm:text-[7.7px] font-bold">
              <span className="text-amber-500 flex items-center gap-1"><Link2 className="w-3 h-3" /> 1 level</span>
              <span className="text-slate-500 flex items-center gap-1"><Users className="w-3 h-3" /> 0/1 assigned</span>
            </div>
            <div className="flex items-center gap-1 text-[14.9px] sm:text-[7.7px] font-bold text-amber-500">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Unsaved changes
            </div>
          </div>
        </div>

        {/* Escalation Chain Body */}
        <div className="p-2 sm:p-1.5 sm:p-2 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-2 sm:mb-1.5">
            <span className="text-[12px] sm:text-[8.5px] font-bold text-slate-700">Escalation chain</span>
            <span className="text-[10.8px] sm:text-[6.8px] font-medium text-slate-400 flex items-center gap-1">triggers in order <ChevronDown className="w-2.5 h-2.5" /></span>
          </div>

          <div className="flex gap-2 sm:p-1.5 sm:p-2">
            {/* Level 1 Card */}
            <div className="w-1/2 border-2 border-amber-400 rounded-lg bg-white flex flex-col p-2 sm:p-1.5 shadow-sm">
              <div className="flex items-center justify-between mb-2 sm:mb-1.5 border-b border-amber-100 pb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-amber-500 text-white font-bold text-[14.3px] sm:text-[6.8px] flex items-center justify-center">1</div>
                  <span className="text-[12px] sm:text-[8.5px] font-bold text-slate-800">Level 1 <span className="text-amber-500 font-medium">new</span></span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <X className="w-2.5 h-2.5" />
                  <Trash2 className="w-2.5 h-2.5" />
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:p-1.5">
                <div className="flex flex-col gap-1">
                  <span className="text-[11.4px] sm:text-[7.7px] font-bold text-slate-700">Notify user</span>
                  <div className="border border-slate-200 rounded px-2 py-1.5 flex items-center justify-between bg-white text-[14.3px] sm:text-[6.8px] text-slate-400">
                    Select a user... <span>→</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11.4px] sm:text-[7.7px] font-bold text-slate-700">After how many hours?</span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 border border-slate-200 rounded px-2 py-1.5 flex items-center gap-1.5 bg-white text-[14.3px] sm:text-[6.8px] text-slate-400">
                      <Clock className="w-2.5 h-2.5" /> e.g. 24
                    </div>
                    <span className="bg-slate-100 px-2 py-1.5 rounded text-[14.3px] sm:text-[6.8px] font-bold text-slate-600">hrs</span>
                  </div>
                </div>
                <span className="text-[10.8px] sm:text-[6.8px] font-medium text-slate-500">Escalates if idle for this many</span>
              </div>
            </div>

            {/* Add Level 2 Card */}
            <div className="w-1/2 border border-dashed border-slate-300 rounded-lg bg-slate-50 flex flex-col items-center justify-center p-2 sm:p-1.5 sm:p-2">
              <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 mb-2 bg-white">
                <Plus className="w-3 h-3" />
              </div>
              <span className="text-[12px] sm:text-[8.5px] font-bold text-slate-700">Add Level 2</span>
              <span className="text-[10.8px] sm:text-[6.8px] font-medium text-slate-400 mt-0.5">Click to configure</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* AI Robot Button overlay at bottom right */}
    <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-red-600 shadow-lg shadow-red-600/30 flex items-center justify-center text-white z-10">
      <Bot className="w-4 h-4" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full flex items-center justify-center p-[1px]">
        <div className="w-full h-full bg-slate-400 rounded-full"></div>
      </div>
    </div>
  </div>
);

export const ApprovalsRoutingMiniMockup = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }
  }, [isHovered]);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-slate-50 rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm relative">
      <div
        className="flex h-full w-[200%] transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
      >
        {/* View 1: Streamlined Approvals Queue */}
        <div className="w-1/2 h-full flex flex-col bg-[#f8fafc]">
          {/* Header */}
          <div className="bg-white border-b border-slate-100 flex items-center px-4 py-2.5 shrink-0">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-600" />
              <div className="flex flex-col leading-none">
                <span className="text-[12.1px] sm:text-[10.2px] font-black tracking-tight text-red-600">MATRIXVAULT</span>
              </div>
            </div>
          </div>

          <div className="p-4 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-red-50 text-red-500 rounded flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13.3px] sm:text-[11.9px] font-bold text-slate-800 leading-tight">Approvals</span>
                <span className="text-[10.4px] sm:text-[7.7px] text-slate-500">Review and approve firefighter access requests</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[13.9px] sm:text-[7.7px] font-bold text-slate-500 mt-4 border-b border-slate-200 pb-2">
              <span>All <span className="text-slate-800 ml-1">18</span></span>
              <span>Pending <span className="text-slate-800 ml-1">2</span></span>
              <span className="text-emerald-600 border border-emerald-500 bg-emerald-50 px-2 py-1 rounded">Approved 11</span>
              <span>Rejected <span className="text-slate-800 ml-1">3</span></span>
              <span>Sign Off <span className="text-slate-800 ml-1">2</span></span>
            </div>

            <div className="text-[9.8px] sm:text-[6.8px] text-slate-400 mt-2 mb-2">Showing <span className="font-bold text-slate-600">1</span> of <span className="font-bold text-slate-600">1</span> approved request</div>

            {/* Main Request Card */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm flex overflow-hidden">
              {/* Left Col */}
              <div className="w-[20%] p-3 border-r border-slate-100 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-[14.5px] sm:text-[8.5px]">MP</div>
                  <span className="text-[11.5px] sm:text-[9.4px] font-bold text-slate-800 leading-tight">Manoj Patel</span>
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="text-[9.8px] sm:text-[6.8px] font-medium text-slate-500">#REQ-2026-00127</span>
                  <span className="text-[10.4px] sm:text-[7.7px] font-bold text-emerald-600 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Approved</span>
                </div>
              </div>

              {/* Mid Col */}
              <div className="flex-1 p-3 flex flex-col">
                <span className="text-[11.5px] sm:text-[9.4px] font-bold text-slate-800 mb-3">Request for HR Report access on Corporate ERP</span>

                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9.2px] sm:text-[6px] text-slate-400 font-medium">System</span>
                    <span className="text-[9.8px] sm:text-[6.8px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded w-fit">Corporate ERP</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9.2px] sm:text-[6px] text-slate-400 font-medium">Module</span>
                    <span className="text-[9.8px] sm:text-[6.8px] font-bold text-slate-700">HR - Reporting</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9.2px] sm:text-[6px] text-slate-400 font-medium">Request ID</span>
                    <span className="text-[9.8px] sm:text-[6.8px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded w-fit">HR_REP_02</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9.2px] sm:text-[6px] text-slate-400 font-medium">Requested On</span>
                    <span className="text-[9.8px] sm:text-[6.8px] font-bold text-slate-600 flex items-center gap-1"><Clock className="w-2 h-2" /> Jul 19, 2026</span>
                  </div>
                </div>

                {/* <span className="text-[9.8px] sm:text-[6.8px] text-slate-400 font-medium mb-2">Approval Workflow</span>
                <div className="flex items-center justify-between px-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center"><FileText className="w-2.5 h-2.5" /></div>
                    <span className="text-[9.2px] sm:text-[6px] font-bold text-emerald-600">Submitted</span>
                  </div>
                  <div className="h-px bg-emerald-500 w-8"></div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-5 h-5 rounded-full border-2 border-emerald-500 text-emerald-500 flex items-center justify-center"><Check className="w-2.5 h-2.5" /></div>
                    <span className="text-[9.2px] sm:text-[6px] font-bold text-emerald-600">L1 Approval</span>
                  </div>
                  <div className="h-px bg-emerald-500 w-8"></div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center"><Shield className="w-2.5 h-2.5" /></div>
                    <span className="text-[9.2px] sm:text-[6px] font-bold text-red-500">Access</span>
                  </div>
                  <div className="h-px bg-slate-200 border-dashed w-8 border-t border-slate-200"></div>
                  <div className="flex flex-col items-center gap-1 opacity-50">
                    <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center"><Lock className="w-2.5 h-2.5" /></div>
                    <span className="text-[9.2px] sm:text-[6px] font-bold text-amber-500">Sign-Off</span>
                  </div>
                </div> */}
              </div>

              {/* Right Col */}
              <div className="w-[25%] bg-[#f4fafa] p-3 border-l border-slate-100 flex flex-col gap-2">
                <div className="flex items-center gap-1 text-[13.3px] sm:text-[6.8px] font-bold text-emerald-600 mb-1">
                  <Star className="w-2.5 h-2.5 fill-emerald-500" /> AI Risk Assessment
                </div>
                <div className="flex items-end justify-between mb-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[15.7px] sm:text-[15.3px] font-black text-emerald-600 leading-none">18</span>
                    <span className="text-[9.8px] sm:text-[6.8px] font-bold text-slate-400">/100</span>
                  </div>
                  <span className="bg-emerald-500 text-white text-[12.7px] sm:text-[6px] font-bold px-1.5 py-0.5 rounded">Low Risk</span>
                </div>
                <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden mb-2">
                  <div className="w-[18%] h-full bg-emerald-500 rounded-full"></div>
                </div>
                <span className="text-[9.2px] sm:text-[6px] text-slate-500 leading-tight mb-auto">No activity found for this request.</span>

                <div className="flex gap-2 mt-2">
                  <button className="flex-1 text-slate-600 rounded py-1 flex items-center justify-center gap-1 text-[13.3px] sm:text-[6.8px] font-bold"> Logs</button>
                  <button className="flex-1 text-blue-600  py-1 flex items-center justify-center gap-1 text-[13.3px] sm:text-[6.8px] font-bold">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View 2: Configured Approvers */}
        <div className="w-1/2 h-full flex flex-col bg-[#f8fafc]">
          <div className="bg-white border-b border-slate-100 flex items-center px-4 py-2.5 shrink-0">
            <div className="flex items-center gap-1.5">
              <Shield className="w-5 h-5 text-red-600" />
              <div className="flex flex-col leading-none">
                <span className="text-[12.1px] sm:text-[10.2px] font-black tracking-tight text-red-600">MATRIXVAULT</span>
              </div>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden p-4 gap-4">
            {/* Left Sidebar */}
            <div className="w-[30%] flex flex-col gap-1.5">
              <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-1.5 flex flex-col gap-1.5">
                <span className="text-[10.4px] sm:text-[7.7px] font-bold text-slate-800 mb-0.5">Scope Breakdown</span>
                <div className="flex items-center justify-between bg-indigo-50/50 border border-indigo-100 rounded p-1.5">
                  <div className="flex items-center gap-1.5 text-[13.9px] sm:text-[7.7px] font-bold text-indigo-600"><Globe className="w-3 h-3" /> Global-scoped</div>
                  <span className="bg-indigo-100 text-indigo-600 font-bold px-1.5 py-0.5 rounded text-[13.3px] sm:text-[6.8px]">3</span>
                </div>
                <div className="flex items-center justify-between bg-blue-50/50 border border-blue-100 rounded p-1.5">
                  <div className="flex items-center gap-1.5 text-[13.9px] sm:text-[7.7px] font-bold text-blue-600"><Server className="w-3 h-3" /> System-scoped</div>
                  <span className="bg-blue-100 text-blue-600 font-bold px-1.5 py-0.5 rounded text-[13.3px] sm:text-[6.8px]">1</span>
                </div>
                <div className="flex items-center justify-between bg-emerald-50/50 border border-emerald-100 rounded p-1.5">
                  <div className="flex items-center gap-1.5 text-[13.9px] sm:text-[7.7px] font-bold text-emerald-600"><Box className="w-3 h-3" /> Module-scoped</div>
                  <span className="bg-emerald-100 text-emerald-600 font-bold px-1.5 py-0.5 rounded text-[13.3px] sm:text-[6.8px]">0</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-1.5 flex flex-col gap-1.5">
                <span className="text-[10.4px] sm:text-[7.7px] font-bold text-slate-800 mb-0.5">How It Works</span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[13.9px] sm:text-[7.7px] font-bold text-indigo-600"><Globe className="w-3 h-3" /> Global</div>
                  <span className="text-[9.2px] sm:text-[6px] text-slate-400 leading-tight">Can step in on any timed-out request in the company.</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[13.9px] sm:text-[7.7px] font-bold text-blue-600"><Server className="w-3 h-3" /> System</div>
                  <span className="text-[9.2px] sm:text-[6px] text-slate-400 leading-tight">Covers all modules within a specified SAP system.</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[13.9px] sm:text-[7.7px] font-bold text-emerald-600"><Box className="w-3 h-3" /> Module</div>
                  <span className="text-[9.2px] sm:text-[6px] text-slate-400 leading-tight">Covers requests for a single system + module combination.</span>
                </div>
                <div className="bg-indigo-50 border border-indigo-100 rounded p-1.5 mt-0.5 flex gap-1.5 items-start">
                  <Info className="w-3 h-3 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="text-[9.2px] sm:text-[6px] text-indigo-600 leading-tight">Assigned users automatically receive <b>Escalation Approvals</b> access — no manual RBAC needed.</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-[12.7px] sm:text-[11px] font-bold text-slate-800">Configured Approvers</span>
                  <span className="text-[10.4px] sm:text-[7.7px] text-slate-500">Manage users who can approve requests on behalf of others.</span>
                </div>
                <button className="flex items-center gap-1 text-[13.9px] sm:text-[7.7px] font-bold">
                  Add Approver
                </button>
              </div>

              <div className="flex justify-end mb-2">
                <span className="text-[9.8px] sm:text-[6.8px] text-slate-400 flex items-center gap-2">Sort by: <div className="border border-slate-200 rounded bg-white px-2 py-1 text-slate-600 font-bold flex items-center gap-1">Recently added <ChevronDown className="w-2 h-2" /></div></span>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-[16.8px] sm:text-[11.9px]">RS</div>
                    <div className="flex flex-col">
                      <span className="text-[12.1px] sm:text-[10.2px] font-bold text-slate-800">Rakesh Sharma</span>
                      <span className="text-[10.4px] sm:text-[7.7px] text-slate-400 mb-1">rakesh.sharma@demo.com</span>
                      <div className="flex gap-2">
                        <span className=" text-indigo-600 font-bold text-[12.7px] sm:text-[6px] px-1.5 py-0.5 rounded flex items-center gap-1"><Globe className="w-2 h-2" /> Global</span>
                        <span className=" text-indigo-600 font-bold text-[12.7px] sm:text-[6px] px-1.5 py-0.5 rounded">All systems & modules</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex flex-col items-end mr-2">
                      <span className="text-[9.2px] sm:text-[6px] text-slate-400 flex items-center gap-1"><Clock className="w-2 h-2" /> Added on</span>
                      <span className="text-[10.4px] sm:text-[7.7px] font-bold text-slate-700">May 20, 2026</span>
                    </div>
                    <button className="w-6 h-6 border border-slate-200 rounded flex items-center justify-center text-slate-400 hover:text-slate-600"><Edit2 className="w-3 h-3" /></button>
                    <button className="w-6 h-6 border border-slate-200 rounded flex items-center justify-center text-slate-400 hover:text-red-600"><Trash2 className="w-3 h-3" /></button>
                  </div>
                </div>

                <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 flex items-center justify-between border-l-2 border-l-emerald-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span className="text-[10.4px] sm:text-[7.7px] font-bold text-emerald-700">Active availability</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-[11px] sm:text-[8.5px] font-black text-slate-800">07:30 AM</span>
                      <span className="text-[9.8px] sm:text-[6.8px] text-slate-500 font-medium">Start time</span>
                    </div>
                    <span className="text-slate-300">→</span>
                    <div className="flex flex-col">
                      <span className="text-[11px] sm:text-[8.5px] font-black text-slate-800">06:30 PM</span>
                      <span className="text-[9.8px] sm:text-[6.8px] text-slate-500 font-medium">End time</span>
                    </div>
                  </div>
                  <div className="bg-emerald-100 text-emerald-700 font-bold text-[13.3px] sm:text-[6.8px] px-2 py-1 rounded-full flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        <button onClick={() => setActiveIndex(0)} className={`w-1.5 h-1.5 rounded-full transition-colors ${activeIndex === 0 ? 'bg-slate-800' : 'bg-slate-300'}`}></button>
        <button onClick={() => setActiveIndex(1)} className={`w-1.5 h-1.5 rounded-full transition-colors ${activeIndex === 1 ? 'bg-slate-800' : 'bg-slate-300'}`}></button>
      </div>
    </div>
  );
};
export const VulnDashboardMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden custom-scrollbar shadow-sm">
    {" "}
    <div className="bg-white border-b border-slate-200 px-6 sm:px-3 py-4 sm:py-2 flex max-sm:flex-wrap items-center justify-between">
      {" "}
      <div className="flex items-center gap-3 sm:gap-1.5">
        {" "}
        <div className="w-8 sm:w-4 h-8 sm:h-4 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[18.1px] sm:text-[7.2px] text-red-500">
          ⏱
        </div>{" "}
        <div>
          {" "}
          <div className="text-[19.1px] sm:text-[7.7px] font-extrabold text-slate-900">
            Vulnerability Dashboard
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex items-center gap-2 sm:gap-1 bg-white border border-slate-200 rounded px-3 sm:px-1.5 py-1 sm:py-0.5 text-[12.8px] sm:text-[5.1px] text-slate-700 font-bold">
        {" "}
        All Systems <span>▼</span>{" "}
      </div>{" "}
    </div>{" "}
    <div className="flex flex-col flex-1 p-4 sm:p-2 gap-4 sm:gap-2 overflow-hidden">
      {" "}
      {/* 6 Top Stats */}{" "}
      <div className="flex gap-3 sm:gap-1.5">
        {" "}
        {[
          { label: "Certificates Expired", val: "17", c: "text-red-600" },
          { label: "RFC Failures", val: "39", c: "text-red-600" },
          { label: "Pending Updates", val: "89", c: "text-amber-500" },
          { label: "Security Notes", val: "29", c: "text-amber-600" },
        ].map((s, i) => (
          <div
            key={i}
            className="flex-1 bg-white border border-slate-200 rounded p-3 sm:p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
          >
            {" "}
            <div className="text-[10.6px] sm:text-[4.3px] text-slate-500 font-bold mb-1 truncate">
              {s.label}
            </div>{" "}
            <div className={`text-[25.5px] sm:text-[10.2px] font-black ${s.c}`}>{s.val}</div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
      {/* Module Status Cards (8 cards in 1 row) */}{" "}
      <div className="flex flex-col bg-white border border-slate-200 rounded p-3 sm:p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        {" "}
        <div className="text-[12.8px] sm:text-[5.1px] font-extrabold text-slate-900 mb-1.5">
          Module Status — <span className="text-red-600">● Live</span>
        </div>{" "}
        <div className="flex gap-3 sm:gap-1.5">
          {" "}
          {[
            { title: "Profile Parameters", val: "110", sub: "3 profiles" },
            {
              title: "Scan RFC Health",
              val: "39 ⚠",
              sub: "25 ok · 0 unchecked",
              red: true,
            },
            {
              title: "Certificate Check",
              val: "17 ⚠",
              sub: "0 expiring soon",
              red: true,
            },
            {
              title: "Client Security",
              val: "17 ⚠",
              sub: "6 critical",
              red: true,
            },
          ].map((m, i) => (
            <div
              key={i}
              className="flex-1 bg-slate-50 border border-slate-200 rounded p-2 sm:p-1"
            >
              {" "}
              <div className="text-[10.6px] sm:text-[4.3px] text-slate-500 font-bold mb-0.5 truncate">
                {m.title}
              </div>{" "}
              <div
                className={`text-[18.1px] sm:text-[7.2px] font-black ${m.red ? "text-red-600" : "text-slate-800"}`}
              >
                {m.val}
              </div>{" "}
              <div className="text-[9.6px] sm:text-[4px] text-slate-400 truncate mt-0.5">
                {m.sub}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      {/* Bottom section */}{" "}
      <div className="flex gap-4 sm:gap-2 flex-1 overflow-hidden">
        {" "}
        {/* Status Breakdown */}{" "}
        <div className="w-1/2 flex flex-col gap-3 sm:gap-1.5 min-w-0">
          {" "}
          <div className="text-[12.8px] sm:text-[5.1px] font-extrabold text-slate-900 mb-0.5">
            Status Breakdown
          </div>{" "}
          <div className="grid grid-cols-2 gap-3 sm:gap-1.5 flex-1">
            {" "}
            <div className="bg-white border border-slate-200 rounded flex flex-col items-center justify-center p-2 sm:p-1 shadow-[0_1px_2px_rgba(0,0,0,0.02)] relative">
              {" "}
              <div className="w-16 h-16 sm:w-8 sm:h-8 rounded-full border-[3px] border-red-500 flex items-center justify-center text-[18.1px] sm:text-[7.2px] font-black mb-1">
                27
              </div>{" "}
              <div className="text-[11.7px] sm:text-[4.7px] font-bold text-slate-700">
                Certificate Status
              </div>{" "}
              <div className="text-[10.6px] sm:text-[4.3px] text-slate-500">17 Expired</div>{" "}
            </div>{" "}
            <div className="bg-white border border-slate-200 rounded flex flex-col items-center justify-center p-2 sm:p-1 shadow-[0_1px_2px_rgba(0,0,0,0.02)] relative">
              {" "}
              <div className="w-16 h-16 sm:w-8 sm:h-8 rounded-full border-[3px] border-red-500 flex items-center justify-center text-[18.1px] sm:text-[7.2px] font-black mb-1">
                64
              </div>{" "}
              <div className="text-[11.7px] sm:text-[4.7px] font-bold text-slate-700">
                RFC Connection Status
              </div>{" "}
              <div className="text-[10.6px] sm:text-[4.3px] text-slate-500">39 Failed</div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Progress Bars */}{" "}
        <div className="w-1/2 flex flex-col gap-2 sm:gap-1 min-w-0">
          {" "}
          <div className="text-[12.8px] sm:text-[5.1px] font-extrabold text-slate-900 mb-0.5">
            Update & Health Coverage
          </div>{" "}
          <div className="flex flex-col gap-2 sm:gap-1 flex-1 bg-white border border-slate-200 rounded p-3 sm:p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] justify-between">
            {" "}
            {[
              {
                label: "Installed Products Up To Date",
                pct: "17%",
                w: "w-[17%]",
                c: "bg-amber-400",
                sub: "1 of 6 on latest release",
              },
              {
                label: "RFC Destinations Healthy",
                pct: "39%",
                w: "w-[39%]",
                c: "bg-red-500",
                sub: "25 of 64 connecting successfully",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="mb-0.5"
              >
                {" "}
                <div className="flex justify-between text-[11.7px] sm:text-[4.7px] font-bold text-slate-700 mb-0.5">
                  {" "}
                  <span>{p.label}</span>{" "}
                  <span
                    className={
                      p.c.includes("red") ? "text-red-600" : "text-amber-500"
                    }
                  >
                    {p.pct} ›
                  </span>{" "}
                </div>{" "}
                <div className="h-2 sm:h-1 bg-slate-100 rounded-full overflow-hidden mb-0.5">
                  {" "}
                  <div className={`h-full ${p.c} ${p.w}`}></div>{" "}
                </div>{" "}
                <div className="text-[9.6px] sm:text-[4px] text-slate-400">{p.sub}</div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>
);
export const PatchingMiniMockup = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }
  }, [isHovered]);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm relative">
      <div
        className="flex h-full w-[200%] transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
      >
        {/* View 1: BTP Security Assessment */}
        <div className="w-1/2 h-full flex flex-col bg-white">
          <div className="bg-white px-6 sm:px-4 py-5 sm:py-4 flex items-center justify-between border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-4 sm:gap-3">
              <div className="w-10 sm:w-8 h-10 sm:h-8 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
                <Shield className="w-5 sm:w-4 h-5 sm:h-4" />
              </div>
              <div>
                <div className="text-[15.3px] sm:text-[11.9px] font-bold text-slate-900">BTP Security Assessment</div>
                <div className="text-[11px] sm:text-[8.5px] text-slate-500 font-medium mt-0.5">Users, Role Collections & Roles For PRD System</div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-1 bg-white border border-slate-200 rounded px-3 sm:px-1.5 py-1.5 sm:py-1 text-[11px] sm:text-[8.5px] text-slate-700 font-bold">
              All Systems <ChevronDown className="w-3.5 h-3.5 sm:w-2.5 sm:h-2.5" />
            </div>
          </div>

          <div className="p-5 sm:p-4 bg-[#f8fafc] flex-1 flex flex-col gap-4 sm:gap-3 overflow-hidden">
            <div className="flex gap-4 sm:gap-3 shrink-0">
              <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4 sm:p-3 shadow-sm flex flex-col gap-1 sm:gap-2 items-center justify-center">
                <div className="flex items-center gap-2"><Users className="w-5 h-5 sm:w-4 sm:h-4 text-blue-500" /><span className="text-[10.2px] sm:text-[8.1px] font-bold text-slate-600">Total Users</span></div>
                <div className="text-[20.4px] sm:text-[15.3px] font-black text-blue-600">24</div>
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4 sm:p-3 shadow-sm flex flex-col gap-1 sm:gap-2 items-center justify-center">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 sm:w-4 sm:h-4 text-emerald-500" /><span className="text-[10.2px] sm:text-[8.1px] font-bold text-slate-600">Active</span></div>
                <div className="text-[20.4px] sm:text-[15.3px] font-black text-emerald-600">18</div>
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4 sm:p-3 shadow-sm flex flex-col gap-1 sm:gap-2 items-center justify-center">
                <div className="flex items-center gap-2"><XCircle className="w-5 h-5 sm:w-4 sm:h-4 text-slate-400" /><span className="text-[10.2px] sm:text-[8.1px] font-bold text-slate-600">Inactive</span></div>
                <div className="text-[20.4px] sm:text-[15.3px] font-black text-slate-700">2</div>
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4 sm:p-3 shadow-sm flex flex-col gap-1 sm:gap-2 items-center justify-center">
                <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 sm:w-4 sm:h-4 text-blue-500" /><span className="text-[10.2px] sm:text-[8.1px] font-bold text-slate-600">Verified</span></div>
                <div className="text-[20.4px] sm:text-[15.3px] font-black text-blue-600">20</div>
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4 sm:p-3 shadow-sm flex flex-col gap-1 sm:gap-2 items-center justify-center">
                <div className="flex items-center gap-2"><AlertTriangle className="w-5 h-5 sm:w-4 sm:h-4 text-amber-500" /><span className="text-[10.2px] sm:text-[8.1px] font-bold text-slate-600">Never Logged In</span></div>
                <div className="text-[20.4px] sm:text-[15.3px] font-black text-amber-600">4</div>
              </div>
            </div>

            <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
              <div className="grid grid-cols-12 gap-2 px-5 sm:px-4 py-3 sm:py-2.5 border-b border-slate-100 bg-slate-50 text-[9.4px] sm:text-[6.8px] font-bold text-slate-500">
                <div className="col-span-2">Full Name</div>
                <div className="col-span-2">Username / Email</div>
                <div className="col-span-1">Groups</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Verified</div>
                <div className="col-span-2">Last Login</div>
                <div className="col-span-1 text-right">Actions</div>
              </div>
              <div className="flex-1 overflow-hidden">
                {[
                  { name: "Daniel Joseph", email: "daniel.joseph@company.com", groups: "7 Groups", login: "Jul 18, 2026" },
                  { name: "Priya Nair", email: "priya.nair@company.com", groups: "9 Groups", login: "May 30, 2026" },
                  { name: "Rohit Sharma", email: "rohit.sharma@company.com", groups: "5 Groups", login: "Jun 10, 2026" },
                  { name: "Meera Iyer", email: "meera.iyer@company.com", groups: "6 Groups", login: "Apr 25, 2026" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-12 gap-2 px-5 sm:px-4 py-4 sm:py-3 border-b border-slate-50 items-center hover:bg-slate-50 text-[10.2px] sm:text-[8.1px]">
                    <div className="col-span-2 font-bold text-slate-800">{row.name}</div>
                    <div className="col-span-2 text-slate-500 font-medium pr-2 truncate">{row.email}</div>
                    <div className="col-span-1 font-medium text-slate-600">{row.groups}</div>
                    <div className="col-span-2 font-bold flex items-center gap-1 text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded w-fit">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Active
                    </div>
                    <div className="col-span-2 font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 w-fit">Verified</div>
                    <div className="col-span-2 font-medium text-slate-600">{row.login}</div>
                    <div className="col-span-1 text-purple-600 font-bold text-right cursor-pointer">Details</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* View 2: Connect New System Modal */}
        <div className="w-1/2 h-full flex flex-col bg-white overflow-hidden">
          {/* Modal Header */}
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center shrink-0">
            <h2 className="text-[13.6px] sm:text-[11px] font-bold text-slate-800">Connect New System</h2>
            <X className="w-5 h-5 text-slate-400 cursor-pointer" />
          </div>

          <div className="p-6 sm:p-4 flex flex-col gap-6 sm:gap-4 flex-1 overflow-hidden">
            {/* General Settings */}
            <div className="flex flex-col gap-4 sm:gap-3">
              <div className="flex items-center gap-2 bg-slate-50 p-2 rounded text-[11px] sm:text-[8.5px] font-bold text-slate-700">
                <Settings className="w-4 h-4 text-red-600" /> General Settings
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9.4px] sm:text-[6.8px] font-medium text-slate-500">Environment Name</label>
                  <input type="text" placeholder="e.g., Production" className="border border-slate-200 rounded px-3 py-1.5 text-[10.2px] sm:text-[8.1px] bg-slate-50/50" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9.4px] sm:text-[6.8px] font-medium text-slate-500">Identifier</label>
                  <input type="text" placeholder="e.g., ENV-01" className="border border-slate-200 rounded px-3 py-1.5 text-[10.2px] sm:text-[8.1px] bg-slate-50/50" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9.4px] sm:text-[6.8px] font-medium text-slate-500">Label</label>
                  <input type="text" placeholder="e.g., Primary System" className="border border-slate-200 rounded px-3 py-1.5 text-[10.2px] sm:text-[8.1px] bg-slate-50/50" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9.4px] sm:text-[6.8px] font-medium text-slate-500">Client ID</label>
                  <input type="text" placeholder="e.g., 100" className="border border-slate-200 rounded px-3 py-1.5 text-[10.2px] sm:text-[8.1px] bg-slate-50/50" />
                </div>
              </div>

              <div className="bg-slate-100/50 border border-slate-200 rounded p-2 sm:p-1.5 flex items-start gap-2 text-[9.4px] sm:text-[6.8px] text-slate-600">
                <Info className="w-4 h-4 sm:w-3 sm:h-3 text-slate-400 shrink-0" />
                <p>Must match the logon client on the actual SAP system exactly (e.g. 100, 200) — an incorrect client will prevent this system from connecting.</p>
              </div>

              <div className="flex flex-col gap-1.5 w-1/2 pr-2">
                <label className="text-[9.4px] sm:text-[6.8px] font-medium text-slate-500">Region/Timezone</label>
                <div className="border border-slate-200 rounded px-3 py-1.5 text-[10.2px] sm:text-[8.1px] bg-white flex items-center justify-between">
                  <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-slate-500" /> Select timezone</div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Connection Details */}
            <div className="flex flex-col gap-4 sm:gap-3">
              <div className="flex items-center gap-2 bg-slate-50 p-2 rounded text-[11px] sm:text-[8.5px] font-bold text-slate-700">
                <Globe className="w-4 h-4 text-blue-600" /> Connection Details
              </div>

              <div className="flex gap-2">
                <button className="border border-slate-200 bg-white px-4 py-1.5 rounded-full text-[9.4px] sm:text-[6.8px] font-bold text-slate-600 flex items-center gap-1 hover:bg-slate-50">ODATA <span className="text-slate-400 font-medium">REST</span></button>
                <button className="border border-slate-200 bg-white px-4 py-1.5 rounded-full text-[9.4px] sm:text-[6.8px] font-bold text-slate-600 flex items-center gap-1 hover:bg-slate-50">RFC <span className="text-slate-400 font-medium">Native</span></button>
                <button className="bg-blue-600 border border-blue-600 text-white px-4 py-1.5 rounded-full text-[9.4px] sm:text-[6.8px] font-bold hover:bg-blue-700">BTP XSUAA</button>
              </div>

              <div className="flex flex-col gap-3 sm:gap-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9.4px] sm:text-[6.8px] font-medium text-slate-500">XSUAA Token URL</label>
                  <input type="text" placeholder="Enter URL" className="border border-slate-200 rounded px-3 py-1.5 text-[10.2px] sm:text-[8.1px] bg-slate-50/50" />
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9.4px] sm:text-[6.8px] font-medium text-slate-500">Client ID</label>
                    <input type="text" placeholder="Enter ID" className="border border-slate-200 rounded px-3 py-1.5 text-[10.2px] sm:text-[8.1px] bg-slate-50/50" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9.4px] sm:text-[6.8px] font-medium text-slate-500">Client Secret</label>
                    <input type="text" placeholder="Enter Secret" className="border border-slate-200 rounded px-3 py-1.5 text-[10.2px] sm:text-[8.1px] bg-slate-50/50" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9.4px] sm:text-[6.8px] font-medium text-slate-500">BTP API Base URL</label>
                  <input type="text" placeholder="Enter URL" className="border border-slate-200 rounded px-3 py-1.5 text-[10.2px] sm:text-[8.1px] bg-slate-50/50" />
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-3 bg-white shrink-0">
            <button className="border border-slate-200 bg-white text-slate-700 px-4 py-1.5 rounded text-[10.2px] sm:text-[8.1px] font-bold hover:bg-slate-50">Cancel</button>
            <button className="bg-red-600 text-white px-4 py-1.5 rounded text-[10.2px] sm:text-[8.1px] font-bold flex items-center gap-1.5 hover:bg-red-700"><Plus className="w-3.5 h-3.5" /> Connect</button>
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <button onClick={() => setActiveIndex(0)} className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${activeIndex === 0 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 1" />
        <button onClick={() => setActiveIndex(1)} className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${activeIndex === 1 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 2" />
      </div>
    </div>
  );
};
export const ThreatDetectionMiniMockup = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }
  }, [isHovered]);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full h-auto aspect-[16/10] bg-white rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm relative">
      <div
        className="flex h-full w-[200%] transition-transform duration-700 ease-in-out"
        style={{ transform: 'translateX(-' + (activeIndex * 50) + '%)' }}
      >
        {/* View 1: Smart Alerts */}
        <div className="w-1/2 h-full flex flex-col bg-white">
          {/* Header */}
          <div className="border-b border-slate-100 flex items-center justify-between px-3 py-2 shrink-0">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-600" />
              <span className="text-[6.8px] font-black tracking-tight text-red-600">MATRIXVAULT</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between px-3 py-2 border-b border-slate-50 shrink-0 gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6 h-6 rounded bg-indigo-50 flex items-center justify-center text-indigo-500 shrink-0">
                <Bell className="w-3 h-3" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[8.5px] sm:text-[8.5px] font-bold text-slate-900 truncate">Smart Alerts</span>
                <span className="text-[5.1px] text-slate-500 truncate">Unified inbox for health, release, certificate, and change alerts across your landscape.</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="flex items-center gap-1 text-[7.6px] font-bold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.5 rounded hover:bg-slate-50 whitespace-nowrap"><Check className="w-2.5 h-2.5" /> Mark read <ChevronDown className="w-2.5 h-2.5" /></button>
              <button className="flex items-center gap-1 text-[7.6px] font-bold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.5 rounded hover:bg-slate-50 whitespace-nowrap"><Download className="w-2.5 h-2.5" /> Export</button>
              <button className="flex items-center gap-1 text-[7.6px] font-bold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.5 rounded hover:bg-slate-50 whitespace-nowrap"><Settings className="w-2.5 h-2.5" /> Settings</button>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden p-2 gap-2">
            {/* Left Sidebar - Filter Categories */}
            <div className="w-[30%] flex flex-col gap-1 border-r border-slate-100 pr-2 overflow-y-auto custom-scrollbar">
              <span className="text-[5.1px] font-bold text-slate-800 mb-0.5 pl-1.5 truncate">Filter by Category</span>

              <div className="flex items-center justify-between bg-indigo-50/50 rounded-md p-1.5 border-l-2 border-indigo-500 min-w-0">
                <div className="flex items-center gap-1.5 text-[7.6px] font-bold text-indigo-600 truncate"><Bell className="w-2.5 h-2.5 shrink-0" /> <span className="truncate">All Alerts</span></div>
                <span className="bg-indigo-100 text-indigo-600 font-bold px-1 py-0.5 rounded text-[6.8px] ml-1">128</span>
              </div>

              <div className="flex items-center justify-between hover:bg-slate-50 rounded-md p-1.5 cursor-pointer min-w-0">
                <div className="flex items-center gap-1.5 text-[7.6px] font-bold text-slate-700 truncate"><BellRing className="w-2.5 h-2.5 shrink-0 text-orange-500" /> <span className="truncate">Unread</span></div>
                <span className="bg-slate-100 text-slate-500 font-bold px-1 py-0.5 rounded text-[6.8px] ml-1">128</span>
              </div>

              {/* <div className="flex items-center justify-between hover:bg-slate-50 rounded-md p-1.5 cursor-pointer min-w-0">
                <div className="flex items-center gap-1.5 text-[7.6px] font-bold text-slate-700 truncate"><Activity className="w-2.5 h-2.5 shrink-0 text-red-500" /> <span className="truncate">RFC Health</span></div>
                <span className="bg-slate-100 text-slate-500 font-bold px-1 py-0.5 rounded text-[6.8px] ml-1">18</span>
              </div>

              <div className="flex items-center justify-between hover:bg-slate-50 rounded-md p-1.5 cursor-pointer min-w-0">
                <div className="flex items-center gap-1.5 text-[7.6px] font-bold text-slate-700 truncate"><Box className="w-2.5 h-2.5 shrink-0 text-blue-500" /> <span className="truncate">Product Release</span></div>
                <span className="bg-slate-100 text-slate-500 font-bold px-1 py-0.5 rounded text-[6.8px] ml-1">6</span>
              </div>

              <div className="flex items-center justify-between hover:bg-slate-50 rounded-md p-1.5 cursor-pointer min-w-0">
                <div className="flex items-center gap-1.5 text-[7.6px] font-bold text-slate-700 truncate"><Layers className="w-2.5 h-2.5 shrink-0 text-blue-400" /> <span className="truncate">Component Release</span></div>
                <span className="bg-slate-100 text-slate-500 font-bold px-1 py-0.5 rounded text-[6.8px] ml-1">42</span>
              </div>

              <div className="flex items-center justify-between hover:bg-slate-50 rounded-md p-1.5 cursor-pointer min-w-0">
                <div className="flex items-center gap-1.5 text-[7.6px] font-bold text-slate-700 truncate"><ShieldCheck className="w-2.5 h-2.5 shrink-0 text-amber-500" /> <span className="truncate">Certificate Expiry</span></div>
                <span className="bg-slate-100 text-slate-500 font-bold px-1 py-0.5 rounded text-[6.8px] ml-1">12</span>
              </div>

              <div className="flex items-center justify-between hover:bg-slate-50 rounded-md p-1.5 cursor-pointer min-w-0">
                <div className="flex items-center gap-1.5 text-[7.6px] font-bold text-slate-700 truncate"><RefreshCw className="w-2.5 h-2.5 shrink-0 text-emerald-500" /> <span className="truncate">Entity Change</span></div>
                <span className="bg-slate-100 text-slate-500 font-bold px-1 py-0.5 rounded text-[6.8px] ml-1">86</span>
              </div> */}
            </div>

            {/* Right Main Area */}
            <div className="flex-1 flex flex-col gap-2 relative min-w-0">
              {/* Search Bar Row */}
              <div className="flex flex-wrap items-center justify-between gap-1.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  <div className="border border-slate-200 rounded px-1.5 py-0.5 text-[9.6px] text-slate-600 flex items-center gap-1 font-medium bg-white">
                    All systems <ChevronDown className="w-2.5 h-2.5" />
                  </div>
                  <div className="border border-slate-200 rounded px-1.5 py-0.5 text-[9.6px] text-slate-400 flex items-center gap-1 font-medium bg-white">
                    <Calendar className="w-2.5 h-2.5 text-slate-400" /> From date
                  </div>
                  <span className="text-slate-400 text-[8.8px]">to</span>
                  <div className="border border-slate-200 rounded px-1.5 py-0.5 text-[9.6px] text-slate-400 flex items-center gap-1 font-medium bg-white">
                    <Calendar className="w-2.5 h-2.5 text-slate-400" /> To date
                  </div>
                </div>
                <div className="border border-slate-200 rounded px-1.5 py-0.5 text-[9.6px] text-slate-400 flex items-center gap-1 font-medium bg-white w-24">
                  <Search className="w-2.5 h-2.5" /> <span className="truncate">Search alerts...</span>
                </div>
              </div>

              {/* Alerts List */}
              <div className="flex flex-col border border-slate-100 rounded-lg overflow-y-auto custom-scrollbar flex-1 min-w-0">
                <div className="bg-slate-50/80 px-2.5 py-1 text-[9.6px] font-bold text-slate-500 border-b border-slate-100 sticky top-0 z-10">Today</div>
                <div className="flex items-center px-2.5 py-1.5 border-b border-slate-50 hover:bg-slate-50 cursor-pointer min-w-0 gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                  <div className="w-4 h-4 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0"><Activity className="w-2 h-2" /></div>
                  <span className="text-[8.5px] font-bold text-slate-800 truncate flex-shrink">RFC destination(s) failed</span>
                  <span className="text-[8.5px] text-slate-500 truncate flex-1 hidden">— System connection check failed</span>
                  <span className="text-indigo-500 text-[8.8px] font-bold shrink-0">SYS_CONN</span>
                  <span className="text-[8.5px] text-slate-500 font-medium shrink-0">10:15 AM</span>
                </div>

                <div className="bg-slate-50/80 px-2.5 py-1 text-[9.6px] font-bold text-slate-500 border-b border-slate-100 sticky top-0 z-10">Yesterday</div>
                <div className="flex items-center px-2.5 py-1.5 border-b border-slate-50 hover:bg-slate-50 cursor-pointer min-w-0 gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                  <div className="w-4 h-4 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0"><Activity className="w-2 h-2" /></div>
                  <span className="text-[8.5px] font-bold text-slate-800 truncate flex-shrink">Profile difference detected</span>
                  <span className="text-[8.5px] text-slate-500 truncate flex-1 hidden">— Critical value change</span>
                  <span className="text-indigo-500 text-[8.8px] font-bold shrink-0">PROFILE_CHG</span>
                  <span className="text-[8.5px] text-slate-500 font-medium shrink-0">04:20 PM</span>
                </div>

                {/* <div className="bg-slate-50/80 px-2.5 py-1 text-[9.6px] font-bold text-slate-500 border-b border-slate-100 sticky top-0 z-10">This Week</div>
                <div className="flex items-center px-2.5 py-1.5 border-b border-slate-50 hover:bg-slate-50 cursor-pointer min-w-0 gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></div>
                  <div className="w-4 h-4 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0"><ShieldCheck className="w-2 h-2" /></div>
                  <span className="text-[5.1px] font-bold text-slate-800 truncate flex-shrink">Certificate expiring soon</span>
                  <span className="text-[5.1px] text-slate-500 truncate flex-1 hidden">— SSL certificate will expire</span>
                  <span className="text-indigo-500 text-[8.8px] font-bold shrink-0">CERT_EXP</span>
                  <span className="text-[5.1px] text-slate-500 font-medium shrink-0">Mon, 11:30</span>
                </div>
                <div className="flex items-center px-2.5 py-1.5 border-b border-slate-50 hover:bg-slate-50 cursor-pointer min-w-0 gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                  <div className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0"><RefreshCw className="w-2 h-2" /></div>
                  <span className="text-[5.1px] font-bold text-slate-800 truncate flex-shrink">Entity changed</span>
                  <span className="text-[5.1px] text-slate-500 truncate flex-1 hidden">— New system added</span>
                  <span className="text-indigo-500 text-[8.8px] font-bold shrink-0">ENTITY_CHG</span>
                  <span className="text-[5.1px] text-slate-500 font-medium shrink-0">Mon, 09:45</span>
                </div> */}
                {/* <div className="py-1.5 flex justify-center text-[9.6px] font-bold text-slate-500 shrink-0">
                  Showing 4 of 128 alerts
                </div> */}
              </div>

              {/* FAB */}
              <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-indigo-600 shadow-lg flex items-center justify-center text-white hover:bg-indigo-700 cursor-pointer transition-transform hover:scale-105 z-20">
                <Bot className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* View 2: Real-Time Threat Detection */}
        <div className="w-1/2 h-full flex flex-col bg-[#fcfcfc]">
          {/* Header */}
          <div className="border-b border-slate-100 flex items-center px-3 py-2 shrink-0 bg-white">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-600" />
              <div className="flex flex-col leading-none">
                <span className="text-[6.8px] font-black tracking-tight text-red-600">MATRIXVAULT</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between px-3 py-2 border-b border-slate-50 shrink-0 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] z-10 relative gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6 h-6 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500 shrink-0">
                <Radio className="w-3 h-3" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[8.5px] font-bold text-slate-900 truncate">Real-Time Threat Detection</span>
                <span className="text-[5.1px] text-slate-500 truncate">Monitor critical T-Code activities and get alerted instantly</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="flex items-center gap-1 text-[9.6px] font-bold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.5 rounded hover:bg-slate-50 whitespace-nowrap"><History className="w-2.5 h-2.5" /> History</button>
              <button className="flex items-center gap-1 text-[9.6px] font-bold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.5 rounded hover:bg-slate-50 whitespace-nowrap"><Mail className="w-2.5 h-2.5" /> Email Logs</button>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden p-2 gap-2 min-w-0">
            {/* Left Sidebar */}
            <div className="w-[30%] flex flex-col gap-1.5 border border-slate-100 rounded-lg bg-white p-2 shadow-sm overflow-y-auto custom-scrollbar">
              <div className="flex items-center justify-between mb-0.5 gap-1 min-w-0">
                <span className="text-[5.1px] font-bold text-slate-800 truncate">Watch Rules &bull; 2</span>
                <button className="flex items-center gap-0.5 text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded text-[8.8px] font-bold hover:bg-indigo-100 whitespace-nowrap shrink-0"><Plus className="w-2 h-2" /> New</button>
              </div>

              <div className="border border-slate-200 rounded px-1.5 py-1 text-[9.6px] text-slate-400 flex items-center gap-1 font-medium bg-slate-50 mb-1 shrink-0 min-w-0">
                <Search className="w-2.5 h-2.5 shrink-0" /> <span className="truncate">Search rules...</span>
              </div>

              <div className="bg-emerald-50/30 border-l-2 border-emerald-500 border-t border-r border-b border-slate-100 rounded-r-md p-1.5 flex flex-col gap-1.5 cursor-pointer shadow-[0_2px_8px_-4px_rgba(16,185,129,0.3)] shrink-0 min-w-0">
                <div className="flex items-center justify-between gap-1 min-w-0">
                  <div className="flex items-center gap-1 min-w-0">
                    <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.8)] shrink-0"></div>
                    <span className="text-[5.1px] font-bold text-slate-800 truncate">Payment Transactions</span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-600 text-[8.8px] font-bold px-0.5 rounded shrink-0">Live</span>
                </div>
                <div className="flex flex-wrap items-center gap-0.5 text-[8.8px] font-bold text-slate-500">
                  <span className="bg-white border border-slate-200 px-1 rounded truncate">FBL1N</span>
                  <span className="bg-white border border-slate-200 px-1 rounded truncate">FB02</span>
                  <span className="bg-slate-100 px-1 rounded">+3</span>
                </div>
                <div className="flex items-center gap-1 text-[8.8px] text-slate-500 font-medium mt-0.5 truncate">
                  <Calendar className="w-2 h-2 shrink-0" /> <span className="truncate">May 22, 09:00 AM</span>
                </div>
              </div>

              <div className="bg-white border border-slate-100 rounded-md p-1.5 flex flex-col gap-1.5 cursor-pointer hover:border-slate-200 transition-colors shrink-0 min-w-0">
                <div className="flex items-center justify-between gap-1 min-w-0">
                  <div className="flex items-center gap-1 min-w-0">
                    <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_4px_rgba(59,130,246,0.8)] shrink-0"></div>
                    <span className="text-[5.1px] font-bold text-slate-800 truncate">User Access</span>
                  </div>
                  <span className="bg-blue-100 text-blue-600 text-[8.8px] font-bold px-0.5 rounded shrink-0">Live</span>
                </div>
                <div className="flex flex-wrap items-center gap-0.5 text-[8.8px] font-bold text-slate-500">
                  <span className="bg-slate-50 border border-slate-100 px-1 rounded truncate">SU01</span>
                  <span className="bg-slate-50 border border-slate-100 px-1 rounded truncate">SU10</span>
                  <span className="bg-slate-50 border border-slate-100 px-1 rounded">+2</span>
                </div>
                <div className="flex items-center gap-1 text-[8.8px] text-slate-500 font-medium mt-0.5 truncate">
                  <Calendar className="w-2 h-2 shrink-0" /> <span className="truncate">May 21, 10:00 AM</span>
                </div>
              </div>
            </div>

            {/* Right Main Area */}
            <div className="flex-1 flex flex-col gap-2 min-w-0">
              {/* Rule Detail Card */}
              <div className="bg-white border border-slate-100 shadow-sm rounded-lg p-2.5 flex flex-col relative shrink-0 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 min-w-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500 shrink-0">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                        <span className="text-[8.5px] font-bold text-slate-900 truncate">Payment Transactions</span>
                        <span className="bg-emerald-100 text-emerald-700 text-[8.8px] font-bold px-1 py-0.5 rounded shrink-0">Active</span>
                        <span className="text-emerald-500 font-bold text-[9.6px] flex items-center gap-0.5 shrink-0"><div className="w-1 h-1 rounded-full bg-emerald-500"></div> Live</span>
                      </div>
                      <span className="text-[5.1px] text-slate-400 font-medium truncate">FIN_CORE</span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button className="w-5 h-5 rounded border border-emerald-200 text-emerald-500 flex items-center justify-center hover:bg-emerald-50"><EyeOff className="w-2.5 h-2.5" /></button>
                    <button className="w-5 h-5 rounded border border-slate-200 text-slate-400 flex items-center justify-center hover:text-slate-600"><Edit2 className="w-2.5 h-2.5" /></button>
                    <button className="w-5 h-5 rounded border border-red-200 text-red-400 flex items-center justify-center hover:bg-red-50"><Trash2 className="w-2.5 h-2.5" /></button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-2.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-1 text-[9.6px] font-bold text-slate-600">
                    <span className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded">FBL1N</span>
                    <span className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded">FB02</span>
                    <span className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded">FB05</span>
                    <span className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded">FB60</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9.6px] font-medium text-slate-500 truncate">
                    <Calendar className="w-2.5 h-2.5 shrink-0" /> <span className="truncate">May 22, 2026, 09:00 AM &rarr; 05:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9.6px] font-medium text-slate-500 shrink-0">
                    <Mail className="w-2.5 h-2.5" /> 2 recipients
                  </div>
                </div>
              </div>

              {/* Logs Area */}
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[6.8px] font-bold text-slate-800 mb-2 truncate">Latest T-Code Logs</span>

                <div className="flex-1 flex flex-col items-center justify-center pb-4">
                  <div className="w-20 h-20 opacity-80 mb-1 relative shrink-0">
                    {/* Simple CSS-based folder/search illustration */}
                    <div className="absolute inset-0 bg-indigo-100 rounded-md transform -rotate-6"></div>
                    <div className="absolute inset-2 bg-indigo-200 rounded-md transform rotate-3"></div>
                    <div className="absolute inset-3 bg-white rounded-md border border-indigo-100 shadow-sm flex flex-col items-center justify-center gap-1.5">
                      <div className="w-6 h-1 bg-indigo-100 rounded-full"></div>
                      <div className="w-10 h-1 bg-indigo-100 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-1 right-1 w-7 h-7 bg-indigo-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white">
                      <Search className="w-3 h-3" />
                    </div>
                    <Sparkles className="absolute -top-1 -left-1 w-4 h-4 text-indigo-400" />
                  </div>
                  <span className="text-[7.7px] font-bold text-slate-800 mb-0.5 text-center px-2">No triggers recorded for this rule yet.</span>
                  <span className="text-[5.5px] text-slate-500 font-medium text-center px-2">Detected activities will appear here in real-time.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
        <button onClick={() => setActiveIndex(0)} className={'w-1.5 h-1.5 rounded-full transition-colors ' + (activeIndex === 0 ? 'bg-indigo-600' : 'bg-slate-300')}></button>
        <button onClick={() => setActiveIndex(1)} className={'w-1.5 h-1.5 rounded-full transition-colors ' + (activeIndex === 1 ? 'bg-indigo-600' : 'bg-slate-300')}></button>
      </div>
    </div>
  );
};


export const ExpiryMiniMockup = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }
  }, [isHovered]);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm relative">
      <div
        className="flex h-full w-[200%] transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
      >
        {/* View 1: Security Notes */}
        <div className="w-1/2 h-full flex flex-col bg-white">
          <div className="bg-white px-6 sm:px-4 py-5 sm:py-4 flex items-center justify-between border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-4 sm:gap-3">
              <div className="w-10 sm:w-8 h-10 sm:h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 border border-slate-100">
                <FileText className="w-5 sm:w-4 h-5 sm:h-4" />
              </div>
              <div>
                <div className="text-[15.3px] sm:text-[11.9px] font-bold text-slate-900">Security Notes</div>
                <div className="text-[11px] sm:text-[8.5px] text-slate-500 font-medium mt-0.5">SAP security notes and patch status across your landscape</div>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-4 bg-[#f8fafc] flex-1 flex flex-col gap-4 sm:gap-3 overflow-hidden">
            <div className="flex gap-4 sm:gap-3 shrink-0">
              <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4 sm:p-3 shadow-sm flex flex-col gap-1 sm:gap-2">
                <div className="flex items-center gap-2"><FileText className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-slate-400" /><span className="text-[10.2px] sm:text-[8.1px] font-bold text-slate-600">Total Notes</span></div>
                <div className="text-[20.4px] sm:text-[15.3px] font-black text-slate-700">68</div>
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4 sm:p-3 shadow-sm flex flex-col gap-1 sm:gap-2">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-slate-400" /><span className="text-[10.2px] sm:text-[8.1px] font-bold text-slate-600">Implemented</span></div>
                <div className="text-[20.4px] sm:text-[15.3px] font-black text-slate-700">14</div>
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4 sm:p-3 shadow-sm flex flex-col gap-1 sm:gap-2">
                <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-slate-400" /><span className="text-[10.2px] sm:text-[8.1px] font-bold text-slate-600">Can Be Implemented</span></div>
                <div className="text-[20.4px] sm:text-[15.3px] font-black text-slate-700">19</div>
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4 sm:p-3 shadow-sm flex flex-col gap-1 sm:gap-2">
                <div className="flex items-center gap-2"><XCircle className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-slate-400" /><span className="text-[10.2px] sm:text-[8.1px] font-bold text-slate-600">Cannot Be Impl...</span></div>
                <div className="text-[20.4px] sm:text-[15.3px] font-black text-slate-700">26</div>
              </div>
            </div>

            <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
              <div className="grid grid-cols-12 gap-2 px-5 sm:px-4 py-3 sm:py-2.5 border-b border-slate-100 bg-slate-50 text-[9.4px] sm:text-[6.8px] font-bold text-slate-500">
                <div className="col-span-2">Note ID</div>
                <div className="col-span-5">Title</div>
                <div className="col-span-2">Priority</div>
                <div className="col-span-1">CVSS</div>
                <div className="col-span-2">Status</div>
              </div>
              <div className="flex-1 overflow-hidden">
                {[
                  { id: "2415632", title: "[CVE-2025-11234] SQL Injection Vulnerability in SAP NetWeaver", pri: "Critical", cvss: "9.3", status: "Cannot Be Implemented", priCol: "text-slate-700 bg-slate-100 border border-slate-200" },
                  { id: "2414621", title: "[CVE-2025-22345] Missing Authorization Check in SAP Fiori App", pri: "High", cvss: "7.9", status: "Can Be Implemented", priCol: "text-slate-600 bg-slate-50 border border-slate-200" },
                  { id: "2413587", title: "[CVE-2025-33456] Cross-Site Scripting in SAP UI5 Component", pri: "Medium", cvss: "5.4", status: "Implemented", priCol: "text-slate-500 bg-slate-50 border border-slate-100" },
                  { id: "2412789", title: "[CVE-2025-44567] Information Disclosure in SAP Business Objects", pri: "Low", cvss: "3.1", status: "Incomplete", priCol: "text-slate-500 bg-slate-50 border border-slate-100" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-12 gap-2 px-5 sm:px-4 py-4 sm:py-3 border-b border-slate-50 items-center hover:bg-slate-50 text-[10.2px] sm:text-[8.1px]">
                    <div className="col-span-2 font-bold text-slate-700">{row.id}</div>
                    <div className="col-span-5 text-slate-600 font-medium pr-4 truncate">{row.title}</div>
                    <div className="col-span-2 flex items-center gap-1.5"><span className={`px-2 py-0.5 rounded font-bold flex items-center gap-1.5 ${row.priCol}`}>{row.pri}</span></div>
                    <div className="col-span-1 font-mono font-bold text-slate-700">{row.cvss}</div>
                    <div className={`col-span-2 font-bold flex items-center gap-1.5 px-2 py-0.5 rounded border ${row.status.includes('Cannot') ? 'text-red-600 bg-red-50 border-red-100' : 'text-slate-600 bg-slate-50 border-slate-200'}`}>
                      {row.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* View 2: Patch & Component Tracking */}
        <div className="w-1/2 h-full flex flex-col bg-white">
          <div className="bg-white px-6 sm:px-4 pt-5 sm:pt-4 border-b border-slate-200 shrink-0">
            <div className="flex items-center gap-4 sm:gap-3 mb-6 sm:mb-5">
              <div className="w-10 sm:w-8 h-10 sm:h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 border border-slate-100">
                <Settings className="w-5 sm:w-4 h-5 sm:h-4" />
              </div>
              <div>
                <div className="text-[15.3px] sm:text-[11.9px] font-bold text-slate-900">Software Component & Kernel Check</div>
                <div className="text-[11px] sm:text-[8.5px] text-slate-500 font-medium mt-0.5">Overview of SAP software components, kernel versions and installed products</div>
              </div>
            </div>
            <div className="flex gap-8 sm:gap-6 text-[11px] sm:text-[8.5px] font-bold">
              <div className="text-slate-500 pb-3">Installed Products</div>
              <div className="text-slate-800 border-b-2 border-slate-800 pb-3">Installed Software</div>
              <div className="text-slate-500 pb-3">Kernel Info</div>
            </div>
          </div>

          <div className="p-5 sm:p-4 bg-[#f8fafc] flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
              <div className="grid grid-cols-12 gap-2 px-5 sm:px-4 py-3 sm:py-2.5 border-b border-slate-100 bg-slate-50 text-[9.4px] sm:text-[6.8px] font-bold text-slate-500">
                <div className="col-span-2">Component</div>
                <div className="col-span-2">System</div>
                <div className="col-span-1">Release</div>
                <div className="col-span-1">Latest Release</div>
                <div className="col-span-1">SP Level</div>
                <div className="col-span-2">Support Package Stack</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-1">Description</div>
              </div>
              <div className="flex-1 overflow-hidden">
                {[
                  { comp: "FI-GL", sys: "ERP - S/4HANA", rel: "702", lat: "704", sp: "0012", stack: "SAPK-70212INFI_GL", status: "Update Available", desc: "Financial Accounting" },
                  { comp: "MM-IM", sys: "ERP - S/4HANA", rel: "702", lat: "704", sp: "0008", stack: "SAPK-70208INMM_IM", status: "Up To Date", desc: "Inventory Management" },
                  { comp: "SD-SALES", sys: "ERP - S/4HANA", rel: "701", lat: "703", sp: "0009", stack: "SAPK-70109INSD_SLS", status: "Update Available", desc: "Sales and Distribution" },
                  // { comp: "HR-HCM", sys: "ERP - S/4HANA", rel: "600", lat: "602", sp: "0011", stack: "SAPK-60011INHR_HCM", status: "Up To Date", desc: "Human Capital Management" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-12 gap-2 px-5 sm:px-4 py-4 sm:py-3 border-b border-slate-50 items-center hover:bg-slate-50 text-[10.2px] sm:text-[8.1px]">
                    <div className="col-span-2 font-bold text-slate-800">{row.comp}</div>
                    <div className="col-span-2 text-slate-600 font-medium">{row.sys}</div>
                    <div className="col-span-1 text-slate-600">{row.rel}</div>
                    <div className="col-span-1 text-slate-800 font-bold">{row.lat}</div>
                    <div className="col-span-1 text-slate-600">{row.sp}</div>
                    <div className="col-span-2 font-mono text-[9.4px] sm:text-[6.8px] text-slate-500">{row.stack}</div>
                    <div className={`col-span-2 font-bold flex items-center gap-1.5 ${row.status === "Update Available" ? "text-amber-600" : "text-slate-600"}`}>
                      {row.status === "Up To Date" ? <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                      {row.status}
                    </div>
                    <div className="col-span-1 text-slate-500 truncate">{row.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <button onClick={() => setActiveIndex(0)} className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${activeIndex === 0 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 1" />
        <button onClick={() => setActiveIndex(1)} className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${activeIndex === 1 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 2" />
      </div>
    </div>
  );
};

export const ConfigDriftMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
    <div className="bg-white border-b border-slate-200 px-5 sm:px-2.5 py-3 sm:py-1.5 flex max-sm:flex-wrap items-center justify-between">
      <div className="flex items-center gap-3 sm:gap-1.5">
        <div className="w-8 sm:w-4 h-8 sm:h-4 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[18.1px] sm:text-[7.2px] text-red-500">
          📡
        </div>
        <div>
          <div className="text-[19.1px] sm:text-[7.7px] font-extrabold text-slate-900">
            Real-Time Threat Detection
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-1">
        <span className="text-[12.8px] sm:text-[5.1px] text-slate-600 bg-white border border-slate-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded font-bold flex items-center gap-1 sm:gap-0.5">
          ⏱ History
        </span>
      </div>
    </div>
    <div className="flex flex-1 min-h-0">
      {/* Side nav */}
      <div className="w-1/3 min-w-0 border-r border-slate-200 bg-slate-50 p-3 sm:p-1.5">
        <div className="flex max-sm:flex-wrap items-center justify-between mb-1.5">
          <span className="text-[12.8px] sm:text-[5.1px] font-bold text-slate-700">
            Watch Rules
          </span>
          <span className="text-[11.7px] sm:text-[4.7px] font-bold text-white bg-red-600 px-2 sm:px-1 rounded">
            + New
          </span>
        </div>
        <div className="bg-white border border-slate-200 rounded p-2 sm:p-1 mb-1 shadow-sm">
          <div className="text-[13.8px] sm:text-[5.5px] font-bold text-red-600 flex items-center gap-2 sm:gap-1 mb-0.5">
            <div className="w-2 sm:w-1 h-2 sm:h-1 rounded-full bg-red-500"></div> User
            Creation
          </div>
          <div className="text-[10.6px] sm:text-[4.3px] font-mono text-slate-500">SU01</div>
        </div>
      </div>
      {/* Main content */}
      <div className="w-2/3 min-w-0 bg-white p-4 sm:p-2">
        <div className="flex items-center gap-2 sm:gap-1 mb-1">
          <div className="text-[19.1px] sm:text-[7.7px] font-extrabold text-slate-900">
            User Creation
          </div>
          <span className="text-[11.7px] sm:text-[4.7px] font-bold text-emerald-600 bg-emerald-50 px-2 sm:px-1 rounded">
            Active
          </span>
        </div>
        <div className="bg-red-50 border border-red-100 rounded px-3 sm:px-1.5 py-2 sm:py-1 mb-2">
          <div className="text-[12.8px] sm:text-[5.1px] text-red-600 font-bold flex items-center gap-2 sm:gap-1">
            <div className="w-3 sm:w-1.5 h-3 sm:h-1.5 rounded-full bg-red-500 flex items-center justify-center text-white text-[8.5px] sm:text-[4px]">
              !
            </div>
            Triggered 2m ago by SOLMAN_ADMIN (SU01)
          </div>
        </div>
        <div className="text-[12.8px] sm:text-[5.1px] font-bold text-slate-700 border-b border-slate-200 pb-1 sm:pb-0.5 mb-1">
          Latest T-Code Logs
        </div>
        <div className="bg-slate-50 border border-slate-100 rounded p-3 sm:p-1.5 flex gap-3 sm:gap-1.5 items-start">
          <div className="w-10 sm:w-5 h-10 sm:h-5 rounded bg-indigo-600 text-white flex items-center justify-center text-[18.1px] sm:text-[7.2px] font-bold shrink-0">
            SO
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 sm:gap-1 mb-0.5">
              <span className="text-[15.9px] sm:text-[6.4px] font-bold text-slate-900">
                SOLMAN_ADMIN
              </span>
              <span className="text-[10.6px] sm:text-[4.3px] font-bold text-white bg-red-600 px-1 sm:px-0.5 rounded">
                Latest
              </span>
            </div>
            <div className="text-[12.8px] sm:text-[5.1px] text-slate-700">
              Transaction SU01 started.
            </div>
          </div>
          <div className="text-right">
            <div className="text-[12.8px] sm:text-[5.1px] font-mono font-bold text-slate-700 bg-slate-200 px-2 sm:px-1 rounded inline-block mb-1">
              SU01
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const LiveThreatsMiniMockup = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }
  }, [isHovered]);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm relative">
      <div
        className="flex h-full w-[200%] transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
      >
        {/* View 1: Profile Parameter Analysis */}
        <div className="w-1/2 h-full flex flex-col bg-white overflow-hidden">
          <div className="bg-white border-b border-slate-200 px-6 sm:px-3 py-4 sm:py-2 flex max-sm:flex-wrap items-center justify-between shrink-0">
            <div className="flex items-center gap-3 sm:gap-1.5">
              <div className="w-8 sm:w-4 h-8 sm:h-4 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[23.6px] sm:text-[7.2px] text-red-500">
                ⚙
              </div>
              <div>
                <div className="text-[19.1px] sm:text-[7.7px] font-extrabold text-slate-900">
                  Profile Parameter Analysis
                </div>
                <div className="text-[11.7px] sm:text-[4.7px] text-slate-500">
                  Inspect SAP instance, default and start profiles side by side
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 p-4 sm:p-2 gap-4 sm:gap-2 overflow-hidden bg-[#f8fafc]">


            <div className="bg-white border border-slate-200 rounded overflow-hidden flex-1 flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <div className="grid grid-cols-12 gap-2 sm:gap-1 px-4 sm:px-2 py-2 sm:py-1 bg-slate-50 border-b border-slate-200 text-[17.2px] sm:text-[4.7px] font-bold text-slate-500 shrink-0">
                <div className="col-span-3">Parameter</div>
                <div className="col-span-3">Current Value</div>
                <div className="col-span-3">SAP Recommended</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-2">Comment</div>
              </div>
              <div className="flex-1 overflow-hidden">
                {[
                  { p: "Autostart", c: "<not set>", r: "0", status: "OK", sCol: "text-emerald-600", comment: "Automatic instance start..." },
                  { p: "CPU_CORES", c: "<not set>", r: "10", status: "OK", sCol: "text-emerald-600", comment: "Processor cores used..." },
                  { p: "DIR_BINARY", c: "/usr/sap/PRD/D00/exe", r: "/usr/sap/PRD/SYS...", status: "Differs", sCol: "text-red-600", comment: "Path where binaries..." },
                  { p: "DIR_CCMS", c: "/usr/sap/ccms", r: "/usr/sap/ccms", status: "OK", sCol: "text-emerald-600", comment: "Root directory for..." },
                  { p: "login/min_password_lng", c: "8", r: "8", status: "OK", sCol: "text-emerald-600", comment: "Minimum password length" },
                  { p: "rdisp/max_wprun_time", c: "3600", r: "600", status: "Differs", sCol: "text-red-600", comment: "Max work process run time" },

                ].map((row, i) => (
                  <div key={i} className={`grid grid-cols-12 gap-2 sm:gap-1 px-4 sm:px-2 py-2 sm:py-1.5 border-b border-slate-50 text-[16.1px] sm:text-[4.3px] items-center hover:bg-slate-50 transition-colors`}>
                    <div className="col-span-3 font-bold text-slate-800">{row.p}</div>
                    <div className="col-span-3 font-mono text-blue-600">{row.c}</div>
                    <div className="col-span-3 font-mono text-slate-500">{row.r}</div>
                    <div className={`col-span-1 font-bold ${row.sCol}`}>{row.status}</div>
                    <div className="col-span-2 text-slate-500 truncate">{row.comment}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* View 2: Connect New System Modal (RFC Native) */}
        <div className="w-1/2 h-full flex flex-col bg-white overflow-hidden">
          {/* Modal Header */}
          <div className="px-4 py-2 sm:px-3 sm:py-1.5 border-b border-slate-100 flex justify-between items-center shrink-0">
            <h2 className="text-[11.9px] sm:text-[9.4px] font-bold text-slate-800">Connect New System</h2>
            <X className="w-4 h-4 sm:w-3 sm:h-3 text-slate-400 cursor-pointer" />
          </div>

          <div className="p-6 sm:p-4 flex flex-col gap-5 sm:gap-3 flex-1 overflow-hidden">
            {/* System Configuration (Containing SAP Connection fields) */}
            <div className="flex flex-col gap-3 sm:gap-2">
              <div className="flex items-center gap-2 bg-slate-50 p-2 rounded text-[18.5px] sm:text-[8.5px] font-bold text-slate-700">
                <Database className="w-4 h-4 text-red-500" /> System Configuration
              </div>

              <div className="flex gap-2">
                <button className="border border-slate-200 bg-white px-4 py-1.5 rounded-full text-[16.9px] sm:text-[6.8px] font-bold text-slate-600 flex items-center gap-1 hover:bg-slate-50">ODATA <span className="text-slate-400 font-medium">REST</span></button>
                <button className="bg-blue-600 border border-blue-600 text-white px-4 py-1.5 rounded-full text-[16.9px] sm:text-[6.8px] font-bold flex items-center gap-1">RFC <span className="text-blue-200 font-medium">Native</span></button>
                <button className="border border-slate-200 bg-white px-4 py-1.5 rounded-full text-[16.9px] sm:text-[6.8px] font-bold text-slate-600 hover:bg-slate-50">BTP XSUAA</button>
              </div>

              <div className="flex flex-col gap-3 sm:gap-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9.4px] sm:text-[6.8px] font-medium text-slate-500">Application Server Host</label>
                  <input type="text" placeholder="sapdev.mycompany.com" className="border border-slate-200 rounded px-3 py-1.5 text-[17.7px] sm:text-[8.1px] bg-slate-50/50" />
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9.4px] sm:text-[6.8px] font-medium text-slate-500">System Number</label>
                    <input type="text" placeholder="00" className="border border-slate-200 rounded px-3 py-1.5 text-[17.7px] sm:text-[8.1px] bg-slate-50/50" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9.4px] sm:text-[6.8px] font-medium text-slate-500">Language</label>
                    <input type="text" placeholder="EN" className="border border-slate-200 rounded px-3 py-1.5 text-[17.7px] sm:text-[8.1px] bg-slate-50/50" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9.4px] sm:text-[6.8px] font-medium text-slate-500">RFC User</label>
                    <input type="text" placeholder="RFC_SERVICE_USER" className="border border-slate-200 rounded px-3 py-1.5 text-[17.7px] sm:text-[8.1px] bg-slate-50/50" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9.4px] sm:text-[6.8px] font-medium text-slate-500">RFC Password</label>
                    <input type="password" placeholder="********" className="border border-slate-200 rounded px-3 py-1.5 text-[17.7px] sm:text-[8.1px] bg-slate-50/50" />
                  </div>
                </div>

                {/* <div className="bg-sky-50 border border-sky-100 rounded p-2 text-[16.9px] sm:text-[6.8px] text-sky-600 font-medium mt-1">
                  Requires SAP NW RFC SDK or RFC_HTTP_GATEWAY_URL configured.
                </div> */}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-4 py-2 sm:px-3 sm:py-1.5 border-t border-slate-100 flex justify-end gap-2 bg-white shrink-0">
            <button className="border border-slate-200 bg-white text-slate-700 px-3 py-1 rounded text-[16px] sm:text-[6.8px] font-bold hover:bg-slate-50">Cancel</button>
            <button className="bg-red-600 text-white px-3 py-1 rounded text-[16px] sm:text-[6.8px] font-bold flex items-center gap-1 hover:bg-red-700">Create System</button>
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-1 sm:bottom-1.5 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <button onClick={() => setActiveIndex(0)} className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${activeIndex === 0 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 1" />
        <button onClick={() => setActiveIndex(1)} className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${activeIndex === 1 ? 'bg-slate-800' : 'bg-slate-300'} hover:bg-slate-600`} aria-label="Go to slide 2" />
      </div>
    </div>
  );
};
