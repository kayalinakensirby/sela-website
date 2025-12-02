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
export default function BlogPost1({ onNavigate }: { onNavigate?: (page: string) => void }) {
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
            Modern Women's Healthcare
          </h1>
          
          <div className="h-1 bg-[#73A1FF] w-24 mb-8" />
          
          <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-xl text-black/70 leading-relaxed mb-8">
            Discover the latest in women's healthcare innovations and accessible treatment options that are transforming how we approach wellness and medical care.
          </p>
          
          <div className="flex items-center gap-6 font-['IBM_Plex_Mono',_monospace] text-sm text-black/50 uppercase">
            <span>March 15, 2025</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <span>Dr. Sarah Chen</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="aspect-video relative overflow-hidden">
            <img 
              alt="Modern Women's Healthcare" 
              className="absolute inset-0 object-cover size-full" 
              src="https://images.unsplash.com/photo-1580130544326-80fc93876841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhlYWx0aCUyMHdlbGxuZXNzJTIwbW9kZXJufGVufDF8fHx8MTc1ODgxMDgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-2xl text-black mb-6 uppercase">
              The Evolution of Women's Healthcare
            </h2>
            
            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Modern women's healthcare is undergoing a revolutionary transformation. From telemedicine platforms to personalized treatment plans, technology is making quality healthcare more accessible than ever before. This shift represents not just technological advancement, but a fundamental reimagining of how we approach women's health across all life stages.
            </p>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              The traditional healthcare model often left women feeling unheard and underserved. Long wait times, limited specialist access, and one-size-fits-all approaches were common barriers. Today's innovative solutions prioritize personalized care, cultural competency, and comprehensive support systems that address the whole person, not just symptoms.
            </p>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              Key Innovations Transforming Care
            </h3>

            <div className="bg-[#F2E9FF] p-8 mb-8">
              <ul className="space-y-4 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>AI-Powered Health Assistants:</strong> 24/7 access to reliable health information and personalized recommendations</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Integrated Care Networks:</strong> Seamless connections between specialists, primary care, and mental health providers</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span><strong>Preventive Care Focus:</strong> Proactive wellness programs that identify issues before they become serious</span>
                </li>
              </ul>
            </div>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              These innovations are particularly important for addressing disparities in women's healthcare. By removing traditional barriers to access—whether geographic, financial, or cultural—modern healthcare platforms are creating opportunities for more equitable care delivery.
            </p>

            <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black mb-6 uppercase">
              The Future of Accessible Care
            </h3>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed mb-8">
              Looking ahead, the future of women's healthcare lies in truly personalized, accessible care that meets women where they are. This means not just technological solutions, but also cultural shifts toward more inclusive, empathetic healthcare experiences that honor each woman's unique journey and needs.
            </p>

            <div className="bg-[#FBBA9B]/20 border-l-4 border-[#FBBA9B] p-6 mb-8">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 italic">
                "The goal isn't just to treat illness, but to support women's overall wellness and empower them to take charge of their health journey with confidence and comprehensive support."
              </p>
            </div>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black/80 leading-relaxed">
              As we continue to innovate and evolve, the focus remains on creating healthcare solutions that are not just technologically advanced, but deeply human-centered, ensuring every woman has access to the care she deserves.
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
            
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-3')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#73A1FF] text-xs bg-[#73A1FF]/10 px-2 py-1 uppercase">Blog</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Pregnancy & Motherhood</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Supporting women through every stage of pregnancy and early motherhood.</p>
            </div>
            
            <div className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate?.('blog-5')}>
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#73A1FF] text-xs bg-[#73A1FF]/10 px-2 py-1 uppercase">Blog</span>
              <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mt-4 mb-2">Reproductive Health</h4>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-black/60">Understanding your cycle and reproductive health at every life stage.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}