"use client";
import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Split,
  Search,
  BrainCircuit,
  FileText,
  UserCheck,
  XCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Lock,
  Check,
  Flame,
  Zap,
  ShieldAlert,
  ArrowUpRight,
  Layers,
  FileSpreadsheet
} from "lucide-react";
import { Link } from "react-router-dom";

export function Comparison() {
  return (
    <section id="platform" className="py-16 sm:py-20 lg:py-24 bg-white relative border-t border-b border-slate-200 text-slate-900 transition-colors duration-300 overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[15%] right-[5%] w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[110px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Platform Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-transparent border border-red-200 text-red-600 text-xs font-bold mb-4 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-red-600" />
              <span>Platform Deep-Dive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-slate-900 leading-tight">
              One Platform. <span className="text-red-600">Every Layer of SAP Risk.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
              From access requests to audit reports, Matrix Vault watches, checks, and explains SAP risk in real time — so nothing reaches production unreviewed.
            </p>
          </motion.div>
        </div>

        {/* Bespoke Platform Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          
          {/* BENTO CARD 1: Full-Width 12-Column Hero Gating Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 bg-gradient-to-br from-slate-50 via-white to-red-50/30 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row items-center justify-between gap-8 group"
          >
            <div className="lg:w-1/2 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white font-bold text-xs shadow-xs">
                <Zap className="w-3.5 h-3.5" /> Inline Transaction Gatekeeper
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Risk-Aware Access & Pre-Provisioning Control
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                Every access request executes inline SoD conflict detection before assignment. It’s an active safety gate built into the transaction pipeline itself—eliminating post-audit remediation cycles.
              </p>

              <div className="flex items-center gap-4 text-xs font-bold text-slate-700 pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600" /> Sub-200ms Latency
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600" /> OData Connector
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600" /> S/4HANA Ready
                </div>
              </div>
            </div>

            {/* Pipeline Visual Component */}
            <div className="lg:w-1/2 w-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Live Transaction Inspection Pipeline
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="w-full sm:w-1/3 bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <span className="text-[10px] text-slate-400 font-bold block">STEP 1: REQUEST</span>
                  <span className="font-bold text-slate-800">User Role Assign</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 hidden sm:block shrink-0" />
                <div className="w-full sm:w-1/3 bg-red-50 border border-red-200 p-3 rounded-xl">
                  <span className="text-[10px] text-red-500 font-bold block">STEP 2: SOD ANALYSIS</span>
                  <span className="font-bold text-red-700">Checking Rule Matrix</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 hidden sm:block shrink-0" />
                <div className="w-full sm:w-1/3 bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
                  <span className="text-[10px] text-emerald-600 font-bold block">STEP 3: VERDICT</span>
                  <span className="font-bold text-emerald-800">Mitigated & Blocked</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BENTO CARD 2: 6-Column Multi-Role Matrix Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-xl hover:bg-white hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-transparent border border-blue-200 text-blue-700 font-bold text-xs">
                  <Split className="w-3.5 h-3.5" /> Multi-Role Analytics
                </span>
                <span className="text-xs text-slate-400 font-bold">100 Roles Matrix</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                Instant 100-Role Overlap Matrix
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-5">
                Select up to 100 SAP roles simultaneously and analyze authorization overlaps, T-Code conflicts, and object collisions in seconds.
              </p>

              {/* Role Matrix Table Mockup */}
              <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2 text-xs font-mono">
                <div className="grid grid-cols-4 font-bold text-slate-500 pb-2 border-b border-slate-100 text-[11px]">
                  <span>SAP ROLE</span>
                  <span>T-CODES</span>
                  <span>OVERLAP</span>
                  <span>STATUS</span>
                </div>
                <div className="grid grid-cols-4 items-center text-[11px] text-slate-700 font-semibold py-1">
                  <span>Z_FI_ACCT</span>
                  <span className="text-slate-500">FB01, FB02</span>
                  <span className="text-emerald-600 font-bold">0%</span>
                  <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-1.5 py-0.5 rounded w-fit">Clean</span>
                </div>
                <div className="grid grid-cols-4 items-center text-[11px] text-slate-700 font-semibold py-1">
                  <span>Z_P2P_MGR</span>
                  <span className="text-slate-500">ME21N, MIRO</span>
                  <span className="text-red-600 font-bold">14%</span>
                  <span className="bg-red-100 text-red-800 text-[9px] font-bold px-1.5 py-0.5 rounded w-fit">Flagged</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Instant Cross-Role Inspection</span>
              <span className="text-blue-600 font-bold">100 Roles Supported</span>
            </div>
          </motion.div>

          {/* BENTO CARD 3: 6-Column AI Risk Narrative Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-xl hover:bg-white hover:border-amber-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-transparent border border-amber-200 text-amber-700 font-bold text-xs">
                  <BrainCircuit className="w-3.5 h-3.5" /> AI Risk Copilot
                </span>
                <span className="text-xs text-slate-400 font-bold">Behavioral Intelligence</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                AI-Written Firefighter Log Summaries
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-5">
                Matrix Vault converts raw Firefighter session logs into plain-English behavioral narratives paired with a 0-100 risk score.
              </p>

              {/* AI Narrative Preview Box */}
              <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-900 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-600" /> Session Summary
                  </span>
                  <span className="bg-red-100 text-red-700 text-[10px] font-extrabold px-2 py-0.5 rounded">
                    Score: 75/100 (High Risk)
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  User executed <strong className="text-slate-900">SE38</strong> dynamic ABAP code modification during Emergency Session <strong className="text-slate-900">FF_DEV</strong>. Flagged for review.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Executive Plain-English Logs</span>
              <span className="text-amber-700 font-bold">90% Review Time Saved</span>
            </div>
          </motion.div>

          {/* BENTO CARD 4: 4-Column Universal Radar View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-xl hover:bg-white hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-transparent border border-purple-200 text-purple-700 font-bold text-xs">
                  <Search className="w-3.5 h-3.5" /> Discovery Engine
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                Universal Radar View
              </h3>
              <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4">
                Search a User, Role, T-Code, or Finding and visualize all connected authorizations in one view.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-2 text-xs text-slate-400">
                <Search className="w-4 h-4 text-purple-600" />
                <span className="font-mono text-slate-600 text-xs font-medium">Search "Anbarasu" or "SE38"...</span>
              </div>
            </div>
          </motion.div>

          {/* BENTO CARD 5: 4-Column Evidence Vault */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-xl hover:bg-white hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-transparent border border-emerald-200 text-emerald-700 font-bold text-xs">
                  <FileSpreadsheet className="w-3.5 h-3.5" /> Evidence Vault
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                Scheduled Audit Export
              </h3>
              <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4">
                Automated compliance packages with log timestamps for internal audit preparation.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs font-bold text-emerald-800">
                <span>Export Formats:</span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded">
                  PDF / XLSX
                </span>
              </div>
            </div>
          </motion.div>

          {/* BENTO CARD 6: 4-Column Approver Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-4 bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-xl hover:bg-white hover:border-green-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-transparent border border-green-200 text-green-700 font-bold text-xs">
                  <UserCheck className="w-3.5 h-3.5" /> Approver Coverage
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                Approver Gap Matrix
              </h3>
              <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4">
                Visual matrix tracking role approver assignments across your entire SAP landscape.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Approver Status:</span>
                <span className="bg-green-100 text-green-800 text-[10px] font-extrabold px-2 py-0.5 rounded">
                  100% Assigned
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
