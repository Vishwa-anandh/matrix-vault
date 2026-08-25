import { Seo } from './Seo';
import { motion } from 'framer-motion';

export function TermsAndConditions() {
  return (
    <>
      <Seo
        title="Terms and Conditions | Matrixvault"
        description="Terms and Conditions for using the Matrixvault website, software platform, applications, and services."
        path="/terms-and-conditions"
      />
      <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-950 min-h-screen">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="border-b border-slate-200 dark:border-slate-800 pb-10 mb-12 mt-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              Terms & Conditions
            </motion.h1>
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-slate-600 dark:text-slate-300"
            >
              <div><span className="font-semibold text-slate-700 dark:text-slate-300">Effective Date:</span> 31 Jul 2026</div>
              <div><span className="font-semibold text-slate-700 dark:text-slate-300">Last Updated:</span> 03 Aug 2026</div>
            </motion.div> */}
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Table of Contents Sidebar */}
            <div className="lg:w-1/4 shrink-0">
              <div className="sticky top-24">
                <h3 className="text-xs font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-4">Contents</h3>
                <nav className="flex flex-col space-y-2 border-l border-slate-200 dark:border-slate-800">
                  <a href="#about-matrix vault" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">About Matrixvault</a>
                  <a href="#eligibility-and-authorized-use" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Eligibility and Authorized Use</a>
                  <a href="#subscription-and-module-access" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Subscription and Module Access</a>
                  <a href="#role-based-access-control" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Role-Based Access Control</a>
                  <a href="#customer-sap-systems" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Customer SAP Systems</a>
                  <a href="#customer-data" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Customer Data</a>
                  <a href="#security" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Security</a>
                  <a href="#acceptable-use" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Acceptable Use</a>
                  <a href="#security-findings-and-recommendations" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Security Findings and Recommendations</a>
                  <a href="#ai-generated-information" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">AI-Generated Information</a>
                  <a href="#intellectual-property" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Intellectual Property</a>
                  <a href="#third-party-services" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Third-Party Services</a>
                  <a href="#availability" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Availability</a>
                  <a href="#confidentiality" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Confidentiality</a>
                  <a href="#disclaimer" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Disclaimer</a>
                  <a href="#limitation-of-liability" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Limitation of Liability</a>
                  <a href="#suspension-and-termination" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Suspension and Termination</a>
                  <a href="#changes-to-these-terms" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Changes to These Terms</a>
                  <a href="#governing-law" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Governing Law</a>
                  <a href="#contact-us" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Contact Us</a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="prose prose-slate dark:prose-invert prose-lg max-w-none text-slate-800 dark:text-slate-300 prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-red-600 dark:prose-a:text-red-400 [&_p]:text-slate-800 dark:[&_p]:text-slate-300 [&_p]:leading-[1.7] [&_p]:mb-4 [&_li]:text-slate-800 dark:[&_li]:text-slate-300 [&_li]:leading-[1.7] [&_li]:mb-1.5"
              >
                <p>
                  These Terms and Conditions (“Terms” ) govern access to and use of the Matrixvault website, software platform, applications, services, and related offerings (“Services” ) provided by Maitsys Inc. (“Maitsys,”  “Matrixvault,”  “we,”  “our,” or “us” ).
                </p>
                <p>
                  By accessing the Matrixvault website, creating an account, or using the Services, you agree to these Terms. If you are using Matrixvault on behalf of an organization, you represent that you are authorized to accept these Terms on behalf of that organization.
                </p>

                <h2 id="about-matrix vault" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">1. About Matrixvault
                </h2>
                <p>Matrixvault is an enterprise SAP security, governance, and risk management platform designed to provide capabilities including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                  <li>SAP Vulnerability Management</li>
                  <li>Role Radar and Access Governance</li>
                  <li>Segregation of Duties (SoD) analysis</li>
                  <li>User Access Reviews and certifications</li>
                  <li>Emergency Access Management / Firefighter</li>
                  <li>Security risk analysis</li>
                  <li>Compliance monitoring</li>
                  <li>Security dashboards and reporting</li>
                  <li>SAP system security assessments</li>
                  <li>AI-assisted security analysis, where enabled</li>
                </ul>
                <p>Available functionality depends on the customer’s subscription, license, configuration, and applicable service agreement.</p>

                <h2 id="eligibility-and-authorized-use" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">2. Eligibility and Authorized Use
                </h2>
                <p>Matrixvault is intended primarily for organizations and authorized business users.</p>
                <p>Users must:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                  <li>Provide accurate account information.</li>
                  <li>Keep credentials secure and confidential.</li>
                  <li>Access only systems and information they are authorized to access.</li>
                  <li>Follow applicable laws, regulations, organizational policies, and contractual requirements.</li>
                  <li>Notify Maitsys promptly of suspected unauthorized account access.</li>
                </ul>
                <p>Customers are responsible for managing their users and determining appropriate permissions within their organization.</p>

                <h2 id="subscription-and-module-access" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">3. Subscription and Module Access
                </h2>
                <p>Matrixvault may be offered through modular subscriptions.</p>
                <p>Available modules may include:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                  <li>Vulnerability Management</li>
                  <li>Role Radar</li>
                  <li>Firefighter / Emergency Access Management</li>
                  <li>Additional modules introduced by Maitsys</li>
                </ul>
                <p>A customer’s access is limited to the modules and capabilities included in its subscription or applicable agreement.</p>
                <p>Maitsys may introduce, modify, enhance, or discontinue individual features as the product evolves, subject to applicable contractual commitments.</p>

                <h2 id="role-based-access-control" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">4. Role-Based Access Control
                </h2>
                <p>Matrixvault uses Role-Based Access Control (RBAC).</p>
                <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                  <li>Customers are responsible for assigning appropriate Matrixvault roles and permissions to their users.</li>
                  <li>Users must not attempt to bypass authorization controls, access unauthorized modules, elevate privileges without authorization, or access another customer’s information.</li>
                </ul>

                <h2 id="customer-sap-systems" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">5. Customer SAP Systems
                </h2>
                <p>Matrixvault may connect to SAP ECC, SAP S/4HANA, SAP BTP, and other authorized enterprise systems.</p>
                <p>The customer is responsible for:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                  <li>Authorizing Matrixvault connectivity.</li>
                  <li>Providing appropriate technical credentials or service accounts.</li>
                  <li>Restricting permissions according to least-privilege principles.</li>
                  <li>Ensuring that use of Matrixvault complies with the customer’s SAP licenses and policies.</li>
                  <li>Ensuring it has authority to process data made available to Matrixvault.</li>
                </ul>
                <p>Matrixvault will access customer environments only through configured and authorized integration mechanisms.</p>

                <h2 id="customer-data" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">6. Customer Data
                </h2>
                <p>Customers retain ownership of data provided to or collected through their authorized use of Matrixvault.</p>
                <p>Depending on enabled functionality, this may include SAP security configuration, user and role information, authorization information, vulnerability findings, audit information, system metadata, logs, reports, and related enterprise security information.</p>
                <p>Maitsys may process Customer Data only as necessary to provide, secure, maintain, support, and improve the Services and as otherwise permitted by the applicable agreement and law.</p>

                <h2 id="security" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">7. Security
                </h2>
                <p>Maitsys uses administrative, technical, and organizational safeguards designed to protect Matrixvault and information processed through the Services.</p>
                <p>However, no internet-connected or electronic system can be guaranteed to be completely secure.</p>
                <p>Customers remain responsible for securing their SAP environments, endpoints, networks, identities, credentials, and other systems outside Matrixvault’s control.</p>

                <h2 id="acceptable-use" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">8. Acceptable Use
                </h2>
                <p>Users may not use Matrixvault to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                  <li>Gain unauthorized access to systems or information.</li>
                  <li>Circumvent security controls.</li>
                  <li>Introduce malware or malicious code.</li>
                  <li>Conduct unlawful security testing.</li>
                  <li>Interfere with Matrixvault infrastructure.</li>
                  <li>Extract data belonging to another customer.</li>
                  <li>Reverse engineer the Services except where applicable law expressly permits it.</li>
                  <li>Use Matrixvault for unlawful, fraudulent, or malicious activities.</li>
                </ul>
                <p>Maitsys may suspend access when reasonably necessary to protect Matrixvault, customers, or third parties from security threats or misuse.</p>

                <h2 id="security-findings-and-recommendations" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">9. Security Findings and Recommendations
                </h2>
                <p>Matrixvault may identify vulnerabilities, configuration risks, access risks, SoD conflicts, security findings, and recommended remediation actions.</p>
                <p>These results are decision-support information and should not be treated as a guarantee that a system is secure, compliant, or free from vulnerabilities.</p>
                <p>Customers remain responsible for evaluating findings and approving changes to their SAP environments.</p>

                <h2 id="ai-generated-information" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">10. AI-Generated Information
                </h2>
                <p>Where Matrixvault provides AI-assisted functionality, AI-generated explanations, recommendations, summaries, or analyses are provided as decision-support information.</p>
                <p>AI output may contain inaccuracies or incomplete recommendations.</p>
                <p>Customers should validate security-critical, compliance, access-control, and remediation decisions before implementing them in production environments.</p>

                <h2 id="intellectual-property" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">11. Intellectual Property
                </h2>
                <p>Matrixvault, including its software, architecture, interfaces, dashboards, algorithms, rule engines, documentation, designs, trademarks, branding, and related intellectual property, is owned by or licensed to Maitsys.</p>
                <p>No ownership rights are transferred to customers except for the limited rights necessary to use the Services under an applicable agreement.</p>

                <h2 id="third-party-services" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">12. Third-Party Services
                </h2>
                <p>Matrixvault may integrate with third-party products or services such as SAP, Microsoft Azure, Microsoft Entra ID, Microsoft Teams, ServiceNow, SIEM platforms, cloud providers, or other enterprise systems.</p>
                <p>Third-party products and services are governed by their respective providers’ terms and policies.</p>
                <p>Maitsys is not responsible for third-party services outside its control.</p>

                <h2 id="availability" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">13. Availability
                </h2>
                <p>Maitsys aims to provide reliable access to Matrixvault.</p>
                <p>Availability commitments, service levels, maintenance windows, support response times, and remedies are governed by the customer’s applicable subscription agreement or Service Level Agreement (SLA).</p>

                <h2 id="confidentiality" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">14. Confidentiality
                </h2>
                <p>Information exchanged in connection with Matrixvault may contain confidential business, technical, security, or customer information.</p>
                <p>Each party must protect confidential information according to the applicable agreement and applicable law.</p>

                <h2 id="disclaimer" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">15. Disclaimer
                </h2>
                <p>Except as expressly provided in an applicable written agreement, Matrixvault is provided on an “as available” basis to the extent permitted by applicable law.</p>
                <p>Maitsys does not warrant that Matrixvault will identify every security vulnerability, access risk, configuration issue, compliance violation, cyberattack, or unauthorized activity.</p>
                <p>Matrixvault supplements rather than replaces an organization’s security, governance, compliance, and professional judgment.</p>

                <h2 id="limitation-of-liability" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">16. Limitation of Liability
                </h2>
                <p>To the maximum extent permitted by applicable law, Maitsys will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising from use of Matrixvault.</p>
                <p>Any additional liability limitations or caps will be governed by the applicable customer agreement.</p>

                <h2 id="suspension-and-termination" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">17. Suspension and Termination
                </h2>
                <p>Maitsys may suspend or terminate access where required by law, contract, non-payment, material violation of these Terms, or a significant security risk.</p>
                <p>Upon termination, Customer Data will be handled according to the applicable agreement, retention policy, and legal requirements.</p>

                <h2 id="changes-to-these-terms" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">18. Changes to These Terms
                </h2>
                <p>Maitsys may update these Terms periodically to reflect changes in Matrixvault, legal requirements, security practices, or business operations.</p>
                <p>The updated version will be published with a revised “Last Updated” date.</p>

                <h2 id="governing-law" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">19. Governing Law
                </h2>
                <p>These Terms will be governed by the laws and jurisdiction specified in the applicable customer agreement.</p>
                <h2 id="contact-us" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">20. Contact Us
                </h2>
                <p>Questions regarding these Terms may be directed to:</p>
                <div className="mt-8 p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                  <p className="text-lg font-bold text-slate-900 dark:text-white mb-4">Direct Contact</p>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <strong className="min-w-[80px] text-slate-900 dark:text-white">Email:</strong>
                      <a href="https://www.maitsys.com/contact-us" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:underline font-medium transition-colors break-all">contact@maitsys.com</a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <strong className="min-w-[80px] text-slate-900 dark:text-white">Website:</strong>
                      <a href="https://www.maitsys.com" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:underline font-medium transition-colors break-all">www.maitsys.com</a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                      <strong className="min-w-[80px] text-slate-900 dark:text-white mt-0.5">Global HQ:</strong>
                      <span className="text-slate-600 dark:text-slate-400 font-medium">1 Marina Park Drive,<br />Boston, MA 02210</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
