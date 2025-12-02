import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, FileText, Shield, Check } from 'lucide-react';
import SharedHeader from "./SharedHeader";
import SharedFooter from "./SharedFooter";

// Tab Navigation Component
function TabNavigation({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <div className="flex gap-3 mb-12 justify-center flex-wrap">
      <button
        onClick={() => setActiveTab('privacy')}
        className={`px-6 py-3 text-button-label transition-all duration-300 rounded-[var(--radius-sm)] ${
          activeTab === 'privacy' 
            ? 'bg-[#73A1FF] text-white shadow-lg' 
            : 'bg-white/10 backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/20 border border-white/20'
        }`}
      >
        <div className="flex items-center gap-2">
          <Lock size={16} />
          Privacy Policy
        </div>
      </button>
      <button
        onClick={() => setActiveTab('terms')}
        className={`px-6 py-3 text-button-label transition-all duration-300 rounded-[var(--radius-sm)] ${
          activeTab === 'terms' 
            ? 'bg-[#73A1FF] text-white shadow-lg' 
            : 'bg-white/10 backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/20 border border-white/20'
        }`}
      >
        <div className="flex items-center gap-2">
          <FileText size={16} />
          Terms & Conditions
        </div>
      </button>
    </div>
  );
}

// Section Component
function ContentSection({ 
  title, 
  children,
  icon
}: { 
  title: string; 
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <motion.div 
      className="mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-[#73A1FF]">{icon}</div>}
        <h2 className="text-h2 text-white">{title}</h2>
      </div>
      <div className="text-body text-white/80 space-y-4">
        {children}
      </div>
    </motion.div>
  );
}

// List Item Component
function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 items-start">
      <Check size={20} className="text-[#73A1FF] flex-shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}

// Privacy Policy Content
function PrivacyPolicyContent() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <p className="text-body-small text-white/60 mb-6">Last updated: January 2025</p>
        <p className="text-body text-white/90">
          At Sela, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
        </p>
      </div>

      <ContentSection title="Information We Collect" icon={<Shield size={24} />}>
        <p>
          We collect information you provide directly to us, such as when you create an account, update your profile, use our services, or communicate with us. This may include:
        </p>
        <ul className="space-y-2 ml-0">
          <ListItem>Personal identification information (name, email address, phone number)</ListItem>
          <ListItem>Health-related information you choose to share</ListItem>
          <ListItem>Communication preferences and feedback</ListItem>
          <ListItem>Usage data and analytics</ListItem>
        </ul>
      </ContentSection>

      <ContentSection title="How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="space-y-2 ml-0">
          <ListItem>Provide, maintain, and improve our services</ListItem>
          <ListItem>Connect you with appropriate healthcare providers</ListItem>
          <ListItem>Send you updates, newsletters, and important notices</ListItem>
          <ListItem>Respond to your inquiries and provide customer support</ListItem>
          <ListItem>Ensure the security and integrity of our platform</ListItem>
        </ul>
      </ContentSection>

      <ContentSection title="Information Sharing and Disclosure">
        <p>
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information:
        </p>
        <ul className="space-y-2 ml-0">
          <ListItem>With healthcare providers you choose to connect with</ListItem>
          <ListItem>With service providers who assist us in operating our platform</ListItem>
          <ListItem>When required by law or to protect our rights and safety</ListItem>
          <ListItem>In connection with a business transaction (merger, acquisition, etc.)</ListItem>
        </ul>
      </ContentSection>

      <ContentSection title="Data Security">
        <p>
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
        </p>
      </ContentSection>

      <ContentSection title="Your Rights and Choices">
        <p>You have the right to:</p>
        <ul className="space-y-2 ml-0">
          <ListItem>Access, update, or delete your personal information</ListItem>
          <ListItem>Opt out of marketing communications</ListItem>
          <ListItem>Request a copy of your data</ListItem>
          <ListItem>Withdraw consent where applicable</ListItem>
        </ul>
      </ContentSection>

      <ContentSection title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
        </p>
      </ContentSection>

      <ContentSection title="Contact Us">
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:privacy@sela.com" className="text-[#73A1FF] hover:text-[#73A1FF]/80 underline">
            privacy@sela.com
          </a>{' '}
          or through our support channels.
        </p>
      </ContentSection>
    </div>
  );
}

// Terms & Conditions Content
function TermsConditionsContent() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <p className="text-body-small text-white/60 mb-6">Last updated: January 2025</p>
        <p className="text-body text-white/90">
          Welcome to Sela. These Terms of Service ("Terms") govern your use of our platform and services. By accessing or using Sela, you agree to be bound by these Terms.
        </p>
      </div>

      <ContentSection title="Acceptance of Terms">
        <p>
          By creating an account or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
        </p>
      </ContentSection>

      <ContentSection title="Description of Service">
        <p>
          Sela is a platform that connects women with healthcare providers and resources. We provide:
        </p>
        <ul className="space-y-2 ml-0">
          <ListItem>AI-powered health guidance and information</ListItem>
          <ListItem>Provider matching and booking services</ListItem>
          <ListItem>Educational content and community features</ListItem>
          <ListItem>Personalized healthcare recommendations</ListItem>
        </ul>
      </ContentSection>

      <ContentSection title="User Responsibilities">
        <p>You agree to:</p>
        <ul className="space-y-2 ml-0">
          <ListItem>Provide accurate and complete information</ListItem>
          <ListItem>Maintain the confidentiality of your account</ListItem>
          <ListItem>Use our services lawfully and appropriately</ListItem>
          <ListItem>Respect the privacy and rights of other users</ListItem>
          <ListItem>Not misuse or attempt to harm our platform</ListItem>
        </ul>
      </ContentSection>

      <ContentSection title="Medical Disclaimer">
        <div className="bg-[#FBBA9B]/20 border border-[#FBBA9B]/40 rounded-[var(--radius-md)] p-6">
          <p className="text-white">
            <strong>Important:</strong> Sela is not a substitute for professional medical advice, diagnosis, or treatment. Our AI companion and platform provide general information only. Always consult with qualified healthcare professionals for medical concerns.
          </p>
        </div>
      </ContentSection>

      <ContentSection title="Prohibited Uses">
        <p>You may not use our services to:</p>
        <ul className="space-y-2 ml-0">
          <ListItem>Violate any laws or regulations</ListItem>
          <ListItem>Impersonate others or provide false information</ListItem>
          <ListItem>Upload harmful, offensive, or inappropriate content</ListItem>
          <ListItem>Attempt to gain unauthorized access to our systems</ListItem>
          <ListItem>Use our platform for commercial purposes without permission</ListItem>
        </ul>
      </ContentSection>

      <ContentSection title="Intellectual Property">
        <p>
          All content, features, and functionality on our platform are owned by Sela and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.
        </p>
      </ContentSection>

      <ContentSection title="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Sela shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
        </p>
      </ContentSection>

      <ContentSection title="Termination">
        <p>
          We may terminate or suspend your account at any time for violation of these Terms or for any other reason at our sole discretion.
        </p>
      </ContentSection>

      <ContentSection title="Changes to Terms">
        <p>
          We reserve the right to modify these Terms at any time. We will notify you of any changes, and continued use of our services constitutes acceptance of the modified Terms.
        </p>
      </ContentSection>

      <ContentSection title="Governing Law">
        <p>
          These Terms are governed by the laws of California, United States, without regard to conflict of law principles.
        </p>
      </ContentSection>

      <ContentSection title="Contact Information">
        <p>
          For questions about these Terms, please contact us at{' '}
          <a href="mailto:legal@sela.com" className="text-[#73A1FF] hover:text-[#73A1FF]/80 underline">
            legal@sela.com
          </a>{' '}
          or through our support channels.
        </p>
      </ContentSection>
    </div>
  );
}

// Main Content Section
function PrivacyContent({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-h1 text-white mb-4">
            {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
          </h1>
          <p className="text-body text-white/70 max-w-2xl mx-auto">
            {activeTab === 'privacy' 
              ? 'Your privacy and data security are our top priorities'
              : 'Please read these terms carefully before using our platform'
            }
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content Card */}
        <motion.div 
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[var(--radius-lg)] p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {activeTab === 'privacy' ? <PrivacyPolicyContent /> : <TermsConditionsContent />}
        </motion.div>

        {/* Trust Badge */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Shield size={20} className="text-[#73A1FF]" />
            <span className="text-body-small text-white/70">
              Your data is encrypted and secure
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}



// Main Privacy Terms Page Component
export default function PrivacyTermsPage({ onNavigate, onOpenAuth }: { onNavigate?: (page: string) => void; onOpenAuth?: (mode: 'signin' | 'signup') => void }) {
  const [activeTab, setActiveTab] = useState('privacy');

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
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#73A1FF]/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="relative z-10">
        <SharedHeader onNavigate={onNavigate} onOpenAuth={onOpenAuth} variant="dark" />
        <PrivacyContent activeTab={activeTab} setActiveTab={setActiveTab} />
        <SharedFooter onNavigate={onNavigate} onOpenAuth={onOpenAuth} />
      </div>
    </div>
  );
}
