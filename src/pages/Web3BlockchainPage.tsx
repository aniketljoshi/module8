import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Blocks, ArrowLeft, CheckCircle, Coins, FileCode, Layers, Network } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Smart Contract Development',
        description: 'Solidity, Rust, and Move smart contracts with comprehensive auditing. Security-first development for DeFi, NFTs, and custom protocols.',
        icon: FileCode
    },
    {
        title: 'Multi-Chain Interoperability',
        description: 'Build applications that work across Ethereum, Polygon, Arbitrum, Optimism, Base, BSC, and more. Unified experiences, maximum reach.',
        icon: Network
    },
    {
        title: 'DeFi Protocol Architecture',
        description: 'Design and implement lending protocols, DEXs, yield aggregators, and staking systems with battle-tested patterns.',
        icon: Coins
    },
    {
        title: 'NFT Platforms & Marketplaces',
        description: 'Full-featured NFT platforms with minting, trading, royalties, and cross-chain bridging. Built for scale.',
        icon: Layers
    }
];

const chains = [
    'Ethereum', 'Polygon', 'Arbitrum', 'Optimism',
    'Base', 'BSC', 'Avalanche', 'Solana'
];

const services = [
    'Smart contract security audits',
    'Token launch & tokenomics',
    'DAO governance systems',
    'Wallet integration',
    'Blockchain indexing',
    'On-chain analytics'
];

export default function Web3BlockchainPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Web3 & Blockchain Development | Smart Contracts & DeFi | Module8</title>
                <meta name="description" content="Bridge Web2 and Web3 with Module8. Smart contract development, multi-chain interoperability, DeFi protocol architecture, and NFT platforms. Enterprise blockchain solutions." />
                <meta name="keywords" content="Web3 development, blockchain, smart contracts, DeFi, NFT, Solidity, multi-chain, Ethereum, Polygon, crypto development, Module8" />
                <link rel="canonical" href="https://module8.io/services/web3-blockchain" />

                <meta property="og:title" content="Web3 & Blockchain Development | Module8" />
                <meta property="og:description" content="Enterprise Web3: Smart contracts, DeFi protocols, NFT platforms, and multi-chain applications." />
                <meta property="og:url" content="https://module8.io/services/web3-blockchain" />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="min-h-screen bg-black">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 via-black to-black" />
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
                                <Blocks className="w-4 h-4 text-orange-400" />
                                <span className="text-sm text-orange-400 font-semibold">Web3 & Blockchain Services</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Build the Decentralized{' '}
                                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                    Future with Web3
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-3xl mb-8">
                                From smart contracts to full-stack dApps, we architect blockchain solutions
                                that bridge traditional systems with decentralized infrastructure.
                            </p>

                            {/* Chain Badges */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {chains.map((chain) => (
                                    <div
                                        key={chain}
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm"
                                    >
                                        {chain}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/#contact"
                                    className="px-8 py-4 bg-orange-600 hover:bg-orange-500 rounded-xl font-semibold text-white transition-all"
                                >
                                    Start Web3 Project
                                </Link>
                                <Link
                                    to="/products/walletweaver"
                                    className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all"
                                >
                                    See WalletWeaver
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-black">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            Our Blockchain Expertise
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-orange-500/50 transition-all"
                                >
                                    <feature.icon className="w-10 h-10 text-orange-400 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="py-20 bg-gradient-to-b from-black to-orange-950/10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    Complete Web3 Services
                                </h2>
                                <p className="text-gray-400 mb-8">
                                    Whether you're launching a token, building a DEX, or creating an NFT marketplace,
                                    we have the expertise to deliver.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {services.map((service) => (
                                        <div key={service} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            <span className="text-gray-300">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-2xl">
                                <Blocks className="w-10 h-10 text-orange-400 mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-4">Featured: WalletWeaver</h3>
                                <p className="text-gray-300 mb-6">
                                    Our flagship blockchain intelligence platform. Transform wallet addresses
                                    into entity profiles with advanced clustering and real-time monitoring.
                                </p>
                                <Link
                                    to="/products/walletweaver"
                                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold"
                                >
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-black">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Build on Blockchain?
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Let's discuss your Web3 project and create a roadmap to launch.
                        </p>
                        <Link
                            to="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 rounded-xl font-semibold text-white transition-all"
                        >
                            <Blocks className="w-5 h-5" />
                            Start Building
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}
