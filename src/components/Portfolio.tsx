import { ExternalLink, ArrowRight, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const caseStudies = [
  {
    title: 'WalletWeaver Identity Protocol',
    category: 'Web3 Infrastructure',
    link: 'https://walletweaver.com',
    description: 'Architected and launched a non-custodial, multi-chain identity abstraction layer enabling seamless Web3 authentication across 12+ blockchain networks.',
    results: [
      'Zero-downtime deployment architecture',
      '100ms average authentication latency',
      'Support for 12+ blockchain networks',
      'SOC 2 Type II compliant infrastructure'
    ],
    tech: ['Ethereum', 'Polygon', 'AWS', 'Rust', 'TypeScript', 'PostgreSQL'],
    gradient: 'from-blue-500/20 to-purple-500/20',
    accent: 'blue'
  },
  {
    title: 'SatyaStack ZK-Proof Infrastructure',
    category: 'Privacy & Compliance',
    link: 'https://satyastack.com',
    description: 'Built an enterprise-grade zero-knowledge proof platform enabling privacy-preserving verification and regulatory compliance for financial institutions and healthcare providers.',
    results: [
      'Sub-second proof generation',
      'GDPR & KYC/AML compliant',
      'Multi-industry deployment ready',
      'Tamper-proof audit trails'
    ],
    tech: ['ZK-SNARKs', 'Rust', 'Node.js', 'AWS', 'PostgreSQL', 'Redis'],
    gradient: 'from-green-500/20 to-emerald-500/20',
    accent: 'green'
  },
  {
    title: 'ArtistsKonnect Platform',
    category: 'Creator Economy',
    link: 'https://artistskonnect.com',
    description: 'Designed and launched India\'s artist infrastructure platform connecting creative talent with opportunities through AI-powered discovery, secure escrow payments, and collaboration tools.',
    results: [
      'Pan-India artist network',
      'Escrow-based secure payments',
      'AI-powered talent matching',
      'Multi-language platform support'
    ],
    tech: ['React', 'Node.js', 'Python', 'AWS', 'PostgreSQL', 'Redis'],
    gradient: 'from-orange-500/20 to-amber-500/20',
    accent: 'orange'
  },
  {
    title: 'Global SaaS Platform Migration',
    category: 'Cloud Architecture',
    description: 'Migrated a monolithic e-commerce platform serving 2M+ users to a microservices architecture across AWS and Azure, reducing infrastructure costs by 40%.',
    results: [
      '40% reduction in cloud costs',
      '99.95% uptime achieved',
      '3x faster deployment cycles',
      'Zero data loss during migration'
    ],
    tech: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Python', 'Redis'],
    gradient: 'from-purple-500/20 to-pink-500/20',
    accent: 'purple'
  },
  {
    title: 'AI-Powered DevOps Pipeline',
    category: 'AI & Automation',
    description: 'Built an intelligent CI/CD pipeline with ML-based predictive testing, reducing deployment time by 60% and catching 95% of bugs before production.',
    results: [
      '60% faster deployment cycles',
      '95% pre-production bug detection',
      '$200K+ annual cost savings',
      'Automated rollback capabilities'
    ],
    tech: ['GitHub Actions', 'TensorFlow', 'Python', 'Docker', 'GCP', 'Prometheus'],
    gradient: 'from-green-500/20 to-cyan-500/20',
    accent: 'green'
  },
  {
    title: 'Enterprise DeFi Trading Platform',
    category: 'Blockchain & Fintech',
    description: 'Designed and deployed a high-frequency DeFi trading platform handling $50M+ daily volume with sub-second trade execution and institutional-grade security.',
    results: [
      '$50M+ daily trading volume',
      '<500ms trade execution',
      'Multi-signature security',
      'Real-time risk monitoring'
    ],
    tech: ['Solidity', 'Node.js', 'WebSocket', 'PostgreSQL', 'Redis', 'AWS'],
    gradient: 'from-yellow-500/20 to-orange-500/20',
    accent: 'yellow'
  },
  {
    title: 'Healthcare API Gateway',
    category: 'API Infrastructure',
    description: 'Architected a HIPAA-compliant API gateway connecting 50+ healthcare systems, processing 10M+ requests daily with end-to-end encryption.',
    results: [
      'HIPAA & GDPR compliant',
      '10M+ daily API requests',
      '99.99% uptime SLA',
      'Sub-100ms API response times'
    ],
    tech: ['Kong', 'Node.js', 'PostgreSQL', 'AWS', 'Kubernetes', 'Vault'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    accent: 'cyan'
  },
  {
    title: 'Multi-Cloud Orchestration System',
    category: 'Cloud Infrastructure',
    description: 'Built a unified orchestration layer managing workloads across AWS, Azure, and GCP with intelligent cost optimization and automated failover.',
    results: [
      '35% cloud cost optimization',
      'Automatic cross-cloud failover',
      'Unified monitoring dashboard',
      '50% faster resource provisioning'
    ],
    tech: ['Terraform', 'Kubernetes', 'Python', 'Grafana', 'Prometheus', 'Ansible'],
    gradient: 'from-violet-500/20 to-purple-500/20',
    accent: 'violet'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

export default function Portfolio() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-black to-black" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8">
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-semibold">Portfolio</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Proven{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Track Record
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real projects. Real results. Real impact on businesses across industries.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {caseStudies.map((study) => {
            const Component = study.link ? motion.a : motion.div;
            const linkProps = study.link
              ? {
                href: study.link,
                target: '_blank',
                rel: 'noopener noreferrer',
                whileHover: { scale: 1.02 },
              }
              : {};

            return (
              <Component
                key={study.title}
                variants={cardVariants}
                {...linkProps}
                className={`group p-8 bg-gradient-to-br ${study.gradient} border border-white/10 rounded-2xl 
                           hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 
                           transition-all duration-500 card-hover-tilt overflow-hidden relative cursor-pointer`}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                </div>

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/30 border border-white/10 rounded-full mb-3">
                        <TrendingUp className="w-3 h-3 text-purple-400" />
                        <span className="text-xs text-purple-400 font-medium">{study.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {study.title}
                        {study.link && (
                          <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors inline-block ml-2" />
                        )}
                      </h3>
                    </div>
                    {!study.link && <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors flex-shrink-0" />}
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-400" />
                      Key Results
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.map((result) => (
                        <div key={result} className="text-sm text-gray-400 flex items-start gap-2 group-hover:text-gray-300 transition-colors">
                          <div className="mt-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs text-gray-300 
                                 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Component>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#contact"
            className="group px-8 py-4 bg-white/5 border-2 border-white/20 text-white font-semibold rounded-xl 
                     hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 
                     inline-flex items-center gap-2"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
