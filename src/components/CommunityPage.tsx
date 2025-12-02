import imgScreenshot20250911At1107271 from "figma:asset/722ba57c46a3e59b3e750dc8239c93e6d59ce0b6.png";
import imgRectangle2 from "figma:asset/3cb7d244a82405134488c1a954c8ca60e7fdb64b.png";
import imgRectangle3 from "figma:asset/ff1f1771c07088519d7a680879dfa9b1dd418b4a.png";
import imgRectangle4 from "figma:asset/b06212fe620b12b80e0fb366d1183cd5e47003ba.png";
import imgRectangle5 from "figma:asset/646303927483c329210a49e9847e323bf9e12355.png";

// Header Component
function CommunityHeader({ onNavigate }: { onNavigate?: (page: string) => void }) {
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

// Hero Section with warm gradient background
function CommunityHero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image with Warm Gradient Overlay */}
      <div className="absolute inset-0">
        <img alt="Community Hero Background" className="absolute inset-0 object-cover size-full" src={imgRectangle5} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5ECD9]/80 via-[#D4B996]/60 to-[#B8956A]/70" />
      </div>
      
      <div className="relative z-10 text-center max-w-5xl px-6">
        {/* Main Headline - ALL CAPS */}
        <h1 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-12 uppercase">
          Stories, insights,<br />
          and voices from women's health
        </h1>
        
        {/* Email Input and CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
          <div className="flex-1 min-w-0 relative">
            <input 
              type="email" 
              placeholder="Insert email" 
              className="w-full bg-transparent border-b-2 border-white text-white placeholder-white/70 px-1 py-4 font-['IBM_Plex_Mono',_monospace] text-lg focus:outline-none focus:border-white/90"
            />
          </div>
          <button className="bg-[#2F1464] text-white px-8 py-4 font-['IBM_Plex_Mono',_monospace] text-lg hover:bg-[#2F1464]/90 transition-colors">
            Join Community
          </button>
        </div>
      </div>
    </section>
  );
}

// Subheader Section
function SubheaderSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-xl text-black/60 leading-relaxed">
          Real stories, expert insights, and shared wisdom. Explore articles, resources, and conversations designed to support you through every stage of womanhood. Learn, connect, and feel seen.
        </p>
      </div>
    </section>
  );
}

// Content Grid Section
function ContentGrid() {
  const contentItems = [
    {
      type: "Blog",
      image: imgRectangle2,
      overlay: "#73A1FF",
      text: "We connect you with the best care providers."
    },
    {
      type: "Blog", 
      image: imgRectangle3,
      overlay: "#73A1FF",
      text: "We connect you with the best care providers."
    },
    {
      type: "Press",
      image: imgRectangle4,
      overlay: "#2F1464", 
      text: "We connect you with the best care providers."
    },
    {
      type: "Press",
      image: imgRectangle2,
      overlay: "#2F1464",
      text: "We connect you with the best care providers."
    },
    {
      type: "Blog",
      image: imgRectangle3,
      overlay: "#73A1FF",
      text: "We connect you with the best care providers."
    },
    {
      type: "Press",
      image: imgRectangle4,
      overlay: "#2F1464",
      text: "We connect you with the best care providers."
    }
  ];

  const handleCardClick = (item: any, index: number) => {
    // Handle navigation to full blog/press post
    console.log(`Navigate to ${item.type} post ${index + 1}`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {contentItems.map((item, index) => (
            <div 
              key={index} 
              className="relative h-[644px] overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              onClick={() => handleCardClick(item, index)}
            >
              {/* Background Image */}
              <img 
                alt={item.type} 
                className="absolute inset-0 object-cover size-full transition-transform duration-500 group-hover:scale-110" 
                src={item.image} 
              />
              
              {/* Base Overlay */}
              <div className="absolute inset-0 bg-black/20" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div 
                  className="p-6 transition-all duration-300 group-hover:translate-y-[-8px] group-hover:shadow-2xl"
                  style={{ backgroundColor: `${item.overlay}65` }}
                >
                  {/* Category Label */}
                  <div className="inline-block mb-4">
                    <span className="font-['IBM_Plex_Mono',_monospace] text-white text-sm bg-black/30 px-3 py-1">
                      {item.type}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white text-[32px] leading-6 mb-4">
                    {item.type}
                  </h3>
                  
                  {/* Underline */}
                  <div className="h-0.5 bg-white w-[227px] mb-4" />
                  
                  {/* Description */}
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white/80 text-[21px] leading-8">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Call to Action Section
function ShareStoryCTA() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-3xl md:text-4xl text-black/80 mb-12">
          Want to share your story?
        </h2>
        
        <button className="bg-[#2F1464] text-white px-12 py-6 font-['IBM_Plex_Mono',_monospace] text-xl hover:bg-[#2F1464]/90 transition-colors">
          Contact Us
        </button>
      </div>
    </section>
  );
}

// Community Footer
function CommunityFooter({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <footer className="bg-[#F5ECD9] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mb-4">About</h3>
            <div className="space-y-2 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/70">
              <p><a href="#" className="hover:text-black transition-colors">Instagram</a></p>
              <p><a href="#" className="hover:text-black transition-colors">LinkedIn</a></p>
              <p><a href="#" className="hover:text-black transition-colors">FAQ</a></p>
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
              <p><a href="#" className="hover:text-black transition-colors">Become a Provider</a></p>
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
                className="w-full border border-black/20 px-4 py-3 font-['IBM_Plex_Mono',_monospace] text-sm focus:outline-none focus:border-black/40 rounded"
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

// Main Community Page Component
export default function CommunityPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-white">
      <CommunityHeader onNavigate={onNavigate} />
      <CommunityHero />
      <SubheaderSection />
      <ContentGrid />
      <ShareStoryCTA />
      <CommunityFooter onNavigate={onNavigate} />
    </div>
  );
}