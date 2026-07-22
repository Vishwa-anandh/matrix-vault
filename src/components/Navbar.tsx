import { motion } from 'motion/react';
import { Shield, Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        document.documentElement.classList.contains('dark') ||
        localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <img src="/matrix_logo.png" alt="Matrix Vault Logo" className="h-14 w-auto object-contain" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/#platform" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500 transition-colors">Platform</a>
            <a href="/#how-it-works" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500 transition-colors">How it Works</a>
            <a href="/#faq" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500 transition-colors">FAQ</a>
            
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200 dark:border-slate-800">
              <a 
                href="https://one.maitsys.com" 
                className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                Log In
              </a>
              <Link to="/contact">
                <button className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-full overflow-hidden transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30">
                  <span>Request Demo</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              {/* <button
                onClick={toggleTheme}
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
              </button> */}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            {/* <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button> */}
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-2">
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
          className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 max-h-[calc(100vh-80px)] overflow-y-auto"
        >
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
            <a 
              href="/#platform" 
              onClick={() => setIsOpen(false)}
              className="block text-base font-semibold text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500"
            >
              Platform
            </a>
            <a 
              href="/#how-it-works" 
              onClick={() => setIsOpen(false)}
              className="block text-base font-semibold text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500"
            >
              How it Works
            </a>
            <a 
              href="/#faq" 
              onClick={() => setIsOpen(false)}
              className="block text-base font-semibold text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500"
            >
              FAQ
            </a>
            <hr className="border-slate-100 dark:border-slate-800" />
            <a 
              href="https://one.maitsys.com" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-left text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-500"
            >
              Log In
            </a>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
