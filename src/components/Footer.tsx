import { Layers, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">ModuleEight</div>
                <div className="text-xs text-gray-400">Technologies Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building intelligent, modular, cloud-native systems across AI, Web3, and
              distributed infrastructure. Modular thinking. Infinite potential.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Careers', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                'AI Engineering',
                'Cloud Architecture',
                'DevSecOps & SRE',
                'Web3 & Blockchain',
                'SaaS Development',
                'Contact'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-xl">
            <h3 className="text-white font-semibold mb-2">Product Spotlight</h3>
            <p className="text-gray-400 mb-3">
              Discover WalletWeaver—the next-gen identity abstraction layer for Web3
            </p>
            <a href="#" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
              Learn More →
            </a>
          </div>

          <div className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl">
            <h3 className="text-white font-semibold mb-2">Newsletter</h3>
            <p className="text-gray-400 mb-3">
              Get insights on AI, cloud architecture, and Web3 engineering
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none text-sm"
              />
              <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © 2025 ModuleEight Technologies Pvt. Ltd. — Modular Thinking. Infinite Potential.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
