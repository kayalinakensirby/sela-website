import React from 'react';
import svgPaths from "../imports/svg-1zbk22rere";
import imgImageSelaLogo from "figma:asset/593e929702c07c3ea84e0d4292a6079407c7d021.png";

interface SelaAIChatSidebarProps {
  onNavigate?: (page: string) => void;
  onSendMessage?: () => void;
  activeButton?: 'send' | 'calendar' | 'documents' | 'health' | null;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Icon">
          <path d={svgPaths.p1b096080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d={svgPaths.p34751d50} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
        </g>
      </svg>
    </div>
  );
}

function SendButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-[rgba(115,161,255,0.8)] hover:from-[rgba(115,161,255,0.9)] relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0px_15px_20px_-3px_rgba(0,0,0,0.15),0px_6px_8px_-4px_rgba(0,0,0,0.15)] shrink-0 size-[52.8px] to-[rgba(47,20,100,0.8)] hover:to-[rgba(47,20,100,0.9)] transition-all hover:scale-105"
      data-name="Button"
      title="Ask Sela"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[52.8px]">
        <Icon />
      </div>
    </button>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Icon">
          <path d="M16.0417 2.91667V5.83333" id="Vector" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.29167 2.91667V5.83333" id="Vector_2" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2867e040} id="Vector_3" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b606d80} id="Vector_4" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1fce1800} id="Vector_5" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CalendarButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] relative rounded-[14px] shrink-0 size-[52px] transition-all hover:scale-105"
      data-name="Button"
      title="Cycle Tracker"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[52px]">
        <Icon1 />
      </div>
    </button>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Icon">
          <path d={svgPaths.p29307700} id="Vector" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p20baf300} id="Vector_2" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5833 13.125H11.6667" id="Vector_3" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M23.3333 18.9583H11.6667" id="Vector_4" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M23.3333 24.7917H11.6667" id="Vector_5" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function DocumentsButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] relative rounded-[14px] shrink-0 size-[52px] transition-all hover:scale-105"
      data-name="Button"
      title="My Care Plans"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[52px]">
        <Icon2 />
      </div>
    </button>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Icon">
          <path d={svgPaths.p11a65070} id="Vector" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function HealthButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] relative rounded-[14px] shrink-0 size-[52px] transition-all hover:scale-105"
      data-name="Button"
      title="My Health"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[52px]">
        <Icon3 />
      </div>
    </button>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Icon">
          <path d={svgPaths.p1dd7a920} id="Vector" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M30.625 17.5H13.125" id="Vector_2" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p21698300} id="Vector_3" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function LogoutButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="basis-0 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] grow min-h-px min-w-px relative rounded-[14px] shrink-0 w-[48px] transition-all hover:scale-105"
      data-name="Button"
      title="Logout"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center relative w-[48px]">
        <Icon4 />
      </div>
    </button>
  );
}

function ImageSelaLogo() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Image (Sela Logo)">
      <img alt="Sela Logo" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageSelaLogo} style={{ filter: 'brightness(0) saturate(100%) invert(14%) sepia(71%) saturate(4346%) hue-rotate(260deg) brightness(91%) contrast(104%)' }} />
    </div>
  );
}

export default function SelaAIChatSidebar({ onNavigate, onSendMessage, activeButton }: SelaAIChatSidebarProps) {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-lg relative w-[96px] h-screen" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      
      {/* Logo at top */}
      <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip rounded-[14px] size-[48px] top-[37px]" data-name="Container">
        <ImageSelaLogo />
      </div>
      
      {/* Main navigation buttons */}
      <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-[11px] top-[113px] w-[73.688px]">
        {/* Send/Chat button */}
        <div className="content-stretch flex flex-col gap-[1.6px] h-[50px] items-center relative shrink-0 w-[54px]" data-name="Container">
          <SendButton onClick={() => onNavigate?.('chat')} />
        </div>
        
        {/* Calendar button */}
        <div className="content-stretch flex flex-col gap-[4px] h-[67px] items-center relative shrink-0 w-full" data-name="Container">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[52px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-full items-center relative w-[52px]">
              <CalendarButton onClick={() => onNavigate?.('my-providers')} />
            </div>
          </div>
        </div>
        
        {/* Documents button */}
        <div className="content-stretch flex flex-col gap-[4px] h-[67px] items-center relative shrink-0 w-full" data-name="Container">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[52px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-full items-center relative w-[52px]">
              <DocumentsButton onClick={() => onNavigate?.('my-care-plans')} />
            </div>
          </div>
        </div>
        
        {/* Health/Heart button */}
        <div className="content-stretch flex flex-col h-[52px] items-start relative shrink-0 w-[58px]" data-name="Container">
          <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-center relative shrink-0 w-full" data-name="Container">
            <HealthButton onClick={() => onNavigate?.('health-profile')} />
          </div>
        </div>
      </div>
      
      {/* Logout button at bottom */}
      <div className="absolute content-stretch flex flex-col h-[52px] items-start left-[23px] top-[646px] w-[50px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 size-[52px]" data-name="Container">
          <LogoutButton onClick={() => onNavigate?.('home')} />
        </div>
      </div>
    </div>
  );
}
