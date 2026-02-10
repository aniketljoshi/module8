import { ArrowRight, ExternalLink, Shield, Lock, FileCheck, Eye, Fingerprint, EyeOff, FileKey } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
    { value: '97%', label: 'Data Exposure Reduced' },
    { value: '<2s', label: 'Proof Generation' },
    { value: '₹250Cr', label: 'DPDP Penalty Avoided' },
    { value: '28%', label: 'Cost Reduction' }
];

const securityFeatures = [
    {
        icon: EyeOff,
        title: 'Zero PII Transmission',
        desc: 'User data never leaves their device. Proofs are generated locally in WASM.',
        color: '#2563eb'
    },
    {
        icon: Fingerprint,
        title: 'Unlinkability',
        desc: 'Prevent correlation attacks. Each proof is unique and cannot be tracked.',
        color: '#10b981'
    },
    {
        icon: Shield,
        title: 'Military-Grade Encryption',
        desc: 'All proofs use zk-SNARKs (Groth16) for quantum-resistant security.',
        color: '#8b5cf6'
    },
    {
        icon: FileKey,
        title: 'Immutable Audit Logs',
        desc: 'Verification results are hashed on-chain for tamper-proof compliance.',
        color: '#f97316'
    }
];

const capabilities = [
    { icon: Shield, label: 'ZK-Proof Engine', desc: 'Generate and verify cryptographic proofs' },
    { icon: Lock, label: 'Privacy First', desc: 'Selective disclosure without data exposure' },
    { icon: FileCheck, label: 'Compliance Ready', desc: 'DPDP, FIU-IND, RBI frameworks built-in' },
    { icon: Eye, label: 'Audit Transparency', desc: 'Tamper-proof verification trails' }
];

const phases = [
    {
        phase: 'Foundation',
        status: 'Current',
        items: ['Core ZK-proof engine', 'Identity verification', 'Compliance dashboard', 'REST API', 'Audit trails'],
        active: true
    },
    {
        phase: 'Expansion',
        status: 'Q1 2026',
        items: ['Multi-party verification', 'Advanced reporting', 'Selective disclosure v2', 'Webhooks', 'SSO'],
        active: false
    },
    {
        phase: 'Enterprise',
        status: 'Q2 2026',
        items: ['Cross-border compliance', 'AI risk assessment', 'Private cloud', 'Custom circuits', 'SLAs'],
        active: false
    }
];

export default function SatyaStack() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-50px' });

    return (
        <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0f172a, #1e293b, #0f172a)' }}>
            {/* Technical grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(96,165,250,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.4) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(circle at 50% 50%, black 30%, transparent 70%)'
                }}
            />

            {/* Floating blue orb — CSS only, matching source Hero3DScene */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div
                    className="w-[300px] h-[300px] rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, #2563eb 0%, #0ea5e9 40%, transparent 70%)',
                        filter: 'blur(60px)',
                        animation: 'satyaOrb 8s ease-in-out infinite'
                    }}
                />
            </div>

            {/* Particle dots — CSS only */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 30 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `satyaFloat ${4 + Math.random() * 4}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>

            <style>{`
        @keyframes satyaOrb {
          0%, 100% { transform: scale(1) rotate(0deg); }
          33% { transform: scale(1.1) rotate(3deg); }
          66% { transform: scale(0.95) rotate(-2deg); }
        }
        @keyframes satyaFloat {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        }
        @keyframes satyaFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

            <div className="relative max-w-7xl mx-auto px-6 z-10" ref={containerRef}>
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    {/* Badge — matching source pulsing dot style */}
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm mb-8"
                        style={{ background: 'rgba(37,99,235,0.1)', borderColor: 'rgba(37,99,235,0.2)', color: '#60a5fa' }}>
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                        </span>
                        DPDP Compliance Infrastructure
                    </span>

                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.05]">
                        Prove Compliance{' '}
                        <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #22d3ee, #34d399)' }}>
                            Without Revealing Data
                        </span>
                    </h2>

                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed" style={{ color: '#94a3b8' }}>
                        India's first <strong className="text-white">Zero-Knowledge Compliance Infrastructure</strong>.
                        Meet DPDP, FIU-IND, and RBI requirements with programmable privacy.
                    </p>
                </motion.div>

                {/* Stats row — from source Hero */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <div className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</div>
                            <div className="text-sm mt-1" style={{ color: '#64748b' }}>{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Security Features — clean cards matching source Security.tsx */}
                <motion.div
                    className="mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Security by Principle</h3>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
                            We don't just secure data. We ensure you never have to touch it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {securityFeatures.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                    style={{ background: 'rgba(241,245,249,0.05)', border: '1px solid rgba(241,245,249,0.1)' }}>
                                    <item.icon className="w-10 h-10" style={{ color: item.color }} />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                                <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Capabilities grid — clean bordered cards */}
                <motion.div
                    className="grid md:grid-cols-2 gap-6 mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    {capabilities.map((cap) => (
                        <div
                            key={cap.label}
                            className="p-6 rounded-2xl transition-all duration-300 group"
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(148,163,184,0.15)',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(37,99,235,0.4)';
                                (e.currentTarget as HTMLDivElement).style.background = 'rgba(37,99,235,0.05)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(148,163,184,0.15)';
                                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)';
                            }}
                        >
                            <cap.icon className="w-8 h-8 text-blue-400 mb-3" />
                            <h4 className="text-lg font-bold text-white mb-2">{cap.label}</h4>
                            <p className="text-sm" style={{ color: '#94a3b8' }}>{cap.desc}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Roadmap — horizontal timeline with connecting line */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-white mb-10 text-center">Product Roadmap</h3>

                    <div className="relative">
                        {/* Connecting line */}
                        <div className="hidden md:block absolute top-6 left-[16.67%] right-[16.67%] h-px" style={{ background: 'linear-gradient(to right, #2563eb, #0ea5e9, #34d399)' }} />

                        <div className="grid md:grid-cols-3 gap-8">
                            {phases.map((phase) => (
                                <div key={phase.phase} className="text-center">
                                    {/* Timeline dot */}
                                    <div className="flex justify-center mb-6">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${phase.active ? 'ring-4 ring-blue-500/30' : ''}`}
                                            style={{ background: phase.active ? '#2563eb' : 'rgba(37,99,235,0.15)', border: phase.active ? 'none' : '1px solid rgba(37,99,235,0.3)' }}>
                                            <span className={`text-xs font-bold ${phase.active ? 'text-white' : 'text-blue-400'}`}>
                                                {phase.active ? '●' : '○'}
                                            </span>
                                        </div>
                                    </div>

                                    <h4 className="text-lg font-bold text-white mb-1">{phase.phase}</h4>
                                    <p className="text-sm text-blue-400 font-semibold mb-4">{phase.status}</p>
                                    <ul className="text-sm space-y-2" style={{ color: '#94a3b8' }}>
                                        {phase.items.map((item) => (
                                            <li key={item} className="flex items-center gap-2 justify-center">
                                                <span className="w-1 h-1 bg-blue-400/50 rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <a
                        href="https://satyastack.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 text-white font-bold text-lg rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-2xl"
                        style={{ background: 'linear-gradient(to right, #2563eb, #3b82f6)', boxShadow: '0 4px 6px -1px rgba(37,99,235,0.2)' }}
                    >
                        <span>Explore SatyaStack</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="mailto:founders@satyastack.com"
                        className="group px-8 py-4 text-white font-bold text-lg rounded-2xl backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                        <span>Contact Team</span>
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
