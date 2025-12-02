import { useState } from 'react';
import svgPaths from "../imports/svg-i8435uf7t2";
import imgScreenshot20250911At1107271 from "figma:asset/722ba57c46a3e59b3e750dc8239c93e6d59ce0b6.png";
import imgRectangle6 from "figma:asset/6b0b26a055b9e7f833849f360de1cc7e3eb12d5c.png";

// Google Icon Component
function GoogleIcon() {
  return (
    <div className="relative size-5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_signup)" id="Google">
          <path d={svgPaths.p3b7c0480} fill="#1769F2" id="Vector" />
          <path d={svgPaths.pa5bd480} fill="#298642" id="Vector_2" />
          <path d={svgPaths.p912b200} fill="#967002" id="Vector_3" />
          <path d={svgPaths.p7df31b0} fill="#E62717" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_signup">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// Header Component - Consistent with landing page
function Header({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <header className="absolute bg-transparent z-50 left-1/2 top-6 translate-x-[-50%] w-full max-w-[1344px] px-6">
      <div className="flex items-center justify-between">
        {/* Logo - Reduced by 50% */}
        <div className="flex items-center gap-3 h-12 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="relative size-[32px]">
            <img alt="Sela Logo" className="absolute inset-0 object-cover size-full" src={imgScreenshot20250911At1107271} />
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white/80 text-sm">
          <button 
            onClick={() => onNavigate('signin')}
            className="hover:text-white transition-colors bg-transparent border-none p-0 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white/80 text-sm cursor-pointer uppercase"
          >
            My Sela
          </button>
          <button 
            onClick={() => onNavigate('community')}
            className="hover:text-white transition-colors bg-transparent border-none p-0 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white/80 text-sm cursor-pointer uppercase"
          >
            Community
          </button>
          <button 
            onClick={() => onNavigate('providers')}
            className="hover:text-white transition-colors bg-transparent border-none p-0 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white/80 text-sm cursor-pointer uppercase"
          >
            Providers
          </button>
        </nav>
        
        {/* CTA Button */}
        <button 
          onClick={() => onNavigate('signin')}
          className="text-white/80 hover:text-white font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm transition-colors bg-transparent border-none p-0 cursor-pointer uppercase"
        >
          Sign In
        </button>
      </div>
    </header>
  );
}

// Main Sign Up Form
function SignUpForm({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    category: '',
    city: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign up:', formData);
  };

  return (
    <div className="absolute flex items-center justify-center top-[185px] left-1/2 transform -translate-x-1/2">
      <div className="w-[563px]">
        {/* Header Section */}
        <div className="flex flex-col gap-5 mb-10">
          <h1 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-white text-4xl lg:text-[64px] leading-tight text-center uppercase">
            Sign Up
          </h1>
          <div className="text-center">
            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white text-lg leading-6">
              Create your free profile to access Sela!
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          {/* Name Fields Row */}
          <div className="flex gap-10">
            {/* First Name */}
            <div className="flex flex-col gap-[15px] flex-1">
              <label className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white text-base">
                First Name
              </label>
              <div className="relative h-[46px] w-full">
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full h-full bg-transparent border border-white/40 text-white placeholder-white/70 px-4 py-3 font-['IBM_Plex_Mono',_monospace] text-base focus:outline-none focus:border-white"
                  required
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-[15px] flex-1">
              <label className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white text-base">
                Last Name
              </label>
              <div className="relative h-[46px] w-full">
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full h-full bg-transparent border border-white/40 text-white placeholder-white/70 px-4 py-3 font-['IBM_Plex_Mono',_monospace] text-base focus:outline-none focus:border-white"
                  required
                />
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-[15px]">
            <label className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white text-base">
              Email
            </label>
            <div className="relative h-[46px] w-full">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-full bg-transparent border border-white/40 text-white placeholder-white/70 px-4 py-3 font-['IBM_Plex_Mono',_monospace] text-base focus:outline-none focus:border-white"
                required
              />
            </div>
          </div>

          {/* Category Field */}
          <div className="flex flex-col gap-[15px]">
            <label className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white text-base">
              Select your Category
            </label>
            <div className="relative h-[46px] w-full">
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full h-full bg-transparent border border-white/40 text-white px-4 py-3 font-['IBM_Plex_Mono',_monospace] text-base focus:outline-none focus:border-white appearance-none cursor-pointer"
                required
              >
                <option value="" className="bg-black">Select Category</option>
                <option value="cycle-seeker" className="bg-black">Cycle Seeker</option>
                <option value="new-mom" className="bg-black">New Mom</option>
                <option value="reclaimer" className="bg-black">Reclaimer</option>
                <option value="provider" className="bg-black">Provider</option>
                <option value="other" className="bg-black">Other</option>
              </select>
            </div>
          </div>

          {/* City Field */}
          <div className="flex flex-col gap-[15px]">
            <label className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white text-base">
              City of Residence
            </label>
            <div className="relative h-[46px] w-full">
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full h-full bg-transparent border border-white/40 text-white placeholder-white/70 px-4 py-3 font-['IBM_Plex_Mono',_monospace] text-base focus:outline-none focus:border-white"
                required
              />
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 w-full my-2">
            <div className="flex-1 h-[1px] bg-white"></div>
            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white/65 text-sm px-2">
              or continue with
            </p>
            <div className="flex-1 h-[1px] bg-white"></div>
          </div>

          {/* Google Sign-Up Button */}
          <button
            type="button"
            className="w-full h-[46px] bg-transparent border border-white/40 text-white flex items-center justify-center gap-3 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-sm hover:bg-white/10 transition-colors"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-white/65 text-sm leading-5">
              Already registered?{' '}
              <button
                type="button"
                onClick={() => onNavigate?.('signin')}
                className="underline hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer"
              >
                Log in here
              </button>
            </p>
          </div>

          {/* Sign Up Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#73A1FF] text-white px-6 py-4 font-['IBM_Plex_Mono',_monospace] text-xl hover:bg-[#73A1FF]/90 transition-colors uppercase"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Simple Footer Component
function SimpleFooter() {
  return (
    <footer className="bg-[#F5ECD9] py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-['IBM_Plex_Mono',_monospace] text-sm text-black/70">
          Sela© 2025 All rights reserved
        </p>
      </div>
    </footer>
  );
}

// Main Sign Up Page Component
export default function SignUpPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-[#F5ECD9] flex flex-col">
      {/* Background Image Container */}
      <div className="relative flex-1">
        <div className="absolute inset-0">
          <img 
            alt="Sign Up Background" 
            className="absolute inset-0 object-cover size-full" 
            src={imgRectangle6} 
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <Header onNavigate={onNavigate!} />
        <SignUpForm onNavigate={onNavigate} />
      </div>
      
      <SimpleFooter />
    </div>
  );
}