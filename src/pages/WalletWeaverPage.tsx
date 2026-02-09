import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Layers, ArrowLeft, CheckCircle, Wallet, Bell, BarChart3, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Advanced Wallet Clustering',
        description: 'Transform individual addresses into unified wallet entities using on-chain behavior analysis, funding patterns, and interaction graphs.',
        icon: Wallet
    },
    {
        title: 'Entity Profile Generation',
        description: 'Automatically identify and label entities across chains. Know if an address belongs to an exchange, whale, MEV bot, or protocol.',
        icon: BarChart3
    },
    {
        title: 'Real-Time Monitoring',
        description: 'Track wallet activity as it happens. Set custom alerts for transactions, balance changes, or specific interactions.',
        icon: Bell
    },
    {
        title: 'Multi-Chain Support',
        description: 'Unified analytics across Ethereum, Polygon, Arbitrum, Optimism, Base, BSC, and Avalanche with more chains coming.',
        icon: Globe
    }
];

const chains = [
    'Ethereum', 'Polygon', 'Arbitrum', 'Optimism',
    'Base', 'BSC', 'Avalanche'
];

const alertTypes = [
    'Discord webhooks',
    'Telegram notifications',
    'Email alerts',
    'Custom webhooks',
    'API callbacks',
    'Slack integration'
];

export default function WalletWeaverPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>WalletWeaver | Blockchain Wallet Intelligence & Analytics Platform</title>
                <meta name="description" content="Enterprise-grade blockchain wallet clustering and entity profiling. Transform addresses into insights with real-time monitoring, multi-chain support, and custom alerts. By Module8." />
                <meta name="keywords" content="WalletWeaver, blockchain analytics, wallet clustering, on-chain intelligence, crypto analytics, wallet tracking, entity profiling, Module8" />
                <link rel="canonical" href="https://module8.io/products/walletweaver" />

                <meta property="og:title" content="WalletWeaver | Blockchain Wallet Intelligence" />
                <meta property="og:description" content="Transform blockchain addresses into wallet clusters and entity profiles. Real-time monitoring, multi-chain support, custom alerts." />
                <meta property="og:url" content="https://module8.io/products/walletweaver" />
                <meta property="og:type" content="product" />
            </Helmet>

            <div className="min-h-screen bg-black">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-black to-black" />
                    <div className="absolute inset-0 grid-pattern opacity-30" />

                    <div className="relative max-w-7xl mx-auto px-6">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full mb-6">
                                <Layers className="w-4 h-4 text-purple-400" />
                                <span className="text-sm text-purple-400 font-semibold">WalletWeaver by Module8</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Blockchain Wallet{' '}
                                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                                    Intelligence Platform
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-3xl mb-8">
                                Transform raw blockchain data into actionable intelligence. Cluster wallets,
                                identify entities, monitor activity, and receive real-time alerts across all major chains.
                            </p>

                            {/* Chain Badges */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {chains.map((chain) => (
                                    <div
                                        key={chain}
                                        className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-300 text-sm"
                                    >
                                        {chain}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://walletweaver.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold text-white transition-all"
                                >
                                    Visit WalletWeaver
                                </a>
                                <Link
                                    to="/#contact"
                                    className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all"
                                >
                                    Enterprise Inquiry
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-black">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            Platform Capabilities
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all"
                                >
                                    <feature.icon className="w-10 h-10 text-purple-400 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Alert Types */}
                <section className="py-20 bg-gradient-to-b from-black to-purple-950/10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    Custom Alerts Everywhere
                                </h2>
                                <p className="text-gray-400 mb-8">
                                    Never miss important wallet activity. Set up alerts that reach you
                                    wherever you are, through your preferred channels.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {alertTypes.map((alert) => (
                                        <div key={alert} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            <span className="text-gray-300">{alert}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                                <Shield className="w-10 h-10 text-purple-400 mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Features</h3>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-400 font-bold">→</span>
                                        Private deployment options
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-400 font-bold">→</span>
                                        Custom chain integration
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-400 font-bold">→</span>
                                        Dedicated API access
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-400 font-bold">→</span>
                                        White-label solutions
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-20 bg-black">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            Who Uses WalletWeaver?
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <h3 className="text-xl font-bold text-white mb-3">Crypto Funds</h3>
                                <p className="text-gray-400">Track whale movements, identify alpha, and monitor competitor portfolios in real-time.</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <h3 className="text-xl font-bold text-white mb-3">Security Teams</h3>
                                <p className="text-gray-400">Investigate hacks, trace stolen funds, and identify malicious actors across chains.</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <h3 className="text-xl font-bold text-white mb-3">Protocol Teams</h3>
                                <p className="text-gray-400">Understand your user base, track token distribution, and monitor ecosystem health.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-black">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Unlock Wallet Intelligence?
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Start exploring blockchain data like never before.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://walletweaver.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold text-white transition-all"
                            >
                                <Layers className="w-5 h-5" />
                                Try WalletWeaver
                            </a>
                            <Link
                                to="/#contact"
                                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all"
                            >
                                Enterprise Demo
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
