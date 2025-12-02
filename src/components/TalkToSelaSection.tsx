import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function TalkToSelaSection() {
  const [activeMessage, setActiveMessage] = useState(0);

  const chatMessages = [
    { type: 'user', text: "I've been having irregular periods for 3 months. Should I be worried?" },
    { type: 'sela', text: "I understand your concern. Irregular periods can happen for many reasons. Let me help you understand what might be going on and when you should see a provider." },
    { type: 'user', text: "What could be causing this?" },
    { type: 'sela', text: "Common causes include stress, hormonal changes, thyroid issues, or PCOS. Based on your symptoms, I can help you create a plan and connect you with the right specialist." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % chatMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F1A2E] via-[#2F1464] to-[#E6E2DC]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#73A1FF]/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FBBA9B]/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            {/* Main Headline */}
            <div className="space-y-4">
              <h2 className="text-h1 text-white">
                Talk to Sela Anytime
              </h2>
              <h3 className="text-subheader text-[#F2E9FF]/90">
                Real Answers, When You Need Them
              </h3>
            </div>

            {/* Body Paragraph */}
            <p className="text-body text-white/80 leading-relaxed">
              Ask Sela anything about your body, mind, or health. Get evidence-based answers tailored to you — with the warmth of a doctor best friend.
            </p>

            {/* What Makes Sela Different */}
            <div className="space-y-4 pt-4">
              <p className="text-mono-small text-[#F2E9FF]/70 uppercase tracking-wider">
                What makes Sela different
              </p>
              
              <div className="space-y-3">
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#73A1FF] mt-2.5 flex-shrink-0" />
                  <p className="text-body-small text-white/70">
                    Reliable, cited information
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FBBA9B] mt-2.5 flex-shrink-0" />
                  <p className="text-body-small text-white/70">
                    24/7 support when Google isn't enough
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F2E9FF] mt-2.5 flex-shrink-0" />
                  <p className="text-body-small text-white/70">
                    AI that stays with you until you understand
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Chat Interface Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            {/* Glass-morphic Chat Container */}
            <div className="relative overflow-hidden backdrop-blur-2xl bg-white/5 border border-white/10 p-5 shadow-2xl rounded-[var(--radius-lg)]">
              {/* Gradient Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#73A1FF]/30 via-transparent to-[#FBBA9B]/30 opacity-70 bg-[rgba(194,194,194,0)] rounded-[var(--radius-lg)]" />
              
              {/* Chat Messages */}
              <div className="relative space-y-3 min-h-[280px]">
                {chatMessages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={
                      index <= activeMessage
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0.3, y: 20, scale: 0.95 }
                    }
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`
                        max-w-[85%] rounded-xl px-4 py-3 backdrop-blur-sm shadow-lg
                        ${
                          message.type === 'user'
                            ? 'bg-[#73A1FF]/20 border border-[#73A1FF]/30 text-white'
                            : 'bg-white/10 border border-white/20 text-white/90'
                        }
                      `}
                    >
                      <p className="text-body-small leading-relaxed text-[13px]">
                        {message.text}
                      </p>
                      
                      {/* Subtle glow effect */}
                      {index === activeMessage && (
                        <div
                          className={`
                            absolute inset-0 rounded-xl blur-xl opacity-30 -z-10
                            ${message.type === 'user' ? 'bg-[#73A1FF]' : 'bg-white'}
                          `}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeMessage < chatMessages.length - 1 ? 1 : 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 backdrop-blur-sm">
                    <div className="flex gap-1.5">
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-white/50"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-white/50"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-white/50"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Frosted Bottom Bar */}
              <div className="relative mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 backdrop-blur-sm">
                    <p className="text-body-small text-white/40 text-[13px]">
                      Ask Sela anything...
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#73A1FF]/30 border border-[#73A1FF]/50 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Accent Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#FBBA9B]/20 blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#73A1FF]/20 blur-2xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
