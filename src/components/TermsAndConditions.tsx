import { Seo } from './Seo';
import { motion } from 'framer-motion';

export function TermsAndConditions() {
  return (
    <>
      <Seo
        title="Terms and Conditions | MatrixVault"
        description="Terms and Conditions for using the MatrixVault website, software platform, applications, and services."
        path="/terms-and-conditions"
      />
      <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Terms & <span className="text-red-600">Conditions</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1.5 bg-red-600 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800/60"
          >
            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
              <p className="text-lg mb-6">
                These Terms and Conditions (“Terms”) govern access to and use of the MatrixVault website, software platform, applications, services, and related offerings (“Services”) provided by Maitsys Inc. (“Maitsys,” “MatrixVault,” “we,” “our,” or “us”).
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8 py-4  text-center">
                <div>
                  <span className="block text-sm font-semibold text-slate-400 dark:text-slate-500 tracking-wider mb-1">Effective Date</span>
                  <span className="text-slate-900 dark:text-slate-300 font-medium">31 Jul 2026</span>
                </div>
                <div>
                  <span className="block text-sm font-semibold text-slate-400 dark:text-slate-500 tracking-wider mb-1">Last Updated</span>
                  <span className="text-slate-900 dark:text-slate-300 font-medium">03 Aug 2026</span>
                </div>
              </div>
              
              <p className="text-lg mb-8">
                By accessing the MatrixVault website, creating an account, or using the Services, you agree to these Terms. If you are using MatrixVault on behalf of an organization, you represent that you are authorized to accept these Terms on behalf of that organization.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                1. About MatrixVault
              </h2>
              <p>MatrixVault is an enterprise SAP security, governance, and risk management platform designed to provide capabilities including:</p>
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

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                2. Eligibility and Authorized Use
              </h2>
              <p>MatrixVault is intended primarily for organizations and authorized business users.</p>
              <p>Users must:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>Provide accurate account information.</li>
                <li>Keep credentials secure and confidential.</li>
                <li>Access only systems and information they are authorized to access.</li>
                <li>Follow applicable laws, regulations, organizational policies, and contractual requirements.</li>
                <li>Notify Maitsys promptly of suspected unauthorized account access.</li>
              </ul>
              <p>Customers are responsible for managing their users and determining appropriate permissions within their organization.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                3. Subscription and Module Access
              </h2>
              <p>MatrixVault may be offered through modular subscriptions.</p>
              <p>Available modules may include:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>Vulnerability Management</li>
                <li>Role Radar</li>
                <li>Firefighter / Emergency Access Management</li>
                <li>Additional modules introduced by Maitsys</li>
              </ul>
              <p>A customer’s access is limited to the modules and capabilities included in its subscription or applicable agreement.</p>
              <p>Maitsys may introduce, modify, enhance, or discontinue individual features as the product evolves, subject to applicable contractual commitments.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                4. Role-Based Access Control
              </h2>
              <p>MatrixVault uses Role-Based Access Control (RBAC).</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>Customers are responsible for assigning appropriate MatrixVault roles and permissions to their users.</li>
                <li>Users must not attempt to bypass authorization controls, access unauthorized modules, elevate privileges without authorization, or access another customer’s information.</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                5. Customer SAP Systems
              </h2>
              <p>MatrixVault may connect to SAP ECC, SAP S/4HANA, SAP BTP, and other authorized enterprise systems.</p>
              <p>The customer is responsible for:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>Authorizing MatrixVault connectivity.</li>
                <li>Providing appropriate technical credentials or service accounts.</li>
                <li>Restricting permissions according to least-privilege principles.</li>
                <li>Ensuring that use of MatrixVault complies with the customer’s SAP licenses and policies.</li>
                <li>Ensuring it has authority to process data made available to MatrixVault.</li>
              </ul>
              <p>MatrixVault will access customer environments only through configured and authorized integration mechanisms.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                6. Customer Data
              </h2>
              <p>Customers retain ownership of data provided to or collected through their authorized use of MatrixVault.</p>
              <p>Depending on enabled functionality, this may include SAP security configuration, user and role information, authorization information, vulnerability findings, audit information, system metadata, logs, reports, and related enterprise security information.</p>
              <p>Maitsys may process Customer Data only as necessary to provide, secure, maintain, support, and improve the Services and as otherwise permitted by the applicable agreement and law.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                7. Security
              </h2>
              <p>Maitsys uses administrative, technical, and organizational safeguards designed to protect MatrixVault and information processed through the Services.</p>
              <p>However, no internet-connected or electronic system can be guaranteed to be completely secure.</p>
              <p>Customers remain responsible for securing their SAP environments, endpoints, networks, identities, credentials, and other systems outside MatrixVault’s control.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                8. Acceptable Use
              </h2>
              <p>Users may not use MatrixVault to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>Gain unauthorized access to systems or information.</li>
                <li>Circumvent security controls.</li>
                <li>Introduce malware or malicious code.</li>
                <li>Conduct unlawful security testing.</li>
                <li>Interfere with MatrixVault infrastructure.</li>
                <li>Extract data belonging to another customer.</li>
                <li>Reverse engineer the Services except where applicable law expressly permits it.</li>
                <li>Use MatrixVault for unlawful, fraudulent, or malicious activities.</li>
              </ul>
              <p>Maitsys may suspend access when reasonably necessary to protect MatrixVault, customers, or third parties from security threats or misuse.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                9. Security Findings and Recommendations
              </h2>
              <p>MatrixVault may identify vulnerabilities, configuration risks, access risks, SoD conflicts, security findings, and recommended remediation actions.</p>
              <p>These results are decision-support information and should not be treated as a guarantee that a system is secure, compliant, or free from vulnerabilities.</p>
              <p>Customers remain responsible for evaluating findings and approving changes to their SAP environments.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                10. AI-Generated Information
              </h2>
              <p>Where MatrixVault provides AI-assisted functionality, AI-generated explanations, recommendations, summaries, or analyses are provided as decision-support information.</p>
              <p>AI output may contain inaccuracies or incomplete recommendations.</p>
              <p>Customers should validate security-critical, compliance, access-control, and remediation decisions before implementing them in production environments.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                11. Intellectual Property
              </h2>
              <p>MatrixVault, including its software, architecture, interfaces, dashboards, algorithms, rule engines, documentation, designs, trademarks, branding, and related intellectual property, is owned by or licensed to Maitsys.</p>
              <p>No ownership rights are transferred to customers except for the limited rights necessary to use the Services under an applicable agreement.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                12. Third-Party Services
              </h2>
              <p>MatrixVault may integrate with third-party products or services such as SAP, Microsoft Azure, Microsoft Entra ID, Microsoft Teams, ServiceNow, SIEM platforms, cloud providers, or other enterprise systems.</p>
              <p>Third-party products and services are governed by their respective providers’ terms and policies.</p>
              <p>Maitsys is not responsible for third-party services outside its control.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                13. Availability
              </h2>
              <p>Maitsys aims to provide reliable access to MatrixVault.</p>
              <p>Availability commitments, service levels, maintenance windows, support response times, and remedies are governed by the customer’s applicable subscription agreement or Service Level Agreement (SLA).</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                14. Confidentiality
              </h2>
              <p>Information exchanged in connection with MatrixVault may contain confidential business, technical, security, or customer information.</p>
              <p>Each party must protect confidential information according to the applicable agreement and applicable law.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                15. Disclaimer
              </h2>
              <p>Except as expressly provided in an applicable written agreement, MatrixVault is provided on an “as available” basis to the extent permitted by applicable law.</p>
              <p>Maitsys does not warrant that MatrixVault will identify every security vulnerability, access risk, configuration issue, compliance violation, cyberattack, or unauthorized activity.</p>
              <p>MatrixVault supplements rather than replaces an organization’s security, governance, compliance, and professional judgment.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                16. Limitation of Liability
              </h2>
              <p>To the maximum extent permitted by applicable law, Maitsys will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising from use of MatrixVault.</p>
              <p>Any additional liability limitations or caps will be governed by the applicable customer agreement.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                17. Suspension and Termination
              </h2>
              <p>Maitsys may suspend or terminate access where required by law, contract, non-payment, material violation of these Terms, or a significant security risk.</p>
              <p>Upon termination, Customer Data will be handled according to the applicable agreement, retention policy, and legal requirements.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                18. Changes to These Terms
              </h2>
              <p>Maitsys may update these Terms periodically to reflect changes in MatrixVault, legal requirements, security practices, or business operations.</p>
              <p>The updated version will be published with a revised “Last Updated” date.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                19. Governing Law
              </h2>
              <p>These Terms will be governed by the laws and jurisdiction specified in the applicable customer agreement.</p>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                20. Contact Us
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
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
