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
export default function BlogPost5({ onNavigate }: { onNavigate?: (page: string) => void }) {
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
            Reproductive Health
          </h1>
          
          <div className="h-1 bg-[#73A1FF] w-24 mb-8" />
          
          <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-xl text-black/70 leading-relaxed mb-8">
            Understanding your cycle and reproductive health at every life stage, from adolescence through menopause and beyond.
          </p>
          
          <div className="flex items-center gap-6 font-['IBM_Plex_Mono',_monospace] text-sm text-black/50 uppercase">
            <span>March 5, 2025</span>
            <span>•</span>
            <span>9 min read</span>
            <span>•</span>
            <span>Dr. Jennifer Lee</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="aspect-video relative overflow-hidden">
            <img 
              alt="Reproductive Health" 
              className="absolute inset-0 object-cover size-full" 
              src="https://images.unsplash.com/photo-1712647796215-0561c111390b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHJlcHJvZHVjdGl2ZSUyMGhlYWx0aCUyMGN5Y2xlfGVufDF8fHx8MTc1ODgyNTkxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-2xl text-black mb-6 uppercase">
              Your Body, Your Cycle, Your Health
            </h2>
            
            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Reproductive health encompasses much more than fertility—it's about understanding your body's natural rhythms, recognizing what's normal for you, and having access to comprehensive care throughout every stage of life. This knowledge empowers women to make informed decisions about their health and well-being.
            </p>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Despite reproductive health being fundamental to women's overall wellness, many women lack comprehensive education about their bodies and cycles. This gap in knowledge can lead to delayed diagnoses, untreated conditions, and missed opportunities for preventive care.
            </p>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Understanding Your Menstrual Cycle
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              The menstrual cycle is more than just your period—it's a complex interplay of hormones that affects your entire body. Understanding these phases helps you recognize patterns, identify irregularities, and optimize your health throughout the month.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-[#F2E9FF] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Menstrual Phase (Days 1-5)</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">The shedding of the uterine lining. Hormone levels are at their lowest, which can affect energy and mood.</p>
              </div>
              
              <div className="border-l-4 border-[#FBBA9B] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Follicular Phase (Days 1-13)</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Rising estrogen levels prepare the body for potential pregnancy. Energy and mood often improve during this phase.</p>
              </div>
              
              <div className="border-l-4 border-[#F5ECD9] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Ovulation (Around Day 14)</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">The release of an egg from the ovary. Some women experience ovulation pain or changes in cervical mucus.</p>
              </div>
              
              <div className="border-l-4 border-[#73A1FF] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Luteal Phase (Days 15-28)</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Progesterone levels rise. PMS symptoms may occur as hormone levels fluctuate before the next cycle.</p>
              </div>
            </div>

            <div className="bg-[#F2E9FF] p-8 mb-8">
              <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-4 uppercase">Cycle Tracking Benefits</h4>
              <ul className="space-y-3 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Identify patterns in mood, energy, and physical symptoms</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Detect irregularities that may indicate health concerns</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Support family planning goals, whether preventing or trying to conceive</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Provide valuable information for healthcare providers</span>
                </li>
              </ul>
            </div>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Common Reproductive Health Concerns
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Many reproductive health conditions are common but often go undiagnosed or untreated. Early recognition and appropriate care can prevent complications and improve quality of life significantly.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-3 uppercase">Irregular Periods</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Can indicate hormonal imbalances, PCOS, thyroid issues, or other conditions. Track patterns and discuss with your provider.</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-3 uppercase">Painful Periods</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Severe pain isn't normal and may indicate endometriosis, fibroids, or other conditions that benefit from treatment.</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-3 uppercase">PCOS (Polycystic Ovary Syndrome)</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Affects up to 10% of women of reproductive age. Early diagnosis and management can prevent long-term complications.</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-3 uppercase">Endometriosis</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Often misdiagnosed or dismissed. Persistent pelvic pain, especially during periods, warrants evaluation.</p>
              </div>
            </div>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Contraception & Family Planning
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Reproductive health includes having access to comprehensive family planning resources, whether you're looking to prevent pregnancy, plan for pregnancy, or address fertility concerns. The key is finding the right approach for your individual circumstances and health needs.
            </p>

            <div className="bg-[#FBBA9B]/20 p-8 mb-8">
              <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-4 uppercase">Contraceptive Options</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80 mb-4">
                Modern contraception offers many options with different benefits and considerations:
              </p>
              <ul className="space-y-3 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Hormonal methods:</strong> Birth control pills, patches, rings, implants, IUDs</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Non-hormonal methods:</strong> Copper IUD, barrier methods, fertility awareness</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Permanent methods:</strong> Tubal ligation or other sterilization procedures</span>
                </li>
              </ul>
            </div>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Preventive Care & Screening
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Regular reproductive health screening is essential for early detection and prevention of serious conditions. These screenings become more important with age and should be tailored to individual risk factors and family history.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong className="font-['IBM_Plex_Mono',_monospace] text-black uppercase">Pap Smears:</strong>
                  <span className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80"> Screen for cervical cancer, typically every 3 years starting at age 21</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong className="font-['IBM_Plex_Mono',_monospace] text-black uppercase">HPV Testing:</strong>
                  <span className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80"> Often combined with Pap smears to screen for high-risk HPV types</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong className="font-['IBM_Plex_Mono',_monospace] text-black uppercase">STI Screening:</strong>
                  <span className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80"> Regular testing based on age, sexual activity, and risk factors</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong className="font-['IBM_Plex_Mono',_monospace] text-black uppercase">Clinical Breast Exams:</strong>
                  <span className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80"> Annual examination by healthcare provider, plus regular self-exams</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F5ECD9]/60 border-l-4 border-[#F5ECD9] p-6 mb-8">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 italic">
                "Understanding your reproductive health isn't just about reproduction—it's about understanding your body, your hormones, and how they affect your overall health and well-being throughout your life."
              </p>
            </div>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed">
              Remember, reproductive health is personal and individual. What's normal for one woman may not be normal for another. Trust your instincts, track your patterns, and work with healthcare providers who listen to your concerns and respect your experiences. Your reproductive health is an integral part of your overall wellness journey.
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
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-3')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#73A1FF] text-xs bg-[#73A1FF]/10 px-2 py-1 uppercase">Blog</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Pregnancy & Motherhood</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Supporting women through every stage of pregnancy and early motherhood.</p>
            </div>
            
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-4')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#2F1464] text-xs bg-[#2F1464]/10 px-2 py-1 uppercase">Press</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Menopause & Beyond</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Navigating menopause with confidence and comprehensive care support.</p>
            </div>
            
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-2')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#2F1464] text-xs bg-[#2F1464]/10 px-2 py-1 uppercase">Blog</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Mental Health & Wellness</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Understanding the connection between mental health and overall women's wellness.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}