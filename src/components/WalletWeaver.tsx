import { Wallet, CheckCircle2, ArrowRight, ExternalLink, TrendingUp, Database, Lock, Bell, Zap, Globe, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Scene3D from './3d/Scene3D';
import BlockchainNetwork from './3d/BlockchainNetwork';

const coreFeatures = [
  'Advanced wallet clustering algorithms',
  'Entity profile generation',
  'Buy/sell activity monitoring',
  'Real-time transaction tracking',
  'Historical data analysis',
  'Custom alert configuration',
  'Multi-wallet aggregation'
];

const dashboardFeatures = [
  'Interactive visualization dashboard',
  'Real-time data streaming',
  'CSV export functionality',
  'JSON API endpoints',
  'PDF report generation',
  'Custom chart builders',
  'Data aggregation tools'
];

const chains = [
  'Ethereum Mainnet',
  'Polygon Network',
  'Binance Smart Chain',
  'Arbitrum & Optimism',
  'Avalanche C-Chain',
  'Base & other L2s',
  'Expanding chain coverage'
];

const phases = [
  {
    phase: 'Phase 1 (MVP)',
    status: 'Current Release',
    color: 'blue',
    items: [
      'Core wallet clustering',
      'Basic buy/sell tracking',
      'Discord & Telegram alerts',
      'Ethereum & Polygon support',
      'CSV export functionality'
    ]
  },
  {
    phase: 'Phase 2 (Advanced)',
    status: 'Q1 2026',
    color: 'purple',
    items: [
      'Advanced analytics dashboard',
      'Multi-chain expansion',
      'Webhook integrations',
      'API access & automation',
      'Entity profiling v2'
    ]
  },
  {
    phase: 'Phase 3 (Enterprise)',
    status: 'Q2 2026',
    color: 'cyan',
    items: [
      'NFT wallet clustering',
      'MEV detection & analysis',
      'AI-powered risk scoring',
      'Smart contract interactions',
      'Enterprise features & SLAs'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

export default function WalletWeaver() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-black to-purple-900/10" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-8">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-semibold">Product Spotlight</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Introducing{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              WalletWeaver
            </span>
          </h2>

          <p className="text-2xl text-purple-300 font-semibold mb-4 italic">
            "From Funding to Frontrunners: WalletWeaver Weaves It All."
          </p>

          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade blockchain wallet intelligence platform that transforms blockchain addresses
            into wallet clusters and entity profiles for comprehensive on-chain analytics.
          </p>
        </motion.div>

        {/* Main Feature Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* 3D Visualization */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[400px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-white/10 rounded-3xl overflow-hidden">
              {/* 3D Blockchain Network */}
              <Scene3D cameraPosition={[0, 0, 7]}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />
                <BlockchainNetwork nodeCount={15} radius={3} />
              </Scene3D>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span>Live Network</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <span>Wallet Clusters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    <span>Entity Links</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">What is WalletWeaver?</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                WalletWeaver is an <span className="text-white font-semibold">enterprise-grade blockchain wallet intelligence platform</span> that provides
                comprehensive tracking, clustering, and analytics for on-chain activities. Transform raw
                blockchain data into actionable insights with advanced entity profiling and real-time monitoring.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Database, label: 'Wallet Clustering', color: 'text-blue-400' },
                { icon: Bell, label: 'Custom Alerts', color: 'text-purple-400' },
                { icon: TrendingUp, label: 'Activity Tracking', color: 'text-cyan-400' },
                { icon: Lock, label: 'Enterprise Security', color: 'text-green-400' }
              ].map((item) => (
                <div key={item.label} className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-white font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Columns */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Core Features */}
          <motion.div variants={itemVariants} className="p-8 glass-card hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <BarChart3 className="w-5 h-5 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white">Core Features</h4>
            </div>
            <ul className="space-y-3">
              {coreFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Dashboard Features */}
          <motion.div variants={itemVariants} className="p-8 glass-card hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Wallet className="w-5 h-5 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-white">Dashboard & Exports</h4>
            </div>
            <ul className="space-y-3">
              {dashboardFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Chain Support */}
          <motion.div variants={itemVariants} className="p-8 glass-card hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Globe className="w-5 h-5 text-cyan-400" />
              </div>
              <h4 className="text-xl font-bold text-white">Multi-Chain Support</h4>
            </div>
            <ul className="space-y-3">
              {chains.map((chain) => (
                <li key={chain} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{chain}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Roadmap */}
        <motion.div
          className="p-8 lg:p-12 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-white/10 rounded-3xl mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h4 className="text-2xl font-bold text-white mb-10 text-center">Product Roadmap</h4>

          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase) => (
              <div key={phase.phase} className="text-center">
                <div className={`inline-block px-4 py-1.5 bg-${phase.color}-500/20 border border-${phase.color}-500/30 rounded-full mb-4`}>
                  <span className={`text-sm text-${phase.color}-400 font-semibold`}>{phase.phase}</span>
                </div>
                <h5 className="text-lg font-bold text-white mb-4">{phase.status}</h5>
                <ul className="text-sm text-gray-400 space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 justify-center">
                      <div className={`w-1.5 h-1.5 bg-${phase.color}-400 rounded-full`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <a
            href="https://walletweaver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl 
                       hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]"
          >
            <span>Launch WalletWeaver</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="mailto:founders@walletweaver.com"
            className="group px-8 py-4 bg-white/5 border-2 border-white/20 text-white font-semibold rounded-xl 
                       hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Contact Team</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
