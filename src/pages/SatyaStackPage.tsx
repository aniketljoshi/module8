import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, FileCheck, Eye, Fingerprint, EyeOff, FileKey, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Zero-Knowledge Proof Engine',
        description: 'Generate and verify cryptographic proofs that validate claims without revealing underlying data. Built on cutting-edge ZK-SNARK and ZK-STARK protocols.',
        icon: Shield
    },
    {
        title: 'Privacy-Preserving Verification',
        description: 'Enable identity and credential verification without exposing personal data. Selective disclosure lets users prove exactly what\'s needed—nothing more.',
        icon: Lock
    },
    {
        title: 'Regulatory Compliance Framework',
        description: 'Meet KYC, AML, GDPR, DPDP, and industry-specific compliance requirements while preserving user privacy through verifiable credential standards.',
        icon: FileCheck
    },
    {
        title: 'Trust Architecture',
        description: 'Multi-layer trust model with tamper-proof audit trails, cryptographic anchoring, and transparent verification workflows for enterprise deployments.',
        icon: Eye
    }
];

const securityItems = [
    { icon: EyeOff, title: 'Zero PII Transmission', desc: 'User data never leaves their device. Proofs generated locally in WASM.', color: '#2563eb' },
    { icon: Fingerprint, title: 'Unlinkability', desc: 'Each proof is unique. Prevents correlation attacks across verifications.', color: '#10b981' },
    { icon: Shield, title: 'Quantum-Resistant', desc: 'zk-SNARKs (Groth16) provide military-grade cryptographic security.', color: '#8b5cf6' },
    { icon: FileKey, title: 'Immutable Logs', desc: 'Verification results hashed on-chain for auditable compliance.', color: '#f97316' }
];

const industries = ['Financial Services', 'Healthcare', 'Supply Chain', 'Government', 'Education', 'Insurance'];

const complianceFeatures = [
    'DPDP Act compliance', 'KYC/AML verification', 'SOC 2 Type II infrastructure',
    'HIPAA-ready architecture', 'FIU-IND reporting', 'Cross-border regulatory support'
];

export default function SatyaStackPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>SatyaStack | Zero-Knowledge Proof Infrastructure & Privacy-Preserving Verification</title>
                <meta name="description" content="Enterprise-grade zero-knowledge proof infrastructure for privacy-preserving verification and regulatory compliance. Build trust without compromising privacy. By Module8." />
                <meta name="keywords" content="SatyaStack, zero-knowledge proofs, ZK-proofs, privacy verification, regulatory compliance, DPDP, KYC, AML, verifiable credentials, Module8" />
                <link rel="canonical" href="https://module8.io/products/satyastack" />
                <meta property="og:title" content="SatyaStack | Zero-Knowledge Proof Infrastructure" />
                <meta property="og:description" content="Privacy-preserving verification and regulatory compliance powered by zero-knowledge proofs. Enterprise-grade trust infrastructure." />
                <meta property="og:url" content="https://module8.io/products/satyastack" />
                <meta property="og:type" content="product" />
            </Helmet>

            <div className="min-h-screen" style={{ background: '#0f172a' }}>
                {/* Hero Section — slate dark with grid pattern */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,23,42,1), rgba(30,41,59,0.8), rgba(15,23,42,1))' }} />

                    {/* Grid pattern */}
                    <div className="absolute inset-0 opacity-[0.06]" style={{
                        backgroundImage: 'linear-gradient(rgba(96,165,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.5) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                        maskImage: 'radial-gradient(circle at 50% 50%, black 30%, transparent 70%)'
                    }} />

                    {/* Floating orb */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 pointer-events-none">
                        <div className="w-[400px] h-[400px] rounded-full opacity-15" style={{
                            background: 'radial-gradient(circle, #2563eb 0%, #0ea5e9 40%, transparent 70%)',
                            filter: 'blur(80px)'
                        }} />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-6 z-10">
                        <Link to="/" className="inline-flex items-center gap-2 transition-colors mb-8" style={{ color: '#94a3b8' }}>
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{
                                background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)', color: '#60a5fa'
                            }}>
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                                </span>
                                SatyaStack by Module8
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
                                Zero-Knowledge Proof{' '}
                                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #22d3ee, #34d399)' }}>
                                    Infrastructure Platform
                                </span>
                            </h1>

                            <p className="text-xl max-w-3xl mb-8" style={{ color: '#cbd5e1' }}>
                                Prove compliance without revealing data. India's first ZK compliance infrastructure
                                for DPDP, FIU-IND, and RBI requirements with programmable privacy.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-8">
                                {industries.map((industry) => (
                                    <div key={industry} className="px-4 py-2 rounded-lg text-sm" style={{
                                        background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)', color: '#93c5fd'
                                    }}>
                                        {industry}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a href="https://satyastack.com" target="_blank" rel="noopener noreferrer"
                                    className="px-8 py-4 rounded-2xl font-bold text-white transition-all hover:-translate-y-1"
                                    style={{ background: 'linear-gradient(to right, #2563eb, #3b82f6)', boxShadow: '0 4px 15px rgba(37,99,235,0.3)' }}>
                                    Visit SatyaStack
                                </a>
                                <Link to="/#contact" className="px-8 py-4 rounded-2xl font-bold text-white transition-all hover:-translate-y-1"
                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)' }}>
                                    Enterprise Inquiry
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20" style={{ background: '#0f172a' }}>
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">Platform Capabilities</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
                                    className="p-8 rounded-2xl transition-all duration-300"
                                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(148,163,184,0.15)' }}>
                                    <feature.icon className="w-10 h-10 mb-4" style={{ color: '#60a5fa' }} />
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p style={{ color: '#94a3b8' }}>{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Security Section */}
                <section className="py-20" style={{ background: 'linear-gradient(to bottom, #0f172a, #1e293b20, #0f172a)' }}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security by Principle</h2>
                            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
                                We don't just secure data. We ensure you never have to touch it.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {securityItems.map((item, index) => (
                                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                                    className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                        style={{ background: 'rgba(241,245,249,0.05)', border: '1px solid rgba(241,245,249,0.1)' }}>
                                        <item.icon className="w-10 h-10" style={{ color: item.color }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Compliance Section */}
                <section className="py-20" style={{ background: '#0f172a' }}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">Compliance Without Compromise</h2>
                                <p className="mb-8" style={{ color: '#94a3b8' }}>
                                    Meet India's strictest regulatory requirements—DPDP, FIU-IND, RBI—while preserving user privacy through zero-knowledge proofs.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {complianceFeatures.map((feature) => (
                                        <div key={feature} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#60a5fa' }} />
                                            <span style={{ color: '#cbd5e1' }}>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(148,163,184,0.15)' }}>
                                <Eye className="w-10 h-10 mb-4" style={{ color: '#60a5fa' }} />
                                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Features</h3>
                                <ul className="space-y-4" style={{ color: '#cbd5e1' }}>
                                    {['Private cloud deployment', 'Custom proof circuit development', 'Dedicated API access & SLAs', 'White-label verification solutions'].map(item => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="font-bold" style={{ color: '#60a5fa' }}>→</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20" style={{ background: '#0f172a' }}>
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Trust with Zero-Knowledge Proofs?</h2>
                        <p className="mb-8" style={{ color: '#94a3b8' }}>
                            Start building privacy-preserving verification into your applications today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://satyastack.com" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition-all hover:-translate-y-1"
                                style={{ background: 'linear-gradient(to right, #2563eb, #3b82f6)', boxShadow: '0 4px 15px rgba(37,99,235,0.3)' }}>
                                <Shield className="w-5 h-5" /> Try SatyaStack
                            </a>
                            <Link to="/#contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition-all hover:-translate-y-1"
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)' }}>
                                Enterprise Demo
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
