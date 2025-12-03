import image_593e929702c07c3ea84e0d4292a6079407c7d021 from 'figma:asset/593e929702c07c3ea84e0d4292a6079407c7d021.png';
import { useState, Suspense } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Award } from 'lucide-react';
import imgRectangle2 from "figma:asset/3cb7d244a82405134488c1a954c8ca60e7fdb64b.png";
import imgRectangle6 from "figma:asset/6b0b26a055b9e7f833849f360de1cc7e3eb12d5c.png";
import imgRectangle7 from "figma:asset/91ccaaf048ef9927f58ce87d55380950956037ad.png";
import imgRectangle8 from "figma:asset/7a208be52b4a48d89f8244cb40b3da294b24edf9.png";
import imgExclude from "figma:asset/b1f95d7de1aebdbfe2ca172ad19413453d46fa67.png";
import imgExclude1 from "figma:asset/bcdf4511bf05da590338b8f83f6d22499eea490b.png";
import imgExclude2 from "figma:asset/781c02a8a6edb14bb850d18fe62d181284d5bb96.png";
import imgRectangle12 from "figma:asset/810ce3bbea53b832d80bbd5fbf9d63b24bf0860d.png";
import imgRectangle10 from "figma:asset/8918d678c100e67b5a0c3fd50dcf72e018ad42b2.png";
import imgHeroNew from "figma:asset/0a80897977869a91b3c39d1857b18a09a898c8a4.png";
import heroVideo from "./assets/DTS_YEARNING__Joey_Bania_Clips_ID477.mp4";
import imgRectangle3 from "figma:asset/e40c34c65fdb07b0149bc63ec4c874fb18ff61fc.png";
import imgRectangle4 from "figma:asset/34b4a668a0ba2912c4ce7ff815659c5cc9b60053.png";
import imgRectangle5 from "figma:asset/5b93901f65e8bae0f3dbf1f4bce5786bd5706ce9.png";
import imgScreenshot20250911At1107271 from "figma:asset/722ba57c46a3e59b3e750dc8239c93e6d59ce0b6.png";
import imgImageBlog from "figma:asset/3cb7d244a82405134488c1a954c8ca60e7fdb64b.png";
import imgImageBlog1 from "figma:asset/ff1f1771c07088519d7a680879dfa9b1dd418b4a.png";
import imgImagePress from "figma:asset/b06212fe620b12b80e0fb366d1183cd5e47003ba.png";
import AIChatInterface from "./components/AIChatInterface";
import ProviderPage from "./components/ProviderPage";
import ProviderPageNew from "./components/ProviderPageNew";
import CommunityPage from "./components/CommunityPage";
import CommunityPageNew from "./components/CommunityPageNew";
import PrivacyTermsPage from "./components/PrivacyTermsPage";
import ContactPage from "./components/ContactPage";
import FAQPage from "./components/FAQPage";
import PlatformPage from "./components/PlatformPage";
import HealthProfilePage from "./components/HealthProfilePage";
import MyProvidersPage from "./components/MyProvidersPage";
import MyCarePlansPage from "./components/MyCarePlansPage";
import BlogPost1 from "./components/BlogPost1";
import BlogPost2 from "./components/BlogPost2";
import BlogPost3 from "./components/BlogPost3";
import BlogPost4 from "./components/BlogPost4";
import BlogPost5 from "./components/BlogPost5";
import BlogPost6 from "./components/BlogPost6";
import AuthModal from "./components/AuthModal";
import ErrorBoundary from "./components/ErrorBoundary";
import TalkToSelaSection from "./components/TalkToSelaSection";
import ActionPlanSection from "./components/ActionPlanSection";
import ProviderMatchingSection from "./components/ProviderMatchingSection";
import SharedHeader from "./components/SharedHeader";
import SharedFooter from "./components/SharedFooter";




// Hero Section
function HeroSection({ onOpenAuth }: { onOpenAuth: (mode: 'signin' | 'signup') => void }) {
  const providerTypes = [
    "OBGYN",
    "Midwives",
    "Doulas",
    "Fertility Specialists",
    "Hormone Specialists",
    "Menopause Specialists"
  ];

  const handleJoinWaitlist = () => {
    onOpenAuth('signup');
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover size-full"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        {/* Petal Mark Gradient Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            alt=""
            className="w-[431px] h-[430px] object-cover opacity-[0.12] pointer-events-none"
            src={imgScreenshot20250911At1107271}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between pl-12 pr-6 py-12 md:pl-24 md:pr-16 md:py-16 lg:pl-32 lg:pr-24 lg:py-20">
        {/* Hero Content */}
        <div className="max-w-4xl pt-20 md:pt-32">
          <motion.h1
            className="mb-12 text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight"
            style={{ fontFamily: "'FONTSPRING DEMO - Deca Serif New', serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Every woman deserves a<br />trusted guide for her health.
          </motion.h1>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={handleJoinWaitlist}
              className="rounded-full px-6 py-4 text-white hover:opacity-90 transition-opacity text-xs uppercase tracking-wider border-0"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                background: 'linear-gradient(135deg, #f2e9ff 0%, #73a1ff 100%)'
              }}
            >
              Join our Waitlist
            </button>
            <button
              onClick={scrollToHowItWorks}
              className="rounded-full border-2 border-white bg-transparent px-6 py-4 text-white hover:bg-white/10 transition-colors text-xs uppercase tracking-wider"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              How Sela Works
            </button>
          </motion.div>
        </div>

        {/* Bottom Content - Who we are section */}
        <motion.div
          className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12 mt-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p
              className="text-white text-sm md:text-base lg:text-lg leading-relaxed"
              style={{ fontFamily: "'Neue Haas Grotesk', sans-serif" }}
            >
              Who we are
            </p>
          </div>

          <div className="max-w-xl">
            <p
              className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed md:text-right"
              style={{ fontFamily: "'Neue Haas Grotesk', sans-serif" }}
            >
              Sela is your AI women's health companion — warm, judgment-free, and here to help you understand your body.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Rotating Provider Types Carousel */}
      <div className="relative z-10 pb-12 overflow-hidden">
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 animate-[rotate-providers_30s_linear_infinite]">
            {/* First set */}
            {providerTypes.map((provider, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 px-6 py-2.5 rounded-full border border-[#FFFF8D]/40 bg-white/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-body-small text-white/70 whitespace-nowrap">{provider}</span>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {providerTypes.map((provider, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 px-6 py-2.5 rounded-full border border-[#FFFF8D]/40 bg-white/5 backdrop-blur-sm"
              >
                <span className="text-body-small text-white/70 whitespace-nowrap">{provider}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Trust Badges Section
function TrustBadgesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-8">
            <div className="w-px h-12 bg-[#2F1464]/10" />
            <p className="text-body text-center text-black max-w-3xl">
              When doctors dismiss your concerns or appointments are months away, you need a partner who's always there—combining expert care with the empathy and support you deserve.
            </p>
            <div className="w-px h-12 bg-[#2F1464]/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}



// Community Section
function CommunitySection({ onOpenAuth }: { onOpenAuth?: (mode: 'signin' | 'signup') => void }) {
  return (
    <section id="community" className="relative py-16 overflow-hidden bg-gradient-to-br from-[#F2E9FF]/30 to-white">
      {/* Floating Accent Element */}
      <motion.div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#F2E9FF]/30 blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-h1 text-black mb-4">
            Join Our Community
          </h2>
          <p className="text-body text-black/80 mb-10 max-w-lg mx-auto">
            Connect with others who understand your journey
          </p>
          
          <button 
            onClick={() => onOpenAuth?.('signup')}
            className="bg-[#73A1FF]/90 text-white px-8 py-3.5 text-button-label hover:bg-[#73A1FF] transition-all duration-300 rounded-[var(--radius-sm)]"
          >
            Get Started Free
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// Blog Section
function BlogSection({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const blogs = [
    { 
      type: "Blog",
      title: "Modern Women's Healthcare", 
      image: imgImageBlog,
      badge: "Blog",
      badgeColor: "#73A1FF",
      text: "Discover the latest in women's healthcare innovations and accessible treatment options."
    },
    { 
      type: "Blog",
      title: "Modern Women's Healthcare", 
      image: imgImageBlog1,
      badge: "Blog",
      badgeColor: "#73A1FF",
      text: "Discover the latest in women's healthcare innovations and accessible treatment options."
    },
    { 
      type: "Press",
      title: "Modern Women's Healthcare", 
      image: imgImagePress,
      badge: "PRESS",
      badgeColor: "#2F1464",
      text: "Discover the latest in women's healthcare innovations and accessible treatment options."
    }
  ];

  const handleCardClick = (item: any, index: number) => {
    console.log(`Navigate to ${item.type} post: ${item.title}`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blogs.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative h-[527px] overflow-hidden group cursor-pointer"
              onClick={() => handleCardClick(item, index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Background Image */}
              <img 
                alt={item.title} 
                className="absolute inset-0 object-cover size-full transition-transform duration-700 group-hover:scale-105" 
                src={item.image} 
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20" />
              
              {/* Content Card */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl">
                  <div className="space-y-4">
                    <div className="space-y-4">
                      <span 
                        className="inline-block text-mono-small text-white px-3 py-1.5 rounded-[var(--radius-sm)] uppercase"
                        style={{ backgroundColor: item.badgeColor }}
                      >
                        {item.badge}
                      </span>
                      <h3 className="text-subheader text-white capitalize">
                        {item.title}
                      </h3>
                    </div>
                    <div className="h-px bg-white/40 w-16" />
                    <p className="text-body-small text-white/80 line-clamp-3">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <button 
            onClick={() => onNavigate?.('community')}
            className="bg-[#2F1464]/90 text-white px-8 py-3.5 text-button-label hover:bg-[#2F1464] transition-colors rounded-[var(--radius-sm)]"
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}



// Loading Component
function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F2E9FF] via-[#73A1FF]/20 to-[#73A1FF]/40">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#73A1FF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-body text-[#2F1464]">Loading...</p>
      </div>
    </div>
  );
}

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  const openAuthModal = (mode: 'signin' | 'signup') => {
    if (mode === 'signin') {
      setIsSignInModalOpen(true);
      setIsSignUpModalOpen(false);
    } else {
      setIsSignUpModalOpen(true);
      setIsSignInModalOpen(false);
    }
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  const handleAuthSuccess = () => {
    setShowWelcomeMessage(true);
    setCurrentPage('chat');
  };

  const handleNavigation = (page: string) => {
    // Add some validation to prevent invalid page states
    const validPages = ['home', 'providers', 'community', 'privacy', 'contact', 'faq', 'chat', 'platform', 'health-profile', 'plans', 'my-providers', 'my-care-plans', 'blog1', 'blog2', 'blog3', 'blog4', 'blog5', 'blog6'];
    if (validPages.includes(page)) {
      // Use setTimeout to prevent blocking the main thread
      setTimeout(() => {
        setCurrentPage(page);
      }, 0);
    } else {
      console.warn(`Invalid page navigation attempted: ${page}`);
      setCurrentPage('home');
    }
  };

  if (currentPage === 'providers') {
    return (
      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
          <ProviderPageNew onNavigate={handleNavigation} onOpenAuth={openAuthModal} />
          {/* Sign In Modal */}
          <AuthModal 
            isOpen={isSignInModalOpen}
            onClose={closeSignInModal}
            initialMode="signin"
            onSuccess={handleAuthSuccess}
          />
          
          {/* Sign Up Modal */}
          <AuthModal 
            isOpen={isSignUpModalOpen}
            onClose={closeSignUpModal}
            initialMode="signup"
            onSuccess={handleAuthSuccess}
          />
        </Suspense>
      </ErrorBoundary>
    );
  }

  if (currentPage === 'community') {
    return (
      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
          <CommunityPageNew onNavigate={handleNavigation} onOpenAuth={openAuthModal} />
          {/* Sign In Modal */}
          <AuthModal 
            isOpen={isSignInModalOpen}
            onClose={closeSignInModal}
            initialMode="signin"
            onSuccess={handleAuthSuccess}
          />
          
          {/* Sign Up Modal */}
          <AuthModal 
            isOpen={isSignUpModalOpen}
            onClose={closeSignUpModal}
            initialMode="signup"
            onSuccess={handleAuthSuccess}
          />
        </Suspense>
      </ErrorBoundary>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
          <PrivacyTermsPage onNavigate={handleNavigation} onOpenAuth={openAuthModal} />
          {/* Sign In Modal */}
          <AuthModal 
            isOpen={isSignInModalOpen}
            onClose={closeSignInModal}
            initialMode="signin"
            onSuccess={handleAuthSuccess}
          />
          
          {/* Sign Up Modal */}
          <AuthModal 
            isOpen={isSignUpModalOpen}
            onClose={closeSignUpModal}
            initialMode="signup"
            onSuccess={handleAuthSuccess}
          />
        </Suspense>
      </ErrorBoundary>
    );
  }

  if (currentPage === 'contact') {
    return (
      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
          <ContactPage onNavigate={handleNavigation} onOpenAuth={openAuthModal} />
          {/* Sign In Modal */}
          <AuthModal 
            isOpen={isSignInModalOpen}
            onClose={closeSignInModal}
            initialMode="signin"
            onSuccess={handleAuthSuccess}
          />
          
          {/* Sign Up Modal */}
          <AuthModal 
            isOpen={isSignUpModalOpen}
            onClose={closeSignUpModal}
            initialMode="signup"
            onSuccess={handleAuthSuccess}
          />
        </Suspense>
      </ErrorBoundary>
    );
  }

  if (currentPage === 'faq') {
    return (
      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
          <FAQPage onNavigate={handleNavigation} onOpenAuth={openAuthModal} />
          {/* Sign In Modal */}
          <AuthModal 
            isOpen={isSignInModalOpen}
            onClose={closeSignInModal}
            initialMode="signin"
            onSuccess={handleAuthSuccess}
          />
          
          {/* Sign Up Modal */}
          <AuthModal 
            isOpen={isSignUpModalOpen}
            onClose={closeSignUpModal}
            initialMode="signup"
            onSuccess={handleAuthSuccess}
          />
        </Suspense>
      </ErrorBoundary>
    );
  }

  if (currentPage === 'chat') {
    return (
      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
          <AIChatInterface 
            onNavigate={handleNavigation} 
            showWelcome={showWelcomeMessage}
            onWelcomeShown={() => setShowWelcomeMessage(false)}
          />
        </Suspense>
      </ErrorBoundary>
    );
  }

  if (currentPage === 'platform') {
    return (
      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
          <PlatformPage onNavigate={handleNavigation} />
        </Suspense>
      </ErrorBoundary>
    );
  }

  if (currentPage === 'health-profile') {
    return (
      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
          <HealthProfilePage onNavigate={handleNavigation} />
        </Suspense>
      </ErrorBoundary>
    );
  }

  if (currentPage === 'plans') {
    // Redirect to chat page since care plans are managed through chat
    return (
      <ErrorBoundary>
        <AIChatInterface 
          onNavigate={handleNavigation} 
          showWelcome={false}
          onWelcomeShown={() => {}}
        />
      </ErrorBoundary>
    );
  }

  if (currentPage === 'my-providers') {
    return (
      <ErrorBoundary>
        <MyProvidersPage onNavigate={handleNavigation} />
      </ErrorBoundary>
    );
  }

  if (currentPage === 'my-care-plans') {
    return (
      <ErrorBoundary>
        <MyCarePlansPage onNavigate={handleNavigation} />
      </ErrorBoundary>
    );
  }

  if (currentPage === 'blog1') {
    return (
      <ErrorBoundary>
        <BlogPost1 onNavigate={handleNavigation} />
      </ErrorBoundary>
    );
  }

  if (currentPage === 'blog2') {
    return (
      <ErrorBoundary>
        <BlogPost2 onNavigate={handleNavigation} />
      </ErrorBoundary>
    );
  }

  if (currentPage === 'blog3') {
    return (
      <ErrorBoundary>
        <BlogPost3 onNavigate={handleNavigation} />
      </ErrorBoundary>
    );
  }

  if (currentPage === 'blog4') {
    return (
      <ErrorBoundary>
        <BlogPost4 onNavigate={handleNavigation} />
      </ErrorBoundary>
    );
  }

  if (currentPage === 'blog5') {
    return (
      <ErrorBoundary>
        <BlogPost5 onNavigate={handleNavigation} />
      </ErrorBoundary>
    );
  }

  if (currentPage === 'blog6') {
    return (
      <ErrorBoundary>
        <BlogPost6 onNavigate={handleNavigation} />
      </ErrorBoundary>
    );
  }



  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <SharedHeader onOpenAuth={openAuthModal} onNavigate={handleNavigation} variant="dark" />
        <HeroSection onOpenAuth={openAuthModal} />
        <TrustBadgesSection />
        <TalkToSelaSection />
        <ActionPlanSection />
        <ProviderMatchingSection />
        <CommunitySection onOpenAuth={openAuthModal} />
        <BlogSection onNavigate={handleNavigation} />
        <SharedFooter onOpenAuth={openAuthModal} onNavigate={handleNavigation} />
        
        {/* Sign In Modal */}
        <AuthModal 
          isOpen={isSignInModalOpen}
          onClose={closeSignInModal}
          initialMode="signin"
          onSuccess={handleAuthSuccess}
        />
        
        {/* Sign Up Modal */}
        <AuthModal 
          isOpen={isSignUpModalOpen}
          onClose={closeSignUpModal}
          initialMode="signup"
          onSuccess={handleAuthSuccess}
        />
      </div>
    </ErrorBoundary>
  );
}