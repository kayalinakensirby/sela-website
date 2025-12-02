import { motion } from 'motion/react';
import imgImageWithFallback from "figma:asset/aa414892451a43c009d71639f9bc5bdd2e871441.png";
import imgContainer from "figma:asset/c56ab9aa59cca389f03509616f3154296aa29304.png";

export default function ProviderMatchingSection() {
  const matchCriteria = [
    { label: "Provider philosophy and style of care", color: "#73A1FF", highlighted: true },
    { label: "Demographics and shared lived experience", color: "#FFFF8D", highlighted: false },
    { label: "C-section rates and outcomes data", color: "#FFFF8D", highlighted: false },
    { label: "Hospital affiliations and insurance", color: "#FFFF8D", highlighted: false }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white to-[#F5F5F5]">
      {/* Decorative floating element */}
      <motion.div
        className="absolute -left-12 bottom-20 w-48 h-48 rounded-full bg-[#FBBA9B]/20 blur-3xl opacity-40"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="space-y-6">
              <h2 className="text-h1 text-[#1e1b2c]">
                Find Providers Who Actually Get It
              </h2>
              
              <p className="text-body text-[#1e1b2c]/70 max-w-md">
                Sela matches you with healthcare professionals based on what matters most to you.
              </p>
            </div>

            {/* Match Criteria Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-black/20 rounded-[24px] p-6 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
              {/* Header with border */}
              <div className="pb-4 mb-4 border-b border-black/20">
                <p className="text-mono-small text-black uppercase">
                  Match by what traditional directories miss
                </p>
              </div>

              {/* Criteria List */}
              <div className="space-y-3">
                {matchCriteria.map((criteria, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {/* Indicator Dot with Ring */}
                    <div 
                      className="relative flex items-center justify-center w-5 h-5 flex-shrink-0"
                      style={{ 
                        backgroundColor: criteria.highlighted ? 'rgba(115,161,255,0.3)' : 'rgba(255,255,141,0.25)',
                        borderRadius: '50%',
                        border: `1px solid ${criteria.highlighted ? 'rgba(115,161,255,0.5)' : 'rgba(0,0,0,0.3)'}`
                      }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: criteria.color }}
                      />
                    </div>

                    {/* Label */}
                    <p className="text-body-small text-black flex-1">
                      {criteria.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image with Testimonial */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
              {/* Background Image */}
              <div className="relative aspect-[482/480]">
                <img 
                  src={imgImageWithFallback} 
                  alt="Provider matching illustration"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay Image */}
                <img 
                  src={imgContainer} 
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Testimonial Card */}
                <div className="absolute bottom-12 left-12 right-12 lg:left-15 lg:right-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[14px] p-4 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                    <p className="text-body-small text-white/90 leading-relaxed">
                      "I had to have a physician friend help me find better care. I was so sick and depressed, and the nurse kept gaslighting me. I wish Sela existed then." — Naomi, San Diego
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
