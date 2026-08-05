import { useState, useEffect, FormEvent } from 'react';
import { z } from 'zod';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ADMIN_API_BASE_URL } from '../config/api';

const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Please enter a valid email address' })
    .max(100, { message: 'Email address must be 100 characters or less' }),
});

export function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setServerMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setServerMessage(null);

    const validation = newsletterSchema.safeParse({ email });
    if (!validation.success) {
      setError(validation.error.issues[0]?.message || 'Invalid email address');
      return;
    }

    setStatus('loading');
    setEmail('');
    try {
      const response = await fetch(`${ADMIN_API_BASE_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: validation.data.email }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setStatus('success');
        setServerMessage(data?.message || 'Thank you for subscribing to our newsletter!');
      } else {
        setStatus('error');
        setServerMessage(data?.message || 'Failed to subscribe. Please try again later.');
      }
    } catch (err) {
      setStatus('error');
      setServerMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 pt-12 pb-6 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-10">

          <div className="md:col-span-5">
            {/* MAITSYS & SAP Partner Logos at top of Footer */}
            <div className="flex items-center gap-4 sm:gap-5 flex-wrap mb-5">
              <div className="flex items-center gap-2">
                <img src="/maitsysFull_logo.png" alt="MAITSYS Logo" loading="lazy" className="h-8 sm:h-10 w-auto object-contain" />
              </div>

              <div className="h-7 w-px bg-slate-700 hidden sm:block"></div>

              <div className="flex items-center gap-2">
                <img src="/sap_Partnerr.png" alt="SAP Partner Logo" loading="lazy" className="h-10 sm:h-12 w-auto object-contain" />
              </div>
            </div>

            <p className="text-slate-400 font-medium leading-relaxed max-w-md mb-6">
              Enterprise access governance, simplified. Secure your SAP ecosystem with automated workflows, real-time monitoring, and AI assistance.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-bold text-white tracking-wider mb-6">Features</h3>
            <ul className="space-y-4">
              <li><span className="text-slate-400 font-medium cursor-default">Firefighter</span></li>
              <li><span className="text-slate-400 font-medium cursor-default">Role Radar</span></li>
              <li><span className="text-slate-400 font-medium cursor-default">Vulnerability</span></li>
              {/* <li><span className="text-slate-400 font-medium cursor-default">AI Copilot</span></li> */}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-bold text-white tracking-wider mb-6">Subscribe to updates</h3>
            <p className="text-slate-400 font-medium leading-relaxed mb-4">
              Get the latest news on SAP governance with the Maitsys newsletter.
            </p>
            <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                    if (status !== 'idle') setStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className={`w-full min-w-0 px-4 py-3 text-slate-900 dark:text-white bg-white dark:bg-slate-900 border ${error ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800 focus:ring-red-500'
                    } rounded-l-lg focus:outline-none focus:ring-2 placeholder-slate-400 dark:placeholder-slate-500 transition-colors`}
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-red-600 text-white font-bold rounded-r-lg hover:bg-red-700 transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
              {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
              {status === 'success' && (
                <p className="text-emerald-400 text-xs mt-1 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  {serverMessage}
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-xs mt-1 font-medium flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {serverMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-xs font-medium text-slate-500">
              &copy; {new Date().getFullYear()} Maitsys Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs font-medium text-slate-500">
              <Link to="/privacy-policy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</Link>
              {/* <span className="hover:text-white transition-colors cursor-pointer">Security</span> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

