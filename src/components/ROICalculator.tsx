import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, DollarSign, Clock, TrendingUp } from 'lucide-react';

export function ROICalculator() {
  const [requests, setRequests] = useState(500);
  const [auditHours, setAuditHours] = useState(40);
  const [hourlyRate, setHourlyRate] = useState(75);
  
  const [savings, setSavings] = useState({ hours: 0, monthly: 0, annual: 0 });

  useEffect(() => {
    // Assumptions:
    // Manual request processing takes ~30 mins (0.5 hrs). Matrix Vault automates 80% of this.
    const manualRequestTime = requests * 0.5; 
    const requestHoursSaved = manualRequestTime * 0.8;
    
    // Matrix Vault automates 80% of audit prep.
    const auditHoursSaved = auditHours * 0.8;
    
    const totalHoursSaved = Math.round(requestHoursSaved + auditHoursSaved);
    const monthlySavings = totalHoursSaved * hourlyRate;
    const annualSavings = monthlySavings * 12;
    
    setSavings({
      hours: totalHoursSaved,
      monthly: monthlySavings,
      annual: annualSavings
    });
  }, [requests, auditHours, hourlyRate]);

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-semibold mb-6 shadow-sm">
              <Calculator className="w-4 h-4" />
              <span>ROI Calculator</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Calculate Your <span className="text-red-600">Savings</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              See how much time and money your security team can save by automating SAP access governance with Matrix Vault.
            </p>
          </motion.div>
        </div>

        <div className="lg:grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm mb-8 lg:mb-0"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-8">Current Resource Usage</h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-bold text-slate-700">Monthly Access Requests</label>
                  <span className="text-lg font-extrabold text-red-600 bg-red-50 px-3 py-1 rounded-lg border border-red-100">{requests}</span>
                </div>
                <input 
                  type="range" 
                  min="50" max="5000" step="50"
                  value={requests}
                  onChange={(e) => setRequests(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <div className="flex justify-between text-xs font-semibold text-slate-400 mt-2">
                  <span>50</span>
                  <span>5,000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-bold text-slate-700">Monthly Audit Prep (Hours)</label>
                  <span className="text-lg font-extrabold text-red-600 bg-red-50 px-3 py-1 rounded-lg border border-red-100">{auditHours}h</span>
                </div>
                <input 
                  type="range" 
                  min="10" max="200" step="5"
                  value={auditHours}
                  onChange={(e) => setAuditHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <div className="flex justify-between text-xs font-semibold text-slate-400 mt-2">
                  <span>10h</span>
                  <span>200h</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-bold text-slate-700">Admin Hourly Rate ($)</label>
                  <span className="text-lg font-extrabold text-red-600 bg-red-50 px-3 py-1 rounded-lg border border-red-100">${hourlyRate}</span>
                </div>
                <input 
                  type="range" 
                  min="30" max="250" step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <div className="flex justify-between text-xs font-semibold text-slate-400 mt-2">
                  <span>$30</span>
                  <span>$250</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-red-600 rounded-3xl blur-2xl opacity-20 transform translate-x-4 translate-y-4"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <h3 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Estimated Savings</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-400 mb-1">Hours Saved / Month</div>
                    <div className="text-3xl font-extrabold text-white">{savings.hours.toLocaleString()} <span className="text-lg text-slate-500">hrs</span></div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-400 mb-1">Monthly Cost Savings</div>
                    <div className="text-3xl font-extrabold text-white">${savings.monthly.toLocaleString()}</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-red-400 uppercase tracking-wider mb-1">Annual Projected Savings</div>
                      <div className="text-4xl sm:text-5xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        ${savings.annual.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-10 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg shadow-red-600/20">
                Get Your Custom ROI Report
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
