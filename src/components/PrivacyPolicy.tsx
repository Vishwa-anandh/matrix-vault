import { Seo } from './Seo';
import { motion } from 'framer-motion';

export function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy | MatrixVault"
        description="Privacy Policy for using the MatrixVault website, software platform, applications, and services."
        path="/privacy-policy"
      />
      <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Privacy <span className="text-red-600">Policy</span>
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
                Maitsys Inc. (“Maitsys,” “MatrixVault,” “we,” “our,” or “us”) respects the privacy and security of individuals and organizations using the MatrixVault website and Services.
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
                This Privacy Policy describes how we collect, use, disclose, protect, retain, and otherwise process personal data associated with MatrixVault.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                1. Scope
              </h2>
              <p>This Privacy Policy applies to personal data processed through:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>MatrixVault websites</li>
                <li>MatrixVault applications</li>
                <li>MatrixVault customer portals</li>
                <li>Product demonstrations</li>
                <li>Support interactions</li>
                <li>Sales and marketing communications</li>
                <li>MatrixVault SaaS services</li>
              </ul>
              <p>Customer enterprise data processed by MatrixVault may also be governed by a separate customer agreement or Data Processing Agreement (DPA).</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                2. Information We May Collect
              </h2>
              <p>Depending on how MatrixVault is used, we may collect the following categories of information.</p>

              <p className="font-semibold text-slate-900 dark:text-white mt-6">Account Information</p>
              <p>This may include:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>Name</li>
                <li>Business email address</li>
                <li>Company name</li>
                <li>Job title</li>
                <li>Username</li>
                <li>Account identifiers</li>
                <li>Assigned MatrixVault roles</li>
              </ul>

              <p className="font-semibold text-slate-900 dark:text-white mt-6">Authentication and Security Information</p>
              <p>This may include:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>Login activity</li>
                <li>Authentication events</li>
                <li>IP address</li>
                <li>Session information</li>
                <li>Security events</li>
                <li>Access logs</li>
              </ul>
              <p>Where single sign-on is enabled, authentication may be provided through an organization’s identity provider.</p>

              <p className="font-semibold text-slate-900 dark:text-white mt-6">Website and Technical Information</p>
              <p>We may collect:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>Browser type</li>
                <li>Device type</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Pages visited</li>
                <li>Date and time of access</li>
                <li>Website interactions</li>
                <li>Diagnostic information</li>
              </ul>

              <p className="font-semibold text-slate-900 dark:text-white mt-6">Customer Enterprise and SAP Data</p>
              <p>When authorized by a customer, MatrixVault may process information obtained from connected enterprise systems.</p>
              <p>Depending on the subscribed modules, this may include:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>SAP user information</li>
                <li>SAP roles and profiles</li>
                <li>Authorization information</li>
                <li>User-role assignments</li>
                <li>SoD findings</li>
                <li>Firefighter activity</li>
                <li>Security configuration</li>
                <li>SAP system information</li>
                <li>Vulnerability information</li>
                <li>Security logs</li>
                <li>Audit information</li>
                <li>Technical system metadata</li>
              </ul>
              <p>The specific information processed depends on customer configuration and enabled MatrixVault functionality.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                3. How We Use Information
              </h2>
              <p>We may process information to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>Provide MatrixVault services.</li>
                <li>Authenticate users.</li>
                <li>Enforce RBAC permissions.</li>
                <li>Connect authorized SAP systems.</li>
                <li>Perform vulnerability assessments.</li>
                <li>Conduct access-risk and SoD analysis.</li>
                <li>Manage Firefighter workflows.</li>
                <li>Generate security reports.</li>
                <li>Provide dashboards and analytics.</li>
                <li>Send security and operational notifications.</li>
                <li>Provide technical support.</li>
                <li>Diagnose service problems.</li>
                <li>Protect MatrixVault against fraud and cyber threats.</li>
                <li>Maintain audit trails.</li>
                <li>Improve platform functionality.</li>
                <li>Meet legal and regulatory obligations.</li>
              </ul>
              <p>We will not process personal data for purposes incompatible with the purposes for which it was collected unless permitted by applicable law.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                4. Customer-Controlled Data
              </h2>
              <p>For enterprise customers, the customer generally determines what authorized data is made available to MatrixVault and why it is processed.</p>
              <p>Where applicable, Maitsys processes such information on behalf of the customer according to contractual instructions.</p>
              <p>Organizations using MatrixVault are responsible for ensuring that they have an appropriate legal basis and authority to provide data to MatrixVault.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                5. AI Features
              </h2>
              <p>Where AI functionality is enabled, MatrixVault may process relevant authorized information to generate security explanations, summaries, recommendations, risk insights, or other requested outputs.</p>
              <p>Access controls should be applied so AI functionality can retrieve only information the user is authorized to access.</p>
              <p>Maitsys will describe material changes to the handling of customer information for AI functionality through applicable product documentation, contractual terms, or privacy notices.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                6. Cookies and Similar Technologies
              </h2>
              <p>The MatrixVault website may use cookies or similar technologies for:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>Authentication</li>
                <li>Security</li>
                <li>Session management</li>
                <li>User preferences</li>
                <li>Website functionality</li>
                <li>Analytics</li>
              </ul>
              <p>Where required by applicable law, users will be provided appropriate choices regarding non-essential cookies.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                7. Sharing of Information
              </h2>
              <p>Maitsys does not sell personal data.</p>
              <p>Information may be shared with authorized service providers and subprocessors where necessary to operate MatrixVault, such as:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>Cloud infrastructure providers</li>
                <li>Authentication providers</li>
                <li>Email and notification services</li>
                <li>Monitoring services</li>
                <li>Customer support systems</li>
                <li>Analytics providers</li>
                <li>AI service providers, where AI functionality is enabled</li>
              </ul>
              <p>Such providers are expected to process information according to applicable contractual and security requirements.</p>
              <p>Information may also be disclosed when required by applicable law, regulation, court order, or lawful governmental request.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                8. International Data Transfers
              </h2>
              <p>MatrixVault may use infrastructure or service providers operating in different countries.</p>
              <p>Where personal data is transferred internationally, Maitsys will use appropriate contractual, technical, organizational, and legal safeguards as required by applicable law.</p>
              <p>Customer-specific data residency requirements may be addressed through the applicable customer agreement.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                9. Data Security
              </h2>
              <p>Maitsys uses reasonable administrative, organizational, and technical measures designed to protect information against:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>Unauthorized access</li>
                <li>Unauthorized disclosure</li>
                <li>Loss</li>
                <li>Misuse</li>
                <li>Alteration</li>
                <li>Destruction</li>
              </ul>
              <p>Security measures may include, where appropriate:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>Encryption</li>
                <li>Role-Based Access Control</li>
                <li>Least-privilege access</li>
                <li>Secure authentication</li>
                <li>Logging and monitoring</li>
                <li>Network security controls</li>
                <li>Vulnerability management</li>
                <li>Backup and recovery controls</li>
                <li>Secure development practices</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                10. Data Retention
              </h2>
              <p>Information is retained only for as long as reasonably necessary for the purposes described in this Privacy Policy, contractual requirements, security requirements, and applicable legal obligations.</p>
              <p>Customer Data retention may be governed by the applicable customer agreement and configured retention policies.</p>
              <p>Following termination, information will be deleted, anonymized, returned, or retained as required by contractual and legal obligations.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                11. Your Privacy Rights
              </h2>
              <p>Depending on applicable law and your relationship with MatrixVault, individuals may have rights relating to their personal data, including rights to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                <li>Request access to personal data.</li>
                <li>Request correction of inaccurate information.</li>
                <li>Request deletion or erasure where applicable.</li>
                <li>Withdraw consent where processing is based on consent.</li>
                <li>Raise concerns or complaints.</li>
                <li>Exercise other rights available under applicable data protection law.</li>
              </ul>
              <p>Where MatrixVault processes personal data on behalf of an enterprise customer, requests concerning that data may need to be submitted directly to the customer’s organization.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                12. Children’s Privacy
              </h2>
              <p>MatrixVault is an enterprise cybersecurity and governance platform and is not intended for use by children.</p>
              <p>We do not knowingly design MatrixVault services for the collection of children’s personal data.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                13. Third-Party Links
              </h2>
              <p>The MatrixVault website may contain links to third-party websites or services.</p>
              <p>Maitsys is not responsible for the privacy practices of third-party websites. Users should review the applicable privacy policies before providing personal information.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                14. Data Breach and Security Incidents
              </h2>
              <p>Maitsys maintains processes designed to detect, investigate, respond to, and remediate security incidents.</p>
              <p>Where required by applicable law or contractual commitments, affected customers or appropriate authorities will be notified of qualifying personal data breaches.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                15. Changes to This Privacy Policy
              </h2>
              <p>We may update this Privacy Policy to reflect changes in MatrixVault functionality, technology, business practices, or applicable law.</p>
              <p>Material updates will be reflected through an updated “Last Updated” date and, where appropriate, additional notification.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-4">
                <span className="w-1.5 h-7 bg-red-600 rounded-full shrink-0"></span>
                16. Contact and Privacy Requests
              </h2>
              <p>For questions, privacy requests, or complaints regarding this Privacy Policy or the processing of personal data, contact:</p>
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
