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
  LiveThreatsMiniMockup,
  ThreatDetectionMiniMockup
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
  <div className="w-full h-auto bg-[#f8fafc] flex flex-col font-sans overflow-hidden max-sm:aspect-auto max-sm:min-h-[550px] sm:aspect-[4/3]">
    {/* Top Navbar */}
    <div className="bg-white border-b border-slate-200 flex flex-wrap max-sm:flex-col items-center justify-between px-3 sm:px-4 py-2 shrink-0 gap-2 sm:gap-0">
      <div className="flex flex-col sm:flex-row items-left gap-2 sm:gap-3 w-full sm:w-auto">
        <div className="flex items-center gap-1">
          <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600" />
          <span className="text-[12.5px] sm:text-[14.5px] font-black tracking-tight text-red-600">
            MATRIXVAULT
          </span>
        </div>

      </div>

    </div>

    {/* Content Area */}
    <div className="p-2 sm:p-3 flex flex-col gap-2 sm:gap-3 flex-1 overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-2 sm:gap-3 shrink-0">
        {/* Left header box */}
        <div className="flex-1 bg-white border border-slate-200 rounded-lg p-2 sm:p-3 flex items-center shadow-sm">
          <div className="flex flex-col gap-1.5 sm:gap-2.5 w-full">
            <div className="flex items-center gap-2">
              <span className="text-[12.5px] sm:text-[14.5px] font-bold text-slate-900">Risk Intelligence</span>
              <div className="h-3 w-px bg-slate-200"></div>
              <span className="text-[9.5px] sm:text-[11.5px] font-semibold text-slate-500 flex items-center gap-1">All Systems <ArrowDown className="w-2 h-2 sm:w-2.5 sm:h-2.5" /></span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full gap-2 sm:gap-0">
              <div className="  flex items-center gap-1 w-fit">
                <span className="text-[9.5px] sm:text-[11.5px] font-bold text-red-600">842 critical findings require immediate attention</span>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3">
                <span className="text-[9.5px] sm:text-[11.5px] font-medium text-slate-500">Last scan: 9m ago</span>
                <button className="bg-black hover:bg-slate-800 transition-colors text-white text-[10.5px] sm:text-[11.5px] font-bold px-3 py-1 sm:py-1.5 rounded flex items-center justify-center leading-tight">Run<br className="hidden sm:block" />Scan</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right header box */}
        <div className="w-full lg:w-[40%] bg-white border border-slate-200 rounded-lg p-2 sm:p-3 flex flex-col shadow-sm">
          <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 mb-1.5">
            <span className="text-[10.5px] sm:text-[12.5px] font-bold text-slate-900">Compliance Domain Analytics</span>
            <span className="text-[8.5px] sm:text-[10.5px] font-semibold text-slate-500">Open by type</span>
          </div>

          <div className="flex flex-col gap-1.5 sm:gap-2 flex-1 justify-center">
            <div>
              <div className="flex justify-between items-center text-[9.5px] sm:text-[10.5px] mb-0.5 sm:mb-1">
                <span className="font-bold text-slate-800">Governance Compliance Violations</span>
                <span><span className="text-red-600 font-bold">612 C</span> <span className="text-orange-500 font-bold ml-1">230 H</span> <span className="text-slate-500 ml-1">842 T</span></span>
              </div>
              <div className="w-full h-1 sm:h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
                <div className="bg-red-600 h-full w-[72%]"></div>
                <div className="bg-orange-500 h-full w-[28%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-[9.5px] sm:text-[10.5px] mb-0.5 sm:mb-1">
                <span className="font-bold text-slate-800">Elevated Identity Vulnerabilities</span>
                <span><span className="text-red-600 font-bold">120 C</span> <span className="text-orange-500 font-bold ml-1">36 H</span> <span className="text-slate-500 ml-1">156 T</span></span>
              </div>
              <div className="w-full h-1 sm:h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
                <div className="bg-red-600 h-full w-[77%]"></div>
                <div className="bg-orange-500 h-full w-[23%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 shrink-0">
        <div className="bg-white border-2 border-red-100 rounded-lg p-2 sm:p-3 shadow-sm flex flex-col justify-between">
          <span className="text-[8.5px] sm:text-[10.5px] font-bold text-slate-500 tracking-wider leading-tight mb-2">Systemic Threat<br />Surface</span>
          <span className="text-[16.5px] sm:text-[22.5px] font-black text-red-600 mb-1.5 sm:mb-2 leading-none">1,050</span>
          <span className="text-[9.5px] sm:text-[11.5px] font-medium text-slate-500">Global Infrastructure</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-2 sm:p-3 shadow-sm flex flex-col justify-between">
          <span className="text-[8.5px] sm:text-[10.5px] font-bold text-slate-500 tracking-wider leading-tight mb-2">Governance<br />Compliance<br className="hidden sm:block" />Violations</span>
          <span className="text-[16.5px] sm:text-[22.5px] font-black text-slate-900 mb-1.5 sm:mb-2 leading-none">842</span>
          <span className="text-[9.5px] sm:text-[11.5px] font-medium text-slate-500">Cross-Platform Conflicts</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-2 sm:p-3 shadow-sm flex flex-col justify-between">
          <span className="text-[8.5px] sm:text-[10.5px] font-bold text-slate-500 tracking-wider leading-tight mb-2">Elevated Identity<br />Vulnerabilities</span>
          <span className="text-[16.5px] sm:text-[22.5px] font-black text-red-600 mb-1.5 sm:mb-2 leading-none">156</span>
          <span className="text-[9.5px] sm:text-[11.5px] font-medium text-slate-500 leading-tight">Orphaned Admin<br />Sessions</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-2 sm:p-3 shadow-sm flex flex-col justify-between">
          <span className="text-[8.5px] sm:text-[10.5px] font-bold text-slate-500 tracking-wider leading-tight mb-2">Secured<br />Infrastructure<br className="hidden sm:block" />Assets</span>
          <span className="text-[16.5px] sm:text-[22.5px] font-black text-slate-900 mb-1.5 sm:mb-2 leading-none">3,420</span>
          <span className="text-[9.5px] sm:text-[11.5px] font-medium text-slate-500 flex items-center gap-1"><Activity className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-emerald-500" /> +18% this week</span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-2 sm:p-3 flex flex-col shadow-sm flex-1 min-h-0 relative">
        <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 sm:pb-2 mb-1 sm:mb-2 shrink-0">
          <span className="text-[10.5px] sm:text-[13.5px] font-bold text-slate-900">Real-time Exposure Trajectory</span>
          <span className="text-[9.5px] sm:text-[11.5px] font-semibold text-slate-500">Last 30 days</span>
        </div>
        <div className="flex-1 relative w-full h-full min-h-[40px]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="redGradMain" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="0" y1="30" x2="400" y2="30" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="0" y1="60" x2="400" y2="60" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="0" y1="90" x2="400" y2="90" stroke="#f1f5f9" strokeWidth="1" />

            <path d="M 0 110 C 20 110, 40 100, 60 90 C 80 80, 100 50, 120 50 C 140 50, 160 85, 180 85 C 200 85, 210 20, 230 20 C 250 20, 260 90, 280 90 C 300 90, 320 50, 340 50 C 360 50, 380 95, 400 100 L 400 120 L 0 120 Z" fill="url(#redGradMain)" />

            <path d="M 0 110 C 20 110, 40 100, 60 90 C 80 80, 100 50, 120 50 C 140 50, 160 85, 180 85 C 200 85, 210 20, 230 20 C 250 20, 260 90, 280 90 C 300 90, 320 50, 340 50 C 360 50, 380 95, 400 100" stroke="#dc2626" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

            <circle cx="230" cy="20" r="2.5" fill="white" stroke="#dc2626" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="flex justify-between text-[9.5px] sm:text-[10.5px] text-slate-500 mt-1 font-medium shrink-0">
          <span>11/07</span>
          <span>25/07</span>
          <span>09/08</span>
        </div>
      </div>
    </div>
  </div>
);

const FirefighterMockup = () => (
  <div className="w-full h-auto bg-[#f8fafc] flex flex-col font-sans overflow-hidden max-sm:aspect-auto max-sm:min-h-[550px] sm:aspect-[4/3]">
    {/* Top Navbar */}
    <div className="bg-white border-b border-slate-200 flex flex-wrap max-sm:flex-col items-center justify-between px-3 sm:px-4 py-2 shrink-0 gap-2 sm:gap-0">
      <div className="flex flex-col sm:flex-row items-left gap-2 sm:gap-3 w-full sm:w-auto">
        <div className="flex items-center gap-1">
          <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600" />
          <span className="text-[12.5px] sm:text-[14.5px] font-black tracking-tight text-red-600">
            MATRIXVAULT
          </span>
        </div>

      </div>

    </div>

    {/* Content Area */}
    <div className="p-2 sm:p-3 flex flex-col gap-2 sm:gap-3 flex-1 overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-2 sm:gap-3 shrink-0">
        {/* Left header box */}
        <div className="flex-1 bg-white border border-slate-200 rounded-lg p-2 sm:p-3 flex items-center shadow-sm">
          <div className="flex flex-col gap-1.5 sm:gap-2.5 w-full">
            <div className="flex items-center gap-2">
              <span className="text-[12.5px] sm:text-[14.5px] font-bold text-slate-900">Privileged Access Management</span>
              <div className="h-3 w-px bg-slate-200"></div>
              <span className="text-[9.5px] sm:text-[11.5px] font-semibold text-slate-500 flex items-center gap-1">Production <ArrowDown className="w-2 h-2 sm:w-2.5 sm:h-2.5" /></span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full gap-2 sm:gap-0">
              <div className="flex items-center gap-1 w-fit">
                {/* <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div> */}
                <span className="text-[9.5px] sm:text-[11.5px] font-bold text-orange-600">32 active emergency sessions require monitoring</span>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3">
                <span className="text-[9.5px] sm:text-[11.5px] font-medium text-slate-500">Last activity: just now</span>
                <button className="bg-black hover:bg-slate-800 transition-colors text-white text-[10.5px] sm:text-[11.5px] font-bold px-3 py-1 sm:py-1.5 rounded flex items-center justify-center leading-tight">New<br className="hidden sm:block" />Request</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right header box */}
        <div className="w-full lg:w-[40%] bg-white border border-slate-200 rounded-lg p-2 sm:p-3 flex flex-col shadow-sm">
          <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 mb-1.5">
            <span className="text-[10.5px] sm:text-[12.5px] font-bold text-slate-900">Session Risk Analytics</span>
            <span className="text-[8.5px] sm:text-[10.5px] font-semibold text-slate-500">Current load</span>
          </div>

          <div className="flex flex-col gap-1.5 sm:gap-2 flex-1 justify-center">
            <div>
              <div className="flex justify-between items-center text-[9.5px] sm:text-[10.5px] mb-0.5 sm:mb-1">
                <span className="font-bold text-slate-800">High Risk Operations</span>
                <span><span className="text-orange-600 font-bold">14 Active</span> <span className="text-slate-500 ml-1">45 Total</span></span>
              </div>
              <div className="w-full h-1 sm:h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
                <div className="bg-orange-600 h-full w-[31%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-[9.5px] sm:text-[10.5px] mb-0.5 sm:mb-1">
                <span className="font-bold text-slate-800">Unreviewed Audit Logs</span>
                <span><span className="text-red-600 font-bold">128 Critical</span> <span className="text-slate-500 ml-1">512 Total</span></span>
              </div>
              <div className="w-full h-1 sm:h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
                <div className="bg-red-600 h-full w-[25%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 shrink-0">
        <div className="bg-white border-2 border-orange-100 rounded-lg p-2 sm:p-3 shadow-sm flex flex-col justify-between">
          <span className="text-[8.5px] sm:text-[10.5px] font-bold text-slate-500 tracking-wider leading-tight mb-2">Active<br />Firefighters</span>
          <span className="text-[16.5px] sm:text-[22.5px] font-black text-orange-600 mb-1.5 sm:mb-2 leading-none">32</span>
          <span className="text-[9.5px] sm:text-[11.5px] font-medium text-slate-500 flex items-center gap-1"><Activity className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-emerald-500" /> +4 since morning</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-2 sm:p-3 shadow-sm flex flex-col justify-between">
          <span className="text-[8.5px] sm:text-[10.5px] font-bold text-slate-500 tracking-wider leading-tight mb-2">Pending<br />Approvals</span>
          <span className="text-[16.5px] sm:text-[22.5px] font-black text-slate-900 mb-1.5 sm:mb-2 leading-none">14</span>
          <span className="text-[9.5px] sm:text-[11.5px] font-medium text-slate-500">Requires owner action</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-2 sm:p-3 shadow-sm flex flex-col justify-between">
          <span className="text-[8.5px] sm:text-[10.5px] font-bold text-slate-500 tracking-wider leading-tight mb-2">Escalated<br />Sessions</span>
          <span className="text-[16.5px] sm:text-[22.5px] font-black text-red-600 mb-1.5 sm:mb-2 leading-none">3</span>
          <span className="text-[9.5px] sm:text-[11.5px] font-medium text-slate-500 leading-tight">Critical priority</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-2 sm:p-3 shadow-sm flex flex-col justify-between">
          <span className="text-[8.5px] sm:text-[10.5px] font-bold text-slate-500 tracking-wider leading-tight mb-2">Audit<br />Violations</span>
          <span className="text-[16.5px] sm:text-[22.5px] font-black text-slate-900 mb-1.5 sm:mb-2 leading-none">0</span>
          <span className="text-[9.5px] sm:text-[11.5px] font-medium text-slate-500">All logs reviewed</span>
        </div>
      </div>

      {/* Table Row */}
      <div className="bg-white border border-slate-200 rounded-lg p-2 sm:p-3 flex flex-col shadow-sm flex-1 min-h-0 relative">
        <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 sm:pb-2 mb-1 sm:mb-2 shrink-0">
          <span className="text-[10.5px] sm:text-[13.5px] font-bold text-slate-900">Live Monitored Sessions</span>
          <span className="text-[9.5px] sm:text-[11.5px] font-semibold text-slate-500">Auto-refreshing</span>
        </div>
        <div className="flex-1 flex flex-col gap-1 sm:gap-2 overflow-hidden">
          <div className="grid grid-cols-4 gap-1 sm:gap-2 px-1 sm:px-2 py-1 text-[8.5px] sm:text-[9.5px] font-black text-slate-500 tracking-widest">
            <span>Identity</span>
            <span>Environment</span>
            <span>Duration</span>
            <span>Status</span>
          </div>
          <div className="flex flex-col gap-1 sm:gap-1.5 overflow-hidden">
            {[
              { id: "Administrator_PRD", env: "Production-100", time: "01:45:20", status: "Monitoring Active", color: "text-emerald-600", dot: "bg-emerald-500" },
              { id: "Database_Admin_3", env: "DataWarehouse-300", time: "00:12:05", status: "Monitoring Active", color: "text-emerald-600", dot: "bg-emerald-500" },
              // { id: "System_Support_HR", env: "HR-System-200", time: "03:10:00", status: "Review Pending", color: "text-orange-600", dot: "bg-orange-500" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 gap-1 sm:gap-2 px-1 sm:px-2 py-1.5 sm:py-2 bg-slate-50 border border-slate-100 rounded text-[9.5px] sm:text-[11.5px] items-center">
                <span className="text-slate-900 font-bold truncate">{row.id}</span>
                <span className="text-slate-600 font-mono bg-white px-1 py-0.5 rounded border border-slate-200 w-fit truncate">{row.env}</span>
                <span className="font-mono font-bold text-slate-500">{row.time}</span>
                <span className="flex items-center gap-1 sm:gap-1.5">
                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 ${row.dot} ${row.status.includes('Active') ? 'animate-pulse' : ''}`}></div>
                  <span className={`${row.color} font-bold truncate`}>{row.status}</span>
                </span>
              </div>
            ))}
          </div>
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
    <div className="w-full h-auto bg-[#f8fafc] flex flex-col font-sans overflow-hidden max-sm:aspect-[4/5] sm:aspect-[4/3]">
      {/* Top Navbar */}
      <div className="bg-white border-b border-slate-200 flex flex-wrap max-sm:flex-col items-center justify-between px-3 sm:px-4 py-2 shrink-0 gap-2 sm:gap-0">
        <div className="flex flex-col sm:flex-row items-left gap-2 sm:gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600" />
            <span className="text-[12.5px] sm:text-[14.5px] font-black tracking-tight text-red-600">
              MATRIXVAULT
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <Bell className="w-3 h-3 text-slate-500" />
          <Settings className="w-3 h-3 text-slate-500" />
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10.5px] sm:text-[11.5px] font-bold text-slate-600">
            S
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-2 sm:p-3 flex flex-col gap-2 sm:gap-3 flex-1 overflow-hidden">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-2 sm:gap-3 shrink-0">
          {/* Left header box */}
          <div className="flex-1 bg-white border border-slate-200 rounded-lg p-2 sm:p-3 flex items-center shadow-sm">
            <div className="flex flex-col gap-1.5 sm:gap-2.5 w-full">
              <div className="flex items-center gap-2">
                <span className="text-[12.5px] sm:text-[14.5px] font-bold text-slate-900">Vulnerability Landscape</span>
                <div className="h-3 w-px bg-slate-200"></div>
                <span className="text-[9.5px] sm:text-[11.5px] font-semibold text-slate-500 flex items-center gap-1">Global Assets <ArrowDown className="w-2 h-2 sm:w-2.5 sm:h-2.5" /></span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full gap-2 sm:gap-0">
                <div className="flex items-center gap-1 w-fit">
                  <span className="text-[9.5px] sm:text-[11.5px] font-bold text-purple-600">Continuous scanning active across 12,045 nodes</span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3">
                  <span className="text-[9.5px] sm:text-[11.5px] font-medium text-slate-500">Auto-patch: Enabled</span>
                  <button className="bg-black hover:bg-slate-800 transition-colors text-white text-[10.5px] sm:text-[11.5px] font-bold px-3 py-1 sm:py-1.5 rounded flex items-center justify-center leading-tight">Export<br className="hidden sm:block" />Report</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right header box */}
          <div className="w-full lg:w-[40%] bg-white border border-slate-200 rounded-lg p-2 sm:p-3 flex flex-col shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 mb-1.5">
              <span className="text-[10.5px] sm:text-[12.5px] font-bold text-slate-900">Severity Distribution</span>
              {/* <span className="text-[8.5px] sm:text-[10.5px] font-semibold text-slate-500">CVSS v3.1</span> */}
            </div>

            <div className="flex flex-col gap-1.5 sm:gap-2 flex-1 justify-center">
              <div>
                <div className="flex justify-between items-center text-[9.5px] sm:text-[10.5px] mb-0.5 sm:mb-1">
                  <span className="font-bold text-slate-800">Critical & High (Score 7.0+)</span>
                  {/* <span><span className="text-red-600 font-bold">18 C</span> <span className="text-orange-500 font-bold ml-1">45 H</span></span> */}
                </div>
                <div className="w-full h-1 sm:h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
                  <div className="bg-red-600 h-full w-[28%]"></div>
                  <div className="bg-orange-500 h-full w-[72%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-[9.5px] sm:text-[10.5px] mb-0.5 sm:mb-1">
                  <span className="font-bold text-slate-800">Medium & Low (Score &lt;7.0)</span>
                  {/* <span><span className="text-yellow-500 font-bold">112 M</span> <span className="text-blue-500 font-bold ml-1">304 L</span></span> */}
                </div>
                <div className="w-full h-1 sm:h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
                  <div className="bg-yellow-500 h-full w-[26%]"></div>
                  <div className="bg-blue-500 h-full w-[74%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Cards Row */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 shrink-0">
          {[
            { label: 'Unpatched OS', val: '89', color: 'text-red-600', border: 'border-red-100 bg-red-50' },
            { label: 'Open Ports', val: '24', color: 'text-orange-600', border: 'border-orange-100 bg-orange-50' },
            { label: 'Weak Ciphers', val: '156', color: 'text-amber-600', border: 'border-amber-100 bg-amber-50' },
            { label: 'Exposed APIs', val: '3', color: 'text-purple-600', border: 'border-purple-100 bg-purple-50' },
            { label: 'Stale Tokens', val: '412', color: 'text-slate-800', border: 'border-slate-200 bg-white' },
            { label: 'Config Drift', val: '18%', color: 'text-slate-800', border: 'border-slate-200 bg-white' },
          ].map((c, i) => (
            <div key={i} className={`border ${c.border} rounded-lg p-1.5 sm:p-2 flex flex-col justify-between shadow-sm`}>
              <span className="text-[8px] sm:text-[9.5px] text-slate-500 font-bold tracking-wider leading-tight mb-1">{c.label}</span>
              <div className={`text-[14.5px] sm:text-[18.5px] font-black ${c.color} leading-none`}>{c.val}</div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 flex-1 min-h-0">
          {/* Active Scans */}
          <div className="bg-white border border-slate-200 rounded-lg p-2 sm:p-3 flex flex-col shadow-sm h-full relative">
            <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 sm:pb-1.5 mb-1 sm:mb-1.5 shrink-0">
              <span className="text-[10.5px] sm:text-[13.5px] font-bold text-slate-900">Active Scan Engines</span>
              <span className="text-[9.5px] sm:text-[11.5px] font-semibold text-slate-500">4 nodes</span>
            </div>
            <div className="flex-1 flex flex-col gap-1 sm:gap-1.5 overflow-hidden">
              {[
                { engine: 'Core Infrastructure', target: '10.0.0.0/8', progress: 85, status: 'Scanning', color: 'bg-emerald-500' },
                { engine: 'Cloud Environments', target: 'AWS us-east-1', progress: 42, status: 'Scanning', color: 'bg-emerald-500' },
                // { engine: 'External Perimeter', target: 'Public IPs', progress: 100, status: 'Completed', color: 'bg-slate-400' },
                // { engine: 'Web Applications', target: '*.domain.com', progress: 12, status: 'Initializing', color: 'bg-amber-500' },
              ].map((scan, i) => (
                <div key={i} className="flex flex-col gap-0.5 bg-slate-50 border border-slate-100 p-1 sm:p-1.5 rounded">
                  <div className="flex justify-between items-center text-[9.5px] sm:text-[10.5px] font-bold">
                    <span className="text-slate-800">{scan.engine}</span>
                    <span className="text-slate-500">{scan.progress}%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden my-0.5">
                    <div className={`h-full ${scan.color} rounded-full transition-all duration-1000`} style={{ width: `${scan.progress}%` }}></div>
                  </div>
                  <div className="flex justify-between text-[8.5px] sm:text-[8.5px] text-slate-500 font-medium">
                    <span>Target: {scan.target}</span>
                    <span>{scan.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Remediation Trends */}
          <div className="bg-white border border-slate-200 rounded-lg p-2 sm:p-3 flex flex-col shadow-sm h-full relative">
            <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 sm:pb-2 mb-1 sm:mb-2 shrink-0">
              <span className="text-[10.5px] sm:text-[13.5px] font-bold text-slate-900">Remediation Velocity</span>
              <span className="text-[9.5px] sm:text-[11.5px] font-semibold text-slate-500">Last 7 days</span>
            </div>
            <div className="flex-1 relative w-full h-full min-h-[40px]">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9333ea" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="25" x2="400" y2="25" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="50" x2="400" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="75" x2="400" y2="75" stroke="#f1f5f9" strokeWidth="1" />

                <path d="M 0 90 L 50 80 L 100 85 L 150 60 L 200 40 L 250 50 L 300 20 L 350 30 L 400 10 L 400 100 L 0 100 Z" fill="url(#purpleGrad)" />

                <path d="M 0 90 L 50 80 L 100 85 L 150 60 L 200 40 L 250 50 L 300 20 L 350 30 L 400 10" stroke="#9333ea" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                <circle cx="300" cy="20" r="2.5" fill="white" stroke="#9333ea" strokeWidth="1.5" />
                <circle cx="400" cy="10" r="2.5" fill="white" stroke="#9333ea" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex justify-between text-[9.5px] sm:text-[10.5px] text-slate-500 mt-1 font-medium shrink-0">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
              <span>Sun</span>
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
      mockup: <ThreatDetectionMiniMockup />,
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

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-4 sm:p-2 px-3.5 py-1.5 rounded-full bg-transparent border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold mb-4 shadow-xs">
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
            <div className="inline-flex items-center gap-4 sm:p-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800/50 font-bold text-xs mb-3 shadow-xs">
              <Target className="w-3.5 h-3.5" /> Role Radar
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Every access risk, visible and governed in one place.</h3>
          </div>
          <div className="flex flex-col gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full bg-white/70 lg:bg-transparent dark:bg-slate-900/70 lg:dark:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border border-slate-200/60 lg:border-transparent dark:border-slate-700/60 lg:dark:border-transparent rounded-[32px] lg:rounded-none overflow-hidden lg:overflow-visible shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:shadow-none hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] lg:hover:shadow-none transition-all duration-500 flex flex-col lg:flex-row lg:items-center lg:gap-20 lg:justify-between group relative">
              <div className="lg:w-5/12 p-8 lg:p-0 flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center gap-4 sm:p-2 px-3 py-1.5 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold text-xs mb-6 w-fit border border-red-100 dark:border-red-800/50">
                  <Target className="w-3.5 h-3.5" /> Platform Core
                </div>
                <h4 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Unified Risk Visibility</h4>
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                  Role Radar gives SAP security teams a single, continuously updated picture of who has access to what, plus the governance tools to keep that access clean over time. Instead of reconstructing access after the fact, your team sees risk as it forms.
                </p>
              </div>
              <div className="lg:w-1/2 bg-slate-50 lg:bg-transparent dark:bg-slate-800/30 lg:dark:bg-transparent border-t lg:border-none border-slate-200 dark:border-slate-700/60 flex flex-col justify-end pt-12 px-6 sm:px-12 lg:pt-0 lg:px-0 relative overflow-hidden lg:overflow-visible">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent pointer-events-none lg:hidden" />
                <div className="relative rounded-t-2xl lg:rounded-2xl overflow-hidden border-t border-x lg:border border-slate-300 lg:border-slate-200 dark:border-slate-700/50 shadow-[0_0_40px_rgba(0,0,0,0.1)] lg:shadow-xl dark:shadow-2xl bg-white w-full mobile-scaled-mockup-frame max-sm:!aspect-[9/10] translate-y-4 lg:translate-y-0 group-hover:translate-y-0 transition-transform duration-700">
                  <RoleRadarMockup />
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-4 sm:px-3 lg:px-4 mt-12">
              {roleRadarCards.map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-20 lg:justify-between`}>
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
                  <div className="lg:w-1/2 w-full">
                    <div className="mobile-scaled-mockup-frame rounded-2xl shadow-xl border border-slate-200 bg-white overflow-hidden">
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
            <div className="inline-flex items-center gap-4 sm:p-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 font-bold text-xs mb-3 shadow-xs">
              <Flame className="w-3.5 h-3.5" /> Firefighter
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Emergency access, without the emergency.</h3>
          </div>
          <div className="flex flex-col gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full bg-white/70 lg:bg-transparent dark:bg-slate-900/70 lg:dark:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border border-slate-200/60 lg:border-transparent dark:border-slate-700/60 lg:dark:border-transparent rounded-[32px] lg:rounded-none overflow-hidden lg:overflow-visible shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:shadow-none hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] lg:hover:shadow-none transition-all duration-500 flex flex-col lg:flex-row lg:items-center lg:gap-20 lg:justify-between group relative">
              <div className="lg:w-5/12 p-8 lg:p-0 flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center gap-4 sm:p-2 px-3 py-1.5 rounded-xl bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold text-xs mb-6 w-fit border border-orange-100 dark:border-orange-800/50">
                  <Flame className="w-3.5 h-3.5" /> Emergency Access
                </div>
                <h4 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Governed Elevated Access</h4>
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                  Firefighter gives teams a controlled way to grant, monitor, and document temporary elevated access. Speed and control stop being a trade-off: a request can be approved in minutes and still leave a complete record behind.
                </p>
              </div>
              <div className="lg:w-1/2 bg-slate-50 lg:bg-transparent dark:bg-slate-800/30 lg:dark:bg-transparent border-t lg:border-none border-slate-200 dark:border-slate-700/60 flex flex-col justify-end pt-12 px-2 sm:px-8 lg:pt-0 lg:px-0 relative overflow-hidden lg:overflow-visible">
                <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/10 to-transparent pointer-events-none lg:hidden" />
                <div className="relative rounded-t-2xl lg:rounded-2xl overflow-hidden border-t border-x lg:border border-slate-300 lg:border-slate-200 dark:border-slate-700/50 shadow-[0_0_40px_rgba(0,0,0,0.1)] lg:shadow-xl dark:shadow-2xl translate-y-4 lg:translate-y-0 group-hover:translate-y-0 transition-transform duration-700 bg-white w-full mobile-scaled-mockup-frame max-sm:!aspect-[9/10]">
                  <FirefighterMockup />
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-4 sm:px-3 lg:px-4 mt-12">
              {firefighterCards.map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-20 lg:justify-between`}>
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
                  <div className="lg:w-1/2 w-full">
                    <div className="mobile-scaled-mockup-frame rounded-2xl shadow-xl border border-slate-200 bg-white overflow-hidden">
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
            <div className="inline-flex items-center gap-4 sm:p-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800/50 font-bold text-xs mb-3 shadow-xs">
              <ShieldAlert className="w-3.5 h-3.5" /> Vulnerabilities
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Know your SAP attack surface before someone else does.</h3>
          </div>
          <div className="flex flex-col gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full bg-white/70 lg:bg-transparent dark:bg-slate-900/70 lg:dark:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border border-slate-200/60 lg:border-transparent dark:border-slate-700/60 lg:dark:border-transparent rounded-[32px] lg:rounded-none overflow-hidden lg:overflow-visible shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:shadow-none hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] lg:hover:shadow-none transition-all duration-500 flex flex-col lg:flex-row lg:items-center lg:gap-20 lg:justify-between group relative">
              <div className="lg:w-5/12 p-8 lg:p-0 flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center gap-4 sm:p-2 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-bold text-xs mb-6 w-fit border border-purple-100 dark:border-purple-800/50">
                  <Search className="w-3.5 h-3.5" /> Threat Detection
                </div>
                <h4 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Continuous Posture Management</h4>
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                  Vulnerabilities continuously scans your SAP landscape for the misconfigurations, missing patches, and exposed services that turn into real incidents. What used to require a point-in-time security assessment now runs continuously in the background.
                </p>
              </div>
              <div className="lg:w-1/2 bg-slate-50 lg:bg-transparent dark:bg-slate-800/30 lg:dark:bg-transparent border-t lg:border-none border-slate-200 dark:border-slate-700/60 flex flex-col justify-end pt-12 px-4 sm:px-8 lg:pt-0 lg:px-0 relative overflow-hidden lg:overflow-visible">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none lg:hidden" />
                <div className="relative rounded-t-2xl lg:rounded-2xl overflow-hidden border-t border-x lg:border border-slate-300 lg:border-slate-200 dark:border-slate-700/50 shadow-[0_0_40px_rgba(0,0,0,0.1)] lg:shadow-xl dark:shadow-2xl translate-y-4 lg:translate-y-0 group-hover:translate-y-0 transition-transform duration-700 bg-white w-full mobile-scaled-mockup-frame max-sm:!aspect-[9/10]">
                  <VulnerabilitiesMainMockup />
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-4 sm:px-3 lg:px-4 mt-12">
              {vulnerabilityCards.map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-20 lg:justify-between`}>
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
                  <div className="lg:w-1/2 w-full">
                    <div className="mobile-scaled-mockup-frame rounded-2xl shadow-xl border border-slate-200 bg-white overflow-hidden">
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
