import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Scene3D from './3d/Scene3D';
import ParticleField from './3d/ParticleField';
import FloatingGeometry from './3d/FloatingGeometry';

const stats = [
  { label: 'Cloud Platforms', value: '3+', suffix: '' },
  { label: 'Technology Domains', value: '8', suffix: '+' },
  { label: 'Enterprise Grade', value: '100', suffix: '%' },
  { label: 'Uptime SLA', value: '99.9', suffix: '%' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Particle Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D cameraPosition={[0, 0, 8]}>
          <ambientLight intensity={0.5} />
          <ParticleField count={800} color="#8b5cf6" size={0.015} spread={20} />
          <ParticleField count={400} color="#3b82f6" size={0.02} spread={15} />
          <FloatingGeometry position={[-4, 2, -5]} scale={0.8} color="#8b5cf6" speed={0.5} />
          <FloatingGeometry position={[5, -1, -6]} scale={0.6} color="#3b82f6" speed={0.7} />
          <FloatingGeometry position={[3, 3, -8]} scale={0.4} color="#22d3ee" speed={0.6} />
        </Scene3D>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/50 to-blue-900/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[1]" />

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan-600/15 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] z-[1]" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8 backdrop-blur-md hover:bg-purple-500/20 transition-all duration-300 cursor-default"
        >
          <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
          <span className="text-sm text-purple-300 font-semibold tracking-wide">Next-Generation Technology Infrastructure</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
        >
          <span className="block text-white">Engineering Tomorrow's</span>
          <span className="block mt-2 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
            Infrastructure. Today.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          We architect intelligent, cloud-native systems that bridge the gap between Web2 and Web3.
          From AI-driven automation to blockchain interoperability —
          <span className="text-white font-medium"> Module8 delivers enterprise-grade solutions that scale infinitely.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 flex items-center gap-2 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Build With Us</span>
            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#products"
            className="group px-8 py-4 bg-white/5 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
          >
            <span>Explore Our Products</span>
            <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-300 rounded-full">3 Products</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group text-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {stat.value}
                <span className="text-purple-400">{stat.suffix}</span>
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-[2]" />
    </section>
  );
}
