import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Matrix Vault cut our SAP audit preparation time by over 80%. What used to take our compliance team three weeks is now a one-click report.",
    author: "Elena Rodriguez",
    role: "CISO",
    company: "Global Logistics Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    color: "bg-blue-100 text-blue-700"
  },
  {
    quote: "Managing Firefighter IDs was a nightmare before. Now, the automated workflows and real-time monitoring give us complete peace of mind.",
    author: "James Chen",
    role: "VP of IT Operations",
    company: "Finserve Group",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    color: "bg-purple-100 text-purple-700"
  },
  {
    quote: "The AI Copilot is a game changer. It answers complex SoD conflict questions instantly, empowering our junior admins to work faster.",
    author: "Sarah O'Connor",
    role: "SAP Security Lead",
    company: "TechManufacturing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    color: "bg-emerald-100 text-emerald-700"
  }
];

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Trusted by Enterprise Security Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm relative"
            >
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 font-medium mb-8 leading-relaxed text-base sm:text-lg">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-white flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-bold text-slate-900">{t.author}</div>
                  <div className="text-sm font-semibold text-slate-500">{t.role} &bull; {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
