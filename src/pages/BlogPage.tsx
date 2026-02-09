import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock blog data - would eventually come from a CMS or markdown files
const posts = [
    {
        id: 'cloud-native-architecture-2026',
        title: 'Complete Guide to Cloud-Native Architecture in 2026',
        excerpt: 'Explore the latest patterns in microservices, serverless, and container orchestration for enterprise scale.',
        date: 'February 10, 2026',
        author: 'Module8 Team',
        category: 'Cloud Architecture',
        slug: '/blog/cloud-native-architecture-2026'
    },
    {
        id: 'mlops-pipeline-guide',
        title: 'MLOps Pipeline: From Model to Production',
        excerpt: 'A comprehensive look at building robust machine learning pipelines that bridge the gap between data science and operations.',
        date: 'February 15, 2026',
        author: 'AI Engineering Team',
        category: 'AI / ML',
        slug: '/blog/mlops-pipeline-guide'
    },
    {
        id: 'web3-infrastructure-patterns',
        title: 'Web3 Infrastructure Patterns for Enterprise',
        excerpt: 'How to build scalable, secure, and interoperable blockchain applications for the modern enterprise.',
        date: 'February 20, 2026',
        author: 'Web3 Team',
        category: 'Blockchain',
        slug: '/blog/web3-infrastructure-patterns'
    }
];

export default function BlogPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Module8 Technical Blog | AI, Cloud & Web3 Insights</title>
                <meta name="description" content="Expert insights on cloud architecture, AI engineering, DevSecOps, and Web3 development. Technical guides and thought leadership from the Module8 team." />
                <link rel="canonical" href="https://module8.io/blog" />

                <meta property="og:title" content="Module8 Technical Blog" />
                <meta property="og:description" content="Expert insights on cloud architecture, AI engineering, DevSecOps, and Web3 development." />
                <meta property="og:url" content="https://module8.io/blog" />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="min-h-screen bg-black">
                {/* Header */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
                    <div className="absolute inset-0 grid-pattern opacity-30" />

                    <div className="relative max-w-7xl mx-auto px-6">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
                                <BookOpen className="w-4 h-4 text-purple-400" />
                                <span className="text-sm text-purple-400 font-semibold">Technical Blog</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                                Insights for the{' '}
                                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                    Modern Architect
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-2xl">
                                Deep dives into engineering challenges, architectural patterns, and the future of digital infrastructure.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-20 bg-black">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all h-full flex flex-col"
                                >
                                    <div className="p-8 flex flex-col h-full">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-semibold rounded-full border border-purple-500/20">
                                                {post.category}
                                            </span>
                                        </div>

                                        <Link to={post.slug} className="block group-hover:text-purple-400 transition-colors">
                                            <h2 className="text-xl font-bold text-white mb-3">
                                                {post.title}
                                            </h2>
                                        </Link>

                                        <p className="text-gray-400 mb-6 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between text-sm text-gray-500 border-t border-white/10 pt-6 mt-auto">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                {post.date}
                                            </div>
                                            <Link to={post.slug} className="flex items-center gap-2 group-hover:text-white transition-colors">
                                                Read More <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter / CTA */}
                <section className="py-20 bg-gradient-to-b from-black to-purple-950/10">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Subscribe to Our Engineering Newsletter
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Get the latest architectural patterns and tech insights delivered to your inbox using our RSS feed.
                        </p>
                        <div className="inline-flex gap-4">
                            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold text-white transition-all">
                                RSS Feed (Coming Soon)
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
