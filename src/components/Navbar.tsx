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
              <div className="text-xl font-bold text-white">Module8</div>
              <div className="text-xs text-gray-400">ModuleEight Technologies</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors font-medium">Services</a>
            <a href="#products" className="text-gray-300 hover:text-white transition-colors font-medium">Products</a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors font-medium">Portfolio</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-medium">Contact</a>
            <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Get Started
            </a>
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
            <a href="#home" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white transition-colors font-medium">Home</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white transition-colors font-medium">Services</a>
            <a href="#products" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white transition-colors font-medium">Products</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white transition-colors font-medium">Portfolio</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white transition-colors font-medium">About</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white transition-colors font-medium">Contact</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
