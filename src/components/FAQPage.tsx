import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageCircle, Shield, Users, CreditCard, MapPin, Lock, Stethoscope, HelpCircle } from 'lucide-react';
import SharedHeader from "./SharedHeader";
import SharedFooter from "./SharedFooter";

// FAQ icons mapping
const iconMap: Record<number, React.ReactNode> = {
  0: <HelpCircle size={20} />,
  1: <MessageCircle size={20} />,
  2: <CreditCard size={20} />,
  3: <Shield size={20} />,
  4: <MapPin size={20} />,
  5: <Lock size={20} />,
  6: <Stethoscope size={20} />,
};

// FAQ Accordion Item
function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onToggle,
  index
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div 
      className="border-b border-white/10 last:border-none"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left py-6 flex justify-between items-start gap-4 hover:bg-white/5 transition-colors px-6 group outline-none"
      >
        <div className="flex items-start gap-4 flex-1">
          <div className="text-[#73A1FF] mt-1 flex-shrink-0 transition-transform group-hover:scale-110">
            {iconMap[index] || <HelpCircle size={20} />}
          </div>
          <h3 className="text-body text-white pr-4">
            {question}
          </h3>
        </div>
        <div className="flex-shrink-0 mt-1">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#73A1FF]"
          >
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
          </motion.div>
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-6 pl-16">
              <p className="text-body-small text-white/70 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Main FAQ Content
function FAQContent({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [openItems, setOpenItems] = useState<number[]>([0]);
  
  const faqData = [
    {
      question: "What is Sela?",
      answer: "Sela is your AI women's health companion that provides answers, care, and community all in one place. We connect you with trusted providers and resources, whether you have insurance or not."
    },
    {
      question: "How does Sela work?",
      answer: "Simply create your free profile, get matched with trusted providers in your area, and access personalized care plans and resources. Our AI companion helps answer your questions 24/7."
    },
    {
      question: "Do I need insurance to use Sela?",
      answer: "No insurance? No problem. Sela is designed to help women access healthcare resources and support regardless of their insurance status."
    },
    {
      question: "Is Sela free to use?",
      answer: "Yes, creating your Sela profile and accessing our AI companion is completely free. Some provider services may have associated costs."
    },
    {
      question: "How do I find providers near me?",
      answer: "After creating your profile, you can browse providers in your area, see their specialties, and read reviews from other community members."
    },
    {
      question: "Is my health information secure?",
      answer: "Absolutely. We take your privacy seriously and use industry-standard encryption to protect your personal health information. Read our Privacy Policy for more details."
    },
    {
      question: "Can I join as a healthcare provider?",
      answer: "Yes! Healthcare providers can join our network to connect with patients and expand their practice. Visit our Providers page to learn more about joining."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-h1 text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-body text-white/70 max-w-2xl mx-auto">
            Find answers to common questions about Sela and our women's health platform.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[var(--radius-lg)] overflow-hidden shadow-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-[#F2E9FF]/20 to-[#73A1FF]/10 backdrop-blur-sm border border-white/20 rounded-[var(--radius-lg)] p-12">
            <MessageCircle size={40} className="text-[#73A1FF] mx-auto mb-6" />
            <h2 className="text-h2 text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-body text-white/70 mb-8 max-w-md mx-auto">
              Our team is here to help. Reach out and we'll get back to you as soon as possible.
            </p>
            <button 
              onClick={() => onNavigate?.('contact')}
              className="bg-[#73A1FF] text-white px-8 py-3.5 text-button-label hover:bg-[#73A1FF]/90 transition-all duration-300 rounded-[var(--radius-sm)] shadow-lg hover:shadow-xl outline-none"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Shield size={20} className="text-[#73A1FF]" />
            <span className="text-body-small text-white/70">
              Your privacy and security are our priority
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}



// Main FAQ Page Component
export default function FAQPage({ onNavigate, onOpenAuth }: { onNavigate?: (page: string) => void; onOpenAuth?: (mode: 'signin' | 'signup') => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2F1464] via-[#2F1464]/95 to-[#73A1FF]/40 relative overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#F2E9FF]/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-[#73A1FF]/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FBBA9B]/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="relative z-10">
        <SharedHeader onNavigate={onNavigate} onOpenAuth={onOpenAuth} variant="dark" />
        <FAQContent onNavigate={onNavigate} />
        <SharedFooter onNavigate={onNavigate} onOpenAuth={onOpenAuth} />
      </div>
    </div>
  );
}
