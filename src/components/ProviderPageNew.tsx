import { useState } from 'react';
import { motion } from 'motion/react';
import imgProviderHero from "figma:asset/186a171053c7c1193c386d7646ce85496afbf26c.png";
import imgPartnerBackground from "figma:asset/c56ab9aa59cca389f03509616f3154296aa29304.png";
import imgFoundingBackground from "figma:asset/1ff7f2a1132eb27733190eaeb1bad93f3612ea21.png";
import SharedHeader from "./SharedHeader";
import SharedFooter from "./SharedFooter";



// Hero Section
function ProviderHero() {
  const scrollToApplySection = () => {
    const applySection = document.getElementById('apply-now');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <img alt="Hero Background" className="absolute inset-0 object-cover size-full" src={imgProviderHero} />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 text-center max-w-5xl px-6 py-24 mt-16">
        <motion.h1 
          className="text-h1 text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Providers Who Care for Women
        </motion.h1>
        
        <motion.p 
          className="text-body text-white/80 mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          You care for women. We care for you.
        </motion.p>

        {/* Apply Now Button with Arrow */}
        <motion.button 
          onClick={scrollToApplySection}
          className="group cursor-pointer bg-transparent border-none p-0 flex flex-col items-center gap-2 mx-auto"
          aria-label="Apply now"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-button-label text-white/60 group-hover:text-white/80 transition-colors">
            APPLY NOW
          </span>
          <div className="w-px h-14 bg-white/60 group-hover:h-20 group-hover:bg-white/80 transition-all duration-300"></div>
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white/60 group-hover:border-t-white/80 transition-colors"></div>
        </motion.button>
      </div>
    </section>
  );
}

// How We Partner Section
function HowWePartnerSection() {
  return (
    <section id="how-we-partner" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p 
          className="text-body text-black/60 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The future of women's healthcare is built with providers like you. Sela is your partner in building the practice you always envisioned—freeing you from the system's grind, connecting you with patients who value your expertise, and giving you the tools to thrive.
        </motion.p>
      </div>
    </section>
  );
}

// How We Partner Section - Cards
function WhyProvidersChooseSelaSection() {
  const cards = [
    {
      number: "01",
      title: "Reducing Administrative Burden",
      bullets: [
        "Tech-enabled scheduling and follow-up",
        "Patient education handled before appointments",
        "More time for meaningful clinical work"
      ]
    },
    {
      number: "02",
      title: "Connecting You with Aligned Patients",
      bullets: [
        "Patients who specifically seek your philosophy of care",
        "Reduced no-shows through better engagement",
        "Build your practice with women who value what you offer"
      ]
    },
    {
      number: "03",
      title: "Revenue Opportunities",
      bullets: [
        "AI-assisted patient triage",
        "Direct patient access through Sela platform",
        "Premium service opportunities"
      ]
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          alt="How We Partner Background" 
          className="absolute inset-0 object-cover size-full" 
          src={imgPartnerBackground} 
        />
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-black/[0.08]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-h2 text-white mb-2">
            How We Partner
          </h2>
          <p className="text-body text-white/60">
            Sela supports your practice by:
          </p>
        </motion.div>

        {/* Desktop: 3-Column Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              className="relative h-[340px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-transparent rounded-[var(--radius-lg)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Content Container */}
              <div className="relative h-full p-6 flex flex-col justify-between rounded-[var(--radius-lg)]">
                {/* Number Badge */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full border-2 border-[#FFFF8D] flex items-center justify-center bg-[#FFFF8D]/75">
                  <span className="text-mono-small text-[#73A1FF]">{card.number}</span>
                </div>

                {/* Bottom Content */}
                <div className="mt-auto space-y-6">
                  {/* Title Badge */}
                  <div className="inline-block border border-[#e7e3a4] rounded-full px-4 py-2">
                    <h3 className="text-subheader text-white capitalize">
                      {card.title}
                    </h3>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2">
                    {card.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3 text-body-small text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e7e3a4] mt-2 flex-shrink-0"></div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tablet: 2-Column Grid */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              className={`relative h-[340px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-transparent rounded-[var(--radius-lg)] ${index === 2 ? 'md:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative h-full p-6 flex flex-col justify-between rounded-[var(--radius-lg)]">
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full border-2 border-[#FFFF8D] flex items-center justify-center bg-[#FFFF8D]/75">
                  <span className="text-mono-small text-[#73A1FF]">{card.number}</span>
                </div>

                <div className="mt-auto space-y-6">
                  <div className="inline-block border border-[#e7e3a4] rounded-full px-4 py-2">
                    <h3 className="text-subheader text-white capitalize">
                      {card.title}
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {card.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3 text-body-small text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e7e3a4] mt-2 flex-shrink-0"></div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="block md:hidden -mx-6">
          <div className="flex gap-3 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pb-4">
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                className="relative min-w-[85vw] h-[340px] overflow-hidden shadow-lg snap-center flex-shrink-0 bg-transparent rounded-[var(--radius-lg)]"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative h-full p-5 flex flex-col justify-between rounded-[var(--radius-lg)]">
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full border-2 border-[#FFFF8D] flex items-center justify-center bg-[#FFFF8D]/75">
                    <span className="text-mono-small text-[#73A1FF]">{card.number}</span>
                  </div>

                  <div className="mt-auto space-y-4">
                    <div className="inline-block border border-[#e7e3a4] rounded-full px-4 py-2">
                      <h3 className="text-body text-white capitalize">
                        {card.title}
                      </h3>
                    </div>

                    <ul className="space-y-2">
                      {card.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-2 text-body-small text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#e7e3a4] mt-2 flex-shrink-0"></div>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Apply Now CTA Section
function ApplyNowSection() {
  const [formData, setFormData] = useState({
    email: '',
    specialty: '',
    website: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Provider application submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section id="apply-now" className="py-24 bg-gradient-to-br from-white via-[#F2E9FF]/10 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Benefits Overview */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <motion.h2 
                className="text-h2 text-black/80 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Join Sela's Provider Network
              </motion.h2>
              
              <motion.p 
                className="text-body text-black/60"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Build the practice you've always envisioned with our growing community of women's health providers.
              </motion.p>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#73A1FF]/10 flex items-center justify-center group-hover:bg-[#73A1FF]/20 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#73A1FF]"></div>
                </div>
                <div>
                  <h3 className="text-subheader text-[#2F1464] mb-1">Zero Upfront Costs</h3>
                  <p className="text-body-small text-black/60">
                    Free to join—you only pay a small fee when you receive patients through our platform
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FBBA9B]/10 flex items-center justify-center group-hover:bg-[#FBBA9B]/20 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#FBBA9B]"></div>
                </div>
                <div>
                  <h3 className="text-subheader text-[#2F1464] mb-1">Aligned Patient Matching</h3>
                  <p className="text-body-small text-black/60">
                    Connect with patients who specifically seek your philosophy of care and expertise
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F2E9FF]/30 border border-[#2F1464]/20 flex items-center justify-center group-hover:bg-[#F2E9FF]/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#2F1464]"></div>
                </div>
                <div>
                  <h3 className="text-subheader text-[#2F1464] mb-1">Streamlined Operations</h3>
                  <p className="text-body-small text-black/60">
                    Tech-enabled scheduling, patient education, and follow-up so you can focus on clinical care
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Trust indicator */}
            <motion.div
              className="pt-6 border-t border-black/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-mono-small text-black/50 italic">
                Join providers who are shaping the future of women's healthcare
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Application Form */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-sm border border-black/10 rounded-[var(--radius-lg)] p-8 lg:p-10 shadow-lg">
              <motion.h3 
                className="text-h3 text-black/80 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Apply Now
              </motion.h3>
              
              <motion.p 
                className="text-body-small text-black/60 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Start your journey with Sela today
              </motion.p>

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div>
                  <label className="text-body-small text-black/70 mb-2 block">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="provider@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border-b-2 border-black/20 text-black placeholder-black/40 px-1 py-3 text-body focus:outline-none focus:border-[#73A1FF] transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-body-small text-black/70 mb-2 block">Specialty</label>
                  <input 
                    type="text" 
                    placeholder="e.g., OBGYN, Midwife, Doula" 
                    value={formData.specialty}
                    onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                    className="w-full bg-white border-b-2 border-black/20 text-black placeholder-black/40 px-1 py-3 text-body focus:outline-none focus:border-[#73A1FF] transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-body-small text-black/70 mb-2 block">Website (Optional)</label>
                  <input 
                    type="url" 
                    placeholder="https://yourpractice.com" 
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    className="w-full bg-white border-b-2 border-black/20 text-black placeholder-black/40 px-1 py-3 text-body focus:outline-none focus:border-[#73A1FF] transition-colors"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#FFFF8D] text-black px-8 py-3.5 text-button-label hover:bg-[#FFFF8D]/90 transition-all duration-300 rounded-[var(--radius-sm)] mt-8 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  Submit Application
                </button>

                <p className="text-mono-small text-black/40 text-center mt-4">
                  We'll get back to you within 48 hours
                </p>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Founding Provider Section
function FoundingProviderSection() {
  const scrollToApply = () => {
    const applySection = document.getElementById('apply-now');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-32">
      <div className="absolute inset-0">
        <img 
          alt="Hollywood Hills landscape" 
          className="absolute inset-0 object-cover size-full" 
          src={imgFoundingBackground} 
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          className="text-h2 text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Become a Founding Provider
        </motion.h2>
        
        <motion.p 
          className="text-body text-white/80 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Become one of LA's first Sela providers — receive preferred launch placement & help shape the platform.
        </motion.p>

        <motion.button 
          onClick={scrollToApply}
          className="bg-[#73A1FF]/90 text-white px-8 py-3.5 text-button-label hover:bg-[#73A1FF] transition-colors rounded-[var(--radius-sm)] shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join the LA Founding Team
        </motion.button>
      </div>
    </section>
  );
}



// Main Provider Page Component
export default function ProviderPageNew({ onNavigate, onOpenAuth }: { onNavigate?: (page: string) => void; onOpenAuth?: (mode: 'signin' | 'signup') => void }) {
  return (
    <div className="min-h-screen bg-white">
      <SharedHeader onNavigate={onNavigate} onOpenAuth={onOpenAuth} variant="dark" />
      <ProviderHero />
      <HowWePartnerSection />
      <WhyProvidersChooseSelaSection />
      <ApplyNowSection />
      <FoundingProviderSection />
      <SharedFooter onOpenAuth={onOpenAuth} onNavigate={onNavigate} />
    </div>
  );
}
