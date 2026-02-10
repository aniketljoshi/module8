import { Layers, Github, Linkedin, Twitter, Mail, MapPin, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = {
  company: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' }
  ],
  services: [
    { label: 'AI Engineering', href: '#services' },
    { label: 'Cloud Architecture', href: '#services' },
    { label: 'DevSecOps & SRE', href: '#services' },
    { label: 'Web3 & Blockchain', href: '#services' },
    { label: 'SaaS Development', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ]
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/module8tech', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/company/moduleeight', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/module8tech', label: 'Twitter/X' }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Animated Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <motion.div
                className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20"
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Layers className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <div className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  Module<span className="text-purple-400">8</span>
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">ModuleEight Technologies Pvt. Ltd.</div>
              </div>
            </a>

            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Building intelligent, modular, cloud-native systems across AI, Web3, and
              distributed infrastructure. Enterprise-grade solutions that scale infinitely.
            </p>

            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:contact@module8.io" className="hover:text-purple-400 transition-colors">
                  contact@module8.io
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center 
                           hover:bg-purple-500/20 hover:border-purple-500/50 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-purple-400 group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-purple-400 group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product & Newsletter Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Spotlight */}
          <div className="p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <h3 className="text-white font-semibold">Our Products</h3>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white font-medium">WalletWeaver</span> — Blockchain wallet intelligence
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white font-medium">SatyaStack</span> — Zero-knowledge proof infrastructure
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white font-medium">ArtistsKonnect</span> — India's artist platform
              </p>
            </div>
            <a href="#products" className="text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm inline-flex items-center gap-1">
              Explore All Products →
            </a>
          </div>

          {/* Newsletter */}
          <div className="p-6 glass-card">
            <h3 className="text-white font-semibold mb-3">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Get insights on AI, cloud architecture, and Web3 engineering
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 
                         focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-sm transition-all"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl 
                         hover:shadow-lg hover:shadow-purple-500/30 transition-all text-sm font-medium hover:scale-[1.02]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm text-center md:text-left flex items-center gap-2">
            <span>© {new Date().getFullYear()} ModuleEight Technologies Pvt. Ltd.</span>
            <span className="hidden sm:inline">—</span>
            <span className="hidden sm:inline text-gray-400">Modular Thinking. Infinite Potential.</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-gray-500 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <a href="/security" className="text-gray-500 hover:text-purple-400 transition-colors">
                Security
              </a>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-500/20 hover:border-purple-500/50 
                       transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Made with Love */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-xs flex items-center justify-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-red-500 animate-pulse" /> in Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
}
