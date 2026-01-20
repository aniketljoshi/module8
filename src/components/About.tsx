import { Code2, Layers, Zap, MapPin, Globe, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Scene3D from './3d/Scene3D';
import FloatingGeometry from './3d/FloatingGeometry';

const values = [
  {
    icon: Code2,
    title: 'Engineering Excellence',
    description: 'Deep expertise in distributed architectures, microservices, and cloud-native patterns. We build systems designed to scale from startup to Fortune 500.'
  },
  {
    icon: Layers,
    title: 'Modular Philosophy',
    description: 'Every component engineered for independence, reusability, and seamless integration. Building blocks for infinite potential.'
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'Continuously pushing boundaries in AI, blockchain, DevSecOps, and automation. Delivering tomorrow\'s solutions today.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* 3D Floating Element */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] opacity-60 hidden lg:block">
        <Scene3D cameraPosition={[0, 0, 5]}>
          <ambientLight intensity={0.5} />
          <FloatingGeometry position={[0, 0, 0]} scale={2} color="#8b5cf6" speed={0.3} distort={0.2} />
        </Scene3D>
      </div>

      <div className="relative max-w-7xl mx-auto px-6" ref={containerRef}>
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left Content */}
          <div>
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8"
            >
              <Globe className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-semibold">About Module8 (ModuleEight)</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]"
            >
              Deep-Tech Engineering.{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Modular by Design.
              </span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-gray-300 leading-relaxed mb-8">
              <p>
                <span className="text-white font-semibold">ModuleEight Technologies Pvt. Ltd.</span> is a founder-led
                deep-tech innovation laboratory headquartered in{' '}
                <span className="inline-flex items-center gap-1 text-purple-300">
                  <MapPin className="w-4 h-4" />
                  Pune, India
                </span>.
                We specialize in building intelligent, distributed systems for the next generation of digital infrastructure.
              </p>
              <p>
                We architect cloud-native platforms that seamlessly bridge <span className="text-white">Web2 and Web3</span>,
                combining enterprise-grade reliability with cutting-edge blockchain interoperability.
                Our modular approach ensures every system scales infinitely while maintaining security,
                performance, and maintainability.
              </p>
              <p>
                From AI-powered automation pipelines to multi-cloud orchestration across
                <span className="text-blue-400"> AWS</span>,{' '}
                <span className="text-cyan-400">Azure</span>, and{' '}
                <span className="text-yellow-400">GCP</span>—we don't just build technology.
                <span className="text-white font-semibold"> We engineer possibilities.</span>
              </p>
            </motion.div>

            {/* Location Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Serving Clients Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>Remote-First Engineering</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Value Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-6"
          >
            {values.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group p-8 glass-card hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-500 hover-lift"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Decorative line */}
                <div className="mt-6 h-px bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
