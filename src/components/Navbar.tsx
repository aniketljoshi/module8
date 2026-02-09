import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layers, Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#products', label: 'Products' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#about', label: 'About' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    // specific check for blog page
    if (location.pathname.startsWith('/blog')) {
      setActiveSection('blog');
      setScrolled(true); // Always show background on blog
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks
        .filter(link => link.href.includes('/#'))
        .map(link => link.href.split('#')[1]);

      let currentSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <motion.div
              className="relative w-11 h-11 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30"
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Layers className="w-6 h-6 text-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
            </motion.div>
            <div>
              <div className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                Module<span className="text-purple-400">8</span>
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">ModuleEight Technologies</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${(link.href === '/blog' && activeSection === 'blog') ||
                  (link.href !== '/blog' && activeSection === link.href.split('#')[1])
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                {link.label}
                {((link.href === '/blog' && activeSection === 'blog') ||
                  (link.href !== '/blog' && activeSection === link.href.split('#')[1])) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              className="ml-4 group relative px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/40 hover:scale-[1.02]"
            >
              <span className="relative flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Get Started
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2.5 text-white rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${(link.href === '/blog' && activeSection === 'blog') ||
                      (link.href !== '/blog' && activeSection === link.href.split('#')[1])
                      ? 'text-white bg-purple-500/20 border border-purple-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="block w-full mt-4 px-6 py-3.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center font-semibold rounded-xl"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
