"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Split,
  Search,
  BrainCircuit,
  FileText,
  UserCheck,
  XCircle,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const features = [
  {
    title: "Risk-Aware by Design",
    description: "Every access action runs SoD analysis inline. It's a gate built into the transaction itself—not a separate report run days later.",
    legacy: "Complex, multi-step provisioning workflows.",
    matrix: "Guided wizard with built-in SoD checks.",
    icon: ShieldCheck,
  },
  {
    title: "Instant Multi-Role Comparison",
    description: "Select up to 100 roles and get a unified breakdown of matched vs. unmatched authorizations, T-Codes, and a live SoD conflict verdict.",
    legacy: "Manual data extraction and custom reporting.",
    matrix: "Compare up to 100 roles instantly for overlaps.",
    icon: Split,
  },
  {
    title: "Universal Radar View",
    description: "Search a Role, User, Profile, User Group, T-Code, or Finding and see everything connected to it in one single, unified place.",
    legacy: "Data scattered across multiple apps and modules.",
    matrix: "Single search bar across all security entities.",
    icon: Search,
  },
  {
    title: "AI-Generated Risk Narratives",
    description: "Firefighter sessions come with AI-written, plain-English summaries alongside a 0-100 risk score, turning raw logs into actionable insights.",
    legacy: "Raw logs; no behavioral risk scoring.",
    matrix: "AI risk scoring (0-100) with session summaries.",
    icon: BrainCircuit,
  },
  {
    title: "Scheduled Compliance Reporting",
    description: "Generate on-demand or scheduled SOX Compliance reports covering SoD Conflicts and Firefighter Evidence, delivered via PDF or XLSX.",
    legacy: "Requires custom BI tools or manual building.",
    matrix: "Scheduled, multi-format exportable reports.",
    icon: FileText,
  },
  {
    title: "Approver Coverage at a Glance",
    description: "The Approver Management screen shows exactly what percentage of roles have assigned approvers and lets you close gaps in a few clicks.",
    legacy: "Configured manually via backend org-structure.",
    matrix: "Visual coverage (%) dashboard; assign in clicks.",
    icon: UserCheck,
  },
];

export function Comparison() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="platform" className="py-12 bg-slate-50 dark:bg-slate-950 relative text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-red-100/40 dark:bg-red-950/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-100/40 dark:bg-blue-950/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[95%] xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
              One Platform. <span className="text-red-600 dark:text-red-500">Every Layer of SAP Risk.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
              From access requests to audit reports, Matrix Vault watches, checks, and explains SAP risk in real time — so nothing reaches production unreviewed.
            </p>
          </motion.div>
        </div>

        {/* Mobile Navigation Tabs (Horizontal Scrollable Pills) */}
        <div className="lg:hidden flex overflow-x-auto gap-2 pb-3 mb-6 no-scrollbar snap-x -mx-4 px-4">
          {features.map((feature, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`snap-start shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <feature.icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400 dark:text-slate-500"}`} />
                <span className="whitespace-nowrap">{feature.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Layout */}
        <div className="lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Side: Desktop Navigation Tabs */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3 relative">
            {features.map((feature, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative w-full text-left px-4 py-3.5 rounded-2xl transition-all duration-300 flex items-center gap-3 group ${
                    isActive 
                      ? "bg-white dark:bg-slate-900 shadow-md ring-1 ring-slate-200 dark:ring-slate-800" 
                      : "hover:bg-white/60 dark:hover:bg-slate-900/60"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isActive 
                      ? "bg-red-500 text-white shadow-md shadow-red-500/20" 
                      : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 group-hover:text-red-500 group-hover:border-red-200"
                  }`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-lg transition-colors duration-300 ${
                      isActive 
                        ? "text-red-600 dark:text-red-500" 
                        : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                    }`}>
                      {feature.title}
                    </h3>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? "text-red-500 opacity-100 translate-x-0" : "text-slate-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:text-red-300"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Side: Active Content Panel */}
          <div className="lg:col-span-7 relative h-full min-h-0 lg:min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl ring-1 ring-slate-900/5 dark:ring-slate-800 h-full flex flex-col justify-start relative overflow-hidden"
              >
                {/* Decorative large icon in background */}
                <div className="absolute -top-10 -right-10 text-slate-50 dark:text-slate-800/40 opacity-50 pointer-events-none transform rotate-12">
                  {React.createElement(features[activeIndex].icon, { size: 240 })}
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 font-bold text-xs tracking-widest mb-3 sm:mb-6 border border-red-100 dark:border-red-900/50">
                    <SparklesIcon className="w-3.5 h-3.5" /> Feature Spotlight
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 sm:mb-6 leading-tight">
                    {features[activeIndex].title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4 sm:mb-8">
                    {features[activeIndex].description}
                  </p>
                  
                  {/* Micro-Comparison */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700/50 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-slate-300 dark:bg-slate-600"></div>
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <XCircle className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">Legacy GRC</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-snug">
                        {features[activeIndex].legacy}
                      </p>
                    </div>

                    <div className="bg-red-50 dark:bg-red-950/40 rounded-2xl p-4 sm:p-6 border border-red-100 dark:border-red-900/50 relative overflow-hidden shadow-sm">
                      <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                        <span className="text-xs font-bold text-red-600 dark:text-red-400 tracking-wider">Matrix Vault</span>
                      </div>
                      <p className="text-sm text-slate-900 dark:text-white font-bold leading-snug">
                        {features[activeIndex].matrix}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function SparklesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}
