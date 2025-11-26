import { Brain, Cloud, Shield, Blocks, Package, Network, Lock, Workflow, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Engineering',
    description: 'Transform your operations with intelligent automation and machine learning systems.',
    features: [
      'Large Language Model integration',
      'Custom AI model training & deployment',
      'MLOps pipelines & monitoring',
      'Intelligent automation workflows'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Multi-cloud mastery across AWS, Azure, and GCP for maximum flexibility and resilience.',
    features: [
      'Cloud-native architecture design',
      'Multi-cloud & hybrid strategies',
      'Infrastructure as Code (Terraform, Pulumi)',
      'Cost optimization & FinOps'
    ]
  },
  {
    icon: Shield,
    title: 'DevSecOps & SRE',
    description: 'Security-first automation and reliability engineering for enterprise-grade uptime.',
    features: [
      'CI/CD pipeline automation',
      'Security scanning & compliance',
      'Observability & monitoring',
      '99.9%+ uptime SLA engineering'
    ]
  },
  {
    icon: Blocks,
    title: 'Web3 & Blockchain Systems',
    description: 'Bridge traditional systems with decentralized infrastructure through custom blockchain solutions.',
    features: [
      'Smart contract development',
      'Multi-chain interoperability',
      'DeFi protocol architecture',
      'NFT platforms & marketplaces'
    ]
  },
  {
    icon: Package,
    title: 'SaaS Product Development',
    description: 'End-to-end product engineering from concept to scale with modern tech stacks.',
    features: [
      'Full-stack development (React, Node, Python)',
      'Product strategy & UX design',
      'Scalable database architecture',
      'API-first development'
    ]
  },
  {
    icon: Network,
    title: 'API & Microservices',
    description: 'Build robust, scalable APIs and distributed microservice architectures.',
    features: [
      'RESTful & GraphQL APIs',
      'Event-driven architectures',
      'Service mesh implementation',
      'API gateway & management'
    ]
  },
  {
    icon: Lock,
    title: 'Security & Identity Layers',
    description: 'Enterprise authentication, authorization, and identity management solutions.',
    features: [
      'OAuth 2.0 & OIDC implementation',
      'Zero-trust security architecture',
      'Identity abstraction layers',
      'Compliance & audit logging'
    ]
  },
  {
    icon: Workflow,
    title: 'Automation Pipelines',
    description: 'Eliminate manual processes with intelligent automation and workflow orchestration.',
    features: [
      'Process automation & RPA',
      'Data pipeline engineering',
      'Workflow orchestration (Airflow, Temporal)',
      'Integration platforms (iPaaS)'
    ]
  }
];

export default function Services() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="text-sm text-purple-400 font-medium">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Full-Stack Technology Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI-driven cloud platforms to blockchain infrastructure—we deliver
            enterprise-grade solutions across the entire technology spectrum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                  <service.icon className="w-7 h-7 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                Enquire Now
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
