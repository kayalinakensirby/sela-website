import { useEffect } from 'react';
import imgRectangle6 from "figma:asset/6b0b26a055b9e7f833849f360de1cc7e3eb12d5c.png";
import imgRectangle7 from "figma:asset/91ccaaf048ef9927f58ce87d55380950956037ad.png";
import imgRectangle8 from "figma:asset/7a208be52b4a48d89f8244cb40b3da294b24edf9.png";
import imgExclude from "figma:asset/43603895f5c4987314dfd3eaa5d89f1fdbbf5892.png";
import imgExclude1 from "figma:asset/2f2199ea7606f0c95e26d329481011f03b5d9c0c.png";
import imgExclude2 from "figma:asset/eec64a2a099f8ae1d47a92b0498a7478f044b18c.png";

interface HowSelaSupportsYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStep?: number;
}

export default function HowSelaSupportsYouModal({ isOpen, onClose, selectedStep = 0 }: HowSelaSupportsYouModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const steps = [
    {
      title: "Create Free Profile",
      description: "We connect you with the best care providers.",
      image: imgRectangle6,
      icon: imgExclude,
      bgColor: "#F2E9FF"
    },
    {
      title: "Match with Trusted Providers", 
      description: "We connect you with the best care providers.",
      image: imgRectangle7,
      icon: imgExclude1,
      bgColor: "#FBBA9B"
    },
    {
      title: "Access Care Plans & Resources",
      description: "We connect you with the best care providers.",
      image: imgRectangle8,
      icon: imgExclude2,
      bgColor: "#F5ECD9"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] mx-4 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Three Stacked Sections */}
        <div className="relative w-full h-full rounded-[var(--radius-lg)] overflow-hidden">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative h-1/3 w-full overflow-hidden"
            >
              {/* Background Image */}
              <img 
                alt={step.title}
                className="absolute inset-0 object-cover size-full" 
                src={step.image} 
              />
              
              {/* Color Overlay */}
              <div 
                className="absolute inset-0"
                style={{ backgroundColor: `${step.bgColor}80` }}
              />
              
              {/* Content */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 max-w-md">
                <h3 className="font-['FONTSPRING_DEMO_-_Deca_Serif_New:Regular',_sans-serif] text-[32px] leading-[120%] text-white uppercase">
                  {step.title}
                </h3>
                
                {/* Underline */}
                <div className="h-0.5 bg-white w-[227px]" />
                
                <p className="font-['PP_Neue_Montreal:Book',_sans-serif] text-[24px] leading-[130%] text-white/90">
                  {step.description}
                </p>
              </div>
              
              {/* Icon */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                <img 
                  alt="Step Icon" 
                  className="w-24 h-24 opacity-90" 
                  src={step.icon} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}