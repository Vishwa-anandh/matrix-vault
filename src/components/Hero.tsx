import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ShieldCheck,
  PlayCircle,
  CheckCircle2,
} from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";

export function Hero() {
  return (
    <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 md:w-[650px] md:h-[650px] bg-red-100/80 dark:bg-red-950/30 rounded-full blur-[100px] md:blur-[140px] opacity-70"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 md:w-[550px] md:h-[550px] bg-blue-100/60 dark:bg-blue-950/20 rounded-full blur-[80px] md:blur-[120px] opacity-60"></div>
        
        {/* Distinctive Flowing Soft Aurora Wave Ribbons (Strong Blur Effect) */}
        <svg className="absolute inset-0 w-full h-full opacity-70 blur-[28px]" viewBox="0 0 1440 650" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path 
            d="M-50,220 Q350,60 750,280 T1550,180 V650 H-50 Z" 
            fill="url(#aurora-ribbon-1)" 
            className="opacity-50"
          />
          <path 
            d="M-50,380 Q400,180 850,420 T1550,260 V650 H-50 Z" 
            fill="url(#aurora-ribbon-2)" 
            className="opacity-40"
          />
        </svg>

        {/* Blurry Wave Streams with Traveling Glowing Light Beams */}
        <svg className="absolute inset-0 w-full h-full opacity-80 blur-[16px]" viewBox="0 0 1440 650" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {/* Wave Path 1 */}
          <path 
            id="hero-wave-path-1"
            d="M-50,160 C300,40 650,320 1050,120 C1300,0 1450,220 1550,160" 
            stroke="url(#line-grad-1)" 
            strokeWidth="2.5" 
          />
          {/* Wave Path 2 */}
          <path 
            id="hero-wave-path-2"
            d="M-50,280 C280,120 580,440 980,200 C1250,60 1420,340 1550,260" 
            stroke="url(#line-grad-2)" 
            strokeWidth="2" 
            strokeDasharray="6 6"
          />
          {/* Wave Path 3 */}
          <path 
            id="hero-wave-path-3"
            d="M-50,400 C380,220 720,520 1120,260 C1380,120 1500,420 1550,340" 
            stroke="url(#line-grad-1)" 
            strokeWidth="2.5" 
          />

          {/* Traveling Light Pulse 1 on Path 1 */}
          <g>
            <circle r="8" fill="#ef4444" className="opacity-40 animate-pulse">
              <animateMotion 
                path="M-50,160 C300,40 650,320 1050,120 C1300,0 1450,220 1550,160"
                dur="7s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="4" fill="#dc2626">
              <animateMotion 
                path="M-50,160 C300,40 650,320 1050,120 C1300,0 1450,220 1550,160"
                dur="7s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Traveling Light Pulse 2 on Path 2 */}
          <g>
            <circle r="9" fill="#ef4444" className="opacity-30 animate-pulse">
              <animateMotion 
                path="M-50,280 C280,120 580,440 980,200 C1250,60 1420,340 1550,260"
                dur="9s"
                repeatCount="indefinite"
                begin="1.5s"
              />
            </circle>
            <circle r="4.5" fill="#ef4444">
              <animateMotion 
                path="M-50,280 C280,120 580,440 980,200 C1250,60 1420,340 1550,260"
                dur="9s"
                repeatCount="indefinite"
                begin="1.5s"
              />
            </circle>
          </g>

          {/* Traveling Light Pulse 3 on Path 3 */}
          <g>
            <circle r="10" fill="#3b82f6" className="opacity-35 animate-pulse">
              <animateMotion 
                path="M-50,400 C380,220 720,520 1120,260 C1380,120 1500,420 1550,340"
                dur="11s"
                repeatCount="indefinite"
                begin="0.5s"
              />
            </circle>
            <circle r="5" fill="#2563eb">
              <animateMotion 
                path="M-50,400 C380,220 720,520 1120,260 C1380,120 1500,420 1550,340"
                dur="11s"
                repeatCount="indefinite"
                begin="0.5s"
              />
            </circle>
          </g>

          <defs>
            <linearGradient id="aurora-ribbon-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fca5a5" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#fee2e2" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="aurora-ribbon-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f87171" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#ef4444" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ef4444" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f87171" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#fca5a5" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-[1fr_1.3fr] lg:gap-10 xl:gap-12 items-center">
          {/* Left Text Content */}
          <div className="mb-10 lg:mb-0 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/50 text-red-600 dark:text-red-400 text-sm font-semibold mb-8 shadow-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Next-Gen SAP Governance</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                Secure Your <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 relative inline-block">
                  SAP Ecosystem
                  <svg
                    className="absolute -bottom-2 w-full h-3 text-red-200 dark:text-red-900/60"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <br className="hidden lg:block" /> with Precision.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Matrix Vault streamlines access requests, monitors system health
                in real-time, and automates Firefighter ID management with
                AI-powered insights.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm md:text-base font-bold text-white bg-red-600 rounded-full overflow-hidden transition-all hover:bg-red-700 shadow-lg shadow-red-600/30"
                  >
                    <span>Start Free Trial</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                {/* <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm md:text-base font-bold text-slate-700 bg-white border-2 border-slate-200 rounded-full transition-all hover:border-slate-300 hover:bg-slate-50 shadow-sm"
                  >
                    <span>Watch Platform Tour</span>
                  </motion.button>
                </Link> */}
              </div>

              <div className="mt-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 text-sm font-semibold text-slate-500">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <img
                      className="w-10 h-10 rounded-full border-2 border-slate-50 object-cover relative transition-all duration-300 hover:scale-115 hover:z-20 cursor-pointer shadow-sm"
                      src="/user1.png"
                      alt="SAP Security Administrator"
                    />
                    <img
                      className="w-10 h-10 rounded-full border-2 border-slate-50 object-cover relative transition-all duration-300 hover:scale-115 hover:z-20 cursor-pointer shadow-sm"
                      src="/user2.png"
                      alt="GRC Compliance Manager"
                    />
                    <img
                      className="w-10 h-10 rounded-full border-2 border-slate-50 object-cover relative transition-all duration-300 hover:scale-115 hover:z-20 cursor-pointer shadow-sm"
                      src="/user3.png"
                      alt="SAP Basis Consultant"
                    />
                    <img
                      className="w-10 h-10 rounded-full border-2 border-slate-50 object-cover relative transition-all duration-300 hover:scale-115 hover:z-20 cursor-pointer shadow-sm"
                      src="/user4.png"
                      alt="Internal Auditor"
                    />
                  </div>
                  <div className="text-slate-600">
                    Trusted by{" "}
                    <span className="text-slate-900 font-bold">500+</span> teams
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10 w-full"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
