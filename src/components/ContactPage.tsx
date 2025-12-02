import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Send, MessageCircle, CheckCircle } from 'lucide-react';
import SharedHeader from "./SharedHeader";
import SharedFooter from "./SharedFooter";
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgContactBackground from 'figma:asset/186a171053c7c1193c386d7646ce85496afbf26c.png';

// Contact Info Card
function ContactInfoCard({ 
  icon, 
  title, 
  children 
}: { 
  icon: React.ReactNode; 
  title: string; 
  children: React.ReactNode;
}) {
  return (
    <motion.div 
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="flex items-start gap-4">
        <div className="text-[#73A1FF] flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-body text-white mb-3">{title}</h3>
          <div className="text-body-small text-white/70 space-y-2">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Main Contact Content
function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Contact form:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="pt-20 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-h1 text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-body text-white/70 max-w-2xl mx-auto">
            Questions or feedback? We'd love to hear from you. Our team is here to help.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle size={28} className="text-[#73A1FF]" />
                <h2 className="text-h2 text-white">
                  Send us a message
                </h2>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle size={64} className="text-[#73A1FF] mx-auto mb-6" />
                  <h3 className="text-h3 text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-body text-white/70">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label className="text-body-small text-white/90 block">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/30 text-white placeholder-white/50 px-4 py-2.5 text-body focus:outline-none focus:border-[#73A1FF] focus:bg-white/10 transition-all rounded-[var(--radius-sm)]"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label className="text-body-small text-white/90 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/30 text-white placeholder-white/50 px-4 py-2.5 text-body focus:outline-none focus:border-[#73A1FF] focus:bg-white/10 transition-all rounded-[var(--radius-sm)]"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label className="text-body-small text-white/90 block">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/30 text-white placeholder-white/50 px-4 py-2.5 text-body focus:outline-none focus:border-[#73A1FF] focus:bg-white/10 transition-all rounded-[var(--radius-sm)]"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="text-body-small text-white/90 block">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="w-full bg-white/5 border border-white/30 text-white placeholder-white/50 px-4 py-2.5 text-body focus:outline-none focus:border-[#73A1FF] focus:bg-white/10 transition-all resize-none rounded-[var(--radius-sm)]"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#73A1FF] text-white px-8 py-3.5 text-button-label hover:bg-[#73A1FF]/90 transition-all duration-300 rounded-[var(--radius-sm)] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl outline-none"
                  >
                    <Send size={18} />
                    Send Message
                  </button>

                  <p className="text-mono-small text-white/50 text-center">
                    We typically respond within 24 hours
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="p-6 md:p-8">
            <h3 className="text-h2 text-white mb-4">
              Looking for immediate support?
            </h3>
            <p className="text-body text-white/70 mb-6 max-w-2xl mx-auto">
              Our AI companion is available 24/7 to answer your questions and provide guidance.
            </p>
            <button className="bg-[#2F1464] text-white px-8 py-3.5 text-button-label hover:bg-[#2F1464]/90 transition-all duration-300 rounded-[var(--radius-sm)] outline-none">
              Talk to Sela AI
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



// Main Contact Page Component
export default function ContactPage({ onNavigate, onOpenAuth }: { onNavigate?: (page: string) => void; onOpenAuth?: (mode: 'signin' | 'signup') => void }) {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          alt="Contact Background" 
          className="absolute inset-0 object-cover size-full" 
          src={imgContactBackground} 
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#F2E9FF]/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-[#73A1FF]/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FBBA9B]/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="relative z-10">
        <SharedHeader onNavigate={onNavigate} onOpenAuth={onOpenAuth} variant="dark" />
        <ContactContent />
        <SharedFooter onNavigate={onNavigate} onOpenAuth={onOpenAuth} />
      </div>
    </div>
  );
}
