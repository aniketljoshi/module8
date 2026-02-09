import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, ArrowLeft, CheckCircle, Sparkles, Zap, Target, Cpu, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Large Language Model Integration',
    description: 'Seamless integration of GPT-4, Claude, Gemini, and open-source LLMs into your existing infrastructure with enterprise-grade security.',
    icon: MessageSquare
  },
  {
    title: 'Custom AI Model Training',
    description: 'Train and fine-tune models on your proprietary data. From computer vision to NLP, we build AI that understands your domain.',
    icon: Cpu
  },
  {
    title: 'MLOps Pipeline Architecture',
    description: 'End-to-end ML pipelines with automated training, validation, deployment, and monitoring. Built for scale and reliability.',
    icon: Target
  },
  {
    title: 'Intelligent Automation',
    description: 'AI-powered workflows that automate complex business processes, reducing manual effort and increasing accuracy.',
    icon: Zap
  }
];

const useCases = [
  'Document processing & extraction',
  'Customer service automation',
  'Predictive analytics & forecasting',
  'Content generation & summarization',
  'Fraud detection & risk assessment',
  'Supply chain optimization'
];

export default function AIEngineeringPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Engineering Services | LLM Integration & MLOps | Module8 India</title>
        <meta name="description" content="Transform your business with enterprise AI solutions. Module8 provides LLM integration, custom ML model training, MLOps pipelines, and intelligent automation. Pune-based AI consultants." />
        <meta name="keywords" content="AI engineering, LLM integration, MLOps, machine learning, AI consulting India, Pune AI company, enterprise AI, Module8" />
        <link rel="canonical" href="https://module8.io/services/ai-engineering" />
        
        <meta property="og:title" content="AI Engineering Services | Module8" />
        <meta property="og:description" content="Enterprise AI solutions: LLM integration, MLOps pipelines, custom model training. Transform your operations with intelligent automation." />
        <meta property="og:url" content="https://module8.io/services/ai-engineering" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="AI Engineering Services | Module8" />
        <meta name="twitter:description" content="Enterprise AI solutions: LLM integration, MLOps pipelines, custom model training." />
      </Helmet>

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
                <Brain className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400 font-semibold">AI Engineering Services</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Operations with{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Intelligent AI Systems
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mb-8">
                From LLM integration to production-ready ML pipelines, we engineer AI solutions 
                that scale with your business. Enterprise-grade, secure, and built for real-world impact.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/#contact"
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold text-white transition-all"
                >
                  Start Your AI Journey
                </Link>
                <Link
                  to="/#portfolio"
                  className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Our AI Engineering Capabilities
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all"
                >
                  <feature.icon className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-b from-black to-purple-950/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  AI Solutions for Every Industry
                </h2>
                <p className="text-gray-400 mb-8">
                  Our AI engineering team has delivered solutions across fintech, healthcare, 
                  e-commerce, and enterprise software. We understand that every business is unique.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {useCases.map((useCase) => (
                    <div key={useCase} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <Sparkles className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Module8 for AI?</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold">→</span>
                    Production-focused: We build for deployment, not demos
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold">→</span>
                    Security-first: Enterprise-grade data protection
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold">→</span>
                    Cost-optimized: FinOps principles for ML infrastructure
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold">→</span>
                    Full lifecycle: From POC to production to maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Unlock the Power of AI?
            </h2>
            <p className="text-gray-400 mb-8">
              Schedule a consultation to discuss how AI can transform your business operations.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold text-white transition-all"
            >
              <Sparkles className="w-5 h-5" />
              Get Started
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
