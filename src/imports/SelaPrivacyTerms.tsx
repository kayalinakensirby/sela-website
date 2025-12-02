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

function ButtonLarge1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[46px] items-center justify-center px-[24px] py-[12px] relative rounded-[10px] shrink-0 w-[454px]" data-name="buttonLarge">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['IBM_Plex_Mono:Bold',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[32px] text-[rgba(255,255,255,0.9)] text-center text-nowrap underline whitespace-pre">Privacy Terms</p>
    </div>
  );
}

function ButtonLarge2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[46px] items-center justify-center px-[24px] py-[12px] relative rounded-[10px] shrink-0 w-[246px]" data-name="buttonLarge">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[32px] text-[rgba(255,255,255,0.9)] text-center w-[468px]">{`Terms & Conditions`}</p>
    </div>
  );
}

function Frame1618871922() {
  return (
    <div className="content-stretch flex gap-[16px] h-[46px] items-center relative shrink-0 w-[474px]">
      <ButtonLarge1 />
      <ButtonLarge2 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame1618871922 />
      <div className="flex flex-col font-['Aileron:Regular',_sans-serif] justify-center leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-center text-white" style={{ width: "min-content" }}>
        <p className="mb-0">Welcome back to Sela world! Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!</p>
        <p className="mb-0">Welcome back to Sela world!</p>
        <p className="mb-0">&nbsp;</p>
        <p>Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!Welcome back to Sela world!</p>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[54px] items-start relative shrink-0 w-[798px]">
      <Frame82 />
    </div>
  );
}

function Frame1618871911() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[800px]">
      <Frame95 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="absolute content-stretch flex gap-[135px] items-center justify-center top-[291px] w-[951px]" style={{ left: "calc(10% + 136.6px)" }}>
      <Frame1618871911 />
    </div>
  );
}

export default function SelaPrivacyTerms() {
  return (
    <div className="bg-[#f6edda] relative size-full" data-name="Sela - Privacy Terms">
      <div className="absolute h-[1639px] left-[-16px] top-0 w-[1484px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle6} />
      </div>
      <PersonalOrAgencyWebsiteHeader />
      <FooterDesktop />
      <Frame97 />
    </div>
  );
}