import { useState } from 'react';
import { Layers, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">ModuleEight</div>
              <div className="text-xs text-gray-400">Technologies</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Products', 'Portfolio', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {['Home', 'Services', 'Products', 'Portfolio', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-gray-300 hover:text-white transition-colors font-medium"
              >
                {item}
              </a>
            ))}
            <button className="w-full px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
