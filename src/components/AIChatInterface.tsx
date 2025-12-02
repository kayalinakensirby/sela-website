import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Mic, Paperclip, User, Heart, FileText, LogOut, ChevronRight, Phone, ExternalLink, Calendar, Stethoscope, ChevronDown, ChevronUp } from 'lucide-react';
import imgScreenshot20250911At1107271 from "figma:asset/722ba57c46a3e59b3e750dc8239c93e6d59ce0b6.png";
import imgRectangle12 from "figma:asset/810ce3bbea53b832d80bbd5fbf9d63b24bf0860d.png";
import SelaAIChatSidebar from "./SelaAIChatSidebar";

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

interface CarePlan {
  id: string;
  title: string;
  type: 'Basic' | 'Advanced';
  description: string;
  conversation: { speaker: string; message: string }[];
  nextSteps: string[];
}

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  sources?: string[];
  providers?: Provider[];
  carePlan?: CarePlan;
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
    phone: '(555) 123-4567',
    philosophyOfCare: 'I believe in providing comprehensive, compassionate care that honors each woman\'s unique journey.',
    videoUrl: 'https://example.com/video1'
  },
  {
    id: '2',
    name: 'Dr. Maria Rodriguez',
    specialty: 'Fertility Specialist',
    location: 'Austin, TX',
    bio: 'Focused on helping women achieve their family planning goals with personalized treatment.',
    credentials: 'Johns Hopkins Medical School, Fellowship in Reproductive Endocrinology',
    image: imgRectangle12,
    website: 'https://drrodriguez.com',
    phone: '(555) 234-5678',
    philosophyOfCare: 'Every woman deserves access to quality reproductive healthcare, regardless of her background.',
    videoUrl: 'https://example.com/video2'
  }
];

const sampleCarePlans: CarePlan[] = [
  {
    id: '1',
    title: 'Comprehensive PCOS Management',
    type: 'Advanced',
    description: 'A tailored approach to managing PCOS symptoms through lifestyle modifications, medical treatment, and ongoing support.',
    conversation: [
      { speaker: 'You', message: 'I\'ve been struggling with irregular periods and weight gain.' },
      { speaker: 'Sela', message: 'These symptoms could be related to PCOS. Let\'s create a comprehensive plan to address your concerns.' }
    ],
    nextSteps: [
      'Schedule blood work to check hormone levels',
      'Meet with a registered dietitian for PCOS-friendly meal planning',
      'Consider metformin therapy with your healthcare provider'
    ]
  }
];

// Enhanced Chrome-style Modal Components
function ProviderModal({ provider, isOpen, onClose }: { provider: Provider | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !provider) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xl flex items-center justify-center z-50 p-4">
      <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 overflow-hidden">
        {/* Chrome-style background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-purple-400/20 to-transparent blur-2xl" />
        
        <div className="relative z-10">
          <div className="p-8">
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-h2 text-white">Provider Details</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors border border-white/20 hover:border-white/40 text-white/80 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          
            <div className="flex gap-8 mb-8">
              <div className="relative w-32 h-32 overflow-hidden shadow-lg border border-white/20">
                <img 
                  src={provider.image} 
                  alt={provider.name}
                  className="absolute inset-0 object-cover size-full"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20" />
              </div>
              <div className="flex-1">
                <h3 className="text-h3 text-white mb-2">{provider.name}</h3>
                <p className="text-subheader text-blue-300 mb-3">{provider.specialty}</p>
                <p className="text-mono text-white/70 mb-4 uppercase">{provider.location}</p>
                <p className="text-body text-white/80 leading-relaxed">{provider.bio}</p>
              </div>
            </div>

            {/* Philosophy of Care */}
            {provider.philosophyOfCare && (
              <div className="mb-8 p-6 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl border border-white/20">
                <h4 className="text-subheader text-white mb-4">Philosophy of Care</h4>
                <p className="text-body text-white/90 leading-relaxed">{provider.philosophyOfCare}</p>
                <div className="text-mono-small text-white/60 mt-3">Max 500 characters</div>
              </div>
            )}

            {/* Video Introduction */}
            {provider.videoUrl && (
              <div className="mb-8">
                <h4 className="text-subheader text-white mb-4">Introduction Video</h4>
                <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden shadow-sm border border-white/20" style={{ aspectRatio: '16/9' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg hover:bg-white/30 hover:shadow-xl transition-all cursor-pointer border border-white/20">
                        <div className="w-0 h-0 border-l-[12px] border-r-0 border-t-[8px] border-b-[8px] border-l-white border-t-transparent border-b-transparent ml-1"></div>
                      </div>
                      <p className="text-body-small text-white/80">1-minute introduction</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          
            <div className="mb-8 p-6 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl border border-white/20">
              <h4 className="text-subheader text-white mb-3">Credentials</h4>
              <p className="text-body text-white/90 leading-relaxed">{provider.credentials}</p>
            </div>
          
            <div className="flex gap-4 flex-wrap">
              {provider.website && (
                <button className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 hover:shadow-md transition-all text-button-label border border-white/20 hover:border-white/40">
                  <ExternalLink className="w-4 h-4" />
                  Visit Website
                </button>
              )}
              {provider.phone && (
                <button className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 hover:shadow-md transition-all text-button-label border border-white/20 hover:border-white/40">
                  <Phone className="w-4 h-4" />
                  Call Doctor
                </button>
              )}
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-sm text-white rounded-xl hover:from-blue-500/90 hover:to-purple-500/90 hover:shadow-lg transition-all text-button-label border border-white/20">
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarePlanModal({ carePlan, isOpen, onClose }: { carePlan: CarePlan | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !carePlan) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xl flex items-center justify-center z-50 p-4">
      <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 overflow-hidden scrollbar-thin">
        {/* Chrome-style background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-blue-500/10" />
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-green-400/20 to-transparent blur-2xl" />
        
        <div className="relative z-10">
          <div className="p-8 bg-white rounded-3xl">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-h2 text-black mb-3">{carePlan.title}</h2>
                <span className={`px-4 py-2 rounded-2xl text-mono-small uppercase border ${
                  carePlan.type === 'Advanced' 
                    ? 'bg-purple-100 text-purple-800 border-purple-200' 
                    : 'bg-blue-100 text-blue-800 border-blue-200'
                }`}>
                  {carePlan.type}
                </span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          
            <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <p className="text-body text-gray-800 leading-relaxed">{carePlan.description}</p>
            </div>
          
            <div className="mb-8">
              <h4 className="text-subheader text-black mb-6">Conversation Summary</h4>
              <div className="space-y-4">
                {carePlan.conversation.map((msg, index) => (
                  <div key={index} className={`p-6 rounded-2xl border ${
                    msg.speaker === 'Sela' 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="text-mono-small text-gray-600 mb-2 uppercase">{msg.speaker}</div>
                    <div className="text-body text-gray-800 leading-relaxed">{msg.message}</div>
                  </div>
                ))}
              </div>
            </div>
          
            <div className="mb-8">
              <h4 className="text-subheader text-black mb-4">Recommended Next Steps</h4>
              <ul className="space-y-3">
                {carePlan.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-800 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          
            <div className="flex gap-4 flex-wrap">
              <button className="px-6 py-3 bg-[#73A1FF] text-white rounded-xl hover:bg-[#73A1FF]/90 hover:shadow-lg transition-all text-button-label">
                Start Care Plan
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all text-button-label border border-gray-300 hover:border-gray-400">
                Save to My Plans
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all text-button-label border border-gray-300 hover:border-gray-400">
                Book Provider
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AIChatInterface({ 
  onNavigate, 
  showWelcome = false, 
  onWelcomeShown 
}: { 
  onNavigate?: (page: string) => void; 
  showWelcome?: boolean;
  onWelcomeShown?: () => void;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('chat');
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [selectedCarePlan, setSelectedCarePlan] = useState<CarePlan | null>(null);
  const [providersDropdownOpen, setProvidersDropdownOpen] = useState(false);
  const [plansDropdownOpen, setPlansDropdownOpen] = useState(false);
  const [savedProviders, setSavedProviders] = useState<Provider[]>(sampleProviders.slice(0, 3)); // Mock saved providers
  const [savedCarePlans, setSavedCarePlans] = useState<CarePlan[]>(sampleCarePlans);
  const [selectedProviderForInfo, setSelectedProviderForInfo] = useState<Provider | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m Sela, your AI women\'s health companion. How can I help you today?',
      isUser: false,
      timestamp: new Date(),
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (showWelcome && onWelcomeShown) {
      const timer = setTimeout(() => {
        onWelcomeShown();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome, onWelcomeShown]);

  // Initialize component
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-dropdown]')) {
        setProvidersDropdownOpen(false);
        setPlansDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        {
          content: "I understand you're looking for information about women's health. Let me help you with that. Based on your question, I've found some relevant providers and resources.",
          providers: sampleProviders,
        },
        {
          content: "I've created a personalized care plan based on our conversation. This includes specific steps and provider recommendations tailored to your needs.",
          carePlan: sampleCarePlans[0],
        },
        {
          content: "Here's some helpful information about women's health topics. I can also connect you with trusted healthcare providers in your area.",
          sources: ["Women's Health Institute", "Mayo Clinic", "American College of Obstetricians and Gynecologists"],
        }
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse.content,
        isUser: false,
        timestamp: new Date(),
        providers: randomResponse.providers,
        carePlan: randomResponse.carePlan,
        sources: randomResponse.sources,
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickAction = (action: string) => {
    setInputValue(action);
    // Auto-send the message for better UX
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const quickActions = [
    "Tell me about PCOS symptoms",
    "Find a gynecologist near me", 
    "Help with period tracking",
    "Pregnancy planning advice"
  ];

  // Show loading state
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F2E9FF] via-[#73A1FF]/20 to-[#73A1FF]/40">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#73A1FF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-body text-[#2F1464]">Loading Sela...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Sela brand gradient background - simplified for performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F2E9FF] via-[#73A1FF]/20 to-[#73A1FF]/40">
        {/* Reduced floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#F2E9FF]/40 rounded-full blur-3xl" />
        <div className="absolute top-40 right-32 w-96 h-96 bg-[#73A1FF]/30 rounded-full blur-3xl" />
      </div>

      {/* Left sidebar menu - Figma Design */}
      <div className="relative z-40 flex-shrink-0">
        <SelaAIChatSidebar 
          onNavigate={onNavigate}
          onSendMessage={() => {
            // Focus on input when send button is clicked
            const input = document.querySelector('input[placeholder="Ask about women\'s health..."]') as HTMLInputElement;
            if (input) {
              input.focus();
            }
          }}
          activeButton={activeSection as any}
        />
      </div>

      {/* Main chat container */}
      <div className="relative z-30 flex-1 flex items-center justify-center p-6">
        <div className="glass-morphism-strong rounded-3xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl border border-white/20">
          
          {/* Chat header */}
          <div className="p-6 border-b border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-h3 text-[#2F1464]">Sela AI Assistant</h1>
                <p className="text-body-small text-[#2F1464]/70">Your personal women's health companion</p>
              </div>
              {showWelcome && (
                <div className="px-4 py-2 bg-gradient-to-r from-[#F2E9FF]/80 to-[#73A1FF]/20 rounded-xl border border-[#73A1FF]/30">
                  <span className="text-mono-small text-[#2F1464]">Welcome! 👋</span>
                </div>
              )}
            </div>
          </div>

          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin relative">
            {/* Animated background logo - simplified for performance */}
            {messages.length <= 2 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="relative w-80 h-80 opacity-5">
                  <img 
                    src={imgScreenshot20250911At1107271} 
                    alt="Sela Logo"
                    className="w-full h-full object-contain filter grayscale"
                  />
                </div>
              </div>
            )}
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] rounded-2xl p-4 ${
                  message.isUser 
                    ? 'bg-gradient-to-r from-[#73A1FF]/90 to-[#2F1464]/90 text-white' 
                    : 'bg-white/90 backdrop-blur-sm text-[#2F1464] border border-white/40 shadow-sm'
                }`}>
                  <p className="text-body leading-relaxed">{message.content}</p>
                  
                  {/* Providers section */}
                  {message.providers && (
                    <div className="mt-4 space-y-3">
                      <h4 className="text-mono-small text-[#2F1464]/80 uppercase">Recommended Providers</h4>
                      {message.providers.map((provider) => (
                        <div 
                          key={provider.id}
                          className="p-4 bg-[#F2E9FF]/60 rounded-xl border border-[#73A1FF]/30 hover:bg-[#F2E9FF]/80 transition-all cursor-pointer"
                          onClick={() => setSelectedProviderForInfo(provider)}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                              <img src={provider.image} alt={provider.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                              <h5 className="text-body text-[#2F1464]">{provider.name}</h5>
                              <p className="text-body-small text-[#2F1464]/70">{provider.specialty}</p>
                              <p className="text-mono-small text-[#2F1464]/60">{provider.location}</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-[#2F1464]/60" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Care plan section */}
                  {message.carePlan && (
                    <div className="mt-4">
                      <h4 className="text-mono-small text-[#2F1464]/80 uppercase mb-3">Generated Care Plan</h4>
                      <div 
                        className="p-4 bg-[#F2E9FF]/60 rounded-xl border border-[#73A1FF]/30 hover:bg-[#F2E9FF]/80 transition-all cursor-pointer"
                        onClick={() => setSelectedCarePlan(message.carePlan!)}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h5 className="text-body text-[#2F1464]">{message.carePlan.title}</h5>
                            <span className="text-mono-small text-[#73A1FF] uppercase">{message.carePlan.type}</span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-[#2F1464]/60" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-white/40 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-[#73A1FF] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-[#73A1FF] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-[#73A1FF] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                    <span className="text-body-small text-[#2F1464]/70">Sela is typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick actions */}
          <div className="p-6 border-t border-white/20">
            <div className="grid grid-cols-2 gap-3 mb-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  className="p-3 bg-white/70 hover:bg-white/90 rounded-xl border border-[#73A1FF]/30 hover:border-[#73A1FF]/50 transition-all text-button-label text-[#2F1464]/80 hover:text-[#2F1464] text-left hover:scale-105 shadow-sm"
                >
                  {action}
                </button>
              ))}
            </div>
            
            {/* Cycle Seeker Button */}
            <div className="mb-4">
              <button
                onClick={() => onNavigate?.('health-profile')}
                className="inline-flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-[#FBBA9B]/80 to-[#F2E9FF]/80 hover:from-[#FBBA9B]/90 hover:to-[#F2E9FF]/90 rounded-lg text-[#2F1464] transition-all hover:scale-105 shadow-sm border border-[#73A1FF]/30"
              >
                <Heart className="w-4 h-4" />
                <span className="text-mono-small">Cycle Seeker</span>
              </button>
            </div>
            
            {/* Input area */}
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about women's health..."
                  className="w-full bg-white/70 backdrop-blur-sm border border-[#73A1FF]/30 rounded-xl px-4 py-3 text-[#2F1464] placeholder-[#2F1464]/60 focus:outline-none focus:border-[#73A1FF]/60 focus:bg-white/90 transition-all text-body shadow-sm"
                />
                <button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-[#F2E9FF]/50 rounded-lg transition-colors"
                  title="Attach file"
                >
                  <Paperclip className="w-4 h-4 text-[#2F1464]/60 hover:text-[#2F1464]" />
                </button>
              </div>
              
              <button 
                className="p-3 hover:bg-white/70 rounded-xl transition-colors border border-[#73A1FF]/30 hover:border-[#73A1FF]/50 bg-white/50"
                title="Voice message"
              >
                <Mic className="w-5 h-5 text-[#2F1464]/80 hover:text-[#2F1464]" />
              </button>
              
              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="px-6 py-3 bg-gradient-to-r from-[#73A1FF]/90 to-[#2F1464]/90 hover:from-[#73A1FF] hover:to-[#2F1464] disabled:from-gray-400/50 disabled:to-gray-500/50 disabled:cursor-not-allowed rounded-xl text-white transition-all hover:scale-105 shadow-lg"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ProviderModal 
        provider={selectedProviderForInfo} 
        isOpen={!!selectedProviderForInfo} 
        onClose={() => setSelectedProviderForInfo(null)} 
      />
      
      <CarePlanModal 
        carePlan={selectedCarePlan} 
        isOpen={!!selectedCarePlan} 
        onClose={() => setSelectedCarePlan(null)} 
      />
    </div>
  );
}