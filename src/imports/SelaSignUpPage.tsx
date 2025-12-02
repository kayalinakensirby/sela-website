import svgPaths from "./svg-i8435uf7t2";
import imgScreenshot20250911At1107271 from "figma:asset/b6ecf31c8d37542f61d24dbe0a569417ccef703e.png";
import imgRectangle6 from "figma:asset/6b0b26a055b9e7f833849f360de1cc7e3eb12d5c.png";

function LogoAppType() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0" data-name="logo{-appType}">
      <div className="relative shrink-0 size-[65px]" data-name="Screenshot 2025-09-11 at 11.07.27 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[282.06%] left-[-98.69%] max-w-none top-[-92.92%] w-[478.05%]" src={imgScreenshot20250911At1107271} />
        </div>
      </div>
    </div>
  );
}

function PageLinks() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex font-['IBM_Plex_Mono:Regular',_sans-serif] gap-[32px] items-start justify-center leading-[32px] not-italic relative shrink-0 text-[28px] text-[rgba(255,255,255,0.8)] text-center text-nowrap w-[1018px] whitespace-pre" data-name="pageLinks">
      <p className="relative shrink-0">{`My Sela `}</p>
      <p className="relative shrink-0">Community</p>
      <p className="relative shrink-0">Providers</p>
    </div>
  );
}

function ButtonLarge() {
  return (
    <div className="bg-[rgba(115,161,255,0)] box-border content-stretch flex h-[60px] items-center justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0 w-[214px]" data-name="buttonLarge">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.8)] text-center text-nowrap whitespace-pre">Join Free</p>
    </div>
  );
}

function PersonalOrAgencyWebsiteHeader() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[24px] items-center left-1/2 px-0 py-[24px] top-[26px] translate-x-[-50%] w-[1344px]" data-name="Personal or Agency Website Header">
      <LogoAppType />
      <PageLinks />
      <ButtonLarge />
    </div>
  );
}

function Separator() {
  return (
    <div className="h-px relative shrink-0 w-[1458px]" data-name="Separator">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Link() {
  return (
    <div className="box-border content-stretch flex flex-col items-start opacity-80 pb-[0.25px] pt-0 px-0 relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Work_Sans:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] underline whitespace-pre">Privacy Terms</p>
      </div>
    </div>
  );
}

function PMrAuto() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-50 relative self-stretch shrink-0" data-name="p.mr-auto">
      <div className="flex flex-col font-['Work_Sans:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">{`Sela© 2025 All rights reserved `}</p>
      </div>
    </div>
  );
}

function DivMt6() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="div.mt-6">
      <Link />
      <PMrAuto />
    </div>
  );
}

function Frame1618871909() {
  return (
    <div className="content-stretch flex gap-[464px] items-center relative shrink-0">
      <DivMt6 />
    </div>
  );
}

function Frame1618871910() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[1440px]">
      <Separator />
      <Frame1618871909 />
    </div>
  );
}

function Section02() {
  return (
    <div className="bg-[#f6edda] box-border content-stretch flex flex-col gap-[48px] h-[188px] items-center px-0 py-[80px] relative shrink-0 w-[1450px]" data-name="Section 02">
      <Frame1618871910 />
    </div>
  );
}

function FooterDesktop() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[80px] items-end justify-center left-0 right-[4px]" data-name="Footer Desktop">
      <Section02 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-center text-white">
      <p className="font-['IBM_Plex_Mono:SemiBold',_sans-serif] leading-[120px] relative shrink-0 text-[64px] w-[538px]">Sign Up</p>
      <div className="flex flex-col font-['Aileron:Regular',_sans-serif] justify-center leading-[24px] relative shrink-0 text-[18px] w-[562px]">
        <p className="mb-0">
          Create your free profile to access Sela world.
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p>{`By signing up, you consent to our Terms & Privacy Policy and acknowledge that Sela does not replace medical advice.`}</p>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[54px] items-start relative shrink-0">
      <Frame82 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[249px]">
      <div className="flex flex-col font-['Aileron:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">First Name</p>
      </div>
      <div className="h-[46px] relative shrink-0 w-[268px]">
        <div aria-hidden="true" className="absolute border-[0.4px] border-solid border-white inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame1618871912() {
  return (
    <div className="content-stretch flex gap-[28px] items-start relative shrink-0 w-[268px]">
      <Frame83 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[255px]">
      <div className="flex flex-col font-['Aileron:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Last Name</p>
      </div>
      <div className="h-[46px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[0.4px] border-solid border-white inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame1618871913() {
  return (
    <div className="content-stretch flex gap-[28px] items-start relative shrink-0">
      <Frame85 />
    </div>
  );
}

function Frame1618871914() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-[563px]">
      <Frame1618871912 />
      <Frame1618871913 />
    </div>
  );
}

function Frame1618871915() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <div className="flex flex-col font-['Aileron:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Email</p>
      </div>
      <div className="h-[46px] relative shrink-0 w-[563px]">
        <div aria-hidden="true" className="absolute border-[0.4px] border-solid border-white inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <div className="flex flex-col font-['Aileron:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Select your Category</p>
      </div>
      <div className="h-[46px] relative shrink-0 w-[563px]">
        <div aria-hidden="true" className="absolute border-[0.4px] border-solid border-white inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <div className="flex flex-col font-['Aileron:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">City of Residence</p>
      </div>
      <div className="h-[46px] relative shrink-0 w-[563px]">
        <div aria-hidden="true" className="absolute border-[0.4px] border-solid border-white inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Divider">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 213 2">
            <path d="M0 1H213" id="Vector 32" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
      <p className="font-['Work_Sans:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.65)] text-center text-nowrap whitespace-pre">or continue with</p>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 213 2">
            <path d="M0 1H213" id="Vector 32" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Google() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Google">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_7_1163)" id="Google">
          <path d={svgPaths.p3b7c0480} fill="var(--fill-0, #1769F2)" id="Vector" />
          <path d={svgPaths.pa5bd480} fill="var(--fill-0, #298642)" id="Vector_2" />
          <path d={svgPaths.p912b200} fill="var(--fill-0, #967002)" id="Vector_3" />
          <path d={svgPaths.p7df31b0} fill="var(--fill-0, #E62717)" id="Vector_4" />
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

function ButtonOutlinedStandard() {
  return (
    <div className="relative shrink-0 w-full" data-name="buttonOutlinedStandard">
      <div aria-hidden="true" className="absolute border-[0.4px] border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center pl-[12px] pr-[56px] py-[8px] relative w-full">
          <Google />
          <p className="absolute font-['Work_Sans:Regular',_sans-serif] font-normal leading-[20px] text-[14px] text-nowrap text-white whitespace-pre" style={{ top: "calc(50% - 10px)", left: "calc(50% - 24.5px)" }}>
            Google
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckboxSmall() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="checkboxSmall">
      <p className="font-['Work_Sans:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.65)] text-center w-[560px]">
        <span>{`Already registered? `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">Log in here.</span>
      </p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-[#a1bcf2] box-border content-stretch flex h-[62px] items-center justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0 w-[153px]">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">SIGN UP</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-end relative shrink-0">
      <Frame1618871914 />
      <Frame1618871915 />
      <Frame84 />
      <Frame96 />
      <Divider />
      <ButtonOutlinedStandard />
      <CheckboxSmall />
      <Frame93 />
    </div>
  );
}

function Frame1618871911() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[563px]">
      <Frame95 />
      <Frame94 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="absolute content-stretch flex gap-[135px] items-center justify-center top-[185px]" style={{ left: "calc(20% + 155.2px)" }}>
      <Frame1618871911 />
    </div>
  );
}

export default function SelaSignUpPage() {
  return (
    <div className="bg-[#f6edda] relative size-full" data-name="Sela - Sign Up Page">
      <div className="absolute h-[1432px] left-[-16px] top-0 w-[1484px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[152.98%] left-[-1.18%] max-w-none top-[-2.02%] w-full" src={imgRectangle6} />
        </div>
      </div>
      <PersonalOrAgencyWebsiteHeader />
      <FooterDesktop />
      <Frame97 />
    </div>
  );
}