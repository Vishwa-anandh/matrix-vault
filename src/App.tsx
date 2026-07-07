/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Integrations } from './components/Integrations';
import { HowItWorks } from './components/HowItWorks';
import { SecurityTrust } from './components/SecurityTrust';
import { Certifications } from './components/Certifications';
import { Testimonials } from './components/Testimonials';
import { ROICalculator } from './components/ROICalculator';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-red-500/20 selection:text-red-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <HowItWorks />
        <SecurityTrust />
        <Certifications />
        <ROICalculator />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
