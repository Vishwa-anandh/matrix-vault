import React from "react";
import {
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
} from "lucide-react";
export const DirectoryCatalogMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden custom-scrollbar shadow-sm">
    {" "}
    {/* Header */}{" "}
    <div className="bg-white border-b border-slate-200 px-5 sm:px-2.5 py-3 sm:py-1.5 flex max-sm:flex-wrap items-center justify-between">
      {" "}
      <div className="flex items-center gap-3 sm:gap-1.5">
        {" "}
        <button className="text-[15.0px] sm:text-[6.0px] text-slate-500 px-2 sm:px-1 py-1 sm:py-0.5 font-bold">
          ←
        </button>{" "}
        <div className="flex items-center gap-2 sm:gap-1">
          <span className="text-[22.5px] sm:text-[9.0px] font-extrabold text-slate-900">
            Role Lens
          </span>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex items-center gap-2 sm:gap-1">
        {" "}
        <span className="text-[15.0px] sm:text-[6.0px] text-slate-600 bg-white border border-slate-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded font-bold">
          Results
        </span>{" "}
        <span className="text-[15.0px] sm:text-[6.0px] text-slate-600 bg-white border border-slate-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded font-bold">
          Reports
        </span>{" "}
        <span className="text-[15.0px] sm:text-[6.0px] text-slate-600 bg-white border border-slate-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded font-bold">
          Copy
        </span>{" "}
        <span className="text-[15.0px] sm:text-[6.0px] text-white bg-red-600 px-3 sm:px-1.5 py-1 sm:py-0.5 rounded font-extrabold">
          Generate Report
        </span>{" "}
        <span className="text-[15.0px] sm:text-[6.0px] text-slate-600 bg-white border border-slate-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded font-bold">
          + New
        </span>{" "}
      </div>{" "}
    </div>{" "}
    {/* Role Comparison Summary */}{" "}
    <div className="bg-white border-b border-slate-200 px-5 sm:px-2.5 py-4 sm:py-2 flex max-sm:flex-wrap items-center justify-between">
      {" "}
      <div className="flex items-center gap-4 sm:gap-2">
        {" "}
        <div className="w-12 sm:w-6 h-12 sm:h-6 rounded bg-red-100 border border-red-200 flex items-center justify-center text-[25.0px] sm:text-[10.0px] font-black text-red-600">
          ⚖
        </div>{" "}
        <span className="text-[21.25px] sm:text-[8.5px] font-extrabold text-slate-900">
          Role Comparison
        </span>{" "}
      </div>{" "}
      <div className="flex max-sm:flex-col max-sm:items-start max-sm:gap-2 items-center sm:gap-4 text-center">
        {" "}
        {[
          { val: "0", label: "Matched", color: "text-slate-700" },
          { val: "151", label: "Unmatched", color: "text-red-600" },
          { val: "27", label: "T-Codes", color: "text-slate-700" },
          { val: "8", label: "SoD Conflicts", color: "text-red-600" },
        ].map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            {" "}
            <span className={`text-[27.5px] sm:text-[11.0px] font-black ${s.color}`}>
              {s.val}
            </span>{" "}
            <span className="text-[12.5px] sm:text-[5.0px] text-slate-500 leading-tight">
              {s.label}
            </span>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>{" "}
    {/* Summary row */}{" "}
    <div className="bg-white border-b border-slate-200 px-5 sm:px-2.5 py-2 sm:py-1 flex max-sm:flex-col max-sm:items-start max-sm:gap-2 items-center sm:gap-4 text-[15.0px] sm:text-[6.0px]">
      {" "}
      <div className="flex items-center gap-2 sm:gap-1">
        {" "}
        <span className="font-black text-slate-900">0</span>{" "}
        <span className="text-slate-500">
          Matched — Auth rows present in ALL roles
        </span>{" "}
      </div>{" "}
      <div className="flex items-center gap-2 sm:gap-1">
        {" "}
        <span className="font-black text-red-600">151</span>{" "}
        <span className="text-slate-500">
          Unmatched — Auth rows missing from one or more roles
        </span>{" "}
      </div>{" "}
    </div>{" "}
    {/* Filter tabs */}{" "}
    <div className="bg-white border-b border-slate-200 px-5 sm:px-2.5 py-2 sm:py-1 flex items-center gap-3 sm:gap-1.5 overflow-hidden">
      {[
        { label: "All 151", active: true },
        { label: "Matched 0", active: false },
        { label: "Unmatched 151", active: false },
        { label: "T-Code 27", active: false },
        { label: "Auth Object 124", active: false },
      ].map((t, i) => (
        <span
          key={i}
          className={`flex-1 text-center shrink-0 text-[13.75px] sm:text-[5.5px] font-bold px-3 sm:px-1.5 py-1 sm:py-0.5 rounded border ${t.active
              ? "bg-slate-800 border-slate-700 text-white"
              : "bg-white border-slate-200 text-slate-600"
            }`}
        >
          {t.label}
        </span>
      ))}
    </div>
    {/* Table header */}{" "}
    <div className="grid grid-cols-12 gap-1 sm:gap-0.5 px-5 sm:px-2.5 py-1 sm:py-0.5 bg-slate-50 border-b border-slate-200 text-[13.75px] sm:text-[5.5px] font-bold text-slate-500 tracking-wider">
      {" "}
      <div className=" col-span-1 text-center">#</div>{" "}
      <div className=" col-span-2">Auth Object</div>{" "}
      <div className=" col-span-1">Field</div>{" "}
      <div className="col-span-1">Value</div>{" "}
      <div className="col-span-2">Description</div>{" "}
      <div className="col-span-1">Source</div>{" "}
      <div className="col-span-2">/ECRS/INTRASTAT</div>{" "}
      <div className="col-span-1">/BSNAGT</div>{" "}
      <div className="col-span-1 text-center">Status</div>{" "}
    </div>{" "}
    {/* Table rows */}{" "}
    {[
      {
        n: 1,
        obj: "/ECRS/POIA",
        field: "ACTVT",
        val: "03",
        desc: "Display",
        src: "Role",
        status: "ok",
      },
      {
        n: 2,
        obj: "/ECRS/POIA",
        field: "ACTVT",
        val: "01",
        desc: "Create",
        src: "Role",
        status: "ok",
      },
      {
        n: 3,
        obj: "/ECRS/POIA",
        field: "ACTVT",
        val: "06",
        desc: "Delete",
        src: "Role",
        status: "ok",
      },
      {
        n: 4,
        obj: "/ECRS/POIA",
        field: "ACTVT",
        val: "02",
        desc: "Change",
        src: "Role",
        status: "ok",
      },
      {
        n: 5,
        obj: "S_TCODE",
        field: "TCD",
        val: "SU01",
        desc: "User Maintenance",
        src: "Profile",
        status: "warn",
      },
      {
        n: 6,
        obj: "S_TCODE",
        field: "TCD",
        val: "PFCG",
        desc: "Role Maintenance",
        src: "Profile",
        status: "warn",
      },
      {
        n: 7,
        obj: "S_TCODE",
        field: "TCD",
        val: "SM59",
        desc: "RFC Connections",
        src: "Role",
        status: "warn",
      },
      {
        n: 8,
        obj: "F_BKPF_BUK",
        field: "BUKRS",
        val: "1000",
        desc: "Company Code 1000",
        src: "Role",
        status: "ok",
      },
      {
        n: 9,
        obj: "F_BKPF_BUK",
        field: "BUKRS",
        val: "2000",
        desc: "Company Code 2000",
        src: "Role",
        status: "ok",
      },
      {
        n: 10,
        obj: "V_VBAK_VKO",
        field: "VKORG",
        val: "1000",
        desc: "Sales Organization",
        src: "Role",
        status: "ok",
      },
    ].map((r, i) => (
      <div
        key={i}
        className="grid grid-cols-12 gap-1 sm:gap-0.5 text-[12.5px] sm:text-[5.0px] py-2 sm:py-1 border-b border-slate-50 items-center"
      >
        {" "}
        <div className=" col-span-1 text-slate-400 text-center">{r.n}</div>{" "}
        <div className=" col-span-2 font-mono font-bold text-slate-700">
          {r.obj}
        </div>{" "}
        <div className=" col-span-1 font-mono text-slate-500">{r.field}</div>{" "}
        <div className="col-span-1 font-mono text-slate-700">{r.val}</div>{" "}
        <div className="col-span-2 text-slate-500 truncate">{r.desc}</div>{" "}
        <div className="col-span-1 text-blue-500 font-bold hover:underline cursor-pointer">
          {r.src}
        </div>{" "}
        <div className="col-span-2 flex items-center gap-2 sm:gap-1 text-emerald-500 font-bold">
          {" "}
          <CheckCircle2 className="w-4 sm:w-2 h-4 sm:h-2" />{" "}
        </div>{" "}
        <div className="col-span-1 flex items-center justify-center text-slate-300">
          —
        </div>{" "}
        <div className="col-span-1 flex items-center justify-center">
          {" "}
          {r.status === "warn" ? (
            <div className="w-4 sm:w-2 h-4 sm:h-2 rounded bg-amber-100 text-amber-600 flex items-center justify-center text-[15.0px] sm:text-[6.0px] font-bold">
              !
            </div>
          ) : (
            <span className="text-slate-300">—</span>
          )}{" "}
        </div>{" "}
      </div>
    ))}{" "}
  </div>
);
export const CertificationsMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden custom-scrollbar shadow-sm">
    {" "}
    {/* Header */}{" "}
    <div className="bg-white border-b border-slate-200 px-5 sm:px-2.5 py-4 sm:py-2 flex max-sm:flex-wrap items-center justify-between">
      {" "}
      <div className="flex items-center gap-4 sm:gap-2">
        {" "}
        <div className="w-10 sm:w-5 h-10 sm:h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[21.25px] sm:text-[8.5px] font-black text-slate-700">
          AM
        </div>{" "}
        <div>
          {" "}
          <div className="text-[25.0px] sm:text-[10.0px] font-extrabold text-slate-900">
            Approver Management
          </div>{" "}
          <div className="text-[18.75px] sm:text-[7.5px] text-slate-500">
            615 covered · 0 unassigned roles
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex items-center gap-3 sm:gap-1.5">
        {" "}
        <span className="text-[18.75px] sm:text-[7.5px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded">
          100% covered
        </span>{" "}
        <div className="w-16 sm:w-8 h-3 sm:h-1.5 bg-slate-100 rounded-full overflow-hidden">
          {" "}
          <div className="h-full w-full bg-emerald-500 rounded-full"></div>{" "}
        </div>{" "}
        <span className="text-[18.75px] sm:text-[7.5px] text-slate-500 font-mono">
          615/615
        </span>{" "}
      </div>{" "}
    </div>{" "}
    {/* Sub-tabs */}{" "}
    <div className="bg-white border-b border-slate-200 px-5 sm:px-2.5 flex items-center gap-6 sm:gap-3 text-[21.25px] sm:text-[8.5px] font-bold">
      {" "}
      <span className="text-slate-900 border-b-2 border-red-500 py-3 sm:py-1.5">
        Role Approvers
      </span>{" "}
      <span className="text-slate-500 py-3 sm:py-1.5">Profile Approvers</span>{" "}
    </div>{" "}
    {/* Search/Filter bar */}{" "}
    <div className="bg-white border-b border-slate-200 px-5 sm:px-2.5 py-3 sm:py-1.5 flex items-center gap-4 sm:gap-2">
      {" "}
      <div className="flex items-center gap-3 sm:gap-1.5 bg-slate-100 border border-slate-200 rounded px-3 sm:px-1.5 py-1 sm:py-0.5 text-[18.75px] sm:text-[7.5px] text-slate-500">
        {" "}
        <span>All systems</span>
        <span>▼</span>{" "}
      </div>{" "}
      <div className="flex-1 flex items-center gap-3 sm:gap-1.5 bg-slate-50 border border-slate-200 rounded px-3 sm:px-1.5 py-1 sm:py-0.5 text-[18.75px] sm:text-[7.5px] text-slate-400">
        {" "}
        <Search className="w-4 sm:w-2 h-4 sm:h-2" /> <span>Search role name...</span>{" "}
      </div>{" "}
      <span className="text-[18.75px] sm:text-[7.5px] text-slate-500 font-bold">
        Unassigned only
      </span>{" "}
    </div>{" "}
    {/* Table header */}{" "}
    <div className="grid grid-cols-12 gap-2 sm:gap-1 px-5 sm:px-2.5 py-2 sm:py-1 bg-slate-50 border-b border-slate-200 text-[18.75px] sm:text-[7.5px] font-bold text-slate-500 tracking-wider">
      {" "}
      <div className=" col-span-4">Role Name</div>{" "}
      <div className=" col-span-2">System</div>{" "}
      <div className=" col-span-6">Assigned Approvers</div>{" "}
    </div>{" "}
    {/* Table rows */}{" "}
    {[
      { role: "/BSNAGT/ALL", approvers: ["John Smith", "Jane Doe"] },
      {
        role: "/ECRS/INTRASTAT...",
        approvers: ["Michael Lee", "Sarah Connor"],
      },
      { role: "/FLDQ/DQM_ADMIN", approvers: ["Jane Doe", "Emily Blunt"] },
      { role: "/GSINS/BPADD", approvers: ["John Smith", "Robert Baratheon"] },
      { role: "/IBPP/PREFERENCE...", approvers: ["Arya Stark", "Sansa Stark"] },
      { role: "Z_FI_ADMIN", approvers: ["Ned Stark", "Catelyn Tully"] },
      { role: "Z_HR_MASTER", approvers: ["Jon Snow", "Samwell Tarly"] },
      { role: "SAP_ALL", approvers: ["Tywin Lannister"] },
    ].map((row, i) => (
      <div
        key={i}
        className="grid grid-cols-12 gap-2 sm:gap-1 px-5 sm:px-2.5 py-3 sm:py-1.5 border-b border-slate-100 hover:bg-slate-50 transition-colors items-start"
      >
        {" "}
        <div className=" col-span-4 flex items-center gap-2 sm:gap-1">
          {" "}
          <div className="w-4 sm:w-2 h-4 sm:h-2 rounded-full bg-emerald-500 shrink-0"></div>{" "}
          <span className="text-[18.75px] sm:text-[7.5px] font-bold text-slate-800 truncate">
            {row.role}
          </span>{" "}
        </div>{" "}
        <div className=" col-span-2 flex items-center gap-2 sm:gap-1">
          {" "}
          <span className="text-[18.75px] sm:text-[7.5px] text-slate-600">PRD System</span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 sm:px-1 rounded">
            Active
          </span>{" "}
        </div>{" "}
        <div className=" col-span-6 flex items-center gap-2 sm:gap-1 flex-wrap">
          {" "}
          {row.approvers.map((a, j) => (
            <div
              key={j}
              className="flex items-center gap-2 sm:gap-1 bg-white border border-slate-200 rounded px-3 sm:px-1.5 py-1 sm:py-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            >
              {" "}
              <span className="text-[15.0px] sm:text-[6.0px] text-slate-900 font-bold">
                {a}
              </span>{" "}
              <span className="text-[12.5px] sm:text-[5.0px] text-slate-400 font-mono">
                @{a.split(" ")[0].toLowerCase()}...
              </span>{" "}
              <span className="text-[12.5px] sm:text-[5.0px] text-slate-300 ml-1">×</span>{" "}
            </div>
          ))}{" "}
          <div className="text-[15.0px] sm:text-[6.0px] text-slate-500 font-bold border border-slate-200 border-dashed rounded px-3 sm:px-1.5 py-1 sm:py-0.5 cursor-pointer hover:bg-slate-50">
            + Assign
          </div>{" "}
        </div>{" "}
      </div>
    ))}{" "}
  </div>
);
export const SimulationMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden custom-scrollbar shadow-sm">
    {" "}
    {/* Top header bar */}{" "}
    <div className="bg-white border-b border-slate-200 px-5 sm:px-2.5 py-3 sm:py-1.5 flex max-sm:flex-wrap items-center justify-between">
      {" "}
      <div className="flex items-center gap-3 sm:gap-1.5">
        {" "}
        <div className="w-8 sm:w-4 h-8 sm:h-4 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[21.25px] sm:text-[8.5px] text-red-500">
          {" "}
          <Sliders className="w-5 sm:w-2.5 h-5 sm:h-2.5" />{" "}
        </div>{" "}
        <div className="text-[25.0px] sm:text-[10.0px] font-extrabold text-slate-900">
          Role Simulator
        </div>{" "}
      </div>{" "}
      <div className="flex items-center gap-2 sm:gap-1">
        {" "}
        <span className="text-[15.0px] sm:text-[6.0px] text-white bg-red-600 px-4 sm:px-2 py-2 sm:py-1 rounded font-extrabold shadow-sm">
          Generate Report
        </span>{" "}
        <span className="text-[15.0px] sm:text-[6.0px] text-slate-600 bg-white border border-slate-200 px-4 sm:px-2 py-2 sm:py-1 rounded font-bold shadow-sm">
          ✨ New
        </span>{" "}
      </div>{" "}
    </div>{" "}
    {/* User info bar */}{" "}
    <div className="bg-white border-b border-slate-200 px-6 sm:px-3 py-4 sm:py-2 flex items-center gap-6 sm:gap-3">
      {" "}
      <div className="w-12 sm:w-6 h-12 sm:h-6 rounded bg-red-600 text-white font-black text-[27.5px] sm:text-[11.0px] flex items-center justify-center shadow-sm">
        AB
      </div>{" "}
      <div>
        {" "}
        <div className="text-[22.5px] sm:text-[9.0px] font-black text-slate-900">
          ABA Tester
        </div>{" "}
        <div className="text-[15.0px] sm:text-[6.0px] font-mono text-slate-500">
          ABAP_TEST03
        </div>{" "}
      </div>{" "}
    </div>{" "}
    {/* Current vs Simulated Roles */}{" "}
    <div className="flex gap-4 sm:gap-2 px-6 sm:px-3 py-4 sm:py-2 bg-slate-50 border-b border-slate-200">
      {" "}
      <div className="flex-1">
        {" "}
        <div className="text-[15.0px] sm:text-[6.0px] font-bold text-slate-500 mb-1">
          Current Roles (7)
        </div>{" "}
        <div className="flex flex-wrap gap-2 sm:gap-1">
          {" "}
          {["/BSNAGT/ALL", "/ECRS/INTRASTAT...", "Z_MATRIXVAULT..."].map(
            (r, i) => (
              <span
                key={i}
                className="text-[13.75px] sm:text-[5.5px] font-mono font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded"
              >
                {r}
              </span>
            ),
          )}{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex-1 border-l border-slate-200 pl-4 sm:pl-2">
        {" "}
        <div className="text-[15.0px] sm:text-[6.0px] font-bold text-emerald-600 mb-1">
          Simulated Changes (+3)
        </div>{" "}
        <div className="flex flex-wrap gap-2 sm:gap-1">
          {" "}
          {["+ /IBPP/PREFERENCE...", "+ /GSINS/BPADD"].map((r, i) => (
            <span
              key={i}
              className="text-[13.75px] sm:text-[5.5px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded"
            >
              {r}
            </span>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    {/* Risk summary */}{" "}
    <div className="px-6 sm:px-3 py-4 sm:py-2 bg-white flex items-center gap-6 sm:gap-3 border-b border-slate-200">
      {" "}
      <div className="w-20 sm:w-10 h-20 sm:h-10 rounded-full border-[3px] border-red-500 flex items-center justify-center text-[30.0px] sm:text-[12.0px] font-black text-red-600 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
        100
      </div>{" "}
      <div className="flex-1">
        {" "}
        <div className="flex items-center gap-2 sm:gap-1 text-[25.0px] sm:text-[10.0px] font-black text-red-600 mb-0.5">
          {" "}
          <Activity className="w-5 sm:w-2.5 h-5 sm:h-2.5" /> Critical Risk{" "}
        </div>{" "}
        <div className="hidden sm:block text-[18.75px] sm:text-[7.5px] text-slate-600">
          8 violations would be created. Review below before applying.
        </div>{" "}
      </div>{" "}
      <div className="flex gap-6 sm:gap-3 text-center border-l border-slate-200 pl-6 sm:pl-3">
        {" "}
        <div>
          {" "}
          <div className="text-[30.0px] sm:text-[12.0px] font-black text-slate-900">899</div>{" "}
          <div className="text-[12.5px] sm:text-[5.0px] text-slate-500 font-bold leading-tight">
            Rules Checked
          </div>{" "}
        </div>{" "}
        <div>
          {" "}
          <div className="text-[30.0px] sm:text-[12.0px] font-black text-red-600">8</div>{" "}
          <div className="text-[12.5px] sm:text-[5.0px] text-slate-500 font-bold leading-tight">
            New Violations
          </div>{" "}
        </div>{" "}
        <div>
          {" "}
          <div className="text-[30.0px] sm:text-[12.0px] font-black text-emerald-600">0</div>{" "}
          <div className="text-[12.5px] sm:text-[5.0px] text-slate-500 font-bold leading-tight">
            Would Close
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    {/* Detailed Violations List */}{" "}
    <div className="flex-1 bg-white overflow-hidden flex flex-col">
      {" "}
      <div className="px-6 sm:px-3 py-3 sm:py-1.5 bg-slate-50 border-b border-slate-200 text-[15.0px] sm:text-[6.0px] font-bold text-slate-600">
        {" "}
        Violations Breakdown{" "}
      </div>{" "}
      <div className="flex flex-col">
        {" "}
        {[
          {
            rule: "B3434",
            desc: "Critical Basis Authorization",
            sys: "PRD",
            type: "Critical",
            color: "text-red-600",
          },
          {
            rule: "FI002",
            desc: "Maintain Vendor Master & Post Invoice",
            sys: "PRD",
            type: "SoD",
            color: "text-red-600",
          },
          {
            rule: "HR091",
            desc: "Maintain PA & Run Payroll",
            sys: "QAS",
            type: "SoD",
            color: "text-amber-500",
          },
          {
            rule: "MM015",
            desc: "Create PO & Goods Receipt",
            sys: "PRD",
            type: "SoD",
            color: "text-amber-500",
          },
        ].map((v, i) => (
          <div
            key={i}
            className="flex max-sm:flex-wrap items-center justify-between px-6 sm:px-3 py-3 sm:py-1.5 border-b border-slate-100 hover:bg-slate-50"
          >
            {" "}
            <div className="flex items-center gap-4 sm:gap-2">
              {" "}
              <span className={`text-[13.75px] sm:text-[5.5px] font-mono font-bold ${v.color}`}>
                {v.rule}
              </span>{" "}
              <span className="text-[15.0px] sm:text-[6.0px] font-bold text-slate-700">
                {v.desc}
              </span>{" "}
            </div>{" "}
            <div className="flex items-center gap-3 sm:gap-1.5">
              {" "}
              <span className="text-[13.75px] sm:text-[5.5px] font-mono text-slate-500">
                {v.sys}
              </span>{" "}
              <span
                className={`text-[12.5px] sm:text-[5.0px] font-bold px-2 sm:px-1 py-1 sm:py-0.5 rounded ${v.type === "Critical" ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"}`}
              >
                {v.type}
              </span>{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>{" "}

  </div>
);
export const RemediationMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden custom-scrollbar shadow-sm">
    {" "}
    {/* Header */}{" "}
    <div className="bg-white border-b border-slate-200 px-5 sm:px-2.5 py-3 sm:py-1.5 flex max-sm:flex-wrap items-center justify-between">
      {" "}
      <div>
        {" "}
        <div className="flex items-center gap-3 sm:gap-1.5 mb-0.5">
          {" "}
          <div className="w-7 sm:w-3.5 h-7 sm:h-3.5 rounded bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
            {" "}
            <Activity className="w-4 sm:w-2 h-4 sm:h-2" />{" "}
          </div>{" "}
          <span className="text-[22.5px] sm:text-[9.0px] font-extrabold text-slate-900">
            Mitigation{" "}
            <span className="bg-purple-100 text-purple-700 text-[12.5px] sm:text-[5.0px] px-2 sm:px-1 rounded border border-purple-200 font-bold ml-1">
              Compensating Controls
            </span>
          </span>{" "}
        </div>{" "}
        <div className="text-[15.0px] sm:text-[6.0px] text-slate-500 pl-10 sm:pl-5">
          Track assignments, approvals, and the control library across SAP
          access risks
        </div>{" "}
      </div>{" "}
      <div className="w-8 sm:w-4 h-8 sm:h-4 bg-slate-50 border border-slate-200 rounded flex items-center justify-center">
        {" "}
        <span className="text-[18.75px] sm:text-[7.5px] text-slate-400">↻</span>{" "}
      </div>{" "}
    </div>{" "}
    {/* Tabs & Search */}{" "}
    <div className="bg-white px-4 sm:px-2 border-b border-slate-200 flex flex-col">
      {" "}
      <div className="flex gap-6 sm:gap-3 text-[18.75px] sm:text-[7.5px] font-bold border-b border-slate-100">
        {" "}
        <span className="text-purple-700 border-b-2 border-purple-600 py-3 sm:py-1.5">
          Assignments
        </span>{" "}
        <span className="text-slate-500 py-3 sm:py-1.5">My Pending</span>{" "}
        <span className="text-slate-500 py-3 sm:py-1.5">My Requests</span>{" "}
        <span className="text-slate-500 py-3 sm:py-1.5">Control Library</span>{" "}
      </div>{" "}
      <div className="py-3 sm:py-1.5 flex gap-3 sm:gap-1.5">
        {" "}
        <div className="flex items-center gap-2 sm:gap-1 bg-slate-50 border border-slate-200 rounded px-3 sm:px-1.5 py-1 sm:py-0.5 text-[15.0px] sm:text-[6.0px] text-slate-400 w-48 sm:w-24">
          {" "}
          <Search className="w-3 sm:w-1.5 h-3 sm:h-1.5" /> Search...{" "}
        </div>{" "}
        <div className="flex items-center gap-2 sm:gap-1 bg-slate-50 border border-slate-200 rounded px-3 sm:px-1.5 py-1 sm:py-0.5 text-[15.0px] sm:text-[6.0px] text-slate-600">
          {" "}
          System ▼{" "}
        </div>{" "}
        <div className="flex items-center gap-2 sm:gap-1 bg-white border border-slate-200 rounded px-3 sm:px-1.5 py-1 sm:py-0.5 text-[15.0px] sm:text-[6.0px] text-slate-600 font-bold">
          {" "}
          <span>▽</span> Add filter{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    {/* Table */}{" "}
    <div className="grid grid-cols-12 gap-2 sm:gap-1 px-5 sm:px-2.5 py-2 sm:py-1 bg-slate-50 border-b border-slate-200 text-[13.75px] sm:text-[5.5px] font-bold text-slate-500 tracking-wider">
      {" "}
      <div className=" col-span-1">Ticket</div>{" "}
      <div className=" col-span-1">Rule</div>{" "}
      <div className=" col-span-2">Subject</div>{" "}
      <div className="col-span-2">System</div>{" "}
      <div className="col-span-2">Control</div>{" "}
      <div className="col-span-1">Status</div>{" "}
      <div className="col-span-1">My Role</div>{" "}
      <div className="col-span-1">Approvers</div>{" "}
      <div className="col-span-1">Valid Until</div>{" "}
    </div>{" "}
    {/* Rows */}{" "}
    {[
      {
        tick: "MIT-2550",
        rule: "HR021",
        sub: "TESTCDHDR",
        subDesc: "User",
        sys: "6b8be9d7-..",
        ctrl: "3C059147",
        ctrlDesc: "Sample",
        status: "Pending Appro...",
        sColor: "text-amber-500",
        role: "—",
        app: "Arun BS",
        date: "Jul 10, 27",
      },
      {
        tick: "MIT-2549",
        rule: "FI105",
        sub: "JOHNDOE",
        subDesc: "User",
        sys: "2a4fe1b3-..",
        ctrl: "3C058221",
        ctrlDesc: "Review",
        status: "Active",
        sColor: "text-emerald-500",
        role: "—",
        app: "Jane Smith",
        date: "Aug 15, 27",
      },
      {
        tick: "MIT-2548",
        rule: "BASIS03",
        sub: "Z_BASIS_ADM",
        subDesc: "Role",
        sys: "1c8db2e5-..",
        ctrl: "3C054112",
        ctrlDesc: "Monitor",
        status: "Expired",
        sColor: "text-red-500",
        role: "Owner",
        app: "System",
        date: "Jan 01, 26",
      },
      {
        tick: "MIT-2547",
        rule: "MM042",
        sub: "MIKEDAVIS",
        subDesc: "User",
        sys: "9f2cc8d1-..",
        ctrl: "3C059900",
        ctrlDesc: "Approval",
        status: "Active",
        sColor: "text-emerald-500",
        role: "—",
        app: "Sarah Connor",
        date: "Dec 31, 27",
      },
      {
        tick: "MIT-2546",
        rule: "SD011",
        sub: "Z_SALES_REP",
        subDesc: "Role",
        sys: "5e7da4c2-..",
        ctrl: "3C057731",
        ctrlDesc: "Audit",
        status: "Pending Appro...",
        sColor: "text-amber-500",
        role: "Reviewer",
        app: "Michael Lee",
        date: "Nov 20, 27",
      },
      {
        tick: "MIT-2545",
        rule: "HR021",
        sub: "EMILYW",
        subDesc: "User",
        sys: "6b8be9d7-..",
        ctrl: "3C059147",
        ctrlDesc: "Sample",
        status: "Active",
        sColor: "text-emerald-500",
        role: "—",
        app: "Arun BS",
        date: "Jul 10, 27",
      },
    ].map((r, i) => (
      <div
        key={i}
        className="grid grid-cols-12 gap-2 sm:gap-1 px-5 sm:px-2.5 py-3 sm:py-1.5 bg-white text-[15.0px] sm:text-[6.0px] items-center border-b border-slate-50 hover:bg-slate-50 transition-colors"
      >
        {" "}
        <div className=" col-span-1 font-mono font-bold text-slate-900">
          {r.tick}
        </div>{" "}
        <div className=" col-span-1 font-mono font-bold text-purple-600">
          {r.rule}
        </div>{" "}
        <div className=" col-span-2">
          {" "}
          <div className="font-bold text-slate-800">{r.sub}</div>{" "}
          <div className="text-[12.5px] sm:text-[5.0px] text-slate-500">{r.subDesc}</div>{" "}
        </div>{" "}
        <div className="col-span-2 font-mono text-slate-600 truncate">
          {r.sys}
        </div>{" "}
        <div className="col-span-2 flex items-center gap-2 sm:gap-1">
          {" "}
          <CheckCircle2 className="w-3 sm:w-1.5 h-3 sm:h-1.5 text-slate-400" />{" "}
          <div>
            {" "}
            <div className="font-bold text-slate-800">{r.ctrl}</div>{" "}
            <div className="text-[12.5px] sm:text-[5.0px] text-slate-500">{r.ctrlDesc}</div>{" "}
          </div>{" "}
        </div>{" "}
        <div className={`col-span-1 font-bold ${r.sColor} truncate`}>
          {r.status}
        </div>{" "}
        <div className="col-span-1 text-slate-500">{r.role}</div>{" "}
        <div className="col-span-1 text-slate-700 font-bold truncate">
          {r.app}
        </div>{" "}
        <div className="col-span-1 font-mono text-slate-500 whitespace-nowrap">
          {r.date}
        </div>{" "}
      </div>
    ))}{" "}
  </div>
);
export const RiskIntelMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden custom-scrollbar shadow-sm">
    {" "}
    {/* Header */}{" "}
    <div className="bg-white border-b border-slate-200 px-5 sm:px-2.5 py-3 sm:py-1.5 flex max-sm:flex-wrap items-center justify-between gap-4 sm:gap-2">
      {" "}
      <div className="flex items-center gap-3 sm:gap-1.5">
        {" "}
        <div className="w-8 sm:w-4 h-8 sm:h-4 rounded bg-red-600 flex items-center justify-center shrink-0">
          {" "}
          <span className="text-white text-[15.0px] sm:text-[6.0px] font-black">⚙</span>{" "}
        </div>{" "}
        <div>
          {" "}
          <div className="text-[22.5px] sm:text-[9.0px] font-extrabold text-slate-900">
            Risk Rule Builder
          </div>{" "}
          <div className="text-[13.75px] sm:text-[5.5px] text-slate-500">
            899 rules · 899 active
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex items-center gap-2 sm:gap-1 shrink-0">
        {" "}
        <div className="flex items-center gap-2 sm:gap-1 bg-slate-50 border border-slate-200 rounded px-3 sm:px-1.5 py-1 sm:py-0.5 text-[15.0px] sm:text-[6.0px] text-slate-400">
          {" "}
          <Search className="w-3 sm:w-1.5 h-3 sm:h-1.5" />
          <span>Search name, code, T-code...</span>{" "}
        </div>{" "}
        <span className="text-[15.0px] sm:text-[6.0px] text-slate-500 bg-slate-100 border border-slate-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded font-bold">
          Bulk Actions
        </span>{" "}
        <span className="text-[15.0px] sm:text-[6.0px] text-blue-600 bg-blue-50 border border-blue-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded font-bold">
          Auth Set · Synced →
        </span>{" "}
        <span className="text-[15.0px] sm:text-[6.0px] text-slate-600 bg-white border border-slate-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded font-bold">
          Scans
        </span>{" "}
        <span className="text-[15.0px] sm:text-[6.0px] text-slate-600 bg-white border border-slate-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded font-bold">
          Import
        </span>{" "}
        <span className="text-[15.0px] sm:text-[6.0px] text-white bg-red-600 px-3 sm:px-1.5 py-1 sm:py-0.5 rounded font-extrabold">
          + New Rule
        </span>{" "}
      </div>{" "}
    </div>{" "}
    {/* Filter chips */}{" "}
    <div className="bg-white border-b border-slate-200 px-5 sm:px-2.5 py-2 sm:py-1 flex items-center gap-3 sm:gap-1.5">
      {" "}
      {[
        "Filters",
        "Type ",
        "Severity",
        "Status",
        "Risk Weight",
        "Mechanism",
        "Module",
      ].map((f, i) => (
        <span
          key={i}
          className={`text-[15.0px] sm:text-[6.0px] font-bold px-3 sm:px-1.5 py-1 sm:py-0.5 rounded border ${i === 0 ? "bg-slate-100 border-slate-300 text-slate-700" : "bg-white border-slate-200 text-slate-600"}`}
        >
          {f}
        </span>
      ))}{" "}
      <span className="text-[15.0px] sm:text-[6.0px] font-bold px-3 sm:px-1.5 py-1 sm:py-0.5 rounded border bg-blue-50 border-blue-200 text-blue-700 flex items-center gap-1 sm:gap-0.5">
        {" "}
        <span className="w-3 sm:w-1.5 h-3 sm:h-1.5 bg-blue-500 rounded-sm inline-block"></span>{" "}
        Show Inactive{" "}
      </span>{" "}
    </div>{" "}
    {/* Table header */}{" "}
    <div className="grid grid-cols-12 gap-1 sm:gap-0.5 px-5 sm:px-2.5 py-1 sm:py-0.5 bg-slate-50 border-b border-slate-200 text-[13.75px] sm:text-[5.5px] font-bold text-slate-500 tracking-wider">
      {" "}
      <div className=" col-span-1">Code</div>{" "}
      <div className=" col-span-4">Name</div>{" "}
      <div className=" col-span-1">Severity</div>{" "}
      <div className="col-span-1">Type</div>{" "}
      <div className="col-span-1">Module</div>{" "}
      <div className="col-span-1">Mechanism</div>{" "}
      <div className="col-span-1">Weight</div>{" "}
      <div className="col-span-1">Status</div>{" "}
      <div className="col-span-1">Action</div>{" "}
    </div>{" "}
    {/* Table rows */}{" "}
    {[
      {
        code: "B3434",
        name: "Sample",
        sub: "SAP_ALL",
        sev: "Critical",
        type: "SoD",
        mod: "OT",
        mech: "Profile",
        wt: 95,
      },
      {
        code: "CRM050",
        name: "CRM Configuration Superuser Role Holders",
        sub: "Z_CRM_CONFIG_ADMIN",
        sev: "Critical",
        type: "Critical Access",
        mod: "CRM",
        mech: "Role",
        wt: 95,
      },
      {
        code: "CRM049",
        name: "Legacy CRM Super Profile Holders",
        sub: "SAP_CRM_ALL",
        sev: "High",
        type: "SoD",
        mod: "CRM",
        mech: "Profile",
        wt: 76,
      },
      {
        code: "CRM048",
        name: "CRM Installed Base / Service Contract Admin",
        sub: "Z_CRM_IBASE_ADMIN",
        sev: "High",
        type: "SoD",
        mod: "CRM",
        mech: "Role",
        wt: 80,
      },
      {
        code: "FI012",
        name: "Vendor Master & AP Invoicing",
        sub: "Z_FI_AP_CLERK",
        sev: "High",
        type: "SoD",
        mod: "FI",
        mech: "Role",
        wt: 85,
      },
      {
        code: "HR088",
        name: "Payroll Execution & HR Master Data",
        sub: "Z_HR_PAYROLL",
        sev: "Critical",
        type: "SoD",
        mod: "HR",
        mech: "Role",
        wt: 99,
      },
      {
        code: "MM024",
        name: "Purchase Order Creation & Goods Receipt",
        sub: "Z_MM_BUYER",
        sev: "Medium",
        type: "SoD",
        mod: "MM",
        mech: "Role",
        wt: 60,
      },
      {
        code: "BAS001",
        name: "Unrestricted System Administration",
        sub: "SAP_NEW",
        sev: "Critical",
        type: "Critical Access",
        mod: "BC",
        mech: "Profile",
        wt: 100,
      },
    ].map((row, i) => (
      <div
        key={i}
        className="grid grid-cols-12 gap-1 sm:gap-0.5 px-5 sm:px-2.5 py-1 sm:py-0.5 border-b border-slate-100 hover:bg-slate-50 transition-colors items-center"
      >
        {" "}
        <div className=" col-span-1 text-[13.75px] sm:text-[5.5px] text-slate-600 font-mono">
          {row.code}
        </div>{" "}
        <div className=" col-span-4">
          {" "}
          <div className="text-[15.0px] sm:text-[6.0px] font-bold text-slate-800 truncate">
            {row.name}
          </div>{" "}
          <div className="text-[12.5px] sm:text-[5.0px] text-slate-400 font-mono truncate">
            {row.sub}
          </div>{" "}
        </div>{" "}
        <div
          className={` col-span-1 text-[13.75px] sm:text-[5.5px] font-extrabold ${row.sev === "Critical" ? "text-red-600" : "text-amber-500"}`}
        >
          {row.sev}
        </div>{" "}
        <div className=" col-span-1">
          {" "}
          <span
            className={`text-[12.5px] sm:text-[5.0px] font-bold px-1 sm:px-0.5 py-0.4 sm:py-0.2 rounded border ${row.type === "SoD" ? "bg-slate-100 border-slate-300 text-slate-700" : "bg-orange-50 border-orange-200 text-orange-700"}`}
          >
            {row.type}
          </span>{" "}
        </div>{" "}
        <div className="col-span-1 text-[13.75px] sm:text-[5.5px] text-slate-600 font-bold">
          {row.mod}
        </div>{" "}
        <div className="col-span-1 text-[13.75px] sm:text-[5.5px] text-slate-600">
          {row.mech}
        </div>{" "}
        <div className="col-span-1 flex items-center gap-1 sm:gap-0.5">
          {" "}
          <div className="flex-1 h-1 sm:h-0.5 bg-slate-100 rounded-full overflow-hidden">
            {" "}
            <div
              className={`h-full rounded-full ${row.wt >= 90 ? "bg-red-500" : "bg-amber-500"}`}
              style={{ width: `${row.wt}%` }}
            ></div>{" "}
          </div>{" "}
          <span
            className={`text-[13.75px] sm:text-[5.5px] font-black ${row.wt >= 90 ? "text-red-600" : "text-amber-600"}`}
          >
            {row.wt}
          </span>{" "}
        </div>{" "}
        <div className="col-span-1 flex items-center gap-1 sm:gap-0.5">
          {" "}
          <span className="w-2 sm:w-1 h-2 sm:h-1 rounded-full bg-emerald-500 inline-block"></span>{" "}
          <span className="text-[13.75px] sm:text-[5.5px] text-emerald-600 font-bold">
            Active
          </span>{" "}
        </div>{" "}
        <div className="col-span-1">
          {" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-extrabold text-white bg-red-600 px-1 sm:px-0.6 py-0.4 sm:py-0.4 rounded">
            Analyze
          </span>{" "}
        </div>{" "}
      </div>
    ))}{" "}
  </div>
);
export const AccessTrackingMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] overflow-hidden custom-scrollbar rounded-xl border border-slate-200 shadow-sm bg-[#f8f9fa] flex flex-col font-sans">
    {" "}
    {/* Top Navbar */}{" "}
    <div className="bg-white border-b border-slate-100 flex max-sm:flex-wrap items-center justify-between px-6 sm:px-3 py-4 sm:py-2 shrink-0">
      {" "}
      <div className="flex items-center gap-4 sm:gap-2">
        {" "}
        <div className="flex items-center gap-1 sm:gap-0.5">
          {" "}
          <Shield className="w-4 sm:w-2 h-4 sm:h-2 w-7 sm:w-3.5 h-7 sm:h-3.5 text-red-600" />{" "}
          <span className="text-[17.5px] sm:text-[7.0px] font-black tracking-tight text-red-600">
            MATRIXVAULT
          </span>{" "}
        </div>{" "}
        <div className="h-6 sm:h-3 w-px bg-slate-200 mx-1"></div>{" "}
        <div className="flex items-center gap-5 sm:gap-2.5 whitespace-nowrap">
          {" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <LayoutDashboard className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Dashboard
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <Users className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Access Control ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <ShieldCheck className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Governance{" "}
            <span className="bg-red-500 text-white px-1 sm:px-0.5 rounded-[2px] text-[10.0px] sm:text-[4.0px]">
              99+
            </span>{" "}
            ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-red-600 flex items-center gap-1 sm:gap-0.5 border-b border-red-600 pb-1 sm:pb-0.5">
            <GitMerge className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Workflow ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <BarChart2 className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Analytics ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <ShieldAlert className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Vulnerabilities{" "}
            <span className="bg-red-500 text-white px-1 sm:px-0.5 rounded-[2px] text-[10.0px] sm:text-[4.0px]">
              17
            </span>{" "}
            ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            Operations
          </span>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex items-center gap-4 sm:gap-2">
        {" "}
        <Search className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
        <Bell className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
        <div className="flex items-center gap-1 sm:gap-0.5">
          {" "}
          <div className="w-5 sm:w-2.5 h-5 sm:h-2.5 w-7 sm:w-3.5 h-7 sm:h-3.5 rounded-full bg-slate-100 flex items-center justify-center text-[10.0px] sm:text-[4.0px] font-bold text-slate-600">
            J
          </div>{" "}
          <div className="flex flex-col leading-none">
            {" "}
            <span className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-700">
              John Doe
            </span>{" "}
            <span className="text-[10.0px] sm:text-[4.0px] font-semibold text-red-500">
              Admin
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    {/* Header */}{" "}
    <div className="px-12 sm:px-6 py-8 sm:py-4 shrink-0">
      {" "}
      <h1 className="text-[25.0px] sm:text-[10.0px] font-extrabold text-slate-800 tracking-tight">
        New Request
      </h1>{" "}
      <p className="text-[15.0px] sm:text-[6.0px] text-slate-500 font-medium">
        Submit access request for approval
      </p>{" "}
    </div>{" "}
    {/* Main Content Area */}{" "}
    <div className="px-12 sm:px-6 pb-8 sm:pb-4 flex gap-8 sm:gap-4 items-start relative shrink-0">
      {" "}
      {/* Left Column (Forms) */}{" "}
      <div className="w-[65%] flex flex-col gap-8 sm:gap-4 shrink-0">
        {" "}
        {/* Access System Panel */}{" "}
        <div className="bg-white border border-slate-200 shadow-sm rounded-lg p-8 sm:p-4 flex flex-col gap-6 sm:gap-3">
          {" "}
          <div className="flex items-center gap-4 sm:gap-2 mb-1">
            {" "}
            <Database className="w-5 sm:w-2.5 h-5 sm:h-2.5 w-7 sm:w-3.5 h-7 sm:h-3.5 text-red-600" />{" "}
            <h2 className="text-[15.0px] sm:text-[6.0px] font-bold text-slate-800">
              Access System
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-2 gap-8 sm:gap-4">
            {" "}
            <div className="flex flex-col gap-2 sm:gap-1">
              {" "}
              <div className="flex justify-between items-center">
                {" "}
                <label className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-600">
                  Target System <span className="text-red-500">*</span>
                </label>{" "}
                <div className="flex items-center gap-1 sm:gap-0.5 text-[10.0px] sm:text-[4.0px] font-bold text-slate-400">
                  {" "}
                  <div className="w-2 sm:w-1 h-2 sm:h-1 w-3 sm:w-1.5 h-3 sm:h-1.5 rounded-full bg-emerald-400"></div>{" "}
                  HEALTHY{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-slate-50 border border-slate-200 rounded px-4 sm:px-2 py-3 sm:py-1.5 flex justify-between items-center">
                {" "}
                <div className="flex items-center gap-2 sm:gap-1">
                  {" "}
                  <span className="text-[12.5px] sm:text-[5.0px] font-semibold text-slate-700">
                    PRD - Production
                  </span>{" "}
                  <div className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></div>{" "}
                </div>{" "}
                <ArrowDown className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex flex-col gap-2 sm:gap-1">
              {" "}
              <label className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-600">
                Module <span className="text-red-500">*</span>
              </label>{" "}
              <div className="bg-slate-50 border border-slate-200 rounded px-4 sm:px-2 py-3 sm:py-1.5 flex justify-between items-center">
                {" "}
                <span className="text-[12.5px] sm:text-[5.0px] font-semibold text-slate-700">
                  HR - Human Resources
                </span>{" "}
                <ArrowDown className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid grid-cols-2 gap-8 sm:gap-4">
            {" "}
            <div className="bg-slate-50 border border-slate-200 rounded px-4 sm:px-2 py-3 sm:py-1.5 flex justify-between items-center">
              {" "}
              <div className="flex items-center gap-3 sm:gap-1.5 text-[12.5px] sm:text-[5.0px] font-semibold text-slate-700">
                {" "}
                <Clock className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
                08/11/2026 03:33:00 PM{" "}
              </div>{" "}
              <XCircle className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
            </div>{" "}
            <div className="bg-slate-50 border border-slate-200 rounded px-4 sm:px-2 py-3 sm:py-1.5 flex justify-between items-center">
              {" "}
              <div className="flex items-center gap-3 sm:gap-1.5 text-[12.5px] sm:text-[5.0px] font-semibold text-slate-700">
                {" "}
                <Clock className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
                08/11/2026 03:48:00 PM{" "}
              </div>{" "}
              <XCircle className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-slate-100/70 border border-slate-200 rounded p-5 sm:p-2.5 flex items-start gap-4 sm:gap-2">
            {" "}
            <Clock className="w-4 sm:w-2 h-4 sm:h-2 w-6 sm:w-3 h-6 sm:h-3 text-slate-400 mt-0.5" />{" "}
            <div className="flex flex-col">
              {" "}
              <span className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-600 tracking-wide">
                SAP System Time (America/New_York)
              </span>{" "}
              <span className="text-[12.5px] sm:text-[5.0px] font-extrabold text-slate-800 my-0.5">
                Aug 11, 2026, 6:03 AM → Aug 11, 2026, 6:18 AM
              </span>{" "}
              <span className="text-[11.25px] sm:text-[4.5px] font-medium text-slate-500">
                Your local time will be automatically converted for the SAP
                system
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Identity & Justification Panel */}{" "}
        <div className="bg-white border border-slate-200 shadow-sm rounded-lg p-8 sm:p-4 flex flex-col gap-6 sm:gap-3">
          {" "}
          <div className="flex items-center gap-4 sm:gap-2 mb-1">
            {" "}
            <UserCheck className="w-5 sm:w-2.5 h-5 sm:h-2.5 w-7 sm:w-3.5 h-7 sm:h-3.5 text-red-600" />{" "}
            <h2 className="text-[15.0px] sm:text-[6.0px] font-bold text-slate-800">
              Identity & Justification
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-2 gap-8 sm:gap-4">
            {" "}
            <div className="flex flex-col gap-2 sm:gap-1">
              {" "}
              <label className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-600">
                Firefighter ID <span className="text-red-500">*</span>
              </label>{" "}
              <div className="bg-slate-50 border border-slate-200 rounded px-4 sm:px-2 py-3 sm:py-1.5 flex justify-between items-center">
                {" "}
                <span className="text-[12.5px] sm:text-[5.0px] font-semibold text-slate-700">
                  user_demo1
                </span>{" "}
                <ArrowDown className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex flex-col gap-2 sm:gap-1">
              {" "}
              <div className="flex justify-between items-center">
                {" "}
                <label className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-600">
                  Incident Reference
                </label>{" "}
                <span className="text-[10.0px] sm:text-[4.0px] font-medium text-slate-400">
                  0/100
                </span>{" "}
              </div>{" "}
              <div className="bg-slate-50 border border-slate-200 rounded px-4 sm:px-2 py-3 sm:py-1.5 flex justify-between items-center">
                {" "}
                <span className="text-[12.5px] sm:text-[5.0px] font-semibold text-slate-400">
                  e.g. INC-99999
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Right Column (Request Summary) */}{" "}
      <div className="w-[35%] flex flex-col gap-6 sm:gap-3 shrink-0">
        {" "}
        <div className="bg-white border border-slate-200 shadow-sm rounded-lg p-8 sm:p-4">
          {" "}
          <h3 className="text-[12.5px] sm:text-[5.0px] font-extrabold text-slate-400 tracking-wider mb-4">
            Request Summary
          </h3>{" "}
          <div className="flex flex-col gap-4 sm:gap-2">
            {" "}
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 sm:pb-2">
              {" "}
              <span className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-400">
                System
              </span>{" "}
              <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-800">
                PRD - Production
              </span>{" "}
            </div>{" "}
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 sm:pb-2">
              {" "}
              <span className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-400">
                Module
              </span>{" "}
              <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-800">
                HR
              </span>{" "}
            </div>{" "}
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 sm:pb-2">
              {" "}
              <span className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-400">
                FF ID
              </span>{" "}
              <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-800">
                user_demo1
              </span>{" "}
            </div>{" "}
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 sm:pb-2">
              {" "}
              <span className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-400">
                Incident
              </span>{" "}
              <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-800">
                —
              </span>{" "}
            </div>{" "}
            <div className="flex max-sm:flex-wrap items-center justify-between pt-2 sm:pt-1">
              {" "}
              <div className="flex items-center gap-2 sm:gap-1 text-[11.25px] sm:text-[4.5px] font-bold text-slate-400">
                {" "}
                <Clock className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" />{" "}
                <span>11 Aug 2026, 03:33 PM → 03:48 PM</span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex items-start gap-3 sm:gap-1.5 mt-1 px-4 sm:px-2">
          {" "}
          <AlertTriangle className="w-4 sm:w-2 h-4 sm:h-2 w-5 sm:w-2.5 h-5 sm:h-2.5 text-red-500 shrink-0 mt-0.5" />{" "}
          <p className="text-[10.0px] sm:text-[4.0px] font-bold text-red-500 leading-tight">
            {" "}
            You are an approver (or delegated approver) for this FireFighter, so
            you can't submit a request for it yourself.{" "}
          </p>{" "}
        </div>{" "}
        <div className="text-center mt-4">
          {" "}
          <span className="text-[11.25px] sm:text-[4.5px] font-semibold text-slate-400">
            Routed to L1 → L2 after submission
          </span>{" "}
        </div>{" "}
      </div>{" "}
      {/* AI Robot Button */}{" "}
      <div className="absolute bottom-4 right-4 w-10 sm:w-5 h-10 sm:h-5 w-16 sm:w-8 h-16 sm:h-8 rounded-full bg-red-600 shadow-lg shadow-red-600/30 flex items-center justify-center text-white cursor-pointer z-10 hover:bg-red-700 transition-colors">
        {" "}
        <Bot className="w-5 sm:w-2.5 h-5 sm:h-2.5 w-8 sm:w-4 h-8 sm:h-4" />{" "}
        <div className="absolute top-0 right-0 w-2 sm:w-1 h-2 sm:h-1 w-4 sm:w-2 h-4 sm:h-2 bg-white rounded-full flex items-center justify-center p-[1px]">
          {" "}
          <div className="w-full h-full bg-slate-400 rounded-full"></div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>
);
export const WorkspaceReportingMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] overflow-hidden custom-scrollbar rounded-xl border border-slate-200 shadow-sm bg-white flex flex-col font-sans">
    {" "}
    {/* Top Navbar */}{" "}
    <div className="bg-white border-b border-slate-100 flex max-sm:flex-wrap items-center justify-between px-6 sm:px-3 py-4 sm:py-2 shrink-0">
      {" "}
      <div className="flex items-center gap-4 sm:gap-2">
        {" "}
        <div className="flex items-center gap-1 sm:gap-0.5">
          {" "}
          <Shield className="w-4 sm:w-2 h-4 sm:h-2 w-7 sm:w-3.5 h-7 sm:h-3.5 text-red-600" />{" "}
          <span className="text-[17.5px] sm:text-[7.0px] font-black tracking-tight text-red-600">
            MATRIXVAULT
          </span>{" "}
        </div>{" "}
        <div className="h-6 sm:h-3 w-px bg-slate-200 mx-1"></div>{" "}
        <div className="flex items-center gap-5 sm:gap-2.5 whitespace-nowrap">
          {" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <LayoutDashboard className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Dashboard
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <Users className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Access Control ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <ShieldCheck className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Governance{" "}
            <span className="bg-red-500 text-white px-1 sm:px-0.5 rounded-[2px] text-[10.0px] sm:text-[4.0px]">
              99+
            </span>{" "}
            ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-red-600 flex items-center gap-1 sm:gap-0.5 border-b border-red-600 pb-1 sm:pb-0.5">
            <GitMerge className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Workflow ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <BarChart2 className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Analytics ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <ShieldAlert className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Vulnerabilities{" "}
            <span className="bg-red-500 text-white px-1 sm:px-0.5 rounded-[2px] text-[10.0px] sm:text-[4.0px]">
              17
            </span>{" "}
            ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            Operations
          </span>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex items-center gap-4 sm:gap-2">
        {" "}
        <Search className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
        <Bell className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
        <div className="flex items-center gap-1 sm:gap-0.5">
          {" "}
          <div className="w-5 sm:w-2.5 h-5 sm:h-2.5 w-7 sm:w-3.5 h-7 sm:h-3.5 rounded-full bg-slate-100 flex items-center justify-center text-[10.0px] sm:text-[4.0px] font-bold text-slate-600">
            A
          </div>{" "}
          <div className="flex flex-col leading-none">
            {" "}
            <span className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-700">
              Jane Smith
            </span>{" "}
            <span className="text-[10.0px] sm:text-[4.0px] font-semibold text-red-500">
              Admin
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <div className="flex flex-1 overflow-hidden">
      {" "}
      {/* Sidebar Workspace */}{" "}
      <div className="w-[28%] bg-[#fcfcfc] border-r border-slate-200 flex flex-col shrink-0 overflow-hidden custom-scrollbar">
        {" "}
        <div className="p-6 sm:p-3 border-b border-slate-200 flex flex-col gap-4 sm:gap-2 shrink-0">
          {" "}
          <div className="flex items-center gap-2 sm:gap-1 font-bold text-slate-800 text-[15.0px] sm:text-[6.0px]">
            {" "}
            <FileText className="w-4 sm:w-2 h-4 sm:h-2 w-5 sm:w-2.5 h-5 sm:h-2.5 text-red-500" /> Audit
            Workspace{" "}
          </div>{" "}
          <div className="relative">
            {" "}
            <Search className="absolute left-1 top-1/2 -translate-y-1/2 w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
            <input
              type="text"
              placeholder="Search requests..."
              className="w-full bg-slate-100 border border-slate-200 rounded pl-10 sm:pl-5 pr-2 sm:pr-1 py-2 sm:py-1 text-[12.5px] sm:text-[5.0px] text-slate-600 pointer-events-none"
            />{" "}
          </div>{" "}
          <div className="flex gap-2 sm:gap-1">
            {" "}
            <div className="flex-1 bg-slate-100 border border-slate-200 rounded px-2 sm:px-1 py-2 sm:py-1 flex justify-between items-center text-[12.5px] sm:text-[5.0px] font-semibold text-slate-600">
              All Status <ArrowDown className="w-3 sm:w-1.5 h-3 sm:h-1.5" />
            </div>{" "}
            <div className="flex-1 bg-slate-100 border border-slate-200 rounded px-2 sm:px-1 py-2 sm:py-1 flex justify-between items-center text-[12.5px] sm:text-[5.0px] font-semibold text-slate-600">
              All Risk <ArrowDown className="w-3 sm:w-1.5 h-3 sm:h-1.5" />
            </div>{" "}
          </div>{" "}
          <div className="flex items-center gap-2 sm:gap-1 text-[12.5px] sm:text-[5.0px] font-medium text-slate-600">
            {" "}
            <input
              type="checkbox"
              className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 rounded border-slate-300 pointer-events-none"
            />{" "}
            CDHDR only{" "}
          </div>{" "}
        </div>{" "}
        {/* Requests List */}{" "}
        {[
          {
            id: "#REQ202608110005",
            status: "Expired",
            badge: "CDHDR",
            name: "Alice Johnson",
            time: "11 Aug 2026 | 02:03 pm",
            score: "20",
            pill1: "EMP",
            pill2: "Development",
            pill3: "ALICE",
          },
          {
            id: "#REQ202608110004",
            status: "Expired",
            badge: "CDHDR",
            name: "Bob Miller",
            time: "11 Aug 2026 | 01:55 pm",
            score: "20",
            pill1: "EMP",
            pill2: "Development",
            pill3: "BOB",
          },
          {
            id: "#REQ202608110003",
            status: "Expired",
            badge: "CDHDR",
            name: "Alice Johnson",
            time: "11 Aug 2026 | 01:25 pm",
            score: "85",
            pill1: "EMP",
            pill2: "Security",
            pill3: "ADMIN_FF_01",
            active: true,
          }
        ].map((req, i) => (
          <div
            key={i}
            className={`p-4 sm:p-2 border-b border-slate-100 hover:bg-slate-50 flex flex-col gap-2 sm:gap-1 shrink-0 ${req.active ? "bg-indigo-50/30 relative" : ""}`}
          >
            {" "}
            {req.active && (
              <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-0.5 bg-red-600"></div>
            )}{" "}
            <div className="flex justify-between items-center">
              {" "}
              <div className="flex items-center gap-2 sm:gap-1">
                {" "}
                <span className="text-[12.5px] sm:text-[5.0px] font-extrabold text-slate-800">
                  {req.id}
                </span>{" "}
                <span className="bg-red-50 text-red-600 text-[8.75px] sm:text-[3.5px] font-bold px-1 sm:px-0.5 rounded border border-red-100">
                  {req.badge}
                </span>{" "}
              </div>{" "}
              <span className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-500">
                {req.status}
              </span>{" "}
            </div>{" "}
            <div className="flex items-center gap-2 sm:gap-1">
              {" "}
              <span className="text-[10.0px] sm:text-[4.0px] text-slate-500 font-mono bg-slate-100 border border-slate-200 px-1 sm:px-0.5 rounded">
                🏢 {req.pill1}
              </span>{" "}
              <span className="text-[10.0px] sm:text-[4.0px] text-slate-500 font-mono bg-slate-100 border border-slate-200 px-1 sm:px-0.5 rounded">
                ⚙ {req.pill2}
              </span>{" "}
              <span className="text-[10.0px] sm:text-[4.0px] text-slate-500 font-mono bg-slate-100 border border-slate-200 px-1 sm:px-0.5 rounded">
                🔑 {req.pill3}
              </span>{" "}
            </div>{" "}
            <div className="flex justify-between items-end mt-0.5">
              {" "}
              <div className="flex flex-col gap-1 sm:gap-0.5">
                {" "}
                <span className="text-[13.75px] sm:text-[5.5px] font-bold text-slate-700">
                  {req.name}
                </span>{" "}
                <span className="text-[10.0px] sm:text-[4.0px] font-medium text-slate-400 flex items-center gap-1 sm:gap-0.5">
                  <Clock className="w-2 sm:w-1 h-2 sm:h-1" /> {req.time}
                </span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2 sm:gap-1">
                {" "}
                <div className="w-20 sm:w-10 h-2 sm:h-1 bg-slate-200 rounded-full overflow-hidden flex">
                  {" "}
                  <div
                    className={`h-full ${parseInt(req.score) > 50 ? "bg-red-500" : "bg-emerald-500"}`}
                    style={{ width: `${req.score}%` }}
                  ></div>{" "}
                </div>{" "}
                <span className="text-[12.5px] sm:text-[5.0px] font-black text-slate-800">
                  {req.score}
                  <span className="text-[10.0px] sm:text-[4.0px] text-slate-400 font-semibold">
                    /100
                  </span>
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
      {/* Main Panel */}{" "}
      <div className="w-[72%] bg-white flex flex-col relative shrink-0 overflow-hidden custom-scrollbar">
        {" "}
        <div className="p-8 sm:p-4 border-b border-slate-200 flex flex-col gap-6 sm:gap-3 shrink-0">
          {" "}
          <div className="flex justify-between items-center">
            {" "}
            <div className="flex items-center gap-4 sm:gap-2">
              {" "}
              <h2 className="text-[25.0px] sm:text-[10.0px] font-extrabold text-slate-800">
                #REQ202608110003
              </h2>{" "}
              <span className="text-[13.75px] sm:text-[5.5px] font-bold text-slate-500 bg-slate-100 px-2 sm:px-1 py-1 sm:py-0.5 rounded">
                Expired
              </span>{" "}
            </div>{" "}
            <div className="flex items-center gap-4 sm:gap-2">
              {" "}
              <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-800">
                High Risk
              </span>{" "}
              <div className="w-32 sm:w-16 h-2 sm:h-1 bg-slate-200 rounded-full overflow-hidden">
                {" "}
                <div
                  className="h-full bg-red-600"
                  style={{ width: "85%" }}
                ></div>{" "}
              </div>{" "}
              <span className="text-[15.0px] sm:text-[6.0px] font-black text-slate-800">
                85
                <span className="text-[11.25px] sm:text-[4.5px] text-slate-400 font-semibold">
                  /100
                </span>
              </span>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex gap-3 sm:gap-1.5">
            {" "}
            <span className="text-[11.25px] sm:text-[4.5px] text-slate-500 font-mono bg-slate-50 border border-slate-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded flex items-center gap-1 sm:gap-0.5">
              🏢 PRD_ERP <span className="text-slate-400">(PRD)</span>
            </span>{" "}
            <span className="text-[11.25px] sm:text-[4.5px] text-slate-500 font-mono bg-slate-50 border border-slate-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded flex items-center gap-1 sm:gap-0.5">
              ⚙ Security <span className="text-slate-400">(SEC)</span>
            </span>{" "}
            <span className="text-[11.25px] sm:text-[4.5px] text-slate-500 font-mono bg-slate-50 border border-slate-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded flex items-center gap-1 sm:gap-0.5">
              🔑 ADMIN_FF_01
            </span>{" "}
          </div>{" "}
        </div>{" "}
        {/* Tabs */}{" "}
        <div className="flex items-center gap-12 sm:gap-6 px-8 sm:px-4 border-b border-slate-200 text-[13.75px] sm:text-[5.5px] font-bold text-slate-500 bg-slate-50/50 shrink-0">
          {" "}
          <div className="flex items-center gap-2 sm:gap-1 py-5 sm:py-2.5 text-red-600 border-b-2 border-red-600">
            <FileText className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Overview
          </div>{" "}
          <div className="flex items-center gap-2 sm:gap-1 py-5 sm:py-2.5 hover:text-slate-700 cursor-pointer">
            <Activity className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Timeline
          </div>{" "}
          <div className="flex items-center gap-2 sm:gap-1 py-5 sm:py-2.5 hover:text-slate-700 cursor-pointer">
            <CheckCircle2 className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Approval Trail
          </div>{" "}
          <div className="flex items-center gap-2 sm:gap-1 py-5 sm:py-2.5 hover:text-slate-700 cursor-pointer">
            <FileText className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> SAP Logs
          </div>{" "}
          <div className="flex items-center gap-2 sm:gap-1 py-5 sm:py-2.5 hover:text-slate-700 cursor-pointer">
            <FileText className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Notes
          </div>{" "}
        </div>{" "}
        {/* Content Body */}{" "}
        <div className="flex flex-col sm:flex-row flex-1 p-8 sm:p-4 gap-8 sm:gap-4 shrink-0">
          {" "}
          {/* Left Data Column */}{" "}
          <div className="w-full sm:w-[55%] flex flex-col gap-8 sm:gap-4">
            {" "}
            <div>
              {" "}
              <h3 className="text-[13.75px] sm:text-[5.5px] font-extrabold text-slate-800 flex items-center gap-2 sm:gap-1 mb-2 border-b border-slate-100 pb-2 sm:pb-1">
                <KeyRound className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Access Identity
              </h3>{" "}
              <div className="flex flex-col gap-4 sm:gap-2 text-[12.5px] sm:text-[5.0px]">
                {" "}
                <div className="flex">
                  <span className="w-1/3 font-semibold text-slate-500 truncate">
                    System
                  </span>
                  <span className="w-2/3 font-bold text-slate-800 truncate">
                    PRD_ERP{" "}
                    <span className="text-slate-400 font-medium">(PRD)</span>
                  </span>
                </div>{" "}
                <div className="flex">
                  <span className="w-1/3 font-semibold text-slate-500 truncate">
                    Module
                  </span>
                  <span className="w-2/3 font-bold text-slate-800 truncate">
                    Security{" "}
                    <span className="text-slate-400 font-medium">(SEC)</span>
                  </span>
                </div>{" "}
                <div className="flex">
                  <span className="w-1/3 font-semibold text-slate-500 truncate">
                    Firefighter ID
                  </span>
                  <span className="w-2/3 font-bold text-slate-800 font-mono truncate">
                    ADMIN_FF_01
                  </span>
                </div>{" "}
                <div className="flex">
                  <span className="w-1/3 font-semibold text-slate-500 truncate">
                    System TZ
                  </span>
                  <span className="w-2/3 font-bold text-slate-800 truncate">
                    America/New_York
                  </span>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div>
              {" "}
              <h3 className="text-[13.75px] sm:text-[5.5px] font-extrabold text-slate-800 flex items-center gap-2 sm:gap-1 mb-2 border-b border-slate-100 pb-2 sm:pb-1 mt-2">
                <Info className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Request Details
              </h3>{" "}
              <div className="flex flex-col gap-4 sm:gap-2 text-[12.5px] sm:text-[5.0px]">
                {" "}
                <div className="flex">
                  <span className="w-1/3 font-semibold text-slate-500 truncate">
                    Request ID
                  </span>
                  <span className="w-2/3 font-bold text-slate-800 truncate">
                    #REQ202608110003
                  </span>
                </div>{" "}
                <div className="flex">
                  <span className="w-1/3 font-semibold text-slate-500 truncate">
                    Status
                  </span>
                  <span className="w-2/3 font-bold text-slate-800 truncate">
                    Expired
                  </span>
                </div>{" "}
                <div className="flex">
                  <span className="w-1/3 font-semibold text-slate-500 truncate">
                    Emergency
                  </span>
                  <span className="w-2/3 font-bold text-slate-800 truncate">No</span>
                </div>{" "}
                <div className="flex">
                  <span className="w-1/3 font-semibold text-slate-500 truncate">
                    Incident ID
                  </span>
                  <span className="w-2/3 font-bold text-slate-800 truncate">
                    INC-456
                  </span>
                </div>{" "}
                <div className="flex">
                  <span className="w-1/3 font-semibold text-slate-500 truncate">
                    Submitted By
                  </span>
                  <span className="w-2/3 font-bold text-slate-800 truncate">
                    Alice Johnson
                  </span>
                </div>{" "}
                <div className="flex">
                  <span className="w-1/3 font-semibold text-slate-500 truncate">
                    Submitted At
                  </span>
                  <span className="w-2/3 font-bold text-slate-800 truncate">
                    11 Aug 2026 | 01:25 pm
                  </span>
                </div>{" "}
                <div className="flex">
                  <span className="w-1/3 font-semibold text-slate-500 truncate">
                    Access Window
                  </span>
                  <span className="w-2/3 font-bold text-slate-800 truncate">
                    11 Aug 2026 | 01:25 pm → 11 Aug 2026 | 01:40 pm
                  </span>
                </div>{" "}

              </div>{" "}
            </div>{" "}
            <div>
              {" "}
              <h3 className="text-[13.75px] sm:text-[5.5px] font-extrabold text-slate-800 flex items-center gap-2 sm:gap-1 mb-2 border-b border-slate-100 pb-2 sm:pb-1 mt-2">
                <FileText className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Justification
              </h3>{" "}
              <div className="flex flex-col gap-4 sm:gap-2 text-[12.5px] sm:text-[5.0px]">
                {" "}
                <div className="flex">
                  <span className="w-1/3 font-semibold text-slate-500 truncate">
                    Business Justification
                  </span>
                  <span className="w-2/3 font-bold text-slate-800 truncate">
                    SYSTEM PATCH
                  </span>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Right Data Column */}{" "}
          <div className="w-full sm:w-[45%] flex flex-col gap-8 sm:gap-4 sm:border-l border-slate-100 sm:pl-4">
            {" "}
            {/* Approval Chain Box */}{" "}
            <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
              {" "}
              <div className="bg-slate-50 border-b border-slate-200 px-6 sm:px-3 py-4 sm:py-2 flex items-center gap-2 sm:gap-1">
                {" "}
                <CheckCircle2 className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-500" />{" "}
                <span className="text-[13.75px] sm:text-[5.5px] font-bold text-slate-800">
                  Approval Chain
                </span>{" "}
              </div>{" "}
              <div className="p-6 sm:p-3 flex flex-col gap-4 sm:gap-2">
                {" "}
                <div className="flex justify-between items-start">
                  {" "}
                  <span className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-500">
                    L1{" "}
                    <span className="text-emerald-500 ml-0.5">✓ Approved</span>
                  </span>{" "}
                  <span className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-500">
                    11 Aug 2026 | 01:25 pm
                  </span>{" "}
                </div>{" "}
                <div className="flex items-center gap-4 sm:gap-2 mt-1">
                  {" "}
                  <div className="w-8 sm:w-4 h-8 sm:h-4 w-12 sm:w-6 h-12 sm:h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-[12.5px] sm:text-[5.0px]">
                    CD
                  </div>{" "}
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-800">
                      Charlie Davis
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
              {" "}
              <div className="bg-slate-50 border-b border-slate-200 px-6 sm:px-3 py-4 sm:py-2 flex items-center gap-2 sm:gap-1">
                {" "}
                <CheckCircle2 className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-500" />{" "}
                <span className="text-[13.75px] sm:text-[5.5px] font-bold text-slate-800">
                  Sign-off
                </span>{" "}
              </div>{" "}
              <div className="p-6 sm:p-3">
                {" "}
                <div className="flex justify-between items-center">
                  {" "}
                  <span className="text-[12.5px] sm:text-[5.0px] font-semibold text-slate-600">
                    Status
                  </span>{" "}
                  <span className="text-[12.5px] sm:text-[5.0px] font-bold text-amber-500 flex items-center gap-1 sm:gap-0.5">
                    <Clock className="w-3 sm:w-1.5 h-3 sm:h-1.5" /> Pending
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* AI Risk Assessment Box */}{" "}
            <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm mt-2">
              {" "}
              <div className="bg-slate-50 border-b border-slate-200 px-6 sm:px-3 py-4 sm:py-2 flex items-center gap-2 sm:gap-1">
                {" "}
                <Bot className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-500" />{" "}
                <span className="text-[13.75px] sm:text-[5.5px] font-bold text-slate-800">
                  AI Risk Assessment
                </span>{" "}
              </div>{" "}
              <div className="p-6 sm:p-3 flex flex-col gap-6 sm:gap-3">
                {" "}
                <div className="flex items-center gap-4 sm:gap-2">
                  {" "}
                  <div className="flex-1 h-3 sm:h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    {" "}
                    <div
                      className="h-full bg-red-600"
                      style={{ width: "85%" }}
                    ></div>{" "}
                  </div>{" "}
                  <span className="text-[20.0px] sm:text-[8.0px] font-black text-slate-800">
                    85
                    <span className="text-[12.5px] sm:text-[5.0px] text-slate-400 font-semibold">
                      /100
                    </span>
                  </span>{" "}
                </div>{" "}
                {/* <div className="flex flex-col gap-2 sm:gap-1 mt-2">
                  {" "}
                  <span className="text-[11.25px] sm:text-[4.5px] font-extrabold text-slate-500 tracking-wider">
                    SUMMARY
                  </span>{" "}
                  <p className="text-[12.5px] sm:text-[5.0px] font-medium text-slate-700 leading-tight">
                    The user performed two high-risk SU01 transactions,
                    modifying fields in tables USR21 and SUSR_USTO4.
                  </p>{" "}
                </div>{" "} */}
                <div className="flex flex-col gap-2 sm:gap-1 mt-2">
                  {" "}
                  <span className="text-[11.25px] sm:text-[4.5px] font-extrabold text-slate-500 tracking-wider">
                    TRANSACTIONS USED
                  </span>{" "}
                  <div className="flex gap-2 sm:gap-1">
                    {" "}
                    <span className="text-[11.25px] sm:text-[4.5px] font-mono font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded">
                      SU01
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* AI Robot Button */}{" "}
        <div className="absolute bottom-4 right-4 w-10 sm:w-5 h-10 sm:h-5 w-16 sm:w-8 h-16 sm:h-8 rounded-full bg-red-600 shadow-lg shadow-red-600/30 flex items-center justify-center text-white cursor-pointer z-10 hover:bg-red-700 transition-colors">
          {" "}
          <Bot className="w-5 sm:w-2.5 h-5 sm:h-2.5 w-8 sm:w-4 h-8 sm:h-4" />{" "}
          <div className="absolute top-0 right-0 w-2 sm:w-1 h-2 sm:h-1 w-4 sm:w-2 h-4 sm:h-2 bg-white rounded-full flex items-center justify-center p-[1px]">
            {" "}
            <div className="w-full h-full bg-slate-400 rounded-full"></div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
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
        <h3 className="text-[25.0px] sm:text-[10.0px] font-extrabold text-slate-900">
          Sessions
        </h3>{" "}
        <p className="text-[15.0px] sm:text-[6.0px] text-slate-500">
          Manage active firefighter sessions and monitor availability
        </p>{" "}
      </div>{" "}
      <div className="flex items-center gap-2 sm:gap-1 bg-slate-50 border border-slate-200 rounded px-3 sm:px-1.5 py-2 sm:py-1 text-[15.0px] sm:text-[6.0px] text-slate-500">
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
          <div className="text-[18.75px] sm:text-[7.5px] font-bold text-slate-800 flex items-center gap-2 sm:gap-1">
            <Database className="w-4 sm:w-2 h-4 sm:h-2 text-red-500" /> PRD System
          </div>{" "}
          <div className="text-[12.5px] sm:text-[5.0px] text-slate-500 mt-0.5">
            3 active sessions
          </div>{" "}
        </div>{" "}
        <div className="p-4 sm:p-2 border-b border-slate-100 flex justify-between items-center bg-white border-l-2 border-l-red-500">
          {" "}
          <span className="text-[15.0px] sm:text-[6.0px] font-bold text-slate-700">
            FI Module
          </span>{" "}
          <span className="text-[15.0px] sm:text-[6.0px] font-bold text-emerald-600 bg-emerald-50 px-2 sm:px-1 rounded">
            2
          </span>{" "}
        </div>{" "}
        <div className="p-4 sm:p-2 border-b border-slate-100 flex justify-between items-center hover:bg-white transition-colors cursor-pointer">
          {" "}
          <span className="text-[15.0px] sm:text-[6.0px] font-bold text-slate-700">
            HR Module
          </span>{" "}
          <span className="text-[15.0px] sm:text-[6.0px] font-bold text-emerald-600 bg-emerald-50 px-2 sm:px-1 rounded">
            1
          </span>{" "}
        </div>{" "}
      </div>{" "}
      {/* Main Content */}{" "}
      <div className="flex-1 bg-white p-4 sm:p-2 flex flex-col gap-3 sm:gap-1.5 overflow-hidden">
        {" "}
        <div className="flex max-sm:flex-wrap items-center justify-between mb-1">
          {" "}
          <span className="text-[18.75px] sm:text-[7.5px] font-bold text-slate-800">
            FI Module Sessions
          </span>{" "}
          <div className="flex gap-2 sm:gap-1">
            {" "}
            <span className="text-[13.75px] sm:text-[5.5px] font-bold text-emerald-600 bg-emerald-50 px-2 sm:px-1 py-1 sm:py-0.5 rounded border border-emerald-100">
              Active: 2
            </span>{" "}
            <span className="text-[13.75px] sm:text-[5.5px] font-bold text-slate-500 bg-slate-50 px-2 sm:px-1 py-1 sm:py-0.5 rounded border border-slate-200">
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
              <span className="text-[15.0px] sm:text-[6.0px] font-bold text-slate-800">
                Sarah Jenkins
              </span>{" "}
              <span className="text-[12.5px] sm:text-[5.0px] font-bold text-emerald-600 bg-emerald-100 px-2 sm:px-1 py-1 sm:py-0.5 rounded">
                Active
              </span>{" "}
            </div>{" "}
            <div className="flex items-center gap-3 sm:gap-1.5 mb-2">
              {" "}
              <div className="w-10 sm:w-5 h-10 sm:h-5 rounded bg-blue-100 text-blue-700 flex items-center justify-center text-[18.75px] sm:text-[7.5px] font-bold">
                SJ
              </div>{" "}
              <div>
                {" "}
                <div className="text-[15.0px] sm:text-[6.0px] font-mono font-bold text-slate-700">
                  FF_FI_01
                </div>{" "}
                <div className="text-[12.5px] sm:text-[5.0px] text-slate-500">PRD System</div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex justify-between text-[12.5px] sm:text-[5.0px] text-slate-500 mb-1">
              {" "}
              <span>DURATION</span>{" "}
              <span className="font-bold text-slate-700">1h 45m left</span>{" "}
            </div>{" "}
            <div className="flex justify-between text-[11.25px] sm:text-[4.5px] text-slate-400 mb-1.5">
              {" "}
              <span>Started: 09:00 AM</span> <span>Ends: 12:00 PM</span>{" "}
            </div>{" "}
            <button className="w-full py-2 sm:py-1 text-[13.75px] sm:text-[5.5px] font-bold text-red-600 bg-red-50 border border-red-200 rounded">
              Revoke Session
            </button>{" "}
          </div>{" "}
          {/* Card 2 */}{" "}
          <div className="border border-slate-200 rounded p-3 sm:p-1.5 shadow-sm bg-slate-50">
            {" "}
            <div className="flex justify-between items-start mb-1.5">
              {" "}
              <span className="text-[15.0px] sm:text-[6.0px] font-bold text-slate-800">
                Michael Chang
              </span>{" "}
              <span className="text-[12.5px] sm:text-[5.0px] font-bold text-emerald-600 bg-emerald-100 px-2 sm:px-1 py-1 sm:py-0.5 rounded">
                Active
              </span>{" "}
            </div>{" "}
            <div className="flex items-center gap-3 sm:gap-1.5 mb-2">
              {" "}
              <div className="w-10 sm:w-5 h-10 sm:h-5 rounded bg-purple-100 text-purple-700 flex items-center justify-center text-[18.75px] sm:text-[7.5px] font-bold">
                MC
              </div>{" "}
              <div>
                {" "}
                <div className="text-[15.0px] sm:text-[6.0px] font-mono font-bold text-slate-700">
                  FF_FI_02
                </div>{" "}
                <div className="text-[12.5px] sm:text-[5.0px] text-slate-500">PRD System</div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex justify-between text-[12.5px] sm:text-[5.0px] text-slate-500 mb-1">
              {" "}
              <span>DURATION</span>{" "}
              <span className="font-bold text-red-600">0h 12m left</span>{" "}
            </div>{" "}
            <div className="flex justify-between text-[11.25px] sm:text-[4.5px] text-slate-400 mb-1.5">
              {" "}
              <span>Started: 10:15 AM</span> <span>Ends: 11:15 AM</span>{" "}
            </div>{" "}
            <button className="w-full py-2 sm:py-1 text-[13.75px] sm:text-[5.5px] font-bold text-red-600 bg-red-50 border border-red-200 rounded">
              Revoke Session
            </button>{" "}
          </div>{" "}
          {/* Card 3 */}{" "}
          <div className="hidden sm:block border border-slate-200 rounded p-3 sm:p-1.5 shadow-sm bg-slate-50">
            {" "}
            <div className="flex justify-between items-start mb-1.5">
              {" "}
              <span className="text-[15.0px] sm:text-[6.0px] font-bold text-slate-800">
                Emma Wilson
              </span>{" "}
              <span className="text-[12.5px] sm:text-[5.0px] font-bold text-amber-600 bg-amber-100 px-2 sm:px-1 py-1 sm:py-0.5 rounded">
                Paused
              </span>{" "}
            </div>{" "}
            <div className="flex items-center gap-3 sm:gap-1.5 mb-2">
              {" "}
              <div className="w-10 sm:w-5 h-10 sm:h-5 rounded bg-orange-100 text-orange-700 flex items-center justify-center text-[18.75px] sm:text-[7.5px] font-bold">
                EW
              </div>{" "}
              <div>
                {" "}
                <div className="text-[15.0px] sm:text-[6.0px] font-mono font-bold text-slate-700">
                  FF_FI_03
                </div>{" "}
                <div className="text-[12.5px] sm:text-[5.0px] text-slate-500">PRD System</div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex justify-between text-[12.5px] sm:text-[5.0px] text-slate-500 mb-1">
              {" "}
              <span>DURATION</span>{" "}
              <span className="font-bold text-slate-700">3h 00m left</span>{" "}
            </div>{" "}
            <div className="flex justify-between text-[11.25px] sm:text-[4.5px] text-slate-400 mb-1.5">
              {" "}
              <span>Started: 11:00 AM</span> <span>Ends: 02:00 PM</span>{" "}
            </div>{" "}
            <button className="w-full py-2 sm:py-1 text-[13.75px] sm:text-[5.5px] font-bold text-slate-600 bg-white border border-slate-200 rounded">
              Resume Session
            </button>{" "}
          </div>{" "}
          {/* Card 4 */}{" "}
          <div className="hidden sm:block border border-slate-200 rounded p-3 sm:p-1.5 shadow-sm bg-slate-50 opacity-60">
            {" "}
            <div className="flex justify-between items-start mb-1.5">
              {" "}
              <span className="text-[15.0px] sm:text-[6.0px] font-bold text-slate-800">
                James Brown
              </span>{" "}
              <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-500 bg-slate-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded">
                Ended
              </span>{" "}
            </div>{" "}
            <div className="flex items-center gap-3 sm:gap-1.5 mb-2">
              {" "}
              <div className="w-10 sm:w-5 h-10 sm:h-5 rounded bg-slate-200 text-slate-600 flex items-center justify-center text-[18.75px] sm:text-[7.5px] font-bold">
                JB
              </div>{" "}
              <div>
                {" "}
                <div className="text-[15.0px] sm:text-[6.0px] font-mono font-bold text-slate-700">
                  FF_FI_04
                </div>{" "}
                <div className="text-[12.5px] sm:text-[5.0px] text-slate-500">PRD System</div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex justify-between text-[12.5px] sm:text-[5.0px] text-slate-500 mb-1">
              {" "}
              <span>DURATION</span>{" "}
              <span className="font-bold text-slate-700">0h 0m left</span>{" "}
            </div>{" "}
            <div className="flex justify-between text-[11.25px] sm:text-[4.5px] text-slate-400 mb-1.5">
              {" "}
              <span>Started: 08:00 AM</span> <span>Ends: 09:00 AM</span>{" "}
            </div>{" "}
            <button
              className="w-full py-2 sm:py-1 text-[13.75px] sm:text-[5.5px] font-bold text-slate-500 bg-slate-100 border border-slate-200 rounded"
              disabled
            >
              View Logs
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>
);
export const SafeguardsAuditMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] overflow-hidden custom-scrollbar rounded-xl border border-slate-200 shadow-sm bg-white flex flex-col font-sans">
    {" "}
    {/* Top Navbar */}{" "}
    <div className="bg-white border-b border-slate-100 flex max-sm:flex-wrap items-center justify-between px-6 sm:px-3 py-4 sm:py-2 shrink-0">
      {" "}
      <div className="flex items-center gap-4 sm:gap-2">
        {" "}
        <div className="flex items-center gap-1 sm:gap-0.5">
          {" "}
          <Shield className="w-4 sm:w-2 h-4 sm:h-2 w-7 sm:w-3.5 h-7 sm:h-3.5 text-red-600" />{" "}
          <span className="text-[17.5px] sm:text-[7.0px] font-black tracking-tight text-red-600">
            MATRIXVAULT
          </span>{" "}
        </div>{" "}
        <div className="h-6 sm:h-3 w-px bg-slate-200 mx-1"></div>{" "}
        <div className="flex items-center gap-5 sm:gap-2.5 whitespace-nowrap">
          {" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <LayoutDashboard className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Dashboard
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <Users className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Access Control ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <ShieldCheck className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Governance{" "}
            <span className="bg-red-500 text-white px-1 sm:px-0.5 rounded-[2px] text-[10.0px] sm:text-[4.0px]">
              99+
            </span>{" "}
            ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5 border-b-2 border-red-600 pb-1 sm:pb-0.5 text-red-600">
            <GitMerge className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Workflow ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <BarChart2 className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Analytics ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <ShieldAlert className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Vulnerabilities{" "}
            <span className="bg-red-500 text-white px-1 sm:px-0.5 rounded-[2px] text-[10.0px] sm:text-[4.0px]">
              17
            </span>{" "}
            ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            Operations
          </span>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex items-center gap-4 sm:gap-2">
        {" "}
        <Search className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
        <Bell className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
        <div className="flex items-center gap-1 sm:gap-0.5">
          {" "}
          <div className="w-5 sm:w-2.5 h-5 sm:h-2.5 w-7 sm:w-3.5 h-7 sm:h-3.5 rounded-full bg-slate-100 flex items-center justify-center text-[10.0px] sm:text-[4.0px] font-bold text-slate-600">
            J
          </div>{" "}
          <div className="flex flex-col leading-none">
            {" "}
            <span className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-700">
              John Doe
            </span>{" "}
            <span className="text-[10.0px] sm:text-[4.0px] font-semibold text-red-500">
              Admin
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <div className="bg-slate-50 border-b border-slate-200 px-8 sm:px-4 py-3 sm:py-1.5 flex items-center gap-2 sm:gap-1 shrink-0">
      {" "}
      <AlertTriangle className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-amber-500" />{" "}
      <span className="text-[13.75px] sm:text-[5.5px] font-bold text-slate-700">
        Sign-Off Escalations
      </span>{" "}
    </div>{" "}
    <div className="flex flex-1 overflow-hidden shrink-0">
      {" "}
      {/* Sidebar Systems */}{" "}
      <div className="w-[20%] bg-[#fcfcfc] border-r border-slate-200 flex flex-col shrink-0">
        {" "}
        <div className="p-6 sm:p-3 border-b border-slate-200 flex justify-between items-center text-[13.75px] sm:text-[5.5px] font-bold text-slate-600">
          {" "}
          <div className="flex items-center gap-2 sm:gap-1">
            <Server className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Systems
          </div>{" "}
          <RefreshCw className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" />{" "}
        </div>{" "}
        <div className="flex flex-col">
          {" "}
          <div className="p-4 sm:p-2 bg-amber-50/50 border-l-2 border-amber-500 cursor-pointer flex gap-4 sm:gap-2">
            {" "}
            <div className="w-6 sm:w-3 h-6 sm:h-3 w-8 sm:w-4 h-8 sm:h-4 rounded bg-amber-100 text-amber-600 font-bold flex items-center justify-center text-[11.25px] sm:text-[4.5px]">
              PR
            </div>{" "}
            <div className="flex flex-col justify-center">
              {" "}
              <span className="text-[15.0px] sm:text-[6.0px] font-bold text-amber-600 leading-tight">
                PRD
              </span>{" "}
              <span className="text-[11.25px] sm:text-[4.5px] font-medium text-slate-500">
                PRD System
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Main Panel */}{" "}
      <div className="w-[80%] bg-slate-50/30 flex flex-col relative shrink-0">
        {" "}
        <div className="p-6 sm:p-3 border-b border-slate-200 flex justify-between items-center bg-white shrink-0">
          {" "}
          <div className="flex items-center gap-4 sm:gap-2">
            {" "}
            <div className="w-10 sm:w-5 h-10 sm:h-5 w-14 sm:w-7 h-14 sm:h-7 rounded-lg bg-amber-500 text-white font-black flex items-center justify-center text-[20.0px] sm:text-[8.0px]">
              PR
            </div>{" "}
            <div className="flex flex-col">
              {" "}
              <div className="flex items-center gap-4 sm:gap-2">
                {" "}
                <span className="text-[20.0px] sm:text-[8.0px] font-extrabold text-slate-800 leading-tight">
                  PRD
                </span>{" "}
                <span className="bg-amber-100 text-amber-600 text-[11.25px] sm:text-[4.5px] font-bold px-2 sm:px-1 rounded flex items-center gap-1 sm:gap-0.5 border border-amber-200">
                  ✦ SAP
                </span>{" "}
              </div>{" "}
              <span className="text-[12.5px] sm:text-[5.0px] font-medium text-slate-500">
                PRD System
              </span>{" "}
            </div>{" "}
          </div>{" "}
          <button className="bg-amber-500 hover:bg-amber-600 text-white rounded p-3 sm:p-1.5 transition-colors">
            {" "}
            <Save className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" />{" "}
          </button>{" "}
        </div>{" "}
        <div className="flex max-sm:flex-wrap items-center justify-between px-8 sm:px-4 border-b border-slate-200 bg-white shrink-0">
          {" "}
          <div className="flex items-center gap-12 sm:gap-6 text-[12.5px] sm:text-[5.0px] font-bold text-slate-500">
            {" "}
            <div className="flex items-center gap-2 sm:gap-1 py-5 sm:py-2.5 text-amber-600 border-b-2 border-amber-500">
              <GitMerge className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> 1 level
            </div>{" "}
            <div className="flex items-center gap-2 sm:gap-1 py-5 sm:py-2.5 hover:text-slate-700 cursor-pointer">
              <Users className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> 0/1 assigned
            </div>{" "}
          </div>{" "}
          <div className="flex items-center gap-2 sm:gap-1 text-[11.25px] sm:text-[4.5px] font-bold text-amber-600">
            {" "}
            <div className="w-2 sm:w-1 h-2 sm:h-1 bg-amber-500 rounded-full animate-pulse"></div>{" "}
            Unsaved changes{" "}
          </div>{" "}
        </div>{" "}
        {/* Escalation builder area */}{" "}
        <div className="flex flex-col p-8 sm:p-4 gap-8 sm:gap-4 overflow-hidden custom-scrollbar shrink-0">
          {" "}
          <div className="flex justify-between items-center text-[15.0px] sm:text-[6.0px] font-bold text-slate-600">
            {" "}
            <span>Escalation chain</span>{" "}
            <span className="text-[11.25px] sm:text-[4.5px] text-slate-400 font-medium">
              triggers in order ↓
            </span>{" "}
          </div>{" "}
          <div className="flex gap-8 sm:gap-4 items-start">
            {" "}
            {/* Level 1 Card */}{" "}
            <div className="w-112 sm:w-56 bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm shadow-amber-500/10 ring-1 ring-amber-500 shrink-0">
              {" "}
              <div className="bg-amber-50/50 border-b border-amber-100 p-4 sm:p-2 flex justify-between items-center">
                {" "}
                <div className="flex items-center gap-4 sm:gap-2">
                  {" "}
                  <div className="w-6 sm:w-3 h-6 sm:h-3 w-8 sm:w-4 h-8 sm:h-4 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-[12.5px] sm:text-[5.0px]">
                    1
                  </div>{" "}
                  <span className="text-[13.75px] sm:text-[5.5px] font-extrabold text-slate-800">
                    Level 1{" "}
                    <span className="text-amber-500 font-semibold tracking-wider text-[10.0px] sm:text-[4.0px] ml-0.5">
                      new
                    </span>
                  </span>{" "}
                </div>{" "}
                <div className="flex items-center gap-2 sm:gap-1">
                  {" "}
                  <XCircle className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400 hover:text-red-500 cursor-pointer" />{" "}
                  <Trash2 className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400 hover:text-red-500 cursor-pointer" />{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-6 sm:p-3 flex flex-col gap-6 sm:gap-3">
                {" "}
                <div className="flex flex-col gap-2 sm:gap-1">
                  {" "}
                  <label className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-700">
                    Notify user
                  </label>{" "}
                  <div className="border border-slate-200 rounded p-3 sm:p-1.5 flex justify-between items-center">
                    {" "}
                    <span className="text-[11.25px] sm:text-[4.5px] text-slate-400">
                      Select a user...
                    </span>{" "}
                    <ArrowRight className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex flex-col gap-2 sm:gap-1">
                  {" "}
                  <label className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-700">
                    After how many hours?
                  </label>{" "}
                  <div className="flex items-center bg-slate-50 border border-slate-200 rounded px-4 sm:px-2 py-3 sm:py-1.5 gap-4 sm:gap-2">
                    {" "}
                    <Clock className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
                    <span className="text-[12.5px] sm:text-[5.0px] text-slate-400 font-medium flex-1">
                      e.g. 24
                    </span>{" "}
                    <span className="text-[11.25px] sm:text-[4.5px] text-slate-500 font-bold bg-slate-200/50 px-2 sm:px-1 rounded">
                      hrs
                    </span>{" "}
                  </div>{" "}
                  <span className="text-[11.25px] sm:text-[4.5px] text-slate-500 mt-0.5">
                    Escalates if idle for this many hours (max 168 = 1 week)
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Add Level 2 Placeholder */}{" "}
            <div className="w-112 sm:w-56 h-[110px] bg-slate-50/50 border border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center gap-3 sm:gap-1.5 hover:bg-slate-50 hover:border-slate-400 cursor-pointer transition-colors shrink-0">
              {" "}
              <div className="w-10 sm:w-5 h-10 sm:h-5 w-14 sm:w-7 h-14 sm:h-7 rounded-full border border-dashed border-slate-400 flex items-center justify-center">
                {" "}
                <Plus className="w-5 sm:w-2.5 h-5 sm:h-2.5 w-7 sm:w-3.5 h-7 sm:h-3.5 text-slate-400" />{" "}
              </div>{" "}
              <span className="text-[15.0px] sm:text-[6.0px] font-bold text-slate-600">
                Add Level 2
              </span>{" "}
              <span className="text-[11.25px] sm:text-[4.5px] text-slate-400 font-medium">
                Click to configure
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* AI Robot Button */}{" "}
        <div className="absolute bottom-4 right-4 w-10 sm:w-5 h-10 sm:h-5 w-16 sm:w-8 h-16 sm:h-8 rounded-full bg-red-600 shadow-lg shadow-red-600/30 flex items-center justify-center text-white cursor-pointer z-10 hover:bg-red-700 transition-colors">
          {" "}
          <Bot className="w-5 sm:w-2.5 h-5 sm:h-2.5 w-8 sm:w-4 h-8 sm:h-4" />{" "}
          <div className="absolute top-0 right-0 w-2 sm:w-1 h-2 sm:h-1 w-4 sm:w-2 h-4 sm:h-2 bg-white rounded-full flex items-center justify-center p-[1px]">
            {" "}
            <div className="w-full h-full bg-slate-400 rounded-full"></div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>
);
export const ApprovalsRoutingMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col font-sans overflow-hidden custom-scrollbar">
    {" "}
    {/* Top Navbar */}{" "}
    <div className="bg-white border-b border-slate-100 flex max-sm:flex-wrap items-center justify-between px-6 sm:px-3 py-4 sm:py-2 shrink-0">
      {" "}
      <div className="flex items-center gap-4 sm:gap-2">
        {" "}
        <div className="flex items-center gap-1 sm:gap-0.5">
          {" "}
          <Shield className="w-4 sm:w-2 h-4 sm:h-2 w-7 sm:w-3.5 h-7 sm:h-3.5 text-red-600" />{" "}
          <span className="text-[17.5px] sm:text-[7.0px] font-black tracking-tight text-red-600">
            MATRIXVAULT
          </span>{" "}
        </div>{" "}
        <div className="h-6 sm:h-3 w-px bg-slate-200 mx-1"></div>{" "}
        <div className="flex items-center gap-5 sm:gap-2.5 whitespace-nowrap">
          {" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <LayoutDashboard className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Dashboard
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <Users className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Access Control ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <ShieldCheck className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Governance{" "}
            <span className="bg-red-500 text-white px-1 sm:px-0.5 rounded-[2px] text-[10.0px] sm:text-[4.0px]">
              99+
            </span>{" "}
            ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-red-600 flex items-center gap-1 sm:gap-0.5 border-b border-red-600 pb-1 sm:pb-0.5">
            <GitMerge className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Workflow ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <BarChart2 className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Analytics ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            <ShieldAlert className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Vulnerabilities{" "}
            <span className="bg-red-500 text-white px-1 sm:px-0.5 rounded-[2px] text-[10.0px] sm:text-[4.0px]">
              17
            </span>{" "}
            ⌄
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-600 flex items-center gap-1 sm:gap-0.5">
            Operations
          </span>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex items-center gap-4 sm:gap-2">
        {" "}
        <Search className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
        <Bell className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-slate-400" />{" "}
        <div className="flex items-center gap-1 sm:gap-0.5">
          {" "}
          <div className="w-5 sm:w-2.5 h-5 sm:h-2.5 w-7 sm:w-3.5 h-7 sm:h-3.5 rounded-full bg-slate-100 flex items-center justify-center text-[10.0px] sm:text-[4.0px] font-bold text-slate-600">
            J
          </div>{" "}
          <div className="flex flex-col leading-none">
            {" "}
            <span className="text-[11.25px] sm:text-[4.5px] font-bold text-slate-700">
              John Doe
            </span>{" "}
            <span className="text-[10.0px] sm:text-[4.0px] font-semibold text-red-500">
              Admin
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    {/* Header */}{" "}
    <div className="bg-indigo-50/40 border-b border-slate-100 px-6 sm:px-3 py-4 sm:py-2 flex justify-between items-center shrink-0">
      {" "}
      <div className="flex items-center gap-2 sm:gap-1">
        {" "}
        <Shield className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-indigo-500" />{" "}
        <span className="text-[15.0px] sm:text-[6.0px] font-bold text-slate-500">
          High Level Approvers
        </span>{" "}
      </div>{" "}
      <button className="bg-indigo-600 text-white text-[12.5px] sm:text-[5.0px] font-bold px-3 sm:px-1.5 py-2 sm:py-1 rounded-[2px] flex items-center gap-1 sm:gap-0.5">
        {" "}
        <Plus className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Add Approver{" "}
      </button>{" "}
    </div>{" "}
    {/* Body */}{" "}
    <div className="flex flex-1 relative shrink-0">
      {" "}
      {/* Left Column (Scope Breakdown) */}{" "}
      <div className="w-[30%] bg-slate-50 border-r border-slate-100 p-6 sm:p-3 flex flex-col gap-8 sm:gap-4 shrink-0">
        {" "}
        <div>
          {" "}
          <h5 className="text-[13.75px] sm:text-[5.5px] font-extrabold text-slate-400 mb-2">
            Scope Breakdown
          </h5>{" "}
          <div className="flex flex-col gap-2 sm:gap-1">
            {" "}
            <div className="flex max-sm:flex-wrap items-center justify-between bg-white border border-slate-200 rounded p-3 sm:p-1.5 shadow-sm">
              {" "}
              <div className="flex items-center gap-2 sm:gap-1">
                {" "}
                <Globe className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-5 sm:w-2.5 h-5 sm:h-2.5 text-indigo-500" />{" "}
                <span className="text-[13.75px] sm:text-[5.5px] font-bold text-slate-700">
                  Global-scoped
                </span>{" "}
              </div>{" "}
              <span className="bg-indigo-100 text-indigo-600 font-bold px-3 sm:px-1.5 rounded-full text-[12.5px] sm:text-[5.0px]">
                1
              </span>{" "}
            </div>{" "}
            <div className="flex max-sm:flex-wrap items-center justify-between bg-white border border-slate-200 rounded p-3 sm:p-1.5 shadow-sm">
              {" "}
              <div className="flex items-center gap-2 sm:gap-1">
                {" "}
                <Server className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-5 sm:w-2.5 h-5 sm:h-2.5 text-blue-500" />{" "}
                <span className="text-[13.75px] sm:text-[5.5px] font-bold text-slate-700">
                  System-scoped
                </span>{" "}
              </div>{" "}
              <span className="bg-blue-50 text-blue-500 font-bold px-3 sm:px-1.5 rounded-full text-[12.5px] sm:text-[5.0px]">
                0
              </span>{" "}
            </div>{" "}
            <div className="flex max-sm:flex-wrap items-center justify-between bg-white border border-slate-200 rounded p-3 sm:p-1.5 shadow-sm">
              {" "}
              <div className="flex items-center gap-2 sm:gap-1">
                {" "}
                <Box className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-5 sm:w-2.5 h-5 sm:h-2.5 text-purple-500" />{" "}
                <span className="text-[13.75px] sm:text-[5.5px] font-bold text-slate-700">
                  Module-scoped
                </span>{" "}
              </div>{" "}
              <span className="bg-purple-50 text-purple-500 font-bold px-3 sm:px-1.5 rounded-full text-[12.5px] sm:text-[5.0px]">
                0
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div>
          {" "}
          <h5 className="text-[13.75px] sm:text-[5.5px] font-extrabold text-slate-400 mb-2">
            How It Works
          </h5>{" "}
          <div className="flex flex-col gap-4 sm:gap-2">
            {" "}
            <div className="flex flex-col gap-1 sm:gap-0.5">
              {" "}
              <div className="flex items-center gap-2 sm:gap-1 text-[13.75px] sm:text-[5.5px] font-bold text-slate-800">
                <Globe className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-indigo-500" /> Global
              </div>{" "}
              <div className="text-[11.25px] sm:text-[4.5px] text-slate-400 font-medium leading-tight">
                Can step in on any timed-out request in the company.
              </div>{" "}
            </div>{" "}
            <div className="flex flex-col gap-1 sm:gap-0.5">
              {" "}
              <div className="flex items-center gap-2 sm:gap-1 text-[13.75px] sm:text-[5.5px] font-bold text-slate-800">
                <Server className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-blue-500" /> System
              </div>{" "}
              <div className="text-[11.25px] sm:text-[4.5px] text-slate-400 font-medium leading-tight">
                Covers all modules within a specified SAP system.
              </div>{" "}
            </div>{" "}
            <div className="flex flex-col gap-1 sm:gap-0.5">
              {" "}
              <div className="flex items-center gap-2 sm:gap-1 text-[13.75px] sm:text-[5.5px] font-bold text-slate-800">
                <Box className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-purple-500" /> Module
              </div>{" "}
              <div className="text-[11.25px] sm:text-[4.5px] text-slate-400 font-medium leading-tight">
                Covers requests for a single system + module combination.
              </div>{" "}
            </div>{" "}
            <div className="bg-indigo-50/50 border border-indigo-100 rounded p-3 sm:p-1.5 mt-1 flex gap-2 sm:gap-1 items-start">
              {" "}
              <Info className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2 text-indigo-500 shrink-0 mt-0.5" />{" "}
              <div className="text-[11.25px] sm:text-[4.5px] text-indigo-600 font-medium leading-tight">
                Assigned users automatically receive <b>Escalation Approvals</b>{" "}
                access — no manual RBAC needed.
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Right Column (1 approver configured) */}{" "}
      <div className="w-[70%] bg-white relative flex flex-col">
        {" "}
        <div className="flex justify-between items-center p-8 sm:p-4 border-b border-slate-100 shrink-0">
          {" "}
          <span className="text-[15.0px] sm:text-[6.0px] font-extrabold text-slate-400">
            1 approver configured
          </span>{" "}
          <span className="text-[12.5px] sm:text-[5.0px] font-semibold text-slate-400">
            Most recently added
          </span>{" "}
        </div>{" "}
        {/* Approver Card List */}{" "}
        <div className="p-8 sm:p-4">
          {" "}
          <div className="flex items-start gap-6 sm:gap-3 p-5 sm:p-2.5 hover:bg-slate-50 transition-colors rounded-lg group border border-transparent hover:border-slate-100">
            {" "}
            <div className="relative shrink-0">
              {" "}
              <div className="w-10 sm:w-5 h-10 sm:h-5 w-14 sm:w-7 h-14 sm:h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-[17.5px] sm:text-[7.0px]">
                O
              </div>{" "}
              <div className="absolute bottom-0 right-0 w-3 sm:w-1.5 h-3 sm:h-1.5 bg-emerald-500 border border-white rounded-full"></div>{" "}
            </div>{" "}
            <div className="flex-1 flex flex-col w-full">
              {" "}
              <div className="flex justify-between items-start w-full">
                {" "}
                <div className="flex flex-col">
                  {" "}
                  <span className="text-[17.5px] sm:text-[7.0px] font-bold text-slate-800">
                    OSHO
                  </span>{" "}
                </div>{" "}
                <div className="flex gap-4 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5">
                  {" "}
                  <Edit2 className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-5 sm:w-2.5 h-5 sm:h-2.5 text-slate-400 cursor-pointer hover:text-indigo-600" />{" "}
                  <Trash2 className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-5 sm:w-2.5 h-5 sm:h-2.5 text-slate-400 cursor-pointer hover:text-red-600" />{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex items-center gap-4 sm:gap-2 mt-2">
                {" "}
                <span className="bg-indigo-50 text-indigo-600 text-[11.25px] sm:text-[4.5px] font-bold px-3 sm:px-1.5 py-1 sm:py-0.5 rounded flex items-center gap-1 sm:gap-0.5">
                  <Globe className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" /> Global
                </span>{" "}
                <span className="text-[11.25px] sm:text-[4.5px] text-slate-500 font-medium">
                  All systems & modules
                </span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2 sm:gap-1 mt-1.5 text-amber-600">
                {" "}
                <Clock className="w-3 sm:w-1.5 h-3 sm:h-1.5 w-4 sm:w-2 h-4 sm:h-2" />{" "}
                <span className="text-[11.25px] sm:text-[4.5px] font-bold">
                  Visible from (start - 00:01)
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* AI Robot Button overlay at bottom right */}{" "}
        <div className="absolute bottom-5 right-5 w-10 sm:w-5 h-10 sm:h-5 w-18 sm:w-9 h-18 sm:h-9 rounded-full bg-red-600 shadow-lg shadow-red-600/30 flex items-center justify-center text-white cursor-pointer z-10 hover:bg-red-700 transition-colors">
          {" "}
          <Bot className="w-5 sm:w-2.5 h-5 sm:h-2.5 w-8 sm:w-4 h-8 sm:h-4" />{" "}
          <div className="absolute top-0 right-0 w-2 sm:w-1 h-2 sm:h-1 w-4 sm:w-2 h-4 sm:h-2 bg-white rounded-full flex items-center justify-center p-[1px]">
            {" "}
            <div className="w-full h-full bg-slate-400 rounded-full"></div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>
);
export const VulnDashboardMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden custom-scrollbar shadow-sm">
    {" "}
    <div className="bg-white border-b border-slate-200 px-6 sm:px-3 py-4 sm:py-2 flex max-sm:flex-wrap items-center justify-between">
      {" "}
      <div className="flex items-center gap-3 sm:gap-1.5">
        {" "}
        <div className="w-8 sm:w-4 h-8 sm:h-4 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[21.25px] sm:text-[8.5px] text-red-500">
          ⏱
        </div>{" "}
        <div>
          {" "}
          <div className="text-[22.5px] sm:text-[9.0px] font-extrabold text-slate-900">
            Vulnerability Dashboard
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex items-center gap-2 sm:gap-1 bg-white border border-slate-200 rounded px-3 sm:px-1.5 py-1 sm:py-0.5 text-[15.0px] sm:text-[6.0px] text-slate-700 font-bold">
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
            <div className="text-[12.5px] sm:text-[5.0px] text-slate-500 font-bold mb-1 truncate">
              {s.label}
            </div>{" "}
            <div className={`text-[30.0px] sm:text-[12.0px] font-black ${s.c}`}>{s.val}</div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
      {/* Module Status Cards (8 cards in 1 row) */}{" "}
      <div className="flex flex-col bg-white border border-slate-200 rounded p-3 sm:p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        {" "}
        <div className="text-[15.0px] sm:text-[6.0px] font-extrabold text-slate-900 mb-1.5">
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
              <div className="text-[12.5px] sm:text-[5.0px] text-slate-500 font-bold mb-0.5 truncate">
                {m.title}
              </div>{" "}
              <div
                className={`text-[21.25px] sm:text-[8.5px] font-black ${m.red ? "text-red-600" : "text-slate-800"}`}
              >
                {m.val}
              </div>{" "}
              <div className="text-[11.25px] sm:text-[4.5px] text-slate-400 truncate mt-0.5">
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
          <div className="text-[15.0px] sm:text-[6.0px] font-extrabold text-slate-900 mb-0.5">
            Status Breakdown
          </div>{" "}
          <div className="grid grid-cols-2 gap-3 sm:gap-1.5 flex-1">
            {" "}
            <div className="bg-white border border-slate-200 rounded flex flex-col items-center justify-center p-2 sm:p-1 shadow-[0_1px_2px_rgba(0,0,0,0.02)] relative">
              {" "}
              <div className="w-16 h-16 sm:w-8 sm:h-8 rounded-full border-[3px] border-red-500 flex items-center justify-center text-[21.25px] sm:text-[8.5px] font-black mb-1">
                27
              </div>{" "}
              <div className="text-[13.75px] sm:text-[5.5px] font-bold text-slate-700">
                Certificate Status
              </div>{" "}
              <div className="text-[12.5px] sm:text-[5.0px] text-slate-500">17 Expired</div>{" "}
            </div>{" "}
            <div className="bg-white border border-slate-200 rounded flex flex-col items-center justify-center p-2 sm:p-1 shadow-[0_1px_2px_rgba(0,0,0,0.02)] relative">
              {" "}
              <div className="w-16 h-16 sm:w-8 sm:h-8 rounded-full border-[3px] border-red-500 flex items-center justify-center text-[21.25px] sm:text-[8.5px] font-black mb-1">
                64
              </div>{" "}
              <div className="text-[13.75px] sm:text-[5.5px] font-bold text-slate-700">
                RFC Connection Status
              </div>{" "}
              <div className="text-[12.5px] sm:text-[5.0px] text-slate-500">39 Failed</div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Progress Bars */}{" "}
        <div className="w-1/2 flex flex-col gap-2 sm:gap-1 min-w-0">
          {" "}
          <div className="text-[15.0px] sm:text-[6.0px] font-extrabold text-slate-900 mb-0.5">
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
                <div className="flex justify-between text-[13.75px] sm:text-[5.5px] font-bold text-slate-700 mb-0.5">
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
                <div className="text-[11.25px] sm:text-[4.5px] text-slate-400">{p.sub}</div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>
);
export const PatchingMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
    {" "}
    <div className="bg-white border-b border-slate-200 px-6 sm:px-3 py-4 sm:py-2 flex max-sm:flex-wrap items-center justify-between">
      {" "}
      <div className="flex items-center gap-3 sm:gap-1.5">
        {" "}
        <div className="w-8 sm:w-4 h-8 sm:h-4 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[21.25px] sm:text-[8.5px] text-red-500">
          🛡
        </div>{" "}
        <div>
          {" "}
          <div className="text-[22.5px] sm:text-[9.0px] font-extrabold text-slate-900">
            BTP Security Assessment
          </div>{" "}
          <div className="text-[13.75px] sm:text-[5.5px] text-slate-500">
            Users, Role Collections & Roles For PRD System
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex items-center gap-2 sm:gap-1 bg-white border border-slate-200 rounded px-3 sm:px-1.5 py-1 sm:py-0.5 text-[15.0px] sm:text-[6.0px] text-slate-700 font-bold">
        {" "}
        All Systems <span>▼</span>{" "}
      </div>{" "}
    </div>{" "}
    <div className="flex flex-col flex-1 p-4 sm:p-2 gap-4 sm:gap-2 overflow-hidden">
      {" "}
      {/* Top Stat Cards */}{" "}
      <div className="flex gap-3 sm:gap-1.5">
        {" "}
        {[
          {
            label: "Total Users",
            val: "16",
            color: "text-slate-900",
            icon: "👥",
          },
          { label: "Active", val: "16", color: "text-emerald-600", icon: "✓" },
          { label: "Inactive", val: "0", color: "text-slate-400", icon: "—" },
          { label: "Verified", val: "16", color: "text-blue-500", icon: "🛡" },
          {
            label: "Never Logged In",
            val: "5",
            color: "text-orange-500",
            icon: "⚠",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="flex-1 bg-slate-50 border border-slate-200 rounded p-3 sm:p-1.5 relative overflow-hidden"
          >
            {" "}
            <div className="text-[13.75px] sm:text-[5.5px] text-slate-500 font-bold mb-1">
              {s.label}
            </div>{" "}
            <div className={`text-[30.0px] sm:text-[12.0px] font-black ${s.color}`}>{s.val}</div>{" "}
            <div className="absolute top-1.5 right-1.5 text-[18.75px] sm:text-[7.5px] opacity-40">
              {s.icon}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
      {/* 3 Circular Cards */}{" "}
      <div className="flex gap-3 sm:gap-1.5">
        {" "}
        {[
          {
            title: "Status Breakdown",
            items: [
              { label: "Active", val: 16, c: "bg-emerald-500" },
              { label: "Inactive", val: 0, c: "bg-slate-300" },
            ],
            total: 16,
            tc: "text-emerald-600",
          },
          {
            title: "Verification",
            items: [
              { label: "Verified", val: 16, c: "bg-blue-500" },
              { label: "Unverified", val: 0, c: "bg-slate-300" },
            ],
            total: 16,
            tc: "text-blue-600",
          },
          {
            title: "Login Activity",
            items: [
              { label: "Logged In", val: 11, c: "bg-emerald-500" },
              { label: "Never Logged In", val: 5, c: "bg-orange-500" },
            ],
            total: 16,
            tc: "text-slate-800",
          },
        ].map((chart, i) => (
          <div
            key={i}
            className="flex-1 bg-white border border-slate-200 rounded p-4 sm:p-2 flex max-sm:flex-wrap items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
          >
            {" "}
            <div className="w-12 sm:w-6 h-12 sm:h-6 w-16 sm:w-8 h-16 sm:h-8 rounded-full border-[3px] border-slate-100 flex items-center justify-center relative">
              {" "}
              <div className={`text-[25.0px] sm:text-[10.0px] font-black ${chart.tc}`}>
                {chart.total}
              </div>{" "}
            </div>{" "}
            <div className="flex-1 ml-2">
              {" "}
              <div className="text-[13.75px] sm:text-[5.5px] font-bold text-slate-700 mb-1">
                {chart.title}
              </div>{" "}
              {chart.items.map((item, j) => (
                <div
                  key={j}
                  className="flex justify-between items-center mb-0.5"
                >
                  {" "}
                  <div className="flex items-center gap-2 sm:gap-1">
                    {" "}
                    <div
                      className={`w-2 sm:w-1 h-2 sm:h-1 rounded-full ${item.c}`}
                    ></div>{" "}
                    <span className="text-[12.5px] sm:text-[5.0px] text-slate-600">
                      {item.label}
                    </span>{" "}
                  </div>{" "}
                  <span className="text-[13.75px] sm:text-[5.5px] font-bold text-slate-800">
                    {item.val}
                  </span>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
      {/* Table */}{" "}
      <div className="bg-white border border-slate-200 rounded overflow-hidden flex-1 flex flex-col">
        {" "}
        <div className="grid grid-cols-12 gap-2 sm:gap-1 px-4 sm:px-2 py-2 sm:py-1 bg-slate-50 border-b border-slate-200 text-[13.75px] sm:text-[5.5px] font-bold text-slate-500">
          {" "}
          <div className=" col-span-3">Full Name</div>{" "}
          <div className=" col-span-3">Username / Email</div>{" "}
          <div className=" col-span-1">Groups</div>{" "}
          <div className="col-span-1">Status</div>{" "}
          <div className="col-span-1">Verified</div>{" "}
          <div className="col-span-2">Last Login</div>{" "}
          <div className="col-span-1 text-right">Actions</div>{" "}
        </div>{" "}
        {[
          {
            name: "Anbarasu Thillairajan",
            email: "anbarasu.t@...",
            groups: "8",
            date: "Jul 22, 2026",
          },
          {
            name: "Anthony Muthu K",
            email: "anthony.m@...",
            groups: "11",
            date: "Dec 29, 2025",
          },
          {
            name: "Sahil A",
            email: "sahil.almeida@...",
            groups: "4",
            date: "Jun 3, 2026",
          },
          {
            name: "Mani P",
            email: "manip@...",
            groups: "6",
            date: "Sep 21, 2023",
          },
          {
            name: "Jyoti Patel",
            email: "jyoti.p@...",
            groups: "2",
            date: "Aug 18, 2026",
            hiddenOnMobile: true,
          },
          {
            name: "Prashanth Raja",
            email: "prashanth.r@...",
            groups: "5",
            date: "Feb 11, 2026",
            hiddenOnMobile: true,
          },
          {
            name: "Mayank Bhateja",
            email: "mayank.b@...",
            groups: "3",
            date: "Mar 15, 2026",
            hiddenOnMobile: true,
          },
          {
            name: "Srinivasan K",
            email: "srini.k@...",
            groups: "12",
            date: "Jan 8, 2026",
            hiddenOnMobile: true,
          },
          {
            name: "Laura Chen",
            email: "laura.c@...",
            groups: "7",
            date: "May 20, 2026",
            hiddenOnMobile: true,
          },
        ].map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-12 gap-2 sm:gap-1 px-4 sm:px-2 py-2 sm:py-1 border-b border-slate-50 text-[12.5px] sm:text-[5.0px] items-center hover:bg-slate-50 transition-colors ${r.hiddenOnMobile ? "hidden grid" : ""}`}
          >
            {" "}
            <div className=" col-span-3 font-bold text-slate-800">
              {r.name}
            </div>{" "}
            <div className=" col-span-3 text-slate-500">{r.email}</div>{" "}
            <div className=" col-span-1 font-bold text-slate-700">
              {r.groups} Groups
            </div>{" "}
            <div className="col-span-1 text-emerald-600 font-bold">
              ● Active
            </div>{" "}
            <div className="col-span-1 text-blue-500 font-bold">Verified</div>{" "}
            <div className="col-span-2 text-slate-500">{r.date}</div>{" "}
            <div className="col-span-1 text-red-600 font-bold text-right cursor-pointer">
              Details
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>{" "}
  </div>
);
export const ExpiryMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
    {" "}
    <div className="bg-white border-b border-slate-200 px-6 sm:px-3 py-4 sm:py-2 flex max-sm:flex-wrap items-center justify-between">
      {" "}
      <div className="flex items-center gap-3 sm:gap-1.5">
        {" "}
        <div className="w-8 sm:w-4 h-8 sm:h-4 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[21.25px] sm:text-[8.5px] text-red-500">
          📄
        </div>{" "}
        <div>
          {" "}
          <div className="text-[22.5px] sm:text-[9.0px] font-extrabold text-slate-900">
            Security Notes
          </div>{" "}
          <div className="text-[13.75px] sm:text-[5.5px] text-slate-500">
            SAP security notes and patch status across your landscape
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <div className="flex flex-col flex-1 p-4 sm:p-2 gap-4 sm:gap-2 overflow-hidden">
      {" "}
      {/* 6 Stat Cards */}{" "}
      <div className="flex gap-3 sm:gap-1.5">
        {" "}
        {[
          { label: "Total Notes", val: "82", c: "text-slate-900" },
          { label: "Completely Impl...", val: "0", c: "text-emerald-500" },
          { label: "Can Be Impl...", val: "29", c: "text-amber-500" },
          { label: "Cannot Be Impl...", val: "52", c: "text-red-500" },
          { label: "Incompletely Impl...", val: "0", c: "text-blue-500" },
          { label: "Unknown", val: "1", c: "text-slate-500" },
        ].map((s, i) => (
          <div
            key={i}
            className={`flex-1 bg-white border border-slate-200 rounded p-3 sm:p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] ${i === 0 ? "border-l-2 border-l-slate-800" : ""}`}
          >
            {" "}
            <div className="text-[13.75px] sm:text-[5.5px] text-slate-500 font-bold mb-1 truncate">
              {s.label}
            </div>{" "}
            <div className={`text-[30.0px] sm:text-[12.0px] font-black ${s.c}`}>{s.val}</div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
      {/* Toolbar */}{" "}
      <div className="flex justify-between items-center bg-white px-4 sm:px-2 py-3 sm:py-1.5 border border-slate-200 rounded shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        {" "}
        <div className="flex gap-4 sm:gap-2 text-[15.0px] sm:text-[6.0px] text-slate-500">
          {" "}
          <div className="flex items-center gap-2 sm:gap-1 bg-slate-50 border border-slate-200 px-3 sm:px-1.5 py-1 sm:py-0.5 rounded">
            Search notes...
          </div>{" "}
          <div className="flex items-center gap-2 sm:gap-1 bg-slate-50 border border-slate-200 px-3 sm:px-1.5 py-1 sm:py-0.5 rounded">
            All Priorities ▼
          </div>{" "}
          <div className="flex items-center gap-2 sm:gap-1 bg-slate-50 border border-slate-200 px-3 sm:px-1.5 py-1 sm:py-0.5 rounded">
            All Statuses ▼
          </div>{" "}
        </div>{" "}
        <div className="flex gap-2 sm:gap-1">
          {" "}
          <button className="bg-red-600 text-white text-[13.75px] sm:text-[5.5px] font-bold px-4 sm:px-2 py-2 sm:py-1 rounded">
            Upload
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* Table */}{" "}
      <div className="bg-white border border-slate-200 rounded overflow-hidden flex-1 flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        {" "}
        <div className="grid grid-cols-12 gap-2 sm:gap-1 px-4 sm:px-2 py-2 sm:py-1 bg-slate-50 border-b border-slate-200 text-[13.75px] sm:text-[5.5px] font-bold text-slate-500">
          {" "}
          <div className=" col-span-1">Note</div>{" "}
          <div className=" col-span-5">Title</div>{" "}
          <div className=" col-span-2">Priority</div>{" "}
          <div className="col-span-1">CVSS</div>{" "}
          <div className="col-span-3">Status</div>{" "}
        </div>{" "}
        {[
          {
            note: "3727078",
            title: "[CVE-2026-40128] Directory Traversal vulnerability...",
            pri: "Hot News",
            cvss: "9.0",
            status: "Cannot Be Implemented",
            sCol: "text-red-600",
          },
          {
            note: "3515598",
            title: "[CVE-2026-44771] Missing Authorization check...",
            pri: "Correction",
            cvss: "4.3",
            status: "Can Be Implemented",
            sCol: "text-amber-500",
          },
          {
            note: "3763800",
            title: "[Multiple CVEs] Multiple vulnerabilities in Apache...",
            pri: "High Priority",
            cvss: "8.1",
            status: "Cannot Be Implemented",
            sCol: "text-red-600",
          },
          {
            note: "3773304",
            title: "[CVE-2026-58233] Remote Code Execution...",
            pri: "High Priority",
            cvss: "7.6",
            status: "Cannot Be Implemented",
            sCol: "text-red-600",
          },
          {
            note: "3775990",
            title: "[CVE-2026-62111] Denial of service (DOS)...",
            pri: "Correction",
            cvss: "5.4",
            status: "Can Be Implemented",
            sCol: "text-amber-500",
            hiddenOnMobile: true,
          },
          {
            note: "3819922",
            title: "[CVE-2026-78881] Information Disclosure...",
            pri: "High Priority",
            cvss: "7.2",
            status: "Cannot Be Implemented",
            sCol: "text-red-600",
            hiddenOnMobile: true,
          },
          {
            note: "3819933",
            title: "[CVE-2026-78892] Missing Authentication...",
            pri: "Hot News",
            cvss: "9.8",
            status: "Cannot Be Implemented",
            sCol: "text-red-600",
            hiddenOnMobile: true,
          },
          {
            note: "3821045",
            title: "[CVE-2026-80122] SQL Injection Vulnerability...",
            pri: "High Priority",
            cvss: "8.5",
            status: "Can Be Implemented",
            sCol: "text-amber-500",
            hiddenOnMobile: true,
          },
          {
            note: "3834412",
            title: "[CVE-2026-82999] Cross-Site Scripting (XSS)...",
            pri: "Correction",
            cvss: "6.1",
            status: "Can Be Implemented",
            sCol: "text-amber-500",
            hiddenOnMobile: true,
          },
          {
            note: "3845555",
            title: "[CVE-2026-90412] Server-Side Request Forgery...",
            pri: "Hot News",
            cvss: "9.3",
            status: "Cannot Be Implemented",
            sCol: "text-red-600",
            hiddenOnMobile: true,
          },
        ].map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-12 gap-2 sm:gap-1 px-4 sm:px-2 py-3 sm:py-1.5 border-b border-slate-50 text-[12.5px] sm:text-[5.0px] items-center hover:bg-slate-50 transition-colors ${r.hiddenOnMobile ? "hidden grid" : ""}`}
          >
            {" "}
            <div className=" col-span-1 font-bold text-red-600">
              {r.note}
            </div>{" "}
            <div className=" col-span-5 text-slate-600 truncate pr-4 sm:pr-2">
              {r.title}
            </div>{" "}
            <div
              className={` col-span-2 font-bold ${r.pri === "Hot News" ? "text-red-600" : r.pri === "High Priority" ? "text-orange-500" : "text-blue-500"}`}
            >
              {r.pri}
            </div>{" "}
            <div className=" col-span-1 font-mono font-bold text-slate-700">
              {r.cvss}
            </div>{" "}
            <div className={`col-span-3 font-bold ${r.sCol}`}>
              {r.status}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>{" "}
  </div>
);
export const ConfigDriftMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
    {" "}
    <div className="bg-white border-b border-slate-200 px-5 sm:px-2.5 py-3 sm:py-1.5 flex max-sm:flex-wrap items-center justify-between">
      {" "}
      <div className="flex items-center gap-3 sm:gap-1.5">
        {" "}
        <div className="w-8 sm:w-4 h-8 sm:h-4 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[21.25px] sm:text-[8.5px] text-red-500">
          📡
        </div>{" "}
        <div>
          {" "}
          <div className="text-[22.5px] sm:text-[9.0px] font-extrabold text-slate-900">
            Real-Time Threat Detection
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex items-center gap-2 sm:gap-1">
        {" "}
        <span className="text-[15.0px] sm:text-[6.0px] text-slate-600 bg-white border border-slate-200 px-2 sm:px-1 py-1 sm:py-0.5 rounded font-bold flex items-center gap-1 sm:gap-0.5">
          ⏱ History
        </span>{" "}
      </div>{" "}
    </div>{" "}
    <div className="flex flex-1 min-h-0">
      {" "}
      {/* Side nav */}{" "}
      <div className="w-1/3 min-w-0 border-r border-slate-200 bg-slate-50 p-3 sm:p-1.5">
        {" "}
        <div className="flex max-sm:flex-wrap items-center justify-between mb-1.5">
          {" "}
          <span className="text-[15.0px] sm:text-[6.0px] font-bold text-slate-700">
            Watch Rules
          </span>{" "}
          <span className="text-[13.75px] sm:text-[5.5px] font-bold text-white bg-red-600 px-2 sm:px-1 rounded">
            + New
          </span>{" "}
        </div>{" "}
        <div className="bg-white border border-slate-200 rounded p-2 sm:p-1 mb-1 shadow-sm">
          {" "}
          <div className="text-[16.25px] sm:text-[6.5px] font-bold text-red-600 flex items-center gap-2 sm:gap-1 mb-0.5">
            {" "}
            <div className="w-2 sm:w-1 h-2 sm:h-1 rounded-full bg-red-500"></div> User
            Creation{" "}
          </div>{" "}
          <div className="text-[12.5px] sm:text-[5.0px] font-mono text-slate-500">SU01</div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Main content */}{" "}
      <div className="w-2/3 min-w-0 bg-white p-4 sm:p-2">
        {" "}
        <div className="flex items-center gap-2 sm:gap-1 mb-1">
          {" "}
          <div className="text-[22.5px] sm:text-[9.0px] font-extrabold text-slate-900">
            User Creation
          </div>{" "}
          <span className="text-[13.75px] sm:text-[5.5px] font-bold text-emerald-600 bg-emerald-50 px-2 sm:px-1 rounded">
            Active
          </span>{" "}
        </div>{" "}
        <div className="bg-red-50 border border-red-100 rounded px-3 sm:px-1.5 py-2 sm:py-1 mb-2">
          {" "}
          <div className="text-[15.0px] sm:text-[6.0px] text-red-600 font-bold flex items-center gap-2 sm:gap-1">
            {" "}
            <div className="w-3 sm:w-1.5 h-3 sm:h-1.5 rounded-full bg-red-500 flex items-center justify-center text-white text-[10.0px] sm:text-[4.0px]">
              !
            </div>{" "}
            Triggered 2m ago by SOLMAN_ADMIN (SU01){" "}
          </div>{" "}
        </div>{" "}
        <div className="text-[15.0px] sm:text-[6.0px] font-bold text-slate-700 border-b border-slate-200 pb-1 sm:pb-0.5 mb-1">
          Latest T-Code Logs
        </div>{" "}
        <div className="bg-slate-50 border border-slate-100 rounded p-3 sm:p-1.5 flex gap-3 sm:gap-1.5 items-start">
          {" "}
          <div className="w-10 sm:w-5 h-10 sm:h-5 rounded bg-indigo-600 text-white flex items-center justify-center text-[21.25px] sm:text-[8.5px] font-bold shrink-0">
            SO
          </div>{" "}
          <div className="flex-1">
            {" "}
            <div className="flex items-center gap-2 sm:gap-1 mb-0.5">
              {" "}
              <span className="text-[18.75px] sm:text-[7.5px] font-bold text-slate-900">
                SOLMAN_ADMIN
              </span>{" "}
              <span className="text-[12.5px] sm:text-[5.0px] font-bold text-white bg-red-600 px-1 sm:px-0.5 rounded">
                Latest
              </span>{" "}
            </div>{" "}
            <div className="text-[15.0px] sm:text-[6.0px] text-slate-700">
              Transaction SU01 started.
            </div>{" "}
          </div>{" "}
          <div className="text-right">
            {" "}
            <div className="text-[15.0px] sm:text-[6.0px] font-mono font-bold text-slate-700 bg-slate-200 px-2 sm:px-1 rounded inline-block mb-1">
              SU01
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>
);
export const LiveThreatsMiniMockup = () => (
  <div className="w-full h-auto max-sm:aspect-auto sm:aspect-[16/10] bg-[#f8fafc] rounded-xl border border-slate-200 flex flex-col font-sans overflow-hidden shadow-sm">
    {" "}
    <div className="bg-white border-b border-slate-200 px-6 sm:px-3 py-4 sm:py-2 flex max-sm:flex-wrap items-center justify-between">
      {" "}
      <div className="flex items-center gap-3 sm:gap-1.5">
        {" "}
        <div className="w-8 sm:w-4 h-8 sm:h-4 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[21.25px] sm:text-[8.5px] text-red-500">
          ⚙
        </div>{" "}
        <div>
          {" "}
          <div className="text-[22.5px] sm:text-[9.0px] font-extrabold text-slate-900">
            Profile Parameter Analysis
          </div>{" "}
          <div className="text-[13.75px] sm:text-[5.5px] text-slate-500">
            Inspect SAP instance, default and start profiles side by side
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <div className="flex flex-col flex-1 p-4 sm:p-2 gap-4 sm:gap-2 overflow-hidden">
      {" "}
      {/* 4 Stat Cards */}{" "}
      <div className="flex gap-3 sm:gap-1.5">
        {" "}
        {[
          {
            label: "Total Parameters",
            val: "1616",
            c: "text-slate-900",
            bg: "bg-slate-50",
          },
          {
            label: "Matches SAP",
            val: "1515",
            c: "text-emerald-600",
            bg: "bg-emerald-50",
          },
          {
            label: "Changed From SAP",
            val: "101",
            c: "text-red-600",
            bg: "bg-red-50",
          },
          {
            label: "Gateway/ICM",
            val: "185",
            c: "text-red-600",
            bg: "bg-white border border-slate-200",
          },
          {
            label: "Password",
            val: "44",
            c: "text-purple-600",
            bg: "bg-white border border-slate-200",
          },
        ].map((s, i) => (
          <div
            key={i}
            className={`flex-1 rounded p-3 sm:p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] ${s.bg}`}
          >
            {" "}
            <div className="text-[13.75px] sm:text-[5.5px] text-slate-500 font-bold mb-1 truncate">
              {s.label}
            </div>{" "}
            <div className={`text-[30.0px] sm:text-[12.0px] font-black ${s.c}`}>{s.val}</div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
      {/* 3 Circular Cards */}{" "}
      <div className="flex gap-3 sm:gap-1.5">
        {" "}
        {[
          {
            title: "Status Breakdown",
            items: [
              { label: "OK", val: 1515, c: "bg-emerald-500" },
              { label: "Differs", val: 101, c: "bg-red-500" },
            ],
            total: 1616,
            tc: "text-slate-800",
          },
          {
            title: "SAP Recommended",
            items: [
              { label: "Matches", val: 1515, c: "bg-emerald-500" },
              { label: "Changes", val: 101, c: "bg-red-500" },
            ],
            total: 1616,
            tc: "text-slate-800",
          },
          {
            title: "Parameter Category",
            items: [
              { label: "Gateway/ICM", val: 185, c: "bg-red-500" },
              { label: "Password", val: 44, c: "bg-purple-500" },
            ],
            total: 1616,
            tc: "text-slate-800",
          },
        ].map((chart, i) => (
          <div
            key={i}
            className="flex-1 bg-white border border-slate-200 rounded p-3 sm:p-1.5 flex max-sm:flex-wrap items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
          >
            {" "}
            <div className="w-12 sm:w-6 h-12 sm:h-6 w-16 sm:w-8 h-16 sm:h-8 rounded-full border-[3px] border-slate-100 flex items-center justify-center relative">
              {" "}
              <div className={`text-[18.75px] sm:text-[7.5px] font-black ${chart.tc}`}>
                {chart.total}
              </div>{" "}
            </div>{" "}
            <div className="flex-1 ml-2">
              {" "}
              <div className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-700 mb-1">
                {chart.title}
              </div>{" "}
              {chart.items.map((item, j) => (
                <div
                  key={j}
                  className="flex justify-between items-center mb-0.5"
                >
                  {" "}
                  <div className="flex items-center gap-2 sm:gap-1">
                    {" "}
                    <div
                      className={`w-2 sm:w-1 h-2 sm:h-1 rounded-full ${item.c}`}
                    ></div>{" "}
                    <span className="text-[11.25px] sm:text-[4.5px] text-slate-600">
                      {item.label}
                    </span>{" "}
                  </div>{" "}
                  <span className="text-[12.5px] sm:text-[5.0px] font-bold text-slate-800">
                    {item.val}
                  </span>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
      {/* Table */}{" "}
      <div className="bg-white border border-slate-200 rounded overflow-hidden flex-1 flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        {" "}
        <div className="grid grid-cols-12 gap-2 sm:gap-1 px-4 sm:px-2 py-2 sm:py-1 bg-slate-50 border-b border-slate-200 text-[13.75px] sm:text-[5.5px] font-bold text-slate-500">
          {" "}
          <div className=" col-span-3">Parameter</div>{" "}
          <div className=" col-span-3">Current Value</div>{" "}
          <div className=" col-span-3">SAP Recommended</div>{" "}
          <div className="col-span-1">Status</div>{" "}
          <div className="col-span-2">Comment</div>{" "}
        </div>{" "}
        {[
          {
            p: "Autostart",
            c: "<not set>",
            r: "0",
            status: "OK",
            sCol: "text-emerald-600",
            comment: "Automatic instance start...",
          },
          {
            p: "CPU_CORES",
            c: "<not set>",
            r: "10",
            status: "OK",
            sCol: "text-emerald-600",
            comment: "Processor cores used...",
          },
          {
            p: "DIR_BINARY",
            c: "/usr/sap/PRD/D00/exe",
            r: "/usr/sap/PRD/SYS...",
            status: "Differs",
            sCol: "text-red-600",
            comment: "Path where binaries...",
          },
          {
            p: "DIR_CCMS",
            c: "/usr/sap/ccms",
            r: "/usr/sap/ccms",
            status: "OK",
            sCol: "text-emerald-600",
            comment: "Root directory for...",
          },
          {
            p: "login/min_password_lng",
            c: "8",
            r: "12",
            status: "Differs",
            sCol: "text-red-600",
            comment: "Minimum password length...",
            hiddenOnMobile: true,
          },
          {
            p: "rdisp/max_wprun_time",
            c: "600",
            r: "600",
            status: "OK",
            sCol: "text-emerald-600",
            comment: "Max work process run...",
            hiddenOnMobile: true,
          },
          {
            p: "icm/server_port_0",
            c: "PROT=HTTP...",
            r: "PROT=HTTPS...",
            status: "Differs",
            sCol: "text-red-600",
            comment: "ICM Server Port...",
            hiddenOnMobile: true,
          },
          {
            p: "login/fails_to_session_end",
            c: "3",
            r: "3",
            status: "OK",
            sCol: "text-emerald-600",
            comment: "Number of failed logins...",
            hiddenOnMobile: true,
          },
          {
            p: "login/fails_to_user_lock",
            c: "5",
            r: "3",
            status: "Differs",
            sCol: "text-red-600",
            comment: "Failed logins to lock...",
            hiddenOnMobile: true,
          },
          {
            p: "login/password_expiration_time",
            c: "90",
            r: "30",
            status: "Differs",
            sCol: "text-red-600",
            comment: "Password expiration days...",
            hiddenOnMobile: true,
          },
        ].map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-12 gap-2 sm:gap-1 px-4 sm:px-2 py-2 sm:py-1 border-b border-slate-50 text-[12.5px] sm:text-[5.0px] items-center hover:bg-slate-50 transition-colors ${row.hiddenOnMobile ? "hidden grid" : ""}`}
          >
            {" "}
            <div className=" col-span-3 font-bold text-slate-800">
              {row.p}
            </div>{" "}
            <div className=" col-span-3 font-mono text-blue-600">{row.c}</div>{" "}
            <div className=" col-span-3 font-mono text-slate-500">{row.r}</div>{" "}
            <div className={`col-span-1 font-bold ${row.sCol}`}>
              {row.status}
            </div>{" "}
            <div className="col-span-2 text-slate-500 truncate">
              {row.comment}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>{" "}
  </div>
);
