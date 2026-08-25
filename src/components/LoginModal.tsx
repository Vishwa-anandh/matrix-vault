import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, ArrowRight, AlertCircle, Building2, Loader2, Sparkles, UserX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config/api';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ResolveRedirectResponse {
  companyFound: boolean;
  userExists: boolean;
  redirectUrl: string | null;
}

type ModalScreen = 'input' | 'no_match' | 'user_not_found';

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [screen, setScreen] = useState<ModalScreen>('input');
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleReset = () => {
    setEmail('');
    setLoading(false);
    setErrorMsg(null);
    setScreen('input');
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const handleRequestDemo = () => {
    handleClose();
    navigate('/contact');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      const endpoint = `${API_BASE_URL}/companies/resolve-redirect?email=${encodeURIComponent(cleanEmail)}`;
      const res = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const responseJson = await res.json();
      
      // Support both nested { data: { redirectUrl, ... } } and direct { redirectUrl, ... }
      const payload: ResolveRedirectResponse = responseJson.data ? responseJson.data : responseJson;

      const redirectUrl = payload?.redirectUrl;
      const companyFound = Boolean(payload?.companyFound);
      const userExists = Boolean(payload?.userExists);

      // If both companyFound and userExists are true AND redirectUrl is present, redirect immediately
      if (companyFound && userExists && redirectUrl && typeof redirectUrl === 'string' && redirectUrl.trim().length > 0) {
        window.location.href = redirectUrl.trim();
        return;
      }

      // If company found = true, but user does not exist (and no redirectUrl)
      if (companyFound && !userExists) {
        setScreen('user_not_found');
        setLoading(false);
        return;
      }

      // If both false or no match found (and no redirectUrl)
      setScreen('no_match');
      setLoading(false);
    } catch (err) {
      console.error('Error resolving login redirect:', err);
      setErrorMsg('Unable to connect to login service. Please try again or contact support.');
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden touch-none">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* SCREEN 1: Input Email Screen */}
          {screen === 'input' && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800/50 rounded-2xl text-red-600 dark:text-red-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Login to Matrixvault
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Enter your work email to access your workspace
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="login-email" className="block text-xs font-bold tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Work Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="login-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600/40 focus:border-red-600 transition-all font-medium"
                    />
                  </div>
                </div>

                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 rounded-xl flex items-start gap-2.5 text-xs text-red-700 dark:text-red-400 font-semibold"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Resolving workspace...</span>
                    </>
                  ) : (
                    <>
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Need an organization account?{' '}
                  <button
                    type="button"
                    onClick={handleRequestDemo}
                    className="text-red-600 dark:text-red-400 font-bold hover:underline"
                  >
                    Request Demo
                  </button>
                </p>
              </div>
            </div>
          )}

          {/* SCREEN 2: Organization / Workspace Not Found */}
          {screen === 'no_match' && (
            <div className="text-center py-2">
              <div className="mx-auto w-14 h-14 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800/50 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
                <Building2 className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                Let’s get you connected
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6">
                It looks like <span className="font-bold text-slate-900 dark:text-white">{email}</span> isn’t connected to an active Matrixvault workspace yet. Request a demo to get started, or try signing in with another email.
              </p>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleRequestDemo}
                  className="w-full py-3.5 px-6 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request a Demo</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Try another email
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 3: Company Found but User Account Does Not Exist */}
          {screen === 'user_not_found' && (
            <div className="text-center py-2">
              <div className="mx-auto w-14 h-14 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-center text-slate-700 dark:text-slate-300 mb-4">
                <UserX className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                Let’s get you connected
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6">
                It looks like <span className="font-bold text-slate-900 dark:text-white">{email}</span> isn’t connected to an active Matrixvault workspace yet. Request a demo to get started, or try signing in with another email.
              </p>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleRequestDemo}
                  className="w-full py-3.5 px-6 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request a Demo</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Try another email
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
