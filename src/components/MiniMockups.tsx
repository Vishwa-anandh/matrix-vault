import React from 'react';
import {
 Users, CheckCircle2, ArrowRight, Activity, Database, Route,
 Search, Key, Bell, Sliders
} from 'lucide-react';

export const DirectoryCatalogMiniMockup = () => (
 <div className="w-full aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
 {/* Header */}
 <div className="bg-white border-b border-slate-200 px-1 sm:px-2.5 py-1 sm:py-1.5 flex items-center justify-between">
 <div className="flex items-center gap-1 sm:gap-1.5">
 <button className="text-[4.2px] sm:text-[6px] text-slate-500 border border-slate-200 bg-white px-1 py-0.5 rounded font-bold">← Back</button>
 <div className="flex items-center gap-1">
 <div className="w-3 h-3 rounded bg-red-100 border border-red-200 flex items-center justify-center text-[4.2px] sm:text-[6px] text-red-600">⚖</div>
 <span className="text-[6.3px] sm:text-[9px] font-extrabold text-slate-900">Role Lens</span>
 </div>
 </div>
 <div className="flex items-center gap-1">
 <span className="text-[4.2px] sm:text-[6px] text-slate-600 bg-white border border-slate-200 px-1 py-0.5 rounded font-bold">Results</span>
 <span className="text-[4.2px] sm:text-[6px] text-slate-600 bg-white border border-slate-200 px-1 py-0.5 rounded font-bold">Reports</span>
 <span className="text-[4.2px] sm:text-[6px] text-slate-600 bg-white border border-slate-200 px-1 py-0.5 rounded font-bold">Copy</span>
 <span className="text-[4.2px] sm:text-[6px] text-white bg-red-600 px-1.5 py-0.5 rounded font-extrabold">Generate Report</span>
 <span className="text-[4.2px] sm:text-[6px] text-slate-600 bg-white border border-slate-200 px-1 py-0.5 rounded font-bold">+ New</span>
 </div>
 </div>

 {/* Role Comparison Summary */}
 <div className="bg-white border-b border-slate-200 px-1 sm:px-2.5 py-1 sm:py-2 flex items-center justify-between">
 <div className="flex items-center gap-1 sm:gap-2">
 <div className="w-6 h-6 rounded bg-red-100 border border-red-200 flex items-center justify-center text-[7px] sm:text-[10px] font-black text-red-600">⚖</div>
 <span className="text-[5.9px] sm:text-[8.5px] font-extrabold text-slate-900">Role Comparison</span>
 </div>
 <div className="flex items-center gap-4 text-center">
 {[
 { val: '0', label: 'Matched', color: 'text-slate-700' },
 { val: '151', label: 'Unmatched', color: 'text-red-600' },
 { val: '27', label: 'T-Codes', color: 'text-slate-700' },
 { val: '8', label: 'SoD Conflicts', color: 'text-red-600' },
 ].map((s, i) => (
 <div key={i} className="flex flex-col items-center">
 <span className={`text-[7.7px] sm:text-[11px] font-black ${s.color}`}>{s.val}</span>
 <span className="text-[3.5px] sm:text-[5px] text-slate-500 leading-tight">{s.label}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Summary row */}
 <div className="bg-white border-b border-slate-200 px-1 sm:px-2.5 py-1 flex items-center gap-4 text-[4.2px] sm:text-[6px]">
 <div className="flex items-center gap-1">
 <span className="font-black text-slate-900">0</span>
 <span className="text-slate-500">Matched — Auth rows present in ALL roles</span>
 </div>
 <div className="flex items-center gap-1">
 <span className="font-black text-red-600">151</span>
 <span className="text-slate-500">Unmatched — Auth rows missing from one or more roles</span>
 </div>
 </div>

 {/* Filter tabs */}
 <div className="bg-white border-b border-slate-200 px-1 sm:px-2.5 py-1 flex items-center gap-1 sm:gap-1.5 overflow-hidden">
 {[
 { label: 'All 151', active: true },
 { label: 'Matched 0', active: false },
 { label: 'Unmatched 151', active: false },
 { label: 'T-Code 27', active: false },
 { label: 'Auth Object 124', active: false },
 ].map((t, i) => (
 <span key={i} className={`shrink-0 text-[3.8px] sm:text-[5.5px] font-bold px-1.5 py-0.5 rounded border ${t.active ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-600'}`}>{t.label}</span>
 ))}
 <div className="ml-auto shrink-0 flex items-center gap-1 bg-slate-50 border border-slate-200 rounded px-1 py-0.5 text-[3.8px] sm:text-[5.5px] text-slate-400">
 <Search className="w-1.5 h-1.5" /> Search object, field, value...
 </div>
 </div>

 {/* Table header */}
 <div className="grid grid-cols-12 gap-0.5 px-1 sm:px-2.5 py-0.5 bg-slate-50 border-b border-slate-200 text-[3.8px] sm:text-[5.5px] font-bold text-slate-500 tracking-wider">
 <div className="col-span-1 text-center">#</div>
 <div className="col-span-2">Auth Object</div>
 <div className="col-span-1">Field</div>
 <div className="col-span-1">Value</div>
 <div className="col-span-2">Description</div>
 <div className="col-span-1">Source</div>
 <div className="col-span-2">/ECRS/INTRASTAT</div>
 <div className="col-span-1">/BSNAGT</div>
 <div className="col-span-1 text-center">Status</div>
 </div>

 {/* Table rows */}
 {[
 { n: 1, obj: '/ECRS/POIA', field: 'ACTVT', val: '03', desc: 'Display', src: 'Role', status: 'ok' },
 { n: 2, obj: '/ECRS/POIA', field: 'ACTVT', val: '01', desc: 'Create', src: 'Role', status: 'ok' },
 { n: 3, obj: '/ECRS/POIA', field: 'ACTVT', val: '06', desc: 'Delete', src: 'Role', status: 'ok' },
 { n: 4, obj: '/ECRS/POIA', field: 'ACTVT', val: '02', desc: 'Change', src: 'Role', status: 'ok' },
 { n: 5, obj: 'S_TCODE', field: 'TCD', val: 'SU01', desc: 'User Maintenance', src: 'Profile', status: 'warn' },
 { n: 6, obj: 'S_TCODE', field: 'TCD', val: 'PFCG', desc: 'Role Maintenance', src: 'Profile', status: 'warn' },
 { n: 7, obj: 'S_TCODE', field: 'TCD', val: 'SM59', desc: 'RFC Connections', src: 'Role', status: 'warn' },
 { n: 8, obj: 'F_BKPF_BUK', field: 'BUKRS', val: '1000', desc: 'Company Code 1000', src: 'Role', status: 'ok' },
 { n: 9, obj: 'F_BKPF_BUK', field: 'BUKRS', val: '2000', desc: 'Company Code 2000', src: 'Role', status: 'ok' },
 { n: 10, obj: 'V_VBAK_VKO', field: 'VKORG', val: '1000', desc: 'Sales Organization', src: 'Role', status: 'ok' },
 ].map((r, i) => (
 <div key={i} className="grid grid-cols-12 gap-0.5 text-[3.5px] sm:text-[5px] py-1 border-b border-slate-50 items-center">
 <div className="col-span-1 text-slate-400 text-center">{r.n}</div>
 <div className="col-span-2 font-mono font-bold text-slate-700">{r.obj}</div>
 <div className="col-span-1 font-mono text-slate-500">{r.field}</div>
 <div className="col-span-1 font-mono text-slate-700">{r.val}</div>
 <div className="col-span-2 text-slate-500 truncate">{r.desc}</div>
 <div className="col-span-1 text-blue-500 font-bold hover:underline cursor-pointer">{r.src}</div>
 <div className="col-span-2 flex items-center gap-1 text-emerald-500 font-bold">
 <CheckCircle2 className="w-2 h-2" />
 </div>
 <div className="col-span-1 flex items-center justify-center text-slate-300">—</div>
 <div className="col-span-1 flex items-center justify-center">
 {r.status === 'warn' ? (
 <div className="w-2 h-2 rounded bg-amber-100 text-amber-600 flex items-center justify-center text-[4.2px] sm:text-[6px] font-bold">!</div>
 ) : (
 <span className="text-slate-300">—</span>
 )}
 </div>
 </div>
 ))}
 </div>
);

export const CertificationsMiniMockup = () => (
 <div className="w-full aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
 {/* Header */}
 <div className="bg-white border-b border-slate-200 px-1 sm:px-2.5 py-1 sm:py-2 flex items-center justify-between">
 <div className="flex items-center gap-1 sm:gap-2">
 <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[5.9px] sm:text-[8.5px] font-black text-slate-700">AM</div>
 <div>
 <div className="text-[7px] sm:text-[10px] font-extrabold text-slate-900">Approver Management</div>
 <div className="text-[5.2px] sm:text-[7.5px] text-slate-500">615 covered · 0 unassigned roles</div>
 </div>
 </div>
 <div className="flex items-center gap-1 sm:gap-1.5">
 <span className="text-[5.2px] sm:text-[7.5px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-1 py-0.5 rounded">100% covered</span>
 <div className="w-8 h-1.5 bg-slate-100 rounded-full overflow-hidden">
 <div className="h-full w-full bg-emerald-500 rounded-full"></div>
 </div>
 <span className="text-[5.2px] sm:text-[7.5px] text-slate-500 font-mono">615/615</span>
 </div>
 </div>

 {/* Sub-tabs */}
 <div className="bg-white border-b border-slate-200 px-1 sm:px-2.5 flex items-center gap-3 text-[5.9px] sm:text-[8.5px] font-bold">
 <span className="text-slate-900 border-b-2 border-red-500 py-1 sm:py-1.5">Role Approvers</span>
 <span className="text-slate-500 py-1 sm:py-1.5">Profile Approvers</span>
 </div>

 {/* Search/Filter bar */}
 <div className="bg-white border-b border-slate-200 px-1 sm:px-2.5 py-1 sm:py-1.5 flex items-center gap-1 sm:gap-2">
 <div className="flex items-center gap-1 sm:gap-1.5 bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 text-[5.2px] sm:text-[7.5px] text-slate-500">
 <span>All systems</span><span>▼</span>
 </div>
 <div className="flex-1 flex items-center gap-1 sm:gap-1.5 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 text-[5.2px] sm:text-[7.5px] text-slate-400">
 <Search className="w-2 h-2" />
 <span>Search role name...</span>
 </div>
 <span className="text-[5.2px] sm:text-[7.5px] text-slate-500 font-bold">Unassigned only</span>
 </div>

 {/* Table header */}
 <div className="grid grid-cols-12 gap-1 px-1 sm:px-2.5 py-1 bg-slate-50 border-b border-slate-200 text-[5.2px] sm:text-[7.5px] font-bold text-slate-500 tracking-wider">
 <div className="col-span-4">Role Name</div>
 <div className="col-span-2">System</div>
 <div className="col-span-6">Assigned Approvers</div>
 </div>

 {/* Table rows */}
 {[
 { role: "/BSNAGT/ALL", approvers: ["John Smith", "Jane Doe"] },
 { role: "/ECRS/INTRASTAT...", approvers: ["Michael Lee", "Sarah Connor"] },
 { role: "/FLDQ/DQM_ADMIN", approvers: ["Jane Doe", "Emily Blunt"] },
 { role: "/GSINS/BPADD", approvers: ["John Smith", "Robert Baratheon"] },
 { role: "/IBPP/PREFERENCE...", approvers: ["Arya Stark", "Sansa Stark"] },
 { role: "Z_FI_ADMIN", approvers: ["Ned Stark", "Catelyn Tully"] },
 { role: "Z_HR_MASTER", approvers: ["Jon Snow", "Samwell Tarly"] },
 { role: "SAP_ALL", approvers: ["Tywin Lannister"] },
 ].map((row, i) => (
 <div key={i} className="grid grid-cols-12 gap-1 px-1 sm:px-2.5 py-1 sm:py-1.5 border-b border-slate-100 hover:bg-slate-50 transition-colors items-start">
 <div className="col-span-4 flex items-center gap-1">
 <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
 <span className="text-[5.2px] sm:text-[7.5px] font-bold text-slate-800 truncate">{row.role}</span>
 </div>
 <div className="col-span-2 flex items-center gap-1">
 <span className="text-[5.2px] sm:text-[7.5px] text-slate-600">PRD System</span>
 <span className="text-[3.5px] sm:text-[5px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-1 rounded">Active</span>
 </div>
 <div className="col-span-6 flex items-center gap-1 flex-wrap">
 {row.approvers.map((a, j) => (
 <div key={j} className="flex items-center gap-1 bg-white border border-slate-200 rounded px-1.5 py-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
 <span className="text-[4.2px] sm:text-[6px] text-slate-900 font-bold">{a}</span>
 <span className="text-[3.5px] sm:text-[5px] text-slate-400 font-mono">@{a.split(' ')[0].toLowerCase()}...</span>
 <span className="text-[3.5px] sm:text-[5px] text-slate-300 ml-1">×</span>
 </div>
 ))}
 <div className="text-[4.2px] sm:text-[6px] text-slate-500 font-bold border border-slate-200 border-dashed rounded px-1.5 py-0.5 cursor-pointer hover:bg-slate-50">+ Assign</div>
 </div>
 </div>
 ))}
 </div>
);

export const SimulationMiniMockup = () => (
 <div className="w-full aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
 {/* Top header bar */}
 <div className="bg-white border-b border-slate-200 px-1 sm:px-2.5 py-1 sm:py-1.5 flex items-center justify-between">
 <div className="flex items-center gap-1 sm:gap-1.5">
 <div className="w-4 h-4 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[5.9px] sm:text-[8.5px] text-red-500">
 <Sliders className="w-2.5 h-2.5" />
 </div>
 <div className="text-[7px] sm:text-[10px] font-extrabold text-slate-900">Role Simulator</div>
 </div>
 <div className="flex items-center gap-1">
 <span className="text-[4.2px] sm:text-[6px] text-white bg-red-600 px-1 sm:px-2 py-1 rounded font-extrabold shadow-sm">Generate Report</span>
 <span className="text-[4.2px] sm:text-[6px] text-slate-600 bg-white border border-slate-200 px-1 sm:px-2 py-1 rounded font-bold shadow-sm">✨ New</span>
 </div>
 </div>

 {/* User info bar */}
 <div className="bg-white border-b border-slate-200 px-1.5 sm:px-3 py-1 sm:py-2 flex items-center gap-3">
 <div className="w-6 h-6 rounded bg-red-600 text-white font-black text-[7.7px] sm:text-[11px] flex items-center justify-center shadow-sm">AB</div>
 <div>
 <div className="text-[6.3px] sm:text-[9px] font-black text-slate-900">ABA Tester</div>
 <div className="text-[4.2px] sm:text-[6px] font-mono text-slate-500">ABAP_TEST03</div>
 </div>
 </div>

 {/* Current vs Simulated Roles */}
 <div className="flex gap-1 sm:gap-2 px-1.5 sm:px-3 py-1 sm:py-2 bg-slate-50 border-b border-slate-200">
 <div className="flex-1">
 <div className="text-[4.2px] sm:text-[6px] font-bold text-slate-500 mb-1">Current Roles (7)</div>
 <div className="flex flex-wrap gap-1">
 {['/BSNAGT/ALL', '/ECRS/INTRASTAT...', 'Z_MATRIXVAULT...'].map((r, i) => (
 <span key={i} className="text-[3.8px] sm:text-[5.5px] font-mono font-bold text-slate-600 bg-slate-100 border border-slate-200 px-1 py-0.5 rounded">{r}</span>
 ))}
 </div>
 </div>
 <div className="flex-1 border-l border-slate-200 pl-2">
 <div className="text-[4.2px] sm:text-[6px] font-bold text-emerald-600 mb-1">Simulated Changes (+3)</div>
 <div className="flex flex-wrap gap-1">
 {['+ /IBPP/PREFERENCE...', '+ /GSINS/BPADD'].map((r, i) => (
 <span key={i} className="text-[3.8px] sm:text-[5.5px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1 py-0.5 rounded">{r}</span>
 ))}
 </div>
 </div>
 </div>

 {/* Risk summary */}
 <div className="px-1.5 sm:px-3 py-1 sm:py-2 bg-white flex items-center gap-3 border-b border-slate-200">
 <div className="w-10 h-10 rounded-full border-[3px] border-red-500 flex items-center justify-center text-[8.4px] sm:text-[12px] font-black text-red-600 shadow-[0_0_10px_rgba(239,68,68,0.2)]">100</div>
 <div className="flex-1">
 <div className="flex items-center gap-1 text-[7px] sm:text-[10px] font-black text-red-600 mb-0.5">
 <Activity className="w-2.5 h-2.5" /> Critical Risk
 </div>
 <div className="text-[5.2px] sm:text-[7.5px] text-slate-600">8 violations would be created. Review below before applying.</div>
 </div>

 <div className="flex gap-3 text-center border-l border-slate-200 pl-3">
 <div>
 <div className="text-[8.4px] sm:text-[12px] font-black text-slate-900">899</div>
 <div className="text-[3.5px] sm:text-[5px] text-slate-500 font-bold leading-tight">Rules Checked</div>
 </div>
 <div>
 <div className="text-[8.4px] sm:text-[12px] font-black text-red-600">8</div>
 <div className="text-[3.5px] sm:text-[5px] text-slate-500 font-bold leading-tight">New Violations</div>
 </div>
 <div>
 <div className="text-[8.4px] sm:text-[12px] font-black text-emerald-600">0</div>
 <div className="text-[3.5px] sm:text-[5px] text-slate-500 font-bold leading-tight">Would Close</div>
 </div>
 </div>
 </div>

 {/* Detailed Violations List */}
 <div className="flex-1 bg-white overflow-hidden flex flex-col">
 <div className="px-1.5 sm:px-3 py-1 sm:py-1.5 bg-slate-50 border-b border-slate-200 text-[4.2px] sm:text-[6px] font-bold text-slate-600">
 Violations Breakdown
 </div>
 <div className="flex flex-col">
 {[
 { rule: 'B3434', desc: 'Critical Basis Authorization', sys: 'PRD', type: 'Critical', color: 'text-red-600' },
 { rule: 'FI002', desc: 'Maintain Vendor Master & Post Invoice', sys: 'PRD', type: 'SoD', color: 'text-red-600' },
 { rule: 'HR091', desc: 'Maintain PA & Run Payroll', sys: 'QAS', type: 'SoD', color: 'text-amber-500' },
 { rule: 'MM015', desc: 'Create PO & Goods Receipt', sys: 'PRD', type: 'SoD', color: 'text-amber-500' },
 ].map((v, i) => (
 <div key={i} className="flex items-center justify-between px-1.5 sm:px-3 py-1 sm:py-1.5 border-b border-slate-100 hover:bg-slate-50">
 <div className="flex items-center gap-1 sm:gap-2">
 <span className={`text-[3.8px] sm:text-[5.5px] font-mono font-bold ${v.color}`}>{v.rule}</span>
 <span className="text-[4.2px] sm:text-[6px] font-bold text-slate-700">{v.desc}</span>
 </div>
 <div className="flex items-center gap-1 sm:gap-1.5">
 <span className="text-[3.8px] sm:text-[5.5px] font-mono text-slate-500">{v.sys}</span>
 <span className={`text-[3.5px] sm:text-[5px] font-bold px-1 py-0.5 rounded ${v.type==='Critical'?'bg-red-50 text-red-600':'bg-amber-50 text-amber-600'}`}>{v.type}</span>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Action bar */}
 <div className="px-1.5 sm:px-3 py-1 sm:py-1.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between mt-auto">
 <div className="flex items-center gap-1 sm:gap-1.5 text-[5.2px] sm:text-[7.5px]">
 <span className="font-bold text-slate-700">⚡ Apply to SAP</span>
 <span className="text-slate-500">Execute staged changes on <strong className="text-slate-700">ABAP_TEST03</strong></span>
 <span className="font-bold text-emerald-600">+3 to assign</span>
 </div>
 <button className="bg-emerald-500 text-white font-bold text-[4.2px] sm:text-[6px] px-1 sm:px-2 py-1 rounded flex items-center gap-1 shadow-sm">
 <CheckCircle2 className="w-1.5 h-1.5" /> Assign 3 Roles
 </button>
 </div>
 </div>
);

export const RemediationMiniMockup = () => (
 <div className="w-full aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
 {/* Header */}
 <div className="bg-white border-b border-slate-200 px-1 sm:px-2.5 py-1 sm:py-1.5 flex items-center justify-between">
 <div>
 <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5">
 <div className="w-3.5 h-3.5 rounded bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
 <Activity className="w-2 h-2" />
 </div>
 <span className="text-[6.3px] sm:text-[9px] font-extrabold text-slate-900">Mitigation <span className="bg-purple-100 text-purple-700 text-[3.5px] sm:text-[5px] px-1 rounded border border-purple-200 font-bold ml-1">Compensating Controls</span></span>
 </div>
 <div className="text-[4.2px] sm:text-[6px] text-slate-500 pl-5">Track assignments, approvals, and the control library across SAP access risks</div>
 </div>
 <div className="w-4 h-4 bg-slate-50 border border-slate-200 rounded flex items-center justify-center">
 <span className="text-[5.2px] sm:text-[7.5px] text-slate-400">↻</span>
 </div>
 </div>

 {/* Stat Cards */}
 <div className="px-4 py-1 sm:py-2 border-b border-slate-200 bg-[linear-gradient(to_bottom,transparent,#f1f5f9)]">
 <div className="flex gap-1 sm:gap-2 max-w-[80%]">
 {[
 { label: 'All', val: '24', color: 'text-purple-700', bg: 'bg-purple-50 border-purple-200 border-2' },
 { label: 'Pending', val: '1', color: 'text-slate-700', bg: 'bg-white border-slate-200 border-t-2 border-t-amber-400' },
 { label: 'Active', val: '3', color: 'text-slate-700', bg: 'bg-white border-slate-200 border-t-2 border-t-emerald-400' },
 { label: 'Expired', val: '5', color: 'text-slate-700', bg: 'bg-white border-slate-200 border-t-2 border-t-red-400' },
 ].map((s, i) => (
 <div key={i} className={`flex-1 rounded p-1 sm:p-1.5 ${s.bg} flex flex-col items-center justify-center shadow-sm`}>
 <span className="text-[3.8px] sm:text-[5.5px] text-slate-500 font-bold">{s.label}</span>
 <span className={`text-[7.7px] sm:text-[11px] font-black ${s.color}`}>{s.val}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Tabs & Search */}
 <div className="bg-white px-1 sm:px-2 border-b border-slate-200 flex flex-col">
 <div className="flex gap-3 text-[5.2px] sm:text-[7.5px] font-bold border-b border-slate-100">
 <span className="text-purple-700 border-b-2 border-purple-600 py-1 sm:py-1.5">Assignments</span>
 <span className="text-slate-500 py-1 sm:py-1.5">My Pending</span>
 <span className="text-slate-500 py-1 sm:py-1.5">My Requests</span>
 <span className="text-slate-500 py-1 sm:py-1.5">Control Library</span>
 </div>
 <div className="py-1 sm:py-1.5 flex gap-1 sm:gap-1.5">
 <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 text-[4.2px] sm:text-[6px] text-slate-400 w-24">
 <Search className="w-1.5 h-1.5" /> Search...
 </div>
 <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 text-[4.2px] sm:text-[6px] text-slate-600">
 System ▼
 </div>
 <div className="flex items-center gap-1 bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[4.2px] sm:text-[6px] text-slate-600 font-bold">
 <span>▽</span> Add filter
 </div>
 </div>
 </div>

 {/* Table */}
 <div className="grid grid-cols-12 gap-1 px-1 sm:px-2.5 py-1 bg-slate-50 border-b border-slate-200 text-[3.8px] sm:text-[5.5px] font-bold text-slate-500 tracking-wider">
 <div className="col-span-1">Ticket</div>
 <div className="col-span-1">Rule</div>
 <div className="col-span-2">Subject</div>
 <div className="col-span-2">System</div>
 <div className="col-span-2">Control</div>
 <div className="col-span-1">Status</div>
 <div className="col-span-1">My Role</div>
 <div className="col-span-1">Approvers</div>
 <div className="col-span-1">Valid Until</div>
 </div>

 {/* Rows */}
 {[
 { tick: 'MIT-2550', rule: 'HR021', sub: 'TESTCDHDR', subDesc: 'User', sys: '6b8be9d7-..', ctrl: '3C059147', ctrlDesc: 'Sample', status: 'Pending Appro...', sColor: 'text-amber-500', role: '—', app: 'Arun BS', date: 'Jul 10, 27' },
 { tick: 'MIT-2549', rule: 'FI105', sub: 'JOHNDOE', subDesc: 'User', sys: '2a4fe1b3-..', ctrl: '3C058221', ctrlDesc: 'Review', status: 'Active', sColor: 'text-emerald-500', role: '—', app: 'Jane Smith', date: 'Aug 15, 27' },
 { tick: 'MIT-2548', rule: 'BASIS03', sub: 'Z_BASIS_ADM', subDesc: 'Role', sys: '1c8db2e5-..', ctrl: '3C054112', ctrlDesc: 'Monitor', status: 'Expired', sColor: 'text-red-500', role: 'Owner', app: 'System', date: 'Jan 01, 26' },
 { tick: 'MIT-2547', rule: 'MM042', sub: 'MIKEDAVIS', subDesc: 'User', sys: '9f2cc8d1-..', ctrl: '3C059900', ctrlDesc: 'Approval', status: 'Active', sColor: 'text-emerald-500', role: '—', app: 'Sarah Connor', date: 'Dec 31, 27' },
 { tick: 'MIT-2546', rule: 'SD011', sub: 'Z_SALES_REP', subDesc: 'Role', sys: '5e7da4c2-..', ctrl: '3C057731', ctrlDesc: 'Audit', status: 'Pending Appro...', sColor: 'text-amber-500', role: 'Reviewer', app: 'Michael Lee', date: 'Nov 20, 27' },
 { tick: 'MIT-2545', rule: 'HR021', sub: 'EMILYW', subDesc: 'User', sys: '6b8be9d7-..', ctrl: '3C059147', ctrlDesc: 'Sample', status: 'Active', sColor: 'text-emerald-500', role: '—', app: 'Arun BS', date: 'Jul 10, 27' },
 ].map((r, i) => (
 <div key={i} className="grid grid-cols-12 gap-1 px-1 sm:px-2.5 py-1 sm:py-1.5 bg-white text-[4.2px] sm:text-[6px] items-center border-b border-slate-50 hover:bg-slate-50 transition-colors">
 <div className="col-span-1 font-mono font-bold text-slate-900">{r.tick}</div>
 <div className="col-span-1 font-mono font-bold text-purple-600">{r.rule}</div>
 <div className="col-span-2">
 <div className="font-bold text-slate-800">{r.sub}</div>
 <div className="text-[3.5px] sm:text-[5px] text-slate-500">{r.subDesc}</div>
 </div>
 <div className="col-span-2 font-mono text-slate-600 truncate">{r.sys}</div>
 <div className="col-span-2 flex items-center gap-1">
 <CheckCircle2 className="w-1.5 h-1.5 text-slate-400" />
 <div>
 <div className="font-bold text-slate-800">{r.ctrl}</div>
 <div className="text-[3.5px] sm:text-[5px] text-slate-500">{r.ctrlDesc}</div>
 </div>
 </div>
 <div className={`col-span-1 font-bold ${r.sColor} truncate`}>{r.status}</div>
 <div className="col-span-1 text-slate-500">{r.role}</div>
 <div className="col-span-1 text-slate-700 font-bold truncate">{r.app}</div>
 <div className="col-span-1 font-mono text-slate-500 whitespace-nowrap">{r.date}</div>
 </div>
 ))}
 </div>
);

export const RiskIntelMiniMockup = () => (
 <div className="w-full aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
 {/* Header */}
 <div className="bg-white border-b border-slate-200 px-1 sm:px-2.5 py-1 sm:py-1.5 flex items-center justify-between gap-1 sm:gap-2">
 <div className="flex items-center gap-1 sm:gap-1.5">
 <div className="w-4 h-4 rounded bg-red-600 flex items-center justify-center shrink-0">
 <span className="text-white text-[4.2px] sm:text-[6px] font-black">⚙</span>
 </div>
 <div>
 <div className="text-[6.3px] sm:text-[9px] font-extrabold text-slate-900">Risk Rule Builder</div>
 <div className="text-[3.8px] sm:text-[5.5px] text-slate-500">899 rules · 899 active</div>
 </div>
 </div>
 <div className="flex items-center gap-1 shrink-0">
 <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 text-[4.2px] sm:text-[6px] text-slate-400">
 <Search className="w-1.5 h-1.5" /><span>Search name, code, T-code...</span>
 </div>
 <span className="text-[4.2px] sm:text-[6px] text-slate-500 bg-slate-100 border border-slate-200 px-1 py-0.5 rounded font-bold">Bulk Actions</span>
 <span className="text-[4.2px] sm:text-[6px] text-blue-600 bg-blue-50 border border-blue-200 px-1 py-0.5 rounded font-bold">Auth Set · Synced →</span>
 <span className="text-[4.2px] sm:text-[6px] text-slate-600 bg-white border border-slate-200 px-1 py-0.5 rounded font-bold">Scans</span>
 <span className="text-[4.2px] sm:text-[6px] text-slate-600 bg-white border border-slate-200 px-1 py-0.5 rounded font-bold">Import</span>
 <span className="text-[4.2px] sm:text-[6px] text-white bg-red-600 px-1.5 py-0.5 rounded font-extrabold">+ New Rule</span>
 </div>
 </div>

 {/* Filter chips */}
 <div className="bg-white border-b border-slate-200 px-1 sm:px-2.5 py-1 flex items-center gap-1 sm:gap-1.5">
 {['Filters', 'Type ▼', 'Severity ▼', 'Status ▼', 'Risk Weight ▼', 'Mechanism ▼', 'Module ▼'].map((f, i) => (
 <span key={i} className={`text-[4.2px] sm:text-[6px] font-bold px-1.5 py-0.5 rounded border ${i === 0 ? 'bg-slate-100 border-slate-300 text-slate-700' : 'bg-white border-slate-200 text-slate-600'}`}>{f}</span>
 ))}
 <span className="text-[4.2px] sm:text-[6px] font-bold px-1.5 py-0.5 rounded border bg-blue-50 border-blue-200 text-blue-700 flex items-center gap-0.5">
 <span className="w-1.5 h-1.5 bg-blue-500 rounded-sm inline-block"></span> Show Inactive
 </span>
 </div>

 {/* Table header */}
 <div className="grid grid-cols-12 gap-0.5 px-1 sm:px-2.5 py-0.5 bg-slate-50 border-b border-slate-200 text-[3.8px] sm:text-[5.5px] font-bold text-slate-500 tracking-wider">
 <div className="col-span-1">Code</div>
 <div className="col-span-4">Name</div>
 <div className="col-span-1">Severity</div>
 <div className="col-span-1">Type</div>
 <div className="col-span-1">Module</div>
 <div className="col-span-1">Mechanism</div>
 <div className="col-span-1">Weight</div>
 <div className="col-span-1">Status</div>
 <div className="col-span-1">Action</div>
 </div>

 {/* Table rows */}
 {[
 { code: 'B3434', name: 'Sample', sub: 'SAP_ALL', sev: 'Critical', type: 'SoD', mod: 'OT', mech: 'Profile', wt: 95 },
 { code: 'CRM050', name: 'CRM Configuration Superuser Role Holders', sub: 'Z_CRM_CONFIG_ADMIN', sev: 'Critical', type: 'Critical Access', mod: 'CRM', mech: 'Role', wt: 95 },
 { code: 'CRM049', name: 'Legacy CRM Super Profile Holders', sub: 'SAP_CRM_ALL', sev: 'High', type: 'SoD', mod: 'CRM', mech: 'Profile', wt: 76 },
 { code: 'CRM048', name: 'CRM Installed Base / Service Contract Admin', sub: 'Z_CRM_IBASE_ADMIN', sev: 'High', type: 'SoD', mod: 'CRM', mech: 'Role', wt: 80 },
 { code: 'FI012', name: 'Vendor Master & AP Invoicing', sub: 'Z_FI_AP_CLERK', sev: 'High', type: 'SoD', mod: 'FI', mech: 'Role', wt: 85 },
 { code: 'HR088', name: 'Payroll Execution & HR Master Data', sub: 'Z_HR_PAYROLL', sev: 'Critical', type: 'SoD', mod: 'HR', mech: 'Role', wt: 99 },
 { code: 'MM024', name: 'Purchase Order Creation & Goods Receipt', sub: 'Z_MM_BUYER', sev: 'Medium', type: 'SoD', mod: 'MM', mech: 'Role', wt: 60 },
 { code: 'BAS001', name: 'Unrestricted System Administration', sub: 'SAP_NEW', sev: 'Critical', type: 'Critical Access', mod: 'BC', mech: 'Profile', wt: 100 },
 ].map((row, i) => (
 <div key={i} className="grid grid-cols-12 gap-0.5 px-1 sm:px-2.5 py-0.5 border-b border-slate-100 hover:bg-slate-50 transition-colors items-center">
 <div className="col-span-1 text-[3.8px] sm:text-[5.5px] text-slate-600 font-mono bg-slate-100 border border-slate-200 px-0.5 rounded">{row.code}</div>
 <div className="col-span-4">
 <div className="text-[4.2px] sm:text-[6px] font-bold text-slate-800 truncate">{row.name}</div>
 <div className="text-[3.5px] sm:text-[5px] text-slate-400 font-mono truncate">{row.sub}</div>
 </div>
 <div className={`col-span-1 text-[3.8px] sm:text-[5.5px] font-extrabold ${row.sev === 'Critical' ? 'text-red-600' : 'text-amber-500'}`}>{row.sev}</div>
 <div className="col-span-1">
 <span className={`text-[3.5px] sm:text-[5px] font-bold px-0.5 py-0.2 rounded border ${row.type === 'SoD' ? 'bg-slate-100 border-slate-300 text-slate-700' : 'bg-orange-50 border-orange-200 text-orange-700'}`}>{row.type}</span>
 </div>
 <div className="col-span-1 text-[3.8px] sm:text-[5.5px] text-slate-600 font-bold">{row.mod}</div>
 <div className="col-span-1 text-[3.8px] sm:text-[5.5px] text-slate-600">{row.mech}</div>
 <div className="col-span-1 flex items-center gap-0.5">
 <div className="flex-1 h-0.5 bg-slate-100 rounded-full overflow-hidden">
 <div className={`h-full rounded-full ${row.wt >= 90 ? 'bg-red-500' : 'bg-amber-500'}`} style={{ width: `${row.wt}%` }}></div>
 </div>
 <span className={`text-[3.8px] sm:text-[5.5px] font-black ${row.wt >= 90 ? 'text-red-600' : 'text-amber-600'}`}>{row.wt}</span>
 </div>
 <div className="col-span-1 flex items-center gap-0.5">
 <span className="w-1 h-1 rounded-full bg-emerald-500 inline-block"></span>
 <span className="text-[3.8px] sm:text-[5.5px] text-emerald-600 font-bold">Active</span>
 </div>
 <div className="col-span-1">
 <span className="text-[3.5px] sm:text-[5px] font-extrabold text-white bg-red-600 px-0.5 py-0.2 rounded">▶ Analyze</span>
 </div>
 </div>
 ))}
 </div>
);

export const AccessTrackingMiniMockup = () => (
 <img src="/images/mockups/new_request.png" alt="New Request" className="w-full aspect-[16/10] object-cover object-left-top rounded-xl border border-slate-200 shadow-sm" />
);

export const WorkspaceReportingMiniMockup = () => (
 <img src="/images/mockups/audit_workspace.png" alt="Audit Workspace" className="w-full aspect-[16/10] object-cover object-left-top rounded-xl border border-slate-200 shadow-sm" />
);

export const SessionMonitoringMiniMockup = () => (
 <div className="w-full aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
 {/* Header */}
 <div className="bg-white border-b border-slate-200 px-1.5 sm:px-3 py-1 sm:py-2 flex items-center justify-between">
 <div>
 <h3 className="text-[7px] sm:text-[10px] font-extrabold text-slate-900">Sessions</h3>
 <p className="text-[4.2px] sm:text-[6px] text-slate-500">Manage active firefighter sessions and monitor availability</p>
 </div>
 <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded px-1.5 py-1 text-[4.2px] sm:text-[6px] text-slate-500">
 <Search className="w-2 h-2" /> Search IDs...
 </div>
 </div>
 <div className="flex flex-1 overflow-hidden">
 {/* Sidebar */}
 <div className="w-1/3 border-r border-slate-200 bg-slate-50 flex flex-col">
 <div className="p-1 sm:p-2 border-b border-slate-200 bg-slate-100">
 <div className="text-[5.2px] sm:text-[7.5px] font-bold text-slate-800 flex items-center gap-1"><Database className="w-2 h-2 text-red-500" /> MSQ System</div>
 <div className="text-[3.5px] sm:text-[5px] text-slate-500 mt-0.5">3 active sessions</div>
 </div>
 <div className="p-1 sm:p-2 border-b border-slate-100 flex justify-between items-center bg-white border-l-2 border-l-red-500">
 <span className="text-[4.2px] sm:text-[6px] font-bold text-slate-700">FI Module</span>
 <span className="text-[4.2px] sm:text-[6px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">2</span>
 </div>
 <div className="p-1 sm:p-2 border-b border-slate-100 flex justify-between items-center hover:bg-white transition-colors cursor-pointer">
 <span className="text-[4.2px] sm:text-[6px] font-bold text-slate-700">HR Module</span>
 <span className="text-[4.2px] sm:text-[6px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">1</span>
 </div>
 </div>
 {/* Main Content */}
 <div className="flex-1 bg-white p-1 sm:p-2 flex flex-col gap-1 sm:gap-1.5 overflow-hidden">
 <div className="flex items-center justify-between mb-1">
 <span className="text-[5.2px] sm:text-[7.5px] font-bold text-slate-800">FI Module Sessions</span>
 <div className="flex gap-1">
 <span className="text-[3.8px] sm:text-[5.5px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded border border-emerald-100">Active: 2</span>
 <span className="text-[3.8px] sm:text-[5.5px] font-bold text-slate-500 bg-slate-50 px-1 py-0.5 rounded border border-slate-200">Available: 3</span>
 </div>
 </div>
 
 <div className="grid grid-cols-2 gap-1 sm:gap-2">
 {/* Card 1 */}
 <div className="border border-slate-200 rounded p-1 sm:p-1.5 shadow-sm bg-slate-50">
 <div className="flex justify-between items-start mb-1 sm:mb-1.5">
 <span className="text-[4.6px] sm:text-[6.5px] font-bold text-slate-800">Sarah Jenkins</span>
 <span className="text-[3.5px] sm:text-[5px] font-bold text-emerald-600 bg-emerald-100 px-1 py-0.5 rounded">Active</span>
 </div>
 <div className="flex items-center gap-1 sm:gap-1.5 mb-1 sm:mb-2">
 <div className="w-5 h-5 rounded bg-blue-100 text-blue-700 flex items-center justify-center text-[5.2px] sm:text-[7.5px] font-bold">SJ</div>
 <div>
 <div className="text-[4.2px] sm:text-[6px] font-mono font-bold text-slate-700">FF_FI_01</div>
 <div className="text-[3.5px] sm:text-[5px] text-slate-500">PRD System</div>
 </div>
 </div>
 <div className="flex justify-between text-[3.5px] sm:text-[5px] text-slate-500 mb-1">
 <span>DURATION</span>
 <span className="font-bold text-slate-700">1h 45m left</span>
 </div>
 <div className="flex justify-between text-[3.2px] sm:text-[4.5px] text-slate-400 mb-1 sm:mb-1.5">
 <span>Started: 09:00 AM</span>
 <span>Ends: 12:00 PM</span>
 </div>
 <button className="w-full py-1 text-[3.8px] sm:text-[5.5px] font-bold text-red-600 bg-red-50 border border-red-200 rounded">Revoke Session</button>
 </div>

 {/* Card 2 */}
 <div className="border border-slate-200 rounded p-1 sm:p-1.5 shadow-sm bg-slate-50">
 <div className="flex justify-between items-start mb-1 sm:mb-1.5">
 <span className="text-[4.6px] sm:text-[6.5px] font-bold text-slate-800">Michael Chang</span>
 <span className="text-[3.5px] sm:text-[5px] font-bold text-emerald-600 bg-emerald-100 px-1 py-0.5 rounded">Active</span>
 </div>
 <div className="flex items-center gap-1 sm:gap-1.5 mb-1 sm:mb-2">
 <div className="w-5 h-5 rounded bg-purple-100 text-purple-700 flex items-center justify-center text-[5.2px] sm:text-[7.5px] font-bold">MC</div>
 <div>
 <div className="text-[4.2px] sm:text-[6px] font-mono font-bold text-slate-700">FF_FI_02</div>
 <div className="text-[3.5px] sm:text-[5px] text-slate-500">PRD System</div>
 </div>
 </div>
 <div className="flex justify-between text-[3.5px] sm:text-[5px] text-slate-500 mb-1">
 <span>DURATION</span>
 <span className="font-bold text-red-600">0h 12m left</span>
 </div>
 <div className="flex justify-between text-[3.2px] sm:text-[4.5px] text-slate-400 mb-1 sm:mb-1.5">
 <span>Started: 10:15 AM</span>
 <span>Ends: 11:15 AM</span>
 </div>
 <button className="w-full py-1 text-[3.8px] sm:text-[5.5px] font-bold text-red-600 bg-red-50 border border-red-200 rounded">Revoke Session</button>
 </div>
 
 {/* Card 3 */}
 <div className="border border-slate-200 rounded p-1 sm:p-1.5 shadow-sm bg-slate-50">
 <div className="flex justify-between items-start mb-1 sm:mb-1.5">
 <span className="text-[4.6px] sm:text-[6.5px] font-bold text-slate-800">Emma Wilson</span>
 <span className="text-[3.5px] sm:text-[5px] font-bold text-amber-600 bg-amber-100 px-1 py-0.5 rounded">Paused</span>
 </div>
 <div className="flex items-center gap-1 sm:gap-1.5 mb-1 sm:mb-2">
 <div className="w-5 h-5 rounded bg-orange-100 text-orange-700 flex items-center justify-center text-[5.2px] sm:text-[7.5px] font-bold">EW</div>
 <div>
 <div className="text-[4.2px] sm:text-[6px] font-mono font-bold text-slate-700">FF_FI_03</div>
 <div className="text-[3.5px] sm:text-[5px] text-slate-500">PRD System</div>
 </div>
 </div>
 <div className="flex justify-between text-[3.5px] sm:text-[5px] text-slate-500 mb-1">
 <span>DURATION</span>
 <span className="font-bold text-slate-700">3h 00m left</span>
 </div>
 <div className="flex justify-between text-[3.2px] sm:text-[4.5px] text-slate-400 mb-1 sm:mb-1.5">
 <span>Started: 11:00 AM</span>
 <span>Ends: 02:00 PM</span>
 </div>
 <button className="w-full py-1 text-[3.8px] sm:text-[5.5px] font-bold text-slate-600 bg-white border border-slate-200 rounded">Resume Session</button>
 </div>

 {/* Card 4 */}
 <div className="border border-slate-200 rounded p-1 sm:p-1.5 shadow-sm bg-slate-50 opacity-60">
 <div className="flex justify-between items-start mb-1 sm:mb-1.5">
 <span className="text-[4.6px] sm:text-[6.5px] font-bold text-slate-800">James Brown</span>
 <span className="text-[3.5px] sm:text-[5px] font-bold text-slate-500 bg-slate-200 px-1 py-0.5 rounded">Ended</span>
 </div>
 <div className="flex items-center gap-1 sm:gap-1.5 mb-1 sm:mb-2">
 <div className="w-5 h-5 rounded bg-slate-200 text-slate-600 flex items-center justify-center text-[5.2px] sm:text-[7.5px] font-bold">JB</div>
 <div>
 <div className="text-[4.2px] sm:text-[6px] font-mono font-bold text-slate-700">FF_FI_04</div>
 <div className="text-[3.5px] sm:text-[5px] text-slate-500">PRD System</div>
 </div>
 </div>
 <div className="flex justify-between text-[3.5px] sm:text-[5px] text-slate-500 mb-1">
 <span>DURATION</span>
 <span className="font-bold text-slate-700">0h 0m left</span>
 </div>
 <div className="flex justify-between text-[3.2px] sm:text-[4.5px] text-slate-400 mb-1 sm:mb-1.5">
 <span>Started: 08:00 AM</span>
 <span>Ends: 09:00 AM</span>
 </div>
 <button className="w-full py-1 text-[3.8px] sm:text-[5.5px] font-bold text-slate-500 bg-slate-100 border border-slate-200 rounded" disabled>View Logs</button>
 </div>
 
 </div>
 </div>
 </div>
 </div>
);

export const SafeguardsAuditMiniMockup = () => (
 <img src="/images/mockups/escalations.png" alt="Sign-Off Escalations" className="w-full aspect-[16/10] object-cover object-left-top rounded-xl border border-slate-200 shadow-sm" />
);

export const ApprovalsRoutingMiniMockup = () => (
 <img src="/images/mockups/approvers.png" alt="High Level Approvers" className="w-full aspect-[16/10] object-cover object-left-top rounded-xl border border-slate-200 shadow-sm" />
);

export const VulnDashboardMiniMockup = () => (
  <div className="w-full aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
    <div className="bg-white border-b border-slate-200 px-1.5 sm:px-3 py-1 sm:py-2 flex items-center justify-between">
      <div className="flex items-center gap-1 sm:gap-1.5">
        <div className="w-4 h-4 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[5.9px] sm:text-[8.5px] text-red-500">⏱</div>
        <div>
          <div className="text-[6.3px] sm:text-[9px] font-extrabold text-slate-900">Vulnerability Dashboard</div>
          <div className="text-[3.8px] sm:text-[5.5px] text-slate-500">Real-time status across profile parameters, RFC health, certificates...</div>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[4.2px] sm:text-[6px] text-slate-700 font-bold">
        All Systems <span>▼</span>
      </div>
    </div>
    
    <div className="flex flex-col flex-1 p-1 sm:p-2 gap-1 sm:gap-2 overflow-hidden">
      {/* 6 Top Stats */}
      <div className="flex gap-1 sm:gap-1.5">
        {[
          { label: 'Certificates Expired', val: '17', c: 'text-red-600' },
          { label: 'RFC Failures', val: '39', c: 'text-red-600' },
          { label: 'Pending Updates', val: '89', c: 'text-amber-500' },
          { label: 'Profile Parameters', val: '110', c: 'text-slate-800' },
          { label: 'Inactive ICF Services', val: '1799', c: 'text-orange-500' },
          { label: 'Security Notes', val: '29', c: 'text-amber-600' },
        ].map((s, i) => (
          <div key={i} className="flex-1 bg-white border border-slate-200 rounded p-1 sm:p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <div className="text-[3.5px] sm:text-[5px] text-slate-500 font-bold mb-1 truncate">{s.label}</div>
            <div className={`text-[8.4px] sm:text-[12px] font-black ${s.c}`}>{s.val}</div>
          </div>
        ))}
      </div>

      {/* Module Status Cards (8 cards in 1 row) */}
      <div className="flex flex-col bg-white border border-slate-200 rounded p-1 sm:p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="text-[4.2px] sm:text-[6px] font-extrabold text-slate-900 mb-1 sm:mb-1.5">Module Status — <span className="text-red-600">● Live</span></div>
        <div className="flex gap-1 sm:gap-1.5">
          {[
            { title: 'Profile Parameters', val: '110', sub: '3 profiles' },
            { title: 'Scan RFC Health', val: '39 ⚠', sub: '25 ok · 0 unchecked', red: true },
            { title: 'Certificate Check', val: '17 ⚠', sub: '0 expiring soon', red: true },
            { title: 'Installed Products', val: '5', sub: 'of 6 products' },
            { title: 'Installed Software', val: '84', sub: 'of 92 components' },
            { title: 'ICF Service Check', val: '79', sub: '1878 total' },
            { title: 'Security Notes', val: '29', sub: '82 total' },
            { title: 'Client Security', val: '17 ⚠', sub: '6 critical', red: true },
          ].map((m, i) => (
            <div key={i} className="flex-1 bg-slate-50 border border-slate-200 rounded p-1">
              <div className="text-[3.5px] sm:text-[5px] text-slate-500 font-bold mb-0.5 truncate">{m.title}</div>
              <div className={`text-[5.9px] sm:text-[8.5px] font-black ${m.red ? 'text-red-600' : 'text-slate-800'}`}>{m.val}</div>
              <div className="text-[3.2px] sm:text-[4.5px] text-slate-400 truncate mt-0.5">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex gap-1 sm:gap-2 flex-1 overflow-hidden">
        {/* Status Breakdown */}
        <div className="w-1/2 flex flex-col gap-1 sm:gap-1.5">
          <div className="text-[4.2px] sm:text-[6px] font-extrabold text-slate-900 mb-0.5">Status Breakdown</div>
          <div className="grid grid-cols-2 gap-1 sm:gap-1.5 flex-1">
            <div className="bg-white border border-slate-200 rounded flex flex-col items-center justify-center p-1 shadow-[0_1px_2px_rgba(0,0,0,0.02)] relative">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-[3px] border-red-500 flex items-center justify-center text-[5.9px] sm:text-[8.5px] font-black mb-1">27</div>
              <div className="text-[3.8px] sm:text-[5.5px] font-bold text-slate-700">Certificate Status</div>
              <div className="text-[3.5px] sm:text-[5px] text-slate-500">17 Expired</div>
            </div>
            <div className="bg-white border border-slate-200 rounded flex flex-col items-center justify-center p-1 shadow-[0_1px_2px_rgba(0,0,0,0.02)] relative">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-[3px] border-red-500 flex items-center justify-center text-[5.9px] sm:text-[8.5px] font-black mb-1">64</div>
              <div className="text-[3.8px] sm:text-[5.5px] font-bold text-slate-700">RFC Connection Status</div>
              <div className="text-[3.5px] sm:text-[5px] text-slate-500">39 Failed</div>
            </div>
          </div>
        </div>
        {/* Progress Bars */}
        <div className="w-1/2 flex flex-col gap-1">
          <div className="text-[4.2px] sm:text-[6px] font-extrabold text-slate-900 mb-0.5">Update & Health Coverage</div>
          <div className="flex flex-col gap-1 flex-1 bg-white border border-slate-200 rounded p-1 sm:p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] justify-between">
            {[
              { label: 'Installed Products Up To Date', pct: '17%', w: 'w-[17%]', c: 'bg-amber-400', sub: '1 of 6 on latest release' },
              { label: 'Installed Software Up To Date', pct: '9%', w: 'w-[9%]', c: 'bg-amber-400', sub: '8 of 92 on latest release' },
              { label: 'RFC Destinations Healthy', pct: '39%', w: 'w-[39%]', c: 'bg-red-500', sub: '25 of 64 connecting successfully' },
              { label: 'ICF Services Active', pct: '8%', w: 'w-[8%]', c: 'bg-red-500', sub: '79 of 1878 services active', hiddenOnMobile: true },
            ].map((p, i) => (
              <div key={i} className={`mb-0.5 ${p.hiddenOnMobile ? 'hidden sm:block' : ''}`}>
                <div className="flex justify-between text-[3.8px] sm:text-[5.5px] font-bold text-slate-700 mb-0.5">
                  <span>{p.label}</span>
                  <span className={p.c.includes('red') ? 'text-red-600' : 'text-amber-500'}>{p.pct} ›</span>
                </div>
                <div className="h-1 bg-slate-100 rounded-full overflow-hidden mb-0.5">
                  <div className={`h-full ${p.c} ${p.w}`}></div>
                </div>
                <div className="text-[3.2px] sm:text-[4.5px] text-slate-400">{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const PatchingMiniMockup = () => (
  <div className="w-full aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
    <div className="bg-white border-b border-slate-200 px-1.5 sm:px-3 py-1 sm:py-2 flex items-center justify-between">
      <div className="flex items-center gap-1 sm:gap-1.5">
        <div className="w-4 h-4 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[5.9px] sm:text-[8.5px] text-red-500">🛡</div>
        <div>
          <div className="text-[6.3px] sm:text-[9px] font-extrabold text-slate-900">BTP Security Assessment</div>
          <div className="text-[3.8px] sm:text-[5.5px] text-slate-500">Users, Role Collections & Roles For MSQ System</div>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[4.2px] sm:text-[6px] text-slate-700 font-bold">
        All Systems <span>▼</span>
      </div>
    </div>
    
    <div className="flex flex-col flex-1 p-1 sm:p-2 gap-1 sm:gap-2 overflow-hidden">
      {/* Top Stat Cards */}
      <div className="flex gap-1 sm:gap-1.5">
        {[
          { label: 'Total Users', val: '16', color: 'text-slate-900', icon: '👥' },
          { label: 'Active', val: '16', color: 'text-emerald-600', icon: '✓' },
          { label: 'Inactive', val: '0', color: 'text-slate-400', icon: '—' },
          { label: 'Verified', val: '16', color: 'text-blue-500', icon: '🛡' },
          { label: 'Never Logged In', val: '5', color: 'text-orange-500', icon: '⚠' },
        ].map((s, i) => (
          <div key={i} className="flex-1 bg-slate-50 border border-slate-200 rounded p-1 sm:p-1.5 relative overflow-hidden">
            <div className="text-[3.8px] sm:text-[5.5px] text-slate-500 font-bold mb-1">{s.label}</div>
            <div className={`text-[8.4px] sm:text-[12px] font-black ${s.color}`}>{s.val}</div>
            <div className="absolute top-1.5 right-1.5 text-[5.2px] sm:text-[7.5px] opacity-40">{s.icon}</div>
          </div>
        ))}
      </div>

      {/* 3 Circular Cards */}
      <div className="flex gap-1 sm:gap-1.5">
        {[
          { title: 'Status Breakdown', items: [{label: 'Active', val: 16, c: 'bg-emerald-500'}, {label: 'Inactive', val: 0, c: 'bg-slate-300'}], total: 16, tc: 'text-emerald-600' },
          { title: 'Verification', items: [{label: 'Verified', val: 16, c: 'bg-blue-500'}, {label: 'Unverified', val: 0, c: 'bg-slate-300'}], total: 16, tc: 'text-blue-600' },
          { title: 'Login Activity', items: [{label: 'Logged In', val: 11, c: 'bg-emerald-500'}, {label: 'Never Logged In', val: 5, c: 'bg-orange-500'}], total: 16, tc: 'text-slate-800' },
        ].map((chart, i) => (
          <div key={i} className="flex-1 bg-white border border-slate-200 rounded p-1 sm:p-2 flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
             <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-[3px] border-slate-100 flex items-center justify-center relative">
               <div className={`text-[7px] sm:text-[10px] font-black ${chart.tc}`}>{chart.total}</div>
             </div>
             <div className="flex-1 ml-2">
               <div className="text-[3.8px] sm:text-[5.5px] font-bold text-slate-700 mb-1">{chart.title}</div>
               {chart.items.map((item, j) => (
                 <div key={j} className="flex justify-between items-center mb-0.5">
                   <div className="flex items-center gap-1">
                     <div className={`w-1 h-1 rounded-full ${item.c}`}></div>
                     <span className="text-[3.5px] sm:text-[5px] text-slate-600">{item.label}</span>
                   </div>
                   <span className="text-[3.8px] sm:text-[5.5px] font-bold text-slate-800">{item.val}</span>
                 </div>
               ))}
             </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded overflow-hidden flex-1 flex flex-col">
        <div className="grid grid-cols-12 gap-1 px-1 sm:px-2 py-1 bg-slate-50 border-b border-slate-200 text-[3.8px] sm:text-[5.5px] font-bold text-slate-500">
          <div className="col-span-3">Full Name</div>
          <div className="col-span-3">Username / Email</div>
          <div className="col-span-1">Groups</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1">Verified</div>
          <div className="col-span-2">Last Login</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>
        {[
          { name: 'Anbarasu Thillairajan', email: 'anbarasu.t@...', groups: '8', date: 'Jul 22, 2026' },
          { name: 'Anthony Muthu K', email: 'anthony.m@...', groups: '11', date: 'Dec 29, 2025' },
          { name: 'Sahil A', email: 'sahil.almeida@...', groups: '4', date: 'Jun 3, 2026' },
          { name: 'Mani P', email: 'manip@...', groups: '6', date: 'Sep 21, 2023' },
          { name: 'Jyoti Patel', email: 'jyoti.p@...', groups: '2', date: 'Aug 18, 2026', hiddenOnMobile: true },
          { name: 'Prashanth Raja', email: 'prashanth.r@...', groups: '5', date: 'Feb 11, 2026', hiddenOnMobile: true },
          { name: 'Mayank Bhateja', email: 'mayank.b@...', groups: '3', date: 'Mar 15, 2026', hiddenOnMobile: true },
          { name: 'Srinivasan K', email: 'srini.k@...', groups: '12', date: 'Jan 8, 2026', hiddenOnMobile: true },
          { name: 'Laura Chen', email: 'laura.c@...', groups: '7', date: 'May 20, 2026', hiddenOnMobile: true },
        ].map((r, i) => (
          <div key={i} className={`grid grid-cols-12 gap-1 px-1 sm:px-2 py-1 border-b border-slate-50 text-[3.5px] sm:text-[5px] items-center hover:bg-slate-50 transition-colors ${r.hiddenOnMobile ? 'hidden sm:grid' : ''}`}>
            <div className="col-span-3 font-bold text-slate-800">{r.name}</div>
            <div className="col-span-3 text-slate-500">{r.email}</div>
            <div className="col-span-1 font-bold text-slate-700">{r.groups} Groups</div>
            <div className="col-span-1 text-emerald-600 font-bold">● Active</div>
            <div className="col-span-1 text-blue-500 font-bold">Verified</div>
            <div className="col-span-2 text-slate-500">{r.date}</div>
            <div className="col-span-1 text-red-600 font-bold text-right cursor-pointer">Details</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ExpiryMiniMockup = () => (
  <div className="w-full aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
    <div className="bg-white border-b border-slate-200 px-1.5 sm:px-3 py-1 sm:py-2 flex items-center justify-between">
      <div className="flex items-center gap-1 sm:gap-1.5">
        <div className="w-4 h-4 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[5.9px] sm:text-[8.5px] text-red-500">📄</div>
        <div>
          <div className="text-[6.3px] sm:text-[9px] font-extrabold text-slate-900">Security Notes</div>
          <div className="text-[3.8px] sm:text-[5.5px] text-slate-500">SAP security notes and patch status across your landscape</div>
        </div>
      </div>
    </div>
    
    <div className="flex flex-col flex-1 p-1 sm:p-2 gap-1 sm:gap-2 overflow-hidden">
      {/* 6 Stat Cards */}
      <div className="flex gap-1 sm:gap-1.5">
        {[
          { label: 'Total Notes', val: '82', c: 'text-slate-900' },
          { label: 'Completely Impl...', val: '0', c: 'text-emerald-500' },
          { label: 'Can Be Impl...', val: '29', c: 'text-amber-500' },
          { label: 'Cannot Be Impl...', val: '52', c: 'text-red-500' },
          { label: 'Incompletely Impl...', val: '0', c: 'text-blue-500' },
          { label: 'Unknown', val: '1', c: 'text-slate-500' },
        ].map((s, i) => (
          <div key={i} className={`flex-1 bg-white border border-slate-200 rounded p-1 sm:p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] ${i===0 ? 'border-l-2 border-l-slate-800' : ''}`}>
            <div className="text-[3.8px] sm:text-[5.5px] text-slate-500 font-bold mb-1 truncate">{s.label}</div>
            <div className={`text-[8.4px] sm:text-[12px] font-black ${s.c}`}>{s.val}</div>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center bg-white px-1 sm:px-2 py-1 sm:py-1.5 border border-slate-200 rounded shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="flex gap-1 sm:gap-2 text-[4.2px] sm:text-[6px] text-slate-500">
          <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded">Search notes...</div>
          <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded">All Priorities ▼</div>
          <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded">All Statuses ▼</div>
        </div>
        <div className="flex gap-1">
          <button className="bg-red-600 text-white text-[3.8px] sm:text-[5.5px] font-bold px-1 sm:px-2 py-1 rounded">Upload</button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded overflow-hidden flex-1 flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="grid grid-cols-12 gap-1 px-1 sm:px-2 py-1 bg-slate-50 border-b border-slate-200 text-[3.8px] sm:text-[5.5px] font-bold text-slate-500">
          <div className="col-span-1">Note</div>
          <div className="col-span-5">Title</div>
          <div className="col-span-2">Priority</div>
          <div className="col-span-1">CVSS</div>
          <div className="col-span-3">Status</div>
        </div>
        {[
          { note: '3727078', title: '[CVE-2026-40128] Directory Traversal vulnerability...', pri: 'Hot News', cvss: '9.0', status: 'Cannot Be Implemented', sCol: 'text-red-600' },
          { note: '3515598', title: '[CVE-2026-44771] Missing Authorization check...', pri: 'Correction', cvss: '4.3', status: 'Can Be Implemented', sCol: 'text-amber-500' },
          { note: '3763800', title: '[Multiple CVEs] Multiple vulnerabilities in Apache...', pri: 'High Priority', cvss: '8.1', status: 'Cannot Be Implemented', sCol: 'text-red-600' },
          { note: '3773304', title: '[CVE-2026-58233] Remote Code Execution...', pri: 'High Priority', cvss: '7.6', status: 'Cannot Be Implemented', sCol: 'text-red-600' },
          { note: '3775990', title: '[CVE-2026-62111] Denial of service (DOS)...', pri: 'Correction', cvss: '5.4', status: 'Can Be Implemented', sCol: 'text-amber-500', hiddenOnMobile: true },
          { note: '3819922', title: '[CVE-2026-78881] Information Disclosure...', pri: 'High Priority', cvss: '7.2', status: 'Cannot Be Implemented', sCol: 'text-red-600', hiddenOnMobile: true },
          { note: '3819933', title: '[CVE-2026-78892] Missing Authentication...', pri: 'Hot News', cvss: '9.8', status: 'Cannot Be Implemented', sCol: 'text-red-600', hiddenOnMobile: true },
          { note: '3821045', title: '[CVE-2026-80122] SQL Injection Vulnerability...', pri: 'High Priority', cvss: '8.5', status: 'Can Be Implemented', sCol: 'text-amber-500', hiddenOnMobile: true },
          { note: '3834412', title: '[CVE-2026-82999] Cross-Site Scripting (XSS)...', pri: 'Correction', cvss: '6.1', status: 'Can Be Implemented', sCol: 'text-amber-500', hiddenOnMobile: true },
          { note: '3845555', title: '[CVE-2026-90412] Server-Side Request Forgery...', pri: 'Hot News', cvss: '9.3', status: 'Cannot Be Implemented', sCol: 'text-red-600', hiddenOnMobile: true },
        ].map((r, i) => (
          <div key={i} className={`grid grid-cols-12 gap-1 px-1 sm:px-2 py-1 sm:py-1.5 border-b border-slate-50 text-[3.5px] sm:text-[5px] items-center hover:bg-slate-50 transition-colors ${r.hiddenOnMobile ? 'hidden sm:grid' : ''}`}>
            <div className="col-span-1 font-bold text-red-600">{r.note}</div>
            <div className="col-span-5 text-slate-600 truncate pr-2">{r.title}</div>
            <div className={`col-span-2 font-bold ${r.pri==='Hot News'?'text-red-600':r.pri==='High Priority'?'text-orange-500':'text-blue-500'}`}>{r.pri}</div>
            <div className="col-span-1 font-mono font-bold text-slate-700">{r.cvss}</div>
            <div className={`col-span-3 font-bold ${r.sCol}`}>{r.status}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ConfigDriftMiniMockup = () => (
 <div className="w-full aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
 <div className="bg-white border-b border-slate-200 px-1 sm:px-2.5 py-1 sm:py-1.5 flex items-center justify-between">
 <div className="flex items-center gap-1 sm:gap-1.5">
 <div className="w-4 h-4 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[5.9px] sm:text-[8.5px] text-red-500">📡</div>
 <div>
 <div className="text-[6.3px] sm:text-[9px] font-extrabold text-slate-900">Real-Time Threat Detection</div>
 <div className="text-[3.8px] sm:text-[5.5px] text-slate-500">Watch sensitive SM20 T-Codes for specific users and get notified the moment one fires</div>
 </div>
 </div>
 <div className="flex items-center gap-1">
 <span className="text-[4.2px] sm:text-[6px] text-slate-600 bg-white border border-slate-200 px-1 py-0.5 rounded font-bold flex items-center gap-0.5">⏱ History</span>
 <span className="text-[4.2px] sm:text-[6px] text-slate-600 bg-white border border-slate-200 px-1 py-0.5 rounded font-bold flex items-center gap-0.5">✉ Email Logs</span>
 </div>
 </div>
 <div className="flex">
 {/* Side nav */}
 <div className="w-1/3 border-r border-slate-200 bg-slate-50 p-1 sm:p-1.5">
 <div className="flex items-center justify-between mb-1 sm:mb-1.5">
 <span className="text-[4.2px] sm:text-[6px] font-bold text-slate-700">Watch Rules - 3</span>
 <span className="text-[3.8px] sm:text-[5.5px] font-bold text-white bg-red-600 px-1 rounded">+ New</span>
 </div>
 <div className="bg-white border border-slate-200 rounded p-1 mb-1 shadow-sm">
 <div className="text-[4.6px] sm:text-[6.5px] font-bold text-red-600 flex items-center gap-1 mb-0.5">
 <div className="w-1 h-1 rounded-full bg-red-500"></div> User Creation
 </div>
 <div className="text-[3.5px] sm:text-[5px] font-mono text-slate-500">SU01</div>
 </div>
 <div className="p-1 mb-1 opacity-60 hover:opacity-100 cursor-pointer">
 <div className="text-[4.2px] sm:text-[6px] font-bold text-slate-700 flex items-center gap-1 mb-0.5">
 <div className="w-1 h-1 rounded-full bg-slate-400"></div> PFCG Rule
 </div>
 <div className="text-[3.5px] sm:text-[5px] font-mono text-slate-500">PFCG</div>
 </div>
 </div>
 {/* Main content */}
 <div className="w-2/3 bg-white p-1 sm:p-2">
 <div className="flex items-center gap-1 mb-1">
 <div className="text-[6.3px] sm:text-[9px] font-extrabold text-slate-900">User Creation</div>
 <span className="text-[3.8px] sm:text-[5.5px] font-bold text-slate-400 bg-slate-100 px-1 rounded">INACTIVE</span>
 </div>
 <div className="text-[3.5px] sm:text-[5px] font-mono text-slate-400 mb-1 sm:mb-2">6b88e9d7-e06b-4ffa-8cdf-8c1e1333ad62</div>
 <div className="bg-red-50 border border-red-100 rounded px-1.5 py-1 mb-1 sm:mb-2">
 <div className="text-[4.2px] sm:text-[6px] text-red-600 font-bold flex items-center gap-1">
 <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex items-center justify-center text-white text-[3px] sm:text-[4px]">!</div>
 Last triggered 24d ago by SOLMAN_ADMIN (SU01)
 </div>
 </div>
 <div className="text-[4.2px] sm:text-[6px] font-bold text-slate-700 border-b border-slate-200 pb-0.5 mb-1">Latest T-Code Logs</div>
 <div className="bg-slate-50 border border-slate-100 rounded p-1 sm:p-1.5 flex gap-1 sm:gap-1.5 items-start">
 <div className="w-5 h-5 rounded bg-indigo-600 text-white flex items-center justify-center text-[5.9px] sm:text-[8.5px] font-bold shrink-0">SO</div>
 <div className="flex-1">
 <div className="flex items-center gap-1 mb-0.5">
 <span className="text-[5.2px] sm:text-[7.5px] font-bold text-slate-900">SOLMAN_ADMIN</span>
 <span className="text-[3.5px] sm:text-[5px] font-bold text-white bg-red-600 px-0.5 rounded">LATEST</span>
 </div>
 <div className="text-[3.5px] sm:text-[5px] text-slate-500 font-mono mb-0.5">MSQ-LAPTOP-72BPCK3L · 7/16/2026, 4:37:51 PM</div>
 <div className="text-[4.2px] sm:text-[6px] text-slate-700">Transaction SU01 started.</div>
 </div>
 <div className="text-right">
 <div className="text-[4.2px] sm:text-[6px] font-mono font-bold text-slate-700 bg-slate-200 px-1 rounded inline-block mb-1">SU01</div>
 <div className="text-[3.5px] sm:text-[5px] text-slate-400">24d ago</div>
 </div>
 </div>
 </div>
 </div>
 </div>
);

export const LiveThreatsMiniMockup = () => (
  <div className="w-full aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
    <div className="bg-white border-b border-slate-200 px-1.5 sm:px-3 py-1 sm:py-2 flex items-center justify-between">
      <div className="flex items-center gap-1 sm:gap-1.5">
        <div className="w-4 h-4 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[5.9px] sm:text-[8.5px] text-red-500">⚙</div>
        <div>
          <div className="text-[6.3px] sm:text-[9px] font-extrabold text-slate-900">Profile Parameter Analysis</div>
          <div className="text-[3.8px] sm:text-[5.5px] text-slate-500">Inspect SAP instance, default and start profiles side by side</div>
        </div>
      </div>
    </div>
    
    <div className="flex flex-col flex-1 p-1 sm:p-2 gap-1 sm:gap-2 overflow-hidden">
      {/* 4 Stat Cards */}
      <div className="flex gap-1 sm:gap-1.5">
        {[
          { label: 'Total Parameters', val: '1616', c: 'text-slate-900', bg: 'bg-slate-50' },
          { label: 'Matches SAP', val: '1515', c: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Changed From SAP', val: '101', c: 'text-red-600', bg: 'bg-red-50' },
          { label: 'Gateway/ICM', val: '185', c: 'text-red-600', bg: 'bg-white border border-slate-200' },
          { label: 'Password', val: '44', c: 'text-purple-600', bg: 'bg-white border border-slate-200' },
        ].map((s, i) => (
          <div key={i} className={`flex-1 rounded p-1 sm:p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] ${s.bg}`}>
            <div className="text-[3.8px] sm:text-[5.5px] text-slate-500 font-bold mb-1 truncate">{s.label}</div>
            <div className={`text-[8.4px] sm:text-[12px] font-black ${s.c}`}>{s.val}</div>
          </div>
        ))}
      </div>

      {/* 3 Circular Cards */}
      <div className="flex gap-1 sm:gap-1.5">
        {[
          { title: 'Status Breakdown', items: [{label: 'OK', val: 1515, c: 'bg-emerald-500'}, {label: 'Differs', val: 101, c: 'bg-red-500'}], total: 1616, tc: 'text-slate-800' },
          { title: 'SAP Recommended', items: [{label: 'Matches', val: 1515, c: 'bg-emerald-500'}, {label: 'Changes', val: 101, c: 'bg-red-500'}], total: 1616, tc: 'text-slate-800' },
          { title: 'Parameter Category', items: [{label: 'Gateway/ICM', val: 185, c: 'bg-red-500'}, {label: 'Password', val: 44, c: 'bg-purple-500'}], total: 1616, tc: 'text-slate-800' },
        ].map((chart, i) => (
          <div key={i} className="flex-1 bg-white border border-slate-200 rounded p-1 sm:p-1.5 flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
             <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-[3px] border-slate-100 flex items-center justify-center relative">
               <div className={`text-[5.2px] sm:text-[7.5px] font-black ${chart.tc}`}>{chart.total}</div>
             </div>
             <div className="flex-1 ml-2">
               <div className="text-[3.5px] sm:text-[5px] font-bold text-slate-700 mb-1">{chart.title}</div>
               {chart.items.map((item, j) => (
                 <div key={j} className="flex justify-between items-center mb-0.5">
                   <div className="flex items-center gap-1">
                     <div className={`w-1 h-1 rounded-full ${item.c}`}></div>
                     <span className="text-[3.2px] sm:text-[4.5px] text-slate-600">{item.label}</span>
                   </div>
                   <span className="text-[3.5px] sm:text-[5px] font-bold text-slate-800">{item.val}</span>
                 </div>
               ))}
             </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded overflow-hidden flex-1 flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="grid grid-cols-12 gap-1 px-1 sm:px-2 py-1 bg-slate-50 border-b border-slate-200 text-[3.8px] sm:text-[5.5px] font-bold text-slate-500">
          <div className="col-span-3">Parameter</div>
          <div className="col-span-3">Current Value</div>
          <div className="col-span-3">SAP Recommended</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-2">Comment</div>
        </div>
        {[
          { p: 'Autostart', c: '<not set>', r: '0', status: 'OK', sCol: 'text-emerald-600', comment: 'Automatic instance start...' },
          { p: 'CPU_CORES', c: '<not set>', r: '10', status: 'OK', sCol: 'text-emerald-600', comment: 'Processor cores used...' },
          { p: 'DIR_BINARY', c: '/usr/sap/MSQ/D00/exe', r: '/usr/sap/MSQ/SYS...', status: 'Differs', sCol: 'text-red-600', comment: 'Path where binaries...' },
          { p: 'DIR_CCMS', c: '/usr/sap/ccms', r: '/usr/sap/ccms', status: 'OK', sCol: 'text-emerald-600', comment: 'Root directory for...' },
          { p: 'login/min_password_lng', c: '8', r: '12', status: 'Differs', sCol: 'text-red-600', comment: 'Minimum password length...', hiddenOnMobile: true },
          { p: 'rdisp/max_wprun_time', c: '600', r: '600', status: 'OK', sCol: 'text-emerald-600', comment: 'Max work process run...', hiddenOnMobile: true },
          { p: 'icm/server_port_0', c: 'PROT=HTTP...', r: 'PROT=HTTPS...', status: 'Differs', sCol: 'text-red-600', comment: 'ICM Server Port...', hiddenOnMobile: true },
          { p: 'login/fails_to_session_end', c: '3', r: '3', status: 'OK', sCol: 'text-emerald-600', comment: 'Number of failed logins...', hiddenOnMobile: true },
          { p: 'login/fails_to_user_lock', c: '5', r: '3', status: 'Differs', sCol: 'text-red-600', comment: 'Failed logins to lock...', hiddenOnMobile: true },
          { p: 'login/password_expiration_time', c: '90', r: '30', status: 'Differs', sCol: 'text-red-600', comment: 'Password expiration days...', hiddenOnMobile: true },
        ].map((row, i) => (
          <div key={i} className={`grid grid-cols-12 gap-1 px-1 sm:px-2 py-1 border-b border-slate-50 text-[3.5px] sm:text-[5px] items-center hover:bg-slate-50 transition-colors ${row.hiddenOnMobile ? 'hidden sm:grid' : ''}`}>
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
);
