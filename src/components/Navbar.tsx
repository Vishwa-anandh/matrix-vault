import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LoginModal } from './LoginModal';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-semibold transition-colors ${isActive
    ? 'text-red-600 dark:text-red-500'
    : 'text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500'
  }`;

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block text-base font-semibold ${isActive
    ? 'text-red-600 dark:text-red-500'
    : 'text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500'
  }`;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOpenLogin = () => {
    setIsOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <nav ref={navRef} className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-2 shrink-0">
                <img src="/matrix_logo.png" alt="Matrix Vault Logo" className="h-10 sm:h-14 w-auto max-w-full object-contain shrink-0" />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/" end className={navLinkClass}>Home</NavLink>
              <NavLink to="/features" className={navLinkClass}>Features</NavLink>
              {/* <NavLink to="/modules" className={navLinkClass}>Modules</NavLink> */}
              <NavLink to="/how-it-works" className={navLinkClass}>How it Works</NavLink>
              <NavLink to="/faq" className={navLinkClass}>FAQ</NavLink>

              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={handleOpenLogin}
                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-full overflow-hidden transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 cursor-pointer"
                >
                  <span>Login</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-2">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop & Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop: Clicking outside closes mobile sidebar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="md:hidden fixed inset-0 top-[80px] z-40 bg-slate-950/60 backdrop-blur-xs transition-opacity"
              />

              {/* Mobile Drawer */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden fixed top-[80px] left-0 right-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 max-h-[calc(100vh-80px)] overflow-y-auto shadow-2xl"
              >
                <div className="px-6 pt-4 pb-8 space-y-4">
                  <NavLink
                    to="/"
                    end
                    onClick={() => setIsOpen(false)}
                    className={mobileNavLinkClass}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/features"
                    onClick={() => setIsOpen(false)}
                    className={mobileNavLinkClass}
                  >
                    Features
                  </NavLink>
                  {/* <NavLink
                    to="/modules"
                    onClick={() => setIsOpen(false)}
                    className={mobileNavLinkClass}
                  >
                    Modules
                  </NavLink> */}
                  <NavLink
                    to="/how-it-works"
                    onClick={() => setIsOpen(false)}
                    className={mobileNavLinkClass}
                  >
                    How it Works
                  </NavLink>
                  <NavLink
                    to="/faq"
                    onClick={() => setIsOpen(false)}
                    className={mobileNavLinkClass}
                  >
                    FAQ
                  </NavLink>
                  <hr className="border-slate-100 dark:border-slate-800" />
                  <button
                    type="button"
                    onClick={handleOpenLogin}
                    className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors cursor-pointer"
                  >
                    Login
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Login Resolution Modal Popup */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}
