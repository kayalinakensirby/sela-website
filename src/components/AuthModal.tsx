import { useState } from 'react';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup';
  onSuccess?: () => void;
}

// Google Icon Component
function GoogleIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_auth_google)">
          <path d="M18.1712 8.36792H17.5001V8.33325H10.0001V11.6666H14.7096C14.0226 13.6069 12.1763 14.9999 10.0001 14.9999C7.23887 14.9999 5.00012 12.7612 5.00012 9.99992C5.00012 7.23867 7.23887 4.99992 10.0001 4.99992C11.2746 4.99992 12.4342 5.48034 13.3221 6.26617L15.6413 3.94701C14.0888 2.4987 12.0671 1.66659 10.0001 1.66659C5.39762 1.66659 1.66675 5.39742 1.66675 9.99992C1.66675 14.6024 5.39762 18.3333 10.0001 18.3333C14.6026 18.3333 18.3334 14.6024 18.3334 9.99992C18.3334 9.44117 18.2759 8.89617 18.1712 8.36792Z" fill="#FFC107"/>
          <path d="M2.62744 6.12125L5.36536 8.12917C6.10619 6.29501 7.90036 5.00001 9.99994 5.00001C11.2744 5.00001 12.4341 5.48043 13.322 6.26626L15.6411 3.9471C14.0887 2.4988 12.067 1.6667 9.99994 1.6667C6.79911 1.6667 4.02327 3.47293 2.62744 6.12125Z" fill="#FF3D00"/>
          <path d="M10.0001 18.3333C12.0305 18.3333 14.0222 17.5258 15.5613 16.1133L13.0079 14.0008C12.1434 14.6683 11.0967 15.0008 10.0001 15.0008C7.83051 15.0008 5.98801 13.6179 5.29634 11.6891L2.58301 13.7833C3.96217 16.4816 6.76051 18.3333 10.0001 18.3333Z" fill="#4CAF50"/>
          <path d="M18.1713 8.36792H17.5001V8.33325H10.0001V11.6666H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 14.0013L13.0079 14.0008L15.5613 16.1133C15.3821 16.2758 18.3334 14.1666 18.3334 9.99992C18.3334 9.44117 18.2759 8.89617 18.1713 8.36792Z" fill="#1976D2"/>
        </g>
        <defs>
          <clipPath id="clip0_auth_google">
            <rect fill="white" height="20" width="20"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function AuthModal({ isOpen, onClose, initialMode = 'signin', onSuccess }: AuthModalProps) {
  const mode = initialMode; // No longer allow mode switching within modal
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    category: '',
    city: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${mode} attempt:`, formData);
    // Handle authentication logic here
    onClose();
    onSuccess?.();
  };

  const handleGoogleAuth = () => {
    console.log(`Google ${mode}`);
    // Handle Google authentication logic here
    onClose();
    onSuccess?.();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md mx-auto rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-['IBM_Plex_Mono',_monospace] font-semibold text-xl text-black uppercase">
            {mode === 'signin' ? 'Welcome Back' : 'Join Sela'}
          </h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">

          {/* Google Authentication */}
          <button
            type="button"
            onClick={handleGoogleAuth}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 px-4 hover:bg-gray-50 transition-colors mb-6 rounded-[var(--radius-sm)]"
          >
            <GoogleIcon />
            <span className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-gray-700">
              Continue with Google
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-gray-500 text-sm">
              or continue with email
            </span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-gray-700 text-sm mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73A1FF] focus:border-transparent rounded-[var(--radius-sm)]"
                  required
                />
              </div>
            )}

            <div>
              <label className="block font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-gray-700 text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73A1FF] focus:border-transparent rounded-[var(--radius-sm)]"
                required
              />
            </div>

            <div>
              <label className="block font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-gray-700 text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73A1FF] focus:border-transparent rounded-[var(--radius-sm)]"
                required
              />
            </div>

            {mode === 'signup' && (
              <>
                <div>
                  <label className="block font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-gray-700 text-sm mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73A1FF] focus:border-transparent rounded-[var(--radius-sm)]"
                    required
                  >
                    <option value="">Select your category</option>
                    <option value="cycle-seeker">Cycle Seeker</option>
                    <option value="new-mom">New Mom</option>
                    <option value="reclaimer">Reclaimer</option>
                    <option value="provider">Provider</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-gray-700 text-sm mb-2">
                    City of Residence
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73A1FF] focus:border-transparent rounded-[var(--radius-sm)]"
                    required
                  />
                </div>
              </>
            )}

            {mode === 'signin' && (
              <div className="text-right">
                <button
                  type="button"
                  className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-[#73A1FF] text-sm hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#73A1FF] text-white py-3 px-4 font-['IBM_Plex_Mono',_monospace] hover:bg-[#73A1FF]/90 transition-colors uppercase text-center flex items-center justify-center rounded-[var(--radius-sm)]"
            >
              {mode === 'signin' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Terms for signup */}
          {mode === 'signup' && (
            <p className="mt-4 font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-gray-600 text-xs text-center">
              By creating an account, you agree to our{' '}
              <button className="text-[#73A1FF] hover:underline">Terms of Condition</button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}