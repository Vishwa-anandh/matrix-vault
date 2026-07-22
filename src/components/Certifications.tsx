import { motion } from 'motion/react';

const certifications = [
  {
    name: 'SOC 2 Type II',
    logo: '/soc2.png',
    description: 'Audited for security, availability, and confidentiality.'
  },
  {
    name: 'HIPAA Compliant',
    logo: '/hipaa.png',
    description: 'Securing protected health information (PHI) within SAP environments.'
  },
  {
    name: 'GDPR Ready',
    logo: '/gdpr.png',
    description: 'Built-in tools to help you manage data privacy and user consent.'
  },
  {
    name: 'ISO 27001',
    logo: '/iso.png',
    description: 'Certified for international information security management.'
  }
];

export function Certifications() {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-sm font-extrabold text-slate-400 tracking-[0.2em]">Enterprise Compliance Standards</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 mb-5 flex items-center justify-center overflow-hidden">
                <img 
                  src={cert.logo} 
                  alt={cert.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{cert.name}</h3>
              <p className="text-sm font-medium text-slate-500 leading-relaxed px-2">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
