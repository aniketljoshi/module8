import { Mail, MapPin, Send, Clock, Globe, Building2, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://module8.io/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        alert('Failed to send message. Please try again or email us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please email us at contact@module8.io');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses = `w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 
                        focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 
                        transition-all duration-300 hover:border-white/20`;

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating Orbs */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-6" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-semibold">Get In Touch</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your technology infrastructure? Our team is here to help
            architect your next breakthrough.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center p-12 glass-card">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center">
                    <Send className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    Send Another Message →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  >
                    <option value="" className="bg-black">Select a service</option>
                    <option value="ai" className="bg-black">AI Engineering</option>
                    <option value="cloud" className="bg-black">Cloud Architecture</option>
                    <option value="devsecops" className="bg-black">DevSecOps & SRE</option>
                    <option value="web3" className="bg-black">Web3 & Blockchain</option>
                    <option value="saas" className="bg-black">SaaS Development</option>
                    <option value="api" className="bg-black">API & Microservices</option>
                    <option value="security" className="bg-black">Security & Identity</option>
                    <option value="automation" className="bg-black">Automation Pipelines</option>
                    <option value="walletweaver" className="bg-black">WalletWeaver Integration</option>
                    <option value="other" className="bg-black">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us about your project, timeline, and goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl 
                           hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 
                           flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed
                           hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Contact Information Card */}
            <div className="p-8 glass-card hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <a href="mailto:contact@module8.io" className="text-white hover:text-purple-400 transition-colors font-medium">
                      contact@module8.io
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Headquarters</div>
                    <div className="text-white font-medium">Pune, Maharashtra, India</div>
                    <div className="text-gray-500 text-sm">ModuleEight Technologies Pvt. Ltd.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                    <Globe className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Global Presence</div>
                    <div className="text-white font-medium">Remote-First Engineering</div>
                    <div className="text-gray-500 text-sm">Serving clients worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="p-2 glass-card hover:border-purple-500/30 transition-all duration-300 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1437!2d73.7841049!3d18.622424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9ca1f07d69d%3A0x4e8a9284da10381!2sModule8%20(ModuleEight)%20Technologies%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1705800000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Module8 Office Location"
              />
            </div>

            {/* Business Hours */}
            <div className="p-8 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Business Hours (IST)</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white font-medium">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday & Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  <span className="text-green-400">●</span> 24/7 emergency response for enterprise clients
                </p>
              </div>
            </div>

            {/* Enterprise Card */}
            <div className="p-8 glass-card hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Enterprise Partnerships</h3>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Looking for long-term technology partnership or dedicated engineering teams?
                Let's discuss custom engagement models tailored to your needs.
              </p>
              <a href="mailto:enterprise@module8.io" className="text-purple-400 hover:text-purple-300 font-medium transition-colors inline-flex items-center gap-1">
                Contact Enterprise Sales →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
