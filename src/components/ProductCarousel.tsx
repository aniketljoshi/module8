import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Wallet, Bell, TrendingUp, Lock, Shield, FileCheck, Eye, EyeOff, Users, Calendar, CreditCard, Music, ArrowRight, ExternalLink } from 'lucide-react';

/* ── Product card data ── */
const products = [
  {
    id: 'walletweaver',
    label: 'WalletWeaver',
    badge: 'Enterprise DeFi',
    logoUrl: '/walletweaver-logo.svg',
    tagline: 'From Funding to Frontrunners:',
    taglineHighlight: 'WalletWeaver Weaves It All',
    description: 'Advanced blockchain wallet intelligence platform. Track whale movements, analyze cluster behavior, and secure your institutional assets with real-time on-chain data.',
    features: [
      { icon: Wallet, label: 'Wallet Clustering' },
      { icon: Bell, label: 'Custom Alerts' },
      { icon: TrendingUp, label: 'Activity Tracking' },
      { icon: Lock, label: 'Enterprise Security' },
    ],
    primaryCta: { label: 'Launch WalletWeaver', href: 'https://walletweaver.com' },
    secondaryCta: { label: 'Contact Team', href: 'mailto:contact@walletweaver.com' },
    accentColor: '#8b5cf6',
    gradientFrom: '#3b82f6',
    gradientTo: '#8b5cf6',
    cardBg: 'rgba(15, 15, 30, 0.85)',
    cardBorder: 'rgba(139, 92, 246, 0.25)',
  },
  {
    id: 'satyastack',
    label: 'SatyaStack',
    badge: 'DPDP Compliance',
    logoUrl: '/satyastack-logo.png',
    tagline: 'Prove Compliance',
    taglineHighlight: 'Without Revealing Data',
    description: "India's first Zero-Knowledge Compliance Infrastructure. Meet DPDP, FIU-IND, and RBI requirements with programmable privacy and cryptographic proofs.",
    features: [
      { icon: EyeOff, label: 'Zero PII Transmission' },
      { icon: Shield, label: 'ZK-Proof Engine' },
      { icon: FileCheck, label: 'Compliance Ready' },
      { icon: Eye, label: 'Audit Transparency' },
    ],
    primaryCta: { label: 'Explore SatyaStack', href: 'https://satyastack.com' },
    secondaryCta: { label: 'Contact Team', href: 'mailto:contact@satyastack.com' },
    accentColor: '#2563eb',
    gradientFrom: '#2563eb',
    gradientTo: '#22d3ee',
    cardBg: 'rgba(15, 23, 42, 0.85)',
    cardBorder: 'rgba(37, 99, 235, 0.25)',
  },
  {
    id: 'artistskonnect',
    label: 'ArtistsKonnect',
    badge: "India's #1 Artist Platform",
    logoUrl: '/artistskonnect-logo.png',
    tagline: 'Your art deserves more than a',
    taglineHighlight: 'WhatsApp forward.',
    description: 'We built the stage. You bring the magic. Contracts, payments, discovery — all sorted. Pan-India artist discovery with AI-powered talent matching.',
    features: [
      { icon: Users, label: 'Artist Discovery' },
      { icon: Calendar, label: 'Smart Booking' },
      { icon: CreditCard, label: 'Secure Payments' },
      { icon: Music, label: 'Creative Tools' },
    ],
    primaryCta: { label: 'Explore ArtistsKonnect', href: 'https://artistskonnect.com' },
    secondaryCta: { label: 'Contact Team', href: 'mailto:contact@artistskonnect.com' },
    accentColor: '#FF2D55',
    gradientFrom: '#FF2D55',
    gradientTo: '#5B2EFF',
    cardBg: 'rgba(30, 20, 35, 0.85)',
    cardBorder: 'rgba(255, 45, 85, 0.25)',
  },
];

/* ── Product Card Component ── */
function ProductCard({
  product,
  position,
  onClick,
}: {
  product: typeof products[0];
  position: 'left' | 'center' | 'right';
  onClick?: () => void;
}) {
  const isCenter = position === 'center';

  return (
    <motion.div
      className="product-carousel-card"
      data-position={position}
      onClick={!isCenter ? onClick : undefined}
      style={{
        background: product.cardBg,
        borderColor: isCenter ? product.cardBorder : 'rgba(255,255,255,0.08)',
        cursor: isCenter ? 'default' : 'pointer',
      }}
      layout
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Accent top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{ background: `linear-gradient(to right, ${product.gradientFrom}, ${product.gradientTo})` }}
      />

      {/* Header: icon + name + badge */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden bg-black/20"
          style={{ border: `1px solid ${product.accentColor}40` }}
        >
          <img
            src={product.logoUrl}
            alt={`${product.label} Logo`}
            className="w-6 h-6 object-contain"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white leading-tight">{product.label}</h3>
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: product.accentColor }}>
            {product.badge}
          </span>
        </div>
      </div>

      {/* Tagline */}
      <h4 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
        {product.tagline}{' '}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: `linear-gradient(to right, ${product.gradientFrom}, ${product.gradientTo})` }}
        >
          {product.taglineHighlight}
        </span>
      </h4>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed mb-6">{product.description}</p>

      {/* Feature icons row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {product.features.map((feat) => (
          <div key={feat.label} className="flex flex-col items-center gap-1.5 text-center">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: `${product.accentColor}15` }}
            >
              <feat.icon className="w-4 h-4" style={{ color: product.accentColor }} />
            </div>
            <span className="text-xs text-gray-400 font-medium leading-tight">{feat.label}</span>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-3">
        <a
          href={product.primaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group px-5 py-2.5 text-white text-sm font-semibold rounded-xl flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          style={{
            background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})`,
            boxShadow: `0 4px 15px ${product.accentColor}30`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {product.primaryCta.label}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
        <a
          href={product.secondaryCta.href}
          className="px-5 py-2.5 text-white text-sm font-semibold rounded-xl flex items-center gap-2 transition-all duration-300 hover:bg-white/10"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {product.secondaryCta.label}
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

/* ── Main Carousel ── */
export default function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < products.length) setActiveIndex(index);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => Math.min(prev + 1, products.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  // Touch/swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  // Derive positions
  const getPosition = (idx: number): 'left' | 'center' | 'right' | null => {
    if (idx === activeIndex) return 'center';
    if (idx === activeIndex - 1) return 'left';
    if (idx === activeIndex + 1) return 'right';
    // When at first item, show last as null; when at last, show first as null
    if (activeIndex === 0 && idx === products.length - 1) return null;
    if (activeIndex === products.length - 1 && idx === 0) return null;
    return null;
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#0a0a0f' }} ref={containerRef}>
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"
        style={{ background: `${products[activeIndex].accentColor}08` }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: `${products[activeIndex].gradientTo}06` }}
      />

      {/* Section header */}
      <motion.div
        className="relative z-10 text-center mb-12 md:mb-16 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-400 font-semibold">3 Products</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Our{' '}
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Products
          </span>
        </h2>
      </motion.div>

      {/* Carousel area */}
      <div
        className="relative z-10 product-carousel-track"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation arrows */}
        <button
          onClick={goPrev}
          disabled={activeIndex === 0}
          className={`carousel-nav-arrow carousel-nav-arrow--left ${activeIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
          aria-label="Previous product"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={goNext}
          disabled={activeIndex === products.length - 1}
          className={`carousel-nav-arrow carousel-nav-arrow--right ${activeIndex === products.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
          aria-label="Next product"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Cards container */}
        <div className="product-carousel-cards">
          {products.map((product, idx) => {
            const position = getPosition(idx);
            if (position === null) return null;
            return (
              <ProductCard
                key={product.id}
                product={product}
                position={position}
                onClick={() => goTo(idx)}
              />
            );
          })}
        </div>
      </div>

      {/* Dot indicators */}
      <motion.div
        className="relative z-10 flex justify-center gap-3 mt-10 md:mt-14"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {products.map((product, idx) => (
          <button
            key={product.id}
            onClick={() => goTo(idx)}
            aria-label={`Go to ${product.label}`}
            className={`carousel-dot ${idx === activeIndex ? 'carousel-dot--active' : ''}`}
            style={
              idx === activeIndex
                ? {
                  background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})`,
                  boxShadow: `0 0 12px ${product.accentColor}80, 0 0 24px ${product.accentColor}30`,
                }
                : undefined
            }
          />
        ))}
      </motion.div>
    </section>
  );
}
