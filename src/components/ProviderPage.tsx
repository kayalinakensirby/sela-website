import imgScreenshot20250911At1107271 from "figma:asset/722ba57c46a3e59b3e750dc8239c93e6d59ce0b6.png";
import imgRectangle6 from "figma:asset/34b4a668a0ba2912c4ce7ff815659c5cc9b60053.png";
import imgExclude from "figma:asset/b1f95d7de1aebdbfe2ca172ad19413453d46fa67.png";
import imgExclude1 from "figma:asset/bcdf4511bf05da590338b8f83f6d22499eea490b.png";
import imgExclude2 from "figma:asset/781c02a8a6edb14bb850d18fe62d181284d5bb96.png";
import imgRectangle2 from "figma:asset/e40c34c65fdb07b0149bc63ec4c874fb18ff61fc.png";
import imgRectangle3 from "figma:asset/5b93901f65e8bae0f3dbf1f4bce5786bd5706ce9.png";
import imgRectangle4 from "figma:asset/e8b6eb12632c09da9654dc7cc36c1da92897ed63.png";

// Header Component
function ProviderHeader({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <header className="absolute bg-transparent z-50 left-1/2 top-6 translate-x-[-50%] w-full max-w-[1344px] px-6">
      <div className="flex items-center justify-between">
        {/* Logo - Same as landing page */}
        <div className="flex items-center gap-3 h-12 cursor-pointer" onClick={() => onNavigate?.('home')}>
          <div className="relative size-[32px]">
            <img alt="Sela Logo" className="absolute inset-0 object-cover size-full" src={imgScreenshot20250911At1107271} />
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white/80 text-sm">
          <button 
            onClick={() => onNavigate?.('signin')}
            className="hover:text-white transition-colors bg-transparent border-none p-0 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white/80 text-sm cursor-pointer uppercase"
          >
            My Sela
          </button>
          <button 
            onClick={() => onNavigate?.('community')}
            className="hover:text-white transition-colors bg-transparent border-none p-0 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white/80 text-sm cursor-pointer uppercase"
          >
            Community
          </button>
          <button 
            onClick={() => onNavigate?.('providers')}
            className="hover:text-white transition-colors bg-transparent border-none p-0 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white/80 text-sm cursor-pointer uppercase"
          >
            Providers
          </button>
        </nav>
        
        {/* CTA Button */}
        <button 
          onClick={() => onNavigate?.('signup')}
          className="text-white/80 hover:text-white font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm transition-colors bg-transparent border-none p-0 cursor-pointer uppercase"
        >
          Join Free
        </button>
      </div>
    </header>
  );
}

// Hero Banner Section
function ProviderHeroBanner() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#FBBA9B]">
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-white text-4xl md:text-6xl mb-12 uppercase">
          JOIN SELA'S PROVIDER NETWORK
        </h1>
        
        <div className="space-y-6 max-w-lg mx-auto">
          <div>
            <input 
              type="email" 
              placeholder="Insert email" 
              className="w-full bg-transparent border-b-2 border-white text-white placeholder-white/70 px-1 py-4 font-['IBM_Plex_Mono',_monospace] text-lg focus:outline-none focus:border-white/90"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Specialty" 
              className="w-full bg-transparent border-b-2 border-white text-white placeholder-white/70 px-1 py-4 font-['IBM_Plex_Mono',_monospace] text-lg focus:outline-none focus:border-white/90"
            />
          </div>
          <div>
            <input 
              type="url" 
              placeholder="Insert website" 
              className="w-full bg-transparent border-b-2 border-white text-white placeholder-white/70 px-1 py-4 font-['IBM_Plex_Mono',_monospace] text-lg focus:outline-none focus:border-white/90"
            />
          </div>
          <button className="bg-[#73A1FF] text-white px-8 py-4 font-['IBM_Plex_Mono',_monospace] text-lg hover:bg-[#73A1FF]/90 transition-colors">
            Apply
          </button>
        </div>
      </div>
    </section>
  );
}

// Description Section (merged from "How It Works")
function ProviderDescription() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-xl text-black/60 leading-relaxed max-w-3xl mx-auto">
          <p>
            Simple, supportive onboarding. Share your specialty, philosophy, and availability. Women find you based on their needs and values.
          </p>
        </div>
      </div>
    </section>
  );
}

// Features Row Section
function ProviderFeatures() {
  const features = [
    {
      title: "Reach the right patients",
      description: "Get matched with women actively seeking your specialty.",
      bgColor: "#F2E9FF",
      butterfly: imgExclude
    },
    {
      title: "Streamlined booking", 
      description: "Simple request-to-book system, no complex integrations.",
      bgColor: "#FBBA9B",
      butterfly: imgExclude1
    },
    {
      title: "Grow your practice",
      description: "Expand your reach with women-first healthcare.",
      bgColor: "#F5ECD9", 
      butterfly: imgExclude2
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col w-full">
          {features.map((feature, index) => (
            <div key={index} className="relative h-[262px] w-full overflow-hidden">
              <img alt={feature.title} className="absolute inset-0 object-cover size-full" src={imgRectangle6} />
              <div className="absolute inset-0" style={{ backgroundColor: `${feature.bgColor}60` }} />
              <div className="absolute left-9 top-[71px] flex flex-col gap-4 max-w-[600px]">
                <h3 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white text-[32px] leading-6">
                  {feature.title}
                </h3>
                <div className="h-0.5 bg-white w-[227px]" />
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white/80 text-[21px] leading-8">
                  {feature.description}
                </p>
              </div>
              <div className="absolute right-[71px] top-[71px]">
                <img alt="Butterfly" className="w-[118px] h-[119px]" src={feature.butterfly} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function ProviderTestimonials() {
  const testimonials = [
    { 
      image: null, // Changed to solid background
      bgColor: "#F2E9FF",
      name: "Dr. Sarah Johnson",
      specialty: "Women's Health",
      quote: "Joining Sela has transformed my practice. I can focus on what I do best - caring for my patients."
    },
    { 
      image: imgRectangle6, 
      bgColor: "#F5ECD9",
      name: "Dr. Maria Rodriguez", 
      specialty: "Gynecology",
      quote: "The platform makes it easy to connect with women who truly value personalized healthcare."
    },
    { 
      image: null, // Changed to solid background
      bgColor: "#FBBA9B",
      name: "Dr. Emily Chen",
      specialty: "Reproductive Health", 
      quote: "Sela's community approach to women's health aligns perfectly with my practice philosophy."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative h-96 overflow-hidden">
              {/* Conditional rendering - image or solid background */}
              {testimonial.image ? (
                <>
                  <img alt="Testimonial" className="absolute inset-0 object-cover size-full" src={testimonial.image} />
                  <div className="absolute inset-0 bg-black/20" />
                </>
              ) : (
                <div className="absolute inset-0" style={{ backgroundColor: testimonial.bgColor }} />
              )}
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="p-6" style={{ backgroundColor: testimonial.image ? `${testimonial.bgColor}80` : `${testimonial.bgColor}CC` }}>
                  <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-white text-lg mb-2 uppercase">
                    TESTIMONIAL
                  </h3>
                  <div className="h-0.5 bg-white w-16 mb-4" />
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white/90 text-base leading-6 mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white text-sm">
                      {testimonial.name}
                    </p>
                    <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white/70 text-xs">
                      {testimonial.specialty}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Provider Footer
function ProviderFooter({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <footer className="bg-[#F5ECD9] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mb-4">About</h3>
            <div className="space-y-2 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/70">
              <p><a href="#" className="hover:text-black">Instagram</a></p>
              <p><a href="#" className="hover:text-black">LinkedIn</a></p>
              <p><a href="#" className="hover:text-black">FAQ</a></p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mb-4">Quick Links</h3>
            <div className="space-y-2 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/70">
              <p>
                <button 
                  onClick={() => onNavigate?.('signin')}
                  className="hover:text-black transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  Log In
                </button>
              </p>
              <p>
                <button 
                  onClick={() => onNavigate?.('signup')}
                  className="hover:text-black transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  Register
                </button>
              </p>
              <p>
                <button 
                  onClick={() => onNavigate?.('contact')}
                  className="hover:text-black transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  Contact Us
                </button>
              </p>
              <p><a href="#" className="hover:text-black">Become a Provider</a></p>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mb-4">Let's keep in Touch</h3>
            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/70 mb-4 text-sm">
              Sign up to hear about events, news and updates from Sela.
            </p>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Insert your email" 
                className="w-full border border-black/20 px-4 py-3 font-['IBM_Plex_Mono',_monospace] text-sm focus:outline-none focus:border-black/40"
              />
              <button className="w-full bg-[#73A1FF] text-white py-3 rounded font-['IBM_Plex_Mono',_monospace] text-sm hover:bg-[#73A1FF]/90 transition-colors">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-black/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-['IBM_Plex_Mono',_monospace] text-sm text-black/70">
            <button 
              onClick={() => onNavigate?.('privacy')}
              className="underline hover:text-black mr-8 bg-transparent border-none p-0 cursor-pointer"
            >
              Privacy Terms
            </button>
            <span>Sela© 2025 All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Provider Page Component
export default function ProviderPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-white">
      <ProviderHeader onNavigate={onNavigate} />
      <ProviderHeroBanner />
      <ProviderDescription />
      <ProviderFeatures />
      <ProviderTestimonials />
      <ProviderFooter onNavigate={onNavigate} />
    </div>
  );
}