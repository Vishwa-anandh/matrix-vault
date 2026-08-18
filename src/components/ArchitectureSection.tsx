import { Fragment, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Server, Shield, Database, Cpu, Zap, Globe,
  Layers, Lock, Bot, Bell, GitBranch, Container,
  Eye, ShieldCheck, ArrowRight, CheckCircle2
} from 'lucide-react';

const archLayers = [
  {
    name: '1. Frontend Portals',
    subtitle: 'Customer & Admin Interfaces',
    description: 'Modern, highly responsive UI portals for customers (maitsys-one-portal) and staff (super-admin-portal), powered by robust global state management and strict dark/light mode token systems.',
    color: 'from-emerald-500/10 to-teal-500/5 border-emerald-500/20',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    icon: Globe,
    nodes: [
      { name: 'Customer Portal', detail: 'The primary maitsys-one-portal interface for end-users', status: '✓ Active', isolation: 'Public Edge', latency: '12ms' },
      { name: 'Super Admin Portal', detail: 'Segregated interface for staff to manage tenants and licensing', status: '✓ Secure', isolation: 'Admin Realm', latency: '10ms' },
      { name: 'State Management', detail: 'Predictable state containers and efficient API orchestration', status: '✓ Synced', isolation: 'Client Side', latency: '0.1ms' }
    ]
  },
  {
    name: '2. Microservice Architecture',
    subtitle: 'Gateway & Domain Services',
    description: 'A scalable microservice backend where a single Edge Gateway intercepts traffic, handling JWT, RBAC, and licensing before proxying to specialized independent domain services.',
    color: 'from-blue-500/10 to-indigo-500/5 border-blue-500/20',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    icon: Server,
    nodes: [
      { name: 'Gateway Service', detail: 'Edge service for JWT validation, license gating, and RBAC enforcement', status: '✓ Active', isolation: 'DMZ / Perimeter', latency: '0.4ms' },
      { name: 'Domain Services', detail: 'Specialized auth, firefighter, role-radar, and notification microservices', status: '✓ Running', isolation: 'Internal Subnet', latency: '1.2ms' },
      { name: 'Super Admin Realm', detail: 'Isolated service for managing tenants on a separate JWT realm bypassing the customer gateway', status: '✓ Secure', isolation: 'Strict Internal', latency: '0.9ms' }
    ]
  },
  {
    name: '3. Redis Optimization Layer',
    subtitle: 'Caching, State & Queues',
    description: 'A high-performance in-memory layer strictly enforced for hot reads, short-lived session state, and heavy background processing offloading.',
    color: 'from-red-500/10 to-rose-500/5 border-red-500/20',
    iconColor: 'text-red-400',
    iconBg: 'bg-red-500/10',
    icon: Zap,
    nodes: [
      { name: 'Cache-Aside Pattern', detail: 'Caches RBAC permissions and SAP data with strict per-tenant namespaces', status: '✓ Active', isolation: 'Cache Net', latency: '0.2ms' },
      { name: 'Session State', detail: 'Stores refresh tokens, MFA challenges, and active session data', status: '✓ Secured', isolation: 'Cache Net', latency: '0.1ms' },
      { name: 'Background Queues', detail: 'Offloads SAP OData syncing and heavy compliance report generation to worker queues', status: '✓ Running', isolation: 'Worker Net', latency: '0.5ms' }
    ]
  },
  {
    name: '4. SAP Integrations',
    subtitle: 'Connectors & Data Sync',
    description: 'Dedicated integration services that act as secure connectors to rapidly synchronize user, role, and transaction master data from external SAP environments.',
    color: 'from-purple-500/10 to-violet-500/5 border-purple-500/20',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    icon: Database,
    nodes: [
      { name: 'OData Service', detail: 'Connects and caches role, user, and transaction data from SAP for rapid consumption', status: '⇅ Syncing', isolation: 'Secure Connector', latency: '24ms' },
      { name: 'Role Radar Feed', detail: 'Feeds live compliance and segregation of duties (SoD) analysis to the domain service', status: '✓ Active', isolation: 'Internal Subnet', latency: '0.8ms' }
    ]
  },
  {
    name: '5. Unified Infrastructure',
    subtitle: 'Containerized Deployment',
    description: 'The entire platform is seamlessly orchestrated via containerization, ensuring isolated databases per microservice and streamlined, scalable deployments.',
    color: 'from-amber-500/10 to-orange-500/5 border-amber-500/20',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
    icon: Container,
    nodes: [
      { name: 'Container Orchestration', detail: 'Runs multiple backend domain services alongside unified data and cache containers', status: '✓ Deployed', isolation: 'Host Network', latency: 'N/A' },
      { name: 'Unified Database', detail: 'Relational storage engine that auto-initializes separate DBs for each microservice', status: '✓ Connected', isolation: 'Private Database Net', latency: '0.8ms' }
    ]
  }
];

export function ArchitectureSection() {
  const [activeNode, setActiveNode] = useState<{ layerIndex: number; nodeIndex: number } | null>({ layerIndex: 0, nodeIndex: 0 });

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-clip border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.5] dark:opacity-[0.02]"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold mb-4 transition-colors">
              <GitBranch className="w-3.5 h-3.5 text-red-500" />
              <span>Platform Pipeline Map</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-5 tracking-tight transition-colors">
              Platform Architecture <span className="text-red-500">Pipeline</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto transition-colors">
              How requests, authorization policies, and database actions flow through our system infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Pipeline Diagram Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16 relative">

          {/* Left/Main Column: Connected Architecture Layers */}
          <div className="lg:col-span-9 space-y-6 relative flex flex-col justify-between">
            {/* Connecting Vertical Line (visible on desktop) */}
            <div className="absolute left-[29.5px] top-6 bottom-6 w-[2px] bg-slate-200 dark:bg-slate-800 hidden md:block overflow-hidden transition-colors">
              <motion.div
                animate={{ top: ['-20%', '120%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute w-full h-24 bg-gradient-to-b from-transparent via-red-500 to-transparent"
              />
            </div>

            {archLayers.map((layer, layerIndex) => (
              <motion.div
                key={layerIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: layerIndex * 0.1 }}
                className={`relative bg-gradient-to-br ${layer.color} border rounded-2xl p-5 md:pl-16 transition-all duration-300`}
              >
                {/* Icon badge acting as layer node */}
                <div className={`md:absolute left-4 top-5 w-8 h-8 rounded-full ${layer.iconBg} border border-slate-200 dark:border-slate-800 flex items-center justify-center z-10 mb-4 md:mb-0 shadow-sm transition-colors`}>
                  <layer.icon className={`w-4 h-4 ${layer.iconColor}`} />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-md">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-wide transition-colors">{layer.name}</h3>
                    <p className="text-[10px] text-slate-500 font-bold tracking-wider">{layer.subtitle}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium mt-1 transition-colors">{layer.description}</p>
                  </div>

                  {/* Connected Sub-nodes */}
                  <div className="flex flex-wrap gap-2 md:justify-end max-w-sm">
                    {layer.nodes.map((node, nodeIndex) => {
                      const isActive = activeNode?.layerIndex === layerIndex && activeNode?.nodeIndex === nodeIndex;
                      return (
                        <button
                          key={nodeIndex}
                          onClick={() => setActiveNode({ layerIndex, nodeIndex })}
                          className={`px-3 py-2 rounded-lg text-[10px] font-bold border transition-all duration-200 cursor-pointer ${isActive
                            ? 'bg-white dark:bg-slate-900 border-red-500/50 text-slate-900 dark:text-white shadow-[0_0_12px_rgba(239,68,68,0.15)] scale-[1.02]'
                            : 'bg-slate-100/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-200'
                            }`}
                        >
                          {node.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Node Details Panel */}
          <div className="lg:col-span-3 relative">
            <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between lg:sticky lg:top-24 h-auto transition-colors">
              <AnimatePresence mode="wait">
                {activeNode ? (
                  <motion.div
                    key={`${activeNode.layerIndex}-${activeNode.nodeIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-[9px] text-slate-500 font-extrabold tracking-widest">Active Node Details</span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight transition-colors">
                        {archLayers[activeNode.layerIndex].nodes[activeNode.nodeIndex].name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wider mt-0.5 transition-colors">
                        {archLayers[activeNode.layerIndex].name.split('. ')[1]}
                      </p>
                    </div>

                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium transition-colors">
                      {archLayers[activeNode.layerIndex].nodes[activeNode.nodeIndex].detail}.
                    </p>

                    <div className="pt-2">
                      <div className="bg-slate-50/80 dark:bg-slate-950/80 rounded-lg p-3 border border-slate-200 dark:border-slate-800 font-mono text-[9px] text-slate-600 dark:text-slate-400 space-y-1 transition-colors">
                        <div className="flex justify-between"><span className="text-slate-700">Status:</span> <span className="text-emerald-600 font-bold">{archLayers[activeNode.layerIndex].nodes[activeNode.nodeIndex].status}</span></div>
                        <div className="flex justify-between"><span className="text-slate-700">Isolation:</span> <span className="text-slate-600">{archLayers[activeNode.layerIndex].nodes[activeNode.nodeIndex].isolation}</span></div>
                        <div className="flex justify-between"><span className="text-slate-700">Latency:</span> <span className="text-blue-600">{archLayers[activeNode.layerIndex].nodes[activeNode.nodeIndex].latency}</span></div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-xs text-slate-500">Select any system node on the left map to inspect architecture details.</p>
                  </div>
                )}
              </AnimatePresence>

              <div className="border-t border-slate-850 pt-4 mt-6">
                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Zero-Trust Infrastructure Scoped</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom security badges */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3">
          {[
            { label: 'TLS 1.3 / HTTPS Encryption', icon: Lock },
            { label: 'AES-256 Storage Security', icon: Shield },
            { label: 'GDPR Privacy Standard', icon: ShieldCheck },
            { label: 'Isolated Runtime Engine', icon: GitBranch },
            { label: 'Modular Styles & Layouts', icon: Layers },
            { label: 'Enterprise Data Mapping', icon: Database },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4.5 py-2 rounded-full border border-slate-400 text-slate-900 text-xs font-semibold ">
              <badge.icon className="w-3.5 h-3.5 text-slate-500" />
              {badge.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
