import { useState } from 'react';
import imgSelaLogo from "figma:asset/593e929702c07c3ea84e0d4292a6079407c7d021.png";

interface SharedHeaderProps {
  onNavigate?: (page: string) => void;
  onOpenAuth?: (mode: 'signin' | 'signup') => void;
  variant?: 'light' | 'dark';
}

export default function SharedHeader({ onNavigate, onOpenAuth, variant = 'dark' }: SharedHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-white/80' : 'text-[#2F1464]/80';
  const hoverColor = isDark ? 'hover:text-white' : 'hover:text-[#2F1464]';
  const buttonBorder = isDark ? 'border-white/30' : 'border-[#2F1464]/30';
  const buttonTextColor = isDark ? 'text-white' : 'text-[#2F1464]';
  const buttonBg = isDark ? 'hover:bg-white/10' : 'hover:bg-[#2F1464]/10';
  const mobileIconColor = isDark ? 'text-white' : 'text-[#2F1464]';

  return (
    <header className="absolute bg-transparent z-50 left-1/2 top-6 translate-x-[-50%] w-full max-w-[1344px] px-6">
      <div className="flex items-center justify-between">
        {/* Logo and Navigation Group */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => onNavigate?.('home')}
          >
            <div className="relative h-[29px] w-[66.625px]">
              <img 
                alt="Sela Logo" 
                className="h-full w-full object-contain" 
                src={imgSelaLogo} 
              />
            </div>
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onNavigate?.('community')}
              className={`${textColor} ${hoverColor} transition-colors bg-transparent border-none p-0 text-button-label cursor-pointer`}
            >
              Community
            </button>
            <button 
              onClick={() => onNavigate?.('providers')}
              className={`${textColor} ${hoverColor} transition-colors bg-transparent border-none p-0 text-button-label cursor-pointer`}
            >
              Providers
            </button>
          </nav>
        </div>
        
        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={() => onOpenAuth?.('signin')}
            className={`bg-transparent ${buttonTextColor} px-5 py-2.5 text-button-label ${buttonBg} transition-colors rounded-[var(--radius-sm)] cursor-pointer border-none outline-none`}
          >
            Sign In
          </button>
          <button 
            onClick={() => onOpenAuth?.('signup')}
            className="bg-[#73A1FF]/90 text-white px-5 py-2.5 text-button-label hover:bg-[#73A1FF] transition-colors rounded-[var(--radius-sm)] cursor-pointer border-none"
          >
            Join Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden ${mobileIconColor} p-2 bg-transparent border-none cursor-pointer`}
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
      </div>

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
                  onOpenAuth?.('signin');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-transparent text-[#2F1464] px-6 py-3 text-button-label hover:bg-[#2F1464]/10 transition-colors rounded-[var(--radius-sm)] cursor-pointer border border-[#2F1464]/30 text-center"
              >
                Sign In
              </button>
              <button 
                onClick={() => {
                  onOpenAuth?.('signup');
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
    </header>
  );
}
