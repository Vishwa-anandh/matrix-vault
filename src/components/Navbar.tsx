import { motion } from 'motion/react';
import { Shield, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img src="/matrix_logo.png" alt="Matrix Vault Logo" className="h-14 w-auto object-contain" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">How it Works</a>
            <a href="#security" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">Security</a>
            <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">FAQ</a>
            
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200">
              <button className="text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors">
                Log In
              </button>
              <button className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-full overflow-hidden transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30">
                <span>Request Demo</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200"
        >
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
            <a href="#features" className="block text-base font-semibold text-slate-600 hover:text-red-600">Features</a>
            <a href="#how-it-works" className="block text-base font-semibold text-slate-600 hover:text-red-600">How it Works</a>
            <a href="#security" className="block text-base font-semibold text-slate-600 hover:text-red-600">Security</a>
            <a href="#faq" className="block text-base font-semibold text-slate-600 hover:text-red-600">FAQ</a>
            <hr className="border-slate-100" />
            <button className="w-full text-left text-base font-semibold text-slate-700 hover:text-red-600">Log In</button>
            <button className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700">
              Request Demo
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
