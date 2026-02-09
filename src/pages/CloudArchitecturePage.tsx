import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, ArrowLeft, CheckCircle, Server, Database, Shield, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Cloud-Native Architecture Design',
        description: 'Design and implement microservices, serverless, and container-based architectures that scale automatically and reduce operational overhead.',
        icon: Layers
    },
    {
        title: 'Multi-Cloud & Hybrid Strategies',
        description: 'Leverage the best of AWS, Azure, and GCP with unified management. Avoid vendor lock-in while maximizing performance.',
        icon: Cloud
    },
    {
        title: 'Infrastructure as Code',
        description: 'Terraform, Pulumi, and CloudFormation expertise. Version-controlled, repeatable, and auditable infrastructure deployments.',
        icon: Server
    },
    {
        title: 'FinOps & Cost Optimization',
        description: 'Reduce cloud spend by 30-50% with right-sizing, reserved instances, spot fleets, and automated cost governance.',
        icon: Database
    }
];

const cloudPlatforms = [
    { name: 'Amazon Web Services', short: 'AWS', color: 'text-orange-400' },
    { name: 'Microsoft Azure', short: 'Azure', color: 'text-blue-400' },
    { name: 'Google Cloud Platform', short: 'GCP', color: 'text-green-400' }
];

const services = [
    'Cloud migration & modernization',
    'Kubernetes orchestration',
    'Serverless architecture',
    'Database optimization',
    'Disaster recovery planning',
    'Performance engineering'
];

export default function CloudArchitecturePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Cloud Architecture Services | AWS Azure GCP Consulting | Module8</title>
                <meta name="description" content="Multi-cloud mastery with Module8. Cloud-native architecture design, hybrid cloud strategies, Infrastructure as Code (Terraform), and FinOps optimization. Enterprise cloud consulting India." />
                <meta name="keywords" content="cloud architecture, AWS consulting, Azure consulting, GCP, multi-cloud, Kubernetes, Terraform, cloud migration, Pune cloud company, Module8" />
                <link rel="canonical" href="https://module8.io/services/cloud-architecture" />

                <meta property="og:title" content="Cloud Architecture Services | Module8" />
                <meta property="og:description" content="Multi-cloud consulting: AWS, Azure, GCP. Cloud-native architecture, Kubernetes, Infrastructure as Code, and cost optimization." />
                <meta property="og:url" content="https://module8.io/services/cloud-architecture" />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="min-h-screen bg-black">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black" />
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
                                <Cloud className="w-4 h-4 text-blue-400" />
                                <span className="text-sm text-blue-400 font-semibold">Cloud Architecture Services</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Multi-Cloud Mastery for{' '}
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Maximum Flexibility
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-3xl mb-8">
                                Design, deploy, and optimize cloud infrastructure across AWS, Azure, and GCP.
                                We build resilient, cost-effective architectures that scale with your business.
                            </p>

                            {/* Cloud Platform Badges */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                {cloudPlatforms.map((platform) => (
                                    <div
                                        key={platform.short}
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
                                    >
                                        <span className={`font-semibold ${platform.color}`}>{platform.short}</span>
                                        <span className="text-gray-400 text-sm ml-2">Certified</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/#contact"
                                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold text-white transition-all"
                                >
                                    Start Cloud Transformation
                                </Link>
                                <Link
                                    to="/#portfolio"
                                    className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all"
                                >
                                    View Migrations
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-black">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            Our Cloud Architecture Expertise
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all"
                                >
                                    <feature.icon className="w-10 h-10 text-blue-400 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services List */}
                <section className="py-20 bg-gradient-to-b from-black to-blue-950/10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    End-to-End Cloud Services
                                </h2>
                                <p className="text-gray-400 mb-8">
                                    From greenfield deployments to complex migrations, we handle every aspect
                                    of your cloud journey with enterprise-grade security and performance.
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

                            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                                <Shield className="w-10 h-10 text-blue-400 mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Security</h3>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 font-bold">→</span>
                                        SOC 2 Type II compliant infrastructure
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 font-bold">→</span>
                                        Zero-trust network architecture
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 font-bold">→</span>
                                        Automated compliance scanning
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 font-bold">→</span>
                                        HIPAA/GDPR ready configurations
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-black">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Optimize Your Cloud?
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Get a free cloud architecture assessment and discover optimization opportunities.
                        </p>
                        <Link
                            to="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold text-white transition-all"
                        >
                            <Cloud className="w-5 h-5" />
                            Schedule Assessment
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}
