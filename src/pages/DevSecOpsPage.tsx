import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, CheckCircle, Lock, Eye, Gauge, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'CI/CD Pipeline Automation',
        description: 'Fully automated build, test, and deploy pipelines with security scanning at every stage. GitHub Actions, GitLab CI, Jenkins, and more.',
        icon: GitBranch
    },
    {
        title: 'Security Scanning & Compliance',
        description: 'SAST, DAST, container scanning, and dependency auditing integrated into your workflow. Never ship vulnerable code again.',
        icon: Lock
    },
    {
        title: 'Observability & Monitoring',
        description: 'Full-stack observability with Prometheus, Grafana, Datadog, and custom dashboards. Know before your users do.',
        icon: Eye
    },
    {
        title: '99.9%+ Uptime Engineering',
        description: 'SRE practices that ensure reliability. On-call automation, incident management, and chaos engineering.',
        icon: Gauge
    }
];

const tools = [
    'Kubernetes', 'Docker', 'Terraform', 'Ansible',
    'GitHub Actions', 'GitLab CI', 'ArgoCD', 'Vault',
    'Prometheus', 'Grafana', 'Datadog', 'PagerDuty'
];

export default function DevSecOpsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>DevSecOps & SRE Services | CI/CD Security Automation | Module8</title>
                <meta name="description" content="Security-first DevSecOps consulting. CI/CD automation, Kubernetes, security scanning, observability, and 99.9%+ uptime SRE engineering. Enterprise DevSecOps partner in India." />
                <meta name="keywords" content="DevSecOps, SRE, CI/CD, Kubernetes, security automation, site reliability engineering, observability, Pune DevOps company, Module8" />
                <link rel="canonical" href="https://module8.io/services/devsecops" />

                <meta property="og:title" content="DevSecOps & SRE Services | Module8" />
                <meta property="og:description" content="Security-first DevSecOps: CI/CD automation, Kubernetes, security scanning, and 99.9%+ uptime engineering." />
                <meta property="og:url" content="https://module8.io/services/devsecops" />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="min-h-screen bg-black">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 via-black to-black" />
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                                <Shield className="w-4 h-4 text-green-400" />
                                <span className="text-sm text-green-400 font-semibold">DevSecOps & SRE Services</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Security-First Automation for{' '}
                                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                    Enterprise Reliability
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-3xl mb-8">
                                Shift security left with automated pipelines that catch vulnerabilities early.
                                Combined with SRE practices for 99.9%+ uptime you can trust.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/#contact"
                                    className="px-8 py-4 bg-green-600 hover:bg-green-500 rounded-xl font-semibold text-white transition-all"
                                >
                                    Secure Your Pipeline
                                </Link>
                                <Link
                                    to="/#portfolio"
                                    className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all"
                                >
                                    View Case Studies
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-black">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            Our DevSecOps Capabilities
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-green-500/50 transition-all"
                                >
                                    <feature.icon className="w-10 h-10 text-green-400 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tools Section */}
                <section className="py-20 bg-gradient-to-b from-black to-green-950/10">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-6 text-center">
                            Tools & Technologies We Master
                        </h2>
                        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                            We work with the best-in-class DevSecOps tooling to build reliable, secure pipelines.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            {tools.map((tool) => (
                                <div
                                    key={tool}
                                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:border-green-500/50 transition-all"
                                >
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SLA Section */}
                <section className="py-20 bg-black">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center">
                                <div className="text-5xl font-bold text-green-400 mb-2">99.9%</div>
                                <div className="text-gray-400">Uptime SLA</div>
                            </div>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center">
                                <div className="text-5xl font-bold text-green-400 mb-2">&lt;15min</div>
                                <div className="text-gray-400">Incident Response</div>
                            </div>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center">
                                <div className="text-5xl font-bold text-green-400 mb-2">24/7</div>
                                <div className="text-gray-400">Monitoring</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-black">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Level Up Your DevSecOps?
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Get a free security assessment and CI/CD pipeline review.
                        </p>
                        <Link
                            to="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 rounded-xl font-semibold text-white transition-all"
                        >
                            <Shield className="w-5 h-5" />
                            Request Assessment
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}
