/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { RoleSimulator } from './components/RoleSimulator';
import { RiskRuleBuilder } from './components/RiskRuleBuilder';
import { AIRiskSpotlight } from './components/AIRiskSpotlight';
import { RiskIntelligenceDashboard } from './components/RiskIntelligenceDashboard';
import { UnifiedAudit } from './components/UnifiedAudit';
import { Integrations } from './components/Integrations';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Contact } from './components/Contact';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Comparison />
      <RoleSimulator />
      <RiskRuleBuilder />
      <AIRiskSpotlight />
      <RiskIntelligenceDashboard />
      <UnifiedAudit />
      <Integrations />
      <HowItWorks />
      <FAQ />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-red-500/20 selection:text-red-900 flex flex-col transition-colors duration-300">
      <ScrollToTopOnRoute />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
