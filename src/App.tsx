/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GovernancePillars } from './components/GovernancePillars';
import { EnterpriseImpact } from './components/EnterpriseImpact';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { RoleSimulator } from './components/RoleSimulator';
import { RiskRuleBuilder } from './components/RiskRuleBuilder';
import { AIRiskSpotlight } from './components/AIRiskSpotlight';
import { RiskIntelligenceDashboard } from './components/RiskIntelligenceDashboard';
import { UnifiedAudit } from './components/UnifiedAudit';
import { Integrations } from './components/Integrations';
import { HowItWorks } from './components/HowItWorks';
import { FAQ, faqs } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Contact } from './components/Contact';
import { Seo } from './components/Seo';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

const SITE_URL = 'https://www.matrixvault.com';

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

/** Home landing page with Hero, GovernancePillars, EnterpriseImpact, and CTA. */
function Home() {
  return (
    <>
      <Seo
        title="Matrix Vault — Modern SAP Access Governance & SoD Risk Management"
        description="Matrix Vault is a lightweight, OData-based SAP access governance layer delivering real-time, in-flow Segregation of Duties (SoD) analysis, AI-assisted risk intelligence, and audit-ready reporting — a modern alternative to traditional SAP GRC."
        keywords="SAP GRC alternative, SAP Access Governance, SoD Risk Management, Segregation of Duties, SAP Firefighter, SAP Compliance, AI Risk Intelligence"
        path="/"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: 'Matrix Vault',
            url: `${SITE_URL}/`,
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'contact@matrixvault.com',
              contactType: 'customer service',
            },
            sameAs: ['https://twitter.com/MatrixVault', 'https://www.linkedin.com/company/matrixvault'],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Matrix Vault',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, SaaS',
            description:
              'Matrix Vault is a lightweight, OData-based SAP access governance layer delivering real-time, in-flow Segregation of Duties (SoD) analysis, AI-assisted risk intelligence, and audit-ready reporting.',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            publisher: { '@id': `${SITE_URL}/#organization` },
          },
        ]}
      />
      <Hero />
      <GovernancePillars />
      <EnterpriseImpact />
    </>
  );
}

/** /platform: the product deep-dive sections. */
function PlatformPage() {
  return (
    <>
      <Seo
        title="Platform — Real-Time SAP Risk & SoD Governance | Matrix Vault"
        description="Explore Matrix Vault's platform: instant multi-role comparison, guided role simulation, a visual risk rule builder, AI risk narratives, a unified risk dashboard, and one-screen audit trails."
        keywords="SAP SoD conflict detection, role comparison, risk rule builder, AI risk intelligence, SAP audit trail"
        path="/platform"
      />
      <div className="pt-20">
        <Comparison />
      </div>
      <RoleSimulator />
      <RiskRuleBuilder />
      <AIRiskSpotlight />
      <RiskIntelligenceDashboard />
      <UnifiedAudit />
    </>
  );
}

/** /how-it-works: rollout process + native SAP integrations. */
function HowItWorksPage() {
  return (
    <>
      <Seo
        title="How It Works — Deploy Matrix Vault in Weeks | Matrix Vault"
        description="See how Matrix Vault deploys into your SAP landscape in 2-4 weeks: model roles before you modify, mitigate findings instantly, and get a one-click audit trail — with native SAP ERP, S/4HANA, and GRC integrations."
        path="/how-it-works"
      />
      <div className="pt-20">
        <HowItWorks />
      </div>
      <Integrations />
    </>
  );
}

/** /faq: frequently asked questions, with FAQPage structured data. */
function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ — Matrix Vault SAP Access Governance"
        description="Answers to common questions about deploying Matrix Vault: timelines, Firefighter ID support, SOC 2 / ISO 27001 compliance, and the AI Copilot."
        path="/faq"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        }}
      />
      <div className="pt-20">
        <FAQ />
      </div>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Seo
        title="Contact & Request a Demo | Matrix Vault"
        description="Get in touch with the Matrix Vault team to request a demo or ask about deploying real-time SAP access governance and SoD risk management for your organization."
        path="/contact"
      />
      <Contact />
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
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
