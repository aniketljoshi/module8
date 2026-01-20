import { Brain, Cloud, Shield, Blocks, Package, Network, Lock, Workflow, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: Brain,
    title: 'AI Engineering',
    description: 'Transform operations with intelligent automation and machine learning systems built for scale.',
    features: [
      'Large Language Model integration & fine-tuning',
      'Custom AI model training & deployment',
      'MLOps pipelines & continuous monitoring',
      'Intelligent automation workflows'
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/50'
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
    ],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/50'
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
    ],
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
    borderHover: 'hover:border-green-500/50'
  },
  {
    icon: Blocks,
    title: 'Web3 & Blockchain',
    description: 'Bridge traditional systems with decentralized infrastructure through custom blockchain solutions.',
    features: [
      'Smart contract development & audits',
      'Multi-chain interoperability',
      'DeFi protocol architecture',
      'NFT platforms & marketplaces'
    ],
    gradient: 'from-orange-500/20 to-yellow-500/20',
    iconColor: 'text-orange-400',
    borderHover: 'hover:border-orange-500/50'
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
    ],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/50'
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
    ],
    gradient: 'from-violet-500/20 to-purple-500/20',
    iconColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/50'
  },
  {
    icon: Lock,
    title: 'Security & Identity',
    description: 'Enterprise authentication, authorization, and identity management solutions.',
    features: [
      'OAuth 2.0 & OIDC implementation',
      'Zero-trust security architecture',
      'Identity abstraction layers',
      'Compliance & audit logging'
    ],
    gradient: 'from-red-500/20 to-pink-500/20',
    iconColor: 'text-red-400',
    borderHover: 'hover:border-red-500/50'
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
    ],
    gradient: 'from-teal-500/20 to-cyan-500/20',
    iconColor: 'text-teal-400',
    borderHover: 'hover:border-teal-500/50'
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

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-6" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-semibold">Our Services</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Full-Stack Technology{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From AI-driven cloud platforms to blockchain infrastructure—we deliver
            enterprise-grade solutions across the entire technology spectrum.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`group relative p-8 bg-gradient-to-br ${service.gradient} border border-white/10 rounded-2xl 
                         ${service.borderHover} hover:shadow-2xl hover:shadow-purple-500/10 
                         transition-all duration-500 card-hover-tilt overflow-hidden`}
            >
              {/* Background Shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 bg-black/30 border border-white/10 rounded-xl 
                                  group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-gray-300">
                      <div className={`mt-2 w-1.5 h-1.5 ${service.iconColor.replace('text-', 'bg-')} rounded-full flex-shrink-0`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full py-3.5 bg-black/30 border border-white/10 rounded-xl text-white font-medium 
                             ${service.borderHover.replace('hover:border', 'hover:bg').replace('/50', '/10')} 
                             transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
