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
export default function BlogPost4({ onNavigate }: { onNavigate?: (page: string) => void }) {
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
            Menopause & Beyond
          </h1>
          
          <div className="h-1 bg-[#2F1464] w-24 mb-8" />
          
          <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-xl text-black/70 leading-relaxed mb-8">
            Navigating menopause with confidence and comprehensive care support, understanding this natural transition as a new chapter in women's health.
          </p>
          
          <div className="flex items-center gap-6 font-['IBM_Plex_Mono',_monospace] text-sm text-black/50 uppercase">
            <span>March 8, 2025</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span>Dr. Patricia Davis</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="aspect-video relative overflow-hidden">
            <img 
              alt="Menopause & Beyond" 
              className="absolute inset-0 object-cover size-full" 
              src="https://images.unsplash.com/photo-1713865472921-25487ad6028f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5vcGF1c2UlMjB3b21lbiUyMGhlYWx0aCUyMG1hdHVyZXxlbnwxfHx8fDE3NTg4MjU5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-2xl text-black mb-6 uppercase">
              Understanding Menopause as a Natural Transition
            </h2>
            
            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Menopause marks a significant milestone in a woman's life—not an ending, but a transformation into a new phase of health and wellness. This natural biological process, typically occurring between ages 45-55, represents the conclusion of reproductive years and the beginning of a new chapter filled with possibilities.
            </p>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Despite being a universal experience for women, menopause is still surrounded by misconceptions and inadequate healthcare support. Modern medical understanding offers women more options than ever for managing symptoms and maintaining optimal health throughout this transition.
            </p>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              The Stages of Menopause
            </h3>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-[#F2E9FF] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Perimenopause</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">The transitional phase when hormones begin to fluctuate, typically lasting 4-8 years before menopause.</p>
              </div>
              
              <div className="border-l-4 border-[#FBBA9B] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Menopause</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Defined as 12 consecutive months without a menstrual period, marking the end of reproductive capability.</p>
              </div>
              
              <div className="border-l-4 border-[#F5ECD9] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Postmenopause</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">The years following menopause, when symptoms often stabilize and new health considerations emerge.</p>
              </div>
            </div>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Common Symptoms & Management
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Every woman's menopause experience is unique, but understanding common symptoms helps normalize the process and guides treatment decisions. Symptoms can vary in intensity and duration, and effective management strategies exist for each.
            </p>

            <div className="bg-[#F2E9FF] p-8 mb-8">
              <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-4 uppercase">Vasomotor Symptoms</h4>
              <ul className="space-y-3 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Hot Flashes:</strong> Sudden feelings of warmth, often accompanied by sweating</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Night Sweats:</strong> Hot flashes that occur during sleep, disrupting rest</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Management:</strong> Lifestyle changes, hormone therapy, non-hormonal medications</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FBBA9B]/20 p-8 mb-8">
              <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-4 uppercase">Other Common Symptoms</h4>
              <ul className="space-y-3 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Sleep disturbances and insomnia</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Mood changes, including anxiety and depression</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Vaginal dryness and changes in sexual function</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Changes in memory and cognitive function</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span>Joint aches and changes in body composition</span>
                </li>
              </ul>
            </div>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Treatment Options & Support
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Modern menopause care offers numerous evidence-based treatment options. The key is working with healthcare providers who understand menopause and can create personalized treatment plans based on individual symptoms, health history, and preferences.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-3 uppercase">Hormone Therapy (HT)</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Can be highly effective for managing symptoms. Discuss risks and benefits with your healthcare provider to determine if it's right for you.</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-3 uppercase">Non-Hormonal Medications</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Various FDA-approved options for women who cannot or prefer not to use hormone therapy.</p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-3 uppercase">Lifestyle Approaches</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Regular exercise, stress management, healthy diet, and adequate sleep can significantly impact symptom management and overall well-being.</p>
              </div>
            </div>

            <div className="bg-[#F5ECD9]/60 border-l-4 border-[#F5ECD9] p-6 mb-8">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 italic">
                "Menopause isn't something to 'get through'—it's a transition to embrace with the right support, information, and care tailored to your unique needs."
              </p>
            </div>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Long-term Health Considerations
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              The hormonal changes of menopause affect more than immediate symptoms. Postmenopausal women have increased risks for certain conditions, making preventive care especially important. Regular health screenings, bone density monitoring, cardiovascular health assessment, and lifestyle modifications can help maintain optimal health for decades to come.
            </p>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed">
              Remember that menopause represents freedom from many earlier health concerns while opening doors to new possibilities. With proper support and comprehensive care, this can be one of the most empowering phases of a woman's life.
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
            
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-1')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#73A1FF] text-xs bg-[#73A1FF]/10 px-2 py-1 uppercase">Blog</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Modern Women's Healthcare</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Discover the latest in women's healthcare innovations and accessible treatment options.</p>
            </div>
            
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-6')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#2F1464] text-xs bg-[#2F1464]/10 px-2 py-1 uppercase">Press</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Provider Partnerships</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Building a network of trusted healthcare providers for women everywhere.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}