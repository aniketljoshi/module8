import { ArrowRight, ExternalLink, Users, Music, Calendar, CreditCard, Star, Camera, Mic, Palette, Film, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/* ── Brand colors from ArtistsKonnect source ── */
const COLORS = {
    bg: '#FAF7F2',
    fg: '#1A1A2E',
    primary: '#FF2D55',
    secondary: '#5B2EFF',
    accent: '#00D4AA',
    highlight: '#FFB800',
    muted: '#6B6B7B',
    splashPink: '#FF6B9D',
    splashOrange: '#FF8A5C',
    splashPurple: '#A855F7',
};

const coreFeatures = [
    'Pan-India artist discovery engine',
    'AI-powered talent matching',
    'Verified artist profiles & portfolios',
    'Real-time booking management',
    'Escrow-based secure payments',
    'Rating & review system',
    'Multi-language support'
];

const platformFeatures = [
    'Artist performance dashboard',
    'Booking calendar & scheduling',
    'Revenue analytics & insights',
    'In-app messaging & collaboration',
    'Digital contract management',
    'Invoice & payment tracking',
    'Event management tools'
];

const artistCategories = [
    { name: 'Musicians', icon: Music },
    { name: 'Photographers', icon: Camera },
    { name: 'Vocalists', icon: Mic },
    { name: 'Visual Artists', icon: Palette },
    { name: 'Filmmakers', icon: Film },
    { name: 'Performers', icon: Star },
    { name: 'DJs', icon: Music },
    { name: 'Dancers', icon: Star },
    { name: 'Actors', icon: Film },
    { name: 'Sound Engineers', icon: Mic },
];

const problems = [
    'Chasing payments through DMs',
    'No contracts, no protection',
    'Pay-to-play directories that ghost you',
    'Middlemen eating your earnings',
];

const solutions = [
    'Escrow-backed payments before you start',
    'Digital contracts on every booking',
    'Free discovery — zero listing fees',
    'Direct connections, transparent commission',
];

const phases = [
    {
        phase: 'Launch',
        status: 'Current',
        items: ['Artist discovery & profiles', 'Basic booking system', 'Secure payment escrow', 'Rating & reviews', 'Pune & Mumbai'],
    },
    {
        phase: 'Growth',
        status: 'Q1 2026',
        items: ['AI talent recommendations', 'Pan-India expansion', 'Collaboration workspace', 'Event management', 'Revenue analytics v2'],
    },
    {
        phase: 'Scale',
        status: 'Q2 2026',
        items: ['Enterprise events', 'Merch platform', 'Live streaming', 'International network', 'Premium subscriptions'],
    }
];

/* ── Inline SVG Paint Splashes ── */
function SplatterSVG({ color, className, size = 180, rotate = 0, opacity = 0.12 }: { color: string; className?: string; size?: number; rotate?: number; opacity?: number }) {
    return (
        <div className={`absolute pointer-events-none select-none ${className || ''}`} style={{ width: size, height: size, transform: `rotate(${rotate}deg)`, opacity }}>
            <svg viewBox="0 0 200 200" fill={color} className="w-full h-full">
                <path d="M100,20 C130,20 160,40 170,70 C180,100 170,140 140,160 C110,180 70,180 40,160 C10,140 0,100 10,70 C20,40 50,15 80,18 C85,18 95,20 100,20 Z" />
                <circle cx="170" cy="50" r="12" />
                <circle cx="30" cy="45" r="8" />
                <circle cx="155" cy="165" r="10" />
                <circle cx="45" cy="170" r="6" />
            </svg>
        </div>
    );
}

function BlobSVG({ color, className, size = 200, rotate = 0, opacity = 0.1 }: { color: string; className?: string; size?: number; rotate?: number; opacity?: number }) {
    return (
        <div className={`absolute pointer-events-none select-none ${className || ''}`} style={{ width: size, height: size, transform: `rotate(${rotate}deg)`, opacity }}>
            <svg viewBox="0 0 200 200" fill={color} className="w-full h-full">
                <path d="M44.5,-76.3C56.1,-69.1,62.8,-53.5,70.3,-38.8C77.8,-24.1,86.1,-10.2,85.8,3.2C85.5,16.5,76.5,29.3,66.1,39.8C55.7,50.4,43.8,58.7,30.8,64.2C17.8,69.7,3.6,72.5,-11.3,72.6C-26.2,72.7,-41.8,70.2,-52.2,62C-62.7,53.8,-68,39.9,-73.1,25.6C-78.2,11.3,-83.1,-3.3,-80.5,-16.7C-77.9,-30.1,-67.8,-42.3,-55.5,-49.3C-43.3,-56.3,-28.8,-58.1,-15.4,-62.3C-2,-66.5,10.2,-73.1,23.1,-75.5C36,-77.9,49.6,-76.1,44.5,-76.3Z" transform="translate(100 100)" />
            </svg>
        </div>
    );
}

function BrushStrokeSVG({ color }: { color: string }) {
    return (
        <svg viewBox="0 0 300 12" fill="none" className="absolute -bottom-2 left-0 w-full">
            <path d="M5,6 C30,2 60,10 90,5 C120,0 150,11 180,6 C210,1 240,9 270,5 C280,4 295,7 295,7"
                stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
        </svg>
    );
}

/* ── Sticker Badge ── */
function StickerBadge({ children, color, rotate = -3 }: { children: React.ReactNode; color: string; rotate?: number }) {
    return (
        <span
            className="inline-block px-3 py-1 text-sm font-bold rounded-sm shadow-md transition-transform duration-200 hover:rotate-0 hover:scale-110 text-white"
            style={{ background: color, transform: `rotate(${rotate}deg)` }}
        >
            {children}
        </span>
    );
}

export default function ArtistsKonnect() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-50px' });

    return (
        <section className="relative py-32 overflow-hidden" style={{ background: COLORS.bg }}>
            {/* Paint splash decorations */}
            <SplatterSVG color={COLORS.primary} className="top-[5%] right-[3%]" size={200} rotate={25} opacity={0.08} />
            <BlobSVG color={COLORS.secondary} className="bottom-[10%] left-[2%]" size={250} rotate={-20} opacity={0.06} />
            <SplatterSVG color={COLORS.accent} className="top-[50%] right-[10%]" size={160} rotate={45} opacity={0.07} />
            <BlobSVG color={COLORS.highlight} className="top-[20%] left-[5%]" size={140} rotate={15} opacity={0.06} />

            <style>{`
        @keyframes akMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes akFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
      `}</style>

            <div className="relative max-w-7xl mx-auto px-6 z-10" ref={containerRef}>
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Sticker badge — from source StickerBadge */}
                    <div className="mb-6">
                        <StickerBadge color={COLORS.highlight} rotate={-3}>
                            <Sparkles size={14} className="inline mr-1" />
                            India's #1 Artist Platform
                        </StickerBadge>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-[0.95] tracking-tight" style={{ color: COLORS.fg }}>
                        Your art deserves more than a{' '}
                        <span className="relative inline-block">
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary}, ${COLORS.accent})` }}>
                                WhatsApp forward.
                            </span>
                            <BrushStrokeSVG color={COLORS.primary} />
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: COLORS.muted }}>
                        We built the stage. You bring the magic. Contracts, payments, discovery — all sorted. Just <strong style={{ color: COLORS.primary }}>create.</strong>
                    </p>

                    {/* Dual CTAs — from source Hero */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <motion.a
                            href="https://artistskonnect.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2"
                            style={{
                                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                                boxShadow: `4px 4px 0px ${COLORS.fg}`,
                            }}
                            whileHover={{ y: -2, boxShadow: `6px 6px 0px ${COLORS.fg}` }}
                            whileTap={{ y: 0, boxShadow: `2px 2px 0px ${COLORS.fg}` }}
                        >
                            I'm an Artist
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            href="https://artistskonnect.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-8 py-4 font-bold rounded-xl transition-all duration-300 flex items-center gap-2"
                            style={{
                                background: 'transparent',
                                border: `2px solid ${COLORS.fg}`,
                                color: COLORS.fg,
                                boxShadow: `3px 3px 0px ${COLORS.secondary}`,
                            }}
                            whileHover={{ y: -2, boxShadow: `5px 5px 0px ${COLORS.secondary}` }}
                            whileTap={{ y: 0, boxShadow: `1px 1px 0px ${COLORS.secondary}` }}
                        >
                            I Need Talent
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12" style={{ color: COLORS.muted }}>
                        {[
                            { num: '5,000+', label: 'Artists' },
                            { num: '50+', label: 'Cities' },
                            { num: '10,000+', label: 'Gigs' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold" style={{ color: COLORS.fg }}>{stat.num}</div>
                                <div className="text-xs uppercase tracking-wider mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Marquee strip — from source MarqueeSection */}
                <div className="mb-20 overflow-hidden py-4" style={{ borderTop: `2px solid ${COLORS.fg}10`, borderBottom: `2px solid ${COLORS.fg}10` }}>
                    <div className="flex" style={{ width: 'max-content', animation: 'akMarquee 30s linear infinite' }}>
                        {[...artistCategories, ...artistCategories].map((cat, i) => (
                            <span key={`${cat.name}-${i}`} className="flex items-center gap-2 mx-6 md:mx-10 text-lg md:text-2xl font-bold" style={{ color: `${COLORS.fg}99` }}>
                                <cat.icon size={20} style={{ color: COLORS.primary }} />
                                {cat.name}
                                <span style={{ color: COLORS.primary }} className="mx-2">/</span>
                            </span>
                        ))}
                    </div>
                </div>

                {/* The Vibe — old way vs AK way (from source TheVibe.tsx) */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* The old way */}
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#FF4757' }}>✗ The old way</p>
                        <div className="space-y-3">
                            {problems.map((problem) => (
                                <div key={problem} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: 'rgba(255,71,87,0.06)', border: '1px solid rgba(255,71,87,0.15)' }}>
                                    <span style={{ color: '#FF4757' }} className="mt-0.5 font-bold">✗</span>
                                    <span style={{ color: `${COLORS.fg}cc` }}>{problem}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* The AK way */}
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: COLORS.accent }}>✓ The AK way</p>
                        <div className="space-y-3">
                            {solutions.map((solution) => (
                                <div key={solution} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.2)' }}>
                                    <span style={{ color: COLORS.accent }} className="mt-0.5 font-bold">✓</span>
                                    <span className="font-medium" style={{ color: COLORS.fg }}>{solution}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Feature cards — artistic shadow style from source */}
                <motion.div
                    className="grid md:grid-cols-2 gap-6 mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {[
                        { icon: Users, title: 'Artist Discovery', desc: 'AI-powered matching connects clients with the perfect artist. Verified profiles, portfolios, and real reviews.', color: COLORS.primary },
                        { icon: Calendar, title: 'Smart Booking', desc: 'Real-time availability, automated confirmations, calendar sync, and intelligent scheduling.', color: COLORS.secondary },
                        { icon: CreditCard, title: 'Secure Payments', desc: 'Built-in escrow ensures artists get paid and clients get quality. UPI, bank transfers, wallets.', color: COLORS.accent },
                        { icon: Music, title: 'Creative Tools', desc: 'Portfolio builders, collaboration workspace, digital contracts, and revenue analytics.', color: COLORS.highlight },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="p-6 rounded-xl transition-all duration-200 group bg-white"
                            style={{
                                border: `2px solid ${COLORS.fg}`,
                                boxShadow: `4px 4px 0px ${item.color}`,
                                borderRadius: '12px',
                            }}
                        >
                            <item.icon className="w-8 h-8 mb-3" style={{ color: item.color }} />
                            <h4 className="text-xl font-bold mb-2" style={{ color: COLORS.fg }}>{item.title}</h4>
                            <p className="text-sm" style={{ color: COLORS.muted }}>{item.desc}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Roadmap */}
                <motion.div
                    className="p-8 lg:p-12 rounded-2xl mb-16 bg-white"
                    style={{ border: `2px solid ${COLORS.fg}`, boxShadow: `6px 6px 0px ${COLORS.secondary}` }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h4 className="text-2xl font-bold mb-10 text-center" style={{ color: COLORS.fg }}>Product Roadmap</h4>

                    <div className="grid md:grid-cols-3 gap-8">
                        {phases.map((phase, idx) => (
                            <div key={phase.phase} className="text-center">
                                <StickerBadge color={idx === 0 ? COLORS.primary : idx === 1 ? COLORS.secondary : COLORS.accent} rotate={idx === 0 ? -2 : idx === 1 ? 1 : -1}>
                                    {phase.phase}
                                </StickerBadge>
                                <h5 className="text-lg font-bold mt-3 mb-4" style={{ color: COLORS.fg }}>{phase.status}</h5>
                                <ul className="text-sm space-y-2" style={{ color: COLORS.muted }}>
                                    {phase.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2 justify-center">
                                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.primary }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA — artistic shadow buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <motion.a
                        href="https://artistskonnect.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 text-white font-bold rounded-xl flex items-center justify-center gap-2"
                        style={{
                            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                            boxShadow: `4px 4px 0px ${COLORS.fg}`,
                        }}
                        whileHover={{ y: -2, boxShadow: `6px 6px 0px ${COLORS.fg}` }}
                        whileTap={{ y: 0, boxShadow: `2px 2px 0px ${COLORS.fg}` }}
                    >
                        <span>Explore ArtistsKonnect</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <motion.a
                        href="mailto:founders@artistskonnect.com"
                        className="group px-8 py-4 font-bold rounded-xl flex items-center justify-center gap-2"
                        style={{
                            background: 'white',
                            border: `2px solid ${COLORS.fg}`,
                            color: COLORS.fg,
                            boxShadow: `3px 3px 0px ${COLORS.primary}`,
                        }}
                        whileHover={{ y: -2, boxShadow: `5px 5px 0px ${COLORS.primary}` }}
                        whileTap={{ y: 0, boxShadow: `1px 1px 0px ${COLORS.primary}` }}
                    >
                        <span>Contact Team</span>
                        <ExternalLink className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
