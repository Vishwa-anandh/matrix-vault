import { Seo } from './Seo';
import { motion } from 'framer-motion';

export function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy | Matrixvault"
        description="Privacy Policy for using the Matrixvault website, software platform, applications, and services."
        path="/privacy-policy"
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
              Privacy Policy
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
                  <a href="#scope" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Scope</a>
                  <a href="#information-we-may-collect" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Information We May Collect</a>
                  <a href="#how-we-use-information" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">How We Use Information</a>
                  <a href="#customer-controlled-data" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Customer-Controlled Data</a>
                  <a href="#ai-features" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">AI Features</a>
                  <a href="#cookies-and-similar-technologies" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Cookies and Similar Technologies</a>
                  <a href="#sharing-of-information" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Sharing of Information</a>
                  <a href="#international-data-transfers" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">International Data Transfers</a>
                  <a href="#data-security" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Data Security</a>
                  <a href="#data-retention" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Data Retention</a>
                  <a href="#your-privacy-rights" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Your Privacy Rights</a>
                  <a href="#children-s-privacy" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Children's Privacy</a>
                  <a href="#third-party-links" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Third-Party Links</a>
                  <a href="#data-breach-and-security-incidents" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Data Breach and Security Incidents</a>
                  <a href="#changes-to-this-privacy-policy" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Changes to This Privacy Policy</a>
                  <a href="#contact-and-privacy-requests" className="pl-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-500 transition-colors border-l border-transparent -ml-px py-1">Contact and Privacy Requests</a>
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

                <h2 id="scope" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">1. Scope</h2>
                <p>This Privacy Policy applies to personal data processed through the Matrixvault website, software platform, applications, services, and related offerings (“Services”) provided by Maitsys Inc. (“Maitsys,” “Matrixvault,” “we,” “our,” or “us”).</p>

                <h2 id="information-we-may-collect" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">2. Information We May Collect</h2>
                <p>We may collect and process various types of information, including personal data, depending on how you interact with Matrixvault.</p>

                <p className="font-semibold text-slate-900 dark:text-white mt-6">Account Information</p>
                <p>This may include:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                  <li>Name</li>
                  <li>Business email address</li>
                  <li>Company name</li>
                  <li>Job title</li>
                  <li>Username</li>
                  <li>Account identifiers</li>
                  <li>Assigned Matrixvault roles</li>
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
                <p>When authorized by a customer, Matrixvault may process information obtained from connected enterprise systems.</p>
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
                <p>The specific information processed depends on customer configuration and enabled Matrixvault functionality.</p>

                <h2 id="how-we-use-information" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">3. How We Use Information
                </h2>
                <p>We may process information to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                  <li>Provide Matrixvault services.</li>
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
                  <li>Protect Matrixvault against fraud and cyber threats.</li>
                  <li>Maintain audit trails.</li>
                  <li>Improve platform functionality.</li>
                  <li>Meet legal and regulatory obligations.</li>
                </ul>
                <p>We will not process personal data for purposes incompatible with the purposes for which it was collected unless permitted by applicable law.</p>

                <h2 id="customer-controlled-data" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">4. Customer-Controlled Data
                </h2>
                <p>For enterprise customers, the customer generally determines what authorized data is made available to Matrixvault and why it is processed.</p>
                <p>Where applicable, Maitsys processes such information on behalf of the customer according to contractual instructions.</p>
                <p>Organizations using Matrixvault are responsible for ensuring that they have an appropriate legal basis and authority to provide data to Matrixvault.</p>

                <h2 id="ai-features" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">5. AI Features
                </h2>
                <p>Where AI functionality is enabled, Matrixvault may process relevant authorized information to generate security explanations, summaries, recommendations, risk insights, or other requested outputs.</p>
                <p>Access controls should be applied so AI functionality can retrieve only information the user is authorized to access.</p>
                <p>Maitsys will describe material changes to the handling of customer information for AI functionality through applicable product documentation, contractual terms, or privacy notices.</p>

                <h2 id="cookies-and-similar-technologies" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">6. Cookies and Similar Technologies
                </h2>
                <p>The Matrixvault website may use cookies or similar technologies for:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                  <li>Authentication</li>
                  <li>Security</li>
                  <li>Session management</li>
                  <li>User preferences</li>
                  <li>Website functionality</li>
                  <li>Analytics</li>
                </ul>
                <p>Where required by applicable law, users will be provided appropriate choices regarding non-essential cookies.</p>

                <h2 id="sharing-of-information" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">7. Sharing of Information
                </h2>
                <p>Maitsys does not sell personal data.</p>
                <p>Information may be shared with authorized service providers and subprocessors where necessary to operate Matrixvault, such as:</p>
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

                <h2 id="international-data-transfers" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">8. International Data Transfers
                </h2>
                <p>Matrixvault may use infrastructure or service providers operating in different countries.</p>
                <p>Where personal data is transferred internationally, Maitsys will use appropriate contractual, technical, organizational, and legal safeguards as required by applicable law.</p>
                <p>Customer-specific data residency requirements may be addressed through the applicable customer agreement.</p>

                <h2 id="data-security" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">9. Data Security
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

                <h2 id="data-retention" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">10. Data Retention
                </h2>
                <p>Information is retained only for as long as reasonably necessary for the purposes described in this Privacy Policy, contractual requirements, security requirements, and applicable legal obligations.</p>
                <p>Customer Data retention may be governed by the applicable customer agreement and configured retention policies.</p>
                <p>Following termination, information will be deleted, anonymized, returned, or retained as required by contractual and legal obligations.</p>

                <h2 id="your-privacy-rights" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">11. Your Privacy Rights
                </h2>
                <p>Depending on applicable law and your relationship with Matrixvault, individuals may have rights relating to their personal data, including rights to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-red-500">
                  <li>Request access to personal data.</li>
                  <li>Request correction of inaccurate information.</li>
                  <li>Request deletion or erasure where applicable.</li>
                  <li>Withdraw consent where processing is based on consent.</li>
                  <li>Raise concerns or complaints.</li>
                  <li>Exercise other rights available under applicable data protection law.</li>
                </ul>
                <p>Where Matrixvault processes personal data on behalf of an enterprise customer, requests concerning that data may need to be submitted directly to the customer’s organization.</p>

                <h2 id="children-s-privacy" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">12. Children’s Privacy
                </h2>
                <p>Matrixvault is an enterprise cybersecurity and governance platform and is not intended for use by children.</p>
                <p>We do not knowingly design Matrixvault services for the collection of children’s personal data.</p>

                <h2 id="third-party-links" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">13. Third-Party Links
                </h2>
                <p>The Matrixvault website may contain links to third-party websites or services.</p>
                <p>Maitsys is not responsible for the privacy practices of third-party websites. Users should review the applicable privacy policies before providing personal information.</p>

                <h2 id="data-breach-and-security-incidents" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">14. Data Breach and Security Incidents
                </h2>
                <p>Maitsys maintains processes designed to detect, investigate, respond to, and remediate security incidents.</p>
                <p>Where required by applicable law or contractual commitments, affected customers or appropriate authorities will be notified of qualifying personal data breaches.</p>

                <h2 id="changes-to-this-privacy-policy" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">15. Changes to This Privacy Policy
                </h2>
                <p>We may update this Privacy Policy to reflect changes in Matrixvault functionality, technology, business practices, or applicable law.</p>
                <p>Material updates will be reflected through an updated “Last Updated” date and, where appropriate, additional notification.</p>

                <h2 id="contact-and-privacy-requests" className="text-2xl font-bold mt-12 mb-6 scroll-mt-24">16. Contact and Privacy Requests
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
