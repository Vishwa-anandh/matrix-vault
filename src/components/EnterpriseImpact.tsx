import { motion } from 'motion/react';
import { 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  BarChart3, 
  Cpu, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function EnterpriseImpact() {
  const metrics = [
    {
      stat: '85%',
      label: 'Reduction in Audit Prep',
      description: 'Automated evidence generation replaces weeks of manual GRC spreadsheet hunting.',
      icon: Clock,
      badge: 'Time Savings'
    },
    {
      stat: '< 200ms',
      label: 'Inline Risk Detection',
      description: 'OData API checks analyze Segregation of Duties conflicts before access is provisioned.',
      icon: Cpu,
      badge: 'Real-time Gating'
    },
    {
      stat: '100%',
      label: 'Firefighter Visibility',
      description: 'AI Copilot interprets raw T-Code logs into clear executive session narratives.',
      icon: ShieldCheck,
      badge: 'Emergency Access'
    },
    {
      stat: '2–4 Wks',
      label: 'Turnkey Implementation',
      description: 'Native SAP connectors deploy rapidly without heavy ABAP modifications.',
      icon: BarChart3,
      badge: 'Fast Time-to-Value'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Proven Enterprise Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              Quantifiable Impact for <span className="text-red-600">SAP Security Teams</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
              Transform your access governance posture from slow, reactive audits to real-time, automated protection.
            </p>
          </motion.div>
        </div>

        {/* 4 Impact Cards Grid - Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {metrics.map((m, index) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xs hover:border-red-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full">
                      {m.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-red-600 group-hover:text-white transition-colors shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
                    {m.stat}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {m.label}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {m.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform">
                  <span>Verified Standard</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner - Full Width */}
        <div className="w-full bg-gradient-to-r from-red-50 to-slate-50 border border-red-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">
              Ready to modernize your SAP access risk management?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Schedule a personalized walkthrough with our SAP security engineers.
            </p>
          </div>
          <Link to="/contact">
            <button className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors shadow-md shadow-red-600/20 cursor-pointer">
              <span>Book Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
