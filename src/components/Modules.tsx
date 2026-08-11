import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
 ShieldCheck, Split, Target, Brain, FileText, UserCheck,
 CheckCircle2, XCircle, Search, Sparkles, ArrowRight,
 Users, Eye, Sliders, Activity, Settings, Wrench, Shield,
 Clock, Inbox, UsersRound, Route, Flame, ActivitySquare,
 CheckSquare, ShieldAlert, Database, FileBarChart, PieChart,
 AlertTriangle, HardDrive, Key, RefreshCw, Bell,
 ArrowUp, ArrowDown, KeyRound, Bug, Trophy, Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
 DirectoryCatalogMiniMockup,
 CertificationsMiniMockup,
 SimulationMiniMockup,
 RemediationMiniMockup,
 RiskIntelMiniMockup,
 AccessTrackingMiniMockup,
 WorkspaceReportingMiniMockup,
 SessionMonitoringMiniMockup,
 SafeguardsAuditMiniMockup,
 ApprovalsRoutingMiniMockup,
 VulnDashboardMiniMockup,
 PatchingMiniMockup,
 ExpiryMiniMockup,
 ConfigDriftMiniMockup,
 LiveThreatsMiniMockup
} from './MiniMockups';

const roleRadarStats = [
 { label: 'SoD Violations', value: '42', delta: '-12%', down: true, Icon: ShieldAlert, color: 'text-red-400', bg: 'bg-red-500/10' },
 { label: 'Critical Access', value: '18', delta: '-5%', down: true, Icon: KeyRound, color: 'text-amber-400', bg: 'bg-amber-500/10' },
 { label: 'Fraud Risk', value: '7', delta: '+2', down: false, Icon: Flame, color: 'text-red-400', bg: 'bg-red-500/10' },
 { label: 'Vulnerabilities', value: '23', delta: '-8%', down: true, Icon: Bug, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
];

const roleRadarUsers = [
 { name: 'Franklin Keller', dept: 'Finance', score: 92, scoreColor: 'text-red-400 bg-red-500/10 border-red-500/20' },
 { name: 'Fernanda Santos', dept: 'Procurement', score: 78, scoreColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
 { name: 'Michael Davis', dept: 'IT Basis', score: 64, scoreColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
];

const RoleRadarMockup = () => (
 <div className="w-full bg-white text-slate-500 rounded-t-2xl flex flex-col font-sans overflow-hidden border border-slate-200 shadow-2xl h-full">
 {/* Top Header Navigation */}
 <div className="bg-white border-b border-slate-200 px-3 py-2 flex items-center justify-between text-[10px] font-medium shrink-0">
 <div className="flex items-center gap-4">
 {/* Logo */}
 <div className="flex items-center gap-1">
 <div className="w-4 h-4 bg-red-600 rounded flex items-center justify-center text-white font-black text-[8px]">MV</div>
 <span className="font-extrabold text-slate-900 tracking-tight text-[11px] hidden sm:block">MATRIXVAULT</span>
 </div>
 
 {/* Menu items */}
 <div className="hidden xl:flex items-center gap-3 text-slate-500 font-bold">
 <span className="text-slate-900 border-b-2 border-red-600 pb-1">Dashboard</span>
 <span className="hover:text-slate-900 transition-colors cursor-pointer">Access Control</span>
 <span className="flex items-center gap-0.5 hover:text-slate-900 transition-colors cursor-pointer">Governance <span className="bg-red-50 text-red-600 border border-red-200 px-1 py-0.2 rounded-full text-[7px]">99+</span></span>
 <span className="hover:text-slate-900 transition-colors cursor-pointer">Workflow</span>
 <span className="hover:text-slate-900 transition-colors cursor-pointer">Analytics</span>
 <span className="flex items-center gap-0.5 hover:text-slate-900 transition-colors cursor-pointer">Vulnerabilities <span className="bg-red-50 text-red-600 border border-red-200 px-1 py-0.2 rounded-full text-[7px]">17</span></span>
 <span className="hover:text-slate-900 transition-colors cursor-pointer">Operations</span>
 </div>
 </div>

 {/* User Info & Actions */}
 <div className="flex items-center gap-3">
 <Search className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer hidden sm:block" />
 <Bell className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer" />
 <div className="flex items-center gap-1.5 pl-1.5 sm:border-l border-slate-200">
 <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-[8px] text-slate-600">G</div>
 <div className="text-left leading-none hidden sm:block">
 <div className="font-bold text-slate-900 text-[8px]">Gowtham</div>
 <div className="text-[7px] text-red-600">Admin</div>
 </div>
 </div>
 </div>
 </div>

 {/* Sub-Header */}
 <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex flex-col md:flex-row items-start md:items-center justify-between shrink-0 gap-2 md:gap-0">
 <div className="flex flex-wrap items-center gap-2">
 <span className="font-black text-xs text-slate-900">Risk Intelligence</span>
 <div className="bg-white border border-slate-200 text-slate-700 rounded px-1.5 py-0.5 text-[8px] font-bold flex items-center gap-1 cursor-pointer">
 All Systems <span className="text-[6px]">▼</span>
 </div>
 <div className="text-[8px] text-red-600 bg-red-50 px-2 py-0.5 rounded-full font-bold flex items-center gap-1 border border-red-100 max-w-full">
 <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse shrink-0"></span>
 <span className="truncate">980 critical findings require immediate attention</span>
 <span className="text-slate-500 font-normal hidden sm:inline shrink-0">· Last scan: 9m ago</span>
 </div>
 </div>
 <div className="flex items-center gap-1.5">
 <button className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-[8px] px-2.5 py-1 rounded shadow-sm flex items-center gap-1">
 🔥 Run Scan
 </button>
 <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-extrabold text-[8px] px-2.5 py-1 rounded flex items-center gap-1 shadow-sm">
 ↻ Refresh
 </button>
 </div>
 </div>

 {/* Dashboard Content Container */}
 <div className="p-3 pb-0 flex flex-col gap-3 flex-1">
 {/* 6 Metrics Grid */}
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
 {[
 { label: "Total Open", value: "1,325", sub: "all categories", color: "text-red-600", border: "border-red-200 bg-red-50", highlight: true },
 { label: "SoD Violations", value: "1,212", sub: "segregation of duties", color: "text-amber-600", border: "border-slate-200 bg-white" },
 { label: "Critical Access", value: "113", sub: "privileged access", color: "text-red-600", border: "border-slate-200 bg-white" },
 { label: "Fraud Risk", value: "0", sub: "fraud indicators", color: "text-slate-600", border: "border-slate-200 bg-white" },
 { label: "Vulnerabilities", value: "0", sub: "system weaknesses", color: "text-slate-600", border: "border-slate-200 bg-white" },
 { label: "Mitigated", value: "0", sub: "active controls", color: "text-slate-600", border: "border-slate-200 bg-white" }
 ].map((m, i) => (
 <div key={i} className={`border rounded-xl p-2 flex flex-col justify-between shadow-sm ${m.border}`}>
 <span className="text-[7px] text-slate-500 font-bold tracking-wider">{m.label}</span>
 <div className="my-1 text-base font-black leading-none tracking-tight">
 <span className={m.color}>{m.value}</span>
 </div>
 <span className="text-[6px] text-slate-500 leading-none">{m.sub}</span>
 </div>
 ))}
 </div>

 {/* Charts Row */}
 <div className="grid grid-cols-1 lg:grid-cols-10 gap-3">
 {/* Detection Trend (60%) */}
 <div className="col-span-1 lg:col-span-6 bg-white border border-slate-200 rounded-xl p-3 flex flex-col justify-between shadow-sm">
 <div className="flex items-center justify-between pb-1 border-b border-slate-100">
 <span className="text-[8px] font-bold text-slate-900">Detection Trend <span className="text-slate-500 font-normal">— 30 days</span></span>
 </div>
 {/* Chart SVG */}
 <div className="h-24 w-full mt-2 relative">
 <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
 {/* Grid Lines */}
 <line x1="0" y1="10" x2="100" y2="10" stroke="#e2e8f0" strokeWidth="0.5" />
 <line x1="0" y1="20" x2="100" y2="20" stroke="#e2e8f0" strokeWidth="0.5" />
 <line x1="0" y1="30" x2="100" y2="30" stroke="#e2e8f0" strokeWidth="0.5" />
 {/* Spike Area */}
 <path d="M 0 40 L 78 40 L 82 15 L 86 40 L 100 40 L 100 40 L 0 40" fill="rgba(239,68,68,0.1)" />
 <path d="M 0 40 L 78 40 L 82 15 L 86 40 L 100 40" stroke="#ef4444" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
 </svg>
 <div className="flex justify-between text-[6px] text-slate-500 mt-1">
 <span>11/07</span>
 <span>25/07</span>
 <span>09/08</span>
 </div>
 </div>
 </div>

 {/* Category Breakdown (40%) */}
 <div className="col-span-1 lg:col-span-4 bg-white border border-slate-200 rounded-xl p-3 flex flex-col shadow-sm">
 <span className="text-[8px] font-bold text-slate-900 border-b border-slate-100 pb-1">Category Breakdown <span className="text-slate-500 font-normal">— open by type</span></span>
 <div className="mt-2.5 space-y-2 flex-1 justify-center flex flex-col">
 {/* SoD Violations */}
 <div>
 <div className="flex justify-between items-center text-[7px] font-bold text-slate-700 mb-0.5">
 <span>SoD Violations</span>
 <span className="text-slate-900"><span className="text-red-600 font-black">889 C</span> <span className="text-amber-500 font-black ml-1">323 H</span> <span className="ml-1 text-slate-500">1,212</span></span>
 </div>
 <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
 <div className="h-full bg-red-500 w-[70%]"></div>
 <div className="h-full bg-amber-500 w-[30%]"></div>
 </div>
 </div>
 {/* Critical Access */}
 <div>
 <div className="flex justify-between items-center text-[7px] font-bold text-slate-700 mb-0.5">
 <span>Critical Access</span>
 <span className="text-slate-900"><span className="text-red-600 font-black">91 C</span> <span className="text-amber-500 font-black ml-1">22 H</span> <span className="ml-1 text-slate-500">113</span></span>
 </div>
 <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
 <div className="h-full bg-red-500 w-[80%]"></div>
 <div className="h-full bg-amber-500 w-[20%]"></div>
 </div>
 </div>
 {/* Fraud Risk */}
 <div>
 <div className="flex justify-between items-center text-[7px] font-bold text-slate-500 mb-0.5">
 <span>Fraud Risk</span>
 <span className="font-bold text-slate-500">0</span>
 </div>
 <div className="w-full h-1 bg-slate-100 rounded-full"></div>
 </div>
 {/* Vulnerabilities */}
 <div>
 <div className="flex justify-between items-center text-[7px] font-bold text-slate-500 mb-0.5">
 <span>Vulnerabilities</span>
 <span className="font-bold text-slate-500">0</span>
 </div>
 <div className="w-full h-1 bg-slate-100 rounded-full"></div>
 </div>
 </div>
 </div>
 </div>

 {/* Tables Row */}
 <div className="grid grid-cols-1 lg:grid-cols-10 gap-3 mb-2">
 {/* Open Findings (55%) */}
 <div className="col-span-1 lg:col-span-6 bg-white border border-slate-200 rounded-xl p-3 flex flex-col shadow-sm">
 <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-2">
 <div className="flex items-center gap-1.5">
 <span className="text-[8px] font-bold text-slate-900">Open Findings</span>
 <span className="bg-slate-100 text-slate-600 text-[6px] px-1 rounded-full font-bold border border-slate-200">100</span>
 </div>
 <span className="text-[6px] text-red-600 font-bold hover:underline cursor-pointer">Full table →</span>
 </div>

 <div className="relative mb-2">
 <input type="text" placeholder="Search findings..." className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-0.5 text-[7px] outline-none text-slate-700 placeholder-slate-400" readOnly />
 </div>

 <div className="space-y-1">
 {[
 { role: "BASISADMIN", sys: "MSQ System" },
 { role: "BASIS_FF_05", sys: "MSQ System" },
 { role: "BOOMI", sys: "MSQ System" }
 ].map((f, i) => (
 <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-slate-100 hover:bg-slate-50 p-1.5 rounded transition-colors text-[7px] gap-2 sm:gap-0">
 <div className="flex items-center gap-2">
 <span className="bg-red-50 text-red-600 border border-red-100 rounded px-1 text-[6px] font-extrabold shrink-0">SoD</span>
 <div>
 <span className="font-bold text-slate-900">Create User and Assign Role</span>
 <div className="text-[6px] text-slate-500 flex flex-wrap items-center gap-1 mt-0.5">
 <span className="font-bold text-slate-600">{f.role}</span>
 <span className="bg-white text-slate-600 px-1 py-0.2 rounded font-mono text-[5px] border border-slate-200 shadow-sm">{f.sys}</span>
 </div>
 </div>
 </div>
 <div className="flex items-center gap-1 shrink-0">
 <span className="text-red-600 bg-red-50 border border-red-100 text-[5px] font-extrabold px-1 rounded">⚠️ Unresolved</span>
 <span className="text-slate-400 hidden sm:inline">➜</span>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Top Risk Users (45%) */}
 <div className="col-span-1 lg:col-span-4 bg-white border border-slate-200 rounded-xl p-3 flex flex-col shadow-sm">
 <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-2">
 <span className="text-[8px] font-bold text-slate-900">Top Risk Users <span className="text-slate-500 font-normal hidden sm:inline">— by open findings</span></span>
 <span className="text-[6px] text-red-600 font-bold hover:underline cursor-pointer">All users →</span>
 </div>

 <div className="space-y-1">
 {[
 { name: "MSQ_MV", score: 89 },
 { name: "BASISADMIN", score: 89 },
 { name: "JYOTI", score: 89 }
 ].map((u, i) => (
 <div key={i} className="flex items-center justify-between p-1 border-b border-slate-100 last:border-0 text-[7px] flex-wrap gap-1 sm:gap-0">
 <div className="flex items-center gap-2">
 <span className="text-slate-400 font-black shrink-0">{i + 1}</span>
 <div>
 <span className="font-extrabold text-slate-900">{u.name}</span>
 <div className="text-[6px] text-slate-500">MSQ System · 9m ago</div>
 </div>
 </div>
 <div className="flex items-center gap-1 font-mono font-bold text-[6px] shrink-0">
 <span className="text-red-600 bg-red-50 px-1 rounded border border-red-100 hidden sm:inline">66C</span>
 <span className="text-amber-600 bg-amber-50 px-1 rounded border border-amber-100 hidden sm:inline">23H</span>
 <span className="bg-slate-100 text-slate-700 px-1 rounded font-black border border-slate-200">{u.score}</span>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
);

const FirefighterMockup = () => (
 <div className="w-full sm:aspect-[4/3] bg-white rounded-t-2xl flex flex-col font-sans overflow-hidden border-b border-slate-200 shadow-2xl">
 {/* Header */}
 <div className="flex flex-col sm:flex-row p-3 sm:p-0 sm:h-12 border-b border-slate-200 bg-slate-50 items-start sm:items-center justify-between sm:px-4 shrink-0 gap-2 sm:gap-0">
 <div className="flex items-center gap-3">
 <div className="w-6 h-6 rounded bg-orange-50 flex items-center justify-center border border-orange-100 shrink-0">
 <Flame className="w-3.5 h-3.5 text-orange-600" />
 </div>
 <span className="font-bold text-sm text-slate-900 tracking-wide">Emergency Access</span>
 </div>
 <div className="flex items-center gap-2 sm:gap-4 text-xs font-bold text-slate-500">
 <span className="flex items-center gap-1.5 shrink-0"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></div> SYSTEM: PRD</span>
 <span className="bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0 shadow-sm">FF_SUPPORT</span>
 </div>
 </div>

 {/* Body */}
 <div className="flex-1 p-4 md:p-6 bg-[linear-gradient(to_bottom,transparent,#f1f5f9)] flex flex-col gap-4 relative">
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.1),transparent_50%)] pointer-events-none"></div>

 {/* Metrics Row */}
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 relative z-10">
 {[
 { label: "Active Sessions", value: "3", trend: "+1", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
 { label: "Pending Approvals", value: "12", trend: "-2", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" },
 { label: "Escalated", value: "1", trend: "0", color: "text-red-600", bg: "bg-red-50", border: "border-red-200" },
 ].map((metric, i) => (
 <div key={i} className="bg-white border border-slate-200 rounded-xl p-3 md:p-4 flex flex-col gap-1.5 shadow-sm">
 <span className="text-[9px] md:text-xs text-slate-500 font-black tracking-widest">{metric.label}</span>
 <div className="flex items-end gap-2.5">
 <span className="text-2xl md:text-3xl font-black text-slate-900 leading-none">{metric.value}</span>
 <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${metric.bg} ${metric.color} border ${metric.border} mb-0.5`}>{metric.trend}</span>
 </div>
 </div>
 ))}
 </div>

 {/* Main Table */}
 <div className="flex-1 bg-white border border-slate-200 rounded-xl p-3 md:p-5 flex flex-col shadow-sm relative z-10">
 <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2 sm:gap-0">
 <span className="text-xs font-bold text-slate-700 tracking-widest">Live Sessions</span>
 <div className="flex gap-2.5">
 <div className="h-7 w-28 bg-slate-100 rounded-lg animate-pulse hidden sm:block"></div>
 <div className="h-7 px-3 bg-orange-50 border border-orange-200 rounded-lg flex items-center justify-center text-[10px] text-orange-600 font-bold tracking-wider cursor-pointer hover:bg-orange-100 transition-colors shrink-0 shadow-sm">New Request</div>
 </div>
 </div>

 <div className="flex-1 flex flex-col gap-2">
 {/* Table Header */}
 <div className="hidden sm:grid sm:grid-cols-4 gap-2 px-3 py-2 border-b border-slate-100 text-[9px] font-black text-slate-500 tracking-widest">
 <span>User</span>
 <span>Target System</span>
 <span>Time Remaining</span>
 <span>Status</span>
 </div>

 {/* Table Rows */}
 {[
 { user: "Sarah Jenkins", sys: "S4P_100", time: "01:45:20", status: "Active", dot: "bg-emerald-500 shadow-[0_0_8px_#10b981]" },
 { user: "Michael Chen", sys: "BW_300", time: "00:12:05", status: "Active", dot: "bg-emerald-500 shadow-[0_0_8px_#10b981]" },
 { user: "David Rodriguez", sys: "HR_200", time: "Expired", status: "Review Pending", dot: "bg-orange-500 shadow-[0_0_8px_#f97316]" },
 ].map((row, i) => (
 <div key={i} className="flex flex-col sm:grid sm:grid-cols-4 gap-2 sm:gap-2 px-3 py-2 sm:py-3 bg-white hover:bg-slate-50 border border-slate-100 rounded-lg text-[11px] transition-colors sm:items-center group cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
 <span className="text-slate-900 font-bold group-hover:text-orange-600 transition-colors">{row.user}</span>
 <span className="text-slate-600 font-mono text-[10px] bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200 w-fit">{row.sys}</span>
 <span className={`font-mono font-bold ${row.time === 'Expired' ? 'text-red-600' : 'text-slate-500'}`}>{row.time}</span>
 <span className="flex items-center gap-2">
 <div className={`w-2 h-2 rounded-full shrink-0 ${row.dot} ${row.status === 'Active' ? 'animate-pulse' : ''}`}></div>
 <span className="text-slate-700 font-bold">{row.status}</span>
 </span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
);

export function Modules() {
 const [activeVulnAccordion, setActiveVulnAccordion] = useState(0);

 const [activeVulnerability, setActiveVulnerability] = useState(0);


 const roleRadarCards = [
 {
 title: "Directory & Catalog",
 icon: Users,
 mockup: <DirectoryCatalogMiniMockup />,
 points: [
 { t: "Role Lens — Side-by-Side Comparison", d: "Compare multiple SAP roles simultaneously using the Role Lens to see exactly which auth objects, fields, and T-codes differ across roles." },
 { t: "Auth Object Deep Dive", d: "Browse all 151 authorization rows per role combination — filtered by Matched, Unmatched, Profile-Based, or Role-Based sources — with one-click source tracing." }
 ]
 },
 {
 title: "Certifications & Approvals",
 icon: Clock,
 mockup: <CertificationsMiniMockup />,
 points: [
 { t: "Scheduled Access Certifications", d: "Auditable campaigns for managers to certify their team's access, with automatic reminders." },
 { t: "Personal Review Queue", d: "A personal queue of pending access certifications, improving completion rates." }
 ]
 },
 {
 title: "Simulation & Rules",
 icon: Sliders,
 mockup: <SimulationMiniMockup />,
 points: [
 { t: "Change Simulation", d: "Model a role or access change before you commit it, and see which SoD conflicts it creates or resolves." },
 { t: "Custom Risk Rule Builder", d: "Define and tune your own SoD and sensitive-access rules in a guided builder." }
 ]
 },
 {
 title: "Remediation & Controls",
 icon: Wrench,
 mockup: <RemediationMiniMockup />,
 points: [
 { t: "Guided Remediation", d: "Workflows for resolving an identified conflict — reassign, restrict, or mitigate — with every action logged." },
 { t: "Mitigation Control Tracking", d: "Document and track compensating controls against accepted risks, with owners, evidence, and review dates." }
 ]
 },
 {
 title: "Risk Intelligence",
 icon: Target,
 mockup: <RiskIntelMiniMockup />,
 points: [
 { t: "Visual Risk Radar", d: "A visual risk map of your entire access landscape, plotting users, roles, and conflicts spatially." },
 { t: "Continuous Risk Intelligence", d: "Continuously scored segregation-of-duties risk across every user and role, ranked by business impact." }
 ]
 }
 ];

 const firefighterCards = [
 {
 title: "Access & Tracking",
 icon: Flame,
 mockup: <AccessTrackingMiniMockup />,
 points: [
 { t: "One-Click Emergency Access", d: "Request elevated or emergency access in seconds, with the business justification captured up front." },
 { t: "Request Tracking", d: "Track the status of every request you've submitted — pending, approved, active, or expired." }
 ]
 },
 {
 title: "Workspace & Reporting",
 icon: FileBarChart,
 mockup: <WorkspaceReportingMiniMockup />,
 points: [
 { t: "Bulk Audit Workspace", d: "A dedicated workspace for reviewing emergency access activity in bulk without export tooling." },
 { t: "SOX-Ready Reporting", d: "Pre-built reporting aligned to SOX control requirements, making compliance an export away." },
 { t: "Configurable Reporting", d: "Configurable reporting across every request, approval, and session tailored to your audience." }
 ]
 },
 {
 title: "Session Monitoring",
 icon: Eye,
 mockup: <SessionMonitoringMiniMockup />,
 points: [
 { t: "Live Session Monitoring", d: "A live view of every active Firefighter session in progress — who's using it and for how long." },
 { t: "Tiered Approver Assignment", d: "Designate senior approvers for your most sensitive access tiers for highest scrutiny." }
 ]
 },
 {
 title: "Safeguards & Audit",
 icon: Database,
 mockup: <SafeguardsAuditMiniMockup />,
 points: [
 { t: "Escalation Safeguards", d: "Configure how and when unresolved approvals escalate so time-sensitive access isn't blocked." },
 { t: "Tamper-Evident Audit Archive", d: "A permanent, tamper-evident archive of every Firefighter session and the actions taken during it." }
 ]
 },
 {
 title: "Approvals & Routing",
 icon: Route,
 mockup: <ApprovalsRoutingMiniMockup />,
 points: [
 { t: "Streamlined Approvals", d: "A focused queue for approvers to review, question, and act on incoming access requests." },
 { t: "Automatic Escalation Routing", d: "When a request needs a second look, escalation approvals route it automatically." }
 ]
 }
 ];

const VulnerabilitiesMainMockup = () => (
 <div className="w-full bg-white text-slate-500 rounded-t-2xl flex flex-col font-sans overflow-hidden border border-slate-200 shadow-2xl h-full">
 {/* Header */}
 <div className="bg-slate-50 border-b border-slate-200 px-3 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0">
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 shrink-0 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center shadow-sm">
 <ShieldAlert className="w-4 h-4 text-red-600" />
 </div>
 <div>
 <h2 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">Vulnerability</h2>
 <p className="text-[8px] sm:text-[10px] text-slate-500 font-medium line-clamp-1 sm:line-clamp-none">Real-time status across profile parameters, RFC health, certificates, kernel, and installed software</p>
 </div>
 </div>
 <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-[9px] sm:text-xs text-slate-700 font-bold whitespace-nowrap self-start sm:self-auto shadow-sm">
 <Database className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500" />
 All Systems <span className="text-[7px] sm:text-[8px] text-slate-500 ml-1">▼</span>
 </div>
 </div>

 <div className="flex-1 p-3 sm:p-4 bg-white flex flex-col gap-3 overflow-hidden relative">
 {/* Top Cards Grid */}
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-2">
 {[
 { label: 'Certificates Expired', val: '17', color: 'text-red-600', border: 'border-red-200 bg-red-50' },
 { label: 'RFC Failures', val: '39', color: 'text-red-600', border: 'border-red-200 bg-red-50' },
 { label: 'Pending Updates', val: '89', color: 'text-amber-600', border: 'border-amber-200 bg-amber-50' },
 { label: 'Profile Parameters', val: '110', color: 'text-slate-800', border: 'border-slate-200 bg-white' },
 { label: 'Inactive ICF Services', val: '1799', color: 'text-orange-600', border: 'border-orange-200 bg-orange-50' },
 { label: 'Actionable Notes', val: '29', color: 'text-orange-600', border: 'border-orange-200 bg-orange-50' },
 ].map((c, i) => (
 <div key={i} className={`border ${c.border} rounded-lg p-2 sm:p-2.5 flex flex-col shadow-sm`}>
 <span className="text-[6.5px] sm:text-[7.5px] text-slate-500 font-bold tracking-wider leading-tight mb-1.5">{c.label}</span>
 <div className={`text-lg sm:text-xl font-black ${c.color}`}>{c.val}</div>
 </div>
 ))}
 </div>

 {/* Module Status */}
 <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 sm:p-3 w-full overflow-hidden shadow-sm">
 <div className="text-[9px] sm:text-[10px] font-extrabold text-slate-900 mb-2.5 flex items-center gap-2">
 Module Status — <span className="text-red-600 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> Live</span>
 </div>
 <div className="pb-1 sm:pb-0">
 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-1.5">
 {[
 { label: 'Profile Param...', val: '110', sub: '3 profiles', red: false },
 { label: 'Scan RFC Health', val: '39', sub: '25 ok · 0 unchecked', red: true },
 { label: 'Certificate Check', val: '17', sub: '0 expiring soon', red: true },
 { label: 'Installed Products', val: '5', sub: 'of 6 products', orange: true },
 { label: 'Installed Software', val: '84', sub: 'of 92 components', orange: true },
 { label: 'ICF Service Check', val: '79', sub: '1878 total · 1799 inactive' },
 { label: 'Security Notes', val: '29', sub: '82 total · actionable', orange: true },
 { label: 'Real-Time Threat', val: '0', sub: '0 alerts today', green: true },
 { label: 'Client Security', val: '17', sub: '6 critical', red: true },
 ].map((m, i) => (
 <div key={i} className="w-full bg-white border border-slate-200 rounded-lg p-1.5 sm:p-2 flex flex-col cursor-pointer hover:bg-slate-50 hover:border-slate-300 transition-colors shrink-0 shadow-sm">
 <div className="text-[6px] sm:text-[7px] text-slate-500 font-bold mb-1 whitespace-nowrap overflow-hidden text-ellipsis">{m.label}</div>
 <div className={`text-sm sm:text-base font-black mb-0.5 ${m.red ? 'text-red-600' : m.orange ? 'text-orange-600' : m.green ? 'text-emerald-600' : 'text-slate-800'}`}>
 {m.val} {m.red && <span className="text-[8px]">⚠</span>}
 </div>
 <div className="text-[5.5px] sm:text-[6px] text-slate-500 mb-1 truncate">{m.sub}</div>
 <div className="text-[6px] sm:text-[7px] text-red-600 font-bold">Click to view ›</div>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Bottom Row */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
 {/* Status Breakdown */}
 <div className="flex flex-col gap-1.5">
 <div className="text-[9px] sm:text-[10px] font-extrabold text-slate-900">Status Breakdown</div>
 <div className="grid grid-cols-2 gap-1.5">
 {[
 { title: 'Certificate Status', val: '27', stroke: '#ef4444', dash: '70' },
 { title: 'RFC Connection', val: '64', stroke: '#ef4444', dash: '60' },
 { title: 'ICF Service Status', val: '1878', stroke: '#94a3b8', dash: '95' },
 { title: 'Security Notes', val: '82', stroke: '#94a3b8', dash: '65' },
 ].map((chart, i) => (
 <div key={i} className="bg-white border border-slate-200 rounded-lg p-2 flex items-center gap-2.5 hover:bg-slate-50 transition-colors shadow-sm">
 <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0">
 <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
 <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#e2e8f0" strokeWidth="5.5"></circle>
 <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke={chart.stroke} strokeWidth="5.5" strokeDasharray={`${chart.dash} 100`} strokeLinecap="round"></circle>
 </svg>
 <div className="absolute inset-0 flex flex-col items-center justify-center">
 <span className="text-[8px] sm:text-[9px] font-black text-slate-900 leading-none">{chart.val}</span>
 <span className="text-[4px] text-slate-500">total</span>
 </div>
 </div>
 <div className="flex flex-col flex-1">
 <span className="text-[6.5px] sm:text-[7px] font-bold text-slate-500 mb-0.5">{chart.title}</span>
 <div className="text-[5px] sm:text-[6px] text-red-600 font-bold mt-0.5 cursor-pointer">Click to view details ›</div>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Update & Health Coverage */}
 <div className="flex flex-col gap-1.5">
 <div className="text-[9px] sm:text-[10px] font-extrabold text-slate-900">Update & Health Coverage</div>
 <div className="bg-white border border-slate-200 rounded-lg p-3 flex flex-col justify-center gap-2.5 h-full shadow-sm">
 {[
 { label: 'Installed Products Up To Date', val: '17%', desc: '1 of 6 on latest release', p: 17, color: 'bg-amber-500' },
 { label: 'Installed Software Up To Date', val: '9%', desc: '8 of 92 on latest release', p: 9, color: 'bg-amber-500' },
 { label: 'RFC Destinations Healthy', val: '39%', desc: '25 of 64 connecting successfully', p: 39, color: 'bg-red-500' },
 { label: 'Certificates Healthy', val: '0%', desc: '0 of 27 above 50% validity', p: 0, color: 'bg-slate-400' },
 { label: 'ICF Services Active', val: '4%', desc: '79 of 1878 services active', p: 4, color: 'bg-slate-400' },
 ].map((bar, i) => (
 <div key={i} className="flex flex-col gap-0.5">
 <div className="flex justify-between items-center text-[7px] sm:text-[8px] font-bold">
 <span className="text-slate-700">{bar.label}</span>
 <span className={bar.color.includes('red') ? 'text-red-600' : bar.color.includes('amber') ? 'text-amber-600' : 'text-slate-500'}>{bar.val} ›</span>
 </div>
 <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
 <div className={`h-full ${bar.color} rounded-full`} style={{ width: `${bar.p}%` }}></div>
 </div>
 <div className="text-[5.5px] sm:text-[6px] text-slate-500">{bar.desc}</div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
);

 const vulnerabilityCards = [
 {
 title: "Vulnerability Dashboard",
 icon: AlertTriangle,
 mockup: <VulnDashboardMiniMockup />,
 points: [
 { t: "Prioritized Vulnerability Dashboard", d: "A single view of every open vulnerability across your SAP landscape, ranked by severity." },
 { t: "Client Configuration Drift Checks", d: "Validates client-level security settings across every client, catching configuration drift." }
 ]
 },
 {
 title: "BTP Security Assessment",
 icon: Search,
 mockup: <PatchingMiniMockup />,
 points: [
 { t: "BTP Users & Role Collections", d: "A single view into SAP BTP identities, capturing active users and assigned role collections continuously." },
 { t: "Status & Access Governance", d: "Track user statuses, verified identities, and never-logged-in accounts to maintain a clean cloud footprint." }
 ]
 },
 {
 title: "Security Notes",
 icon: Key,
 mockup: <ExpiryMiniMockup />,
 points: [
 { t: "Matched Security Notes", d: "SAP Security Notes relevant to your landscape, matched automatically to your components." },
 { t: "Patch & Component Tracking", d: "Track installed software component versions against the latest available patches." }
 ]
 },
 {
 title: "Live Threats & Alerts",
 icon: RefreshCw,
 mockup: <ConfigDriftMiniMockup />,
 points: [
 { t: "Live Threat Detection", d: "Live monitoring for suspicious activity and known attack patterns across your SAP systems." },
 { t: "Noise-Free Smart Alerts", d: "Context-aware alerting that prioritizes what actually needs attention, cutting through noise." }
 ]
 },
 {
 title: "Profile Parameter Analysis",
 icon: Bell,
 mockup: <LiveThreatsMiniMockup />,
 points: [
 { t: "Automated Hardening Checks", d: "Automated checks against SAP profile parameters flag insecure or outdated configurations." },
 { t: "RFC Trust Scanning", d: "Continuous scanning of RFC destinations for trust relationships abused for lateral movement." }
 ]
 }
 ];

  return (
    <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-18 lg:pb-28 bg-[#fafafa] dark:bg-[#050505] relative overflow-hidden">
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
  <div className="flex flex-col gap-10">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col lg:flex-row group relative">
      <div className="lg:w-5/12 p-8 lg:p-12 flex flex-col justify-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold text-xs mb-6 w-fit border border-red-100 dark:border-red-800/50">
          <Target className="w-3.5 h-3.5" /> Platform Core
        </div>
        <h4 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Unified Risk Visibility</h4>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
          Role Radar gives SAP security teams a single, continuously updated picture of who has access to what, plus the governance tools to keep that access clean over time. Instead of reconstructing access after the fact, your team sees risk as it forms.
        </p>
      </div>
      <div className="lg:w-7/12 bg-slate-50 dark:bg-slate-800/30 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700/60 flex flex-col justify-end pt-12 px-6 sm:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent pointer-events-none" />
        <div className="relative rounded-t-2xl overflow-hidden border-t border-x border-slate-300 dark:border-slate-700/50 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-2xl bg-white w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-700 w-full">
          <RoleRadarMockup />
        </div>
      </div>
    </motion.div>
    
    <div className="flex flex-col gap-20 mt-12">
 {roleRadarCards.map((card, i) => (
 <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-12`}>
 <div className="lg:w-5/12 flex flex-col justify-center">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 border border-red-100 shadow-sm">
 <card.icon className="w-6 h-6" />
 </div>
 <h4 className="font-extrabold text-2xl sm:text-3xl text-slate-900">{card.title}</h4>
 </div>
 <div className="space-y-6">
 {card.points.map((pt, j) => (
 <div key={j}>
 <h5 className="text-lg font-bold text-slate-900 mb-2">{pt.t}</h5>
 <p className="text-base text-slate-600 font-medium leading-relaxed">{pt.d}</p>
 </div>
 ))}
 </div>
 </div>
 <div className="lg:w-7/12 w-full">
 <div className="rounded-2xl shadow-xl border border-slate-200 bg-white overflow-hidden">
 {card.mockup && card.mockup}
 </div>
 </div>
 </motion.div>
 ))}
 </div>
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
  <div className="flex flex-col gap-10">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col lg:flex-row-reverse group relative">
      <div className="lg:w-5/12 p-8 lg:p-12 flex flex-col justify-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold text-xs mb-6 w-fit border border-orange-100 dark:border-orange-800/50">
          <Flame className="w-3.5 h-3.5" /> Emergency Access
        </div>
        <h4 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Governed Elevated Access</h4>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
          Firefighter gives teams a controlled way to grant, monitor, and document temporary elevated access. Speed and control stop being a trade-off: a request can be approved in minutes and still leave a complete record behind.
        </p>
      </div>
      <div className="lg:w-7/12 bg-slate-50 dark:bg-slate-800/30 border-t lg:border-t-0 lg:border-r border-slate-200 dark:border-slate-700/60 flex flex-col justify-end pt-12 px-2 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/10 to-transparent pointer-events-none" />
        <div className="relative rounded-t-2xl overflow-hidden border-t border-x border-slate-300 dark:border-slate-700/50 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700 bg-white w-full">
          <FirefighterMockup />
        </div>
      </div>
    </motion.div>

    <div className="flex flex-col gap-20 mt-12">
 {firefighterCards.map((card, i) => (
 <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-12`}>
 <div className="lg:w-5/12 flex flex-col justify-center">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 border border-orange-100 shadow-sm">
 {React.createElement(card.icon, { className: "w-6 h-6" })}
 </div>
 <h4 className="font-extrabold text-2xl sm:text-3xl text-slate-900">{card.title}</h4>
 </div>
 <div className="space-y-6">
 {card.points.map((pt, j) => (
 <div key={j}>
 <h5 className="text-lg font-bold text-slate-900 mb-2">{pt.t}</h5>
 <p className="text-base text-slate-600 font-medium leading-relaxed">{pt.d}</p>
 </div>
 ))}
 </div>
 </div>
 <div className="lg:w-7/12 w-full">
 <div className="rounded-2xl shadow-xl border border-slate-200 bg-white overflow-hidden">
 {card.mockup && card.mockup}
 </div>
 </div>
 </motion.div>
 ))}
 </div>
  </div>
 </div>

 {/* VULNERABILITIES BENTO (Original, Image on Left) */}
 <div id="vulnerabilities" className="pt-32 -mt-32">
 <div className="mb-8">
 <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800/50 font-bold text-xs mb-3 shadow-xs">
 <ShieldAlert className="w-3.5 h-3.5" /> Vulnerabilities
 </div>
 <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Know your SAP attack surface before someone else does.</h3>
 </div>
  <div className="flex flex-col gap-10">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col lg:flex-row group relative">
      <div className="lg:w-5/12 p-8 lg:p-12 flex flex-col justify-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-bold text-xs mb-6 w-fit border border-purple-100 dark:border-purple-800/50">
          <Search className="w-3.5 h-3.5" /> Threat Detection
        </div>
        <h4 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Continuous Posture Management</h4>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
          Vulnerabilities continuously scans your SAP landscape for the misconfigurations, missing patches, and exposed services that turn into real incidents. What used to require a point-in-time security assessment now runs continuously in the background.
        </p>
      </div>
      <div className="lg:w-7/12 bg-slate-50 dark:bg-slate-800/30 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700/60 flex flex-col justify-end pt-12 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />
        <div className="relative rounded-t-2xl overflow-hidden border-t border-x border-slate-300 dark:border-slate-700/50 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700 bg-white w-full">
          <VulnerabilitiesMainMockup />
        </div>
      </div>
    </motion.div>

    <div className="flex flex-col gap-20 mt-12">
 {vulnerabilityCards.map((card, i) => (
 <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-12`}>
 <div className="lg:w-5/12 flex flex-col justify-center">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100 shadow-sm">
 {React.createElement(card.icon, { className: "w-6 h-6" })}
 </div>
 <h4 className="font-extrabold text-2xl sm:text-3xl text-slate-900">{card.title}</h4>
 </div>
 <div className="space-y-6">
 {card.points.map((pt, j) => (
 <div key={j}>
 <h5 className="text-lg font-bold text-slate-900 mb-2">{pt.t}</h5>
 <p className="text-base text-slate-600 font-medium leading-relaxed">{pt.d}</p>
 </div>
 ))}
 </div>
 </div>
 <div className="lg:w-7/12 w-full">
 <div className="rounded-2xl shadow-xl border border-slate-200 bg-white overflow-hidden">
 {card.mockup && card.mockup}
 </div>
 </div>
 </motion.div>
 ))}
 </div>
  </div>
 </div>
 </div>
 </section>
 );
}
