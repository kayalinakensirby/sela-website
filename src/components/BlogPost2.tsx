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
export default function BlogPost2({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-white">
      <BlogHeader onNavigate={onNavigate} />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#2F1464]/10 to-[#2F1464]/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <span className="font-['IBM_Plex_Mono',_monospace] text-[#2F1464] text-sm bg-[#2F1464]/10 px-3 py-1 uppercase">
              Blog
            </span>
          </div>
          
          <h1 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-3xl md:text-5xl text-black mb-8 uppercase">
            Mental Health & Wellness
          </h1>
          
          <div className="h-1 bg-[#2F1464] w-24 mb-8" />
          
          <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-xl text-black/70 leading-relaxed mb-8">
            Understanding the connection between mental health and overall women's wellness, and why integrated care is essential for complete health.
          </p>
          
          <div className="flex items-center gap-6 font-['IBM_Plex_Mono',_monospace] text-sm text-black/50 uppercase">
            <span>March 12, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Lisa Martinez</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="aspect-video relative overflow-hidden">
            <img 
              alt="Mental Health & Wellness" 
              className="absolute inset-0 object-cover size-full" 
              src="https://images.unsplash.com/photo-1758273241090-b7d744465ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG1lbnRhbCUyMGhlYWx0aCUyMHRoZXJhcHl8ZW58MXx8fHwxNzU4ODI1OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-2xl text-black mb-6 uppercase">
              The Mind-Body Connection in Women's Health
            </h2>
            
            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Mental health and physical wellness are deeply interconnected, especially for women who experience unique hormonal fluctuations, life transitions, and societal pressures throughout their lives. Understanding this connection is crucial for comprehensive healthcare that addresses the whole person.
            </p>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Research consistently shows that women are twice as likely as men to experience depression and anxiety disorders. However, these statistics only tell part of the story. The intersection of biological factors, social expectations, and life experiences creates a complex landscape that requires nuanced, compassionate care approaches.
            </p>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Breaking Down Mental Health Stigma
            </h3>

            <div className="bg-[#F2E9FF] p-8 mb-8">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed">
                <strong>Normalize the Conversation:</strong> Mental health challenges are not a sign of weakness or failure. They're common human experiences that deserve the same attention and care as any physical health concern.
              </p>
            </div>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Creating safe spaces for women to discuss mental health openly is essential. This includes healthcare environments where providers actively listen, validate experiences, and offer culturally sensitive treatment options that respect each woman's unique background and circumstances.
            </p>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Hormones and Mental Wellness
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Hormonal changes throughout a woman's life—from menstrual cycles to pregnancy, postpartum, and menopause—can significantly impact mental health. Understanding these connections helps normalize experiences and guide appropriate treatment approaches.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-[#73A1FF] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Menstrual Cycle</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Fluctuating estrogen and progesterone can affect mood, energy, and cognitive function.</p>
              </div>
              
              <div className="border-l-4 border-[#FBBA9B] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Pregnancy & Postpartum</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Dramatic hormonal shifts can trigger anxiety, depression, and other mood changes.</p>
              </div>
              
              <div className="border-l-4 border-[#F5ECD9] pl-6">
                <h4 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg text-black mb-2 uppercase">Menopause</h4>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80">Declining estrogen levels can impact mood stability and emotional regulation.</p>
              </div>
            </div>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Practical Wellness Strategies
            </h3>

            <div className="bg-[#FBBA9B]/20 p-8 mb-8">
              <ul className="space-y-4 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Mindfulness Practices:</strong> Regular meditation, breathing exercises, or mindful movement</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Social Connection:</strong> Building and maintaining supportive relationships and community ties</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Professional Support:</strong> Working with mental health professionals who understand women's unique needs</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#2F1464] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Lifestyle Balance:</strong> Prioritizing sleep, nutrition, exercise, and stress management</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5ECD9]/60 border-l-4 border-[#F5ECD9] p-6 mb-8">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 italic">
                "Mental wellness isn't a destination—it's an ongoing journey of self-discovery, self-care, and building resilience for life's inevitable challenges."
              </p>
            </div>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed">
              Remember, seeking support for mental health is a sign of strength and self-awareness. Every woman deserves access to compassionate, comprehensive mental health care that honors her experiences and supports her journey toward wellness.
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
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-1')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#73A1FF] text-xs bg-[#73A1FF]/10 px-2 py-1 uppercase">Blog</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Modern Women's Healthcare</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Discover the latest in women's healthcare innovations and accessible treatment options.</p>
            </div>
            
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-4')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#2F1464] text-xs bg-[#2F1464]/10 px-2 py-1 uppercase">Press</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Menopause & Beyond</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Navigating menopause with confidence and comprehensive care support.</p>
            </div>
            
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-3')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#73A1FF] text-xs bg-[#73A1FF]/10 px-2 py-1 uppercase">Blog</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Pregnancy & Motherhood</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Supporting women through every stage of pregnancy and early motherhood.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}