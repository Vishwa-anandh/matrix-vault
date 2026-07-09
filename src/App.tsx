/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { RoleSimulator } from './components/RoleSimulator';
import { AIRiskSpotlight } from './components/AIRiskSpotlight';
import { UnifiedAudit } from './components/UnifiedAudit';
import { SolutionsByPersona } from './components/SolutionsByPersona';
import { Integrations } from './components/Integrations';
import { HowItWorks } from './components/HowItWorks';
import { SecurityTrust } from './components/SecurityTrust';
import { Testimonials } from './components/Testimonials';
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
        <Comparison />
        <RoleSimulator />
        <AIRiskSpotlight />
        <UnifiedAudit />
        <SolutionsByPersona />
        <Integrations />
        <HowItWorks />
        <SecurityTrust />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
