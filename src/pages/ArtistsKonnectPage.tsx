import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Music, Calendar, CreditCard, Star, Camera, Mic, Palette, Film, Sparkles, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

/* ── Brand colors from ArtistsKonnect source ── */
const C = {
    bg: '#FAF7F2',
    fg: '#1A1A2E',
    primary: '#FF2D55',
    secondary: '#5B2EFF',
    accent: '#00D4AA',
    highlight: '#FFB800',
    muted: '#6B6B7B',
};

const artistCategories = [
    { name: 'Musicians', icon: Music },
    { name: 'Photographers', icon: Camera },
    { name: 'Vocalists', icon: Mic },
    { name: 'Visual Artists', icon: Palette },
    { name: 'Filmmakers', icon: Film },
    { name: 'Performers', icon: Star },
    { name: 'DJs', icon: Music },
    { name: 'Dancers', icon: Star },
];

const features = [
    {
        title: 'Pan-India Discovery',
        description: 'AI-powered matching connects clients with the perfect artist across 50+ cities. Search by skill, genre, location, budget, and availability.',
        icon: Users,
        color: C.primary,
    },
    {
        title: 'Smart Booking System',
        description: 'Real-time availability, automated confirmations, calendar sync, reminders, and intelligent scheduling for recurring events.',
        icon: Calendar,
        color: C.secondary,
    },
    {
        title: 'Escrow-Backed Payments',
        description: 'Built-in payment escrow ensures artists get paid on time and clients get quality. Supports UPI, bank transfers, and digital wallets.',
        icon: CreditCard,
        color: C.accent,
    },
    {
        title: 'Creative Workspace',
        description: 'Portfolio builders, collaboration tools, in-app messaging, digital contracts, and revenue analytics — all in one platform.',
        icon: Music,
        color: C.highlight,
    }
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

/* ── Inline SVG components from ArtistsKonnect source ── */
function SplatterSVG({ color, className, size = 180, rotate = 0, opacity = 0.1 }: { color: string; className?: string; size?: number; rotate?: number; opacity?: number }) {
    return (
        <div className={`absolute pointer-events-none select-none ${className || ''}`} style={{ width: size, height: size, transform: `rotate(${rotate}deg)`, opacity }}>
            <svg viewBox="0 0 200 200" fill={color} className="w-full h-full">
                <path d="M100,20 C130,20 160,40 170,70 C180,100 170,140 140,160 C110,180 70,180 40,160 C10,140 0,100 10,70 C20,40 50,15 80,18 C85,18 95,20 100,20 Z" />
                <circle cx="170" cy="50" r="12" />
                <circle cx="30" cy="45" r="8" />
                <circle cx="155" cy="165" r="10" />
            </svg>
        </div>
    );
}

function BlobSVG({ color, className, size = 200, rotate = 0, opacity = 0.08 }: { color: string; className?: string; size?: number; rotate?: number; opacity?: number }) {
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

function StickerBadge({ children, color, rotate = -3 }: { children: React.ReactNode; color: string; rotate?: number }) {
    return (
        <span className="inline-block px-3 py-1 text-sm font-bold rounded-sm shadow-md transition-transform duration-200 hover:rotate-0 hover:scale-110 text-white"
            style={{ background: color, transform: `rotate(${rotate}deg)` }}>
            {children}
        </span>
    );
}

export default function ArtistsKonnectPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>ArtistsKonnect | India-Wide Artist Infrastructure & Collaboration Platform</title>
                <meta name="description" content="Pan-India artist discovery, smart booking, and escrow-backed payments. Connect with 5,000+ verified artists across 50+ cities. By Module8." />
                <meta name="keywords" content="ArtistsKonnect, artist platform, India artists, booking system, talent discovery, creative freelancers, escrow payments, Module8" />
                <link rel="canonical" href="https://module8.io/products/artistskonnect" />
                <meta property="og:title" content="ArtistsKonnect | India's Artist Infrastructure Platform" />
                <meta property="og:description" content="Pan-India artist discovery, smart booking, and escrow-backed payments. Connect with verified artists across India." />
                <meta property="og:url" content="https://module8.io/products/artistskonnect" />
                <meta property="og:type" content="product" />
            </Helmet>

            <div className="min-h-screen" style={{ background: C.bg }}>
                <style>{`
                    @keyframes akPageMarquee {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                `}</style>

                {/* Paint splash decorations */}
                <SplatterSVG color={C.primary} className="top-[8%] right-[5%]" size={200} rotate={20} opacity={0.06} />
                <BlobSVG color={C.secondary} className="top-[30%] left-[2%]" size={180} rotate={-15} opacity={0.05} />
                <SplatterSVG color={C.accent} className="top-[65%] right-[8%]" size={150} rotate={35} opacity={0.05} />

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <Link to="/" className="inline-flex items-center gap-2 transition-colors mb-8" style={{ color: C.muted }}>
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <div className="mb-6">
                                <StickerBadge color={C.highlight} rotate={-3}>
                                    <Sparkles size={14} className="inline mr-1" />
                                    ArtistsKonnect by Module8
                                </StickerBadge>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-[0.95] tracking-tight" style={{ color: C.fg }}>
                                Your art deserves{' '}
                                <span className="relative inline-block">
                                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${C.primary}, ${C.secondary}, ${C.accent})` }}>
                                        a real stage.
                                    </span>
                                    <BrushStrokeSVG color={C.primary} />
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl max-w-3xl mb-10" style={{ color: C.muted }}>
                                India-wide artist infrastructure and collaboration platform. Discovery, booking, payments, and growth tools — built for creators who mean business.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10">
                                <motion.a href="https://artistskonnect.com" target="_blank" rel="noopener noreferrer"
                                    className="px-8 py-4 rounded-xl font-bold text-white"
                                    style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`, boxShadow: `4px 4px 0px ${C.fg}` }}
                                    whileHover={{ y: -2, boxShadow: `6px 6px 0px ${C.fg}` }}
                                    whileTap={{ y: 0, boxShadow: `2px 2px 0px ${C.fg}` }}>
                                    Visit ArtistsKonnect
                                </motion.a>
                                <Link to="/#contact" className="px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1"
                                    style={{ background: 'white', border: `2px solid ${C.fg}`, color: C.fg, boxShadow: `3px 3px 0px ${C.accent}` }}>
                                    Partner With Us
                                </Link>
                            </div>

                            {/* Trust stats */}
                            <div className="flex flex-wrap gap-8">
                                {[{ num: '5,000+', label: 'Artists' }, { num: '50+', label: 'Cities' }, { num: '10,000+', label: 'Gigs Completed' }].map(s => (
                                    <div key={s.label}>
                                        <div className="text-2xl font-bold" style={{ color: C.fg }}>{s.num}</div>
                                        <div className="text-xs uppercase tracking-wider" style={{ color: C.muted }}>{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Category Marquee */}
                <section className="py-5 overflow-hidden" style={{ borderTop: `2px solid ${C.fg}10`, borderBottom: `2px solid ${C.fg}10` }}>
                    <div className="flex" style={{ width: 'max-content', animation: 'akPageMarquee 25s linear infinite' }}>
                        {[...artistCategories, ...artistCategories].map((cat, i) => (
                            <span key={`${cat.name}-${i}`} className="flex items-center gap-2 mx-6 text-lg md:text-xl font-bold" style={{ color: `${C.fg}80` }}>
                                <cat.icon size={18} style={{ color: C.primary }} />
                                {cat.name}
                                <span style={{ color: C.primary }} className="mx-2">/</span>
                            </span>
                        ))}
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.fg }}>Everything Artists Need</h2>
                            <p style={{ color: C.muted }}>One platform. Zero middlemen. Full creative control.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
                                    className="p-8 rounded-xl bg-white"
                                    style={{ border: `2px solid ${C.fg}`, boxShadow: `4px 4px 0px ${feature.color}` }}>
                                    <feature.icon className="w-10 h-10 mb-4" style={{ color: feature.color }} />
                                    <h3 className="text-xl font-bold mb-3" style={{ color: C.fg }}>{feature.title}</h3>
                                    <p style={{ color: C.muted }}>{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Vibe — problems vs solutions (from source TheVibe.tsx) */}
                <section className="py-20 relative">
                    <BlobSVG color={C.primary} className="top-0 right-[-50px]" size={300} opacity={0.04} rotate={45} />
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <p className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: C.primary }}>The real talk</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: C.fg }}>
                                The entertainment industry is{' '}
                                <span className="relative inline-block">
                                    broken
                                    <BrushStrokeSVG color={C.primary} />
                                </span>
                                . We're fixing it.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                            {/* Problems */}
                            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#FF4757' }}>the old way</p>
                                <div className="space-y-3">
                                    {problems.map((p) => (
                                        <div key={p} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: 'rgba(255,71,87,0.06)', border: '1px solid rgba(255,71,87,0.15)' }}>
                                            <X size={20} style={{ color: '#FF4757' }} className="mt-0.5 shrink-0" />
                                            <span style={{ color: `${C.fg}cc` }}>{p}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Solutions */}
                            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                                <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: C.accent }}>the AK way</p>
                                <div className="space-y-3">
                                    {solutions.map((s) => (
                                        <div key={s} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.2)' }}>
                                            <Check size={20} style={{ color: C.accent }} className="mt-0.5 shrink-0" />
                                            <span className="font-medium" style={{ color: C.fg }}>{s}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: C.fg }}>Who Uses ArtistsKonnect?</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: 'Independent Artists', desc: 'Build your portfolio, get discovered, and manage bookings professionally.', sticker: C.primary },
                                { title: 'Event Organizers', desc: 'Find and book verified talent for weddings, corporate events, and festivals.', sticker: C.secondary },
                                { title: 'Venues & Restaurants', desc: 'Regular live entertainment booking with calendar management.', sticker: C.accent },
                                { title: 'Brands & Agencies', desc: 'Source creative talent for campaigns, launches, and activations.', sticker: C.highlight },
                                { title: 'Wedding Planners', desc: 'Curated artist recommendations with end-to-end booking management.', sticker: C.primary },
                                { title: 'Content Creators', desc: 'Collaborate with fellow artists on projects and productions.', sticker: C.secondary },
                            ].map((uc, i) => (
                                <motion.div key={uc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                                    className="p-6 rounded-xl bg-white"
                                    style={{ border: `2px solid ${C.fg}`, boxShadow: `3px 3px 0px ${uc.sticker}` }}>
                                    <StickerBadge color={uc.sticker} rotate={i % 2 === 0 ? -2 : 2}>{uc.title}</StickerBadge>
                                    <p className="mt-4 text-sm" style={{ color: C.muted }}>{uc.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.fg }}>
                            Ready to get{' '}
                            <span className="relative inline-block">
                                <span style={{ color: C.primary }}>discovered?</span>
                                <BrushStrokeSVG color={C.primary} />
                            </span>
                        </h2>
                        <p className="mb-8" style={{ color: C.muted }}>
                            Join thousands of artists building real creative careers on ArtistsKonnect.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.a href="https://artistskonnect.com" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white"
                                style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`, boxShadow: `4px 4px 0px ${C.fg}` }}
                                whileHover={{ y: -2, boxShadow: `6px 6px 0px ${C.fg}` }}
                                whileTap={{ y: 0, boxShadow: `2px 2px 0px ${C.fg}` }}>
                                <Sparkles className="w-5 h-5" /> Join as Artist
                            </motion.a>
                            <Link to="/#contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1"
                                style={{ background: 'white', border: `2px solid ${C.fg}`, color: C.fg, boxShadow: `3px 3px 0px ${C.accent}` }}>
                                Hire Talent
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
