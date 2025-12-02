import { motion } from 'motion/react';

export default function TypesOfProvidersSection() {
  const providerTypes = [
    {
      title: "OBGYN",
      description: "Board-certified women's health physicians"
    },
    {
      title: "Midwifes",
      description: "Holistic pregnancy and birth care providers"
    },
    {
      title: "Doulas", 
      description: "Birth and postpartum support companions"
    },
    {
      title: "Fertility Specialists",
      description: "Experts in reproductive health and family planning"
    },
    {
      title: "Hormone Specialists",
      description: "Balancing hormones naturally and medically"
    },
    {
      title: "Menopause Specialists",
      description: "Navigating perimenopause and beyond"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#F5ECD9]/20 via-white to-[#F2E9FF]/20 relative overflow-hidden">
      {/* Tech-inspired background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#73A1FF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FBBA9B] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-black/80 mb-4">
            Types of Providers We Work With
          </h2>
        </div>

        {/* Horizontal Provider Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providerTypes.map((provider, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white/80 backdrop-blur-sm p-8 border border-black/5 shadow-sm hover:shadow-xl hover:border-[#73A1FF]/30 transition-all duration-300 overflow-hidden">
                {/* Gradient accent on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#73A1FF] via-[#FBBA9B] to-[#F2E9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Tech-inspired corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#73A1FF]/20 rounded-tr-lg group-hover:border-[#73A1FF]/60 transition-colors duration-300"></div>
                
                {/* Index number */}
                <div className="absolute top-6 right-6 text-mono-small text-[#73A1FF]/30 group-hover:text-[#73A1FF]/60 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-subheader text-black/80 mb-4 group-hover:text-[#2F1464] transition-colors duration-300">
                    {provider.title}
                  </h3>
                  <p className="text-body-small text-black/60 leading-relaxed">
                    {provider.description}
                  </p>
                </div>

                {/* Bottom tech accent */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#73A1FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
