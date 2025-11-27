import { ExternalLink, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'WalletWeaver Identity Protocol',
    category: 'Web3 Infrastructure',
    description: 'Architected and launched a non-custodial, multi-chain identity abstraction layer enabling seamless Web3 authentication across 12+ blockchain networks.',
    results: [
      'Zero-downtime deployment architecture',
      '100ms average authentication latency',
      'Support for 12+ blockchain networks',
      'SOC 2 Type II compliant infrastructure'
    ],
    tech: ['Ethereum', 'Polygon', 'AWS', 'Rust', 'TypeScript', 'PostgreSQL'],
    gradient: 'from-blue-500/20 to-purple-500/20'
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
    gradient: 'from-purple-500/20 to-pink-500/20'
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
    gradient: 'from-green-500/20 to-blue-500/20'
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
    gradient: 'from-yellow-500/20 to-orange-500/20'
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
    gradient: 'from-blue-500/20 to-cyan-500/20'
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
    gradient: 'from-purple-500/20 to-blue-500/20'
  }
];

export default function Portfolio() {
  return (
    <section className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="text-sm text-purple-400 font-medium">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real projects. Real results. Real impact on businesses across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-3">
                    <span className="text-xs text-purple-400 font-medium">{study.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">{study.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Key Results</h4>
                <div className="grid grid-cols-2 gap-3">
                  {study.results.map((result) => (
                    <div key={result} className="text-sm text-gray-400 flex items-start gap-2">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/portfolio" className="group px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 inline-flex items-center gap-2">
            View Full Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
