import { Code2, Layers, Zap } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <span className="text-sm text-purple-400 font-medium">About ModuleEight</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Deep-Tech Engineering.<br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Modular by Design.
              </span>
            </h2>

            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                ModuleEight Technologies is a founder-led innovation laboratory specializing
                in building intelligent, distributed systems for the next generation of digital infrastructure.
              </p>
              <p>
                We architect cloud-native platforms that seamlessly bridge Web2 and Web3,
                combining enterprise-grade reliability with cutting-edge blockchain interoperability.
                Our modular approach ensures every system we build scales infinitely while maintaining
                security, performance, and maintainability.
              </p>
              <p>
                From AI-powered automation pipelines to multi-cloud orchestration across AWS, Azure,
                and GCP—we don't just build technology. We engineer possibilities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: Code2,
                title: 'Engineering Excellence',
                description: 'Deep expertise in distributed architectures, microservices, and cloud-native patterns that scale from startup to enterprise.'
              },
              {
                icon: Layers,
                title: 'Modular Philosophy',
                description: 'Every component designed for independence, reusability, and seamless integration—building blocks for infinite potential.'
              },
              {
                icon: Zap,
                title: 'Innovation First',
                description: 'Continuously pushing boundaries in AI, blockchain, DevSecOps, and automation to deliver tomorrow solutions today.'
              }
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-white/10 rounded-xl hover:border-purple-500/30 transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
