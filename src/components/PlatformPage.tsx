import { useState } from 'react';
import imgScreenshot20250911At1107271 from "figma:asset/722ba57c46a3e59b3e750dc8239c93e6d59ce0b6.png";
import imgRectangle12 from "figma:asset/810ce3bbea53b832d80bbd5fbf9d63b24bf0860d.png";

// Platform Navigation Component
function PlatformNavigation({ onNavigate, activeSection, setActiveSection }: { 
  onNavigate?: (page: string) => void; 
  activeSection: string;
  setActiveSection: (section: string) => void;
}) {
  return (
    <div className="bg-[#73A1FF] w-80 min-h-screen p-6 text-white">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <div className="relative size-[32px]">
          <img alt="Sela Logo" className="absolute inset-0 object-cover size-full" src={imgScreenshot20250911At1107271} />
        </div>
        <h1 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg uppercase">My Sela</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2">
        <button
          onClick={() => setActiveSection('profile')}
          className={`w-full text-left p-4 rounded font-['IBM_Plex_Mono',_monospace] text-sm uppercase transition-colors ${
            activeSection === 'profile' ? 'bg-white/20' : 'hover:bg-white/10'
          }`}
        >
          My Health Profile
        </button>
        <button
          onClick={() => setActiveSection('plans')}
          className={`w-full text-left p-4 rounded font-['IBM_Plex_Mono',_monospace] text-sm uppercase transition-colors ${
            activeSection === 'plans' ? 'bg-white/20' : 'hover:bg-white/10'
          }`}
        >
          My Plans
        </button>
        <button
          onClick={() => setActiveSection('providers')}
          className={`w-full text-left p-4 rounded font-['IBM_Plex_Mono',_monospace] text-sm uppercase transition-colors ${
            activeSection === 'providers' ? 'bg-white/20' : 'hover:bg-white/10'
          }`}
        >
          MY PROVIDERS
        </button>
        <button
          onClick={() => onNavigate?.('home')}
          className="w-full text-left p-4 rounded font-['IBM_Plex_Mono',_monospace] text-sm uppercase hover:bg-white/10 transition-colors"
        >
          Back to Chat
        </button>
      </nav>
    </div>
  );
}

// Profile Section
function ProfileSection({ onClose }: { onClose: () => void }) {
  const [profileData, setProfileData] = useState({
    firstName: 'Sarah',
    lastName: 'Johnson',
    city: 'Los Angeles',
    insurance: 'Blue Cross',
    category: 'New Mom'
  });

  return (
    <div className="flex-1 bg-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-2xl uppercase">My Health Profile</h2>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
      </div>

      {/* Profile Image */}
      <div className="flex items-center gap-6 mb-8">
        <div className="relative size-24 overflow-hidden bg-gray-200">
          <img alt="Profile" className="absolute inset-0 object-cover size-full" src={imgRectangle12} />
        </div>
        <button className="bg-[#73A1FF] text-white px-4 py-2 rounded font-['IBM_Plex_Mono',_monospace] text-sm">
          Upload Photo
        </button>
      </div>

      {/* Profile Bio Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            value={profileData.firstName}
            onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#73A1FF]"
          />
        </div>
        <div>
          <label className="block font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={profileData.lastName}
            onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#73A1FF]"
          />
        </div>
        <div>
          <label className="block font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-gray-700 mb-2">
            City of Residence
          </label>
          <input
            type="text"
            value={profileData.city}
            onChange={(e) => setProfileData({ ...profileData, city: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#73A1FF]"
          />
        </div>
        <div>
          <label className="block font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-gray-700 mb-2">
            Insurance Type
          </label>
          <input
            type="text"
            value={profileData.insurance}
            onChange={(e) => setProfileData({ ...profileData, insurance: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#73A1FF]"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm text-gray-700 mb-2">
            Category Selection
          </label>
          <select
            value={profileData.category}
            onChange={(e) => setProfileData({ ...profileData, category: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#73A1FF]"
          >
            <option value="New Mom">New Mom</option>
            <option value="Cycle Seeker">Cycle Seeker</option>
            <option value="Reclaimer">Reclaimer</option>
          </select>
        </div>
      </div>

      {/* Saved Providers */}
      <div className="mb-8">
        <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg uppercase mb-4">Saved Providers</h3>
        <div className="space-y-3">
          {['Dr. Sarah Chen', 'Dr. Maria Rodriguez'].map((provider, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded">
              <span className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif]">{provider}</span>
              <button className="text-red-500 hover:text-red-700 font-['IBM_Plex_Mono',_monospace] text-sm">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* My Care Plans */}
      <div className="mb-8">
        <h3 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-lg uppercase mb-4">My Care Plans</h3>
        <div className="space-y-3">
          {['Postpartum Recovery Plan', 'Mental Health Support'].map((plan, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded">
              <span className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif]">{plan}</span>
              <button className="text-red-500 hover:text-red-700 font-['IBM_Plex_Mono',_monospace] text-sm">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Delete Account */}
      <div className="pt-8 border-t border-gray-200">
        <button className="text-red-500 hover:text-red-700 font-['IBM_Plex_Mono',_monospace] text-sm uppercase">
          Delete Account
        </button>
      </div>
    </div>
  );
}

// Plans Section
function PlansSection({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex-1 bg-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-2xl uppercase">My Plans</h2>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
      </div>

      <div className="space-y-6">
        {['Postpartum Recovery Plan', 'Mental Health Support', 'Nutritional Guidance'].map((plan, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg mb-2">{plan}</h3>
            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-gray-600 mb-4">
              Comprehensive care plan tailored to your specific needs and health goals.
            </p>
            <button className="bg-[#73A1FF] text-white px-4 py-2 rounded font-['IBM_Plex_Mono',_monospace] text-sm">
              View Details
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button className="bg-[#2F1464] text-white px-6 py-3 rounded font-['IBM_Plex_Mono',_monospace] text-sm uppercase">
          Explore More Plans
        </button>
      </div>
    </div>
  );
}

// Providers Section
function ProvidersSection({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex-1 bg-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-2xl uppercase">MY PROVIDERS</h2>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
      </div>

      <div className="space-y-6">
        {[
          { name: 'Dr. Sarah Chen', specialty: 'Gynecologist', distance: '1.2 mi' },
          { name: 'Dr. Maria Rodriguez', specialty: 'Endocrinologist', distance: '2.8 mi' },
          { name: 'Dr. Lisa Thompson', specialty: 'Postpartum Care', distance: '0.8 mi' }
        ].map((provider, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 flex items-center gap-4">
            <div className="relative size-16 overflow-hidden">
              <img alt={provider.name} className="absolute inset-0 object-cover size-full" src={imgRectangle12} />
            </div>
            <div className="flex-1">
              <h3 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg mb-1">{provider.name}</h3>
              <p className="font-['IBM_Plex_Mono',_monospace] text-sm text-gray-600 uppercase">
                {provider.specialty} • {provider.distance}
              </p>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#73A1FF] text-white px-4 py-2 rounded font-['IBM_Plex_Mono',_monospace] text-sm">
                Message
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded font-['IBM_Plex_Mono',_monospace] text-sm">
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Platform Page Component
export default function PlatformPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [activeSection, setActiveSection] = useState('profile');

  const handleClose = () => {
    onNavigate?.('chat');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <PlatformNavigation 
        onNavigate={onNavigate} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      {activeSection === 'profile' && <ProfileSection onClose={handleClose} />}
      {activeSection === 'plans' && <PlansSection onClose={handleClose} />}
      {activeSection === 'providers' && <ProvidersSection onClose={handleClose} />}
    </div>
  );
}