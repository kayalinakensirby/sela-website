import { useState } from 'react';
import { X, Trash2, Heart, FileText, Send, User, LogOut, Stethoscope, Calendar, ChevronDown, ChevronUp, Clock, Target, CheckCircle } from 'lucide-react';
import imgScreenshot20250911At1107271 from "figma:asset/722ba57c46a3e59b3e750dc8239c93e6d59ce0b6.png";
import SelaAIChatSidebar from './SelaAIChatSidebar';

// Types
interface CarePlan {
  id: string;
  title: string;
  type: 'Basic' | 'Advanced' | 'Comprehensive';
  description: string;
  conversation: { speaker: string; message: string }[];
  nextSteps: string[];
  dateCreated: string;
  status: 'Active' | 'Completed' | 'In Progress';
  progress: number;
  category: string;
}

// Sample saved care plans data
const sampleSavedCarePlans: CarePlan[] = [
  {
    id: '1',
    title: 'Prenatal Care Journey',
    type: 'Comprehensive',
    description: 'A complete prenatal care plan covering all three trimesters with provider recommendations and milestone tracking.',
    conversation: [
      { speaker: 'You', message: 'I just found out I\'m pregnant and need guidance on prenatal care.' },
      { speaker: 'Sela', message: 'Congratulations! I\'ve created a comprehensive prenatal care plan tailored to your needs.' }
    ],
    nextSteps: [
      'Schedule first prenatal appointment',
      'Start taking prenatal vitamins',
      'Research birthing classes',
      'Create pregnancy journal'
    ],
    dateCreated: '2024-01-15',
    status: 'Active',
    progress: 65,
    category: 'Pregnancy & Birth'
  },
  {
    id: '2',
    title: 'Hormonal Balance Protocol',
    type: 'Advanced',
    description: 'Personalized plan to address hormonal imbalances through lifestyle changes, nutrition, and provider support.',
    conversation: [
      { speaker: 'You', message: 'I\'ve been experiencing irregular periods and mood swings.' },
      { speaker: 'Sela', message: 'I understand your concerns. Let me create a comprehensive hormonal balance plan.' }
    ],
    nextSteps: [
      'Get hormone level testing',
      'Implement stress reduction techniques',
      'Track menstrual cycle',
      'Consult with endocrinologist'
    ],
    dateCreated: '2024-01-10',
    status: 'In Progress',
    progress: 40,
    category: 'Hormonal Health'
  },
  {
    id: '3',
    title: 'Mental Wellness Support',
    type: 'Basic',
    description: 'A foundational mental health plan focusing on stress management and emotional well-being.',
    conversation: [
      { speaker: 'You', message: 'I\'ve been feeling overwhelmed and anxious lately.' },
      { speaker: 'Sela', message: 'Your mental health is so important. I\'ve created a support plan to help you.' }
    ],
    nextSteps: [
      'Practice daily meditation',
      'Schedule therapy session',
      'Join support group',
      'Implement sleep hygiene'
    ],
    dateCreated: '2024-01-05',
    status: 'Completed',
    progress: 100,
    category: 'Mental Health'
  }
];

interface MyCarePlansPageProps {
  onNavigate?: (page: string) => void;
}

// Care Plan Detail Modal
function CarePlanModal({ carePlan, isOpen, onClose }: { carePlan: CarePlan | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !carePlan) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-green-500';
      case 'In Progress': return 'text-blue-500';
      case 'Completed': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Basic': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-purple-100 text-purple-800';
      case 'Comprehensive': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xl flex items-center justify-center z-50 p-4">
      <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20">
        {/* Glass morphism background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#73A1FF]/10 via-transparent to-[#2F1464]/10" />
        
        <div className="relative z-10 p-8 bg-white rounded-3xl">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-2xl text-black">
                  {carePlan.title}
                </h2>
                <span className={`px-3 py-1 rounded-md text-mono-small uppercase ${
                  carePlan.type === 'Comprehensive' 
                    ? 'bg-green-100 text-[#016630]' 
                    : carePlan.type === 'Advanced'
                    ? 'bg-purple-100 text-[#6e11b0]'
                    : 'bg-blue-100 text-[#193cb8]'
                }`}>
                  {carePlan.type}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-black/70">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Created {carePlan.dateCreated}
                </span>
                <span className="flex items-center gap-1 text-[#00c950]">
                  <CheckCircle className="w-4 h-4" />
                  {carePlan.status}
                </span>
                <span className="flex items-center gap-1 text-black/70">
                  <Clock className="w-4 h-4" />
                  {carePlan.progress}% Complete
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-['IBM_Plex_Mono',_monospace] text-black/80 uppercase">Progress</span>
              <span className="text-sm text-black/80">{carePlan.progress}%</span>
            </div>
            <div className="w-full bg-[rgba(255,255,255,0.2)] rounded-full h-2">
              <div 
                className="bg-gradient-to-b from-[#73a1ff] to-[#2f1464] h-2 rounded-full transition-all duration-300"
                style={{ width: `${carePlan.progress}%` }}
              />
            </div>
          </div>

          <div className="mb-6 p-6 bg-white rounded-2xl border border-black/20">
            <h4 className="text-black font-['IBM_Plex_Mono',_monospace] text-sm mb-3 uppercase">Description</h4>
            <p className="text-black/90 leading-relaxed">{carePlan.description}</p>
          </div>

          {/* Conversation Preview */}
          <div className="mb-6 p-6 bg-white rounded-2xl border border-black/20">
            <h4 className="text-black font-['IBM_Plex_Mono',_monospace] text-sm mb-3 uppercase">Conversation</h4>
            <div className="space-y-3">
              {carePlan.conversation.map((message, index) => (
                <div key={index} className="flex gap-3">
                  <span className="font-['IBM_Plex_Mono',_monospace] text-xs text-[#73A1FF] uppercase min-w-[50px]">
                    {message.speaker}:
                  </span>
                  <p className="text-black/90 text-sm">{message.message}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 px-6 py-3 bg-[#73A1FF] text-white rounded-xl hover:bg-[#73A1FF]/90 transition-all font-['IBM_Plex_Mono',_monospace] text-sm uppercase">
              Continue Plan
            </button>
            <button className="px-6 py-3 bg-[rgba(255,255,255,0.7)] text-black rounded-xl hover:bg-white transition-all font-['IBM_Plex_Mono',_monospace] text-sm border border-[rgba(115,161,255,0.3)] uppercase shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
              View in Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyCarePlansPage({ onNavigate }: MyCarePlansPageProps) {
  const [savedCarePlans, setSavedCarePlans] = useState<CarePlan[]>(sampleSavedCarePlans);
  const [selectedCarePlan, setSelectedCarePlan] = useState<CarePlan | null>(null);
  const [showCarePlanModal, setShowCarePlanModal] = useState(false);
  const [plansDropdownOpen, setPlansDropdownOpen] = useState(false);

  const handleDeleteCarePlan = (planId: string) => {
    setSavedCarePlans(plans => plans.filter(p => p.id !== planId));
  };

  const handleCarePlanClick = (carePlan: CarePlan) => {
    setSelectedCarePlan(carePlan);
    setShowCarePlanModal(true);
  };

  const handleNavigateToPlans = () => {
    onNavigate?.('plans');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Basic': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-purple-100 text-purple-800';
      case 'Comprehensive': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
                My Action Plans
              </h1>
            </div>
          </div>
        </header>

        {/* Description Section */}
        <div className="px-8 pt-8 pb-4">
          <div className="bg-gradient-to-br from-[#F2E9FF]/30 to-[#73A1FF]/10 p-6 rounded-[var(--radius-md)] border border-[#73A1FF]/20">
            <h2 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-lg text-black mb-2">
              Your Personalized Action Plans
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              These are your customized action plans created by Sela to help you achieve your health goals. Each plan includes step-by-step guidance, progress tracking, and personalized recommendations tailored to your unique health journey.
            </p>
          </div>
        </div>

        {/* Main content */}
        <main className="p-8 pt-4">
          {savedCarePlans.length > 0 ? (
            <div className="space-y-4">
              {savedCarePlans.map((carePlan) => (
                <div key={carePlan.id} className="bg-white shadow-lg border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:border-[#73A1FF]/30">
                  <div className="flex items-center gap-6 p-6">
                    {/* Plan Icon/Status */}
                    <div className="w-24 h-24 rounded-[var(--radius-sm)] flex-shrink-0 bg-gradient-to-br from-[#F2E9FF] to-[#73A1FF]/20 flex items-center justify-center border-2 border-[#73A1FF]/20">
                      <Target className="w-8 h-8 text-[#73A1FF]" />
                    </div>
                    
                    {/* Plan Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-xl text-black mb-2 line-clamp-1">
                        {carePlan.title}
                      </h3>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-[var(--radius-sm)] text-xs font-['IBM_Plex_Mono',_monospace] uppercase ${getTypeColor(carePlan.type)}`}>
                          {carePlan.type}
                        </span>
                        <span className={`px-3 py-1 rounded-[var(--radius-sm)] text-xs ${getStatusColor(carePlan.status)}`}>
                          {carePlan.status}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm line-clamp-2 mb-4">{carePlan.description}</p>
                      
                      {/* Progress Section */}
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-gray-600 font-['IBM_Plex_Mono',_monospace] uppercase">Progress</span>
                            <span className="text-xs text-gray-600 font-['IBM_Plex_Mono',_monospace]">{carePlan.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-[var(--radius-sm)] h-2">
                            <div 
                              className="bg-gradient-to-r from-[#73A1FF] to-[#2F1464] h-2 rounded-[var(--radius-sm)] transition-all duration-500"
                              style={{ width: `${carePlan.progress}%` }}
                            />
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span className="font-['IBM_Plex_Mono',_monospace]">
                              {carePlan.progress === 100 ? 'Complete' : 'In Progress'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 flex-shrink-0">
                      <button
                        onClick={() => handleCarePlanClick(carePlan)}
                        className="px-6 py-3 bg-[#73A1FF] text-white rounded-[var(--radius-sm)] hover:bg-[#73A1FF]/90 transition-colors font-['IBM_Plex_Mono',_monospace] text-sm uppercase whitespace-nowrap"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleDeleteCarePlan(carePlan.id)}
                        className="px-6 py-3 bg-white border border-red-200 text-red-600 rounded-[var(--radius-sm)] hover:bg-red-50 transition-colors font-['IBM_Plex_Mono',_monospace] text-sm uppercase flex items-center justify-center gap-2"
                        title="Delete Action Plan"
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
                <Target className="w-12 h-12 text-[#73A1FF]" />
              </div>
              <h3 className="font-['Neue_Haas_Grotesk_Display_Pro',_sans-serif] text-xl text-black mb-2">
                No Action Plans Yet
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                You haven't created any action plans yet. Start a conversation with Sela to create personalized action plans tailored to your health goals.
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

      {/* Care Plan Detail Modal */}
      <CarePlanModal 
        carePlan={selectedCarePlan}
        isOpen={showCarePlanModal}
        onClose={() => {
          setShowCarePlanModal(false);
          setSelectedCarePlan(null);
        }}
      />
    </div>
  );
}