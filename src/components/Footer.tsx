import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <img src="/matrix_logo.png" alt="Matrix Vault Logo" className="h-14 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Powered by Maitsys</span>
              </div>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed">
              Enterprise access governance, simplified. Secure your SAP ecosystem with automated workflows, real-time monitoring, and AI assistance.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Platform</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 font-medium hover:text-red-400 transition-colors">Access Control</a></li>
              <li><a href="#" className="text-slate-400 font-medium hover:text-red-400 transition-colors">SAP Integration</a></li>
              <li><a href="#" className="text-slate-400 font-medium hover:text-red-400 transition-colors">Firefighter IDs</a></li>
              <li><a href="#" className="text-slate-400 font-medium hover:text-red-400 transition-colors">Audit & Analytics</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 font-medium hover:text-red-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 font-medium hover:text-red-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 font-medium hover:text-red-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 font-medium hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Subscribe to updates</h3>
            <p className="text-slate-400 font-medium leading-relaxed mb-4">
              Get the latest news on SAP governance with the Maitsys newsletter.
            </p>
            <form className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 text-slate-900 bg-white border-0 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500" 
                required 
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-red-600 text-white font-bold rounded-r-lg hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-sm font-medium text-slate-500">
              &copy; {new Date().getFullYear()} Maitsys Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
