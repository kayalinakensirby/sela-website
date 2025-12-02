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
export default function BlogPost6({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-white">
      <BlogHeader onNavigate={onNavigate} />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#2F1464]/10 to-[#2F1464]/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <span className="font-['IBM_Plex_Mono',_monospace] text-[#2F1464] text-sm bg-[#2F1464]/10 px-3 py-1 uppercase">
              Press
            </span>
          </div>
          
          <h1 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-3xl md:text-5xl text-black mb-8 uppercase">
            Provider Partnerships
          </h1>
          
          <div className="h-1 bg-[#2F1464] w-24 mb-8" />
          
          <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-xl text-black/70 leading-relaxed mb-8">
            Building a network of trusted healthcare providers for women everywhere, creating accessible, culturally competent care that meets women where they are.
          </p>
          
          <div className="flex items-center gap-6 font-['IBM_Plex_Mono',_monospace] text-sm text-black/50 uppercase">
            <span>March 1, 2025</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span>Sela Press Team</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="aspect-video relative overflow-hidden">
            <img 
              alt="Provider Partnerships" 
              className="absolute inset-0 object-cover size-full" 
              src="https://images.unsplash.com/photo-1656009178152-1e4402050560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhlYWx0aCUyMHByb3ZpZGVyJTIwZG9jdG9yfGVufDF8fHx8MTc1ODgyNTkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-2xl text-black mb-6 uppercase">
              Transforming Access to Women's Healthcare
            </h2>
            
            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Access to quality women's healthcare shouldn't depend on geography, insurance status, or socioeconomic background. Through strategic partnerships with healthcare providers across the country, we're building a network that prioritizes accessibility, cultural competency, and comprehensive care for women at every life stage.
            </p>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Our provider partnership program represents more than just a referral network—it's a carefully curated community of healthcare professionals who share our commitment to patient-centered, evidence-based care that honors each woman's unique experiences and needs.
            </p>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Our Partnership Criteria
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              We don't just partner with any healthcare provider. Our rigorous vetting process ensures that every provider in our network meets the highest standards for clinical expertise, patient care, and cultural competency.
            </p>

            <div className="bg-[#F2E9FF] p-8 mb-8">
              <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-4 uppercase">Provider Requirements</h4>
              <ul className="space-y-4 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Board Certification:</strong> All providers must maintain current board certification in their specialty</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Patient-Centered Care:</strong> Demonstrated commitment to listening to patients and involving them in care decisions</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Cultural Competency:</strong> Training and experience providing care to diverse populations</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Accessibility:</strong> Commitment to serving patients regardless of insurance status or ability to pay</span>
                </li>
              </ul>
            </div>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Specialties in Our Network
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Women's health encompasses many specialties and conditions. Our provider network includes specialists who can address the full spectrum of women's health needs throughout the lifespan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-3 uppercase">Primary Care</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Family medicine and internal medicine physicians with women's health expertise</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-3 uppercase">Gynecology</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Reproductive health, contraception, menopause care, and gynecologic conditions</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-3 uppercase">Obstetrics</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Preconception counseling, prenatal care, delivery, and postpartum support</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-3 uppercase">Mental Health</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Therapists and psychiatrists specializing in women's mental health</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-3 uppercase">Endocrinology</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Hormone disorders, PCOS, thyroid conditions, and diabetes management</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-3 uppercase">Reproductive Endocrinology</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Fertility specialists and reproductive health experts</p>
              </div>
            </div>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Geographic Accessibility
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Healthcare deserts—areas with limited access to healthcare providers—disproportionately affect women, particularly in rural and underserved communities. Our partnership strategy prioritizes expanding access in these critical areas.
            </p>

            <div className="bg-[#FBBA9B]/20 p-8 mb-8">
              <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-4 uppercase">Expansion Priorities</h4>
              <ul className="space-y-3 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Rural communities with limited OB/GYN access</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Urban areas with provider shortages</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Communities with high rates of maternal mortality</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Areas with significant disparities in health outcomes</span>
                </li>
              </ul>
            </div>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Supporting Our Provider Partners
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Partnership is a two-way relationship. We provide ongoing support to help our providers deliver the best possible care while maintaining sustainable practices that serve their communities long-term.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-[#73A1FF] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Professional Development</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Continuing education opportunities and access to the latest research and best practices</p>
              </div>
              
              <div className="border-l-4 border-[#FBBA9B] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Technology Integration</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Tools and platforms that enhance patient care and streamline practice operations</p>
              </div>
              
              <div className="border-l-4 border-[#F5ECD9] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Community Resources</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Connections to local organizations and resources that support patient care beyond the clinical setting</p>
              </div>
            </div>

            <div className="bg-[#F5ECD9]/60 border-l-4 border-[#F5ECD9] p-6 mb-8">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 italic">
                "By supporting our provider partners, we're not just building a network—we're strengthening the entire healthcare ecosystem that serves women and their families."
              </p>
            </div>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Measuring Impact & Success
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Our success is measured not just by the number of providers in our network, but by the real impact we're making on women's health outcomes and access to care. We track key metrics to ensure we're meeting our mission of accessible, quality care for all women.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-[#F2E9FF]/50">
                <div className="font-['IBM_Plex_Mono',_monospace] text-3xl text-[#2F1464] mb-2">500+</div>
                <div className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Providers in Network</div>
              </div>
              
              <div className="text-center p-6 bg-[#FBBA9B]/20">
                <div className="font-['IBM_Plex_Mono',_monospace] text-3xl text-[#2F1464] mb-2">200+</div>
                <div className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Cities Served</div>
              </div>
              
              <div className="text-center p-6 bg-[#F5ECD9]/60">
                <div className="font-['IBM_Plex_Mono',_monospace] text-3xl text-[#2F1464] mb-2">50K+</div>
                <div className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Women Connected to Care</div>
              </div>
            </div>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Join Our Provider Network
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              If you're a healthcare provider who shares our vision of accessible, comprehensive women's healthcare, we invite you to learn more about joining our network. Together, we can ensure that every woman has access to the quality care she deserves, regardless of where she lives or her circumstances.
            </p>

            <div className="bg-[#2F1464]/5 p-8 text-center">
              <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-4 uppercase">Ready to Partner With Us?</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80 mb-6">
                Learn more about our provider partnership program and application process.
              </p>
              <button 
                onClick={() => onNavigate?.('providers')}
                className="bg-[#2F1464] text-white px-8 py-3 font-['IBM_Plex_Mono',_monospace] hover:bg-[#2F1464]/90 transition-colors uppercase"
              >
                Become a Provider Partner
              </button>
            </div>
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
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-1')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#73A1FF] text-xs bg-[#73A1FF]/10 px-2 py-1 uppercase">Blog</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Modern Women's Healthcare</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Discover the latest in women's healthcare innovations and accessible treatment options.</p>
            </div>
            
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-2')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#2F1464] text-xs bg-[#2F1464]/10 px-2 py-1 uppercase">Blog</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Mental Health & Wellness</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Understanding the connection between mental health and overall women's wellness.</p>
            </div>
            
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-4')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#2F1464] text-xs bg-[#2F1464]/10 px-2 py-1 uppercase">Press</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Menopause & Beyond</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Navigating menopause with confidence and comprehensive care support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}