import { Wallet, CheckCircle2, ArrowRight, ExternalLink, TrendingUp, Database, Lock, Bell } from 'lucide-react';

export default function WalletWeaver() {
  return (
    <section className="relative py-32 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-sm text-blue-400 font-medium">Product Spotlight</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Introducing <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">WalletWeaver</span>
          </h2>
          <p className="text-2xl text-purple-300 font-semibold mb-4 italic">
            "From Funding to Frontrunners: WalletWeaver Weaves It All."
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade blockchain wallet intelligence platform that transforms blockchain addresses
            into wallet clusters and entity profiles for comprehensive on-chain analytics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="p-12 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-white/10 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="relative">
                <Wallet className="w-20 h-20 text-blue-400 mb-6" />
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-gray-300">Advanced wallet clustering technology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-200" />
                    <span className="text-gray-300">Real-time buy/sell activity monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500" />
                    <span className="text-gray-300">Multi-chain intelligence tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">What is WalletWeaver?</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                WalletWeaver is an enterprise-grade blockchain wallet intelligence platform that provides
                comprehensive tracking, clustering, and analytics for on-chain activities. Transform raw
                blockchain data into actionable insights with advanced entity profiling and real-time monitoring.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Database, label: 'Wallet Clustering' },
                { icon: Bell, label: 'Custom Alerts' },
                { icon: TrendingUp, label: 'Activity Tracking' },
                { icon: Lock, label: 'Enterprise Security' }
              ].map((item) => (
                <div key={item.label} className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl">
            <h4 className="text-xl font-bold text-white mb-4">Core Features</h4>
            <ul className="space-y-3">
              {[
                'Advanced wallet clustering algorithms',
                'Entity profile generation',
                'Buy/sell activity monitoring',
                'Real-time transaction tracking',
                'Historical data analysis',
                'Custom alert configuration',
                'Multi-wallet aggregation'
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl">
            <h4 className="text-xl font-bold text-white mb-4">Dashboard & Exports</h4>
            <ul className="space-y-3">
              {[
                'Interactive visualization dashboard',
                'Real-time data streaming',
                'CSV export functionality',
                'JSON API endpoints',
                'PDF report generation',
                'Custom chart builders',
                'Data aggregation tools'
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl">
            <h4 className="text-xl font-bold text-white mb-4">Multi-Chain Support</h4>
            <ul className="space-y-3">
              {[
                'Ethereum mainnet',
                'Polygon network',
                'Binance Smart Chain',
                'Arbitrum & Optimism',
                'Avalanche C-Chain',
                'Base & other L2s',
                'Expanding chain coverage'
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-white/10 rounded-2xl mb-12">
          <h4 className="text-2xl font-bold text-white mb-6 text-center">Product Roadmap</h4>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block px-4 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full mb-4">
                <span className="text-sm text-blue-400 font-semibold">Phase 1 (MVP)</span>
              </div>
              <h5 className="text-lg font-bold text-white mb-3">Current Release</h5>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Core wallet clustering</li>
                <li>Basic buy/sell tracking</li>
                <li>Discord & Telegram alerts</li>
                <li>Ethereum & Polygon support</li>
                <li>CSV export functionality</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block px-4 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full mb-4">
                <span className="text-sm text-purple-400 font-semibold">Phase 2 (Advanced)</span>
              </div>
              <h5 className="text-lg font-bold text-white mb-3">Q2 2025</h5>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Advanced analytics dashboard</li>
                <li>Multi-chain expansion</li>
                <li>Webhook integrations</li>
                <li>API access & automation</li>
                <li>Entity profiling v2</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block px-4 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full mb-4">
                <span className="text-sm text-blue-400 font-semibold">Phase 3 (Enterprise)</span>
              </div>
              <h5 className="text-lg font-bold text-white mb-3">Q3 2025</h5>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>NFT wallet clustering</li>
                <li>MEV detection & analysis</li>
                <li>AI-powered risk scoring</li>
                <li>Smart contract interactions</li>
                <li>Enterprise features & SLAs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://walletweaver.com" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2">
            Launch WalletWeaver
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="mailto:founders@walletweaver.com" className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center gap-2">
            Contact Team
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
