import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const faqs = [
  {
    question: "How long does it take to deploy Matrix Vault into an existing SAP environment?",
    answer: "Most enterprise deployments are completed within 2 to 4 weeks. Matrix Vault connects via standard SAP OData v2/v4 APIs and RFC connectors, requiring zero custom ABAP modifications to your S/4HANA or ECC 6.0 kernel."
  },
  {
    question: "Does Matrix Vault support managing Firefighter (FF) IDs and Emergency Access?",
    answer: "Yes, Firefighter ID management is a core capability. Matrix Vault automates FF ID checkout, real-time T-Code session monitoring, and post-session AI log summarization—reducing manual review time by 90% while maintaining full audit trail visibility."
  },
  {
    question: "How does the AI Copilot assist administrators with SAP risk intelligence?",
    answer: "The AI Copilot converts raw SAP transaction logs (e.g., SE09, SE38, STMS) into plain-English behavioral risk narratives. It calculates a 0-100 risk score per Firefighter session and highlights high-risk T-Code executions automatically."
  },
  {
    question: "How does Matrix Vault differ from traditional SAP GRC Access Control software?",
    answer: "Traditional SAP GRC relies on batch reporting and offline analysis run days after access changes occur. Matrix Vault provides real-time, inline SoD conflict prevention in sub-200ms before authorization changes hit SAP Production, stopping unauthorized access pre-provisioning."
  },
  {
    question: "Which SAP systems and versions are supported by Matrix Vault?",
    answer: "Matrix Vault natively supports SAP S/4HANA (Cloud & On-Premise), SAP ERP 6.0 (ECC EHP 0-8), SAP BTP (Business Technology Platform), and SAP Solution Manager. It integrates seamlessly via RESTful OData services and SAP NetWeaver interfaces."
  },
  {
    question: "What audit evidence and compliance reports does Matrix Vault generate?",
    answer: "Matrix Vault automatically generates audit-ready PDF and XLSX reports for internal access reviews and audit preparation. Every report includes log verification timestamps and complete approver audit trails."
  },
  {
    question: "Is data encrypted and secure during SAP integration?",
    answer: "Yes, all data in transit is encrypted using TLS 1.3/HTTPS, and data at rest utilizes AES-256 encryption. Matrix Vault operates on zero-trust principles, adhering to SAP Security Guidelines and GDPR data privacy standards without storing customer ERP transactional data."
  },
  {
    question: "Can Matrix Vault simulate role changes before modifying SAP Production roles?",
    answer: "Yes, Matrix Vault includes an interactive SAP Role Simulator that allows security architects to model authorization changes and compare up to 100 SAP roles simultaneously to eliminate redundant T-Codes and SoD conflicts prior to transport."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative transition-colors duration-300 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Enterprise Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Everything you need to know about implementing Matrix Vault for SAP access governance, SoD risk prevention, and audit compliance.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-label={faq.question}
              >
                <span className="text-base sm:text-lg font-bold text-slate-900 min-w-0 break-words">{faq.question}</span>
                <div className={`flex-shrink-0 p-2 rounded-full transition-colors ${openIndex === index ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-600 font-medium leading-relaxed border-t border-slate-100 mt-2">
                      <div className="pt-4 text-xs sm:text-sm">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
