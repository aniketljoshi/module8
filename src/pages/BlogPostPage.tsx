import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogPostPage() {
    const { slug } = useParams();

    // In a real app, fetch post data based on slug
    const post = {
        title: 'Complete Guide to Cloud-Native Architecture in 2026',
        date: 'February 10, 2026',
        author: 'Module8 Team',
        category: 'Cloud Architecture',
        readTime: '8 min read',
        content: `
      <p class="mb-6">The landscape of cloud-native architecture is evolving rapidly. As we move into 2026, the focus has shifted from simple containerization to intelligent, autonomous orchestration systems.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4">The Rise of Autonomous Kubernetes</h2>
      <p class="mb-6">Kubernetes has become the operating system of the cloud, but managing it remains complex. New patterns in 2026 involve AI-driven scaling and self-healing clusters that require minimal human intervention.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4">Platform Engineering 2.0</h2>
      <p class="mb-6">Internal Developer Platforms (IDPs) are no longer a luxury but a necessity for enterprise scale. We're seeing a move towards standardized, secure-by-default templates that allow developers to ship code without worrying about infrastructure.</p>
      
      <blockquote class="border-l-4 border-purple-500 pl-4 py-2 my-8 bg-white/5 italic text-gray-300">
        "The future of cloud is invisible infrastructure. Developers should focus on business logic, not YAML configuration."
      </blockquote>
      
      <h2 class="text-2xl font-bold text-white mb-4">Security at the Edge</h2>
      <p class="mb-6">With the proliferation of edge computing, security models are shifting from perimeter-based to identity-based zero trust architectures that span from the core cloud to the farthest edge node.</p>
    `
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    return (
        <>
            <Helmet>
                <title>{post.title} | Module8 Blog</title>
                <meta name="description" content={`Read about ${post.title} on the Module8 engineering blog.`} />
                <meta property="og:title" content={post.title} />
                <meta property="og:type" content="article" />
            </Helmet>

            <div className="min-h-screen bg-black pt-24 pb-20">
                <article className="max-w-3xl mx-auto px-6">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <header className="mb-12">
                        <div className="flex gap-4 mb-6">
                            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-semibold rounded-full border border-purple-500/20">
                                {post.category}
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                        >
                            {post.title}
                        </motion.h1>

                        <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </div>
                        </div>
                    </header>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="prose prose-invert prose-lg max-w-none text-gray-300"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <hr className="border-white/10 my-12" />

                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <Tag className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-400 text-sm">Cloud, Architecture, Kubernetes</span>
                        </div>
                        <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                            <Share2 className="w-5 h-5" />
                            Share Article
                        </button>
                    </div>
                </article>
            </div>
        </>
    );
}
