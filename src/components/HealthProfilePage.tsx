import { useState } from 'react';
import { X, Camera, Trash2, Heart, FileText, ArrowLeft, Phone, ExternalLink, Calendar, Send, User, LogOut, Stethoscope } from 'lucide-react';
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
}

interface CarePlan {
  id: string;
  title: string;
  type: 'Basic' | 'Advanced';
  description: string;
  conversation: { speaker: string; message: string }[];
  nextSteps: string[];
}

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  city: string;
  hasInsurance: boolean;
  profileImage?: string;
}

// Sample Data
const sampleProviders: Provider[] = [
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
    specialty: 'Endocrinologist',
    location: 'Beverly Hills, CA',
    bio: 'Expert in hormone disorders and metabolic health.',
    credentials: 'Stanford Medical School, Fellowship in Reproductive Endocrinology',
    image: imgRectangle12,
    website: 'https://drmaria.com',
    phone: '(555) 234-5678'
  },
  {
    id: '3',
    name: 'Dr. Emily Johnson',
    specialty: 'Reproductive Health',
    location: 'West Hollywood, CA',
    bio: 'Focused on fertility and reproductive wellness.',
    credentials: 'UCLA Medical Center, Specialist in Reproductive Medicine',
    image: imgRectangle12,
    website: 'https://dremily.com',
    phone: '(555) 345-6789'
  }
];

const sampleCarePlans: CarePlan[] = [
  {
    id: '1',
    title: 'UTI Triage',
    type: 'Basic',
    description: 'Comprehensive guide for urinary tract infection symptoms and treatment options.',
    conversation: [
      { speaker: 'Ashley', message: 'I think I have another UTI. I\'m getting that burning sensation when I pee.' },
      { speaker: 'Sela', message: 'I understand how uncomfortable that must be. Let me help you figure out the best next steps. Are you experiencing any fever, back pain, or nausea?' },
      { speaker: 'Ashley', message: 'No fever or back pain, just the burning and urgency.' },
      { speaker: 'Sela', message: 'Since you don\'t have fever or back pain, it\'s likely a lower UTI. Here are your care options based on your location and preferences.' }
    ],
    nextSteps: [
      'Visit CVS MinuteClinic for quick testing and treatment',
      'Schedule with Dr. Kim (Urologist) for specialized care',
      'Try telehealth consultation with Dr. Patel',
      'Consider pelvic floor therapy for prevention',
      'Stay hydrated and avoid irritants'
    ]
  },
  {
    id: '2',
    title: 'PMS Management',
    type: 'Advanced',
    description: 'Personalized approach to managing PMS symptoms and improving quality of life.',
    conversation: [
      { speaker: 'User', message: 'My PMS symptoms are getting worse. What can I do?' },
      { speaker: 'Sela', message: 'I\'m here to help you find relief. Can you tell me more about your specific symptoms and when they typically occur in your cycle?' }
    ],
    nextSteps: [
      'Track symptoms with cycle monitoring app',
      'Consider dietary modifications',
      'Explore stress management techniques',
      'Consult with healthcare provider about treatment options'
    ]
  }
];

const sampleUserProfile: UserProfile = {
  firstName: 'Ashley',
  lastName: 'Johnson',
  email: 'ashley.johnson@email.com',
  phone: '(555) 123-4567',
  city: 'Santa Monica, CA',
  hasInsurance: true,
  profileImage: imgRectangle12
};

// Modal Components
function ProviderModal({ provider, isOpen, onClose }: { provider: Provider | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !provider) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100" style={{background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)'}}>
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <h2 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-2xl text-black">Provider Details</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="flex gap-8 mb-8">
            <div className="relative w-32 h-32 overflow-hidden shadow-lg">
              <img 
                src={provider.image} 
                alt={provider.name}
                className="absolute inset-0 object-cover size-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-2xl text-black mb-2">{provider.name}</h3>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-[#73A1FF] mb-3">{provider.specialty}</p>
              <p className="font-['IBM_Plex_Mono',_monospace] text-black/70 text-sm mb-4 uppercase">{provider.location}</p>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80 leading-relaxed">{provider.bio}</p>
            </div>
          </div>
          
          <div className="mb-8 p-6 bg-[#F2E9FF]/40 rounded-2xl">
            <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black mb-3">Credentials</h4>
            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/70 leading-relaxed">{provider.credentials}</p>
          </div>
          
          <div className="flex gap-4">
            {provider.website && (
              <button className="flex items-center gap-2 px-6 py-3 bg-[#F5ECD9] text-black rounded-xl hover:bg-[#F5ECD9]/80 transition-colors font-['IBM_Plex_Mono',_monospace] text-sm">
                <ExternalLink className="w-4 h-4" />
                Visit Website
              </button>
            )}
            {provider.phone && (
              <button className="flex items-center gap-2 px-6 py-3 bg-[#FBBA9B] text-black rounded-xl hover:bg-[#FBBA9B]/80 transition-colors font-['IBM_Plex_Mono',_monospace] text-sm">
                <Phone className="w-4 h-4" />
                Call Doctor
              </button>
            )}
            <button className="flex items-center gap-2 px-6 py-3 bg-[#2F1464] text-white rounded-xl hover:bg-[#2F1464]/90 transition-colors font-['IBM_Plex_Mono',_monospace] text-sm">
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarePlanModal({ carePlan, isOpen, onClose }: { carePlan: CarePlan | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !carePlan) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100" style={{background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)'}}>
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-2xl text-black mb-3">{carePlan.title}</h2>
              <span className={`px-4 py-2 rounded-full font-['IBM_Plex_Mono',_monospace] text-sm uppercase ${
                carePlan.type === 'Advanced' 
                  ? 'bg-[#2F1464] text-white' 
                  : 'bg-[#73A1FF] text-white'
              }`}>
                {carePlan.type}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="mb-8 p-6 bg-[#F2E9FF]/40 rounded-2xl">
            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80 leading-relaxed">{carePlan.description}</p>
          </div>
          
          <div className="mb-8">
            <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black mb-6">Conversation Summary</h4>
            <div className="space-y-4">
              {carePlan.conversation.map((msg, index) => (
                <div key={index} className={`p-6 rounded-2xl ${
                  msg.speaker === 'Sela' 
                    ? 'bg-[#F2E9FF]/60 border-l-4 border-[#73A1FF]' 
                    : 'bg-[#F5ECD9]/60 border-l-4 border-[#FBBA9B]'
                }`}>
                  <div className="font-['IBM_Plex_Mono',_monospace] text-sm text-black/70 mb-2 uppercase">{msg.speaker}</div>
                  <div className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black leading-relaxed">{msg.message}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black mb-4">Recommended Next Steps</h4>
            <ul className="space-y-3">
              {carePlan.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#73A1FF] rounded-full mt-3 flex-shrink-0"></div>
                  <span className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-black/80 leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-[#73A1FF] text-white rounded-xl hover:bg-[#73A1FF]/90 transition-colors font-['IBM_Plex_Mono',_monospace] text-sm uppercase">
              Start Care Plan
            </button>
            <button className="px-6 py-3 bg-[#F5ECD9] text-black rounded-xl hover:bg-[#F5ECD9]/80 transition-colors font-['IBM_Plex_Mono',_monospace] text-sm uppercase">
              Save to My Plans
            </button>
            <button className="px-6 py-3 bg-[#FBBA9B] text-black rounded-xl hover:bg-[#FBBA9B]/80 transition-colors font-['IBM_Plex_Mono',_monospace] text-sm uppercase">
              Book Provider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HealthProfilePage({ 
  onNavigate 
}: { 
  onNavigate: (page: string) => void;
}) {
  const [userProfile, setUserProfile] = useState<UserProfile>(sampleUserProfile);
  const [savedProviders, setSavedProviders] = useState<Provider[]>(sampleProviders);
  const [savedCarePlans, setSavedCarePlans] = useState<CarePlan[]>(sampleCarePlans);
  const [editingProfile, setEditingProfile] = useState(false);
  const [tempProfile, setTempProfile] = useState(userProfile);
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [selectedCarePlan, setSelectedCarePlan] = useState<CarePlan | null>(null);

  const handleSaveProfile = () => {
    setUserProfile(tempProfile);
    setEditingProfile(false);
  };

  const handleCancelEdit = () => {
    setTempProfile(userProfile);
    setEditingProfile(false);
  };

  const handleImageUpload = () => {
    // Simulate image upload
    console.log('Image upload functionality would be implemented here');
  };

  const handleRemoveProvider = (providerId: string) => {
    setSavedProviders(providers => providers.filter(p => p.id !== providerId));
  };

  const handleRemoveCarePlan = (carePlanId: string) => {
    setSavedCarePlans(plans => plans.filter(p => p.id !== carePlanId));
  };

  const handleDeleteProfile = () => {
    const confirmed = window.confirm('Are you sure you want to delete your profile? This action cannot be undone.');
    if (confirmed) {
      // Reset user profile to defaults
      setUserProfile({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        hasInsurance: false
      });
      setSavedProviders([]);
      setSavedCarePlans([]);
      alert('Profile deleted successfully.');
      onNavigate('chat');
    }
  };

  const handleProviderClick = (provider: Provider) => {
    setSelectedProvider(provider);
  };

  const handleCarePlanClick = (carePlan: CarePlan) => {
    setSelectedCarePlan(carePlan);
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
      <div className="fixed left-0 top-0 z-40 w-24 h-screen flex-shrink-0">
        <SelaAIChatSidebar 
          onNavigate={onNavigate}
          activeButton="health"
        />
      </div>

      {/* Main content area */}
      <div className="flex-1 ml-24 relative z-30">
        {/* Header */}
        <header className="glass-morphism bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-40">
          <div className="px-6 py-6">
            <div className="flex items-center gap-4">

              <h1 className="font-['IBM_Plex_Mono',_monospace] text-2xl font-semibold text-[#2F1464] uppercase tracking-wide font-[FONTSPRING_DEMO_-_Deca_Serif_New]">
                My Health Profile
              </h1>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 py-8 h-full overflow-y-auto">
        {/* Profile Section */}
        <div className="mb-12 p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
          <div className="flex items-start justify-between mb-8">
            <h2 className="text-2xl text-black">
              Profile Information
            </h2>
            <button
              onClick={() => setEditingProfile(true)}
              className="px-6 py-3 bg-[#73A1FF] text-white rounded-xl font-['IBM_Plex_Mono',_monospace] text-sm hover:bg-[#73A1FF]/90 transition-colors uppercase"
            >
              Edit Profile
            </button>
          </div>

          <div className="flex gap-12">
            {/* Profile Image */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 rounded-[15px] overflow-hidden shadow-lg mb-6">
                <img 
                  src={userProfile.profileImage || "https://images.unsplash.com/photo-1690444963408-9573a17a8058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfHx8fDE3NjA4MTY1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"} 
                  alt="Profile"
                  className="absolute inset-0 object-cover size-full"
                />
                {editingProfile && (
                  <button
                    onClick={handleImageUpload}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center hover:bg-black/60 transition-colors"
                  >
                    <Camera className="w-10 h-10 text-white" />
                  </button>
                )}
              </div>
              {editingProfile && (
                <button
                  onClick={handleImageUpload}
                  className="text-[#73A1FF] font-['IBM_Plex_Mono',_monospace] text-sm hover:text-[#73A1FF]/80 transition-colors uppercase"
                >
                  Change Photo
                </button>
              )}
            </div>

            {/* Profile Form */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-['IBM_Plex_Mono',_monospace] text-sm text-black/70 mb-3 uppercase">
                  First Name
                </label>
                {editingProfile ? (
                  <input
                    type="text"
                    value={tempProfile.firstName}
                    onChange={(e) => setTempProfile({...tempProfile, firstName: e.target.value})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-4 text-lg focus:outline-none focus:border-[#73A1FF]"
                  />
                ) : (
                  <p className="text-black text-xl">
                    {userProfile.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-['IBM_Plex_Mono',_monospace] text-sm text-black/70 mb-3 uppercase">
                  Last Name
                </label>
                {editingProfile ? (
                  <input
                    type="text"
                    value={tempProfile.lastName}
                    onChange={(e) => setTempProfile({...tempProfile, lastName: e.target.value})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-4 text-lg focus:outline-none focus:border-[#73A1FF]"
                  />
                ) : (
                  <p className="text-black text-xl">
                    {userProfile.lastName}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-['IBM_Plex_Mono',_monospace] text-sm text-black/70 mb-3 uppercase">
                  Email
                </label>
                {editingProfile ? (
                  <input
                    type="email"
                    value={tempProfile.email}
                    onChange={(e) => setTempProfile({...tempProfile, email: e.target.value})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-4 text-lg focus:outline-none focus:border-[#73A1FF]"
                  />
                ) : (
                  <p className="text-black text-xl">
                    {userProfile.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-['IBM_Plex_Mono',_monospace] text-sm text-black/70 mb-3 uppercase">
                  Phone Number (Optional)
                </label>
                {editingProfile ? (
                  <input
                    type="tel"
                    value={tempProfile.phone || ''}
                    onChange={(e) => setTempProfile({...tempProfile, phone: e.target.value})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-4 text-lg focus:outline-none focus:border-[#73A1FF]"
                  />
                ) : (
                  <p className="text-black text-xl">
                    {userProfile.phone || 'Not provided'}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-['IBM_Plex_Mono',_monospace] text-sm text-black/70 mb-3 uppercase">
                  City of Residence
                </label>
                {editingProfile ? (
                  <input
                    type="text"
                    value={tempProfile.city}
                    onChange={(e) => setTempProfile({...tempProfile, city: e.target.value})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-4 text-lg focus:outline-none focus:border-[#73A1FF]"
                  />
                ) : (
                  <p className="text-black text-xl">
                    {userProfile.city}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-['IBM_Plex_Mono',_monospace] text-sm text-black/70 mb-3 uppercase">
                  Insurance
                </label>
                {editingProfile ? (
                  <select
                    value={tempProfile.hasInsurance ? 'yes' : 'no'}
                    onChange={(e) => setTempProfile({...tempProfile, hasInsurance: e.target.value === 'yes'})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-4 text-lg focus:outline-none focus:border-[#73A1FF]"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                ) : (
                  <p className="text-black text-xl">
                    {userProfile.hasInsurance ? 'Yes' : 'No'}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Edit Profile Actions */}
          {editingProfile && (
            <div className="flex gap-4 mt-8">
              <button
                onClick={handleSaveProfile}
                className="px-8 py-4 bg-[#73A1FF] text-white rounded-xl font-['IBM_Plex_Mono',_monospace] text-sm hover:bg-[#73A1FF]/90 transition-colors uppercase"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancelEdit}
                className="px-8 py-4 bg-gray-200 text-black rounded-xl font-['IBM_Plex_Mono',_monospace] text-sm hover:bg-gray-300 transition-colors uppercase"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Delete Profile Section */}
        <div className="mb-12 max-w-[875px]">
          <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,126,0,0.3)] rounded-[14px] p-5">
            <h2 className="text-lg text-black mb-3">
              Delete Profile
            </h2>
            <p className="text-sm text-[rgba(0,0,0,0.8)] mb-4 leading-relaxed">
              This action cannot be undone. Deleting your profile will remove all your saved providers, care plans, and personal information.
            </p>
            <button
              onClick={handleDeleteProfile}
              className="flex items-center gap-2 px-5 py-2 bg-[#ff7e00] text-white rounded-2xl font-['IBM_Plex_Mono',_monospace] text-xs hover:bg-[#ff7e00]/90 transition-colors uppercase"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Delete Profile
            </button>
          </div>
        </div>
        </main>

        {/* Modals */}
        <ProviderModal 
          provider={selectedProvider}
          isOpen={!!selectedProvider}
          onClose={() => setSelectedProvider(null)}
        />
        
        <CarePlanModal 
          carePlan={selectedCarePlan}
          isOpen={!!selectedCarePlan}
          onClose={() => setSelectedCarePlan(null)}
        />
      </div>
    </div>
  );
}