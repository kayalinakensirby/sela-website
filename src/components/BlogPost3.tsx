import { useState } from 'react';
import imgScreenshot20250911At1107271 from "figma:asset/722ba57c46a3e59b3e750dc8239c93e6d59ce0b6.png";

// Header Component
function BlogHeader({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 h-12 cursor-pointer" onClick={() => onNavigate?.('home')}>
          <div className="relative h-[29px] w-auto">
            <img alt="Sela Logo" className="h-full w-auto object-contain" src={imgScreenshot20250911At1107271} />
          </div>
        </div>
        
        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-button-label text-black/80">
          <button 
            onClick={() => onNavigate?.('community')}
            className="hover:text-black transition-colors bg-transparent border-none p-0 text-button-label text-black/80 cursor-pointer"
          >
            Community
          </button>
          <button 
            onClick={() => onNavigate?.('providers')}
            className="hover:text-black transition-colors bg-transparent border-none p-0 text-button-label text-black/80 cursor-pointer"
          >
            Providers
          </button>
        </nav>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={() => onNavigate?.('home')}
            className="bg-transparent text-[#2F1464] px-5 py-2.5 text-button-label hover:bg-[#2F1464]/10 transition-colors rounded-[var(--radius-sm)] cursor-pointer border border-[#2F1464]/30"
          >
            Sign In
          </button>
          <button 
            onClick={() => onNavigate?.('home')}
            className="bg-[#73A1FF]/90 text-white px-5 py-2.5 text-button-label hover:bg-[#73A1FF] transition-colors rounded-[var(--radius-sm)] cursor-pointer border-none"
          >
            Join Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#2F1464] p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-lg rounded-[var(--radius-md)] shadow-lg p-6 mx-6">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => {
                  onNavigate?.('community');
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-button-label text-[#2F1464] hover:text-[#73A1FF] transition-colors bg-transparent border-none p-0 cursor-pointer"
              >
                Community
              </button>
              <button 
                onClick={() => {
                  onNavigate?.('providers');
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-button-label text-[#2F1464] hover:text-[#73A1FF] transition-colors bg-transparent border-none p-0 cursor-pointer"
              >
                Providers
              </button>
              <div className="flex flex-col gap-2 pt-2">
                <button 
                  onClick={() => {
                    onNavigate?.('home');
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-transparent text-[#2F1464] px-6 py-3 text-button-label hover:bg-[#2F1464]/10 transition-colors rounded-[var(--radius-sm)] cursor-pointer border border-[#2F1464]/30 text-center"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => {
                    onNavigate?.('home');
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-[#73A1FF]/90 text-white px-6 py-3 text-button-label hover:bg-[#73A1FF] transition-colors rounded-[var(--radius-sm)] cursor-pointer border-none text-center"
                >
                  Join Free
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Main Blog Post Component
export default function BlogPost3({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-white">
      <BlogHeader onNavigate={onNavigate} />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#73A1FF]/10 to-[#73A1FF]/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <span className="font-['IBM_Plex_Mono',_monospace] text-[#73A1FF] text-sm bg-[#73A1FF]/10 px-3 py-1 uppercase">
              Blog
            </span>
          </div>
          
          <h1 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-3xl md:text-5xl text-black mb-8 uppercase">
            Pregnancy & Motherhood
          </h1>
          
          <div className="h-1 bg-[#73A1FF] w-24 mb-8" />
          
          <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-xl text-black/70 leading-relaxed mb-8">
            Supporting women through every stage of pregnancy and early motherhood with comprehensive care, resources, and community support.
          </p>
          
          <div className="flex items-center gap-6 font-['IBM_Plex_Mono',_monospace] text-sm text-black/50 uppercase">
            <span>March 10, 2025</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>Dr. Rachel Green</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="aspect-video relative overflow-hidden">
            <img 
              alt="Pregnancy & Motherhood" 
              className="absolute inset-0 object-cover size-full" 
              src="https://images.unsplash.com/photo-1577563612200-a95560e2edec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVnbmFudCUyMHdvbWVuJTIwbW90aGVyaG9vZCUyMGNhcmV8ZW58MXx8fHwxNzU4ODI1OTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-2xl text-black mb-6 uppercase">
              The Journey into Motherhood
            </h2>
            
            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Pregnancy and the transition to motherhood represent one of life's most profound transformations. Each woman's journey is unique, filled with physical changes, emotional shifts, and the anticipation of welcoming new life. Comprehensive support during this time is essential for both maternal and infant health.
            </p>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Modern prenatal care goes beyond routine check-ups to encompass emotional support, education, and preparation for the realities of parenthood. This holistic approach recognizes that a healthy pregnancy involves not just physical wellness, but also mental and emotional preparation for the journey ahead.
            </p>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Prenatal Care Essentials
            </h3>

            <div className="bg-[#F2E9FF] p-8 mb-8">
              <ul className="space-y-4 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Regular Check-ups:</strong> Monitoring mother and baby's health throughout pregnancy</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Nutritional Guidance:</strong> Ensuring proper nutrition for healthy fetal development</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Mental Health Support:</strong> Addressing anxiety, depression, and emotional changes</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Birth Preparation:</strong> Education about labor, delivery, and postpartum care</span>
                </li>
              </ul>
            </div>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Postpartum Recovery & Adjustment
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              The postpartum period is often called the "fourth trimester," acknowledging that recovery and adjustment continue long after birth. This time requires patience, support, and understanding as new mothers navigate physical healing, hormonal changes, and the emotional reality of caring for a newborn.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-[#FBBA9B] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Physical Recovery</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Healing from childbirth takes time. Be patient with your body and follow healthcare provider guidance.</p>
              </div>
              
              <div className="border-l-4 border-[#F5ECD9] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Emotional Changes</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Postpartum mood changes are common. Seek support if you're experiencing persistent sadness or anxiety.</p>
              </div>
              
              <div className="border-l-4 border-[#F2E9FF] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Bonding & Attachment</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Bonding with your baby is a process that unfolds over time. Every mother-baby relationship is unique.</p>
              </div>
            </div>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Building Your Support Network
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              No one should navigate pregnancy and early motherhood alone. Building a strong support network—including healthcare providers, family, friends, and other mothers—creates a foundation for confident, informed parenting.
            </p>

            <div className="bg-[#FBBA9B]/20 p-8 mb-8">
              <ul className="space-y-4 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Healthcare Team:</strong> Build relationships with providers who respect your preferences and concerns</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Family & Friends:</strong> Accept help with practical tasks and emotional support</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Parent Communities:</strong> Connect with other parents for shared experiences and advice</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Professional Support:</strong> Consider lactation consultants, doulas, or mental health professionals</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5ECD9]/60 border-l-4 border-[#F5ECD9] p-6 mb-8">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 italic">
                "Motherhood doesn't come with a manual, but it does come with a village of support when you're willing to reach out and accept help."
              </p>
            </div>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Self-Care for New Mothers
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Self-care isn't selfish—it's essential. Taking care of yourself enables you to better care for your baby and family. This includes prioritizing rest when possible, nourishing your body, staying connected with your identity beyond motherhood, and asking for help when you need it.
            </p>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed">
              Remember that becoming a mother is a gradual process of growth and learning. Be patient with yourself as you navigate this incredible transformation, and know that support is always available when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-2xl text-black mb-8 uppercase">
            Related Articles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-2')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#2F1464] text-xs bg-[#2F1464]/10 px-2 py-1 uppercase">Blog</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Mental Health & Wellness</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Understanding the connection between mental health and overall women's wellness.</p>
            </div>
            
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-5')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#73A1FF] text-xs bg-[#73A1FF]/10 px-2 py-1 uppercase">Blog</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Reproductive Health</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Understanding your cycle and reproductive health at every life stage.</p>
            </div>
            
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-1')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#73A1FF] text-xs bg-[#73A1FF]/10 px-2 py-1 uppercase">Blog</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Modern Women's Healthcare</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Discover the latest in women's healthcare innovations and accessible treatment options.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}