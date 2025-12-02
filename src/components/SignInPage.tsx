import { useState } from 'react';
import svgPaths from "../imports/svg-703ub5k12o";
import imgScreenshot20250911At1107271 from "figma:asset/722ba57c46a3e59b3e750dc8239c93e6d59ce0b6.png";
import imgRectangle6 from "figma:asset/6b0b26a055b9e7f833849f360de1cc7e3eb12d5c.png";

// Google Icon Component
function GoogleIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_7_1163)">
          <path d={svgPaths.p3b7c0480} fill="#1769F2" />
          <path d={svgPaths.pa5bd480} fill="#298642" />
          <path d={svgPaths.p912b200} fill="#967002" />
          <path d={svgPaths.p7df31b0} fill="#E62717" />
        </g>
        <defs>
          <clipPath id="clip0_7_1163">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// Header Component
function SignInHeader({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <header className="absolute bg-transparent z-50 left-1/2 top-6 translate-x-[-50%] w-full max-w-[1344px] px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 h-12 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="relative size-[65px]">
            <img alt="Sela Logo" className="absolute inset-0 object-cover size-full" src={imgScreenshot20250911At1107271} />
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-['IBM_Plex_Mono',_monospace] text-white/80 text-[28px] leading-8">
          <button 
            onClick={() => onNavigate('signin')}
            className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer"
          >
            My Sela
          </button>
          <button 
            onClick={() => onNavigate('community')}
            className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer"
          >
            Community
          </button>
          <button 
            onClick={() => onNavigate('providers')}
            className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer"
          >
            Providers
          </button>
        </nav>
        
        {/* Join Free Button */}
        <div className="border border-white rounded px-6 py-3">
          <button 
            onClick={() => onNavigate('signup')}
            className="text-white/80 hover:text-white font-['IBM_Plex_Mono',_monospace] text-[24px] leading-8 transition-colors bg-transparent border-none p-0 cursor-pointer"
          >
            Join Free
          </button>
        </div>
      </div>
    </header>
  );
}

// Main Sign In Form
function SignInForm({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in attempt:', { email, category, city });
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic here
    console.log('Google sign in');
  };

  return (
    <div className="absolute top-[185px] left-1/2 transform -translate-x-1/2">
      <div className="w-[563px]">
        {/* Title Section */}
        <div className="mb-10">
          <h1 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-white text-[64px] leading-[120px] mb-5">
            Sign In
          </h1>
          <p className="font-['Aileron',_sans-serif] text-white text-[18px] leading-6">
            Welcome back to Sela world!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-[28px]">
          {/* Email Field */}
          <div className="space-y-[15px]">
            <label className="block font-['Aileron',_sans-serif] text-white text-[16px] leading-6">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[46px] bg-transparent border-[0.4px] border-white px-4 py-3 text-white placeholder-white/70 font-['Aileron',_sans-serif] text-[16px] leading-6 focus:outline-none focus:border-white/90"
                required
              />
            </div>
          </div>

          {/* Category Field */}
          <div className="space-y-[15px]">
            <label className="block font-['Aileron',_sans-serif] text-white text-[16px] leading-6">
              Category
            </label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full h-[46px] bg-transparent border-[0.4px] border-white px-4 py-3 text-white font-['Aileron',_sans-serif] text-[16px] leading-6 focus:outline-none focus:border-white/90 appearance-none"
                required
              >
                <option value="" disabled className="bg-black text-white">Select Category</option>
                <option value="cycle-seeker" className="bg-black text-white">Cycle Seeker</option>
                <option value="new-mom" className="bg-black text-white">New Mom</option>
                <option value="reclaimer" className="bg-black text-white">Reclaimer</option>
                <option value="provider" className="bg-black text-white">Provider</option>
                <option value="other" className="bg-black text-white">Other</option>
              </select>
            </div>
          </div>

          {/* City of Residence Field */}
          <div className="space-y-[15px]">
            <label className="block font-['Aileron',_sans-serif] text-white text-[16px] leading-6">
              City of Residence
            </label>
            <div className="relative">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full h-[46px] bg-transparent border-[0.4px] border-white px-4 py-3 text-white placeholder-white/70 font-['Aileron',_sans-serif] text-[16px] leading-6 focus:outline-none focus:border-white/90"
                required
              />
            </div>
          </div>

          {/* Extra spacing for visual appeal */}
          <div className="py-8"></div>

          {/* Divider */}
          <div className="flex items-center gap-2 w-full">
            <div className="flex-1 h-px bg-white"></div>
            <p className="font-['Work_Sans',_sans-serif] text-white/65 text-[15px] leading-5 px-2">
              or continue with
            </p>
            <div className="flex-1 h-px bg-white"></div>
          </div>

          {/* Google Sign In Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full h-[46px] border-[0.4px] border-white bg-transparent flex items-center justify-center gap-3 hover:bg-white/10 transition-colors"
          >
            <GoogleIcon />
            <span className="font-['Work_Sans',_sans-serif] text-white text-[14px] leading-5">
              Google
            </span>
          </button>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="font-['Work_Sans',_sans-serif] text-white/65 text-[15px] leading-5">
              <span>Already registered? </span>
              <button
                type="button"
                onClick={() => onNavigate?.('signup')}
                className="underline hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer"
              >
                Log in here.
              </button>
            </p>
          </div>

          {/* Extra spacing before button */}
          <div className="py-4"></div>

          {/* Sign In Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#a1bcf2] hover:bg-[#a1bcf2]/90 text-white/80 px-6 py-4 rounded font-['IBM_Plex_Mono',_monospace] text-[24px] leading-8 transition-colors w-[153px] h-[62px] flex items-center justify-center"
            >
              SIGN IN
            </button>
          </div>

          {/* Additional spacing at bottom for visual appeal */}
          <div className="py-12"></div>
        </form>
      </div>
    </div>
  );
}

// Simple Footer Component
function SimpleFooter({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-[#f6edda] py-8">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Separator Line */}
        <div className="h-px bg-black mb-8"></div>
        
        {/* Footer Content */}
        <div className="flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <button 
              onClick={() => onNavigate?.('privacy')}
              className="font-['Work_Sans',_sans-serif] font-light text-black text-[16px] leading-6 underline hover:no-underline transition-all bg-transparent border-none p-0 cursor-pointer"
            >
              Privacy Terms
            </button>
            <p className="font-['Work_Sans',_sans-serif] font-light text-black/50 text-[16px] leading-6">
              Sela© 2025 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Sign In Page Component
export default function SignInPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="relative min-h-screen bg-[#f6edda] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          alt="Sign In Background" 
          className="absolute inset-0 object-cover w-full h-full max-w-none" 
          src={imgRectangle6} 
        />
      </div>
      
      <SignInHeader onNavigate={onNavigate!} />
      <SignInForm onNavigate={onNavigate} />
      <SimpleFooter onNavigate={onNavigate} />
    </div>
  );
}