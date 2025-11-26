import { Blocks, TrendingUp, Sparkles, Shield, Lightbulb, Users } from 'lucide-react';

const benefits = [
  {
    icon: Blocks,
    title: 'Modular Engineering',
    description: 'Every system architected as composable, reusable modules that integrate seamlessly—enabling rapid iteration and infinite scalability without technical debt.'
  },
  {
    icon: TrendingUp,
    title: 'Infinite Scalability',
    description: 'Cloud-native architectures designed to grow from MVP to enterprise scale. Auto-scaling, fault-tolerant systems that handle millions of users without breaking.'
  },
  {
    icon: Sparkles,
    title: 'Cross-Domain Mastery',
    description: 'Deep expertise spanning AI, blockchain, cloud infrastructure, and DevSecOps. One team, complete solutions—no vendor juggling required.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Zero-trust architecture, compliance-ready infrastructure, and security-first engineering. Your data, your users—protected at every layer.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Mindset',
    description: 'We do not follow trends—we create them. Continuous R&D in emerging technologies ensures you are always ahead of the competition.'
  },
  {
    icon: Users,
    title: 'Transparent Partnership',
    description: 'Direct access to senior engineers and architects. Clear communication, realistic timelines, and collaborative problem-solving every step of the way.'
  }
];

export default function WhyUs() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="text-sm text-purple-400 font-medium">Why ModuleEight</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Engineering Excellence,<br />Delivered at Scale
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partner with a team that understands both the art and science of building
            world-class technology infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how ModuleEight can transform your technology infrastructure
              and accelerate your product vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/10">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
