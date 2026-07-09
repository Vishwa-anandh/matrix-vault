import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, FileCheck, Users, ArrowRight } from 'lucide-react';

const personas = [
  {
    id: 'security',
    title: 'Security Admins',
    icon: Shield,
    headline: 'Provision Access Faster, Without the Risk',
    description: 'Stop waiting for overnight risk analysis jobs. Matrix Vault’s live, in-flow SoD checks block conflicts before they happen, allowing your team to confidently provision access in minutes, not days.',
    benefits: [
      'Guided 6-7 step provisioning wizards',
      'Live SoD checks block conflicts instantly',
      'One-click SAP health checks & transparent integration'
    ]
  },
  {
    id: 'compliance',
    title: 'Compliance Officers',
    icon: FileCheck,
    headline: 'Automate Your SOX Compliance Reporting',
    description: 'Say goodbye to manual log compilation. Matrix Vault automatically consolidates your audit trails and generates scheduled, multi-format compliance reports directly to your inbox.',
    benefits: [
      'Unified Audit Workspace (One screen, full story)',
      'Scheduled PDF/XLSX/PPTX SOX reports',
      'Instant visibility into Mitigation Controls'
    ]
  },
  {
    id: 'business',
    title: 'Business Approvers',
    icon: Users,
    headline: 'Make Approval Decisions You Actually Understand',
    description: 'No more guessing what raw SAP logs mean. Our AI Risk Intelligence translates complex Firefighter sessions into plain-English narratives, complete with a 0-100 risk score.',
    benefits: [
      'AI-Generated Risk Narratives for Firefighter sessions',
      'Approver Coverage Dashboard to spot coverage gaps',
      'Mobile-friendly, plain-English approval requests'
    ]
  }
];

export function SolutionsByPersona() {
  const [activePersona, setActivePersona] = useState(personas[0]);

  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
             Built for the <br/>
             <span className="text-red-600">Whole Team</span>
           </h2>
           <p className="text-slate-600 text-lg font-medium leading-relaxed">
             Whether you're provisioning access, approving it, or auditing it, Matrix Vault gives you the exact tools you need.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Tabs */}
          <div className="lg:col-span-4 space-y-2">
            {personas.map((persona) => {
              const isActive = activePersona.id === persona.id;
              return (
                <button
                  key={persona.id}
                  onClick={() => setActivePersona(persona)}
                  className={`w-full text-left px-6 py-5 rounded-2xl flex items-center gap-4 transition-all duration-300 ${
                    isActive 
                      ? 'bg-red-50 border-2 border-red-200 shadow-md' 
                      : 'bg-white border-2 border-transparent hover:bg-slate-50 hover:border-slate-200'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <persona.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className={`font-bold text-lg ${isActive ? 'text-red-900' : 'text-slate-700'}`}>
                      {persona.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Pane */}
          <div className="lg:col-span-8 bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative min-h-[400px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-[80px]"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activePersona.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="inline-flex items-center gap-2 bg-slate-800 text-red-400 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full mb-6">
                  <activePersona.icon className="w-4 h-4" /> {activePersona.title}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                  {activePersona.headline}
                </h3>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl">
                  {activePersona.description}
                </p>
                
                <div className="space-y-4">
                  {activePersona.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                        <ArrowRight className="w-4 h-4 text-red-400" />
                      </div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
