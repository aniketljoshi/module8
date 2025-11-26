import { Wallet, Shield, Layers, Zap, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The next-generation identity abstraction layer for Web3—secure, non-custodial,
            and infinitely composable across chains.
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
                    <span className="text-gray-300">Multi-chain authentication layer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-200" />
                    <span className="text-gray-300">Non-custodial identity protocol</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500" />
                    <span className="text-gray-300">Zero-knowledge proof integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">What is WalletWeaver?</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                WalletWeaver is a composable identity abstraction layer that enables seamless,
                secure access across multiple blockchain networks without sacrificing custody or privacy.
                It's the missing link between Web2 user experience and Web3 infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: 'Non-Custodial' },
                { icon: Layers, label: 'Multi-Chain' },
                { icon: Zap, label: 'Instant Access' },
                { icon: CheckCircle2, label: 'Secure by Design' }
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
                'Universal wallet connector',
                'Chain-agnostic authentication',
                'Session management & recovery',
                'Gasless transaction relay',
                'Social recovery mechanisms'
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl">
            <h4 className="text-xl font-bold text-white mb-4">Integration Layer</h4>
            <ul className="space-y-3">
              {[
                'Drop-in SDK for Web3 apps',
                'REST & WebSocket APIs',
                'React/Vue component library',
                'Mobile SDK (iOS & Android)',
                'Developer sandbox environment'
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl">
            <h4 className="text-xl font-bold text-white mb-4">Security Architecture</h4>
            <ul className="space-y-3">
              {[
                'Hardware wallet support',
                'Multi-signature capabilities',
                'Encrypted key sharding',
                'Biometric authentication',
                'Audit-logged transactions'
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
                <span className="text-sm text-blue-400 font-semibold">Alpha</span>
              </div>
              <h5 className="text-lg font-bold text-white mb-3">Q1 2025</h5>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Core protocol launch</li>
                <li>Ethereum & Polygon support</li>
                <li>Developer preview SDK</li>
                <li>Limited testnet access</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block px-4 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full mb-4">
                <span className="text-sm text-purple-400 font-semibold">Beta</span>
              </div>
              <h5 className="text-lg font-bold text-white mb-3">Q2 2025</h5>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Multi-chain expansion</li>
                <li>Mobile SDK release</li>
                <li>Public mainnet launch</li>
                <li>Partner integrations</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block px-4 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full mb-4">
                <span className="text-sm text-blue-400 font-semibold">v1.0</span>
              </div>
              <h5 className="text-lg font-bold text-white mb-3">Q3 2025</h5>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Enterprise features</li>
                <li>Advanced security layers</li>
                <li>Global infrastructure</li>
                <li>Full documentation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            href="https://walletweaver.com" target="_blank" rel="noopener noreferrer">
            Join Early Access
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center gap-2">
            View Documentation
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
