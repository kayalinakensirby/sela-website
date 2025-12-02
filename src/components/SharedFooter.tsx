import { Instagram, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import imgSelaLogo from "figma:asset/593e929702c07c3ea84e0d4292a6079407c7d021.png";

export default function SharedFooter({ 
  onNavigate, 
  onOpenAuth 
}: { 
  onNavigate?: (page: string) => void; 
  onOpenAuth?: (mode: 'signin' | 'signup') => void;
}) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter signup:', email);
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#F5ECD9]/50 to-[#F2E9FF]/20 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand & Social */}
          <div className="space-y-4">
            <h4 className="text-subheader text-black">
              About
            </h4>
            <button 
              onClick={() => onNavigate?.('home')}
              className="bg-transparent border-none p-0 cursor-pointer block"
            >
              <img 
                alt="Sela Logo" 
                className="h-[29px] w-[66.625px] object-contain brightness-0" 
                src={imgSelaLogo} 
              />
            </button>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-body-small text-black/70 hover:text-black transition-colors capitalize"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-body-small text-black/70 hover:text-black transition-colors capitalize"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-subheader text-black">
              Quick Links
            </h4>
            <div className="space-y-3 text-body-small text-black/70">
              {onOpenAuth && (
                <>
                  <button 
                    onClick={() => onOpenAuth('signin')}
                    className="block hover:text-black transition-colors text-left bg-transparent border-none p-0 cursor-pointer"
                  >
                    Log In
                  </button>
                  <button 
                    onClick={() => onOpenAuth('signup')}
                    className="block hover:text-black transition-colors text-left bg-transparent border-none p-0 cursor-pointer"
                  >
                    Sign Up
                  </button>
                </>
              )}
              {onNavigate && (
                <>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="block hover:text-black transition-colors text-left bg-transparent border-none p-0 cursor-pointer"
                  >
                    Contact Us
                  </button>
                  <button 
                    onClick={() => onNavigate('faq')}
                    className="block hover:text-black transition-colors text-left bg-transparent border-none p-0 cursor-pointer"
                  >
                    FAQ
                  </button>
                  <button 
                    onClick={() => onNavigate('providers')}
                    className="block hover:text-black transition-colors text-left bg-transparent border-none p-0 cursor-pointer"
                  >
                    Become A Provider
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-subheader text-black">
              Let's keep in Touch
            </h4>
            <p className="text-body-small text-black/70">
              Sign up to hear about events, news and updates from Sela.
            </p>
            
            {isSubscribed ? (
              <div className="flex items-center gap-2 text-body-small text-[#73A1FF]">
                <Send size={16} />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Insert your email"
                  required
                  className="w-full px-4 py-3 bg-white border border-black/20 text-body-small text-black placeholder-[rgba(10,10,10,0.5)] focus:outline-none focus:border-[#73A1FF] transition-all rounded-[var(--radius-sm)]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#73A1FF]/90 text-white px-6 py-3 text-button-label hover:bg-[#73A1FF] transition-all duration-300 rounded-[var(--radius-sm)]"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-mono-small text-black/70">
              {onNavigate && (
                <button 
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-black transition-colors bg-transparent border-none p-0 cursor-pointer underline decoration-solid"
                >
                  Privacy Terms
                </button>
              )}
              <span>Sela© 2025 All rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
