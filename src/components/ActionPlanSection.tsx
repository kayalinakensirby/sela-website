import { motion } from 'motion/react';
import imgActionPlan from 'figma:asset/d0917de6246d836816db890211ef010dde3634e0.png';

export default function ActionPlanSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F2E9FF]/20 to-white" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Left Side - Visual Section */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Image Container with Gradient Overlay */}
            <motion.div 
              className="relative overflow-hidden shadow-xl"
              whileHover={{ shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Main Image */}
              <motion.div 
                className="relative h-[400px] lg:h-[480px]"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <img
                  src={imgActionPlan}
                  alt="Woman feeling empowered and hopeful"
                  className="absolute inset-0 object-cover size-full transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              </motion.div>

              {/* Glassmorphism Chat Overlay - Action Plan Preview */}
              <motion.div
                className="absolute bottom-8 left-8 right-8"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl"
                  animate={{
                    boxShadow: [
                      '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                      '0 25px 50px -12px rgba(115, 161, 255, 0.25)',
                      '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/20">
                    <div className="flex items-center gap-2">
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-[#73A1FF]"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <p className="text-mono-small text-white">
                        Your Action Plan
                      </p>
                    </div>
                    <motion.div 
                      className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-mono-small text-white/90">
                        Personalized
                      </p>
                    </motion.div>
                  </div>

                  {/* Plan Items */}
                  <div className="space-y-3">
                    <motion.div 
                      className="flex items-start gap-3 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    >
                      <motion.div 
                        className="w-5 h-5 rounded-full bg-[#73A1FF]/30 border border-[#73A1FF]/50 flex items-center justify-center flex-shrink-0 mt-0.5"
                        whileHover={{ scale: 1.2, backgroundColor: 'rgba(115, 161, 255, 0.5)' }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-white"
                          animate={{
                            scale: [1, 0.8, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                        />
                      </motion.div>
                      <div>
                        <p className="text-body-small text-white group-hover/item:text-white/90 transition-colors">
                          Track symptoms daily
                        </p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start gap-3 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    >
                      <motion.div 
                        className="w-5 h-5 rounded-full bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5"
                        whileHover={{ scale: 1.2, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-white/70" />
                      </motion.div>
                      <div>
                        <p className="text-body-small text-white/80 group-hover/item:text-white transition-colors">
                          Schedule follow-up in 2 weeks
                        </p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start gap-3 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    >
                      <motion.div 
                        className="w-5 h-5 rounded-full bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5"
                        whileHover={{ scale: 1.2, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-white/70" />
                      </motion.div>
                      <div>
                        <p className="text-body-small text-white/80 group-hover/item:text-white transition-colors">
                          Connect with specialist if needed
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Floating Accent Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#73A1FF]/20 blur-3xl pointer-events-none"
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.3, 0.5, 0.3],
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-[#FBBA9B]/20 blur-3xl pointer-events-none"
              animate={{ 
                scale: [1, 1.3, 1], 
                opacity: [0.3, 0.6, 0.3],
                x: [0, -15, 0],
                y: [0, 10, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 -right-12 w-24 h-24 rounded-full bg-[#F2E9FF]/30 blur-2xl pointer-events-none"
              animate={{ 
                scale: [1, 1.4, 1], 
                opacity: [0.2, 0.4, 0.2],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Headline */}
            <motion.h2 
              className="text-h1 text-[#1E1B2C]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              From Overwhelm to Empowerment
            </motion.h2>
            
            {/* Body Text */}
            <motion.p 
              className="text-body text-[#1E1B2C]/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We help you make sense of what's happening with personalized recommendations and step-by-step action plans designed for your body, your goals, and your stage of life.
            </motion.p>

            {/* Clear Guidance Section */}
            <motion.div 
              className="pt-4 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-mono-small text-[#2F1464]/70 uppercase tracking-wider">
                Clear guidance on:
              </p>
              
              {/* Bullet Points */}
              <div className="space-y-3">
                <motion.div 
                  className="flex items-start gap-3 group/bullet"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full bg-[#73A1FF] mt-2.5 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  <p className="text-body-small text-[#1E1B2C]/80 group-hover/bullet:text-[#1E1B2C] transition-colors">
                    What you can do at home vs. when to see a provider
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3 group/bullet"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full bg-[#FBBA9B] mt-2.5 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  <p className="text-body-small text-[#1E1B2C]/80 group-hover/bullet:text-[#1E1B2C] transition-colors">
                    How to escalate when something doesn't feel right
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3 group/bullet"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full bg-[#F2E9FF] mt-2.5 flex-shrink-0 border border-[#2F1464]/20"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  <p className="text-body-small text-[#1E1B2C]/80 group-hover/bullet:text-[#1E1B2C] transition-colors">
                    Complex decisions your provider might not explain fully
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Closing Statement */}
            <motion.p 
              className="text-body-small text-[#2F1464]/60 italic pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
            >
              No barriers. No cost. No more carrying the burden alone.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
