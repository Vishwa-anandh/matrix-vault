import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 pt-12 pb-6 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-10">

          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <img src="/matrix_logo.png" alt="Matrix Vault Logo" loading="lazy" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-slate-400 font-medium leading-relaxed max-w-md">
              Enterprise access governance, simplified. Secure your SAP ecosystem with automated workflows, real-time monitoring, and AI assistance.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-bold text-white tracking-wider mb-6">Features</h3>
            <ul className="space-y-4">
              <li className="text-slate-400 font-medium">Firefighter</li>
              <li className="text-slate-400 font-medium">Role Radar</li>
              <li className="text-slate-400 font-medium">Vulnerability</li>
              <li className="text-slate-400 font-medium">AI Copilot</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-bold text-white tracking-wider mb-6">Subscribe to updates</h3>
            <p className="text-slate-400 font-medium leading-relaxed mb-4">
              Get the latest news on SAP governance with the Maitsys newsletter.
            </p>
            <form className="mt-2 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full min-w-0 px-4 py-3 text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-slate-400 dark:placeholder-slate-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 text-white font-bold rounded-r-lg hover:bg-red-700 transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-xs font-medium text-slate-500">
              &copy; {new Date().getFullYear()} Maitsys Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs font-medium text-slate-500">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</span>
              <span className="hover:text-white transition-colors cursor-pointer">Security</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
