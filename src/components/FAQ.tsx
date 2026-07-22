import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to deploy Matrix Vault into an existing SAP environment?",
    answer: "Most enterprise deployments are completed within 2 to 4 weeks. Our native SAP connectors and automated discovery tools significantly reduce the manual configuration usually required for identity governance tools."
  },
  {
    question: "Does Matrix Vault support managing Firefighter (FF) IDs?",
    answer: "Yes, Firefighter ID management is a core capability. Matrix Vault automates FF ID checkout, session monitoring, and post-session audit log reviews, ensuring full compliance without slowing down your emergency responders."
  },
  {
    question: "Is the platform SOC 2 and ISO 27001 compliant?",
    answer: "Absolutely. Matrix Vault is built on a zero-trust architecture. We are fully SOC 2 Type II and ISO 27001 certified, and all data is encrypted both at rest and in transit."
  },
  {
    question: "How does the AI Copilot assist administrators?",
    answer: "The AI Copilot is trained on your specific access policies and SAP structures. It can instantly summarize audit logs, suggest approval routing based on historical data, and help troubleshoot access errors via a conversational interface."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg font-medium">Everything you need to know about implementing Matrix Vault.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-label={faq.question}
              >
                <span className="text-lg font-bold text-slate-900 dark:text-white">{faq.question}</span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500'}`}>
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
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-300 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-800 mt-2">
                      <div className="pt-4">
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
