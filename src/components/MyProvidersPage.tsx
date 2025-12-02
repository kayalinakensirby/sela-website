import { useState } from 'react';
import { X, Trash2, Heart, FileText, Send, User, LogOut, Stethoscope, ExternalLink, Phone, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import imgRectangle12 from "figma:asset/810ce3bbea53b832d80bbd5fbf9d63b24bf0860d.png";
import imgScreenshot20250911At1107271 from "figma:asset/722ba57c46a3e59b3e750dc8239c93e6d59ce0b6.png";
import SelaAIChatSidebar from './SelaAIChatSidebar';

// Types
interface Provider {
  id: string;
  name: string;
  specialty: string;
  location: string;
  bio: string;
  credentials: string;
  image: string;
  website?: string;
  phone?: string;
  philosophyOfCare?: string;
  videoUrl?: string;
}

// Sample saved providers data
const sampleSavedProviders: Provider[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    specialty: 'Gynecologist',
    location: 'Santa Monica, CA',
    bio: 'Specializing in women\'s reproductive health with over 10 years of experience.',
    credentials: 'Harvard Medical School graduate, Board certified in Obstetrics & Gynecology',
    image: imgRectangle12,
    website: 'https://drchen.com',
    phone: '(555) 123-4567'
  },
  {
    id: '2',
    name: 'Dr. Maria Rodriguez',
    specialty: 'Mental Health Counselor',
    location: 'Los Angeles, CA',
    bio: 'Trauma-informed therapy specialist focusing on women\'s mental health and wellness.',
    credentials: 'UCLA Psychology PhD, Licensed Clinical Social Worker (LCSW)',
    image: imgRectangle12,
    website: 'https://drmaria.com',
    phone: '(555) 987-6543'
  },
  {
    id: '3',
    name: 'Dr. Jennifer Park',
    specialty: 'Dermatologist',
    location: 'Beverly Hills, CA',
    bio: 'Board-certified dermatologist specializing in hormonal acne and skin health.',
    credentials: 'Stanford Medical School, American Board of Dermatology',
    image: imgRectangle12,
    website: 'https://drpark.com',
    phone: '(555) 456-7890'
  }
];

interface MyProvidersPageProps {
  onNavigate?: (page: string) => void;
}

// Provider Detail Modal
function ProviderModal({ provider, isOpen, onClose }: { provider: Provider | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !provider) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xl flex items-center justify-center z-50 p-4">
      <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20">
        {/* Glass morphism background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#73A1FF]/10 via-transparent to-[#2F1464]/10" />
        
        <div className="relative z-10 p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-2xl text-white">
              Provider Details
            </h2>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex gap-6 mb-6">
            <div className="w-24 h-24 overflow-hidden flex-shrink-0">
              <img 
                src={provider.image} 
                alt={provider.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-xl text-white mb-2">
                {provider.name}
              </h3>
              <p className="text-[#73A1FF] font-['IBM_Plex_Mono',_monospace] text-sm mb-1 uppercase">
                {provider.specialty}
              </p>
              <p className="text-white/70 text-sm">{provider.location}</p>
            </div>
          </div>

          <div className="mb-6 p-6 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl border border-white/20">
            <h4 className="text-white font-['IBM_Plex_Mono',_monospace] text-sm mb-3 uppercase">About</h4>
            <p className="text-white/90 leading-relaxed">{provider.bio}</p>
          </div>

          <div className="mb-6 p-6 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl border border-white/20">
            <h4 className="text-white font-['IBM_Plex_Mono',_monospace] text-sm mb-3 uppercase">Credentials</h4>
            <p className="text-white/90 leading-relaxed">{provider.credentials}</p>
          </div>

          <div className="flex gap-4 flex-wrap">
            {provider.website && (
              <button className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all font-['IBM_Plex_Mono',_monospace] text-sm border border-white/20">
                <ExternalLink className="w-4 h-4" />
                Visit Website
              </button>
            )}
            {provider.phone && (
              <button className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all font-['IBM_Plex_Mono',_monospace] text-sm border border-white/20">
                <Phone className="w-4 h-4" />
                Call Doctor
              </button>
            )}
            <button className="flex items-center gap-2 px-6 py-3 bg-[#73A1FF] text-white rounded-xl hover:bg-[#73A1FF]/90 transition-all font-['IBM_Plex_Mono',_monospace] text-sm">
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyProvidersPage({ onNavigate }: MyProvidersPageProps) {
  const [savedProviders, setSavedProviders] = useState<Provider[]>(sampleSavedProviders);
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [showProviderModal, setShowProviderModal] = useState(false);
  const [providersDropdownOpen, setProvidersDropdownOpen] = useState(false);

  const handleDeleteProvider = (providerId: string) => {
    setSavedProviders(providers => providers.filter(p => p.id !== providerId));
  };

  const handleProviderClick = (provider: Provider) => {
    setSelectedProvider(provider);
    setShowProviderModal(true);
  };

  const handleNavigateToProviders = () => {
    onNavigate?.('providers');
  };

  return (
    <div className="min-h-screen flex relative">
      {/* Sela brand gradient background - fixed to viewport */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#F2E9FF] via-[#73A1FF]/20 to-[#73A1FF]/40 z-0">
        {/* Floating orbs with Sela colors */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#F2E9FF]/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-96 h-96 bg-[#73A1FF]/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-[#FBBA9B]/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Left sidebar menu - fixed position */}
      <div className="fixed left-0 top-0 z-40 flex-shrink-0">
        <SelaAIChatSidebar 
          onNavigate={onNavigate}
          activeButton="documents"
        />
      </div>

      {/* Main content area */}
      <div className="flex-1 ml-[96px] relative z-30">
        {/* Header */}
        <header className="glass-morphism bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-40">
          <div className="flex items-center justify-between px-8 py-6">
            <div className="flex items-center gap-4">
              <h1 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-2xl text-black">
                My Providers
              </h1>
            </div>
          </div>
        </header>

        {/* Description Section */}
        <div className="px-8 pt-8 pb-4">
          <div className="bg-gradient-to-br from-[#F2E9FF]/30 to-[#73A1FF]/10 p-6 rounded-[var(--radius-md)] border border-[#73A1FF]/20">
            <h2 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mb-2">
              Your Saved Healthcare Providers
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              This is your personal collection of healthcare providers recommended by Sela. Each provider has been matched to your specific needs and preferences. You can view their full profiles, contact information, and manage your saved providers here.
            </p>
          </div>
        </div>

        {/* Main content */}
        <main className="p-8 pt-4">
          {savedProviders.length > 0 ? (
            <div className="space-y-4">
              {savedProviders.map((provider) => (
                <div key={provider.id} className="bg-white shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all hover:border-[#73A1FF]/30">
                  <div className="flex items-center gap-6 p-6">
                    {/* Provider Image */}
                    <div className="w-24 h-24 overflow-hidden flex-shrink-0 border-2 border-gray-100">
                      <img 
                        src={provider.image} 
                        alt={provider.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Provider Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-xl text-black mb-1">
                        {provider.name}
                      </h3>
                      <p className="text-[#73A1FF] font-['IBM_Plex_Mono',_monospace] text-sm mb-2 uppercase">
                        {provider.specialty}
                      </p>
                      <p className="text-gray-600 text-sm mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {provider.location}
                      </p>
                      <p className="text-gray-700 text-sm line-clamp-2">{provider.bio}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 flex-shrink-0">
                      <button
                        onClick={() => handleProviderClick(provider)}
                        className="px-6 py-3 bg-[#73A1FF] text-white rounded-[var(--radius-sm)] hover:bg-[#73A1FF]/90 transition-colors font-['IBM_Plex_Mono',_monospace] text-sm uppercase whitespace-nowrap"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleDeleteProvider(provider.id)}
                        className="px-6 py-3 bg-white border border-red-200 text-red-600 rounded-[var(--radius-sm)] hover:bg-red-50 transition-colors font-['IBM_Plex_Mono',_monospace] text-sm uppercase flex items-center justify-center gap-2"
                        title="Remove Provider"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#F2E9FF] to-[#73A1FF]/20 rounded-full flex items-center justify-center">
                <Stethoscope className="w-12 h-12 text-[#73A1FF]" />
              </div>
              <h3 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-xl text-black mb-2">
                No Saved Providers
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                You haven't saved any providers yet. Start a conversation with Sela to discover healthcare providers that match your needs.
              </p>
              <button
                onClick={() => onNavigate?.('chat')}
                className="px-8 py-4 bg-[#73A1FF] text-white rounded-[var(--radius-sm)] hover:bg-[#73A1FF]/90 transition-colors font-['IBM_Plex_Mono',_monospace] text-sm uppercase"
              >
                Start Chatting with Sela
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Provider Detail Modal */}
      <ProviderModal 
        provider={selectedProvider}
        isOpen={showProviderModal}
        onClose={() => {
          setShowProviderModal(false);
          setSelectedProvider(null);
        }}
      />
    </div>
  );
}