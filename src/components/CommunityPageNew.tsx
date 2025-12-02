import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import imgImageBlog from "figma:asset/3cb7d244a82405134488c1a954c8ca60e7fdb64b.png";
import imgImageBlog1 from "figma:asset/ff1f1771c07088519d7a680879dfa9b1dd418b4a.png";
import imgImagePress from "figma:asset/b06212fe620b12b80e0fb366d1183cd5e47003ba.png";
import communityHeroImage from "figma:asset/126809036d65724d99ff4dc4ed28b34d6fdb2e12.png";
import SharedHeader from "./SharedHeader";

// Community Categories
const communityCategories = [
  { 
    id: 'perimenopause',
    label: 'Perimenopause & Menopause',
    position: { desktop: { top: '-64px', left: '0' }, width: '156px', height: '148px' }
  },
  { 
    id: 'pregnancy',
    label: 'Pregnancy & Postpartum',
    position: { desktop: { top: '5.59px', left: '195px' }, width: '142.821px', height: '142.821px' }
  },
  { 
    id: 'pcos',
    label: 'PCOS & Hormone Health',
    position: { desktop: { top: '0', left: '376.82px' }, width: '170px', height: '154px' }
  },
  { 
    id: 'mental-health',
    label: 'Mental Health & Wellness',
    position: { desktop: { top: '0.5px', left: '585.82px' }, width: '153px', height: '153px' }
  },
  { 
    id: 'fertility',
    label: 'Fertility Journey',
    position: { desktop: { top: '433px', left: '872px' }, width: '125px', height: '125px' }
  }
];

// Newsletter Modal Component
function NewsletterModal({ 
  isOpen, 
  onClose, 
  category 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  category: string | null;
}) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categoryName = communityCategories.find(c => c.id === category)?.label || '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Newsletter signup for ${categoryName}:`, email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="bg-white rounded-[var(--radius-lg)] shadow-2xl p-8 mx-4 relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors bg-transparent border-none cursor-pointer p-2"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-h2 text-black/80 mb-2">
                      Join Our Community
                    </h2>
                    <p className="text-body-small text-black/60">
                      {categoryName}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-body text-black/70 mb-6">
                    Sign up to receive updates, resources, and connect with others in the {categoryName.toLowerCase()} community.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-body-small text-black/70 mb-2 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-black/20 px-4 py-3 text-body focus:outline-none focus:border-[#73A1FF] transition-colors rounded-[var(--radius-sm)]"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#73A1FF]/90 text-white px-8 py-3.5 text-button-label hover:bg-[#73A1FF] transition-all duration-300 rounded-[var(--radius-sm)] shadow-md hover:shadow-lg flex items-center justify-center"
                    >
                      Join Community
                    </button>
                  </form>

                  {/* Privacy Note */}
                  <p className="text-mono-small text-black/40 text-center mt-4">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 bg-[#73A1FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#73A1FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-subheader text-black/80 mb-2">
                    Welcome to the Community!
                  </h3>
                  <p className="text-body-small text-black/60">
                    Check your email for next steps
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}



// Hero Section with category buttons
function CommunityHero({ onCategoryClick }: { onCategoryClick: (categoryId: string) => void }) {
  const scrollToBlogSection = () => {
    const blogSection = document.getElementById('blog');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    { label: 'Perimenopause & Menopause', id: 'perimenopause', left: '0', top: '-64px', width: '156px', height: '148px' },
    { label: 'Pregnancy & Postpartum', id: 'pregnancy', left: '195px', top: '5.59px', width: '142.821px', height: '142.821px' },
    { label: 'PCOS & Hormone Health', id: 'pcos', left: '376.82px', top: '0', width: '170px', height: '154px' },
    { label: 'Mental Health & Wellness', id: 'mental-health', left: '585.82px', top: '0.5px', width: '153px', height: '153px' },
    { label: 'Fertility Journey', id: 'fertility', left: '758.82px', top: '-64px', width: '125px', height: '125px' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img alt="Community Hero Background" className="absolute inset-0 object-cover size-full" src={communityHeroImage} />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 w-full max-w-[1076px] mx-auto px-6 pt-20">
        <div className="relative">
          {/* Main Headline */}
          <motion.h1 
            className="text-h1 text-white mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            When women come together,<br />
            we are unstoppable.
          </motion.h1>
          
          {/* Subheader text */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-body text-white">
              Sometimes we need an expert opinion. Sometimes we need each other.
            </p>
          </motion.div>

          {/* Select Your Community Button + Category Bubbles Container */}
          <div className="flex flex-col items-center gap-12 mb-16">
            {/* Select Your Community Button */}
            <motion.button
              className="border border-white rounded-[var(--radius-sm)] px-6 py-3.5 text-button-label text-white hover:bg-white/10 transition-colors bg-transparent cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Select your Community
            </motion.button>

            {/* Community Category Bubbles - Desktop */}
            <div className="hidden lg:block relative w-full max-w-[900px] h-[154px]">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  className="absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex items-center justify-center text-center group hover:bg-white/15"
                  style={{
                    left: category.left,
                    top: category.top,
                    width: category.width,
                    height: category.height,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onCategoryClick(category.id)}
                >
                  <span className="text-subheader text-white px-4 capitalize leading-tight">
                    {category.label}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Community Category Buttons - Mobile/Tablet */}
            <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-2xl">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[var(--radius-lg)] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-6 text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onCategoryClick(category.id)}
                >
                  <span className="text-body-small text-white capitalize">
                    {category.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Scroll Arrow - "Read Blogs" */}
          <motion.button 
            onClick={scrollToBlogSection}
            className="group cursor-pointer bg-transparent border-none p-0 mx-auto block"
            aria-label="Read blogs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors">
              <span className="text-button-label">Read blogs</span>
              <div className="w-px h-12 bg-current group-hover:h-16 transition-all duration-300"></div>
              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-current"></div>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

// Combined Text Section
function CombinedTextSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <motion.h2 
          className="text-h2 text-black/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Stories, insights, and voices from our community
        </motion.h2>
        
        <motion.p 
          className="text-body text-black/70 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          For generations, women have cared for each other in community. Sela is creating space for that to happen. Join our Sela Communities — where we can come to discuss challenges, triumphs, and the uncomfortable in between.
        </motion.p>

        <motion.button
          className="bg-[#73A1FF] text-white px-8 py-3.5 text-button-label hover:bg-[#73A1FF]/90 transition-colors rounded-[var(--radius-md)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Share Your Story
        </motion.button>
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

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blogs.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative h-[527px] overflow-hidden group cursor-pointer"
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
                      <h3 className="text-subheader text-white capitalize">
                        {item.title}
                      </h3>
                      <span 
                        className="inline-block text-mono-small text-white px-3 py-1.5 rounded-[var(--radius-sm)] uppercase"
                        style={{ backgroundColor: item.badgeColor }}
                      >
                        {item.badge}
                      </span>
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

        {/* Duplicate row for Figma design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blogs.map((item, index) => (
            <motion.div 
              key={`duplicate-${index}`} 
              className="relative h-[527px] overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <img 
                alt={item.title} 
                className="absolute inset-0 object-cover size-full transition-transform duration-700 group-hover:scale-105" 
                src={item.image} 
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl">
                  <div className="space-y-4">
                    <div className="space-y-4">
                      <h3 className="text-subheader text-white capitalize">
                        {item.title}
                      </h3>
                      <span 
                        className="inline-block text-mono-small text-white px-3 py-1.5 rounded-[var(--radius-sm)] uppercase"
                        style={{ backgroundColor: item.badgeColor }}
                      >
                        {item.badge}
                      </span>
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

        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-[#73A1FF] text-white px-8 py-3.5 text-button-label hover:bg-[#73A1FF]/90 transition-colors rounded-[var(--radius-md)]">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}

// Community Footer
function CommunityFooter({ onNavigate, onOpenAuth }: { onNavigate?: (page: string) => void; onOpenAuth?: (mode: 'signin' | 'signup') => void }) {
  return (
    <footer className="bg-[#F5ECD9] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-body text-black mb-4">About</h3>
            <div className="space-y-2 text-button-label text-black/70">
              <p><a href="#" className="hover:text-black capitalize">Instagram</a></p>
              <p><a href="#" className="hover:text-black capitalize">LinkedIn</a></p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-body text-black mb-4">Quick Links</h3>
            <div className="space-y-2 text-button-label text-black/70">
              <p>
                <button 
                  onClick={() => onOpenAuth?.('signin')}
                  className="hover:text-black transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  Log In
                </button>
              </p>
              <p>
                <button 
                  onClick={() => onOpenAuth?.('signup')}
                  className="hover:text-black transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  Sign Up
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
              <p>
                <button 
                  onClick={() => onNavigate?.('faq')}
                  className="hover:text-black transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  FAQ
                </button>
              </p>
              <p>
                <button 
                  onClick={() => onNavigate?.('providers')}
                  className="hover:text-black transition-colors bg-transparent border-none p-0 cursor-pointer capitalize"
                >
                  Become a Provider
                </button>
              </p>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-body text-black mb-4">Let's keep in Touch</h3>
            <p className="text-body-small text-black/70 mb-4">
              Sign up to hear about events, news and updates from Sela.
            </p>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Insert your email" 
                className="w-full border border-black/20 px-4 py-3 text-body-small focus:outline-none focus:border-black/40 rounded-[var(--radius-sm)]"
              />
              <button 
                onClick={() => onOpenAuth?.('signup')}
                className="w-full bg-[#73A1FF]/90 text-white py-3 text-button-label hover:bg-[#73A1FF]/90 transition-colors flex items-center justify-center rounded-[var(--radius-sm)]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-black/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-mono text-black/70">
            {onNavigate ? (
              <button 
                onClick={() => onNavigate('privacy')}
                className="underline hover:text-black mr-8 bg-transparent border-none p-0 cursor-pointer"
              >
                Privacy Terms
              </button>
            ) : (
              <a href="#" className="underline hover:text-black mr-8">Privacy Terms</a>
            )}
            <span>Sela© 2025 All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Community Page Component
export default function CommunityPageNew({ onNavigate, onOpenAuth }: { onNavigate?: (page: string) => void; onOpenAuth?: (mode: 'signin' | 'signup') => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedCategory(null);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader onNavigate={onNavigate} onOpenAuth={onOpenAuth} variant="dark" />
      <CommunityHero onCategoryClick={handleCategoryClick} />
      <CombinedTextSection />
      <BlogSection onNavigate={onNavigate} />
      <CommunityFooter onNavigate={onNavigate} onOpenAuth={onOpenAuth} />
      
      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        category={selectedCategory}
      />
    </div>
  );
}
