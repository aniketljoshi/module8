import { useState, useRef } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const faqs = [
    {
        question: 'What is Module8 (ModuleEight)?',
        answer: 'Module8, officially registered as ModuleEight Technologies Pvt. Ltd., is a Pune-based technology infrastructure company specializing in AI engineering, cloud-native architecture (AWS, Azure, GCP), DevSecOps, Web3 development, and enterprise SaaS solutions. We are also the creators of WalletWeaver, a blockchain wallet intelligence platform.'
    },
    {
        question: 'What services does Module8 (ModuleEight) provide?',
        answer: 'Module8 provides comprehensive technology services including: AI Engineering (LLM integration, ML model training, MLOps), Cloud Architecture (AWS, Azure, GCP, multi-cloud strategies), DevSecOps & SRE (CI/CD automation, security scanning, 99.9% uptime engineering), Web3 & Blockchain (smart contracts, DeFi protocols, NFT platforms), SaaS Development, API & Microservices, Security & Identity solutions, and Automation Pipelines.'
    },
    {
        question: 'What is WalletWeaver?',
        answer: 'WalletWeaver is an enterprise-grade blockchain wallet intelligence platform developed by Module8 (ModuleEight). It transforms blockchain addresses into wallet clusters and entity profiles, providing comprehensive tracking, clustering, analytics, and real-time monitoring. It supports multiple chains including Ethereum, Polygon, BSC, Arbitrum, Optimism, Avalanche, and Base, with custom alerts via Discord, Telegram, Email, and Webhooks.'
    },
    {
        question: 'Where is Module8 (ModuleEight) located?',
        answer: 'Module8 (ModuleEight Technologies Pvt. Ltd.) is headquartered in Pune, Maharashtra, India. We operate as a remote-first engineering company serving clients globally across industries including fintech, healthcare, e-commerce, and enterprise software.'
    },
    {
        question: 'Does Module8 provide enterprise solutions?',
        answer: 'Yes, Module8 (ModuleEight) specializes in enterprise-grade solutions with 99.9%+ uptime SLAs, SOC 2 compliant infrastructure, HIPAA/GDPR compliance capabilities, and 24/7 emergency support for enterprise clients. We offer custom engagement models including dedicated engineering teams and long-term technology partnerships.'
    },
    {
        question: 'What cloud platforms does Module8 support?',
        answer: 'Module8 (ModuleEight) provides multi-cloud mastery across all major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). We specialize in hybrid and multi-cloud strategies, Infrastructure as Code (Terraform, Pulumi), Kubernetes orchestration, and FinOps for cloud cost optimization.'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }
    }
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-50px' });

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-black to-black" />
            <div className="absolute inset-0 dot-pattern opacity-20" />

            <div className="relative max-w-4xl mx-auto px-6" ref={containerRef}>
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8">
                        <HelpCircle className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-400 font-semibold">FAQ</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Frequently Asked{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Learn more about Module8 (ModuleEight Technologies) and how we can help transform your technology infrastructure.
                    </p>
                </motion.div>

                {/* FAQ List */}
                <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group"
                        >
                            <div
                                className={`p-6 bg-white/5 border rounded-2xl transition-all duration-300 cursor-pointer
                           ${openIndex === index
                                        ? 'border-purple-500/50 bg-purple-500/5'
                                        : 'border-white/10 hover:border-white/20 hover:bg-white/[0.02]'}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className={`text-lg font-semibold transition-colors ${openIndex === index ? 'text-purple-300' : 'text-white'
                                        }`}>
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        <ChevronDown className={`w-5 h-5 transition-colors ${openIndex === index ? 'text-purple-400' : 'text-gray-400'
                                            }`} />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-4 text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className="text-gray-400 mb-4">Still have questions?</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/10 border border-purple-500/30 rounded-xl 
                     text-purple-400 font-medium hover:bg-purple-500/20 hover:border-purple-500/50 transition-all"
                    >
                        <Sparkles className="w-4 h-4" />
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
