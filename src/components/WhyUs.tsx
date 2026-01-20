import { Blocks, TrendingUp, Sparkles, Shield, Lightbulb, Users, ArrowRight, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const benefits = [
  {
    icon: Blocks,
    title: 'Modular Engineering',
    description: 'Every system architected as composable, reusable modules that integrate seamlessly—enabling rapid iteration and infinite scalability without technical debt.',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: TrendingUp,
    title: 'Infinite Scalability',
    description: 'Cloud-native architectures designed to grow from MVP to enterprise scale. Auto-scaling, fault-tolerant systems that handle millions of users.',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Sparkles,
    title: 'Cross-Domain Mastery',
    description: 'Deep expertise spanning AI, blockchain, cloud infrastructure, and DevSecOps. One partner, complete solutions—no vendor juggling required.',
    gradient: 'from-cyan-500/20 to-teal-500/20'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Zero-trust architecture, compliance-ready infrastructure, and security-first engineering. Your data and users—protected at every layer.',
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We don\'t follow trends—we create them. Continuous R&D in emerging technologies ensures you stay ahead of the competition.',
    gradient: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    icon: Users,
    title: 'Transparent Partnership',
    description: 'Direct access to senior engineers and architects. Clear communication, realistic timelines, and collaborative problem-solving.',
    gradient: 'from-pink-500/20 to-rose-500/20'
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
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

export default function WhyUs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-6" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8">
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-semibold">Why Module8 (ModuleEight)</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Engineering Excellence,{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Delivered at Scale
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Partner with a team that understands both the art and science of building
            world-class technology infrastructure.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-lg"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className={`group p-8 bg-gradient-to-br ${benefit.gradient} border border-white/10 rounded-2xl 
                         hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 
                         transition-all duration-500 hover-lift`}
            >
              <div className="w-14 h-14 bg-black/30 border border-white/10 rounded-xl flex items-center justify-center mb-6 
                            group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-purple-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                {benefit.title}
              </h3>

              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 p-10 lg:p-14 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-3xl text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Background Grid */}
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Animated Gradient Border */}
          <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-cyan-500/50 opacity-50" />

          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h3>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how <span className="text-white font-semibold">Module8</span> can transform your technology infrastructure
              and accelerate your product vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group px-8 py-4 bg-white text-black font-semibold rounded-xl 
                         hover:bg-purple-500 hover:text-white transition-all duration-300 
                         shadow-xl shadow-white/10 hover:shadow-purple-500/30 flex items-center justify-center gap-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 bg-white/5 border-2 border-white/20 text-white font-semibold rounded-xl 
                         hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
